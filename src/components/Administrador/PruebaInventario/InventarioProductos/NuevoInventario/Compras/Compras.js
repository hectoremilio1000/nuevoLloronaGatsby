import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  DatePicker,
  Form,
  InputNumber,
  message,
  Select,
  Input,
  Typography,
} from "antd";
import { DataStore } from 'aws-amplify';
import { StockEventInventario } from "../../../../../../models";



function Compras({ id }) {
  
  console.log(id);
  const [date, setDate] = useState("");

  
  
  const SelectDate = (value, date) => {
    setDate(date);
  };

  const onFinish = async values => { 
    const compras = parseFloat(values.cantidad);
    
try {
  await DataStore.save(
    new StockEventInventario({
      quantity: compras,
      fecha: date,
      inventarioID: id,
    })
  );
  message.success('compra guardada');
  window.location.reload(false);
} catch (error) {
  console.log(error)
}
    
  }


  return (
    <div key={id}>
      <Typography.Title level={5} style={{color:"green"}}>
        Sólo se pueden agregar compras en este momento, si capturaste mal algo en "ventas", "inventario físico inicial"...,
        elimina el inventario y vuelve a ingresarlo
      </Typography.Title>
      <Form onFinish={onFinish} key={id}>
        <Form.Item label="cantidad" name="cantidad" style={{ width: 200 }}>
          <Input placeholder="Cantidad" />
        </Form.Item>
        <Form.Item label="fecha" name="fecha">
          <DatePicker placeholder="fecha" onChange={SelectDate} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Guardar Compra
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Compras