











'use strict';

var PropTypes=require('react').PropTypes;

var EdgeInsetsPropType=process.env.NODE_ENV!=='production'?require('./createStrictShapeTypeChecker')({
top:PropTypes.number,
left:PropTypes.number,
bottom:PropTypes.number,
right:PropTypes.number}):
function(){};

module.exports=EdgeInsetsPropType;