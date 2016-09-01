var _normalizeValue=require('./normalizeValue');var _normalizeValue2=_interopRequireDefault(_normalizeValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var processTextShadow=function processTextShadow(style){
if(style&&style.textShadowOffset){var _style$textShadowOffs=
style.textShadowOffset;var height=_style$textShadowOffs.height;var width=_style$textShadowOffs.width;
var offsetX=(0,_normalizeValue2.default)(null,height||0);
var offsetY=(0,_normalizeValue2.default)(null,width||0);
var blurRadius=(0,_normalizeValue2.default)(null,style.textShadowRadius||0);
var color=style.textShadowColor||'currentcolor';

style.textShadow=offsetX+' '+offsetY+' '+blurRadius+' '+color;
style.textShadowColor=null;
style.textShadowOffset=null;
style.textShadowRadius=null;
}
return style;
};

module.exports=processTextShadow;