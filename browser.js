// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,d=/^(\d+)e/,y=/\.0$/,m=/\.0*e/,b=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,m,"e"),n=p.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,f,"e+0$1"),n=p.call(n,g,"e-0$1"),e.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,d,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):l.call(n)}function v(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var E=String.fromCharCode,_=Array.isArray;function S(e){return e!=e}function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,n,a,o,u,l,s,p,f,g,h,d;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,s=0;s<e.length;s++)if("string"==typeof(n=e[s]))u+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,g=n.width,h=n.padRight,d=void 0,(d=g-f.length)<0?f:f=h?f+v(d):v(d)+f)),u+=n.arg||"",l+=1}return u}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,n,i;for(t=[],i=0,n=k.exec(e);n;)(r=e.slice(i,k.lastIndex-n[0].length)).length&&t.push(r),t.push(j(n)),i=k.lastIndex,n=k.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function V(e){var r,t;if("string"!=typeof e)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return x.apply(null,r)}var I=Object.prototype,A=I.toString,O=I.__defineGetter__,P=I.__defineSetter__,R=I.__lookupGetter__,C=I.__lookupSetter__,N=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(e,r)||C.call(e,r)?(n=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(e,r,t.get),o&&P&&P.call(e,r,t.set),e};function $(e,r,t){N(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var L="function"==typeof Math.fround?Math.fround:null,M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return M&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,B=Object.prototype.hasOwnProperty,G="function"==typeof Symbol?Symbol:void 0,W="function"==typeof G?G.toStringTag:"",J=Y()?function(e){var r,t,n,i,a;if(null==e)return Z.call(e);t=e[W],a=W,r=null!=(i=e)&&B.call(i,a);try{e[W]=void 0}catch(r){return Z.call(e)}return n=Z.call(e),r?e[W]=t:delete e[W],n}:function(e){return Z.call(e)},U="function"==typeof Float32Array,X=Number.POSITIVE_INFINITY,z="function"==typeof Float32Array?Float32Array:null,q="function"==typeof Float32Array?Float32Array:void 0,D=new(function(){var e,r,t;if("function"!=typeof z)return!1;try{r=new z([1,3.14,-3.14,5e40]),t=r,e=(U&&t instanceof Float32Array||"[object Float32Array]"===J(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===X}catch(r){e=!1}return e}()?q:function(){throw new Error("not implemented")})(1),H="function"==typeof L?L:function(e){return D[0]=e,D[0]};function K(e,r,t){N(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Q(e){return"number"==typeof e}var ee=Number,re=ee.prototype.toString,te=Y();function ne(e){return"object"==typeof e&&(e instanceof ee||(te?function(e){try{return re.call(e),!0}catch(e){return!1}}(e):"[object Number]"===J(e)))}function ie(e){return Q(e)||ne(e)}function ae(e,r){if(!(this instanceof ae))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Q(e))throw new TypeError(V("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Q(r))throw new TypeError(V("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return N(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:H(e)}),N(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:H(r)}),this}function oe(e){return e.re}function ce(e){return e.im}function ue(e,r){if(!(this instanceof ue))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Q(e))throw new TypeError(V("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Q(r))throw new TypeError(V("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return N(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),N(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}function le(e){return e.re}function se(e){return e.im}K(ie,"isPrimitive",Q),K(ie,"isObject",ne),K(ae,"BYTES_PER_ELEMENT",4),K(ae.prototype,"BYTES_PER_ELEMENT",4),K(ae.prototype,"byteLength",8),K(ae.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),K(ae.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e})),K(ue,"BYTES_PER_ELEMENT",8),K(ue.prototype,"BYTES_PER_ELEMENT",8),K(ue.prototype,"byteLength",16),K(ue.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),K(ue.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var pe={};return $(pe,"cmulf",(function(e,r){var t=oe(e),n=oe(r),i=ce(e),a=ce(r),o=H(t*n)-H(i*a),c=H(t*a)+H(i*n);return new ae(H(o),H(c))})),$(pe,"cadd",(function(e,r){return new ue(le(e)+le(r),se(e)+se(r))})),$(pe,"cmul",(function(e,r){var t=le(e),n=le(r),i=se(e),a=se(r);return new ue(t*n-i*a,t*a+i*n)})),pe},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r();
//# sourceMappingURL=browser.js.map
