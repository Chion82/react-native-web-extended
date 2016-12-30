var _ColorPropType=require('./ColorPropType');var _ColorPropType2=_interopRequireDefault(_ColorPropType);
var _react=require('react');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var

number=_react.PropTypes.number;var oneOfType=_react.PropTypes.oneOfType;var shape=_react.PropTypes.shape;var string=_react.PropTypes.string;
var numberOrString=oneOfType([number,string]);

var ShadowPropTypes={
shadowColor:_ColorPropType2.default,
shadowOffset:shape({
width:numberOrString,
height:numberOrString}),

shadowOpacity:number,
shadowRadius:numberOrString,
shadowSpread:numberOrString};


module.exports=ShadowPropTypes;