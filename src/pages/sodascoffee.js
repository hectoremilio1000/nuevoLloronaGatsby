import { Link } from 'gatsby';
import React from 'react'
import LayoutLlorona from '../components/LayoutLlorona';

function Sodascoffee() {
  return (<LayoutLlorona>
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
    <div>Sodascoffee</div></LayoutLlorona>)
}

export default Sodascoffee;