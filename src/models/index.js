// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Franquicias } = initSchema(schema);

export {
  Franquicias
};