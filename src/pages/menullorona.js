import React from "react";
import { Link } from "gatsby";

import MenuEspa from "../components/Menu/MenuEspa/index";
import MenuInlges from "../components/Menu/MenuIngles/index";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { HomeHeader } from "../components/styles/headers";
import LayoutLlorona from '../components/LayoutLlorona/index';

const MenuLlorona = ()  => {
  return (
    <LayoutLlorona>
      <HomeHeader />
      <header
        className="col jumbotron-fluid pt-5"
        style={{
          backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/llorona/franquicia/IMG_0063.jpg")`,
          backgroundSize: "cover",
          height: "100vh",
          backgroundPosition: "center",
        }}
      >
        <div className="d-flex ">
          <div className="subDiv2Banner">
            <h3 className=" font-weight-bold proximamente2 text-white">
              <b>Gastronomía única</b>
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

      <section className="menu section">
        <Tabs
          defaultActiveKey="menuespanol"
          id="uncontrolled-tab-example"
          className="mb-3 justify-content-center"
          variant="pills"
        >
          <Tab eventKey="menuespanol" title="Menú Español">
            <MenuEspa />
          </Tab>
          <Tab eventKey="menuingles" title="English Menu">
            <MenuInlges />
          </Tab>
        </Tabs>
      </section>
    </LayoutLlorona>
  );
}

export default MenuLlorona;
