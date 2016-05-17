# Electron + Typescript + React JSX + Systemjs

This is a very minimal setup to start writing Electron applications which use Typescript and React.

The aim of this project is to use the smallest number of dependencies possible (which is probably not
the ideal final set up), so to be able to focus on the most important bits and not waste time understanding
something you don't really need at the moment.

## Install

Note: if you use `typings` version 0.x and not 1.x, then you need to use `typings-pre-1.json` as your `typings.json` (sigh...)

```bash
npm install
npm install -g typings gulp
typings install
gulp
npm start
```

## Further readings

You might also be interested into:

- https://github.com/electron/electron-quick-start
- https://github.com/chentsulin/electron-react-boilerplate
- https://github.com/ThorstenHans/electron-ts-ng2
- https://www.gitbook.com/book/charleslbryant/hello-react-and-typescript/details
- https://www.gitbook.com/book/basarat/typescript/details

#### License [MIT](LICENSE.md)
