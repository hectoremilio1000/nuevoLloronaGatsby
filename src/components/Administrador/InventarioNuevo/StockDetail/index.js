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
import { Products, StockEvents } from "../../../../models";
import { PlusSquareOutlined } from "@ant-design/icons";
import moment from "moment";
import "moment/locale/es";
import locale from "antd/es/date-picker/locale/es_ES";

function StockDetail(props) {
  const { name, total, stockEvents, id } = props;

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [date, setDate] = useState("");

  const Mostrar = () => {
    setShow(!show);
  };

  const MostrarCrearEvent = () => {
    setShow2(!show2);
    console.log(id);
  };

  const SelectDate = (value, date) => {
    setDate(date);
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
    message.info("se ha creado  correctamente");
    location.reload();
  };

  const BorrarEvento = async e => {
    const stockEventDelete = await DataStore.query(StockEvents, e);
    message.warning(`Producto borrado exitósamente`, [5]);
    DataStore.delete(stockEventDelete);
  };

  const DeleteProduct = async id => {
    const deleteProduct = await DataStore.query(Products, id);
    DataStore.delete(deleteProduct);
    message.warning(`Producto borrado exitósamente`, [5]);
    location.reload();
  };

  return (
    <div onClick={Mostrar}>
      <div>
        <h4>
          Product: {name} | Total: {total}{" "}
          <PlusSquareOutlined
            onClick={MostrarCrearEvent}
            style={{ fontSize: 20 }}
          />
          <div className="m-2">
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
                <p className="text-uppercase font-weight-bold">
                  Recuerda si es venta, favor de poner el número en negativo
                </p>
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
        <div className="mb-2">
          <Button danger onClick={() => DeleteProduct(id)}>
            Borrar Producto
          </Button>
        </div>
      </div>
      {show &&
        stockEvents.map(event => (
          <Card size="small" className="cardProduct" key={event.id}>
            <p>Tipo de Evento:{event.type}</p>
            <p>Cantidad:{event.qty}</p>

            <p>Fecha:{event.fecha}</p>
            {/* <Popconfirm
              title="Seguro quieres borrar?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            > */}
            <Button
              onClick={() => {
                BorrarEvento(event.id);
              }}
              danger
            >
              Borrar Evento
            </Button>
            {/* </Popconfirm> */}
          </Card>
        ))}
    </div>
  );
}

export default StockDetail;
