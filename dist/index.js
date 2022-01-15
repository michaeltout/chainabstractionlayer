(()=>{"use strict";var t={600:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)},s=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{u(r.next(t))}catch(t){i(t)}}function a(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((r=r.apply(t,e||[])).next())}))},a=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},u=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var c=n(993),l=n(157),f=n(491),h=n(960),d=n(522),p=n(517),v=function(t){function e(e){var n=this,r=e.uri,o=e.username,i=e.password,s=e.network,a=e.feeBlockConfirmations,u=void 0===a?1:a,c=e.defaultFeePerByte,l=void 0===c?3:c;return(n=t.call(this,r,o,i)||this)._network=s,n._feeBlockConfirmations=u,n._defaultFeePerByte=l,n._usedAddressCache={},n}return o(e,t),e.prototype.decodeRawTransaction=function(t){return s(this,void 0,void 0,(function(){return a(this,(function(e){return[2,this.jsonrpc("decoderawtransaction",t)]}))}))},e.prototype.getFeePerByte=function(t){return void 0===t&&(t=this._feeBlockConfirmations),s(this,void 0,void 0,(function(){var e;return a(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.jsonrpc("estimatefee",t)];case 1:if((e=n.sent())&&e>0)return[2,new d.BigNumber(e).times(1e5).toNumber()];throw new Error("Invalid estimated fee");case 2:return n.sent(),[2,this._defaultFeePerByte];case 3:return[2]}}))}))},e.prototype.getMinRelayFee=function(){return s(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return[4,this.jsonrpc("getnetworkinfo")];case 1:return[2,1e8*t.sent().relayfee/1e3]}}))}))},e.prototype.getBalance=function(t){return s(this,void 0,void 0,(function(){var e,n;return a(this,(function(r){switch(r.label){case 0:return e=t.map(l.addressToString),[4,this.getUnspentTransactions(e)];case 1:return n=r.sent(),[2,p.flatten(n).reduce((function(t,e){return t.plus(e.value)}),new d.BigNumber(0))]}}))}))},e.prototype.getUnspentTransactions=function(t){return s(this,void 0,void 0,(function(){var e;return a(this,(function(n){switch(n.label){case 0:return e=t.map(l.addressToString),[4,this.jsonrpc("listunspent",0,9999999,e)];case 1:return[2,n.sent().map((function(t){return i(i({},t),{value:new d.BigNumber(t.amount).times(1e8).toNumber()})}))]}}))}))},e.prototype.getAddressTransactionCounts=function(t){return s(this,void 0,void 0,(function(){var e,n;return a(this,(function(r){switch(r.label){case 0:return e=t.map(l.addressToString),[4,this.jsonrpc("listreceivedbyaddress",0,!1,!0)];case 1:return n=r.sent(),[2,e.reduce((function(t,e){var r=n.find((function(t){return t.address===e})),o=r?r.txids.length:0;return t[e]=o,t}),{})]}}))}))},e.prototype.getAddressDeltas=function(t){return s(this,void 0,void 0,(function(){var e,n,r,o,i,s,u,c,f;return a(this,(function(a){switch(a.label){case 0:return e=t.map(l.addressToString),[4,this.jsonrpc("getaddressdeltas",{addresses:e})];case 1:for(n=a.sent(),r={},o=0,i=e;o<i.length;o++)s=i[o],r[s]=[];for(u=0,c=n;u<c.length;u++)f=c[u],r[f.address]?r[f.address].push(f):r[f.address]=[f];return[2,r]}}))}))},e.prototype.getReceivedByAddress=function(t){return s(this,void 0,void 0,(function(){return a(this,(function(e){return[2,this.jsonrpc("getreceivedbyaddress",t)]}))}))},e.prototype.importAddresses=function(t){return s(this,void 0,void 0,(function(){var e;return a(this,(function(n){return e=t.map((function(t){return{scriptPubKey:{address:t},timestamp:0}})),[2,this.jsonrpc("importmulti",e)]}))}))},e.prototype.getTransactionHex=function(t){return s(this,void 0,void 0,(function(){return a(this,(function(e){return[2,this.jsonrpc("getrawtransaction",t)]}))}))},e.prototype.generateBlock=function(t){return s(this,void 0,void 0,(function(){var e,n,r=this;return a(this,(function(o){return e=-1,n=0,[2,new Promise((function(o,i){var u=setInterval((function(){return s(r,void 0,void 0,(function(){var r,s;return a(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,this.jsonrpc("getinfo")];case 1:return r=a.sent().longestchain,-1===e?e=r:r>e&&(n+=r-e,e=r),n>=t&&(clearInterval(u),o(null)),[3,3];case 2:return s=a.sent(),clearInterval(u),i(s),[3,3];case 3:return[2]}}))}))}),1e3)}))]}))}))},e.prototype.getBlockByHash=function(t,e){return void 0===e&&(e=!1),s(this,void 0,void 0,(function(){var n,r,o,i,s,c,l,f,p,v,y,w,m,g=this;return a(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,this.jsonrpc("getblock",t)];case 1:return n=a.sent(),[3,3];case 2:if("NodeError"===(r=a.sent()).name&&r.message.includes("Block not found"))throw r.name,r.message,o=u(r,["name","message"]),new h.BlockNotFoundError("Block not found: "+t,o);throw r;case 3:return i=n.hash,s=n.height,c=n.time,l=n.difficulty,f=n.size,p=n.previousblockhash,v=n.nonce,y=n.tx,w=y,e?(m=y.map((function(t){return g.getTransactionByHash(t)})),[4,Promise.all(m)]):[3,5];case 4:w=a.sent(),a.label=5;case 5:return[2,{hash:i,number:s,timestamp:c,difficulty:parseFloat(new d.BigNumber(l).toFixed()),size:f,parentHash:p,nonce:v,transactions:w}]}}))}))},e.prototype.getBlockByNumber=function(t,e){return void 0===e&&(e=!1),s(this,void 0,void 0,(function(){var n,r,o;return a(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,this.jsonrpc("getblockhash",t)];case 1:return n=i.sent(),[3,3];case 2:if("NodeError"===(r=i.sent()).name&&r.message.includes("Block height out of range"))throw r.name,r.message,o=u(r,["name","message"]),new h.BlockNotFoundError("Block not found: "+t,o);throw r;case 3:return[2,this.getBlockByHash(n,e)]}}))}))},e.prototype.getBlockHeight=function(){return s(this,void 0,void 0,(function(){return a(this,(function(t){return[2,this.jsonrpc("getblockcount")]}))}))},e.prototype.getTransactionByHash=function(t){return s(this,void 0,void 0,(function(){var e,n;return a(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,this.getParsedTransactionByHash(t,!0)];case 1:return[2,r.sent()];case 2:if("NodeError"===(e=r.sent()).name&&e.message.includes("No such mempool transaction"))throw e.name,e.message,n=u(e,["name","message"]),new h.TxNotFoundError("Transaction not found: "+t,n);throw e;case 3:return[2]}}))}))},e.prototype.getTransactionFee=function(t){return s(this,void 0,void 0,(function(){var e,n,r,o,i,s=this;return a(this,(function(a){switch(a.label){case 0:return t.vin.find((function(t){return t.coinbase}))?[2]:(e=t.vin.map((function(t){return{txid:t.txid,vout:t.vout}})),[4,Promise.all(e.map((function(t){return s.jsonrpc("getrawtransaction",t.txid,1)})))]);case 1:return n=a.sent(),r=n.map((function(t,n){var r=e[n].vout;return 1e8*t.vout[r].value})),o=r.reduce((function(t,e){return t.plus(new d.BigNumber(e))}),new d.BigNumber(0)),i=t.vout.reduce((function(t,e){return t.plus(new d.BigNumber(e.value).times(new d.BigNumber(1e8)))}),new d.BigNumber(0)),[2,o.minus(i).toNumber()]}}))}))},e.prototype.getParsedTransactionByHash=function(t,e){return void 0===e&&(e=!1),s(this,void 0,void 0,(function(){var n,r,o,i,s;return a(this,(function(a){switch(a.label){case 0:return[4,this.jsonrpc("getrawtransaction",t,1)];case 1:return n=a.sent(),r=f.normalizeTransactionObject,o=[n],e?[4,this.getTransactionFee(n)]:[3,3];case 2:return i=a.sent(),[3,4];case 3:i=void 0,a.label=4;case 4:return o=o.concat([i]),n.confirmations>0?[4,this.getBlockByHash(n.blockhash)]:[3,6];case 5:return s=a.sent(),[3,7];case 6:s=void 0,a.label=7;case 7:return[2,r.apply(void 0,o.concat([s]))]}}))}))},e.prototype.getRawTransactionByHash=function(t){return s(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return[4,this.jsonrpc("getrawtransaction",t,0)];case 1:return[2,e.sent()]}}))}))},e.prototype.sendRawTransaction=function(t){return s(this,void 0,void 0,(function(){return a(this,(function(e){return[2,this.jsonrpc("sendrawtransaction",t)]}))}))},e.prototype.sendBatchTransaction=function(t){return s(this,void 0,void 0,(function(){var e,n,r,o,i,s,u,c;return a(this,(function(a){switch(a.label){case 0:for(e={},n=0,r=t;n<r.length;n++)o=r[n],e[l.addressToString(o.to)]=new d.BigNumber(o.value).dividedBy(1e8).toNumber();return[4,this.createRawTransaction([],e)];case 1:return i=a.sent(),[4,this.fundRawTransaction(i)];case 2:return s=a.sent(),[4,this.signRawTransaction(s.hex)];case 3:return u=a.sent(),c=new d.BigNumber(s.fee).times(1e8).toNumber(),[4,this.sendRawTransaction(u.hex)];case 4:return a.sent(),[2,f.normalizeTransactionObject(f.decodeRawTransaction(u.hex,this._network),c)]}}))}))},e.prototype.signRawTransaction=function(t){return s(this,void 0,void 0,(function(){return a(this,(function(e){return[2,this.jsonrpc("signrawtransactionwithwallet",t)]}))}))},e.prototype.createRawTransaction=function(t,e){return s(this,void 0,void 0,(function(){return a(this,(function(n){return[2,this.jsonrpc("createrawtransaction",t,e)]}))}))},e.prototype.fundRawTransaction=function(t){return s(this,void 0,void 0,(function(){return a(this,(function(e){return[2,this.jsonrpc("fundrawtransaction",t)]}))}))},e}(c.JsonRpcProvider);e.default=v},175:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.VerusRpcProvider=void 0;var o=r(n(600));e.VerusRpcProvider=o.default},960:t=>{t.exports=require("@liquality/errors")},993:t=>{t.exports=require("@liquality/jsonrpc-provider")},522:t=>{t.exports=require("@liquality/types")},157:t=>{t.exports=require("@liquality/utils")},491:t=>{t.exports=require("@liquality/verus-utils")},517:t=>{t.exports=require("lodash")}},e={},n=function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}(175);module.exports=n})();
//# sourceMappingURL=index.js.map