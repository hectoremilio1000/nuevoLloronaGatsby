import React from "react";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ImagenMenu from "../ImagenMenu";

import menuCantinero from "../../../data/imagenes/MenuIngles/menucantinerofrente061022INGLES.jpg";
import menuHamburguesas from "../../../data/imagenes/MenuIngles/menu_hamburguesa ingles150122.jpg";
import menuMixologia from "../../../data/imagenes/MenuIngles/mixologianuevo061022INGLES-2.jpg";
import menuTacos from "../../../data/imagenes/MenuIngles/tacosmenuingles020622.jpg";
import menuPizzas from "../../../data/imagenes/MenuIngles/menupizzaingles240622.jpg";
import menuVeggie from "../../../data/imagenes/MenuIngles/menuveggie240622INGLES.jpg";
import menuBebidas1 from "../../../data/imagenes/MenuEspanol/destilados octubre 2022-1.jpg";
import menuBebidas2 from "../../../data/imagenes/MenuEspanol/destilados octubre 2022-2.jpg";
import menuBebidas3 from "../../../data/imagenes/MenuEspanol/destilados octubre 2022-3.jpg";
import menuBebidas4 from "../../../data/imagenes/MenuEspanol/destilados octubre 2022-4.jpg";

function MenuInlges() {
  return (
    <div className="title">
      <h2>Llorona English Menu</h2>
      <h5 className="text-center tituloSection menutext">
        Remember: For each drink or craft beer you can ask for dish in Cantinas
        Menu (Mexican's Tavern Concept)
      </h5>
      <div className="underline"></div>
      <Tabs
        defaultActiveKey="pizzas"
        id="uncontrolled-tab-example"
        className="mb-3 mt-3"
      >
        <Tab eventKey="home" title="Burgers">
          <ImagenMenu src={menuHamburguesas} />
        </Tab>

        <Tab eventKey="contact" title="Mixology">
          <ImagenMenu src={menuMixologia} />
        </Tab>
        <Tab eventKey="tacos" title="Tacos">
          <ImagenMenu src={menuTacos} />
        </Tab>
        <Tab eventKey="pizzas" title="Pizzas">
          <ImagenMenu src={menuPizzas} />
        </Tab>
        <Tab eventKey="menucantinero" title="Specials">
          <ImagenMenu src={menuCantinero} />
        </Tab>
        <Tab eventKey="menuveggie" title="Vegan Menu">
          <ImagenMenu src={menuVeggie} />
        </Tab>
        <Tab eventKey="bebidas" title="Drinks Menu">
          <ImagenMenu src={menuBebidas1} />
          <ImagenMenu src={menuBebidas2} />
          <ImagenMenu src={menuBebidas3} />
          <ImagenMenu src={menuBebidas4} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default MenuInlges;
