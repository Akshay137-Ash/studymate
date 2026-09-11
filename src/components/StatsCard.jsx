// Reusable card for displaying dashboard statistics
function StatsCard({ title, value, subtitle, icon, colorClass }) {
  return (
    <div className={`stats-card ${colorClass || ''}`}>
      <div className="stats-card-icon">{icon}</div>
      <div className="stats-card-info">
        <p className="stats-card-title">{title}</p>
        <h3 className="stats-card-value">{value}</h3>
        {subtitle && <p className="stats-card-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}

export default StatsCard;
