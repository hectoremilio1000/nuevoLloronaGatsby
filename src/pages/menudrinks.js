import React from 'react'
import ButtonComponent from '../components/ButtonComponent';
import LayoutLlorona from '../components/LayoutLlorona';

function Menudrinks() {
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
                  ¡Booking!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="contenedorMenu">
        <ButtonComponent titulo="CRAFT BEERS" enlace="craftbeers" />
        <ButtonComponent
          titulo="MEZCALES & SOTOLES & ARTISANAL PULQUE"
          enlace="artisanalmezcal"
        />
        <ButtonComponent titulo="MIXOLOGY" enlace="mixology" />
        <ButtonComponent titulo="DISTILLATES" enlace="distillates" />
        <ButtonComponent titulo="SODAS & Coffee" enlace="sodascoffee" />
      </div>
    </LayoutLlorona>
  );
}

export default Menudrinks