






module.exports=process.env.NODE_ENV!=='production'?function StyleSheetPropType(shape){
var createStrictShapeTypeChecker=require('./createStrictShapeTypeChecker');
var flattenStyle=require('../modules/flattenStyle');

var shapePropType=createStrictShapeTypeChecker(shape);
return function(props,propName,componentName,location){
var newProps=props;
if(props[propName]){

newProps={};
newProps[propName]=flattenStyle(props[propName]);
}
return shapePropType(newProps,propName,componentName,location);
};
}:function(){};