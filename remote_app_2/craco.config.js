const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (config) => {
      config.output.publicPath = "auto";
      config.plugins.push(
        new ModuleFederationPlugin({
          name: "remote_app_2",
          filename: "remoteEntry.js",
          exposes: {
            "./ChartWidget": "./src/components/ChartWidget",
            "./TableWidget": "./src/components/TableWidget",
            "./UserSummaryCards": "./src/components/UserSummaryCards.jsx",
            "./ActivityFeed": "./src/components/ActivityFeed.jsx",
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
