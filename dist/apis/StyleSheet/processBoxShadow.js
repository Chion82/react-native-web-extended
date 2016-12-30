var _normalizeColor=require('../../modules/normalizeColor');var _normalizeColor2=_interopRequireDefault(_normalizeColor);
var _normalizeValue=require('./normalizeValue');var _normalizeValue2=_interopRequireDefault(_normalizeValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var applyOpacity=function applyOpacity(color,opacity){
var normalizedColor=(0,_normalizeColor2.default)(color);
var colorNumber=normalizedColor===null?0x00000000:normalizedColor;
var r=(colorNumber&0xff000000)>>>24;
var g=(colorNumber&0x00ff0000)>>>16;
var b=(colorNumber&0x0000ff00)>>>8;
var a=(((colorNumber&0x000000ff)>>>0)/255).toFixed(2);
return'rgba('+r+','+g+','+b+','+a*opacity+')';
};


var processBoxShadow=function processBoxShadow(style){
if(style&&style.shadowColor){var _ref=
style.shadowOffset||{};var height=_ref.height;var width=_ref.width;
var opacity=style.shadowOpacity!=null?style.shadowOpacity:1;
var color=applyOpacity(style.shadowColor,opacity);
var blurRadius=(0,_normalizeValue2.default)(null,style.shadowRadius||0);
var offsetX=(0,_normalizeValue2.default)(null,height||0);
var offsetY=(0,_normalizeValue2.default)(null,width||0);
var boxShadow=offsetX+' '+offsetY+' '+blurRadius+' '+color;
style.boxShadow=style.boxShadow?style.boxShadow+', '+boxShadow:boxShadow;
}
delete style.shadowColor;
delete style.shadowOffset;
delete style.shadowOpacity;
delete style.shadowRadius;
return style;
};

module.exports=processBoxShadow;