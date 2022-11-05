import { Button, Card, Form, Input, message } from "antd";
import { DataStore } from "aws-amplify";
import React, { useState } from 'react'
import { Products } from "../../../../models";

  const { Item } = Form;

function CrearProductoPrueba() {
  const [name, setName] = useState("")

  const guardarProducto = async () => {
    await DataStore.save(
      new Products({
        name
      })
    );
    window.location.reload(false);
    message.success('Producto guardado')
  }

  return (
    <Card title="Ingesa los datos para crear un Producto">
      <Item label="Nombre Producto">
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Nombre Producto"
          style={styles.input}
        />
      </Item>
      <Item>
        <Button type="primary" onClick={guardarProducto}>Guardar Producto</Button>
      </Item>
    </Card>
  );
}

const styles = {
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    backgroundColor: "white",

    borderRadius: 5,
  },
};

export default CrearProductoPrueba