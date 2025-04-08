# Microfrontend POC using React + Module Federation

This project showcases a clean microfrontend architecture using **React**, **CRA**, **CRACO**, and **Module Federation**.  
It is structured into three independently running apps:

- **Main App (Host App)** (port `3000`)
- **Remote Components App** (`remote_app_components`, port `3003`)
- **Remote Data Provider App** (`remote_data_provider`, port `3004`)

---

## Architecture Overview

### Main App (`main_app`, port `3000`)
- Main container for the entire app.
- Handles routing and layout for the main shell.
- Dynamically loads:
  - UI components from `remote_app_components`
  - Utility and API functions from `remote_data_provider`

---

### Remote Components App (`remote_app_components`, port `3003`)
- Exposes **only UI components**:
  - `ChartWidget`
  - `TableWidget`
  - `UserSummaryCards`
  - `ActivityFeed`
  - `ThemedComponent`
- These components are themable and can be role-aware (admin vs general).

---

### Remote Data Provider (`remote_data_provider`, port `3004`)
- Exposes **pure JavaScript modules**:
  - API functions like `fetchPublicPosts`, etc...
  - Utility functions like `toTitleCase`, etc...
- Used directly inside the host for logic-heavy concerns or data fetching.

---

## Tech Stack

- React + CRA (Create React App)
- CRACO (Webpack override)
- Webpack 5 Module Federation
- Recharts (for visual widgets like `ChartWidget`)
- Plain JS utilities (for logic from `remote_data_provider`)

---

## Getting Started

### Start Remote Components

```bash
cd remote_app_components
yarn install
yarn start
# Runs on http://localhost:3003
```

### Start Remote Data Provider

```bash
cd remote_data_provider
yarn install
yarn start
# Runs on http://localhost:3004
```

### Start Main App

```bash
cd main_app
yarn install
yarn start
# Runs on http://localhost:3000
```

---

## Features Demo

- Remote components load live into the main app
- Remote JS logic (like API calls or utilities) can be reused across MFEs
- Theming and layout isolation & Host layout
- True module-level separation between UI and logic providers

---
