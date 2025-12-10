import {
  CONTACT_PHONE,
  CONTACT_WHATSAPP,
  WHATSAPP_DEFAULT_MESSAGE,
} from "../utils/constants";

function BotonesContacto({
  phone = CONTACT_PHONE,
  whatsapp = CONTACT_WHATSAPP,
  message = WHATSAPP_DEFAULT_MESSAGE,
}) {
  const buildEcuadorNumber = (raw) => {
    const digits = raw.replace(/\D/g, ""); // solo números

    // Si viene como 0999999999 -> 593999999999
    if (digits.startsWith("0") && digits.length === 10) {
      return `593${digits.substring(1)}`;
    }

    // Si ya viene con 593 delante, lo dejamos
    if (digits.startsWith("593")) {
      return digits;
    }

    // Último recurso: lo devolvemos tal cual
    return digits;
  };

  // Abrir WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = buildEcuadorNumber(whatsapp);
    const encodedText = encodeURIComponent(message);

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;
    window.open(url, "_blank");
  };

  // Abrir app de llamadas
  const callNumber = () => {
    const digits = phone.replace(/\D/g, "");
    const telLink = `tel:${digits}`;
    window.location.href = telLink;
  };

  return (
    <div className="contact-buttons-row">
      <button className="contact-btn" type="button" onClick={openWhatsApp}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="contact-icon"
        />
      </button>

      <button className="contact-btn" type="button" onClick={callNumber}>
        <img
          //src="../public/img/logo_telefono.webp"
          src="https://images.vexels.com/media/users/3/204667/isolated/lists/0be285c89368fd2d7b0499db071963ef-icono-de-llamada-azul.png"
          alt="eLlamar s"
          className="contact-icon"
        />
      </button>
    </div>
  );
}

export default BotonesContacto;
