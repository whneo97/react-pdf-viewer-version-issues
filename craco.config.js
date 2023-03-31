const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");
const CracoLessPlugin = require("craco-less");
require('react-scripts/config/env');

const pdfjsDistVersion = process.env.REACT_APP_PDFJS_DIST_VERSION;
const versionCmp = (a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
const legacyPrefix = pdfjsDistVersion && versionCmp(pdfjsDistVersion, '2.7.570') <= 0 ? 'es5' : 'legacy';

const pdfTestPath = path.join(__dirname, ".");

module.exports = {
    plugins: [{ plugin: CracoLessPlugin }],
    webpack: {
        alias: {
            'pdfjs-dist': path.resolve(__dirname, `./node_modules/pdfjs-dist-${pdfjsDistVersion}/${legacyPrefix}/build/pdf`)
        },
        configure: (webpackConfig, { env, paths }) => {
            const { isFound, match } = getLoader(
                webpackConfig,
                loaderByName("babel-loader")
            );
            if (isFound) {
                const include = Array.isArray(match.loader.include)
                    ? match.loader.include
                    : [match.loader.include];
                match.loader.include = pdfTestPath.concat[include];
            }

            return webpackConfig;
        }
    }
};