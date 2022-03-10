(()=>{"use strict";var e={939:e=>{e.exports=require("@liquality/crypto")},960:e=>{e.exports=require("@liquality/errors")},522:e=>{e.exports=require("@liquality/types")},685:e=>{e.exports=require("setimmediate")}},r={};function t(i){var n=r[i];if(void 0!==n)return n.exports;var a=r[i]={exports:{}};return e[i](a,a.exports,t),a.exports}var i={};(()=>{var e=i;Object.defineProperty(e,"__esModule",{value:!0}),e.validateExpiration=e.validateSecretAndHash=e.validateSecretHash=e.validateSecret=e.validateValue=e.caseInsensitiveEqual=e.asyncSetImmediate=e.addressToString=e.sleep=void 0,t(685);var r=t(960),n=t(939),a=t(522);function o(e){if("string"!=typeof e)throw new r.InvalidSecretError("Invalid secret hash type");if(Buffer.from(e,"hex").toString("hex")!==e)throw new r.InvalidSecretError("Invalid secret hash. Not Hex.");if(32!==Buffer.byteLength(e,"hex"))throw new r.InvalidSecretError("Invalid secret hash: "+e);if(n.sha256("0000000000000000000000000000000000000000000000000000000000000000")===e)throw new r.InvalidSecretError("Invalid secret hash: "+e+". Secret 0 detected.")}function s(e){if("string"!=typeof e)throw new r.InvalidSecretError("Invalid secret type");if(Buffer.from(e,"hex").toString("hex")!==e)throw new r.InvalidSecretError("Invalid secret. Not Hex.");if(32!==Buffer.from(e,"hex").length)throw new r.InvalidSecretError("Invalid secret size")}e.addressToString=function(e){return"string"==typeof e?e:e.address},e.sleep=function(e){return new Promise((function(r){return setTimeout(r,e)}))},e.asyncSetImmediate=function(){return new Promise((function(e){return setImmediate(e)}))},e.caseInsensitiveEqual=function(e,r){return(e=e&&e.toLowerCase())===(r&&r.toLowerCase())},e.validateValue=function(e){if(!a.BigNumber.isBigNumber(e))throw new Error("Invalid value: "+e);if(e.lte(0))throw new Error("Invalid value: "+e)},e.validateSecretHash=o,e.validateSecret=s,e.validateSecretAndHash=function(e,t){if(s(e),o(t),!Buffer.from(n.sha256(e),"hex").equals(Buffer.from(t,"hex")))throw new r.InvalidSecretError("Invalid secret: Does not match expected secret hash: "+t)},e.validateExpiration=function(e){if(isNaN(e))throw new r.InvalidExpirationError("Invalid expiration. NaN: "+e);if(e<5e8||e>5e12)throw new r.InvalidExpirationError("Invalid expiration. Out of bounds: "+e)}})(),module.exports=i})();
//# sourceMappingURL=index.js.map