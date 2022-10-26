import { Card } from 'antd';
import { DataStore, Hub, Predicates } from "aws-amplify";
import React, { useState, useEffect } from "react";
import { Inventario, StockEvents } from '../../../../models';
import { Products } from '../../../../models';


function InventarioProductos() {
  
  const [products, setProducts] = useState("");
  const [events, setEvents] = useState("");
  const [inventory, setInventory] = useState([])
  


  const fetchProducts = async () => {
    const productos = await DataStore.query(Products, Predicates.ALL);
    setProducts(productos);
  }

  useEffect(() => {
    
         fetchProducts();
   

 
  }, [])

  const fetchEvents = async () => {
    const eventos = await DataStore.query(StockEvents);
    setEvents(eventos);
  }

  useEffect(() => {
    const subscription = DataStore.observe(StockEvents).subscribe(fetchEvents())
    return () => subscription.unsubscribe();
  }, [])

  const fechtInventory = async () => {
    const inventoria = await DataStore.query(Inventario);
    setInventory(inventoria)
  }

  useEffect(() => {
    const subscription = DataStore.observe(Inventario).subscribe(fechtInventory())
    return () => subscription.unsubscribe();
  }, [])
  

  
  

  // console.log(products)

  // console.log(events)



  return (
    <div>
      {products && <>
        {products.map((product => {
          const { id } = product;
          console.log("producto", id);

          const eventFilter = events.filter(
            event => event.productsID === id
          )

          console.log("el producto id es:",id, eventFilter)


        })
          
          
        )} 
      </>}
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