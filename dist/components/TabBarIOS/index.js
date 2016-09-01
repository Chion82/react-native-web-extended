Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _View=require('../View');var _View2=_interopRequireDefault(_View);
var _Text=require('../Text');var _Text2=_interopRequireDefault(_Text);
var _TabBarItemIOS=require('./TabBarItemIOS');var _TabBarItemIOS2=_interopRequireDefault(_TabBarItemIOS);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

TabBarIOS=function(_Component){_inherits(TabBarIOS,_Component);function TabBarIOS(){_classCallCheck(this,TabBarIOS);return _possibleConstructorReturn(this,(TabBarIOS.__proto__||Object.getPrototypeOf(TabBarIOS)).apply(this,arguments));}_createClass(TabBarIOS,[{key:'getTabBarStyle',value:function getTabBarStyle()









{
var defaultStyle={
width:'100%',
height:50,
borderTopWidth:1,
borderTopColor:'#ddd',
position:'fixed',
bottom:0,
backgroundColor:this.props.barTintColor||'white',
flex:1,
flexDirection:'row',
alignItems:'center'};

var style=_lodash2.default.assign(defaultStyle,this.props.style);
return style;
}},{key:'getContentView',value:function getContentView()

{
var content=undefined;
_react2.default.Children.forEach(this.props.children,function(child){
if(child.props.selected===true){
content=child.props.children;
}
});
return content;
}},{key:'renderTabs',value:function renderTabs()

{var _this2=this;
var tabs=[];

_react2.default.Children.forEach(this.props.children,function(child,index){
var displayIcon=child.props.icon;
var textColor=_this2.props.unselectedTintColor||'#ccc';
if(child.props.selected){
if(child.props.selectedIcon){
displayIcon=child.props.selectedIcon;
}
textColor=_this2.props.tintColor||'#039BE5';
}

var TabBarItem=child.type;

var tab=_react2.default.createElement(TabBarItem,_extends({
textColor:textColor,
displayIcon:displayIcon},
child.props,{
key:index}));
tabs.push(tab);
});
return tabs;
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_View2.default,{style:{
flex:1,
flexDirection:'column'}},

_react2.default.createElement(_View2.default,{style:{
alignSelf:'stretch',
paddingBottom:50}},

this.getContentView()),


_react2.default.createElement(_View2.default,{style:this.getTabBarStyle()},
this.renderTabs())));



}}]);return TabBarIOS;}(_react.Component);TabBarIOS.Item=_TabBarItemIOS2.default;TabBarIOS.propTypes={barTintColor:_react.PropTypes.string,unselectedTintColor:_react.PropTypes.string,tintColor:_react.PropTypes.string};exports.default=



TabBarIOS;