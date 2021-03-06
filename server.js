var express = require('express');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');


var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

app.use(morgan('dev'));
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

// Serve the client files
app.use(express.static(__dirname + '/src'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}