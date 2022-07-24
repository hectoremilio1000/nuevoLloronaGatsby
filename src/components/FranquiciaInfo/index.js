import React from "react";
import { Link } from "gatsby";
import { Button } from "antd";

import { QuickInfoWrapper } from "../styles/globalStyles";
import Section from "../styles/section";

import "../../styles/global.css";
function FranquiciaInfo() {
  return (
    <Section className="mt-2">
      <div>
        <h1 className="text-center font-weight-bold">Franquicias LLorona</h1>
      </div>
      <div>
        <h4 className="text-center tituloSection">Modelo</h4>
        <h2 className="text-center subTituloSection">Único</h2>
        <div className="linea"></div>
      </div>

      <QuickInfoWrapper>
        <p className="text text-justify">
          Hemos aprendido que no hay mejor momento que invertir cuando los
          tiempos son más difíciles. Ya que mientras otros ven problemas,
          nosotros vemos grandes oportunidades.
        </p>
        <p className="text text-justify">
          Con un modelo único de experiencias gastronómicas que incluyen:
          <ul>
            <li className="text text-justify">
              Producción y Venta de nuestro propio <b>Mezcal Artesanal</b>{" "}
              producido en Santa Catarina Minas, Oaxaca.
            </li>
            <li className="text text-justify">
              Diseño y Venta de <b>Playeras y Sudaderas</b> realizado por
              grandes artistas mexicanos contemporáneos.
            </li>
            <li className="text text-justify">
              Un modelo de crecimiento acelerado en ventas (growth hacking) a
              través de la
              <b> viralidad de nuestro contenido</b> en redes sociales.
            </li>
            <li className="text text-justify">
              <b>Procesos y manuales exactos </b>que han sido elaborados con
              grandes mixólogos, chefs y operadores nacionales e
              internacionales, y plasmados en documentos fáciles de leer y
              seguir para nuestro personal.
            </li>
            <li className="text text-justify">
              <b>Software</b> programado especialmente para el concepto para
              Administrar los Inventarios, así como acceder a las Ventas, Costos
              y Utilidades en tiempo real, permitiéndonos que la información sea
              muy transparente en todo momento, y que nos ayude a analizar y
              exponenciar nuestras capacidades como Modelo de Negocio .
            </li>
          </ul>
          Nos permite garantizar un
          <span className="text-uppercase font-weight-bold h4">
            {" "}
            retorno de inversión de 1 año.
          </span>
        </p>{" "}
        <h2 className="text-center subTituloSection">2 modelos de negocio</h2>
        <div className="linea"></div>
        <h2 className="text-left h4 pt-3">Restaurante - SpeakEasy</h2>
        <h2 className="text-left h5 pt-1 text-uppercase">
          Espacio requerido: 200 a 300 m2
        </h2>
        <h2 className="text-left h6 pt-1 text-uppercase">
          Monto de la inversión: 4 a 6 mdp
        </h2>
        <p className="text text-justify">
          Nuestro concepto único de mixología espectacular y recetas únicas
          gastrónomicas nos han permitido posicionarnos como un ícono en cuanto
          a Grupo Restaurantero, ya que nuestra historia se remonta no sólo a
          este concepto. La categoría de Restaurante SpeakEasy nos permite
          fusionar elementos de nuestras recetas gastronómicas únicas, con un
          concepto de SpeakEasy que explota las recetas de la mixología en un
          ambiente que contrasta lo moderno con lo tradicional.
        </p>
        <h2 className="text-left h4 pt-3">SpeakEasy</h2>
        <h2 className="text-left h5 pt-1 text-uppercase">
          Espacio requerido: 120 a 200 m2
        </h2>
        <h2 className="text-left h6 pt-1 text-uppercase">
          Monto de la inversión: 2 a 3 mdp
        </h2>
        <p className="text text-justify">
          Este modelo de negocio permite explotar espacios más pequeños, sin
          dejar a un lado lo asombroso de nuestra mixología y gastronomía.
          Permitiéndonos crear un espacio pequeño de comida y bebidas exterior,
          y un speakeasy con sensaciones musicales únicas.
        </p>
      </QuickInfoWrapper>
    </Section>
  );
}

export default FranquiciaInfo;
