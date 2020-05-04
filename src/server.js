let express = require('express');
let path = require('path');
let app = express();
let bodyParser = require('body-parser');
let port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const events = require("./api/routes/events");
app.use('/', events);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(port, (req, res) => {
    console.log("working http");
}
);