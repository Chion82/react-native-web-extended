var _css=require('./css');var css=_interopRequireWildcard(_css);
var _createReactStyleObject=require('./createReactStyleObject');var _createReactStyleObject2=_interopRequireDefault(_createReactStyleObject);
var _ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var _ExecutionEnvironment2=_interopRequireDefault(_ExecutionEnvironment);
var _flattenStyle=require('../../modules/flattenStyle');var _flattenStyle2=_interopRequireDefault(_flattenStyle);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ReactNativePropRegistry=require('../../modules/ReactNativePropRegistry');var _ReactNativePropRegistry2=_interopRequireDefault(_ReactNativePropRegistry);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}

var styleElement=void 0;
var shouldInsertStyleSheet=_ExecutionEnvironment2.default.canUseDOM;

var STYLE_SHEET_ID='react-native-style__';

var absoluteFillObject={position:'absolute',left:0,right:0,top:0,bottom:0};

var defaultStyleSheet=css.getDefaultStyleSheet();

var insertStyleSheet=function insertStyleSheet(){

styleElement=document.getElementById(STYLE_SHEET_ID);

if(!styleElement){
document.head.insertAdjacentHTML(
'afterbegin','<style id="'+
STYLE_SHEET_ID+'">'+defaultStyleSheet+'</style>');

shouldInsertStyleSheet=false;
}
};

module.exports={




_reset:function _reset(){
if(styleElement){
document.head.removeChild(styleElement);
styleElement=null;
shouldInsertStyleSheet=true;
}
},

absoluteFill:_ReactNativePropRegistry2.default.register(absoluteFillObject),

absoluteFillObject:absoluteFillObject,

create:function create(styles){
if(shouldInsertStyleSheet){
insertStyleSheet();
}

var result={};
for(var key in styles){
if(process.env.NODE_ENV!=='production'){
require('./StyleSheetValidation').validateStyle(key,styles);
}
result[key]=_ReactNativePropRegistry2.default.register(styles[key]);
}
return result;
},

hairlineWidth:1,

flatten:_flattenStyle2.default,


render:function render(){
return _react2.default.createElement('style',{dangerouslySetInnerHTML:{__html:defaultStyleSheet},id:STYLE_SHEET_ID});
},





resolve:function resolve(props){
var className=props.className||'';
var style=(0,_createReactStyleObject2.default)(props.style);
for(var prop in style){
var value=style[prop];
var replacementClassName=css.getStyleAsHelperClassName(prop,value);
if(replacementClassName){
className+=' '+replacementClassName;
style[prop]=null;
}
}

return{className:className,style:style};
}};