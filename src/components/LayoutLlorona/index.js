import React from "react";

import { GlobalStyle } from "../styles/globalStyles";

import Navbar from "../NavBar";
import Footer from "../Footer";

function LayoutLlorona({ children }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default LayoutLlorona;
