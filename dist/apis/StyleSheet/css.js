Object.defineProperty(exports,"__esModule",{value:true});var DISPLAY_FLEX_CLASSNAME='__style_df';
var POINTER_EVENTS_AUTO_CLASSNAME='__style_pea';
var POINTER_EVENTS_BOX_NONE_CLASSNAME='__style_pebn';
var POINTER_EVENTS_BOX_ONLY_CLASSNAME='__style_pebo';
var POINTER_EVENTS_NONE_CLASSNAME='__style_pen';


var CSS_RESET=

'/* React Native */\n'+
'html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}\n'+
'body{margin:0}\n'+
'button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}\n'+
'input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,'+
'input::-webkit-search-cancel-button,input::-webkit-search-decoration,'+
'input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none}';

var CSS_HELPERS=

'.'+DISPLAY_FLEX_CLASSNAME+' {display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex}\n'+('.'+

POINTER_EVENTS_AUTO_CLASSNAME+', .'+POINTER_EVENTS_BOX_ONLY_CLASSNAME+', .'+POINTER_EVENTS_BOX_NONE_CLASSNAME+' * {pointer-events:auto}\n')+('.'+
POINTER_EVENTS_NONE_CLASSNAME+', .'+POINTER_EVENTS_BOX_ONLY_CLASSNAME+' *, .'+POINTER_EVENTS_NONE_CLASSNAME+' {pointer-events:none}');


var styleAsClassName={
display:{
'flex':DISPLAY_FLEX_CLASSNAME},

pointerEvents:{
'auto':POINTER_EVENTS_AUTO_CLASSNAME,
'box-none':POINTER_EVENTS_BOX_NONE_CLASSNAME,
'box-only':POINTER_EVENTS_BOX_ONLY_CLASSNAME,
'none':POINTER_EVENTS_NONE_CLASSNAME}};



var getDefaultStyleSheet=exports.getDefaultStyleSheet=function getDefaultStyleSheet(){return CSS_RESET+'\n'+CSS_HELPERS;};

var getStyleAsHelperClassName=exports.getStyleAsHelperClassName=function getStyleAsHelperClassName(prop,value){
return styleAsClassName[prop]&&styleAsClassName[prop][value];
};