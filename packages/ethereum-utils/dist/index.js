(()=>{"use strict";var e={175:function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.validateExpiration=r.validateAddress=r.buildTransaction=r.ensureBlockFormat=r.normalizeTransactionObject=r.checksumEncode=r.numberToHex=r.hexToNumber=r.remove0x=r.ensure0x=void 0;var o=t(522),i=t(939),a=t(157),u=t(960),s=n(t(152)),d=1e9;function l(e){return e.startsWith("0x")?e:"0x"+e}function c(e){return"string"==typeof e&&e.startsWith("0x")?e.slice(2):e}function f(e){return parseInt(c(e),16)}function v(e){return l(new o.BigNumber(e).toString(16))}r.ensure0x=l,r.remove0x=c,r.hexToNumber=f,r.numberToHex=v,r.checksumEncode=function(e){return s.default.encode(l(e))},r.ensureBlockFormat=function(e){return void 0===e?"latest":l(i.padHexStart(e.toString(16)))},r.normalizeTransactionObject=function(e,r){if("object"!=typeof e||null===e)throw new Error('Invalid transaction object: "'+e+'"');var t={hash:c(e.hash),value:f(e.value),_raw:e};if(e.blockNumber&&(t.blockNumber=f(e.blockNumber),t.blockHash=c(e.blockHash),r&&(t.confirmations=r-t.blockNumber+1)),e.gas&&e.gasPrice){var n=new o.BigNumber(e.gas),i=new o.BigNumber(e.gasPrice);t.fee=n.times(i).toNumber(),t.feePrice=i.div(d).toNumber()}return t},r.buildTransaction=function(e){if(!e.to&&("string"!=typeof e.data||0===e.data.length))throw new Error("Sending to null with no data. Aborting.");var r={from:l(e.from),value:e.value?v(e.value):"0x0"};return e.gasPrice&&(r.gasPrice=l(e.gasPrice.times(d).dp(0,o.BigNumber.ROUND_CEIL).toString(16))),e.to&&(r.to=l(e.to)),e.data&&(r.data=l(e.data)),null!==e.nonce&&void 0!==e.nonce&&(r.nonce=l(e.nonce.toString(16))),r},r.validateAddress=function(e){var r=c(a.addressToString(e));if("string"!=typeof r)throw new u.InvalidAddressError("Invalid address: "+r);if(Buffer.from(r,"hex").toString("hex")!==r.toLowerCase())throw new u.InvalidAddressError("Invalid address. Not hex: "+r);if(20!==Buffer.byteLength(r,"hex"))throw new u.InvalidAddressError("Invalid address: "+r)},r.validateExpiration=function(e){a.validateExpiration(e);var r=e.toString(16),t=i.padHexStart(r,5);if(Buffer.byteLength(t,"hex")>5)throw new u.InvalidExpirationError("Invalid expiration: "+e)}},939:e=>{e.exports=require("@liquality/crypto")},960:e=>{e.exports=require("@liquality/errors")},522:e=>{e.exports=require("@liquality/types")},157:e=>{e.exports=require("@liquality/utils")},152:e=>{e.exports=require("eip55")}},r={},t=function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}(175);module.exports=t})();
//# sourceMappingURL=index.js.map