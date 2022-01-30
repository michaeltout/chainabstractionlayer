(()=>{"use strict";var e={175:function(e,t,r){var a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.validateSwapParams=t.normalizeBlock=t.normalizeTransaction=t.validateSecret=t.createInitBuffer=t.createClaimBuffer=t.createRefundBuffer=t.deserialize=t.doesTransactionMatchInitiation=t.validateAddress=t.Template=void 0;var n=r(522),s=r(157),o=r(960),u=r(939),c=r(771),l=i(r(368)),d=r(906);function p(e){var t=s.addressToString(e);if("string"!=typeof t)throw new o.InvalidAddressError("Invalid address: "+t);if(44!==t.length)throw new o.InvalidAddressError("Invalid address. Length should be 44")}function f(e){if(e){var r=u.base58.decode(e),a=void 0;switch(r[0]){case 0:a=d.initSchema;break;case 1:a=d.claimSchema;break;case 2:a=d.refundSchema}return c.deserialize(a,t.Template,r)}}t.Template=d.Template,t.validateAddress=p,t.doesTransactionMatchInitiation=function(e,t){return e.recipientAddress===t.buyer&&e.refundAddress===t.seller&&e.secretHash===t.secret_hash&&new n.BigNumber(e.expiration).eq(t.expiration)&&e.value.eq(t.value)},t.deserialize=f,t.createRefundBuffer=function(){var e=new t.Template({instruction:2});return c.serialize(d.refundSchema,e)},t.createClaimBuffer=function(e){var r=new t.Template({instruction:1,secret:e.toString()});return c.serialize(d.claimSchema,r)},t.createInitBuffer=function(e){var r=e.buyer,a=e.seller,i=e.expiration,n=e.secret_hash,s=e.value,o=new t.Template({instruction:0,buyer:r,seller:a,secret_hash:n,expiration:i,value:s});return c.serialize(d.initSchema,o)},t.validateSecret=function(e,t){return s.validateSecretAndHash(t.secret,e.secretHash),!0},t.normalizeTransaction=function(e,t){var r,i,s,o,u=e.transaction,c=u.message,d=c.accountKeys,p=c.instructions,h=u.signatures[0],m=p[0],v={lamports:0,programId:"",_raw:{}},y=l.default(p,"data");if(y.length&&(o=f(y[0].data),v._raw=a(a({},v._raw),o),o.secret&&(v.secret=o.secret)),m.parsed)switch(v.lamports=m.parsed.info.lamports,m.parsed.type){case"finalize":v.programId=m.parsed.info.account;break;case"createAccount":v._raw.programAccount=m.parsed.info.newAccount}return v.programId||(v.programId=d[d.length-1].pubkey.toString()),"finalized"===(null===(r=null==t?void 0:t.value)||void 0===r?void 0:r.confirmationStatus)?(v.confirmations=31,v.status=(null===(s=null===(i=null==t?void 0:t.value)||void 0===i?void 0:i.status)||void 0===s?void 0:s.Err)?n.TxStatus.Failed:n.TxStatus.Success):v.status=n.TxStatus.Pending,a(a(a({hash:h,value:v.lamports,status:v.status},v.secret&&{secret:v.secret}),v.confirmations&&{confirmations:v.confirmations}),{_raw:a(a({programId:v.programId},v._raw),{value:new n.BigNumber(v.lamports)})})},t.normalizeBlock=function(e){return{hash:e.blockhash,number:e.parentSlot+1,parentHash:e.previousBlockhash,size:e.blockHeight,timestamp:e.blockTime,transactions:[]}},t.validateSwapParams=function(e){s.validateValue(e.value),s.validateSecretHash(e.secretHash),s.validateExpiration(e.expiration),p(e.recipientAddress),p(e.refundAddress)}},906:function(e,t){var r,a=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function a(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)});Object.defineProperty(t,"__esModule",{value:!0}),t.refundSchema=t.claimSchema=t.initSchema=t.Template=void 0;var i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t}((function(e){var t=this;Object.keys(e).forEach((function(r){t[r]=e[r]}))}));t.Template=i,t.initSchema=new Map([[i,{kind:"struct",fields:[["instruction","u8"],["buyer","string"],["seller","string"],["secret_hash","string"],["expiration","u64"],["value","u64"]]}]]),t.claimSchema=new Map([[i,{kind:"struct",fields:[["instruction","u8"],["secret","string"]]}]]),t.refundSchema=new Map([[i,{kind:"struct",fields:[["instruction","u8"]]}]])},939:e=>{e.exports=require("@liquality/crypto")},960:e=>{e.exports=require("@liquality/errors")},522:e=>{e.exports=require("@liquality/types")},157:e=>{e.exports=require("@liquality/utils")},771:e=>{e.exports=require("borsh")},368:e=>{e.exports=require("lodash/filter")}},t={},r=function r(a){var i=t[a];if(void 0!==i)return i.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,r),n.exports}(175);module.exports=r})();
//# sourceMappingURL=index.js.map