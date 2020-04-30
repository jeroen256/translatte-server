Translatte Server
=================

This simple server can provide Google Translate results using the translatte npm package.

It works together with a modified version of tiny-translator contained in ngx-i18nsupport.

Reason for this setup: I do not have a creditcard to register for a Google Cloud Translate Api key.

To start the server: press F5 in vscode or run `node index.js`

Example usage: http://localhost:3000/translatte/en/de/Hello, how is {{0}}%3F%0AI heard that {{1}} is doing fine.

To start tiny-translator:
- run `npm install` from root ngx-i18nsupport folder
- cd to projects/tiny-translator, run npm install again
- run `npm run start-en`

