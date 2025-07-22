import { exec } from 'child_process';
import os from 'os';

const openInCursorOnMac = (_path: string) => {
	const path = _path.trim();
	const isWorkspaceFile = path.endsWith('.code-workspace');

	// Escape spaces in path
	const pathEscaped = path.replace(/ /g, '\\ ');

	if (isWorkspaceFile) {
		exec(`cursor ${pathEscaped}`, (err) => {
			if (err) {
				global.console.error(err);
			}
		});
		return;
	}

	// Open folder
	exec(`cd ${pathEscaped} && cursor .`, (err) => {
		if (err) {
			global.console.error(err);
		}
	});
};

// Open in linux, for now just proxy the mac function
const openInCursorOnLinux = (path: string) => {
	openInCursorOnMac(path);
};

const openInCursor = (path: string) => {
	const platform = os.platform();

	switch (platform) {
		case 'darwin':
			openInCursorOnMac(path);
			break;
		// handle all linux distros
		case 'linux':
		case 'freebsd':
		case 'openbsd':
			openInCursorOnLinux(path);

		default:
			openInCursorOnMac(path);
			global.alert('Sorry, this feature is not yet available for your platform.');
			break;
	}
};

export default openInCursor;
