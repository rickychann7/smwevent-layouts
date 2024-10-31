import "@fontsource-variable/rubik";
import {useReplicant} from "@nodecg/react-hooks";
import {CSSProperties, useEffect, useState} from "react";
import {Timer} from "../../../types/schemas";
import {formatTime} from "../../util/formattime";
import {text} from "../styles/color";

export const MainTimer = (props: {style: CSSProperties}) => {
	const [timer] = useReplicant<Timer>("timer");
	const [timerColor, setColor] = useState<string>(text.timerStopped);

	useEffect(() => {
		if (timer?.state == "Finished") {
			setColor(text.timerFinished);
		} else if (timer?.state == "Running") {
			setColor("white");
		} else {
			setColor("white");
		}
	});

	if (!timer) {
		return;
	} else {
		return (
			<div
				style={{
					...props.style,
					color: timerColor,
					fontFamily: "Rubik Variable",
					fontWeight: 600,
					borderTopColor: "white",
					textAlign: "left",
				}}
			>
				<div>{formatTime(timer.raw)}</div>
			</div>
		);
	}
};
