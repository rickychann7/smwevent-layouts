import type NodeCG from '@nodecg/types';
import { player } from './player';

export default (nodecg: NodeCG.ServerAPI) => {
  nodecg.log.info('NodeCG server is started!');
  player(nodecg);
};
