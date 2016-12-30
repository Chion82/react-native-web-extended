var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};







var _dismissKeyboard=require('../../modules/dismissKeyboard');var _dismissKeyboard2=_interopRequireDefault(_dismissKeyboard);
var _findNodeHandle=require('../../modules/findNodeHandle');var _findNodeHandle2=_interopRequireDefault(_findNodeHandle);
var _invariant=require('fbjs/lib/invariant');var _invariant2=_interopRequireDefault(_invariant);
var _ScrollResponder=require('../../modules/ScrollResponder');var _ScrollResponder2=_interopRequireDefault(_ScrollResponder);
var _ScrollViewBase=require('./ScrollViewBase');var _ScrollViewBase2=_interopRequireDefault(_ScrollViewBase);
var _StyleSheet=require('../../apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);
var _StyleSheetPropType=require('../../propTypes/StyleSheetPropType');var _StyleSheetPropType2=_interopRequireDefault(_StyleSheetPropType);
var _View=require('../View');var _View2=_interopRequireDefault(_View);
var _ViewStylePropTypes=require('../View/ViewStylePropTypes');var _ViewStylePropTypes2=_interopRequireDefault(_ViewStylePropTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var emptyObject={};


var ScrollView=_react2.default.createClass({displayName:'ScrollView',
propTypes:_extends({},
_View2.default.propTypes,{
contentContainerStyle:(0,_StyleSheetPropType2.default)(_ViewStylePropTypes2.default),
horizontal:_react.PropTypes.bool,
keyboardDismissMode:_react.PropTypes.oneOf(['none','interactive','on-drag']),
onContentSizeChange:_react.PropTypes.func,
onScroll:_react.PropTypes.func,
pagingEnabled:_react.PropTypes.bool,
refreshControl:_react.PropTypes.element,
scrollEnabled:_react.PropTypes.bool,
scrollEventThrottle:_react.PropTypes.number,
style:(0,_StyleSheetPropType2.default)(_ViewStylePropTypes2.default)}),


mixins:[_ScrollResponder2.default.Mixin],

getInitialState:function getInitialState(){
return this.scrollResponderMixinGetInitialState();
},

setNativeProps:function setNativeProps(props){
this._scrollViewRef.setNativeProps(props);
},







getScrollResponder:function getScrollResponder(){
return this;
},

getScrollableNode:function getScrollableNode(){
return(0,_findNodeHandle2.default)(this._scrollViewRef);
},

getInnerViewNode:function getInnerViewNode(){
return(0,_findNodeHandle2.default)(this._innerViewRef);
},











scrollTo:function scrollTo(
y,
x,
animated)
{
if(typeof y==='number'){
console.warn('`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.');
}else{var _ref=
y||emptyObject;x=_ref.x;y=_ref.y;animated=_ref.animated;
}

this.getScrollResponder().scrollResponderScrollTo({x:x||0,y:y||0,animated:animated!==false});
},




scrollWithoutAnimationTo:function scrollWithoutAnimationTo(){var y=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var x=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;
console.warn('`scrollWithoutAnimationTo` is deprecated. Use `scrollTo` instead');
this.scrollTo({x:x,y:y,animated:false});
},

render:function render(){var _this=this;var _props=











this.props;var contentContainerStyle=_props.contentContainerStyle;var horizontal=_props.horizontal;var onContentSizeChange=_props.onContentSizeChange;var refreshControl=_props.refreshControl;var keyboardDismissMode=_props.keyboardDismissMode;var onScroll=_props.onScroll;var pagingEnabled=_props.pagingEnabled;var other=_objectWithoutProperties(_props,['contentContainerStyle','horizontal','onContentSizeChange','refreshControl','keyboardDismissMode','onScroll','pagingEnabled']);

if(process.env.NODE_ENV!=='production'&&this.props.style){(function(){
var style=_StyleSheet2.default.flatten(_this.props.style);
var childLayoutProps=['alignItems','justifyContent'].filter(function(prop){return style&&style[prop]!==undefined;});
(0,_invariant2.default)(
childLayoutProps.length===0,
'ScrollView child layout ('+JSON.stringify(childLayoutProps)+') '+
'must be applied through the contentContainerStyle prop.');})();

}

var contentSizeChangeProps={};
if(onContentSizeChange){
contentSizeChangeProps={
onLayout:this._handleContentOnLayout};

}

var contentContainer=
_react2.default.createElement(_View2.default,_extends({},
contentSizeChangeProps,{
children:this.props.children,
collapsable:false,
ref:this._setInnerViewRef,
style:[
styles.contentContainer,
horizontal&&styles.contentContainerHorizontal,
contentContainerStyle]}));




var props=_extends({},
other,{
style:[
styles.base,
horizontal&&styles.baseHorizontal,
this.props.style],

onTouchStart:this.scrollResponderHandleTouchStart,
onTouchMove:this.scrollResponderHandleTouchMove,
onTouchEnd:this.scrollResponderHandleTouchEnd,
onScrollBeginDrag:this.scrollResponderHandleScrollBeginDrag,
onScrollEndDrag:this.scrollResponderHandleScrollEndDrag,
onMomentumScrollBegin:this.scrollResponderHandleMomentumScrollBegin,
onMomentumScrollEnd:this.scrollResponderHandleMomentumScrollEnd,
onStartShouldSetResponder:this.scrollResponderHandleStartShouldSetResponder,
onStartShouldSetResponderCapture:this.scrollResponderHandleStartShouldSetResponderCapture,
onScrollShouldSetResponder:this.scrollResponderHandleScrollShouldSetResponder,
onScroll:this._handleScroll,
onResponderGrant:this.scrollResponderHandleResponderGrant,
onResponderTerminationRequest:this.scrollResponderHandleTerminationRequest,
onResponderTerminate:this.scrollResponderHandleTerminate,
onResponderRelease:this.scrollResponderHandleResponderRelease,
onResponderReject:this.scrollResponderHandleResponderReject});


var ScrollViewClass=_ScrollViewBase2.default;

(0,_invariant2.default)(
ScrollViewClass!==undefined,
'ScrollViewClass must not be undefined');


if(refreshControl){
return _react2.default.cloneElement(
refreshControl,
{style:props.style},

_react2.default.createElement(ScrollViewClass,_extends({},props,{ref:this._setScrollViewRef,style:props.style}),
contentContainer));



}

return(
_react2.default.createElement(ScrollViewClass,_extends({},props,{ref:this._setScrollViewRef,style:props.style}),
contentContainer));


},

_handleContentOnLayout:function _handleContentOnLayout(e){var _e$nativeEvent$layout=
e.nativeEvent.layout;var width=_e$nativeEvent$layout.width;var height=_e$nativeEvent$layout.height;
this.props.onContentSizeChange(width,height);
},

_handleScroll:function _handleScroll(e){
if(process.env.NODE_ENV!=='production'){
if(this.props.onScroll&&!this.props.scrollEventThrottle){
console.log(
'You specified `onScroll` on a <ScrollView> but not '+
'`scrollEventThrottle`. You will only receive one event. '+
'Using `16` you get all the events but be aware that it may '+
'cause frame drops, use a bigger number if you don\'t need as '+
'much precision.');

}
}

if(this.props.keyboardDismissMode==='on-drag'){
(0,_dismissKeyboard2.default)();
}

this.scrollResponderHandleScroll(e);
},

_setInnerViewRef:function _setInnerViewRef(component){
this._innerViewRef=component;
},

_setScrollViewRef:function _setScrollViewRef(component){
this._scrollViewRef=component;
}});


var styles=_StyleSheet2.default.create({
base:{
flex:1,
overflowX:'hidden',
overflowY:'auto',
WebkitOverflowScrolling:'touch'},

baseHorizontal:{
flexDirection:'row',
overflowX:'auto',
overflowY:'hidden'},

contentContainer:{
transform:[{translateZ:0}]},

contentContainerHorizontal:{
flexDirection:'row'}});



module.exports=ScrollView;