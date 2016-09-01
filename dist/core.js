require('./modules/injectResponderEventPlugin');

var _findNodeHandle=require('./modules/findNodeHandle');var _findNodeHandle2=_interopRequireDefault(_findNodeHandle);
var _reactDom=require('react-dom');var _reactDom2=_interopRequireDefault(_reactDom);
var _server=require('react-dom/server');var _server2=_interopRequireDefault(_server);
var _I18nManager=require('./apis/I18nManager');var _I18nManager2=_interopRequireDefault(_I18nManager);
var _StyleSheet=require('./apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);
var _Image=require('./components/Image');var _Image2=_interopRequireDefault(_Image);
var _Text=require('./components/Text');var _Text2=_interopRequireDefault(_Text);
var _TextInput=require('./components/TextInput');var _TextInput2=_interopRequireDefault(_TextInput);
var _View=require('./components/View');var _View2=_interopRequireDefault(_View);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var ReactNativeCore={
findNodeHandle:_findNodeHandle2.default,
render:_reactDom2.default.render,
renderToStaticMarkup:_server2.default.renderToStaticMarkup,
renderToString:_server2.default.renderToString,
unmountComponentAtNode:_reactDom2.default.unmountComponentAtNode,
I18nManager:_I18nManager2.default,
StyleSheet:_StyleSheet2.default,
Image:_Image2.default,
Text:_Text2.default,
TextInput:_TextInput2.default,
View:_View2.default};


module.exports=ReactNativeCore;