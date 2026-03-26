// Service Worker for 2026 Osaka Trip
const CACHE_VERSION = 'v1.0.8'; // 更新這個版本號會觸發更新
const CACHE_NAME = `osaka-trip-${CACHE_VERSION}`;

// 需要快取的資源
const urlsToCache = [
  '/2026.Osaka/',
  '/2026.Osaka/index.html',
];

// 安裝 Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker...', CACHE_VERSION);

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        // 強制啟動新的 Service Worker
        return self.skipWaiting();
      })
  );
});

// 啟動 Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker...', CACHE_VERSION);

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // 刪除舊的快取
            if (cacheName !== CACHE_NAME) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        // 立即控制所有頁面
        return self.clients.claim();
      })
      .then(() => {
        // 通知所有客戶端有新版本
        return self.clients.matchAll().then(clients => {
          clients.forEach(client => {
            client.postMessage({
              type: 'SW_UPDATED',
              version: CACHE_VERSION
            });
          });
        });
      })
  );
});

// 攔截網路請求
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // 只處理同源請求
  if (url.origin !== location.origin) {
    return;
  }

  // 對於 HTML 頁面，使用 Network First 策略
  if (request.mode === 'navigate' || request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // 複製回應並存入快取
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // 如果網路失敗，從快取讀取
          return caches.match(request);
        })
    );
    return;
  }

  // 對於其他資源（JS, CSS, 圖片等），使用 Cache First 策略
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // 從快取返回，但同時更新快取
          fetch(request).then((response) => {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, response);
            });
          }).catch(() => {
            // 網路失敗時忽略
          });
          return cachedResponse;
        }

        // 快取中沒有，從網路獲取
        return fetch(request).then((response) => {
          // 只快取成功的回應
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });

          return response;
        });
      })
  );
});

// 處理來自客戶端的訊息
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
