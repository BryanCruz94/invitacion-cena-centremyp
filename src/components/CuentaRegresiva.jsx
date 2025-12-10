import { useCountdown } from "../hooks/useCountdown";

function formatNumber(value) {
  return value.toString().padStart(2, "0");
}

function CuentaRegresiva() {
  const { days, hours, minutes, seconds, isCompleted } = useCountdown();
 
  if (isCompleted) {
    return (
      <div className="countdown">
        <p className="countdown-message">
          ¡Hoy es el gran día para celebrar a nuestra pequeña Niña! 🎀✨
        </p>
      </div>
    );
  }

  return (
    <div className="countdown">
      <p className="countdown-label">Falta muy poco para el gran día</p>
      <div className="countdown-grid">
        <div className="countdown-item">
          <span className="countdown-value">{formatNumber(days)}</span>
          <span className="countdown-unit">Días</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{formatNumber(hours)}</span>
          <span className="countdown-unit">Horas</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{formatNumber(minutes)}</span>
          <span className="countdown-unit">Min</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{formatNumber(seconds)}</span>
          <span className="countdown-unit">Seg</span>
        </div>
      </div>
    </div>
  );
}

export default CuentaRegresiva;
