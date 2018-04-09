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

### Master Layout

```
.
|-- ./app.js
|-- ./build-config
|   |-- ./build-config/README.md
|   |-- ./build-config/aliases.json
|   |-- ./build-config/paths.json
|-- ./dist
|   |-- ./dist/dev
|   |   |-- ./dist/dev/css
|   |   |-- ./dist/dev/fonts
|   |   |-- ./dist/dev/index.html
|   |-- ./dist/prod
|-- ./gulpfile.js
|-- ./src
|   |-- ./src/js
|       |-- ./src/js/clientApp.js
|       |-- ./src/js/middleware
|       |   |-- ./src/js/middleware/localizer.js
|       |-- ./src/js/modules
|       |   |-- ./src/js/modules/RoutingApp.js
|       |   |-- ./src/js/modules/core
|       |   |   |-- ./src/js/modules/core/actionTypes.js
|       |   |   |-- ./src/js/modules/core/actions.js
|       |   |   |-- ./src/js/modules/core/components
|       |   |   |   |-- ./src/js/modules/core/components/MainApp.js
|       |   |   |-- ./src/js/modules/core/constants.js
|       |   |   |-- ./src/js/modules/core/index.js
|       |   |   |-- ./src/js/modules/core/reducer.js
|       |   |-- ./src/js/modules/index.js
|       |-- ./src/js/reducers.js
|       |-- ./src/js/store.js
|       |-- ./src/js/strings
|       |-- ./src/js/tools
|       |-- ./src/js/versionInfo.js
|-- ./package-lock.json
|-- ./package.json
|-- ./README.md
```

### src/js

```
.
|-- ./clientApp.js
|-- ./middleware
|   |-- ./middleware/localizer.js
|-- ./modules
|   |-- ./modules/RoutingApp.js
|   |-- ./modules/core
|   |   |-- ./modules/core/actionTypes.js
|   |   |-- ./modules/core/actions.js
|   |   |-- ./modules/core/components
|   |   |   |-- ./modules/core/components/MainApp.js
|   |   |-- ./modules/core/constants.js
|   |   |-- ./modules/core/index.js
|   |   |-- ./modules/core/reducer.js
|   |-- ./modules/index.js
|-- ./reducers.js
|-- ./store.js
|-- ./strings
|   |-- ./strings/en
|   |   |-- ./strings/en/en-menus.js
|   |   |-- ./strings/en/index.js
|   |-- ./strings/es
|   |   |-- ./strings/es/es-menus.js
|   |   |-- ./strings/es/index.js
|   |-- ./strings/global.js
|   |-- ./strings/index.js
|-- ./tools
|   |-- ./tools/appHistory.js
|   |-- ./tools/localizationSetter.js
|-- ./versionInfo.js
```

All of the code goes into `src/js`. The main entrypoint to the code is
`clientApp.js`. clientApp renders your React root while also printing
out the version number.

`middleware` is where custom Redux middleware is stored. As an
example, we have provided a localizer middleware in `localizer.js`.

`modules` is for (duh) modules. Greedux is centered around
modules. Modules hold both Redux state slices (with corresponding
actions and reducers) and the relevant React components. They allow
for reusable and well organized code.


