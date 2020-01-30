console.log('hoi');

const translatte = require('translatte');

// translatte('Do you speak Russian?', {to: 'de'}).then(res => {
//     console.log(res.text);
// }).catch(err => {
//     console.error(err);
// });

var express = require("express");
var cors = require('cors');
var app = express();
app.use(cors());

app.get("/url", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.get('/translatte/:from/:to/:text', function (req, res, next) {
    // %0A = \n
    // http://localhost:3000/translatte/en/de/Hello, how is {{0}}%3F%0AI heard that {{1}} is doing fine.
    var from = req.params.from;
    var to = req.params.to;
    var text = req.params.text;
    console.log('translatte, from: ' + from + ', to: ' + to + ', text: ' + text);
    // res.json('latte:' + text);
    // return;
    translatte(text, {from: from, to: to}).then(x => {
        console.log('translatte, result: ' + x.text);
        res.json(x.text);
    }).catch(err => {
        console.log('translatte, error: ' + err.message);
        console.error(err);
        res.json('translatte, error: ' + err.message);
    });
    //res.json(text);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});