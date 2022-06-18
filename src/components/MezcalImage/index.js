import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Title from "../Title";
import Section from "../styles/section";
import { Link } from "gatsby";
import { Image } from "react-bootstrap";

export default function MezcalImage() {
  return (
    <Section>
      <div>
        <h4 className="text-center tituloSection">Nuestros</h4>
        <h2 className="text-center subTituloSection">Mezcales</h2>
        <div className="linea"></div>
      </div>
      <div>
        <h4 className="text-center fs-3">Mezcal JABALÍ</h4>
        <Image
          className="img-fluid"
          src="https://imagenesrutalab.s3.amazonaws.com/llorona/mezcal/etiqueta1sinNAda.jpg"
        />
      </div>
      <div className="linea"></div>
      <div>
        <h4 className="text-center fs-3">Mezcal TEPEZTATE</h4>
        <Image
          className="img-fluid"
          src="https://imagenesrutalab.s3.amazonaws.com/llorona/mezcal/PHOTO-2022-04-27-10-56-11.jpg"
        />
      </div>

      <div className="subSubDiv1Banner">
        <Link to="/reserva">
          <button type="button" className="buttonComponente">
            ¡Reserva ya!
          </button>
        </Link>
      </div>
    </Section>
  );
}
