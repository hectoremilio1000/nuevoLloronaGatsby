import { Button, Divider, List, message, Table, Typography } from 'antd';
import { DataStore } from 'aws-amplify';
import React, { useState, useEffect } from 'react'
import { Inventario, StockEventInventario } from "../../../../../models";
import Compras from '../NuevoInventario/Compras/Compras';


function MostrarCompras({ id }) {
  const [eventoCompra, setEventoCompra] = useState("");
  const [comprasInventario, setComprasInventario] = useState("");
  const [inventario, setInventario] = useState("");
  const [mostrarAgregar, setMostrarAgregar] = useState(false);

  const fetchedInventario = async () => {
    const InventarioNuevo = await DataStore.query(Inventario, id);
    setInventario(InventarioNuevo);
  }

  useEffect(() => {
    fetchedInventario();
  }, [id]);
  
  

  const fetchStockEvent = async () => {

    // const stockEventsFetched = (await DataStore.query(
    //   StockEventInventario)).filter(compras => compras.inventarioID === id);
    // setEventoCompra(stockEventsFetched);

    const stockEventsFetched = await DataStore.query(StockEventInventario, compras => compras.inventarioID("eq", id))
    setEventoCompra(stockEventsFetched);
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    fetchStockEvent();
  }, [id]);

  console.log('evento', eventoCompra);


  const CalcularTotalCompras = () => {
    if (!eventoCompra) {
      return
    }
    let Max = eventoCompra.length;
    let sum = 0;
    for (let i = 0; i < Max; i++) {
      sum += eventoCompra[i]?.quantity;
      console.log(typeof sum);
      
    }
    setComprasInventario(parseFloat(sum));
  };


  console.log(comprasInventario);

  const GuardarComprasInvetario = async () => {
    try {
       await DataStore.save(
         Inventario.copyOf(inventario, updated => {
           updated.compras = comprasInventario;
         })
       );
      window.location.reload(false)
      message.success('compras guardas correctamente');
    } catch (error) {
      message.warning('contacta al admin')
    }
   

  }
  
  const AgregarCompra = () => {
    setMostrarAgregar(!mostrarAgregar);
  };

  const data = [
    "1.- Agrega todas las compras realizadas del producto en el mes",
    "2.- Da click en calcular compras para que el sistema sume las compras",
    "3.- Da click en guardar compras",
    "Nota: Recuerda que al finalizar ya no podrás modificar las compras",
  ];
  const columns = [
    {
      title: "Fecha",
      dataIndex: "fecha",
      key: "fecha",
    },
    {
      title: "Cantidad",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];

  
  return (
    <div key={id}>
      {eventoCompra.length === 0 ? (
        <div key={id}>
          <Typography.Text type="danger">
            {" "}
            No se han agregado compras, por favor edita da Click en editar
            Compras para agregar las compras
          </Typography.Text>
          <Button onClick={AgregarCompra} style={{ marginLeft: 5 }}>
            Agregar Compra
          </Button>
          {mostrarAgregar ? <Compras id={id} /> : <> </>}
        </div>
      ) : (
        <>
          {eventoCompra && (
            <List
              size="small"
              style={{ marginBottom: 5 }}
              header={
                <Typography.Title level={5}>
                  Pasos para agregar las compras:
                </Typography.Title>
              }
              dataSource={data}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          )}
          {mostrarAgregar ? <Compras id={id} /> : <> </>}
          <Button onClick={AgregarCompra} style={{ marginRight: 5 }}>
            Agregar Compra
          </Button>
          <Button onClick={CalcularTotalCompras}>
            Calcular Compras Totales
          </Button>{" "}
          {comprasInventario && (
            <Button onClick={GuardarComprasInvetario}>GuardarCompras</Button>
          )}
          <Divider />
          {comprasInventario && (
            <Typography.Text>
              Compras totales: {comprasInventario}
            </Typography.Text>
          )}
          <Table columns={columns} dataSource={eventoCompra} rowKey={id} />
        </>
      )}
    </div>
  );
    
}

export default MostrarCompras