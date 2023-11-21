// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(e){return"string"==typeof e}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,d=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,m=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,w=/(\..*[^0])0*e/;function v(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,y,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,d,"e+0$1"),n=p.call(n,g,"e-0$1"),e.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,m,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):f.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var S=String.fromCharCode,T=isNaN,N=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,o,a,l,f,s,p;if(!N(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",f=1,s=0;s<e.length;s++)if(c(n=e[s]))l+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,T(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,n,i;for(t=[],i=0,n=j.exec(e);n;)(r=e.slice(i,j.lastIndex-n[0].length)).length&&t.push(r),t.push(F(n)),i=j.lastIndex,n=j.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function A(e){return"string"==typeof e}function I(e){var r,t,n;if(!A(e))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=V(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var O=Object.prototype,P=O.toString,R=O.__defineGetter__,C=O.__defineSetter__,M=O.__lookupGetter__,$=O.__lookupSetter__,L=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(M.call(e,r)||$.call(e,r)?(n=e.__proto__,e.__proto__=O,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&R&&R.call(e,r,t.get),a&&C&&C.call(e,r,t.set),e};function Y(e,r,t){L(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var Z="function"==typeof Math.fround?Math.fround:null,B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function G(){return B&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString,J=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol:void 0,X="function"==typeof U?U.toStringTag:"",z=G()?function(e){var r,t,n,i,o;if(null==e)return W.call(e);t=e[X],o=X,r=null!=(i=e)&&J.call(i,o);try{e[X]=void 0}catch(r){return W.call(e)}return n=W.call(e),r?e[X]=t:delete e[X],n}:function(e){return W.call(e)},q="function"==typeof Float32Array,D=Number.POSITIVE_INFINITY,H="function"==typeof Float32Array?Float32Array:null,K="function"==typeof Float32Array?Float32Array:void 0,Q=new(function(){var e,r,t;if("function"!=typeof H)return!1;try{r=new H([1,3.14,-3.14,5e40]),t=r,e=(q&&t instanceof Float32Array||"[object Float32Array]"===z(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===D}catch(r){e=!1}return e}()?K:function(){throw new Error("not implemented")})(1),ee="function"==typeof Z?Z:function(e){return Q[0]=e,Q[0]};function re(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function te(e){return"number"==typeof e}var ne=Number,ie=ne.prototype.toString,oe=G();function ae(e){return"object"==typeof e&&(e instanceof ne||(oe?function(e){try{return ie.call(e),!0}catch(e){return!1}}(e):"[object Number]"===z(e)))}function ue(e){return te(e)||ae(e)}function ce(e,r){if(!(this instanceof ce))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!te(e))throw new TypeError(I("invalid argument. Real component must be a number. Value: `%s`.",e));if(!te(r))throw new TypeError(I("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return L(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),L(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}function le(e){return e.re}function fe(e){return e.im}function se(e,r){if(!(this instanceof se))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!te(e))throw new TypeError(I("invalid argument. Real component must be a number. Value: `%s`.",e));if(!te(r))throw new TypeError(I("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return L(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:ee(e)}),L(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:ee(r)}),this}function pe(e){return e.re}function de(e){return e.im}function ge(e){return Math.abs(e)}function he(e){return e!=e}function me(e,r){return he(e)||he(r)?NaN:e===D||r===D?D:e===r&&0===e?function(e){return 0===e&&1/e===D}(e)?e:r:e>r?e:r}function be(e,r,t,n,i,o){var a;return 0===i?(e+n*(r/t))*o:0==(a=r*i)?e*o+r*o*i:(e+a)*o}function ye(e,r,t,n){var i,o,a;return a=1/(t+n*(o=n/t)),(i=[0,0])[0]=be(e,r,t,n,o,a),i[1]=be(r,-e,t,n,o,a),i}re(ue,"isPrimitive",te),re(ue,"isObject",ae),re(ce,"BYTES_PER_ELEMENT",8),re(ce.prototype,"BYTES_PER_ELEMENT",8),re(ce.prototype,"byteLength",16),re(ce.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),re(ce.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e})),re(se,"BYTES_PER_ELEMENT",4),re(se.prototype,"BYTES_PER_ELEMENT",4),re(se.prototype,"byteLength",8),re(se.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),re(se.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var we=8988465674311579e292,ve=2004168360008973e-307,Ee=2/4930380657631324e-47,_e="function"==typeof Math.imul?Math.imul:null,Se="function"==typeof _e?_e:function(e,r){var t,n;return((t=(65535&(e|=0))>>>0)*(n=(65535&(r|=0))>>>0)>>>0)+((e>>>16>>>0)*n+t*(r>>>16>>>0)<<16>>>0)|0},Te=65535;function Ne(e,r,t,n,i){var o,a,u,c,l,f,s,p;return he(e)||he(r)?(t[i]=NaN,t[i+n]=NaN,t):(a=((s=(l=((e|=0)&Te)>>>0)*(f=((r|=0)&Te)>>>0)>>>0)&Te)>>>0,o=(s=(u=e>>16|0)*f+(p=s>>>16>>>0)>>>0)>>16>>>0,p=(s=l*(c=r>>16|0)+((s&Te)>>>0)>>>0)>>16>>>0,t[i]=u*c+o+p|0,t[i+n]=(s<<16)+a|0,t)}function xe(e,r){return Ne(e,r,[0,0],1,0)}re(xe,"assign",Ne);var ke=65535;function je(e,r,t,n,i){var o,a,u,c,l,f,s,p;return he(e)||he(r)?(t[i]=NaN,t[i+n]=NaN,t):(a=((s=(l=((e>>>=0)&ke)>>>0)*(f=((r>>>=0)&ke)>>>0)>>>0)&ke)>>>0,o=(s=(u=e>>>16>>>0)*f+(p=s>>>16>>>0)>>>0)>>>16>>>0,p=(s=l*(c=r>>>16>>>0)+((s&ke)>>>0)>>>0)>>>16>>>0,t[i]=u*c+o+p>>>0,t[i+n]=(s<<16)+a>>>0,t)}function Fe(e,r){return je(e,r,[0,0],1,0)}re(Fe,"assign",je);var Ve={};return Y(Ve,"add",(function(e,r){return e+r})),Y(Ve,"add3",(function(e,r,t){return e+r+t})),Y(Ve,"add4",(function(e,r,t,n){return e+r+t+n})),Y(Ve,"add5",(function(e,r,t,n,i){return e+r+t+n+i})),Y(Ve,"addf",(function(e,r){return ee(ee(e)+ee(r))})),Y(Ve,"cadd",(function(e,r){return new ce(le(e)+le(r),fe(e)+fe(r))})),Y(Ve,"caddf",(function(e,r){return new se(ee(pe(e)+pe(r)),ee(de(e)+de(r)))})),Y(Ve,"cdiv",(function(e,r){var t,n,i,o,a,u,c,l;return t=le(e),n=le(r),i=fe(e),o=fe(r),u=me(ge(t),ge(i)),c=me(ge(n),ge(o)),l=1,u>=we?(t*=.5,i*=.5,l*=2):u<=ve&&(t*=Ee,i*=Ee,l/=Ee),c>=we?(n*=.5,o*=.5,l*=.5):c<=ve&&(n*=Ee,o*=Ee,l*=Ee),ge(o)<=ge(n)?a=ye(t,i,n,o):(a=ye(i,t,o,n))[1]*=-1,a[0]*=l,a[1]*=l,new ce(a[0],a[1])})),Y(Ve,"cmul",(function(e,r){var t=le(e),n=le(r),i=fe(e),o=fe(r);return new ce(t*n-i*o,t*o+i*n)})),Y(Ve,"cmulf",(function(e,r){var t=pe(e),n=pe(r),i=de(e),o=de(r),a=ee(t*n)-ee(i*o),u=ee(t*o)+ee(i*n);return new se(ee(a),ee(u))})),Y(Ve,"cneg",(function(e){return new ce(-le(e),-fe(e))})),Y(Ve,"cnegf",(function(e){return new se(-pe(e),-de(e))})),Y(Ve,"csub",(function(e,r){return new ce(le(e)-le(r),fe(e)-fe(r))})),Y(Ve,"csubf",(function(e,r){return new se(ee(pe(e)-pe(r)),ee(de(e)-de(r)))})),Y(Ve,"div",(function(e,r){return e/r})),Y(Ve,"divf",(function(e,r){return ee(ee(e)/ee(r))})),Y(Ve,"imul",Se),Y(Ve,"imuldw",xe),Y(Ve,"mul",(function(e,r){return e*r})),Y(Ve,"mulf",(function(e,r){return ee(ee(e)*ee(r))})),Y(Ve,"sub",(function(e,r){return e-r})),Y(Ve,"subf",(function(e,r){return ee(ee(e)-ee(r))})),Y(Ve,"umul",(function(e,r){var t,n;return((t=(65535&(e>>>=0))>>>0)*(n=(65535&(r>>>=0))>>>0)>>>0)+((e>>>16>>>0)*n+t*(r>>>16>>>0)<<16>>>0)>>>0})),Y(Ve,"umuldw",Fe),Ve},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r();
//# sourceMappingURL=browser.js.map
