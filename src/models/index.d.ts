import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum TypeInventory {
  ADD = "ADD",
  REMOVE = "REMOVE",
  STOCKINITIAL = "STOCKINITIAL"
}



type StockEventsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FranquiciasModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class StockEvents {
  readonly id: string;
  readonly type?: TypeInventory | keyof typeof TypeInventory | null;
  readonly qty?: number | null;
  readonly fecha?: string | null;
  readonly productsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<StockEvents, StockEventsMetaData>);
  static copyOf(source: StockEvents, mutator: (draft: MutableModel<StockEvents, StockEventsMetaData>) => MutableModel<StockEvents, StockEventsMetaData> | void): StockEvents;
}

export declare class Products {
  readonly id: string;
  readonly name?: string | null;
  readonly StockEvents?: (StockEvents | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Products, ProductsMetaData>);
  static copyOf(source: Products, mutator: (draft: MutableModel<Products, ProductsMetaData>) => MutableModel<Products, ProductsMetaData> | void): Products;
}

export declare class FranquiciasModel {
  readonly id: string;
  readonly nombreCompleto?: string | null;
  readonly email?: string | null;
  readonly whatsapp?: string | null;
  readonly ciudad?: string | null;
  readonly montoInversion?: number | null;
  readonly porqueInvertir?: string | null;
  readonly dudas?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<FranquiciasModel, FranquiciasModelMetaData>);
  static copyOf(source: FranquiciasModel, mutator: (draft: MutableModel<FranquiciasModel, FranquiciasModelMetaData>) => MutableModel<FranquiciasModel, FranquiciasModelMetaData> | void): FranquiciasModel;
}