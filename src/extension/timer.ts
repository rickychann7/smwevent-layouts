import type NodeCG from '@nodecg/types';
import { Timer } from '../types/schemas';

export const timer = (nodecg: NodeCG.ServerAPI) => {
  const timer = nodecg.Replicant('timer') as unknown as NodeCG.ServerReplicantWithSchemaDefault<Timer>;

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
  }

  function stopTimer(): void {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
      pausedTime = elapsedTime;
    }
  }

  function resetTimer(): void {
    stopTimer();
    elapsedTime = 0;
    pausedTime = 0;
    updateDisplay(elapsedTime);
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
};
