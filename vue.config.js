module.exports = {
    configureWebpack: {
        devtool: 'source-map',
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            })
        ]
    },

    devServer: {
        disableHostCheck: true,
    },

    transpileDependencies: ['vuetify'],

    pluginOptions: {
        i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: false,
        },
    },
}

