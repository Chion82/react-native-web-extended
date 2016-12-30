var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _ColorPropType=require('../../propTypes/ColorPropType');var _ColorPropType2=_interopRequireDefault(_ColorPropType);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _StyleSheet=require('../../apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);
var _TouchableOpacity=require('../Touchable/TouchableOpacity');var _TouchableOpacity2=_interopRequireDefault(_TouchableOpacity);
var _Text=require('../Text');var _Text2=_interopRequireDefault(_Text);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Button=function(_Component){_inherits(Button,_Component);function Button(){_classCallCheck(this,Button);return _possibleConstructorReturn(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));}_createClass(Button,[{key:'render',value:function render()








{var _props=






this.props;var accessibilityLabel=_props.accessibilityLabel;var color=_props.color;var disabled=_props.disabled;var onPress=_props.onPress;var title=_props.title;

return(
_react2.default.createElement(_TouchableOpacity2.default,{
accessibilityLabel:accessibilityLabel,
accessibilityRole:'button',
disabled:disabled,
onPress:onPress,
style:[
styles.button,
color&&{backgroundColor:color},
disabled&&styles.buttonDisabled]},

_react2.default.createElement(_Text2.default,{style:[
styles.text,
disabled&&styles.textDisabled]},

title)));



}}]);return Button;}(_react.Component);process.env.NODE_ENV!=="production"?Button.propTypes={accessibilityLabel:_react.PropTypes.string,color:_ColorPropType2.default,disabled:_react.PropTypes.bool,onPress:_react.PropTypes.func.isRequired,title:_react.PropTypes.string.isRequired}:void 0;


var styles=_StyleSheet2.default.create({
button:{
backgroundColor:'#2196F3',
borderRadius:2},

text:{
textAlign:'center',
color:'#fff',
padding:8,
fontWeight:'500'},

buttonDisabled:{
backgroundColor:'#dfdfdf'},

textDisabled:{
color:'#a1a1a1'}});



module.exports=Button;