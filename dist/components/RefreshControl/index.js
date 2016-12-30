Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _src=require('../../modules/react-pull-to-refresh/src');var _src2=_interopRequireDefault(_src);
var _ActivityIndicator=require('../ActivityIndicator');var _ActivityIndicator2=_interopRequireDefault(_ActivityIndicator);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var arrowIcon='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfgCQYHLCTylhV1AAAAjklEQVQ4y2P8z0AaYCJRPX4NsyNWM5Ok4R/n+/noWhjx+2F20n8HwcTQv0T7IXUe4wFUWwh6Gl0LEaGEqoWoYEXWQmQ8ILQwEh/TkBBjme3HIESkjn+Mv9/vJjlpkOwkom2AxTmRGhBJhCgNyCmKCA2oCZCgBvT0ykSacgIaZiaiKydoA7pykiKOSE+jAwADZUnJjMWwUQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNi0wOS0wNlQwNzo0NDozNiswMjowMAZN3oQAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTYtMDktMDZUMDc6NDQ6MzYrMDI6MDB3EGY4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==';
var css='.ptr-element .pull-down-icon {\n  font-size: 34px;\n  transition: all .25s ease;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  margin-top: -22px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  width: 22px;\n  height: 22px;\n}\n.ptr-refresh .pull-down-icon {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.ptr-loading .pull-down-icon {\n  display: none;\n}\n.ptr-reset .pull-down-icon {\n  display: block;\n}\n\n.ptr-element .loading {\n  display: inline-block;\n  display: none;\n  margin-top: 5px;\n}\n.ptr-loading .loading {\n  display: block;\n  margin-bottom: 10px;\n}';
































(function(){
var styleTag=document.createElement('style');
styleTag.innerHTML=css;
document.getElementsByTagName('head')[0].appendChild(styleTag);
})();var

RefreshControl=function(_Component){_inherits(RefreshControl,_Component);function RefreshControl(){_classCallCheck(this,RefreshControl);return _possibleConstructorReturn(this,(RefreshControl.__proto__||Object.getPrototypeOf(RefreshControl)).apply(this,arguments));}_createClass(RefreshControl,[{key:'handleRefresh',value:function handleRefresh(








resolve){var _this2=this;
this.props.onRefresh();
setInterval(function(){
if(!_this2.props.refreshing){
resolve();
}
},1);
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_src2.default,{
icon:_react2.default.createElement('img',{width:22,height:22,src:arrowIcon,className:'pull-down-icon'}),
loading:_react2.default.createElement('div',{className:'loading'},_react2.default.createElement(_ActivityIndicator2.default,{animating:true})),
onRefresh:this.handleRefresh.bind(this)},
this.props.children));


}}]);return RefreshControl;}(_react.Component);process.env.NODE_ENV!=="production"?RefreshControl.propTypes={onRefresh:_react2.default.PropTypes.func.isRequired,refreshing:_react2.default.PropTypes.bool.isRequired,children:_react2.default.PropTypes.any,style:_react2.default.PropTypes.any}:void 0;exports.default=


RefreshControl;