Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _View=require('../View');var _View2=_interopRequireDefault(_View);
var _TabBarItemIOS=require('./TabBarItemIOS');var _TabBarItemIOS2=_interopRequireDefault(_TabBarItemIOS);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ContentWrapper=function(_Component){_inherits(ContentWrapper,_Component);function ContentWrapper(){_classCallCheck(this,ContentWrapper);return _possibleConstructorReturn(this,(ContentWrapper.__proto__||Object.getPrototypeOf(ContentWrapper)).apply(this,arguments));}_createClass(ContentWrapper,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate()





{
return false;
}},{key:'render',value:function render()

{
return _react2.default.createElement('div',null,this.props.children);
}}]);return ContentWrapper;}(_react.Component);process.env.NODE_ENV!=="production"?ContentWrapper.propTypes={children:_react.PropTypes.any}:void 0;var


TabBarIOS=function(_Component2){_inherits(TabBarIOS,_Component2);function TabBarIOS(){_classCallCheck(this,TabBarIOS);return _possibleConstructorReturn(this,(TabBarIOS.__proto__||Object.getPrototypeOf(TabBarIOS)).apply(this,arguments));}_createClass(TabBarIOS,[{key:'getTabBarStyle',value:function getTabBarStyle()











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
return _react2.default.Children.map(this.props.children,function(child,index){
var props=null;
if(child.props.selected===true){
props={style:{display:'initial'}};
}else{
props={style:{display:'none'}};
}
return(
_react2.default.createElement('div',_extends({},props,{key:index}),
_react2.default.createElement(ContentWrapper,null,child.props.children)));


});
}},{key:'renderTabs',value:function renderTabs()

{var _this3=this;
var tabs=[];

_react2.default.Children.forEach(this.props.children,function(child,index){
var displayIcon=child.props.icon;
var textColor=_this3.props.unselectedTintColor||'#ccc';
if(child.props.selected){
if(child.props.selectedIcon){
displayIcon=child.props.selectedIcon;
}
textColor=_this3.props.tintColor||'#039BE5';
}

var TabBarItem=child.type;

var tab=_react2.default.createElement(TabBarItem,_extends({displayIcon:displayIcon,textColor:textColor},child.props,{key:index}));
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


_react2.default.createElement(_View2.default,{style:this.getTabBarStyle(),className:'tabbarios-tabbar-container'},
this.renderTabs())));



}}]);return TabBarIOS;}(_react.Component);TabBarIOS.Item=_TabBarItemIOS2.default;process.env.NODE_ENV!=="production"?TabBarIOS.propTypes={barTintColor:_react.PropTypes.string,unselectedTintColor:_react.PropTypes.string,tintColor:_react.PropTypes.string,style:_react.PropTypes.any,children:_react.PropTypes.any}:void 0;exports.default=



TabBarIOS;