const HtmlWebPackPlugin = require("html-webpack-plugin");

//This plugin generates an HTML file with <script> injected, 
//writes this to dist/index.html, and minifies the file.
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: './src/index.js',
    devServer: {
        historyApiFallback: true,
        port: process.env.PORT || 3001
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            { //Note that the order of adding these loaders is important. First, we need to resolve 
                //the CSS files before adding them to the DOM with the style-loader. By default, 
                //webpack uses the loaders from the right (last element in the array) to the left 
                //(first element in the array).
                test: /\.css$/,
                use: ["style-loader", "css-loader"], 
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader',
            },
        ]
    },
    plugins: [htmlPlugin]
};
