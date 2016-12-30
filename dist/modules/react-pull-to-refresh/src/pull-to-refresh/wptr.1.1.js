Object.defineProperty(exports,"__esModule",{value:true});exports.default=WebPullToRefresh;function WebPullToRefresh(){
'use strict';





var defaults={

contentEl:'content',


ptrEl:'ptr',

scrollEl:document.body,


bodyEl:document.body,


distanceToRefresh:70,


loadingFunction:false,


resistance:2.5};






var options={};





var pan={
enabled:false,
distance:0,
startingPositionY:0};





var bodyClass=defaults.bodyEl.classList;






var init=function init(params){
params=params||{};
options={
contentEl:params.contentEl||document.getElementById(defaults.contentEl),
ptrEl:params.ptrEl||document.getElementById(defaults.ptrEl),
bodyEl:params.bodyEl||defaults.bodyEl,
distanceToRefresh:params.distanceToRefresh||defaults.distanceToRefresh,
loadingFunction:params.loadingFunction||defaults.loadingFunction,
resistance:params.resistance||defaults.resistance,
hammerOptions:params.hammerOptions||{},
scrollEl:params.scrollEl||defaults.scrollEl};


if(!options.contentEl||!options.ptrEl){
return false;
}

bodyClass=options.bodyEl.classList;



var _startingPos=-1;
options.contentEl.addEventListener('touchstart',function(e){
_startingPos=e.touches[0].clientY;
_panStart(e);
});
options.contentEl.addEventListener('touchend',_panEnd);

options.contentEl.addEventListener('touchmove',function(e){
if(e.touches[0].clientY>_startingPos){
e.distance=e.touches[0].clientY-_startingPos;
_panDown(e);
}
if(e.touches[0].clientY<_startingPos){
e.distance=_startingPos-e.touches[0].clientY;
_panUp(e);
}
});


options.ptrEl.style.visibility="hidden";
};






var _panStart=function _panStart(e){
pan.startingPositionY=options.scrollEl.scrollTop;

if(pan.startingPositionY===0){
pan.enabled=true;
options.ptrEl.style.visibility="visible";
}
};






var _panDown=function _panDown(e){
if(!pan.enabled){
return;
}

e.preventDefault();
pan.distance=e.distance/options.resistance;

_setContentPan();
_setBodyClass();
};






var _panUp=function _panUp(e){
if(!pan.enabled||pan.distance===0){
return;
}

e.preventDefault();

if(pan.distance<e.distance/options.resistance){
pan.distance=0;
}else{
pan.distance=e.distance/options.resistance;
}

_setContentPan();
_setBodyClass();
};




var _setContentPan=function _setContentPan(){

options.contentEl.style.transform=options.contentEl.style.webkitTransform='translate3d( 0, '+pan.distance+'px, 0 )';
options.ptrEl.style.transform=options.ptrEl.style.webkitTransform='translate3d( 0, '+(pan.distance-options.ptrEl.offsetHeight)+'px, 0 )';
};




var _setBodyClass=function _setBodyClass(){
if(pan.distance>options.distanceToRefresh){
bodyClass.add('ptr-refresh');
}else{
bodyClass.remove('ptr-refresh');
}
};






var _panEnd=function _panEnd(e){
if(!pan.enabled){
return;
}

e.preventDefault();

options.contentEl.style.transform=options.contentEl.style.webkitTransform='';
options.ptrEl.style.transform=options.ptrEl.style.webkitTransform='';

if(options.bodyEl.classList.contains('ptr-refresh')){
_doLoading();
}else{
_doReset();
}

pan.distance=0;
pan.enabled=false;
};




var _doLoading=function _doLoading(){
bodyClass.add('ptr-loading');


if(!options.loadingFunction){
return _doReset();
}


var loadingPromise=options.loadingFunction();


setTimeout(function(){

loadingPromise.then(_doReset);
},1000);
};




var _doReset=function _doReset(){
bodyClass.remove('ptr-loading');
bodyClass.remove('ptr-refresh');
bodyClass.add('ptr-reset');

var bodyClassRemove=function bodyClassRemove(){
bodyClass.remove('ptr-reset');
options.bodyEl.removeEventListener('transitionend',bodyClassRemove,false);
};

options.bodyEl.addEventListener('transitionend',bodyClassRemove,false);

options.ptrEl.style.visibility="hidden";
};

return{
init:init};


}