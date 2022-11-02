import { Button, Card, Divider, Typography, Input } from "antd";
import { DataStore } from 'aws-amplify';
import { navigate } from 'gatsby';
import React, { useState, useEffect } from 'react'
import LayoutLlorona from '../components/LayoutLlorona';
import { HomeHeader } from '../components/styles/headers';
import { Hotel } from '../models';

const { Title, Text } = Typography;

function Hoteles({ id }) {
  const [hotel, setHotel] = useState(null);
  const [mostrarEditarNombre, setMostrarEditarNombre] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");
  
  console.log(hotel)
  
  let direccionCompleta = hotel?.direccionCompleta;
  let fechaVisita = hotel?.fechaVisita;
  let mandoClientes = hotel?.mandoClientes;
  let nombre = hotel?.nombre
  let visitaRecepcionista = hotel?.visitaRecepcionista;
  let visitado = hotel?.visitado;

  const MostrarEditarHotel = () => {
    setMostrarEditarNombre(!mostrarEditarNombre);
  };

  const fetchHotel = async () => {
    const hotel = await DataStore.query(Hotel, id);
    setHotel(hotel);
  };

   useEffect(() => {
     fetchHotel();
   }, [id]);

  const EliminarHotel = async () => {
    await DataStore.delete(Hotel, id);
    navigate("/administrador");
  };

  const guardarNombre = async () => {
    const updateHotel = await DataStore.save(
      Hotel.copyOf(hotel, updated => {
        updated.nombre = nuevoNombre;
      })
    );
    setHotel(updateHotel);
    window.location.reload(false);
  };

  
  return (
    <LayoutLlorona>
      <HomeHeader />
      <Card>
        <div style={{ marginBottom: 4 }}>
          <Typography>Hotel Id: {id}</Typography>
          <Button onClick={EliminarHotel} type="danger">
            {" "}
            Eliminar Hotel
          </Button>
        </div>
        <Divider />
        <Card size="small" title="Editar Hotel">
          <Title level={4}>{nombre}</Title>
          <Button type="primary" onClick={MostrarEditarHotel}>
            Editar
          </Button>
          {mostrarEditarNombre && (
            <Card size="small">
              <Input
                placeholder={nombre}
                onChange={e => setNuevoNombre(e.target.value)}
                value={nuevoNombre}
              />
              <Button onClick={guardarNombre}>Guardar</Button>
            </Card>
          )}
        </Card>
      </Card>
    </LayoutLlorona>
  );
 
}

export default Hoteles