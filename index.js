// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return t({},"x",{}),!0}catch(t){return!1}},n=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,a=e.__lookupGetter__,c=e.__lookupSetter__,l=n,f=function(t,r,n){var l,f,p,m;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((f="value"in n)&&(a.call(t,r)||c.call(t,r)?(l=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=l):t[r]=n.value),p="get"in n,m="set"in n,f&&(p||m))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,n.get),m&&u&&u.call(t,r,n.set),t},p=r()?l:f,m=p,y=function(t,r,n){m(t,r,{configurable:!1,enumerable:!0,writable:!1,value:n})},b=function(t,r){return t+r},s="function"==typeof Math.fround?Math.fround:null,v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),h=function(){return v&&"symbol"==typeof Symbol.toStringTag},d=Object.prototype.toString,w=d,_=function(t){return w.call(t)},g=Object.prototype.hasOwnProperty,E=function(t,r){return null!=t&&g.call(t,r)},T="function"==typeof Symbol?Symbol.toStringTag:"",S=E,N=T,j=d,P=_,I=function(t){var r,n,e;if(null==t)return j.call(t);n=t[N],r=S(t,N);try{t[N]=void 0}catch(r){return j.call(t)}return e=j.call(t),r?t[N]=n:delete t[N],e},O=h()?I:P,A=O,F="function"==typeof Float32Array,M=function(t){return F&&t instanceof Float32Array||"[object Float32Array]"===A(t)},V=Number.POSITIVE_INFINITY,L="function"==typeof Float32Array?Float32Array:null,R=M,Y=V,x=L,C="function"==typeof Float32Array?Float32Array:void 0,k=function(){throw new Error("not implemented")},B=new(function(){var t,r;if("function"!=typeof x)return!1;try{r=new x([1,3.14,-3.14,5e40]),t=R(r)&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Y}catch(r){t=!1}return t}()?C:k)(1),G=s;"function"!=typeof G&&(G=function(t){return B[0]=t,B[0]});var J=G,q=J,z=function(t,r){return q(q(t)+q(r))},D=p,H=function(t,r,n){D(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})},K=function(t){return"number"==typeof t},Q=Number,U=Q.prototype.toString,W=O,X=Q,Z=function(t){try{return U.call(t),!0}catch(t){return!1}},$=h(),tt=function(t){return"object"==typeof t&&(t instanceof X||($?Z(t):"[object Number]"===W(t)))},rt=K,nt=tt,et=H,ot=function(t){return rt(t)||nt(t)},it=tt;et(ot,"isPrimitive",K),et(ot,"isObject",it);var ut=ot,at=ut.isPrimitive,ct=p,lt=H,ft=function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"},pt=function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t};function mt(t,r){if(!(this instanceof mt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!at(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!at(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return ct(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),ct(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}lt(mt,"BYTES_PER_ELEMENT",8),lt(mt.prototype,"BYTES_PER_ELEMENT",8),lt(mt.prototype,"byteLength",16),lt(mt.prototype,"toString",ft),lt(mt.prototype,"toJSON",pt);var yt=function(t){return t.re},bt=function(t){return t.im},st=mt,vt=yt,ht=bt,dt=function(t,r){var n=vt(t)+vt(r),e=ht(t)+ht(r);return new st(n,e)},wt=ut.isPrimitive,_t=p,gt=H,Et=J,Tt=function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"},St=function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t};function Nt(t,r){if(!(this instanceof Nt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!wt(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!wt(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return _t(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Et(t)}),_t(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Et(r)}),this}gt(Nt,"BYTES_PER_ELEMENT",4),gt(Nt.prototype,"BYTES_PER_ELEMENT",4),gt(Nt.prototype,"byteLength",8),gt(Nt.prototype,"toString",Tt),gt(Nt.prototype,"toJSON",St);var jt=J,Pt=Nt,It=function(t){return t.re},Ot=function(t){return t.im},At=function(t,r){var n=jt(It(t)+It(r)),e=jt(Ot(t)+Ot(r));return new Pt(n,e)},Ft=function(t){return Math.abs(t)},Mt=V,Vt=function(t){return 0===t&&1/t===Mt},Lt=function(t){return t!=t},Rt=Q.NEGATIVE_INFINITY,Yt=Vt,xt=Lt,Ct=Rt,kt=V,Bt=function(t,r){var n,e,o,i;if(2===(n=arguments.length))return xt(t)||xt(r)?NaN:t===kt||r===kt?kt:t===r&&0===t?Yt(t)?t:r:t>r?t:r;for(e=Ct,i=0;i<n;i++){if(xt(o=arguments[i])||o===kt)return o;(o>e||o===e&&0===o&&Yt(o))&&(e=o)}return e},Gt=function(t,r,n,e,o,i){var u;return 0===o?(t+e*(r/n))*i:0==(u=r*o)?t*i+r*i*o:(t+u)*i},Jt=Ft,qt=Bt,zt=2220446049250313e-31,Dt=function(t,r,n,e,o){var i,u;u=1/(e+o*(i=o/e)),t[0]=Gt(r,n,e,o,i,u),t[1]=Gt(n,-r,e,o,i,u)},Ht=8988465674311579e292,Kt=2004168360008973e-307,Qt=2/(zt*zt),Ut=function(t,r,n,e,o){var i,u,a;return i=qt(Jt(r),Jt(n)),u=qt(Jt(e),Jt(o)),a=1,i>=Ht?(r*=.5,n*=.5,a*=2):i<=Kt&&(r*=Qt,n*=Qt,a/=Qt),u>=Ht?(e*=.5,o*=.5,a*=.5):u<=Kt&&(e*=Qt,o*=Qt,a*=Qt),Jt(o)<=Jt(e)?Dt(t,r,n,e,o):(Dt(t,n,r,o,e),t[1]*=-1),t[0]*=a,t[1]*=a,t},Wt=function(t,r,n,e,o){return 4===arguments.length?Ut([0,0],t,r,n,e):Ut(t,r,n,e,o)},Xt=Wt,Zt=yt,$t=bt,tr=function(t,r){var n=Zt(t),e=Zt(r),o=$t(t),i=$t(r),u=n*e-o*i,a=n*i+o*e;return new t.constructor(u,a)},rr=J,nr=yt,er=bt,or=function(t,r){var n=nr(t),e=nr(r),o=er(t),i=er(r),u=rr(n*e)-rr(o*i),a=rr(n*i)+rr(o*e);return new t.constructor(rr(u),rr(a))},ir=function(t,r,n){return t[0]=-r,t[1]=-n,t},ur=function(t,r,n){return 2===arguments.length?ir([0,0],t,r):ir(t,r,n)},ar=ur,cr=yt,lr=bt,fr=function(t,r){var n=cr(t)-cr(r),e=lr(t)-lr(r);return new t.constructor(n,e)},pr=yt,mr=bt,yr=function(t,r){var n=pr(t)-pr(r),e=mr(t)-mr(r);return new t.constructor(n,e)},br="function"==typeof Math.imul?Math.imul:null,sr=br;"function"!=typeof sr&&(sr=function(t,r){var n,e;return((n=(65535&(t|=0))>>>0)*(e=(65535&(r|=0))>>>0)>>>0)+((t>>>16>>>0)*e+n*(r>>>16>>>0)<<16>>>0)|0});var vr=sr,hr=Lt,dr=65535,wr=function(){var t,r,n,e,o,i,u,a,c,l,f;return 3===arguments.length?(t=arguments[0],a=arguments[1],c=arguments[2]):(t=[0,0],a=arguments[0],c=arguments[1]),hr(a)||hr(c)?NaN:(n=((l=(i=((a|=0)&dr)>>>0)*(u=((c|=0)&dr)>>>0)>>>0)&dr)>>>0,r=(l=(e=a>>16|0)*u+(f=l>>>16>>>0)>>>0)>>16>>>0,f=(l=i*(o=c>>16|0)+((l&dr)>>>0)>>>0)>>16>>>0,t[0]=e*o+r+f|0,t[1]=(l<<16)+n|0,t)},_r=wr,gr=function(t,r){return t*r},Er=J,Tr=function(t,r){return Er(Er(t)*Er(r))},Sr=function(t,r){return t-r},Nr=J,jr=function(t,r){return Nr(Nr(t)-Nr(r))},Pr=function(t,r){var n,e;return((n=(65535&(t>>>=0))>>>0)*(e=(65535&(r>>>=0))>>>0)>>>0)+((t>>>16>>>0)*e+n*(r>>>16>>>0)<<16>>>0)>>>0},Ir=Lt,Or=65535,Ar=function(){var t,r,n,e,o,i,u,a,c,l,f;return 3===arguments.length?(t=arguments[0],a=arguments[1],c=arguments[2]):(t=[0,0],a=arguments[0],c=arguments[1]),Ir(a)||Ir(c)?NaN:(n=((l=(i=((a>>>=0)&Or)>>>0)*(u=((c>>>=0)&Or)>>>0)>>>0)&Or)>>>0,r=(l=(e=a>>>16>>>0)*u+(f=l>>>16>>>0)>>>0)>>>16>>>0,f=(l=i*(o=c>>>16>>>0)+((l&Or)>>>0)>>>0)>>>16>>>0,t[0]=e*o+r+f>>>0,t[1]=(l<<16)+n>>>0,t)},Fr=Ar,Mr={};return y(Mr,"add",b),y(Mr,"addf",z),y(Mr,"cadd",dt),y(Mr,"caddf",At),y(Mr,"cdiv",Xt),y(Mr,"cmul",tr),y(Mr,"cmulf",or),y(Mr,"cneg",ar),y(Mr,"csub",fr),y(Mr,"csubf",yr),y(Mr,"imul",vr),y(Mr,"imuldw",_r),y(Mr,"mul",gr),y(Mr,"mulf",Tr),y(Mr,"sub",Sr),y(Mr,"subf",jr),y(Mr,"umul",Pr),y(Mr,"umuldw",Fr),Mr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).ns=r();
//# sourceMappingURL=index.js.map
