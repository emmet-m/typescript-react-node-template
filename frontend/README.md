# The frontend

The frontend code is written in Typescript, using React.

*TypeScript* is a language that compiles to JavaScript. Unlike JavaScript, it has types that let you check for errors before you run your webpage (things like dereferencing null/undefined objects, accessing things out of bounds of an array, etc).

Learn more about it [here](https://www.typescriptlang.org/).

*React* is a library built in JavaScript, much like how Flask is a library built in Python. It allows you to build a tree like structure for your webpage, where each node represents some code and HTML for that part of the page. The page updates     it when the user interacts with certain parts of the page. 

Learn more about it [here](https://reactjs.org/).

We're going to be using React and TypeScript together, which turns out to be a
great combination!

## How to start building the frontend

To install everything (do this every time you pull):
```
npm install
```

To run the development server:
```
npm start
```
What does this do? This runs *webpack's* development server. Webpack is a tool that helps build frontend code into one file and update your page. Every time you change a file webpack will rebuild the project, and when you refresh the page it will load the newly rebuilt project! This saves you having to rebuild the whole project every time you make a change. The cycle of building the frontend should be like this:
1. run `npm start`
2. wait for webpack to start up
3. make changes to the frontend code
4. Refresh the browser to see your changes
5. repeat 4. and 5. until you're done!

You shouldn't need to keep restarting webpack. You should just run it once in the background and then let it do its thing!

To just build the project once:
```
npm run build
```

## Files in this directory

`dist/` Is the build folder. Don't commit this directory and don't change anything in this directory (it gets deleted every time you build).

`node_modules/` Contains the installed node modules code (stuff you install with `npm install`). NEVER commit this directory or anything in it!

`src/` Contains all the frontend code.

`index.html` Is the root page of all the frontend code. You only need one page for a modern web application! You will hardly ever change this page, most of it will be the react typescript files.

`tslint.json` Determines the linting rules for tslint (i.e. rules for code style, which it will enforce)

`tsconfig.json` Determines the rules for compiling the typescript code

`package.json` Contains the rules and required modules to install for the project

`package-lock.json` Contains stuff to help npm install things faster and without errors. Commit this file, you need it!

`webopack.config.js` Contains all the configurations for running webpack (the server and the code compiler). You shouldn't touch this file much!

## Where do I start?

Firstly look at `index.html`. Note that it includes one div with an id that's empty, called `main`. React will create the webpage at this html node, and work downwards. Note also that there's a script tag at the bottom that links `/dist/bundle.js`. This is linking to the bundle of code that webpack makes for you.

Next, look at `src/index.tsx`. The one line of code here is `ReactDom.render(...);`. This Loads the very top of your React tree into a html node you specify (here, this just fetches the `main` node discussed above and uses that).

The code for the whole page is in the HTML node we specified, `AppRoot`. Note we pass in two *properties* to this node, a string called `compiler` and a string called `framework`. These get passed into the node AppRoot for it to use.

Everything else on the page is contained inside `AppRoot`! Go explore :)

## Tutorials

I used [this article](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html) to help set up webpack.