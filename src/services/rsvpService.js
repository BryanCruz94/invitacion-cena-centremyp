import apiClient from "./apiClient";
import { EVENT_ID } from "../utils/constants";

export async function sendRsvp({ name, adults, kids, phone, attendance, notes }) {
  const isAttending = attendance === "Si";

  const payload = {
    // Nombres EXACTOS que espera el backend
    nombreInvitado: name,
    confirmaAsistencia: attendance, // "Si" | "No"
    cantidadAdultos: isAttending ? Number(adults) || 0 : 0,
    cantidadNinos: isAttending ? Number(kids) || 0 : 0,
    telefonoContacto: isAttending ? phone : "",
    observaciones: notes || "",
  };

  return apiClient(`/api/rsvp/${EVENT_ID}`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
