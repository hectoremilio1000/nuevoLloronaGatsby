import React from "react";
import Calendario from "../components/Calendario";
import Layout from "../components/layout";
import { HomeHeader } from "../components/styles/headers";

import { QuickInfoWrapper } from "../components/styles/globalStyles";
import Title from "../components/Title";
import Section from "../components/styles/section";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";

export default function Reserva() {
  return (
    <Layout>
      <HomeHeader />
      <Calendario />
      <Section>
        <div>
          <h4 className="text-center tituloSection">Celebra tu cumpleaños</h4>
          <h2 className="text-center subTituloSection">
            los jueves con nosotros
          </h2>
          <div className="linea"></div>
        </div>

        <QuickInfoWrapper>
          <p className="textUbicacion">
            La piñata cumpleañera no tiene costo, y aplica todos los jueves si
            cumples años en el mes ❤️🪅 y solo tienen que hacer reservación en
            cualquiera de nuestras redes sociales. Les regalamos dulces típicos
            mexicanos y una botella de nuestro mejor mezcal de la casa 🍶🥃
            madre cuishe el cual está elaborado artesanalmente.
          </p>
        </QuickInfoWrapper>
      </Section>
      <ImageList>
        <ImageListItem key="Subheader" cols={2}></ImageListItem>
        {itemData.map(item => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                ></IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Layout>
  );
}

const itemData = [
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/pinatacumpleanera.JPG",
    title: "Piñata",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/ninapinata.JPG",
    title: "novios",
  },
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/nina2pinata.JPG",
    title: "cumple",
  },
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/ninas4pinata.JPG",
    title: "amigas",
    cols: 2,
  },
];
