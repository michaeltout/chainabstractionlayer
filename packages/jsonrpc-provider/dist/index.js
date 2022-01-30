(()=>{"use strict";var e={728:function(e,t,r){var n,o=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),s=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{a(n.next(e))}catch(e){s(e)}}function u(e){try{a(n.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}a((n=n.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var r,n,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(126),l=r(36),c=r(960),p=u(r(576)),f=r(517),h=l.Debug("jsonrpc"),d=p.default({storeAsString:!0,strict:!0,useNativeBigInt:!0}),v=d.parse,y=d.stringify,_=function(e){function t(t,r,n){var o={baseURL:t,responseType:"text",transformResponse:void 0,validateStatus:function(){return!0}};return(r||n)&&(o.auth={username:r,password:n}),e.call(this,o)||this}return o(t,e),t.prototype._prepareRequest=function(e,t){var r={id:Date.now(),method:e,jsonrpc:"2.0",params:t};return h("jsonrpc request",r),r},t.prototype._parseResponse=function(e){h("raw jsonrpc response",e);var t="string"!=typeof e?y(e):e,r=v(t);h("parsed jsonrpc response",r);var n=r.error;if(null!=n)throw new c.NodeError(n.message||n);if(!f.has(r,"result"))throw new c.NodeError("Missing `result` on the RPC call result");return r.result},t.prototype.jsonrpc=function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return s(this,void 0,void 0,(function(){var n;return i(this,(function(o){switch(o.label){case 0:return[4,e.prototype.nodePost.call(this,"",this._prepareRequest(t,r))];case 1:return n=o.sent(),[2,this._parseResponse(n)]}}))}))},t}(a.NodeProvider);t.default=_},175:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.JsonRpcProvider=void 0;var o=n(r(728));t.JsonRpcProvider=o.default},36:e=>{e.exports=require("@liquality/debug")},960:e=>{e.exports=require("@liquality/errors")},126:e=>{e.exports=require("@liquality/node-provider")},576:e=>{e.exports=require("json-bigint")},517:e=>{e.exports=require("lodash")}},t={},r=function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(175);module.exports=r})();
//# sourceMappingURL=index.js.map