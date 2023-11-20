# Local Add-on to open project in Visual Studio Code

## Getting started

Based on the [Local Add-on Generator](https://github.com/getflywheel/create-local-addon) boilerplate.

## Requirements

The addon assumes the [Visual Studio Code CLI](https://code.visualstudio.com/docs/editor/command-line) being installed on the maschine.
This works on macOS.

**Not yet tested on Windows or Linux.**


## Installation

### Clone

Clone the repository into the following directory depending on your platform:

-   macOS: `~/Library/Application Support/Local/addons`
-   Windows: `C:\Users\username\AppData\Roaming\Local\addons`
-   Debian Linux: `~/.config/Local/addons`

*You can replace 'Local' with 'Local Beta' if you want to create the add-on for Local Beta.*

### Install Add-on Dependencies

`yarn install`

### Add Add-on to Local

1. Clone repo directly into the add-ons folder (paths described above)
2. `yarn install` (install dependencies)
2. `yarn build`
3. Open Local and enable add-on

## Development

### External Libraries

- @getflywheel/local provides type definitions for Local's Add-on API.
	- Node Module: https://www.npmjs.com/package/@getflywheel/local-components
	- GitHub Repo: https://github.com/getflywheel/local-components

- @getflywheel/local-components provides reusable React components to use in your Local add-on.
	- Node Module: https://www.npmjs.com/package/@getflywheel/local
	- GitHub Repo: https://github.com/getflywheel/local-addon-api
	- Style Guide: https://getflywheel.github.io/local-components

### Folder Structure

All files in `/src` will be transpiled to `/lib` using [TypeScript](https://www.typescriptlang.org/). Anything in `/lib` will be overwritten.

### Development Workflow

If you are looking for help getting started, you can consult [the documentation for the add-on generator](https://github.com/getflywheel/create-local-addon#next-steps).

You can consult the [Local add-on API](https://getflywheel.github.io/local-addon-api), which provides a wide range of values and functions for developing your add-on.

## License

MIT
