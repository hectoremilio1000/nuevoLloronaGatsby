import React from "react";
import { Link } from "gatsby";

import { QuickInfoWrapper } from "../../styles/globalStyles";
import Section from "../../styles/section";

import "../../styles/globalStyles";

function ProcesoElaboracion() {
  return (
    <Section className="mt-0">
      <div>
        <h4 className="text-center tituloSection">PROCESO ANCESTRAL</h4>
        <h2 className="text-center subTituloSection">DE ELABORACIÓN</h2>
        <div className="linea"></div>
      </div>

      <QuickInfoWrapper>
        <p className="text text-center">
          Nuestro proceso de elaboración es de un mezcal ancestral, en el cual
          el agave debe de cocerse por completo en un horno de tierra, además de
          esto se requiere que el proceso de la fermentación sea en tinas de
          ayacahuite- y destilarse en alambiques de barro.
        </p>

        <p className="text text-center">
          Nuestro mezcal es 100% natural, sin ningún químico agregado a
          diferencia de otros destilados y por tanto nunca te causará malestar,
          incluso por eso le decimos que es virgen ya que no causa cruda.
        </p>
        <div>
          <p className="text text-justify">
            El proceso es:
            <ol>
              <li>
                Se escoge el mejor agave silvestre en este caso Jabalí o
                Tepeztate.
              </li>
              <li>
                Se corta la piña (Tronco corto y grueso del maguey) y se lleva
                al palenque que se a nuestro palenque que se encuentra en Santa
                Catarina Minas, Oaxaca.
              </li>
              <li>
                En este momento empieza el proceso de cocción en tierra durante
                1 día.
              </li>

              <li>
                Como es ancestral, una persona lo muele manualmente con un
                pedazo de tronco.
              </li>
              <li>
                Posteriormente se pone a fermentar (10 días) con agua los agaves
                cocidos y triturados.
              </li>
              <li>
                se destila en un alambique de barro lo que le agrega estas notas
                de sabor.
              </li>
              <li>
                Se destila en un alambique de barro lo que le agrega estas notas
                de sabor.
              </li>
              <li>El maestro mezcalero se encarga de darle la graduación.</li>
            </ol>
          </p>
        </div>
      </QuickInfoWrapper>
    </Section>
  );
}

export default ProcesoElaboracion;
