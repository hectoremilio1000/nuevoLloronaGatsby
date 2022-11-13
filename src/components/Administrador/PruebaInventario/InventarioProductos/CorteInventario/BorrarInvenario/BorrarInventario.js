import { Button, message } from 'antd';
import { DataStore, Amplify } from "aws-amplify";
import React from 'react'
import { Inventario } from '../../../../../../models'
import awsExports from "../../../../../../aws-exports";
Amplify.configure(awsExports);

function BorrarInventario({ id }) {



  const DeleteInventario = async ()=> {
    const toDeleteID = id
    try {
      const toDelete = await DataStore.query(Inventario, toDeleteID);
      await DataStore.delete(toDelete);
      window.location.reload(false);
      console.log('registro borrado')
    } catch (error) {
      console.log("error deleting unit", error);
    }
}
 
    

  return (
    <div key={id}>
      <Button type="danger" onClick={DeleteInventario} style={{marginLeft:10}}>Borrar Inventario</Button>
    </div>
  )
}

export default BorrarInventario