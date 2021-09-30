var express = require("express");
var mongoose = require("mongoose");
var cors = require('cors')
var bodyParser = require("body-parser");

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// init db
mongoose.connect("mongodb://localhost/backend")

// models

require('./models/Product');
// require('./models/Order');
// route
app.use(require('./routes'));

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({'errors': {
      message: err.message,
      error: {}
    }});
  });

var HTTP_PORT = 8000
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});


