// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function e(t){return"number"==typeof t}function n(t){var r,e="";for(r=0;r<t;r++)e+="0";return e}function o(t,r,e){var o=!1,i=r-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(o=!0,t=t.substr(1)),t=e?t+n(i):n(i)+t,o&&(t="-"+t)),t}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(t){var r,n,u;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=t.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===t.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),t.precision&&(n=o(n,t.precision,t.padRight)),n="-"+n):(n=u.toString(r),u||t.precision?t.precision&&(n=o(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===r&&(t.alternate&&(n="0x"+n),n=t.specifier===a.call(t.specifier)?a.call(n):i.call(n)),8===r&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(t){return"string"==typeof t}var l=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,m=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,d=/\.0$/,w=/\.0*e/,g=/(\..*[^0])0*e/;function v(t){var r,n,o=parseFloat(t.arg);if(!isFinite(o)){if(!e(t.arg))throw new Error("invalid floating-point number. Value: "+n);o=t.arg}switch(t.specifier){case"e":case"E":n=o.toExponential(t.precision);break;case"f":case"F":n=o.toFixed(t.precision);break;case"g":case"G":l(o)<1e-4?((r=t.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(t.precision),t.alternate||(n=s.call(n,g,"$1e"),n=s.call(n,w,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,m,"e-0$1"),t.alternate&&(n=s.call(n,h,"$1."),n=s.call(n,b,"$1.e")),o>=0&&t.sign&&(n=t.sign+n),n=t.specifier===p.call(t.specifier)?p.call(n):f.call(n)}function E(t){var r,e="";for(r=0;r<t;r++)e+=" ";return e}function T(t,r,e){var n=r-t.length;return n<0?t:t=e?t+E(n):E(n)+t}var S=String.fromCharCode,F=isNaN,_=Array.isArray;function N(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function A(t){var r,e,n,i,a,l,f,p,s;if(!_(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(l="",f=1,p=0;p<t.length;p++)if(c(n=t[p]))l+=n;else{if(r=void 0!==n.precision,!(n=N(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,F(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,F(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!F(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=F(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=T(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function M(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function V(t){var r,e,n,o;for(e=[],o=0,n=I.exec(t);n;)(r=t.slice(o,I.lastIndex-n[0].length)).length&&e.push(r),e.push(M(n)),o=I.lastIndex,n=I.exec(t);return(r=t.slice(o)).length&&e.push(r),e}function O(t){return"string"==typeof t}function P(t){var r,e;if(!O(t))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=[V(t)],e=1;e<arguments.length;e++)r.push(arguments[e]);return A.apply(null,r)}var R=Object.prototype,j=R.toString,L=R.__defineGetter__,x=R.__defineSetter__,k=R.__lookupGetter__,Y=R.__lookupSetter__,C=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,e){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===j.call(t))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===j.call(e))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(k.call(t,r)||Y.call(t,r)?(n=t.__proto__,t.__proto__=R,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&L&&L.call(t,r,e.get),a&&x&&x.call(t,r,e.set),t};function B(t,r,e){C(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})}var $="function"==typeof Math.fround?Math.fround:null,J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return J&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString,W=Object.prototype.hasOwnProperty;function U(t,r){return null!=t&&W.call(t,r)}var X="function"==typeof Symbol?Symbol:void 0,z="function"==typeof X?X.toStringTag:"",q=Z()?function(t){var r,e,n;if(null==t)return G.call(t);e=t[z],r=U(t,z);try{t[z]=void 0}catch(r){return G.call(t)}return n=G.call(t),r?t[z]=e:delete t[z],n}:function(t){return G.call(t)},D="function"==typeof Float32Array,H=Number.POSITIVE_INFINITY,K="function"==typeof Float32Array?Float32Array:null,Q="function"==typeof Float32Array?Float32Array:void 0,tt=new(function(){var t,r,e;if("function"!=typeof K)return!1;try{r=new K([1,3.14,-3.14,5e40]),e=r,t=(D&&e instanceof Float32Array||"[object Float32Array]"===q(e))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===H}catch(r){t=!1}return t}()?Q:function(){throw new Error("not implemented")})(1),rt="function"==typeof $?$:function(t){return tt[0]=t,tt[0]};function et(t,r,e){C(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function nt(t){return"number"==typeof t}var ot=Object.prototype.toString,it="function"==typeof Symbol?Symbol:void 0,at="function"==typeof it?it.toStringTag:"",ut=Z()?function(t){var r,e,n;if(null==t)return ot.call(t);e=t[at],r=U(t,at);try{t[at]=void 0}catch(r){return ot.call(t)}return n=ot.call(t),r?t[at]=e:delete t[at],n}:function(t){return ot.call(t)},ct=Number,lt=ct.prototype.toString,ft=Z();function pt(t){return"object"==typeof t&&(t instanceof ct||(ft?function(t){try{return lt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===ut(t)))}function st(t){return nt(t)||pt(t)}function yt(t,r){if(!(this instanceof yt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!nt(t))throw new TypeError(P("invalid argument. Real component must be a number. Value: `%s`.",t));if(!nt(r))throw new TypeError(P("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return C(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),C(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}function mt(t){return t.re}function ht(t){return t.im}et(st,"isPrimitive",nt),et(st,"isObject",pt),et(yt,"BYTES_PER_ELEMENT",8),et(yt.prototype,"BYTES_PER_ELEMENT",8),et(yt.prototype,"byteLength",16),et(yt.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),et(yt.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t}));var bt="function"==typeof Math.fround?Math.fround:null,dt=Object.prototype.toString,wt="function"==typeof Symbol?Symbol:void 0,gt="function"==typeof wt?wt.toStringTag:"",vt=Z()?function(t){var r,e,n;if(null==t)return dt.call(t);e=t[gt],r=U(t,gt);try{t[gt]=void 0}catch(r){return dt.call(t)}return n=dt.call(t),r?t[gt]=e:delete t[gt],n}:function(t){return dt.call(t)},Et="function"==typeof Float32Array,Tt=Number.POSITIVE_INFINITY,St="function"==typeof Float32Array?Float32Array:null,Ft="function"==typeof Float32Array?Float32Array:void 0,_t=new(function(){var t,r,e;if("function"!=typeof St)return!1;try{r=new St([1,3.14,-3.14,5e40]),e=r,t=(Et&&e instanceof Float32Array||"[object Float32Array]"===vt(e))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Tt}catch(r){t=!1}return t}()?Ft:function(){throw new Error("not implemented")})(1),Nt="function"==typeof bt?bt:function(t){return _t[0]=t,_t[0]};function At(t,r){if(!(this instanceof At))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!nt(t))throw new TypeError(P("invalid argument. Real component must be a number. Value: `%s`.",t));if(!nt(r))throw new TypeError(P("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return C(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Nt(t)}),C(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Nt(r)}),this}function It(t){return t.re}function Mt(t){return t.im}function Vt(t){return Math.abs(t)}et(At,"BYTES_PER_ELEMENT",4),et(At.prototype,"BYTES_PER_ELEMENT",4),et(At.prototype,"byteLength",8),et(At.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),et(At.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t}));var Ot=Number.POSITIVE_INFINITY;function Pt(t){return t!=t}function Rt(t,r){return Pt(t)||Pt(r)?NaN:t===Ot||r===Ot?Ot:t===r&&0===t?function(t){return 0===t&&1/t===Ot}(t)?t:r:t>r?t:r}function jt(t){return t.re}function Lt(t){return t.im}function xt(t,r){if(!(this instanceof xt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!nt(t))throw new TypeError(P("invalid argument. Real component must be a number. Value: `%s`.",t));if(!nt(r))throw new TypeError(P("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return C(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),C(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}function kt(t,r,e,n,o,i){var a;return 0===o?(t+n*(r/e))*i:0==(a=r*o)?t*i+r*i*o:(t+a)*i}function Yt(t,r,e,n){var o,i,a;return a=1/(e+n*(i=n/e)),(o=[0,0])[0]=kt(t,r,e,n,i,a),o[1]=kt(r,-t,e,n,i,a),o}et(xt,"BYTES_PER_ELEMENT",8),et(xt.prototype,"BYTES_PER_ELEMENT",8),et(xt.prototype,"byteLength",16),et(xt.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),et(xt.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t}));var Ct=8988465674311579e292,Bt=2004168360008973e-307,$t=2/4930380657631324e-47;function Jt(t,r){if(!(this instanceof Jt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!nt(t))throw new TypeError(P("invalid argument. Real component must be a number. Value: `%s`.",t));if(!nt(r))throw new TypeError(P("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return C(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),C(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}function Zt(t){return t.re}function Gt(t){return t.im}et(Jt,"BYTES_PER_ELEMENT",8),et(Jt.prototype,"BYTES_PER_ELEMENT",8),et(Jt.prototype,"byteLength",16),et(Jt.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),et(Jt.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t}));var Wt="function"==typeof Math.fround?Math.fround:null,Ut=Object.prototype.toString,Xt="function"==typeof Symbol?Symbol:void 0,zt="function"==typeof Xt?Xt.toStringTag:"",qt=Z()?function(t){var r,e,n;if(null==t)return Ut.call(t);e=t[zt],r=U(t,zt);try{t[zt]=void 0}catch(r){return Ut.call(t)}return n=Ut.call(t),r?t[zt]=e:delete t[zt],n}:function(t){return Ut.call(t)},Dt="function"==typeof Float32Array,Ht=Number.POSITIVE_INFINITY,Kt="function"==typeof Float32Array?Float32Array:null,Qt="function"==typeof Float32Array?Float32Array:void 0,tr=new(function(){var t,r,e;if("function"!=typeof Kt)return!1;try{r=new Kt([1,3.14,-3.14,5e40]),e=r,t=(Dt&&e instanceof Float32Array||"[object Float32Array]"===qt(e))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Ht}catch(r){t=!1}return t}()?Qt:function(){throw new Error("not implemented")})(1),rr="function"==typeof Wt?Wt:function(t){return tr[0]=t,tr[0]};function er(t,r){if(!(this instanceof er))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!nt(t))throw new TypeError(P("invalid argument. Real component must be a number. Value: `%s`.",t));if(!nt(r))throw new TypeError(P("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return C(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:rr(t)}),C(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:rr(r)}),this}function nr(t){return t.re}function or(t){return t.im}function ir(t,r){if(!(this instanceof ir))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!nt(t))throw new TypeError(P("invalid argument. Real component must be a number. Value: `%s`.",t));if(!nt(r))throw new TypeError(P("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return C(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),C(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}et(er,"BYTES_PER_ELEMENT",4),et(er.prototype,"BYTES_PER_ELEMENT",4),et(er.prototype,"byteLength",8),et(er.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),et(er.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t})),et(ir,"BYTES_PER_ELEMENT",8),et(ir.prototype,"BYTES_PER_ELEMENT",8),et(ir.prototype,"byteLength",16),et(ir.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),et(ir.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t}));var ar="function"==typeof Math.fround?Math.fround:null,ur=Object.prototype.toString,cr="function"==typeof Symbol?Symbol:void 0,lr="function"==typeof cr?cr.toStringTag:"",fr=Z()?function(t){var r,e,n;if(null==t)return ur.call(t);e=t[lr],r=U(t,lr);try{t[lr]=void 0}catch(r){return ur.call(t)}return n=ur.call(t),r?t[lr]=e:delete t[lr],n}:function(t){return ur.call(t)},pr="function"==typeof Float32Array,sr=Number.POSITIVE_INFINITY,yr="function"==typeof Float32Array?Float32Array:null,mr="function"==typeof Float32Array?Float32Array:void 0,hr=new(function(){var t,r,e;if("function"!=typeof yr)return!1;try{r=new yr([1,3.14,-3.14,5e40]),e=r,t=(pr&&e instanceof Float32Array||"[object Float32Array]"===fr(e))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===sr}catch(r){t=!1}return t}()?mr:function(){throw new Error("not implemented")})(1),br="function"==typeof ar?ar:function(t){return hr[0]=t,hr[0]};function dr(t,r){if(!(this instanceof dr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!nt(t))throw new TypeError(P("invalid argument. Real component must be a number. Value: `%s`.",t));if(!nt(r))throw new TypeError(P("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return C(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:br(t)}),C(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:br(r)}),this}function wr(t,r){if(!(this instanceof wr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!nt(t))throw new TypeError(P("invalid argument. Real component must be a number. Value: `%s`.",t));if(!nt(r))throw new TypeError(P("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return C(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),C(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}function gr(t){return t.re}function vr(t){return t.im}et(dr,"BYTES_PER_ELEMENT",4),et(dr.prototype,"BYTES_PER_ELEMENT",4),et(dr.prototype,"byteLength",8),et(dr.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),et(dr.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t})),et(wr,"BYTES_PER_ELEMENT",8),et(wr.prototype,"BYTES_PER_ELEMENT",8),et(wr.prototype,"byteLength",16),et(wr.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),et(wr.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t}));var Er="function"==typeof Math.fround?Math.fround:null,Tr=Object.prototype.toString,Sr="function"==typeof Symbol?Symbol:void 0,Fr="function"==typeof Sr?Sr.toStringTag:"",_r=Z()?function(t){var r,e,n;if(null==t)return Tr.call(t);e=t[Fr],r=U(t,Fr);try{t[Fr]=void 0}catch(r){return Tr.call(t)}return n=Tr.call(t),r?t[Fr]=e:delete t[Fr],n}:function(t){return Tr.call(t)},Nr="function"==typeof Float32Array,Ar=Number.POSITIVE_INFINITY,Ir="function"==typeof Float32Array?Float32Array:null,Mr="function"==typeof Float32Array?Float32Array:void 0,Vr=new(function(){var t,r,e;if("function"!=typeof Ir)return!1;try{r=new Ir([1,3.14,-3.14,5e40]),e=r,t=(Nr&&e instanceof Float32Array||"[object Float32Array]"===_r(e))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Ar}catch(r){t=!1}return t}()?Mr:function(){throw new Error("not implemented")})(1),Or="function"==typeof Er?Er:function(t){return Vr[0]=t,Vr[0]};function Pr(t,r){if(!(this instanceof Pr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!nt(t))throw new TypeError(P("invalid argument. Real component must be a number. Value: `%s`.",t));if(!nt(r))throw new TypeError(P("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return C(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Or(t)}),C(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Or(r)}),this}function Rr(t){return t.re}function jr(t){return t.im}et(Pr,"BYTES_PER_ELEMENT",4),et(Pr.prototype,"BYTES_PER_ELEMENT",4),et(Pr.prototype,"byteLength",8),et(Pr.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),et(Pr.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t}));var Lr="function"==typeof Math.fround?Math.fround:null,xr=Object.prototype.toString,kr="function"==typeof Symbol?Symbol:void 0,Yr="function"==typeof kr?kr.toStringTag:"",Cr=Z()?function(t){var r,e,n;if(null==t)return xr.call(t);e=t[Yr],r=U(t,Yr);try{t[Yr]=void 0}catch(r){return xr.call(t)}return n=xr.call(t),r?t[Yr]=e:delete t[Yr],n}:function(t){return xr.call(t)},Br="function"==typeof Float32Array,$r=Number.POSITIVE_INFINITY,Jr="function"==typeof Float32Array?Float32Array:null,Zr="function"==typeof Float32Array?Float32Array:void 0,Gr=new(function(){var t,r,e;if("function"!=typeof Jr)return!1;try{r=new Jr([1,3.14,-3.14,5e40]),e=r,t=(Br&&e instanceof Float32Array||"[object Float32Array]"===Cr(e))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===$r}catch(r){t=!1}return t}()?Zr:function(){throw new Error("not implemented")})(1),Wr="function"==typeof Lr?Lr:function(t){return Gr[0]=t,Gr[0]},Ur="function"==typeof Math.imul?Math.imul:null,Xr="function"==typeof Ur?Ur:function(t,r){var e,n;return((e=(65535&(t|=0))>>>0)*(n=(65535&(r|=0))>>>0)>>>0)+((t>>>16>>>0)*n+e*(r>>>16>>>0)<<16>>>0)|0};function zr(t){return t!=t}var qr=65535;function Dr(t,r,e,n,o){var i,a,u,c,l,f,p,s;return zr(t)||zr(r)?(e[o]=NaN,e[o+n]=NaN,e):(a=((p=(l=((t|=0)&qr)>>>0)*(f=((r|=0)&qr)>>>0)>>>0)&qr)>>>0,i=(p=(u=t>>16|0)*f+(s=p>>>16>>>0)>>>0)>>16>>>0,s=(p=l*(c=r>>16|0)+((p&qr)>>>0)>>>0)>>16>>>0,e[o]=u*c+i+s|0,e[o+n]=(p<<16)+a|0,e)}function Hr(t,r){return Dr(t,r,[0,0],1,0)}et(Hr,"assign",Dr);var Kr="function"==typeof Math.fround?Math.fround:null,Qr=Object.prototype.toString,te="function"==typeof Symbol?Symbol:void 0,re="function"==typeof te?te.toStringTag:"",ee=Z()?function(t){var r,e,n;if(null==t)return Qr.call(t);e=t[re],r=U(t,re);try{t[re]=void 0}catch(r){return Qr.call(t)}return n=Qr.call(t),r?t[re]=e:delete t[re],n}:function(t){return Qr.call(t)},ne="function"==typeof Float32Array,oe=Number.POSITIVE_INFINITY,ie="function"==typeof Float32Array?Float32Array:null,ae="function"==typeof Float32Array?Float32Array:void 0,ue=new(function(){var t,r,e;if("function"!=typeof ie)return!1;try{r=new ie([1,3.14,-3.14,5e40]),e=r,t=(ne&&e instanceof Float32Array||"[object Float32Array]"===ee(e))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===oe}catch(r){t=!1}return t}()?ae:function(){throw new Error("not implemented")})(1),ce="function"==typeof Kr?Kr:function(t){return ue[0]=t,ue[0]},le="function"==typeof Math.fround?Math.fround:null,fe=Object.prototype.toString,pe="function"==typeof Symbol?Symbol:void 0,se="function"==typeof pe?pe.toStringTag:"",ye=Z()?function(t){var r,e,n;if(null==t)return fe.call(t);e=t[se],r=U(t,se);try{t[se]=void 0}catch(r){return fe.call(t)}return n=fe.call(t),r?t[se]=e:delete t[se],n}:function(t){return fe.call(t)},me="function"==typeof Float32Array,he=Number.POSITIVE_INFINITY,be="function"==typeof Float32Array?Float32Array:null,de="function"==typeof Float32Array?Float32Array:void 0,we=new(function(){var t,r,e;if("function"!=typeof be)return!1;try{r=new be([1,3.14,-3.14,5e40]),e=r,t=(me&&e instanceof Float32Array||"[object Float32Array]"===ye(e))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===he}catch(r){t=!1}return t}()?de:function(){throw new Error("not implemented")})(1),ge="function"==typeof le?le:function(t){return we[0]=t,we[0]};function ve(t){return t!=t}var Ee=65535;function Te(t,r,e,n,o){var i,a,u,c,l,f,p,s;return ve(t)||ve(r)?(e[o]=NaN,e[o+n]=NaN,e):(a=((p=(l=((t>>>=0)&Ee)>>>0)*(f=((r>>>=0)&Ee)>>>0)>>>0)&Ee)>>>0,i=(p=(u=t>>>16>>>0)*f+(s=p>>>16>>>0)>>>0)>>>16>>>0,s=(p=l*(c=r>>>16>>>0)+((p&Ee)>>>0)>>>0)>>>16>>>0,e[o]=u*c+i+s>>>0,e[o+n]=(p<<16)+a>>>0,e)}function Se(t,r){return Te(t,r,[0,0],1,0)}et(Se,"assign",Te);var Fe={};return B(Fe,"add",(function(t,r){return t+r})),B(Fe,"add3",(function(t,r,e){return t+r+e})),B(Fe,"add4",(function(t,r,e,n){return t+r+e+n})),B(Fe,"add5",(function(t,r,e,n,o){return t+r+e+n+o})),B(Fe,"addf",(function(t,r){return rt(rt(t)+rt(r))})),B(Fe,"cadd",(function(t,r){return new yt(mt(t)+mt(r),ht(t)+ht(r))})),B(Fe,"caddf",(function(t,r){return new At(Nt(It(t)+It(r)),Nt(Mt(t)+Mt(r)))})),B(Fe,"cdiv",(function(t,r){var e,n,o,i,a,u,c,l;return e=jt(t),n=jt(r),o=Lt(t),i=Lt(r),u=Rt(Vt(e),Vt(o)),c=Rt(Vt(n),Vt(i)),l=1,u>=Ct?(e*=.5,o*=.5,l*=2):u<=Bt&&(e*=$t,o*=$t,l/=$t),c>=Ct?(n*=.5,i*=.5,l*=.5):c<=Bt&&(n*=$t,i*=$t,l*=$t),Vt(i)<=Vt(n)?a=Yt(e,o,n,i):(a=Yt(o,e,i,n))[1]*=-1,a[0]*=l,a[1]*=l,new xt(a[0],a[1])})),B(Fe,"cmul",(function(t,r){var e=Zt(t),n=Zt(r),o=Gt(t),i=Gt(r);return new Jt(e*n-o*i,e*i+o*n)})),B(Fe,"cmulf",(function(t,r){var e=nr(t),n=nr(r),o=or(t),i=or(r),a=rr(e*n)-rr(o*i),u=rr(e*i)+rr(o*n);return new er(rr(a),rr(u))})),B(Fe,"cneg",(function(t){return new ir(-function(t){return t.re}(t),-function(t){return t.im}(t))})),B(Fe,"cnegf",(function(t){return new dr(-function(t){return t.re}(t),-function(t){return t.im}(t))})),B(Fe,"csub",(function(t,r){return new wr(gr(t)-gr(r),vr(t)-vr(r))})),B(Fe,"csubf",(function(t,r){return new Pr(Or(Rr(t)-Rr(r)),Or(jr(t)-jr(r)))})),B(Fe,"div",(function(t,r){return t/r})),B(Fe,"divf",(function(t,r){return Wr(Wr(t)/Wr(r))})),B(Fe,"imul",Xr),B(Fe,"imuldw",Hr),B(Fe,"mul",(function(t,r){return t*r})),B(Fe,"mulf",(function(t,r){return ce(ce(t)*ce(r))})),B(Fe,"sub",(function(t,r){return t-r})),B(Fe,"subf",(function(t,r){return ge(ge(t)-ge(r))})),B(Fe,"umul",(function(t,r){var e,n;return((e=(65535&(t>>>=0))>>>0)*(n=(65535&(r>>>=0))>>>0)>>>0)+((t>>>16>>>0)*n+e*(r>>>16>>>0)<<16>>>0)>>>0})),B(Fe,"umuldw",Se),Fe},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).ns=r();
//# sourceMappingURL=browser.js.map
