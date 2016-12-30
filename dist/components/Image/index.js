var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();
var _applyNativeMethods=require('../../modules/applyNativeMethods');var _applyNativeMethods2=_interopRequireDefault(_applyNativeMethods);
var _ImageResizeMode=require('./ImageResizeMode');var _ImageResizeMode2=_interopRequireDefault(_ImageResizeMode);
var _ImageLoader=require('../../modules/ImageLoader');var _ImageLoader2=_interopRequireDefault(_ImageLoader);
var _ImageStylePropTypes=require('./ImageStylePropTypes');var _ImageStylePropTypes2=_interopRequireDefault(_ImageStylePropTypes);
var _requestAnimationFrame=require('fbjs/lib/requestAnimationFrame');var _requestAnimationFrame2=_interopRequireDefault(_requestAnimationFrame);
var _StyleSheet=require('../../apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);
var _StyleSheetPropType=require('../../propTypes/StyleSheetPropType');var _StyleSheetPropType2=_interopRequireDefault(_StyleSheetPropType);
var _View=require('../View');var _View2=_interopRequireDefault(_View);
var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var emptyObject={};

var STATUS_ERRORED='ERRORED';
var STATUS_LOADED='LOADED';
var STATUS_LOADING='LOADING';
var STATUS_PENDING='PENDING';
var STATUS_IDLE='IDLE';

var ImageSourcePropType=_react.PropTypes.oneOfType([
_react.PropTypes.shape({
height:_react.PropTypes.number,
uri:_react.PropTypes.string.isRequired,
width:_react.PropTypes.number}),

_react.PropTypes.string]);


var resolveAssetDimensions=function resolveAssetDimensions(source){
if(typeof source==='object'){var
height=source.height;var width=source.width;
return{height:height,width:width};
}
};

var resolveAssetSource=function resolveAssetSource(source){
return(typeof source==='object'?source.uri:source)||null;
};var

Image=function(_Component){_inherits(Image,_Component);_createClass(Image,null,[{key:'getSize',value:function getSize(




















uri,success,failure){
_ImageLoader2.default.getSize(uri,success,failure);
}},{key:'prefetch',value:function prefetch(

uri){
return _ImageLoader2.default.prefetch(uri);
}}]);



function Image(props,context){_classCallCheck(this,Image);var _this=_possibleConstructorReturn(this,(Image.__proto__||Object.getPrototypeOf(Image)).call(this,
props,context));_this.































































































_onError=function(){var _this$props=
_this.props;var onError=_this$props.onError;var source=_this$props.source;
_this._updateImageState(STATUS_ERRORED);
if(onError){
onError({
nativeEvent:{
error:'Failed to load resource '+resolveAssetSource(source)+' (404)'}});


}
_this._onLoadEnd();
};_this.

_onLoad=function(e){var
onLoad=_this.props.onLoad;
var event={nativeEvent:e};

_this._updateImageState(STATUS_LOADED);
if(onLoad){onLoad(event);}
_this._onLoadEnd();
};_this.state={shouldDisplaySource:false};var uri=resolveAssetSource(props.source);_this._imageState=uri?STATUS_PENDING:STATUS_IDLE;_this._isMounted=false;return _this;}_createClass(Image,[{key:'componentDidMount',value:function componentDidMount(){if(this._imageState===STATUS_PENDING){this._createImageLoader();}this._isMounted=true;}},{key:'componentDidUpdate',value:function componentDidUpdate(){if(this._imageState===STATUS_PENDING){this._createImageLoader();}}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){var nextUri=resolveAssetSource(nextProps.source);if(resolveAssetSource(this.props.source)!==nextUri){this._updateImageState(nextUri?STATUS_PENDING:STATUS_IDLE);}}},{key:'componentWillUnmount',value:function componentWillUnmount(){this._destroyImageLoader();this._isMounted=false;}},{key:'render',value:function render(){var shouldDisplaySource=this.state.shouldDisplaySource;var _props=this.props;var accessibilityLabel=_props.accessibilityLabel;var accessible=_props.accessible;var children=_props.children;var defaultSource=_props.defaultSource;var onLayout=_props.onLayout;var source=_props.source;var testID=_props.testID;var onError=_props.onError;var onLoad=_props.onLoad;var onLoadEnd=_props.onLoadEnd;var onLoadStart=_props.onLoadStart;var resizeMode=_props.resizeMode;var other=_objectWithoutProperties(_props,['accessibilityLabel','accessible','children','defaultSource','onLayout','source','testID','onError','onLoad','onLoadEnd','onLoadStart','resizeMode']);var displayImage=resolveAssetSource(shouldDisplaySource?source:defaultSource);var imageSizeStyle=resolveAssetDimensions(shouldDisplaySource?source:defaultSource);var backgroundImage=displayImage?'url("'+displayImage+'")':null;var originalStyle=_StyleSheet2.default.flatten(this.props.style);var finalResizeMode=resizeMode||originalStyle.resizeMode||_ImageResizeMode2.default.cover;var style=_StyleSheet2.default.flatten([styles.initial,imageSizeStyle,originalStyle,backgroundImage&&{backgroundImage:backgroundImage},resizeModeStyles[finalResizeMode]]);delete style.resizeMode;return _react2.default.createElement(_View2.default,_extends({},other,{accessibilityLabel:accessibilityLabel,accessibilityRole:'img',accessible:accessible,children:children,onLayout:onLayout,style:style,testID:testID}));}},{key:'_createImageLoader',value:function _createImageLoader(){this._destroyImageLoader();var uri=resolveAssetSource(this.props.source);this._imageRequestId=_ImageLoader2.default.load(uri,this._onLoad,this._onError);this._onLoadStart();}},{key:'_destroyImageLoader',value:function _destroyImageLoader(){if(this._imageRequestId){_ImageLoader2.default.abort(this._imageRequestId);this._imageRequestId=null;}}},{key:'_onLoadEnd',value:function _onLoadEnd()

{var
onLoadEnd=this.props.onLoadEnd;
if(onLoadEnd){onLoadEnd();}
}},{key:'_onLoadStart',value:function _onLoadStart()

{var
onLoadStart=this.props.onLoadStart;
this._updateImageState(STATUS_LOADING);
if(onLoadStart){onLoadStart();}
}},{key:'_updateImageState',value:function _updateImageState(

status){var _this2=this;
this._imageState=status;
var shouldDisplaySource=this._imageState===STATUS_LOADED||this._imageState===STATUS_LOADING;

if(shouldDisplaySource!==this.state.shouldDisplaySource){
(0,_requestAnimationFrame2.default)(function(){
if(_this2._isMounted){
_this2.setState({shouldDisplaySource:shouldDisplaySource});
}
});
}
}}]);return Image;}(_react.Component);Image.displayName='Image';Image.defaultProps={style:emptyObject};Image.resizeMode=_ImageResizeMode2.default;process.env.NODE_ENV!=="production"?Image.propTypes=_extends({},_View2.default.propTypes,{children:_react.PropTypes.any,defaultSource:ImageSourcePropType,onError:_react.PropTypes.func,onLayout:_react.PropTypes.func,onLoad:_react.PropTypes.func,onLoadEnd:_react.PropTypes.func,onLoadStart:_react.PropTypes.func,resizeMode:_react.PropTypes.oneOf(Object.keys(_ImageResizeMode2.default)),source:ImageSourcePropType,style:(0,_StyleSheetPropType2.default)(_ImageStylePropTypes2.default)}):void 0;


var styles=_StyleSheet2.default.create({
initial:{
backgroundColor:'transparent',
backgroundPosition:'center',
backgroundRepeat:'no-repeat',
backgroundSize:'cover'}});



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



module.exports=(0,_applyNativeMethods2.default)(Image);