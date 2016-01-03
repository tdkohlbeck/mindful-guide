'use strict';

var React = require('react');
var Router = require('react-router');
var Book = require('./book.jsx');
//var ToC = require('./ToC.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      showToC: false,
    };
  },
  toggleToC: function() {
    this.setState({
      showToC: !this.state.showToC,
    });
  },
  getToCDisplay: function() {
    if (this.state.showToC) return 'block';
    else return 'none';
  },
  render: function() {
    return (
      <div id='container'>
        <div id='menu-bar'>
          <button
            name='toc'
            id='toc-button'
            onClick={this.toggleToC}
          >
            ToC
          </button>
          <div id='toc' style={{display: this.getToCDisplay()}}>
            I'm the Table of Contents!
          </div>
        </div>
        <div id='bottom-fade'></div>
        <Book bookContents={this.props.bookContents} />
      </div>
    );
  }
});
