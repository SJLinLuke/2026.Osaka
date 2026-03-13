import { useState } from 'react'
import './App.css'
import DateSelector from './components/DateSelector'
import ScheduleView from './components/ScheduleView'
import TripInfo from './components/TripInfo'
import { schedules } from './data/tripData'

type ViewMode = 'schedule' | 'info'

function App() {
  const [selectedDay, setSelectedDay] = useState(1)
  const [viewMode, setViewMode] = useState<ViewMode>('schedule')

  const currentSchedule = schedules.find(s => s.day === selectedDay) || schedules[0]

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">2026 大阪之旅</h1>
        <p className="app-subtitle">2026.3.28 ~ 2026.4.5</p>

        <nav className="app-nav">
          <button
            className={`nav-button ${viewMode === 'schedule' ? 'active' : ''}`}
            onClick={() => setViewMode('schedule')}
          >
            每日行程
          </button>
          <button
            className={`nav-button ${viewMode === 'info' ? 'active' : ''}`}
            onClick={() => setViewMode('info')}
          >
            航班住宿
          </button>
        </nav>
      </header>

      {viewMode === 'schedule' && (
        <>
          <DateSelector
            schedules={schedules}
            selectedDay={selectedDay}
            onSelectDay={setSelectedDay}
          />
          <main className="app-main">
            <ScheduleView schedule={currentSchedule} />
          </main>
        </>
      )}

      {viewMode === 'info' && (
        <main className="app-main">
          <TripInfo />
        </main>
      )}
    </div>
  )
}

export default App
