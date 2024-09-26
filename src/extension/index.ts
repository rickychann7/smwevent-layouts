import type NodeCG from '@nodecg/types';
import { test } from './example';

export default (nodecg: NodeCG.ServerAPI) => {
	test(nodecg);
}