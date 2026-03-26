import { useState } from 'react';
import { useServiceWorker } from '../hooks/useServiceWorker';
import './UpdatePrompt.css';

export default function UpdatePrompt() {
  const { updateAvailable, updateApp } = useServiceWorker();
  const [isUpdating, setIsUpdating] = useState(false);

  if (!updateAvailable) {
    return null;
  }

  const handleUpdate = () => {
    setIsUpdating(true);
    console.log('[UpdatePrompt] Update button clicked');
    updateApp();
  };

  return (
    <div className="update-prompt-overlay">
      <div className="update-prompt">
        <div className={`update-icon ${isUpdating ? 'updating' : ''}`}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="23 4 23 10 17 10"></polyline>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
          </svg>
        </div>
        <div className="update-content">
          <h3 className="update-title">
            {isUpdating ? '正在更新...' : '有新版本可用'}
          </h3>
          <p className="update-message">
            {isUpdating
              ? '即將重新載入頁面'
              : '發現新版本，點擊更新以獲得最新功能和修復'}
          </p>
        </div>
        <div className="update-actions">
          <button
            className="update-button"
            onClick={handleUpdate}
            disabled={isUpdating}
          >
            {isUpdating ? '更新中...' : '立即更新'}
          </button>
        </div>
      </div>
    </div>
  );
}
