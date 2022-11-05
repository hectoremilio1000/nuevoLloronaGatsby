import { Button, Card, Col, Divider, Form, Row, Typography } from 'antd'
import { DataStore } from 'aws-amplify';
import React, { useEffect, useState } from 'react'
import { Inventario } from '../../../../../models';


const { Item } = Form;



function CorteInvenario({ id }) {
  const [inventario, setInventario] = useState(null);
  const [compras, setCompras] = useState("");
  const [ventas, setVentas] = useState("");
  const [tipoTotal, setTipoTotal] = useState("");
  const [cantidad, setCantidad] = useState("")
  const [invMes, setInvMes] = useState("");

  


  const inventarioProducto = async () => {
    const inventarioIdProducto = await DataStore.query(Inventario, id);
    setInventario(inventarioIdProducto);
  }

  useEffect(() => {
    inventarioProducto();
  }, [id])

  const array = [
    Number(inventario?.inventarioInicialFisico), Number(inventario?.inventarioFinalFisico)
  ];
  const initialValue = 0;
  // console.log(array);
  const quantity = array.reduce((a, b) => a + b, initialValue);
  // console.log(quantity);

  useEffect(() => {
    if (!quantity) {
      return
    }
    setCantidad(quantity);
  }, [quantity])
  

  useEffect(() => {
    if (!quantity) {
    return
  }
    if (quantity > 0) {
      setTipoTotal("SOBRANTE");
    } else if (quantity < 0) {
      setTipoTotal("FALTANTE");
    } else if (quantity === 0) {
      setTipoTotal("CUADRA");
    }
}, [quantity])
  
  // console.log(tipoTotal);
  // console.log(quantity);

 

  let definirMes = inventario?.fechaInicioConteoFisico.substr(0, 7);
  
  useEffect(() => {
    if (!definirMes) {
      return
    }
    setInvMes(definirMes);
  }, [inventario?.fechaInicioConteoFisico])
  
  
  
  return (
    <Card key={id}>
     

      <Divider />
      {inventario?.fechaInicioConteoFisico &&
        inventario?.fechaFinConteoFisico &&
        quantity && (
          <Card>
          <Typography.Title level={4}>Inventario del mes: { invMes}</Typography.Title>
            <Typography.Text>
              Fecha inicial: {inventario?.fechaInicioConteoFisico}
            </Typography.Text>
            <br />
            <Typography.Text>
              Fecha inicial: {inventario?.fechaFinConteoFisico}
            </Typography.Text>
            <Divider />
            <Card>
              <Row>
                <Col span={4}>Inv Físico Inicial</Col>
                <Col span={4}>Compras</Col>
                <Col span={4}>Ventas</Col>
                <Col span={4}>Inv Físico Fin</Col>
                <Col span={4}>Cantidad Sob/Falt</Col>
                <Col span={4}>Sob/Falt</Col>
              </Row>
              <Row>
                <Col span={4}>{inventario?.inventarioInicialFisico}</Col>
                <Col span={4}>{inventario?.compras}</Col>
                <Col span={4}>{inventario?.ventas}</Col>
                <Col span={4}>{inventario?.inventarioFinalFisico}</Col>
                <Col span={4}>
                  {inventario?.total}
                </Col>
                <Col span={4}>{inventario?.tipoTotal}</Col>
              </Row>
            </Card>
          </Card>
        )}
    </Card>
  );
}

export default CorteInvenario