// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { FranquiciasModel } = initSchema(schema);

export { FranquiciasModel };
