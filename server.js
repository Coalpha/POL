const express = require('express');
const colors = require('colors');
const port = 1337;
const app = express();
app.use(express.static('.'));
app.get('/', function (req, res) {
    res.redirect('/index.html');
});
app.listen(port, function () {
    console.log('Server is running on port '.magenta + ('' + port).blue);
});
