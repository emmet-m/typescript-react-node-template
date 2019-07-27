# The Backend Server

The backend server is written in Typescript using Node.js, with Express as the server framework.

*TypeScript* is a language that compiles to JavaScript. Unlike JavaScript, it has types that let you check for errors before you run your webpage (things like dereferencing null/undefined objects, accessing things out of bounds of an array, etc).

Learn more about it [here](https://www.typescriptlang.org/).

*Node.js* is JavaScript that runs on your computer (as opposed to in your browser). It can access files and interact with the system like regular programming languages (C, Python, etc.) do, unlike regular JavaScript. We'll be using TypeScript with Node.js as opposed to regular JavaScript.

Learn more about it [here](https://nodejs.org/en/).

*Express* is to Node.js the same way Flask is to Python. It allows you to create a server, where you can specify URL routes and responses to them, only just in JavaScript (or for us, TypeScript)!

Learn more about it [here](https://expressjs.com/).

## How to run the server

To install everything (do this every time you pull):
```
npm install
```

To run the server:
```
npm start
```

To just build the server code once:
```
npm run build
```

## Files in this directory

`server.ts` Is the main file for running the application. Everything else should go in the `src` folder.

`tslint.json` Determines the linting rules for tslint (i.e. rules for code style, which it will enforce)

`tsconfig.json` Determines the rules for compiling the typescript code

`package.json` Contains the rules and required modules to install for the project

`.dist` Contains all the compiled typescript code. NEVER commit this!

`package-lock.json` Contains stuff to help npm install things faster and without errors. Commit this file, you need it!

`node_modules/` Contains the install node modules code. NEVER commit this directory or anything in it!

## Where do I start?

Look at `server.ts`. This contains code to start the server. If you create new files, put them in a `src` directory and import them into `serer.ts`.

## Tutorials

I used [this](https://scotch.io/tutorials/setting-up-a-node-project-with-typescript) article!