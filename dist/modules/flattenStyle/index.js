











'use strict';

var ReactNativePropRegistry=require('../ReactNativePropRegistry');
var invariant=require('fbjs/lib/invariant');

function getStyle(style){
if(typeof style==='number'){
return ReactNativePropRegistry.getByID(style);
}
return style;
}

function flattenStyle(style){
if(!style){
return undefined;
}
invariant(style!==true,'style may be false but not true');

if(!Array.isArray(style)){
return getStyle(style);
}

var result={};
for(var i=0,styleLength=style.length;i<styleLength;++i){
var computedStyle=flattenStyle(style[i]);
if(computedStyle){
for(var key in computedStyle){
result[key]=computedStyle[key];
}
}
}
return result;
}

module.exports=flattenStyle;