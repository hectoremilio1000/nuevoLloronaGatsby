import { Card, Spin, Table } from 'antd';
import { DataStore, Hub, Predicates } from "aws-amplify";
import React, { useState, useEffect } from "react";
import { Inventario, StockEvents } from '../../../../models';
import { Products } from '../../../../models';
import { navigate } from "gatsby";


function InventarioProductos() {
  const [showSpin, setShowSpin] = useState(false);
  const [products, setProducts] = useState("");
  const [events, setEvents] = useState("");
  const [inventory, setInventory] = useState([])
  


  const fetchProducts = async () => {
try {
  const productos = await DataStore.query(Products);
  setProducts(productos);
  setShowSpin(false);
} catch (error) {
  console.log(error)
}
    
   

   
    
  }

  useEffect(() => {
    setShowSpin(true);
    fetchProducts();
    const sub = DataStore.observe(Products).subscribe(fetchProducts);
    return () => {
      sub.unsubscribe();
    }
   
  }, [])

  // const fetchEvents = async () => {
  //   const eventos = await DataStore.query(StockEvents);
  //   setEvents(eventos);
  // }

  // useEffect(() => {
  //   const subscription = DataStore.observe(StockEvents).subscribe(fetchEvents())
  //   return () => subscription.unsubscribe();
  // }, [])

  // const fechtInventory = async () => {
  //   const inventoria = await DataStore.query(Inventario);
  //   setInventory(inventoria)
  // }

  // useEffect(() => {
  //   const subscription = DataStore.observe(Inventario).subscribe(fechtInventory())
  //   return () => subscription.unsubscribe();
  // }, [])
  
  const columns = [{
    title: "Id",
    dataIndex: 'id',
    key:'id'
  },
    {
      title: 'Productos',
      dataIndex: 'name',
      key:'name'
  }]



  return (
    <div >
      {showSpin ? <Spin size="large" /> :
        <Table columns={columns} dataSource={products} rowKey="id" onRow={producto => ({
          onClick: () => navigate(`producto/${producto.id}`, {replace:true})
        })}/>}

      {/* {products && <>
        {products.map((product => {
          const { id } = product;
          console.log("producto", id);

          const eventFilter = events.filter(
            event => event.productsID === id
          )

          console.log("el producto id es:",id, eventFilter)


        })
          
          
        )} 
      </>} */}
    </div>
  );
}

{
  /* (productos) => <div key={productos.id}>
          <p>{productos.name}</p>
        </div>*/
}

// producto => (
//   <div>
//     <p>{producto.name}</p>
//   </div>
// );

export default InventarioProductos