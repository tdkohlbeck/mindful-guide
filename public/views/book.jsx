'use strict';

var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  render: function() {
    return (
      <div
        id='book-contents'
        dangerouslySetInnerHTML={{ __html: this.props.bookContents }}
      ></div>
    );
  }
});
