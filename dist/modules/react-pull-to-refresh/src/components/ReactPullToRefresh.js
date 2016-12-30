Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _wptr=require('../pull-to-refresh/wptr.1.1');var _wptr2=_interopRequireDefault(_wptr);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ReactPullToRefresh=function(_Component){_inherits(ReactPullToRefresh,_Component);

function ReactPullToRefresh(props){_classCallCheck(this,ReactPullToRefresh);var _this=_possibleConstructorReturn(this,(ReactPullToRefresh.__proto__||Object.getPrototypeOf(ReactPullToRefresh)).call(this,
props));
_this.state={
initialized:false};

_this.handleRefresh=_this.handleRefresh.bind(_this);return _this;
}_createClass(ReactPullToRefresh,[{key:'handleRefresh',value:function handleRefresh()

{var _this2=this;
return new Promise(function(resolve,reject){
_this2.props.onRefresh(resolve,reject);
});
}},{key:'init',value:function init()

{
if(!this.state.initialized){
(0,_wptr2.default)().init({
contentEl:this.refs.refresh,
ptrEl:this.refs.ptr,
bodyEl:this.refs.body,
distanceToRefresh:this.props.distanceToRefresh||undefined,
loadingFunction:this.handleRefresh,
resistance:this.props.resistance||undefined,
hammerOptions:this.props.hammerOptions||undefined,
scrollEl:this.refs.refresh.children[0]});

this.setState({
initialized:true});

}
}},{key:'componentDidMount',value:function componentDidMount()

{
if(!this.props.disabled){
this.init();
}
}},{key:'componentDidUpdate',value:function componentDidUpdate()

{
if(!this.props.disabled){
this.init();
}
}},{key:'render',value:function render()

{var _props=










this.props;var children=_props.children;var disabled=_props.disabled;var distanceToRefresh=_props.distanceToRefresh;var hammerOptions=_props.hammerOptions;var icon=_props.icon;var loading=_props.loading;var onRefresh=_props.onRefresh;var resistance=_props.resistance;var rest=_objectWithoutProperties(_props,['children','disabled','distanceToRefresh','hammerOptions','icon','loading','onRefresh','resistance']);

if(disabled){
return(
_react2.default.createElement('div',rest,
children));


}

return(
_react2.default.createElement('div',_extends({ref:'body'},rest),
_react2.default.createElement('div',{ref:'ptr',className:'ptr-element'},
icon||_react2.default.createElement('span',{className:'genericon genericon-next'}),
loading||
_react2.default.createElement('div',{className:'loading'},
_react2.default.createElement('span',{className:'loading-ptr-1'}),
_react2.default.createElement('span',{className:'loading-ptr-2'}),
_react2.default.createElement('span',{className:'loading-ptr-3'}))),


_react2.default.createElement('div',{ref:'refresh',className:'refresh-view'},
children)));



}}]);return ReactPullToRefresh;}(_react.Component);exports.default=ReactPullToRefresh;


process.env.NODE_ENV!=="production"?ReactPullToRefresh.propTypes={
onRefresh:_react.PropTypes.func.isRequired,
icon:_react.PropTypes.element,
loading:_react.PropTypes.element,
disabled:_react.PropTypes.bool,
className:_react.PropTypes.string,
style:_react.PropTypes.object,
distanceToRefresh:_react.PropTypes.number,
resistance:_react.PropTypes.number,
hammerOptions:_react.PropTypes.object}:void 0;