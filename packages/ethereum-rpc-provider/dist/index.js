(()=>{"use strict";var t={986:function(t,e,r){var n,i=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),o=this&&this.__assign||function(){return o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},o.apply(this,arguments)},s=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function s(t){try{a(n.next(t))}catch(t){o(t)}}function u(t){try{a(n.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,u)}a((n=n.apply(t,e||[])).next())}))},u=this&&this.__generator||function(t,e){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},a=this&&this.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t};Object.defineProperty(e,"__esModule",{value:!0});var c=r(993),h=r(469),l=r(522),p=r(157),f=r(960),d=r(939),v=function(t){function e(e){var r=t.call(this,e.uri,e.username,e.password)||this;return r._usedAddressCache={},r}return i(e,t),e.prototype.rpc=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return s(this,void 0,void 0,(function(){return u(this,(function(r){switch(r.label){case 0:return[4,this.jsonrpc.apply(this,a([t],e))];case 1:return[2,r.sent()]}}))}))},e.prototype.getAddresses=function(){return s(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.rpc("eth_accounts")];case 1:return[2,t.sent().map((function(t){return new l.Address({address:h.remove0x(t)})}))]}}))}))},e.prototype.getUnusedAddress=function(){return s(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.getAddresses()];case 1:return[2,t.sent()[0]]}}))}))},e.prototype.getUsedAddresses=function(){return s(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.getAddresses()];case 1:return[2,[t.sent()[0]]]}}))}))},e.prototype.isWalletAvailable=function(){return s(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.rpc("eth_accounts")];case 1:return[2,t.sent().length>0]}}))}))},e.prototype.sendTransaction=function(t){return s(this,void 0,void 0,(function(){var e,r,n,i,s,a,c;return u(this,(function(u){switch(u.label){case 0:return[4,this.getAddresses()];case 1:return e=u.sent(),r=e[0].address,n={from:r,to:t.to?p.addressToString(t.to):t.to,value:t.value,data:t.data},t.fee&&(n.gasPrice=new l.BigNumber(t.fee)),i=h.buildTransaction(n),[4,this.estimateGas(i)];case 2:return s=u.sent(),i.gas=h.numberToHex(s),[4,this.rpc("eth_sendTransaction",i)];case 3:return a=u.sent(),c=o(o({},i),{input:i.data,hash:a}),[2,h.normalizeTransactionObject(c)]}}))}))},e.prototype.updateTransactionFee=function(t,e){return s(this,void 0,void 0,(function(){var r,n,i,s,a,c,p;return u(this,(function(u){switch(u.label){case 0:return r="string"==typeof t?t:t.hash,[4,this.getTransactionByHash(r)];case 1:return n=u.sent(),i={from:n._raw.from,to:n._raw.to,value:new l.BigNumber(n._raw.value),gasPrice:new l.BigNumber(e),data:n._raw.input,nonce:h.hexToNumber(n._raw.nonce)},s=h.buildTransaction(i),[4,this.getMethod("estimateGas")(s)];case 2:return a=u.sent(),s.gas=h.numberToHex(a),[4,this.rpc("eth_sendTransaction",s)];case 3:return c=u.sent(),p=o(o({},s),{input:s.data,hash:c}),[2,h.normalizeTransactionObject(p)]}}))}))},e.prototype.sendRawTransaction=function(t){return s(this,void 0,void 0,(function(){return u(this,(function(e){return[2,this.rpc("eth_sendRawTransaction",h.ensure0x(t))]}))}))},e.prototype.signMessage=function(t,e){return s(this,void 0,void 0,(function(){var r;return u(this,(function(n){switch(n.label){case 0:return e=h.ensure0x(e),t=h.ensure0x(Buffer.from(t).toString("hex")),[4,this.rpc("eth_sign",e,t)];case 1:return r=n.sent(),[2,h.remove0x(r)]}}))}))},e.prototype.normalizeBlock=function(t){var e={hash:h.remove0x(t.hash),parentHash:h.remove0x(t.parentHash),timestamp:h.hexToNumber(t.timestamp),size:h.hexToNumber(t.size),number:h.hexToNumber(t.number),difficulty:h.hexToNumber(t.difficulty)};return t.nonce&&(e.nonce=h.hexToNumber(t.nonce)),e},e.prototype.parseBlock=function(t,e){return s(this,void 0,void 0,(function(){var r,n;return u(this,(function(i){switch(i.label){case 0:return r=this.normalizeBlock(t),t&&e?[4,this.getBlockHeight()]:[3,2];case 1:return n=i.sent(),r.transactions=t.transactions.map((function(t){return h.normalizeTransactionObject(t,n)})),[3,3];case 2:r.transactions=t.transactions,i.label=3;case 3:return[2,r]}}))}))},e.prototype.getBlockByHash=function(t,e){return void 0===e&&(e=!1),s(this,void 0,void 0,(function(){var r;return u(this,(function(n){switch(n.label){case 0:return[4,this.rpc("eth_getBlockByHash",h.ensure0x(t),e)];case 1:if(!(r=n.sent()))throw new f.BlockNotFoundError("Block not found: "+t);return[2,this.parseBlock(r,e)]}}))}))},e.prototype.getBlockByNumber=function(t,e){return void 0===e&&(e=!1),s(this,void 0,void 0,(function(){var r;return u(this,(function(n){switch(n.label){case 0:return[4,this.rpc("eth_getBlockByNumber",h.numberToHex(t),e)];case 1:if(!(r=n.sent()))throw new f.BlockNotFoundError("Block not found: "+t);return[2,this.parseBlock(r,e)]}}))}))},e.prototype.getBlockHeight=function(){return s(this,void 0,void 0,(function(){var t;return u(this,(function(e){switch(e.label){case 0:return[4,this.rpc("eth_blockNumber")];case 1:return t=e.sent(),[2,h.hexToNumber(t)]}}))}))},e.prototype.getTransactionByHash=function(t){return s(this,void 0,void 0,(function(){var e,r,n,i;return u(this,(function(o){switch(o.label){case 0:return t=h.ensure0x(t),[4,this.rpc("eth_getTransactionByHash",t)];case 1:return e=o.sent(),[4,this.getBlockHeight()];case 2:if(r=o.sent(),!e)throw new f.TxNotFoundError("Transaction not found: "+t);return(n=h.normalizeTransactionObject(e,r)).confirmations>0?[4,this.getTransactionReceipt(t)]:[3,4];case 3:return i=o.sent(),n.status=Number(i.status)?l.TxStatus.Success:l.TxStatus.Failed,[3,5];case 4:n.status=l.TxStatus.Pending,o.label=5;case 5:return[2,n]}}))}))},e.prototype.getTransactionReceipt=function(t){return s(this,void 0,void 0,(function(){return u(this,(function(e){return t=h.ensure0x(t),[2,this.rpc("eth_getTransactionReceipt",t)]}))}))},e.prototype.getTransactionCount=function(t,e){return void 0===e&&(e="latest"),s(this,void 0,void 0,(function(){var r;return u(this,(function(n){switch(n.label){case 0:return t=h.ensure0x(t),[4,this.rpc("eth_getTransactionCount",t,e)];case 1:return r=n.sent(),[2,h.hexToNumber(r)]}}))}))},e.prototype.getGasPrice=function(){return s(this,void 0,void 0,(function(){var t;return u(this,(function(e){switch(e.label){case 0:return[4,this.rpc("eth_gasPrice")];case 1:return t=e.sent(),[2,new l.BigNumber(t).div(1e9)]}}))}))},e.prototype.getBalance=function(t){return s(this,void 0,void 0,(function(){var e,r=this;return u(this,(function(n){switch(n.label){case 0:return e=t.map(p.addressToString).map(h.ensure0x),[4,Promise.all(e.map((function(t){return r.rpc("eth_getBalance",t,"latest")})))];case 1:return[2,n.sent().map((function(t){return new l.BigNumber(t)})).reduce((function(t,e){return t.plus(e)}),new l.BigNumber(0))]}}))}))},e.prototype.estimateGas=function(t){return s(this,void 0,void 0,(function(){var e,r;return u(this,(function(n){switch(n.label){case 0:return[4,this.rpc("eth_estimateGas",t)];case 1:return e=n.sent(),21e3===(r=h.hexToNumber(e))?[2,r]:[2,Math.ceil(1.5*r)]}}))}))},e.prototype.getCode=function(t,e){return s(this,void 0,void 0,(function(){var r;return u(this,(function(n){switch(n.label){case 0:return t=h.ensure0x(String(t)),e="number"==typeof e?h.ensure0x(d.padHexStart(e.toString(16))):e,[4,this.rpc("eth_getCode",t,e)];case 1:return r=n.sent(),[2,h.remove0x(r)]}}))}))},e.prototype.assertContractExists=function(t){return s(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this.getCode(t,"latest")];case 1:if(""===e.sent())throw new f.InvalidDestinationAddressError("Contract does not exist at given address: "+t);return[2]}}))}))},e.prototype.stopMiner=function(){return s(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.rpc("miner_stop")];case 1:return t.sent(),[2]}}))}))},e.prototype.startMiner=function(){return s(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.rpc("miner_start")];case 1:return t.sent(),[2]}}))}))},e.prototype.evmMine=function(){return s(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.rpc("evm_mine")];case 1:return t.sent(),[2]}}))}))},e.prototype.generateBlock=function(t){return s(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:if(t&&t>1)throw new Error("Ethereum generation limited to 1 block at a time.");e.label=1;case 1:return e.trys.push([1,3,,7]),[4,this.evmMine()];case 2:return e.sent(),[3,7];case 3:return e.sent(),[4,this.startMiner()];case 4:return e.sent(),[4,p.sleep(500)];case 5:return e.sent(),[4,this.stopMiner()];case 6:return e.sent(),[3,7];case 7:return[2]}}))}))},e}(c.JsonRpcProvider);e.default=v},175:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.EthereumRpcProvider=void 0;var i=n(r(986));e.EthereumRpcProvider=i.default},939:t=>{t.exports=require("@liquality/crypto")},960:t=>{t.exports=require("@liquality/errors")},469:t=>{t.exports=require("@liquality/ethereum-utils")},993:t=>{t.exports=require("@liquality/jsonrpc-provider")},522:t=>{t.exports=require("@liquality/types")},157:t=>{t.exports=require("@liquality/utils")}},e={},r=function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,r),o.exports}(175);module.exports=r})();
//# sourceMappingURL=index.js.map