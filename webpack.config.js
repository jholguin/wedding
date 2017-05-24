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
	      test: /\.(?:png|jpg|svg|eot|ttf|woff|woff2)$/,
	      loader: 'url-loader',
	      query: {
	        // Inline images smaller than 10kb as data URIs
	        limit: 10000
	      }
	    }
		]
	},
	plugins: [HtmlWebpackPluginConfig],
	resolve: {
	  extensions: ['.js', '.jsx']
	}
}