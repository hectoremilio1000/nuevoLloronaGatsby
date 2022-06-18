import React from "react";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ImagenMenu from "../ImagenMenu";

import menuCantinero from "../../../data/imagenes/MenuEspanol/menucantinero150122.jpg";
import menuHamburguesas from "../../../data/imagenes/MenuEspanol/menu_hamburguesa 150122.jpg";
import menuMixologia from "../../../data/imagenes/MenuEspanol/mixologiamenu150122.jpg";
import menuTacos from "../../../data/imagenes/MenuEspanol/tacosmenu100222.jpg";
import menuPizzas from "../../../data/imagenes/MenuEspanol/menupizza100222.jpg";
import menuVeggie from "../../../data/imagenes/MenuEspanol/menuveggie300322nuevo.jpg";
import menuBebidas1 from "../../../data/imagenes/MenuEspanol/MENU DESTILADOS JUNIO 2022nuevo-1.jpg";
import menuBebidas2 from "../../../data/imagenes/MenuEspanol/MENU DESTILADOS JUNIO 2022nuevo-2.jpg";
import menuBebidas3 from "../../../data/imagenes/MenuEspanol/MENU DESTILADOS JUNIO 2022nuevo-3.jpg";
import menuBebidas4 from "../../../data/imagenes/MenuEspanol/MENU DESTILADOS JUNIO 2022nuevo-4.jpg";

function MenuEspa() {
  return (
    <div className="title">
      <h2>Menú Llorona</h2>
      <h5 className="text-center tituloSection menutext">
        Recuerda: Por cada trago o cerveza artesanal puedes pedir un bajón del
        Menú Cantinero
      </h5>
      <div className="underline"></div>
      <Tabs
        defaultActiveKey="pizzas"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Hamburguesas">
          <ImagenMenu src={menuHamburguesas} />
        </Tab>

        <Tab eventKey="contact" title="Mixología">
          <ImagenMenu src={menuMixologia} />
        </Tab>
        <Tab eventKey="tacos" title="Tacos">
          <ImagenMenu src={menuTacos} />
        </Tab>
        <Tab eventKey="pizzas" title="Pizzas">
          <ImagenMenu src={menuPizzas} />
        </Tab>
        <Tab eventKey="menucantinero" title="Menú Cantinero">
          <ImagenMenu src={menuCantinero} />
        </Tab>
        <Tab eventKey="menuveggie" title="Menú Veggie">
          <ImagenMenu src={menuVeggie} />
        </Tab>
        <Tab eventKey="bebidas" title="Menú Bebidas">
          <ImagenMenu src={menuBebidas1} />
          <ImagenMenu src={menuBebidas2} />
          <ImagenMenu src={menuBebidas3} />
          <ImagenMenu src={menuBebidas4} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default MenuEspa;
