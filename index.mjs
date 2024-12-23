// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-next-grapheme-cluster-break@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-circular-buffer@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@v0.2.2-esm/index.mjs";function t(t,i){var n,d,m,u;if(0===i||""===t)return"";if(-1===(u=r(t,0)))return t;for(m=e(i),(d=new s(m)).push(0),d.push(u),n=0;n+=1,-1!==(u=r(t,u));)d.push(u);return u=m[(n+1)%i],t.substring(u)}export{t as default};
//# sourceMappingURL=index.mjs.map
