import { Button, Card, Divider, Typography, Select, Input, Row, Col, Form, Spin } from "antd";
import { DataStore, Amplify } from 'aws-amplify';
import { navigate } from 'gatsby';
import React, { useEffect, useState } from 'react'
import LayoutLlorona from '../components/LayoutLlorona';
import { HomeHeader } from '../components/styles/headers';
import { Inventario, Products } from '../models';

import awsconfig from '../aws-exports'
import CorteInvenario from '../components/Administrador/PruebaInventario/InventarioProductos/CorteInventario';
import NuevoInventario from "../components/Administrador/PruebaInventario/InventarioProductos/NuevoInventario";

Amplify.configure(awsconfig);
const { Title, Text } = Typography;
const { Option } = Select;
const { Item } = Form;

function Producto({ id }) {
  const [producto, setProducto] = useState("");

  const [mostrarEditarNombre, setMostrarEditarNombre] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");

  const [inventarioProducto, setInventarioProducto] = useState("");

  const [mostrarCrear, setMostrarCrear] = useState(false);


  let name = producto?.name;

  const fetchProducto = async () => {
    try {
      const product = await DataStore.query(Products, id);
      setProducto(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducto();
    const sub = DataStore.observe(Products).subscribe(fetchProducto);
    return () => {
      sub.unsubscribe();
    };
  }, [id]);

  const fetchInventary = async () => {
    const inventarioId = await DataStore.query(Inventario, inventario =>
      inventario.productsID("eq", id)
    );
    setInventarioProducto(inventarioId);
  };



  useEffect(() => {
    if (!id) {
      return
    }
    fetchInventary();
  }, [id]);

  const EliminarProducto = async () => {
    await DataStore.delete(Products, id);
    navigate("/administrador");
  };

  const regresar = () => {
    navigate("/administrador");
  };

  //editar nombre
  const MostrarEditarNombre = () => {
    setMostrarEditarNombre(!mostrarEditarNombre);
  };

  const guardarNombre = async () => {
    const updateProducto = await DataStore.save(
      Products.copyOf(producto, updated => {
        updated.name = nuevoNombre;
      })
    );
    setProducto(updateProducto);
    // window.location.reload(false);
  };

  // console.log(inventarioProducto)

   const mostrarCrearInventario = () => {
     setMostrarCrear(!mostrarCrear);
   };


  return (
    <LayoutLlorona>
      <HomeHeader />
      <Button
        onClick={regresar}
        type="default"
        style={{ marginBottom: 4, marginLeft: 4 }}
      >
        Da click para Regresar
      </Button>
      <Card title="Editar Producto" key={id}>
        <div style={{ marginBottom: 4 }} key={id}>
          <Typography>Producto Id: {id}</Typography>
          <Button onClick={EliminarProducto} type="danger">
            {" "}
            Eliminar Producto
          </Button>
        </div>
        <Divider />
        <Title level={4}>Nombre del Producto: {name}</Title>
        <Button type="primary" onClick={MostrarEditarNombre}>
          Editar Nombre del Producto
        </Button>
        {mostrarEditarNombre && (
          <Card size="small">
            <Input
              placeholder={name}
              onChange={e => setNuevoNombre(e.target.value)}
              value={nuevoNombre}
            />
            <Button onClick={guardarNombre}>Guardar</Button>
          </Card>
        )}
        <Card>
          <Button onClick={mostrarCrearInventario}>Crear Inventario</Button>

          {mostrarCrear && (
            <Card key={id}>
              <NuevoInventario productoID={id} />
            </Card>
          )}
        </Card>

        {inventarioProducto ? (
          inventarioProducto.map(inventario => {
            const { id } = inventario;
            {
              /* console.log(id); */
            }
            return (
              <>
                <Card>
                 
                  <CorteInvenario id={id} />
                </Card>
              </>
            );
          })
        ) : (
          <div></div>
        )}
      </Card>
    </LayoutLlorona>
  );
}

export default Producto