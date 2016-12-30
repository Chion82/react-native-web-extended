












'use strict';

function emptyFunction(){}

var BackAndroid={
exitApp:emptyFunction,
addEventListener:function addEventListener(){
return{
remove:emptyFunction};

},
removeEventListener:emptyFunction};


module.exports=BackAndroid;