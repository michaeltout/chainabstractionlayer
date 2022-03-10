(()=>{"use strict";var t={845:function(t,e,n){var r,a=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(a,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function o(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,o)}c((r=r.apply(t,e||[])).next())}))},s=this&&this.__generator||function(t,e){var n,r,a,i,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((a=(a=s.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){s.label=i[1];break}if(6===i[0]&&s.label<a[1]){s.label=a[1],a=i;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(i);break}a[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(882),c=n(939),d=n(157),u=n(469),f=n(522),h=n(960),l="0xbd66528a",p="0x590e1ae3",b=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.createSwapScript=function(t){this.validateSwapParams(t);var e=u.remove0x(d.addressToString(t.recipientAddress)),n=u.remove0x(d.addressToString(t.refundAddress)),r=c.padHexStart(t.expiration.toString(16),32),a=["6080604052600080546001600160a01b031990811673",e,"1790915560018054821673",n,"17905560028054821673",u.remove0x(this.getMethod("getContractAddress")()),"1790819055600380549092166001600160a01b03919091161790557f",t.secretHash,"6004553480156100b157600080fd5b50610555806100c16000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063590e1ae31461003b578063bd66528a14610045575b600080fd5b610043610062565b005b6100436004803603602081101561005b57600080fd5b5035610235565b6004361461006f57600080fd5b7f",r,"421161009b57600080fd5b600354604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156100e657600080fd5b505afa1580156100fa573d6000803e3d6000fd5b505050506040513d602081101561011057600080fd5b505190508061011e57600080fd5b600154600354604080516370a0823160e01b815230600482015290516101fe9363a9059cbb60e01b936001600160a01b03918216939116916370a0823191602480820192602092909190829003018186803b15801561017c57600080fd5b505afa158015610190573d6000803e3d6000fd5b505050506040513d60208110156101a657600080fd5b5051604080516001600160a01b0390931660248401526044808401929092528051808403909201825260649092019091526020810180516001600160e01b03166001600160e01b03199093169290921790915261040d565b6040517f5d26862916391bf49478b2f5103b0720a842b45ef145a268f2cd1fb2aed5517890600090a16001546001600160a01b0316ff5b6024361461024257600080fd5b600454600282604051602001808281526020019150506040516020818303038152906040526040518082805190602001908083835b602083106102965780518252601f199092019160209182019101610277565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa1580156102d5573d6000803e3d6000fd5b5050506040513d60208110156102ea57600080fd5b5051146102f657600080fd5b600354604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561034157600080fd5b505afa158015610355573d6000803e3d6000fd5b505050506040513d602081101561036b57600080fd5b505190508061037957600080fd5b600054604080516001600160a01b039092166024830152604480830184905281518084039091018152606490920190526020810180516001600160e01b031663a9059cbb60e01b1790526103cc9061040d565b6040805183815290517f8c1d64e3bd87387709175b9ef4e7a1d7a8364559fc0e2ad9d77953909a0d1eb39181900360200190a16000546001600160a01b0316ff5b600061041882610446565b8051909150156104425780806020019051602081101561043757600080fd5b505161044257600080fd5b5050565b600254604051825160609260009283926001600160a01b0390921691869190819060208401908083835b6020831061048f5780518252601f199092019160209182019101610470565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146104f1576040519150601f19603f3d011682016040523d82523d6000602084013e6104f6565b606091505b5091509150811561050a57915061051a9050565b8051156100365780518082602001fd5b91905056fea2646970667358221220439a725cbd518d89b852af5b7e1c335cc4ba64e029f96f6c702b2e60fb985ba564736f6c63430007060033"].join("").toLowerCase();if(3116!==Buffer.byteLength(a))throw new Error("Invalid swap script. Bytecode length incorrect.");return a},e.prototype.validateSwapParams=function(t){d.validateValue(t.value),u.validateAddress(t.recipientAddress),u.validateAddress(t.refundAddress),d.validateSecretHash(t.secretHash),u.validateExpiration(t.expiration)},e.prototype.initiateSwap=function(t,e){return i(this,void 0,void 0,(function(){var n,r,a;return s(this,(function(i){switch(i.label){case 0:return this.validateSwapParams(t),[4,this.getMethod("getAddresses")()];case 1:return n=i.sent(),[4,this.client.chain.getBalance(n)];case 2:if((r=i.sent()).isLessThan(t.value))throw new h.InsufficientBalanceError(n[0]+" doesn't have enough balance (has: "+r+", want: "+t.value+")");return a=this.createSwapScript(t),[2,this.client.chain.sendTransaction({to:null,value:new f.BigNumber(0),data:a,fee:e})]}}))}))},e.prototype.fundSwap=function(t,e,n){return i(this,void 0,void 0,(function(){var r,a;return s(this,(function(i){switch(i.label){case 0:return this.validateSwapParams(t),[4,this.getMethod("getTransactionByHash")(e)];case 1:if(!(r=i.sent()))throw new h.TxNotFoundError("Transaction not found: "+e);return[4,this.getMethod("getTransactionReceipt")(e)];case 2:if(!(a=i.sent()))throw new h.PendingTxError("Transaction receipt is not available: "+e);if(!a.contractAddress||"0x1"!==a.status)throw new h.TxFailedError("ERC20 swap initiation transaction failed: "+a.transactionHash);if(!this.doesTransactionMatchInitiation(t,r))throw new h.InvalidDestinationAddressError("Contract creation does not match initiation parameters: "+e);return[4,this.getMethod("assertContractExists")(a.contractAddress)];case 3:return i.sent(),[4,this.doesBalanceMatchValue(a.contractAddress,new f.BigNumber(0))];case 4:if(!i.sent())throw new h.InvalidDestinationAddressError("Contract is not empty: "+a.contractAddress);return[2,this.client.chain.sendTransaction({to:a.contractAddress,value:t.value,fee:n})]}}))}))},e.prototype.claimSwap=function(t,e,n,r){return i(this,void 0,void 0,(function(){var a;return s(this,(function(i){switch(i.label){case 0:return this.validateSwapParams(t),d.validateSecret(n),d.validateSecretAndHash(n,t.secretHash),[4,this.verifyInitiateSwapTransaction(t,e)];case 1:return i.sent(),[4,this.getMethod("getTransactionReceipt")(e)];case 2:if(!(a=i.sent()))throw new h.PendingTxError("Transaction receipt is not available: "+e);return[4,this.getMethod("assertContractExists")(a.contractAddress)];case 3:return i.sent(),[2,this.client.chain.sendTransaction({to:a.contractAddress,value:new f.BigNumber(0),data:l+n,fee:r})]}}))}))},e.prototype.refundSwap=function(t,e,n){return i(this,void 0,void 0,(function(){var r;return s(this,(function(a){switch(a.label){case 0:return this.validateSwapParams(t),[4,this.verifyInitiateSwapTransaction(t,e)];case 1:return a.sent(),[4,this.getMethod("getTransactionReceipt")(e)];case 2:if(!(r=a.sent()))throw new h.PendingTxError("Transaction receipt is not available: "+e);return[4,this.getMethod("assertContractExists")(r.contractAddress)];case 3:return a.sent(),[2,this.client.chain.sendTransaction({to:r.contractAddress,value:new f.BigNumber(0),data:p,fee:n})]}}))}))},e.prototype.doesTransactionMatchInitiation=function(t,e){var n=this.createSwapScript(t);return null===e._raw.to&&e._raw.input===u.ensure0x(n)},e.prototype.doesTransactionMatchClaim=function(t,e,n){return d.caseInsensitiveEqual(e._raw.to,n.contractAddress)&&e._raw.input.startsWith(l)},e.prototype.doesTransactionMatchFunding=function(t,e,n){return d.caseInsensitiveEqual(t._raw.to,e)&&t._raw.input===u.ensure0x(n)},e.prototype.doesBalanceMatchValue=function(t,e){return i(this,void 0,void 0,(function(){return s(this,(function(n){switch(n.label){case 0:return[4,this.client.chain.getBalance([t])];case 1:return[2,n.sent().isEqualTo(e)]}}))}))},e.prototype.getSwapSecret=function(t){return i(this,void 0,void 0,(function(){var e;return s(this,(function(n){switch(n.label){case 0:return[4,this.getMethod("getTransactionByHash")(t)];case 1:return e=n.sent(),[2,u.remove0x(e._raw.input).substring(8)]}}))}))},e.prototype.verifyInitiateSwapTransaction=function(t,e){return i(this,void 0,void 0,(function(){var n,r,a,i;return s(this,(function(s){switch(s.label){case 0:return this.validateSwapParams(t),[4,this.getMethod("getTransactionByHash")(e)];case 1:if(!(n=s.sent()))throw new h.TxNotFoundError("Transaction not found: "+e);return[4,this.getMethod("getTransactionReceipt")(e)];case 2:if(!(r=s.sent()))throw new h.PendingTxError("Transaction receipt is not available: "+e);return[4,this.getMethod("assertContractExists")(r.contractAddress)];case 3:return s.sent(),a=this.doesTransactionMatchInitiation(t,n),[4,this.doesBalanceMatchValue(r.contractAddress,t.value)];case 4:return i=s.sent(),[2,a&&r.contractAddress&&"0x1"===r.status&&i]}}))}))},e.prototype.findInitiateSwapTransaction=function(t,e){return i(this,void 0,void 0,(function(){var n,r=this;return s(this,(function(a){switch(a.label){case 0:return this.validateSwapParams(t),[4,this.getMethod("getBlockByNumber")(e,!0)];case 1:if(!(n=a.sent()))throw new h.BlockNotFoundError("Block #"+e+" is not available");return[2,n.transactions.find((function(e){return r.doesTransactionMatchInitiation(t,e)}))]}}))}))},e.prototype.findFundSwapTransaction=function(t,e,n){return i(this,void 0,void 0,(function(){var r,a,i,o,c,d=this;return s(this,(function(s){switch(s.label){case 0:return this.validateSwapParams(t),[4,this.getMethod("getBlockByNumber")(n,!0)];case 1:if(!(r=s.sent()))throw new h.BlockNotFoundError("Block #"+n+" is not available");return[4,this.getMethod("getTransactionReceipt")(e)];case 2:if(!(a=s.sent()))throw new h.PendingTxError("Transaction receipt is not available: "+e);return[4,this.getMethod("getContractAddress")()];case 3:return i=s.sent(),[4,this.getMethod("generateErc20Transfer")(a.contractAddress,t.value)];case 4:if(o=s.sent(),!(c=r.transactions.find((function(t){return d.doesTransactionMatchFunding(t,i,o)}))))throw new h.TxNotFoundError("Funding transaction is not available: "+e);return[2,c]}}))}))},e.prototype.findClaimSwapTransaction=function(t,e,n){return i(this,void 0,void 0,(function(){var r,a,i,o,c,u=this;return s(this,(function(s){switch(s.label){case 0:return this.validateSwapParams(t),[4,this.getMethod("getBlockByNumber")(n,!0)];case 1:if(!(r=s.sent()))throw new h.BlockNotFoundError("Block #"+n+" is not available");return[4,this.getMethod("getTransactionReceipt")(e)];case 2:if(!(a=s.sent()))throw new h.PendingTxError("Transaction receipt is not available: "+e);return(i=r.transactions.find((function(e){return u.doesTransactionMatchClaim(t,e,a)})))?[4,this.getMethod("getTransactionReceipt")(i.hash)]:[2];case 3:if(!(o=s.sent()))throw new h.PendingTxError("Claim transaction receipt is not available: "+i.hash);return"0x1"!==o.status?[3,5]:[4,this.getSwapSecret(i.hash)];case 4:return c=s.sent(),d.validateSecretAndHash(c,t.secretHash),i.secret=c,[2,i];case 5:return[2]}}))}))},e.prototype.findRefundSwapTransaction=function(t,e,n){return i(this,void 0,void 0,(function(){var r,a;return s(this,(function(i){switch(i.label){case 0:return this.validateSwapParams(t),[4,this.getMethod("getBlockByNumber")(n,!0)];case 1:if(!(r=i.sent()))throw new h.BlockNotFoundError("Block #"+n+" is not available");return[4,this.getMethod("getTransactionReceipt")(e)];case 2:if(!(a=i.sent()))throw new h.PendingTxError("Transaction receipt is not available: "+e);return[2,r.transactions.find((function(e){return d.caseInsensitiveEqual(e._raw.to,a.contractAddress)&&e._raw.input===p&&r.timestamp>=t.expiration}))]}}))}))},e.SOL_CLAIM_FUNCTION=l,e.SOL_REFUND_FUNCTION=p,e}(o.Provider);e.default=b},175:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.EthereumErc20SwapProvider=void 0;var a=r(n(845));e.EthereumErc20SwapProvider=a.default},939:t=>{t.exports=require("@liquality/crypto")},960:t=>{t.exports=require("@liquality/errors")},469:t=>{t.exports=require("@liquality/ethereum-utils")},882:t=>{t.exports=require("@liquality/provider")},522:t=>{t.exports=require("@liquality/types")},157:t=>{t.exports=require("@liquality/utils")}},e={},n=function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}(175);module.exports=n})();
//# sourceMappingURL=index.js.map