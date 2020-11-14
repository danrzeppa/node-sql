'use strict';

var Node = require('./index');
var UnionNode = module.exports = Node.define({
  type: 'UNION',
  constructor: function(leftSide,rightSide) {
    Node.call(this);
    this.leftSide = leftSide.toNode();
    this.rightSide = rightSide.toNode();
  },

  union:function(query){
  	return new UnionNode(this,query);
  }

});
