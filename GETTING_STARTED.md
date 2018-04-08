# Getting Started

## About

Greedux uses a carefully curated collection of libraries to give a
launchpad for React applications. These include
[React](https://reactjs.org/), [Redux](https://redux.js.org/), [React
Router](https://reacttraining.com/react-router/),
[JSS](https://github.com/cssinjs/jss), [React
JSS](https://github.com/cssinjs/react-jss) and [Material
UI](https://www.material-ui.com/)

Fair warning, Greedux is NOT for beginners, whether in React or front
end development as a whole. If you're just getting the hang of React,
[create-react-app](https://github.com/facebook/create-react-app) is a
great place to start. Greedux's main goal is to allow developers who
already understand the React ecosystem to rapidly scaffold and create
React applications.

## Folder Layout

src/
└── js
    ├── clientApp.js
    ├── middleware
    │   └── localizer.js
    ├── modules
    │   ├── RoutingApp.js
    │   ├── core
    │   │   ├── actionTypes.js
    │   │   ├── actions.js
    │   │   ├── components
    │   │   │   └── MainApp.js
    │   │   ├── constants.js
    │   │   ├── index.js
    │   │   └── reducer.js
    │   └── index.js
    ├── reducers.js
    ├── store.js
    ├── strings
    │   ├── en
    │   │   ├── en-menus.js
    │   │   └── index.js
    │   ├── es
    │   │   ├── es-menus.js
    │   │   └── index.js
    │   ├── global.js
    │   └── index.js
git a    ├── tools
    │   ├── appHistory.js
    │   └── localizationSetter.js
    └── versionInfo.js


Greedux is centered around modules. Modules hold both Redux state
slices (with corresponding actions and reducers) and the relevant
React components.