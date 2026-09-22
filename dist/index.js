"use strict";var v=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var n=v(function(c,u){
var m=require('@stdlib/ndarray-base-numel-dimension/dist'),i=require('@stdlib/ndarray-base-stride/dist'),a=require('@stdlib/ndarray-base-offset/dist'),s=require('@stdlib/ndarray-base-data-buffer/dist'),q=require('@stdlib/stats-strided-smskmax/dist').ndarray;function d(t){var r=t[1],e=t[0];return q(m(e,0),s(e),i(e,0),a(e),s(r),i(r,0),a(r))}u.exports=d
});var o=n();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
