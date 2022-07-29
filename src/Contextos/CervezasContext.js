import React, { createContext, useContext, useState, useEffect } from "react";

const CervezasContext = createContext({});

const CervezasContextProvider = ({ children }) => {
  const [cervezas, setCervezas] = useState([]);
  return (
    <CervezasContext.Provider value={{ cervezas, setCervezas }}>
      {children}
    </CervezasContext.Provider>
  );
};

export default CervezasContextProvider;

export const useCervezasContext = () => useContext(CervezasContext);
