import React from 'react'
import CantinaInfo from '../components/CantinaPage/CantinaInfo';
import LayoutLlorona from '../components/LayoutLlorona';
import { HomeHeader } from '../components/styles/headers';
import TitlebarImageList from '../components/CantinaPage/TitlebarImageList';
import { Tab, Tabs } from 'react-bootstrap';
import { Image } from 'antd';



function Cantina() {
  return (
    <LayoutLlorona>
      <HomeHeader />
      <header className="col jumbotron-fluid pt-3 bannerCantina">
        <div className="d-flex ">
          <div className="subDiv2Banner">
            <h2 className=" font-weight-bold proximamente2">
              <b>Taco x Trago</b>
              <br />
              <b>1 drink 1 food</b>
            </h2>
          </div>
        </div>
      </header>
      <CantinaInfo />

      <TitlebarImageList />
      <section className="menu section">
        <Tabs
          defaultActiveKey="menuespanol"
          id="uncontrolled-tab-example"
          className="mb-3 justify-content-center"
          variant="pills"
        >
          <Tab eventKey="menuespanol" title="Menú Cantinero Español">
            <Image
              width={"100%"}
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/cantina/menucantinerofrente21102022.jpg"
            />
          </Tab>
          <Tab eventKey="menuingles" title="Menú Cantinero Inglés">
            <Image
              width={"100%"}
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/cantina/menucantinerofrente211022INGLES.jpg"
            />
          </Tab>
        </Tabs>
      </section>
    </LayoutLlorona>
  );
}

export default Cantina