Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _View=require('../View');var _View2=_interopRequireDefault(_View);
var _Image=require('../Image');var _Image2=_interopRequireDefault(_Image);
var _Text=require('../Text');var _Text2=_interopRequireDefault(_Text);
var _TouchableOpacity=require('../Touchable/TouchableOpacity');var _TouchableOpacity2=_interopRequireDefault(_TouchableOpacity);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

TabBarItemIOS=function(_Component){_inherits(TabBarItemIOS,_Component);function TabBarItemIOS(){_classCallCheck(this,TabBarItemIOS);return _possibleConstructorReturn(this,(TabBarItemIOS.__proto__||Object.getPrototypeOf(TabBarItemIOS)).apply(this,arguments));}_createClass(TabBarItemIOS,[{key:'getBadgeStyle',value:function getBadgeStyle()













{
return{
position:'absolute',
top:-2,
right:-6,
backgroundColor:'red',
borderRadius:9,
color:'white',
fontSize:12,
width:18,
height:18,
textAlign:'center',
lineHeight:20};

}},{key:'getImageStyle',value:function getImageStyle()

{
var defaultStyle={
width:26,
height:26};

return _lodash2.default.assign(defaultStyle,this.props.style);
}},{key:'getWrapperProps',value:function getWrapperProps()

{
var props=_lodash2.default.clone(this.props);
if(props.style){
delete props.style;
}
return props;
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_TouchableOpacity2.default,_extends({style:{
flex:1,
flexDirection:'column',
justifyContent:'center',
alignItems:'center'}},
this.getWrapperProps()),

_react2.default.createElement(_View2.default,{style:{
position:'relative',
flex:1,
justifyContent:'center',
alignItems:'center'}},

this.props.displayIcon&&_react2.default.createElement(_Image2.default,{resizeMode:'stretch',source:this.props.displayIcon,style:this.getImageStyle()}),

this.props.iconComponent,

this.props.badge&&
_react2.default.createElement(_Text2.default,{style:this.getBadgeStyle()},this.props.badge)),



_react2.default.createElement(_View2.default,{style:{
marginTop:3}},


_react2.default.createElement(_Text2.default,{style:{
color:this.props.textColor,
fontSize:11,
textAlign:'center'}},
this.props.title))));





}}]);return TabBarItemIOS;}(_react.Component);process.env.NODE_ENV!=="production"?TabBarItemIOS.propTypes={title:_react.PropTypes.string,icon:_react.PropTypes.any,selectedIcon:_react.PropTypes.any,selected:_react.PropTypes.bool,iconComponent:_react.PropTypes.node,badge:_react.PropTypes.any,textColor:_react.PropTypes.any,displayIcon:_react.PropTypes.any,style:_react.PropTypes.any}:void 0;exports.default=



TabBarItemIOS;