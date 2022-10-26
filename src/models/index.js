// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TypeInventory = {
  "ADD": "ADD",
  "REMOVE": "REMOVE",
  "STOCKINITIAL": "STOCKINITIAL"
};

const { StockEventInventario, Inventario, StockEvents, Products, FranquiciasModel } = initSchema(schema);

export {
  StockEventInventario,
  Inventario,
  StockEvents,
  Products,
  FranquiciasModel,
  TypeInventory
};