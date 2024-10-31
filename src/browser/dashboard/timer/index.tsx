import {PlayerTimeController} from "./playerTimeController";
import {TimerController} from "./timerController";

export const TimerDashboard: React.FC = () => {
	return (
		<div>
			<TimerController />
			<PlayerTimeController />
		</div>
	);
};
