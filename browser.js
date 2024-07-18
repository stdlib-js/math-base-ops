// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,m=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":c(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,y,"$1e"),n=f.call(n,b,"e"),n=f.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,h,"e-0$1"),e.alternate&&(n=f.call(n,m,"$1."),n=f.call(n,d,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):l.call(n)}function v(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var E=String.fromCharCode,_=isNaN,T=Array.isArray;function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function N(e){var r,t,n,o,a,c,l,s,f,p,h,m,d;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",l=1,s=0;s<e.length;s++)if("string"==typeof(n=e[s]))c+=n;else{if(r=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,_(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,h=n.width,m=n.padRight,d=void 0,(d=h-p.length)<0?p:p=m?p+v(d):v(d)+p)),c+=n.arg||"",l+=1}return c}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,n,i;for(t=[],i=0,n=x.exec(e);n;)(r=e.slice(i,x.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),i=x.lastIndex,n=x.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function R(e){var r,t;if("string"!=typeof e)throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return N.apply(null,r)}var j=Object.prototype,F=j.toString,I=j.__defineGetter__,P=j.__defineSetter__,C=j.__lookupGetter__,L=j.__lookupSetter__,A=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(e,r)||L.call(e,r)?(n=e.__proto__,e.__proto__=j,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&I&&I.call(e,r,t.get),a&&P&&P.call(e,r,t.set),e};function M(e,r,t){A(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var O="function"==typeof Math.fround?Math.fround:null,$="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return $&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString,Z=Object.prototype.hasOwnProperty,G="function"==typeof Symbol?Symbol:void 0,J="function"==typeof G?G.toStringTag:"",W=Y()?function(e){var r,t,n,i,o;if(null==e)return B.call(e);t=e[J],o=J,r=null!=(i=e)&&Z.call(i,o);try{e[J]=void 0}catch(r){return B.call(e)}return n=B.call(e),r?e[J]=t:delete e[J],n}:function(e){return B.call(e)},U="function"==typeof Float32Array,X=Number.POSITIVE_INFINITY,z="function"==typeof Float32Array?Float32Array:null,q="function"==typeof Float32Array?Float32Array:void 0,D=new(function(){var e,r,t;if("function"!=typeof z)return!1;try{r=new z([1,3.14,-3.14,5e40]),t=r,e=(U&&t instanceof Float32Array||"[object Float32Array]"===W(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===X}catch(r){e=!1}return e}()?q:function(){throw new Error("not implemented")})(1),H="function"==typeof O?O:function(e){return D[0]=e,D[0]};function K(e,r,t){A(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Q(e){return"number"==typeof e}var ee=Number,re=ee.prototype.toString,te=Y();function ne(e){return"object"==typeof e&&(e instanceof ee||(te?function(e){try{return re.call(e),!0}catch(e){return!1}}(e):"[object Number]"===W(e)))}function ie(e){return Q(e)||ne(e)}function oe(e,r){if(!(this instanceof oe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Q(e))throw new TypeError(R("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Q(r))throw new TypeError(R("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return A(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:H(e)}),A(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:H(r)}),this}function ae(e){return e.re}function ue(e){return e.im}function ce(e,r){if(!(this instanceof ce))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Q(e))throw new TypeError(R("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Q(r))throw new TypeError(R("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return A(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),A(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}function le(e){return e.re}function se(e){return e.im}function fe(e){return Math.abs(e)}function pe(e){return e!=e}function he(e,r){return pe(e)||pe(r)?NaN:e===X||r===X?X:e===r&&0===e?function(e){return 0===e&&1/e===X}(e)?e:r:e>r?e:r}function me(e){return e.re}function de(e){return e.im}function ge(e,r){if(!(this instanceof ge))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Q(e))throw new TypeError(R("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Q(r))throw new TypeError(R("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return A(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),A(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}function be(e,r,t,n,i,o){var a;return 0===i?(e+n*(r/t))*o:0==(a=r*i)?e*o+r*o*i:(e+a)*o}function ye(e,r,t,n){var i,o,a;return a=1/(t+n*(o=n/t)),(i=[0,0])[0]=be(e,r,t,n,o,a),i[1]=be(r,-e,t,n,o,a),i}K(ie,"isPrimitive",Q),K(ie,"isObject",ne),K(oe,"BYTES_PER_ELEMENT",4),K(oe.prototype,"BYTES_PER_ELEMENT",4),K(oe.prototype,"byteLength",8),K(oe.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),K(oe.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e})),K(ce,"BYTES_PER_ELEMENT",8),K(ce.prototype,"BYTES_PER_ELEMENT",8),K(ce.prototype,"byteLength",16),K(ce.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),K(ce.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e})),K(ge,"BYTES_PER_ELEMENT",8),K(ge.prototype,"BYTES_PER_ELEMENT",8),K(ge.prototype,"byteLength",16),K(ge.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),K(ge.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var we=8988465674311579e292,ve=2004168360008973e-307,Ee=2/4930380657631324e-47;function _e(e,r){if(!(this instanceof _e))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Q(e))throw new TypeError(R("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Q(r))throw new TypeError(R("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return A(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:H(e)}),A(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:H(r)}),this}function Te(e){return e.re}function Se(e){return e.im}K(_e,"BYTES_PER_ELEMENT",4),K(_e.prototype,"BYTES_PER_ELEMENT",4),K(_e.prototype,"byteLength",8),K(_e.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),K(_e.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Ne="function"==typeof Math.imul?Math.imul:null,xe="function"==typeof Ne?Ne:function(e,r){var t,n;return((t=(65535&(e|=0))>>>0)*(n=(65535&(r|=0))>>>0)>>>0)+((e>>>16>>>0)*n+t*(r>>>16>>>0)<<16>>>0)|0},ke=65535;function Ve(e,r,t,n,i){var o,a,u,c,l,s,f,p;return pe(e)||pe(r)?(t[i]=NaN,t[i+n]=NaN,t):(a=((f=(l=((e|=0)&ke)>>>0)*(s=((r|=0)&ke)>>>0)>>>0)&ke)>>>0,o=(f=(u=e>>16|0)*s+(p=f>>>16>>>0)>>>0)>>16>>>0,p=(f=l*(c=r>>16|0)+((f&ke)>>>0)>>>0)>>16>>>0,t[i]=u*c+o+p|0,t[i+n]=(f<<16)+a|0,t)}function Re(e,r){return Ve(e,r,[0,0],1,0)}K(Re,"assign",Ve);var je=65535;function Fe(e,r,t,n,i){var o,a,u,c,l,s,f,p;return pe(e)||pe(r)?(t[i]=NaN,t[i+n]=NaN,t):(a=((f=(l=((e>>>=0)&je)>>>0)*(s=((r>>>=0)&je)>>>0)>>>0)&je)>>>0,o=(f=(u=e>>>16>>>0)*s+(p=f>>>16>>>0)>>>0)>>>16>>>0,p=(f=l*(c=r>>>16>>>0)+((f&je)>>>0)>>>0)>>>16>>>0,t[i]=u*c+o+p>>>0,t[i+n]=(f<<16)+a>>>0,t)}function Ie(e,r){return Fe(e,r,[0,0],1,0)}K(Ie,"assign",Fe);var Pe={};return M(Pe,"caddf",(function(e,r){return new oe(H(ae(e)+ae(r)),H(ue(e)+ue(r)))})),M(Pe,"cadd",(function(e,r){return new ce(le(e)+le(r),se(e)+se(r))})),M(Pe,"add",(function(e,r){return e+r})),M(Pe,"add3",(function(e,r,t){return e+r+t})),M(Pe,"add4",(function(e,r,t,n){return e+r+t+n})),M(Pe,"add5",(function(e,r,t,n,i){return e+r+t+n+i})),M(Pe,"addf",(function(e,r){return H(H(e)+H(r))})),M(Pe,"cdiv",(function(e,r){var t,n,i,o,a,u,c,l;return t=me(e),n=me(r),i=de(e),o=de(r),u=he(fe(t),fe(i)),c=he(fe(n),fe(o)),l=1,u>=we?(t*=.5,i*=.5,l*=2):u<=ve&&(t*=Ee,i*=Ee,l/=Ee),c>=we?(n*=.5,o*=.5,l*=.5):c<=ve&&(n*=Ee,o*=Ee,l*=Ee),fe(o)<=fe(n)?a=ye(t,i,n,o):(a=ye(i,t,o,n))[1]*=-1,a[0]*=l,a[1]*=l,new ge(a[0],a[1])})),M(Pe,"cmul",(function(e,r){var t=me(e),n=me(r),i=de(e),o=de(r);return new ge(t*n-i*o,t*o+i*n)})),M(Pe,"cmulf",(function(e,r){var t=Te(e),n=Te(r),i=Se(e),o=Se(r),a=H(t*n)-H(i*o),u=H(t*o)+H(i*n);return new _e(H(a),H(u))})),M(Pe,"cneg",(function(e){return new ge(-me(e),-de(e))})),M(Pe,"cnegf",(function(e){return new _e(-Te(e),-Se(e))})),M(Pe,"csub",(function(e,r){return new ge(me(e)-me(r),de(e)-de(r))})),M(Pe,"csubf",(function(e,r){return new _e(H(Te(e)-Te(r)),H(Se(e)-Se(r)))})),M(Pe,"div",(function(e,r){return e/r})),M(Pe,"divf",(function(e,r){return H(H(e)/H(r))})),M(Pe,"imul",xe),M(Pe,"imuldw",Re),M(Pe,"mul",(function(e,r){return e*r})),M(Pe,"mulf",(function(e,r){return H(H(e)*H(r))})),M(Pe,"sub",(function(e,r){return e-r})),M(Pe,"subf",(function(e,r){return H(H(e)-H(r))})),M(Pe,"umul",(function(e,r){var t,n;return((t=(65535&(e>>>=0))>>>0)*(n=(65535&(r>>>=0))>>>0)>>>0)+((e>>>16>>>0)*n+t*(r>>>16>>>0)<<16>>>0)>>>0})),M(Pe,"umuldw",Ie),Pe},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r();
//# sourceMappingURL=browser.js.map
