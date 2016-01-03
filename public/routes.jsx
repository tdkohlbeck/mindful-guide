'use strict';

// import react and react-router
var React = require('react');
var Router = require('react-router');

var Layout = require('./views/layout.jsx');
var Index = require('./views/index.jsx');
var Book = require('./views/book.jsx');

var routes = module.exports = (
  <Router.Route path='/' handler={Layout}>
    <Router.DefaultRoute name='index' handler={Index} />
  </Router.Route>
);
