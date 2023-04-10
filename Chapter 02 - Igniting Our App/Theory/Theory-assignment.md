# Chapter 02 Theory

## 1. What is npm?

- Npm is `not a Node Package Manager`
- It is basically a repository for managing and holding all the dependencies/ packages

## 2. What is parcel/webpack? why do we need it?

- Both `parcel` and `webpack` are bundlers which allows us to bundle the code into a single file
- It is used to power our applications with different type of functionality and features that will help us in good performance.

## 3. What is parcel.cache?

- `parcel.cache` is used by parcel bundler to reduce the building time.
- when we give `npx parcel index.html` command , one dist file will be created and it contains all the development build files(whatever hosted on the server it the UI that we are seeing in the browser will come from the dist)
- Whenever we re-save those files after modification , instead of taking the files from where it is stored parcel will take it from `parcel.cache`so that's why rerendering is very faster.

## 4. What is npx?

- `npx` is a tool used to execute packages.

## 5.What is the difference between dependencies and devdependencies?

- `Dependencies` are kind of obejects that has a library, which is required to function the application in production environments effectively.
  example: React, Vue, angular..
- `DevDependencies` on the other hand are kinds of packages that are required only during the development process
  example: Webpack, babel, parcel..

## 6. What is Tree Shaking?

-`Tree Shaking` is one of the feature of parcel, which helps in eliminating the dead code or unused code in our production build.

## 7. What is Hot Module Replacemwent (HMR)

- `HMR` is one of the feature of parcel, which helps in automatically refreshing the app or quick re-rendering.

## 8. List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.

- It helps to host our app in server.
- HMR - quick rerendering
- Caching- faster builds
- Image optimization
- minification - for production builds
- Tree Shaking - eliminating dead codes
- Differential bubdling - supposting older versions of browser

## 9. What is .gitignore? What should we add and not add into it?

- .gitignore is a kind of text file that tells the git which file should be included for commit and which should not be.
- We should not add the regeneratable files to git
  - example \* : node_modules -> can be regeneratable with the help of package.json and package-lock.json files.
    .parcel-cache, dist -> can be regeneratable with the help of `npx parcel index.html` || `npx parcel build index.html` commands

## 10. What is the difference between package.json and package-lock.json?

- `package.json` it is a configuration for npm that keeps track of what approximate version of dependencies(packages) that we installed in our project.
- `package-lock.json` it is automatically generated when we give `npm install -D parcel` or `npm install` and it keeps track of exact version of dependencies that gets installed.
  ### What is integrity which is present in the package-lock.json file?
  - It is a kind of hash which makes sure whatever the version that is running on our local should be same in production also. (avoid code is working on my machine but not in prod build 😂).

## 11. Why should I not modify package-lock.json?

- It keep track of version of dependencies that gets installed in our app, if any issue happened in production then without this file / deleting this file will cause a huge issue because of not aware of exact version of dependencies that gets installed during development phase.
- Modifictaions will be automatically taken care by NPM,

## 12.What is node_modules ? Is it a good idea to push that on git?

- It is folder that contains all the dependencies and the extra modules that our project depends on.
- It is basically a collection of dependencies.
- We should not push node_modules to git since it is regenerated using package-lock.json and package.json files.
- `npm install -D parcel` - will create the node modules.

## 13.What is the dist folder?

- It get generated when we run `npx parcel index.html`.
- It contains the minimised version of source code.
- All the development builds codes will be stored here initaily later on production build codes will be stored in compressed way or in minimum files.

## 14.What is browserslist?

- It is a toolkit which allows developer to specifically mention which versions of browser till it should support or even which browser it should support.
- It is an array
  "browsersList": [
  "last 2 chrome version"
  ]

## 15. Difference between ^(carat) and ~(tilt) sysmbol that we used to mention in dependency versions?

- "react": "^16.8.0" -> indicates it should automatically upgrade all the `minor versions`.
- "react: "~16.8.0" -> indicates it should automatically upgrade all the `major versions`. (not recommended).

## How do we create our own `npx create-react-app my-react-app` command.

1. npm init -> creates `package.json`
2. npm install -D parcel -> creates `package-lock.json` and `node_modules`
3. npm install react
4. npm install react-dom
5. npx parcel index.html -> creates `.parcel-cache` and `dist` files -> development build -> host our app in server
6. npx parcel build index.html -> creates `.parcel-cache` and `dist` files -> production build

🚀No more `npx create-react-app my-react-app` We will create everything by our own with the help of above commands
