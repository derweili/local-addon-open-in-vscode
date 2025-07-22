import React, { useState } from 'react';
import { ipcRenderer } from 'electron';
import { TableList, TableListRow } from '@getflywheel/local-components';
import OpenInCursorButton from './OpenInCursorButton';

const SettingsPage = (props) => {
	const siteId = props.site?.id;

	const [location, setLocation] = useState(props.site.openCursor?.location || '');

	const updateLocation = (event) => {
		const newLocation = event.target.value;
		setLocation(newLocation);
		ipcRenderer.send('save-cursor-location', siteId, newLocation);
	};

	return (
		<div style={{ flex: '1', overflowY: 'auto', margin: '10px' }}>
			<h2>Custom Cursor Config</h2>
			<p>The Cursor plugin will by default open the <code>wp-content</code> of your project. If you want to change this behavior, you can specify a custom path here.</p>
			<p>Supports folders and <code>.code-workspace</code> Workspace files</p>
			<TableList>
				<TableListRow label="Custom Path">
					<input
						type="text"
						value={location}
						onChange={updateLocation}
						placeholder={props.site?.path ? `Default: ${props.site.path}` : ''}
						style={{ width: '100%', padding: 10, border: '1px solid', marginBlock: 5 }}
					/>
				</TableListRow>
				<TableListRow label="Open">
					<OpenInCursorButton site={props.site} />
				</TableListRow>
			</TableList>
		</div>
	);
};

export default SettingsPage;
