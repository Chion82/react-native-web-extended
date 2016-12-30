var _normalizeValue=require('./normalizeValue');var _normalizeValue2=_interopRequireDefault(_normalizeValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



var mapTransform=function mapTransform(transform){
var type=Object.keys(transform)[0];
var value=(0,_normalizeValue2.default)(type,transform[type]);
return type+'('+value+')';
};


var convertTransformMatrix=function convertTransformMatrix(transformMatrix){
var matrix=transformMatrix.join(',');
return'matrix3d('+matrix+')';
};

var processTransform=function processTransform(style){
if(style){
if(style.transform&&Array.isArray(style.transform)){
style.transform=style.transform.map(mapTransform).join(' ');
}else if(style.transformMatrix){
style.transform=convertTransformMatrix(style.transformMatrix);
style.transformMatrix=null;
}
}
return style;
};

module.exports=processTransform;