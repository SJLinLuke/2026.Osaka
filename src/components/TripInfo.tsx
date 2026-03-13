import { flights, accommodations } from '../data/tripData';
import './TripInfo.css';

export default function TripInfo() {
  const totalCost = accommodations.reduce((sum, acc) => sum + acc.cost, 0);
  const costPerPerson = totalCost / 4;

  return (
    <div className="trip-info">
      <section className="info-section">
        <h2 className="section-title">航班資訊</h2>
        <div className="flights-container">
          {flights.map((flight, index) => (
            <div key={index} className="flight-card">
              <div className="flight-direction">{flight.direction}</div>
              <div className="flight-details">
                <div className="flight-row">
                  <span className="label">日期</span>
                  <span className="value">{flight.date}</span>
                </div>
                <div className="flight-row">
                  <span className="label">時間</span>
                  <span className="value">{flight.time}</span>
                </div>
                <div className="flight-row">
                  <span className="label">航空</span>
                  <span className="value">{flight.airline}</span>
                </div>
                <div className="flight-row">
                  <span className="label">航班</span>
                  <span className="value">{flight.flightNumber}</span>
                </div>
                <div className="flight-route">{flight.route}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="info-section">
        <h2 className="section-title">住宿資訊</h2>
        <div className="accommodations-container">
          {accommodations.map((acc, index) => (
            <div key={index} className="accommodation-card">
              <div className="accommodation-header">
                <span className="nights-badge">{acc.nights} 晚</span>
                <span className="location-badge">{acc.location}</span>
              </div>
              <h3 className="accommodation-name">{acc.name}</h3>
              <div className="accommodation-cost">
                TWD {acc.cost.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
        <div className="cost-summary">
          <div className="summary-row">
            <span>總住宿費用</span>
            <span className="total-cost">TWD {totalCost.toLocaleString()}</span>
          </div>
          <div className="summary-row per-person">
            <span>每人平均</span>
            <span className="cost-per-person">TWD {Math.round(costPerPerson).toLocaleString()}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
