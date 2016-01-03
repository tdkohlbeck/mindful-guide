'use strict';

var React = require('react');
var Router = require('react-router');
var Book = require('./book.jsx');
var ToC = require('./ToC.jsx');

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
    if (this.state.showToC) return 'flex';
    else return 'none';
  },
  getToCButtonText: function() {
    if (this.state.showToC) return 'Table of Contents';
    else return 'ToC';
  },
  render: function() {
    return (
      <div id='container'>
        <div id='menu-bar'>
          <button
            name='toc'
            id='toc-button'
            onClick={this.toggleToC}>
            {this.getToCButtonText()}
          </button>
        </div>
        <ToC display={this.getToCDisplay()} />
        <Book bookContents={this.props.bookContents} />
        <div id='bottom-fade'></div>
      </div>
    );
  }
});
