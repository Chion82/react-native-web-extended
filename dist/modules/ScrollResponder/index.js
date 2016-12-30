











'use strict';

var Dimensions=require('../../apis/Dimensions');
var findNodeHandle=require('../findNodeHandle');
var Platform=require('../../apis/Platform');
var React=require('react');

var TextInputState=require('../../components/TextInput/TextInputState');
var UIManager=require('../../apis/UIManager');



var invariant=require('fbjs/lib/invariant');
var warning=require('fbjs/lib/warning');

















































































var emptyObject={};

var IS_ANIMATING_TOUCH_START_THRESHOLD_MS=16;










var ScrollResponderMixin={

scrollResponderMixinGetInitialState:function scrollResponderMixinGetInitialState(){
return{
isTouching:false,
lastMomentumScrollBeginTime:0,
lastMomentumScrollEndTime:0,






observedScrollSinceBecomingResponder:false,
becameResponderWhileAnimating:false};

},




scrollResponderHandleScrollShouldSetResponder:function scrollResponderHandleScrollShouldSetResponder(){
return this.state.isTouching;
},


























scrollResponderHandleStartShouldSetResponder:function scrollResponderHandleStartShouldSetResponder(){
return false;
},












scrollResponderHandleStartShouldSetResponderCapture:function scrollResponderHandleStartShouldSetResponderCapture(e){







return this.scrollResponderIsAnimating();
},











scrollResponderHandleResponderReject:function scrollResponderHandleResponderReject(){
warning(false,"ScrollView doesn't take rejection well - scrolls anyway");
},
















scrollResponderHandleTerminationRequest:function scrollResponderHandleTerminationRequest(){
return!this.state.observedScrollSinceBecomingResponder;
},






scrollResponderHandleTouchEnd:function scrollResponderHandleTouchEnd(e){
var nativeEvent=e.nativeEvent;
this.state.isTouching=nativeEvent.touches.length!==0;
this.props.onTouchEnd&&this.props.onTouchEnd(e);
},




scrollResponderHandleResponderRelease:function scrollResponderHandleResponderRelease(e){
this.props.onResponderRelease&&this.props.onResponderRelease(e);



var currentlyFocusedTextInput=TextInputState.currentlyFocusedField();
if(!this.props.keyboardShouldPersistTaps&&
currentlyFocusedTextInput!=null&&
e.target!==currentlyFocusedTextInput&&
!this.state.observedScrollSinceBecomingResponder&&
!this.state.becameResponderWhileAnimating){
this.props.onScrollResponderKeyboardDismissed&&
this.props.onScrollResponderKeyboardDismissed(e);
TextInputState.blurTextInput(currentlyFocusedTextInput);
}
},

scrollResponderHandleScroll:function scrollResponderHandleScroll(e){
this.state.observedScrollSinceBecomingResponder=true;
this.props.onScroll&&this.props.onScroll(e);
},




scrollResponderHandleResponderGrant:function scrollResponderHandleResponderGrant(e){
this.state.observedScrollSinceBecomingResponder=false;
this.props.onResponderGrant&&this.props.onResponderGrant(e);
this.state.becameResponderWhileAnimating=this.scrollResponderIsAnimating();
},








scrollResponderHandleScrollBeginDrag:function scrollResponderHandleScrollBeginDrag(e){
this.props.onScrollBeginDrag&&this.props.onScrollBeginDrag(e);
},




scrollResponderHandleScrollEndDrag:function scrollResponderHandleScrollEndDrag(e){
this.props.onScrollEndDrag&&this.props.onScrollEndDrag(e);
},




scrollResponderHandleMomentumScrollBegin:function scrollResponderHandleMomentumScrollBegin(e){
this.state.lastMomentumScrollBeginTime=Date.now();
this.props.onMomentumScrollBegin&&this.props.onMomentumScrollBegin(e);
},




scrollResponderHandleMomentumScrollEnd:function scrollResponderHandleMomentumScrollEnd(e){
this.state.lastMomentumScrollEndTime=Date.now();
this.props.onMomentumScrollEnd&&this.props.onMomentumScrollEnd(e);
},












scrollResponderHandleTouchStart:function scrollResponderHandleTouchStart(e){
this.state.isTouching=true;
this.props.onTouchStart&&this.props.onTouchStart(e);
},












scrollResponderHandleTouchMove:function scrollResponderHandleTouchMove(e){
this.props.onTouchMove&&this.props.onTouchMove(e);
},






scrollResponderIsAnimating:function scrollResponderIsAnimating(){
var now=Date.now();
var timeSinceLastMomentumScrollEnd=now-this.state.lastMomentumScrollEndTime;
var isAnimating=timeSinceLastMomentumScrollEnd<IS_ANIMATING_TOUCH_START_THRESHOLD_MS||
this.state.lastMomentumScrollEndTime<this.state.lastMomentumScrollBeginTime;
return isAnimating;
},






scrollResponderGetScrollableNode:function scrollResponderGetScrollableNode(){
return this.getScrollableNode?
this.getScrollableNode():
findNodeHandle(this);
},












scrollResponderScrollTo:function scrollResponderScrollTo(
x,
y,
animated)
{
if(typeof x==='number'){
console.warn('`scrollResponderScrollTo(x, y, animated)` is deprecated. Use `scrollResponderScrollTo({x: 5, y: 5, animated: true})` instead.');
}else{var _ref=
x||emptyObject;x=_ref.x;y=_ref.y;animated=_ref.animated;
}
var node=this.scrollResponderGetScrollableNode();
node.scrollLeft=x||0;
node.scrollTop=y||0;
},




scrollResponderScrollWithoutAnimationTo:function scrollResponderScrollWithoutAnimationTo(offsetX,offsetY){
console.warn('`scrollResponderScrollWithoutAnimationTo` is deprecated. Use `scrollResponderScrollTo` instead');
this.scrollResponderScrollTo({x:offsetX,y:offsetY,animated:false});
},







scrollResponderZoomTo:function scrollResponderZoomTo(
rect,
animated)
{
if(Platform.OS!=='ios'){
invariant('zoomToRect is not implemented');
}
},











scrollResponderScrollNativeHandleToKeyboard:function scrollResponderScrollNativeHandleToKeyboard(nodeHandle,additionalOffset,preventNegativeScrollOffset){
this.additionalScrollOffset=additionalOffset||0;
this.preventNegativeScrollOffset=!!preventNegativeScrollOffset;
UIManager.measureLayout(
nodeHandle,
findNodeHandle(this.getInnerViewNode()),
this.scrollResponderTextInputFocusError,
this.scrollResponderInputMeasureAndScrollToKeyboard);

},











scrollResponderInputMeasureAndScrollToKeyboard:function scrollResponderInputMeasureAndScrollToKeyboard(left,top,width,height){
var keyboardScreenY=Dimensions.get('window').height;
if(this.keyboardWillOpenTo){
keyboardScreenY=this.keyboardWillOpenTo.endCoordinates.screenY;
}
var scrollOffsetY=top-keyboardScreenY+height+this.additionalScrollOffset;





if(this.preventNegativeScrollOffset){
scrollOffsetY=Math.max(0,scrollOffsetY);
}
this.scrollResponderScrollTo({x:0,y:scrollOffsetY,animated:true});

this.additionalOffset=0;
this.preventNegativeScrollOffset=false;
},

scrollResponderTextInputFocusError:function scrollResponderTextInputFocusError(e){
console.error('Error measuring text field: ',e);
},







componentWillMount:function componentWillMount(){
this.keyboardWillOpenTo=null;
this.additionalScrollOffset=0;




},





























scrollResponderKeyboardWillShow:function scrollResponderKeyboardWillShow(e){
this.keyboardWillOpenTo=e;
this.props.onKeyboardWillShow&&this.props.onKeyboardWillShow(e);
},

scrollResponderKeyboardWillHide:function scrollResponderKeyboardWillHide(e){
this.keyboardWillOpenTo=null;
this.props.onKeyboardWillHide&&this.props.onKeyboardWillHide(e);
},

scrollResponderKeyboardDidShow:function scrollResponderKeyboardDidShow(e){


if(e){
this.keyboardWillOpenTo=e;
}
this.props.onKeyboardDidShow&&this.props.onKeyboardDidShow(e);
},

scrollResponderKeyboardDidHide:function scrollResponderKeyboardDidHide(e){
this.keyboardWillOpenTo=null;
this.props.onKeyboardDidHide&&this.props.onKeyboardDidHide(e);
}};


var ScrollResponder={
Mixin:ScrollResponderMixin};


module.exports=ScrollResponder;