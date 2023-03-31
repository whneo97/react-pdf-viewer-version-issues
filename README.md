# Introduction
This simplified project is used for replicating the effects of different [pdfjs-dist](https://www.npmjs.com/package/pdfjs-dist) versions on [React PDF Viewer](https://react-pdf-viewer.dev/) when run using Create React App. Versions of `pdfjs-dist` from 2.6.347 onwards are included in this project.

# Versions

- Node Version: 14.19.0
- NPM Version: 7.24.2

## Quickstart

1. Run `npm install`
2. Set the environment variable [`REACT_APP_PDFJS_DIST_VERSION`](https://github.com/whneo97/react-pdf-viewer-version-issues/blob/9fa4e041db4e8c2fc576ea797e7f60b0910c2293/.env#L2) to the version of `pdfjs-dist` to be tested.
3. Run `npm run start` to compile and run the project in development mode.
4. Run `npm run build` to compile and run the project in production mode.

# Results

As described under [https://github.com/react-pdf-viewer/react-pdf-viewer/issues/1465](https://github.com/react-pdf-viewer/react-pdf-viewer/issues/1465), the results for running the project are as follows.

| pdfjs-dist Version | Development | Production |
| ------------- | ------------- | ------------- |
| 3.4.120 | ✘ Uncaught TypeError: Cannot set properties of undefined (setting 'workerSrc') | ✘ Uncaught TypeError: Cannot set properties of undefined (setting 'workerSrc') |
| 3.3.122 | ✔ | ✘ Uncaught TypeError: Cannot set properties of undefined (setting 'workerSrc') |
| 3.2.146 | ✔ | ✘ Uncaught TypeError: Cannot set properties of undefined (setting 'workerSrc') |
| 3.1.81 | ✔ | ✘ Uncaught TypeError: Cannot set properties of undefined (setting 'workerSrc') |
| 3.0.279 | ✔ | ✘ Uncaught TypeError: Cannot set properties of undefined (setting 'workerSrc') |
| 2.16.105 | ✔ | ✘ Uncaught TypeError: Cannot set properties of undefined (setting 'workerSrc') |
| 2.15.349 | ✔ | ✔ |
| 2.14.305 | ✔ | ✔ |
| 2.13.216 | ✔ | ✔ |
| 2.12.313 | ✔ | ✔ |
| 2.11.338 | ✔ | ✔ |
| 2.10.377 | ✔ | ✔ |
| 2.9.359 | ✔ | ✔ |
| 2.8.335 | ✔ | ✔ |
| 2.7.570 | ✔ | ✔ |
| 2.6.347 | ✔ | ✔ |

Versions 2.16.105 onwards are unable to import the pdfjs-dist module stored under the `PdfJsApi` variable of React PDF Viewer's `core.js` correctly (exports from `pdfjs-dist` are not set and hence an error is thrown when the script attempts to access attributes of undefined members).