import type NodeCG from '@nodecg/types';
import { Player, Timer } from '../types/schemas';

export const timer = (nodecg: NodeCG.ServerAPI) => {
  const timer = nodecg.Replicant('timer') as unknown as NodeCG.ServerReplicantWithSchemaDefault<Timer>;
  const player = nodecg.Replicant<Player>('player');

  let startTime: Date | null = null;
  let elapsedTime: number = 0;
  let pausedTime: number = 0;
  let timerInterval: NodeJS.Timeout | null = null;

  function startTimer(): void {
    nodecg.log.info('timer start');
    if (timerInterval) return;
    startTime = new Date();
    timerInterval = setInterval(() => {
      elapsedTime = new Date().getTime() - startTime!.getTime() + pausedTime;
      updateDisplay(elapsedTime);
    }, 1000);
    timer.value.state = 'Running';
  }

  function stopTimer(): void {
    nodecg.log.info('timer stop');
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
      pausedTime = elapsedTime;
      timer.value.state = 'Finished';
    }
  }

  function resetTimer(): void {
    nodecg.log.info('timer reset');
    stopTimer();
    elapsedTime = 0;
    pausedTime = 0;
    updateDisplay(elapsedTime);
    timer.value.state = 'Stopped';
    timer.value.results = [];
    timer.value.completeCount = 0;
  }

  function updateDisplay(time: number) {
    timer.value.raw = time;
  }

  nodecg.listenFor('startTimer', () => {
    startTimer();
  });

  nodecg.listenFor('stopTimer', () => {
    stopTimer();
  });

  nodecg.listenFor('resetTimer', () => {
    resetTimer();
  });

  nodecg.listenFor('currentTimerState', () => {
    nodecg.log.info('TimerState: ', timer.value.state);
  });

  nodecg.listenFor('playerTimeConfirm', (data) => {
    timer.value.results[data] = elapsedTime;
    timer.value.completeCount += 1;
    nodecg.log.info('Player:', data, ' finished their run in', timer.value.results[data] + '!');
    if (player.value) {
      if (timer.value.completeCount >= player.value.length) {
        stopTimer();
      }
    }
  });

  nodecg.listenFor('playerTimeUndo', (data) => {
    timer.value.results[data] = null;
    timer.value.completeCount -= 1;
    nodecg.log.info(timer.value.results[data]);
    if (player.value) {
      if (timer.value.completeCount < player.value.length) {
        startTimer();
      }
    }
  });
};
