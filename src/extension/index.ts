import type NodeCG from '@nodecg/types';
import { player } from './player';
import { timer } from './timer';
import { category } from './category';

export default (nodecg: NodeCG.ServerAPI) => {
  nodecg.log.info('NodeCG server is started!');
  player(nodecg);
  timer(nodecg);
  category(nodecg);
};
