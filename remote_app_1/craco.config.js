const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (config) => {
      config.output.publicPath = "auto";
      config.plugins.push(
        new ModuleFederationPlugin({
          name: "remote_app_1",
          filename: "remoteEntry.js",
          exposes: {
            "./ThemedComponent": "./src/components/ThemedComponent",
            "./ThemingPanel": "./src/components/ThemingPanel",
          },
          shared: {
            react: { singleton: true, eager: true },
            "react-dom": { singleton: true, eager: true },
          },
        })
      );
      return config;
    },
  },
};
