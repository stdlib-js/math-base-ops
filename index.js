// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function r(t){return"number"==typeof t}function n(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function o(t,e,r){var o=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(o=!0,t=t.substr(1)),t=r?t+n(i):n(i)+t,o&&(t="-"+t)),t}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(t){var e,n,u;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,u=parseInt(n,10),!isFinite(u)){if(!r(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===t.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),t.precision&&(n=o(n,t.precision,t.padRight)),n="-"+n):(n=u.toString(e),u||t.precision?t.precision&&(n=o(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===a.call(t.specifier)?a.call(n):i.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function l(t){return"string"==typeof t}var c=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,y=String.prototype.replace,s=/e\+(\d)$/,b=/e-(\d)$/,m=/^(\d+)$/,h=/^(\d+)e/,d=/\.0$/,g=/\.0*e/,v=/(\..*[^0])0*e/;function _(t){var e,n,o=parseFloat(t.arg);if(!isFinite(o)){if(!r(t.arg))throw new Error("invalid floating-point number. Value: "+n);o=t.arg}switch(t.specifier){case"e":case"E":n=o.toExponential(t.precision);break;case"f":case"F":n=o.toFixed(t.precision);break;case"g":case"G":c(o)<1e-4?((e=t.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(t.precision),t.alternate||(n=y.call(n,v,"$1e"),n=y.call(n,g,"e"),n=y.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=y.call(n,s,"e+0$1"),n=y.call(n,b,"e-0$1"),t.alternate&&(n=y.call(n,m,"$1."),n=y.call(n,h,"$1.e")),o>=0&&t.sign&&(n=t.sign+n),n=t.specifier===p.call(t.specifier)?p.call(n):f.call(n)}function w(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function E(t,e,r){var n=e-t.length;return n<0?t:t=r?t+w(n):w(n)+t}var S=String.fromCharCode,j=isNaN,T=Array.isArray;function O(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function N(t){var e,r,n,i,a,c,f,p,y;if(!T(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(c="",f=1,p=0;p<t.length;p++)if(l(n=t[p]))c+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),r=n.flags,y=0;y<r.length;y++)switch(i=r.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,j(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),c+=n.arg||"",f+=1}return c}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function P(t){var e,r,n,o;for(r=[],o=0,n=F.exec(t);n;)(e=t.slice(o,F.lastIndex-n[0].length)).length&&r.push(e),r.push(A(n)),o=F.lastIndex,n=F.exec(t);return(e=t.slice(o)).length&&r.push(e),r}function I(t){return"string"==typeof t}function V(t){var e,r,n;if(!I(t))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=P(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return N.apply(null,r)}var k=Object.prototype,x=k.toString,M=k.__defineGetter__,C=k.__defineSetter__,R=k.__lookupGetter__,L=k.__lookupSetter__,Y=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,r){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===x.call(t))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===x.call(r))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((o="value"in r)&&(R.call(t,e)||L.call(t,e)?(n=t.__proto__,t.__proto__=k,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&M&&M.call(t,e,r.get),a&&C&&C.call(t,e,r.set),t};function G(t,e,r){Y(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}var B="function"==typeof Math.fround?Math.fround:null;function $(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var J=$(),Z=Object.prototype.toString,W=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol.toStringTag:"",X=J&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n,o,i;if(null==t)return Z.call(t);r=t[U],i=U,e=null!=(o=t)&&W.call(o,i);try{t[U]=void 0}catch(e){return Z.call(t)}return n=Z.call(t),e?t[U]=r:delete t[U],n}:function(t){return Z.call(t)},z="function"==typeof Float32Array,q=Number.POSITIVE_INFINITY,D="function"==typeof Float32Array?Float32Array:null,H="function"==typeof Float32Array?Float32Array:void 0,K=new(function(){var t,e,r;if("function"!=typeof D)return!1;try{e=new D([1,3.14,-3.14,5e40]),r=e,t=(z&&r instanceof Float32Array||"[object Float32Array]"===X(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===q}catch(e){t=!1}return t}()?H:function(){throw new Error("not implemented")})(1),Q="function"==typeof B?B:function(t){return K[0]=t,K[0]},tt="function"==typeof Object.defineProperty?Object.defineProperty:null,et=Object.defineProperty,rt=Object.prototype,nt=rt.toString,ot=rt.__defineGetter__,it=rt.__defineSetter__,at=rt.__lookupGetter__,ut=rt.__lookupSetter__,lt=function(){try{return tt({},"x",{}),!0}catch(t){return!1}}()?et:function(t,e,r){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===nt.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===nt.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(at.call(t,e)||ut.call(t,e)?(n=t.__proto__,t.__proto__=rt,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ot&&ot.call(t,e,r.get),a&&it&&it.call(t,e,r.set),t};function ct(t,e,r){lt(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function ft(t){return"number"==typeof t}var pt=$();function yt(){return pt&&"symbol"==typeof Symbol.toStringTag}var st=Object.prototype.toString,bt=Object.prototype.hasOwnProperty,mt="function"==typeof Symbol?Symbol.toStringTag:"",ht=yt()?function(t){var e,r,n,o,i;if(null==t)return st.call(t);r=t[mt],i=mt,e=null!=(o=t)&&bt.call(o,i);try{t[mt]=void 0}catch(e){return st.call(t)}return n=st.call(t),e?t[mt]=r:delete t[mt],n}:function(t){return st.call(t)},dt=Number,gt=dt.prototype.toString,vt=yt();function _t(t){return"object"==typeof t&&(t instanceof dt||(vt?function(t){try{return gt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===ht(t)))}function wt(t){return ft(t)||_t(t)}function Et(t,e){if(!(this instanceof Et))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ft(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!ft(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return lt(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),lt(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}function St(t){return t.re}function jt(t){return t.im}ct(wt,"isPrimitive",ft),ct(wt,"isObject",_t),ct(Et,"BYTES_PER_ELEMENT",8),ct(Et.prototype,"BYTES_PER_ELEMENT",8),ct(Et.prototype,"byteLength",16),ct(Et.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),ct(Et.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t}));var Tt="function"==typeof Math.fround?Math.fround:null,Ot=$();function Nt(){return Ot&&"symbol"==typeof Symbol.toStringTag}var Ft=Object.prototype.toString,At=Object.prototype.hasOwnProperty,Pt="function"==typeof Symbol?Symbol.toStringTag:"",It=Nt()?function(t){var e,r,n,o,i;if(null==t)return Ft.call(t);r=t[Pt],i=Pt,e=null!=(o=t)&&At.call(o,i);try{t[Pt]=void 0}catch(e){return Ft.call(t)}return n=Ft.call(t),e?t[Pt]=r:delete t[Pt],n}:function(t){return Ft.call(t)},Vt="function"==typeof Float32Array,kt=Number.POSITIVE_INFINITY,xt="function"==typeof Float32Array?Float32Array:null,Mt="function"==typeof Float32Array?Float32Array:void 0,Ct=new(function(){var t,e,r;if("function"!=typeof xt)return!1;try{e=new xt([1,3.14,-3.14,5e40]),r=e,t=(Vt&&r instanceof Float32Array||"[object Float32Array]"===It(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===kt}catch(e){t=!1}return t}()?Mt:function(){throw new Error("not implemented")})(1),Rt="function"==typeof Tt?Tt:function(t){return Ct[0]=t,Ct[0]},Lt="function"==typeof Object.defineProperty?Object.defineProperty:null,Yt=Object.defineProperty,Gt=Object.prototype,Bt=Gt.toString,$t=Gt.__defineGetter__,Jt=Gt.__defineSetter__,Zt=Gt.__lookupGetter__,Wt=Gt.__lookupSetter__,Ut=function(){try{return Lt({},"x",{}),!0}catch(t){return!1}}()?Yt:function(t,e,r){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===Bt.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===Bt.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(Zt.call(t,e)||Wt.call(t,e)?(n=t.__proto__,t.__proto__=Gt,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$t&&$t.call(t,e,r.get),a&&Jt&&Jt.call(t,e,r.set),t};function Xt(t,e,r){Ut(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function zt(t){return"number"==typeof t}var qt=Number,Dt=qt.prototype.toString,Ht=Nt();function Kt(t){return"object"==typeof t&&(t instanceof qt||(Ht?function(t){try{return Dt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===It(t)))}function Qt(t){return zt(t)||Kt(t)}function te(t,e){if(!(this instanceof te))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!zt(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!zt(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return Ut(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Rt(t)}),Ut(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Rt(e)}),this}function ee(t){return t.re}function re(t){return t.im}function ne(t){return Math.abs(t)}Xt(Qt,"isPrimitive",zt),Xt(Qt,"isObject",Kt),Xt(te,"BYTES_PER_ELEMENT",4),Xt(te.prototype,"BYTES_PER_ELEMENT",4),Xt(te.prototype,"byteLength",8),Xt(te.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),Xt(te.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t}));var oe=Number.POSITIVE_INFINITY;function ie(t){return 0===t&&1/t===oe}function ae(t){return t!=t}var ue=Number.NEGATIVE_INFINITY;function le(t,e){var r,n,o,i;if(2===(r=arguments.length))return ae(t)||ae(e)?NaN:t===oe||e===oe?oe:t===e&&0===t?ie(t)?t:e:t>e?t:e;for(n=ue,i=0;i<r;i++){if(ae(o=arguments[i])||o===oe)return o;(o>n||o===n&&0===o&&ie(o))&&(n=o)}return n}function ce(t,e,r,n,o,i){var a;return 0===o?(t+n*(e/r))*i:0==(a=e*o)?t*i+e*i*o:(t+a)*i}function fe(t,e,r,n,o){var i,a;a=1/(n+o*(i=o/n)),t[0]=ce(e,r,n,o,i,a),t[1]=ce(r,-e,n,o,i,a)}var pe=8988465674311579e292,ye=2004168360008973e-307,se=2/4930380657631324e-47;function be(t,e,r,n,o){var i,a,u;return i=le(ne(e),ne(r)),a=le(ne(n),ne(o)),u=1,i>=pe?(e*=.5,r*=.5,u*=2):i<=ye&&(e*=se,r*=se,u/=se),a>=pe?(n*=.5,o*=.5,u*=.5):a<=ye&&(n*=se,o*=se,u*=se),ne(o)<=ne(n)?fe(t,e,r,n,o):(fe(t,r,e,o,n),t[1]*=-1),t[0]*=u,t[1]*=u,t}function me(t){return t.re}function he(t){return t.im}var de="function"==typeof Math.fround?Math.fround:null,ge=$();function ve(){return ge&&"symbol"==typeof Symbol.toStringTag}var _e=Object.prototype.toString,we=Object.prototype.hasOwnProperty,Ee="function"==typeof Symbol?Symbol.toStringTag:"",Se=ve()?function(t){var e,r,n,o,i;if(null==t)return _e.call(t);r=t[Ee],i=Ee,e=null!=(o=t)&&we.call(o,i);try{t[Ee]=void 0}catch(e){return _e.call(t)}return n=_e.call(t),e?t[Ee]=r:delete t[Ee],n}:function(t){return _e.call(t)},je="function"==typeof Float32Array,Te=Number.POSITIVE_INFINITY,Oe="function"==typeof Float32Array?Float32Array:null,Ne="function"==typeof Float32Array?Float32Array:void 0,Fe=new(function(){var t,e,r;if("function"!=typeof Oe)return!1;try{e=new Oe([1,3.14,-3.14,5e40]),r=e,t=(je&&r instanceof Float32Array||"[object Float32Array]"===Se(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Te}catch(e){t=!1}return t}()?Ne:function(){throw new Error("not implemented")})(1),Ae="function"==typeof de?de:function(t){return Fe[0]=t,Fe[0]},Pe="function"==typeof Object.defineProperty?Object.defineProperty:null,Ie=Object.defineProperty,Ve=Object.prototype,ke=Ve.toString,xe=Ve.__defineGetter__,Me=Ve.__defineSetter__,Ce=Ve.__lookupGetter__,Re=Ve.__lookupSetter__,Le=function(){try{return Pe({},"x",{}),!0}catch(t){return!1}}()?Ie:function(t,e,r){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===ke.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===ke.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(Ce.call(t,e)||Re.call(t,e)?(n=t.__proto__,t.__proto__=Ve,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&xe&&xe.call(t,e,r.get),a&&Me&&Me.call(t,e,r.set),t};function Ye(t,e,r){Le(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function Ge(t){return"number"==typeof t}var Be=Number,$e=Be.prototype.toString,Je=ve();function Ze(t){return"object"==typeof t&&(t instanceof Be||(Je?function(t){try{return $e.call(t),!0}catch(t){return!1}}(t):"[object Number]"===Se(t)))}function We(t){return Ge(t)||Ze(t)}function Ue(t,e){if(!(this instanceof Ue))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ge(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!Ge(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return Le(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ae(t)}),Le(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ae(e)}),this}function Xe(t){return t.re}function ze(t){return t.im}function qe(t,e,r){Y(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function De(t){return"number"==typeof t}Ye(We,"isPrimitive",Ge),Ye(We,"isObject",Ze),Ye(Ue,"BYTES_PER_ELEMENT",4),Ye(Ue.prototype,"BYTES_PER_ELEMENT",4),Ye(Ue.prototype,"byteLength",8),Ye(Ue.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),Ye(Ue.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t}));var He=$();function Ke(){return He&&"symbol"==typeof Symbol.toStringTag}var Qe=Object.prototype.toString,tr=Object.prototype.hasOwnProperty,er="function"==typeof Symbol?Symbol:void 0,rr="function"==typeof er?er.toStringTag:"",nr=Ke()?function(t){var e,r,n,o,i;if(null==t)return Qe.call(t);r=t[rr],i=rr,e=null!=(o=t)&&tr.call(o,i);try{t[rr]=void 0}catch(e){return Qe.call(t)}return n=Qe.call(t),e?t[rr]=r:delete t[rr],n}:function(t){return Qe.call(t)},or=Number,ir=or.prototype.toString,ar=Ke();function ur(t){return"object"==typeof t&&(t instanceof or||(ar?function(t){try{return ir.call(t),!0}catch(t){return!1}}(t):"[object Number]"===nr(t)))}function lr(t){return De(t)||ur(t)}function cr(t,e){if(!(this instanceof cr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!De(t))throw new TypeError(V("invalid argument. Real component must be a number. Value: `%s`.",t));if(!De(e))throw new TypeError(V("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Y(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),Y(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}qe(lr,"isPrimitive",De),qe(lr,"isObject",ur),qe(cr,"BYTES_PER_ELEMENT",8),qe(cr.prototype,"BYTES_PER_ELEMENT",8),qe(cr.prototype,"byteLength",16),qe(cr.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),qe(cr.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t}));var fr="function"==typeof Object.defineProperty?Object.defineProperty:null,pr=Object.defineProperty,yr=Object.prototype,sr=yr.toString,br=yr.__defineGetter__,mr=yr.__defineSetter__,hr=yr.__lookupGetter__,dr=yr.__lookupSetter__,gr=function(){try{return fr({},"x",{}),!0}catch(t){return!1}}()?pr:function(t,e,r){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===sr.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===sr.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(hr.call(t,e)||dr.call(t,e)?(n=t.__proto__,t.__proto__=yr,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&br&&br.call(t,e,r.get),a&&mr&&mr.call(t,e,r.set),t};function vr(t,e,r){gr(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function _r(t){return"number"==typeof t}var wr=$();function Er(){return wr&&"symbol"==typeof Symbol.toStringTag}var Sr=Object.prototype.toString,jr=Object.prototype.hasOwnProperty,Tr="function"==typeof Symbol?Symbol.toStringTag:"",Or=Er()?function(t){var e,r,n,o,i;if(null==t)return Sr.call(t);r=t[Tr],i=Tr,e=null!=(o=t)&&jr.call(o,i);try{t[Tr]=void 0}catch(e){return Sr.call(t)}return n=Sr.call(t),e?t[Tr]=r:delete t[Tr],n}:function(t){return Sr.call(t)},Nr=Number,Fr=Nr.prototype.toString,Ar=Er();function Pr(t){return"object"==typeof t&&(t instanceof Nr||(Ar?function(t){try{return Fr.call(t),!0}catch(t){return!1}}(t):"[object Number]"===Or(t)))}function Ir(t){return _r(t)||Pr(t)}function Vr(t,e){if(!(this instanceof Vr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!_r(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!_r(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return gr(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),gr(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}function kr(t){return t.re}function xr(t){return t.im}vr(Ir,"isPrimitive",_r),vr(Ir,"isObject",Pr),vr(Vr,"BYTES_PER_ELEMENT",8),vr(Vr.prototype,"BYTES_PER_ELEMENT",8),vr(Vr.prototype,"byteLength",16),vr(Vr.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),vr(Vr.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t}));var Mr="function"==typeof Math.fround?Math.fround:null,Cr=$();function Rr(){return Cr&&"symbol"==typeof Symbol.toStringTag}var Lr=Object.prototype.toString,Yr=Object.prototype.hasOwnProperty,Gr="function"==typeof Symbol?Symbol.toStringTag:"",Br=Rr()?function(t){var e,r,n,o,i;if(null==t)return Lr.call(t);r=t[Gr],i=Gr,e=null!=(o=t)&&Yr.call(o,i);try{t[Gr]=void 0}catch(e){return Lr.call(t)}return n=Lr.call(t),e?t[Gr]=r:delete t[Gr],n}:function(t){return Lr.call(t)},$r="function"==typeof Float32Array,Jr=Number.POSITIVE_INFINITY,Zr="function"==typeof Float32Array?Float32Array:null,Wr="function"==typeof Float32Array?Float32Array:void 0,Ur=new(function(){var t,e,r;if("function"!=typeof Zr)return!1;try{e=new Zr([1,3.14,-3.14,5e40]),r=e,t=($r&&r instanceof Float32Array||"[object Float32Array]"===Br(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Jr}catch(e){t=!1}return t}()?Wr:function(){throw new Error("not implemented")})(1),Xr="function"==typeof Mr?Mr:function(t){return Ur[0]=t,Ur[0]},zr="function"==typeof Object.defineProperty?Object.defineProperty:null,qr=Object.defineProperty,Dr=Object.prototype,Hr=Dr.toString,Kr=Dr.__defineGetter__,Qr=Dr.__defineSetter__,tn=Dr.__lookupGetter__,en=Dr.__lookupSetter__,rn=function(){try{return zr({},"x",{}),!0}catch(t){return!1}}()?qr:function(t,e,r){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===Hr.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===Hr.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(tn.call(t,e)||en.call(t,e)?(n=t.__proto__,t.__proto__=Dr,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Kr&&Kr.call(t,e,r.get),a&&Qr&&Qr.call(t,e,r.set),t};function nn(t,e,r){rn(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function on(t){return"number"==typeof t}var an=Number,un=an.prototype.toString,ln=Rr();function cn(t){return"object"==typeof t&&(t instanceof an||(ln?function(t){try{return un.call(t),!0}catch(t){return!1}}(t):"[object Number]"===Br(t)))}function fn(t){return on(t)||cn(t)}function pn(t,e){if(!(this instanceof pn))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!on(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!on(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return rn(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Xr(t)}),rn(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Xr(e)}),this}function yn(t){return t.re}function sn(t){return t.im}nn(fn,"isPrimitive",on),nn(fn,"isObject",cn),nn(pn,"BYTES_PER_ELEMENT",4),nn(pn.prototype,"BYTES_PER_ELEMENT",4),nn(pn.prototype,"byteLength",8),nn(pn.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),nn(pn.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t}));var bn="function"==typeof Math.imul?Math.imul:null,mn="function"==typeof bn?bn:function(t,e){var r,n;return((r=(65535&(t|=0))>>>0)*(n=(65535&(e|=0))>>>0)>>>0)+((t>>>16>>>0)*n+r*(e>>>16>>>0)<<16>>>0)|0};function hn(t){return t!=t}var dn=65535;function gn(t,e,r,n,o){var i,a,u,l,c,f,p,y;return hn(t)||hn(e)?(r[o]=NaN,r[o+n]=NaN,r):(a=((p=(c=((t|=0)&dn)>>>0)*(f=((e|=0)&dn)>>>0)>>>0)&dn)>>>0,i=(p=(u=t>>16|0)*f+(y=p>>>16>>>0)>>>0)>>16>>>0,y=(p=c*(l=e>>16|0)+((p&dn)>>>0)>>>0)>>16>>>0,r[o]=u*l+i+y|0,r[o+n]=(p<<16)+a|0,r)}function vn(t,e){return gn(t,e,[0,0],1,0)}qe(vn,"assign",gn);var _n="function"==typeof Math.fround?Math.fround:null,wn=$(),En=Object.prototype.toString,Sn=Object.prototype.hasOwnProperty,jn="function"==typeof Symbol?Symbol.toStringTag:"",Tn=wn&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n,o,i;if(null==t)return En.call(t);r=t[jn],i=jn,e=null!=(o=t)&&Sn.call(o,i);try{t[jn]=void 0}catch(e){return En.call(t)}return n=En.call(t),e?t[jn]=r:delete t[jn],n}:function(t){return En.call(t)},On="function"==typeof Float32Array,Nn=Number.POSITIVE_INFINITY,Fn="function"==typeof Float32Array?Float32Array:null,An="function"==typeof Float32Array?Float32Array:void 0,Pn=new(function(){var t,e,r;if("function"!=typeof Fn)return!1;try{e=new Fn([1,3.14,-3.14,5e40]),r=e,t=(On&&r instanceof Float32Array||"[object Float32Array]"===Tn(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Nn}catch(e){t=!1}return t}()?An:function(){throw new Error("not implemented")})(1),In="function"==typeof _n?_n:function(t){return Pn[0]=t,Pn[0]},Vn="function"==typeof Math.fround?Math.fround:null,kn="function"==typeof Float32Array,xn=Number.POSITIVE_INFINITY,Mn="function"==typeof Float32Array?Float32Array:null,Cn="function"==typeof Float32Array?Float32Array:void 0,Rn=new(function(){var t,e,r;if("function"!=typeof Mn)return!1;try{e=new Mn([1,3.14,-3.14,5e40]),r=e,t=(kn&&r instanceof Float32Array||"[object Float32Array]"===nr(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===xn}catch(e){t=!1}return t}()?Cn:function(){throw new Error("not implemented")})(1),Ln="function"==typeof Vn?Vn:function(t){return Rn[0]=t,Rn[0]},Yn=65535;function Gn(t,e,r,n,o){var i,a,u,l,c,f,p,y;return hn(t)||hn(e)?(r[o]=NaN,r[o+n]=NaN,r):(a=((p=(c=((t>>>=0)&Yn)>>>0)*(f=((e>>>=0)&Yn)>>>0)>>>0)&Yn)>>>0,i=(p=(u=t>>>16>>>0)*f+(y=p>>>16>>>0)>>>0)>>>16>>>0,y=(p=c*(l=e>>>16>>>0)+((p&Yn)>>>0)>>>0)>>>16>>>0,r[o]=u*l+i+y>>>0,r[o+n]=(p<<16)+a>>>0,r)}function Bn(t,e){return Gn(t,e,[0,0],1,0)}qe(Bn,"assign",Gn);var $n={};return G($n,"add",(function(t,e){return t+e})),G($n,"addf",(function(t,e){return Q(Q(t)+Q(e))})),G($n,"cadd",(function(t,e){return new Et(St(t)+St(e),jt(t)+jt(e))})),G($n,"caddf",(function(t,e){return new te(Rt(ee(t)+ee(e)),Rt(re(t)+re(e)))})),G($n,"cdiv",(function(t,e,r,n,o){return 4===arguments.length?be([0,0],t,e,r,n):be(t,e,r,n,o)})),G($n,"cmul",(function(t,e){var r=me(t),n=me(e),o=he(t),i=he(e),a=r*n-o*i,u=r*i+o*n;return new t.constructor(a,u)})),G($n,"cmulf",(function(t,e){var r=Xe(t),n=Xe(e),o=ze(t),i=ze(e),a=Ae(r*n)-Ae(o*i),u=Ae(r*i)+Ae(o*n);return new Ue(Ae(a),Ae(u))})),G($n,"cneg",(function(t){return new cr(-function(t){return t.re}(t),-function(t){return t.im}(t))})),G($n,"csub",(function(t,e){return new Vr(kr(t)-kr(e),xr(t)-xr(e))})),G($n,"csubf",(function(t,e){var r=yn(t),n=yn(e),o=sn(t),i=sn(e);return new pn(Xr(r-n),Xr(o-i))})),G($n,"imul",mn),G($n,"imuldw",vn),G($n,"mul",(function(t,e){return t*e})),G($n,"mulf",(function(t,e){return In(In(t)*In(e))})),G($n,"sub",(function(t,e){return t-e})),G($n,"subf",(function(t,e){return Ln(Ln(t)-Ln(e))})),G($n,"umul",(function(t,e){var r,n;return((r=(65535&(t>>>=0))>>>0)*(n=(65535&(e>>>=0))>>>0)>>>0)+((t>>>16>>>0)*n+r*(e>>>16>>>0)<<16>>>0)>>>0})),G($n,"umuldw",Bn),$n},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).ns=e();
//# sourceMappingURL=index.js.map
