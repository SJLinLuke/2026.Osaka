import { useEffect, useState } from 'react';

export function useServiceWorker() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    // 檢查瀏覽器是否支援 Service Worker
    if (!('serviceWorker' in navigator)) {
      console.log('Service Worker not supported');
      return;
    }

    // 註冊 Service Worker
    const registerSW = async () => {
      try {
        const reg = await navigator.serviceWorker.register('/2026.Osaka/sw.js', {
          scope: '/2026.Osaka/'
        });

        console.log('Service Worker registered:', reg);
        setRegistration(reg);

        // 檢查更新
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;

          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // 有新版本可用
                console.log('New version available');
                setUpdateAvailable(true);
              }
            });
          }
        });

        // 定期檢查更新（每 1 分鐘）
        setInterval(() => {
          reg.update();
        }, 60000);

        // 監聽來自 Service Worker 的訊息
        navigator.serviceWorker.addEventListener('message', (event) => {
          if (event.data && event.data.type === 'SW_UPDATED') {
            console.log('SW updated to version:', event.data.version);
            setUpdateAvailable(true);
          }
        });

      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    };

    registerSW();

    // 當頁面重新獲得焦點時檢查更新
    const handleVisibilityChange = () => {
      if (!document.hidden && registration) {
        registration.update();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [registration]);

  // 更新應用程式
  const updateApp = () => {
    if (!registration || !registration.waiting) {
      return;
    }

    // 告訴等待中的 Service Worker 接管
    registration.waiting.postMessage({ type: 'SKIP_WAITING' });

    // 監聽 controlling 事件
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      // 重新載入頁面以使用新版本
      window.location.reload();
    });
  };

  return {
    updateAvailable,
    updateApp,
  };
}
