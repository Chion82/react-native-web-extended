var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _applyNativeMethods=require('../../modules/applyNativeMethods');var _applyNativeMethods2=_interopRequireDefault(_applyNativeMethods);
var _ColorPropType=require('../../propTypes/ColorPropType');var _ColorPropType2=_interopRequireDefault(_ColorPropType);
var _createDOMElement=require('../../modules/createDOMElement');var _createDOMElement2=_interopRequireDefault(_createDOMElement);
var _multiplyStyleLengthValue=require('../../modules/multiplyStyleLengthValue');var _multiplyStyleLengthValue2=_interopRequireDefault(_multiplyStyleLengthValue);
var _StyleSheet=require('../../apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);
var _UIManager=require('../../apis/UIManager');var _UIManager2=_interopRequireDefault(_UIManager);
var _View=require('../View');var _View2=_interopRequireDefault(_View);
var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var emptyObject={};
var thumbDefaultBoxShadow='0px 1px 3px rgba(0,0,0,0.5)';
var thumbFocusedBoxShadow=thumbDefaultBoxShadow+', 0 0 0 10px rgba(0,0,0,0.1)';var

Switch=function(_Component){_inherits(Switch,_Component);function Switch(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Switch);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Switch.__proto__||Object.getPrototypeOf(Switch)).call.apply(_ref,[this].concat(args))),_this),_this.









































































































_handleChange=function(event){var
onValueChange=_this.props.onValueChange;
onValueChange&&onValueChange(event.nativeEvent.target.checked);
},_this.

_handleFocusState=function(event){
var isFocused=event.nativeEvent.type==='focus';
var boxShadow=isFocused?thumbFocusedBoxShadow:thumbDefaultBoxShadow;
_this._thumb.setNativeProps({style:{boxShadow:boxShadow}});
},_this.

_setCheckboxRef=function(component){
_this._checkbox=component;
},_this.

_setThumbRef=function(component){
_this._thumb=component;
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Switch,[{key:'blur',value:function blur(){_UIManager2.default.blur(this._checkbox);}},{key:'focus',value:function focus(){_UIManager2.default.focus(this._checkbox);}},{key:'render',value:function render(){var _props=this.props;var activeThumbColor=_props.activeThumbColor;var activeTrackColor=_props.activeTrackColor;var disabled=_props.disabled;var onValueChange=_props.onValueChange;var style=_props.style;var thumbColor=_props.thumbColor;var trackColor=_props.trackColor;var value=_props.value;var onTintColor=_props.onTintColor;var thumbTintColor=_props.thumbTintColor;var tintColor=_props.tintColor;var other=_objectWithoutProperties(_props,['activeThumbColor','activeTrackColor','disabled','onValueChange','style','thumbColor','trackColor','value','onTintColor','thumbTintColor','tintColor']);var _StyleSheet$flatten=_StyleSheet2.default.flatten(style);var styleHeight=_StyleSheet$flatten.height;var styleWidth=_StyleSheet$flatten.width;var height=styleHeight||20;var minWidth=(0,_multiplyStyleLengthValue2.default)(height,2);var width=styleWidth>minWidth?styleWidth:minWidth;var trackBorderRadius=(0,_multiplyStyleLengthValue2.default)(height,0.5);var trackCurrentColor=value?activeTrackColor:trackColor;var thumbCurrentColor=value?activeThumbColor:thumbColor;var thumbHeight=height;var thumbWidth=thumbHeight;var rootStyle=[styles.root,style,{height:height,width:width},disabled&&styles.cursorDefault];var trackStyle=[styles.track,{backgroundColor:trackCurrentColor,borderRadius:trackBorderRadius},disabled&&styles.disabledTrack];var thumbStyle=[styles.thumb,{backgroundColor:thumbCurrentColor,height:thumbHeight,transform:[{translateX:value?'100%':'0%'}],width:thumbWidth},disabled&&styles.disabledThumb];var nativeControl=(0,_createDOMElement2.default)('input',{checked:value,disabled:disabled,onBlur:this._handleFocusState,onChange:this._handleChange,onFocus:this._handleFocusState,ref:this._setCheckboxRef,style:[styles.nativeControl,styles.cursorInherit],type:'checkbox'});return _react2.default.createElement(_View2.default,_extends({},other,{style:rootStyle}),_react2.default.createElement(_View2.default,{style:trackStyle}),_react2.default.createElement(_View2.default,{ref:this._setThumbRef,style:thumbStyle}),nativeControl);}}]);return Switch;}(_react.Component);Switch.displayName='Switch';Switch.defaultProps={activeThumbColor:'#009688',activeTrackColor:'#A3D3CF',disabled:false,style:emptyObject,thumbColor:'#FAFAFA',trackColor:'#939393',value:false};process.env.NODE_ENV!=="production"?Switch.propTypes=_extends({},_View2.default.propTypes,{activeThumbColor:_ColorPropType2.default,activeTrackColor:_ColorPropType2.default,disabled:_react.PropTypes.bool,onValueChange:_react.PropTypes.func,thumbColor:_ColorPropType2.default,trackColor:_ColorPropType2.default,value:_react.PropTypes.bool}):void 0;


var styles=_StyleSheet2.default.create({
root:{
cursor:'pointer',
userSelect:'none'},

cursorDefault:{
cursor:'default'},

cursorInherit:{
cursor:'inherit'},

track:_extends({},
_StyleSheet2.default.absoluteFillObject,{
height:'70%',
margin:'auto',
transitionDuration:'0.1s',
width:'90%'}),

disabledTrack:{
backgroundColor:'#D5D5D5'},

thumb:{
alignSelf:'flex-start',
borderRadius:'100%',
boxShadow:thumbDefaultBoxShadow,
transitionDuration:'0.1s'},

disabledThumb:{
backgroundColor:'#BDBDBD'},

nativeControl:_extends({},
_StyleSheet2.default.absoluteFillObject,{
height:'100%',
margin:0,
opacity:0,
padding:0,
width:'100%'})});



module.exports=(0,_applyNativeMethods2.default)(Switch);