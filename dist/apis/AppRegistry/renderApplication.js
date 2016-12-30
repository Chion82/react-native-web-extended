Object.defineProperty(exports,"__esModule",{value:true});exports.default=













renderApplication;exports.












getApplication=getApplication;var _invariant=require('fbjs/lib/invariant');var _invariant2=_interopRequireDefault(_invariant);var _ReactMount=require('react-dom/lib/ReactMount');var _ReactNativeApp=require('./ReactNativeApp');var _ReactNativeApp2=_interopRequireDefault(_ReactNativeApp);var _StyleSheet=require('../../apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function renderApplication(RootComponent,initialProps,rootTag){(0,_invariant2.default)(rootTag,'Expect to have a valid rootTag, instead got ',rootTag);var component=_react2.default.createElement(_ReactNativeApp2.default,{initialProps:initialProps,rootComponent:RootComponent,rootTag:rootTag});(0,_ReactMount.render)(component,rootTag);}function getApplication(RootComponent,initialProps){
var element=
_react2.default.createElement(_ReactNativeApp2.default,{
initialProps:initialProps,
rootComponent:RootComponent});


var stylesheet=_StyleSheet2.default.render();
return{element:element,stylesheet:stylesheet};
}