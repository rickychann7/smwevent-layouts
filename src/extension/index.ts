import type NodeCG from "@nodecg/types";
import {category} from "./category";
import {player} from "./player";
import {timer} from "./timer";

export default (nodecg: NodeCG.ServerAPI) => {
	nodecg.log.info("NodeCG server is started!");
	player(nodecg);
	timer(nodecg);
	category(nodecg);
};
