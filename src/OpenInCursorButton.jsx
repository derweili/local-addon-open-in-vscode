import { IconButton } from '@getflywheel/local-components';
import React from 'react';
import CursorIcon from './icons/CursorIcon';
import openInCursor from './utils/openInCursor';

const OpenInCursorButton = ({ site }) => {
	const { path } = site;
	const { location: customLocation } = site.openCursor || {};

	const location = customLocation || path + '/app/public/wp-content/';
	return (
		<IconButton
			style={{ marginInlineEnd: 10 }}
			icon={() => <CursorIcon style={{ width: '20px', marginInlineEnd: 10 }} />}
			onClick={() => openInCursor(location)}
		>
			Open in Cursor
		</IconButton>);
};

export default OpenInCursorButton;
