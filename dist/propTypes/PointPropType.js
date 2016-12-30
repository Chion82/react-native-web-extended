











'use strict';

var PropTypes=require('react').PropTypes;

var PointPropType=process.env.NODE_ENV!=='production'?require('./createStrictShapeTypeChecker')({
x:PropTypes.number,
y:PropTypes.number}):
function(){};

module.exports=PointPropType;