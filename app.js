// get the packages we need
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

// API Endpoints
// ============================================================================

// test (GET)
app.get('/test', function(req, res) {
  res.send('hello world!');
});

// fire it up
app.listen(8000);
