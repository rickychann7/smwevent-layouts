import type NodeCG from '@nodecg/types';
import type { ExampleReplicant } from '../types/schemas';

export const test = (nodecg: NodeCG.ServerAPI) => {
  nodecg.log.info("Hello, from your bundle's extension!");
	nodecg.log.info("I'm where you put all your server-side code.");
	nodecg.log.info(
		`To edit me, open "${__filename.replace(
			'build/extension',
			'src/extension',
		)}" in your favorite text editor or IDE.`,
	);
	nodecg.log.info('You can use any libraries, frameworks, and tools you want. There are no limits.');
	nodecg.log.info('Visit https://nodecg.dev for full documentation.');
	nodecg.log.info('Good luck!');

	const exampleReplicant = nodecg.Replicant('exampleReplicant') as unknown as NodeCG.ServerReplicantWithSchemaDefault<ExampleReplicant>;
	setInterval(() => {
		exampleReplicant.value.age++;
	}, 5000);
	nodecg.listenFor('resetAge', () => {
		exampleReplicant.value.age = 0;
		nodecg.log.info("ExampleReplicant is now reborn!");
	});

	exampleReplicant.on('change', (newVal) => {
		nodecg.log.info(newVal)
	});

};
