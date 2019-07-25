"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard"),_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"SocketService",{enumerable:!0,get:function get(){return _SocketService["default"]}}),Object.defineProperty(exports,"Plugin",{enumerable:!0,get:function get(){return _Plugin["default"]}}),Object.defineProperty(exports,"Blockchains",{enumerable:!0,get:function get(){return _Blockchains.Blockchains}}),Object.defineProperty(exports,"Network",{enumerable:!0,get:function get(){return _Network["default"]}}),Object.defineProperty(exports,"WalletInterface",{enumerable:!0,get:function get(){return _WalletInterface["default"]}}),Object.defineProperty(exports,"WALLET_METHODS",{enumerable:!0,get:function get(){return _WalletInterface.WALLET_METHODS}}),exports.PluginTypes=exports["default"]=exports.EVENTS=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_PluginRepository=_interopRequireDefault(require("./plugins/PluginRepository")),_SocketService=_interopRequireDefault(require("./services/SocketService")),_Plugin=_interopRequireDefault(require("./plugins/Plugin")),PluginTypes=_interopRequireWildcard(require("./plugins/PluginTypes"));exports.PluginTypes=PluginTypes;var origin,_Blockchains=require("./models/Blockchains"),_Network=_interopRequireDefault(require("./models/Network")),_WalletInterface=_interopRequireWildcard(require("./models/WalletInterface")),_Desktop=_interopRequireDefault(require("./wallets/Desktop")),_Extension=_interopRequireDefault(require("./wallets/Extension")),_Token=_interopRequireDefault(require("./models/Token")),EVENTS={Disconnected:"dced",LoggedOut:"logout"};exports.EVENTS=EVENTS;var socketService=_SocketService["default"],socketSetters=[],holderFns={},Index=/*#__PURE__*/function(){function a(){(0,_classCallCheck2["default"])(this,a),this.account_name=null,this.network=null,_PluginRepository["default"].loadPlugin(new _Desktop["default"](this,holderFns)),_PluginRepository["default"].loadPlugin(new _Extension["default"](this,holderFns))}return(0,_createClass2["default"])(a,[{key:"loadPlugin",value:function loadPlugin(a){if(!a.isValid())throw new Error("".concat(a.name," doesn't seem to be a valid CocosJS plugin."));_PluginRepository["default"].loadPlugin(a),a.type===PluginTypes.BLOCKCHAIN_SUPPORT&&(this[a.name]=a.signatureProvider(function noIdFunc(){if(!holderFns.get().account_name)throw new Error("No Identity")},function(){return holderFns.get().account_name}),this[a.name+"Hook"]=a.hookProvider,socketSetters.push(a.setSocketService)),a.type===PluginTypes.WALLET_SUPPORT&&a.init(this,holderFns,socketSetters)}},{key:"connect",value:function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(b,c){var d;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c||(c={}),this.network=c.hasOwnProperty("network")?c.network:null,d=_PluginRepository["default"].wallets(),a.next=5,Promise.race(d.map(function(a){return a.connect(b,c).then(/*#__PURE__*/(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function b(){return _regenerator["default"].wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if("function"!=typeof a.runBeforeInterfacing){b.next=3;break}return b.next=3,a.runBeforeInterfacing();case 3:if(new _WalletInterface["default"](a.name,a.methods(),holderFns.get()),"function"!=typeof a.runAfterInterfacing){b.next=7;break}return b.next=7,a.runAfterInterfacing();case 7:return _WalletInterface["default"].bindBasics(holderFns.get()),b.abrupt("return",!0);case 9:case"end":return b.stop();}},b)})))}).concat(new Promise(function(a){return setTimeout(function(){return a(!1)},c.initTimeout||5e3)})));case 5:return a.abrupt("return",a.sent);case 6:case"end":return a.stop();}},a,this)}));return function connect(){return a.apply(this,arguments)}}()}]),a}(),Holder=/*#__PURE__*/function(){function a(b){(0,_classCallCheck2["default"])(this,a),this.cocos=b}return(0,_createClass2["default"])(a,[{key:"plugins",value:function plugins(){var a=this;if(!this.cocos.isExtension){for(var b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];c.map(function(b){return a.cocos.loadPlugin(b)})}}},{key:"connect",value:function connect(){var a;return(a=this.cocos).connect.apply(a,arguments)}},{key:"catchAll",value:function catchAll(){}}]),a}(),holder=new Proxy(new Holder(new Index()),{get:function get(a,b){return"undefined"==typeof a[b]?a.cocos[b]:a[b]}});holderFns.set=function(a){return holder.cocos=a},holderFns.get=function(){return holder.cocos},"undefined"!=typeof window&&(window.CocosJS=holder),holder.Plugin=_Plugin["default"],holder.PluginTypes=PluginTypes,holder.Blockchains=_Blockchains.Blockchains,holder.Network=_Network["default"],holder.Token=_Token["default"],holder.SocketService=_SocketService["default"],holder.EVENTS=EVENTS,holder.WalletInterface=_WalletInterface["default"],holder.WALLET_METHODS=_WalletInterface.WALLET_METHODS,window.Cocosjs=holder;var _default=Cocosjs;// export default holder;
exports["default"]=_default;