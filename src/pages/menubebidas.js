import { Link } from 'gatsby';
import React from 'react'
import ButtonComponent from '../components/ButtonComponent';
import LayoutLlorona from '../components/LayoutLlorona'

function MenuBebidas() {
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
      <div className="contenedorMenu">
        <ButtonComponent
          titulo="CERVEZAS ARTESANALES"
          enlace="cervezasartesanales"
        />
        <ButtonComponent
          titulo="MEZCALES & SOTOLES & PULQUE ARTESANALES"
          enlace="mezcalesartesanales"
        />
        <ButtonComponent titulo="MIXOLOGÍA" enlace="mixologia" />
        <ButtonComponent titulo="DESTILADOS" enlace="destilados" />
        <ButtonComponent
          titulo="SODAS & CERVEZAS INDUSTRIALES"
          enlace="sodas"
        />
      </div>
    </LayoutLlorona>
  );
}

export default MenuBebidas