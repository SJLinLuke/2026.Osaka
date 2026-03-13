import { DaySchedule } from '../types';
import './DateSelector.css';

interface DateSelectorProps {
  schedules: DaySchedule[];
  selectedDay: number;
  onSelectDay: (day: number) => void;
}

export default function DateSelector({ schedules, selectedDay, onSelectDay }: DateSelectorProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}`;
  };

  const getDayOfWeek = (dateString: string) => {
    const days = ['日', '一', '二', '三', '四', '五', '六'];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  return (
    <div className="date-selector">
      <div className="date-list">
        {schedules.map((schedule) => (
          <button
            key={schedule.day}
            className={`date-item ${selectedDay === schedule.day ? 'active' : ''}`}
            onClick={() => onSelectDay(schedule.day)}
          >
            <div className="date-day">Day {schedule.day}</div>
            <div className="date-number">{formatDate(schedule.date)}</div>
            <div className="date-weekday">({getDayOfWeek(schedule.date)})</div>
            <div className="date-location">{schedule.location}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
