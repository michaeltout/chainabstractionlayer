(()=>{"use strict";var e={175:function(e,i,t){var o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var i,t=1,o=arguments.length;t<o;t++)for(var n in i=arguments[t])Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);return e},o.apply(this,arguments)};Object.defineProperty(i,"__esModule",{value:!0}),i.validateSwapParams=i.doesTransactionMatchInitiation=i.normalizeTransaction=i.normalizeBlock=void 0;var n=t(522),r=t(157),a=t(960),l=t(748);i.normalizeBlock=function(e){return{hash:e.block_id.hash,timestamp:s(e.block.header.time),size:Number(e.block.header.height),number:Number(e.block.header.height),parentHash:e.block.last_commit.block_id.hash}},i.normalizeTransaction=function(e,i,t){var r,a,l,s,d,u,v,c,h,m,f,p,x,g,_,y,b,k,S,T,q,w=null===(l=Object.keys((null===(a=null===(r=e.tx.fee)||void 0===r?void 0:r.amount)||void 0===a?void 0:a._coins)||{}))||void 0===l?void 0:l[0],A=null===(c=null===(v=null===(u=null===(d=null===(s=e.tx.fee)||void 0===s?void 0:s.amount)||void 0===d?void 0:d._coins)||void 0===u?void 0:u[w])||void 0===v?void 0:v.amount)||void 0===c?void 0:c.toNumber(),O=(null===(m=null===(h=e.tx.body)||void 0===h?void 0:h.messages)||void 0===m?void 0:m[0])||(null===(x=null===(p=null===(f=e.tx.value)||void 0===f?void 0:f.msg)||void 0===p?void 0:p[0])||void 0===x?void 0:x.value),j=0;Array.isArray(null==O?void 0:O.init_coins)?j=null===(g=O.init_coins.find((function(e){return e.denom===i})))||void 0===g?void 0:g.amount:"object"==typeof(null==O?void 0:O.init_coins)&&(j=null===(_=O.init_coins.get(i))||void 0===_?void 0:_.amount);var I=O.code_id,z=(null==O?void 0:O.init_msg)||(null==O?void 0:O.execute_msg)||{};if(Object.keys(z).length){var P=null==O?void 0:O.init_msg,H=null==O?void 0:O.execute_msg;P&&(z=P),H&&"string"!=typeof z&&(z.method=H,z.method.claim&&(z.secret=z.method.claim.secret))}var M,N=null===(y=e.logs)||void 0===y?void 0:y[0],B=(null===(k=null===(b=null==N?void 0:N.eventsByType)||void 0===b?void 0:b.execute_contract)||void 0===k?void 0:k.contract_address[0])||(null===(T=null===(S=null==N?void 0:N.events)||void 0===S?void 0:S.find((function(e){return"wasm"===e.type})))||void 0===T?void 0:T.attributes.find((function(e){return"contract_address"===e.key})).value)||"";return M=t-e.height<10?n.TxStatus.Pending:(null===(q=e.raw_log)||void 0===q?void 0:q.includes("failed to execute message"))?n.TxStatus.Failed:n.TxStatus.Success,o(o({value:Number(j),hash:e.txhash,confirmations:Math.min(t-e.height,10)},(null==z?void 0:z.secret)&&{secret:z.secret}),{fee:A,status:M,_raw:o(o({},z),{contractAddress:B,codeId:I})})},i.doesTransactionMatchInitiation=function(e,i){return e.recipientAddress===i.buyer&&e.refundAddress===i.seller&&e.secretHash===i.secret_hash&&e.expiration===i.expiration&&e.value.eq(i.value)},i.validateSwapParams=function(e){r.validateValue(e.value),r.validateSecretHash(e.secretHash),r.validateExpiration(e.expiration),d(r.addressToString(e.recipientAddress)),d(r.addressToString(e.refundAddress))};var s=function(e){return l.DateTime.fromISO(e).toSeconds()},d=function(e){if("string"!=typeof e||44!==e.length)throw new a.InvalidAddressError("Invalid address: "+e)}},960:e=>{e.exports=require("@liquality/errors")},522:e=>{e.exports=require("@liquality/types")},157:e=>{e.exports=require("@liquality/utils")},748:e=>{e.exports=require("luxon")}},i={},t=function t(o){var n=i[o];if(void 0!==n)return n.exports;var r=i[o]={exports:{}};return e[o].call(r.exports,r,r.exports,t),r.exports}(175);module.exports=t})();
//# sourceMappingURL=index.js.map