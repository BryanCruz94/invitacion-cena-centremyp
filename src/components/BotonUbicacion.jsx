import { EVENT_LOCATION_COORDS } from "../utils/constants";

function BotonUbicacion({
  coords = EVENT_LOCATION_COORDS,
  label = "Ver ubicación en Google Maps",
}) {
  const handleClick = () => {
    if (!coords) return;

    // Google Maps acepta la cadena de texto con las coordenadas directamente
    const query = encodeURIComponent(coords);
    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;

    window.open(url, "_blank");
  };

  return (
    <button
      type="button"
      className="btn-location btn-block"
      onClick={handleClick}
    >
      <span className="btn-location-icon">📍</span>
      <span>{label}</span>
    </button>
  );
}

export default BotonUbicacion;
