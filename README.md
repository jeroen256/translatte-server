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

The translations translatte receives from Google seem quite clumsy and full of errors. Not comparable to the perfect results you get manually from https://translate.google.com/. Think Google is somehow aware. Actually I thinks the time to setup these 2 projects is not worth it. Better just copy paste manually or get a Google Cloud Translate Api key.
