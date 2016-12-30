var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _applyLayout=require('../../modules/applyLayout');var _applyLayout2=_interopRequireDefault(_applyLayout);
var _applyNativeMethods=require('../../modules/applyNativeMethods');var _applyNativeMethods2=_interopRequireDefault(_applyNativeMethods);
var _BaseComponentPropTypes=require('../../propTypes/BaseComponentPropTypes');var _BaseComponentPropTypes2=_interopRequireDefault(_BaseComponentPropTypes);
var _createDOMElement=require('../../modules/createDOMElement');var _createDOMElement2=_interopRequireDefault(_createDOMElement);
var _StyleSheet=require('../../apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);
var _StyleSheetPropType=require('../../propTypes/StyleSheetPropType');var _StyleSheetPropType2=_interopRequireDefault(_StyleSheetPropType);
var _TextStylePropTypes=require('./TextStylePropTypes');var _TextStylePropTypes2=_interopRequireDefault(_TextStylePropTypes);
var _react=require('react');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Text=function(_Component){_inherits(Text,_Component);function Text(){_classCallCheck(this,Text);return _possibleConstructorReturn(this,(Text.__proto__||Object.getPrototypeOf(Text)).apply(this,arguments));}_createClass(Text,[{key:'render',value:function render()


















{var _props=














this.props;var numberOfLines=_props.numberOfLines;var onPress=_props.onPress;var selectable=_props.selectable;var style=_props.style;var adjustsFontSizeToFit=_props.adjustsFontSizeToFit;var allowFontScaling=_props.allowFontScaling;var ellipsizeMode=_props.ellipsizeMode;var minimumFontScale=_props.minimumFontScale;var onLayout=_props.onLayout;var suppressHighlighting=_props.suppressHighlighting;var otherProps=_objectWithoutProperties(_props,['numberOfLines','onPress','selectable','style','adjustsFontSizeToFit','allowFontScaling','ellipsizeMode','minimumFontScale','onLayout','suppressHighlighting']);

if(onPress){
otherProps.onClick=onPress;
otherProps.onKeyDown=this._createEnterHandler(onPress);
otherProps.tabIndex=0;
}

otherProps.style=[
styles.initial,
style,
!selectable&&styles.notSelectable,
numberOfLines===1&&styles.singleLineStyle,
onPress&&styles.pressable];


return(0,_createDOMElement2.default)('span',otherProps);
}},{key:'_createEnterHandler',value:function _createEnterHandler(

fn){
return function(e){
if(e.keyCode===13){
fn&&fn(e);
}
};
}}]);return Text;}(_react.Component);Text.displayName='Text';Text.defaultProps={accessible:true,selectable:true};process.env.NODE_ENV!=="production"?Text.propTypes=_extends({},_BaseComponentPropTypes2.default,{accessibilityRole:_react.PropTypes.oneOf(['button','heading','link','listitem']),children:_react.PropTypes.any,numberOfLines:_react.PropTypes.number,onLayout:_react.PropTypes.func,onPress:_react.PropTypes.func,selectable:_react.PropTypes.bool,style:(0,_StyleSheetPropType2.default)(_TextStylePropTypes2.default)}):void 0;


var styles=_StyleSheet2.default.create({
initial:{
borderWidth:0,
color:'inherit',
display:'inline',
font:'inherit',
margin:0,
padding:0,
textDecorationLine:'none',
wordWrap:'break-word'},

notSelectable:{
userSelect:'none'},

pressable:{
cursor:'pointer'},

singleLineStyle:{
maxWidth:'100%',
overflow:'hidden',
textOverflow:'ellipsis',
whiteSpace:'nowrap'}});



module.exports=(0,_applyLayout2.default)((0,_applyNativeMethods2.default)(Text));