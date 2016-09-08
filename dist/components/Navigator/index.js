Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRouter=require('react-router');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var SVG='<svg width=\'72px\' height=\'72px\' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-default"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'#00b2ff\' transform=\'rotate(0 50 50) translate(0 -30)\'>  <animate attributeName=\'opacity\' from=\'1\' to=\'0\' dur=\'1s\' begin=\'0s\' repeatCount=\'indefinite\'/></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'#00b2ff\' transform=\'rotate(30 50 50) translate(0 -30)\'>  <animate attributeName=\'opacity\' from=\'1\' to=\'0\' dur=\'1s\' begin=\'0.08333333333333333s\' repeatCount=\'indefinite\'/></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'#00b2ff\' transform=\'rotate(60 50 50) translate(0 -30)\'>  <animate attributeName=\'opacity\' from=\'1\' to=\'0\' dur=\'1s\' begin=\'0.16666666666666666s\' repeatCount=\'indefinite\'/></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'#00b2ff\' transform=\'rotate(90 50 50) translate(0 -30)\'>  <animate attributeName=\'opacity\' from=\'1\' to=\'0\' dur=\'1s\' begin=\'0.25s\' repeatCount=\'indefinite\'/></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'#00b2ff\' transform=\'rotate(120 50 50) translate(0 -30)\'>  <animate attributeName=\'opacity\' from=\'1\' to=\'0\' dur=\'1s\' begin=\'0.3333333333333333s\' repeatCount=\'indefinite\'/></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'#00b2ff\' transform=\'rotate(150 50 50) translate(0 -30)\'>  <animate attributeName=\'opacity\' from=\'1\' to=\'0\' dur=\'1s\' begin=\'0.4166666666666667s\' repeatCount=\'indefinite\'/></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'#00b2ff\' transform=\'rotate(180 50 50) translate(0 -30)\'>  <animate attributeName=\'opacity\' from=\'1\' to=\'0\' dur=\'1s\' begin=\'0.5s\' repeatCount=\'indefinite\'/></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'#00b2ff\' transform=\'rotate(210 50 50) translate(0 -30)\'>  <animate attributeName=\'opacity\' from=\'1\' to=\'0\' dur=\'1s\' begin=\'0.5833333333333334s\' repeatCount=\'indefinite\'/></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'#00b2ff\' transform=\'rotate(240 50 50) translate(0 -30)\'>  <animate attributeName=\'opacity\' from=\'1\' to=\'0\' dur=\'1s\' begin=\'0.6666666666666666s\' repeatCount=\'indefinite\'/></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'#00b2ff\' transform=\'rotate(270 50 50) translate(0 -30)\'>  <animate attributeName=\'opacity\' from=\'1\' to=\'0\' dur=\'1s\' begin=\'0.75s\' repeatCount=\'indefinite\'/></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'#00b2ff\' transform=\'rotate(300 50 50) translate(0 -30)\'>  <animate attributeName=\'opacity\' from=\'1\' to=\'0\' dur=\'1s\' begin=\'0.8333333333333334s\' repeatCount=\'indefinite\'/></rect><rect  x=\'46.5\' y=\'40\' width=\'7\' height=\'20\' rx=\'5\' ry=\'5\' fill=\'#00b2ff\' transform=\'rotate(330 50 50) translate(0 -30)\'>  <animate attributeName=\'opacity\' from=\'1\' to=\'0\' dur=\'1s\' begin=\'0.9166666666666666s\' repeatCount=\'indefinite\'/></rect></svg>';var

RouteContent=function(_Component){_inherits(RouteContent,_Component);function RouteContent(){_classCallCheck(this,RouteContent);return _possibleConstructorReturn(this,(RouteContent.__proto__||Object.getPrototypeOf(RouteContent)).apply(this,arguments));}_createClass(RouteContent,[{key:'hideLoading',value:function hideLoading()








{
var overlay=document.getElementById('global-loading-overlay');
if(overlay){
overlay.remove();
}
}},{key:'render',value:function render()

{
setTimeout(this.hideLoading);var _props$route=

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
}}]);return RouteContent;}(_react.Component);RouteContent.propTypes={route:_react.PropTypes.any,params:_react.PropTypes.any,location:_react.PropTypes.any,renderScene:_react.PropTypes.func};var


Navigator=function(_Component2){_inherits(Navigator,_Component2);






function Navigator(props){_classCallCheck(this,Navigator);var _this2=_possibleConstructorReturn(this,(Navigator.__proto__||Object.getPrototypeOf(Navigator)).call(this,
props));
_this2.navigator=[];

_this2.navigator.push=function(newRoute){
_this2.showLoading();

setTimeout(function(){
_reactRouter.hashHistory.push({
pathname:'/app/'+newRoute.index,
state:{
route:newRoute}});


});

_this2.navigator[_this2.navigator.length]=newRoute;
return _this2.navigator.length;
};

_this2.navigator.pop=function(){
_this2.showLoading();

setTimeout(function(){
_reactRouter.hashHistory.goBack();
});

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
}_createClass(Navigator,[{key:'showLoading',value:function showLoading()

{
var overlay=document.createElement('div');
overlay.innerHTML='<div style="text-align:center;">'+SVG+'</div>';
overlay.id='global-loading-overlay';
overlay.style.display='flex';
overlay.style['align-items']='center';
overlay.style['justify-content']='center';
overlay.style['background-color']='white';
overlay.style['z-index']='9999999';
overlay.style.position='fixed';
overlay.style.top=0;
overlay.style.left=0;
overlay.style.width='100%';
overlay.style.height='100%';
document.body.appendChild(overlay);
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactRouter.Router,{history:_reactRouter.hashHistory},
_react2.default.createElement(_reactRouter.Route,{component:RouteContent,navigator:this.navigator,path:'/app/:routeIndex',renderScene:this.props.renderScene})));


}}]);return Navigator;}(_react.Component);Navigator.propTypes={initialRoute:_react.PropTypes.object,renderScene:_react.PropTypes.func.isRequired};exports.default=


Navigator;