// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,n=Object.prototype,e=n.toString,o=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,a=n.__lookupSetter__;var c=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,c){var l,f,m,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof c||null===c||"[object Array]"===e.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((f="value"in c)&&(u.call(t,r)||a.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=c.value,t.__proto__=l):t[r]=c.value),m="get"in c,p="set"in c,f&&(m||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return m&&o&&o.call(t,r,c.get),p&&i&&i.call(t,r,c.set),t};function l(t,r,n){c(t,r,{configurable:!1,enumerable:!0,writable:!1,value:n})}function f(t,r){return t+r}var m="function"==typeof Math.fround?Math.fround:null;var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;var s="function"==typeof Symbol?Symbol.toStringTag:"";var h=y()?function(t){var r,n,e,o,i;if(null==t)return v.call(t);n=t[s],i=s,r=null!=(o=t)&&b.call(o,i);try{t[s]=void 0}catch(r){return v.call(t)}return e=v.call(t),r?t[s]=n:delete t[s],e}:function(t){return v.call(t)},w="function"==typeof Float32Array;var d=Number.POSITIVE_INFINITY,_="function"==typeof Float32Array?Float32Array:null;var g="function"==typeof Float32Array?Float32Array:void 0;var E=new(function(){var t,r,n;if("function"!=typeof _)return!1;try{r=new _([1,3.14,-3.14,5e40]),n=r,t=(w&&n instanceof Float32Array||"[object Float32Array]"===h(n))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===d}catch(r){t=!1}return t}()?g:function(){throw new Error("not implemented")})(1);var N="function"==typeof m?m:function(t){return E[0]=t,E[0]};function T(t,r){return N(N(t)+N(r))}function S(t,r,n){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function j(t){return"number"==typeof t}var I=Number,O=I.prototype.toString;var P=y();function A(t){return"object"==typeof t&&(t instanceof I||(P?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function F(t){return j(t)||A(t)}function M(t,r){if(!(this instanceof M))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!j(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!j(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return c(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),c(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}function V(t){return t.re}function L(t){return t.im}function R(t,r){return new M(V(t)+V(r),L(t)+L(r))}function Y(t,r){if(!(this instanceof Y))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!j(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!j(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return c(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:N(t)}),c(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:N(r)}),this}function C(t){return t.re}function k(t){return t.im}function x(t,r){return new Y(N(C(t)+C(r)),N(k(t)+k(r)))}function B(t){return Math.abs(t)}function G(t){return 0===t&&1/t===d}function J(t){return t!=t}S(F,"isPrimitive",j),S(F,"isObject",A),S(M,"BYTES_PER_ELEMENT",8),S(M.prototype,"BYTES_PER_ELEMENT",8),S(M.prototype,"byteLength",16),S(M.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),S(M.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t})),S(Y,"BYTES_PER_ELEMENT",4),S(Y.prototype,"BYTES_PER_ELEMENT",4),S(Y.prototype,"byteLength",8),S(Y.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),S(Y.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t}));var q=I.NEGATIVE_INFINITY;function z(t,r){var n,e,o,i;if(2===(n=arguments.length))return J(t)||J(r)?NaN:t===d||r===d?d:t===r&&0===t?G(t)?t:r:t>r?t:r;for(e=q,i=0;i<n;i++){if(J(o=arguments[i])||o===d)return o;(o>e||o===e&&0===o&&G(o))&&(e=o)}return e}function D(t,r,n,e,o,i){var u;return 0===o?(t+e*(r/n))*i:0===(u=r*o)?t*i+r*i*o:(t+u)*i}function H(t,r,n,e,o){var i,u;u=1/(e+o*(i=o/e)),t[0]=D(r,n,e,o,i,u),t[1]=D(n,-r,e,o,i,u)}var K=8988465674311579e292,Q=2/4930380657631324e-47;function U(t,r,n,e,o){var i,u,a;return i=z(B(r),B(n)),u=z(B(e),B(o)),a=1,i>=K?(r*=.5,n*=.5,a*=2):i<=2004168360008973e-307&&(r*=Q,n*=Q,a/=Q),u>=K?(e*=.5,o*=.5,a*=.5):u<=2004168360008973e-307&&(e*=Q,o*=Q,a*=Q),B(o)<=B(e)?H(t,r,n,e,o):(H(t,n,r,o,e),t[1]*=-1),t[0]*=a,t[1]*=a,t}function W(t,r,n,e,o){return 4===arguments.length?U([0,0],t,r,n,e):U(t,r,n,e,o)}function X(t,r){var n=V(t),e=V(r),o=L(t),i=L(r),u=n*e-o*i,a=n*i+o*e;return new t.constructor(u,a)}function Z(t,r){var n=C(t),e=C(r),o=k(t),i=k(r),u=N(n*e)-N(o*i),a=N(n*i)+N(o*e);return new Y(N(u),N(a))}function $(t,r,n){return t[0]=-r,t[1]=-n,t}function tt(t,r,n){return 2===arguments.length?$([0,0],t,r):$(t,r,n)}function rt(t,r){return new M(V(t)-V(r),L(t)-L(r))}function nt(t,r){var n=C(t),e=C(r),o=k(t),i=k(r);return new Y(N(n-e),N(o-i))}var et="function"==typeof Math.imul?Math.imul:null;var ot="function"==typeof et?et:function(t,r){var n,e;return((n=(65535&(t|=0))>>>0)*(e=(65535&(r|=0))>>>0)>>>0)+((t>>>16>>>0)*e+n*(r>>>16>>>0)<<16>>>0)|0};function it(t,r,n,e,o){var i,u,a,c,l,f,m,p;return J(t)||J(r)?(n[o]=NaN,n[o+e]=NaN,n):(u=(65535&(m=(l=(65535&(t|=0))>>>0)*(f=(65535&(r|=0))>>>0)>>>0))>>>0,i=(m=(a=t>>16|0)*f+(p=m>>>16>>>0)>>>0)>>16>>>0,p=(m=l*(c=r>>16|0)+((65535&m)>>>0)>>>0)>>16>>>0,n[o]=a*c+i+p|0,n[o+e]=(m<<16)+u|0,n)}function ut(t,r){return it(t,r,[0,0],1,0)}function at(t,r){return t*r}function ct(t,r){return N(N(t)*N(r))}function lt(t,r){return t-r}function ft(t,r){return N(N(t)-N(r))}S(ut,"assign",it);function mt(t,r){var n,e;return((n=(65535&(t>>>=0))>>>0)*(e=(65535&(r>>>=0))>>>0)>>>0)+((t>>>16>>>0)*e+n*(r>>>16>>>0)<<16>>>0)>>>0}function pt(){var t,r,n,e,o,i,u,a,c,l,f;return 3===arguments.length?(t=arguments[0],a=arguments[1],c=arguments[2]):(t=[0,0],a=arguments[0],c=arguments[1]),J(a)||J(c)?NaN:(n=(65535&(l=(i=(65535&(a>>>=0))>>>0)*(u=(65535&(c>>>=0))>>>0)>>>0))>>>0,r=(l=(e=a>>>16>>>0)*u+(f=l>>>16>>>0)>>>0)>>>16>>>0,f=(l=i*(o=c>>>16>>>0)+((65535&l)>>>0)>>>0)>>>16>>>0,t[0]=e*o+r+f>>>0,t[1]=(l<<16)+n>>>0,t)}var yt={};l(yt,"add",f),l(yt,"addf",T),l(yt,"cadd",R),l(yt,"caddf",x),l(yt,"cdiv",W),l(yt,"cmul",X),l(yt,"cmulf",Z),l(yt,"cneg",tt),l(yt,"csub",rt),l(yt,"csubf",nt),l(yt,"imul",ot),l(yt,"imuldw",ut),l(yt,"mul",at),l(yt,"mulf",ct),l(yt,"sub",lt),l(yt,"subf",ft),l(yt,"umul",mt),l(yt,"umuldw",pt);export{f as add,T as addf,R as cadd,x as caddf,W as cdiv,X as cmul,Z as cmulf,tt as cneg,rt as csub,nt as csubf,yt as default,ot as imul,ut as imuldw,at as mul,ct as mulf,lt as sub,ft as subf,mt as umul,pt as umuldw};
//# sourceMappingURL=mod.js.map
