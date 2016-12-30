var _createReactStyleObject=require('../StyleSheet/createReactStyleObject');var _createReactStyleObject2=_interopRequireDefault(_createReactStyleObject);
var _CSSPropertyOperations=require('react-dom/lib/CSSPropertyOperations');var _CSSPropertyOperations2=_interopRequireDefault(_CSSPropertyOperations);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var _measureLayout=function _measureLayout(node,relativeToNativeNode,callback){
var relativeNode=relativeToNativeNode||node.parentNode;
var relativeRect=relativeNode.getBoundingClientRect();var _node$getBoundingClie=
node.getBoundingClientRect();var height=_node$getBoundingClie.height;var left=_node$getBoundingClie.left;var top=_node$getBoundingClie.top;var width=_node$getBoundingClie.width;
var x=left-relativeRect.left;
var y=top-relativeRect.top;
callback(x,y,width,height,left,top);
};

var UIManager={
blur:function blur(node){
try{node.blur();}catch(err){}
},

focus:function focus(node){
try{node.focus();}catch(err){}
},

measure:function measure(node,callback){
_measureLayout(node,null,callback);
},

measureInWindow:function measureInWindow(node,callback){var _node$getBoundingClie2=
node.getBoundingClientRect();var height=_node$getBoundingClie2.height;var left=_node$getBoundingClie2.left;var top=_node$getBoundingClie2.top;var width=_node$getBoundingClie2.width;
callback(left,top,width,height);
},

measureLayout:function measureLayout(node,relativeToNativeNode,onFail,onSuccess){
var relativeTo=relativeToNativeNode||node.parentNode;
_measureLayout(node,relativeTo,onSuccess);
},

updateView:function updateView(node,props,component){
for(var prop in props){
if(!Object.prototype.hasOwnProperty.call(props,prop)){
continue;
}

var value=props[prop];
switch(prop){
case'style':

_CSSPropertyOperations2.default.setValueForStyles(
node,
(0,_createReactStyleObject2.default)(value),
component._reactInternalInstance);

break;
case'class':
case'className':{
var nativeProp='class';

var className=node.getAttribute(nativeProp)+' '+value;
node.setAttribute(nativeProp,className);
break;
}
case'text':
case'value':

node.value=value;
break;
default:
node.setAttribute(prop,value);}

}
}};


module.exports=UIManager;