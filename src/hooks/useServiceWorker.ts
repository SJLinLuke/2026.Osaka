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
      // 如果沒有等待中的 worker，直接重新載入
      console.log('[Update] No waiting worker, reloading...');
      window.location.reload();
      return;
    }

    // 先隱藏更新提示
    setUpdateAvailable(false);

    // 設置 controllerchange 監聽器（在發送訊息之前）
    const onControllerChange = () => {
      console.log('[Update] Controller changed, reloading...');
      // 重新載入頁面以使用新版本
      window.location.reload();
    };

    navigator.serviceWorker.addEventListener('controllerchange', onControllerChange, { once: true });

    // 告訴等待中的 Service Worker 接管
    console.log('[Update] Sending SKIP_WAITING message...');
    registration.waiting.postMessage({ type: 'SKIP_WAITING' });

    // 如果 2 秒內沒有觸發 controllerchange，強制重新載入
    setTimeout(() => {
      console.log('[Update] Timeout, force reloading...');
      window.location.reload();
    }, 2000);
  };

  return {
    updateAvailable,
    updateApp,
  };
}
