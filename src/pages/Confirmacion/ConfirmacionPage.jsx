import { Link } from "react-router-dom";
import CardLayout from "../../components/layout/CardLayout";
import Section from "../../components/layout/Section";
import { useRsvpForm } from "../../hooks/useRsvpForm";

function ConfirmacionPage() {
  const {
    form,
    isSubmitting,
    error,
    success,
    handleChange,
    handleSubmit,
  } = useRsvpForm();

  const isAttending = form.attendance === "Si";
  const isNotAttending = form.attendance === "No";

  return (
    <CardLayout>
      <div className="card-content">
        <Section>
          <h1 className="header-main-title">Confirmar asistencia 🎄</h1>
          <p style={{ marginTop: "0.5rem" }}>
            Gracias por acompañarnos en este importante evento.{" "}
            Por favor, completa estos datos para organizar todo.
          </p>
        </Section>

        <Section title="Tus datos">
          <form onSubmit={handleSubmit} className="rsvp-form">
            <div className="form-field">
              <label htmlFor="name">Nombre completo</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Ej: Bryan Cruz y Familia"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>¿Podrás asistir?</label>
              <div className="attendance-options">
                <label
                  className={`attendance-option ${isAttending ? "is-selected" : ""
                    }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="Si"
                    checked={form.attendance === "Si"}
                    onChange={handleChange}
                  />
                  <span>Sí, asistiré</span>
                </label>

                <label
                  className={`attendance-option ${isNotAttending ? "is-selected" : ""
                    }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="No"
                    checked={form.attendance === "No"}
                    onChange={handleChange}
                  />
                  <span>No podré asistir</span>
                </label>
              </div>
            </div>

            {isAttending && (
              <>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="adults">Adultos</label>
                    <input
                      id="adults"
                      name="adults"
                      type="number"
                      min="0"
                      value={form.adults}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="kids">Niños (Entre 2 y 12 años)</label>
                    <input
                      id="kids"
                      name="kids"
                      type="number"
                      min="0"
                      value={form.kids}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Teléfono de contacto</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Ej: 0999999999"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="notes">
                    ¿Hay algo que debamos saber sobre tu asistencia?
                    <span style={{ fontWeight: "normal" }}>
                      {" "}
                      (opcional)
                    </span>
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows="3"
                    placeholder="Ej: Llegaré un poco tarde."
                    value={form.notes}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            {isNotAttending && (
              <p className="attendance-message">
                Sentimos mucho que no puedas acompañarnos ese día, pero agradecemos
                de corazón tu tiempo.
              </p>
            )}

            {error && (
              <p className="form-message form-message-error">
                {error}
              </p>
            )}
            {success && (
              <p className="form-message form-message-success">
                ¡Gracias! Tu respuesta quedó registrada. Ya puedes regresar a la invitación.
              </p>
            )}

            <button
              type="submit"
              className="btn-primary btn-block"
              disabled={isSubmitting}
              style={{ marginTop: "1rem" }}
            >
              {isSubmitting ? "Enviando..." : "Enviar respuesta"}
            </button>
          </form>
        </Section>

        <Section>
          <Link to="/" className="btn-secondary btn-block">
            Volver a la invitación
          </Link>
        </Section>
      </div>
    </CardLayout>
  );
}

export default ConfirmacionPage;
