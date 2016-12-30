var _expandStyle=require('./expandStyle');var _expandStyle2=_interopRequireDefault(_expandStyle);
var _flattenStyle=require('../../modules/flattenStyle');var _flattenStyle2=_interopRequireDefault(_flattenStyle);
var _i18nStyle=require('./i18nStyle');var _i18nStyle2=_interopRequireDefault(_i18nStyle);
var _processBoxShadow=require('./processBoxShadow');var _processBoxShadow2=_interopRequireDefault(_processBoxShadow);
var _processTextShadow=require('./processTextShadow');var _processTextShadow2=_interopRequireDefault(_processTextShadow);
var _processTransform=require('./processTransform');var _processTransform2=_interopRequireDefault(_processTransform);
var _processVendorPrefixes=require('./processVendorPrefixes');var _processVendorPrefixes2=_interopRequireDefault(_processVendorPrefixes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var processors=[_processBoxShadow2.default,_processTextShadow2.default,_processTransform2.default,_processVendorPrefixes2.default];






var applyProcessors=function applyProcessors(style){return processors.reduce(function(style,processor){return processor(style);},style);};

var createReactDOMStyleObject=function createReactDOMStyleObject(reactNativeStyle){return applyProcessors(
(0,_expandStyle2.default)((0,_i18nStyle2.default)((0,_flattenStyle2.default)(reactNativeStyle))));};


module.exports=createReactDOMStyleObject;