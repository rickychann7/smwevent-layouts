import NodeCG from '@nodecg/types';
import { Category } from '../types/schemas';

export const category = (nodecg: NodeCG.ServerAPI) => {
  const category = nodecg.Replicant('category') as unknown as NodeCG.ServerReplicantWithSchemaDefault<Category>;

  nodecg.listenFor('updateCategory', (categoryName) => {
    category.value = categoryName;
  });
};
