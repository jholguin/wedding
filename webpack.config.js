/*
    ./webpack.config.js
*/

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
	entry: './client/index.js',
	output:{
		path: path.resolve('dist'),
		filename: 'index_bundle.js'
	},
	module:{
		loaders:[
			{ 
				test: /\.js$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/,
        query:{
          presets: ['react', 'es2015', 'stage-0']
        } 
			},
			{ 
				test: /\.jsx$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/ 
			},
			{ 
				test: /\.scss$/,
      	use: [
      		"style-loader",
      		"css-loader",
      		"sass-loader"
  		  ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=dist/fonts/[name].[ext]',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        loader: 'file-loader?name=dist/images/[name].[ext]',
        exclude: /node_modules/
      },
      {
        test: /\.(ico)$/,
        loader: 'file-loader?name=dist/[name].[ext]',
        exclude: /node_modules/
      }
		]
	},
	plugins: [HtmlWebpackPluginConfig],
	resolve: {
	  extensions: ['.js', '.jsx']
	}
}