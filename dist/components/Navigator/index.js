Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRouter=require('react-router');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

RouteContent=function(_Component){_inherits(RouteContent,_Component);function RouteContent(){_classCallCheck(this,RouteContent);return _possibleConstructorReturn(this,(RouteContent.__proto__||Object.getPrototypeOf(RouteContent)).apply(this,arguments));}_createClass(RouteContent,[{key:'render',value:function render()








{var _props$route=
this.props.route;var renderScene=_props$route.renderScene;var navigator=_props$route.navigator;
var route=null;

if(this.props.params.routeIndex){
route={
index:parseInt(this.props.params.routeIndex)};

}

if(this.props.location&&this.props.location.state){
route=this.props.location.state.route;
}

return renderScene(route,navigator);
}}]);return RouteContent;}(_react.Component);process.env.NODE_ENV!=="production"?RouteContent.propTypes={route:_react.PropTypes.any,params:_react.PropTypes.any,location:_react.PropTypes.any,renderScene:_react.PropTypes.func}:void 0;var


Navigator=function(_Component2){_inherits(Navigator,_Component2);






function Navigator(props){_classCallCheck(this,Navigator);var _this2=_possibleConstructorReturn(this,(Navigator.__proto__||Object.getPrototypeOf(Navigator)).call(this,
props));
_this2.navigator=[];

_this2.navigator.push=function(newRoute){
_reactRouter.hashHistory.push({
pathname:'/app/'+newRoute.index,
state:{
route:newRoute}});


_this2.navigator[_this2.navigator.length]=newRoute;
return _this2.navigator.length;
};

_this2.navigator.pop=function(){
_reactRouter.hashHistory.goBack();
var returnRoute=_this2.navigator[_this2.navigator.length-1];
_this2.navigator.splice(_this2.navigator.length-1,1);
return returnRoute;
};

if(/\/app\/([0-9]+)/.test(window.location.hash)){
return _possibleConstructorReturn(_this2);
}

if(props.initialRoute){
_this2.navigator.push(props.initialRoute);
}return _this2;
}_createClass(Navigator,[{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactRouter.Router,{history:_reactRouter.hashHistory},
_react2.default.createElement(_reactRouter.Route,{component:RouteContent,navigator:this.navigator,path:'/app/:routeIndex',renderScene:this.props.renderScene})));


}}]);return Navigator;}(_react.Component);process.env.NODE_ENV!=="production"?Navigator.propTypes={initialRoute:_react.PropTypes.object,renderScene:_react.PropTypes.func.isRequired}:void 0;exports.default=


Navigator;