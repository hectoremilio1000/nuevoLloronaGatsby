import React from 'react'
import { Link } from "gatsby";
import LayoutLlorona from '../components/LayoutLlorona';
import Section from '../components/styles/section';
import ButtonComponent from '../components/ButtonComponent';
import { Button } from 'react-bootstrap';
import { useState } from 'react';


function Menu() {
  const [english, setEnglish] = useState(false)
  const [spanish, setSpanish] = useState(true)

  const onEnglish = () => {
    setEnglish(true)
    setSpanish(false)
  }
  
  const onSpanish = () => {
    setEnglish(false);
    setSpanish(true);
  }
    return (
      <LayoutLlorona>
        <header className="bannerMenu">
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
        <Section className="mt-2">
          <div>
            <h2 className="text-center font-weight-bold">Menú</h2>
            <div className="contenedorLenguaje">
              <Button onClick={onEnglish}>English</Button>
              <Button onClick={onSpanish}>Español</Button>
            </div>
          </div>

          {spanish && (
            <div className="contenedorMenu">
              <ButtonComponent titulo="ALIMENTOS" enlace="menualimentos" />
              <ButtonComponent titulo="BEBIDAS" enlace="menubebidas" />
              <ButtonComponent titulo="CANTINERO" enlace="cantinero" />
            </div>
          )}
          {english && (
            <div className="contenedorMenu">
              <ButtonComponent titulo="FOOD" enlace="menufood" />
              <ButtonComponent titulo="DRINKS & BEERS" enlace="menudrinks" />
              <ButtonComponent titulo="TAVERN" enlace="menuTavern" />
            </div>
          )}
        </Section>
      </LayoutLlorona>
    );
}

export default Menu