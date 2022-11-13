import React, {useState} from 'react'
import { Button, Card, DatePicker, Form, Input, InputNumber, message, Select, Typography } from 'antd';
import Compras from './Compras/Compras';
import { Inventario } from '../../../../../models';
import { DataStore } from 'aws-amplify';

const { Item } = Form;

function NuevoInventario({ productoID }) {
  console.log(productoID)
  const [fechaInicial, setFechaInicial] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const [invFisInic, setInvFisInic] = useState("");
  const [invFisFin, setInvFisFin] = useState("");
  const [ventas, setVentas] = useState("");
  const [ventasNegativo, setVentasNegativo] = useState("");


  const onChangeInicial = (date, dateString) => {
    setFechaInicial(dateString);
  }

   const onChangeFinal = (date, dateString) => {
     setFechaFinal(dateString);
   };
  
  const onChangeVentas = (value) => {
    setVentas(parseFloat(value));
  }

 
    const VentasNegativo = async () => {
    const numero = await ventas;
      const numeroNegativo = -numero;
      setVentasNegativo(parseFloat(numeroNegativo));
    };

  

  const GenerarInventario = async () => {
    const numero = - (ventas);
    console.log(typeof (numero));
    console.log(numero);
    const invFisInicNumero = parseFloat(invFisInic);
    const invFisFinNumero = parseFloat(invFisFin);


    try {
      
        await DataStore.save(
          new Inventario({
            inventarioInicialFisico: invFisInicNumero,
            inventarioFinalFisico: invFisFinNumero,
            fechaInicioConteoFisico: fechaInicial,
            fechaFinConteoFisico: fechaFinal,
            productsID: productoID,
            ventas: numero,
          })
        );
      
      message.success('inventario creado correctamente, ahora genera las compras');
      window.location.reload(false);
    } catch (error) {
      console.log(error)
    }
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
          value={invFisFin}
          style={{ width: 150 }}
        />
      </Item>
      <Item label="Ingresa las ventas del período obtenidas del sistema:">
        <InputNumber
          min={1}
          placeholder="Cantidad"
          onChange={onChangeVentas}
          style={{ width: 150 }}
        />
      </Item>

      <Item>
        <Typography.Text type="danger">
          Las compras se ingresan al editar el inventario
        </Typography.Text>
      </Item>

      <Item>
        <Button type="primary" onClick={GenerarInventario}>
          Generar inventario
        </Button>
      </Item>
    </Card>
  );
}

export default NuevoInventario;