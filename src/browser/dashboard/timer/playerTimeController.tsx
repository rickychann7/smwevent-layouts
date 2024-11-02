import {Check, Close} from "@mui/icons-material";
import {IconButton, IconButtonProps} from "@mui/material";
import {useReplicant} from "@nodecg/react-hooks";
import {useEffect, useState} from "react";
import {Player, Timer} from "../../../types/schemas";
import {formatTime} from "../../util/formattime";

type ButtonProps = Pick<IconButtonProps, "onClick" | "color" | "disabled">;

const FinishButton = (props: ButtonProps) => {
	return (
		<IconButton {...props}>
			<Check />
		</IconButton>
	);
};

const UndoButton = (props: ButtonProps) => {
	return (
		<IconButton {...props}>
			<Close />
		</IconButton>
	);
};

const PlayerCompleteTimes = (props: {playerIndex: number}) => {
	const [timer] = useReplicant<Timer>("timer");
	const [formattedCompleteTime, setFormattedCompleteTime] = useState("");
	useEffect(() => {
		if (!timer) return;
		if (timer?.results[props.playerIndex] === 0) {
			setFormattedCompleteTime("N/A");
		} else {
			setFormattedCompleteTime(formatTime(timer.results[props.playerIndex]));
		}
	});
	return <div>: {formattedCompleteTime}</div>;
};

export const PlayerTimeController = () => {
	const [player] = useReplicant<Player>("player");
	const [timer] = useReplicant<Timer>("timer");
	const [isPlayerFinished, setIsPlayerFinished] = useState<boolean>(false);

	if (!timer) return;
	return (
		<div>
			<div
				style={{
					fontSize: 24,
					fontWeight: 900,
				}}
			>
				プレイ中の走者
			</div>
			<div>
				{player?.map(
					(time, index) =>
						time && (
							<div
								key={index}
								style={{
									display: "inline-flex",
									alignItems: "center",
								}}
							>
								{time}
								<PlayerCompleteTimes playerIndex={index} />
								<FinishButton
									onClick={() => {
										nodecg.sendMessage("playerTimeConfirm", index);
										setIsPlayerFinished(true);
									}}
									color='success'
									disabled={isPlayerFinished}
								/>
								<UndoButton
									onClick={() => {
										console.log("player index:", typeof index);

										setIsPlayerFinished(false);
									}}
									color='error'
									disabled={!isPlayerFinished}
								/>
							</div>
						),
				)}
			</div>
		</div>
	);
};
