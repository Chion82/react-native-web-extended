var _ColorPropType=require('./ColorPropType');var _ColorPropType2=_interopRequireDefault(_ColorPropType);
var _react=require('react');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var

number=_react.PropTypes.number;var oneOf=_react.PropTypes.oneOf;var oneOfType=_react.PropTypes.oneOfType;var shape=_react.PropTypes.shape;var string=_react.PropTypes.string;
var numberOrString=oneOfType([number,string]);

var ShadowOffsetPropType=shape({width:number,height:number});
var TextAlignPropType=oneOf(['center','inherit','justify','justify-all','left','right']);
var WritingDirectionPropType=oneOf(['auto','ltr','rtl']);

var TextPropTypes={
// box model
color:_ColorPropType2.default,
fontFamily:string,
fontSize:numberOrString,
fontStyle:string,
fontWeight:string,
letterSpacing:numberOrString,
lineHeight:numberOrString,
textAlign:TextAlignPropType,
textAlignVertical:oneOf(['auto','bottom','center','top']),
textDecorationLine:string,
/* @platform web */
textOverflow:string,
/* @platform web */
textRendering:oneOf(['auto','geometricPrecision','optimizeLegibility','optimizeSpeed']),
textShadowColor:_ColorPropType2.default,
textShadowOffset:ShadowOffsetPropType,
textShadowRadius:number,
/* @platform web */
textTransform:oneOf(['capitalize','lowercase','none','uppercase']),
/* @platform web */
unicodeBidi:oneOf(['normal','bidi-override','embed','isolate','isolate-override','plaintext']),
/* @platform web */
whiteSpace:string,
/* @platform web */
wordWrap:string,
writingDirection:WritingDirectionPropType,
// opt-out of RTL flipping
textAlign$noI18n:TextAlignPropType,
textShadowOffset$noI18n:ShadowOffsetPropType,
writingDirection$noI18n:WritingDirectionPropType};


module.exports=TextPropTypes;