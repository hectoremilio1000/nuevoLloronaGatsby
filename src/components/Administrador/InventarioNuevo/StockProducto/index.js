import {
  Button,
  Card,
  DatePicker,
  Form,
  InputNumber,
  message,
  Select,
} from "antd";
import { DataStore } from "aws-amplify";
import React, { useState } from "react";
import { Products } from "../../../../models";
import { PlusSquareOutlined } from "@ant-design/icons";
import moment from "moment";
import "moment/locale/es";
import locale from "antd/es/date-picker/locale/es_ES";
import StockDetail from "../StockDetail";

function StockProducto({ events, products }) {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  console.log(products);
  const ShowEvent = () => {
    setShow(!show);
  };

  const SelectDate = (value, date) => {
    setDate(date);
  };

  const MostrarCrearEvent = () => {
    setShow2(!show2);
  };

  const onFinish = async values => {
    const { type, cantidad } = values;
    // const producto = await DataStore.query(Products, id);
    await DataStore.save(
      new StockEvents({
        type: type,
        qty: cantidad,
        productsID: id,
        fecha: date,
      })
    );
    console.log("se ha creado  correctamente", type, cantidad, date, id);
  };

  return (
    <div>
      {products.map(product => {
        const { id } = product;
        const relevantStockEvents = events.filter(
          event => event.productsID === id
        );

        const initialValue = 0;
        const TotalInventory = relevantStockEvents.reduce(
          (previousValue, currentValue) => previousValue + currentValue.qty,
          initialValue
        );

        return (
          <div key={product.id}>
            <StockDetail
              id={product.id}
              name={product.name}
              total={TotalInventory}
              stockEvents={relevantStockEvents}
            />
          </div>
        );
      })}
    </div>
  );
}

{
  /* <div key={product.id}>
            <div className="mt-2">
              <div>
                <h4 onClick={ShowEvent}>
                  {" "}
                  Producto:{product.name} || Total: {TotalInventory}{" "}
                  <PlusSquareOutlined
                    onClick={MostrarCrearEvent}
                    style={{ fontSize: 20 }}
                  />
                  <div className="m-4" key={product.id}>
                    {show2 && (
                      <Form onFinish={onFinish}>
                        <Form.Item label="Tipo" name="type">
                          <Select placeholder="selecciona si es compra o venta">
                            <Select.Option value="STOCKINITIAL">
                              Stock inicial
                            </Select.Option>
                            <Select.Option value="ADD">Compra</Select.Option>
                            <Select.Option value="REMOVE">Venta</Select.Option>
                          </Select>
                        </Form.Item>
                        <Form.Item label="cantidad" name="cantidad">
                          <InputNumber placeholder="Cantidad" />
                        </Form.Item>
                        <Form.Item label="fecha" name="fecha">
                          <DatePicker
                            locale={locale}
                            placeholder="fecha"
                            onChange={SelectDate}
                          />
                        </Form.Item>
                        <Form.Item>
                          <Button type="primary" htmlType="submit">
                            Guardar
                          </Button>
                        </Form.Item>
                      </Form>
                    )}
                  </div>
                </h4>
              </div>
              <Button danger onClick={() => DeleteProduct(id)}>
                Borrar Producto
              </Button>
            </div>

            {show &&
              relevantStockEvents.map(event => (
                <Card>
                  <p>Tipo:{event.type}</p>
                  <p>Cantidad:{event.qty}</p>
                  <p>Fecha:{event.fecha}</p>
                </Card>
              ))}
          </div> */
}

export default StockProducto;
