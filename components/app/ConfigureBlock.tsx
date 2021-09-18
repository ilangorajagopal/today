import { VStack } from '@chakra-ui/react';
import { Source } from '../../lib/types';
import RSS from '../configuration/RSS';
import Podcasts from '../configuration/Podcasts';
import HackerNews from '../configuration/HackerNews';
import Date from '../configuration/Date';
import YearProgress from '../configuration/YearProgress';
import Readwise from '../configuration/Readwise';

interface ConfigureBlockProps {
	block: Source;
	onClose: () => void;
}

function ConfigureBlock(props: ConfigureBlockProps): JSX.Element {
	const { block, onClose } = props;

	function saveBlock(data: any) {
		console.log('Block Saved');
		console.log(data);
		onClose();
	}

	let currentConfigurationBlock = undefined;
	switch (block.id) {
		case 'rss': {
			currentConfigurationBlock = <RSS saveBlock={saveBlock} />;
			break;
		}

		case 'podcasts': {
			currentConfigurationBlock = <Podcasts saveBlock={saveBlock} />;
			break;
		}

		case 'hn': {
			currentConfigurationBlock = <HackerNews saveBlock={saveBlock} />;
			break;
		}

		case 'date': {
			currentConfigurationBlock = <Date saveBlock={saveBlock} />;
			break;
		}

		case 'year-progress': {
			currentConfigurationBlock = <YearProgress saveBlock={saveBlock} />;
			break;
		}

		case 'readwise': {
			currentConfigurationBlock = <Readwise saveBlock={saveBlock} />;
			break;
		}

		default: {
			console.log('Invalid Block');
			break;
		}
	}

	return <VStack spacing={4}>{currentConfigurationBlock}</VStack>;
}

export default ConfigureBlock;