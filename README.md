# React-grid
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/049ec6496c9d44648930dfe9b773c9bf)](https://www.codacy.com/app/Drapegnik/react-grid?utm_source=github.com&utm_medium=referral&utm_content=Drapegnik/react-grid&utm_campaign=badger)
[![Code Climate](https://codeclimate.com/github/Drapegnik/react-grid/badges/gpa.svg)](https://codeclimate.com/github/Drapegnik/react-grid) 
[![Build status](https://ci.appveyor.com/api/projects/status/db8u8h9fo01e05l5/branch/master?svg=true)](https://ci.appveyor.com/project/Drapegnik/react-grid/branch/master)
[![Build Status](https://travis-ci.org/Drapegnik/react-grid.svg?branch=master)](https://travis-ci.org/Drapegnik/react-grid) [![Issue Count](https://codeclimate.com/github/Drapegnik/react-grid/badges/issue_count.svg)](https://codeclimate.com/github/Drapegnik/react-grid) [![Dependency Status](https://www.versioneye.com/user/projects/590280fffda994003e7cb568/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/590280fffda994003e7cb568)

Reusable data table component on react

> [check website](https://drapegnik.github.io/react-grid/)

## task
1. Table with columns: (data from [data.json](https://github.com/Drapegnik/react-grid/tree/master/src/data/data.json))
    * tool
    * initiator (`id` - `name`)
    * result
    * duration, `ms`
2. Click on row show details (from [details.json](https://github.com/Drapegnik/react-grid/tree/master/src/data/details.json))
4. Double click on row hide details
4. If there is no data - show `no data`

## [demo](https://drapegnik.github.io/react-grid/)
![](http://res.cloudinary.com/dzsjwgjii/image/upload/v1490958343/react-grid1.gif)

## demo mobile
![](http://res.cloudinary.com/dzsjwgjii/image/upload/v1490958465/react-grid2.gif)

## scripts

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.<br>

### `npm run storybook`
* Runs dev server at [http://localhost:9009](http://localhost:9009) open to view
* Render all application components use cases like stories with [react-storybook](https://getstorybook.io/)

#### No Data Story
![](http://res.cloudinary.com/dzsjwgjii/image/upload/v1491770908/react-grid3.png)

#### Columns formatters example
![](http://res.cloudinary.com/dzsjwgjii/image/upload/v1491770908/react-grid4.png)

> [see the all storybook](https://drapegnik.github.io/react-grid/storybook)

### `npm run build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
