import { Button, Card, Divider, Typography, Input, Select, DatePicker } from "antd";
import { DataStore, Amplify } from 'aws-amplify';
import { navigate } from 'gatsby';
import React, { useState, useEffect } from 'react'
import LayoutLlorona from '../components/LayoutLlorona';
import { HomeHeader } from '../components/styles/headers';
import { Hotel } from '../models';
import awsconfig from '../aws-exports'

Amplify.configure(awsconfig);


const { Title, Text } = Typography;
const { Option } = Select;

function Hoteles({ id }) {
  const [hotel, setHotel] = useState(null);
  const [mostrarEditarNombre, setMostrarEditarNombre] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");

  const [mostrarEditarDireccion, setMostrarEditarDireccion] = useState("");
  const [nuevaDireccion, setNuevaDireccion] = useState("");

  const [mostrarFechaVisita, setMostrarFechaVisita] = useState(false);
  const [nuevaFechaVisita, setNuevaFechaVisita] = useState("");

  const[mostrarVisitado, setMostrarVisitado] = useState(false)
  const [nuevoVisitado, setNuevoVisitado] = useState("");

    const [mostrarVisitaRecepcionista, setMostrarVisitaRecepcionista] =
      useState(false);
    const [nuevoVisitaRecepcionista, setNuevoVisitaRecepcionista] =
      useState("");
  
  const [mostrarMandoClientes, setMostrarMandoClientes] = useState(false);
  const [nuevoMandoClientes, setNuevoMandoClientes] = useState("");
  

  console.log(hotel);

  let direccionCompleta = hotel?.direccionCompleta;
  let fechaVisita = hotel?.fechaVisita;
  let mandoClientes = hotel?.mandoClientes;
  let nombre = hotel?.nombre;
  let visitaRecepcionista = hotel?.visitaRecepcionista;
  let visitado = hotel?.visitado;

  //mostrar Editar diferentes

  const MostrarEditarHotel = () => {
    setMostrarEditarNombre(!mostrarEditarNombre);
  };

  const MostrarEditarDireccion = () => {
    setMostrarEditarDireccion(!mostrarEditarDireccion);
  };

  const MostrarVisitado = () => {
    setMostrarVisitado(!mostrarVisitado);
  };

   const MostrarFechaVisita = () => {
     setMostrarFechaVisita(!mostrarFechaVisita);
   };



  const MostrarVisitaRecepcionista = () => {
    setMostrarVisitaRecepcionista(!mostrarVisitaRecepcionista);
  };

   const MostrarMandoClientes = () => {
     setMostrarMandoClientes(!mostrarMandoClientes);
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

  //guardar Cambios

  const guardarNombre = async () => {
    const updateHotel = await DataStore.save(
      Hotel.copyOf(hotel, updated => {
        updated.nombre = nuevoNombre;
      })
    );
    setHotel(updateHotel);
    // window.location.reload(false);
  };

  const guardarDireccion = async () => {
    const updateHotel = await DataStore.save(
      Hotel.copyOf(hotel, updated => {
        updated.direccionCompleta = nuevaDireccion;
      })
    );
    setHotel(updateHotel);
    // window.location.reload(false);
  };

  //visitado
  const selectVisitado = value => {
    setNuevoVisitado(value)
  }

  const guardarVisitado = async () => {
    const updateHotel = await DataStore.save(
      Hotel.copyOf(hotel, updated => {
        updated.visitado = nuevoVisitado;
      })
    );
    setHotel(updateHotel);
    // window.location.reload(false);
  };

  //guardar Fecha Visita
  const onChange = (date, dateString) => {
    setNuevaFechaVisita(dateString);
  }
const guardarFechaVisita = async () => {
  const updateHotel = await DataStore.save(
    Hotel.copyOf(hotel, updated => {
      updated.fechaVisita = nuevaFechaVisita;
    })
  );
  setHotel(updateHotel);
  // window.location.reload(false);
};


  //guardarVisita Recepcionista

  const selectVisitadaRecepcionista = value => {
    setNuevoVisitaRecepcionista(value);
  };

  const guardarVisitaRecepcionista = async () => {
    const updateHotel = await DataStore.save(
      Hotel.copyOf(hotel, updated => {
        updated.visitaRecepcionista = nuevoVisitaRecepcionista;
      })
    );
    setHotel(updateHotel);
    // window.location.reload(false);
  };

  //guardar mandado Clientes

  const selectMandadoClientes = value => {
    setNuevoMandoClientes(value);
  };

  const guardarMandadoClientes = async () => {
    const updateHotel = await DataStore.save(
      Hotel.copyOf(hotel, updated => {
        updated.mandoClientes = nuevoMandoClientes;
      })
    );
    setHotel(updateHotel);
    // window.location.reload(false);
  };


  const regresar = () => {
    navigate('/administrador');
}
  



  return (
    <LayoutLlorona>
      <HomeHeader />
      <Card>
        <Button onClick={regresar} type="default" style={{ marginBottom: 4 }}>
          Da click para Regresar
        </Button>
        <div style={{ marginBottom: 4 }}>
          <Typography>Hotel Id: {id}</Typography>
          <Button onClick={EliminarHotel} type="danger">
            {" "}
            Eliminar Hotel
          </Button>
        </div>
        <Divider />
        <Card size="small" title="Editar Hotel">
          <Title level={4}>Nombre del Hotel: {nombre}</Title>
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

        <Card size="small" style={{ marginTop: 10 }}>
          <Title level={5}>Dirección: {direccionCompleta}</Title>
          <Button type="primary" onClick={MostrarEditarDireccion}>
            Editar
          </Button>

          {mostrarEditarDireccion && (
            <Card size="small">
              <Input
                placeholder={direccionCompleta}
                onChange={e => setNuevaDireccion(e.target.value)}
                value={nuevaDireccion}
              />
              <Button onClick={guardarDireccion}>Guardar</Button>
            </Card>
          )}
        </Card>

        <Card size="small" style={{ marginTop: 10 }}>
          <Title level={5}>Ya se visitó? : {visitado}</Title>
          <Button type="primary" onClick={MostrarVisitado}>
            Editar
          </Button>

          {mostrarVisitado && (
            <Card size="small">
              <Select onChange={selectVisitado} placeholder={visitado}>
                <Option value="si">Sí</Option>
                <Option value="no">No</Option>
              </Select>

              <Button onClick={guardarVisitado}>Guardar</Button>
            </Card>
          )}
        </Card>

        <Card size="small" style={{ marginTop: 10 }}>
          <Title level={5}>Cuando se visitó el hotel? : {fechaVisita}</Title>
          <Button type="primary" onClick={MostrarFechaVisita}>
            Editar
          </Button>

          {mostrarFechaVisita && (
            <Card size="small">
              <DatePicker placeholder={fechaVisita} onChange={onChange} />

              <Button onClick={guardarFechaVisita}>Guardar</Button>
            </Card>
          )}
        </Card>

        <Card size="small" style={{ marginTop: 10 }}>
          <Title level={5}>
            Algún recepcionista ya visitó la Llorona? : {visitaRecepcionista}
          </Title>
          <Button type="primary" onClick={MostrarVisitaRecepcionista}>
            Editar
          </Button>

          {mostrarVisitaRecepcionista && (
            <Card size="small">
              <Select
                onChange={selectVisitadaRecepcionista}
                placeholder={visitaRecepcionista}
              >
                <Option value="si">Sí</Option>
                <Option value="no">No</Option>
              </Select>

              <Button onClick={guardarVisitaRecepcionista}>Guardar</Button>
            </Card>
          )}
        </Card>

        <Card size="small" style={{ marginTop: 10 }}>
          <Title level={5}>
            El hotel ha mandado clientes? : {mandoClientes}
          </Title>
          <Button type="primary" onClick={MostrarMandoClientes}>
            Editar
          </Button>

          {mostrarMandoClientes && (
            <Card size="small">
              <Select
                onChange={selectMandadoClientes}
                placeholder={mandoClientes}
              >
                <Option value="si">Sí</Option>
                <Option value="no">No</Option>
              </Select>

              <Button onClick={guardarMandadoClientes}>Guardar</Button>
            </Card>
          )}
        </Card>
      </Card>
    </LayoutLlorona>
  );
}

export default Hoteles