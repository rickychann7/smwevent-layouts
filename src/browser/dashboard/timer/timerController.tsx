import {Pause, PlayArrow, RestartAlt, Terminal} from "@mui/icons-material";
import {Button} from "@mui/material";
import {useReplicant} from "@nodecg/react-hooks";
import {Timer} from "../../../types/schemas";
import {formatTime} from "../../util/formattime";

export const TimerController = () => {
	const [timer] = useReplicant<Timer>("timer");
	return (
		<div
			style={{
				display: "flex",
				flexFlow: "column",
				justifyContent: "center",
				borderRadius: "5px",
				margin: "10px",
			}}
		>
			<div
				style={{
					position: "relative",
					textAlign: "center",
					fontSize: "72px",
					fontFamily: "FiraCode Nerd Font",
					fontWeight: "bold",
				}}
			>
				{formatTime(timer?.raw)}
			</div>
			<div style={{position: "relative", textAlign: "center", marginTop: 10}}>
				<Button
					variant='contained'
					color='success'
					size='large'
					startIcon={<PlayArrow />}
					onClick={() => nodecg.sendMessage("startTimer")}
				/>
				<Button
					variant='contained'
					color='error'
					size='large'
					startIcon={<Pause />}
					onClick={() => nodecg.sendMessage("stopTimer")}
				></Button>
				<Button
					variant='contained'
					size='large'
					startIcon={<RestartAlt />}
					onClick={() => nodecg.sendMessage("resetTimer")}
				></Button>
				<Button
					variant='contained'
					size='large'
					color='info'
					startIcon={<Terminal />}
					style={{fontSize: 20}}
					onClick={() => nodecg.sendMessage("currentTimerState")}
				></Button>
			</div>
		</div>
	);
};
