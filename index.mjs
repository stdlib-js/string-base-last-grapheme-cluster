// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-next-grapheme-cluster-break@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/dstructs-circular-buffer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@v0.2.2-esm/index.mjs";function e(e,i){var n,d,m,u;if(0===i||""===e)return"";if(-1===(u=r(e,0)))return e;for(m=t(i),(d=new s(m)).push(0),d.push(u),n=0;n+=1,-1!==(u=r(e,u));)d.push(u);return u=m[(n+1)%i],e.substring(u)}export{e as default};
//# sourceMappingURL=index.mjs.map
