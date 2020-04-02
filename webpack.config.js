//webpack 要在node环境, 默认读js文件，不能读ts
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",            //入口
  output: {
    path: path.resolve("./dist"),     //转变成绝对路径
    filename: "script/bundle.js"      //打包到哪，文件名是什么
  },
  plugins: [                          //插件
    new HtmlWebpackPlugin({           //打包html, webpack默认不能打包html
      template: './public/index.html' //模版文件
    }), 
    new CleanWebpackPlugin()          //打包之前先清理文件
  ],
  module: {
    rules: [                          //加载规则
      {
        test: /.ts$/,                 //加载到ts结尾的文件交给下面的loader加载器处理
        // loader: "ts-loader"
        use: {
          loader: "ts-loader",
          options: {      
            transpileOnly: true       //ts 和webpack-server-dev 联用，不然编译报错
          }
        }
      }
    ]
  },
  resolve: { // webpack 默认解析的文件是js，要加上ts
    extensions: [".ts", ".js"]
  }
}