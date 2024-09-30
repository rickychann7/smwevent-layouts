import type NodeCG from '@nodecg/types';
import { Nextrun } from '../types/schemas';

export const nextRun = (nodecg: NodeCG.ServerAPI) => {
  const nextRun = nodecg.Replicant('nextrun') as unknown as NodeCG.ServerReplicantWithSchemaDefault<Nextrun>;

  nodecg.listenFor('updateNextRun', () => {
    setTimeout(function () {
      nodecg.log.info('次イベント名更新: ', nextRun.value);
    }, 10);
  });
};
