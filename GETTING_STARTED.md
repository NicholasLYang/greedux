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

```
.
|-- ./app.js
|-- ./build-config
|   |-- ./build-config/README.md
|   |-- ./build-config/aliases.json
|   `-- ./build-config/paths.json
|-- ./dist
|   |-- ./dist/dev
|   |   |-- ./dist/dev/css
|   |   |   |-- ./dist/dev/css/main-index.css
|   |   |   `-- ./dist/dev/css/roboto.css
|   |   |-- ./dist/dev/fonts
|   |   |   |-- ./dist/dev/fonts/Roboto-Black.ttf
|   |   |   |-- ./dist/dev/fonts/Roboto-BlackItalic.ttf
|   |   |   |-- ./dist/dev/fonts/Roboto-Bold.ttf
|   |   |   |-- ./dist/dev/fonts/Roboto-BoldItalic.ttf
|   |   |   |-- ./dist/dev/fonts/Roboto-Italic.ttf
|   |   |   |-- ./dist/dev/fonts/Roboto-Light.ttf
|   |   |   |-- ./dist/dev/fonts/Roboto-LightItalic.ttf
|   |   |   |-- ./dist/dev/fonts/Roboto-Medium.ttf
|   |   |   |-- ./dist/dev/fonts/Roboto-MediumItalic.ttf
|   |   |   |-- ./dist/dev/fonts/Roboto-Regular.ttf
|   |   |   |-- ./dist/dev/fonts/Roboto-Thin.ttf
|   |   |   `-- ./dist/dev/fonts/Roboto-ThinItalic.ttf
|   |   `-- ./dist/dev/index.html
|   `-- ./dist/prod
|-- ./gulpfile.js
|-- ./src
|   `-- ./src/js
|       |-- ./src/js/clientApp.js
|       |-- ./src/js/middleware
|       |   `-- ./src/js/middleware/localizer.js
|       |-- ./src/js/modules
|       |   |-- ./src/js/modules/RoutingApp.js
|       |   |-- ./src/js/modules/core
|       |   |   |-- ./src/js/modules/core/actionTypes.js
|       |   |   |-- ./src/js/modules/core/actions.js
|       |   |   |-- ./src/js/modules/core/components
|       |   |   |   `-- ./src/js/modules/core/components/MainApp.js
|       |   |   |-- ./src/js/modules/core/constants.js
|       |   |   |-- ./src/js/modules/core/index.js
|       |   |   `-- ./src/js/modules/core/reducer.js
|       |   `-- ./src/js/modules/index.js
|       |-- ./src/js/reducers.js
|       |-- ./src/js/store.js
|       |-- ./src/js/strings
|       |   |-- ./src/js/strings/en
|       |   |   |-- ./src/js/strings/en/en-menus.js
|       |   |   `-- ./src/js/strings/en/index.js
|       |   |-- ./src/js/strings/es
|       |   |   |-- ./src/js/strings/es/es-menus.js
|       |   |   `-- ./src/js/strings/es/index.js
|       |   |-- ./src/js/strings/global.js
|       |   `-- ./src/js/strings/index.js
|       |-- ./src/js/tools
|       |   |-- ./src/js/tools/appHistory.js
|       |   `-- ./src/js/tools/localizationSetter.js
|       `-- ./src/js/versionInfo.js
|-- ./package-lock.json
|-- ./package.json
|-- ./README.md
```

Greedux is centered around modules. Modules hold both Redux state
slices (with corresponding actions and reducers) and the relevant
React components.