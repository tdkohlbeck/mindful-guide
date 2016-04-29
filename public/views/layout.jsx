'use strict';

var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  render: function render() {
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1' />
          <title>Mindful Guide</title>
          <link rel='stylesheet' href='/stylesheet.css'></link>
        </head>
        <body>
          <div>
            {/* Component that renders the active child route handler of a parent route handler component. */}
            <Router.RouteHandler {...this.props} />
          </div>
        </body>
        <script src='/bundle.js'></script>
      </html>
    );
  }
});
