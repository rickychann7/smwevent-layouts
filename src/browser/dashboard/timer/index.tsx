import { TimerController } from './timerController';
import { PlayerTimeController } from './playerTimeController';

export const TimerDashboard: React.FC = () => {
  return (
    <div>
      <TimerController />
      <PlayerTimeController />
    </div>
  );
};
