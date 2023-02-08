import React from "react";

import { HomeHeader } from "../components/styles/headers";
import { Link } from "gatsby";
import MezcalInfo from "../components/Mezcal/MezcalInfo";
import LayoutLlorona from "../components/LayoutLlorona/index";
import TitlebarImageList from "../components/Mezcal/TitlebarImageList";
import ProcesoElaboracion from "../components/Mezcal/ProcesoElaboracion/index";
import NuestroMezcalInfo from "../components/Mezcal/NuestroMezcalInfo";
import NuestroMezcalImages from "../components/Mezcal/NuestroMezcalImages";

function Mezcal() {
  return (
    <LayoutLlorona>
      <HomeHeader />
      <header
        className="col jumbotron-fluid bannerFinal2"
        style={{
          backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/llorona/banner/bannerHome+2-2.jpg")`,
          backgroundSize: "contain",
          height: "80vh",
          backgroundPosition: "center",
        }}
      >
        <div className="d-flex subContenedor2Banner">
          <div className="subDiv2Banner">
            <h3 className=" font-weight-bold proximamente2 text-white">
              Cómpralo aquí o en Nuestra Sucursal de la Roma Condesa
            </h3>

            <div className="subSubDiv1Banner">
              <a href="https://wa.me/+5215549242477">
                <button type="button" className="buttonComponente">
                  ¡Comprar!
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>

      <MezcalInfo className="mt-0" />
      <ProcesoElaboracion />
      <TitlebarImageList />
      <NuestroMezcalInfo />
      <NuestroMezcalImages />
    </LayoutLlorona>
  );
}

export default Mezcal;
