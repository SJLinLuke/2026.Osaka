import { useState, useEffect } from 'react';
import './Checklist.css';

interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
  createdAt: number;
}

const STORAGE_KEY = 'osaka-trip-checklist';

export default function Checklist() {
  const [items, setItems] = useState<ChecklistItem[]>([]);
  const [newItemText, setNewItemText] = useState('');

  // 從 localStorage 載入資料
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setItems(parsed);
      } catch (e) {
        console.error('Failed to parse saved checklist:', e);
      }
    }
  }, []);

  // 儲存到 localStorage
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items]);

  const addItem = () => {
    if (newItemText.trim()) {
      const newItem: ChecklistItem = {
        id: Date.now().toString(),
        text: newItemText.trim(),
        checked: false,
        createdAt: Date.now(),
      };
      setItems([...items, newItem]);
      setNewItemText('');
    }
  };

  const toggleItem = (id: string) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const clearCompleted = () => {
    setItems(items.filter(item => !item.checked));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  const stats = {
    total: items.length,
    completed: items.filter(item => item.checked).length,
    remaining: items.filter(item => !item.checked).length,
  };

  return (
    <div className="checklist-view">
      <div className="checklist-header">
        <h2 className="checklist-title">行前備忘錄</h2>
        <p className="checklist-subtitle">記錄您的旅行準備事項</p>

        {stats.total > 0 && (
          <div className="checklist-stats">
            <span className="stat-item">總計 {stats.total}</span>
            <span className="stat-divider">•</span>
            <span className="stat-item">已完成 {stats.completed}</span>
            <span className="stat-divider">•</span>
            <span className="stat-item">待辦 {stats.remaining}</span>
          </div>
        )}
      </div>

      <div className="checklist-input-section">
        <input
          type="text"
          className="checklist-input"
          placeholder="輸入新的備忘事項..."
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="add-button" onClick={addItem}>
          新增
        </button>
      </div>

      {items.length > 0 ? (
        <>
          <div className="checklist-items">
            {items.map((item) => (
              <div key={item.id} className={`checklist-item ${item.checked ? 'checked' : ''}`}>
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => toggleItem(item.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <span className="item-text">{item.text}</span>
                <button
                  className="delete-button"
                  onClick={() => deleteItem(item.id)}
                  aria-label="刪除"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {stats.completed > 0 && (
            <div className="checklist-actions">
              <button className="clear-button" onClick={clearCompleted}>
                清除已完成項目
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="empty-state">
          <p>尚無備忘事項</p>
          <p className="empty-hint">開始新增您的旅行準備清單吧！</p>
        </div>
      )}
    </div>
  );
}
