 https://github.com/rwieruch/advanced-react-webpack-babel-setup
 
 ## Features
React 16
Webpack 5
Babel 7
Hot Module Replacement
Dev + Production Builds
Dist Folder Managagement by Webpack
Common and environment specific Webpack Configuration
Composition of Webpack Configuration
Source Maps
Environment Variables
Webpack Add-Ons
ESLint + Prettier

## Adding babel to dev dependency

`yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader file-loader css-loader style-loader webpack webpack-cli html-webpack-plugin --dev`

 Create `.babelrc` file

`{
   "presets": [
       "@babel/preset-env",
       "@babel/preset-react"
   ]
}`

## Add react and react-dom

`yar add react react-dom`

## Adding react hot module loader

`yarn add react-hot-loader --dev`