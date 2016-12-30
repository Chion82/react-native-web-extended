Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();







var _debounce=require('debounce');var _debounce2=_interopRequireDefault(_debounce);
var _View=require('../View');var _View2=_interopRequireDefault(_View);
var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var normalizeScrollEvent=function normalizeScrollEvent(e){return{
nativeEvent:{
contentOffset:{
get x(){
return e.target.scrollLeft;
},
get y(){
return e.target.scrollTop;
}},

contentSize:{
get height(){
return e.target.scrollHeight;
},
get width(){
return e.target.scrollWidth;
}},

layoutMeasurement:{
get height(){
return e.target.offsetHeight;
},
get width(){
return e.target.offsetWidth;
}}}};};var







ScrollViewBase=function(_Component){_inherits(ScrollViewBase,_Component);





















function ScrollViewBase(props){_classCallCheck(this,ScrollViewBase);var _this=_possibleConstructorReturn(this,(ScrollViewBase.__proto__||Object.getPrototypeOf(ScrollViewBase)).call(this,
props));_this.




_handlePreventableScrollEvent=function(handler){
return function(e){
if(!_this.props.scrollEnabled){
e.preventDefault();
}else{
if(handler){handler(e);}
}
};
};_this.

_handleScroll=function(e){
e.persist();var
scrollEventThrottle=_this.props.scrollEventThrottle;

_this._debouncedOnScrollEnd(e);
if(_this._state.isScrolling){

if(_this._shouldEmitScrollEvent(_this._state.scrollLastTick,scrollEventThrottle)){
_this._handleScrollTick(e);
}
}else{

_this._handleScrollStart(e);
}
};_this._debouncedOnScrollEnd=(0,_debounce2.default)(_this._handleScrollEnd,100);_this._state={isScrolling:false};return _this;}_createClass(ScrollViewBase,[{key:'_handleScrollStart',value:function _handleScrollStart(

e){
this._state.isScrolling=true;
this._state.scrollLastTick=Date.now();
}},{key:'_handleScrollTick',value:function _handleScrollTick(

e){var
onScroll=this.props.onScroll;
this._state.scrollLastTick=Date.now();
if(onScroll){onScroll(normalizeScrollEvent(e));}
}},{key:'_handleScrollEnd',value:function _handleScrollEnd(

e){var
onScroll=this.props.onScroll;
this._state.isScrolling=false;
if(onScroll){onScroll(normalizeScrollEvent(e));}
}},{key:'_shouldEmitScrollEvent',value:function _shouldEmitScrollEvent(

lastTick,eventThrottle){
var timeSinceLastTick=Date.now()-lastTick;
return eventThrottle>0&&timeSinceLastTick>=eventThrottle;
}},{key:'render',value:function render()

{var _props=













this.props;var onMomentumScrollBegin=_props.onMomentumScrollBegin;var onMomentumScrollEnd=_props.onMomentumScrollEnd;var onScrollBeginDrag=_props.onScrollBeginDrag;var onScrollEndDrag=_props.onScrollEndDrag;var removeClippedSubviews=_props.removeClippedSubviews;var scrollEnabled=_props.scrollEnabled;var scrollEventThrottle=_props.scrollEventThrottle;var showsHorizontalScrollIndicator=_props.showsHorizontalScrollIndicator;var showsVerticalScrollIndicator=_props.showsVerticalScrollIndicator;var other=_objectWithoutProperties(_props,['onMomentumScrollBegin','onMomentumScrollEnd','onScrollBeginDrag','onScrollEndDrag','removeClippedSubviews','scrollEnabled','scrollEventThrottle','showsHorizontalScrollIndicator','showsVerticalScrollIndicator']);

return(
_react2.default.createElement(_View2.default,_extends({},
other,{
onScroll:this._handleScroll,
onTouchMove:this._handlePreventableScrollEvent(this.props.onTouchMove),
onWheel:this._handlePreventableScrollEvent(this.props.onWheel)})));


}}]);return ScrollViewBase;}(_react.Component);ScrollViewBase.defaultProps={scrollEnabled:true,scrollEventThrottle:0};exports.default=ScrollViewBase;process.env.NODE_ENV!=="production"?ScrollViewBase.propTypes=_extends({},_View2.default.propTypes,{onMomentumScrollBegin:_react.PropTypes.func,onMomentumScrollEnd:_react.PropTypes.func,onScroll:_react.PropTypes.func,onScrollBeginDrag:_react.PropTypes.func,onScrollEndDrag:_react.PropTypes.func,onTouchMove:_react.PropTypes.func,onWheel:_react.PropTypes.func,removeClippedSubviews:_react.PropTypes.bool,scrollEnabled:_react.PropTypes.bool,scrollEventThrottle:_react.PropTypes.number,showsHorizontalScrollIndicator:_react.PropTypes.bool,showsVerticalScrollIndicator:_react.PropTypes.bool}):void 0;