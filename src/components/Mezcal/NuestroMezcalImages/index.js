import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Title from "../../Title";
import Section from "../../styles/section";

function NuestroMezcalImages() {
  return (
    <Section>
      <div>
        <h4 className="text-center tituloSection">La pasión al mezcal</h4>
        <h2 className="text-center subTituloSection">nos Une</h2>
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
      <div className="subSubDiv1Banner">
        <a href="https://wa.me/+5215549242477">
          <button type="button" className="buttonComponente">
            ¡Comprar ahora!
          </button>
        </a>
      </div>
    </Section>
  );
}

const itemData = [
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/mezcal/IMG_9973.jpg",
    title: "Niurka con su hija Romi Marcos degustando nuestro Mezcal",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/mezcal/IMG_0027.jpg",
    title: "Nuestra botella",
  },
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/mezcal/IMG_0043.jpg",
    title: "Cual prefieres Jabalí o Tepeztate",
  },
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/mezcal/IMG_9975.jpg",
    title: "La pasión por el mezcal nos caracteriza",
    cols: 2,
  },
];

export default NuestroMezcalImages;
