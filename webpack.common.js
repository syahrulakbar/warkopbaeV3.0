const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/scripts/index.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: "file-loader",
        options: {
          name: "image/[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 50,
          },
        },
      ],
      overrideExtension: true,
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/templates/index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public/"),
          to: path.resolve(__dirname, "dist/"),
          globOptions: {
            // CopyWebpackPlugin mengabaikan berkas yang berada di dalam folder images
          },
        },
      ],
    }),

    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
        imageminPngquant({
          quality: [0.3, 0.5],
        }),
      ],
    }),
  ],
};
