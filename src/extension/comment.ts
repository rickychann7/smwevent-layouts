import type NodeCG from '@nodecg/types';
import type { Comment } from '../types/schemas';

export const comment = (nodecg: NodeCG.ServerAPI) => {
  const comment = nodecg.Replicant('comment') as unknown as NodeCG.ServerReplicantWithSchemaDefault<Comment>;

  nodecg.listenFor('updateComment', () => {
    setTimeout(function () {
      nodecg.log.info('Comment: ', comment.value, comment.value.length);
    }, 10);
  });
};
