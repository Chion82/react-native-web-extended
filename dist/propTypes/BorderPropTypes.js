var _ColorPropType=require('./ColorPropType');var _ColorPropType2=_interopRequireDefault(_ColorPropType);
var _react=require('react');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var numberOrString=_react.PropTypes.oneOfType([_react.PropTypes.number,_react.PropTypes.string]);
var BorderStylePropType=_react.PropTypes.oneOf(['solid','dotted','dashed']);

var BorderPropTypes=process.env.NODE_ENV!=='production'?{
borderColor:_ColorPropType2.default,
borderTopColor:_ColorPropType2.default,
borderRightColor:_ColorPropType2.default,
borderBottomColor:_ColorPropType2.default,
borderLeftColor:_ColorPropType2.default,
borderRadius:numberOrString,
borderTopLeftRadius:numberOrString,
borderTopRightRadius:numberOrString,
borderBottomLeftRadius:numberOrString,
borderBottomRightRadius:numberOrString,
borderStyle:BorderStylePropType,
borderTopStyle:BorderStylePropType,
borderRightStyle:BorderStylePropType,
borderBottomStyle:BorderStylePropType,
borderLeftStyle:BorderStylePropType,

borderLeftColor$noI18n:_ColorPropType2.default,
borderRightColor$noI18n:_ColorPropType2.default,
borderTopLeftRadius$noI18n:numberOrString,
borderTopRightRadius$noI18n:numberOrString,
borderBottomLeftRadius$noI18n:numberOrString,
borderBottomRightRadius$noI18n:numberOrString,
borderLeftStyle$noI18n:BorderStylePropType,
borderRightStyle$noI18n:BorderStylePropType}:
{};

module.exports=BorderPropTypes;