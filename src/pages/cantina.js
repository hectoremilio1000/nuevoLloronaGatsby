import React from 'react'
import LayoutLlorona from '../components/LayoutLlorona';
import { HomeHeader } from '../components/styles/headers';


function Cantina() {
  return (
    <LayoutLlorona>
      <HomeHeader />
      <header
        className="col jumbotron-fluid pt-5 bannerCantina"
        
      >
        <div className="d-flex ">
          <div className="subDiv2Banner">
            <h2 className=" font-weight-bold proximamente2">
              <b>Taco x Trago</b>
            </h2>

           
          </div>
        </div>
      </header>
      {/* <FranquiciaInfo className="mt-2" />
      <FranquiciasFormulario />
      <TitlebarImageList /> */}
    </LayoutLlorona>
  );
}

export default Cantina