import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1>2026 大阪旅遊手冊</h1>
        <div className="card">
          <p>歡迎來到你的旅遊指南網站</p>
          <button onClick={() => setCount((count) => count + 1)}>
            測試計數器: {count}
          </button>
        </div>
        <p className="info">
          準備好開始規劃你的大阪之旅了嗎？
        </p>
      </div>
    </>
  )
}

export default App
