











'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};



var NativeMethodsMixin=require('../../modules/NativeMethodsMixin');
var React=require('react');
var StyleSheet=require('../../apis/StyleSheet');
var TimerMixin=require('react-timer-mixin');
var Touchable=require('./Touchable');
var TouchableWithoutFeedback=require('./TouchableWithoutFeedback');
var View=require('../View');

var ensurePositiveDelayProps=require('./ensurePositiveDelayProps');
var flattenStyle=StyleSheet.flatten;



var PRESS_RETENTION_OFFSET={top:20,left:20,right:20,bottom:30};






















var TouchableOpacity=React.createClass({displayName:'TouchableOpacity',
mixins:[TimerMixin,Touchable.Mixin,NativeMethodsMixin],

propTypes:_extends({},
TouchableWithoutFeedback.propTypes,{




activeOpacity:React.PropTypes.number,
focusedOpacity:React.PropTypes.number}),


getDefaultProps:function getDefaultProps(){
return{
accessibilityRole:'button',
activeOpacity:0.2,
focusedOpacity:0.7};

},

getInitialState:function getInitialState(){
return this.touchableGetInitialState();
},

componentDidMount:function componentDidMount(){
ensurePositiveDelayProps(this.props);
},

componentWillReceiveProps:function componentWillReceiveProps(nextProps){
ensurePositiveDelayProps(nextProps);
},

setOpacityTo:function setOpacityTo(value,duration){
this.setNativeProps({
style:{
opacity:value,
transitionDuration:duration}});


},





touchableHandleActivePressIn:function touchableHandleActivePressIn(e){
if(e.dispatchConfig.registrationName==='onResponderGrant'){
this._opacityActive(0);
}else{
this._opacityActive(150);
}
this.props.onPressIn&&this.props.onPressIn(e);
},

touchableHandleActivePressOut:function touchableHandleActivePressOut(e){
this._opacityInactive(250);
this.props.onPressOut&&this.props.onPressOut(e);
},

touchableHandlePress:function touchableHandlePress(e){
this.props.onPress&&this.props.onPress(e);
},

touchableHandleLongPress:function touchableHandleLongPress(e){
this.props.onLongPress&&this.props.onLongPress(e);
},

touchableGetPressRectOffset:function touchableGetPressRectOffset(){
return this.props.pressRetentionOffset||PRESS_RETENTION_OFFSET;
},

touchableGetHitSlop:function touchableGetHitSlop(){
return this.props.hitSlop;
},

touchableGetHighlightDelayMS:function touchableGetHighlightDelayMS(){
return this.props.delayPressIn||0;
},

touchableGetLongPressDelayMS:function touchableGetLongPressDelayMS(){
return this.props.delayLongPress===0?0:
this.props.delayLongPress||500;
},

touchableGetPressOutDelayMS:function touchableGetPressOutDelayMS(){
return this.props.delayPressOut;
},

_opacityActive:function _opacityActive(duration){
this.setOpacityTo(this.props.activeOpacity,duration);
},

_opacityInactive:function _opacityInactive(duration){
var childStyle=flattenStyle(this.props.style)||{};
this.setOpacityTo(
childStyle.opacity===undefined?1:childStyle.opacity,
duration);

},

_opacityFocused:function _opacityFocused(){
this.setOpacityTo(this.props.focusedOpacity);
},

_onKeyEnter:function _onKeyEnter(e,callback){
var ENTER=13;
if(e.keyCode===ENTER){
callback&&callback(e);
}
},

render:function render(){var _this=this;
return(
React.createElement(View,{
accessible:this.props.accessible!==false,
accessibilityLabel:this.props.accessibilityLabel,
accessibilityRole:this.props.accessibilityRole,
disabled:this.props.disabled,
style:[
styles.root,
this.props.disabled&&styles.disabled,
this.props.style],

testID:this.props.testID,
onLayout:this.props.onLayout,
hitSlop:this.props.hitSlop,
onKeyDown:function onKeyDown(e){_this._onKeyEnter(e,_this.touchableHandleActivePressIn);},
onKeyPress:function onKeyPress(e){_this._onKeyEnter(e,_this.touchableHandlePress);},
onKeyUp:function onKeyUp(e){_this._onKeyEnter(e,_this.touchableHandleActivePressOut);},
onStartShouldSetResponder:this.touchableHandleStartShouldSetResponder,
onResponderTerminationRequest:this.touchableHandleResponderTerminationRequest,
onResponderGrant:this.touchableHandleResponderGrant,
onResponderMove:this.touchableHandleResponderMove,
onResponderRelease:this.touchableHandleResponderRelease,
onResponderTerminate:this.touchableHandleResponderTerminate,
tabIndex:this.props.disabled?null:'0'},

this.props.children));


}});


var styles=StyleSheet.create({
root:{
cursor:'pointer',
transitionProperty:'opacity',
transitionDuration:'0.15s',
userSelect:'none'},

disabled:{
cursor:'default'}});



module.exports=TouchableOpacity;