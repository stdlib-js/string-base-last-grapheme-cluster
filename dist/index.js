"use strict";var v=function(u,e){return function(){return e||u((e={exports:{}}).exports,e),e.exports}};var n=v(function(l,f){
var s=require('@stdlib/string-next-grapheme-cluster-break/dist'),c=require('@stdlib/dstructs-circular-buffer/dist'),p=require('@stdlib/array-base-zeros/dist');function h(u,e){var a,i,t,r;if(e===0||u==="")return"";if(r=s(u,0),r===-1)return u;for(t=p(e),i=new c(t),i.push(0),i.push(r),a=0;a+=1,r=s(u,r),r!==-1;)i.push(r);return r=t[(a+1)%e],u.substring(r)}f.exports=h
});var o=n();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
