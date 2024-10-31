import "@fontsource-variable/m-plus-1";
import {useReplicant} from "@nodecg/react-hooks";
import {useEffect, useState} from "react";
import {Player, Timer} from "../../../types/schemas";
import {formatTime} from "../../util/formattime";
import {background, text} from "../styles/color";

export const Nameplate = (props: {index: number}) => {
	const [player] = useReplicant<Player>("player");
	const [timer] = useReplicant<Timer>("timer");
	const [formattedCompleteTime, setFormattedCompleteTime] = useState("");

	useEffect(() => {
		if (!timer) return;
		if (timer?.results[props.index] === 0) {
			setFormattedCompleteTime("");
		} else {
			setFormattedCompleteTime(formatTime(timer.results[props.index]));
		}
	});

	if (!player || !timer) return;

	return (
		<div
			style={{
				position: "absolute",
				top: 0,
				width: 500,
				fontWeight: 800,
				backgroundColor: background.nameplate,
				color: text.normal,
				boxSizing: "border-box",
				border: "4px solid white",
				borderTop: "none",
				borderTopLeftRadius: 0,
				borderBottomLeftRadius: 15,
				borderBottomRightRadius: 15,
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					paddingTop: 5,
					paddingLeft: 10,
					paddingRight: 10,
					paddingBottom: 5,
				}}
			>
				<div>{player[props.index]}</div>
				<div style={{color: text.timerFinished}}>{formattedCompleteTime}</div>
			</div>
		</div>
	);
};
