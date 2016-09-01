var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();
var _applyNativeMethods=require('../../modules/applyNativeMethods');var _applyNativeMethods2=_interopRequireDefault(_applyNativeMethods);
var _BaseComponentPropTypes=require('../../propTypes/BaseComponentPropTypes');var _BaseComponentPropTypes2=_interopRequireDefault(_BaseComponentPropTypes);
var _createDOMElement=require('../../modules/createDOMElement');var _createDOMElement2=_interopRequireDefault(_createDOMElement);
var _ImageResizeMode=require('./ImageResizeMode');var _ImageResizeMode2=_interopRequireDefault(_ImageResizeMode);
var _ImageStylePropTypes=require('./ImageStylePropTypes');var _ImageStylePropTypes2=_interopRequireDefault(_ImageStylePropTypes);
var _resolveAssetSource=require('./resolveAssetSource');var _resolveAssetSource2=_interopRequireDefault(_resolveAssetSource);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _StyleSheet=require('../../apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);
var _StyleSheetPropType=require('../../propTypes/StyleSheetPropType');var _StyleSheetPropType2=_interopRequireDefault(_StyleSheetPropType);
var _View=require('../View');var _View2=_interopRequireDefault(_View);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/* global window */

var STATUS_ERRORED='ERRORED';
var STATUS_LOADED='LOADED';
var STATUS_LOADING='LOADING';
var STATUS_PENDING='PENDING';
var STATUS_IDLE='IDLE';

var ImageSourcePropType=_react.PropTypes.oneOfType([
_react.PropTypes.shape({
uri:_react.PropTypes.string.isRequired}),

_react.PropTypes.string]);var


Image=function(_Component){_inherits(Image,_Component);























function Image(props,context){_classCallCheck(this,Image);var _this=_possibleConstructorReturn(this,(Image.__proto__||Object.getPrototypeOf(Image)).call(this,
props,context));_this.


































































































_onError=function(e){var
onError=_this.props.onError;
var event={nativeEvent:e};

_this._destroyImageLoader();
_this._updateImageState(STATUS_ERRORED);
_this._onLoadEnd();
if(onError)onError(event);
};_this.

_onLoad=function(e){var
onLoad=_this.props.onLoad;
var event={nativeEvent:e};

_this._destroyImageLoader();
_this._updateImageState(STATUS_LOADED);
if(onLoad)onLoad(event);
_this._onLoadEnd();
};var uri=(0,_resolveAssetSource2.default)(props.source);_this._imageState=uri?STATUS_PENDING:STATUS_IDLE;_this.state={isLoaded:false};return _this;}_createClass(Image,[{key:'componentDidMount',value:function componentDidMount(){if(this._imageState===STATUS_PENDING){this._createImageLoader();}}},{key:'componentDidUpdate',value:function componentDidUpdate(){if(this._imageState===STATUS_PENDING&&!this.image){this._createImageLoader();}}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){var nextUri=(0,_resolveAssetSource2.default)(nextProps.source);if((0,_resolveAssetSource2.default)(this.props.source)!==nextUri){this._updateImageState(nextUri?STATUS_PENDING:STATUS_IDLE);}}},{key:'componentWillUnmount',value:function componentWillUnmount(){this._destroyImageLoader();}},{key:'render',value:function render(){var isLoaded=this.state.isLoaded;var _props=this.props;var accessibilityLabel=_props.accessibilityLabel;var accessible=_props.accessible;var children=_props.children;var defaultSource=_props.defaultSource;var onLayout=_props.onLayout;var source=_props.source;var testID=_props.testID;var displayImage=(0,_resolveAssetSource2.default)(!isLoaded?defaultSource:source);var backgroundImage=displayImage?'url("'+displayImage+'")':null;var style=_StyleSheet2.default.flatten(this.props.style);var resizeMode=this.props.resizeMode||style.resizeMode||_ImageResizeMode2.default.cover;// remove 'resizeMode' style, as it is not supported by View (N.B. styles are frozen in dev)
style=process.env.NODE_ENV!=='production'?_extends({},style):style;delete style.resizeMode;/**
     * Image is a non-stretching View. The image is displayed as a background
     * image to support `resizeMode`. The HTML image is hidden but used to
     * provide the correct responsive image dimensions, and to support the
     * image context menu. Child content is rendered into an element absolutely
     * positioned over the image.
     */return _react2.default.createElement(_View2.default,{accessibilityLabel:accessibilityLabel,accessibilityRole:'img',accessible:accessible,onLayout:onLayout,ref:'root',style:[styles.initial,style,backgroundImage&&{backgroundImage:backgroundImage},resizeModeStyles[resizeMode]],testID:testID},(0,_createDOMElement2.default)('img',{src:displayImage,style:styles.img}),children?_react2.default.createElement(_View2.default,{children:children,pointerEvents:'box-none',style:styles.children}):null);}},{key:'_createImageLoader',value:function _createImageLoader(){var uri=(0,_resolveAssetSource2.default)(this.props.source);this._destroyImageLoader();this.image=new window.Image();this.image.onerror=this._onError;this.image.onload=this._onLoad;this.image.src=uri;this._onLoadStart();}},{key:'_destroyImageLoader',value:function _destroyImageLoader(){if(this.image){this.image.onerror=null;this.image.onload=null;this.image=null;}}},{key:'_onLoadEnd',value:function _onLoadEnd(){var onLoadEnd=this.props.onLoadEnd;if(onLoadEnd)onLoadEnd();}},{key:'_onLoadStart',value:function _onLoadStart(){var
onLoadStart=this.props.onLoadStart;
this._updateImageState(STATUS_LOADING);
if(onLoadStart)onLoadStart();
}},{key:'_updateImageState',value:function _updateImageState(

status){
this._imageState=status;
var isLoaded=this._imageState===STATUS_LOADED;
if(isLoaded!==this.state.isLoaded){
this.setState({isLoaded:isLoaded});
}
}}]);return Image;}(_react.Component);Image.displayName='Image';Image.propTypes=_extends({},_BaseComponentPropTypes2.default,{children:_react.PropTypes.any,defaultSource:ImageSourcePropType,onError:_react.PropTypes.func,onLayout:_react.PropTypes.func,onLoad:_react.PropTypes.func,onLoadEnd:_react.PropTypes.func,onLoadStart:_react.PropTypes.func,resizeMode:_react.PropTypes.oneOf(['center','contain','cover','none','repeat','stretch']),source:ImageSourcePropType,style:(0,_StyleSheetPropType2.default)(_ImageStylePropTypes2.default)});Image.defaultProps={accessible:true,style:{}};Image.resizeMode=_ImageResizeMode2.default;


(0,_applyNativeMethods2.default)(Image);

var styles=_StyleSheet2.default.create({
initial:{
alignSelf:'flex-start',
backgroundColor:'transparent',
backgroundPosition:'center',
backgroundRepeat:'no-repeat',
backgroundSize:'cover'},

img:{
borderWidth:0,
height:'auto',
maxHeight:'100%',
maxWidth:'100%',
opacity:0},

children:{
bottom:0,
left:0,
position:'absolute',
right:0,
top:0}});



var resizeModeStyles=_StyleSheet2.default.create({
center:{
backgroundSize:'auto',
backgroundPosition:'center'},

contain:{
backgroundSize:'contain'},

cover:{
backgroundSize:'cover'},

none:{
backgroundSize:'auto'},

repeat:{
backgroundSize:'auto',
backgroundRepeat:'repeat'},

stretch:{
backgroundSize:'100% 100%'}});



module.exports=Image;