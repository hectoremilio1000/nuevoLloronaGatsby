// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Tipototal = {
  "SOBRANTE": "SOBRANTE",
  "FALTANTE": "FALTANTE",
  "CUADRA": "CUADRA"
};

const TypeInventory = {
  "ADD": "ADD",
  "REMOVE": "REMOVE",
  "STOCKINITIAL": "STOCKINITIAL"
};

const { Hotel, StockEventInventario, Inventario, StockEvents, Products, FranquiciasModel } = initSchema(schema);

export {
  Hotel,
  StockEventInventario,
  Inventario,
  StockEvents,
  Products,
  FranquiciasModel,
  Tipototal,
  TypeInventory
};