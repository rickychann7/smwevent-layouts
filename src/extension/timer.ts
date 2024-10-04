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
      timer.value.raw = elapsedTime;
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
    timer.value.raw = elapsedTime;
    timer.value.state = 'Stopped';
    timer.value.results = [];
    timer.value.completeCount = 0;
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
    console.log(timer.value.completeCount);
    nodecg.log.info(timer.value.completeCount, '/', player.value?.length);
  });

  nodecg.listenFor('playerTimeUndo', (data) => {
    timer.value.results[data] = null;
    if (player.value) {
      if (timer.value.completeCount > 0) {
        timer.value.completeCount -= 1;
        console.log(timer.value.completeCount);
      }
      nodecg.log.info(timer.value.results[data]);

      if (timer.value.state === 'Finished' || 'Stopped') {
        if (timer.value.completeCount < player.value.length) {
          startTimer();
        }
      }
    }
  });
};
