import React from "react";
import { Link } from "gatsby";

import { QuickInfoWrapper } from "../styles/globalStyles";
import Section from "../styles/section";

import "../../styles/global.css";

const QuickInfo2 = () => (
  <Section className="mt-2 fondo2">
    <div>
      <h1 className="text-center font-weight-bold">Llorona's Culture</h1>
    </div>
    <div>
      <h4 className="text-center tituloSection2">Nuestras</h4>
      <h2 className="text-center subTituloSection1">Raíces</h2>
      <div className="linea1"></div>
    </div>

    <QuickInfoWrapper>
      <p className="text text-center texto1Home">
        La Llorona surge de la fusión de la riqueza de la cocina urbana
        contemporánea y la vida de la cantina mexicana. Nuestros sabores son
        inconfundibles y amados en todo el mundo. Nuestra{" "}
        <b>
          fiesta, nuestra energía, nuestra vibra, nuestro baile y nuestra
          gastronomía,
        </b>
      </p>
    </QuickInfoWrapper>
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <Link to="menu/menualimentos">
        <div>
          <img
            className="iconoAbajoTexto1Home"
            src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/bol.png"
            alt="Tacos deliciosos de Cochinita Pibil"
          />
          <p className="textoFotosHome">Menú Alimentos</p>
        </div>
      </Link>
      <Link to="menu/menubebidas/mixologia">
        <div>
          <img
            className="iconoAbajoTexto1Home"
            src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/tequila.png"
            alt="Pierde Almas con Mezcal"
          />
          <p className="textoFotosHome">Mixología Artesanal</p>
        </div>
      </Link>
      <Link to="menu/menubebidas/mezcalesartesanales">
        <div>
          <img
            className="iconoAbajoTexto1Home"
            src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/mezcal.png"
            alt="Mezcales y Pulque Artesanal"
          />
          <p className="textoFotosHome">
            Mezcales & Sotoles
            <br />
            Artesanales
          </p>
        </div>
      </Link>
      <Link to="menu/menubebidas/cervezasartesanales">
        <div>
          <img
            className="iconoAbajoTexto1Home"
            src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/cerveza+(1).png"
            alt="Cervezas Artesanales"
          />
          <p className="textoFotosHome">
            Cerveza Artesanal
            <br />
            Mexicana
          </p>
        </div>
      </Link>
      <Link to="menu/menubebidas/destilados">
        <div>
          <img
            className="iconoAbajoTexto1Home"
            src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/whisky.png"
            alt="Destilados"
          />
          <p className="textoFotosHome">Destilados</p>
        </div>
      </Link>
      <Link to="menu/menubebidas/sodas">
        <div>
          <img
            className="iconoAbajoTexto1Home"
            src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/taza-de-cafe.png"
            alt="Pierde Almas con Mezcal"
          />
          <p className="textoFotosHome">
            Café, Sodas <br /> y Cervezas Industriales
          </p>
        </div>
      </Link>
    </div>

    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link to="/reserva">
        <button type="button" className="buttonComponente">
          ¡Reserva ya!
        </button>
      </Link>
    </div>
  </Section>
);

export default QuickInfo2;
