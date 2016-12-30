var _findNodeHandle=require('./modules/findNodeHandle');var _findNodeHandle2=_interopRequireDefault(_findNodeHandle);
var _ReactDefaultInjection=require('react-dom/lib/ReactDefaultInjection');var _ReactDefaultInjection2=_interopRequireDefault(_ReactDefaultInjection);
var _ReactMount=require('react-dom/lib/ReactMount');




var _I18nManager=require('./apis/I18nManager');var _I18nManager2=_interopRequireDefault(_I18nManager);
var _Platform=require('./apis/Platform');var _Platform2=_interopRequireDefault(_Platform);
var _StyleSheet=require('./apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);


var _Image=require('./components/Image');var _Image2=_interopRequireDefault(_Image);
var _Text=require('./components/Text');var _Text2=_interopRequireDefault(_Text);
var _TextInput=require('./components/TextInput');var _TextInput2=_interopRequireDefault(_TextInput);
var _Touchable=require('./components/Touchable/Touchable');var _Touchable2=_interopRequireDefault(_Touchable);
var _TouchableHighlight=require('./components/Touchable/TouchableHighlight');var _TouchableHighlight2=_interopRequireDefault(_TouchableHighlight);
var _TouchableOpacity=require('./components/Touchable/TouchableOpacity');var _TouchableOpacity2=_interopRequireDefault(_TouchableOpacity);
var _TouchableWithoutFeedback=require('./components/Touchable/TouchableWithoutFeedback');var _TouchableWithoutFeedback2=_interopRequireDefault(_TouchableWithoutFeedback);
var _View=require('./components/View');var _View2=_interopRequireDefault(_View);


var _createDOMElement=require('./modules/createDOMElement');var _createDOMElement2=_interopRequireDefault(_createDOMElement);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_ReactDefaultInjection2.default.inject();

var ReactNativeCore={
createDOMElement:_createDOMElement2.default,
findNodeHandle:_findNodeHandle2.default,
render:_ReactMount.render,
unmountComponentAtNode:_ReactMount.unmountComponentAtNode,

I18nManager:_I18nManager2.default,
Platform:_Platform2.default,
StyleSheet:_StyleSheet2.default,

Image:_Image2.default,
Text:_Text2.default,
TextInput:_TextInput2.default,
Touchable:_Touchable2.default,
TouchableHighlight:_TouchableHighlight2.default,
TouchableOpacity:_TouchableOpacity2.default,
TouchableWithoutFeedback:_TouchableWithoutFeedback2.default,
View:_View2.default};


module.exports=ReactNativeCore;