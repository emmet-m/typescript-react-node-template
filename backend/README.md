# The Backend Server

The backend server is written in Typescript using Node.js, with Express as the server framework.

## How to run the server

To run the server:

```
npm start
```

To just build the server code:

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

## Tutorials

I used [this](https://scotch.io/tutorials/setting-up-a-node-project-with-typescript) article!
