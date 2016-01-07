'use strict';

var React = require('react');
var Router = require('react-router');
var Book = require('./book.jsx');
var Toc = require('./ToC.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {toc: false};
  },
  toggle: function() {
    this.setState( {toc: !this.state.toc} );
  },
  /*getToCDisplay: function() {
    if (this.state.toc) return 'flex';
    else return 'none';
  },
  getToCButtonText: function() {
    if (this.state.toc) return 'Table of Contents';
    else return 'ToC';
  },*/
  render: function() {
    var buttonText, tocDisplay;
    if (this.state.toc) {
      buttonText = 'Table of Contents';
      tocDisplay = 'flex';
    } else {
      buttonText = 'ToC';
      tocDisplay = 'none';
    }
    return (
      <div id='container'>
        <Toc display={tocDisplay} />
        <Book bookContents={this.props.bookContents} />
        <div id='menu-bar'>
          <button
            name='toc'
            id='toc-button'
            onClick={this.toggle}>
            {buttonText}
          </button>
        </div>
        <div id='bottom-fade'></div>
      </div>
    );
  }
});
