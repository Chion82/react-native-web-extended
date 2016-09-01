var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _StyleSheet=require('../../apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var roleComponents={
article:'article',
banner:'header',
button:'button',
complementary:'aside',
contentinfo:'footer',
form:'form',
heading:'h1',
link:'a',
list:'ul',
listitem:'li',
main:'main',
navigation:'nav',
region:'section'};


var createDOMElement=function createDOMElement(component){var rnProps=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var

accessibilityLabel=






rnProps.accessibilityLabel;var accessibilityLiveRegion=rnProps.accessibilityLiveRegion;var accessibilityRole=rnProps.accessibilityRole;var _rnProps$accessible=rnProps.accessible;var accessible=_rnProps$accessible===undefined?true:_rnProps$accessible;var testID=rnProps.testID;var type=rnProps.type;var other=_objectWithoutProperties(rnProps,['accessibilityLabel','accessibilityLiveRegion','accessibilityRole','accessible','testID','type']);

var accessibilityComponent=accessibilityRole&&roleComponents[accessibilityRole];
var Component=accessibilityComponent||component;

return(
_react2.default.createElement(Component,_extends({},
other,
_StyleSheet2.default.resolve(other),{
'aria-hidden':accessible?null:true,
'aria-label':accessibilityLabel,
'aria-live':accessibilityLiveRegion,
'data-testid':testID,
role:accessibilityRole,
type:accessibilityRole==='button'?'button':type})));


};

module.exports=createDOMElement;