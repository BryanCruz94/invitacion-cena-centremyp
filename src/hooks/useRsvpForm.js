import { useState } from "react";
import { sendRsvp } from "../services/rsvpService";

const initialFormState = {
  name: "",
  attendance: "", // "Si" | "No"
  adults: "1",
  kids: "0",
  phone: "",
  notes: "",
};

export function useRsvpForm() {
  const [form, setForm] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function isValidPhone(phone) {
    // Debe empezar con 0 y tener exactamente 10 dígitos
    const phoneRegex = /^0\d{9}$/;
    return phoneRegex.test(phone);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSuccess(false);

    if (!form.name.trim()) {
      setError("Por favor, escribe tu nombre.");
      return;
    }

    if (!form.attendance) {
      setError("Por favor, indícanos si podrás asistir o no.");
      return;
    }

    // Solo pedimos teléfono válido si SÍ asiste
    if (form.attendance === "Si") {
      if (!form.phone.trim()) {
        setError("Por favor, escribe tu número de teléfono.");
        return;
      }
      if (!isValidPhone(form.phone.trim())) {
        setError("El teléfono debe tener 10 dígitos, empezar con 0 y no llevar espacios.");
        return;
      }
    }

    try {
      setIsSubmitting(true);
      await sendRsvp(form);
      setSuccess(true);
      setForm(initialFormState);
    } catch (err) {
      console.error(err);
      setError(err.message || "Ocurrió un error al enviar tu confirmación.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    form,
    isSubmitting,
    error,
    success,
    handleChange,
    handleSubmit,
  };
}
