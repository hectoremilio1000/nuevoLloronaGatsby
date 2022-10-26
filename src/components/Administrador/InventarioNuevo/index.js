import { Button, Form, Input, message } from "antd";
import { DataStore, Predicates } from "aws-amplify";
import React, { useState, useEffect } from "react";
import { StockEvents } from "../../../models";
import { Products } from "../../../models";
import StockProducto from "./StockProducto";
import { Amplify, Hub } from "@aws-amplify/core";

function InventarioNuevo() {
  const [products, setProducts] = useState([]);
  const [events, setEvents] = useState([]);

  const fetchedProducts = async () => {
    const products = await DataStore.query(Products, Predicates.ALL);
    setProducts(products);
  };

  const fetchedEvents = async () => {
    const events = await DataStore.query(StockEvents, Predicates.ALL);
    setEvents(events);
  };

  useEffect(() => {
    const removeListener = Hub.listen("datastore", async capsule => {
      const {
        payload: { event, data },
      } = capsule;
      console.log("DataStore event", event, data);
      if (event === "ready") {
        fetchedProducts();
      }
    });

      DataStore.start();
    return () => {
      removeListener();
    }
  }, [])
  

  useEffect(() => {
    const removeListener = Hub.listen("datastore", async (capsule) => {
      const {
        payload: { event, data },
      } = capsule;
      console.log("DataStore event", event, data);
      if (event === "ready") {
        
        fetchedEvents();
      }
    })

    DataStore.start();
    return () => {
      removeListener();
    }
    
  }, []);

  const onFinishProduct = async values => {
    const { name } = values;
    const newProduct = await DataStore.save(
      new Products({
        name: name,
      })
    );
    message.success(`Producto creado`, [4]);
    location.reload();
  };
  return (
    <div>
      <h3>Inventario Llorona</h3>

      <h4>Ingresar producto nuevo al Inventario</h4>
      <Form onFinish={onFinishProduct}>
        <Form.Item
          label="Nombre Producto"
          name="name"
          rules={[
            {
              require: true,
              message: "Ingresa el nombre del producto",
            },
            {
              min: 3,
              message:
                "El nombre del producto tiene que tener al menos 3 caracteres",
            },
          ]}
        >
          <Input placeholder="Nombre del producto" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Agregar producto
          </Button>
        </Form.Item>
      </Form>
      <div>
        <StockProducto products={products} events={events} />
      </div>
    </div>
  );
}

export default InventarioNuevo;
