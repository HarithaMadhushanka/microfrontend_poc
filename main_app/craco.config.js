const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (config) => {
      config.output.publicPath = "auto";
      config.plugins.push(
        new ModuleFederationPlugin({
          name: "host_app",
          remotes: {
            remote_app_1: "remote_app_1@http://localhost:3001/remoteEntry.js",
            remote_app_2: "remote_app_2@http://localhost:3002/remoteEntry.js",
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
