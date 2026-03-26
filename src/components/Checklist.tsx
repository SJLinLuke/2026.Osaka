import { useState, useEffect } from 'react';
import './Checklist.css';

interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
  createdAt: number;
}

const STORAGE_KEY = 'osaka-trip-checklist';
const FIXED_CHECKLIST_KEY = 'osaka-trip-fixed-checklist';

// 固定的出發前檢查清單
const DEFAULT_FIXED_ITEMS = [
  '護照（確認有效期限 ≥ 6 個月）',
  '簽證 / 入境許可（VJW）',
  '機票（電子票或截圖）',
  '台灣身分證',
  '信用卡、日幣、台幣2000',
  '手機、充電線、行動電源',
  '所有衣物',
  '隱形眼鏡 / 眼鏡',
  '盥洗用品',
];

export default function Checklist() {
  const [items, setItems] = useState<ChecklistItem[]>([]);
  const [fixedItems, setFixedItems] = useState<ChecklistItem[]>([]);
  const [newItemText, setNewItemText] = useState('');

  // 從 localStorage 載入資料
  useEffect(() => {
    // 載入自訂清單
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setItems(parsed);
      } catch (e) {
        console.error('Failed to parse saved checklist:', e);
      }
    }

    // 載入固定清單
    const savedFixed = localStorage.getItem(FIXED_CHECKLIST_KEY);
    if (savedFixed) {
      try {
        const parsed = JSON.parse(savedFixed);
        setFixedItems(parsed);
      } catch (e) {
        console.error('Failed to parse saved fixed checklist:', e);
        // 如果載入失敗，使用預設值
        initializeFixedItems();
      }
    } else {
      // 第一次使用，初始化固定清單
      initializeFixedItems();
    }
  }, []);

  // 初始化固定清單
  const initializeFixedItems = () => {
    const initialItems = DEFAULT_FIXED_ITEMS.map((text, index) => ({
      id: `fixed-${index}`,
      text,
      checked: false,
      createdAt: Date.now(),
    }));
    setFixedItems(initialItems);
  };

  // 儲存自訂清單到 localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  // 儲存固定清單到 localStorage
  useEffect(() => {
    if (fixedItems.length > 0) {
      localStorage.setItem(FIXED_CHECKLIST_KEY, JSON.stringify(fixedItems));
    }
  }, [fixedItems]);

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

  const toggleFixedItem = (id: string) => {
    setFixedItems(fixedItems.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const clearCompleted = () => {
    setItems(items.filter(item => !item.checked));
  };

  const resetFixedChecklist = () => {
    if (window.confirm('確定要重置固定清單嗎？所有勾選狀態將被清除。')) {
      initializeFixedItems();
    }
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

  const fixedStats = {
    total: fixedItems.length,
    completed: fixedItems.filter(item => item.checked).length,
    remaining: fixedItems.filter(item => !item.checked).length,
  };

  return (
    <div className="checklist-view">
      <div className="checklist-header">
        <h2 className="checklist-title">行前備忘錄</h2>
        <p className="checklist-subtitle">記錄您的旅行準備事項</p>
      </div>

      {/* 固定的出發前檢查清單 */}
      <div className="fixed-checklist-section">
        <div className="fixed-checklist-header">
          <h3 className="section-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11l3 3L22 4"></path>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>
            出發前檢查清單
          </h3>
          <button className="reset-button" onClick={resetFixedChecklist} title="重置清單">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="23 4 23 10 17 10"></polyline>
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
            </svg>
            重置
          </button>
        </div>

        {fixedStats.total > 0 && (
          <div className="fixed-stats">
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: `${(fixedStats.completed / fixedStats.total) * 100}%` }}
              ></div>
            </div>
            <span className="progress-text">
              {fixedStats.completed} / {fixedStats.total} 已完成
            </span>
          </div>
        )}

        <div className="fixed-checklist-items">
          {fixedItems.map((item) => (
            <div key={item.id} className={`fixed-checklist-item ${item.checked ? 'checked' : ''}`}>
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleFixedItem(item.id)}
                />
                <span className="checkmark"></span>
              </label>
              <span className="item-text">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 自訂備忘錄區塊 */}
      <div className="custom-checklist-section">
        <div className="section-header">
          <h3 className="section-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            自訂備忘錄
          </h3>
          {stats.total > 0 && (
            <div className="custom-stats">
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
            <p>尚無自訂備忘事項</p>
            <p className="empty-hint">開始新增您的客製化準備清單吧！</p>
          </div>
        )}
      </div>
    </div>
  );
}
