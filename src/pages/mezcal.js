import React from "react";

import { HomeHeader } from "../components/styles/headers";
import { Link } from "gatsby";
import MezcalImage from "../components/MezcalImage";
import MezcalInfo from "../components/MezcalInfo/index";
import LayoutLlorona from "../components/LayoutLlorona/index";

function Mezcal() {
  return (
    <LayoutLlorona>
      <HomeHeader />
      <header
        className="col jumbotron-fluid bannerFinal2"
        style={{
          backgroundImage: `url("https://pbs.twimg.com/media/CKSh8S2W8AEv0jE?format=jpg&name=large")`,
          backgroundSize: "cover",
          height: "80vh",
          backgroundPosition: "center",
        }}
      >
        <div className="d-flex subContenedor2Banner">
          <div className="subDiv2Banner">
            <h3 className=" font-weight-bold proximamente2 text-white">
              Mezcal Llorona <b>Próximamente</b> cómpralo aquí
            </h3>

            <div className="subSubDiv1Banner">
              <Link to="/reserva">
                <button type="button" className="buttonComponente">
                  ¡Reserva ya!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <MezcalInfo className="mt-2" />
      <MezcalImage />
    </LayoutLlorona>
  );
}

export default Mezcal;
