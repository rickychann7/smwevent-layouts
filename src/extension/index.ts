import type NodeCG from '@nodecg/types';
import { player } from './player';
import { announce } from './announce';
import { event } from './event';
import { timer } from './timer';

export default (nodecg: NodeCG.ServerAPI) => {
  nodecg.log.info('NodeCG server is started!');
  player(nodecg);
  announce(nodecg);
  event(nodecg);
  timer(nodecg);
};
