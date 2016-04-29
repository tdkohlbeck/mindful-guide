'use strict';

require('babel-register')({
  presets: ['react']
});

var PORT = 3001;
var fs = require('fs');
var path = require('path');
var mdToHtml = require('marked');
var express = require('express');
var renderer = require('react-engine');
var cheerio = require('cheerio');

var app = express();

// create the view engine with `react-engine`
var reactRoutesFilePath = path.join(
  __dirname + '/public/routes.jsx'
);

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

// make html from book text and parse for chapter info
var bookText;
var bookPath = path.join(__dirname, 'book.txt');
var chapters = [];
var chapterIds = [];

fs.readFile(bookPath, 'utf8', function(err, data) {
  if (err) { console.log(err); }
  bookText = mdToHtml(data);
  var $ = cheerio.load(bookText);
  $('h1').each(function(i) {
    chapters[i] = $(this).text();
    chapterIds[i] = $(this).attr('id');
  });
});

// logging
var date, time, count = 0;

// add our app routes
app.get('*', function(req, res) {
  count++;

  res.render(req.url, {
    bookText: bookText,
    chapters: chapters,
    chapterIds: chapterIds
  });
});

var server = app.listen(PORT, function() {
  console.log(
    'Example app listening at http://localhost:%s',
    PORT
  );
});
