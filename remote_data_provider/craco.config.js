const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = "auto";
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "remote_data_provider",
          filename: "remoteEntry.js",
          exposes: {
            "./publicApi": "./src/api/publicApi.jsx",
            "./helpers": "./src/utils/helpers.jsx",
          },
          shared: {
            react: { singleton: true, eager: true },
            "react-dom": { singleton: true, eager: true },
          },
        })
      );

      return webpackConfig;
    },
  },
};
