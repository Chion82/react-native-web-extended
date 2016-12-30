var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _Animated=require('../../apis/Animated');var _Animated2=_interopRequireDefault(_Animated);
var _applyNativeMethods=require('../../modules/applyNativeMethods');var _applyNativeMethods2=_interopRequireDefault(_applyNativeMethods);
var _ColorPropType=require('../../propTypes/ColorPropType');var _ColorPropType2=_interopRequireDefault(_ColorPropType);
var _StyleSheet=require('../../apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);
var _View=require('../View');var _View2=_interopRequireDefault(_View);
var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var indeterminateWidth='25%';
var translateInterpolation={inputRange:[0,1],outputRange:['-100%','400%']};var

ProgressBar=function(_Component){_inherits(ProgressBar,_Component);

















function ProgressBar(props){_classCallCheck(this,ProgressBar);var _this=_possibleConstructorReturn(this,(ProgressBar.__proto__||Object.getPrototypeOf(ProgressBar)).call(this,
props));
_this.state={
animationTranslate:new _Animated2.default.Value(0)};return _this;

}_createClass(ProgressBar,[{key:'componentDidMount',value:function componentDidMount()

{
this._manageAnimation();
}},{key:'componentDidUpdate',value:function componentDidUpdate()

{
this._manageAnimation();
}},{key:'render',value:function render()

{var _props=







this.props;var color=_props.color;var indeterminate=_props.indeterminate;var progress=_props.progress;var trackColor=_props.trackColor;var style=_props.style;var other=_objectWithoutProperties(_props,['color','indeterminate','progress','trackColor','style']);var

animationTranslate=this.state.animationTranslate;

var percentageProgress=indeterminate?50:progress*100;

return(
_react2.default.createElement(_View2.default,_extends({},other,{
accessibilityRole:'progressbar',
'aria-valuemax':'100',
'aria-valuemin':'0',
'aria-valuenow':indeterminate?null:percentageProgress,
style:[
styles.track,
style,
{backgroundColor:trackColor}]}),


_react2.default.createElement(_Animated2.default.View,{style:[
styles.progress,
{backgroundColor:color},
indeterminate?{
transform:[
{translateX:animationTranslate.interpolate(translateInterpolation)}],

width:indeterminateWidth}:
{
width:percentageProgress+'%'}]})));




}},{key:'_manageAnimation',value:function _manageAnimation()

{var
animationTranslate=this.state.animationTranslate;

var cycleAnimation=function cycleAnimation(animation){
animation.setValue(0);
_Animated2.default.timing(animation,{
duration:1000,
toValue:1}).
start(function(event){
if(event.finished){
cycleAnimation(animation);
}
});
};

if(this.props.indeterminate){
cycleAnimation(animationTranslate);
}else{
animationTranslate.stopAnimation();
}
}}]);return ProgressBar;}(_react.Component);ProgressBar.displayName='ProgressBar';ProgressBar.defaultProps={color:'#1976D2',indeterminate:false,progress:0,trackColor:'transparent'};process.env.NODE_ENV!=="production"?ProgressBar.propTypes=_extends({},_View2.default.propTypes,{color:_ColorPropType2.default,indeterminate:_react.PropTypes.bool,progress:_react.PropTypes.number,trackColor:_ColorPropType2.default}):void 0;


var styles=_StyleSheet2.default.create({
track:{
height:5,
overflow:'hidden',
userSelect:'none'},

progress:{
height:'100%'}});



module.exports=(0,_applyNativeMethods2.default)(ProgressBar);