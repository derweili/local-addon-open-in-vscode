import { exec } from 'child_process';
import os from 'os';

const openInVsCodeOnMac = (path: string) => {
	const isWorkspaceFile = path.endsWith('.code-workspace');

	// Escape spaces in path
	const pathEscaped = path.replace(/ /g, '\\ ');

	if (isWorkspaceFile) {
		exec(`code ${pathEscaped}`, (err) => {
			if (err) {
				global.console.error(err);
			}
		});
		return;
	}

	// Open folder
	exec(`cd ${pathEscaped} && code .`, (err) => {
		if (err) {
			global.console.error(err);
		}
	});
};

// Open in linux, for now just proxy the mac function
const openInVsCodeOnLinux = (path: string) => {
	openInVsCodeOnMac(path);
};

const openInVSCode = (path: string) => {
	const platform = os.platform();

	switch (platform) {
		case 'darwin':
			openInVsCodeOnMac(path);
			break;
		// handle all linux distros
		case 'linux':
		case 'freebsd':
		case 'openbsd':
			openInVsCodeOnLinux(path);

		default:
			openInVsCodeOnMac(path);
			global.alert('Sorry, this feature is not yet available for your platform.');
			break;
	}
};

export default openInVSCode;
