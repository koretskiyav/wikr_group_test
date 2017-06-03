function findLoader(config, callback) {
    var index = config.module.rules.findIndex(callback);
    if (index === -1) throw Error('Loader not found');
    return config.module.rules[index];
}

function addBabelPlugins(webpackConfig, plugins) {
    var babelLoader = findLoader(webpackConfig, function (loader) {
        return loader.loader && loader.loader.includes('babel-loader');
    });
    babelLoader.options.plugins = (babelLoader.options.plugins || []).concat(plugins);
}

module.exports = function (webpackConfig, isDevelopment) {
    addBabelPlugins(webpackConfig, [
        require.resolve('babel-plugin-transform-decorators-legacy')
    ]);
};
