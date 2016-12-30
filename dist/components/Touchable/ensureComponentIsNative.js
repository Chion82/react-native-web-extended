











'use strict';

var invariant=require('fbjs/lib/invariant');

var ensureComponentIsNative=function ensureComponentIsNative(component){
invariant(
component&&typeof component.setNativeProps==='function',
'Touchable child must either be native or forward setNativeProps to a '+
'native component');

};

module.exports=ensureComponentIsNative;