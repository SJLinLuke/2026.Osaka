import { useState, useEffect } from 'react';
import './ShoppingList.css';

interface ShoppingItem {
  id: string;
  name: string;
  image?: string; // base64 encoded image
  notes: string;
  purchased: boolean;
  createdAt: number;
}

interface Store {
  id: string;
  name: string;
  items: ShoppingItem[];
  createdAt: number;
}

const STORAGE_KEY = 'osaka-shopping-list';

export default function ShoppingList() {
  const [stores, setStores] = useState<Store[]>([]);
  const [newStoreName, setNewStoreName] = useState('');
  const [showAddStore, setShowAddStore] = useState(false);
  const [expandedImageUrl, setExpandedImageUrl] = useState<string | null>(null);
  const [editingItem, setEditingItem] = useState<{
    storeId: string;
    itemId?: string;
  } | null>(null);
  const [itemForm, setItemForm] = useState({
    name: '',
    notes: '',
    image: '',
  });

  // 從 localStorage 載入資料
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setStores(parsed);
      } catch (e) {
        console.error('Failed to parse saved shopping list:', e);
      }
    }
  }, []);

  // 儲存到 localStorage
  useEffect(() => {
    if (stores.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stores));
    }
  }, [stores]);

  const addStore = () => {
    if (newStoreName.trim()) {
      const newStore: Store = {
        id: Date.now().toString(),
        name: newStoreName.trim(),
        items: [],
        createdAt: Date.now(),
      };
      setStores([...stores, newStore]);
      setNewStoreName('');
      setShowAddStore(false);
    }
  };

  const deleteStore = (storeId: string) => {
    if (window.confirm('確定要刪除此店家及所有商品嗎？')) {
      setStores(stores.filter(store => store.id !== storeId));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setItemForm({ ...itemForm, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const openAddItemForm = (storeId: string) => {
    setEditingItem({ storeId });
    setItemForm({ name: '', notes: '', image: '' });
  };

  const closeItemForm = () => {
    setEditingItem(null);
    setItemForm({ name: '', notes: '', image: '' });
  };

  const saveItem = () => {
    if (!editingItem || !itemForm.name.trim()) return;

    const newItem: ShoppingItem = {
      id: Date.now().toString(),
      name: itemForm.name.trim(),
      notes: itemForm.notes.trim(),
      image: itemForm.image,
      purchased: false,
      createdAt: Date.now(),
    };

    setStores(stores.map(store =>
      store.id === editingItem.storeId
        ? { ...store, items: [...store.items, newItem] }
        : store
    ));

    closeItemForm();
  };

  const toggleItemPurchased = (storeId: string, itemId: string) => {
    setStores(stores.map(store =>
      store.id === storeId
        ? {
            ...store,
            items: store.items.map(item =>
              item.id === itemId ? { ...item, purchased: !item.purchased } : item
            ),
          }
        : store
    ));
  };

  const deleteItem = (storeId: string, itemId: string) => {
    setStores(stores.map(store =>
      store.id === storeId
        ? { ...store, items: store.items.filter(item => item.id !== itemId) }
        : store
    ));
  };

  const clearPurchasedItems = (storeId: string) => {
    setStores(stores.map(store =>
      store.id === storeId
        ? { ...store, items: store.items.filter(item => !item.purchased) }
        : store
    ));
  };

  const getStoreStats = (store: Store) => ({
    total: store.items.length,
    purchased: store.items.filter(item => item.purchased).length,
    remaining: store.items.filter(item => !item.purchased).length,
  });

  return (
    <div className="shopping-list-view">
      <div className="shopping-header">
        <h2 className="shopping-title">採買清單</h2>
        <p className="shopping-subtitle">依店家分類管理想購買的商品</p>

        <button
          className="add-store-button"
          onClick={() => setShowAddStore(!showAddStore)}
        >
          {showAddStore ? '取消' : '+ 新增店家'}
        </button>

        {showAddStore && (
          <div className="add-store-form">
            <input
              type="text"
              className="store-name-input"
              placeholder="輸入店家名稱..."
              value={newStoreName}
              onChange={(e) => setNewStoreName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addStore()}
              autoFocus
            />
            <button className="confirm-button" onClick={addStore}>
              確認新增
            </button>
          </div>
        )}
      </div>

      {stores.length === 0 ? (
        <div className="empty-state">
          <p>尚未建立店家</p>
          <p className="empty-hint">點擊上方「新增店家」開始建立採買清單</p>
        </div>
      ) : (
        <div className="stores-grid">
          {stores.map(store => {
            const stats = getStoreStats(store);
            return (
              <div key={store.id} className="store-card">
                <div className="store-header">
                  <h3 className="store-name">{store.name}</h3>
                  <button
                    className="delete-store-button"
                    onClick={() => deleteStore(store.id)}
                    aria-label="刪除店家"
                  >
                    ✕
                  </button>
                </div>

                {stats.total > 0 && (
                  <div className="store-stats">
                    <span className="stat-badge">
                      {stats.purchased}/{stats.total} 已購買
                    </span>
                  </div>
                )}

                <div className="items-container">
                  {store.items.map(item => (
                    <div key={item.id} className={`item-card ${item.purchased ? 'purchased' : ''}`}>
                      {item.image && (
                        <div
                          className="item-image"
                          onClick={() => setExpandedImageUrl(item.image!)}
                        >
                          <img src={item.image} alt={item.name} />
                          <div className="image-overlay">
                            <span>點擊放大</span>
                          </div>
                        </div>
                      )}

                      <div className="item-content">
                        <div className="item-header">
                          <label className="checkbox-container">
                            <input
                              type="checkbox"
                              checked={item.purchased}
                              onChange={() => toggleItemPurchased(store.id, item.id)}
                            />
                            <span className="checkmark"></span>
                          </label>
                          <h4 className="item-name">{item.name}</h4>
                          <button
                            className="delete-item-button"
                            onClick={() => deleteItem(store.id, item.id)}
                            aria-label="刪除商品"
                          >
                            ✕
                          </button>
                        </div>

                        {item.notes && (
                          <p className="item-notes">{item.notes}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="store-actions">
                  <button
                    className="add-item-button"
                    onClick={() => openAddItemForm(store.id)}
                  >
                    + 新增商品
                  </button>
                  {stats.purchased > 0 && (
                    <button
                      className="clear-purchased-button"
                      onClick={() => clearPurchasedItems(store.id)}
                    >
                      清除已購買
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 新增/編輯商品的 Modal */}
      {editingItem && (
        <div className="modal-overlay" onClick={closeItemForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>新增商品</h3>
              <button className="modal-close" onClick={closeItemForm}>✕</button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label>商品名稱 *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="例如：白色戀人巧克力"
                  value={itemForm.name}
                  onChange={(e) => setItemForm({ ...itemForm, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>商品照片</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="file-input"
                />
                {itemForm.image && (
                  <div className="image-preview">
                    <img src={itemForm.image} alt="預覽" />
                    <button
                      className="remove-image-button"
                      onClick={() => setItemForm({ ...itemForm, image: '' })}
                    >
                      移除圖片
                    </button>
                  </div>
                )}
              </div>

              <div className="form-group">
                <label>備註</label>
                <textarea
                  className="form-textarea"
                  placeholder="例如：限定口味、數量、價格等備註..."
                  value={itemForm.notes}
                  onChange={(e) => setItemForm({ ...itemForm, notes: e.target.value })}
                  rows={3}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button className="cancel-button" onClick={closeItemForm}>
                取消
              </button>
              <button
                className="save-button"
                onClick={saveItem}
                disabled={!itemForm.name.trim()}
              >
                儲存
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 圖片放大檢視 Modal */}
      {expandedImageUrl && (
        <div className="image-modal-overlay" onClick={() => setExpandedImageUrl(null)}>
          <div className="image-modal-content">
            <button
              className="image-modal-close"
              onClick={() => setExpandedImageUrl(null)}
            >
              ✕
            </button>
            <img src={expandedImageUrl} alt="放大檢視" />
          </div>
        </div>
      )}
    </div>
  );
}
