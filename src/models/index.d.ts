import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type FranquiciasMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Franquicias {
  readonly id: string;
  readonly nombreCompleto?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Franquicias, FranquiciasMetaData>);
  static copyOf(source: Franquicias, mutator: (draft: MutableModel<Franquicias, FranquiciasMetaData>) => MutableModel<Franquicias, FranquiciasMetaData> | void): Franquicias;
}