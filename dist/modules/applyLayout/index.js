






var _emptyFunction=require('fbjs/lib/emptyFunction');var _emptyFunction2=_interopRequireDefault(_emptyFunction);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var emptyObject={};

var applyLayout=function applyLayout(Component){
var componentDidMount=Component.prototype.componentDidMount||_emptyFunction2.default;
var componentDidUpdate=Component.prototype.componentDidUpdate||_emptyFunction2.default;

Component.prototype.componentDidMount=function(){
componentDidMount.call(this);
this._layoutState=emptyObject;
this._handleLayout();
};

Component.prototype.componentDidUpdate=function(){
componentDidUpdate.call(this);
this._handleLayout();
};

Component.prototype._handleLayout=function(){var _this=this;
var layout=this._layoutState;var
onLayout=this.props.onLayout;

if(onLayout){
this.measure(function(x,y,width,height){
if(layout.x!==x||layout.y!==y||layout.width!==width||layout.height!==height){
var nextLayout={x:x,y:y,width:width,height:height};
var nativeEvent={layout:nextLayout};
onLayout({nativeEvent:nativeEvent});
_this._layoutState=nextLayout;
}
});
}
};
return Component;
};

module.exports=applyLayout;