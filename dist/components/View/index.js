var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();require('../../modules/injectResponderEventPlugin');

var _applyLayout=require('../../modules/applyLayout');var _applyLayout2=_interopRequireDefault(_applyLayout);
var _applyNativeMethods=require('../../modules/applyNativeMethods');var _applyNativeMethods2=_interopRequireDefault(_applyNativeMethods);
var _BaseComponentPropTypes=require('../../propTypes/BaseComponentPropTypes');var _BaseComponentPropTypes2=_interopRequireDefault(_BaseComponentPropTypes);
var _createDOMElement=require('../../modules/createDOMElement');var _createDOMElement2=_interopRequireDefault(_createDOMElement);
var _EdgeInsetsPropType=require('../../propTypes/EdgeInsetsPropType');var _EdgeInsetsPropType2=_interopRequireDefault(_EdgeInsetsPropType);
var _normalizeNativeEvent=require('../../modules/normalizeNativeEvent');var _normalizeNativeEvent2=_interopRequireDefault(_normalizeNativeEvent);
var _StyleSheet=require('../../apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);
var _StyleSheetPropType=require('../../propTypes/StyleSheetPropType');var _StyleSheetPropType2=_interopRequireDefault(_StyleSheetPropType);
var _ViewStylePropTypes=require('./ViewStylePropTypes');var _ViewStylePropTypes2=_interopRequireDefault(_ViewStylePropTypes);
var _react=require('react');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var eventHandlerNames=[
'onClick',
'onClickCapture',
'onMoveShouldSetResponder',
'onMoveShouldSetResponderCapture',
'onResponderGrant',
'onResponderMove',
'onResponderReject',
'onResponderRelease',
'onResponderTerminate',
'onResponderTerminationRequest',
'onStartShouldSetResponder',
'onStartShouldSetResponderCapture',
'onTouchCancel',
'onTouchCancelCapture',
'onTouchEnd',
'onTouchEndCapture',
'onTouchMove',
'onTouchMoveCapture',
'onTouchStart',
'onTouchStartCapture'];var


View=function(_Component){_inherits(View,_Component);function View(){_classCallCheck(this,View);return _possibleConstructorReturn(this,(View.__proto__||Object.getPrototypeOf(View)).apply(this,arguments));}_createClass(View,[{key:'getChildContext',value:function getChildContext()












































{
return{
isInAButtonView:this.props.accessibilityRole==='button'};

}},{key:'render',value:function render()

{var _this2=this;var _props=














this.props;var pointerEvents=_props.pointerEvents;var style=_props.style;var accessibilityComponentType=_props.accessibilityComponentType;var accessibilityTraits=_props.accessibilityTraits;var collapsable=_props.collapsable;var hitSlop=_props.hitSlop;var onAccessibilityTap=_props.onAccessibilityTap;var onLayout=_props.onLayout;var onMagicTap=_props.onMagicTap;var removeClippedSubviews=_props.removeClippedSubviews;var otherProps=_objectWithoutProperties(_props,['pointerEvents','style','accessibilityComponentType','accessibilityTraits','collapsable','hitSlop','onAccessibilityTap','onLayout','onMagicTap','removeClippedSubviews']);

var flattenedStyle=_StyleSheet2.default.flatten(style);
var pointerEventsStyle=pointerEvents&&{pointerEvents:pointerEvents};

var needsFlexReset=!flattenedStyle||flattenedStyle.flex==null&&flattenedStyle.flexShrink==null;

var component=this.context.isInAButtonView?'span':'div';

eventHandlerNames.reduce(function(props,handlerName){
var handler=_this2.props[handlerName];
if(typeof handler==='function'){
props[handlerName]=_this2._normalizeEventForHandler(handler,handlerName);
}
return props;
},otherProps);

otherProps.style=[
styles.initial,
style,
needsFlexReset&&styles.flexReset,
pointerEventsStyle];


return(0,_createDOMElement2.default)(component,otherProps);
}},{key:'_normalizeEventForHandler',value:function _normalizeEventForHandler(

handler,handlerName){




var shouldCancelEvent=handlerName==='onResponderRelease';

return function(e){
e.nativeEvent=(0,_normalizeNativeEvent2.default)(e.nativeEvent);
var returnValue=handler(e);
if(shouldCancelEvent&&e.cancelable){
e.preventDefault();
}
return returnValue;
};
}}]);return View;}(_react.Component);View.displayName='View';View.defaultProps={accessible:true};View.childContextTypes={isInAButtonView:_react.PropTypes.bool};View.contextTypes={isInAButtonView:_react.PropTypes.bool};process.env.NODE_ENV!=="production"?View.propTypes=_extends({},_BaseComponentPropTypes2.default,{children:_react.PropTypes.any,collapsable:_react.PropTypes.bool,hitSlop:_EdgeInsetsPropType2.default,onClick:_react.PropTypes.func,onClickCapture:_react.PropTypes.func,onLayout:_react.PropTypes.func,onMoveShouldSetResponder:_react.PropTypes.func,onMoveShouldSetResponderCapture:_react.PropTypes.func,onResponderGrant:_react.PropTypes.func,onResponderMove:_react.PropTypes.func,onResponderReject:_react.PropTypes.func,onResponderRelease:_react.PropTypes.func,onResponderTerminate:_react.PropTypes.func,onResponderTerminationRequest:_react.PropTypes.func,onStartShouldSetResponder:_react.PropTypes.func,onStartShouldSetResponderCapture:_react.PropTypes.func,onTouchCancel:_react.PropTypes.func,onTouchCancelCapture:_react.PropTypes.func,onTouchEnd:_react.PropTypes.func,onTouchEndCapture:_react.PropTypes.func,onTouchMove:_react.PropTypes.func,onTouchMoveCapture:_react.PropTypes.func,onTouchStart:_react.PropTypes.func,onTouchStartCapture:_react.PropTypes.func,pointerEvents:_react.PropTypes.oneOf(['auto','box-none','box-only','none']),style:(0,_StyleSheetPropType2.default)(_ViewStylePropTypes2.default)}):void 0;


var styles=_StyleSheet2.default.create({

initial:{
alignItems:'stretch',
borderWidth:0,
borderStyle:'solid',
boxSizing:'border-box',
display:'flex',
flexBasis:'auto',
flexDirection:'column',
margin:0,
padding:0,
position:'relative',

backgroundColor:'transparent',
color:'inherit',
font:'inherit',
textAlign:'inherit',
textDecorationLine:'none',

listStyle:'none',

minHeight:0,
minWidth:0},

flexReset:{
flexShrink:0}});



module.exports=(0,_applyLayout2.default)((0,_applyNativeMethods2.default)(View));