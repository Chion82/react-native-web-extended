





'use strict';

var PooledClass=require('react-dom/lib/PooledClass');

var twoArgumentPooler=PooledClass.twoArgumentPooler;









function Position(left,top){
this.left=left;
this.top=top;
}

Position.prototype.destructor=function(){
this.left=null;
this.top=null;
};

PooledClass.addPoolingTo(Position,twoArgumentPooler);

module.exports=Position;