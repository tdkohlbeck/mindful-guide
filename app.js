'use strict';

require('babel-register')({
  presets: ['react']
});

var PORT = 3000;
var fs = require('fs');
var path = require('path');
var marked = require('marked');
var express = require('express');
var renderer = require('react-engine');

var app = express();

// create the view engine with `react-engine`
var reactRoutesFilePath = path.join(__dirname + '/public/routes.jsx');

var engine = renderer.server.create({
  routes: require(reactRoutesFilePath),
  routesFilePath: reactRoutesFilePath
});

// set the engine
app.engine('.jsx', engine);

// set the view directory
app.set('views', path.join(__dirname, '/public/views'));

// set jsx as the view engine
app.set('view engine', 'jsx');

// finally, set the custom view
app.set('view', renderer.expressView);

// expose public folder as static assets
app.use(express.static(path.join(__dirname, '/public')));

var bookContents;
var bookPath = path.join(__dirname, 'book.txt');

fs.readFile(bookPath, 'utf8', function(err, data) {
  if (err) { console.log(err); }
  bookContents = marked(data);
});

// add our app routes
app.get('*', function(req, res) {
  res.render(req.url, {
    bookContents: bookContents
  });
});

var server = app.listen(PORT, function() {
  console.log('Example app listening at http://localhost:%s', PORT);
});
