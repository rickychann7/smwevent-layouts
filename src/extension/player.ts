import type NodeCG from '@nodecg/types';
import type { Player } from '../types/schemas';

export const player = (nodecg: NodeCG.ServerAPI) => {
  const player = nodecg.Replicant('player') as unknown as NodeCG.ServerReplicantWithSchemaDefault<Player>;

  nodecg.listenFor('updatePlayerInfo', () => {
    nodecg.log.info('Racer count: ', player.value.racer);
    nodecg.log.info('Selected players: ', player.value.name);
  });
};
