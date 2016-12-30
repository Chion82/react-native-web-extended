







var _react=require('react');
var _findNodeHandle=require('../findNodeHandle');var _findNodeHandle2=_interopRequireDefault(_findNodeHandle);
var _UIManager=require('../../apis/UIManager');var _UIManager2=_interopRequireDefault(_UIManager);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
























var NativeMethodsMixin={



blur:function blur(){
_UIManager2.default.blur((0,_findNodeHandle2.default)(this));
},





focus:function focus(){
_UIManager2.default.focus((0,_findNodeHandle2.default)(this));
},




measure:function measure(callback){
_UIManager2.default.measure(
(0,_findNodeHandle2.default)(this),
mountSafeCallback(this,callback));

},
















measureInWindow:function measureInWindow(callback){
_UIManager2.default.measureInWindow(
(0,_findNodeHandle2.default)(this),
mountSafeCallback(this,callback));

},




measureLayout:function measureLayout(
relativeToNativeNode,
onSuccess,
onFail)
{
_UIManager2.default.measureLayout(
(0,_findNodeHandle2.default)(this),
relativeToNativeNode,
mountSafeCallback(this,onFail),
mountSafeCallback(this,onSuccess));

},




setNativeProps:function setNativeProps(nativeProps){
_UIManager2.default.updateView(
(0,_findNodeHandle2.default)(this),
nativeProps,
this);

}};






var mountSafeCallback=function mountSafeCallback(context,callback){return function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}
if(!callback){
return undefined;
}
return callback.apply(context,args);
};};

module.exports=NativeMethodsMixin;