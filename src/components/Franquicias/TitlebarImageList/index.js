import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Title from "../../Title";
import Section from "../../styles/section";

export default function TitlebarImageList() {
  return (
    <Section>
      <div>
        <h4 className="text-center tituloSection">Mezcales</h4>
        <h2 className="text-center subTituloSection">JABALÍ & TEPEZTATE</h2>
        <div className="linea"></div>
      </div>
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
    </Section>
  );
}

const itemData = [
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/hamburguesa_resistir_2_insta.JPG",
    title: "Hamburguesa de tocino",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/HAMBURGUESA_CAMARON_BBQ+copy.JPG",
    title: "Hamburguesa de camarón",
  },
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/bbq2reducidatamano.jpg",
    title: "BBQ casa",
  },
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/hamburguesahuevo.jpg",
    title: "DON HUEVO",
    cols: 2,
  },
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/pizza_margarita_insta.jpg",
    title: "Pizza margarita",
    cols: 2,
  },
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/mazapan.jpeg",
    title: "Martiní de Mazapán",
    rows: 2,
    cols: 2,
    featured: true,
  },
];
