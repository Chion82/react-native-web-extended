var _static=require('inline-style-prefixer/static');var _static2=_interopRequireDefault(_static);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var processVendorPrefixes=function processVendorPrefixes(style){
var prefixedStyles=(0,_static2.default)(style);
// React@15 removed undocumented support for fallback values in
// inline-styles. Revert array values to the standard CSS value
for(var prop in prefixedStyles){
var value=prefixedStyles[prop];
if(Array.isArray(value)){
prefixedStyles[prop]=value[value.length-1];
}
}
return prefixedStyles;
};

module.exports=processVendorPrefixes;