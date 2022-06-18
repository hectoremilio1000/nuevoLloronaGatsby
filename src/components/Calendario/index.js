import React from "react";
import { InlineWidget } from "react-calendly";

export default function Calendario() {
  return (
    <div id="reserva" className="mt-4">
      <section className="containerCalendario">
        <div className="subcontainerCalendario">
          <h1 className="text-center tituloCalendario">
            Reserva en la Cantina más trendy de la RomaCondesa
          </h1>

          <InlineWidget url="https://calendly.com/reservaciones-14/reservaciones-llorona" />
        </div>
      </section>
    </div>
  );
}
