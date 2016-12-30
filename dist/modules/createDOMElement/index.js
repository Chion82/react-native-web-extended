var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _StyleSheet=require('../../apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var emptyObject={};

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


var createDOMElement=function createDOMElement(component){var rnProps=arguments.length>1&&arguments[1]!==undefined?arguments[1]:emptyObject;var

accessibilityLabel=






rnProps.accessibilityLabel;var accessibilityLiveRegion=rnProps.accessibilityLiveRegion;var accessibilityRole=rnProps.accessibilityRole;var _rnProps$accessible=rnProps.accessible;var accessible=_rnProps$accessible===undefined?true:_rnProps$accessible;var testID=rnProps.testID;var type=rnProps.type;var domProps=_objectWithoutProperties(rnProps,['accessibilityLabel','accessibilityLiveRegion','accessibilityRole','accessible','testID','type']);

var accessibilityComponent=accessibilityRole&&roleComponents[accessibilityRole];
var Component=accessibilityComponent||component;

_extends(domProps,_StyleSheet2.default.resolve(domProps));

if(!accessible){domProps['aria-hidden']=true;}
if(accessibilityLabel){domProps['aria-label']=accessibilityLabel;}
if(accessibilityLiveRegion){domProps['aria-live']=accessibilityLiveRegion;}
if(testID){domProps['data-testid']=testID;}
if(accessibilityRole){
domProps.role=accessibilityRole;
if(accessibilityRole==='button'){
domProps.type='button';
}else if(accessibilityRole==='link'&&domProps.target==='_blank'){
domProps.rel=(domProps.rel||'')+' noopener noreferrer';
}
}
if(type){domProps.type=type;}

return(
_react2.default.createElement(Component,domProps));

};

module.exports=createDOMElement;