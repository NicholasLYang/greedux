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

|-- cs_projects
    |-- .gitignore
    |-- CONTRIBUTING.md
    |-- GETTING_STARTED.md
    |-- README.md
    |-- ROADMAP.md
    |-- greedux_logo.png
    |-- package-lock.json
    |-- package.json
    |-- app
        |-- index.js
        |-- package.json
        |-- templates
            |-- _gitignore
            |-- app.js
            |-- gulpfile.js
            |-- package.json
            |-- build-config
            |   |-- README.md
            |   |-- aliases.json
            |   |-- paths.json
            |-- dist
            |   |-- dev
            |       |-- index.html
            |       |-- css
            |       |   |-- main-index.css
            |       |   |-- roboto.css
            |       |-- fonts
            |           |-- Roboto-Black.ttf
            |           |-- Roboto-BlackItalic.ttf
            |           |-- Roboto-Bold.ttf
            |           |-- Roboto-BoldItalic.ttf
            |           |-- Roboto-Italic.ttf
            |           |-- Roboto-Light.ttf
            |           |-- Roboto-LightItalic.ttf
            |           |-- Roboto-Medium.ttf
            |           |-- Roboto-MediumItalic.ttf
            |           |-- Roboto-Regular.ttf
            |           |-- Roboto-Thin.ttf
            |           |-- Roboto-ThinItalic.ttf
            |-- src
                |-- js
                    |-- clientApp.js
                    |-- reducers.js
                    |-- store.js
                    |-- versionInfo.js
                    |-- middleware
                    |   |-- localizer.js
                    |-- modules
                    |   |-- RoutingApp.js
                    |   |-- index.js
                    |   |-- core
                    |       |-- actionTypes.js
                    |       |-- actions.js
                    |       |-- constants.js
                    |       |-- index.js
                    |       |-- reducer.js
                    |       |-- components
                    |           |-- MainApp.js
                    |-- strings
                    |   |-- global.js
                    |   |-- index.js
                    |   |-- en
                    |   |   |-- en-menus.js
                    |   |   |-- index.js
                    |   |-- es
                    |       |-- es-menus.js
                    |       |-- index.js
                    |-- tools
                        |-- appHistory.js
                        |-- localizationSetter.js


Greedux is centered around modules. Modules hold both Redux state
slices (with corresponding actions and reducers) and the relevant
React components.