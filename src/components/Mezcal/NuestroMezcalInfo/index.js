import React from "react";
import { Link } from "gatsby";

import { QuickInfoWrapper } from "../../styles/globalStyles";
import Section from "../../styles/section";

import "../../styles/globalStyles";

function NuestroMezcalInfo() {
  return (
    <Section className="mt-2">
      <div>
        <h4 className="text-center tituloSection">Nuestro Mezcal</h4>
        <h2 className="text-center subTituloSection">
          Agaves Jabalí & Tepeztate
        </h2>
        <div className="linea"></div>
      </div>

      <QuickInfoWrapper>
        <p className="text text-center">
          Preferimos la exclusividad, por tanto decidimos elaborar nuestro
          mezcal con agaves silvestes muy escazos siendo el Jabalí y el
          Tepeztate nuestra elección por su identidad en sus sabores y facilidad
          al paladar.
        </p>

        <div>
          <p className="text text-justify">
            <ol>
              <li>
                Jabalí: el maguey Jabalí es un agave extravagante rojo de hojas
                anchas y puntas filosas, se adorna con filos rojos y sus espinas
                parecen sierras. Endémico en el Estado de Oaxaca, árido,
                requiere poca agua y crece en las barrancas de clima árido.
              </li>
              <li>
                Tepeztate: es un Agave de la especie Marmorata, su nombre se
                deriva del vocablo “Tepetl” que en nahuatl significa montaña o
                monte, sin duda hace referencia donde se puede encontrar este
                agave, ya que generalmente se le encuentra en acantilados en el
                monte.
              </li>
            </ol>
          </p>
        </div>
      </QuickInfoWrapper>
    </Section>
  );
}

export default NuestroMezcalInfo;
