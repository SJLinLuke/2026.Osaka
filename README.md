# 2026 大阪旅遊手冊

這是一個使用 React + TypeScript 建立的旅遊手冊網站，部署在 GitHub Pages 上。

## 技術棧

- React 18
- TypeScript
- Vite
- GitHub Pages

## 開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置專案
npm run build

# 預覽建置結果
npm run preview
```

## 部署

當你推送代碼到 `main` 分支時，GitHub Actions 會自動建置並部署網站到 GitHub Pages。

## 設定 GitHub Pages

1. 前往你的 repository 設定頁面
2. 找到 "Pages" 選項
3. 在 "Source" 中選擇 "GitHub Actions"
4. 推送代碼後，等待 Actions 完成部署

網站將會部署在：`https://sjlinluke.github.io/2026.Osaka/`
