import type NodeCG from '@nodecg/types';
import type { Announce } from '../types/schemas';

export const announce = (nodecg: NodeCG.ServerAPI) => {
  const announce = nodecg.Replicant('announce') as unknown as NodeCG.ServerReplicantWithSchemaDefault<Announce>;

  nodecg.listenFor('updateAnnounce', () => {
    setTimeout(function () {
      nodecg.log.info('情報更新: ', announce.value);
    }, 10);
  });
};
