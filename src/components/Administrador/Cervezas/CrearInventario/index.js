import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Typography,
  Upload,
  DatePicker,
} from "antd";
import { useCervezasContext } from "../../../../Contextos/CervezasContext";

const { Title } = Typography;
const { Item } = Form;
const { Option } = Select;
const { TextArea } = Input;

function CrearInventario() {
  // const { cervezas, setCervezas } = useCervezasContext();
  const [fecha, setFecha] = useState("");
  const [cervezas, setCervezas] = useState("");
  const dateFormat = "YYYY/MM/DD";

  const onFinish = async values => {
    setCervezas(values.numeroCervezas);
    setFecha(JSON.stringify(values.fechaOrden._d).slice(1, 11));
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  console.log(fecha, cervezas);

  return (
    <>
      <Row>
        <Col xs={24}>
          <Title level={4} style={{ textAlign: "center" }}>
            Crear Prueba
          </Title>
        </Col>
        <Col xs={23} sm={20} md={20} lg={20}>
          <Form
            name=""
            labelCol={{
              span: 10,
            }}
            wrapperCol={{
              span: 18,
            }}
            autoComplete="off"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Item label="Fecha Inventario" name="fechaOrden">
              <DatePicker placeholder="fecha" />
            </Item>
            <Item
              label="XX lagger "
              name="numeroCervezas"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el nombre Común",
                },
              ]}
            >
              <InputNumber placeholder="Cantidad" />
            </Item>
            <Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Agregar
              </Button>
            </Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default CrearInventario;
