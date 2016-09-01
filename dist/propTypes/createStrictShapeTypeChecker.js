












var _invariant=require('fbjs/lib/invariant');var _invariant2=_interopRequireDefault(_invariant);
var _merge=require('../modules/merge');var _merge2=_interopRequireDefault(_merge);
var _ReactPropTypeLocationNames=require('react/lib/ReactPropTypeLocationNames');var _ReactPropTypeLocationNames2=_interopRequireDefault(_ReactPropTypeLocationNames);
var _ReactPropTypesSecret=require('react/lib/ReactPropTypesSecret');var _ReactPropTypesSecret2=_interopRequireDefault(_ReactPropTypesSecret);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* eslint-disable *//**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */function createStrictShapeTypeChecker(shapeTypes){function checkType(isRequired,props,propName,componentName,location){if(!props[propName]){if(isRequired){(0,_invariant2.default)(false,
'Required object `'+propName+'` was not specified in '+('`'+
componentName+'`.'));

}
return;
}
var propValue=props[propName];
var propType=typeof propValue;
var locationName=
location&&_ReactPropTypeLocationNames2.default[location]||'(unknown)';
if(propType!=='object'){
(0,_invariant2.default)(
false,
'Invalid '+locationName+' `'+propName+'` of type `'+propType+'` '+('supplied to `'+
componentName+'`, expected `object`.'));

}
// We need to check all keys in case some are required but missing from
// props.
var allKeys=(0,_merge2.default)(props[propName],shapeTypes);
for(var key in allKeys){
var checker=shapeTypes[key];
if(!checker){
(0,_invariant2.default)(
false,
'Invalid props.'+propName+' key `'+key+'` supplied to `'+componentName+'`.'+'\nBad object: '+
JSON.stringify(props[propName],null,'  ')+'\nValid keys: '+
JSON.stringify(Object.keys(shapeTypes),null,'  '));

}
var error=checker(propValue,key,componentName,location,null,_ReactPropTypesSecret2.default);
if(error){
(0,_invariant2.default)(
false,
error.message+'\nBad object: '+
JSON.stringify(props[propName],null,'  '));

}
}
}
function chainedCheckType(
props,
propName,
componentName,
location)
{
return checkType(false,props,propName,componentName,location);
}
chainedCheckType.isRequired=checkType.bind(null,true);
return chainedCheckType;
}

module.exports=createStrictShapeTypeChecker;