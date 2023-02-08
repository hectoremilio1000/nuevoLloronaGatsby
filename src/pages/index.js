import React, { useEffect, useRef, ReactElement } from "react";
import { Link } from "gatsby";
import QuickInfo from "../components/QuickInfo";
import { QuickInfoWrapper } from "../components/styles/globalStyles";
import { HomeHeader } from "../components/styles/headers";
import TitlebarImageList from "../components/TitlebarImageList";
import Section from "../components/styles/section";
import "../styles/global.css";
import LayoutLlorona from "../components/LayoutLlorona";
import QuickInfo2 from "../components/QuickInfo2";
import QuickInfo3 from "../components/QuickInfo3";





const IndexPage = () => {

  return (
    <main>
      <title>La Llorona</title>
      <LayoutLlorona>
        {/* <HomeHeader /> */}
        <header className="bannerHome">
          <div className="d-flex subContenedor1Banner">
            <div className="subDiv1Banner">
              <h3 className=" font-weight-bold bannerHomeTexto">
                Mexican Experience
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
        <QuickInfo className="mt-2" />
        <QuickInfo2 />
        <QuickInfo3 />

        <Section>
          <div>
            <h4 className="text-center tituloSection">Ubicación</h4>
            <h2 className="text-center subTituloSection">
              de esta gran experiencia
            </h2>
            <div className="linea"></div>
          </div>

          <QuickInfoWrapper>
            <p className="textUbicacion h4">
              Alvaro obregón 308 Roma Condesa CDMX México
            </p>

            <div className="subSubDiv1Banner">
              <Link to="/reserva">
                <button type="button" className="buttonComponente">
                  ¡Reserva ya!
                </button>
              </Link>
            </div>
          </QuickInfoWrapper>
        </Section>
      </LayoutLlorona>
    </main>
  );
};

export default IndexPage;
