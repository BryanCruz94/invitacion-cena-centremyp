import { EVENT_INFO } from "../utils/constants";

function HeaderEvento({
  babyName = EVENT_INFO.babyName,
  eventTitle = EVENT_INFO.eventTitle,
  dateText = EVENT_INFO.dateText,
  locationText = EVENT_INFO.locationText,
}) {
  return (
    <header className="header-evento">
      {/* <span className="header-badge">{eventTitle}</span> */}

      <h1 className="header-main-title">Baby shower de {babyName}</h1>

      <p className="header-subtitle">
        Estamos muy felices de compartir contigo este momento tan especial. 💕
      </p>

      <div className="header-meta">
        <div>
          <strong>📅 </strong>
          <span>{dateText}</span>
        </div>
        <div>
          <strong>📍 </strong>
          <span>{locationText}</span>
        </div>
      </div>
    </header>
  );
}

export default HeaderEvento;
