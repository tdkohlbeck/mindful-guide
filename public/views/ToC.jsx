'use strict';

var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  render: function() {
    return (
      <div id='toc' style={{display: this.props.display}}>
        I'm the ToC!
      </div>
    );
  }
});