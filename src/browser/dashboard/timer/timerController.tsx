import {Button, ButtonProps} from "@mui/material";
import {useReplicant} from "@nodecg/react-hooks";
import {useState} from "react";
import {Timer} from "../../../types/schemas";
import {formatTime} from "../../util/formattime";

type ControlButtonProps = React.PropsWithChildren<
	Pick<ButtonProps, "color" | "disabled" | "onClick">
>;

const ControlButton = (props: ControlButtonProps) => {
	return <Button variant='contained' {...props}></Button>;
};

export const TimerController = () => {
	const [timer] = useReplicant<Timer>("timer");
	const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

	return (
		<div>
			<div
				style={{
					textAlign: "center",
					fontSize: 48,
				}}
			>
				{formatTime(timer?.raw)}
			</div>

			<div
				style={{
					position: "relative",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<ControlButton
					color='success'
					disabled={isTimerRunning}
					onClick={() => {
						nodecg.sendMessage("startTimer");
						setIsTimerRunning(true);
					}}
				>
					Start
				</ControlButton>
				<ControlButton
					color='error'
					onClick={() => {
						nodecg.sendMessage("stopTimer");
						setIsTimerRunning(false);
					}}
				>
					Stop
				</ControlButton>
				<ControlButton
					color='info'
					onClick={() => {
						nodecg.sendMessage("resetTimer");
						setIsTimerRunning(false);
					}}
				>
					Reset
				</ControlButton>
			</div>
		</div>
	);
};
