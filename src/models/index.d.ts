import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum Tipototal {
  SOBRANTE = "SOBRANTE",
  FALTANTE = "FALTANTE",
  CUADRA = "CUADRA"
}

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

type EagerHotel = {
  readonly id: string;
  readonly nombre?: string | null;
  readonly direccionCompleta?: string | null;
  readonly visitado?: string | null;
  readonly visitaRecepcionista?: string | null;
  readonly mandoClientes?: string | null;
  readonly fechaVisita?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHotel = {
  readonly id: string;
  readonly nombre?: string | null;
  readonly direccionCompleta?: string | null;
  readonly visitado?: string | null;
  readonly visitaRecepcionista?: string | null;
  readonly mandoClientes?: string | null;
  readonly fechaVisita?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Hotel = LazyLoading extends LazyLoadingDisabled ? EagerHotel : LazyHotel

export declare const Hotel: (new (init: ModelInit<Hotel, HotelMetaData>) => Hotel) & {
  copyOf(source: Hotel, mutator: (draft: MutableModel<Hotel, HotelMetaData>) => MutableModel<Hotel, HotelMetaData> | void): Hotel;
}

type EagerStockEventInventario = {
  readonly id: string;
  readonly quantity?: number | null;
  readonly fecha?: string | null;
  readonly inventarioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStockEventInventario = {
  readonly id: string;
  readonly quantity?: number | null;
  readonly fecha?: string | null;
  readonly inventarioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StockEventInventario = LazyLoading extends LazyLoadingDisabled ? EagerStockEventInventario : LazyStockEventInventario

export declare const StockEventInventario: (new (init: ModelInit<StockEventInventario, StockEventInventarioMetaData>) => StockEventInventario) & {
  copyOf(source: StockEventInventario, mutator: (draft: MutableModel<StockEventInventario, StockEventInventarioMetaData>) => MutableModel<StockEventInventario, StockEventInventarioMetaData> | void): StockEventInventario;
}

type EagerInventario = {
  readonly id: string;
  readonly inventarioInicialFisico?: number | null;
  readonly inventarioFinalFisico?: number | null;
  readonly fechaInicioConteoFisico?: string | null;
  readonly fechaFinConteoFisico?: string | null;
  readonly productsID: string;
  readonly ventas?: number | null;
  readonly compras?: number | null;
  readonly total?: number | null;
  readonly tipoTotal?: Tipototal | keyof typeof Tipototal | null;
  readonly StockEventInventarios?: (StockEventInventario | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInventario = {
  readonly id: string;
  readonly inventarioInicialFisico?: number | null;
  readonly inventarioFinalFisico?: number | null;
  readonly fechaInicioConteoFisico?: string | null;
  readonly fechaFinConteoFisico?: string | null;
  readonly productsID: string;
  readonly ventas?: number | null;
  readonly compras?: number | null;
  readonly total?: number | null;
  readonly tipoTotal?: Tipototal | keyof typeof Tipototal | null;
  readonly StockEventInventarios: AsyncCollection<StockEventInventario>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Inventario = LazyLoading extends LazyLoadingDisabled ? EagerInventario : LazyInventario

export declare const Inventario: (new (init: ModelInit<Inventario, InventarioMetaData>) => Inventario) & {
  copyOf(source: Inventario, mutator: (draft: MutableModel<Inventario, InventarioMetaData>) => MutableModel<Inventario, InventarioMetaData> | void): Inventario;
}

type EagerStockEvents = {
  readonly id: string;
  readonly type?: TypeInventory | keyof typeof TypeInventory | null;
  readonly qty?: number | null;
  readonly fecha?: string | null;
  readonly productsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStockEvents = {
  readonly id: string;
  readonly type?: TypeInventory | keyof typeof TypeInventory | null;
  readonly qty?: number | null;
  readonly fecha?: string | null;
  readonly productsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StockEvents = LazyLoading extends LazyLoadingDisabled ? EagerStockEvents : LazyStockEvents

export declare const StockEvents: (new (init: ModelInit<StockEvents, StockEventsMetaData>) => StockEvents) & {
  copyOf(source: StockEvents, mutator: (draft: MutableModel<StockEvents, StockEventsMetaData>) => MutableModel<StockEvents, StockEventsMetaData> | void): StockEvents;
}

type EagerProducts = {
  readonly id: string;
  readonly name?: string | null;
  readonly StockEvents?: (StockEvents | null)[] | null;
  readonly Inventarios?: (Inventario | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProducts = {
  readonly id: string;
  readonly name?: string | null;
  readonly StockEvents: AsyncCollection<StockEvents>;
  readonly Inventarios: AsyncCollection<Inventario>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Products = LazyLoading extends LazyLoadingDisabled ? EagerProducts : LazyProducts

export declare const Products: (new (init: ModelInit<Products, ProductsMetaData>) => Products) & {
  copyOf(source: Products, mutator: (draft: MutableModel<Products, ProductsMetaData>) => MutableModel<Products, ProductsMetaData> | void): Products;
}

type EagerFranquiciasModel = {
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
}

type LazyFranquiciasModel = {
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
}

export declare type FranquiciasModel = LazyLoading extends LazyLoadingDisabled ? EagerFranquiciasModel : LazyFranquiciasModel

export declare const FranquiciasModel: (new (init: ModelInit<FranquiciasModel, FranquiciasModelMetaData>) => FranquiciasModel) & {
  copyOf(source: FranquiciasModel, mutator: (draft: MutableModel<FranquiciasModel, FranquiciasModelMetaData>) => MutableModel<FranquiciasModel, FranquiciasModelMetaData> | void): FranquiciasModel;
}