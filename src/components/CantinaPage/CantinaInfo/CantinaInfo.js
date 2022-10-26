import React, { useState } from "react";
import { Link } from "gatsby";
import { Button } from "antd";
import { QuickInfoWrapper } from "../../styles/globalStyles";
import Section from "../../styles/section";



function CantinaInfo() {
    const [show, setShow] = useState(false);

   
  return (
    <Section className="mt-2">
      <div>
        <h1 className="text-center font-weight-bold">Menú Cantinero</h1>
      </div>
      <div className="text-center mb-3">
        <Button onClick={() => setShow(!show)} type="primary">
          {show ? <span>Español</span> : <span>English</span>}
        </Button>
      </div>
      {show && (
        <div>
          <div>
            <h4 className="text-center tituloSection">
              Order a drink and we'll give you a food
            </h4>
            <h2 className="text-center subTituloSection">
              We revive the Mexican cantinas
            </h2>
            <div className="linea"></div>
          </div>
          <QuickInfoWrapper>
            <p className="text text-justify">
              In Mexican canteens the snack is a tradition, here the client
              receive free food along with your favorite drink. Customers
              receive after each concoction of substance, a glass of shrimp
              broth, and later what the body can hold.
            </p>
          </QuickInfoWrapper>
        </div>
      )}

      {!show && (
        <div>
          <div>
            <h4 className="text-center tituloSection">
              Pide un copa y te regalamos un llanto
            </h4>
            <h2 className="text-center subTituloSection">
              Revivimos las cantinas mexicanas
            </h2>
            <div className="linea"></div>
          </div>
          <QuickInfoWrapper>
            <p className="text text-justify">
              En las cantinas mexicanas la botana es una tradición, aquí el
              cliente recibe comida gratis junto a su bebida favorita. Los
              clientes reciben después de cada brebaje de enjundia, un vaso con
              caldo de camarón, y posteriormente lo que el cuerpo aguante.
            </p>
          </QuickInfoWrapper>
        </div>
          )}
          
    </Section>
  );
}

export default CantinaInfo;
