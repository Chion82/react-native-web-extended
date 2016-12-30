var emptyArray=[];


var normalizeTouches=function normalizeTouches(){var touches=arguments.length>0&&arguments[0]!==undefined?arguments[0]:emptyArray;return Array.prototype.slice.call(touches).map(function(touch){
var identifier=touch.identifier>20?touch.identifier%20:touch.identifier;

var rect=touch.target&&touch.target.getBoundingClientRect();
var locationX=touch.pageX-rect.left;
var locationY=touch.pageY-rect.top;

return{
_normalized:true,
clientX:touch.clientX,
clientY:touch.clientY,
force:touch.force,
locationX:locationX,
locationY:locationY,
identifier:identifier,
pageX:touch.pageX,
pageY:touch.pageY,
radiusX:touch.radiusX,
radiusY:touch.radiusY,
rotationAngle:touch.rotationAngle,
screenX:touch.screenX,
screenY:touch.screenY,
target:touch.target,


timestamp:Date.now()};

});};

function normalizeTouchEvent(nativeEvent){
var changedTouches=normalizeTouches(nativeEvent.changedTouches);
var touches=normalizeTouches(nativeEvent.touches);

var event={
_normalized:true,
changedTouches:changedTouches,
pageX:nativeEvent.pageX,
pageY:nativeEvent.pageY,
preventDefault:nativeEvent.preventDefault.bind(nativeEvent),
stopImmediatePropagation:nativeEvent.stopImmediatePropagation.bind(nativeEvent),
stopPropagation:nativeEvent.stopPropagation.bind(nativeEvent),
target:nativeEvent.target,


timestamp:Date.now(),
touches:touches};


if(changedTouches[0]){
event.identifier=changedTouches[0].identifier;
event.pageX=changedTouches[0].pageX;
event.pageY=changedTouches[0].pageY;
event.locationX=changedTouches[0].locationX;
event.locationY=changedTouches[0].locationY;
}

return event;
}

function normalizeMouseEvent(nativeEvent){
var touches=[
{
_normalized:true,
clientX:nativeEvent.clientX,
clientY:nativeEvent.clientY,
force:nativeEvent.force,
locationX:nativeEvent.clientX,
locationY:nativeEvent.clientY,
identifier:0,
pageX:nativeEvent.pageX,
pageY:nativeEvent.pageY,
screenX:nativeEvent.screenX,
screenY:nativeEvent.screenY,
target:nativeEvent.target,
timestamp:Date.now()}];


return{
_normalized:true,
changedTouches:touches,
identifier:touches[0].identifier,
locationX:nativeEvent.offsetX,
locationY:nativeEvent.offsetY,
pageX:nativeEvent.pageX,
pageY:nativeEvent.pageY,
preventDefault:nativeEvent.preventDefault.bind(nativeEvent),
stopImmediatePropagation:nativeEvent.stopImmediatePropagation.bind(nativeEvent),
stopPropagation:nativeEvent.stopPropagation.bind(nativeEvent),
target:nativeEvent.target,
timestamp:touches[0].timestamp,
touches:nativeEvent.type==='mouseup'?emptyArray:touches};

}

function normalizeNativeEvent(nativeEvent){
if(nativeEvent._normalized){return nativeEvent;}
var eventType=nativeEvent.type||'';
var mouse=eventType.indexOf('mouse')>=0;
return mouse?normalizeMouseEvent(nativeEvent):normalizeTouchEvent(nativeEvent);
}

module.exports=normalizeNativeEvent;