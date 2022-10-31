import React, { useState, useEffect } from "react";
import { DataStore, Predicates } from "aws-amplify";
import { Hotel } from "../../../../models";
import { Card, Spin, Table } from "antd";
import { navigate } from 'gatsby';
import { Match } from "@reach/router"

function ListaHoteles() {
  const [hoteles, setHoteles] = useState([]);
  const [showSpin, setShowSpin] = useState(false);

  const fetchHotels = async () => {
    const Hotels = await DataStore.query(Hotel);
    setHoteles(Hotels);
    setShowSpin(true)
  };

  useEffect(() => {
    setShowSpin(false);
    fetchHotels();
    
  }, [])

  console.log(hoteles)
  
  const columns = [
    {
      title: "Hotel",
      dataIndex: "nombre",
      key: "nombre",
      fixed: 'left',
      width:150,
    },
    {
      title: "Dirección",
      dataIndex: "direccionCompleta",
      key: "nombre",
    },
    {
      title: "Visitado",
      dataIndex: "visitado",
      key: "visitado",
    },
    {
      title: "Visita x Recepcionista",
      dataIndex: "visitaRecepcionista",
      key: "visitaRecepcionista",
    },
    {
      title: "Mandó clientes",
      dataIndex: "mandoClientes",
      key: "mandoClientes",
    },
    {
      title: 'Cuandó se visitó el hotel',
      dataIndex: 'fechaVisita',
      key:'fechaVisita'
    },
    {
      title: "Hotel ID",
      dataIndex: "id",
      key: "id",
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      {!showSpin ? (
        <Spin size="large" />
      ) : (
        <Table
          columns={columns}
          dataSource={hoteles}
          style={{ width: "100%" }}
          scroll={{
            x: 1300,
          }}
          rowKey="id"
          onRow={hotel => ({
            onClick: () => navigate(`hoteles/${hotel.id}`, { replace: true }),
          })}
        />
      )}
    </div>
  );
 
  
}

export default ListaHoteles;
