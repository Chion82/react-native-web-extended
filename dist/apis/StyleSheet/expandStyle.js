










var _normalizeValue=require('./normalizeValue');var _normalizeValue2=_interopRequireDefault(_normalizeValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var emptyObject={};
var styleShortFormProperties={
borderColor:['borderTopColor','borderRightColor','borderBottomColor','borderLeftColor'],
borderRadius:['borderTopLeftRadius','borderTopRightRadius','borderBottomRightRadius','borderBottomLeftRadius'],
borderStyle:['borderTopStyle','borderRightStyle','borderBottomStyle','borderLeftStyle'],
borderWidth:['borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth'],
margin:['marginTop','marginRight','marginBottom','marginLeft'],
marginHorizontal:['marginRight','marginLeft'],
marginVertical:['marginTop','marginBottom'],
overflow:['overflowX','overflowY'],
padding:['paddingTop','paddingRight','paddingBottom','paddingLeft'],
paddingHorizontal:['paddingRight','paddingLeft'],
paddingVertical:['paddingTop','paddingBottom'],
textDecorationLine:['textDecoration'],
writingDirection:['direction']};


var alphaSort=function alphaSort(arr){return arr.sort(function(a,b){
if(a<b){return-1;}
if(a>b){return 1;}
return 0;
});};

var createStyleReducer=function createStyleReducer(originalStyle){
var originalStyleProps=Object.keys(originalStyle);

return function(style,prop){
var value=(0,_normalizeValue2.default)(prop,originalStyle[prop]);
var longFormProperties=styleShortFormProperties[prop];


if(prop==='flex'){
style.flexGrow=value;
style.flexShrink=1;
style.flexBasis='auto';

}else if(prop==='textAlignVertical'){
style.verticalAlign=value==='center'?'middle':value;
}else if(longFormProperties){
longFormProperties.forEach(function(longForm,i){


if(originalStyleProps.indexOf(longForm)===-1){
style[longForm]=value;
}
});
}else{
style[prop]=value;
}
return style;
};
};

var expandStyle=function expandStyle(){var style=arguments.length>0&&arguments[0]!==undefined?arguments[0]:emptyObject;
var sortedStyleProps=alphaSort(Object.keys(style));
var styleReducer=createStyleReducer(style);
return sortedStyleProps.reduce(styleReducer,{});
};

module.exports=expandStyle;