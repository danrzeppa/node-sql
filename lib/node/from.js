'use strict';

var Node = require('./index');

var From = Node.define({
  type: 'FROM',
  constructor: function(alias) {
    Node.call(this);
    this.alias = alias
  },

  as: function(alias) {
    this.alias = alias;
    return this;
  },
});

module.exports = From;
