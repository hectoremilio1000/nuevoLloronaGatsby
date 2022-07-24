import React from "react";
import { Link } from "gatsby";

import { QuickInfoWrapper } from "../../styles/globalStyles";
import Section from "../../styles/section";

import "../../styles/globalStyles";

const MezcalInfo = () => (
  <Section className="mt-2">
    <div>
      <h1 className="text-center font-weight-bold">Mezcal Llorona</h1>
    </div>
    <div>
      <h4 className="text-center tituloSection">Mezcal</h4>
      <h2 className="text-center subTituloSection">Nuestro</h2>
      <div className="linea"></div>
    </div>

    <QuickInfoWrapper>
      <p className="text text-center">
        La llorona es una canción escrita en la comunidad zapoteca del Istmo de
        Tehuantepec, Oaxaca; cuenta la historia sobre un joven de ese lugar
        quien fue a una fiesta en la comunidad de Juchitán y allí vio a una
        hermosa chica que salía de la iglesia vistiendo un bello huipil.
      </p>

      <p className="text text-center">
        Se enamoró de ella, se esforzó en la conquista y logró casarse. Fueron
        felices pero al poco tiempo los vientos de la revolución soplaron en
        Oaxaca.
      </p>

      <p className="text text-center">
        Antes de irse a la guerra, el marido le dijo a su amada que el cielo
        competía con su sonrisa pero que la guerra lo estaba llamando porque la
        paz del país había sido robada pero que nunca dejaría de amarla.
      </p>

      <p className="text text-center">
        En la despedida la esposa lloraba y lloraba pensando que no volvería a
        ver a su marido y, entonces, él la llamó: mi “Llorona”.
      </p>

      <p className="text text-center">
        En honor a esta Leyenda elaboramos un sabor que se remonta a 500 años de
        tradición en la elaboración del elixir ancestral llamado “mezcal
        minero”, haciendo alusión al nombre de la población donde lo producimos
        y el cuál se caracteriza por su elaboración a mano y su doble
        destilación en olla de barro.
      </p>
    </QuickInfoWrapper>
    <div className="subSubDiv1Banner">
      <a href="https://wa.me/+5215549242477">
        <button type="button" className="buttonComponente">
          ¡Ordenar ya!
        </button>
      </a>
    </div>
  </Section>
);

export default MezcalInfo;
