import SettingsPage from './SettingsPage';
import fs from 'fs-extra';
import path from 'path';
import OpenInVsCodeButton from './OpenInVsCodeButton';

const packageJSON = fs.readJsonSync(path.join(__dirname, '../package.json'));
const addonID = packageJSON.slug;

export default function (context) {
	const { React, hooks } = context;

	/**
	 * Register settings page
	 *
	 * The`path` is relative to the context of this hook, which is the currently viewed site
	 *
	 * The full path would look something like`/main/site-info/:siteID/<below-path-var>`
	 */
	hooks.addFilter('siteInfoToolsItem', (menu) => [
		...menu,
		{
			menuItem: 'Open in VSCode',
			path: `/${addonID}`,
			render: (props) => <SettingsPage {...props} />,
		},
	]);

	/**
	 * Add button to top right of site info page
	 */
	hooks.addContent('SiteInfo_Top_TopRight', (site) => <OpenInVsCodeButton site={site} />);
}
