// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TypeInventory = {
  "ADD": "ADD",
  "REMOVE": "REMOVE",
  "STOCKINITIAL": "STOCKINITIAL"
};

const { StockEvents, Products, FranquiciasModel } = initSchema(schema);

export {
  StockEvents,
  Products,
  FranquiciasModel,
  TypeInventory
};