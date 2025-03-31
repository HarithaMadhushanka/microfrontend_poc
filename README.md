# Microfrontend POC Documentation

## Overview

This project demonstrates a microfrontend architecture using **React** and **Webpack Module Federation** via **Create React App (CRA)**. The application includes multiple remote apps exposing components and a host app that authenticates users and dynamically loads components based on the user role.

---

## Project Structure

```
root/
├── main_app/         # Host application (login, layout, dynamic loading)
├── remote_app_1/     # Exposes ThemedComponent & ThemingPanel
└── remote_app_2/     # Exposes DashboardWidget
```

---

## Features

### 🔐 Authentication

- Hardcoded login credentials
- State is persisted using `localStorage`

### 🎨 Theming

- ThemingPanel exposed by `remote_app_1`
- All users can select themes
- Only admins can add new themes
- Themes persist per user using `localStorage`

### 🧩 Remote Components

- `ThemedComponent` and `ThemingPanel` from `remote_app_1`
- `DashboardWidget` from `remote_app_2`
- Admin users see the Dashboard Widget
- All users see the Theming Panel but only admins can add new themes

---

## Setup & Run

### 1. Install dependencies

```bash
cd main_app && yarn install
cd ../remote_app_1 && yarn install
cd ../remote_app_2 && yarn install
```

### 2. Start apps

In separate terminals:

```bash
yarn start  # for main_app (port 3000)
yarn start  # for remote_app_1 (port 3001)
yarn start  # for remote_app_2 (port 3002)
```

---

## Federation Configuration

### Example: `remote_app_1/craco.config.js`

```js
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
```

---

## User Roles

| Username | Password | Role  | Permissions                         |
| -------- | -------- | ----- | ----------------------------------- |
| haritha  | 123      | user  | Select themes                       |
| admin    | admin    | admin | Select + Add themes, view dashboard |

---

## Theming Behavior

- **Theme Panel** appears when clicking the ☰ button in the host nav bar
- Changes are previewed in real-time
- Themes are stored under keys like `theme_haritha` and `theme_admin` in `localStorage`
- Custom themes are saved in `customThemes`

---

## Conclusion

This POC proves the feasibility of dynamically rendering microfrontend components, implementing user-specific theming, and restricting component access based on user roles using React, Module Federation, and TailwindCSS.

---
