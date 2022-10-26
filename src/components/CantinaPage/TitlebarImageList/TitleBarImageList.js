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
        <h4 className="text-center tituloSection">Una</h4>
        <h2 className="text-center subTituloSection">Probadita</h2>
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
    img: "https://i.pinimg.com/originals/46/5c/c9/465cc98f3b3480148c26544070efe3cb.jpg",
    title: "Enmoladas",
    rows: 1,
    cols: 2,
    featured: true,
  },
  {
    img: "https://dam.cocinafacil.com.mx/wp-content/uploads/2021/05/tacos-de-cochinita-pibil.jpg",
    title: "Tacos de Cochinita Pibil",
  },
];
