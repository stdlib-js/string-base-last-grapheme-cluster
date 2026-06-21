"use strict";var v=function(u,r){return function(){try{return r||u((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var n=v(function(l,f){
var s=require('@stdlib/string-next-grapheme-cluster-break/dist'),c=require('@stdlib/dstructs-circular-buffer/dist'),p=require('@stdlib/array-base-zeros/dist');function h(u,r){var i,a,t,e;if(r===0||u==="")return"";if(e=s(u,0),e===-1)return u;for(t=p(r),a=new c(t),a.push(0),a.push(e),i=0;i+=1,e=s(u,e),e!==-1;)a.push(e);return e=t[(i+1)%r],u.substring(e)}f.exports=h
});var o=n();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
