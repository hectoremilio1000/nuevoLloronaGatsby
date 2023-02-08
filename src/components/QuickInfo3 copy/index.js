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
      <div>
        <img
          className="iconoAbajoTexto1Home"
          src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/bol.png"
          alt="Tacos deliciosos de Cochinita Pibil"
        />
        <p className="textoFotosHome">Menú Alimentos</p>
      </div>
      <div>
        <img
          className="iconoAbajoTexto1Home"
          src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/tequila.png"
          alt="Pierde Almas con Mezcal"
        />
        <p className="textoFotosHome">Mixología Artesanal</p>
      </div>

      <div>
        <img
          className="iconoAbajoTexto1Home"
          src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/mezcal.png"
          alt="Pierde Almas con Mezcal"
        />
        <p className="textoFotosHome">
          Mezcales & Sotoles
          <br />
          Artesanales
        </p>
      </div>

      <div>
        <img
          className="iconoAbajoTexto1Home"
          src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/cerveza+(1).png"
          alt="Pierde Almas con Mezcal"
        />
        <p className="textoFotosHome">
          Cerveza Artesanal
          <br />
          Mexicana
        </p>
      </div>

      <div>
        <img
          className="iconoAbajoTexto1Home"
          src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/whisky.png"
          alt="Pierde Almas con Mezcal"
        />
        <p className="textoFotosHome">Destilados</p>
      </div>

      <div>
        <img
          className="iconoAbajoTexto1Home"
          src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/taza-de-cafe.png"
          alt="Pierde Almas con Mezcal"
        />
        <p className="textoFotosHome">Café, Sodas <br/> y Cervezas Industriales</p>
      </div>
    </div>

    <QuickInfoWrapper>
      <div className="subSubDiv1Banner">
        <p className="text text-center">
          La Llorona surge de la fusión de la riqueza de la cocina urbana
          contemporánea y la vida de la cantina mexicana. Aquí sentiras y
          vivirás los sabores de la vida urbana de México. Creamos para ti
          sabrosos cocteles con pulque y mezcal, Te deleitaremos con los platos
          más deliciosos de nuestra comida urbana que van desde unas buenas
          memelas, hasta tacos y hamburguesas; te seleccionamos exquisitas
          cervezas artesanales mexicanas de todo el país para que pruebes lo que
          México está exportando en este sector;
        </p>
      </div>
      <Link to="/reserva">
        <button type="button" className="buttonComponente">
          ¡Reserva ya!
        </button>
      </Link>
    </QuickInfoWrapper>
  </Section>
);

export default QuickInfo2;
