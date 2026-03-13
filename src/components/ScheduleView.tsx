import { DaySchedule } from '../types';
import './ScheduleView.css';

interface ScheduleViewProps {
  schedule: DaySchedule;
}

export default function ScheduleView({ schedule }: ScheduleViewProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const days = ['日', '一', '二', '三', '四', '五', '六'];
    const weekday = days[date.getDay()];
    return `${year}.${month}.${day} (${weekday})`;
  };

  return (
    <div className="schedule-view">
      <div className="schedule-header">
        <h2 className="schedule-title">
          Day {schedule.day} - {schedule.location}
        </h2>
        <p className="schedule-date">{formatDate(schedule.date)}</p>
        <div className="schedule-accommodation">
          <span className="accommodation-label">住宿</span>
          <span className="accommodation-name">{schedule.accommodation}</span>
        </div>
      </div>

      <div className="activities-list">
        {schedule.activities.map((activity, index) => (
          <div key={index} className="activity-item">
            <div className="activity-time">
              <div className="time-badge">{activity.time}</div>
            </div>
            <div className="activity-content">
              <h3 className="activity-title">{activity.title}</h3>
              {activity.description && (
                <p className="activity-description">{activity.description}</p>
              )}
              {activity.address && (
                <div className="activity-address">
                  <svg className="location-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {activity.address}
                </div>
              )}
              {activity.notes && activity.notes.length > 0 && (
                <ul className="activity-notes">
                  {activity.notes.map((note, noteIndex) => (
                    <li key={noteIndex}>{note}</li>
                  ))}
                </ul>
              )}
         {(activity.mapUrl || activity.address) && (
                <a
 href={activity.mapUrl || `https://maps.apple.com/?q=${encodeURIComponent(activity.address || activity.title)}`}                  className="map-link"
                >
                  查看地圖 →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
