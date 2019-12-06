const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const SourceDirectory = path.resolve(__dirname, "src");
const DistDirectory = path.resolve(__dirname, "dist");

module.exports = [
  {
    target: "electron-main",
    entry: path.resolve(SourceDirectory, "main.ts"),
    output: {
      path: DistDirectory,
      filename: "main.js"
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: "ts-loader",
          options: {
            compilerOptions: {
              sourceMap: process.env.NODE_ENV === "development"
            }
          }
        }
      ]
    },
    resolve: {
      extensions: [".js", ".ts"]
    }
  },
  {
    target: "electron-renderer",
    entry: path.resolve(SourceDirectory, "index.tsx"),
    output: {
      path: DistDirectory,
      filename: "index.js"
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: "ts-loader"
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(SourceDirectory, "index.html"),
        inject: false
      })
    ]
  }
];
