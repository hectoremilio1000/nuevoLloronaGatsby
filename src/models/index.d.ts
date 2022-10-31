import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export enum TypeInventory {
  ADD = "ADD",
  REMOVE = "REMOVE",
  STOCKINITIAL = "STOCKINITIAL"
}

type HotelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StockEventInventarioMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InventarioMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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

export declare class Hotel {
  readonly id: string;
  readonly nombre?: string | null;
  readonly direccionCompleta?: string | null;
  readonly visitado?: string | null;
  readonly visitaRecepcionista?: string | null;
  readonly mandoClientes?: string | null;
  readonly fechaVisita?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Hotel, HotelMetaData>);
  static copyOf(source: Hotel, mutator: (draft: MutableModel<Hotel, HotelMetaData>) => MutableModel<Hotel, HotelMetaData> | void): Hotel;
}

export declare class StockEventInventario {
  readonly id: string;
  readonly type?: TypeInventory | keyof typeof TypeInventory | null;
  readonly quantity?: string | null;
  readonly fecha?: string | null;
  readonly inventarioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<StockEventInventario, StockEventInventarioMetaData>);
  static copyOf(source: StockEventInventario, mutator: (draft: MutableModel<StockEventInventario, StockEventInventarioMetaData>) => MutableModel<StockEventInventario, StockEventInventarioMetaData> | void): StockEventInventario;
}

export declare class Inventario {
  readonly id: string;
  readonly inventarioInicialFisico?: string | null;
  readonly inventarioFinalFisico?: string | null;
  readonly fechaInicioConteoFisico?: string | null;
  readonly fechaFinConteoFisico?: string | null;
  readonly productsID: string;
  readonly StockEventInventarios?: (StockEventInventario | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Inventario, InventarioMetaData>);
  static copyOf(source: Inventario, mutator: (draft: MutableModel<Inventario, InventarioMetaData>) => MutableModel<Inventario, InventarioMetaData> | void): Inventario;
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
  readonly Inventarios?: (Inventario | null)[] | null;
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