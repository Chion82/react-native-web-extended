var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _BorderPropTypes=require('../../propTypes/BorderPropTypes');var _BorderPropTypes2=_interopRequireDefault(_BorderPropTypes);
var _ColorPropType=require('../../propTypes/ColorPropType');var _ColorPropType2=_interopRequireDefault(_ColorPropType);
var _LayoutPropTypes=require('../../propTypes/LayoutPropTypes');var _LayoutPropTypes2=_interopRequireDefault(_LayoutPropTypes);
var _react=require('react');
var _ShadowPropTypes=require('../../propTypes/ShadowPropTypes');var _ShadowPropTypes2=_interopRequireDefault(_ShadowPropTypes);
var _TransformPropTypes=require('../../propTypes/TransformPropTypes');var _TransformPropTypes2=_interopRequireDefault(_TransformPropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var

number=_react.PropTypes.number;var oneOf=_react.PropTypes.oneOf;var string=_react.PropTypes.string;
var autoOrHiddenOrVisible=oneOf(['auto','hidden','visible']);
var hiddenOrVisible=oneOf(['hidden','visible']);

module.exports=process.env.NODE_ENV!=='production'?_extends({},_BorderPropTypes2.default,_LayoutPropTypes2.default,_ShadowPropTypes2.default,_TransformPropTypes2.default,{




backfaceVisibility:hiddenOrVisible,
backgroundColor:_ColorPropType2.default,
opacity:number,
overflow:autoOrHiddenOrVisible,
zIndex:number,



backgroundAttachment:string,
backgroundClip:string,
backgroundImage:string,
backgroundPosition:string,
backgroundOrigin:oneOf(['border-box','content-box','padding-box']),
backgroundRepeat:string,
backgroundSize:string,
boxShadow:string,
cursor:string,
outline:string,
overflowX:autoOrHiddenOrVisible,
overflowY:autoOrHiddenOrVisible,
transitionDelay:string,
transitionDuration:string,
transitionProperty:string,
transitionTimingFunction:string,
userSelect:string,
visibility:hiddenOrVisible,
WebkitOverflowScrolling:oneOf(['auto','touch'])}):
{};