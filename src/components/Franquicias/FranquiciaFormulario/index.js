import React from "react";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Select,
  Typography,
  Upload,
} from "antd";

import Section from "../../styles/section";
const { Title } = Typography;
const { Item } = Form;
const { Option } = Select;
const { TextArea } = Input;

function FranquiciasFormulario() {
  const onFinishFailed = async errorInfo => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = async values => {
    console.log("esto es imagen", values);
    message.success(
      "Información enviada, pronto nos pondremos en contacto contigo",
      [4]
    );
  };

  return (
    <Section className="mt-2">
      <div>
        <h4 className="text-center tituloSection">Quiero Invertir</h4>
        <h2 className="text-center subTituloSection">
          gana dinero de forma SEGURA
        </h2>
      </div>
      <Row>
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
            <Item
              label="Nombre Completo"
              name="nombreCompleto"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa tu nombre completo",
                },
              ]}
            >
              <Input placeholder="Por favor ingresa tu nombre" />
            </Item>
            <Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Ingresa tu email",
                },
                {
                  type: "email",
                  message: "No es un tipo de email valido",
                },
              ]}
            >
              <Input placeholder="Ingresa tu email" />
            </Item>
            <Item
              label="Whatsapp"
              name="whatsapp"
              rules={[
                {
                  required: true,
                  message: "Ingresa tu whatsapp",
                },
                {
                  min: 10,
                  message: "El número de whats debe de ser de 10 dígitos",
                },
              ]}
            >
              <Input placeholder="Ingresa Ingresa tu whatsapp" />
            </Item>
            <Item
              label="Ciudad"
              name="ciudad"
              rules={[
                {
                  required: true,
                  message:
                    "Por favor ingresa el estado donde te interesa poner una franquicia",
                },
              ]}
            >
              <Select placeholder="Por favor ingresa el estado donde te interesa poner una franquicia">
                <Option value="Oaxaca">Oaxaca</Option>
                <Option value="Aguascalientes">Aguascalientes </Option>
                <Option value="BajaCalifornia">Baja California</Option>
                <Option value="BajaCaliforniaSur">Baja California Sur</Option>
                <Option value="Campeche">Campeche</Option>
                <Option value="Chiapas">Chiapas</Option>
                <Option value="Chihuahua">Chihuahua</Option>
                <Option value="Coahuila">Coahuila</Option>
                <Option value="Colima">Colima </Option>
                <Option value="CiudadMexico">Ciudad de México</Option>
                <Option value="EstadoMexico">Estado de México</Option>
                <Option value="Guanajuato"> Guanajuato</Option>
                <Option value="Guerrero">Guerrero</Option>
                <Option value="Hidalgo">Hidalgo</Option>
                <Option value="Coahuila">Jalisco</Option>
                <Option value="Michoacan">Michoacán</Option>
                <Option value="Morelos">Morelos</Option>
                <Option value="Nayarit">Nayarit</Option>
                <Option value="NuevoLeon">Nuevo León</Option>
                <Option value="Oaxaca">Oaxaca</Option>
                <Option value="Puebla">Puebla</Option>
                <Option value="Queretaro">Querétaro</Option>
                <Option value="QuintanaRoo">Quintana Roo</Option>
                <Option value="SanLuisPotosi">San Luis Potosí</Option>
                <Option value="Sinaloa">Sinaloa</Option>
                <Option value="Sonora">Sonora</Option>
                <Option value="Tabasco">Tabasco</Option>
                <Option value="Tamaulipas">Tamaulipas</Option>
                <Option value="Tlaxcala">Tlaxcala</Option>
                <Option value="Veracruz">Veracruz</Option>
                <Option value="Yucatan">Yucatán</Option>
                <Option value="Zacatecas">Zacatecas</Option>
              </Select>
            </Item>
            <Item
              label="Monto de inversión"
              name="Monto inversión"
              rules={[
                {
                  required: true,
                  message: "Ingresa el monto que quieres invertir",
                },
              ]}
            >
              <InputNumber
                placeholder="Ingresa el monto que quieres invertir"
                defaultValue={500000}
                style={{
                  width: "30%",
                }}
                formatter={value =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={value => value.replace(/\$\s?|(,*)/g, "")}
              />
            </Item>
            <Item
              label="¿Por qué quieres Invertir?"
              name="porque"
              rules={[
                {
                  required: true,
                  message: "Ingresa la razón por la cual quieres invertir",
                },
                {
                  min: 10,
                  message:
                    "El número de carácteres escritos debe ser mayor de 10",
                },
              ]}
            >
              <TextArea
                rows={2}
                placeholder="Ingresa la razón por la cual quieres invertir"
              />
            </Item>
            <Item label="¿Tengo dudas?" name="dudas">
              <Input placeholder="Ingresa tu duda" />
            </Item>
            <Item>
              <Button type="primary" htmlType="submit">
                Mandar información
              </Button>
            </Item>
          </Form>
        </Col>
      </Row>
    </Section>
  );
}

export default FranquiciasFormulario;
