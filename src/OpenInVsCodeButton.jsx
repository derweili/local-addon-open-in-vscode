import { IconButton } from '@getflywheel/local-components';
import React from 'react';
import VsCodeIcon from './icons/VsCodeIcon';
import openInVSCode from './utils/openInVSCode';

const OpenInVsCodeButton = ({ site }) => {
	const { path } = site;
	const { location: customLocation } = site.openVsCode || {};

	const location = customLocation || path + '/app/public/wp-content/';
	return (
		<IconButton
			style={{ marginInlineEnd: 10 }}
			icon={() => <VsCodeIcon style={{ width: '20px' }} />}
			onClick={() => openInVSCode(location)}
		>
			Open in VS Code
		</IconButton>);
};

export default OpenInVsCodeButton;
