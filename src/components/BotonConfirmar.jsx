import { Link } from "react-router-dom";

function BotonConfirmar({ label = "Confirmar asistencia" }) {
  return (
    <Link to="/confirmacion" className="btn-primary btn-block">
      {label}
    </Link>
  );
}

export default BotonConfirmar;
