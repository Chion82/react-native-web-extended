var Linking={
addEventListener:function addEventListener(){},
removeEventListener:function removeEventListener(){},
canOpenUrl:function canOpenUrl(){return true;},
getInitialUrl:function getInitialUrl(){return'';},
openURL:function openURL(url){
iframeOpen(url);
}};












var iframeOpen=function iframeOpen(url){
var iframe=document.createElement('iframe');
iframe.style.display='none';
document.body.appendChild(iframe);

var iframeDoc=iframe.contentDocument||iframe.contentWindow.document;
var script=iframeDoc.createElement('script');
script.text='\n    window.parent = null; window.top = null; window.frameElement = null;\n    var child = window.open("'+

url+'"); child.opener = null;\n  ';

iframeDoc.body.appendChild(script);
document.body.removeChild(iframe);
};

module.exports=Linking;