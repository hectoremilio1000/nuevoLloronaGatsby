import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { HomeHeader } from "../components/styles/headers";
import MenuEspa from "../components/Menu/MenuEspa/index";
import MenuInlges from "../components/Menu/MenuIngles/index";
import LayoutLlorona from "../components/LayoutLlorona";

function MenuLlorona() {
  return (
    <LayoutLlorona>
      <HomeHeader />
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
