import { useReplicant } from '@nodecg/react-hooks';
import { Player, Timer } from '../../../types/schemas';
import { Button } from '@mui/material';
import { Check, Undo } from '@mui/icons-material';
import { PlayerCompleteTimes } from './playerCompleteTimes';

export const PlayerTimeController = () => {
  const [player] = useReplicant<Player>('player');
  const [timer] = useReplicant<Timer>('timer');

  if (!timer) return;
  return (
    <div>
      <div style={{ fontSize: 32, fontWeight: 800 }}>プレイ中の走者</div>
      <div>
        {player?.map(
          (value, index) =>
            value && (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <div style={{ fontSize: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {value}
                    <div style={{ position: 'relative', margin: 10 }}>
                      <Button
                        variant="contained"
                        color="success"
                        size="medium"
                        startIcon={<Check />}
                        onClick={() => {
                          nodecg.sendMessage('playerTimeConfirm', index);
                          console.log('player index:', index);
                          console.log(timer.completeCount + '/' + player.length);
                        }}></Button>
                      <Button
                        variant="contained"
                        color="error"
                        size="medium"
                        startIcon={<Undo />}
                        onClick={() => {
                          console.log('player index:', typeof index);
                          nodecg.sendMessage('playerTimeUndo', index);
                          console.log(timer.completeCount + '/' + player.length);
                        }}></Button>
                    </div>
                  </div>
                  <div style={{ fontSize: 26 }}>
                    <PlayerCompleteTimes index={index} />
                  </div>
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  );
};
