var webpack  = require('webpack');

module.exports = {

    entry: './resources/assets/admin/js/admin.js',
    output: {
        path: __dirname + '/public/build',
        filename: '[name].bundle.js',
        publicPath: '/build/'
    },

    plugins: [
        new webpack.ProviderPlugin({
            'window.$':'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },

            {
                test: /\.vue$/,
                loader: 'vue'
            }

        ]
    }

};