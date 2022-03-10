(()=>{"use strict";var t={600:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{u(r.next(t))}catch(t){i(t)}}function a(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((r=r.apply(t,e||[])).next())}))},s=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},a=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var u=n(993),c=n(157),h=n(491),l=n(960),d=n(522),f=n(517),p=function(t){function e(e){var n=this,r=e.uri,o=e.username,i=e.password,s=e.network,a=e.feeBlockConfirmations,u=void 0===a?1:a,c=e.defaultFeePerByte,h=void 0===c?3:c;return(n=t.call(this,r,o,i)||this)._network=s,n._feeBlockConfirmations=u,n._defaultFeePerByte=h,n._usedAddressCache={},n}return o(e,t),e.prototype.decodeRawTransaction=function(t){return i(this,void 0,void 0,(function(){return s(this,(function(e){return[2,this.jsonrpc("decoderawtransaction",t)]}))}))},e.prototype.getFeePerByte=function(t){return void 0===t&&(t=this._feeBlockConfirmations),i(this,void 0,void 0,(function(){var e;return s(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.jsonrpc("estimatefee",t)];case 1:if((e=n.sent())&&e>0)return e<5e-4?[2,25]:[2,new d.BigNumber(e).times(1e5).toNumber()];throw new Error("Invalid estimated fee");case 2:return n.sent(),[2,this._defaultFeePerByte];case 3:return[2]}}))}))},e.prototype.getMinRelayFee=function(){return i(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,this.jsonrpc("getnetworkinfo")];case 1:return[2,1e8*t.sent().relayfee/1e3]}}))}))},e.prototype.getBalance=function(t){return i(this,void 0,void 0,(function(){var e,n;return s(this,(function(r){switch(r.label){case 0:return e=t.map(c.addressToString),[4,this.getUnspentTransactions(e)];case 1:return n=r.sent(),[2,f.flatten(n).reduce((function(t,e){return t.plus(e.value)}),new d.BigNumber(0))]}}))}))},e.prototype.getUnspentTransactions=function(t){return i(this,void 0,void 0,(function(){var e,n;return s(this,(function(r){switch(r.label){case 0:return e=t.map(c.addressToString),[4,this.jsonrpc("getaddressutxos",{addresses:e,chainInfo:!0})];case 1:return[2,(n=r.sent()).utxos.map((function(t){return{txid:t.txid,vout:t.outputIndex,address:t.address,scriptPubKey:t.script,amount:new d.BigNumber(t.satoshis).dividedBy(1e8).toNumber(),value:t.satoshis,confirmations:n.height-t.height}}))]}}))}))},e.prototype.getAddressDeltas=function(t){return i(this,void 0,void 0,(function(){var e,n,r,o,i,a,u,h,l;return s(this,(function(s){switch(s.label){case 0:return e=t.map(c.addressToString),[4,this.jsonrpc("getaddressdeltas",{addresses:e})];case 1:for(n=s.sent(),r={},o=0,i=e;o<i.length;o++)a=i[o],r[a]=[];for(u=0,h=n;u<h.length;u++)l=h[u],r[l.address]?r[l.address].push(l):r[l.address]=[l];return[2,r]}}))}))},e.prototype.getReceivedByAddress=function(t){return i(this,void 0,void 0,(function(){return s(this,(function(e){return[2,this.jsonrpc("getreceivedbyaddress",t)]}))}))},e.prototype.importAddresses=function(t){return i(this,void 0,void 0,(function(){var e;return s(this,(function(n){return e=t.map((function(t){return{scriptPubKey:{address:t},timestamp:0}})),[2,this.jsonrpc("importmulti",e)]}))}))},e.prototype.getTransactionHex=function(t){return i(this,void 0,void 0,(function(){return s(this,(function(e){return[2,this.jsonrpc("getrawtransaction",t)]}))}))},e.prototype.generateBlock=function(t){return i(this,void 0,void 0,(function(){var e,n,r=this;return s(this,(function(o){return e=-1,n=0,[2,new Promise((function(o,a){var u=setInterval((function(){return i(r,void 0,void 0,(function(){var r,i;return s(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,this.jsonrpc("getinfo")];case 1:return r=s.sent().longestchain,-1===e?e=r:r>e&&(n+=r-e,e=r),n>=t&&(clearInterval(u),o(null)),[3,3];case 2:return i=s.sent(),clearInterval(u),a(i),[3,3];case 3:return[2]}}))}))}),1e3)}))]}))}))},e.prototype.getBlockByHash=function(t,e){return void 0===e&&(e=!1),i(this,void 0,void 0,(function(){var n,r,o,i,u,c,h,f,p,v,y,m,w,g=this;return s(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,this.jsonrpc("getblock",t)];case 1:return n=s.sent(),[3,3];case 2:if("NodeError"===(r=s.sent()).name&&r.message.includes("Block not found"))throw r.name,r.message,o=a(r,["name","message"]),new l.BlockNotFoundError("Block not found: "+t,o);throw r;case 3:return i=n.hash,u=n.height,c=n.time,h=n.difficulty,f=n.size,p=n.previousblockhash,v=n.nonce,y=n.tx,m=y,e?(w=y.map((function(t){return g.getTransactionByHash(t)})),[4,Promise.all(w)]):[3,5];case 4:m=s.sent(),s.label=5;case 5:return[2,{hash:i,number:u,timestamp:c,difficulty:parseFloat(new d.BigNumber(h).toFixed()),size:f,parentHash:p,nonce:v,transactions:m}]}}))}))},e.prototype.getBlockByNumber=function(t,e){return void 0===e&&(e=!1),i(this,void 0,void 0,(function(){var n,r,o;return s(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,this.jsonrpc("getblockhash",t)];case 1:return n=i.sent(),[3,3];case 2:if("NodeError"===(r=i.sent()).name&&r.message.includes("Block height out of range"))throw r.name,r.message,o=a(r,["name","message"]),new l.BlockNotFoundError("Block not found: "+t,o);throw r;case 3:return[2,this.getBlockByHash(n,e)]}}))}))},e.prototype.getBlockHeight=function(){return i(this,void 0,void 0,(function(){return s(this,(function(t){return[2,this.jsonrpc("getblockcount")]}))}))},e.prototype.getTransactionByHash=function(t){return i(this,void 0,void 0,(function(){var e,n;return s(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,this.getParsedTransactionByHash(t,!0)];case 1:return[2,r.sent()];case 2:if("NodeError"===(e=r.sent()).name&&e.message.includes("No such mempool transaction"))throw e.name,e.message,n=a(e,["name","message"]),new l.TxNotFoundError("Transaction not found: "+t,n);throw e;case 3:return[2]}}))}))},e.prototype.getTransactionFee=function(t){return i(this,void 0,void 0,(function(){var e,n,r,o,i,a=this;return s(this,(function(s){switch(s.label){case 0:return t.vin.find((function(t){return t.coinbase}))?[2]:(e=t.vin.map((function(t){return{txid:t.txid,vout:t.vout}})),[4,Promise.all(e.map((function(t){return a.jsonrpc("getrawtransaction",t.txid,1)})))]);case 1:return n=s.sent(),r=n.map((function(t,n){var r=e[n].vout;return 1e8*t.vout[r].value})),o=r.reduce((function(t,e){return t.plus(new d.BigNumber(e))}),new d.BigNumber(0)),i=t.vout.reduce((function(t,e){return t.plus(new d.BigNumber(e.value).times(new d.BigNumber(1e8)))}),new d.BigNumber(0)),[2,o.minus(i).toNumber()]}}))}))},e.prototype.getParsedTransactionByHash=function(t,e){return void 0===e&&(e=!1),i(this,void 0,void 0,(function(){var n,r,o,i,a;return s(this,(function(s){switch(s.label){case 0:return[4,this.jsonrpc("getrawtransaction",t,1)];case 1:return n=s.sent(),r=h.normalizeTransactionObject,o=[n],e?[4,this.getTransactionFee(n)]:[3,3];case 2:return i=s.sent(),[3,4];case 3:i=void 0,s.label=4;case 4:return o=o.concat([i]),n.confirmations>0?[4,this.getBlockByHash(n.blockhash)]:[3,6];case 5:return a=s.sent(),[3,7];case 6:a=void 0,s.label=7;case 7:return[2,r.apply(void 0,o.concat([a]))]}}))}))},e.prototype.getRawTransactionByHash=function(t){return i(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,this.jsonrpc("getrawtransaction",t,0)];case 1:return[2,e.sent()]}}))}))},e.prototype.sendRawTransaction=function(t){return i(this,void 0,void 0,(function(){return s(this,(function(e){return[2,this.jsonrpc("sendrawtransaction",t)]}))}))},e.prototype.sendBatchTransaction=function(t){return i(this,void 0,void 0,(function(){var e,n,r,o,i,a,u,l;return s(this,(function(s){switch(s.label){case 0:for(e={},n=0,r=t;n<r.length;n++)o=r[n],e[c.addressToString(o.to)]=new d.BigNumber(o.value).dividedBy(1e8).toNumber();return[4,this.createRawTransaction([],e)];case 1:return i=s.sent(),[4,this.fundRawTransaction(i)];case 2:return a=s.sent(),[4,this.signRawTransaction(a.hex)];case 3:return u=s.sent(),l=new d.BigNumber(a.fee).times(1e8).toNumber(),[4,this.sendRawTransaction(u.hex)];case 4:return s.sent(),[2,h.normalizeTransactionObject(h.decodeRawTransaction(u.hex,this._network),l)]}}))}))},e.prototype.signRawTransaction=function(t){return i(this,void 0,void 0,(function(){return s(this,(function(e){return[2,this.jsonrpc("signrawtransaction",t)]}))}))},e.prototype.createRawTransaction=function(t,e){return i(this,void 0,void 0,(function(){return s(this,(function(n){return[2,this.jsonrpc("createrawtransaction",t,e)]}))}))},e.prototype.fundRawTransaction=function(t){return i(this,void 0,void 0,(function(){return s(this,(function(e){return[2,this.jsonrpc("fundrawtransaction",t)]}))}))},e}(u.JsonRpcProvider);e.default=p},175:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.VerusRpcProvider=void 0;var o=r(n(600));e.VerusRpcProvider=o.default},960:t=>{t.exports=require("@liquality/errors")},993:t=>{t.exports=require("@liquality/jsonrpc-provider")},522:t=>{t.exports=require("@liquality/types")},157:t=>{t.exports=require("@liquality/utils")},491:t=>{t.exports=require("@liquality/verus-utils")},517:t=>{t.exports=require("lodash")}},e={},n=function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}(175);module.exports=n})();
//# sourceMappingURL=index.js.map