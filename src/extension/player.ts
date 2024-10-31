import type NodeCG from "@nodecg/types";
import type {Player} from "../types/schemas";

export const player = (nodecg: NodeCG.ServerAPI) => {
	const player = nodecg.Replicant(
		"player",
	) as unknown as NodeCG.ServerReplicantWithSchemaDefault<Player>;

	nodecg.listenFor("updatePlayerInfo", () => {
		setTimeout(function () {
			nodecg.log.info("Selected players: ", player.value, player.value.length);
		}, 10);
	});
};
