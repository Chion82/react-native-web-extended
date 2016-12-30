var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};












var _invariant=require('fbjs/lib/invariant');var _invariant2=_interopRequireDefault(_invariant);
var _ReactPropTypeLocationNames=require('react-dom/lib/ReactPropTypeLocationNames');var _ReactPropTypeLocationNames2=_interopRequireDefault(_ReactPropTypeLocationNames);
var _ReactPropTypesSecret=require('react-dom/lib/ReactPropTypesSecret');var _ReactPropTypesSecret2=_interopRequireDefault(_ReactPropTypesSecret);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

function createStrictShapeTypeChecker(
shapeTypes)
{
function checkType(isRequired,props,propName,componentName,location){
if(!props[propName]){
if(isRequired){
(0,_invariant2.default)(
false,
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


var allKeys=_extends({},props[propName],shapeTypes);
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