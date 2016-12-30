var _I18nManager=require('../I18nManager');var _I18nManager2=_interopRequireDefault(_I18nManager);
var _multiplyStyleLengthValue=require('../../modules/multiplyStyleLengthValue');var _multiplyStyleLengthValue2=_interopRequireDefault(_multiplyStyleLengthValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var emptyObject={};




var PROPERTIES_TO_SWAP={
'borderTopLeftRadius':'borderTopRightRadius',
'borderTopRightRadius':'borderTopLeftRadius',
'borderBottomLeftRadius':'borderBottomRightRadius',
'borderBottomRightRadius':'borderBottomLeftRadius',
'borderLeftColor':'borderRightColor',
'borderLeftStyle':'borderRightStyle',
'borderLeftWidth':'borderRightWidth',
'borderRightColor':'borderLeftColor',
'borderRightWidth':'borderLeftWidth',
'borderRightStyle':'borderLeftStyle',
'left':'right',
'marginLeft':'marginRight',
'marginRight':'marginLeft',
'paddingLeft':'paddingRight',
'paddingRight':'paddingLeft',
'right':'left'};


var PROPERTIES_SWAP_LEFT_RIGHT={
'clear':true,
'float':true,
'textAlign':true};


var PROPERTIES_SWAP_LTR_RTL={
'writingDirection':true};





var additiveInverse=function additiveInverse(value){return(0,_multiplyStyleLengthValue2.default)(value,-1);};




var flipProperty=function flipProperty(prop){
return PROPERTIES_TO_SWAP.hasOwnProperty(prop)?PROPERTIES_TO_SWAP[prop]:prop;
};




var flipTransform=function flipTransform(transform){
var translateX=transform.translateX;
if(translateX!=null){
transform.translateX=additiveInverse(translateX);
}
return transform;
};

var swapLeftRight=function swapLeftRight(value){
return value==='left'?'right':value==='right'?'left':value;
};

var swapLtrRtl=function swapLtrRtl(value){
return value==='ltr'?'rtl':value==='rtl'?'ltr':value;
};

var i18nStyle=function i18nStyle(){var style=arguments.length>0&&arguments[0]!==undefined?arguments[0]:emptyObject;
var newStyle={};
for(var prop in style){
if(!Object.prototype.hasOwnProperty.call(style,prop)){
continue;
}

var indexOfNoFlip=prop.indexOf('$noI18n');

if(_I18nManager2.default.isRTL){
if(PROPERTIES_TO_SWAP[prop]){
var newProp=flipProperty(prop);
newStyle[newProp]=style[prop];
}else if(PROPERTIES_SWAP_LEFT_RIGHT[prop]){
newStyle[prop]=swapLeftRight(style[prop]);
}else if(PROPERTIES_SWAP_LTR_RTL[prop]){
newStyle[prop]=swapLtrRtl(style[prop]);
}else if(prop==='textShadowOffset'){
newStyle[prop]=style[prop];
newStyle[prop].width=additiveInverse(style[prop].width);
}else if(prop==='transform'){
newStyle[prop]=style[prop].map(flipTransform);
}else if(indexOfNoFlip>-1){
var _newProp=prop.substring(0,indexOfNoFlip);
newStyle[_newProp]=style[prop];
}else{
newStyle[prop]=style[prop];
}
}else{
if(indexOfNoFlip>-1){
var _newProp2=prop.substring(0,indexOfNoFlip);
newStyle[_newProp2]=style[prop];
}else{
newStyle[prop]=style[prop];
}
}
}

return newStyle;
};

module.exports=i18nStyle;