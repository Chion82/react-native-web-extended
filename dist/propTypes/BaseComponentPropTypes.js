var _react=require('react');var
array=_react.PropTypes.array;var bool=_react.PropTypes.bool;var number=_react.PropTypes.number;var object=_react.PropTypes.object;var oneOf=_react.PropTypes.oneOf;var oneOfType=_react.PropTypes.oneOfType;var string=_react.PropTypes.string;

var BaseComponentPropTypes={
accessibilityLabel:string,
accessibilityLiveRegion:oneOf(['assertive','off','polite']),
accessibilityRole:string,
accessible:bool,
style:oneOfType([array,number,object]),
testID:string};


module.exports=BaseComponentPropTypes;