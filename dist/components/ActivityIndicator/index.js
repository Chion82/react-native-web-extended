var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _Animated=require('../../apis/Animated');var _Animated2=_interopRequireDefault(_Animated);
var _applyNativeMethods=require('../../modules/applyNativeMethods');var _applyNativeMethods2=_interopRequireDefault(_applyNativeMethods);
var _Easing=require('animated/lib/Easing');var _Easing2=_interopRequireDefault(_Easing);
var _StyleSheet=require('../../apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);
var _View=require('../View');var _View2=_interopRequireDefault(_View);
var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var rotationInterpolation={inputRange:[0,1],outputRange:['0deg','360deg']};var

ActivityIndicator=function(_Component){_inherits(ActivityIndicator,_Component);

















function ActivityIndicator(props){_classCallCheck(this,ActivityIndicator);var _this=_possibleConstructorReturn(this,(ActivityIndicator.__proto__||Object.getPrototypeOf(ActivityIndicator)).call(this,
props));
_this.state={
animation:new _Animated2.default.Value(0)};return _this;

}_createClass(ActivityIndicator,[{key:'componentDidMount',value:function componentDidMount()

{
this._manageAnimation();
}},{key:'componentDidUpdate',value:function componentDidUpdate()

{
this._manageAnimation();
}},{key:'render',value:function render()

{var _props=







this.props;var animating=_props.animating;var color=_props.color;var hidesWhenStopped=_props.hidesWhenStopped;var size=_props.size;var style=_props.style;var other=_objectWithoutProperties(_props,['animating','color','hidesWhenStopped','size','style']);var

animation=this.state.animation;

var svg=
_react2.default.createElement('svg',{height:'100%',viewBox:'0 0 32 32',width:'100%'},
_react2.default.createElement('circle',{
cx:'16',
cy:'16',
fill:'none',
r:'14',
strokeWidth:'4',
style:{
stroke:color,
opacity:0.2}}),


_react2.default.createElement('circle',{
cx:'16',
cy:'16',
fill:'none',
r:'14',
strokeWidth:'4',
style:{
stroke:color,
strokeDasharray:80,
strokeDashoffset:60}}));





return(
_react2.default.createElement(_View2.default,_extends({},other,{
accessibilityRole:'progressbar',
'aria-valuemax':'1',
'aria-valuemin':'0',
style:[
styles.container,
style,
size&&{height:size,width:size}]}),


_react2.default.createElement(_Animated2.default.View,{
children:svg,
style:[
indicatorStyles[size],
hidesWhenStopped&&!animating&&styles.hidesWhenStopped,
{
transform:[
{rotate:animation.interpolate(rotationInterpolation)}]}]})));






}},{key:'_manageAnimation',value:function _manageAnimation()

{var
animation=this.state.animation;

var cycleAnimation=function cycleAnimation(){
animation.setValue(0);
_Animated2.default.timing(animation,{
duration:750,
easing:_Easing2.default.inOut(_Easing2.default.linear),
toValue:1}).
start(function(event){
if(event.finished){
cycleAnimation();
}
});
};

if(this.props.animating){
cycleAnimation();
}else{
animation.stopAnimation();
}
}}]);return ActivityIndicator;}(_react.Component);ActivityIndicator.displayName='ActivityIndicator';ActivityIndicator.defaultProps={animating:true,color:'#1976D2',hidesWhenStopped:true,size:'small'};process.env.NODE_ENV!=="production"?ActivityIndicator.propTypes=_extends({},_View2.default.propTypes,{animating:_react.PropTypes.bool,color:_react.PropTypes.string,hidesWhenStopped:_react.PropTypes.bool,size:_react.PropTypes.oneOfType([_react.PropTypes.oneOf(['small','large']),_react.PropTypes.number])}):void 0;


var styles=_StyleSheet2.default.create({
container:{
alignItems:'center',
justifyContent:'center'},

hidesWhenStopped:{
visibility:'hidden'}});



var indicatorStyles=_StyleSheet2.default.create({
small:{
width:20,
height:20},

large:{
width:36,
height:36}});



module.exports=(0,_applyNativeMethods2.default)(ActivityIndicator);