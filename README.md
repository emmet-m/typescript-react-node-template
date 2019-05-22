# BigBrainSociety
For 大家!

## How to edit/What to install

#### Programming languages/libraries
* node (version >= 10.*)
* npm (comes with node, version >= 6.4.*)

Then you'll need to install all of these:

```
npm install -g webpack webpack-cli webpack-dev-server typescript tslint
```

Everything else can be installed by running `npm install` in the relevant directory :)

#### Text editors:

Technically any text editor is fine. To make your life easy though, I **HIGHLY** recommend [VSCode](https://code.visualstudio.com/).
Install the extensions:
* [TsLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
* [Node Debug](https://marketplace.visualstudio.com/items?itemName=ms-vscode.node-debug2) *Optional*

## Git setup and details

**Do not push to master**. When pushing new code, make a branch and merge it into master using github!

**Testing** hasn't been set up, at all. You should look into what frameworks you can use to test the backend and frontend.

## Layout

There's two directories here:

#### frontend

This is the client side code. Everything that makes up the webpage you see is here (React, HTML, CSS, etc.).

Check out the readme in this folder to see how to build/run it!

#### backend

This is the server side code. Everything that runs on the backend is here (Node.js, etc.)

Check out the readme in this folder to see how to build/run it!