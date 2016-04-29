'use strict';

var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  componentWillMount: function() {
    var chapterIds = this.props.chapterIds;
    this.links = this.props.chapters.map(function(chapter, i) {
      return (
        <li key={i}>
          <a href={'#' + chapterIds[i]}
             rel='internal'>
            {chapter}
          </a>
        </li>
      );
    });
  },
  render: function() {
    return (
      <div id='toc' style={{display: this.props.display}}>
        <div id='chapter-list-wrapper'>
          <ul id='chapter-list'>
            {this.links}
          </ul>
        </div>
      </div>
    );
  }
});
