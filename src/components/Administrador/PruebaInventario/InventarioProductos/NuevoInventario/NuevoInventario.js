import React, {useState} from 'react'
import { Button, Card, DatePicker, Form, Input, InputNumber, Select } from 'antd';
import ComprasProductos from '../CompraProductos';

const { Item } = Form;

function NuevoInventario({ productoID }) {
  console.log(productoID)
  const [fechaInicial, setFechaInicial] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const [invFisInic, setInvFisInic] = useState("");
  const [invFisFin, setInvFisFin] = useState("");
  const [ventas, setVentas] = useState("");
  const [compras, setCompras] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [estadoInventario, setEstadoInventario] = useState("");


  const onChangeInicial = (date, dateString) => {
    setFechaInicial(dateString);
  }

   const onChangeFinal = (date, dateString) => {
     setFechaFinal(dateString);
   };
  
  const onChangeCompra = (date, dateString) => {
    setCompras(compras)
  }

  return (
    <Card>
      <Item label="Ingresa la fecha inicial">
        <DatePicker onChange={onChangeInicial} placeholder="" />
      </Item>
      <Item label="Ingresa la fecha final">
        <DatePicker onChange={onChangeFinal} placeholder="" />
      </Item>
      <Item label="Ingresa el inventario físico inicial:">
        <Input
          placeholder="Cantidad"
          onChange={e => setInvFisInic(e.target.value)}
          value={invFisInic}
          style={{ width: 150 }}
        />
      </Item>
      <Item label="Ingresa el inventario físico final:">
        <Input
          placeholder="Cantidad"
          onChange={e => setInvFisFin(e.target.value)}
          value={invFisInic}
          style={{ width: 150 }}
        />
      </Item>
      <Item label="Ingresa las ventas del período obtenidas del sistema:">
        <Input
          placeholder="Cantidad"
          onChange={e => setVentas(e.target.value)}
          value={ventas}
          style={{ width: 150 }}
        />
      </Item>
      <Card title="Compras">
        <Item label="Ingresa la cantidad de la compra que corresponde al período, ve guardando una por una">
          <Input
            onChange={e => setCantidad(e.target.value)}
            value={cantidad}
            style={{ width: 150 }}
          />
        </Item>
        <Item label="Ingresa la fecha de la compra">
          <DatePicker placeholder="Fecha" onChange={onChangeCompra} />
        </Item>
        <Item>
          <Button type="default">Guardar compra</Button>
        </Item>
      </Card>
      <Item>
        <Button type="primary">Calcular inventario</Button>
      </Item>
    </Card>
  );
}

export default NuevoInventario;