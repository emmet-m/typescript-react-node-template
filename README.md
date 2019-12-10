# TypeScript full stack template (React, Node, Webpack) 
A template for full stack typescript with React and Node.ts, served with Webpack

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

**Do not fork this repo**. On GitHub, use the 'Use this template' feature to create a stub repository based on this one.

If you can't use the template feature, add this repository as a remote origin to your empty repository and pull in the template like so:

```
# Adds the remote to your local repository
git remote add template git@github.com:emmet-m/typescript-react-node-template.git
# Merges the template code in on top, if your repo has existing code this might cause a weird merge.
git pull template master --allow-unrelated-histories
```

If you run into permission errors when pulling the new remote, then fork it to your account 
and pull in THAT remote instead (i.e. replace the URL in the above snippet with the one for your fork).

**Testing** hasn't been set up, at all. You should look into what frameworks you can use to test the backend and frontend.

## Layout

There's two directories here:

#### frontend

This is the client side code. Everything that makes up the webpage you see is here (React, HTML, CSS, etc.).

Check out the readme in this folder to see how to build/run it!

#### backend

This is the server side code. Everything that runs on the backend is here (Node.js, etc.)

Check out the readme in this folder to see how to build/run it!