import type NodeCG from '@nodecg/types';
import { Event } from '../types/schemas';

export const event = (nodecg: NodeCG.ServerAPI) => {
  const event = nodecg.Replicant('Event') as unknown as NodeCG.ServerReplicantWithSchemaDefault<Event>;

  nodecg.listenFor('updateUpcomingEvent', () => {
    setTimeout(function () {
      nodecg.log.info('イベント: ', event.value);
    }, 10);
  });
};
