import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import QuickInfo from "../components/QuickInfo";
import { QuickInfoWrapper } from "../components/styles/globalStyles";
import { HomeHeader } from "../components/styles/headers";
import TitlebarImageList from "../components/TitlebarImageList";
import Section from "../components/styles/section";
import "../styles/global.css";

const IndexPage = () => {
  return (
    <main>
      <title>La Llorona</title>
      <Layout>
        <HomeHeader />
        <header
          className="col jumbotron-fluid bannerFinal"
          style={{
            backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/llorona/HAMBURGUESA_jack_suizo.JPG")`,
            backgroundSize: "cover",
            height: "100vh",
            backgroundPosition: "center",
          }}
        >
          <div className="d-flex subContenedor1Banner">
            <div className="subDiv1Banner">
              <h3 className=" font-weight-bold proximamente">
                Las mejores <b>Hamburguesas</b> de CDMX
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
        <TitlebarImageList />
        <Section>
          <div>
            <h4 className="text-center tituloSection">Ubicación</h4>
            <h2 className="text-center subTituloSection">
              de esta gran experiencia
            </h2>
            <div className="linea"></div>
          </div>
        </Section>
        <QuickInfoWrapper>
          <p className="textUbicacion">
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
      </Layout>
    </main>
  );
};

export default IndexPage;
