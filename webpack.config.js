const path = require("path");

module.exports = {
  entry: {
    outerIframe: "./outerIframe/main.js",
    innerIframe: "./innerIframe/main.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
