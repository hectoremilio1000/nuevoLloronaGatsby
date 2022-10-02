import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Title from "../Title";
import Section from "../styles/section";
import itemData from "../../data/HomeData/itemData";

export default function TitlebarImageList() {
  console.log(itemData)
  return (
    <Section>
      <div>
        <h4 className="text-center tituloSection">Nuestros productos</h4>
        <h2 className="text-center subTituloSection">Algo de</h2>
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


