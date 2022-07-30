import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type FranquiciasModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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