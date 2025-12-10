import CardLayout from "../../components/layout/CardLayout";
import Section from "../../components/layout/Section";
import HeaderEvento from "../../components/HeaderEvento";
import BotonConfirmar from "../../components/BotonConfirmar";
import BotonUbicacion from "../../components/BotonUbicacion";
import CuentaRegresiva from "../../components/CuentaRegresiva";
import BotonesContacto from "../../components/BotonesContacto";
import HeroInvitacion from "../../components/HeroInvitacion";

function InvitacionPage() {
  return (
    <CardLayout>
      {/* HERO con imagen eco2 ocupando todo el ancho */}
      <HeroInvitacion />
      {/* <HeaderEvento /> */}


      {/* Contenido con padding interno */}
      <div className="card-content">
        <Section>
          <p className="invitation-intro">
            Celebremos juntos la magia de la Navidad, compartiendo alegría, gratitud y buenos momentos.
            Me complace invitarle a un agasajo navideño y juntos brindaremos por la paz, la unión y sobre todo un próspero año nuevo.

          </p>
        </Section>

        <Section title="Cómo llegar">
          <p className="section-text">
            El agasajo navideño se realizará en el lugar indicado en el mapa. Usa
            el siguiente botón para abrir la ubicación en Google Maps.
          </p>
          <BotonUbicacion />
        </Section>

        <Section title="¿Te animas a venir?">
          <p className="section-text">
            Ayúdanos confirmando tu asistencia para preparar cada detalle.
          </p>
          <BotonConfirmar />
        </Section>


        <Section title="Cuenta regresiva">
          <CuentaRegresiva />
        </Section>

        <Section title="Si tienes alguna duda, no dudes en contactarme">
          <BotonesContacto />
          <p className="section-text">
            CENTREMYP te desea unas felices fiestas y próspero año nuevo.
          </p>
        </Section>
      </div>
    </CardLayout>
  );
}

export default InvitacionPage;


