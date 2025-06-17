(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))d(l);new MutationObserver(l=>{for(const p of l)if(p.type==="childList")for(const b of p.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&d(b)}).observe(document,{childList:!0,subtree:!0});function c(l){const p={};return l.integrity&&(p.integrity=l.integrity),l.referrerPolicy&&(p.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?p.credentials="include":l.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function d(l){if(l.ep)return;l.ep=!0;const p=c(l);fetch(l.href,p)}})();function O2(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Tc={exports:{}},ps={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e2;function G4(){if(e2)return ps;e2=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function c(d,l,p){var b=null;if(p!==void 0&&(b=""+p),l.key!==void 0&&(b=""+l.key),"key"in l){p={};for(var y in l)y!=="key"&&(p[y]=l[y])}else p=l;return l=p.ref,{$$typeof:i,type:d,key:b,ref:l!==void 0?l:null,props:p}}return ps.Fragment=t,ps.jsx=c,ps.jsxs=c,ps}var a2;function V4(){return a2||(a2=1,Tc.exports=G4()),Tc.exports}var g=V4(),jc={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r2;function k4(){if(r2)return fe;r2=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),b=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),_=Symbol.iterator;function A(q){return q===null||typeof q!="object"?null:(q=_&&q[_]||q["@@iterator"],typeof q=="function"?q:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,Y={};function G(q,D,I){this.props=q,this.context=D,this.refs=Y,this.updater=I||k}G.prototype.isReactComponent={},G.prototype.setState=function(q,D){if(typeof q!="object"&&typeof q!="function"&&q!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,q,D,"setState")},G.prototype.forceUpdate=function(q){this.updater.enqueueForceUpdate(this,q,"forceUpdate")};function O(){}O.prototype=G.prototype;function B(q,D,I){this.props=q,this.context=D,this.refs=Y,this.updater=I||k}var Z=B.prototype=new O;Z.constructor=B,w(Z,G.prototype),Z.isPureReactComponent=!0;var J=Array.isArray,K={H:null,A:null,T:null,S:null,V:null},ae=Object.prototype.hasOwnProperty;function F(q,D,I,H,ne,ce){return I=ce.ref,{$$typeof:i,type:q,key:D,ref:I!==void 0?I:null,props:ce}}function j(q,D){return F(q.type,D,void 0,void 0,void 0,q.props)}function T(q){return typeof q=="object"&&q!==null&&q.$$typeof===i}function L(q){var D={"=":"=0",":":"=2"};return"$"+q.replace(/[=:]/g,function(I){return D[I]})}var W=/\/+/g;function $(q,D){return typeof q=="object"&&q!==null&&q.key!=null?L(""+q.key):D.toString(36)}function le(){}function Me(q){switch(q.status){case"fulfilled":return q.value;case"rejected":throw q.reason;default:switch(typeof q.status=="string"?q.then(le,le):(q.status="pending",q.then(function(D){q.status==="pending"&&(q.status="fulfilled",q.value=D)},function(D){q.status==="pending"&&(q.status="rejected",q.reason=D)})),q.status){case"fulfilled":return q.value;case"rejected":throw q.reason}}throw q}function qe(q,D,I,H,ne){var ce=typeof q;(ce==="undefined"||ce==="boolean")&&(q=null);var se=!1;if(q===null)se=!0;else switch(ce){case"bigint":case"string":case"number":se=!0;break;case"object":switch(q.$$typeof){case i:case t:se=!0;break;case h:return se=q._init,qe(se(q._payload),D,I,H,ne)}}if(se)return ne=ne(q),se=H===""?"."+$(q,0):H,J(ne)?(I="",se!=null&&(I=se.replace(W,"$&/")+"/"),qe(ne,D,I,"",function(ve){return ve})):ne!=null&&(T(ne)&&(ne=j(ne,I+(ne.key==null||q&&q.key===ne.key?"":(""+ne.key).replace(W,"$&/")+"/")+se)),D.push(ne)),1;se=0;var Ge=H===""?".":H+":";if(J(q))for(var oe=0;oe<q.length;oe++)H=q[oe],ce=Ge+$(H,oe),se+=qe(H,D,I,ce,ne);else if(oe=A(q),typeof oe=="function")for(q=oe.call(q),oe=0;!(H=q.next()).done;)H=H.value,ce=Ge+$(H,oe++),se+=qe(H,D,I,ce,ne);else if(ce==="object"){if(typeof q.then=="function")return qe(Me(q),D,I,H,ne);throw D=String(q),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(q).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return se}function N(q,D,I){if(q==null)return q;var H=[],ne=0;return qe(q,H,"","",function(ce){return D.call(I,ce,ne++)}),H}function X(q){if(q._status===-1){var D=q._result;D=D(),D.then(function(I){(q._status===0||q._status===-1)&&(q._status=1,q._result=I)},function(I){(q._status===0||q._status===-1)&&(q._status=2,q._result=I)}),q._status===-1&&(q._status=0,q._result=D)}if(q._status===1)return q._result.default;throw q._result}var ee=typeof reportError=="function"?reportError:function(q){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof q=="object"&&q!==null&&typeof q.message=="string"?String(q.message):String(q),error:q});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",q);return}console.error(q)};function re(){}return fe.Children={map:N,forEach:function(q,D,I){N(q,function(){D.apply(this,arguments)},I)},count:function(q){var D=0;return N(q,function(){D++}),D},toArray:function(q){return N(q,function(D){return D})||[]},only:function(q){if(!T(q))throw Error("React.Children.only expected to receive a single React element child.");return q}},fe.Component=G,fe.Fragment=c,fe.Profiler=l,fe.PureComponent=B,fe.StrictMode=d,fe.Suspense=v,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,fe.__COMPILER_RUNTIME={__proto__:null,c:function(q){return K.H.useMemoCache(q)}},fe.cache=function(q){return function(){return q.apply(null,arguments)}},fe.cloneElement=function(q,D,I){if(q==null)throw Error("The argument must be a React element, but you passed "+q+".");var H=w({},q.props),ne=q.key,ce=void 0;if(D!=null)for(se in D.ref!==void 0&&(ce=void 0),D.key!==void 0&&(ne=""+D.key),D)!ae.call(D,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&D.ref===void 0||(H[se]=D[se]);var se=arguments.length-2;if(se===1)H.children=I;else if(1<se){for(var Ge=Array(se),oe=0;oe<se;oe++)Ge[oe]=arguments[oe+2];H.children=Ge}return F(q.type,ne,void 0,void 0,ce,H)},fe.createContext=function(q){return q={$$typeof:b,_currentValue:q,_currentValue2:q,_threadCount:0,Provider:null,Consumer:null},q.Provider=q,q.Consumer={$$typeof:p,_context:q},q},fe.createElement=function(q,D,I){var H,ne={},ce=null;if(D!=null)for(H in D.key!==void 0&&(ce=""+D.key),D)ae.call(D,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(ne[H]=D[H]);var se=arguments.length-2;if(se===1)ne.children=I;else if(1<se){for(var Ge=Array(se),oe=0;oe<se;oe++)Ge[oe]=arguments[oe+2];ne.children=Ge}if(q&&q.defaultProps)for(H in se=q.defaultProps,se)ne[H]===void 0&&(ne[H]=se[H]);return F(q,ce,void 0,void 0,null,ne)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(q){return{$$typeof:y,render:q}},fe.isValidElement=T,fe.lazy=function(q){return{$$typeof:h,_payload:{_status:-1,_result:q},_init:X}},fe.memo=function(q,D){return{$$typeof:m,type:q,compare:D===void 0?null:D}},fe.startTransition=function(q){var D=K.T,I={};K.T=I;try{var H=q(),ne=K.S;ne!==null&&ne(I,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(re,ee)}catch(ce){ee(ce)}finally{K.T=D}},fe.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},fe.use=function(q){return K.H.use(q)},fe.useActionState=function(q,D,I){return K.H.useActionState(q,D,I)},fe.useCallback=function(q,D){return K.H.useCallback(q,D)},fe.useContext=function(q){return K.H.useContext(q)},fe.useDebugValue=function(){},fe.useDeferredValue=function(q,D){return K.H.useDeferredValue(q,D)},fe.useEffect=function(q,D,I){var H=K.H;if(typeof I=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return H.useEffect(q,D)},fe.useId=function(){return K.H.useId()},fe.useImperativeHandle=function(q,D,I){return K.H.useImperativeHandle(q,D,I)},fe.useInsertionEffect=function(q,D){return K.H.useInsertionEffect(q,D)},fe.useLayoutEffect=function(q,D){return K.H.useLayoutEffect(q,D)},fe.useMemo=function(q,D){return K.H.useMemo(q,D)},fe.useOptimistic=function(q,D){return K.H.useOptimistic(q,D)},fe.useReducer=function(q,D,I){return K.H.useReducer(q,D,I)},fe.useRef=function(q){return K.H.useRef(q)},fe.useState=function(q){return K.H.useState(q)},fe.useSyncExternalStore=function(q,D,I){return K.H.useSyncExternalStore(q,D,I)},fe.useTransition=function(){return K.H.useTransition()},fe.version="19.1.0",fe}var n2;function Wo(){return n2||(n2=1,jc.exports=k4()),jc.exports}var C=Wo();const Ce=O2(C);var qc={exports:{}},ms={},xc={exports:{}},Ec={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i2;function Y4(){return i2||(i2=1,function(i){function t(N,X){var ee=N.length;N.push(X);e:for(;0<ee;){var re=ee-1>>>1,q=N[re];if(0<l(q,X))N[re]=X,N[ee]=q,ee=re;else break e}}function c(N){return N.length===0?null:N[0]}function d(N){if(N.length===0)return null;var X=N[0],ee=N.pop();if(ee!==X){N[0]=ee;e:for(var re=0,q=N.length,D=q>>>1;re<D;){var I=2*(re+1)-1,H=N[I],ne=I+1,ce=N[ne];if(0>l(H,ee))ne<q&&0>l(ce,H)?(N[re]=ce,N[ne]=ee,re=ne):(N[re]=H,N[I]=ee,re=I);else if(ne<q&&0>l(ce,ee))N[re]=ce,N[ne]=ee,re=ne;else break e}}return X}function l(N,X){var ee=N.sortIndex-X.sortIndex;return ee!==0?ee:N.id-X.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var b=Date,y=b.now();i.unstable_now=function(){return b.now()-y}}var v=[],m=[],h=1,_=null,A=3,k=!1,w=!1,Y=!1,G=!1,O=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function J(N){for(var X=c(m);X!==null;){if(X.callback===null)d(m);else if(X.startTime<=N)d(m),X.sortIndex=X.expirationTime,t(v,X);else break;X=c(m)}}function K(N){if(Y=!1,J(N),!w)if(c(v)!==null)w=!0,ae||(ae=!0,$());else{var X=c(m);X!==null&&qe(K,X.startTime-N)}}var ae=!1,F=-1,j=5,T=-1;function L(){return G?!0:!(i.unstable_now()-T<j)}function W(){if(G=!1,ae){var N=i.unstable_now();T=N;var X=!0;try{e:{w=!1,Y&&(Y=!1,B(F),F=-1),k=!0;var ee=A;try{a:{for(J(N),_=c(v);_!==null&&!(_.expirationTime>N&&L());){var re=_.callback;if(typeof re=="function"){_.callback=null,A=_.priorityLevel;var q=re(_.expirationTime<=N);if(N=i.unstable_now(),typeof q=="function"){_.callback=q,J(N),X=!0;break a}_===c(v)&&d(v),J(N)}else d(v);_=c(v)}if(_!==null)X=!0;else{var D=c(m);D!==null&&qe(K,D.startTime-N),X=!1}}break e}finally{_=null,A=ee,k=!1}X=void 0}}finally{X?$():ae=!1}}}var $;if(typeof Z=="function")$=function(){Z(W)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,Me=le.port2;le.port1.onmessage=W,$=function(){Me.postMessage(null)}}else $=function(){O(W,0)};function qe(N,X){F=O(function(){N(i.unstable_now())},X)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(N){N.callback=null},i.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<N?Math.floor(1e3/N):5},i.unstable_getCurrentPriorityLevel=function(){return A},i.unstable_next=function(N){switch(A){case 1:case 2:case 3:var X=3;break;default:X=A}var ee=A;A=X;try{return N()}finally{A=ee}},i.unstable_requestPaint=function(){G=!0},i.unstable_runWithPriority=function(N,X){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ee=A;A=N;try{return X()}finally{A=ee}},i.unstable_scheduleCallback=function(N,X,ee){var re=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?re+ee:re):ee=re,N){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ee+q,N={id:h++,callback:X,priorityLevel:N,startTime:ee,expirationTime:q,sortIndex:-1},ee>re?(N.sortIndex=ee,t(m,N),c(v)===null&&N===c(m)&&(Y?(B(F),F=-1):Y=!0,qe(K,ee-re))):(N.sortIndex=q,t(v,N),w||k||(w=!0,ae||(ae=!0,$()))),N},i.unstable_shouldYield=L,i.unstable_wrapCallback=function(N){var X=A;return function(){var ee=A;A=X;try{return N.apply(this,arguments)}finally{A=ee}}}}(Ec)),Ec}var s2;function X4(){return s2||(s2=1,xc.exports=Y4()),xc.exports}var Cc={exports:{}},ga={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o2;function Q4(){if(o2)return ga;o2=1;var i=Wo();function t(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var h=2;h<arguments.length;h++)m+="&args[]="+encodeURIComponent(arguments[h])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var d={d:{f:c,r:function(){throw Error(t(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},l=Symbol.for("react.portal");function p(v,m,h){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:v,containerInfo:m,implementation:h}}var b=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ga.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,ga.createPortal=function(v,m){var h=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return p(v,m,null,h)},ga.flushSync=function(v){var m=b.T,h=d.p;try{if(b.T=null,d.p=2,v)return v()}finally{b.T=m,d.p=h,d.d.f()}},ga.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,d.d.C(v,m))},ga.prefetchDNS=function(v){typeof v=="string"&&d.d.D(v)},ga.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var h=m.as,_=y(h,m.crossOrigin),A=typeof m.integrity=="string"?m.integrity:void 0,k=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;h==="style"?d.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:A,fetchPriority:k}):h==="script"&&d.d.X(v,{crossOrigin:_,integrity:A,fetchPriority:k,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ga.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var h=y(m.as,m.crossOrigin);d.d.M(v,{crossOrigin:h,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&d.d.M(v)},ga.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var h=m.as,_=y(h,m.crossOrigin);d.d.L(v,h,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ga.preloadModule=function(v,m){if(typeof v=="string")if(m){var h=y(m.as,m.crossOrigin);d.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:h,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else d.d.m(v)},ga.requestFormReset=function(v){d.d.r(v)},ga.unstable_batchedUpdates=function(v,m){return v(m)},ga.useFormState=function(v,m,h){return b.H.useFormState(v,m,h)},ga.useFormStatus=function(){return b.H.useHostTransitionStatus()},ga.version="19.1.0",ga}var t2;function Z4(){if(t2)return Cc.exports;t2=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Cc.exports=Q4(),Cc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c2;function K4(){if(c2)return ms;c2=1;var i=X4(),t=Wo(),c=Z4();function d(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var a=e,r=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(r=a.return),e=a.return;while(e)}return a.tag===3?r:null}function b(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function y(e){if(p(e)!==e)throw Error(d(188))}function v(e){var a=e.alternate;if(!a){if(a=p(e),a===null)throw Error(d(188));return a!==e?null:e}for(var r=e,n=a;;){var s=r.return;if(s===null)break;var o=s.alternate;if(o===null){if(n=s.return,n!==null){r=n;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===r)return y(s),e;if(o===n)return y(s),a;o=o.sibling}throw Error(d(188))}if(r.return!==n.return)r=s,n=o;else{for(var u=!1,f=s.child;f;){if(f===r){u=!0,r=s,n=o;break}if(f===n){u=!0,n=s,r=o;break}f=f.sibling}if(!u){for(f=o.child;f;){if(f===r){u=!0,r=o,n=s;break}if(f===n){u=!0,n=o,r=s;break}f=f.sibling}if(!u)throw Error(d(189))}}if(r.alternate!==n)throw Error(d(190))}if(r.tag!==3)throw Error(d(188));return r.stateNode.current===r?e:a}function m(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=m(e),a!==null)return a;e=e.sibling}return null}var h=Object.assign,_=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),W=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var le=Symbol.for("react.client.reference");function Me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case G:return"Profiler";case Y:return"StrictMode";case K:return"Suspense";case ae:return"SuspenseList";case T:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case Z:return(e.displayName||"Context")+".Provider";case B:return(e._context.displayName||"Context")+".Consumer";case J:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return a=e.displayName||null,a!==null?a:Me(e.type)||"Memo";case j:a=e._payload,e=e._init;try{return Me(e(a))}catch{}}return null}var qe=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},re=[],q=-1;function D(e){return{current:e}}function I(e){0>q||(e.current=re[q],re[q]=null,q--)}function H(e,a){q++,re[q]=e.current,e.current=a}var ne=D(null),ce=D(null),se=D(null),Ge=D(null);function oe(e,a){switch(H(se,a),H(ce,e),H(ne,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?z1(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=z1(a),e=M1(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}I(ne),H(ne,e)}function ve(){I(ne),I(ce),I(se)}function Ve(e){e.memoizedState!==null&&H(Ge,e);var a=ne.current,r=M1(a,e.type);a!==r&&(H(ce,e),H(ne,r))}function me(e){ce.current===e&&(I(ne),I(ce)),Ge.current===e&&(I(Ge),ts._currentValue=ee)}var Re=Object.prototype.hasOwnProperty,Ke=i.unstable_scheduleCallback,we=i.unstable_cancelCallback,ze=i.unstable_shouldYield,be=i.unstable_requestPaint,Le=i.unstable_now,xe=i.unstable_getCurrentPriorityLevel,He=i.unstable_ImmediatePriority,Je=i.unstable_UserBlockingPriority,Za=i.unstable_NormalPriority,Da=i.unstable_LowPriority,Ar=i.unstable_IdlePriority,ia=i.log,Oa=i.unstable_setDisableYieldValue,Ye=null,De=null;function sa(e){if(typeof ia=="function"&&Oa(e),De&&typeof De.setStrictMode=="function")try{De.setStrictMode(Ye,e)}catch{}}var la=Math.clz32?Math.clz32:Na,Es=Math.log,zr=Math.LN2;function Na(e){return e>>>=0,e===0?32:31-(Es(e)/zr|0)|0}var er=256,Wr=4194304;function en(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Cs(e,a,r){var n=e.pendingLanes;if(n===0)return 0;var s=0,o=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var f=n&134217727;return f!==0?(n=f&~o,n!==0?s=en(n):(u&=f,u!==0?s=en(u):r||(r=f&~e,r!==0&&(s=en(r))))):(f=n&~o,f!==0?s=en(f):u!==0?s=en(u):r||(r=n&~e,r!==0&&(s=en(r)))),s===0?0:a!==0&&a!==s&&(a&o)===0&&(o=s&-s,r=a&-a,o>=r||o===32&&(r&4194048)!==0)?a:s}function bi(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function z3(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ud(){var e=er;return er<<=1,(er&4194048)===0&&(er=256),e}function pd(){var e=Wr;return Wr<<=1,(Wr&62914560)===0&&(Wr=4194304),e}function lt(e){for(var a=[],r=0;31>r;r++)a.push(e);return a}function gi(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function M3(e,a,r,n,s,o){var u=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var f=e.entanglements,S=e.expirationTimes,M=e.hiddenUpdates;for(r=u&~r;0<r;){var U=31-la(r),Q=1<<U;f[U]=0,S[U]=-1;var P=M[U];if(P!==null)for(M[U]=null,U=0;U<P.length;U++){var R=P[U];R!==null&&(R.lane&=-536870913)}r&=~Q}n!==0&&md(e,n,0),o!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=o&~(u&~a))}function md(e,a,r){e.pendingLanes|=a,e.suspendedLanes&=~a;var n=31-la(a);e.entangledLanes|=a,e.entanglements[n]=e.entanglements[n]|1073741824|r&4194090}function fd(e,a){var r=e.entangledLanes|=a;for(e=e.entanglements;r;){var n=31-la(r),s=1<<n;s&a|e[n]&a&&(e[n]|=a),r&=~s}}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function vd(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:K1(e.type))}function _3(e,a){var r=X.p;try{return X.p=e,a()}finally{X.p=r}}var Mr=Math.random().toString(36).slice(2),va="__reactFiber$"+Mr,Sa="__reactProps$"+Mr,Cn="__reactContainer$"+Mr,mt="__reactEvents$"+Mr,P3="__reactListeners$"+Mr,R3="__reactHandles$"+Mr,bd="__reactResources$"+Mr,yi="__reactMarker$"+Mr;function ft(e){delete e[va],delete e[Sa],delete e[mt],delete e[P3],delete e[R3]}function An(e){var a=e[va];if(a)return a;for(var r=e.parentNode;r;){if(a=r[Cn]||r[va]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(e=w1(e);e!==null;){if(r=e[va])return r;e=w1(e)}return a}e=r,r=e.parentNode}return null}function zn(e){if(e=e[va]||e[Cn]){var a=e.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return e}return null}function hi(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(d(33))}function Mn(e){var a=e[bd];return a||(a=e[bd]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function oa(e){e[yi]=!0}var gd=new Set,yd={};function an(e,a){_n(e,a),_n(e+"Capture",a)}function _n(e,a){for(yd[e]=a,e=0;e<a.length;e++)gd.add(a[e])}var w3=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hd={},Sd={};function D3(e){return Re.call(Sd,e)?!0:Re.call(hd,e)?!1:w3.test(e)?Sd[e]=!0:(hd[e]=!0,!1)}function As(e,a,r){if(D3(a))if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+r)}}function zs(e,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+r)}}function tr(e,a,r,n){if(n===null)e.removeAttribute(r);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(a,r,""+n)}}var vt,Td;function Pn(e){if(vt===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);vt=a&&a[1]||"",Td=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vt+e+Td}var bt=!1;function gt(e,a){if(!e||bt)return"";bt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(R){var P=R}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(R){P=R}e.call(Q.prototype)}}else{try{throw Error()}catch(R){P=R}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(R){if(R&&P&&typeof R.stack=="string")return[R.stack,P.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),u=o[0],f=o[1];if(u&&f){var S=u.split(`
`),M=f.split(`
`);for(s=n=0;n<S.length&&!S[n].includes("DetermineComponentFrameRoot");)n++;for(;s<M.length&&!M[s].includes("DetermineComponentFrameRoot");)s++;if(n===S.length||s===M.length)for(n=S.length-1,s=M.length-1;1<=n&&0<=s&&S[n]!==M[s];)s--;for(;1<=n&&0<=s;n--,s--)if(S[n]!==M[s]){if(n!==1||s!==1)do if(n--,s--,0>s||S[n]!==M[s]){var U=`
`+S[n].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=n&&0<=s);break}}}finally{bt=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Pn(r):""}function O3(e){switch(e.tag){case 26:case 27:case 5:return Pn(e.type);case 16:return Pn("Lazy");case 13:return Pn("Suspense");case 19:return Pn("SuspenseList");case 0:case 15:return gt(e.type,!1);case 11:return gt(e.type.render,!1);case 1:return gt(e.type,!0);case 31:return Pn("Activity");default:return""}}function jd(e){try{var a="";do a+=O3(e),e=e.return;while(e);return a}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function Ba(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qd(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function N3(e){var a=qd(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),n=""+e[a];if(!e.hasOwnProperty(a)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,o=r.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return s.call(this)},set:function(u){n=""+u,o.call(this,u)}}),Object.defineProperty(e,a,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Ms(e){e._valueTracker||(e._valueTracker=N3(e))}function xd(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var r=a.getValue(),n="";return e&&(n=qd(e)?e.checked?"true":"false":e.value),e=n,e!==r?(a.setValue(e),!0):!1}function _s(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var B3=/[\n"\\]/g;function La(e){return e.replace(B3,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function yt(e,a,r,n,s,o,u,f){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),a!=null?u==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Ba(a)):e.value!==""+Ba(a)&&(e.value=""+Ba(a)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),a!=null?ht(e,u,Ba(a)):r!=null?ht(e,u,Ba(r)):n!=null&&e.removeAttribute("value"),s==null&&o!=null&&(e.defaultChecked=!!o),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+Ba(f):e.removeAttribute("name")}function Ed(e,a,r,n,s,o,u,f){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),a!=null||r!=null){if(!(o!=="submit"&&o!=="reset"||a!=null))return;r=r!=null?""+Ba(r):"",a=a!=null?""+Ba(a):r,f||a===e.value||(e.value=a),e.defaultValue=a}n=n??s,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=f?e.checked:!!n,e.defaultChecked=!!n,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u)}function ht(e,a,r){a==="number"&&_s(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Rn(e,a,r,n){if(e=e.options,a){a={};for(var s=0;s<r.length;s++)a["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=a.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Ba(r),a=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,n&&(e[s].defaultSelected=!0);return}a!==null||e[s].disabled||(a=e[s])}a!==null&&(a.selected=!0)}}function Cd(e,a,r){if(a!=null&&(a=""+Ba(a),a!==e.value&&(e.value=a),r==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=r!=null?""+Ba(r):""}function Ad(e,a,r,n){if(a==null){if(n!=null){if(r!=null)throw Error(d(92));if(qe(n)){if(1<n.length)throw Error(d(93));n=n[0]}r=n}r==null&&(r=""),a=r}r=Ba(a),e.defaultValue=r,n=e.textContent,n===r&&n!==""&&n!==null&&(e.value=n)}function wn(e,a){if(a){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=a;return}}e.textContent=a}var L3=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zd(e,a,r){var n=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?n?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":n?e.setProperty(a,r):typeof r!="number"||r===0||L3.has(a)?a==="float"?e.cssFloat=r:e[a]=(""+r).trim():e[a]=r+"px"}function Md(e,a,r){if(a!=null&&typeof a!="object")throw Error(d(62));if(e=e.style,r!=null){for(var n in r)!r.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var s in a)n=a[s],a.hasOwnProperty(s)&&r[s]!==n&&zd(e,s,n)}else for(var o in a)a.hasOwnProperty(o)&&zd(e,o,a[o])}function St(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H3=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),U3=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ps(e){return U3.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Tt=null;function jt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dn=null,On=null;function _d(e){var a=zn(e);if(a&&(e=a.stateNode)){var r=e[Sa]||null;e:switch(e=a.stateNode,a.type){case"input":if(yt(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+La(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var n=r[a];if(n!==e&&n.form===e.form){var s=n[Sa]||null;if(!s)throw Error(d(90));yt(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(a=0;a<r.length;a++)n=r[a],n.form===e.form&&xd(n)}break e;case"textarea":Cd(e,r.value,r.defaultValue);break e;case"select":a=r.value,a!=null&&Rn(e,!!r.multiple,a,!1)}}}var qt=!1;function Pd(e,a,r){if(qt)return e(a,r);qt=!0;try{var n=e(a);return n}finally{if(qt=!1,(Dn!==null||On!==null)&&(go(),Dn&&(a=Dn,e=On,On=Dn=null,_d(a),e)))for(a=0;a<e.length;a++)_d(e[a])}}function Si(e,a){var r=e.stateNode;if(r===null)return null;var n=r[Sa]||null;if(n===null)return null;r=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(d(231,a,typeof r));return r}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xt=!1;if(cr)try{var Ti={};Object.defineProperty(Ti,"passive",{get:function(){xt=!0}}),window.addEventListener("test",Ti,Ti),window.removeEventListener("test",Ti,Ti)}catch{xt=!1}var _r=null,Et=null,Rs=null;function Rd(){if(Rs)return Rs;var e,a=Et,r=a.length,n,s="value"in _r?_r.value:_r.textContent,o=s.length;for(e=0;e<r&&a[e]===s[e];e++);var u=r-e;for(n=1;n<=u&&a[r-n]===s[o-n];n++);return Rs=s.slice(e,1<n?1-n:void 0)}function ws(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Ds(){return!0}function wd(){return!1}function Ta(e){function a(r,n,s,o,u){this._reactName=r,this._targetInst=s,this.type=n,this.nativeEvent=o,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(r=e[f],this[f]=r?r(o):o[f]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ds:wd,this.isPropagationStopped=wd,this}return h(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ds)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ds)},persist:function(){},isPersistent:Ds}),a}var rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Os=Ta(rn),ji=h({},rn,{view:0,detail:0}),G3=Ta(ji),Ct,At,qi,Ns=h({},ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mt,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qi&&(qi&&e.type==="mousemove"?(Ct=e.screenX-qi.screenX,At=e.screenY-qi.screenY):At=Ct=0,qi=e),Ct)},movementY:function(e){return"movementY"in e?e.movementY:At}}),Dd=Ta(Ns),V3=h({},Ns,{dataTransfer:0}),k3=Ta(V3),Y3=h({},ji,{relatedTarget:0}),zt=Ta(Y3),X3=h({},rn,{animationName:0,elapsedTime:0,pseudoElement:0}),Q3=Ta(X3),Z3=h({},rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),K3=Ta(Z3),J3=h({},rn,{data:0}),Od=Ta(J3),I3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W3(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=$3[e])?!!a[e]:!1}function Mt(){return W3}var ep=h({},ji,{key:function(e){if(e.key){var a=I3[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=ws(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?F3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mt,charCode:function(e){return e.type==="keypress"?ws(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ws(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ap=Ta(ep),rp=h({},Ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=Ta(rp),np=h({},ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mt}),ip=Ta(np),sp=h({},rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),op=Ta(sp),tp=h({},Ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cp=Ta(tp),dp=h({},rn,{newState:0,oldState:0}),lp=Ta(dp),up=[9,13,27,32],_t=cr&&"CompositionEvent"in window,xi=null;cr&&"documentMode"in document&&(xi=document.documentMode);var pp=cr&&"TextEvent"in window&&!xi,Bd=cr&&(!_t||xi&&8<xi&&11>=xi),Ld=" ",Hd=!1;function Ud(e,a){switch(e){case"keyup":return up.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function mp(e,a){switch(e){case"compositionend":return Gd(a);case"keypress":return a.which!==32?null:(Hd=!0,Ld);case"textInput":return e=a.data,e===Ld&&Hd?null:e;default:return null}}function fp(e,a){if(Nn)return e==="compositionend"||!_t&&Ud(e,a)?(e=Rd(),Rs=Et=_r=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Bd&&a.locale!=="ko"?null:a.data;default:return null}}var vp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vd(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!vp[e.type]:a==="textarea"}function kd(e,a,r,n){Dn?On?On.push(n):On=[n]:Dn=n,a=qo(a,"onChange"),0<a.length&&(r=new Os("onChange","change",null,r,n),e.push({event:r,listeners:a}))}var Ei=null,Ci=null;function bp(e){q1(e,0)}function Bs(e){var a=hi(e);if(xd(a))return e}function Yd(e,a){if(e==="change")return a}var Xd=!1;if(cr){var Pt;if(cr){var Rt="oninput"in document;if(!Rt){var Qd=document.createElement("div");Qd.setAttribute("oninput","return;"),Rt=typeof Qd.oninput=="function"}Pt=Rt}else Pt=!1;Xd=Pt&&(!document.documentMode||9<document.documentMode)}function Zd(){Ei&&(Ei.detachEvent("onpropertychange",Kd),Ci=Ei=null)}function Kd(e){if(e.propertyName==="value"&&Bs(Ci)){var a=[];kd(a,Ci,e,jt(e)),Pd(bp,a)}}function gp(e,a,r){e==="focusin"?(Zd(),Ei=a,Ci=r,Ei.attachEvent("onpropertychange",Kd)):e==="focusout"&&Zd()}function yp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bs(Ci)}function hp(e,a){if(e==="click")return Bs(a)}function Sp(e,a){if(e==="input"||e==="change")return Bs(a)}function Tp(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Ea=typeof Object.is=="function"?Object.is:Tp;function Ai(e,a){if(Ea(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var r=Object.keys(e),n=Object.keys(a);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var s=r[n];if(!Re.call(a,s)||!Ea(e[s],a[s]))return!1}return!0}function Jd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Id(e,a){var r=Jd(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=a&&n>=a)return{node:r,offset:a-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Jd(r)}}function Fd(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Fd(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function $d(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=_s(e.document);a instanceof e.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)e=a.contentWindow;else break;a=_s(e.document)}return a}function wt(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var jp=cr&&"documentMode"in document&&11>=document.documentMode,Bn=null,Dt=null,zi=null,Ot=!1;function Wd(e,a,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ot||Bn==null||Bn!==_s(n)||(n=Bn,"selectionStart"in n&&wt(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),zi&&Ai(zi,n)||(zi=n,n=qo(Dt,"onSelect"),0<n.length&&(a=new Os("onSelect","select",null,a,r),e.push({event:a,listeners:n}),a.target=Bn)))}function nn(e,a){var r={};return r[e.toLowerCase()]=a.toLowerCase(),r["Webkit"+e]="webkit"+a,r["Moz"+e]="moz"+a,r}var Ln={animationend:nn("Animation","AnimationEnd"),animationiteration:nn("Animation","AnimationIteration"),animationstart:nn("Animation","AnimationStart"),transitionrun:nn("Transition","TransitionRun"),transitionstart:nn("Transition","TransitionStart"),transitioncancel:nn("Transition","TransitionCancel"),transitionend:nn("Transition","TransitionEnd")},Nt={},el={};cr&&(el=document.createElement("div").style,"AnimationEvent"in window||(delete Ln.animationend.animation,delete Ln.animationiteration.animation,delete Ln.animationstart.animation),"TransitionEvent"in window||delete Ln.transitionend.transition);function sn(e){if(Nt[e])return Nt[e];if(!Ln[e])return e;var a=Ln[e],r;for(r in a)if(a.hasOwnProperty(r)&&r in el)return Nt[e]=a[r];return e}var al=sn("animationend"),rl=sn("animationiteration"),nl=sn("animationstart"),qp=sn("transitionrun"),xp=sn("transitionstart"),Ep=sn("transitioncancel"),il=sn("transitionend"),sl=new Map,Bt="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bt.push("scrollEnd");function Ka(e,a){sl.set(e,a),an(a,[e])}var ol=new WeakMap;function Ha(e,a){if(typeof e=="object"&&e!==null){var r=ol.get(e);return r!==void 0?r:(a={value:e,source:a,stack:jd(a)},ol.set(e,a),a)}return{value:e,source:a,stack:jd(a)}}var Ua=[],Hn=0,Lt=0;function Ls(){for(var e=Hn,a=Lt=Hn=0;a<e;){var r=Ua[a];Ua[a++]=null;var n=Ua[a];Ua[a++]=null;var s=Ua[a];Ua[a++]=null;var o=Ua[a];if(Ua[a++]=null,n!==null&&s!==null){var u=n.pending;u===null?s.next=s:(s.next=u.next,u.next=s),n.pending=s}o!==0&&tl(r,s,o)}}function Hs(e,a,r,n){Ua[Hn++]=e,Ua[Hn++]=a,Ua[Hn++]=r,Ua[Hn++]=n,Lt|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Ht(e,a,r,n){return Hs(e,a,r,n),Us(e)}function Un(e,a){return Hs(e,null,null,a),Us(e)}function tl(e,a,r){e.lanes|=r;var n=e.alternate;n!==null&&(n.lanes|=r);for(var s=!1,o=e.return;o!==null;)o.childLanes|=r,n=o.alternate,n!==null&&(n.childLanes|=r),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(s=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,s&&a!==null&&(s=31-la(r),e=o.hiddenUpdates,n=e[s],n===null?e[s]=[a]:n.push(a),a.lane=r|536870912),o):null}function Us(e){if(50<Wi)throw Wi=0,X0=null,Error(d(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var Gn={};function Cp(e,a,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ca(e,a,r,n){return new Cp(e,a,r,n)}function Ut(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dr(e,a){var r=e.alternate;return r===null?(r=Ca(e.tag,a,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=a,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,a=e.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function cl(e,a){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,a=r.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Gs(e,a,r,n,s,o){var u=0;if(n=e,typeof e=="function")Ut(e)&&(u=1);else if(typeof e=="string")u=z4(e,r,ne.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case T:return e=Ca(31,r,a,s),e.elementType=T,e.lanes=o,e;case w:return on(r.children,s,o,a);case Y:u=8,s|=24;break;case G:return e=Ca(12,r,a,s|2),e.elementType=G,e.lanes=o,e;case K:return e=Ca(13,r,a,s),e.elementType=K,e.lanes=o,e;case ae:return e=Ca(19,r,a,s),e.elementType=ae,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:case Z:u=10;break e;case B:u=9;break e;case J:u=11;break e;case F:u=14;break e;case j:u=16,n=null;break e}u=29,r=Error(d(130,e===null?"null":typeof e,"")),n=null}return a=Ca(u,r,a,s),a.elementType=e,a.type=n,a.lanes=o,a}function on(e,a,r,n){return e=Ca(7,e,n,a),e.lanes=r,e}function Gt(e,a,r){return e=Ca(6,e,null,a),e.lanes=r,e}function Vt(e,a,r){return a=Ca(4,e.children!==null?e.children:[],e.key,a),a.lanes=r,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Vn=[],kn=0,Vs=null,ks=0,Ga=[],Va=0,tn=null,lr=1,ur="";function cn(e,a){Vn[kn++]=ks,Vn[kn++]=Vs,Vs=e,ks=a}function dl(e,a,r){Ga[Va++]=lr,Ga[Va++]=ur,Ga[Va++]=tn,tn=e;var n=lr;e=ur;var s=32-la(n)-1;n&=~(1<<s),r+=1;var o=32-la(a)+s;if(30<o){var u=s-s%5;o=(n&(1<<u)-1).toString(32),n>>=u,s-=u,lr=1<<32-la(a)+s|r<<s|n,ur=o+e}else lr=1<<o|r<<s|n,ur=e}function kt(e){e.return!==null&&(cn(e,1),dl(e,1,0))}function Yt(e){for(;e===Vs;)Vs=Vn[--kn],Vn[kn]=null,ks=Vn[--kn],Vn[kn]=null;for(;e===tn;)tn=Ga[--Va],Ga[Va]=null,ur=Ga[--Va],Ga[Va]=null,lr=Ga[--Va],Ga[Va]=null}var ya=null,Ie=null,Ae=!1,dn=null,ar=!1,Xt=Error(d(519));function ln(e){var a=Error(d(418,""));throw Pi(Ha(a,e)),Xt}function ll(e){var a=e.stateNode,r=e.type,n=e.memoizedProps;switch(a[va]=e,a[Sa]=n,r){case"dialog":Se("cancel",a),Se("close",a);break;case"iframe":case"object":case"embed":Se("load",a);break;case"video":case"audio":for(r=0;r<as.length;r++)Se(as[r],a);break;case"source":Se("error",a);break;case"img":case"image":case"link":Se("error",a),Se("load",a);break;case"details":Se("toggle",a);break;case"input":Se("invalid",a),Ed(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Ms(a);break;case"select":Se("invalid",a);break;case"textarea":Se("invalid",a),Ad(a,n.value,n.defaultValue,n.children),Ms(a)}r=n.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||n.suppressHydrationWarning===!0||A1(a.textContent,r)?(n.popover!=null&&(Se("beforetoggle",a),Se("toggle",a)),n.onScroll!=null&&Se("scroll",a),n.onScrollEnd!=null&&Se("scrollend",a),n.onClick!=null&&(a.onclick=xo),a=!0):a=!1,a||ln(e)}function ul(e){for(ya=e.return;ya;)switch(ya.tag){case 5:case 13:ar=!1;return;case 27:case 3:ar=!0;return;default:ya=ya.return}}function Mi(e){if(e!==ya)return!1;if(!Ae)return ul(e),Ae=!0,!1;var a=e.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||tc(e.type,e.memoizedProps)),r=!r),r&&Ie&&ln(e),ul(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));e:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(a===0){Ie=Ia(e.nextSibling);break e}a--}else r!=="$"&&r!=="$!"&&r!=="$?"||a++;e=e.nextSibling}Ie=null}}else a===27?(a=Ie,Qr(e.type)?(e=uc,uc=null,Ie=e):Ie=a):Ie=ya?Ia(e.stateNode.nextSibling):null;return!0}function _i(){Ie=ya=null,Ae=!1}function pl(){var e=dn;return e!==null&&(xa===null?xa=e:xa.push.apply(xa,e),dn=null),e}function Pi(e){dn===null?dn=[e]:dn.push(e)}var Qt=D(null),un=null,pr=null;function Pr(e,a,r){H(Qt,a._currentValue),a._currentValue=r}function mr(e){e._currentValue=Qt.current,I(Qt)}function Zt(e,a,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===r)break;e=e.return}}function Kt(e,a,r,n){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){var u=s.child;o=o.firstContext;e:for(;o!==null;){var f=o;o=s;for(var S=0;S<a.length;S++)if(f.context===a[S]){o.lanes|=r,f=o.alternate,f!==null&&(f.lanes|=r),Zt(o.return,r,e),n||(u=null);break e}o=f.next}}else if(s.tag===18){if(u=s.return,u===null)throw Error(d(341));u.lanes|=r,o=u.alternate,o!==null&&(o.lanes|=r),Zt(u,r,e),u=null}else u=s.child;if(u!==null)u.return=s;else for(u=s;u!==null;){if(u===e){u=null;break}if(s=u.sibling,s!==null){s.return=u.return,u=s;break}u=u.return}s=u}}function Ri(e,a,r,n){e=null;for(var s=a,o=!1;s!==null;){if(!o){if((s.flags&524288)!==0)o=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var u=s.alternate;if(u===null)throw Error(d(387));if(u=u.memoizedProps,u!==null){var f=s.type;Ea(s.pendingProps.value,u.value)||(e!==null?e.push(f):e=[f])}}else if(s===Ge.current){if(u=s.alternate,u===null)throw Error(d(387));u.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(ts):e=[ts])}s=s.return}e!==null&&Kt(a,e,r,n),a.flags|=262144}function Ys(e){for(e=e.firstContext;e!==null;){if(!Ea(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pn(e){un=e,pr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ba(e){return ml(un,e)}function Xs(e,a){return un===null&&pn(e),ml(e,a)}function ml(e,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},pr===null){if(e===null)throw Error(d(308));pr=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else pr=pr.next=a;return r}var Ap=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(r,n){e.push(n)}};this.abort=function(){a.aborted=!0,e.forEach(function(r){return r()})}},zp=i.unstable_scheduleCallback,Mp=i.unstable_NormalPriority,ra={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jt(){return{controller:new Ap,data:new Map,refCount:0}}function wi(e){e.refCount--,e.refCount===0&&zp(Mp,function(){e.controller.abort()})}var Di=null,It=0,Yn=0,Xn=null;function _p(e,a){if(Di===null){var r=Di=[];It=0,Yn=$0(),Xn={status:"pending",value:void 0,then:function(n){r.push(n)}}}return It++,a.then(fl,fl),a}function fl(){if(--It===0&&Di!==null){Xn!==null&&(Xn.status="fulfilled");var e=Di;Di=null,Yn=0,Xn=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Pp(e,a){var r=[],n={status:"pending",value:null,reason:null,then:function(s){r.push(s)}};return e.then(function(){n.status="fulfilled",n.value=a;for(var s=0;s<r.length;s++)(0,r[s])(a)},function(s){for(n.status="rejected",n.reason=s,s=0;s<r.length;s++)(0,r[s])(void 0)}),n}var vl=N.S;N.S=function(e,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&_p(e,a),vl!==null&&vl(e,a)};var mn=D(null);function Ft(){var e=mn.current;return e!==null?e:ke.pooledCache}function Qs(e,a){a===null?H(mn,mn.current):H(mn,a.pool)}function bl(){var e=Ft();return e===null?null:{parent:ra._currentValue,pool:e}}var Oi=Error(d(460)),gl=Error(d(474)),Zs=Error(d(542)),$t={then:function(){}};function yl(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ks(){}function hl(e,a,r){switch(r=e[r],r===void 0?e.push(a):r!==a&&(a.then(Ks,Ks),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Tl(e),e;default:if(typeof a.status=="string")a.then(Ks,Ks);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=a,e.status="pending",e.then(function(n){if(a.status==="pending"){var s=a;s.status="fulfilled",s.value=n}},function(n){if(a.status==="pending"){var s=a;s.status="rejected",s.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Tl(e),e}throw Ni=a,Oi}}var Ni=null;function Sl(){if(Ni===null)throw Error(d(459));var e=Ni;return Ni=null,e}function Tl(e){if(e===Oi||e===Zs)throw Error(d(483))}var Rr=!1;function Wt(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function e0(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Dr(e,a,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(_e&2)!==0){var s=n.pending;return s===null?a.next=a:(a.next=s.next,s.next=a),n.pending=a,a=Us(e),tl(e,null,r),a}return Hs(e,n,a,r),Us(e)}function Bi(e,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var n=a.lanes;n&=e.pendingLanes,r|=n,a.lanes=r,fd(e,r)}}function a0(e,a){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var s=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var u={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};o===null?s=o=u:o=o.next=u,r=r.next}while(r!==null);o===null?s=o=a:o=o.next=a}else s=o=a;r={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=a:e.next=a,r.lastBaseUpdate=a}var r0=!1;function Li(){if(r0){var e=Xn;if(e!==null)throw e}}function Hi(e,a,r,n){r0=!1;var s=e.updateQueue;Rr=!1;var o=s.firstBaseUpdate,u=s.lastBaseUpdate,f=s.shared.pending;if(f!==null){s.shared.pending=null;var S=f,M=S.next;S.next=null,u===null?o=M:u.next=M,u=S;var U=e.alternate;U!==null&&(U=U.updateQueue,f=U.lastBaseUpdate,f!==u&&(f===null?U.firstBaseUpdate=M:f.next=M,U.lastBaseUpdate=S))}if(o!==null){var Q=s.baseState;u=0,U=M=S=null,f=o;do{var P=f.lane&-536870913,R=P!==f.lane;if(R?(Te&P)===P:(n&P)===P){P!==0&&P===Yn&&(r0=!0),U!==null&&(U=U.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var pe=e,de=f;P=a;var Be=r;switch(de.tag){case 1:if(pe=de.payload,typeof pe=="function"){Q=pe.call(Be,Q,P);break e}Q=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=de.payload,P=typeof pe=="function"?pe.call(Be,Q,P):pe,P==null)break e;Q=h({},Q,P);break e;case 2:Rr=!0}}P=f.callback,P!==null&&(e.flags|=64,R&&(e.flags|=8192),R=s.callbacks,R===null?s.callbacks=[P]:R.push(P))}else R={lane:P,tag:f.tag,payload:f.payload,callback:f.callback,next:null},U===null?(M=U=R,S=Q):U=U.next=R,u|=P;if(f=f.next,f===null){if(f=s.shared.pending,f===null)break;R=f,f=R.next,R.next=null,s.lastBaseUpdate=R,s.shared.pending=null}}while(!0);U===null&&(S=Q),s.baseState=S,s.firstBaseUpdate=M,s.lastBaseUpdate=U,o===null&&(s.shared.lanes=0),Vr|=u,e.lanes=u,e.memoizedState=Q}}function jl(e,a){if(typeof e!="function")throw Error(d(191,e));e.call(a)}function ql(e,a){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)jl(r[e],a)}var Qn=D(null),Js=D(0);function xl(e,a){e=Sr,H(Js,e),H(Qn,a),Sr=e|a.baseLanes}function n0(){H(Js,Sr),H(Qn,Qn.current)}function i0(){Sr=Js.current,I(Qn),I(Js)}var Or=0,ge=null,Oe=null,ea=null,Is=!1,Zn=!1,fn=!1,Fs=0,Ui=0,Kn=null,Rp=0;function $e(){throw Error(d(321))}function s0(e,a){if(a===null)return!1;for(var r=0;r<a.length&&r<e.length;r++)if(!Ea(e[r],a[r]))return!1;return!0}function o0(e,a,r,n,s,o){return Or=o,ge=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,N.H=e===null||e.memoizedState===null?tu:cu,fn=!1,o=r(n,s),fn=!1,Zn&&(o=Cl(a,r,n,s)),El(e),o}function El(e){N.H=no;var a=Oe!==null&&Oe.next!==null;if(Or=0,ea=Oe=ge=null,Is=!1,Ui=0,Kn=null,a)throw Error(d(300));e===null||ta||(e=e.dependencies,e!==null&&Ys(e)&&(ta=!0))}function Cl(e,a,r,n){ge=e;var s=0;do{if(Zn&&(Kn=null),Ui=0,Zn=!1,25<=s)throw Error(d(301));if(s+=1,ea=Oe=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}N.H=Hp,o=a(r,n)}while(Zn);return o}function wp(){var e=N.H,a=e.useState()[0];return a=typeof a.then=="function"?Gi(a):a,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(ge.flags|=1024),a}function t0(){var e=Fs!==0;return Fs=0,e}function c0(e,a,r){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~r}function d0(e){if(Is){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Is=!1}Or=0,ea=Oe=ge=null,Zn=!1,Ui=Fs=0,Kn=null}function ja(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ea===null?ge.memoizedState=ea=e:ea=ea.next=e,ea}function aa(){if(Oe===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var a=ea===null?ge.memoizedState:ea.next;if(a!==null)ea=a,Oe=e;else{if(e===null)throw ge.alternate===null?Error(d(467)):Error(d(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},ea===null?ge.memoizedState=ea=e:ea=ea.next=e}return ea}function l0(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Gi(e){var a=Ui;return Ui+=1,Kn===null&&(Kn=[]),e=hl(Kn,e,a),a=ge,(ea===null?a.memoizedState:ea.next)===null&&(a=a.alternate,N.H=a===null||a.memoizedState===null?tu:cu),e}function $s(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Gi(e);if(e.$$typeof===Z)return ba(e)}throw Error(d(438,String(e)))}function u0(e){var a=null,r=ge.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var n=ge.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(s){return s.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=l0(),ge.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(e),n=0;n<e;n++)r[n]=L;return a.index++,r}function fr(e,a){return typeof a=="function"?a(e):a}function Ws(e){var a=aa();return p0(a,Oe,e)}function p0(e,a,r){var n=e.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=r;var s=e.baseQueue,o=n.pending;if(o!==null){if(s!==null){var u=s.next;s.next=o.next,o.next=u}a.baseQueue=s=o,n.pending=null}if(o=e.baseState,s===null)e.memoizedState=o;else{a=s.next;var f=u=null,S=null,M=a,U=!1;do{var Q=M.lane&-536870913;if(Q!==M.lane?(Te&Q)===Q:(Or&Q)===Q){var P=M.revertLane;if(P===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),Q===Yn&&(U=!0);else if((Or&P)===P){M=M.next,P===Yn&&(U=!0);continue}else Q={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},S===null?(f=S=Q,u=o):S=S.next=Q,ge.lanes|=P,Vr|=P;Q=M.action,fn&&r(o,Q),o=M.hasEagerState?M.eagerState:r(o,Q)}else P={lane:Q,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},S===null?(f=S=P,u=o):S=S.next=P,ge.lanes|=Q,Vr|=Q;M=M.next}while(M!==null&&M!==a);if(S===null?u=o:S.next=f,!Ea(o,e.memoizedState)&&(ta=!0,U&&(r=Xn,r!==null)))throw r;e.memoizedState=o,e.baseState=u,e.baseQueue=S,n.lastRenderedState=o}return s===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function m0(e){var a=aa(),r=a.queue;if(r===null)throw Error(d(311));r.lastRenderedReducer=e;var n=r.dispatch,s=r.pending,o=a.memoizedState;if(s!==null){r.pending=null;var u=s=s.next;do o=e(o,u.action),u=u.next;while(u!==s);Ea(o,a.memoizedState)||(ta=!0),a.memoizedState=o,a.baseQueue===null&&(a.baseState=o),r.lastRenderedState=o}return[o,n]}function Al(e,a,r){var n=ge,s=aa(),o=Ae;if(o){if(r===void 0)throw Error(d(407));r=r()}else r=a();var u=!Ea((Oe||s).memoizedState,r);u&&(s.memoizedState=r,ta=!0),s=s.queue;var f=_l.bind(null,n,s,e);if(Vi(2048,8,f,[e]),s.getSnapshot!==a||u||ea!==null&&ea.memoizedState.tag&1){if(n.flags|=2048,Jn(9,eo(),Ml.bind(null,n,s,r,a),null),ke===null)throw Error(d(349));o||(Or&124)!==0||zl(n,a,r)}return r}function zl(e,a,r){e.flags|=16384,e={getSnapshot:a,value:r},a=ge.updateQueue,a===null?(a=l0(),ge.updateQueue=a,a.stores=[e]):(r=a.stores,r===null?a.stores=[e]:r.push(e))}function Ml(e,a,r,n){a.value=r,a.getSnapshot=n,Pl(a)&&Rl(e)}function _l(e,a,r){return r(function(){Pl(a)&&Rl(e)})}function Pl(e){var a=e.getSnapshot;e=e.value;try{var r=a();return!Ea(e,r)}catch{return!0}}function Rl(e){var a=Un(e,2);a!==null&&Pa(a,e,2)}function f0(e){var a=ja();if(typeof e=="function"){var r=e;if(e=r(),fn){sa(!0);try{r()}finally{sa(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},a}function wl(e,a,r,n){return e.baseState=r,p0(e,Oe,typeof n=="function"?n:fr)}function Dp(e,a,r,n,s){if(ro(e))throw Error(d(485));if(e=a.action,e!==null){var o={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){o.listeners.push(u)}};N.T!==null?r(!0):o.isTransition=!1,n(o),r=a.pending,r===null?(o.next=a.pending=o,Dl(a,o)):(o.next=r.next,a.pending=r.next=o)}}function Dl(e,a){var r=a.action,n=a.payload,s=e.state;if(a.isTransition){var o=N.T,u={};N.T=u;try{var f=r(s,n),S=N.S;S!==null&&S(u,f),Ol(e,a,f)}catch(M){v0(e,a,M)}finally{N.T=o}}else try{o=r(s,n),Ol(e,a,o)}catch(M){v0(e,a,M)}}function Ol(e,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(n){Nl(e,a,n)},function(n){return v0(e,a,n)}):Nl(e,a,r)}function Nl(e,a,r){a.status="fulfilled",a.value=r,Bl(a),e.state=r,a=e.pending,a!==null&&(r=a.next,r===a?e.pending=null:(r=r.next,a.next=r,Dl(e,r)))}function v0(e,a,r){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=r,Bl(a),a=a.next;while(a!==n)}e.action=null}function Bl(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Ll(e,a){return a}function Hl(e,a){if(Ae){var r=ke.formState;if(r!==null){e:{var n=ge;if(Ae){if(Ie){a:{for(var s=Ie,o=ar;s.nodeType!==8;){if(!o){s=null;break a}if(s=Ia(s.nextSibling),s===null){s=null;break a}}o=s.data,s=o==="F!"||o==="F"?s:null}if(s){Ie=Ia(s.nextSibling),n=s.data==="F!";break e}}ln(n)}n=!1}n&&(a=r[0])}}return r=ja(),r.memoizedState=r.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ll,lastRenderedState:a},r.queue=n,r=iu.bind(null,ge,n),n.dispatch=r,n=f0(!1),o=S0.bind(null,ge,!1,n.queue),n=ja(),s={state:a,dispatch:null,action:e,pending:null},n.queue=s,r=Dp.bind(null,ge,s,o,r),s.dispatch=r,n.memoizedState=e,[a,r,!1]}function Ul(e){var a=aa();return Gl(a,Oe,e)}function Gl(e,a,r){if(a=p0(e,a,Ll)[0],e=Ws(fr)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var n=Gi(a)}catch(u){throw u===Oi?Zs:u}else n=a;a=aa();var s=a.queue,o=s.dispatch;return r!==a.memoizedState&&(ge.flags|=2048,Jn(9,eo(),Op.bind(null,s,r),null)),[n,o,e]}function Op(e,a){e.action=a}function Vl(e){var a=aa(),r=Oe;if(r!==null)return Gl(a,r,e);aa(),a=a.memoizedState,r=aa();var n=r.queue.dispatch;return r.memoizedState=e,[a,n,!1]}function Jn(e,a,r,n){return e={tag:e,create:r,deps:n,inst:a,next:null},a=ge.updateQueue,a===null&&(a=l0(),ge.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,a.lastEffect=e),e}function eo(){return{destroy:void 0,resource:void 0}}function kl(){return aa().memoizedState}function ao(e,a,r,n){var s=ja();n=n===void 0?null:n,ge.flags|=e,s.memoizedState=Jn(1|a,eo(),r,n)}function Vi(e,a,r,n){var s=aa();n=n===void 0?null:n;var o=s.memoizedState.inst;Oe!==null&&n!==null&&s0(n,Oe.memoizedState.deps)?s.memoizedState=Jn(a,o,r,n):(ge.flags|=e,s.memoizedState=Jn(1|a,o,r,n))}function Yl(e,a){ao(8390656,8,e,a)}function Xl(e,a){Vi(2048,8,e,a)}function Ql(e,a){return Vi(4,2,e,a)}function Zl(e,a){return Vi(4,4,e,a)}function Kl(e,a){if(typeof a=="function"){e=e();var r=a(e);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Jl(e,a,r){r=r!=null?r.concat([e]):null,Vi(4,4,Kl.bind(null,a,e),r)}function b0(){}function Il(e,a){var r=aa();a=a===void 0?null:a;var n=r.memoizedState;return a!==null&&s0(a,n[1])?n[0]:(r.memoizedState=[e,a],e)}function Fl(e,a){var r=aa();a=a===void 0?null:a;var n=r.memoizedState;if(a!==null&&s0(a,n[1]))return n[0];if(n=e(),fn){sa(!0);try{e()}finally{sa(!1)}}return r.memoizedState=[n,a],n}function g0(e,a,r){return r===void 0||(Or&1073741824)!==0?e.memoizedState=a:(e.memoizedState=r,e=e1(),ge.lanes|=e,Vr|=e,r)}function $l(e,a,r,n){return Ea(r,a)?r:Qn.current!==null?(e=g0(e,r,n),Ea(e,a)||(ta=!0),e):(Or&42)===0?(ta=!0,e.memoizedState=r):(e=e1(),ge.lanes|=e,Vr|=e,a)}function Wl(e,a,r,n,s){var o=X.p;X.p=o!==0&&8>o?o:8;var u=N.T,f={};N.T=f,S0(e,!1,a,r);try{var S=s(),M=N.S;if(M!==null&&M(f,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var U=Pp(S,n);ki(e,a,U,_a(e))}else ki(e,a,n,_a(e))}catch(Q){ki(e,a,{then:function(){},status:"rejected",reason:Q},_a())}finally{X.p=o,N.T=u}}function Np(){}function y0(e,a,r,n){if(e.tag!==5)throw Error(d(476));var s=eu(e).queue;Wl(e,s,a,ee,r===null?Np:function(){return au(e),r(n)})}function eu(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:ee},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:r},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function au(e){var a=eu(e).next.queue;ki(e,a,{},_a())}function h0(){return ba(ts)}function ru(){return aa().memoizedState}function nu(){return aa().memoizedState}function Bp(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var r=_a();e=wr(r);var n=Dr(a,e,r);n!==null&&(Pa(n,a,r),Bi(n,a,r)),a={cache:Jt()},e.payload=a;return}a=a.return}}function Lp(e,a,r){var n=_a();r={lane:n,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},ro(e)?su(a,r):(r=Ht(e,a,r,n),r!==null&&(Pa(r,e,n),ou(r,a,n)))}function iu(e,a,r){var n=_a();ki(e,a,r,n)}function ki(e,a,r,n){var s={lane:n,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(ro(e))su(a,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=a.lastRenderedReducer,o!==null))try{var u=a.lastRenderedState,f=o(u,r);if(s.hasEagerState=!0,s.eagerState=f,Ea(f,u))return Hs(e,a,s,0),ke===null&&Ls(),!1}catch{}finally{}if(r=Ht(e,a,s,n),r!==null)return Pa(r,e,n),ou(r,a,n),!0}return!1}function S0(e,a,r,n){if(n={lane:2,revertLane:$0(),action:n,hasEagerState:!1,eagerState:null,next:null},ro(e)){if(a)throw Error(d(479))}else a=Ht(e,r,n,2),a!==null&&Pa(a,e,2)}function ro(e){var a=e.alternate;return e===ge||a!==null&&a===ge}function su(e,a){Zn=Is=!0;var r=e.pending;r===null?a.next=a:(a.next=r.next,r.next=a),e.pending=a}function ou(e,a,r){if((r&4194048)!==0){var n=a.lanes;n&=e.pendingLanes,r|=n,a.lanes=r,fd(e,r)}}var no={readContext:ba,use:$s,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e},tu={readContext:ba,use:$s,useCallback:function(e,a){return ja().memoizedState=[e,a===void 0?null:a],e},useContext:ba,useEffect:Yl,useImperativeHandle:function(e,a,r){r=r!=null?r.concat([e]):null,ao(4194308,4,Kl.bind(null,a,e),r)},useLayoutEffect:function(e,a){return ao(4194308,4,e,a)},useInsertionEffect:function(e,a){ao(4,2,e,a)},useMemo:function(e,a){var r=ja();a=a===void 0?null:a;var n=e();if(fn){sa(!0);try{e()}finally{sa(!1)}}return r.memoizedState=[n,a],n},useReducer:function(e,a,r){var n=ja();if(r!==void 0){var s=r(a);if(fn){sa(!0);try{r(a)}finally{sa(!1)}}}else s=a;return n.memoizedState=n.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},n.queue=e,e=e.dispatch=Lp.bind(null,ge,e),[n.memoizedState,e]},useRef:function(e){var a=ja();return e={current:e},a.memoizedState=e},useState:function(e){e=f0(e);var a=e.queue,r=iu.bind(null,ge,a);return a.dispatch=r,[e.memoizedState,r]},useDebugValue:b0,useDeferredValue:function(e,a){var r=ja();return g0(r,e,a)},useTransition:function(){var e=f0(!1);return e=Wl.bind(null,ge,e.queue,!0,!1),ja().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,r){var n=ge,s=ja();if(Ae){if(r===void 0)throw Error(d(407));r=r()}else{if(r=a(),ke===null)throw Error(d(349));(Te&124)!==0||zl(n,a,r)}s.memoizedState=r;var o={value:r,getSnapshot:a};return s.queue=o,Yl(_l.bind(null,n,o,e),[e]),n.flags|=2048,Jn(9,eo(),Ml.bind(null,n,o,r,a),null),r},useId:function(){var e=ja(),a=ke.identifierPrefix;if(Ae){var r=ur,n=lr;r=(n&~(1<<32-la(n)-1)).toString(32)+r,a="«"+a+"R"+r,r=Fs++,0<r&&(a+="H"+r.toString(32)),a+="»"}else r=Rp++,a="«"+a+"r"+r.toString(32)+"»";return e.memoizedState=a},useHostTransitionStatus:h0,useFormState:Hl,useActionState:Hl,useOptimistic:function(e){var a=ja();a.memoizedState=a.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=S0.bind(null,ge,!0,r),r.dispatch=a,[e,a]},useMemoCache:u0,useCacheRefresh:function(){return ja().memoizedState=Bp.bind(null,ge)}},cu={readContext:ba,use:$s,useCallback:Il,useContext:ba,useEffect:Xl,useImperativeHandle:Jl,useInsertionEffect:Ql,useLayoutEffect:Zl,useMemo:Fl,useReducer:Ws,useRef:kl,useState:function(){return Ws(fr)},useDebugValue:b0,useDeferredValue:function(e,a){var r=aa();return $l(r,Oe.memoizedState,e,a)},useTransition:function(){var e=Ws(fr)[0],a=aa().memoizedState;return[typeof e=="boolean"?e:Gi(e),a]},useSyncExternalStore:Al,useId:ru,useHostTransitionStatus:h0,useFormState:Ul,useActionState:Ul,useOptimistic:function(e,a){var r=aa();return wl(r,Oe,e,a)},useMemoCache:u0,useCacheRefresh:nu},Hp={readContext:ba,use:$s,useCallback:Il,useContext:ba,useEffect:Xl,useImperativeHandle:Jl,useInsertionEffect:Ql,useLayoutEffect:Zl,useMemo:Fl,useReducer:m0,useRef:kl,useState:function(){return m0(fr)},useDebugValue:b0,useDeferredValue:function(e,a){var r=aa();return Oe===null?g0(r,e,a):$l(r,Oe.memoizedState,e,a)},useTransition:function(){var e=m0(fr)[0],a=aa().memoizedState;return[typeof e=="boolean"?e:Gi(e),a]},useSyncExternalStore:Al,useId:ru,useHostTransitionStatus:h0,useFormState:Vl,useActionState:Vl,useOptimistic:function(e,a){var r=aa();return Oe!==null?wl(r,Oe,e,a):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:u0,useCacheRefresh:nu},In=null,Yi=0;function io(e){var a=Yi;return Yi+=1,In===null&&(In=[]),hl(In,e,a)}function Xi(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function so(e,a){throw a.$$typeof===_?Error(d(525)):(e=Object.prototype.toString.call(a),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function du(e){var a=e._init;return a(e._payload)}function lu(e){function a(E,x){if(e){var z=E.deletions;z===null?(E.deletions=[x],E.flags|=16):z.push(x)}}function r(E,x){if(!e)return null;for(;x!==null;)a(E,x),x=x.sibling;return null}function n(E){for(var x=new Map;E!==null;)E.key!==null?x.set(E.key,E):x.set(E.index,E),E=E.sibling;return x}function s(E,x){return E=dr(E,x),E.index=0,E.sibling=null,E}function o(E,x,z){return E.index=z,e?(z=E.alternate,z!==null?(z=z.index,z<x?(E.flags|=67108866,x):z):(E.flags|=67108866,x)):(E.flags|=1048576,x)}function u(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function f(E,x,z,V){return x===null||x.tag!==6?(x=Gt(z,E.mode,V),x.return=E,x):(x=s(x,z),x.return=E,x)}function S(E,x,z,V){var ie=z.type;return ie===w?U(E,x,z.props.children,V,z.key):x!==null&&(x.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===j&&du(ie)===x.type)?(x=s(x,z.props),Xi(x,z),x.return=E,x):(x=Gs(z.type,z.key,z.props,null,E.mode,V),Xi(x,z),x.return=E,x)}function M(E,x,z,V){return x===null||x.tag!==4||x.stateNode.containerInfo!==z.containerInfo||x.stateNode.implementation!==z.implementation?(x=Vt(z,E.mode,V),x.return=E,x):(x=s(x,z.children||[]),x.return=E,x)}function U(E,x,z,V,ie){return x===null||x.tag!==7?(x=on(z,E.mode,V,ie),x.return=E,x):(x=s(x,z),x.return=E,x)}function Q(E,x,z){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Gt(""+x,E.mode,z),x.return=E,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case A:return z=Gs(x.type,x.key,x.props,null,E.mode,z),Xi(z,x),z.return=E,z;case k:return x=Vt(x,E.mode,z),x.return=E,x;case j:var V=x._init;return x=V(x._payload),Q(E,x,z)}if(qe(x)||$(x))return x=on(x,E.mode,z,null),x.return=E,x;if(typeof x.then=="function")return Q(E,io(x),z);if(x.$$typeof===Z)return Q(E,Xs(E,x),z);so(E,x)}return null}function P(E,x,z,V){var ie=x!==null?x.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return ie!==null?null:f(E,x,""+z,V);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case A:return z.key===ie?S(E,x,z,V):null;case k:return z.key===ie?M(E,x,z,V):null;case j:return ie=z._init,z=ie(z._payload),P(E,x,z,V)}if(qe(z)||$(z))return ie!==null?null:U(E,x,z,V,null);if(typeof z.then=="function")return P(E,x,io(z),V);if(z.$$typeof===Z)return P(E,x,Xs(E,z),V);so(E,z)}return null}function R(E,x,z,V,ie){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return E=E.get(z)||null,f(x,E,""+V,ie);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case A:return E=E.get(V.key===null?z:V.key)||null,S(x,E,V,ie);case k:return E=E.get(V.key===null?z:V.key)||null,M(x,E,V,ie);case j:var ye=V._init;return V=ye(V._payload),R(E,x,z,V,ie)}if(qe(V)||$(V))return E=E.get(z)||null,U(x,E,V,ie,null);if(typeof V.then=="function")return R(E,x,z,io(V),ie);if(V.$$typeof===Z)return R(E,x,z,Xs(x,V),ie);so(x,V)}return null}function pe(E,x,z,V){for(var ie=null,ye=null,te=x,ue=x=0,da=null;te!==null&&ue<z.length;ue++){te.index>ue?(da=te,te=null):da=te.sibling;var Ee=P(E,te,z[ue],V);if(Ee===null){te===null&&(te=da);break}e&&te&&Ee.alternate===null&&a(E,te),x=o(Ee,x,ue),ye===null?ie=Ee:ye.sibling=Ee,ye=Ee,te=da}if(ue===z.length)return r(E,te),Ae&&cn(E,ue),ie;if(te===null){for(;ue<z.length;ue++)te=Q(E,z[ue],V),te!==null&&(x=o(te,x,ue),ye===null?ie=te:ye.sibling=te,ye=te);return Ae&&cn(E,ue),ie}for(te=n(te);ue<z.length;ue++)da=R(te,E,ue,z[ue],V),da!==null&&(e&&da.alternate!==null&&te.delete(da.key===null?ue:da.key),x=o(da,x,ue),ye===null?ie=da:ye.sibling=da,ye=da);return e&&te.forEach(function(Fr){return a(E,Fr)}),Ae&&cn(E,ue),ie}function de(E,x,z,V){if(z==null)throw Error(d(151));for(var ie=null,ye=null,te=x,ue=x=0,da=null,Ee=z.next();te!==null&&!Ee.done;ue++,Ee=z.next()){te.index>ue?(da=te,te=null):da=te.sibling;var Fr=P(E,te,Ee.value,V);if(Fr===null){te===null&&(te=da);break}e&&te&&Fr.alternate===null&&a(E,te),x=o(Fr,x,ue),ye===null?ie=Fr:ye.sibling=Fr,ye=Fr,te=da}if(Ee.done)return r(E,te),Ae&&cn(E,ue),ie;if(te===null){for(;!Ee.done;ue++,Ee=z.next())Ee=Q(E,Ee.value,V),Ee!==null&&(x=o(Ee,x,ue),ye===null?ie=Ee:ye.sibling=Ee,ye=Ee);return Ae&&cn(E,ue),ie}for(te=n(te);!Ee.done;ue++,Ee=z.next())Ee=R(te,E,ue,Ee.value,V),Ee!==null&&(e&&Ee.alternate!==null&&te.delete(Ee.key===null?ue:Ee.key),x=o(Ee,x,ue),ye===null?ie=Ee:ye.sibling=Ee,ye=Ee);return e&&te.forEach(function(U4){return a(E,U4)}),Ae&&cn(E,ue),ie}function Be(E,x,z,V){if(typeof z=="object"&&z!==null&&z.type===w&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case A:e:{for(var ie=z.key;x!==null;){if(x.key===ie){if(ie=z.type,ie===w){if(x.tag===7){r(E,x.sibling),V=s(x,z.props.children),V.return=E,E=V;break e}}else if(x.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===j&&du(ie)===x.type){r(E,x.sibling),V=s(x,z.props),Xi(V,z),V.return=E,E=V;break e}r(E,x);break}else a(E,x);x=x.sibling}z.type===w?(V=on(z.props.children,E.mode,V,z.key),V.return=E,E=V):(V=Gs(z.type,z.key,z.props,null,E.mode,V),Xi(V,z),V.return=E,E=V)}return u(E);case k:e:{for(ie=z.key;x!==null;){if(x.key===ie)if(x.tag===4&&x.stateNode.containerInfo===z.containerInfo&&x.stateNode.implementation===z.implementation){r(E,x.sibling),V=s(x,z.children||[]),V.return=E,E=V;break e}else{r(E,x);break}else a(E,x);x=x.sibling}V=Vt(z,E.mode,V),V.return=E,E=V}return u(E);case j:return ie=z._init,z=ie(z._payload),Be(E,x,z,V)}if(qe(z))return pe(E,x,z,V);if($(z)){if(ie=$(z),typeof ie!="function")throw Error(d(150));return z=ie.call(z),de(E,x,z,V)}if(typeof z.then=="function")return Be(E,x,io(z),V);if(z.$$typeof===Z)return Be(E,x,Xs(E,z),V);so(E,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,x!==null&&x.tag===6?(r(E,x.sibling),V=s(x,z),V.return=E,E=V):(r(E,x),V=Gt(z,E.mode,V),V.return=E,E=V),u(E)):r(E,x)}return function(E,x,z,V){try{Yi=0;var ie=Be(E,x,z,V);return In=null,ie}catch(te){if(te===Oi||te===Zs)throw te;var ye=Ca(29,te,null,E.mode);return ye.lanes=V,ye.return=E,ye}finally{}}}var Fn=lu(!0),uu=lu(!1),ka=D(null),rr=null;function Nr(e){var a=e.alternate;H(na,na.current&1),H(ka,e),rr===null&&(a===null||Qn.current!==null||a.memoizedState!==null)&&(rr=e)}function pu(e){if(e.tag===22){if(H(na,na.current),H(ka,e),rr===null){var a=e.alternate;a!==null&&a.memoizedState!==null&&(rr=e)}}else Br()}function Br(){H(na,na.current),H(ka,ka.current)}function vr(e){I(ka),rr===e&&(rr=null),I(na)}var na=D(0);function oo(e){for(var a=e;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||lc(r)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function T0(e,a,r,n){a=e.memoizedState,r=r(n,a),r=r==null?a:h({},a,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var j0={enqueueSetState:function(e,a,r){e=e._reactInternals;var n=_a(),s=wr(n);s.payload=a,r!=null&&(s.callback=r),a=Dr(e,s,n),a!==null&&(Pa(a,e,n),Bi(a,e,n))},enqueueReplaceState:function(e,a,r){e=e._reactInternals;var n=_a(),s=wr(n);s.tag=1,s.payload=a,r!=null&&(s.callback=r),a=Dr(e,s,n),a!==null&&(Pa(a,e,n),Bi(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var r=_a(),n=wr(r);n.tag=2,a!=null&&(n.callback=a),a=Dr(e,n,r),a!==null&&(Pa(a,e,r),Bi(a,e,r))}};function mu(e,a,r,n,s,o,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,u):a.prototype&&a.prototype.isPureReactComponent?!Ai(r,n)||!Ai(s,o):!0}function fu(e,a,r,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,n),a.state!==e&&j0.enqueueReplaceState(a,a.state,null)}function vn(e,a){var r=a;if("ref"in a){r={};for(var n in a)n!=="ref"&&(r[n]=a[n])}if(e=e.defaultProps){r===a&&(r=h({},r));for(var s in e)r[s]===void 0&&(r[s]=e[s])}return r}var to=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function vu(e){to(e)}function bu(e){console.error(e)}function gu(e){to(e)}function co(e,a){try{var r=e.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function yu(e,a,r){try{var n=e.onCaughtError;n(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function q0(e,a,r){return r=wr(r),r.tag=3,r.payload={element:null},r.callback=function(){co(e,a)},r}function hu(e){return e=wr(e),e.tag=3,e}function Su(e,a,r,n){var s=r.type.getDerivedStateFromError;if(typeof s=="function"){var o=n.value;e.payload=function(){return s(o)},e.callback=function(){yu(a,r,n)}}var u=r.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){yu(a,r,n),typeof s!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var f=n.stack;this.componentDidCatch(n.value,{componentStack:f!==null?f:""})})}function Up(e,a,r,n,s){if(r.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=r.alternate,a!==null&&Ri(a,r,s,!0),r=ka.current,r!==null){switch(r.tag){case 13:return rr===null?Z0():r.alternate===null&&Fe===0&&(Fe=3),r.flags&=-257,r.flags|=65536,r.lanes=s,n===$t?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([n]):a.add(n),J0(e,n,s)),!1;case 22:return r.flags|=65536,n===$t?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([n]):r.add(n)),J0(e,n,s)),!1}throw Error(d(435,r.tag))}return J0(e,n,s),Z0(),!1}if(Ae)return a=ka.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=s,n!==Xt&&(e=Error(d(422),{cause:n}),Pi(Ha(e,r)))):(n!==Xt&&(a=Error(d(423),{cause:n}),Pi(Ha(a,r))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,n=Ha(n,r),s=q0(e.stateNode,n,s),a0(e,s),Fe!==4&&(Fe=2)),!1;var o=Error(d(520),{cause:n});if(o=Ha(o,r),$i===null?$i=[o]:$i.push(o),Fe!==4&&(Fe=2),a===null)return!0;n=Ha(n,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,e=s&-s,r.lanes|=e,e=q0(r.stateNode,n,e),a0(r,e),!1;case 1:if(a=r.type,o=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(kr===null||!kr.has(o))))return r.flags|=65536,s&=-s,r.lanes|=s,s=hu(s),Su(s,e,r,n),a0(r,s),!1}r=r.return}while(r!==null);return!1}var Tu=Error(d(461)),ta=!1;function ua(e,a,r,n){a.child=e===null?uu(a,null,r,n):Fn(a,e.child,r,n)}function ju(e,a,r,n,s){r=r.render;var o=a.ref;if("ref"in n){var u={};for(var f in n)f!=="ref"&&(u[f]=n[f])}else u=n;return pn(a),n=o0(e,a,r,u,o,s),f=t0(),e!==null&&!ta?(c0(e,a,s),br(e,a,s)):(Ae&&f&&kt(a),a.flags|=1,ua(e,a,n,s),a.child)}function qu(e,a,r,n,s){if(e===null){var o=r.type;return typeof o=="function"&&!Ut(o)&&o.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=o,xu(e,a,o,n,s)):(e=Gs(r.type,null,n,a,a.mode,s),e.ref=a.ref,e.return=a,a.child=e)}if(o=e.child,!P0(e,s)){var u=o.memoizedProps;if(r=r.compare,r=r!==null?r:Ai,r(u,n)&&e.ref===a.ref)return br(e,a,s)}return a.flags|=1,e=dr(o,n),e.ref=a.ref,e.return=a,a.child=e}function xu(e,a,r,n,s){if(e!==null){var o=e.memoizedProps;if(Ai(o,n)&&e.ref===a.ref)if(ta=!1,a.pendingProps=n=o,P0(e,s))(e.flags&131072)!==0&&(ta=!0);else return a.lanes=e.lanes,br(e,a,s)}return x0(e,a,r,n,s)}function Eu(e,a,r){var n=a.pendingProps,s=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((a.flags&128)!==0){if(n=o!==null?o.baseLanes|r:r,e!==null){for(s=a.child=e.child,o=0;s!==null;)o=o|s.lanes|s.childLanes,s=s.sibling;a.childLanes=o&~n}else a.childLanes=0,a.child=null;return Cu(e,a,n,r)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Qs(a,o!==null?o.cachePool:null),o!==null?xl(a,o):n0(),pu(a);else return a.lanes=a.childLanes=536870912,Cu(e,a,o!==null?o.baseLanes|r:r,r)}else o!==null?(Qs(a,o.cachePool),xl(a,o),Br(),a.memoizedState=null):(e!==null&&Qs(a,null),n0(),Br());return ua(e,a,s,r),a.child}function Cu(e,a,r,n){var s=Ft();return s=s===null?null:{parent:ra._currentValue,pool:s},a.memoizedState={baseLanes:r,cachePool:s},e!==null&&Qs(a,null),n0(),pu(a),e!==null&&Ri(e,a,n,!0),null}function lo(e,a){var r=a.ref;if(r===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(d(284));(e===null||e.ref!==r)&&(a.flags|=4194816)}}function x0(e,a,r,n,s){return pn(a),r=o0(e,a,r,n,void 0,s),n=t0(),e!==null&&!ta?(c0(e,a,s),br(e,a,s)):(Ae&&n&&kt(a),a.flags|=1,ua(e,a,r,s),a.child)}function Au(e,a,r,n,s,o){return pn(a),a.updateQueue=null,r=Cl(a,n,r,s),El(e),n=t0(),e!==null&&!ta?(c0(e,a,o),br(e,a,o)):(Ae&&n&&kt(a),a.flags|=1,ua(e,a,r,o),a.child)}function zu(e,a,r,n,s){if(pn(a),a.stateNode===null){var o=Gn,u=r.contextType;typeof u=="object"&&u!==null&&(o=ba(u)),o=new r(n,o),a.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=j0,a.stateNode=o,o._reactInternals=a,o=a.stateNode,o.props=n,o.state=a.memoizedState,o.refs={},Wt(a),u=r.contextType,o.context=typeof u=="object"&&u!==null?ba(u):Gn,o.state=a.memoizedState,u=r.getDerivedStateFromProps,typeof u=="function"&&(T0(a,r,u,n),o.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(u=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),u!==o.state&&j0.enqueueReplaceState(o,o.state,null),Hi(a,n,o,s),Li(),o.state=a.memoizedState),typeof o.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(e===null){o=a.stateNode;var f=a.memoizedProps,S=vn(r,f);o.props=S;var M=o.context,U=r.contextType;u=Gn,typeof U=="object"&&U!==null&&(u=ba(U));var Q=r.getDerivedStateFromProps;U=typeof Q=="function"||typeof o.getSnapshotBeforeUpdate=="function",f=a.pendingProps!==f,U||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(f||M!==u)&&fu(a,o,n,u),Rr=!1;var P=a.memoizedState;o.state=P,Hi(a,n,o,s),Li(),M=a.memoizedState,f||P!==M||Rr?(typeof Q=="function"&&(T0(a,r,Q,n),M=a.memoizedState),(S=Rr||mu(a,r,S,n,P,M,u))?(U||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(a.flags|=4194308)):(typeof o.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=M),o.props=n,o.state=M,o.context=u,n=S):(typeof o.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{o=a.stateNode,e0(e,a),u=a.memoizedProps,U=vn(r,u),o.props=U,Q=a.pendingProps,P=o.context,M=r.contextType,S=Gn,typeof M=="object"&&M!==null&&(S=ba(M)),f=r.getDerivedStateFromProps,(M=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==Q||P!==S)&&fu(a,o,n,S),Rr=!1,P=a.memoizedState,o.state=P,Hi(a,n,o,s),Li();var R=a.memoizedState;u!==Q||P!==R||Rr||e!==null&&e.dependencies!==null&&Ys(e.dependencies)?(typeof f=="function"&&(T0(a,r,f,n),R=a.memoizedState),(U=Rr||mu(a,r,U,n,P,R,S)||e!==null&&e.dependencies!==null&&Ys(e.dependencies))?(M||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,R,S),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,R,S)),typeof o.componentDidUpdate=="function"&&(a.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&P===e.memoizedState||(a.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&P===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=R),o.props=n,o.state=R,o.context=S,n=U):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&P===e.memoizedState||(a.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&P===e.memoizedState||(a.flags|=1024),n=!1)}return o=n,lo(e,a),n=(a.flags&128)!==0,o||n?(o=a.stateNode,r=n&&typeof r.getDerivedStateFromError!="function"?null:o.render(),a.flags|=1,e!==null&&n?(a.child=Fn(a,e.child,null,s),a.child=Fn(a,null,r,s)):ua(e,a,r,s),a.memoizedState=o.state,e=a.child):e=br(e,a,s),e}function Mu(e,a,r,n){return _i(),a.flags|=256,ua(e,a,r,n),a.child}var E0={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function C0(e){return{baseLanes:e,cachePool:bl()}}function A0(e,a,r){return e=e!==null?e.childLanes&~r:0,a&&(e|=Ya),e}function _u(e,a,r){var n=a.pendingProps,s=!1,o=(a.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(na.current&2)!==0),u&&(s=!0,a.flags&=-129),u=(a.flags&32)!==0,a.flags&=-33,e===null){if(Ae){if(s?Nr(a):Br(),Ae){var f=Ie,S;if(S=f){e:{for(S=f,f=ar;S.nodeType!==8;){if(!f){f=null;break e}if(S=Ia(S.nextSibling),S===null){f=null;break e}}f=S}f!==null?(a.memoizedState={dehydrated:f,treeContext:tn!==null?{id:lr,overflow:ur}:null,retryLane:536870912,hydrationErrors:null},S=Ca(18,null,null,0),S.stateNode=f,S.return=a,a.child=S,ya=a,Ie=null,S=!0):S=!1}S||ln(a)}if(f=a.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return lc(f)?a.lanes=32:a.lanes=536870912,null;vr(a)}return f=n.children,n=n.fallback,s?(Br(),s=a.mode,f=uo({mode:"hidden",children:f},s),n=on(n,s,r,null),f.return=a,n.return=a,f.sibling=n,a.child=f,s=a.child,s.memoizedState=C0(r),s.childLanes=A0(e,u,r),a.memoizedState=E0,n):(Nr(a),z0(a,f))}if(S=e.memoizedState,S!==null&&(f=S.dehydrated,f!==null)){if(o)a.flags&256?(Nr(a),a.flags&=-257,a=M0(e,a,r)):a.memoizedState!==null?(Br(),a.child=e.child,a.flags|=128,a=null):(Br(),s=n.fallback,f=a.mode,n=uo({mode:"visible",children:n.children},f),s=on(s,f,r,null),s.flags|=2,n.return=a,s.return=a,n.sibling=s,a.child=n,Fn(a,e.child,null,r),n=a.child,n.memoizedState=C0(r),n.childLanes=A0(e,u,r),a.memoizedState=E0,a=s);else if(Nr(a),lc(f)){if(u=f.nextSibling&&f.nextSibling.dataset,u)var M=u.dgst;u=M,n=Error(d(419)),n.stack="",n.digest=u,Pi({value:n,source:null,stack:null}),a=M0(e,a,r)}else if(ta||Ri(e,a,r,!1),u=(r&e.childLanes)!==0,ta||u){if(u=ke,u!==null&&(n=r&-r,n=(n&42)!==0?1:ut(n),n=(n&(u.suspendedLanes|r))!==0?0:n,n!==0&&n!==S.retryLane))throw S.retryLane=n,Un(e,n),Pa(u,e,n),Tu;f.data==="$?"||Z0(),a=M0(e,a,r)}else f.data==="$?"?(a.flags|=192,a.child=e.child,a=null):(e=S.treeContext,Ie=Ia(f.nextSibling),ya=a,Ae=!0,dn=null,ar=!1,e!==null&&(Ga[Va++]=lr,Ga[Va++]=ur,Ga[Va++]=tn,lr=e.id,ur=e.overflow,tn=a),a=z0(a,n.children),a.flags|=4096);return a}return s?(Br(),s=n.fallback,f=a.mode,S=e.child,M=S.sibling,n=dr(S,{mode:"hidden",children:n.children}),n.subtreeFlags=S.subtreeFlags&65011712,M!==null?s=dr(M,s):(s=on(s,f,r,null),s.flags|=2),s.return=a,n.return=a,n.sibling=s,a.child=n,n=s,s=a.child,f=e.child.memoizedState,f===null?f=C0(r):(S=f.cachePool,S!==null?(M=ra._currentValue,S=S.parent!==M?{parent:M,pool:M}:S):S=bl(),f={baseLanes:f.baseLanes|r,cachePool:S}),s.memoizedState=f,s.childLanes=A0(e,u,r),a.memoizedState=E0,n):(Nr(a),r=e.child,e=r.sibling,r=dr(r,{mode:"visible",children:n.children}),r.return=a,r.sibling=null,e!==null&&(u=a.deletions,u===null?(a.deletions=[e],a.flags|=16):u.push(e)),a.child=r,a.memoizedState=null,r)}function z0(e,a){return a=uo({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function uo(e,a){return e=Ca(22,e,null,a),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function M0(e,a,r){return Fn(a,e.child,null,r),e=z0(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Pu(e,a,r){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),Zt(e.return,a,r)}function _0(e,a,r,n,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:s}:(o.isBackwards=a,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=s)}function Ru(e,a,r){var n=a.pendingProps,s=n.revealOrder,o=n.tail;if(ua(e,a,n.children,r),n=na.current,(n&2)!==0)n=n&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pu(e,r,a);else if(e.tag===19)Pu(e,r,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(H(na,n),s){case"forwards":for(r=a.child,s=null;r!==null;)e=r.alternate,e!==null&&oo(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=a.child,a.child=null):(s=r.sibling,r.sibling=null),_0(a,!1,s,r,o);break;case"backwards":for(r=null,s=a.child,a.child=null;s!==null;){if(e=s.alternate,e!==null&&oo(e)===null){a.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}_0(a,!0,r,null,o);break;case"together":_0(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function br(e,a,r){if(e!==null&&(a.dependencies=e.dependencies),Vr|=a.lanes,(r&a.childLanes)===0)if(e!==null){if(Ri(e,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(d(153));if(a.child!==null){for(e=a.child,r=dr(e,e.pendingProps),a.child=r,r.return=a;e.sibling!==null;)e=e.sibling,r=r.sibling=dr(e,e.pendingProps),r.return=a;r.sibling=null}return a.child}function P0(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&Ys(e)))}function Gp(e,a,r){switch(a.tag){case 3:oe(a,a.stateNode.containerInfo),Pr(a,ra,e.memoizedState.cache),_i();break;case 27:case 5:Ve(a);break;case 4:oe(a,a.stateNode.containerInfo);break;case 10:Pr(a,a.type,a.memoizedProps.value);break;case 13:var n=a.memoizedState;if(n!==null)return n.dehydrated!==null?(Nr(a),a.flags|=128,null):(r&a.child.childLanes)!==0?_u(e,a,r):(Nr(a),e=br(e,a,r),e!==null?e.sibling:null);Nr(a);break;case 19:var s=(e.flags&128)!==0;if(n=(r&a.childLanes)!==0,n||(Ri(e,a,r,!1),n=(r&a.childLanes)!==0),s){if(n)return Ru(e,a,r);a.flags|=128}if(s=a.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),H(na,na.current),n)break;return null;case 22:case 23:return a.lanes=0,Eu(e,a,r);case 24:Pr(a,ra,e.memoizedState.cache)}return br(e,a,r)}function wu(e,a,r){if(e!==null)if(e.memoizedProps!==a.pendingProps)ta=!0;else{if(!P0(e,r)&&(a.flags&128)===0)return ta=!1,Gp(e,a,r);ta=(e.flags&131072)!==0}else ta=!1,Ae&&(a.flags&1048576)!==0&&dl(a,ks,a.index);switch(a.lanes=0,a.tag){case 16:e:{e=a.pendingProps;var n=a.elementType,s=n._init;if(n=s(n._payload),a.type=n,typeof n=="function")Ut(n)?(e=vn(n,e),a.tag=1,a=zu(null,a,n,e,r)):(a.tag=0,a=x0(null,a,n,e,r));else{if(n!=null){if(s=n.$$typeof,s===J){a.tag=11,a=ju(null,a,n,e,r);break e}else if(s===F){a.tag=14,a=qu(null,a,n,e,r);break e}}throw a=Me(n)||n,Error(d(306,a,""))}}return a;case 0:return x0(e,a,a.type,a.pendingProps,r);case 1:return n=a.type,s=vn(n,a.pendingProps),zu(e,a,n,s,r);case 3:e:{if(oe(a,a.stateNode.containerInfo),e===null)throw Error(d(387));n=a.pendingProps;var o=a.memoizedState;s=o.element,e0(e,a),Hi(a,n,null,r);var u=a.memoizedState;if(n=u.cache,Pr(a,ra,n),n!==o.cache&&Kt(a,[ra],r,!0),Li(),n=u.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:u.cache},a.updateQueue.baseState=o,a.memoizedState=o,a.flags&256){a=Mu(e,a,n,r);break e}else if(n!==s){s=Ha(Error(d(424)),a),Pi(s),a=Mu(e,a,n,r);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ie=Ia(e.firstChild),ya=a,Ae=!0,dn=null,ar=!0,r=uu(a,null,n,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(_i(),n===s){a=br(e,a,r);break e}ua(e,a,n,r)}a=a.child}return a;case 26:return lo(e,a),e===null?(r=B1(a.type,null,a.pendingProps,null))?a.memoizedState=r:Ae||(r=a.type,e=a.pendingProps,n=Eo(se.current).createElement(r),n[va]=a,n[Sa]=e,ma(n,r,e),oa(n),a.stateNode=n):a.memoizedState=B1(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Ve(a),e===null&&Ae&&(n=a.stateNode=D1(a.type,a.pendingProps,se.current),ya=a,ar=!0,s=Ie,Qr(a.type)?(uc=s,Ie=Ia(n.firstChild)):Ie=s),ua(e,a,a.pendingProps.children,r),lo(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Ae&&((s=n=Ie)&&(n=v4(n,a.type,a.pendingProps,ar),n!==null?(a.stateNode=n,ya=a,Ie=Ia(n.firstChild),ar=!1,s=!0):s=!1),s||ln(a)),Ve(a),s=a.type,o=a.pendingProps,u=e!==null?e.memoizedProps:null,n=o.children,tc(s,o)?n=null:u!==null&&tc(s,u)&&(a.flags|=32),a.memoizedState!==null&&(s=o0(e,a,wp,null,null,r),ts._currentValue=s),lo(e,a),ua(e,a,n,r),a.child;case 6:return e===null&&Ae&&((e=r=Ie)&&(r=b4(r,a.pendingProps,ar),r!==null?(a.stateNode=r,ya=a,Ie=null,e=!0):e=!1),e||ln(a)),null;case 13:return _u(e,a,r);case 4:return oe(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=Fn(a,null,n,r):ua(e,a,n,r),a.child;case 11:return ju(e,a,a.type,a.pendingProps,r);case 7:return ua(e,a,a.pendingProps,r),a.child;case 8:return ua(e,a,a.pendingProps.children,r),a.child;case 12:return ua(e,a,a.pendingProps.children,r),a.child;case 10:return n=a.pendingProps,Pr(a,a.type,n.value),ua(e,a,n.children,r),a.child;case 9:return s=a.type._context,n=a.pendingProps.children,pn(a),s=ba(s),n=n(s),a.flags|=1,ua(e,a,n,r),a.child;case 14:return qu(e,a,a.type,a.pendingProps,r);case 15:return xu(e,a,a.type,a.pendingProps,r);case 19:return Ru(e,a,r);case 31:return n=a.pendingProps,r=a.mode,n={mode:n.mode,children:n.children},e===null?(r=uo(n,r),r.ref=a.ref,a.child=r,r.return=a,a=r):(r=dr(e.child,n),r.ref=a.ref,a.child=r,r.return=a,a=r),a;case 22:return Eu(e,a,r);case 24:return pn(a),n=ba(ra),e===null?(s=Ft(),s===null&&(s=ke,o=Jt(),s.pooledCache=o,o.refCount++,o!==null&&(s.pooledCacheLanes|=r),s=o),a.memoizedState={parent:n,cache:s},Wt(a),Pr(a,ra,s)):((e.lanes&r)!==0&&(e0(e,a),Hi(a,null,null,r),Li()),s=e.memoizedState,o=a.memoizedState,s.parent!==n?(s={parent:n,cache:n},a.memoizedState=s,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=s),Pr(a,ra,n)):(n=o.cache,Pr(a,ra,n),n!==s.cache&&Kt(a,[ra],r,!0))),ua(e,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(d(156,a.tag))}function gr(e){e.flags|=4}function Du(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!V1(a)){if(a=ka.current,a!==null&&((Te&4194048)===Te?rr!==null:(Te&62914560)!==Te&&(Te&536870912)===0||a!==rr))throw Ni=$t,gl;e.flags|=8192}}function po(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?pd():536870912,e.lanes|=a,ai|=a)}function Qi(e,a){if(!Ae)switch(e.tailMode){case"hidden":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ze(e){var a=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(a)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags&65011712,n|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=n,e.childLanes=r,a}function Vp(e,a,r){var n=a.pendingProps;switch(Yt(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(a),null;case 1:return Ze(a),null;case 3:return r=a.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),mr(ra),ve(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Mi(a)?gr(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,pl())),Ze(a),null;case 26:return r=a.memoizedState,e===null?(gr(a),r!==null?(Ze(a),Du(a,r)):(Ze(a),a.flags&=-16777217)):r?r!==e.memoizedState?(gr(a),Ze(a),Du(a,r)):(Ze(a),a.flags&=-16777217):(e.memoizedProps!==n&&gr(a),Ze(a),a.flags&=-16777217),null;case 27:me(a),r=se.current;var s=a.type;if(e!==null&&a.stateNode!=null)e.memoizedProps!==n&&gr(a);else{if(!n){if(a.stateNode===null)throw Error(d(166));return Ze(a),null}e=ne.current,Mi(a)?ll(a):(e=D1(s,n,r),a.stateNode=e,gr(a))}return Ze(a),null;case 5:if(me(a),r=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&gr(a);else{if(!n){if(a.stateNode===null)throw Error(d(166));return Ze(a),null}if(e=ne.current,Mi(a))ll(a);else{switch(s=Eo(se.current),e){case 1:e=s.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=s.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=s.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=s.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?s.createElement("select",{is:n.is}):s.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?s.createElement(r,{is:n.is}):s.createElement(r)}}e[va]=a,e[Sa]=n;e:for(s=a.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===a)break e;for(;s.sibling===null;){if(s.return===null||s.return===a)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}a.stateNode=e;e:switch(ma(e,r,n),r){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&gr(a)}}return Ze(a),a.flags&=-16777217,null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==n&&gr(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(d(166));if(e=se.current,Mi(a)){if(e=a.stateNode,r=a.memoizedProps,n=null,s=ya,s!==null)switch(s.tag){case 27:case 5:n=s.memoizedProps}e[va]=a,e=!!(e.nodeValue===r||n!==null&&n.suppressHydrationWarning===!0||A1(e.nodeValue,r)),e||ln(a)}else e=Eo(e).createTextNode(n),e[va]=a,a.stateNode=e}return Ze(a),null;case 13:if(n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Mi(a),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(d(318));if(s=a.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(d(317));s[va]=a}else _i(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ze(a),s=!1}else s=pl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return a.flags&256?(vr(a),a):(vr(a),null)}if(vr(a),(a.flags&128)!==0)return a.lanes=r,a;if(r=n!==null,e=e!==null&&e.memoizedState!==null,r){n=a.child,s=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(s=n.alternate.memoizedState.cachePool.pool);var o=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==s&&(n.flags|=2048)}return r!==e&&r&&(a.child.flags|=8192),po(a,a.updateQueue),Ze(a),null;case 4:return ve(),e===null&&rc(a.stateNode.containerInfo),Ze(a),null;case 10:return mr(a.type),Ze(a),null;case 19:if(I(na),s=a.memoizedState,s===null)return Ze(a),null;if(n=(a.flags&128)!==0,o=s.rendering,o===null)if(n)Qi(s,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(o=oo(e),o!==null){for(a.flags|=128,Qi(s,!1),e=o.updateQueue,a.updateQueue=e,po(a,e),a.subtreeFlags=0,e=r,r=a.child;r!==null;)cl(r,e),r=r.sibling;return H(na,na.current&1|2),a.child}e=e.sibling}s.tail!==null&&Le()>vo&&(a.flags|=128,n=!0,Qi(s,!1),a.lanes=4194304)}else{if(!n)if(e=oo(o),e!==null){if(a.flags|=128,n=!0,e=e.updateQueue,a.updateQueue=e,po(a,e),Qi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ae)return Ze(a),null}else 2*Le()-s.renderingStartTime>vo&&r!==536870912&&(a.flags|=128,n=!0,Qi(s,!1),a.lanes=4194304);s.isBackwards?(o.sibling=a.child,a.child=o):(e=s.last,e!==null?e.sibling=o:a.child=o,s.last=o)}return s.tail!==null?(a=s.tail,s.rendering=a,s.tail=a.sibling,s.renderingStartTime=Le(),a.sibling=null,e=na.current,H(na,n?e&1|2:e&1),a):(Ze(a),null);case 22:case 23:return vr(a),i0(),n=a.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?(r&536870912)!==0&&(a.flags&128)===0&&(Ze(a),a.subtreeFlags&6&&(a.flags|=8192)):Ze(a),r=a.updateQueue,r!==null&&po(a,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==r&&(a.flags|=2048),e!==null&&I(mn),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),mr(ra),Ze(a),null;case 25:return null;case 30:return null}throw Error(d(156,a.tag))}function kp(e,a){switch(Yt(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return mr(ra),ve(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return me(a),null;case 13:if(vr(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(d(340));_i()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return I(na),null;case 4:return ve(),null;case 10:return mr(a.type),null;case 22:case 23:return vr(a),i0(),e!==null&&I(mn),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return mr(ra),null;case 25:return null;default:return null}}function Ou(e,a){switch(Yt(a),a.tag){case 3:mr(ra),ve();break;case 26:case 27:case 5:me(a);break;case 4:ve();break;case 13:vr(a);break;case 19:I(na);break;case 10:mr(a.type);break;case 22:case 23:vr(a),i0(),e!==null&&I(mn);break;case 24:mr(ra)}}function Zi(e,a){try{var r=a.updateQueue,n=r!==null?r.lastEffect:null;if(n!==null){var s=n.next;r=s;do{if((r.tag&e)===e){n=void 0;var o=r.create,u=r.inst;n=o(),u.destroy=n}r=r.next}while(r!==s)}}catch(f){Ue(a,a.return,f)}}function Lr(e,a,r){try{var n=a.updateQueue,s=n!==null?n.lastEffect:null;if(s!==null){var o=s.next;n=o;do{if((n.tag&e)===e){var u=n.inst,f=u.destroy;if(f!==void 0){u.destroy=void 0,s=a;var S=r,M=f;try{M()}catch(U){Ue(s,S,U)}}}n=n.next}while(n!==o)}}catch(U){Ue(a,a.return,U)}}function Nu(e){var a=e.updateQueue;if(a!==null){var r=e.stateNode;try{ql(a,r)}catch(n){Ue(e,e.return,n)}}}function Bu(e,a,r){r.props=vn(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(n){Ue(e,a,n)}}function Ki(e,a){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof r=="function"?e.refCleanup=r(n):r.current=n}}catch(s){Ue(e,a,s)}}function nr(e,a){var r=e.ref,n=e.refCleanup;if(r!==null)if(typeof n=="function")try{n()}catch(s){Ue(e,a,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(s){Ue(e,a,s)}else r.current=null}function Lu(e){var a=e.type,r=e.memoizedProps,n=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&n.focus();break e;case"img":r.src?n.src=r.src:r.srcSet&&(n.srcset=r.srcSet)}}catch(s){Ue(e,e.return,s)}}function R0(e,a,r){try{var n=e.stateNode;l4(n,e.type,r,a),n[Sa]=a}catch(s){Ue(e,e.return,s)}}function Hu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qr(e.type)||e.tag===4}function w0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function D0(e,a,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(e),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=xo));else if(n!==4&&(n===27&&Qr(e.type)&&(r=e.stateNode,a=null),e=e.child,e!==null))for(D0(e,a,r),e=e.sibling;e!==null;)D0(e,a,r),e=e.sibling}function mo(e,a,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?r.insertBefore(e,a):r.appendChild(e);else if(n!==4&&(n===27&&Qr(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(mo(e,a,r),e=e.sibling;e!==null;)mo(e,a,r),e=e.sibling}function Uu(e){var a=e.stateNode,r=e.memoizedProps;try{for(var n=e.type,s=a.attributes;s.length;)a.removeAttributeNode(s[0]);ma(a,n,r),a[va]=e,a[Sa]=r}catch(o){Ue(e,e.return,o)}}var yr=!1,We=!1,O0=!1,Gu=typeof WeakSet=="function"?WeakSet:Set,ca=null;function Yp(e,a){if(e=e.containerInfo,sc=Po,e=$d(e),wt(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var s=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var u=0,f=-1,S=-1,M=0,U=0,Q=e,P=null;a:for(;;){for(var R;Q!==r||s!==0&&Q.nodeType!==3||(f=u+s),Q!==o||n!==0&&Q.nodeType!==3||(S=u+n),Q.nodeType===3&&(u+=Q.nodeValue.length),(R=Q.firstChild)!==null;)P=Q,Q=R;for(;;){if(Q===e)break a;if(P===r&&++M===s&&(f=u),P===o&&++U===n&&(S=u),(R=Q.nextSibling)!==null)break;Q=P,P=Q.parentNode}Q=R}r=f===-1||S===-1?null:{start:f,end:S}}else r=null}r=r||{start:0,end:0}}else r=null;for(oc={focusedElem:e,selectionRange:r},Po=!1,ca=a;ca!==null;)if(a=ca,e=a.child,(a.subtreeFlags&1024)!==0&&e!==null)e.return=a,ca=e;else for(;ca!==null;){switch(a=ca,o=a.alternate,e=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,r=a,s=o.memoizedProps,o=o.memoizedState,n=r.stateNode;try{var pe=vn(r.type,s,r.elementType===r.type);e=n.getSnapshotBeforeUpdate(pe,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(de){Ue(r,r.return,de)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,r=e.nodeType,r===9)dc(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":dc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=a.sibling,e!==null){e.return=a.return,ca=e;break}ca=a.return}}function Vu(e,a,r){var n=r.flags;switch(r.tag){case 0:case 11:case 15:Hr(e,r),n&4&&Zi(5,r);break;case 1:if(Hr(e,r),n&4)if(e=r.stateNode,a===null)try{e.componentDidMount()}catch(u){Ue(r,r.return,u)}else{var s=vn(r.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(s,a,e.__reactInternalSnapshotBeforeUpdate)}catch(u){Ue(r,r.return,u)}}n&64&&Nu(r),n&512&&Ki(r,r.return);break;case 3:if(Hr(e,r),n&64&&(e=r.updateQueue,e!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{ql(e,a)}catch(u){Ue(r,r.return,u)}}break;case 27:a===null&&n&4&&Uu(r);case 26:case 5:Hr(e,r),a===null&&n&4&&Lu(r),n&512&&Ki(r,r.return);break;case 12:Hr(e,r);break;case 13:Hr(e,r),n&4&&Xu(e,r),n&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=Wp.bind(null,r),g4(e,r))));break;case 22:if(n=r.memoizedState!==null||yr,!n){a=a!==null&&a.memoizedState!==null||We,s=yr;var o=We;yr=n,(We=a)&&!o?Ur(e,r,(r.subtreeFlags&8772)!==0):Hr(e,r),yr=s,We=o}break;case 30:break;default:Hr(e,r)}}function ku(e){var a=e.alternate;a!==null&&(e.alternate=null,ku(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&ft(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,qa=!1;function hr(e,a,r){for(r=r.child;r!==null;)Yu(e,a,r),r=r.sibling}function Yu(e,a,r){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(Ye,r)}catch{}switch(r.tag){case 26:We||nr(r,a),hr(e,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:We||nr(r,a);var n=Xe,s=qa;Qr(r.type)&&(Xe=r.stateNode,qa=!1),hr(e,a,r),ns(r.stateNode),Xe=n,qa=s;break;case 5:We||nr(r,a);case 6:if(n=Xe,s=qa,Xe=null,hr(e,a,r),Xe=n,qa=s,Xe!==null)if(qa)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(r.stateNode)}catch(o){Ue(r,a,o)}else try{Xe.removeChild(r.stateNode)}catch(o){Ue(r,a,o)}break;case 18:Xe!==null&&(qa?(e=Xe,R1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),us(e)):R1(Xe,r.stateNode));break;case 4:n=Xe,s=qa,Xe=r.stateNode.containerInfo,qa=!0,hr(e,a,r),Xe=n,qa=s;break;case 0:case 11:case 14:case 15:We||Lr(2,r,a),We||Lr(4,r,a),hr(e,a,r);break;case 1:We||(nr(r,a),n=r.stateNode,typeof n.componentWillUnmount=="function"&&Bu(r,a,n)),hr(e,a,r);break;case 21:hr(e,a,r);break;case 22:We=(n=We)||r.memoizedState!==null,hr(e,a,r),We=n;break;default:hr(e,a,r)}}function Xu(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{us(e)}catch(r){Ue(a,a.return,r)}}function Xp(e){switch(e.tag){case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Gu),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Gu),a;default:throw Error(d(435,e.tag))}}function N0(e,a){var r=Xp(e);a.forEach(function(n){var s=e4.bind(null,e,n);r.has(n)||(r.add(n),n.then(s,s))})}function Aa(e,a){var r=a.deletions;if(r!==null)for(var n=0;n<r.length;n++){var s=r[n],o=e,u=a,f=u;e:for(;f!==null;){switch(f.tag){case 27:if(Qr(f.type)){Xe=f.stateNode,qa=!1;break e}break;case 5:Xe=f.stateNode,qa=!1;break e;case 3:case 4:Xe=f.stateNode.containerInfo,qa=!0;break e}f=f.return}if(Xe===null)throw Error(d(160));Yu(o,u,s),Xe=null,qa=!1,o=s.alternate,o!==null&&(o.return=null),s.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)Qu(a,e),a=a.sibling}var Ja=null;function Qu(e,a){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Aa(a,e),za(e),n&4&&(Lr(3,e,e.return),Zi(3,e),Lr(5,e,e.return));break;case 1:Aa(a,e),za(e),n&512&&(We||r===null||nr(r,r.return)),n&64&&yr&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?n:r.concat(n))));break;case 26:var s=Ja;if(Aa(a,e),za(e),n&512&&(We||r===null||nr(r,r.return)),n&4){var o=r!==null?r.memoizedState:null;if(n=e.memoizedState,r===null)if(n===null)if(e.stateNode===null){e:{n=e.type,r=e.memoizedProps,s=s.ownerDocument||s;a:switch(n){case"title":o=s.getElementsByTagName("title")[0],(!o||o[yi]||o[va]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=s.createElement(n),s.head.insertBefore(o,s.querySelector("head > title"))),ma(o,n,r),o[va]=e,oa(o),n=o;break e;case"link":var u=U1("link","href",s).get(n+(r.href||""));if(u){for(var f=0;f<u.length;f++)if(o=u[f],o.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&o.getAttribute("rel")===(r.rel==null?null:r.rel)&&o.getAttribute("title")===(r.title==null?null:r.title)&&o.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){u.splice(f,1);break a}}o=s.createElement(n),ma(o,n,r),s.head.appendChild(o);break;case"meta":if(u=U1("meta","content",s).get(n+(r.content||""))){for(f=0;f<u.length;f++)if(o=u[f],o.getAttribute("content")===(r.content==null?null:""+r.content)&&o.getAttribute("name")===(r.name==null?null:r.name)&&o.getAttribute("property")===(r.property==null?null:r.property)&&o.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&o.getAttribute("charset")===(r.charSet==null?null:r.charSet)){u.splice(f,1);break a}}o=s.createElement(n),ma(o,n,r),s.head.appendChild(o);break;default:throw Error(d(468,n))}o[va]=e,oa(o),n=o}e.stateNode=n}else G1(s,e.type,e.stateNode);else e.stateNode=H1(s,n,e.memoizedProps);else o!==n?(o===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):o.count--,n===null?G1(s,e.type,e.stateNode):H1(s,n,e.memoizedProps)):n===null&&e.stateNode!==null&&R0(e,e.memoizedProps,r.memoizedProps)}break;case 27:Aa(a,e),za(e),n&512&&(We||r===null||nr(r,r.return)),r!==null&&n&4&&R0(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Aa(a,e),za(e),n&512&&(We||r===null||nr(r,r.return)),e.flags&32){s=e.stateNode;try{wn(s,"")}catch(R){Ue(e,e.return,R)}}n&4&&e.stateNode!=null&&(s=e.memoizedProps,R0(e,s,r!==null?r.memoizedProps:s)),n&1024&&(O0=!0);break;case 6:if(Aa(a,e),za(e),n&4){if(e.stateNode===null)throw Error(d(162));n=e.memoizedProps,r=e.stateNode;try{r.nodeValue=n}catch(R){Ue(e,e.return,R)}}break;case 3:if(zo=null,s=Ja,Ja=Co(a.containerInfo),Aa(a,e),Ja=s,za(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{us(a.containerInfo)}catch(R){Ue(e,e.return,R)}O0&&(O0=!1,Zu(e));break;case 4:n=Ja,Ja=Co(e.stateNode.containerInfo),Aa(a,e),za(e),Ja=n;break;case 12:Aa(a,e),za(e);break;case 13:Aa(a,e),za(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(V0=Le()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,N0(e,n)));break;case 22:s=e.memoizedState!==null;var S=r!==null&&r.memoizedState!==null,M=yr,U=We;if(yr=M||s,We=U||S,Aa(a,e),We=U,yr=M,za(e),n&8192)e:for(a=e.stateNode,a._visibility=s?a._visibility&-2:a._visibility|1,s&&(r===null||S||yr||We||bn(e)),r=null,a=e;;){if(a.tag===5||a.tag===26){if(r===null){S=r=a;try{if(o=S.stateNode,s)u=o.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{f=S.stateNode;var Q=S.memoizedProps.style,P=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;f.style.display=P==null||typeof P=="boolean"?"":(""+P).trim()}}catch(R){Ue(S,S.return,R)}}}else if(a.tag===6){if(r===null){S=a;try{S.stateNode.nodeValue=s?"":S.memoizedProps}catch(R){Ue(S,S.return,R)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}n&4&&(n=e.updateQueue,n!==null&&(r=n.retryQueue,r!==null&&(n.retryQueue=null,N0(e,r))));break;case 19:Aa(a,e),za(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,N0(e,n)));break;case 30:break;case 21:break;default:Aa(a,e),za(e)}}function za(e){var a=e.flags;if(a&2){try{for(var r,n=e.return;n!==null;){if(Hu(n)){r=n;break}n=n.return}if(r==null)throw Error(d(160));switch(r.tag){case 27:var s=r.stateNode,o=w0(e);mo(e,o,s);break;case 5:var u=r.stateNode;r.flags&32&&(wn(u,""),r.flags&=-33);var f=w0(e);mo(e,f,u);break;case 3:case 4:var S=r.stateNode.containerInfo,M=w0(e);D0(e,M,S);break;default:throw Error(d(161))}}catch(U){Ue(e,e.return,U)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Zu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Zu(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Hr(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Vu(e,a.alternate,a),a=a.sibling}function bn(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Lr(4,a,a.return),bn(a);break;case 1:nr(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&Bu(a,a.return,r),bn(a);break;case 27:ns(a.stateNode);case 26:case 5:nr(a,a.return),bn(a);break;case 22:a.memoizedState===null&&bn(a);break;case 30:bn(a);break;default:bn(a)}e=e.sibling}}function Ur(e,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var n=a.alternate,s=e,o=a,u=o.flags;switch(o.tag){case 0:case 11:case 15:Ur(s,o,r),Zi(4,o);break;case 1:if(Ur(s,o,r),n=o,s=n.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(M){Ue(n,n.return,M)}if(n=o,s=n.updateQueue,s!==null){var f=n.stateNode;try{var S=s.shared.hiddenCallbacks;if(S!==null)for(s.shared.hiddenCallbacks=null,s=0;s<S.length;s++)jl(S[s],f)}catch(M){Ue(n,n.return,M)}}r&&u&64&&Nu(o),Ki(o,o.return);break;case 27:Uu(o);case 26:case 5:Ur(s,o,r),r&&n===null&&u&4&&Lu(o),Ki(o,o.return);break;case 12:Ur(s,o,r);break;case 13:Ur(s,o,r),r&&u&4&&Xu(s,o);break;case 22:o.memoizedState===null&&Ur(s,o,r),Ki(o,o.return);break;case 30:break;default:Ur(s,o,r)}a=a.sibling}}function B0(e,a){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&wi(r))}function L0(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&wi(e))}function ir(e,a,r,n){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Ku(e,a,r,n),a=a.sibling}function Ku(e,a,r,n){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ir(e,a,r,n),s&2048&&Zi(9,a);break;case 1:ir(e,a,r,n);break;case 3:ir(e,a,r,n),s&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&wi(e)));break;case 12:if(s&2048){ir(e,a,r,n),e=a.stateNode;try{var o=a.memoizedProps,u=o.id,f=o.onPostCommit;typeof f=="function"&&f(u,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Ue(a,a.return,S)}}else ir(e,a,r,n);break;case 13:ir(e,a,r,n);break;case 23:break;case 22:o=a.stateNode,u=a.alternate,a.memoizedState!==null?o._visibility&2?ir(e,a,r,n):Ji(e,a):o._visibility&2?ir(e,a,r,n):(o._visibility|=2,$n(e,a,r,n,(a.subtreeFlags&10256)!==0)),s&2048&&B0(u,a);break;case 24:ir(e,a,r,n),s&2048&&L0(a.alternate,a);break;default:ir(e,a,r,n)}}function $n(e,a,r,n,s){for(s=s&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var o=e,u=a,f=r,S=n,M=u.flags;switch(u.tag){case 0:case 11:case 15:$n(o,u,f,S,s),Zi(8,u);break;case 23:break;case 22:var U=u.stateNode;u.memoizedState!==null?U._visibility&2?$n(o,u,f,S,s):Ji(o,u):(U._visibility|=2,$n(o,u,f,S,s)),s&&M&2048&&B0(u.alternate,u);break;case 24:$n(o,u,f,S,s),s&&M&2048&&L0(u.alternate,u);break;default:$n(o,u,f,S,s)}a=a.sibling}}function Ji(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=e,n=a,s=n.flags;switch(n.tag){case 22:Ji(r,n),s&2048&&B0(n.alternate,n);break;case 24:Ji(r,n),s&2048&&L0(n.alternate,n);break;default:Ji(r,n)}a=a.sibling}}var Ii=8192;function Wn(e){if(e.subtreeFlags&Ii)for(e=e.child;e!==null;)Ju(e),e=e.sibling}function Ju(e){switch(e.tag){case 26:Wn(e),e.flags&Ii&&e.memoizedState!==null&&_4(Ja,e.memoizedState,e.memoizedProps);break;case 5:Wn(e);break;case 3:case 4:var a=Ja;Ja=Co(e.stateNode.containerInfo),Wn(e),Ja=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ii,Ii=16777216,Wn(e),Ii=a):Wn(e));break;default:Wn(e)}}function Iu(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Fi(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var n=a[r];ca=n,$u(n,e)}Iu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fu(e),e=e.sibling}function Fu(e){switch(e.tag){case 0:case 11:case 15:Fi(e),e.flags&2048&&Lr(9,e,e.return);break;case 3:Fi(e);break;case 12:Fi(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,fo(e)):Fi(e);break;default:Fi(e)}}function fo(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var n=a[r];ca=n,$u(n,e)}Iu(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Lr(8,a,a.return),fo(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,fo(a));break;default:fo(a)}e=e.sibling}}function $u(e,a){for(;ca!==null;){var r=ca;switch(r.tag){case 0:case 11:case 15:Lr(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var n=r.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:wi(r.memoizedState.cache)}if(n=r.child,n!==null)n.return=r,ca=n;else e:for(r=e;ca!==null;){n=ca;var s=n.sibling,o=n.return;if(ku(n),n===r){ca=null;break e}if(s!==null){s.return=o,ca=s;break e}ca=o}}}var Qp={getCacheForType:function(e){var a=ba(ra),r=a.data.get(e);return r===void 0&&(r=e(),a.data.set(e,r)),r}},Zp=typeof WeakMap=="function"?WeakMap:Map,_e=0,ke=null,he=null,Te=0,Pe=0,Ma=null,Gr=!1,ei=!1,H0=!1,Sr=0,Fe=0,Vr=0,gn=0,U0=0,Ya=0,ai=0,$i=null,xa=null,G0=!1,V0=0,vo=1/0,bo=null,kr=null,pa=0,Yr=null,ri=null,ni=0,k0=0,Y0=null,Wu=null,Wi=0,X0=null;function _a(){if((_e&2)!==0&&Te!==0)return Te&-Te;if(N.T!==null){var e=Yn;return e!==0?e:$0()}return vd()}function e1(){Ya===0&&(Ya=(Te&536870912)===0||Ae?ud():536870912);var e=ka.current;return e!==null&&(e.flags|=32),Ya}function Pa(e,a,r){(e===ke&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(ii(e,0),Xr(e,Te,Ya,!1)),gi(e,r),((_e&2)===0||e!==ke)&&(e===ke&&((_e&2)===0&&(gn|=r),Fe===4&&Xr(e,Te,Ya,!1)),sr(e))}function a1(e,a,r){if((_e&6)!==0)throw Error(d(327));var n=!r&&(a&124)===0&&(a&e.expiredLanes)===0||bi(e,a),s=n?Ip(e,a):K0(e,a,!0),o=n;do{if(s===0){ei&&!n&&Xr(e,a,0,!1);break}else{if(r=e.current.alternate,o&&!Kp(r)){s=K0(e,a,!1),o=!1;continue}if(s===2){if(o=a,e.errorRecoveryDisabledLanes&o)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){a=u;e:{var f=e;s=$i;var S=f.current.memoizedState.isDehydrated;if(S&&(ii(f,u).flags|=256),u=K0(f,u,!1),u!==2){if(H0&&!S){f.errorRecoveryDisabledLanes|=o,gn|=o,s=4;break e}o=xa,xa=s,o!==null&&(xa===null?xa=o:xa.push.apply(xa,o))}s=u}if(o=!1,s!==2)continue}}if(s===1){ii(e,0),Xr(e,a,0,!0);break}e:{switch(n=e,o=s,o){case 0:case 1:throw Error(d(345));case 4:if((a&4194048)!==a)break;case 6:Xr(n,a,Ya,!Gr);break e;case 2:xa=null;break;case 3:case 5:break;default:throw Error(d(329))}if((a&62914560)===a&&(s=V0+300-Le(),10<s)){if(Xr(n,a,Ya,!Gr),Cs(n,0,!0)!==0)break e;n.timeoutHandle=_1(r1.bind(null,n,r,xa,bo,G0,a,Ya,gn,ai,Gr,o,2,-0,0),s);break e}r1(n,r,xa,bo,G0,a,Ya,gn,ai,Gr,o,0,-0,0)}}break}while(!0);sr(e)}function r1(e,a,r,n,s,o,u,f,S,M,U,Q,P,R){if(e.timeoutHandle=-1,Q=a.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(os={stylesheets:null,count:0,unsuspend:M4},Ju(a),Q=P4(),Q!==null)){e.cancelPendingCommit=Q(d1.bind(null,e,a,o,r,n,s,u,f,S,U,1,P,R)),Xr(e,o,u,!M);return}d1(e,a,o,r,n,s,u,f,S)}function Kp(e){for(var a=e;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var n=0;n<r.length;n++){var s=r[n],o=s.getSnapshot;s=s.value;try{if(!Ea(o(),s))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Xr(e,a,r,n){a&=~U0,a&=~gn,e.suspendedLanes|=a,e.pingedLanes&=~a,n&&(e.warmLanes|=a),n=e.expirationTimes;for(var s=a;0<s;){var o=31-la(s),u=1<<o;n[o]=-1,s&=~u}r!==0&&md(e,r,a)}function go(){return(_e&6)===0?(es(0),!1):!0}function Q0(){if(he!==null){if(Pe===0)var e=he.return;else e=he,pr=un=null,d0(e),In=null,Yi=0,e=he;for(;e!==null;)Ou(e.alternate,e),e=e.return;he=null}}function ii(e,a){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,p4(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Q0(),ke=e,he=r=dr(e.current,null),Te=a,Pe=0,Ma=null,Gr=!1,ei=bi(e,a),H0=!1,ai=Ya=U0=gn=Vr=Fe=0,xa=$i=null,G0=!1,(a&8)!==0&&(a|=a&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=a;0<n;){var s=31-la(n),o=1<<s;a|=e[s],n&=~o}return Sr=a,Ls(),r}function n1(e,a){ge=null,N.H=no,a===Oi||a===Zs?(a=Sl(),Pe=3):a===gl?(a=Sl(),Pe=4):Pe=a===Tu?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Ma=a,he===null&&(Fe=1,co(e,Ha(a,e.current)))}function i1(){var e=N.H;return N.H=no,e===null?no:e}function s1(){var e=N.A;return N.A=Qp,e}function Z0(){Fe=4,Gr||(Te&4194048)!==Te&&ka.current!==null||(ei=!0),(Vr&134217727)===0&&(gn&134217727)===0||ke===null||Xr(ke,Te,Ya,!1)}function K0(e,a,r){var n=_e;_e|=2;var s=i1(),o=s1();(ke!==e||Te!==a)&&(bo=null,ii(e,a)),a=!1;var u=Fe;e:do try{if(Pe!==0&&he!==null){var f=he,S=Ma;switch(Pe){case 8:Q0(),u=6;break e;case 3:case 2:case 9:case 6:ka.current===null&&(a=!0);var M=Pe;if(Pe=0,Ma=null,si(e,f,S,M),r&&ei){u=0;break e}break;default:M=Pe,Pe=0,Ma=null,si(e,f,S,M)}}Jp(),u=Fe;break}catch(U){n1(e,U)}while(!0);return a&&e.shellSuspendCounter++,pr=un=null,_e=n,N.H=s,N.A=o,he===null&&(ke=null,Te=0,Ls()),u}function Jp(){for(;he!==null;)o1(he)}function Ip(e,a){var r=_e;_e|=2;var n=i1(),s=s1();ke!==e||Te!==a?(bo=null,vo=Le()+500,ii(e,a)):ei=bi(e,a);e:do try{if(Pe!==0&&he!==null){a=he;var o=Ma;a:switch(Pe){case 1:Pe=0,Ma=null,si(e,a,o,1);break;case 2:case 9:if(yl(o)){Pe=0,Ma=null,t1(a);break}a=function(){Pe!==2&&Pe!==9||ke!==e||(Pe=7),sr(e)},o.then(a,a);break e;case 3:Pe=7;break e;case 4:Pe=5;break e;case 7:yl(o)?(Pe=0,Ma=null,t1(a)):(Pe=0,Ma=null,si(e,a,o,7));break;case 5:var u=null;switch(he.tag){case 26:u=he.memoizedState;case 5:case 27:var f=he;if(!u||V1(u)){Pe=0,Ma=null;var S=f.sibling;if(S!==null)he=S;else{var M=f.return;M!==null?(he=M,yo(M)):he=null}break a}}Pe=0,Ma=null,si(e,a,o,5);break;case 6:Pe=0,Ma=null,si(e,a,o,6);break;case 8:Q0(),Fe=6;break e;default:throw Error(d(462))}}Fp();break}catch(U){n1(e,U)}while(!0);return pr=un=null,N.H=n,N.A=s,_e=r,he!==null?0:(ke=null,Te=0,Ls(),Fe)}function Fp(){for(;he!==null&&!ze();)o1(he)}function o1(e){var a=wu(e.alternate,e,Sr);e.memoizedProps=e.pendingProps,a===null?yo(e):he=a}function t1(e){var a=e,r=a.alternate;switch(a.tag){case 15:case 0:a=Au(r,a,a.pendingProps,a.type,void 0,Te);break;case 11:a=Au(r,a,a.pendingProps,a.type.render,a.ref,Te);break;case 5:d0(a);default:Ou(r,a),a=he=cl(a,Sr),a=wu(r,a,Sr)}e.memoizedProps=e.pendingProps,a===null?yo(e):he=a}function si(e,a,r,n){pr=un=null,d0(a),In=null,Yi=0;var s=a.return;try{if(Up(e,s,a,r,Te)){Fe=1,co(e,Ha(r,e.current)),he=null;return}}catch(o){if(s!==null)throw he=s,o;Fe=1,co(e,Ha(r,e.current)),he=null;return}a.flags&32768?(Ae||n===1?e=!0:ei||(Te&536870912)!==0?e=!1:(Gr=e=!0,(n===2||n===9||n===3||n===6)&&(n=ka.current,n!==null&&n.tag===13&&(n.flags|=16384))),c1(a,e)):yo(a)}function yo(e){var a=e;do{if((a.flags&32768)!==0){c1(a,Gr);return}e=a.return;var r=Vp(a.alternate,a,Sr);if(r!==null){he=r;return}if(a=a.sibling,a!==null){he=a;return}he=a=e}while(a!==null);Fe===0&&(Fe=5)}function c1(e,a){do{var r=kp(e.alternate,e);if(r!==null){r.flags&=32767,he=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(e=e.sibling,e!==null)){he=e;return}he=e=r}while(e!==null);Fe=6,he=null}function d1(e,a,r,n,s,o,u,f,S){e.cancelPendingCommit=null;do ho();while(pa!==0);if((_e&6)!==0)throw Error(d(327));if(a!==null){if(a===e.current)throw Error(d(177));if(o=a.lanes|a.childLanes,o|=Lt,M3(e,r,o,u,f,S),e===ke&&(he=ke=null,Te=0),ri=a,Yr=e,ni=r,k0=o,Y0=s,Wu=n,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,a4(Za,function(){return f1(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||n){n=N.T,N.T=null,s=X.p,X.p=2,u=_e,_e|=4;try{Yp(e,a,r)}finally{_e=u,X.p=s,N.T=n}}pa=1,l1(),u1(),p1()}}function l1(){if(pa===1){pa=0;var e=Yr,a=ri,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=N.T,N.T=null;var n=X.p;X.p=2;var s=_e;_e|=4;try{Qu(a,e);var o=oc,u=$d(e.containerInfo),f=o.focusedElem,S=o.selectionRange;if(u!==f&&f&&f.ownerDocument&&Fd(f.ownerDocument.documentElement,f)){if(S!==null&&wt(f)){var M=S.start,U=S.end;if(U===void 0&&(U=M),"selectionStart"in f)f.selectionStart=M,f.selectionEnd=Math.min(U,f.value.length);else{var Q=f.ownerDocument||document,P=Q&&Q.defaultView||window;if(P.getSelection){var R=P.getSelection(),pe=f.textContent.length,de=Math.min(S.start,pe),Be=S.end===void 0?de:Math.min(S.end,pe);!R.extend&&de>Be&&(u=Be,Be=de,de=u);var E=Id(f,de),x=Id(f,Be);if(E&&x&&(R.rangeCount!==1||R.anchorNode!==E.node||R.anchorOffset!==E.offset||R.focusNode!==x.node||R.focusOffset!==x.offset)){var z=Q.createRange();z.setStart(E.node,E.offset),R.removeAllRanges(),de>Be?(R.addRange(z),R.extend(x.node,x.offset)):(z.setEnd(x.node,x.offset),R.addRange(z))}}}}for(Q=[],R=f;R=R.parentNode;)R.nodeType===1&&Q.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<Q.length;f++){var V=Q[f];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}Po=!!sc,oc=sc=null}finally{_e=s,X.p=n,N.T=r}}e.current=a,pa=2}}function u1(){if(pa===2){pa=0;var e=Yr,a=ri,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=N.T,N.T=null;var n=X.p;X.p=2;var s=_e;_e|=4;try{Vu(e,a.alternate,a)}finally{_e=s,X.p=n,N.T=r}}pa=3}}function p1(){if(pa===4||pa===3){pa=0,be();var e=Yr,a=ri,r=ni,n=Wu;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?pa=5:(pa=0,ri=Yr=null,m1(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(kr=null),pt(r),a=a.stateNode,De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(Ye,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=N.T,s=X.p,X.p=2,N.T=null;try{for(var o=e.onRecoverableError,u=0;u<n.length;u++){var f=n[u];o(f.value,{componentStack:f.stack})}}finally{N.T=a,X.p=s}}(ni&3)!==0&&ho(),sr(e),s=e.pendingLanes,(r&4194090)!==0&&(s&42)!==0?e===X0?Wi++:(Wi=0,X0=e):Wi=0,es(0)}}function m1(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,wi(a)))}function ho(e){return l1(),u1(),p1(),f1()}function f1(){if(pa!==5)return!1;var e=Yr,a=k0;k0=0;var r=pt(ni),n=N.T,s=X.p;try{X.p=32>r?32:r,N.T=null,r=Y0,Y0=null;var o=Yr,u=ni;if(pa=0,ri=Yr=null,ni=0,(_e&6)!==0)throw Error(d(331));var f=_e;if(_e|=4,Fu(o.current),Ku(o,o.current,u,r),_e=f,es(0,!1),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(Ye,o)}catch{}return!0}finally{X.p=s,N.T=n,m1(e,a)}}function v1(e,a,r){a=Ha(r,a),a=q0(e.stateNode,a,2),e=Dr(e,a,2),e!==null&&(gi(e,2),sr(e))}function Ue(e,a,r){if(e.tag===3)v1(e,e,r);else for(;a!==null;){if(a.tag===3){v1(a,e,r);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(kr===null||!kr.has(n))){e=Ha(r,e),r=hu(2),n=Dr(a,r,2),n!==null&&(Su(r,n,a,e),gi(n,2),sr(n));break}}a=a.return}}function J0(e,a,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Zp;var s=new Set;n.set(a,s)}else s=n.get(a),s===void 0&&(s=new Set,n.set(a,s));s.has(r)||(H0=!0,s.add(r),e=$p.bind(null,e,a,r),a.then(e,e))}function $p(e,a,r){var n=e.pingCache;n!==null&&n.delete(a),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,ke===e&&(Te&r)===r&&(Fe===4||Fe===3&&(Te&62914560)===Te&&300>Le()-V0?(_e&2)===0&&ii(e,0):U0|=r,ai===Te&&(ai=0)),sr(e)}function b1(e,a){a===0&&(a=pd()),e=Un(e,a),e!==null&&(gi(e,a),sr(e))}function Wp(e){var a=e.memoizedState,r=0;a!==null&&(r=a.retryLane),b1(e,r)}function e4(e,a){var r=0;switch(e.tag){case 13:var n=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(d(314))}n!==null&&n.delete(a),b1(e,r)}function a4(e,a){return Ke(e,a)}var So=null,oi=null,I0=!1,To=!1,F0=!1,yn=0;function sr(e){e!==oi&&e.next===null&&(oi===null?So=oi=e:oi=oi.next=e),To=!0,I0||(I0=!0,n4())}function es(e,a){if(!F0&&To){F0=!0;do for(var r=!1,n=So;n!==null;){if(e!==0){var s=n.pendingLanes;if(s===0)var o=0;else{var u=n.suspendedLanes,f=n.pingedLanes;o=(1<<31-la(42|e)+1)-1,o&=s&~(u&~f),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(r=!0,S1(n,o))}else o=Te,o=Cs(n,n===ke?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||bi(n,o)||(r=!0,S1(n,o));n=n.next}while(r);F0=!1}}function r4(){g1()}function g1(){To=I0=!1;var e=0;yn!==0&&(u4()&&(e=yn),yn=0);for(var a=Le(),r=null,n=So;n!==null;){var s=n.next,o=y1(n,a);o===0?(n.next=null,r===null?So=s:r.next=s,s===null&&(oi=r)):(r=n,(e!==0||(o&3)!==0)&&(To=!0)),n=s}es(e)}function y1(e,a){for(var r=e.suspendedLanes,n=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var u=31-la(o),f=1<<u,S=s[u];S===-1?((f&r)===0||(f&n)!==0)&&(s[u]=z3(f,a)):S<=a&&(e.expiredLanes|=f),o&=~f}if(a=ke,r=Te,r=Cs(e,e===a?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,r===0||e===a&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&we(n),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||bi(e,r)){if(a=r&-r,a===e.callbackPriority)return a;switch(n!==null&&we(n),pt(r)){case 2:case 8:r=Je;break;case 32:r=Za;break;case 268435456:r=Ar;break;default:r=Za}return n=h1.bind(null,e),r=Ke(r,n),e.callbackPriority=a,e.callbackNode=r,a}return n!==null&&n!==null&&we(n),e.callbackPriority=2,e.callbackNode=null,2}function h1(e,a){if(pa!==0&&pa!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(ho()&&e.callbackNode!==r)return null;var n=Te;return n=Cs(e,e===ke?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(a1(e,n,a),y1(e,Le()),e.callbackNode!=null&&e.callbackNode===r?h1.bind(null,e):null)}function S1(e,a){if(ho())return null;a1(e,a,!0)}function n4(){m4(function(){(_e&6)!==0?Ke(He,r4):g1()})}function $0(){return yn===0&&(yn=ud()),yn}function T1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ps(""+e)}function j1(e,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,e.id&&r.setAttribute("form",e.id),a.parentNode.insertBefore(r,a),e=new FormData(e),r.parentNode.removeChild(r),e}function i4(e,a,r,n,s){if(a==="submit"&&r&&r.stateNode===s){var o=T1((s[Sa]||null).action),u=n.submitter;u&&(a=(a=u[Sa]||null)?T1(a.formAction):u.getAttribute("formAction"),a!==null&&(o=a,u=null));var f=new Os("action","action",null,n,s);e.push({event:f,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(yn!==0){var S=u?j1(s,u):new FormData(s);y0(r,{pending:!0,data:S,method:s.method,action:o},null,S)}}else typeof o=="function"&&(f.preventDefault(),S=u?j1(s,u):new FormData(s),y0(r,{pending:!0,data:S,method:s.method,action:o},o,S))},currentTarget:s}]})}}for(var W0=0;W0<Bt.length;W0++){var ec=Bt[W0],s4=ec.toLowerCase(),o4=ec[0].toUpperCase()+ec.slice(1);Ka(s4,"on"+o4)}Ka(al,"onAnimationEnd"),Ka(rl,"onAnimationIteration"),Ka(nl,"onAnimationStart"),Ka("dblclick","onDoubleClick"),Ka("focusin","onFocus"),Ka("focusout","onBlur"),Ka(qp,"onTransitionRun"),Ka(xp,"onTransitionStart"),Ka(Ep,"onTransitionCancel"),Ka(il,"onTransitionEnd"),_n("onMouseEnter",["mouseout","mouseover"]),_n("onMouseLeave",["mouseout","mouseover"]),_n("onPointerEnter",["pointerout","pointerover"]),_n("onPointerLeave",["pointerout","pointerover"]),an("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),an("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),an("onBeforeInput",["compositionend","keypress","textInput","paste"]),an("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),an("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),an("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var as="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t4=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(as));function q1(e,a){a=(a&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],s=n.event;n=n.listeners;e:{var o=void 0;if(a)for(var u=n.length-1;0<=u;u--){var f=n[u],S=f.instance,M=f.currentTarget;if(f=f.listener,S!==o&&s.isPropagationStopped())break e;o=f,s.currentTarget=M;try{o(s)}catch(U){to(U)}s.currentTarget=null,o=S}else for(u=0;u<n.length;u++){if(f=n[u],S=f.instance,M=f.currentTarget,f=f.listener,S!==o&&s.isPropagationStopped())break e;o=f,s.currentTarget=M;try{o(s)}catch(U){to(U)}s.currentTarget=null,o=S}}}}function Se(e,a){var r=a[mt];r===void 0&&(r=a[mt]=new Set);var n=e+"__bubble";r.has(n)||(x1(a,e,2,!1),r.add(n))}function ac(e,a,r){var n=0;a&&(n|=4),x1(r,e,n,a)}var jo="_reactListening"+Math.random().toString(36).slice(2);function rc(e){if(!e[jo]){e[jo]=!0,gd.forEach(function(r){r!=="selectionchange"&&(t4.has(r)||ac(r,!1,e),ac(r,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[jo]||(a[jo]=!0,ac("selectionchange",!1,a))}}function x1(e,a,r,n){switch(K1(a)){case 2:var s=D4;break;case 8:s=O4;break;default:s=bc}r=s.bind(null,a,r,e),s=void 0,!xt||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(s=!0),n?s!==void 0?e.addEventListener(a,r,{capture:!0,passive:s}):e.addEventListener(a,r,!0):s!==void 0?e.addEventListener(a,r,{passive:s}):e.addEventListener(a,r,!1)}function nc(e,a,r,n,s){var o=n;if((a&1)===0&&(a&2)===0&&n!==null)e:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var f=n.stateNode.containerInfo;if(f===s)break;if(u===4)for(u=n.return;u!==null;){var S=u.tag;if((S===3||S===4)&&u.stateNode.containerInfo===s)return;u=u.return}for(;f!==null;){if(u=An(f),u===null)return;if(S=u.tag,S===5||S===6||S===26||S===27){n=o=u;continue e}f=f.parentNode}}n=n.return}Pd(function(){var M=o,U=jt(r),Q=[];e:{var P=sl.get(e);if(P!==void 0){var R=Os,pe=e;switch(e){case"keypress":if(ws(r)===0)break e;case"keydown":case"keyup":R=ap;break;case"focusin":pe="focus",R=zt;break;case"focusout":pe="blur",R=zt;break;case"beforeblur":case"afterblur":R=zt;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=k3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=ip;break;case al:case rl:case nl:R=Q3;break;case il:R=op;break;case"scroll":case"scrollend":R=G3;break;case"wheel":R=cp;break;case"copy":case"cut":case"paste":R=K3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Nd;break;case"toggle":case"beforetoggle":R=lp}var de=(a&4)!==0,Be=!de&&(e==="scroll"||e==="scrollend"),E=de?P!==null?P+"Capture":null:P;de=[];for(var x=M,z;x!==null;){var V=x;if(z=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||z===null||E===null||(V=Si(x,E),V!=null&&de.push(rs(x,V,z))),Be)break;x=x.return}0<de.length&&(P=new R(P,pe,null,r,U),Q.push({event:P,listeners:de}))}}if((a&7)===0){e:{if(P=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",P&&r!==Tt&&(pe=r.relatedTarget||r.fromElement)&&(An(pe)||pe[Cn]))break e;if((R||P)&&(P=U.window===U?U:(P=U.ownerDocument)?P.defaultView||P.parentWindow:window,R?(pe=r.relatedTarget||r.toElement,R=M,pe=pe?An(pe):null,pe!==null&&(Be=p(pe),de=pe.tag,pe!==Be||de!==5&&de!==27&&de!==6)&&(pe=null)):(R=null,pe=M),R!==pe)){if(de=Dd,V="onMouseLeave",E="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(de=Nd,V="onPointerLeave",E="onPointerEnter",x="pointer"),Be=R==null?P:hi(R),z=pe==null?P:hi(pe),P=new de(V,x+"leave",R,r,U),P.target=Be,P.relatedTarget=z,V=null,An(U)===M&&(de=new de(E,x+"enter",pe,r,U),de.target=z,de.relatedTarget=Be,V=de),Be=V,R&&pe)a:{for(de=R,E=pe,x=0,z=de;z;z=ti(z))x++;for(z=0,V=E;V;V=ti(V))z++;for(;0<x-z;)de=ti(de),x--;for(;0<z-x;)E=ti(E),z--;for(;x--;){if(de===E||E!==null&&de===E.alternate)break a;de=ti(de),E=ti(E)}de=null}else de=null;R!==null&&E1(Q,P,R,de,!1),pe!==null&&Be!==null&&E1(Q,Be,pe,de,!0)}}e:{if(P=M?hi(M):window,R=P.nodeName&&P.nodeName.toLowerCase(),R==="select"||R==="input"&&P.type==="file")var ie=Yd;else if(Vd(P))if(Xd)ie=Sp;else{ie=yp;var ye=gp}else R=P.nodeName,!R||R.toLowerCase()!=="input"||P.type!=="checkbox"&&P.type!=="radio"?M&&St(M.elementType)&&(ie=Yd):ie=hp;if(ie&&(ie=ie(e,M))){kd(Q,ie,r,U);break e}ye&&ye(e,P,M),e==="focusout"&&M&&P.type==="number"&&M.memoizedProps.value!=null&&ht(P,"number",P.value)}switch(ye=M?hi(M):window,e){case"focusin":(Vd(ye)||ye.contentEditable==="true")&&(Bn=ye,Dt=M,zi=null);break;case"focusout":zi=Dt=Bn=null;break;case"mousedown":Ot=!0;break;case"contextmenu":case"mouseup":case"dragend":Ot=!1,Wd(Q,r,U);break;case"selectionchange":if(jp)break;case"keydown":case"keyup":Wd(Q,r,U)}var te;if(_t)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else Nn?Ud(e,r)&&(ue="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ue="onCompositionStart");ue&&(Bd&&r.locale!=="ko"&&(Nn||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Nn&&(te=Rd()):(_r=U,Et="value"in _r?_r.value:_r.textContent,Nn=!0)),ye=qo(M,ue),0<ye.length&&(ue=new Od(ue,e,null,r,U),Q.push({event:ue,listeners:ye}),te?ue.data=te:(te=Gd(r),te!==null&&(ue.data=te)))),(te=pp?mp(e,r):fp(e,r))&&(ue=qo(M,"onBeforeInput"),0<ue.length&&(ye=new Od("onBeforeInput","beforeinput",null,r,U),Q.push({event:ye,listeners:ue}),ye.data=te)),i4(Q,e,M,r,U)}q1(Q,a)})}function rs(e,a,r){return{instance:e,listener:a,currentTarget:r}}function qo(e,a){for(var r=a+"Capture",n=[];e!==null;){var s=e,o=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||o===null||(s=Si(e,r),s!=null&&n.unshift(rs(e,s,o)),s=Si(e,a),s!=null&&n.push(rs(e,s,o))),e.tag===3)return n;e=e.return}return[]}function ti(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function E1(e,a,r,n,s){for(var o=a._reactName,u=[];r!==null&&r!==n;){var f=r,S=f.alternate,M=f.stateNode;if(f=f.tag,S!==null&&S===n)break;f!==5&&f!==26&&f!==27||M===null||(S=M,s?(M=Si(r,o),M!=null&&u.unshift(rs(r,M,S))):s||(M=Si(r,o),M!=null&&u.push(rs(r,M,S)))),r=r.return}u.length!==0&&e.push({event:a,listeners:u})}var c4=/\r\n?/g,d4=/\u0000|\uFFFD/g;function C1(e){return(typeof e=="string"?e:""+e).replace(c4,`
`).replace(d4,"")}function A1(e,a){return a=C1(a),C1(e)===a}function xo(){}function Ne(e,a,r,n,s,o){switch(r){case"children":typeof n=="string"?a==="body"||a==="textarea"&&n===""||wn(e,n):(typeof n=="number"||typeof n=="bigint")&&a!=="body"&&wn(e,""+n);break;case"className":zs(e,"class",n);break;case"tabIndex":zs(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":zs(e,r,n);break;case"style":Md(e,n,o);break;case"data":if(a!=="object"){zs(e,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||r!=="href")){e.removeAttribute(r);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(r);break}n=Ps(""+n),e.setAttribute(r,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(r==="formAction"?(a!=="input"&&Ne(e,a,"name",s.name,s,null),Ne(e,a,"formEncType",s.formEncType,s,null),Ne(e,a,"formMethod",s.formMethod,s,null),Ne(e,a,"formTarget",s.formTarget,s,null)):(Ne(e,a,"encType",s.encType,s,null),Ne(e,a,"method",s.method,s,null),Ne(e,a,"target",s.target,s,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(r);break}n=Ps(""+n),e.setAttribute(r,n);break;case"onClick":n!=null&&(e.onclick=xo);break;case"onScroll":n!=null&&Se("scroll",e);break;case"onScrollEnd":n!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(r=n.__html,r!=null){if(s.children!=null)throw Error(d(60));e.innerHTML=r}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}r=Ps(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(r,""+n):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":n===!0?e.setAttribute(r,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(r,n):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(r,n):e.removeAttribute(r);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(r):e.setAttribute(r,n);break;case"popover":Se("beforetoggle",e),Se("toggle",e),As(e,"popover",n);break;case"xlinkActuate":tr(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":tr(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":tr(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":tr(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":tr(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":tr(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":tr(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":tr(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":tr(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":As(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=H3.get(r)||r,As(e,r,n))}}function ic(e,a,r,n,s,o){switch(r){case"style":Md(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(r=n.__html,r!=null){if(s.children!=null)throw Error(d(60));e.innerHTML=r}}break;case"children":typeof n=="string"?wn(e,n):(typeof n=="number"||typeof n=="bigint")&&wn(e,""+n);break;case"onScroll":n!=null&&Se("scroll",e);break;case"onScrollEnd":n!=null&&Se("scrollend",e);break;case"onClick":n!=null&&(e.onclick=xo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yd.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(s=r.endsWith("Capture"),a=r.slice(2,s?r.length-7:void 0),o=e[Sa]||null,o=o!=null?o[r]:null,typeof o=="function"&&e.removeEventListener(a,o,s),typeof n=="function")){typeof o!="function"&&o!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(a,n,s);break e}r in e?e[r]=n:n===!0?e.setAttribute(r,""):As(e,r,n)}}}function ma(e,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var n=!1,s=!1,o;for(o in r)if(r.hasOwnProperty(o)){var u=r[o];if(u!=null)switch(o){case"src":n=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:Ne(e,a,o,u,r,null)}}s&&Ne(e,a,"srcSet",r.srcSet,r,null),n&&Ne(e,a,"src",r.src,r,null);return;case"input":Se("invalid",e);var f=o=u=s=null,S=null,M=null;for(n in r)if(r.hasOwnProperty(n)){var U=r[n];if(U!=null)switch(n){case"name":s=U;break;case"type":u=U;break;case"checked":S=U;break;case"defaultChecked":M=U;break;case"value":o=U;break;case"defaultValue":f=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(d(137,a));break;default:Ne(e,a,n,U,r,null)}}Ed(e,o,f,S,M,u,s,!1),Ms(e);return;case"select":Se("invalid",e),n=u=o=null;for(s in r)if(r.hasOwnProperty(s)&&(f=r[s],f!=null))switch(s){case"value":o=f;break;case"defaultValue":u=f;break;case"multiple":n=f;default:Ne(e,a,s,f,r,null)}a=o,r=u,e.multiple=!!n,a!=null?Rn(e,!!n,a,!1):r!=null&&Rn(e,!!n,r,!0);return;case"textarea":Se("invalid",e),o=s=n=null;for(u in r)if(r.hasOwnProperty(u)&&(f=r[u],f!=null))switch(u){case"value":n=f;break;case"defaultValue":s=f;break;case"children":o=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(d(91));break;default:Ne(e,a,u,f,r,null)}Ad(e,n,s,o),Ms(e);return;case"option":for(S in r)if(r.hasOwnProperty(S)&&(n=r[S],n!=null))switch(S){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ne(e,a,S,n,r,null)}return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(n=0;n<as.length;n++)Se(as[n],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in r)if(r.hasOwnProperty(M)&&(n=r[M],n!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:Ne(e,a,M,n,r,null)}return;default:if(St(a)){for(U in r)r.hasOwnProperty(U)&&(n=r[U],n!==void 0&&ic(e,a,U,n,r,void 0));return}}for(f in r)r.hasOwnProperty(f)&&(n=r[f],n!=null&&Ne(e,a,f,n,r,null))}function l4(e,a,r,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,o=null,u=null,f=null,S=null,M=null,U=null;for(R in r){var Q=r[R];if(r.hasOwnProperty(R)&&Q!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":S=Q;default:n.hasOwnProperty(R)||Ne(e,a,R,null,n,Q)}}for(var P in n){var R=n[P];if(Q=r[P],n.hasOwnProperty(P)&&(R!=null||Q!=null))switch(P){case"type":o=R;break;case"name":s=R;break;case"checked":M=R;break;case"defaultChecked":U=R;break;case"value":u=R;break;case"defaultValue":f=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(d(137,a));break;default:R!==Q&&Ne(e,a,P,R,n,Q)}}yt(e,u,f,S,M,U,o,s);return;case"select":R=u=f=P=null;for(o in r)if(S=r[o],r.hasOwnProperty(o)&&S!=null)switch(o){case"value":break;case"multiple":R=S;default:n.hasOwnProperty(o)||Ne(e,a,o,null,n,S)}for(s in n)if(o=n[s],S=r[s],n.hasOwnProperty(s)&&(o!=null||S!=null))switch(s){case"value":P=o;break;case"defaultValue":f=o;break;case"multiple":u=o;default:o!==S&&Ne(e,a,s,o,n,S)}a=f,r=u,n=R,P!=null?Rn(e,!!r,P,!1):!!n!=!!r&&(a!=null?Rn(e,!!r,a,!0):Rn(e,!!r,r?[]:"",!1));return;case"textarea":R=P=null;for(f in r)if(s=r[f],r.hasOwnProperty(f)&&s!=null&&!n.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Ne(e,a,f,null,n,s)}for(u in n)if(s=n[u],o=r[u],n.hasOwnProperty(u)&&(s!=null||o!=null))switch(u){case"value":P=s;break;case"defaultValue":R=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(d(91));break;default:s!==o&&Ne(e,a,u,s,n,o)}Cd(e,P,R);return;case"option":for(var pe in r)if(P=r[pe],r.hasOwnProperty(pe)&&P!=null&&!n.hasOwnProperty(pe))switch(pe){case"selected":e.selected=!1;break;default:Ne(e,a,pe,null,n,P)}for(S in n)if(P=n[S],R=r[S],n.hasOwnProperty(S)&&P!==R&&(P!=null||R!=null))switch(S){case"selected":e.selected=P&&typeof P!="function"&&typeof P!="symbol";break;default:Ne(e,a,S,P,n,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in r)P=r[de],r.hasOwnProperty(de)&&P!=null&&!n.hasOwnProperty(de)&&Ne(e,a,de,null,n,P);for(M in n)if(P=n[M],R=r[M],n.hasOwnProperty(M)&&P!==R&&(P!=null||R!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(d(137,a));break;default:Ne(e,a,M,P,n,R)}return;default:if(St(a)){for(var Be in r)P=r[Be],r.hasOwnProperty(Be)&&P!==void 0&&!n.hasOwnProperty(Be)&&ic(e,a,Be,void 0,n,P);for(U in n)P=n[U],R=r[U],!n.hasOwnProperty(U)||P===R||P===void 0&&R===void 0||ic(e,a,U,P,n,R);return}}for(var E in r)P=r[E],r.hasOwnProperty(E)&&P!=null&&!n.hasOwnProperty(E)&&Ne(e,a,E,null,n,P);for(Q in n)P=n[Q],R=r[Q],!n.hasOwnProperty(Q)||P===R||P==null&&R==null||Ne(e,a,Q,P,n,R)}var sc=null,oc=null;function Eo(e){return e.nodeType===9?e:e.ownerDocument}function z1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function M1(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function tc(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var cc=null;function u4(){var e=window.event;return e&&e.type==="popstate"?e===cc?!1:(cc=e,!0):(cc=null,!1)}var _1=typeof setTimeout=="function"?setTimeout:void 0,p4=typeof clearTimeout=="function"?clearTimeout:void 0,P1=typeof Promise=="function"?Promise:void 0,m4=typeof queueMicrotask=="function"?queueMicrotask:typeof P1<"u"?function(e){return P1.resolve(null).then(e).catch(f4)}:_1;function f4(e){setTimeout(function(){throw e})}function Qr(e){return e==="head"}function R1(e,a){var r=a,n=0,s=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(0<n&&8>n){r=n;var u=e.ownerDocument;if(r&1&&ns(u.documentElement),r&2&&ns(u.body),r&4)for(r=u.head,ns(r),u=r.firstChild;u;){var f=u.nextSibling,S=u.nodeName;u[yi]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&u.rel.toLowerCase()==="stylesheet"||r.removeChild(u),u=f}}if(s===0){e.removeChild(o),us(a);return}s--}else r==="$"||r==="$?"||r==="$!"?s++:n=r.charCodeAt(0)-48;else n=0;r=o}while(r);us(a)}function dc(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":dc(r),ft(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function v4(e,a,r,n){for(;e.nodeType===1;){var s=r;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[yi])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var o=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Ia(e.nextSibling),e===null)break}return null}function b4(e,a,r){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Ia(e.nextSibling),e===null))return null;return e}function lc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function g4(e,a){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")a();else{var n=function(){a(),r.removeEventListener("DOMContentLoaded",n)};r.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Ia(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return e}var uc=null;function w1(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(a===0)return e;a--}else r==="/$"&&a++}e=e.previousSibling}return null}function D1(e,a,r){switch(a=Eo(r),e){case"html":if(e=a.documentElement,!e)throw Error(d(452));return e;case"head":if(e=a.head,!e)throw Error(d(453));return e;case"body":if(e=a.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function ns(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);ft(e)}var Xa=new Map,O1=new Set;function Co(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Tr=X.d;X.d={f:y4,r:h4,D:S4,C:T4,L:j4,m:q4,X:E4,S:x4,M:C4};function y4(){var e=Tr.f(),a=go();return e||a}function h4(e){var a=zn(e);a!==null&&a.tag===5&&a.type==="form"?au(a):Tr.r(e)}var ci=typeof document>"u"?null:document;function N1(e,a,r){var n=ci;if(n&&typeof a=="string"&&a){var s=La(a);s='link[rel="'+e+'"][href="'+s+'"]',typeof r=="string"&&(s+='[crossorigin="'+r+'"]'),O1.has(s)||(O1.add(s),e={rel:e,crossOrigin:r,href:a},n.querySelector(s)===null&&(a=n.createElement("link"),ma(a,"link",e),oa(a),n.head.appendChild(a)))}}function S4(e){Tr.D(e),N1("dns-prefetch",e,null)}function T4(e,a){Tr.C(e,a),N1("preconnect",e,a)}function j4(e,a,r){Tr.L(e,a,r);var n=ci;if(n&&e&&a){var s='link[rel="preload"][as="'+La(a)+'"]';a==="image"&&r&&r.imageSrcSet?(s+='[imagesrcset="'+La(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(s+='[imagesizes="'+La(r.imageSizes)+'"]')):s+='[href="'+La(e)+'"]';var o=s;switch(a){case"style":o=di(e);break;case"script":o=li(e)}Xa.has(o)||(e=h({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:e,as:a},r),Xa.set(o,e),n.querySelector(s)!==null||a==="style"&&n.querySelector(is(o))||a==="script"&&n.querySelector(ss(o))||(a=n.createElement("link"),ma(a,"link",e),oa(a),n.head.appendChild(a)))}}function q4(e,a){Tr.m(e,a);var r=ci;if(r&&e){var n=a&&typeof a.as=="string"?a.as:"script",s='link[rel="modulepreload"][as="'+La(n)+'"][href="'+La(e)+'"]',o=s;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=li(e)}if(!Xa.has(o)&&(e=h({rel:"modulepreload",href:e},a),Xa.set(o,e),r.querySelector(s)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(ss(o)))return}n=r.createElement("link"),ma(n,"link",e),oa(n),r.head.appendChild(n)}}}function x4(e,a,r){Tr.S(e,a,r);var n=ci;if(n&&e){var s=Mn(n).hoistableStyles,o=di(e);a=a||"default";var u=s.get(o);if(!u){var f={loading:0,preload:null};if(u=n.querySelector(is(o)))f.loading=5;else{e=h({rel:"stylesheet",href:e,"data-precedence":a},r),(r=Xa.get(o))&&pc(e,r);var S=u=n.createElement("link");oa(S),ma(S,"link",e),S._p=new Promise(function(M,U){S.onload=M,S.onerror=U}),S.addEventListener("load",function(){f.loading|=1}),S.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Ao(u,a,n)}u={type:"stylesheet",instance:u,count:1,state:f},s.set(o,u)}}}function E4(e,a){Tr.X(e,a);var r=ci;if(r&&e){var n=Mn(r).hoistableScripts,s=li(e),o=n.get(s);o||(o=r.querySelector(ss(s)),o||(e=h({src:e,async:!0},a),(a=Xa.get(s))&&mc(e,a),o=r.createElement("script"),oa(o),ma(o,"link",e),r.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(s,o))}}function C4(e,a){Tr.M(e,a);var r=ci;if(r&&e){var n=Mn(r).hoistableScripts,s=li(e),o=n.get(s);o||(o=r.querySelector(ss(s)),o||(e=h({src:e,async:!0,type:"module"},a),(a=Xa.get(s))&&mc(e,a),o=r.createElement("script"),oa(o),ma(o,"link",e),r.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(s,o))}}function B1(e,a,r,n){var s=(s=se.current)?Co(s):null;if(!s)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=di(r.href),r=Mn(s).hoistableStyles,n=r.get(a),n||(n={type:"style",instance:null,count:0,state:null},r.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=di(r.href);var o=Mn(s).hoistableStyles,u=o.get(e);if(u||(s=s.ownerDocument||s,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,u),(o=s.querySelector(is(e)))&&!o._p&&(u.instance=o,u.state.loading=5),Xa.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Xa.set(e,r),o||A4(s,e,r,u.state))),a&&n===null)throw Error(d(528,""));return u}if(a&&n!==null)throw Error(d(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=li(r),r=Mn(s).hoistableScripts,n=r.get(a),n||(n={type:"script",instance:null,count:0,state:null},r.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function di(e){return'href="'+La(e)+'"'}function is(e){return'link[rel="stylesheet"]['+e+"]"}function L1(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function A4(e,a,r,n){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?n.loading=1:(a=e.createElement("link"),n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2}),ma(a,"link",r),oa(a),e.head.appendChild(a))}function li(e){return'[src="'+La(e)+'"]'}function ss(e){return"script[async]"+e}function H1(e,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var n=e.querySelector('style[data-href~="'+La(r.href)+'"]');if(n)return a.instance=n,oa(n),n;var s=h({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),oa(n),ma(n,"style",s),Ao(n,r.precedence,e),a.instance=n;case"stylesheet":s=di(r.href);var o=e.querySelector(is(s));if(o)return a.state.loading|=4,a.instance=o,oa(o),o;n=L1(r),(s=Xa.get(s))&&pc(n,s),o=(e.ownerDocument||e).createElement("link"),oa(o);var u=o;return u._p=new Promise(function(f,S){u.onload=f,u.onerror=S}),ma(o,"link",n),a.state.loading|=4,Ao(o,r.precedence,e),a.instance=o;case"script":return o=li(r.src),(s=e.querySelector(ss(o)))?(a.instance=s,oa(s),s):(n=r,(s=Xa.get(o))&&(n=h({},r),mc(n,s)),e=e.ownerDocument||e,s=e.createElement("script"),oa(s),ma(s,"link",n),e.head.appendChild(s),a.instance=s);case"void":return null;default:throw Error(d(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(n=a.instance,a.state.loading|=4,Ao(n,r.precedence,e));return a.instance}function Ao(e,a,r){for(var n=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=n.length?n[n.length-1]:null,o=s,u=0;u<n.length;u++){var f=n[u];if(f.dataset.precedence===a)o=f;else if(o!==s)break}o?o.parentNode.insertBefore(e,o.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(e,a.firstChild))}function pc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function mc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var zo=null;function U1(e,a,r){if(zo===null){var n=new Map,s=zo=new Map;s.set(r,n)}else s=zo,n=s.get(r),n||(n=new Map,s.set(r,n));if(n.has(e))return n;for(n.set(e,null),r=r.getElementsByTagName(e),s=0;s<r.length;s++){var o=r[s];if(!(o[yi]||o[va]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var u=o.getAttribute(a)||"";u=e+u;var f=n.get(u);f?f.push(o):n.set(u,[o])}}return n}function G1(e,a,r){e=e.ownerDocument||e,e.head.insertBefore(r,a==="title"?e.querySelector("head > title"):null)}function z4(e,a,r){if(r===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function V1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var os=null;function M4(){}function _4(e,a,r){if(os===null)throw Error(d(475));var n=os;if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var s=di(r.href),o=e.querySelector(is(s));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Mo.bind(n),e.then(n,n)),a.state.loading|=4,a.instance=o,oa(o);return}o=e.ownerDocument||e,r=L1(r),(s=Xa.get(s))&&pc(r,s),o=o.createElement("link"),oa(o);var u=o;u._p=new Promise(function(f,S){u.onload=f,u.onerror=S}),ma(o,"link",r),a.instance=o}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(n.count++,a=Mo.bind(n),e.addEventListener("load",a),e.addEventListener("error",a))}}function P4(){if(os===null)throw Error(d(475));var e=os;return e.stylesheets&&e.count===0&&fc(e,e.stylesheets),0<e.count?function(a){var r=setTimeout(function(){if(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r)}}:null}function Mo(){if(this.count--,this.count===0){if(this.stylesheets)fc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _o=null;function fc(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_o=new Map,a.forEach(R4,e),_o=null,Mo.call(e))}function R4(e,a){if(!(a.state.loading&4)){var r=_o.get(e);if(r)var n=r.get(null);else{r=new Map,_o.set(e,r);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<s.length;o++){var u=s[o];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(r.set(u.dataset.precedence,u),n=u)}n&&r.set(null,n)}s=a.instance,u=s.getAttribute("data-precedence"),o=r.get(u)||n,o===n&&r.set(null,s),r.set(u,s),this.count++,n=Mo.bind(this),s.addEventListener("load",n),s.addEventListener("error",n),o?o.parentNode.insertBefore(s,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),a.state.loading|=4}}var ts={$$typeof:Z,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function w4(e,a,r,n,s,o,u,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lt(0),this.hiddenUpdates=lt(null),this.identifierPrefix=n,this.onUncaughtError=s,this.onCaughtError=o,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function k1(e,a,r,n,s,o,u,f,S,M,U,Q){return e=new w4(e,a,r,u,f,S,M,Q),a=1,o===!0&&(a|=24),o=Ca(3,null,null,a),e.current=o,o.stateNode=e,a=Jt(),a.refCount++,e.pooledCache=a,a.refCount++,o.memoizedState={element:n,isDehydrated:r,cache:a},Wt(o),e}function Y1(e){return e?(e=Gn,e):Gn}function X1(e,a,r,n,s,o){s=Y1(s),n.context===null?n.context=s:n.pendingContext=s,n=wr(a),n.payload={element:r},o=o===void 0?null:o,o!==null&&(n.callback=o),r=Dr(e,n,a),r!==null&&(Pa(r,e,a),Bi(r,e,a))}function Q1(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<a?r:a}}function vc(e,a){Q1(e,a),(e=e.alternate)&&Q1(e,a)}function Z1(e){if(e.tag===13){var a=Un(e,67108864);a!==null&&Pa(a,e,67108864),vc(e,67108864)}}var Po=!0;function D4(e,a,r,n){var s=N.T;N.T=null;var o=X.p;try{X.p=2,bc(e,a,r,n)}finally{X.p=o,N.T=s}}function O4(e,a,r,n){var s=N.T;N.T=null;var o=X.p;try{X.p=8,bc(e,a,r,n)}finally{X.p=o,N.T=s}}function bc(e,a,r,n){if(Po){var s=gc(n);if(s===null)nc(e,a,n,Ro,r),J1(e,n);else if(B4(s,e,a,r,n))n.stopPropagation();else if(J1(e,n),a&4&&-1<N4.indexOf(e)){for(;s!==null;){var o=zn(s);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var u=en(o.pendingLanes);if(u!==0){var f=o;for(f.pendingLanes|=2,f.entangledLanes|=2;u;){var S=1<<31-la(u);f.entanglements[1]|=S,u&=~S}sr(o),(_e&6)===0&&(vo=Le()+500,es(0))}}break;case 13:f=Un(o,2),f!==null&&Pa(f,o,2),go(),vc(o,2)}if(o=gc(n),o===null&&nc(e,a,n,Ro,r),o===s)break;s=o}s!==null&&n.stopPropagation()}else nc(e,a,n,null,r)}}function gc(e){return e=jt(e),yc(e)}var Ro=null;function yc(e){if(Ro=null,e=An(e),e!==null){var a=p(e);if(a===null)e=null;else{var r=a.tag;if(r===13){if(e=b(a),e!==null)return e;e=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Ro=e,null}function K1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xe()){case He:return 2;case Je:return 8;case Za:case Da:return 32;case Ar:return 268435456;default:return 32}default:return 32}}var hc=!1,Zr=null,Kr=null,Jr=null,cs=new Map,ds=new Map,Ir=[],N4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function J1(e,a){switch(e){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":Kr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":cs.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":ds.delete(a.pointerId)}}function ls(e,a,r,n,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:a,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[s]},a!==null&&(a=zn(a),a!==null&&Z1(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,s!==null&&a.indexOf(s)===-1&&a.push(s),e)}function B4(e,a,r,n,s){switch(a){case"focusin":return Zr=ls(Zr,e,a,r,n,s),!0;case"dragenter":return Kr=ls(Kr,e,a,r,n,s),!0;case"mouseover":return Jr=ls(Jr,e,a,r,n,s),!0;case"pointerover":var o=s.pointerId;return cs.set(o,ls(cs.get(o)||null,e,a,r,n,s)),!0;case"gotpointercapture":return o=s.pointerId,ds.set(o,ls(ds.get(o)||null,e,a,r,n,s)),!0}return!1}function I1(e){var a=An(e.target);if(a!==null){var r=p(a);if(r!==null){if(a=r.tag,a===13){if(a=b(r),a!==null){e.blockedOn=a,_3(e.priority,function(){if(r.tag===13){var n=_a();n=ut(n);var s=Un(r,n);s!==null&&Pa(s,r,n),vc(r,n)}});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wo(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var r=gc(e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Tt=n,r.target.dispatchEvent(n),Tt=null}else return a=zn(r),a!==null&&Z1(a),e.blockedOn=r,!1;a.shift()}return!0}function F1(e,a,r){wo(e)&&r.delete(a)}function L4(){hc=!1,Zr!==null&&wo(Zr)&&(Zr=null),Kr!==null&&wo(Kr)&&(Kr=null),Jr!==null&&wo(Jr)&&(Jr=null),cs.forEach(F1),ds.forEach(F1)}function Do(e,a){e.blockedOn===a&&(e.blockedOn=null,hc||(hc=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,L4)))}var Oo=null;function $1(e){Oo!==e&&(Oo=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Oo===e&&(Oo=null);for(var a=0;a<e.length;a+=3){var r=e[a],n=e[a+1],s=e[a+2];if(typeof n!="function"){if(yc(n||r)===null)continue;break}var o=zn(r);o!==null&&(e.splice(a,3),a-=3,y0(o,{pending:!0,data:s,method:r.method,action:n},n,s))}}))}function us(e){function a(S){return Do(S,e)}Zr!==null&&Do(Zr,e),Kr!==null&&Do(Kr,e),Jr!==null&&Do(Jr,e),cs.forEach(a),ds.forEach(a);for(var r=0;r<Ir.length;r++){var n=Ir[r];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Ir.length&&(r=Ir[0],r.blockedOn===null);)I1(r),r.blockedOn===null&&Ir.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(n=0;n<r.length;n+=3){var s=r[n],o=r[n+1],u=s[Sa]||null;if(typeof o=="function")u||$1(r);else if(u){var f=null;if(o&&o.hasAttribute("formAction")){if(s=o,u=o[Sa]||null)f=u.formAction;else if(yc(s)!==null)continue}else f=u.action;typeof f=="function"?r[n+1]=f:(r.splice(n,3),n-=3),$1(r)}}}function Sc(e){this._internalRoot=e}No.prototype.render=Sc.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(d(409));var r=a.current,n=_a();X1(r,n,e,a,null,null)},No.prototype.unmount=Sc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;X1(e.current,2,null,e,null,null),go(),a[Cn]=null}};function No(e){this._internalRoot=e}No.prototype.unstable_scheduleHydration=function(e){if(e){var a=vd();e={blockedOn:null,target:e,priority:a};for(var r=0;r<Ir.length&&a!==0&&a<Ir[r].priority;r++);Ir.splice(r,0,e),r===0&&I1(e)}};var W1=t.version;if(W1!=="19.1.0")throw Error(d(527,W1,"19.1.0"));X.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=v(a),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var H4={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{Ye=Bo.inject(H4),De=Bo}catch{}}return ms.createRoot=function(e,a){if(!l(e))throw Error(d(299));var r=!1,n="",s=vu,o=bu,u=gu,f=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(f=a.unstable_transitionCallbacks)),a=k1(e,1,!1,null,null,r,n,s,o,u,f,null),e[Cn]=a.current,rc(e),new Sc(a)},ms.hydrateRoot=function(e,a,r){if(!l(e))throw Error(d(299));var n=!1,s="",o=vu,u=bu,f=gu,S=null,M=null;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onUncaughtError!==void 0&&(o=r.onUncaughtError),r.onCaughtError!==void 0&&(u=r.onCaughtError),r.onRecoverableError!==void 0&&(f=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks),r.formState!==void 0&&(M=r.formState)),a=k1(e,1,!0,a,r??null,n,s,o,u,f,S,M),a.context=Y1(null),r=a.current,n=_a(),n=ut(n),s=wr(n),s.callback=null,Dr(r,s,n),r=n,a.current.lanes=r,gi(a,r),sr(a),e[Cn]=a.current,rc(e),new No(a)},ms.version="19.1.0",ms}var d2;function J4(){if(d2)return qc.exports;d2=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),qc.exports=K4(),qc.exports}var I4=J4(),fs={},l2;function F4(){if(l2)return fs;l2=1,Object.defineProperty(fs,"__esModule",{value:!0}),fs.parse=b,fs.serialize=m;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,c=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,d=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,p=(()=>{const A=function(){};return A.prototype=Object.create(null),A})();function b(A,k){const w=new p,Y=A.length;if(Y<2)return w;const G=(k==null?void 0:k.decode)||h;let O=0;do{const B=A.indexOf("=",O);if(B===-1)break;const Z=A.indexOf(";",O),J=Z===-1?Y:Z;if(B>J){O=A.lastIndexOf(";",B-1)+1;continue}const K=y(A,O,B),ae=v(A,B,K),F=A.slice(K,ae);if(w[F]===void 0){let j=y(A,B+1,J),T=v(A,J,j);const L=G(A.slice(j,T));w[F]=L}O=J+1}while(O<Y);return w}function y(A,k,w){do{const Y=A.charCodeAt(k);if(Y!==32&&Y!==9)return k}while(++k<w);return w}function v(A,k,w){for(;k>w;){const Y=A.charCodeAt(--k);if(Y!==32&&Y!==9)return k+1}return w}function m(A,k,w){const Y=(w==null?void 0:w.encode)||encodeURIComponent;if(!i.test(A))throw new TypeError(`argument name is invalid: ${A}`);const G=Y(k);if(!t.test(G))throw new TypeError(`argument val is invalid: ${k}`);let O=A+"="+G;if(!w)return O;if(w.maxAge!==void 0){if(!Number.isInteger(w.maxAge))throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);O+="; Max-Age="+w.maxAge}if(w.domain){if(!c.test(w.domain))throw new TypeError(`option domain is invalid: ${w.domain}`);O+="; Domain="+w.domain}if(w.path){if(!d.test(w.path))throw new TypeError(`option path is invalid: ${w.path}`);O+="; Path="+w.path}if(w.expires){if(!_(w.expires)||!Number.isFinite(w.expires.valueOf()))throw new TypeError(`option expires is invalid: ${w.expires}`);O+="; Expires="+w.expires.toUTCString()}if(w.httpOnly&&(O+="; HttpOnly"),w.secure&&(O+="; Secure"),w.partitioned&&(O+="; Partitioned"),w.priority)switch(typeof w.priority=="string"?w.priority.toLowerCase():void 0){case"low":O+="; Priority=Low";break;case"medium":O+="; Priority=Medium";break;case"high":O+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${w.priority}`)}if(w.sameSite)switch(typeof w.sameSite=="string"?w.sameSite.toLowerCase():w.sameSite){case!0:case"strict":O+="; SameSite=Strict";break;case"lax":O+="; SameSite=Lax";break;case"none":O+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${w.sameSite}`)}return O}function h(A){if(A.indexOf("%")===-1)return A;try{return decodeURIComponent(A)}catch{return A}}function _(A){return l.call(A)==="[object Date]"}return fs}F4();var u2="popstate";function $4(i={}){function t(d,l){let{pathname:p,search:b,hash:y}=d.location;return Lc("",{pathname:p,search:b,hash:y},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function c(d,l){return typeof l=="string"?l:gs(l)}return em(t,c,null,i)}function Qe(i,t){if(i===!1||i===null||typeof i>"u")throw new Error(t)}function $a(i,t){if(!i){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function W4(){return Math.random().toString(36).substring(2,10)}function p2(i,t){return{usr:i.state,key:i.key,idx:t}}function Lc(i,t,c=null,d){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof t=="string"?pi(t):t,state:c,key:t&&t.key||d||W4()}}function gs({pathname:i="/",search:t="",hash:c=""}){return t&&t!=="?"&&(i+=t.charAt(0)==="?"?t:"?"+t),c&&c!=="#"&&(i+=c.charAt(0)==="#"?c:"#"+c),i}function pi(i){let t={};if(i){let c=i.indexOf("#");c>=0&&(t.hash=i.substring(c),i=i.substring(0,c));let d=i.indexOf("?");d>=0&&(t.search=i.substring(d),i=i.substring(0,d)),i&&(t.pathname=i)}return t}function em(i,t,c,d={}){let{window:l=document.defaultView,v5Compat:p=!1}=d,b=l.history,y="POP",v=null,m=h();m==null&&(m=0,b.replaceState({...b.state,idx:m},""));function h(){return(b.state||{idx:null}).idx}function _(){y="POP";let G=h(),O=G==null?null:G-m;m=G,v&&v({action:y,location:Y.location,delta:O})}function A(G,O){y="PUSH";let B=Lc(Y.location,G,O);m=h()+1;let Z=p2(B,m),J=Y.createHref(B);try{b.pushState(Z,"",J)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;l.location.assign(J)}p&&v&&v({action:y,location:Y.location,delta:1})}function k(G,O){y="REPLACE";let B=Lc(Y.location,G,O);m=h();let Z=p2(B,m),J=Y.createHref(B);b.replaceState(Z,"",J),p&&v&&v({action:y,location:Y.location,delta:0})}function w(G){return am(G)}let Y={get action(){return y},get location(){return i(l,b)},listen(G){if(v)throw new Error("A history only accepts one active listener");return l.addEventListener(u2,_),v=G,()=>{l.removeEventListener(u2,_),v=null}},createHref(G){return t(l,G)},createURL:w,encodeLocation(G){let O=w(G);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:A,replace:k,go(G){return b.go(G)}};return Y}function am(i,t=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Qe(c,"No window.location.(origin|href) available to create URL");let d=typeof i=="string"?i:gs(i);return d=d.replace(/ $/,"%20"),!t&&d.startsWith("//")&&(d=c+d),new URL(d,c)}function N2(i,t,c="/"){return rm(i,t,c,!1)}function rm(i,t,c,d){let l=typeof t=="string"?pi(t):t,p=xr(l.pathname||"/",c);if(p==null)return null;let b=B2(i);nm(b);let y=null;for(let v=0;y==null&&v<b.length;++v){let m=fm(p);y=pm(b[v],m,d)}return y}function B2(i,t=[],c=[],d=""){let l=(p,b,y)=>{let v={relativePath:y===void 0?p.path||"":y,caseSensitive:p.caseSensitive===!0,childrenIndex:b,route:p};v.relativePath.startsWith("/")&&(Qe(v.relativePath.startsWith(d),`Absolute route path "${v.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(d.length));let m=jr([d,v.relativePath]),h=c.concat(v);p.children&&p.children.length>0&&(Qe(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),B2(p.children,t,h,m)),!(p.path==null&&!p.index)&&t.push({path:m,score:lm(m,p.index),routesMeta:h})};return i.forEach((p,b)=>{var y;if(p.path===""||!((y=p.path)!=null&&y.includes("?")))l(p,b);else for(let v of L2(p.path))l(p,b,v)}),t}function L2(i){let t=i.split("/");if(t.length===0)return[];let[c,...d]=t,l=c.endsWith("?"),p=c.replace(/\?$/,"");if(d.length===0)return l?[p,""]:[p];let b=L2(d.join("/")),y=[];return y.push(...b.map(v=>v===""?p:[p,v].join("/"))),l&&y.push(...b),y.map(v=>i.startsWith("/")&&v===""?"/":v)}function nm(i){i.sort((t,c)=>t.score!==c.score?c.score-t.score:um(t.routesMeta.map(d=>d.childrenIndex),c.routesMeta.map(d=>d.childrenIndex)))}var im=/^:[\w-]+$/,sm=3,om=2,tm=1,cm=10,dm=-2,m2=i=>i==="*";function lm(i,t){let c=i.split("/"),d=c.length;return c.some(m2)&&(d+=dm),t&&(d+=om),c.filter(l=>!m2(l)).reduce((l,p)=>l+(im.test(p)?sm:p===""?tm:cm),d)}function um(i,t){return i.length===t.length&&i.slice(0,-1).every((d,l)=>d===t[l])?i[i.length-1]-t[t.length-1]:0}function pm(i,t,c=!1){let{routesMeta:d}=i,l={},p="/",b=[];for(let y=0;y<d.length;++y){let v=d[y],m=y===d.length-1,h=p==="/"?t:t.slice(p.length)||"/",_=Xo({path:v.relativePath,caseSensitive:v.caseSensitive,end:m},h),A=v.route;if(!_&&m&&c&&!d[d.length-1].route.index&&(_=Xo({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},h)),!_)return null;Object.assign(l,_.params),b.push({params:l,pathname:jr([p,_.pathname]),pathnameBase:ym(jr([p,_.pathnameBase])),route:A}),_.pathnameBase!=="/"&&(p=jr([p,_.pathnameBase]))}return b}function Xo(i,t){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[c,d]=mm(i.path,i.caseSensitive,i.end),l=t.match(c);if(!l)return null;let p=l[0],b=p.replace(/(.)\/+$/,"$1"),y=l.slice(1);return{params:d.reduce((m,{paramName:h,isOptional:_},A)=>{if(h==="*"){let w=y[A]||"";b=p.slice(0,p.length-w.length).replace(/(.)\/+$/,"$1")}const k=y[A];return _&&!k?m[h]=void 0:m[h]=(k||"").replace(/%2F/g,"/"),m},{}),pathname:p,pathnameBase:b,pattern:i}}function mm(i,t=!1,c=!0){$a(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let d=[],l="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,y,v)=>(d.push({paramName:y,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(d.push({paramName:"*"}),l+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?l+="\\/*$":i!==""&&i!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),d]}function fm(i){try{return i.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return $a(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),i}}function xr(i,t){if(t==="/")return i;if(!i.toLowerCase().startsWith(t.toLowerCase()))return null;let c=t.endsWith("/")?t.length-1:t.length,d=i.charAt(c);return d&&d!=="/"?null:i.slice(c)||"/"}function vm(i,t="/"){let{pathname:c,search:d="",hash:l=""}=typeof i=="string"?pi(i):i;return{pathname:c?c.startsWith("/")?c:bm(c,t):t,search:hm(d),hash:Sm(l)}}function bm(i,t){let c=t.replace(/\/+$/,"").split("/");return i.split("/").forEach(l=>{l===".."?c.length>1&&c.pop():l!=="."&&c.push(l)}),c.length>1?c.join("/"):"/"}function Ac(i,t,c,d){return`Cannot include a '${i}' character in a manually specified \`to.${t}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gm(i){return i.filter((t,c)=>c===0||t.route.path&&t.route.path.length>0)}function Fc(i){let t=gm(i);return t.map((c,d)=>d===t.length-1?c.pathname:c.pathnameBase)}function $c(i,t,c,d=!1){let l;typeof i=="string"?l=pi(i):(l={...i},Qe(!l.pathname||!l.pathname.includes("?"),Ac("?","pathname","search",l)),Qe(!l.pathname||!l.pathname.includes("#"),Ac("#","pathname","hash",l)),Qe(!l.search||!l.search.includes("#"),Ac("#","search","hash",l)));let p=i===""||l.pathname==="",b=p?"/":l.pathname,y;if(b==null)y=c;else{let _=t.length-1;if(!d&&b.startsWith("..")){let A=b.split("/");for(;A[0]==="..";)A.shift(),_-=1;l.pathname=A.join("/")}y=_>=0?t[_]:"/"}let v=vm(l,y),m=b&&b!=="/"&&b.endsWith("/"),h=(p||b===".")&&c.endsWith("/");return!v.pathname.endsWith("/")&&(m||h)&&(v.pathname+="/"),v}var jr=i=>i.join("/").replace(/\/\/+/g,"/"),ym=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),hm=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Sm=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function Tm(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var H2=["POST","PUT","PATCH","DELETE"];new Set(H2);var jm=["GET",...H2];new Set(jm);var mi=C.createContext(null);mi.displayName="DataRouter";var et=C.createContext(null);et.displayName="DataRouterState";var U2=C.createContext({isTransitioning:!1});U2.displayName="ViewTransition";var qm=C.createContext(new Map);qm.displayName="Fetchers";var xm=C.createContext(null);xm.displayName="Await";var Wa=C.createContext(null);Wa.displayName="Navigation";var Ts=C.createContext(null);Ts.displayName="Location";var Qa=C.createContext({outlet:null,matches:[],isDataRoute:!1});Qa.displayName="Route";var Wc=C.createContext(null);Wc.displayName="RouteError";function Em(i,{relative:t}={}){Qe(fi(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:d}=C.useContext(Wa),{hash:l,pathname:p,search:b}=js(i,{relative:t}),y=p;return c!=="/"&&(y=p==="/"?c:jr([c,p])),d.createHref({pathname:y,search:b,hash:l})}function fi(){return C.useContext(Ts)!=null}function or(){return Qe(fi(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Ts).location}var G2="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function V2(i){C.useContext(Wa).static||C.useLayoutEffect(i)}function at(){let{isDataRoute:i}=C.useContext(Qa);return i?Gm():Cm()}function Cm(){Qe(fi(),"useNavigate() may be used only in the context of a <Router> component.");let i=C.useContext(mi),{basename:t,navigator:c}=C.useContext(Wa),{matches:d}=C.useContext(Qa),{pathname:l}=or(),p=JSON.stringify(Fc(d)),b=C.useRef(!1);return V2(()=>{b.current=!0}),C.useCallback((v,m={})=>{if($a(b.current,G2),!b.current)return;if(typeof v=="number"){c.go(v);return}let h=$c(v,JSON.parse(p),l,m.relative==="path");i==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:jr([t,h.pathname])),(m.replace?c.replace:c.push)(h,m.state,m)},[t,c,p,l,i])}var Am=C.createContext(null);function zm(i){let t=C.useContext(Qa).outlet;return t&&C.createElement(Am.Provider,{value:i},t)}function Mm(){let{matches:i}=C.useContext(Qa),t=i[i.length-1];return t?t.params:{}}function js(i,{relative:t}={}){let{matches:c}=C.useContext(Qa),{pathname:d}=or(),l=JSON.stringify(Fc(c));return C.useMemo(()=>$c(i,JSON.parse(l),d,t==="path"),[i,l,d,t])}function _m(i,t){return k2(i,t)}function k2(i,t,c,d){var O;Qe(fi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=C.useContext(Wa),{matches:p}=C.useContext(Qa),b=p[p.length-1],y=b?b.params:{},v=b?b.pathname:"/",m=b?b.pathnameBase:"/",h=b&&b.route;{let B=h&&h.path||"";Y2(v,!h||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let _=or(),A;if(t){let B=typeof t=="string"?pi(t):t;Qe(m==="/"||((O=B.pathname)==null?void 0:O.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${B.pathname}" was given in the \`location\` prop.`),A=B}else A=_;let k=A.pathname||"/",w=k;if(m!=="/"){let B=m.replace(/^\//,"").split("/");w="/"+k.replace(/^\//,"").split("/").slice(B.length).join("/")}let Y=N2(i,{pathname:w});$a(h||Y!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),$a(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=Om(Y&&Y.map(B=>Object.assign({},B,{params:Object.assign({},y,B.params),pathname:jr([m,l.encodeLocation?l.encodeLocation(B.pathname).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?m:jr([m,l.encodeLocation?l.encodeLocation(B.pathnameBase).pathname:B.pathnameBase])})),p,c,d);return t&&G?C.createElement(Ts.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},G):G}function Pm(){let i=Um(),t=Tm(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),c=i instanceof Error?i.stack:null,d="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:d},p={padding:"2px 4px",backgroundColor:d},b=null;return console.error("Error handled by React Router default ErrorBoundary:",i),b=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:p},"ErrorBoundary")," or"," ",C.createElement("code",{style:p},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),c?C.createElement("pre",{style:l},c):null,b)}var Rm=C.createElement(Pm,null),wm=class extends C.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,t){return t.location!==i.location||t.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:t.error,location:t.location,revalidation:i.revalidation||t.revalidation}}componentDidCatch(i,t){console.error("React Router caught the following error during render",i,t)}render(){return this.state.error!==void 0?C.createElement(Qa.Provider,{value:this.props.routeContext},C.createElement(Wc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Dm({routeContext:i,match:t,children:c}){let d=C.useContext(mi);return d&&d.static&&d.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=t.route.id),C.createElement(Qa.Provider,{value:i},c)}function Om(i,t=[],c=null,d=null){if(i==null){if(!c)return null;if(c.errors)i=c.matches;else if(t.length===0&&!c.initialized&&c.matches.length>0)i=c.matches;else return null}let l=i,p=c==null?void 0:c.errors;if(p!=null){let v=l.findIndex(m=>m.route.id&&(p==null?void 0:p[m.route.id])!==void 0);Qe(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),l=l.slice(0,Math.min(l.length,v+1))}let b=!1,y=-1;if(c)for(let v=0;v<l.length;v++){let m=l[v];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(y=v),m.route.id){let{loaderData:h,errors:_}=c,A=m.route.loader&&!h.hasOwnProperty(m.route.id)&&(!_||_[m.route.id]===void 0);if(m.route.lazy||A){b=!0,y>=0?l=l.slice(0,y+1):l=[l[0]];break}}}return l.reduceRight((v,m,h)=>{let _,A=!1,k=null,w=null;c&&(_=p&&m.route.id?p[m.route.id]:void 0,k=m.route.errorElement||Rm,b&&(y<0&&h===0?(Y2("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,w=null):y===h&&(A=!0,w=m.route.hydrateFallbackElement||null)));let Y=t.concat(l.slice(0,h+1)),G=()=>{let O;return _?O=k:A?O=w:m.route.Component?O=C.createElement(m.route.Component,null):m.route.element?O=m.route.element:O=v,C.createElement(Dm,{match:m,routeContext:{outlet:v,matches:Y,isDataRoute:c!=null},children:O})};return c&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?C.createElement(wm,{location:c.location,revalidation:c.revalidation,component:k,error:_,children:G(),routeContext:{outlet:null,matches:Y,isDataRoute:!0}}):G()},null)}function ed(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nm(i){let t=C.useContext(mi);return Qe(t,ed(i)),t}function Bm(i){let t=C.useContext(et);return Qe(t,ed(i)),t}function Lm(i){let t=C.useContext(Qa);return Qe(t,ed(i)),t}function ad(i){let t=Lm(i),c=t.matches[t.matches.length-1];return Qe(c.route.id,`${i} can only be used on routes that contain a unique "id"`),c.route.id}function Hm(){return ad("useRouteId")}function Um(){var d;let i=C.useContext(Wc),t=Bm("useRouteError"),c=ad("useRouteError");return i!==void 0?i:(d=t.errors)==null?void 0:d[c]}function Gm(){let{router:i}=Nm("useNavigate"),t=ad("useNavigate"),c=C.useRef(!1);return V2(()=>{c.current=!0}),C.useCallback(async(l,p={})=>{$a(c.current,G2),c.current&&(typeof l=="number"?i.navigate(l):await i.navigate(l,{fromRouteId:t,...p}))},[i,t])}var f2={};function Y2(i,t,c){!t&&!f2[i]&&(f2[i]=!0,$a(!1,c))}C.memo(Vm);function Vm({routes:i,future:t,state:c}){return k2(i,void 0,c,t)}function v2({to:i,replace:t,state:c,relative:d}){Qe(fi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=C.useContext(Wa);$a(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=C.useContext(Qa),{pathname:b}=or(),y=at(),v=$c(i,Fc(p),b,d==="path"),m=JSON.stringify(v);return C.useEffect(()=>{y(JSON.parse(m),{replace:t,state:c,relative:d})},[y,m,d,t,c]),null}function km(i){return zm(i.context)}function hn(i){Qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ym({basename:i="/",children:t=null,location:c,navigationType:d="POP",navigator:l,static:p=!1}){Qe(!fi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=i.replace(/^\/*/,"/"),y=C.useMemo(()=>({basename:b,navigator:l,static:p,future:{}}),[b,l,p]);typeof c=="string"&&(c=pi(c));let{pathname:v="/",search:m="",hash:h="",state:_=null,key:A="default"}=c,k=C.useMemo(()=>{let w=xr(v,b);return w==null?null:{location:{pathname:w,search:m,hash:h,state:_,key:A},navigationType:d}},[b,v,m,h,_,A,d]);return $a(k!=null,`<Router basename="${b}"> is not able to match the URL "${v}${m}${h}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:C.createElement(Wa.Provider,{value:y},C.createElement(Ts.Provider,{children:t,value:k}))}function Xm({children:i,location:t}){return _m(Hc(i),t)}function Hc(i,t=[]){let c=[];return C.Children.forEach(i,(d,l)=>{if(!C.isValidElement(d))return;let p=[...t,l];if(d.type===C.Fragment){c.push.apply(c,Hc(d.props.children,p));return}Qe(d.type===hn,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qe(!d.props.index||!d.props.children,"An index route cannot have child routes.");let b={id:d.props.id||p.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(b.children=Hc(d.props.children,p)),c.push(b)}),c}var Go="get",Vo="application/x-www-form-urlencoded";function rt(i){return i!=null&&typeof i.tagName=="string"}function Qm(i){return rt(i)&&i.tagName.toLowerCase()==="button"}function Zm(i){return rt(i)&&i.tagName.toLowerCase()==="form"}function Km(i){return rt(i)&&i.tagName.toLowerCase()==="input"}function Jm(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Im(i,t){return i.button===0&&(!t||t==="_self")&&!Jm(i)}var Lo=null;function Fm(){if(Lo===null)try{new FormData(document.createElement("form"),0),Lo=!1}catch{Lo=!0}return Lo}var $m=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zc(i){return i!=null&&!$m.has(i)?($a(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vo}"`),null):i}function Wm(i,t){let c,d,l,p,b;if(Zm(i)){let y=i.getAttribute("action");d=y?xr(y,t):null,c=i.getAttribute("method")||Go,l=zc(i.getAttribute("enctype"))||Vo,p=new FormData(i)}else if(Qm(i)||Km(i)&&(i.type==="submit"||i.type==="image")){let y=i.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=i.getAttribute("formaction")||y.getAttribute("action");if(d=v?xr(v,t):null,c=i.getAttribute("formmethod")||y.getAttribute("method")||Go,l=zc(i.getAttribute("formenctype"))||zc(y.getAttribute("enctype"))||Vo,p=new FormData(y,i),!Fm()){let{name:m,type:h,value:_}=i;if(h==="image"){let A=m?`${m}.`:"";p.append(`${A}x`,"0"),p.append(`${A}y`,"0")}else m&&p.append(m,_)}}else{if(rt(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=Go,d=null,l=Vo,b=i}return p&&l==="text/plain"&&(b=p,p=void 0),{action:d,method:c.toLowerCase(),encType:l,formData:p,body:b}}function rd(i,t){if(i===!1||i===null||typeof i>"u")throw new Error(t)}async function ef(i,t){if(i.id in t)return t[i.id];try{let c=await import(i.module);return t[i.id]=c,c}catch(c){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function af(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function rf(i,t,c){let d=await Promise.all(i.map(async l=>{let p=t.routes[l.route.id];if(p){let b=await ef(p,c);return b.links?b.links():[]}return[]}));return tf(d.flat(1).filter(af).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function b2(i,t,c,d,l,p){let b=(v,m)=>c[m]?v.route.id!==c[m].route.id:!0,y=(v,m)=>{var h;return c[m].pathname!==v.pathname||((h=c[m].route.path)==null?void 0:h.endsWith("*"))&&c[m].params["*"]!==v.params["*"]};return p==="assets"?t.filter((v,m)=>b(v,m)||y(v,m)):p==="data"?t.filter((v,m)=>{var _;let h=d.routes[v.route.id];if(!h||!h.hasLoader)return!1;if(b(v,m)||y(v,m))return!0;if(v.route.shouldRevalidate){let A=v.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((_=c[0])==null?void 0:_.params)||{},nextUrl:new URL(i,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function nf(i,t,{includeHydrateFallback:c}={}){return sf(i.map(d=>{let l=t.routes[d.route.id];if(!l)return[];let p=[l.module];return l.clientActionModule&&(p=p.concat(l.clientActionModule)),l.clientLoaderModule&&(p=p.concat(l.clientLoaderModule)),c&&l.hydrateFallbackModule&&(p=p.concat(l.hydrateFallbackModule)),l.imports&&(p=p.concat(l.imports)),p}).flat(1))}function sf(i){return[...new Set(i)]}function of(i){let t={},c=Object.keys(i).sort();for(let d of c)t[d]=i[d];return t}function tf(i,t){let c=new Set;return new Set(t),i.reduce((d,l)=>{let p=JSON.stringify(of(l));return c.has(p)||(c.add(p),d.push({key:p,link:l})),d},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var cf=new Set([100,101,204,205]);function df(i,t){let c=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return c.pathname==="/"?c.pathname="_root.data":t&&xr(c.pathname,t)==="/"?c.pathname=`${t.replace(/\/$/,"")}/_root.data`:c.pathname=`${c.pathname.replace(/\/$/,"")}.data`,c}function X2(){let i=C.useContext(mi);return rd(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function lf(){let i=C.useContext(et);return rd(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var nd=C.createContext(void 0);nd.displayName="FrameworkContext";function Q2(){let i=C.useContext(nd);return rd(i,"You must render this element inside a <HydratedRouter> element"),i}function uf(i,t){let c=C.useContext(nd),[d,l]=C.useState(!1),[p,b]=C.useState(!1),{onFocus:y,onBlur:v,onMouseEnter:m,onMouseLeave:h,onTouchStart:_}=t,A=C.useRef(null);C.useEffect(()=>{if(i==="render"&&b(!0),i==="viewport"){let Y=O=>{O.forEach(B=>{b(B.isIntersecting)})},G=new IntersectionObserver(Y,{threshold:.5});return A.current&&G.observe(A.current),()=>{G.disconnect()}}},[i]),C.useEffect(()=>{if(d){let Y=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(Y)}}},[d]);let k=()=>{l(!0)},w=()=>{l(!1),b(!1)};return c?i!=="intent"?[p,A,{}]:[p,A,{onFocus:vs(y,k),onBlur:vs(v,w),onMouseEnter:vs(m,k),onMouseLeave:vs(h,w),onTouchStart:vs(_,k)}]:[!1,A,{}]}function vs(i,t){return c=>{i&&i(c),c.defaultPrevented||t(c)}}function pf({page:i,...t}){let{router:c}=X2(),d=C.useMemo(()=>N2(c.routes,i,c.basename),[c.routes,i,c.basename]);return d?C.createElement(ff,{page:i,matches:d,...t}):null}function mf(i){let{manifest:t,routeModules:c}=Q2(),[d,l]=C.useState([]);return C.useEffect(()=>{let p=!1;return rf(i,t,c).then(b=>{p||l(b)}),()=>{p=!0}},[i,t,c]),d}function ff({page:i,matches:t,...c}){let d=or(),{manifest:l,routeModules:p}=Q2(),{basename:b}=X2(),{loaderData:y,matches:v}=lf(),m=C.useMemo(()=>b2(i,t,v,l,d,"data"),[i,t,v,l,d]),h=C.useMemo(()=>b2(i,t,v,l,d,"assets"),[i,t,v,l,d]),_=C.useMemo(()=>{if(i===d.pathname+d.search+d.hash)return[];let w=new Set,Y=!1;if(t.forEach(O=>{var Z;let B=l.routes[O.route.id];!B||!B.hasLoader||(!m.some(J=>J.route.id===O.route.id)&&O.route.id in y&&((Z=p[O.route.id])!=null&&Z.shouldRevalidate)||B.hasClientLoader?Y=!0:w.add(O.route.id))}),w.size===0)return[];let G=df(i,b);return Y&&w.size>0&&G.searchParams.set("_routes",t.filter(O=>w.has(O.route.id)).map(O=>O.route.id).join(",")),[G.pathname+G.search]},[b,y,d,l,m,t,i,p]),A=C.useMemo(()=>nf(h,l),[h,l]),k=mf(h);return C.createElement(C.Fragment,null,_.map(w=>C.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...c})),A.map(w=>C.createElement("link",{key:w,rel:"modulepreload",href:w,...c})),k.map(({key:w,link:Y})=>C.createElement("link",{key:w,...Y})))}function vf(...i){return t=>{i.forEach(c=>{typeof c=="function"?c(t):c!=null&&(c.current=t)})}}var Z2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Z2&&(window.__reactRouterVersion="7.6.1")}catch{}function bf({basename:i,children:t,window:c}){let d=C.useRef();d.current==null&&(d.current=$4({window:c,v5Compat:!0}));let l=d.current,[p,b]=C.useState({action:l.action,location:l.location}),y=C.useCallback(v=>{C.startTransition(()=>b(v))},[b]);return C.useLayoutEffect(()=>l.listen(y),[l,y]),C.createElement(Ym,{basename:i,children:t,location:p.location,navigationType:p.action,navigator:l})}var K2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,id=C.forwardRef(function({onClick:t,discover:c="render",prefetch:d="none",relative:l,reloadDocument:p,replace:b,state:y,target:v,to:m,preventScrollReset:h,viewTransition:_,...A},k){let{basename:w}=C.useContext(Wa),Y=typeof m=="string"&&K2.test(m),G,O=!1;if(typeof m=="string"&&Y&&(G=m,Z2))try{let T=new URL(window.location.href),L=m.startsWith("//")?new URL(T.protocol+m):new URL(m),W=xr(L.pathname,w);L.origin===T.origin&&W!=null?m=W+L.search+L.hash:O=!0}catch{$a(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=Em(m,{relative:l}),[Z,J,K]=uf(d,A),ae=hf(m,{replace:b,state:y,target:v,preventScrollReset:h,relative:l,viewTransition:_});function F(T){t&&t(T),T.defaultPrevented||ae(T)}let j=C.createElement("a",{...A,...K,href:G||B,onClick:O||p?t:F,ref:vf(k,J),target:v,"data-discover":!Y&&c==="render"?"true":void 0});return Z&&!Y?C.createElement(C.Fragment,null,j,C.createElement(pf,{page:B})):j});id.displayName="Link";var ko=C.forwardRef(function({"aria-current":t="page",caseSensitive:c=!1,className:d="",end:l=!1,style:p,to:b,viewTransition:y,children:v,...m},h){let _=js(b,{relative:m.relative}),A=or(),k=C.useContext(et),{navigator:w,basename:Y}=C.useContext(Wa),G=k!=null&&xf(_)&&y===!0,O=w.encodeLocation?w.encodeLocation(_).pathname:_.pathname,B=A.pathname,Z=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;c||(B=B.toLowerCase(),Z=Z?Z.toLowerCase():null,O=O.toLowerCase()),Z&&Y&&(Z=xr(Z,Y)||Z);const J=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let K=B===O||!l&&B.startsWith(O)&&B.charAt(J)==="/",ae=Z!=null&&(Z===O||!l&&Z.startsWith(O)&&Z.charAt(O.length)==="/"),F={isActive:K,isPending:ae,isTransitioning:G},j=K?t:void 0,T;typeof d=="function"?T=d(F):T=[d,K?"active":null,ae?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let L=typeof p=="function"?p(F):p;return C.createElement(id,{...m,"aria-current":j,className:T,ref:h,style:L,to:b,viewTransition:y},typeof v=="function"?v(F):v)});ko.displayName="NavLink";var gf=C.forwardRef(({discover:i="render",fetcherKey:t,navigate:c,reloadDocument:d,replace:l,state:p,method:b=Go,action:y,onSubmit:v,relative:m,preventScrollReset:h,viewTransition:_,...A},k)=>{let w=jf(),Y=qf(y,{relative:m}),G=b.toLowerCase()==="get"?"get":"post",O=typeof y=="string"&&K2.test(y),B=Z=>{if(v&&v(Z),Z.defaultPrevented)return;Z.preventDefault();let J=Z.nativeEvent.submitter,K=(J==null?void 0:J.getAttribute("formmethod"))||b;w(J||Z.currentTarget,{fetcherKey:t,method:K,navigate:c,replace:l,state:p,relative:m,preventScrollReset:h,viewTransition:_})};return C.createElement("form",{ref:k,method:G,action:Y,onSubmit:d?v:B,...A,"data-discover":!O&&i==="render"?"true":void 0})});gf.displayName="Form";function yf(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function J2(i){let t=C.useContext(mi);return Qe(t,yf(i)),t}function hf(i,{target:t,replace:c,state:d,preventScrollReset:l,relative:p,viewTransition:b}={}){let y=at(),v=or(),m=js(i,{relative:p});return C.useCallback(h=>{if(Im(h,t)){h.preventDefault();let _=c!==void 0?c:gs(v)===gs(m);y(i,{replace:_,state:d,preventScrollReset:l,relative:p,viewTransition:b})}},[v,y,m,c,d,t,i,l,p,b])}var Sf=0,Tf=()=>`__${String(++Sf)}__`;function jf(){let{router:i}=J2("useSubmit"),{basename:t}=C.useContext(Wa),c=Hm();return C.useCallback(async(d,l={})=>{let{action:p,method:b,encType:y,formData:v,body:m}=Wm(d,t);if(l.navigate===!1){let h=l.fetcherKey||Tf();await i.fetch(h,c,l.action||p,{preventScrollReset:l.preventScrollReset,formData:v,body:m,formMethod:l.method||b,formEncType:l.encType||y,flushSync:l.flushSync})}else await i.navigate(l.action||p,{preventScrollReset:l.preventScrollReset,formData:v,body:m,formMethod:l.method||b,formEncType:l.encType||y,replace:l.replace,state:l.state,fromRouteId:c,flushSync:l.flushSync,viewTransition:l.viewTransition})},[i,t,c])}function qf(i,{relative:t}={}){let{basename:c}=C.useContext(Wa),d=C.useContext(Qa);Qe(d,"useFormAction must be used inside a RouteContext");let[l]=d.matches.slice(-1),p={...js(i||".",{relative:t})},b=or();if(i==null){p.search=b.search;let y=new URLSearchParams(p.search),v=y.getAll("index");if(v.some(h=>h==="")){y.delete("index"),v.filter(_=>_).forEach(_=>y.append("index",_));let h=y.toString();p.search=h?`?${h}`:""}}return(!i||i===".")&&l.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(p.pathname=p.pathname==="/"?c:jr([c,p.pathname])),gs(p)}function xf(i,t={}){let c=C.useContext(U2);Qe(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=J2("useViewTransitionState"),l=js(i,{relative:t.relative});if(!c.isTransitioning)return!1;let p=xr(c.currentLocation.pathname,d)||c.currentLocation.pathname,b=xr(c.nextLocation.pathname,d)||c.nextLocation.pathname;return Xo(l.pathname,b)!=null||Xo(l.pathname,p)!=null}[...cf];var Mc={exports:{}},_c={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g2;function Ef(){if(g2)return _c;g2=1;var i=Wo();function t(v,m){return v===m&&(v!==0||1/v===1/m)||v!==v&&m!==m}var c=typeof Object.is=="function"?Object.is:t,d=i.useSyncExternalStore,l=i.useRef,p=i.useEffect,b=i.useMemo,y=i.useDebugValue;return _c.useSyncExternalStoreWithSelector=function(v,m,h,_,A){var k=l(null);if(k.current===null){var w={hasValue:!1,value:null};k.current=w}else w=k.current;k=b(function(){function G(K){if(!O){if(O=!0,B=K,K=_(K),A!==void 0&&w.hasValue){var ae=w.value;if(A(ae,K))return Z=ae}return Z=K}if(ae=Z,c(B,K))return ae;var F=_(K);return A!==void 0&&A(ae,F)?(B=K,ae):(B=K,Z=F)}var O=!1,B,Z,J=h===void 0?null:h;return[function(){return G(m())},J===null?void 0:function(){return G(J())}]},[m,h,_,A]);var Y=d(v,k[0],k[1]);return p(function(){w.hasValue=!0,w.value=Y},[Y]),y(Y),Y},_c}var y2;function Cf(){return y2||(y2=1,Mc.exports=Ef()),Mc.exports}var Af=Cf();function zf(i){i()}function Mf(){let i=null,t=null;return{clear(){i=null,t=null},notify(){zf(()=>{let c=i;for(;c;)c.callback(),c=c.next})},get(){const c=[];let d=i;for(;d;)c.push(d),d=d.next;return c},subscribe(c){let d=!0;const l=t={callback:c,next:null,prev:t};return l.prev?l.prev.next=l:i=l,function(){!d||i===null||(d=!1,l.next?l.next.prev=l.prev:t=l.prev,l.prev?l.prev.next=l.next:i=l.next)}}}}var h2={notify(){},get:()=>[]};function _f(i,t){let c,d=h2,l=0,p=!1;function b(Y){h();const G=d.subscribe(Y);let O=!1;return()=>{O||(O=!0,G(),_())}}function y(){d.notify()}function v(){w.onStateChange&&w.onStateChange()}function m(){return p}function h(){l++,c||(c=i.subscribe(v),d=Mf())}function _(){l--,c&&l===0&&(c(),c=void 0,d.clear(),d=h2)}function A(){p||(p=!0,h())}function k(){p&&(p=!1,_())}const w={addNestedSub:b,notifyNestedSubs:y,handleChangeWrapper:v,isSubscribed:m,trySubscribe:A,tryUnsubscribe:k,getListeners:()=>d};return w}var Pf=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rf=Pf(),wf=()=>typeof navigator<"u"&&navigator.product==="ReactNative",Df=wf(),Of=()=>Rf||Df?C.useLayoutEffect:C.useEffect,Nf=Of(),Pc=Symbol.for("react-redux-context"),Rc=typeof globalThis<"u"?globalThis:{};function Bf(){if(!C.createContext)return{};const i=Rc[Pc]??(Rc[Pc]=new Map);let t=i.get(C.createContext);return t||(t=C.createContext(null),i.set(C.createContext,t)),t}var $r=Bf();function Lf(i){const{children:t,context:c,serverState:d,store:l}=i,p=C.useMemo(()=>{const v=_f(l);return{store:l,subscription:v,getServerState:d?()=>d:void 0}},[l,d]),b=C.useMemo(()=>l.getState(),[l]);Nf(()=>{const{subscription:v}=p;return v.onStateChange=v.notifyNestedSubs,v.trySubscribe(),b!==l.getState()&&v.notifyNestedSubs(),()=>{v.tryUnsubscribe(),v.onStateChange=void 0}},[p,b]);const y=c||$r;return C.createElement(y.Provider,{value:p},t)}var Hf=Lf;function sd(i=$r){return function(){return C.useContext(i)}}var I2=sd();function F2(i=$r){const t=i===$r?I2:sd(i),c=()=>{const{store:d}=t();return d};return Object.assign(c,{withTypes:()=>c}),c}var Uf=F2();function Gf(i=$r){const t=i===$r?Uf:F2(i),c=()=>t().dispatch;return Object.assign(c,{withTypes:()=>c}),c}var od=Gf(),Vf=(i,t)=>i===t;function kf(i=$r){const t=i===$r?I2:sd(i),c=(d,l={})=>{const{equalityFn:p=Vf}=typeof l=="function"?{equalityFn:l}:l,b=t(),{store:y,subscription:v,getServerState:m}=b;C.useRef(!0);const h=C.useCallback({[d.name](A){return d(A)}}[d.name],[d]),_=Af.useSyncExternalStoreWithSelector(v.addNestedSub,y.getState,m||y.getState,h,p);return C.useDebugValue(_),_};return Object.assign(c,{withTypes:()=>c}),c}var vi=kf(),$2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},S2=Ce.createContext&&Ce.createContext($2),Yf=["attr","size","title"];function Xf(i,t){if(i==null)return{};var c=Qf(i,t),d,l;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(i);for(l=0;l<p.length;l++)d=p[l],!(t.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(i,d)&&(c[d]=i[d])}return c}function Qf(i,t){if(i==null)return{};var c={};for(var d in i)if(Object.prototype.hasOwnProperty.call(i,d)){if(t.indexOf(d)>=0)continue;c[d]=i[d]}return c}function Qo(){return Qo=Object.assign?Object.assign.bind():function(i){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(i[d]=c[d])}return i},Qo.apply(this,arguments)}function T2(i,t){var c=Object.keys(i);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(i);t&&(d=d.filter(function(l){return Object.getOwnPropertyDescriptor(i,l).enumerable})),c.push.apply(c,d)}return c}function Zo(i){for(var t=1;t<arguments.length;t++){var c=arguments[t]!=null?arguments[t]:{};t%2?T2(Object(c),!0).forEach(function(d){Zf(i,d,c[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(c)):T2(Object(c)).forEach(function(d){Object.defineProperty(i,d,Object.getOwnPropertyDescriptor(c,d))})}return i}function Zf(i,t,c){return t=Kf(t),t in i?Object.defineProperty(i,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[t]=c,i}function Kf(i){var t=Jf(i,"string");return typeof t=="symbol"?t:t+""}function Jf(i,t){if(typeof i!="object"||!i)return i;var c=i[Symbol.toPrimitive];if(c!==void 0){var d=c.call(i,t);if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(i)}function W2(i){return i&&i.map((t,c)=>Ce.createElement(t.tag,Zo({key:c},t.attr),W2(t.child)))}function En(i){return t=>Ce.createElement(If,Qo({attr:Zo({},i.attr)},t),W2(i.child))}function If(i){var t=c=>{var{attr:d,size:l,title:p}=i,b=Xf(i,Yf),y=l||c.size||"1em",v;return c.className&&(v=c.className),i.className&&(v=(v?v+" ":"")+i.className),Ce.createElement("svg",Qo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,d,b,{className:v,style:Zo(Zo({color:i.color||c.color},c.style),i.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),p&&Ce.createElement("title",null,p),i.children)};return S2!==void 0?Ce.createElement(S2.Consumer,null,c=>t(c)):t($2)}function Ff(i){return En({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M16,16 C16,14.8954305 12.8659932,14 9,14 C5.13400675,14 2,14.8954305 2,16 C2,17.1045695 5.13400675,18 9,18 C12.8659932,18 16,17.1045695 16,16 Z M2,16 L2,20.9367547 C2,22.0762536 5.13400675,23 9,23 C12.8659932,23 16,22.0762537 16,20.9367548 L16,16 M9,5 C4.581722,5 1,5.8954305 1,7 C1,8.1045695 4.581722,9 9,9 M1,7 L1,12.0000002 C1,13.0128881 4.581722,14 9,14 M23,4 C23,2.8954305 19.9004329,2 16.0769231,2 C12.2534133,2 9.15384615,2.8954305 9.15384615,4 C9.15384615,5.1045695 12.2534133,6 16.0769231,6 C19.9004329,6 23,5.1045695 23,4 Z M16,16 C19.8235098,16 23.0000002,15.0128879 23.0000002,14 L23,4 M9.15384615,3.99999999 L9.15384615,14.1660042 M8.99999999,9.00000001 C8.99999999,10.0128879 12.2534135,11 16.0769233,11 C19.9004331,11 23.0000004,10.0128879 23.0000004,9.00000001"},child:[]}]})(i)}const wc=({text:i,icon:t,dataTestId:c,textColor:d,backgroundColor:l})=>g.jsxs("div",{"data-testid":c,className:`flex flex-row align-middle ${l||"bg-slate-200"} ${d||"text-slate-700"} px-3 py-1 rounded-full font-medium w-fit`,children:[g.jsx("span",{className:"flex mr-1 items-center",children:t}),": ",i]});function $f(i){return En({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"path",attr:{d:"M3 10h5"},child:[]},{tag:"path",attr:{d:"M17.5 17.5 16 16.3V14"},child:[]},{tag:"circle",attr:{cx:"16",cy:"16",r:"6"},child:[]}]})(i)}function Wf(i){return En({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.25-1.5c.37-.81.7-1.51 1.17-2.26.96-1.53 2.21-2.85 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.75a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"},child:[]}]})(i)}const e5=({cpvCode:i})=>{const t=vi(c=>c.cpv.cpvs[i]);return g.jsxs("span",{className:"relative group",children:[g.jsx("span",{className:"bg-slate-200 text-slate-700 p-1 rounded text-xs font-mono self-center cursor-pointer",children:i}),t&&g.jsx("span",{className:"absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max max-w-xs bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10 whitespace-pre-line",children:t})]})},a5=({score:i,max:t=5})=>{const c=Math.round(i*t*100)/100;return g.jsxs("div",{className:"flex items-end gap-1 mt-2",title:`Puntuación: ${c}/${t}`,children:[Array.from({length:t},(d,l)=>{const p=l+1;let b="bg-gray-300",y={width:"6px",height:`${6+p*6}px`};if(c>=p)b="bg-green-500";else if(c>p-1&&c<p){const v=(c-(p-1))*100;b="",y.background=`linear-gradient(to top, #22c55e ${v}%, #d1d5db ${v}%)`}return g.jsx("div",{role:"presentation",className:`transition-all duration-200 rounded-sm ${b}`,style:y},p)}),g.jsxs("span",{className:"ml-2 text-xs text-slate-600",children:[c,"/",t]})]})};function r5(i){return i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").substring(0,60)}const n5=({id:i,tenderName:t,endDate:c,budget:d,resume:l,location:p,CPVCodes:b,score:y=0})=>{const v=Math.random().toString(36).substring(2,8),h=`/tender/${r5(t)}-${v}-${encodeURIComponent(i)}`;return g.jsx(id,{to:h,className:"block h-full cursor-pointer",children:g.jsxs("article",{"data-testid":"tender-card",className:"h-full bg-white shadow-lg rounded-3xl p-6 mb-6 border border-gray-200 transition-transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between",children:[g.jsxs("header",{className:"flex flex-col gap-2 pb-4 border-b border-gray-100 mb-4",children:[g.jsx("h1",{"data-testid":"tender-name",className:"text-2xl font-bold text-slate-800",children:t}),g.jsxs("div",{className:"flex flex-wrap gap-4 text-sm text-slate-600",children:[g.jsx(wc,{text:`${c}`,icon:g.jsx($f,{}),dataTestId:"tender-end-date",backgroundColor:"bg-orange-100",textColor:"text-orange-700"}),g.jsx(wc,{text:`${d.toLocaleString()}€`,icon:g.jsx(Ff,{}),dataTestId:"tender-budget",backgroundColor:"bg-green-100",textColor:"text-green-700"}),g.jsx(wc,{text:`${p}`,icon:g.jsx(Wf,{}),dataTestId:"tender-location",backgroundColor:"bg-blue-100",textColor:"text-blue-700"})]})]}),g.jsx("p",{"data-testid":"tender-resume",className:"pb-4 text-slate-700",children:l}),g.jsxs("footer",{"data-testid":"tender-cpv-codes",className:"pt-2 border-t border-gray-100 flex flex-row justify-between items-end",children:[g.jsxs("div",{className:"flex flex-wrap gap-2 flex-5",children:[g.jsx("p",{children:"CPVs:"}),[...new Set(b)].map(_=>g.jsx(e5,{cpvCode:_},_))]}),g.jsx("div",{"data-testid":"tender-score",className:"flex items-end gap-1 mt-2 flex-1",children:g.jsx(a5,{score:y,max:5})})]})]})})},i5=({cardData:i})=>{const[t,c]=C.useState([]);return C.useEffect(()=>{c(i)},[i]),g.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4","data-testid":"cards-grid",children:t.map(({id:d,tenderName:l,budget:p,location:b,resume:y,CPVCodes:v,endDate:m,score:h},_)=>g.jsx(n5,{id:d,tenderName:l,endDate:m,budget:p,resume:y,location:b,CPVCodes:v,score:h},_))})},s5=({message:i})=>g.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm",children:[g.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-6"}),i&&g.jsx("p",{className:"text-lg text-slate-800 font-semibold text-center max-w-md",children:i})]}),o5=({onSearch:i,loading:t})=>{const c=vi(h=>h.company),[d,l]=C.useState(c.budget),[p,b]=C.useState(c.location),[y,v]=C.useState(c.description),m=async h=>{h.preventDefault(),await i({invoicing:d,place:p,activity:y})};return g.jsxs(g.Fragment,{children:[t&&g.jsx(s5,{message:"Estamos ejecutando la búsqueda de licitaciones con sus especificaciones. Esto puede llevar algunos minutos."}),g.jsxs("form",{onSubmit:m,className:"mb-8 text-white flex flex-col gap-4 flex-wrap bg-slate-800 backdrop-blur shadow-lg rounded-2xl px-8 py-10 border border-slate-200",children:[g.jsxs("div",{className:"flex flex-col lg:flex-row gap-4",children:[g.jsxs("div",{children:[g.jsx("label",{htmlFor:"input-budget",className:"block text-sm font-medium  mb-1",children:"Facturación anual"}),g.jsx("input",{id:"input-budget","data-testid":"input-budget",type:"number",value:d,onChange:h=>l(Number(h.target.value)),className:"border border-slate-300 rounded-lg px-4 py-2 w-full"})]}),g.jsxs("div",{children:[g.jsx("label",{htmlFor:"input-location",className:"block text-sm font-medium mb-1",children:"Localización"}),g.jsx("input",{id:"input-location","data-testid":"input-location",type:"text",value:p,onChange:h=>b(h.target.value),className:"border border-slate-300 rounded-lg px-4 py-2 w-full"})]}),g.jsxs("div",{className:"min-w-[250px] flex-1",children:[g.jsx("label",{className:"block text-sm font-medium mb-1",children:"Descripción de la actividad de la empresa"}),g.jsx("textarea",{"data-testid":"textarea-description",value:y,onChange:h=>v(h.target.value),placeholder:"Escriba la descripción de su empresa aquí, esta será utilizada para buscar las licitaciones mas adecuadas para usted",className:"border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400 transition w-full min-h-[80px]"})]})]}),g.jsx("div",{className:"flex lg:justify-end",children:g.jsx("button",{type:"submit",disabled:t,className:"bg-blue-600 flex-1 lg:flex-none text-white px-6 py-2 max-h-12 rounded-lg font-bold hover:bg-blue-700 transition disabled:opacity-60",children:t?"Buscando...":"Buscar licitaciones"})})]})]})};function t5(i,t){const c=[];if(t<=5){for(let d=1;d<=t;d++)c.push(d);return c}return c.push(1),i>3&&c.push("..."),i>2&&c.push(i-1),i!==1&&i!==t&&c.push(i),i<t-1&&c.push(i+1),i<t-2&&c.push("..."),c.push(t),c}const c5=({currentPage:i,totalPages:t,onPageChange:c})=>{if(t<=1)return null;const d=t5(i,t);return g.jsx("nav",{className:"flex justify-center my-6","aria-label":"Paginación",children:g.jsxs("ul",{className:"inline-flex items-center gap-1",children:[g.jsx("li",{children:g.jsx("button",{className:"px-3 py-1 rounded bg-slate-200 text-slate-700 hover:bg-slate-300",onClick:()=>c(i-1),disabled:i===1,"aria-label":"Anterior",children:"<"})}),d.map((l,p)=>typeof l=="number"?g.jsx("li",{children:g.jsx("button",{className:`px-3 py-1 rounded ${l===i?"bg-blue-600 text-white":"bg-slate-200 text-slate-700 hover:bg-slate-300"}`,onClick:()=>c(l),"aria-current":l===i?"page":void 0,"data-testid":`pagination-page-${l}`,children:l})},l):g.jsx("li",{children:g.jsx("span",{className:"px-3 py-1 text-slate-400 select-none",children:"…"})},`ellipsis-${p}`)),g.jsx("li",{children:g.jsx("button",{className:"px-3 py-1 rounded bg-slate-200 text-slate-700 hover:bg-slate-300",onClick:()=>c(i+1),disabled:i===t,"aria-label":"Siguiente",children:">"})})]})})},d5={VITE_GET_TENDERS_URL:"https://q5e44m6dby.us-east-1.awsapprunner.com"},e3=d5,l5=({invoicing:i,place:t,activity:c,page:d,page_size:l=10})=>fetch(e3.VITE_GET_TENDERS_URL+"/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({invoicing:i,place:t,activity:c,page:d,page_size:l})}).then(p=>{if(!p.ok)throw new Error(`Server error: ${p.status}`);return p.json()}).catch(p=>Promise.reject(p)),u5=({invoicing:i,place:t,activity:c,page:d=1,page_size:l=10})=>l5({invoicing:i,place:t,activity:c,page:d,page_size:l}).then(p=>({tenders:f5(p),page:p.page,pageSize:p.page_size,totalResults:p.total_results})),p5=({ID:i})=>fetch(e3.VITE_GET_TENDERS_URL+"/get-tender",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ID:i})}).then(t=>{if(!t.ok)throw new Error(`Server error: ${t.status}`);return t.json()}).catch(t=>Promise.reject(t)),m5=({ID:i})=>p5({ID:i}).then(t=>v5(t)),f5=i=>i.results.map(t=>({id:t.ID,tenderName:t.Contratacion,endDate:t.Plazo_limite,budget:t.Importe_estimado,resume:t.Titulo,location:t.Lugar_Ejecucion,CPVCodes:t.Codigo_CPV,score:t.score})),v5=i=>({id:i.ID,publicationDate:i.Fecha_publicacion,tenderName:i.Contratacion,endDate:i.Plazo_limite,budget:i.Importe_estimado,resume:i.Titulo,location:i.Lugar_Ejecucion,CPVCodes:i.Codigo_CPV,url:i.URL,budgetNoIva:i.Presupuesto_sin_IVA,budgetTotal:i.Importe_total,record:i.Expediente,startDate:i.Fecha_inicio,contractType:i.Tipo_contrato,procedureType:i.Tipo_procedimiento,lotsNumber:i.Número_lotes,warrantyType:i.Tipo_garantia,administrativeDocumexnt:i.Pliego_admvo,specificationsSheet:i.Pliego_prescripciones});function fa(i){return`Minified Redux error #${i}; visit https://redux.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `}var b5=typeof Symbol=="function"&&Symbol.observable||"@@observable",j2=b5,Dc=()=>Math.random().toString(36).substring(7).split("").join("."),g5={INIT:`@@redux/INIT${Dc()}`,REPLACE:`@@redux/REPLACE${Dc()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Dc()}`},Ko=g5;function td(i){if(typeof i!="object"||i===null)return!1;let t=i;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(i)===t||Object.getPrototypeOf(i)===null}function a3(i,t,c){if(typeof i!="function")throw new Error(fa(2));if(typeof t=="function"&&typeof c=="function"||typeof c=="function"&&typeof arguments[3]=="function")throw new Error(fa(0));if(typeof t=="function"&&typeof c>"u"&&(c=t,t=void 0),typeof c<"u"){if(typeof c!="function")throw new Error(fa(1));return c(a3)(i,t)}let d=i,l=t,p=new Map,b=p,y=0,v=!1;function m(){b===p&&(b=new Map,p.forEach((G,O)=>{b.set(O,G)}))}function h(){if(v)throw new Error(fa(3));return l}function _(G){if(typeof G!="function")throw new Error(fa(4));if(v)throw new Error(fa(5));let O=!0;m();const B=y++;return b.set(B,G),function(){if(O){if(v)throw new Error(fa(6));O=!1,m(),b.delete(B),p=null}}}function A(G){if(!td(G))throw new Error(fa(7));if(typeof G.type>"u")throw new Error(fa(8));if(typeof G.type!="string")throw new Error(fa(17));if(v)throw new Error(fa(9));try{v=!0,l=d(l,G)}finally{v=!1}return(p=b).forEach(B=>{B()}),G}function k(G){if(typeof G!="function")throw new Error(fa(10));d=G,A({type:Ko.REPLACE})}function w(){const G=_;return{subscribe(O){if(typeof O!="object"||O===null)throw new Error(fa(11));function B(){const J=O;J.next&&J.next(h())}return B(),{unsubscribe:G(B)}},[j2](){return this}}}return A({type:Ko.INIT}),{dispatch:A,subscribe:_,getState:h,replaceReducer:k,[j2]:w}}function y5(i){Object.keys(i).forEach(t=>{const c=i[t];if(typeof c(void 0,{type:Ko.INIT})>"u")throw new Error(fa(12));if(typeof c(void 0,{type:Ko.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(fa(13))})}function r3(i){const t=Object.keys(i),c={};for(let p=0;p<t.length;p++){const b=t[p];typeof i[b]=="function"&&(c[b]=i[b])}const d=Object.keys(c);let l;try{y5(c)}catch(p){l=p}return function(b={},y){if(l)throw l;let v=!1;const m={};for(let h=0;h<d.length;h++){const _=d[h],A=c[_],k=b[_],w=A(k,y);if(typeof w>"u")throw y&&y.type,new Error(fa(14));m[_]=w,v=v||w!==k}return v=v||d.length!==Object.keys(b).length,v?m:b}}function Jo(...i){return i.length===0?t=>t:i.length===1?i[0]:i.reduce((t,c)=>(...d)=>t(c(...d)))}function h5(...i){return t=>(c,d)=>{const l=t(c,d);let p=()=>{throw new Error(fa(15))};const b={getState:l.getState,dispatch:(v,...m)=>p(v,...m)},y=i.map(v=>v(b));return p=Jo(...y)(l.dispatch),{...l,dispatch:p}}}function S5(i){return td(i)&&"type"in i&&typeof i.type=="string"}var n3=Symbol.for("immer-nothing"),q2=Symbol.for("immer-draftable"),Ra=Symbol.for("immer-state");function Fa(i,...t){throw new Error(`[Immer] minified error nr: ${i}. Full error at: https://bit.ly/3cXEKWf`)}var ui=Object.getPrototypeOf;function jn(i){return!!i&&!!i[Ra]}function Er(i){var t;return i?i3(i)||Array.isArray(i)||!!i[q2]||!!((t=i.constructor)!=null&&t[q2])||it(i)||st(i):!1}var T5=Object.prototype.constructor.toString();function i3(i){if(!i||typeof i!="object")return!1;const t=ui(i);if(t===null)return!0;const c=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return c===Object?!0:typeof c=="function"&&Function.toString.call(c)===T5}function Io(i,t){nt(i)===0?Reflect.ownKeys(i).forEach(c=>{t(c,i[c],i)}):i.forEach((c,d)=>t(d,c,i))}function nt(i){const t=i[Ra];return t?t.type_:Array.isArray(i)?1:it(i)?2:st(i)?3:0}function Uc(i,t){return nt(i)===2?i.has(t):Object.prototype.hasOwnProperty.call(i,t)}function s3(i,t,c){const d=nt(i);d===2?i.set(t,c):d===3?i.add(c):i[t]=c}function j5(i,t){return i===t?i!==0||1/i===1/t:i!==i&&t!==t}function it(i){return i instanceof Map}function st(i){return i instanceof Set}function Sn(i){return i.copy_||i.base_}function Gc(i,t){if(it(i))return new Map(i);if(st(i))return new Set(i);if(Array.isArray(i))return Array.prototype.slice.call(i);const c=i3(i);if(t===!0||t==="class_only"&&!c){const d=Object.getOwnPropertyDescriptors(i);delete d[Ra];let l=Reflect.ownKeys(d);for(let p=0;p<l.length;p++){const b=l[p],y=d[b];y.writable===!1&&(y.writable=!0,y.configurable=!0),(y.get||y.set)&&(d[b]={configurable:!0,writable:!0,enumerable:y.enumerable,value:i[b]})}return Object.create(ui(i),d)}else{const d=ui(i);if(d!==null&&c)return{...i};const l=Object.create(d);return Object.assign(l,i)}}function cd(i,t=!1){return ot(i)||jn(i)||!Er(i)||(nt(i)>1&&(i.set=i.add=i.clear=i.delete=q5),Object.freeze(i),t&&Object.entries(i).forEach(([c,d])=>cd(d,!0))),i}function q5(){Fa(2)}function ot(i){return Object.isFrozen(i)}var x5={};function qn(i){const t=x5[i];return t||Fa(0,i),t}var ys;function o3(){return ys}function E5(i,t){return{drafts_:[],parent_:i,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function x2(i,t){t&&(qn("Patches"),i.patches_=[],i.inversePatches_=[],i.patchListener_=t)}function Vc(i){kc(i),i.drafts_.forEach(C5),i.drafts_=null}function kc(i){i===ys&&(ys=i.parent_)}function E2(i){return ys=E5(ys,i)}function C5(i){const t=i[Ra];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function C2(i,t){t.unfinalizedDrafts_=t.drafts_.length;const c=t.drafts_[0];return i!==void 0&&i!==c?(c[Ra].modified_&&(Vc(t),Fa(4)),Er(i)&&(i=Fo(t,i),t.parent_||$o(t,i)),t.patches_&&qn("Patches").generateReplacementPatches_(c[Ra].base_,i,t.patches_,t.inversePatches_)):i=Fo(t,c,[]),Vc(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),i!==n3?i:void 0}function Fo(i,t,c){if(ot(t))return t;const d=t[Ra];if(!d)return Io(t,(l,p)=>A2(i,d,t,l,p,c)),t;if(d.scope_!==i)return t;if(!d.modified_)return $o(i,d.base_,!0),d.base_;if(!d.finalized_){d.finalized_=!0,d.scope_.unfinalizedDrafts_--;const l=d.copy_;let p=l,b=!1;d.type_===3&&(p=new Set(l),l.clear(),b=!0),Io(p,(y,v)=>A2(i,d,l,y,v,c,b)),$o(i,l,!1),c&&i.patches_&&qn("Patches").generatePatches_(d,c,i.patches_,i.inversePatches_)}return d.copy_}function A2(i,t,c,d,l,p,b){if(jn(l)){const y=p&&t&&t.type_!==3&&!Uc(t.assigned_,d)?p.concat(d):void 0,v=Fo(i,l,y);if(s3(c,d,v),jn(v))i.canAutoFreeze_=!1;else return}else b&&c.add(l);if(Er(l)&&!ot(l)){if(!i.immer_.autoFreeze_&&i.unfinalizedDrafts_<1)return;Fo(i,l),(!t||!t.scope_.parent_)&&typeof d!="symbol"&&Object.prototype.propertyIsEnumerable.call(c,d)&&$o(i,l)}}function $o(i,t,c=!1){!i.parent_&&i.immer_.autoFreeze_&&i.canAutoFreeze_&&cd(t,c)}function A5(i,t){const c=Array.isArray(i),d={type_:c?1:0,scope_:t?t.scope_:o3(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:i,draft_:null,copy_:null,revoke_:null,isManual_:!1};let l=d,p=dd;c&&(l=[d],p=hs);const{revoke:b,proxy:y}=Proxy.revocable(l,p);return d.draft_=y,d.revoke_=b,y}var dd={get(i,t){if(t===Ra)return i;const c=Sn(i);if(!Uc(c,t))return z5(i,c,t);const d=c[t];return i.finalized_||!Er(d)?d:d===Oc(i.base_,t)?(Nc(i),i.copy_[t]=Xc(d,i)):d},has(i,t){return t in Sn(i)},ownKeys(i){return Reflect.ownKeys(Sn(i))},set(i,t,c){const d=t3(Sn(i),t);if(d!=null&&d.set)return d.set.call(i.draft_,c),!0;if(!i.modified_){const l=Oc(Sn(i),t),p=l==null?void 0:l[Ra];if(p&&p.base_===c)return i.copy_[t]=c,i.assigned_[t]=!1,!0;if(j5(c,l)&&(c!==void 0||Uc(i.base_,t)))return!0;Nc(i),Yc(i)}return i.copy_[t]===c&&(c!==void 0||t in i.copy_)||Number.isNaN(c)&&Number.isNaN(i.copy_[t])||(i.copy_[t]=c,i.assigned_[t]=!0),!0},deleteProperty(i,t){return Oc(i.base_,t)!==void 0||t in i.base_?(i.assigned_[t]=!1,Nc(i),Yc(i)):delete i.assigned_[t],i.copy_&&delete i.copy_[t],!0},getOwnPropertyDescriptor(i,t){const c=Sn(i),d=Reflect.getOwnPropertyDescriptor(c,t);return d&&{writable:!0,configurable:i.type_!==1||t!=="length",enumerable:d.enumerable,value:c[t]}},defineProperty(){Fa(11)},getPrototypeOf(i){return ui(i.base_)},setPrototypeOf(){Fa(12)}},hs={};Io(dd,(i,t)=>{hs[i]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});hs.deleteProperty=function(i,t){return hs.set.call(this,i,t,void 0)};hs.set=function(i,t,c){return dd.set.call(this,i[0],t,c,i[0])};function Oc(i,t){const c=i[Ra];return(c?Sn(c):i)[t]}function z5(i,t,c){var l;const d=t3(t,c);return d?"value"in d?d.value:(l=d.get)==null?void 0:l.call(i.draft_):void 0}function t3(i,t){if(!(t in i))return;let c=ui(i);for(;c;){const d=Object.getOwnPropertyDescriptor(c,t);if(d)return d;c=ui(c)}}function Yc(i){i.modified_||(i.modified_=!0,i.parent_&&Yc(i.parent_))}function Nc(i){i.copy_||(i.copy_=Gc(i.base_,i.scope_.immer_.useStrictShallowCopy_))}var M5=class{constructor(i){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,c,d)=>{if(typeof t=="function"&&typeof c!="function"){const p=c;c=t;const b=this;return function(v=p,...m){return b.produce(v,h=>c.call(this,h,...m))}}typeof c!="function"&&Fa(6),d!==void 0&&typeof d!="function"&&Fa(7);let l;if(Er(t)){const p=E2(this),b=Xc(t,void 0);let y=!0;try{l=c(b),y=!1}finally{y?Vc(p):kc(p)}return x2(p,d),C2(l,p)}else if(!t||typeof t!="object"){if(l=c(t),l===void 0&&(l=t),l===n3&&(l=void 0),this.autoFreeze_&&cd(l,!0),d){const p=[],b=[];qn("Patches").generateReplacementPatches_(t,l,p,b),d(p,b)}return l}else Fa(1,t)},this.produceWithPatches=(t,c)=>{if(typeof t=="function")return(b,...y)=>this.produceWithPatches(b,v=>t(v,...y));let d,l;return[this.produce(t,c,(b,y)=>{d=b,l=y}),d,l]},typeof(i==null?void 0:i.autoFreeze)=="boolean"&&this.setAutoFreeze(i.autoFreeze),typeof(i==null?void 0:i.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(i.useStrictShallowCopy)}createDraft(i){Er(i)||Fa(8),jn(i)&&(i=_5(i));const t=E2(this),c=Xc(i,void 0);return c[Ra].isManual_=!0,kc(t),c}finishDraft(i,t){const c=i&&i[Ra];(!c||!c.isManual_)&&Fa(9);const{scope_:d}=c;return x2(d,t),C2(void 0,d)}setAutoFreeze(i){this.autoFreeze_=i}setUseStrictShallowCopy(i){this.useStrictShallowCopy_=i}applyPatches(i,t){let c;for(c=t.length-1;c>=0;c--){const l=t[c];if(l.path.length===0&&l.op==="replace"){i=l.value;break}}c>-1&&(t=t.slice(c+1));const d=qn("Patches").applyPatches_;return jn(i)?d(i,t):this.produce(i,l=>d(l,t))}};function Xc(i,t){const c=it(i)?qn("MapSet").proxyMap_(i,t):st(i)?qn("MapSet").proxySet_(i,t):A5(i,t);return(t?t.scope_:o3()).drafts_.push(c),c}function _5(i){return jn(i)||Fa(10,i),c3(i)}function c3(i){if(!Er(i)||ot(i))return i;const t=i[Ra];let c;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,c=Gc(i,t.scope_.immer_.useStrictShallowCopy_)}else c=Gc(i,!0);return Io(c,(d,l)=>{s3(c,d,c3(l))}),t&&(t.finalized_=!1),c}var wa=new M5,d3=wa.produce;wa.produceWithPatches.bind(wa);wa.setAutoFreeze.bind(wa);wa.setUseStrictShallowCopy.bind(wa);wa.applyPatches.bind(wa);wa.createDraft.bind(wa);wa.finishDraft.bind(wa);function l3(i){return({dispatch:c,getState:d})=>l=>p=>typeof p=="function"?p(c,d,i):l(p)}var P5=l3(),R5=l3,w5=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Jo:Jo.apply(null,arguments)};function z2(i,t){function c(...d){if(t){let l=t(...d);if(!l)throw new Error(qr(0));return{type:i,payload:l.payload,..."meta"in l&&{meta:l.meta},..."error"in l&&{error:l.error}}}return{type:i,payload:d[0]}}return c.toString=()=>`${i}`,c.type=i,c.match=d=>S5(d)&&d.type===i,c}var u3=class bs extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,bs.prototype)}static get[Symbol.species](){return bs}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new bs(...t[0].concat(this)):new bs(...t.concat(this))}};function M2(i){return Er(i)?d3(i,()=>{}):i}function Ho(i,t,c){return i.has(t)?i.get(t):i.set(t,c(t)).get(t)}function D5(i){return typeof i=="boolean"}var O5=()=>function(t){const{thunk:c=!0,immutableCheck:d=!0,serializableCheck:l=!0,actionCreatorCheck:p=!0}=t??{};let b=new u3;return c&&(D5(c)?b.push(P5):b.push(R5(c.extraArgument))),b},N5="RTK_autoBatch",_2=i=>t=>{setTimeout(t,i)},B5=(i={type:"raf"})=>t=>(...c)=>{const d=t(...c);let l=!0,p=!1,b=!1;const y=new Set,v=i.type==="tick"?queueMicrotask:i.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:_2(10):i.type==="callback"?i.queueNotification:_2(i.timeout),m=()=>{b=!1,p&&(p=!1,y.forEach(h=>h()))};return Object.assign({},d,{subscribe(h){const _=()=>l&&h(),A=d.subscribe(_);return y.add(h),()=>{A(),y.delete(h)}},dispatch(h){var _;try{return l=!((_=h==null?void 0:h.meta)!=null&&_[N5]),p=!l,p&&(b||(b=!0,v(m))),d.dispatch(h)}finally{l=!0}}})},L5=i=>function(c){const{autoBatch:d=!0}=c??{};let l=new u3(i);return d&&l.push(B5(typeof d=="object"?d:void 0)),l};function H5(i){const t=O5(),{reducer:c=void 0,middleware:d,devTools:l=!0,preloadedState:p=void 0,enhancers:b=void 0}=i||{};let y;if(typeof c=="function")y=c;else if(td(c))y=r3(c);else throw new Error(qr(1));let v;typeof d=="function"?v=d(t):v=t();let m=Jo;l&&(m=w5({trace:!1,...typeof l=="object"&&l}));const h=h5(...v),_=L5(h);let A=typeof b=="function"?b(_):_();const k=m(...A);return a3(y,p,k)}function p3(i){const t={},c=[];let d;const l={addCase(p,b){const y=typeof p=="string"?p:p.type;if(!y)throw new Error(qr(28));if(y in t)throw new Error(qr(29));return t[y]=b,l},addMatcher(p,b){return c.push({matcher:p,reducer:b}),l},addDefaultCase(p){return d=p,l}};return i(l),[t,c,d]}function U5(i){return typeof i=="function"}function G5(i,t){let[c,d,l]=p3(t),p;if(U5(i))p=()=>M2(i());else{const y=M2(i);p=()=>y}function b(y=p(),v){let m=[c[v.type],...d.filter(({matcher:h})=>h(v)).map(({reducer:h})=>h)];return m.filter(h=>!!h).length===0&&(m=[l]),m.reduce((h,_)=>{if(_)if(jn(h)){const k=_(h,v);return k===void 0?h:k}else{if(Er(h))return d3(h,A=>_(A,v));{const A=_(h,v);if(A===void 0){if(h===null)return h;throw Error("A case reducer on a non-draftable value must not return undefined")}return A}}return h},y)}return b.getInitialState=p,b}var V5=Symbol.for("rtk-slice-createasyncthunk");function k5(i,t){return`${i}/${t}`}function Y5({creators:i}={}){var c;const t=(c=i==null?void 0:i.asyncThunk)==null?void 0:c[V5];return function(l){const{name:p,reducerPath:b=p}=l;if(!p)throw new Error(qr(11));const y=(typeof l.reducers=="function"?l.reducers(Q5()):l.reducers)||{},v=Object.keys(y),m={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},h={addCase(J,K){const ae=typeof J=="string"?J:J.type;if(!ae)throw new Error(qr(12));if(ae in m.sliceCaseReducersByType)throw new Error(qr(13));return m.sliceCaseReducersByType[ae]=K,h},addMatcher(J,K){return m.sliceMatchers.push({matcher:J,reducer:K}),h},exposeAction(J,K){return m.actionCreators[J]=K,h},exposeCaseReducer(J,K){return m.sliceCaseReducersByName[J]=K,h}};v.forEach(J=>{const K=y[J],ae={reducerName:J,type:k5(p,J),createNotation:typeof l.reducers=="function"};K5(K)?I5(ae,K,h,t):Z5(ae,K,h)});function _(){const[J={},K=[],ae=void 0]=typeof l.extraReducers=="function"?p3(l.extraReducers):[l.extraReducers],F={...J,...m.sliceCaseReducersByType};return G5(l.initialState,j=>{for(let T in F)j.addCase(T,F[T]);for(let T of m.sliceMatchers)j.addMatcher(T.matcher,T.reducer);for(let T of K)j.addMatcher(T.matcher,T.reducer);ae&&j.addDefaultCase(ae)})}const A=J=>J,k=new Map,w=new WeakMap;let Y;function G(J,K){return Y||(Y=_()),Y(J,K)}function O(){return Y||(Y=_()),Y.getInitialState()}function B(J,K=!1){function ae(j){let T=j[J];return typeof T>"u"&&K&&(T=Ho(w,ae,O)),T}function F(j=A){const T=Ho(k,K,()=>new WeakMap);return Ho(T,j,()=>{const L={};for(const[W,$]of Object.entries(l.selectors??{}))L[W]=X5($,j,()=>Ho(w,j,O),K);return L})}return{reducerPath:J,getSelectors:F,get selectors(){return F(ae)},selectSlice:ae}}const Z={name:p,reducer:G,actions:m.actionCreators,caseReducers:m.sliceCaseReducersByName,getInitialState:O,...B(b),injectInto(J,{reducerPath:K,...ae}={}){const F=K??b;return J.inject({reducerPath:F,reducer:G},ae),{...Z,...B(F,!0)}}};return Z}}function X5(i,t,c,d){function l(p,...b){let y=t(p);return typeof y>"u"&&d&&(y=c()),i(y,...b)}return l.unwrapped=i,l}var ld=Y5();function Q5(){function i(t,c){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...c}}return i.withTypes=()=>i,{reducer(t){return Object.assign({[t.name](...c){return t(...c)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,c){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:c}},asyncThunk:i}}function Z5({type:i,reducerName:t,createNotation:c},d,l){let p,b;if("reducer"in d){if(c&&!J5(d))throw new Error(qr(17));p=d.reducer,b=d.prepare}else p=d;l.addCase(i,p).exposeCaseReducer(t,p).exposeAction(t,b?z2(i,b):z2(i))}function K5(i){return i._reducerDefinitionType==="asyncThunk"}function J5(i){return i._reducerDefinitionType==="reducerWithPrepare"}function I5({type:i,reducerName:t},c,d,l){if(!l)throw new Error(qr(18));const{payloadCreator:p,fulfilled:b,pending:y,rejected:v,settled:m,options:h}=c,_=l(i,p,h);d.exposeAction(t,_),b&&d.addCase(_.fulfilled,b),y&&d.addCase(_.pending,y),v&&d.addCase(_.rejected,v),m&&d.addMatcher(_.settled,m),d.exposeCaseReducer(t,{fulfilled:b||Uo,pending:y||Uo,rejected:v||Uo,settled:m||Uo})}function Uo(){}function qr(i){return`Minified Redux Toolkit error #${i}; visit https://redux-toolkit.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `}const F5={tenders:[],totalResults:0,page:1,pageSize:10,filters:{invoicing:0,place:"",activity:""}},m3=ld({name:"tender",initialState:F5,reducers:{setTendersData:(i,t)=>{i.tenders=t.payload.tenders,i.totalResults=t.payload.totalResults,i.page=t.payload.page,i.pageSize=t.payload.pageSize,i.filters=t.payload.filters}}}),{setTendersData:$5}=m3.actions,f3=m3.reducer;function v3(i){var t,c,d="";if(typeof i=="string"||typeof i=="number")d+=i;else if(typeof i=="object")if(Array.isArray(i)){var l=i.length;for(t=0;t<l;t++)i[t]&&(c=v3(i[t]))&&(d&&(d+=" "),d+=c)}else for(c in i)i[c]&&(d&&(d+=" "),d+=c);return d}function Tn(){for(var i,t,c=0,d="",l=arguments.length;c<l;c++)(i=arguments[c])&&(t=v3(i))&&(d&&(d+=" "),d+=t);return d}function W5(i){if(typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",t.firstChild?t.insertBefore(c,t.firstChild):t.appendChild(c),c.styleSheet?c.styleSheet.cssText=i:c.appendChild(document.createTextNode(i))}W5(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var qs=i=>typeof i=="number"&&!isNaN(i),xn=i=>typeof i=="string",Cr=i=>typeof i=="function",ev=i=>xn(i)||qs(i),Qc=i=>xn(i)||Cr(i)?i:null,av=(i,t)=>i===!1||qs(i)&&i>0?i:t,Zc=i=>C.isValidElement(i)||xn(i)||Cr(i)||qs(i);function rv(i,t,c=300){let{scrollHeight:d,style:l}=i;requestAnimationFrame(()=>{l.minHeight="initial",l.height=d+"px",l.transition=`all ${c}ms`,requestAnimationFrame(()=>{l.height="0",l.padding="0",l.margin="0",setTimeout(t,c)})})}function nv({enter:i,exit:t,appendPosition:c=!1,collapse:d=!0,collapseDuration:l=300}){return function({children:p,position:b,preventExitTransition:y,done:v,nodeRef:m,isIn:h,playToast:_}){let A=c?`${i}--${b}`:i,k=c?`${t}--${b}`:t,w=C.useRef(0);return C.useLayoutEffect(()=>{let Y=m.current,G=A.split(" "),O=B=>{B.target===m.current&&(_(),Y.removeEventListener("animationend",O),Y.removeEventListener("animationcancel",O),w.current===0&&B.type!=="animationcancel"&&Y.classList.remove(...G))};Y.classList.add(...G),Y.addEventListener("animationend",O),Y.addEventListener("animationcancel",O)},[]),C.useEffect(()=>{let Y=m.current,G=()=>{Y.removeEventListener("animationend",G),d?rv(Y,v,l):v()};h||(y?G():(w.current=1,Y.className+=` ${k}`,Y.addEventListener("animationend",G)))},[h]),Ce.createElement(Ce.Fragment,null,p)}}function P2(i,t){return{content:b3(i.content,i.props),containerId:i.props.containerId,id:i.props.toastId,theme:i.props.theme,type:i.props.type,data:i.props.data||{},isLoading:i.props.isLoading,icon:i.props.icon,reason:i.removalReason,status:t}}function b3(i,t,c=!1){return C.isValidElement(i)&&!xn(i.type)?C.cloneElement(i,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:c}):Cr(i)?i({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:c}):i}function iv({closeToast:i,theme:t,ariaLabel:c="close"}){return Ce.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:d=>{d.stopPropagation(),i(!0)},"aria-label":c},Ce.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Ce.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function sv({delay:i,isRunning:t,closeToast:c,type:d="default",hide:l,className:p,controlledProgress:b,progress:y,rtl:v,isIn:m,theme:h}){let _=l||b&&y===0,A={animationDuration:`${i}ms`,animationPlayState:t?"running":"paused"};b&&(A.transform=`scaleX(${y})`);let k=Tn("Toastify__progress-bar",b?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${h}`,`Toastify__progress-bar--${d}`,{"Toastify__progress-bar--rtl":v}),w=Cr(p)?p({rtl:v,type:d,defaultClassName:k}):Tn(k,p),Y={[b&&y>=1?"onTransitionEnd":"onAnimationEnd"]:b&&y<1?null:()=>{m&&c()}};return Ce.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":_},Ce.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${h} Toastify__progress-bar--${d}`}),Ce.createElement("div",{role:"progressbar","aria-hidden":_?"true":"false","aria-label":"notification timer",className:w,style:A,...Y}))}var ov=1,g3=()=>`${ov++}`;function tv(i,t,c){let d=1,l=0,p=[],b=[],y=t,v=new Map,m=new Set,h=B=>(m.add(B),()=>m.delete(B)),_=()=>{b=Array.from(v.values()),m.forEach(B=>B())},A=({containerId:B,toastId:Z,updateId:J})=>{let K=B?B!==i:i!==1,ae=v.has(Z)&&J==null;return K||ae},k=(B,Z)=>{v.forEach(J=>{var K;(Z==null||Z===J.props.toastId)&&((K=J.toggle)==null||K.call(J,B))})},w=B=>{var Z,J;(J=(Z=B.props)==null?void 0:Z.onClose)==null||J.call(Z,B.removalReason),B.isActive=!1},Y=B=>{if(B==null)v.forEach(w);else{let Z=v.get(B);Z&&w(Z)}_()},G=()=>{l-=p.length,p=[]},O=B=>{var Z,J;let{toastId:K,updateId:ae}=B.props,F=ae==null;B.staleId&&v.delete(B.staleId),B.isActive=!0,v.set(K,B),_(),c(P2(B,F?"added":"updated")),F&&((J=(Z=B.props).onOpen)==null||J.call(Z))};return{id:i,props:y,observe:h,toggle:k,removeToast:Y,toasts:v,clearQueue:G,buildToast:(B,Z)=>{if(A(Z))return;let{toastId:J,updateId:K,data:ae,staleId:F,delay:j}=Z,T=K==null;T&&l++;let L={...y,style:y.toastStyle,key:d++,...Object.fromEntries(Object.entries(Z).filter(([$,le])=>le!=null)),toastId:J,updateId:K,data:ae,isIn:!1,className:Qc(Z.className||y.toastClassName),progressClassName:Qc(Z.progressClassName||y.progressClassName),autoClose:Z.isLoading?!1:av(Z.autoClose,y.autoClose),closeToast($){v.get(J).removalReason=$,Y(J)},deleteToast(){let $=v.get(J);if($!=null){if(c(P2($,"removed")),v.delete(J),l--,l<0&&(l=0),p.length>0){O(p.shift());return}_()}}};L.closeButton=y.closeButton,Z.closeButton===!1||Zc(Z.closeButton)?L.closeButton=Z.closeButton:Z.closeButton===!0&&(L.closeButton=Zc(y.closeButton)?y.closeButton:!0);let W={content:B,props:L,staleId:F};y.limit&&y.limit>0&&l>y.limit&&T?p.push(W):qs(j)?setTimeout(()=>{O(W)},j):O(W)},setProps(B){y=B},setToggle:(B,Z)=>{let J=v.get(B);J&&(J.toggle=Z)},isToastActive:B=>{var Z;return(Z=v.get(B))==null?void 0:Z.isActive},getSnapshot:()=>b}}var ha=new Map,Ss=[],Kc=new Set,cv=i=>Kc.forEach(t=>t(i)),y3=()=>ha.size>0;function dv(){Ss.forEach(i=>S3(i.content,i.options)),Ss=[]}var lv=(i,{containerId:t})=>{var c;return(c=ha.get(t||1))==null?void 0:c.toasts.get(i)};function h3(i,t){var c;if(t)return!!((c=ha.get(t))!=null&&c.isToastActive(i));let d=!1;return ha.forEach(l=>{l.isToastActive(i)&&(d=!0)}),d}function uv(i){if(!y3()){Ss=Ss.filter(t=>i!=null&&t.options.toastId!==i);return}if(i==null||ev(i))ha.forEach(t=>{t.removeToast(i)});else if(i&&("containerId"in i||"id"in i)){let t=ha.get(i.containerId);t?t.removeToast(i.id):ha.forEach(c=>{c.removeToast(i.id)})}}var pv=(i={})=>{ha.forEach(t=>{t.props.limit&&(!i.containerId||t.id===i.containerId)&&t.clearQueue()})};function S3(i,t){Zc(i)&&(y3()||Ss.push({content:i,options:t}),ha.forEach(c=>{c.buildToast(i,t)}))}function mv(i){var t;(t=ha.get(i.containerId||1))==null||t.setToggle(i.id,i.fn)}function T3(i,t){ha.forEach(c=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===c.id)&&c.toggle(i,t==null?void 0:t.id)})}function fv(i){let t=i.containerId||1;return{subscribe(c){let d=tv(t,i,cv);ha.set(t,d);let l=d.observe(c);return dv(),()=>{l(),ha.delete(t)}},setProps(c){var d;(d=ha.get(t))==null||d.setProps(c)},getSnapshot(){var c;return(c=ha.get(t))==null?void 0:c.getSnapshot()}}}function vv(i){return Kc.add(i),()=>{Kc.delete(i)}}function bv(i){return i&&(xn(i.toastId)||qs(i.toastId))?i.toastId:g3()}function xs(i,t){return S3(i,t),t.toastId}function tt(i,t){return{...t,type:t&&t.type||i,toastId:bv(t)}}function ct(i){return(t,c)=>xs(t,tt(i,c))}function je(i,t){return xs(i,tt("default",t))}je.loading=(i,t)=>xs(i,tt("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function gv(i,{pending:t,error:c,success:d},l){let p;t&&(p=xn(t)?je.loading(t,l):je.loading(t.render,{...l,...t}));let b={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},y=(m,h,_)=>{if(h==null){je.dismiss(p);return}let A={type:m,...b,...l,data:_},k=xn(h)?{render:h}:h;return p?je.update(p,{...A,...k}):je(k.render,{...A,...k}),_},v=Cr(i)?i():i;return v.then(m=>y("success",d,m)).catch(m=>y("error",c,m)),v}je.promise=gv;je.success=ct("success");je.info=ct("info");je.error=ct("error");je.warning=ct("warning");je.warn=je.warning;je.dark=(i,t)=>xs(i,tt("default",{theme:"dark",...t}));function yv(i){uv(i)}je.dismiss=yv;je.clearWaitingQueue=pv;je.isActive=h3;je.update=(i,t={})=>{let c=lv(i,t);if(c){let{props:d,content:l}=c,p={delay:100,...d,...t,toastId:t.toastId||i,updateId:g3()};p.toastId!==i&&(p.staleId=i);let b=p.render||l;delete p.render,xs(b,p)}};je.done=i=>{je.update(i,{progress:1})};je.onChange=vv;je.play=i=>T3(!0,i);je.pause=i=>T3(!1,i);function hv(i){var t;let{subscribe:c,getSnapshot:d,setProps:l}=C.useRef(fv(i)).current;l(i);let p=(t=C.useSyncExternalStore(c,d,d))==null?void 0:t.slice();function b(y){if(!p)return[];let v=new Map;return i.newestOnTop&&p.reverse(),p.forEach(m=>{let{position:h}=m.props;v.has(h)||v.set(h,[]),v.get(h).push(m)}),Array.from(v,m=>y(m[0],m[1]))}return{getToastToRender:b,isToastActive:h3,count:p==null?void 0:p.length}}function Sv(i){let[t,c]=C.useState(!1),[d,l]=C.useState(!1),p=C.useRef(null),b=C.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:y,pauseOnHover:v,closeToast:m,onClick:h,closeOnClick:_}=i;mv({id:i.toastId,containerId:i.containerId,fn:c}),C.useEffect(()=>{if(i.pauseOnFocusLoss)return A(),()=>{k()}},[i.pauseOnFocusLoss]);function A(){document.hasFocus()||O(),window.addEventListener("focus",G),window.addEventListener("blur",O)}function k(){window.removeEventListener("focus",G),window.removeEventListener("blur",O)}function w(F){if(i.draggable===!0||i.draggable===F.pointerType){B();let j=p.current;b.canCloseOnClick=!0,b.canDrag=!0,j.style.transition="none",i.draggableDirection==="x"?(b.start=F.clientX,b.removalDistance=j.offsetWidth*(i.draggablePercent/100)):(b.start=F.clientY,b.removalDistance=j.offsetHeight*(i.draggablePercent===80?i.draggablePercent*1.5:i.draggablePercent)/100)}}function Y(F){let{top:j,bottom:T,left:L,right:W}=p.current.getBoundingClientRect();F.nativeEvent.type!=="touchend"&&i.pauseOnHover&&F.clientX>=L&&F.clientX<=W&&F.clientY>=j&&F.clientY<=T?O():G()}function G(){c(!0)}function O(){c(!1)}function B(){b.didMove=!1,document.addEventListener("pointermove",J),document.addEventListener("pointerup",K)}function Z(){document.removeEventListener("pointermove",J),document.removeEventListener("pointerup",K)}function J(F){let j=p.current;if(b.canDrag&&j){b.didMove=!0,t&&O(),i.draggableDirection==="x"?b.delta=F.clientX-b.start:b.delta=F.clientY-b.start,b.start!==F.clientX&&(b.canCloseOnClick=!1);let T=i.draggableDirection==="x"?`${b.delta}px, var(--y)`:`0, calc(${b.delta}px + var(--y))`;j.style.transform=`translate3d(${T},0)`,j.style.opacity=`${1-Math.abs(b.delta/b.removalDistance)}`}}function K(){Z();let F=p.current;if(b.canDrag&&b.didMove&&F){if(b.canDrag=!1,Math.abs(b.delta)>b.removalDistance){l(!0),i.closeToast(!0),i.collapseAll();return}F.style.transition="transform 0.2s, opacity 0.2s",F.style.removeProperty("transform"),F.style.removeProperty("opacity")}}let ae={onPointerDown:w,onPointerUp:Y};return y&&v&&(ae.onMouseEnter=O,i.stacked||(ae.onMouseLeave=G)),_&&(ae.onClick=F=>{h&&h(F),b.canCloseOnClick&&m(!0)}),{playToast:G,pauseToast:O,isRunning:t,preventExitTransition:d,toastRef:p,eventHandlers:ae}}var Tv=typeof window<"u"?C.useLayoutEffect:C.useEffect,dt=({theme:i,type:t,isLoading:c,...d})=>Ce.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:i==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...d});function jv(i){return Ce.createElement(dt,{...i},Ce.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function qv(i){return Ce.createElement(dt,{...i},Ce.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function xv(i){return Ce.createElement(dt,{...i},Ce.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function Ev(i){return Ce.createElement(dt,{...i},Ce.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function Cv(){return Ce.createElement("div",{className:"Toastify__spinner"})}var Jc={info:qv,warning:jv,success:xv,error:Ev,spinner:Cv},Av=i=>i in Jc;function zv({theme:i,type:t,isLoading:c,icon:d}){let l=null,p={theme:i,type:t};return d===!1||(Cr(d)?l=d({...p,isLoading:c}):C.isValidElement(d)?l=C.cloneElement(d,p):c?l=Jc.spinner():Av(t)&&(l=Jc[t](p))),l}var Mv=i=>{let{isRunning:t,preventExitTransition:c,toastRef:d,eventHandlers:l,playToast:p}=Sv(i),{closeButton:b,children:y,autoClose:v,onClick:m,type:h,hideProgressBar:_,closeToast:A,transition:k,position:w,className:Y,style:G,progressClassName:O,updateId:B,role:Z,progress:J,rtl:K,toastId:ae,deleteToast:F,isIn:j,isLoading:T,closeOnClick:L,theme:W,ariaLabel:$}=i,le=Tn("Toastify__toast",`Toastify__toast-theme--${W}`,`Toastify__toast--${h}`,{"Toastify__toast--rtl":K},{"Toastify__toast--close-on-click":L}),Me=Cr(Y)?Y({rtl:K,position:w,type:h,defaultClassName:le}):Tn(le,Y),qe=zv(i),N=!!J||!v,X={closeToast:A,type:h,theme:W},ee=null;return b===!1||(Cr(b)?ee=b(X):C.isValidElement(b)?ee=C.cloneElement(b,X):ee=iv(X)),Ce.createElement(k,{isIn:j,done:F,position:w,preventExitTransition:c,nodeRef:d,playToast:p},Ce.createElement("div",{id:ae,tabIndex:0,onClick:m,"data-in":j,className:Me,...l,style:G,ref:d,...j&&{role:Z,"aria-label":$}},qe!=null&&Ce.createElement("div",{className:Tn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!T})},qe),b3(y,i,!t),ee,!i.customProgressBar&&Ce.createElement(sv,{...B&&!N?{key:`p-${B}`}:{},rtl:K,theme:W,delay:v,isRunning:t,isIn:j,closeToast:A,hide:_,type:h,className:O,controlledProgress:N,progress:J||0})))},_v=(i,t=!1)=>({enter:`Toastify--animate Toastify__${i}-enter`,exit:`Toastify--animate Toastify__${i}-exit`,appendPosition:t}),Pv=nv(_v("bounce",!0)),Rv={position:"top-right",transition:Pv,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:i=>i.altKey&&i.code==="KeyT"};function wv(i){let t={...Rv,...i},c=i.stacked,[d,l]=C.useState(!0),p=C.useRef(null),{getToastToRender:b,isToastActive:y,count:v}=hv(t),{className:m,style:h,rtl:_,containerId:A,hotKeys:k}=t;function w(G){let O=Tn("Toastify__toast-container",`Toastify__toast-container--${G}`,{"Toastify__toast-container--rtl":_});return Cr(m)?m({position:G,rtl:_,defaultClassName:O}):Tn(O,Qc(m))}function Y(){c&&(l(!0),je.play())}return Tv(()=>{var G;if(c){let O=p.current.querySelectorAll('[data-in="true"]'),B=12,Z=(G=t.position)==null?void 0:G.includes("top"),J=0,K=0;Array.from(O).reverse().forEach((ae,F)=>{let j=ae;j.classList.add("Toastify__toast--stacked"),F>0&&(j.dataset.collapsed=`${d}`),j.dataset.pos||(j.dataset.pos=Z?"top":"bot");let T=J*(d?.2:1)+(d?0:B*F);j.style.setProperty("--y",`${Z?T:T*-1}px`),j.style.setProperty("--g",`${B}`),j.style.setProperty("--s",`${1-(d?K:0)}`),J+=j.offsetHeight,K+=.025})}},[d,v,c]),C.useEffect(()=>{function G(O){var B;let Z=p.current;k(O)&&((B=Z.querySelector('[tabIndex="0"]'))==null||B.focus(),l(!1),je.pause()),O.key==="Escape"&&(document.activeElement===Z||Z!=null&&Z.contains(document.activeElement))&&(l(!0),je.play())}return document.addEventListener("keydown",G),()=>{document.removeEventListener("keydown",G)}},[k]),Ce.createElement("section",{ref:p,className:"Toastify",id:A,onMouseEnter:()=>{c&&(l(!1),je.pause())},onMouseLeave:Y,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},b((G,O)=>{let B=O.length?{...h}:{...h,pointerEvents:"none"};return Ce.createElement("div",{tabIndex:-1,className:w(G),"data-stacked":c,style:B,key:`c-${G}`},O.map(({content:Z,props:J})=>Ce.createElement(Mv,{...J,stacked:c,collapseAll:Y,isIn:y(J.toastId,J.containerId),key:`t-${J.key}`},Z)))}))}function Dv(){const i=od(),{tenders:t,totalResults:c,page:d,pageSize:l,filters:p}=vi(A=>A.tender),[b,y]=C.useState(!1),v=C.useCallback(async(A,k)=>{y(!0);try{const w=await u5({...A,page:k,page_size:l});i($5({tenders:w.tenders,totalResults:w.totalResults,page:k,pageSize:w.pageSize,filters:A}))}catch{je.error("No se pudieron obtener las licitaciones.")}finally{y(!1)}},[i,l]),m=C.useCallback(async A=>{await v(A,1),je.success("Licitaciones actualizadas.")},[v]),h=C.useCallback(async A=>{await v(p,A)},[v,p]),_=Math.ceil((c||0)/l);return g.jsxs("main",{className:"flex flex-col",children:[g.jsx(o5,{onSearch:m,loading:b}),g.jsx(i5,{cardData:t}),g.jsx(c5,{currentPage:d,totalPages:_,onPageChange:h})]})}const Ov=(()=>{const i=localStorage.getItem("companyData");return i?JSON.parse(i):{email:"",name:"",location:"",budget:0,description:"",allowRegister:!1}})(),j3=ld({name:"company",initialState:Ov,reducers:{setCompanyData(i,t){return localStorage.setItem("companyData",JSON.stringify(t.payload)),t.payload}}}),{setCompanyData:Ic}=j3.actions,q3=j3.reducer,Nv={VITE_SET_USER_URL:"https://l5lc62fmgucpi2eafr6p6kvke40jdbru.lambda-url.us-east-1.on.aws/"},Bv=Nv,Lv=({email:i})=>fetch(Bv.VITE_SET_USER_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i})}).then(t=>{if(!t.ok)throw new Error(`Server error: ${t.status}`);return t.json()}).catch(t=>Promise.reject(t)),x3=({initialEmail:i="",initialName:t="",initialLocation:c="",initialBudget:d="",initialDescription:l="",initialAllowRegister:p=!1,title:b,submitLabel:y,onSubmit:v})=>{const[m,h]=C.useState(t),[_,A]=C.useState(c),[k,w]=C.useState(d.toString()),[Y,G]=C.useState(l),[O,B]=C.useState(i),[Z,J]=C.useState(p),[K,ae]=C.useState(null),F=T=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(T),j=async T=>{if(T.preventDefault(),ae(null),!F(O)){ae("Introduce un email válido.");return}if(!Z){ae("Debes permitir el registro del email para continuar.");return}try{await Lv({email:O})}catch{ae("Error al registrar el email.");return}v({email:O,name:m,location:_,budget:Number(k),description:Y,allowRegister:Z})};return g.jsxs("form",{onSubmit:j,className:"max-w-2xl mx-auto bg-white/80 backdrop-blur shadow-lg rounded-2xl px-8 py-10 border border-slate-200",children:[g.jsx("h2",{className:"text-3xl font-bold mb-8 text-slate-800 text-center",children:b}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[g.jsxs("div",{className:"flex flex-col gap-2",children:[g.jsx("label",{htmlFor:"name",className:"font-semibold text-slate-700",children:"Nombre de la empresa"}),g.jsx("input",{"data-testid":"input-name",id:"name",type:"text",value:m,onChange:T=>h(T.target.value),required:!0,className:"border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400 transition"})]}),g.jsxs("div",{className:"flex flex-col gap-2",children:[g.jsx("label",{htmlFor:"location",className:"font-semibold text-slate-700",children:"Localización"}),g.jsx("input",{"data-testid":"input-location",id:"location",type:"text",value:_,onChange:T=>A(T.target.value),required:!0,className:"border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400 transition"})]}),g.jsxs("div",{className:"flex flex-col gap-2 md:col-span-2",children:[g.jsx("label",{htmlFor:"budget",className:"font-semibold text-slate-700",children:"Facturación anual (€)"}),g.jsx("input",{"data-testid":"input-budget",id:"budget",type:"number",value:k,onChange:T=>w(T.target.value),required:!0,min:0,className:"border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400 transition"})]}),g.jsxs("div",{className:"flex flex-col gap-2 md:col-span-2",children:[g.jsx("label",{htmlFor:"email",className:"font-semibold text-slate-700",children:"Email"}),g.jsx("input",{"data-testid":"input-email",id:"email",type:"text",value:O,onChange:T=>B(T.target.value),required:!0,className:"border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400 transition"})]}),g.jsxs("div",{className:"flex items-center md:col-span-2",children:[g.jsx("input",{"data-testid":"checkbox-allowRegister",id:"allowRegister",type:"checkbox",checked:Z,onChange:T=>J(T.target.checked),className:"mr-2"}),g.jsx("label",{htmlFor:"allowRegister",className:"text-slate-700",children:"Permite el registro de su email en nuestra base de datos. Este dato solo se utilizará para comunicaciones sobre nuestra aplicación."})]}),g.jsxs("div",{className:"flex flex-col lg:col-span-2",children:[g.jsx("label",{htmlFor:"description",className:"block font-semibold text-slate-700 mb-2",children:"Descripción de la actividad de la empresa"}),g.jsx("textarea",{"data-testid":"textarea-description",id:"description",onChange:T=>G(T.target.value),value:Y,placeholder:"Escriba la descripción de su empresa aquí, esta será utilizada para buscar las licitaciones mas adecuadas para usted",className:"border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400 transition w-full min-h-[80px]",required:!0})]})]}),K&&g.jsx("div",{className:"mt-4 text-red-600",children:K}),g.jsx("button",{type:"submit",className:"mt-8 w-full bg-slate-800 text-white py-3 rounded-lg font-bold text-lg hover:bg-slate-700 transition",children:y})]})},Hv=()=>{const i=od();return g.jsx(g.Fragment,{children:g.jsx(x3,{title:"Registro de empresa",submitLabel:"Registrar empresa",onSubmit:async({email:t,name:c,location:d,budget:l,description:p,allowRegister:b})=>{je.success("Empresa registrada con éxito."),setTimeout(()=>{i(Ic({email:t,name:c,location:d,budget:l,description:p,allowRegister:b}))},1e3)}})})},Uv=()=>{const i=od(),t=vi(b=>b.company),c=at(),[d,l]=C.useState(!1),p=()=>{i(Ic({email:"",name:"",location:"",budget:0,description:"",allowRegister:!1})),localStorage.removeItem("companyData"),je.success("Datos de la empresa eliminados. Serás redirigido a la página de registro."),setTimeout(()=>{c("/register")},1e3)};return g.jsxs("div",{className:"max-w-2xl mx-auto",children:[g.jsx(x3,{title:"Editar datos de empresa",submitLabel:"Guardar cambios",initialEmail:t.email,initialName:t.name,initialLocation:t.location,initialBudget:t.budget,initialDescription:t.description,initialAllowRegister:t.allowRegister,onSubmit:({email:b,name:y,location:v,budget:m,description:h,allowRegister:_})=>{i(Ic({email:b,name:y,location:v,budget:m,description:h,allowRegister:_})),je.success("Datos de empresa actualizados.")}}),g.jsx("button",{type:"button",onClick:()=>l(!0),className:"mt-6 w-full bg-red-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition",children:"Borrar datos de empresa"}),d&&g.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40",children:g.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8 max-w-sm w-full",children:[g.jsx("h3",{className:"text-xl font-bold mb-4 text-slate-800",children:"¿Estás seguro?"}),g.jsx("p",{className:"mb-6 text-slate-700",children:"Esta acción eliminará todos los datos de la empresa. ¿Deseas continuar?"}),g.jsxs("div",{className:"flex gap-4",children:[g.jsx("button",{type:"button",onClick:()=>l(!1),className:"flex-1 bg-slate-200 text-slate-800 py-2 rounded-lg font-semibold hover:bg-slate-300 transition",children:"Cancelar"}),g.jsx("button",{type:"button",onClick:()=>{l(!1),p()},className:"flex-1 bg-red-600 text-white py-2 rounded-lg font-bold hover:bg-red-700 transition",children:"Sí, borrar"})]})]})})]})},Gv=()=>{const t=or().pathname==="/register",[c,d]=C.useState(!1);return g.jsx("header",{"data-testid":"header",className:"bg-slate-800 fixed top-0 left-0 w-screen z-50 overflow-x-hidden",children:g.jsx("div",{className:"w-full px-4 lg:px-8 py-4 mx-auto max-w-7xl flex flex-row items-center",children:g.jsxs("div",{className:"flex flex-col lg:flex-row w-full justify-between items-center",children:[g.jsxs("div",{className:"flex flex-row justify-between gap-4",children:[g.jsx("h1",{className:"text-3xl text-white",children:"Licico"}),!t&&g.jsx("button",{className:"lg:hidden text-white focus:outline-none",onClick:()=>d(!c),"aria-label":"Toggle navigation",children:g.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:c?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"})})})]}),!t&&g.jsxs("nav",{className:`
                            flex flex-col gap-2 box-border rounded-3xl
                            transition-all duration-300 ease-in-out overflow-hidden
                            ${c?"flex flex-col gap-2 box-border rounded-3xl mt-4 p-4 max-h-96 opacity-100 pointer-events-auto bg-slate-700 border-t border-slate-600":"max-h-0 opacity-0 pointer-events-none"}
                            lg:opacity-100 lg:pointer-events-auto lg:max-h-none
                            lg:flex lg:flex-row lg:gap-4 lg:mt-0 lg:justify-end
                            lg:bg-transparent lg:border-0
                        `,children:[g.jsx(ko,{to:"/",className:({isActive:l})=>l?"text-orange-500 uppercase font-bold":"text-white uppercase font-bold",children:"Buscador"}),g.jsx("div",{className:" w-full border-2 border-white lg:hidden"}),g.jsx(ko,{to:"/your-company",className:({isActive:l})=>l?"text-orange-500 uppercase font-bold":"text-white uppercase font-bold",children:"Tu empresa"}),g.jsx("div",{className:" w-full border-2 border-white lg:hidden"}),g.jsx(ko,{to:"/cpv-list",className:({isActive:l})=>l?"text-orange-500 uppercase font-bold":"text-white uppercase font-bold",children:"Lista de CPVs"})]})]})})})};function R2(i){return En({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(i)}function Bc(i){return En({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(i)}function w2(i){return En({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(i)}function Vv(i){return En({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"},child:[]}]})(i)}const kv=()=>{const i="info@licico.es",t=()=>je("Email copiado",{style:{backgroundColor:"#000000",color:"#FFFFFF"}}),c=l=>{l.preventDefault();const p=l.currentTarget.elements.namedItem("body").value,y=`mailto:${i}?subject=${encodeURIComponent("Contacto con el equipo del buscador de licitaciones")}&body=${encodeURIComponent(p)}`;window.location.href=y},d=()=>{navigator.clipboard.writeText(i),t()};return g.jsxs("div",{className:"flex flex-col justify-between mb-5 bg-secondary rounded-4xl w-full","data-testid":"contact",children:[g.jsx("h1",{className:"text-lg font-semibold mb-4",children:"Contacto"}),g.jsxs("div",{className:"flex flex-col gap-4",children:[g.jsxs("div",{className:"flex gap-4 flex-wrap self-center items-center",children:[g.jsx("p",{className:"text-lg font-medium",children:"Email:"}),g.jsx("span",{"data-testid":"contact-email",children:i}),g.jsx("button",{onClick:d,className:" p-1 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300 text-center w-max hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:scale-105","data-testid":"contact-copy-btn","aria-label":"Copiar email",children:g.jsx(Vv,{size:20})})]}),g.jsxs("form",{onSubmit:c,className:"flex flex-col gap-4","data-testid":"contact-form",children:[g.jsx("label",{htmlFor:"body",className:"text-lg font-medium",children:"Mensaje:"}),g.jsx("textarea",{id:"body",name:"body",rows:2,className:"p-2 border rounded-md resize-none bg-white text-black",placeholder:"Escriba su mensaje aquí",required:!0,"data-testid":"contact-message"}),g.jsx("button",{type:"submit",className:"mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300 text-center w-max hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:scale-105","data-testid":"contact-send-btn",children:"Enviar Email"})]})]})]})},Yv=()=>g.jsx("footer",{className:"bg-slate-800 text-white py-6 ","data-testid":"footer",children:g.jsxs("div",{className:"mx-auto text-center w-full flex flex-col lg:flex-row justify-around px-4 max-w-7xl",children:[g.jsxs("div",{className:"container mx-auto flex flex-col justify-between ",children:[g.jsx("h2",{className:"text-lg font-semibold pb-4",children:"Sobre nosotros"}),g.jsxs("div",{className:"flex flex-col justify-between gap-4 mb-9",children:[g.jsxs("div",{className:"flex flex-col","data-testid":"footer-antonio",children:[g.jsx("h2",{children:"Antonio José Lucena Gutierrez"}),g.jsx("div",{className:"flex space-x-4 mt-2 justify-center",children:g.jsx("a",{"data-testid":"antonio-linkedin",href:"https://www.linkedin.com/in/antoniojose-lucena-gutierrez",target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-500 transition","aria-label":"LinkedIn profile of Antonio José Lucena Gutierrez",children:g.jsx(Bc,{size:24})})})]}),g.jsxs("div",{className:"flex flex-col","data-testid":"footer-carlos",children:[g.jsx("h2",{children:"Carlos Perales Gonzales"}),g.jsxs("div",{className:"flex space-x-4 mt-2 justify-center",children:[g.jsx("a",{"data-testid":"carlos-linkedin",href:"https://www.linkedin.com/in/carlos-perales-cperales/",target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-500 transition","aria-label":"LinkedIn profile of Carlos Perales Gonzales",children:g.jsx(Bc,{size:24})}),g.jsx("a",{"data-testid":"carlos-github",href:"https://github.com/cperales",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-gray-500 transition","aria-label":"GitHub profile of Carlos Perales Gonzales",children:g.jsx(R2,{size:24})}),g.jsx("a",{"data-testid":"carlos-portfolio",href:"https://cperales.github.io",target:"_blank",rel:"noopener noreferrer",className:"text-green-400 hover:text-green-500 transition",title:"Portfolio","aria-label":"Portfolio of Carlos Perales Gonzales",children:g.jsx(w2,{size:24})})]})]}),g.jsxs("div",{className:"flex flex-col","data-testid":"footer-josemaria",children:[g.jsx("h2",{children:"José María Romero Ruiz"}),g.jsxs("div",{className:"flex space-x-4 mt-2 justify-center",children:[g.jsx("a",{"data-testid":"josemaria-linkedin",href:"https://www.linkedin.com/in/jomaroru/",target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-500 transition","aria-label":"LinkedIn profile of José María Romero Ruiz",children:g.jsx(Bc,{size:24})}),g.jsx("a",{"data-testid":"josemaria-github",href:"https://github.com/jomaroru7",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-gray-500 transition","aria-label":"GitHub profile of José María Romero Ruiz",children:g.jsx(R2,{size:24})}),g.jsx("a",{"data-testid":"josemaria-portfolio",href:"https://jomaroru.es",target:"_blank",rel:"noopener noreferrer",className:"text-green-400 hover:text-green-500 transition",title:"Portfolio","aria-label":"Portfolio of José María Romero Ruiz",children:g.jsx(w2,{size:24})})]})]})]})]}),g.jsx(kv,{})]})}),Xv=({children:i})=>g.jsxs("div",{className:"flex flex-col min-h-screen",children:[g.jsx(Gv,{}),g.jsx("main",{className:"container mx-auto px-4 lg:px-8 mt-24 lg:mt-24 max-w-7xl flex-1 pb-4",children:i||g.jsx(km,{})}),g.jsx(Yv,{}),g.jsx(wv,{position:"bottom-right",autoClose:3e3})]}),Qv=()=>{const i=vi(v=>v.cpv.cpvs),t=Object.entries(i),[c,d]=C.useState(""),[l,p]=C.useState(c);C.useEffect(()=>{const v=setTimeout(()=>{p(c)},300);return()=>clearTimeout(v)},[c]);const b=v=>v.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),y=t.filter(([v,m])=>b(v).includes(b(l))||b(m).includes(b(l)));return g.jsxs("div",{className:"",children:[g.jsx("input",{type:"text",placeholder:"Búsqueda por código o descripción...",value:c,onChange:v=>d(v.target.value),className:"mb-6 p-2 border rounded w-full"}),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[y.map(([v,m],h)=>g.jsxs("div",{className:"flex flex-row gap-2 p-2 border-b",children:[g.jsx("span",{className:"font-mono text-blue-700",children:v}),g.jsx("span",{className:"text-slate-700",children:m})]},v+h)),y.length===0&&g.jsx("div",{className:"col-span-2 text-center text-slate-400",children:"No se han encontrado resultados."})]})]})},Zv=({children:i})=>{const t=vi(l=>l.company),c=or(),d=!!(t!=null&&t.name)&&!!(t!=null&&t.location)&&!!(t!=null&&t.budget)&&!!(t!=null&&t.description);return!d&&c.pathname!=="/register"?g.jsx(v2,{to:"/register",replace:!0}):d&&c.pathname==="/register"?g.jsx(v2,{to:"/",replace:!0}):g.jsx(g.Fragment,{children:i})},Kv=()=>{var b,y,v;const{id:i}=Mm(),t=at(),[c,d]=C.useState(null),[l,p]=C.useState(!0);return C.useEffect(()=>{if(!i)return;const m=i.lastIndexOf("-"),h=i.substring(m+1),_=decodeURIComponent(h);m5({ID:_}).then(d).catch(()=>t("/")).finally(()=>p(!1))},[i,t]),l?g.jsx("div",{className:"p-8 text-center",children:"Cargando..."}):c?g.jsxs("div",{className:"max-w-3xl mx-auto p-6 bg-white/80 backdrop-blur shadow-lg rounded-2xl border border-slate-200 mt-10",children:[g.jsx("h1",{className:"text-3xl font-bold mb-6 text-slate-800","data-testid":"tender-name",children:c.tenderName}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[g.jsxs("div",{children:[g.jsx("h2",{className:"text-lg font-semibold text-slate-700 mb-2",children:"Información general"}),g.jsxs("ul",{className:"text-slate-700 space-y-1",children:[g.jsxs("li",{"data-testid":"tender-record",children:[g.jsx("span",{className:"font-semibold",children:"Expediente:"})," ",c.record]}),g.jsxs("li",{"data-testid":"tender-contract-type",children:[g.jsx("span",{className:"font-semibold",children:"Tipo de contrato:"})," ",c.contractType]}),g.jsxs("li",{"data-testid":"tender-procedure-type",children:[g.jsx("span",{className:"font-semibold",children:"Tipo de procedimiento:"})," ",c.procedureType]}),g.jsxs("li",{"data-testid":"tender-lots-number",children:[g.jsx("span",{className:"font-semibold",children:"Nº de lotes:"})," ",c.lotsNumber]}),g.jsxs("li",{"data-testid":"tender-cpvs",children:[g.jsx("span",{className:"font-semibold",children:"CPVs:"})," ",c.CPVCodes.join(", ")]}),g.jsxs("li",{"data-testid":"tender-warranty",children:[g.jsx("span",{className:"font-semibold",children:"Garantía:"})," ",Array.isArray(c.warrantyType)?c.warrantyType.join(", "):c.warrantyType?c.warrantyType:g.jsx("span",{className:"text-slate-400",children:"No disponible"})]})]})]}),g.jsxs("div",{children:[g.jsx("h2",{className:"text-lg font-semibold text-slate-700 mb-2",children:"Fechas"}),g.jsxs("ul",{className:"text-slate-700 space-y-1",children:[g.jsxs("li",{"data-testid":"tender-publication-date",children:[g.jsx("span",{className:"font-semibold",children:"Publicación:"})," ",c.publicationDate]}),g.jsxs("li",{"data-testid":"tender-start-date",children:[g.jsx("span",{className:"font-semibold",children:"Inicio:"})," ",c.startDate]}),g.jsxs("li",{"data-testid":"tender-end-date",children:[g.jsx("span",{className:"font-semibold",children:"Fin:"})," ",c.endDate]})]})]}),g.jsxs("div",{children:[g.jsx("h2",{className:"text-lg font-semibold text-slate-700 mb-2",children:"Presupuestos"}),g.jsxs("ul",{className:"text-slate-700 space-y-1",children:[g.jsxs("li",{"data-testid":"tender-budget-no-iva",children:[g.jsx("span",{className:"font-semibold",children:"Presupuesto sin IVA:"})," ",(b=c.budgetNoIva)==null?void 0:b.toLocaleString()," €"]}),g.jsxs("li",{"data-testid":"tender-budget-total",children:[g.jsx("span",{className:"font-semibold",children:"Presupuesto total:"})," ",(y=c.budgetTotal)==null?void 0:y.toLocaleString()," €"]}),g.jsxs("li",{"data-testid":"tender-budget",children:[g.jsx("span",{className:"font-semibold",children:"Presupuesto estimado:"})," ",(v=c.budget)==null?void 0:v.toLocaleString()," €"]})]})]}),g.jsxs("div",{children:[g.jsx("h2",{className:"text-lg font-semibold text-slate-700 mb-2",children:"Otros datos"}),g.jsxs("ul",{className:"text-slate-700 space-y-1",children:[g.jsxs("li",{"data-testid":"tender-location",children:[g.jsx("span",{className:"font-semibold",children:"Localización:"})," ",c.location]}),g.jsxs("li",{"data-testid":"tender-url",children:[g.jsx("span",{className:"font-semibold",children:"Enlace oficial:"})," ",g.jsx("a",{href:c.url,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 underline break-all","data-testid":"tender-url-link",children:c.url})]}),g.jsxs("li",{"data-testid":"tender-administrative-doc",children:[g.jsx("span",{className:"font-semibold",children:"Pliego administrativo:"})," ",c.administrativeDocumexnt?g.jsx("a",{href:c.administrativeDocumexnt,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 underline break-all","data-testid":"tender-administrative-doc-link",children:"Descargar"}):g.jsx("span",{className:"text-slate-400",children:"No disponible"})]}),g.jsxs("li",{"data-testid":"tender-specifications-sheet",children:[g.jsx("span",{className:"font-semibold",children:"Pliego de prescripciones:"})," ",c.specificationsSheet?g.jsx("a",{href:c.specificationsSheet,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 underline break-all","data-testid":"tender-specifications-sheet-link",children:"Descargar"}):g.jsx("span",{className:"text-slate-400",children:"No disponible"})]})]})]})]}),g.jsxs("div",{className:"mb-6",children:[g.jsx("h2",{className:"text-lg font-semibold text-slate-700 mb-2",children:"Resumen"}),g.jsx("p",{className:"text-slate-700","data-testid":"tender-resume",children:c.resume})]}),g.jsx("button",{className:"mt-4 bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700 transition",onClick:()=>t(-1),children:"Volver"})]}):g.jsx("div",{className:"p-8 text-center",children:"No se encontró la licitación."})};function Jv(){return g.jsx(bf,{children:g.jsx(Zv,{children:g.jsx(Xm,{children:g.jsxs(hn,{element:g.jsx(Xv,{}),children:[g.jsx(hn,{path:"/",element:g.jsx(Dv,{}),index:!0}),g.jsx(hn,{path:"/register",element:g.jsx(Hv,{})}),g.jsx(hn,{path:"/your-company",element:g.jsx(Uv,{})}),g.jsx(hn,{path:"/cpv-list",element:g.jsx(Qv,{})}),g.jsx(hn,{path:"/tender/:id",element:g.jsx(Kv,{})})]})})})})}const Iv={cpvs:{}},E3=ld({name:"cpv",initialState:Iv,reducers:{setCpvs(i,t){i.cpvs=t.payload}}}),{setCpvs:Fv}=E3.actions,C3=E3.reducer,A3=H5({reducer:{cpv:C3,company:q3,tender:f3}});r3({companyReducer:q3,cpvReducer:C3,tenderReducer:f3});var Yo={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/var $v=Yo.exports,D2;function Wv(){return D2||(D2=1,function(i,t){((c,d)=>{i.exports=d()})($v,function c(){var d=typeof self<"u"?self:typeof window<"u"?window:d!==void 0?d:{},l,p=!d.document&&!!d.postMessage,b=d.IS_PAPA_WORKER||!1,y={},v=0,m={};function h(j){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(T){var L=K(T);L.chunkSize=parseInt(L.chunkSize),T.step||T.chunk||(L.chunkSize=null),this._handle=new Y(L),(this._handle.streamer=this)._config=L}).call(this,j),this.parseChunk=function(T,L){var W=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<W){let le=this._config.newline;le||($=this._config.quoteChar||'"',le=this._handle.guessLineEndings(T,$)),T=[...T.split(le).slice(W)].join(le)}this.isFirstChunk&&F(this._config.beforeFirstChunk)&&($=this._config.beforeFirstChunk(T))!==void 0&&(T=$),this.isFirstChunk=!1,this._halted=!1;var W=this._partialLine+T,$=(this._partialLine="",this._handle.parse(W,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(T=$.meta.cursor,W=(this._finished||(this._partialLine=W.substring(T-this._baseIndex),this._baseIndex=T),$&&$.data&&(this._rowCount+=$.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),b)d.postMessage({results:$,workerId:m.WORKER_ID,finished:W});else if(F(this._config.chunk)&&!L){if(this._config.chunk($,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=$=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat($.data),this._completeResults.errors=this._completeResults.errors.concat($.errors),this._completeResults.meta=$.meta),this._completed||!W||!F(this._config.complete)||$&&$.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),W||$&&$.meta.paused||this._nextChunk(),$}this._halted=!0},this._sendError=function(T){F(this._config.error)?this._config.error(T):b&&this._config.error&&d.postMessage({workerId:m.WORKER_ID,error:T,finished:!1})}}function _(j){var T;(j=j||{}).chunkSize||(j.chunkSize=m.RemoteChunkSize),h.call(this,j),this._nextChunk=p?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(L){this._input=L,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(T=new XMLHttpRequest,this._config.withCredentials&&(T.withCredentials=this._config.withCredentials),p||(T.onload=ae(this._chunkLoaded,this),T.onerror=ae(this._chunkError,this)),T.open(this._config.downloadRequestBody?"POST":"GET",this._input,!p),this._config.downloadRequestHeaders){var L,W=this._config.downloadRequestHeaders;for(L in W)T.setRequestHeader(L,W[L])}var $;this._config.chunkSize&&($=this._start+this._config.chunkSize-1,T.setRequestHeader("Range","bytes="+this._start+"-"+$));try{T.send(this._config.downloadRequestBody)}catch(le){this._chunkError(le.message)}p&&T.status===0&&this._chunkError()}},this._chunkLoaded=function(){T.readyState===4&&(T.status<200||400<=T.status?this._chunkError():(this._start+=this._config.chunkSize||T.responseText.length,this._finished=!this._config.chunkSize||this._start>=(L=>(L=L.getResponseHeader("Content-Range"))!==null?parseInt(L.substring(L.lastIndexOf("/")+1)):-1)(T),this.parseChunk(T.responseText)))},this._chunkError=function(L){L=T.statusText||L,this._sendError(new Error(L))}}function A(j){(j=j||{}).chunkSize||(j.chunkSize=m.LocalChunkSize),h.call(this,j);var T,L,W=typeof FileReader<"u";this.stream=function($){this._input=$,L=$.slice||$.webkitSlice||$.mozSlice,W?((T=new FileReader).onload=ae(this._chunkLoaded,this),T.onerror=ae(this._chunkError,this)):T=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var $=this._input,le=(this._config.chunkSize&&(le=Math.min(this._start+this._config.chunkSize,this._input.size),$=L.call($,this._start,le)),T.readAsText($,this._config.encoding));W||this._chunkLoaded({target:{result:le}})},this._chunkLoaded=function($){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk($.target.result)},this._chunkError=function(){this._sendError(T.error)}}function k(j){var T;h.call(this,j=j||{}),this.stream=function(L){return T=L,this._nextChunk()},this._nextChunk=function(){var L,W;if(!this._finished)return L=this._config.chunkSize,T=L?(W=T.substring(0,L),T.substring(L)):(W=T,""),this._finished=!T,this.parseChunk(W)}}function w(j){h.call(this,j=j||{});var T=[],L=!0,W=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function($){this._input=$,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){W&&T.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),T.length?this.parseChunk(T.shift()):L=!0},this._streamData=ae(function($){try{T.push(typeof $=="string"?$:$.toString(this._config.encoding)),L&&(L=!1,this._checkIsFinished(),this.parseChunk(T.shift()))}catch(le){this._streamError(le)}},this),this._streamError=ae(function($){this._streamCleanUp(),this._sendError($)},this),this._streamEnd=ae(function(){this._streamCleanUp(),W=!0,this._streamData("")},this),this._streamCleanUp=ae(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function Y(j){var T,L,W,$,le=Math.pow(2,53),Me=-le,qe=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,N=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,X=this,ee=0,re=0,q=!1,D=!1,I=[],H={data:[],errors:[],meta:{}};function ne(oe){return j.skipEmptyLines==="greedy"?oe.join("").trim()==="":oe.length===1&&oe[0].length===0}function ce(){if(H&&W&&(Ge("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+m.DefaultDelimiter+"'"),W=!1),j.skipEmptyLines&&(H.data=H.data.filter(function(Re){return!ne(Re)})),se()){let Re=function(Ke,we){F(j.transformHeader)&&(Ke=j.transformHeader(Ke,we)),I.push(Ke)};var me=Re;if(H)if(Array.isArray(H.data[0])){for(var oe=0;se()&&oe<H.data.length;oe++)H.data[oe].forEach(Re);H.data.splice(0,1)}else H.data.forEach(Re)}function ve(Re,Ke){for(var we=j.header?{}:[],ze=0;ze<Re.length;ze++){var be=ze,Le=Re[ze],Le=((xe,He)=>(Je=>(j.dynamicTypingFunction&&j.dynamicTyping[Je]===void 0&&(j.dynamicTyping[Je]=j.dynamicTypingFunction(Je)),(j.dynamicTyping[Je]||j.dynamicTyping)===!0))(xe)?He==="true"||He==="TRUE"||He!=="false"&&He!=="FALSE"&&((Je=>{if(qe.test(Je)&&(Je=parseFloat(Je),Me<Je&&Je<le))return 1})(He)?parseFloat(He):N.test(He)?new Date(He):He===""?null:He):He)(be=j.header?ze>=I.length?"__parsed_extra":I[ze]:be,Le=j.transform?j.transform(Le,be):Le);be==="__parsed_extra"?(we[be]=we[be]||[],we[be].push(Le)):we[be]=Le}return j.header&&(ze>I.length?Ge("FieldMismatch","TooManyFields","Too many fields: expected "+I.length+" fields but parsed "+ze,re+Ke):ze<I.length&&Ge("FieldMismatch","TooFewFields","Too few fields: expected "+I.length+" fields but parsed "+ze,re+Ke)),we}var Ve;H&&(j.header||j.dynamicTyping||j.transform)&&(Ve=1,!H.data.length||Array.isArray(H.data[0])?(H.data=H.data.map(ve),Ve=H.data.length):H.data=ve(H.data,0),j.header&&H.meta&&(H.meta.fields=I),re+=Ve)}function se(){return j.header&&I.length===0}function Ge(oe,ve,Ve,me){oe={type:oe,code:ve,message:Ve},me!==void 0&&(oe.row=me),H.errors.push(oe)}F(j.step)&&($=j.step,j.step=function(oe){H=oe,se()?ce():(ce(),H.data.length!==0&&(ee+=oe.data.length,j.preview&&ee>j.preview?L.abort():(H.data=H.data[0],$(H,X))))}),this.parse=function(oe,ve,Ve){var me=j.quoteChar||'"',me=(j.newline||(j.newline=this.guessLineEndings(oe,me)),W=!1,j.delimiter?F(j.delimiter)&&(j.delimiter=j.delimiter(oe),H.meta.delimiter=j.delimiter):((me=((Re,Ke,we,ze,be)=>{var Le,xe,He,Je;be=be||[",","	","|",";",m.RECORD_SEP,m.UNIT_SEP];for(var Za=0;Za<be.length;Za++){for(var Da,Ar=be[Za],ia=0,Oa=0,Ye=0,De=(He=void 0,new O({comments:ze,delimiter:Ar,newline:Ke,preview:10}).parse(Re)),sa=0;sa<De.data.length;sa++)we&&ne(De.data[sa])?Ye++:(Da=De.data[sa].length,Oa+=Da,He===void 0?He=Da:0<Da&&(ia+=Math.abs(Da-He),He=Da));0<De.data.length&&(Oa/=De.data.length-Ye),(xe===void 0||ia<=xe)&&(Je===void 0||Je<Oa)&&1.99<Oa&&(xe=ia,Le=Ar,Je=Oa)}return{successful:!!(j.delimiter=Le),bestDelimiter:Le}})(oe,j.newline,j.skipEmptyLines,j.comments,j.delimitersToGuess)).successful?j.delimiter=me.bestDelimiter:(W=!0,j.delimiter=m.DefaultDelimiter),H.meta.delimiter=j.delimiter),K(j));return j.preview&&j.header&&me.preview++,T=oe,L=new O(me),H=L.parse(T,ve,Ve),ce(),q?{meta:{paused:!0}}:H||{meta:{paused:!1}}},this.paused=function(){return q},this.pause=function(){q=!0,L.abort(),T=F(j.chunk)?"":T.substring(L.getCharIndex())},this.resume=function(){X.streamer._halted?(q=!1,X.streamer.parseChunk(T,!0)):setTimeout(X.resume,3)},this.aborted=function(){return D},this.abort=function(){D=!0,L.abort(),H.meta.aborted=!0,F(j.complete)&&j.complete(H),T=""},this.guessLineEndings=function(Re,me){Re=Re.substring(0,1048576);var me=new RegExp(G(me)+"([^]*?)"+G(me),"gm"),Ve=(Re=Re.replace(me,"")).split("\r"),me=Re.split(`
`),Re=1<me.length&&me[0].length<Ve[0].length;if(Ve.length===1||Re)return`
`;for(var Ke=0,we=0;we<Ve.length;we++)Ve[we][0]===`
`&&Ke++;return Ke>=Ve.length/2?`\r
`:"\r"}}function G(j){return j.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function O(j){var T=(j=j||{}).delimiter,L=j.newline,W=j.comments,$=j.step,le=j.preview,Me=j.fastMode,qe=null,N=!1,X=j.quoteChar==null?'"':j.quoteChar,ee=X;if(j.escapeChar!==void 0&&(ee=j.escapeChar),(typeof T!="string"||-1<m.BAD_DELIMITERS.indexOf(T))&&(T=","),W===T)throw new Error("Comment character same as delimiter");W===!0?W="#":(typeof W!="string"||-1<m.BAD_DELIMITERS.indexOf(W))&&(W=!1),L!==`
`&&L!=="\r"&&L!==`\r
`&&(L=`
`);var re=0,q=!1;this.parse=function(D,I,H){if(typeof D!="string")throw new Error("Input must be a string");var ne=D.length,ce=T.length,se=L.length,Ge=W.length,oe=F($),ve=[],Ve=[],me=[],Re=re=0;if(!D)return ia();if(Me||Me!==!1&&D.indexOf(X)===-1){for(var Ke=D.split(L),we=0;we<Ke.length;we++){if(me=Ke[we],re+=me.length,we!==Ke.length-1)re+=L.length;else if(H)return ia();if(!W||me.substring(0,Ge)!==W){if(oe){if(ve=[],Je(me.split(T)),Oa(),q)return ia()}else Je(me.split(T));if(le&&le<=we)return ve=ve.slice(0,le),ia(!0)}}return ia()}for(var ze=D.indexOf(T,re),be=D.indexOf(L,re),Le=new RegExp(G(ee)+G(X),"g"),xe=D.indexOf(X,re);;)if(D[re]===X)for(xe=re,re++;;){if((xe=D.indexOf(X,xe+1))===-1)return H||Ve.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:ve.length,index:re}),Da();if(xe===ne-1)return Da(D.substring(re,xe).replace(Le,X));if(X===ee&&D[xe+1]===ee)xe++;else if(X===ee||xe===0||D[xe-1]!==ee){ze!==-1&&ze<xe+1&&(ze=D.indexOf(T,xe+1));var He=Za((be=be!==-1&&be<xe+1?D.indexOf(L,xe+1):be)===-1?ze:Math.min(ze,be));if(D.substr(xe+1+He,ce)===T){me.push(D.substring(re,xe).replace(Le,X)),D[re=xe+1+He+ce]!==X&&(xe=D.indexOf(X,re)),ze=D.indexOf(T,re),be=D.indexOf(L,re);break}if(He=Za(be),D.substring(xe+1+He,xe+1+He+se)===L){if(me.push(D.substring(re,xe).replace(Le,X)),Ar(xe+1+He+se),ze=D.indexOf(T,re),xe=D.indexOf(X,re),oe&&(Oa(),q))return ia();if(le&&ve.length>=le)return ia(!0);break}Ve.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:ve.length,index:re}),xe++}}else if(W&&me.length===0&&D.substring(re,re+Ge)===W){if(be===-1)return ia();re=be+se,be=D.indexOf(L,re),ze=D.indexOf(T,re)}else if(ze!==-1&&(ze<be||be===-1))me.push(D.substring(re,ze)),re=ze+ce,ze=D.indexOf(T,re);else{if(be===-1)break;if(me.push(D.substring(re,be)),Ar(be+se),oe&&(Oa(),q))return ia();if(le&&ve.length>=le)return ia(!0)}return Da();function Je(Ye){ve.push(Ye),Re=re}function Za(Ye){var De=0;return De=Ye!==-1&&(Ye=D.substring(xe+1,Ye))&&Ye.trim()===""?Ye.length:De}function Da(Ye){return H||(Ye===void 0&&(Ye=D.substring(re)),me.push(Ye),re=ne,Je(me),oe&&Oa()),ia()}function Ar(Ye){re=Ye,Je(me),me=[],be=D.indexOf(L,re)}function ia(Ye){if(j.header&&!I&&ve.length&&!N){var De=ve[0],sa=Object.create(null),la=new Set(De);let Es=!1;for(let zr=0;zr<De.length;zr++){let Na=De[zr];if(sa[Na=F(j.transformHeader)?j.transformHeader(Na,zr):Na]){let er,Wr=sa[Na];for(;er=Na+"_"+Wr,Wr++,la.has(er););la.add(er),De[zr]=er,sa[Na]++,Es=!0,(qe=qe===null?{}:qe)[er]=Na}else sa[Na]=1,De[zr]=Na;la.add(Na)}Es&&console.warn("Duplicate headers found and renamed."),N=!0}return{data:ve,errors:Ve,meta:{delimiter:T,linebreak:L,aborted:q,truncated:!!Ye,cursor:Re+(I||0),renamedHeaders:qe}}}function Oa(){$(ia()),ve=[],Ve=[]}},this.abort=function(){q=!0},this.getCharIndex=function(){return re}}function B(j){var T=j.data,L=y[T.workerId],W=!1;if(T.error)L.userError(T.error,T.file);else if(T.results&&T.results.data){var $={abort:function(){W=!0,Z(T.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:J,resume:J};if(F(L.userStep)){for(var le=0;le<T.results.data.length&&(L.userStep({data:T.results.data[le],errors:T.results.errors,meta:T.results.meta},$),!W);le++);delete T.results}else F(L.userChunk)&&(L.userChunk(T.results,$,T.file),delete T.results)}T.finished&&!W&&Z(T.workerId,T.results)}function Z(j,T){var L=y[j];F(L.userComplete)&&L.userComplete(T),L.terminate(),delete y[j]}function J(){throw new Error("Not implemented.")}function K(j){if(typeof j!="object"||j===null)return j;var T,L=Array.isArray(j)?[]:{};for(T in j)L[T]=K(j[T]);return L}function ae(j,T){return function(){j.apply(T,arguments)}}function F(j){return typeof j=="function"}return m.parse=function(j,T){var L=(T=T||{}).dynamicTyping||!1;if(F(L)&&(T.dynamicTypingFunction=L,L={}),T.dynamicTyping=L,T.transform=!!F(T.transform)&&T.transform,!T.worker||!m.WORKERS_SUPPORTED)return L=null,m.NODE_STREAM_INPUT,typeof j=="string"?(j=(W=>W.charCodeAt(0)!==65279?W:W.slice(1))(j),L=new(T.download?_:k)(T)):j.readable===!0&&F(j.read)&&F(j.on)?L=new w(T):(d.File&&j instanceof File||j instanceof Object)&&(L=new A(T)),L.stream(j);(L=(()=>{var W;return!!m.WORKERS_SUPPORTED&&(W=(()=>{var $=d.URL||d.webkitURL||null,le=c.toString();return m.BLOB_URL||(m.BLOB_URL=$.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",le,")();"],{type:"text/javascript"})))})(),(W=new d.Worker(W)).onmessage=B,W.id=v++,y[W.id]=W)})()).userStep=T.step,L.userChunk=T.chunk,L.userComplete=T.complete,L.userError=T.error,T.step=F(T.step),T.chunk=F(T.chunk),T.complete=F(T.complete),T.error=F(T.error),delete T.worker,L.postMessage({input:j,config:T,workerId:L.id})},m.unparse=function(j,T){var L=!1,W=!0,$=",",le=`\r
`,Me='"',qe=Me+Me,N=!1,X=null,ee=!1,re=((()=>{if(typeof T=="object"){if(typeof T.delimiter!="string"||m.BAD_DELIMITERS.filter(function(I){return T.delimiter.indexOf(I)!==-1}).length||($=T.delimiter),typeof T.quotes!="boolean"&&typeof T.quotes!="function"&&!Array.isArray(T.quotes)||(L=T.quotes),typeof T.skipEmptyLines!="boolean"&&typeof T.skipEmptyLines!="string"||(N=T.skipEmptyLines),typeof T.newline=="string"&&(le=T.newline),typeof T.quoteChar=="string"&&(Me=T.quoteChar),typeof T.header=="boolean"&&(W=T.header),Array.isArray(T.columns)){if(T.columns.length===0)throw new Error("Option columns is empty");X=T.columns}T.escapeChar!==void 0&&(qe=T.escapeChar+Me),T.escapeFormulae instanceof RegExp?ee=T.escapeFormulae:typeof T.escapeFormulae=="boolean"&&T.escapeFormulae&&(ee=/^[=+\-@\t\r].*$/)}})(),new RegExp(G(Me),"g"));if(typeof j=="string"&&(j=JSON.parse(j)),Array.isArray(j)){if(!j.length||Array.isArray(j[0]))return q(null,j,N);if(typeof j[0]=="object")return q(X||Object.keys(j[0]),j,N)}else if(typeof j=="object")return typeof j.data=="string"&&(j.data=JSON.parse(j.data)),Array.isArray(j.data)&&(j.fields||(j.fields=j.meta&&j.meta.fields||X),j.fields||(j.fields=Array.isArray(j.data[0])?j.fields:typeof j.data[0]=="object"?Object.keys(j.data[0]):[]),Array.isArray(j.data[0])||typeof j.data[0]=="object"||(j.data=[j.data])),q(j.fields||[],j.data||[],N);throw new Error("Unable to serialize unrecognized input");function q(I,H,ne){var ce="",se=(typeof I=="string"&&(I=JSON.parse(I)),typeof H=="string"&&(H=JSON.parse(H)),Array.isArray(I)&&0<I.length),Ge=!Array.isArray(H[0]);if(se&&W){for(var oe=0;oe<I.length;oe++)0<oe&&(ce+=$),ce+=D(I[oe],oe);0<H.length&&(ce+=le)}for(var ve=0;ve<H.length;ve++){var Ve=(se?I:H[ve]).length,me=!1,Re=se?Object.keys(H[ve]).length===0:H[ve].length===0;if(ne&&!se&&(me=ne==="greedy"?H[ve].join("").trim()==="":H[ve].length===1&&H[ve][0].length===0),ne==="greedy"&&se){for(var Ke=[],we=0;we<Ve;we++){var ze=Ge?I[we]:we;Ke.push(H[ve][ze])}me=Ke.join("").trim()===""}if(!me){for(var be=0;be<Ve;be++){0<be&&!Re&&(ce+=$);var Le=se&&Ge?I[be]:be;ce+=D(H[ve][Le],be)}ve<H.length-1&&(!ne||0<Ve&&!Re)&&(ce+=le)}}return ce}function D(I,H){var ne,ce;return I==null?"":I.constructor===Date?JSON.stringify(I).slice(1,25):(ce=!1,ee&&typeof I=="string"&&ee.test(I)&&(I="'"+I,ce=!0),ne=I.toString().replace(re,qe),(ce=ce||L===!0||typeof L=="function"&&L(I,H)||Array.isArray(L)&&L[H]||((se,Ge)=>{for(var oe=0;oe<Ge.length;oe++)if(-1<se.indexOf(Ge[oe]))return!0;return!1})(ne,m.BAD_DELIMITERS)||-1<ne.indexOf($)||ne.charAt(0)===" "||ne.charAt(ne.length-1)===" ")?Me+ne+Me:ne)}},m.RECORD_SEP="",m.UNIT_SEP="",m.BYTE_ORDER_MARK="\uFEFF",m.BAD_DELIMITERS=["\r",`
`,'"',m.BYTE_ORDER_MARK],m.WORKERS_SUPPORTED=!p&&!!d.Worker,m.NODE_STREAM_INPUT=1,m.LocalChunkSize=10485760,m.RemoteChunkSize=5242880,m.DefaultDelimiter=",",m.Parser=O,m.ParserHandle=Y,m.NetworkStreamer=_,m.FileStreamer=A,m.StringStreamer=k,m.ReadableStreamStreamer=w,d.jQuery&&((l=d.jQuery).fn.parse=function(j){var T=j.config||{},L=[];return this.each(function(le){if(!(l(this).prop("tagName").toUpperCase()==="INPUT"&&l(this).attr("type").toLowerCase()==="file"&&d.FileReader)||!this.files||this.files.length===0)return!0;for(var Me=0;Me<this.files.length;Me++)L.push({file:this.files[Me],inputElem:this,instanceConfig:l.extend({},T)})}),W(),this;function W(){if(L.length===0)F(j.complete)&&j.complete();else{var le,Me,qe,N,X=L[0];if(F(j.before)){var ee=j.before(X.file,X.inputElem);if(typeof ee=="object"){if(ee.action==="abort")return le="AbortError",Me=X.file,qe=X.inputElem,N=ee.reason,void(F(j.error)&&j.error({name:le},Me,qe,N));if(ee.action==="skip")return void $();typeof ee.config=="object"&&(X.instanceConfig=l.extend(X.instanceConfig,ee.config))}else if(ee==="skip")return void $()}var re=X.instanceConfig.complete;X.instanceConfig.complete=function(q){F(re)&&re(q,X.file,X.inputElem),$()},m.parse(X.file,X.instanceConfig)}}function $(){L.splice(0,1),W()}}),b&&(d.onmessage=function(j){j=j.data,m.WORKER_ID===void 0&&j&&(m.WORKER_ID=j.workerId),typeof j.input=="string"?d.postMessage({workerId:m.WORKER_ID,results:m.parse(j.input,j.config),finished:!0}):(d.File&&j.input instanceof File||j.input instanceof Object)&&(j=m.parse(j.input,j.config))&&d.postMessage({workerId:m.WORKER_ID,results:j,finished:!0})}),(_.prototype=Object.create(h.prototype)).constructor=_,(A.prototype=Object.create(h.prototype)).constructor=A,(k.prototype=Object.create(k.prototype)).constructor=k,(w.prototype=Object.create(h.prototype)).constructor=w,m})}(Yo)),Yo.exports}var eb=Wv();const ab=O2(eb),rb=`03000000;Productos de la agricultura, ganadería, pesca, silvicultura y productos afines\r
03100000;Productos de la agricultura y horticultura\r
03110000;Cultivos, productos comerciales de jardinería y horticultura\r
03111000;Semillas\r
03111100;Soja\r
03111200;Cacahuetes\r
03111300;Semillas de girasol\r
03111400;Semillas de algodón\r
03111500;Semillas de sésamo\r
03111600;Semillas de mostaza\r
03111700;Semillas de hortalizas\r
03111800;Semillas de frutos\r
03111900;Semillas de flores\r
03112000;Tabaco sin elaborar\r
03113000;Plantas utilizadas para la fabricación de azúcar\r
03113100;Remolacha azucarera\r
03113200;Caña de azúcar\r
03114000;Paja y plantas forrajeras\r
03114100;Paja\r
03114200;Plantas forrajeras\r
03115000;Materias vegetales en bruto\r
03115100;Materias vegetales en bruto utilizadas en la fabricación de textiles\r
03115110;Algodón\r
03115120;Yute\r
03115130;Lino\r
03116000;Caucho y látex naturales y productos afines\r
03116100;Caucho natural\r
03116200;Látex natural\r
03116300;Productos de látex\r
03117000;Plantas utilizadas para usos específicos\r
03117100;Plantas utilizadas en perfumería o farmacia, o en la elaboración de insecticidas o con fines análogos\r
03117110;Plantas utilizadas en perfumería\r
03117120;Plantas utilizadas en farmacia\r
03117130;Plantas utilizadas en la elaboración de insecticidas\r
03117140;Plantas utilizadas en la elaboración de pesticidas o fungicidas o con fines análogos\r
03117200;Semillas de plantas utilizadas para usos específicos\r
03120000;Productos de horticultura y viveros\r
03121000;Productos de horticultura\r
03121100;Plantas vivas, bulbos, raíces y esquejes\r
03121200;Flores cortadas\r
03121210;Arreglos florales\r
03130000;Cultivos de especias y de plantas para bebidas\r
03131000;Cultivos de plantas para bebidas\r
03131100;Café en grano\r
03131200;Plantas de té\r
03131300;Mate\r
03131400;Cacao en grano\r
03132000;Especias no manufacturadas\r
03140000;Productos de origen animal y productos afines\r
03141000;Semen de toro\r
03142000;Productos de origen animal\r
03142100;Miel natural\r
03142200;Caracoles\r
03142300;Productos comestibles de origen animal\r
03142400;Ceras\r
03142500;Huevos\r
03143000;Productos de cultivo mixto\r
03144000;Productos para la agricultura\r
03200000;Cereales, patatas, hortalizas, frutas y frutos de cáscara\r
03210000;Cereales y patatas\r
03211000;Cereales\r
03211100;Trigo\r
03211110;Trigo duro\r
03211120;Trigo blando\r
03211200;Maíz\r
03211300;Arroz\r
03211400;Cebada\r
03211500;Centeno\r
03211600;Avena\r
03211700;Malta\r
03211900;Productos de granos\r
03212000;Patatas y legumbres secas\r
03212100;Patatas\r
03212200;Legumbres y hortalizas leguminosas secas\r
03212210;Leguminosas secas\r
03212211;Lentejas\r
03212212;Garbanzos\r
03212213;Guisantes secos\r
03212220;Legumbres\r
03220000;Hortalizas, frutas y frutos de cáscara\r
03221000;Hortalizas\r
03221100;Hortalizas de raíz y tubérculo\r
03221110;Hortalizas de raíz\r
03221111;Remolachas\r
03221112;Zanahorias\r
03221113;Cebollas\r
03221114;Nabos\r
03221120;Hortalizas de tubérculo\r
03221200;Frutos hortícolas\r
03221210;Judías\r
03221211;Habas\r
03221212;Judías verdes\r
03221213;Judías pintas\r
03221220;Guisantes\r
03221221;Guisantes de huerta\r
03221222;Guisantes mollares\r
03221230;Pimientos\r
03221240;Tomates\r
03221250;Calabacines\r
03221260;Champiñones\r
03221270;Pepinos\r
03221300;Hortalizas de hoja\r
03221310;Lechuga\r
03221320;Hojas para ensalada\r
03221330;Alcachofas\r
03221340;Espinacas\r
03221400;Coles\r
03221410;Repollos\r
03221420;Coliflores\r
03221430;Brécoles\r
03221440;Coles de Bruselas\r
03222000;Frutas y frutos de cáscara\r
03222100;Frutas y frutos de cáscara tropicales\r
03222110;Frutas tropicales\r
03222111;Plátanos\r
03222112;Piñas\r
03222113;Mangos\r
03222114;Dátiles\r
03222115;Pasas\r
03222116;Higos\r
03222117;Aguacates\r
03222118;Kiwis\r
03222120;Cocos\r
03222200;Cítricos\r
03222210;Limones\r
03222220;Naranjas\r
03222230;Pomelos\r
03222240;Naranjas tangerinas\r
03222250;Limas\r
03222300;Frutas no tropicales\r
03222310;Bayas\r
03222311;Pasas de Corinto\r
03222312;Grosellas silvestres\r
03222313;Fresas\r
03222314;Frambuesas\r
03222315;Arándanos\r
03222320;Manzanas, peras y membrillos\r
03222321;Manzanas\r
03222322;Peras\r
03222323;Membrillos\r
03222330;Frutas de hueso\r
03222331;Albaricoques\r
03222332;Melocotones\r
03222333;Cerezas\r
03222334;Ciruelas\r
03222340;Uvas\r
03222341;Uvas de mesa\r
03222342;Uvas de vino\r
03222400;Aceitunas\r
03300000;Productos de la ganadería, la caza y la pesca\r
03310000;Pescado, crustáceos y productos acuáticos\r
03311000;Pescado\r
03311100;Pescado plano\r
03311110;Lenguado\r
03311120;Solla\r
03311200;Pescados de la familia del bacalao\r
03311210;Bacalao\r
03311220;Abadejo\r
03311230;Merluza\r
03311240;Eglefino\r
03311300;Arenque\r
03311400;Atún\r
03311500;Merlán\r
03311600;Morralla\r
03311700;Salmón\r
03312000;Crustáceos\r
03312100;Ostras\r
03312200;Moluscos\r
03312300;Invertebrados acuáticos\r
03313000;Productos acuáticos\r
03313100;Corales o productos similares\r
03313200;Esponjas naturales\r
03313300;Algas marinas\r
03313310;Algas\r
03320000;Ganado y animales pequeños\r
03321000;Ganado bovino\r
03321100;Bovinos adultos\r
03321200;Terneros\r
03322000;Ganado no bovino\r
03322100;Ovejas\r
03322200;Cabras\r
03322300;Caballos\r
03323000;Cerdos\r
03324000;Aves de corral vivas\r
03325000;Animales pequeños\r
03325100;Conejos\r
03325200;Liebres\r
03330000;Productos de animales de granja\r
03331000;Leche fresca de oveja y de cabra\r
03331100;Leche de oveja\r
03331200;Leche de cabra\r
03332000;Lana y pelo de animales\r
03332100;Lana de esquila\r
03332200;Pelo de animal\r
03333000;Leche fresca de vaca\r
03340000;Marcas auriculares para animales\r
03341000;Marcas auriculares para ganado bovino\r
03400000;Productos de la silvicultura y de la explotación forestal\r
03410000;Madera\r
03411000;Madera de coníferas\r
03412000;Madera de especies tropicales\r
03413000;Madera para calefacción\r
03414000;Madera en bruto\r
03415000;Madera blanda\r
03416000;Residuos de madera\r
03417000;Madera de desecho\r
03417100;Serrín\r
03418000;Troncos\r
03418100;Madera dura\r
03419000;Madera de construcción\r
03419100;Productos de madera\r
03419200;Madera de mina\r
03420000;Gomas\r
03421000;Bálsamos\r
03422000;Laca\r
03430000;Corcho\r
03431000;Corcho natural\r
03432000;Artículos de cestería\r
03432100;Artículos de espartería\r
03440000;Productos de la silvicultura\r
03441000;Plantas, hierbas, musgos o líquenes para uso ornamental\r
03450000;Productos de vivero\r
03451000;Plantas\r
03451100;Plantas para trasplantar\r
03451200;Bulbos florales\r
03451300;Arbustos\r
03452000;Árboles\r
03460000;Pasta de celulosa\r
03461000;Pasta de madera\r
03461100;Pasta química de madera\r
09000000;Derivados del petróleo, combustibles, electricidad y otras fuentes de energía\r
09100000;Combustibles\r
09110000;Combustibles sólidos\r
09111000;Carbón y combustibles derivados del carbón\r
09111100;Carbón\r
09111200;Combustibles derivados del carbón\r
09111210;Antracita\r
09111220;Briquetas\r
09111300;Combustibles fósiles\r
09111400;Combustibles de madera\r
09112000;Lignito y turba\r
09112100;Lignito\r
09112200;Turba\r
09113000;Coque\r
09120000;Combustibles gaseosos\r
09121000;Gas de hulla, gas de red o gases similares\r
09121100;Gas de hulla o gases similares\r
09121200;Gas de red\r
09122000;Propano y butano\r
09122100;Gas propano\r
09122110;Gas propano licuado\r
09122200;Gas butano\r
09122210;Gas butano licuado\r
09123000;Gas natural\r
09130000;Petróleo y destilados\r
09131000;Queroseno de aviación\r
09131100;Combustibles tipo queroseno para reactores\r
09132000;Gasolina\r
09132100;Gasolina sin plomo\r
09132200;Gasolina con plomo\r
09132300;Gasolina con etanol\r
09133000;Gas licuado del petróleo (GLP)\r
09134000;Gasóleos\r
09134100;Gasoil\r
09134200;Combustible para motores diésel\r
09134210;Combustible para motores diésel (0.2)\r
09134220;Combustible para motores diésel (EN 590)\r
09134230;Biodiésel\r
09134231;Biodiésel (B20)\r
09134232;Biodiésel (B100)\r
09135000;Aceites combustibles\r
09135100;Petróleo para calefacción\r
09135110;Aceites combustibles con bajo contenido de azufre\r
09200000;Productos del petróleo, del carbón y de aceites minerales\r
09210000;Preparados lubricantes\r
09211000;Aceites lubricantes y agentes lubricantes\r
09211100;Aceites para motores\r
09211200;Aceites para compresores\r
09211300;Aceites para turbinas\r
09211400;Aceites para engranajes\r
09211500;Aceites para reductores\r
09211600;Aceites para sistemas hidráulicos y otros usos\r
09211610;Líquidos para uso hidráulico\r
09211620;Aceites de desmoldado\r
09211630;Aceites anticorrosión\r
09211640;Aceites para aislamiento eléctrico\r
09211650;Líquidos de frenos\r
09211700;Aceites blancos y parafinas líquidas\r
09211710;Aceites blancos\r
09211720;Parafinas líquidas\r
09211800;Aceites de petróleo y preparados\r
09211810;Aceites ligeros\r
09211820;Aceites de petróleo\r
09211900;Aceites lubricantes para motores de tracción\r
09220000;Vaselina, ceras de petróleo y gasolinas especiales\r
09221000;Vaselina y ceras de petróleo\r
09221100;Vaselina\r
09221200;Parafina\r
09221300;Cera de petróleo\r
09221400;Residuos de petróleo\r
09222000;Gasolinas especiales\r
09222100;Trementina mineral\r
09230000;Petróleo (crudo)\r
09240000;Productos derivados del carbón o de aceites minerales\r
09241000;Esquistos bituminosos o petrolíferos\r
09242000;Productos derivados del carbón\r
09242100;Aceite de alquitrán\r
09300000;Electricidad, calefacción, energías solar y nuclear\r
09310000;Electricidad\r
09320000;Vapor, agua caliente y productos afines\r
09321000;Agua caliente\r
09322000;Vapor\r
09323000;Calefacción urbana\r
09324000;Calefacción a larga distancia\r
09330000;Energía solar\r
09331000;Placas solares\r
09331100;Captadores solares para la producción de calor\r
09331200;Módulos solares fotovoltaicos\r
09332000;Instalación solar\r
09340000;Combustibles nucleares\r
09341000;Uranio\r
09342000;Plutonio\r
09343000;Materiales radiactivos\r
09344000;Radioisótopos\r
14000000;Productos de la minería, de metales de base y productos afines\r
14200000;Arena y arcilla\r
14210000;Grava, arena, piedras machacadas y agregados\r
14211000;Arena\r
14211100;Arena natural\r
14212000;Gránulos, gravilla, polvo de piedra, guijarros, grava, piedras partidas y machacadas, mezclas de piedra, mezclas arenarava y demás agregados\r
14212100;Guijarros y grava\r
14212110;Grava\r
14212120;Guijarros\r
14212200;Agregados\r
14212210;Mezcla arenarava\r
14212300;Piedra partida y machacada\r
14212310;Balasto\r
14212320;Granito machacado\r
14212330;Basalto machacado\r
14212400;Suelo\r
14212410;Tierra vegetal\r
14212420;Subsuelo\r
14212430;Gravilla\r
14213000;Macadán, macadán bituminoso y arenas bituminosas\r
14213100;Macadán\r
14213200;Macadán bituminoso\r
14213300;Arenas bituminosas\r
14220000;Arcilla y caolín\r
14221000;Arcilla\r
14222000;Caolín\r
14300000;Minerales químicos y abonos minerales\r
14310000;Abonos minerales\r
14311000;Calcio natural, fosfato aluminocálcico y sales de potasio natural en bruto\r
14311100;Calcio natural\r
14311200;Fosfatos aluminocálcicos\r
14311300;Sales de potasio natural en bruto\r
14312000;Piritas de hierro\r
14312100;Piritas de hierro sin tostar\r
14320000;Minerales químicos\r
14400000;Sal y cloruro de sodio puro\r
14410000;Sal gema\r
14420000;Sal marina\r
14430000;Sal evaporada y cloruro de sodio puro\r
14450000;Salmuera\r
14500000;Productos relacionados con la explotación de minas y canteras\r
14520000;"Piedras preciosas y semipreciosas; piedra pómez; esmeril; abrasivos naturales; otros minerales y metales preciosos"\r
14521000;Piedras preciosas y semipreciosas\r
14521100;Piedras preciosas\r
14521140;Polvillo o polvo de piedras preciosas\r
14521200;Piedras semipreciosas\r
14521210;Polvillo o polvo de piedras semipreciosas\r
14522000;"Diamantes industriales; piedra pómez; esmeril y otros abrasivos naturales"\r
14522100;Piedra pómez\r
14522200;Diamantes industriales\r
14522300;Esmeril\r
14522400;Abrasivos naturales\r
14523000;Minerales conexos, metales preciosos y productos afines\r
14523100;Minerales\r
14523200;Oro\r
14523300;Plata\r
14523400;Platino\r
14600000;Minerales metálicos y aleaciones\r
14610000;Minerales metálicos\r
14611000;Minerales de hierro\r
14612000;Minerales metálicos no ferrosos\r
14612100;Minerales de cobre\r
14612200;Minerales de níquel\r
14612300;Minerales de aluminio\r
14612400;Minerales de metales preciosos\r
14612500;Minerales de plomo\r
14612600;Minerales de zinc\r
14612700;Minerales de estaño\r
14613000;Minerales de uranio y torio\r
14613100;Minerales de uranio\r
14613200;Minerales de torio\r
14614000;Minerales diversos\r
14620000;Aleaciones\r
14621000;Ferroaleaciones\r
14621100;Ferroaleaciones distintas de las de la CECA\r
14621110;Ferromanganeso\r
14621120;Ferrocromo\r
14621130;Ferroníquel\r
14622000;Acero\r
14630000;Escoria y batiduras, desperdicios y desechos ferrosos\r
14700000;Metales comunes\r
14710000;Hierro, plomo, zinc, estaño y cobre\r
14711000;Hierro\r
14711100;Fundición en bruto\r
14712000;Plomo\r
14713000;Zinc\r
14714000;Estaño\r
14715000;Cobre\r
14720000;Aluminio, níquel, escandio, titanio y vanadio\r
14721000;Aluminio\r
14721100;Óxido de aluminio\r
14722000;Níquel\r
14723000;Escandio\r
14724000;Titanio\r
14725000;Vanadio\r
14730000;Cromo, manganeso, cobalto, itrio y circonio\r
14731000;Cromo\r
14732000;Manganeso\r
14733000;Cobalto\r
14734000;Itrio\r
14735000;Circonio\r
14740000;Molibdeno, tecnecio, rutenio y rodio\r
14741000;Molibdeno\r
14742000;Tecnecio\r
14743000;Rutenio\r
14744000;Rodio\r
14750000;Cadmio, lutecio, hafnio, tantalio y wolframio\r
14751000;Cadmio\r
14752000;Lutecio\r
14753000;Hafnio\r
14754000;Tantalio\r
14755000;Wolframio\r
14760000;Iridio, galio, indio, talio y bario\r
14761000;Iridio\r
14762000;Galio\r
14763000;Indio\r
14764000;Talio\r
14765000;Bario\r
14770000;Cesio, estroncio, rubidio y calcio\r
14771000;Cesio\r
14772000;Estroncio\r
14773000;Rubidio\r
14774000;Calcio\r
14780000;Potasio, magnesio, sodio y litio\r
14781000;Potasio\r
14782000;Magnesio\r
14783000;Sodio\r
14784000;Litio\r
14790000;Niobio, osmio, renio y paladio\r
14791000;Niobio\r
14792000;Osmio\r
14793000;Renio\r
14794000;Paladio\r
14800000;Productos minerales no metálicos diversos\r
14810000;Productos abrasivos\r
14811000;Muelas, piedras y ruedas de amolar\r
14811100;Muelas\r
14811200;Piedras de amolar\r
14811300;Ruedas de amolar\r
14812000;Abrasivos en polvo o en grano\r
14813000;Corindón artificial\r
14814000;Grafito artificial\r
14820000;Vidrio\r
14830000;Fibras de vidrio\r
14900000;Materias primas secundarias de recuperación\r
14910000;Materias primas metálicas secundarias de recuperación\r
14920000;Materias primas no metálicas secundarias de recuperación\r
14930000;Cenizas y residuos que contengan metales\r
15000000;Alimentos, bebidas, tabaco y productos afines\r
15100000;Productos de origen animal, carne y productos cárnicos\r
15110000;Carne\r
15111000;Carne de bovino\r
15111100;Carne de vaca\r
15111200;Carne de ternera\r
15112000;Aves de corral\r
15112100;Aves de corral frescas\r
15112110;Gansos\r
15112120;Pavos\r
15112130;Pollos\r
15112140;Patos\r
15112300;Hígados de aves de corral\r
15112310;Foie gras\r
15113000;Carne de cerdo\r
15114000;Despojos\r
15115000;Cordero y carnero\r
15115100;Cordero\r
15115200;Carnero\r
15117000;Carne de cabra\r
15118000;Carne de caballo, asno, mulo o burdégano\r
15118100;Carne de caballo\r
15118900;Carne de asno, mulo o burdégano\r
15119000;Carnes diversas\r
15119100;Carne de conejo\r
15119200;Carne de liebre\r
15119300;Caza\r
15119400;Ancas de rana\r
15119500;Palomas\r
15119600;Carne de pescado\r
15130000;Productos cárnicos\r
15131000;Conservas y preparaciones cárnicas\r
15131100;Productos a base de carne para embutidos\r
15131110;Carne para embutidos\r
15131120;Productos de charcutería\r
15131130;Embutidos\r
15131134;Morcillas y otros embutidos de sangre\r
15131135;Embutidos de carne de ave\r
15131200;Carne seca, salada, ahumada o condimentada\r
15131210;Jamón ahumado\r
15131220;Beicon\r
15131230;Salami\r
15131300;Preparaciones a base de hígado\r
15131310;Paté\r
15131320;Preparaciones a base de hígado de ganso o de pato\r
15131400;Productos a base de carne de cerdo\r
15131410;Jamón\r
15131420;Albóndigas\r
15131490;Platos preparados con carne de cerdo\r
15131500;Productos de volatería\r
15131600;Productos a base de carne de vaca y de ternera\r
15131610;Albóndigas de carne de vaca\r
15131620;Carne picada de vaca\r
15131640;Hamburguesas de carne de vaca\r
15131700;Preparaciones a base de carne\r
15200000;Pescado preparado y en conserva\r
15210000;Filetes de pescado, hígados y huevas de pescado\r
15211000;Filetes de pescado\r
15211100;Filetes de pescado fresco\r
15212000;Huevas\r
15213000;Hígados de pescado\r
15220000;Pescado, filetes de pescado y otros tipos de carne de pescado congelados\r
15221000;Pescado congelado\r
15229000;Productos congelados de pescados\r
15230000;"Pescado seco o salado; en salmuera; ahumado"\r
15231000;Pescado seco\r
15232000;Pescado salado\r
15233000;Pescado en salmuera\r
15234000;Pescado ahumado\r
15235000;Conservas de pescado\r
15240000;Pescado en conserva o en lata y otros pescados preparados o en conserva\r
15241000;Pescado empanado, en conserva o en lata\r
15241100;Salmón en conserva\r
15241200;Arenques preparados o en conserva\r
15241300;Sardinas\r
15241400;Atún en conserva\r
15241500;Caballa\r
15241600;Anchoas\r
15241700;Palitos de pescado\r
15241800;Preparaciones a base de pescado empanado\r
15242000;Platos de pescado preparados\r
15243000;Preparaciones a base de pescado\r
15244000;Caviar y huevos de peces\r
15244100;Caviar\r
15244200;Huevos de peces\r
15250000;Mariscos\r
15251000;Crustáceos congelados\r
15252000;Crustáceos preparados o en conserva\r
15253000;Productos a base de moluscos\r
15300000;Frutas, legumbres y hortalizas y productos conexos\r
15310000;Patatas y productos a base de patatas\r
15311000;Patatas congeladas\r
15311100;Patatas fritas\r
15311200;Patatas en dados, en rodajas y otras, congeladas\r
15312000;Productos a base de patatas\r
15312100;Puré de patatas instantáneo\r
15312200;Patatas prefritas\r
15312300;Hojuelas de patatas\r
15312310;Hojuelas de patatas condimentadas\r
15312400;Aperitivos a base de patatas\r
15312500;Croquetas de patatas\r
15313000;Patatas elaboradas\r
15320000;Zumos de frutas y hortalizas\r
15321000;Zumos de frutas\r
15321100;Zumo de naranja\r
15321200;Zumo de pomelo\r
15321300;Zumo de limón\r
15321400;Zumo de piña\r
15321500;Zumo de uva\r
15321600;Zumo de manzana\r
15321700;Mezclas de zumos no concentrados\r
15321800;Zumos concentrados\r
15322000;Zumos de hortalizas\r
15322100;Zumo de tomate\r
15330000;Frutas y hortalizas elaboradas\r
15331000;Legumbres y hortalizas elaboradas\r
15331100;Legumbres y hortalizas frescas o congeladas\r
15331110;Hortalizas de raíz elaboradas\r
15331120;Hortalizas de tubérculo elaboradas\r
15331130;Judías, guisantes, pimientos, tomates y las demás legumbres y hortalizas\r
15331131;Judías elaboradas\r
15331132;Guisantes elaborados\r
15331133;Guisantes partidos\r
15331134;Tomates elaborados\r
15331135;Setas elaboradas\r
15331136;Pimientos elaborados\r
15331137;Brotes de soja\r
15331138;Trufas\r
15331140;Hortalizas de hoja y coles\r
15331142;Repollos elaborados\r
15331150;Legumbres elaboradas\r
15331170;Legumbres y hortalizas congeladas\r
15331400;Legumbres y hortalizas en conserva y/o enlatadas\r
15331410;Judías en salsa de tomate\r
15331411;Judías blancas cocidas, en salsa de tomate\r
15331420;Tomates en conserva\r
15331423;Tomates enlatados\r
15331425;Puré de tomate\r
15331427;Puré de tomate concentrado\r
15331428;Salsa de tomate\r
15331430;Champiñones enlatados\r
15331450;Aceitunas elaboradas\r
15331460;Legumbres y hortalizas enlatadas\r
15331461;Coles fermentadas enlatadas\r
15331462;Guisantes enlatados\r
15331463;Alubias desvainadas enlatadas\r
15331464;Judías verdes enteras enlatadas\r
15331465;Espárragos enlatados\r
15331466;Aceitunas enlatadas\r
15331470;Maíz dulce\r
15331480;Legumbres y hortalizas conservadas provisionalmente\r
15331500;Hortalizas en vinagre\r
15332000;Frutas y frutos de cáscara elaborados\r
15332100;Frutas elaboradas\r
15332140;Manzanas elaboradas\r
15332150;Peras elaboradas\r
15332160;Plátanos elaborados\r
15332170;Ruibarbo\r
15332180;Melones\r
15332200;"Compotas y mermeladas; jaleas de fruta; purés y pastas de fruta o de frutos de cáscara"\r
15332230;Mermeladas\r
15332231;Mermelada de naranja\r
15332232;Mermelada de limón\r
15332240;Jaleas de fruta\r
15332250;Pastas de fruta\r
15332260;Pasta de frutos de cáscara\r
15332261;Mantequilla de cacahuete\r
15332270;Purés de fruta\r
15332290;Compotas\r
15332291;Compota de albaricoque\r
15332292;Compota de zarzamora\r
15332293;"Compota de grosella negra ""casis"""\r
15332294;Compota de cereza\r
15332295;Compota de frambuesa\r
15332296;Compota de fresa\r
15332300;Frutos de cáscara elaborados\r
15332310;Frutos de cáscara tostados o salados\r
15332400;Conservas de fruta\r
15332410;Fruta seca\r
15332411;Pasas de Corinto elaboradas\r
15332412;Pasas elaboradas\r
15332419;Sultaninas\r
15333000;Subproductos de hortalizas\r
15400000;Aceites y grasas animales o vegetales\r
15410000;Aceites y grasas animales o vegetales en bruto\r
15411000;Aceites animales o vegetales\r
15411100;Aceites vegetales\r
15411110;Aceite de oliva\r
15411120;Aceite de sésamo\r
15411130;Aceite de cacahuete\r
15411140;Aceite de coco\r
15411200;Aceite de cocina\r
15411210;Aceite para freír\r
15412000;Grasas\r
15412100;Grasas animales\r
15412200;Grasas vegetales\r
15413000;Residuos sólidos de grasas o aceites vegetales\r
15413100;Torta de oleaginosas\r
15420000;Aceites y grasas refinados\r
15421000;Aceites refinados\r
15422000;Grasas refinadas\r
15423000;Grasas o aceites hidrogenados o esterificados\r
15424000;Ceras vegetales\r
15430000;Grasas comestibles\r
15431000;Margarina y preparaciones similares\r
15431100;Margarina\r
15431110;Margarina líquida\r
15431200;Productos para untar de contenido graso bajo o reducido\r
15500000;Productos lácteos\r
15510000;Leche y nata (crema)\r
15511000;Leche\r
15511100;Leche pasteurizada\r
15511200;Leche esterilizada\r
15511210;Leche UHT\r
15511300;Leche descremada\r
15511400;Leche semidescremada\r
15511500;Leche entera\r
15511600;Leche condensada\r
15511700;Leche en polvo\r
15512000;Nata (crema)\r
15512100;Crema de leche, con un contenido de materias grasas, en peso, superior al 18 %\r
15512200;Crema de leche espesa, con un contenido de materias grasas, en peso, del 48 %\r
15512300;"Nata en grumos (""clotted cream""), con un contenido de materias grasas, en peso, igual o superior al 48 %"\r
15512900;Nata montada\r
15530000;Mantequilla\r
15540000;Queso\r
15541000;Queso de mesa\r
15542000;Queso fresco\r
15542100;Requesón\r
15542200;Quesos de pasta blanda\r
15542300;Queso feta\r
15543000;Queso rallado, en polvo, de pasta azul y otros quesos\r
15543100;Queso de pasta azul\r
15543200;Queso cheddar\r
15543300;Queso rallado\r
15543400;Queso parmesano\r
15544000;Queso de pasta dura\r
15545000;Quesos para untar\r
15550000;Productos lácteos diversos\r
15551000;Yogur y otros productos lácteos fermentados\r
15551300;Yogur\r
15551310;Yogur natural\r
15551320;Yogur aromatizado\r
15551500;Suero de mantequilla\r
15552000;Caseína\r
15553000;Lactosa o jarabe de lactosa\r
15554000;Suero de leche\r
15555000;Helados y productos similares\r
15555100;Helados\r
15555200;Sorbetes\r
15600000;Productos de molinería, almidones y productos de almidón\r
15610000;Productos de molinería\r
15611000;Arroz descascarillado\r
15612000;Harina de cereales o legumbres y productos conexos\r
15612100;Harina de trigo\r
15612110;Harina integral\r
15612120;Harina de panificación\r
15612130;Harina corriente\r
15612150;Harina para pastelería\r
15612190;Harina fermentante\r
15612200;Harina de cereales\r
15612210;Harina de maíz\r
15612220;Harina de arroz\r
15612300;Harinas y sémolas vegetales\r
15612400;Mezclas para la preparación de productos de panadería\r
15612410;Mezclas de pastelería\r
15612420;Mezclas para hornear\r
15612500;Productos de panadería\r
15613000;Productos a base de granos de cereales\r
15613100;Avena molida\r
15613300;Productos a base de cereales\r
15613310;Cereales preparados para desayuno\r
15613311;Copos de maíz\r
15613313;Muesli o equivalente\r
15613319;Trigo hinchado\r
15613380;Granos aplastados de avena\r
15614000;Arroz elaborado\r
15614100;Arroz de grano largo\r
15614200;Arroz molido\r
15614300;Arroz partido\r
15615000;Salvado\r
15620000;Almidones y productos amiláceos\r
15621000;Aceite de maíz\r
15622000;"Glucosa y productos a base de glucosa; fructosa y productos a base de fructosa"\r
15622100;Glucosa y productos a base de glucosa\r
15622110;Glucosa\r
15622120;Jarabe de glucosa\r
15622300;Fructosa y productos a base de fructosa\r
15622310;Fructosa\r
15622320;Preparaciones a base de fructosa\r
15622321;Soluciones de fructosa\r
15622322;Jarabe de fructosa\r
15623000;Almidones y féculas\r
15624000;Tapioca\r
15625000;Sémola\r
15626000;Natillas en polvo\r
15700000;Alimentos para el ganado\r
15710000;Alimentos preparados para animales de granja y otros animales\r
15711000;Alimentos para peces\r
15712000;Pienso seco\r
15713000;Alimentos para animales domésticos\r
15800000;Productos alimenticios diversos\r
15810000;Productos de panificación, pasteles y productos de pastelería frescos\r
15811000;Productos a base de pan\r
15811100;Pan\r
15811200;Panecillos\r
15811300;Cruasanes\r
15811400;"Tortitas (""crumpets"")"\r
15811500;Productos de panificación preparados\r
15811510;Bocadillos y emparedados\r
15811511;Bocadillos y emparedados preparados\r
15812000;Pasteles y productos de pastelería\r
15812100;Productos de pastelería\r
15812120;Empanadas\r
15812121;Empanadas de verduras\r
15812122;Empanadas dulces\r
15812200;Pasteles\r
15813000;Productos para el desayuno\r
15820000;"Biscotes y galletas; pasteles y productos de pastelería conservados"\r
15821000;Productos de pan tostado y de pastelería\r
15821100;Productos de pan tostado\r
15821110;Pan tostado\r
15821130;Galletas crocantes\r
15821150;Biscotes\r
15821200;Galletas dulces\r
15830000;Azúcar y productos conexos\r
15831000;Azúcar\r
15831200;Azúcar blanco\r
15831300;Azúcar y jarabe de arce\r
15831400;Melazas\r
15831500;Jarabes de azúcar\r
15831600;Miel\r
15832000;Residuos de la industria azucarera\r
15833000;Productos del azúcar\r
15833100;Postres\r
15833110;Fondos de tarta\r
15840000;"Cacao; chocolate y productos de confitería"\r
15841000;Cacao\r
15841100;Pasta de cacao\r
15841200;Manteca, grasa o aceite de cacao\r
15841300;Cacao en polvo no azucarado\r
15841400;Cacao en polvo azucarado\r
15842000;Chocolate y artículos de confitería\r
15842100;Chocolate\r
15842200;Productos a base de chocolate\r
15842210;Chocolate para beber\r
15842220;Tabletas de chocolate\r
15842300;Artículos de confitería\r
15842310;Caramelos\r
15842320;Turrón\r
15842400;Frutas, frutos de cáscara o cáscaras de fruta conservados con azúcar\r
15850000;Pastas alimenticias\r
15851000;Productos farináceos\r
15851100;Pastas alimenticias sin cocer\r
15851200;Pastas alimenticias y cuscús preparados\r
15851210;Pastas alimenticias preparadas\r
15851220;Pastas alimenticias rellenas\r
15851230;Lasañas\r
15851250;Cuscús\r
15851290;Pastas alimenticias enlatadas\r
15860000;Café, té y productos conexos\r
15861000;Café\r
15861100;Café tostado\r
15861200;Café descafeinado\r
15862000;Sucedáneos del café\r
15863000;Té\r
15863100;Té verde\r
15863200;Té negro\r
15864000;Preparaciones de té o de mate\r
15864100;Bolsitas de té\r
15865000;Infusiones de hierbas\r
15870000;Condimentos y sazonadores\r
15871000;"Vinagre; salsas; condimentos compuestos; harina y polvo de mostaza; mostaza preparada"\r
15871100;Vinagre y sucedáneos del vinagre\r
15871110;Vinagre o equivalente\r
15871200;Salsas, condimentos compuestos y sazonadores compuestos\r
15871210;Salsa de soja\r
15871230;Ketchup\r
15871250;Mostaza\r
15871260;Salsas\r
15871270;Condimentos compuestos\r
15871273;Mayonesa\r
15871274;Productos para untar bocadillos\r
15871279;Chutney\r
15872000;Hierbas y especias\r
15872100;Pimienta\r
15872200;Especias\r
15872300;Hierbas\r
15872400;Sal\r
15872500;Jengibre\r
15880000;Productos alimenticios especiales\r
15881000;Preparaciones alimenticias homogeneizadas\r
15882000;Productos dietéticos\r
15884000;Alimentos infantiles\r
15890000;Productos alimenticios diversos y alimentos secos\r
15891000;Sopas y caldos\r
15891100;Sopas de carne\r
15891200;Sopas de pescado\r
15891300;Sopas compuestas\r
15891400;Sopas\r
15891410;Sopas instantáneas\r
15891500;Caldos\r
15891600;Concentrados de caldo\r
15891610;Caldos instantáneos\r
15891900;Sopas de verduras\r
15892000;Jugos y extractos vegetales, sustancias pépticas y espesantes\r
15892100;Jugos vegetales\r
15892200;Extractos vegetales\r
15892400;Espesantes\r
15893000;Productos secos\r
15893100;Mezclas para comidas\r
15893200;Mezclas para postres\r
15893300;Mezclas para salsas\r
15894000;Productos alimenticios elaborados\r
15894100;Comidas vegetarianas\r
15894200;Comidas preparadas\r
15894210;Comidas para colegios\r
15894220;Comidas para hospitales\r
15894300;Bandejas de comida preparada\r
15894400;Aperitivos\r
15894500;Productos para máquinas automáticas distribuidoras\r
15894600;Alimentos para bocadillos\r
15894700;Comestibles finos preparados\r
15895000;Productos para comida rápida\r
15895100;Hamburguesas\r
15896000;Productos congelados\r
15897000;Productos enlatados y raciones de campaña\r
15897100;Raciones de campaña\r
15897200;Productos enlatados\r
15897300;Paquetes de comida\r
15898000;Levadura\r
15899000;Polvos para hornear\r
15900000;Bebidas, tabaco y productos relacionados\r
15910000;Bebidas alcohólicas destiladas\r
15911000;Bebidas espirituosas\r
15911100;Aguardientes\r
15911200;Licores\r
15930000;Vinos\r
15931000;Vinos no aromatizados\r
15931100;Vino espumoso\r
15931200;Vino de mesa\r
15931300;Oporto\r
15931400;Vino de Madeira\r
15931500;Mosto de uva\r
15931600;Jerez\r
15932000;Heces de vino\r
15940000;Sidra y otros vinos a base de fruta\r
15941000;Sidra\r
15942000;Vinos a base de fruta\r
15950000;Bebidas fermentadas no destiladas\r
15951000;Vermut\r
15960000;Cerveza de malta\r
15961000;Cerveza\r
15961100;"Cerveza ""lager"""\r
15962000;Heces de cervecería o destilería\r
15980000;Bebidas sin alcohol\r
15981000;Agua mineral\r
15981100;Agua mineral sin gas\r
15981200;Agua mineral con gas\r
15981300;Agua en estado sólido\r
15981310;Hielo\r
15981320;Nieve\r
15981400;Aguas minerales aromatizadas\r
15982000;Refrescos\r
15982100;Zumos de fruta concentrados\r
15982200;Leche chocolateada\r
15990000;Tabaco, productos de tabaco y artículos afines\r
15991000;Productos de tabaco\r
15991100;Cigarros puros\r
15991200;Cigarros pequeños\r
15991300;Cigarrillos\r
15992000;Tabaco\r
15992100;Tabaco manufacturado\r
15993000;Artículos de estanco\r
15994000;Papel de fumar y papel de filtro\r
15994100;Papel de fumar\r
15994200;Papel de filtro\r
16000000;Maquinaria agrícola\r
16100000;Máquinas, aparatos y artefactos agrícolas, hortícolas o silvícolas, para la preparación o el trabajo del suelo o para el cultivo\r
16110000;Arados o gradas de disco\r
16120000;Gradas, escarificadores, cultivadores, escardadoras o binadoras\r
16130000;Sembradoras, plantadoras o transplantadoras\r
16140000;Esparcidores de estiércol\r
16141000;Distribuidores de abono\r
16150000;Rodillos para césped o terrenos de deporte\r
16160000;Equipo diverso para jardinería\r
16300000;Cosechadoras\r
16310000;Máquinas segadoras\r
16311000;Cortadoras de césped\r
16311100;Cortadoras de césped para jardines, parques o terrenos de deporte\r
16320000;Máquinas para henificar\r
16330000;Prensas para paja o forraje\r
16331000;Prensas recogedoras\r
16340000;Cosechadoras y trilladoras\r
16400000;Aparatos de pulverizar para la agricultura o la horticultura\r
16500000;Remolques y semirremolques, autocargadores o autodescargadores, para usos agrícolas\r
16510000;Remolques autocargadores para usos agrícolas\r
16520000;Remolques autodescargadores para usos agrícolas\r
16530000;Semirremolques autocargadores para usos agrícolas\r
16540000;Semirremolques autodescargadores para usos agrícolas\r
16600000;Maquinaria agrícola o forestal especializada\r
16610000;Máquinas para la limpieza o la clasificación de huevos, frutas u otros productos agrícolas\r
16611000;Máquinas para lavar productos agrícolas\r
16611100;Máquinas para lavar huevos\r
16611200;Máquinas para lavar frutas\r
16612000;Máquinas para seleccionar o clasificar productos agrícolas\r
16612100;Máquinas para seleccionar o clasificar huevos\r
16612200;Máquinas para seleccionar o clasificar fruta\r
16613000;Máquinas para la limpieza o la clasificación de semillas, granos o legumbres secas\r
16620000;Ordeñadoras\r
16630000;Máquinas para preparar alimentos para animales\r
16640000;Máquinas y aparatos para la apicultura\r
16650000;Máquinas y aparatos para la avicultura\r
16651000;Incubadoras y criadoras, para la avicultura\r
16700000;Tractores\r
16710000;Motocultores\r
16720000;Tractores usados\r
16730000;Motores de tracción\r
16800000;Partes de maquinaria agrícola y forestal\r
16810000;Partes de maquinaria agrícola\r
16820000;Partes de maquinaria forestal\r
18000000;Prendas de vestir, calzado, artículos de viaje y accesorios\r
18100000;Ropa de trabajo, ropa de trabajo especial y accesorios\r
18110000;Indumentaria de trabajo\r
18113000;Prendas de vestir para uso industrial\r
18114000;Monos\r
18130000;Ropa para trabajos especiales\r
18132000;Ropa de vuelo\r
18132100;Chaquetas de vuelo\r
18132200;Trajes de vuelo\r
18140000;Accesorios de ropa de trabajo\r
18141000;Guantes de trabajo\r
18142000;Viseras de seguridad\r
18143000;Indumentaria de protección\r
18200000;Ropa exterior\r
18210000;Abrigos\r
18211000;Capas\r
18212000;Capotes\r
18213000;Chaquetones cortavientos\r
18220000;Ropa para la intemperie\r
18221000;Ropa impermeable\r
18221100;Capas impermeables\r
18221200;Anoraks\r
18221300;Impermeables\r
18222000;Indumentaria corporativa\r
18222100;Trajes y vestidos\r
18222200;Conjuntos\r
18223000;Chaquetas y chaquetas deportivas\r
18223100;Chaquetas deportivas\r
18223200;Chaquetas\r
18224000;Prendas de vestir confeccionadas de tejidos impregnados o recubiertos\r
18230000;Ropa exterior diversa\r
18231000;Vestidos\r
18232000;Faldas\r
18233000;Pantalones cortos\r
18234000;Pantalones\r
18235000;Jerseys, cárdigans y artículos similares\r
18235100;Pullovers\r
18235200;Cárdigans\r
18235300;Chándales\r
18235400;Chalecos\r
18300000;Prendas de vestir\r
18310000;Ropa interior\r
18311000;Combinaciones\r
18312000;Calzoncillos\r
18313000;Bragas\r
18314000;Albornoces\r
18315000;Medias\r
18316000;Leotardos\r
18317000;Calcetines\r
18318000;Ropa de dormir\r
18318100;Camisas de dormir\r
18318200;Batas\r
18318300;Pijamas\r
18318400;Camisetas de punto\r
18318500;Camisones\r
18320000;Sostenes, corsés, ligas y prendas similares\r
18321000;Sostenes\r
18322000;Corsés\r
18323000;Ligas\r
18330000;Camisetas y camisas\r
18331000;Camisetas\r
18332000;Camisas\r
18333000;Polos\r
18400000;Prendas de vestir y accesorios especiales\r
18410000;Prendas de vestir especiales\r
18411000;Prendas para bebés\r
18412000;Ropa deportiva\r
18412100;Prendas para el entrenamiento deportivo\r
18412200;Camisas de deporte\r
18412300;Trajes de esquí\r
18412800;Trajes y pantalones de baño\r
18420000;Complementos de vestir\r
18421000;Pañuelos\r
18422000;Bufandas\r
18423000;Corbatas\r
18424000;Guantes\r
18424300;Guantes desechables\r
18424400;Manoplas\r
18424500;Guanteletes\r
18425000;Cinturones\r
18425100;Bandoleras\r
18440000;Sombreros y tocados\r
18441000;Sombreros\r
18443000;Artículos y complementos de sombrerería\r
18443100;Bandas antisudor\r
18443300;Artículos de sombrerería\r
18443310;Boinas\r
18443320;Gorras de campo\r
18443330;Capuchas\r
18443340;Gorras\r
18443400;Barboquejos para sombrerería\r
18443500;Viseras\r
18444000;Tocados de protección\r
18444100;Tocados de seguridad\r
18444110;Cascos\r
18444111;Cascos de protección\r
18444112;Cascos de ciclista\r
18444200;Cascos de seguridad\r
18450000;Cierres para prendas de vestir\r
18451000;Botones\r
18451100;Partes de botones\r
18452000;Imperdibles\r
18453000;Cremalleras\r
18500000;Joyas, relojes y artículos conexos\r
18510000;Joyas y artículos conexos\r
18511000;Piedras preciosas para joyería\r
18511100;Diamantes\r
18511200;Rubíes\r
18511300;Esmeraldas\r
18511400;Ópalos\r
18511500;Cuarzos\r
18511600;Turmalinas\r
18512000;Monedas y medallas\r
18512100;Monedas\r
18512200;Medallas\r
18513000;Artículos de joyería\r
18513100;Perlas\r
18513200;Artículos de orfebrería de oro\r
18513300;Artículos de metales preciosos\r
18513400;Artículos de piedras preciosas o semipreciosas\r
18513500;Artículos de orfebrería de plata\r
18520000;Relojería para uso personal\r
18521000;Relojes de pulsera o de bolsillo\r
18521100;Cristal para relojes de pulsera\r
18522000;Relojes de pulsera\r
18523000;Cronómetros\r
18530000;Regalos y premios\r
18600000;Pieles y artículos de piel\r
18610000;Artículos de piel\r
18611000;Pieles finas\r
18612000;Prendas de vestir de piel\r
18613000;Artículos de piel artificial\r
18620000;Pieles\r
18800000;Calzado\r
18810000;Calzado distinto del calzado deportivo y de protección\r
18811000;Calzado impermeable\r
18812000;Calzado con partes de caucho o de plástico\r
18812100;Sandalias con pala de caucho o de plástico\r
18812200;Botas de caucho\r
18812300;Calzado de vestir con pala de caucho o de plástico\r
18812400;Chancletas\r
18813000;Calzado con pala de cuero\r
18813100;Sandalias\r
18813200;Pantuflas\r
18813300;Calzado de vestir\r
18814000;Calzado con pala de materiales textiles\r
18815000;Botas\r
18815100;Botines\r
18815200;Botas de media caña\r
18815300;Botas altas\r
18815400;Botas de agua de caña alta\r
18816000;Chanclos\r
18820000;Calzado deportivo\r
18821000;Calzado de esquí\r
18821100;Calzado de esquí de fondo\r
18822000;Zapatillas de entrenamiento\r
18823000;Botas de media montaña, de serraje\r
18824000;Botas de fútbol\r
18830000;Calzado de protección\r
18831000;Calzado con puntera metálica de protección\r
18832000;Calzado especial\r
18832100;Calzado de vuelo\r
18840000;Partes de calzado\r
18841000;Palas de calzado\r
18842000;Suelas\r
18843000;Tacones\r
18900000;Artículos de viaje, talabartería, sacos y bolsas\r
18910000;Artículos de talabartería\r
18911000;Sillas de montar\r
18912000;Fustas\r
18913000;Látigos\r
18920000;Artículos de viaje\r
18921000;Maletas\r
18923000;Bolsas y billeteros\r
18923100;Bolsas pequeñas\r
18923200;Billeteros\r
18924000;Baúles\r
18925000;Portacantimploras y fundas\r
18925100;Portacantimploras\r
18925200;Fundas\r
18929000;Neceseres\r
18930000;Sacos y talegas\r
18931000;Sacos de viaje\r
18931100;Mochilas\r
18932000;Bolsas de deporte\r
18933000;Sacas y bolsas para correo\r
18933100;Valijas\r
18934000;Macutos\r
18935000;Bolsas para ropa sucia\r
18936000;Bolsas textiles\r
18937000;Sacos para embalaje\r
18937100;Bolsas para embalaje\r
18938000;Sobres acolchados\r
18939000;Bolsos de mano\r
19000000;Piel y textiles, materiales de plástico y caucho\r
19100000;Cuero\r
19110000;Cuero agamuzado\r
19120000;Cuero de bovinos o equinos\r
19130000;Cuero de oveja, cabra o cerdo\r
19131000;Piel de oveja o cordero\r
19132000;Piel de cabra o cabritilla\r
19133000;Cuero de cerdo\r
19140000;Piel de otros animales, cuero reconstituido y otros cueros\r
19141000;Cuero de otros animales\r
19142000;Cuero artificial o regenerado\r
19143000;Cuero de imitación\r
19144000;Charol\r
19160000;Correas de reloj\r
19170000;Artículos de cuero usados en maquinaria o aparatos mecánicos\r
19200000;Telas y artículos conexos\r
19210000;Tejidos\r
19211000;Tejidos sintéticos\r
19211100;Tejidos de mezcla\r
19212000;Tejidos de algodón\r
19212100;Cutí\r
19212200;"Tejidos de mezclilla (""denim"")"\r
19212300;Lona\r
19212310;Artículos de lona\r
19212400;Popelina\r
19212500;Cinchas\r
19212510;Cinchas y correas\r
19220000;Tejidos de lana\r
19230000;Tejidos de lino\r
19231000;Ropa blanca\r
19240000;Tejidos especiales\r
19241000;Terciopelo y felpa\r
19242000;Tejido de toalla con bucles\r
19243000;Tejidos para tapicería\r
19244000;Tejidos para cortinas\r
19245000;Tejidos de revestimiento\r
19250000;Tejidos de punto o de ganchillo\r
19251000;Tejidos de punto\r
19251100;Tejidos de terciopelo y felpa\r
19252000;Tejidos de ganchillo\r
19260000;Tela\r
19270000;Materias textiles no tejidas\r
19280000;Lana, cueros y pieles\r
19281000;Lana\r
19282000;Pieles de animal\r
19283000;Pieles y plumas de aves\r
19400000;Hilados e hilos textiles\r
19410000;Fibras textiles naturales\r
19420000;Fibras textiles artificiales\r
19430000;Hilados e hilos textiles de fibras naturales\r
19431000;Hilados de seda\r
19432000;Hilados de lana\r
19433000;Hilados de algodón\r
19434000;Hilados de lino\r
19435000;Hilos e hilados de coser de fibras naturales\r
19435100;Hilo de coser\r
19435200;Hilados para tejer\r
19436000;Hilados de fibras textiles vegetales\r
19440000;Hilados o hilos sintéticos\r
19441000;Hilados sintéticos\r
19442000;Hilos sintéticos\r
19442100;Hilos sintéticos de coser\r
19442200;Hilados sintéticos para tejer\r
19500000;Caucho y plásticos\r
19510000;Productos de caucho\r
19511000;Cámaras de aire, bandas de rodadura y fajas de protección de la cámara de aire, de caucho\r
19511100;Fajas de protección de la cámara de aire del neumático\r
19511200;Cámaras de aire\r
19511300;Bandas de rodadura de neumáticos\r
19512000;Artículos de caucho sin vulcanizar\r
19513000;Tejidos cauchutados\r
19513100;Tejidos para cuerdas de neumáticos\r
19513200;Cinta adhesiva de tejidos cauchutados\r
19514000;Caucho regenerado\r
19520000;Productos de plástico\r
19521000;Productos de poliestireno\r
19521100;Hojas de poliestireno\r
19521200;Losas de poliestireno\r
19522000;Resinas\r
19522100;Resina epoxi\r
19522110;Tubos de resina epoxi\r
19600000;Residuos de cuero, textiles, de caucho y de plástico\r
19610000;Residuos de cuero\r
19620000;Residuos textiles\r
19630000;Residuos de caucho\r
19640000;Sacos y bolsas de polietileno para residuos\r
19700000;Caucho y fibras sintéticos\r
19710000;Caucho sintético\r
19720000;Fibras sintéticas\r
19721000;Borra de filamentos sintéticos\r
19722000;Hilado de alta tenacidad\r
19723000;Hilado texturado sencillo\r
19724000;Monofilamento sintético\r
19730000;Fibras artificiales\r
19731000;Fibras artificiales discontinuas\r
19732000;Polipropileno\r
19733000;Hilado texturado artificial\r
22000000;Impresos y productos relacionados\r
22100000;Libros impresos, folletos y prospectos\r
22110000;Libros impresos\r
22111000;Libros escolares\r
22112000;Libros de texto\r
22113000;Libros para biblioteca\r
22114000;Diccionarios, mapas, libros de música y otros libros\r
22114100;Diccionarios\r
22114200;Atlas\r
22114300;Mapas\r
22114310;Mapas catastrales\r
22114311;Cianotipos\r
22114400;Música impresa\r
22114500;Enciclopedias\r
22120000;Publicaciones\r
22121000;Publicaciones técnicas\r
22130000;Guías\r
22140000;Prospectos\r
22150000;Folletos\r
22160000;Opúsculos\r
22200000;Periódicos, revistas especializadas, publicaciones periódicas y revistas\r
22210000;Periódicos\r
22211000;Revistas especializadas\r
22211100;Boletines oficiales\r
22212000;Publicaciones periódicas\r
22212100;Publicaciones por entregas\r
22213000;Revistas\r
22300000;Tarjetas postales, tarjetas de felicitación y otro material impreso\r
22310000;Tarjetas postales\r
22312000;Ilustraciones\r
22313000;Calcomanías\r
22314000;Diseños\r
22315000;Fotografías\r
22320000;Tarjetas de felicitación\r
22321000;Tarjetas de Navidad\r
22400000;Sellos, talonarios de cheques, billetes de banco, certificados de acciones, material de publicidad comercial, catálogos y manuales\r
22410000;Sellos\r
22411000;Sellos de Navidad\r
22412000;Sellos nuevos\r
22413000;Sellos de ahorro\r
22414000;Cuadernillos de sellos de correos\r
22420000;Papel timbrado\r
22430000;Billetes de banco\r
22440000;Talonarios de cheques\r
22450000;Impresos infalsificables\r
22451000;Pasaportes\r
22452000;Giros postales\r
22453000;Pegatinas del impuesto de circulación\r
22454000;Permisos de conducir\r
22455000;Carnés de identidad\r
22455100;Pulseras de identificación\r
22456000;Permisos\r
22457000;Tarjetas de entrada\r
22458000;Impresos por encargo\r
22459000;Billetes\r
22459100;Tiras y adhesivos publicitarios\r
22460000;Material de publicidad comercial, catálogos comerciales y manuales\r
22461000;Catálogos\r
22461100;Portalistas, portamenús y soportes análogos\r
22462000;Material de publicidad\r
22470000;Manuales\r
22471000;Manuales informáticos\r
22472000;Manuales de instrucciones\r
22473000;Manuales técnicos\r
22500000;Clisés o cilindros de imprenta u otros medios de impresión\r
22510000;Planchas offset\r
22520000;Equipo de grabado en seco\r
22521000;Equipo de estampado en relieve\r
22600000;Tinta\r
22610000;Tinta de imprenta\r
22611000;Tinta para huecograbado\r
22612000;Tinta china\r
22800000;Libros registro, libros de contabilidad, clasificadores, impresos y otros artículos de papelería, de papel o cartón\r
22810000;Libros registro de papel o cartón\r
22813000;Libros de contabilidad\r
22814000;Talonarios de recibos\r
22815000;Talonarios de notas\r
22816000;Blocs\r
22816100;Blocs de notas\r
22816200;Cuadernos de taquigrafía\r
22816300;Blocs de hojas adhesivas\r
22817000;Agendas u organizadores personales\r
22819000;Libros de direcciones\r
22820000;Formularios\r
22821000;Formularios electorales\r
22822000;Formularios comerciales\r
22822100;Formularios comerciales de papel continuo\r
22822200;Formularios comerciales en hojas sueltas\r
22830000;Cuadernos de ejercicios\r
22831000;Recambios para cuadernos escolares\r
22832000;Hojas para ejercicios\r
22840000;Álbumes para muestras\r
22841000;Álbumes para colecciones\r
22841100;Libros de sellos\r
22841200;Clasificadores para filatelia\r
22850000;Clasificadores y accesorios para clasificadores\r
22851000;Clasificadores\r
22852000;Carpetas\r
22852100;Cubiertas para documentos\r
22853000;Archivadores, bandejas portadocumentos y otros soportes análogos\r
22900000;Impresos varios\r
22990000;Papel de periódico, papeles fabricados a mano y otros papeles y cartones sin recubrir, para usos gráficos\r
22991000;Papel prensa\r
22992000;Papel o cartón hecho a mano\r
22993000;Papel y cartón fotosensibles, termosensibles o termográficos\r
22993100;Papel o cartón fotosensible\r
22993200;Papel o cartón termosensible\r
22993300;Papel o cartón termográfico\r
22993400;Papel o cartón ondulado\r
24000000;Productos químicos\r
24100000;Gases\r
24110000;Gases industriales\r
24111000;Hidrógeno, argón, gases nobles, nitrógeno y oxígeno\r
24111100;Argón\r
24111200;Gases nobles\r
24111300;Helio\r
24111400;Neón\r
24111500;Gases medicinales\r
24111600;Hidrógeno\r
24111700;Nitrógeno\r
24111800;Nitrógeno líquido\r
24111900;Oxígeno\r
24112000;Compuestos oxigenados inorgánicos\r
24112100;Dióxido de carbono\r
24112200;Óxidos de nitrógeno\r
24112300;Compuestos oxigenados inorgánicos gaseosos\r
24113000;Aire líquido y aire comprimido\r
24113100;Aire líquido\r
24113200;Aire comprimido\r
24200000;Tintes y pigmentos\r
24210000;Óxidos, peróxidos e hidróxidos\r
24211000;"Óxido y peróxido de zinc; óxido de titanio, tintes y pigmentos"\r
24211100;Óxido de zinc\r
24211200;Peróxido de zinc\r
24211300;Óxido de titanio\r
24212000;Óxidos e hidróxidos de cromo, de manganeso, de magnesio, de plomo y de cobre\r
24212100;Óxido de cromo\r
24212200;Óxido de manganeso\r
24212300;Óxido de plomo\r
24212400;Óxido de cobre\r
24212500;Óxido de magnesio\r
24212600;Hidróxidos para tintes y pigmentos\r
24212610;Hidróxido de cromo\r
24212620;Hidróxido de manganeso\r
24212630;Hidróxido de plomo\r
24212640;Hidróxido de cobre\r
24212650;Hidróxido de magnesio\r
24213000;Cal apagada\r
24220000;"Extractos curtientes o tintóreos; taninos y materias colorantes"\r
24221000;Extractos tintóreos\r
24222000;Extractos curtientes\r
24223000;Taninos\r
24224000;Materias colorantes\r
24225000;Preparados curtientes\r
24300000;Productos químicos inorgánicos y orgánicos básicos\r
24310000;Productos químicos inorgánicos básicos\r
24311000;Elementos químicos, ácidos inorgánicos y sus compuestos\r
24311100;Metaloides\r
24311110;Fosfuros\r
24311120;Carburos\r
24311130;Hidruros\r
24311140;Nitruros\r
24311150;Aziduros (azidas)\r
24311160;Siliciuros\r
24311170;Boruros\r
24311180;Azufre refinado\r
24311200;Halógeno\r
24311300;Metales alcalinos\r
24311310;Mercurio\r
24311400;"Cloruro de hidrógeno, ácidos inorgánicos; dióxido de silicio y dióxido de azufre"\r
24311410;Ácidos inorgánicos\r
24311411;Ácido sulfúrico\r
24311420;Ácido fosfórico\r
24311430;Ácidos polifosfóricos\r
24311440;Ácido hexafluorosilícico\r
24311450;Dióxido de azufre\r
24311460;Dióxido de silicio\r
24311470;Cloruro de hidrógeno\r
24311500;Hidróxidos en forma de sustancias químicas inorgánicas básicas\r
24311510;Óxidos metálicos\r
24311511;Piritas de hierro y óxidos de hierro\r
24311520;Hidróxido de sodio\r
24311521;Sosa cáustica\r
24311522;Lejía de sosa cáustica\r
24311600;Compuestos de azufre\r
24311700;Azufre\r
24311800;Carbono\r
24311900;Cloro\r
24312000;"Halogenatos metálicos; hipocloritos, cloratos y percloratos"\r
24312100;Halogenatos metálicos\r
24312110;Hexafluorosilicato de sodio\r
24312120;Cloruros\r
24312121;Cloruro de aluminio\r
24312122;Cloruro férrico\r
24312123;Policloruro de aluminio\r
24312130;Clorhidrato de aluminio\r
24312200;Hipocloritos y cloratos\r
24312210;Clorito de sodio\r
24312220;Hipoclorito de sodio\r
24313000;"Sulfuros, sulfatos; nitratos, fosfatos y carbonatos"\r
24313100;Sulfuros, sulfitos y sulfatos\r
24313110;Sulfuros diversos\r
24313111;Sulfuro de hidrógeno\r
24313112;Polisulfuros\r
24313120;Sulfatos\r
24313121;Tiosulfato de sodio\r
24313122;Sulfato férrico\r
24313123;Sulfato de aluminio\r
24313124;Sulfato de sodio\r
24313125;Sulfato de hierro\r
24313126;Sulfato de cobre\r
24313200;Fosfinatos, fosfonatos, fosfatos y polifosfatos\r
24313210;Hexametafosfato de sodio\r
24313220;Fosfatos\r
24313300;Carbonatos\r
24313310;Carbonato de sodio\r
24313320;Bicarbonato de sodio\r
24313400;Nitratos\r
24314000;Sales metálicas de ácidos diversas\r
24314100;Permanganato potásico\r
24314200;Sales de ácidos oxometálicos\r
24315000;Productos químicos inorgánicos diversos\r
24315100;Agua pesada, otros isótopos y sus compuestos\r
24315200;Cianuros, oxicianuros, fulminatos, cianatos, silicatos, boratos, perboratos, sales de ácidos inorgánicos\r
24315210;Cianuros\r
24315220;Oxicianuro\r
24315230;Fulminatos\r
24315240;Cianatos\r
24315300;Peróxido de hidrógeno\r
24315400;Cuarzo piezoeléctrico\r
24315500;Compuestos de metales del grupo de las tierras raras\r
24315600;Silicatos\r
24315610;Silicato de sodio\r
24315700;Boratos y perboratos\r
24316000;Agua destilada\r
24317000;Piedras sintéticas\r
24317100;Piedras preciosas sintéticas\r
24317200;Piedras semipreciosas sintéticas\r
24320000;Productos químicos orgánicos básicos\r
24321000;Hidrocarburos\r
24321100;Hidrocarburos saturados\r
24321110;Hidrocarburos acíclicos saturados\r
24321111;Metano\r
24321112;Etileno\r
24321113;Propeno\r
24321114;Buteno\r
24321115;Acetileno\r
24321120;Hidrocarburos cíclicos saturados\r
24321200;Hidrocarburos no saturados\r
24321210;Hidrocarburos acíclicos no saturados\r
24321220;Hidrocarburos cíclicos no saturados\r
24321221;Benceno\r
24321222;Tolueno\r
24321223;Oilenos\r
24321224;Milenos\r
24321225;Estireno\r
24321226;Etilbenceno\r
24321300;Otros derivados halogenados de hidrocarburos\r
24321310;Tetracloroetileno\r
24321320;Tetracloruro de carbono\r
24322000;"Alcoholes, fenoles, alcoholes fenólicos y sus derivados halogenados, sulfonados, nitrados o nitrosados; alcoholes grasos industriales"\r
24322100;Alcoholes grasos industriales\r
24322200;Monoalcoholes\r
24322210;Metanol\r
24322220;Etanol\r
24322300;Dioles, polialcoholes y sus derivados\r
24322310;Etilenglicol\r
24322320;Derivados de alcoholes\r
24322400;Fenoles y sus derivados\r
24322500;Alcohol\r
24322510;Alcohol etílico\r
24323000;Ácidos grasos monocarboxílicos industriales\r
24323100;Aceites ácidos de refinado\r
24323200;Ácidos carboxílicos\r
24323210;Ácido acético\r
24323220;Ácido peracético\r
24323300;Ácidos monocarboxílicos insaturados y sus compuestos\r
24323310;Ésteres de ácido metacrílico\r
24323320;Ésteres de ácido acrílico\r
24323400;Ácidos aromáticos policarboxílicos y carboxílicos\r
24324000;Compuestos orgánicos con funciones nitrogenadas\r
24324100;Compuestos con función amina\r
24324200;Compuestos aminados con funciones oxigenadas\r
24324300;Ureínas\r
24324400;Compuestos con funciones nitrogenadas\r
24325000;Tiocompuestos orgánicos\r
24326000;Aldehído, cetona, peróxidos orgánicos y éteres\r
24326100;Compuestos con función aldehído\r
24326200;Compuestos con función cetona y quinona\r
24326300;Peróxidos orgánicos\r
24326310;Óxido de etileno\r
24326320;Éteres\r
24327000;Productos químicos orgánicos diversos\r
24327100;Derivados vegetales para teñido\r
24327200;Carbón vegetal\r
24327300;Aceites y productos de la destilación del alquitrán de hulla a alta temperatura, brea y alquitrán de brea\r
24327310;Alquitrán de hulla\r
24327311;Creosota\r
24327320;Brea\r
24327330;Alquitrán de brea\r
24327400;Productos de resina\r
24327500;Lejías residuales de la fabricación de pasta de madera\r
24400000;Abonos y compuestos nitrogenados\r
24410000;Abonos nitrogenados\r
24411000;Ácido nítrico y sus sales\r
24411100;Nitrato de sodio\r
24412000;Ácidos sulfonítricos\r
24413000;Amoníaco\r
24413100;Amoníaco líquido\r
24413200;Cloruro amónico\r
24413300;Sulfato amónico\r
24420000;Abonos fosfatados\r
24421000;Abonos minerales fosfatados\r
24422000;Abonos químicos fosfatados\r
24430000;Abonos de origen animal o vegetal\r
24440000;Abonos diversos\r
24450000;Productos agroquímicos\r
24451000;Pesticidas\r
24452000;Insecticidas\r
24453000;Herbicidas\r
24454000;Reguladores del crecimiento de las plantas\r
24455000;Desinfectantes\r
24456000;Rodenticidas\r
24457000;Fungicidas\r
24500000;Materias plásticas en formas primarias\r
24510000;Polímeros de etileno en formas primarias\r
24520000;Polímeros de propileno en formas primarias\r
24530000;Polímeros de estireno en formas primarias\r
24540000;Polímeros de vinilo en formas primarias\r
24541000;Polímeros de acetato de vinilo en formas primarias\r
24542000;Polímeros acrílicos en formas primarias\r
24550000;Poliésteres en formas primarias\r
24560000;Poliamidas en formas primarias\r
24570000;Resinas ureicas en formas primarias\r
24580000;Resinas amínicas en formas primarias\r
24590000;Siliconas en formas primarias\r
24600000;Explosivos\r
24610000;Explosivos preparados\r
24611000;Pólvoras de carga de proyección\r
24611100;Propergoles, combustibles\r
24612000;Explosivos diversos\r
24612100;Dinamita\r
24612200;TNT\r
24612300;Nitroglicerina\r
24613000;Cohetes de señales, cohetes granífugos, señales para la niebla y artículos de pirotecnia\r
24613100;Cartuchos para espantar pájaros\r
24613200;Fuegos artificiales\r
24615000;Mechas, cápsulas, inflamadores y detonadores eléctricos\r
24900000;Productos químicos puros y otros productos químicos\r
24910000;Colas\r
24911000;Gelatinas\r
24911200;Adhesivos\r
24920000;Aceites esenciales\r
24930000;Productos químicos para fotografía\r
24931000;Placas y películas fotográficas\r
24931200;Emulsiones para uso fotográfico\r
24931210;Reveladores fotográficos\r
24931220;Fijadores fotográficos\r
24931230;Reveladores para radiografías\r
24931240;Fijadores para radiografías\r
24931250;Medios de cultivo\r
24931260;Intensificadores de imagen\r
24950000;Productos químicos para fines específicos\r
24951000;Grasas y lubricantes\r
24951100;Lubricantes\r
24951110;Lodo de perforación\r
24951120;Grasa de silicio\r
24951130;Fluidos de perforación\r
24951200;Aditivos para aceites\r
24951210;Polvo para extintores de incendios\r
24951220;Agentes para extintores de incendios\r
24951230;Cargas para extintores de incendios\r
24951300;Fluidos hidráulicos\r
24951310;Agentes para descongelar\r
24951311;Preparaciones anticongelantes\r
24951400;Grasas y aceites químicamente modificados\r
24952000;Pastas para modelar\r
24952100;Cera dental\r
24953000;Agentes de acabado\r
24954000;Carbón activado\r
24954100;Carbón activado nuevo\r
24954200;Carbón activado regenerado\r
24955000;Recipientes inodoros de sustancias químicas\r
24956000;Peptonas y sustancias proteicas\r
24957000;Aditivos químicos\r
24957100;Preparaciones aglutinantes para moldes o núcleos de fundición\r
24957200;Aditivos para cemento, mortero u hormigón\r
24958000;Productos químicos para la industria del petróleo y del gas\r
24958100;Productos químicos para fondo de pozo\r
24958200;Agentes floculantes\r
24958300;Productos químicos para lodos\r
24958400;Ampollas de gel para atraque de explosivos\r
24959000;Aerosoles y productos químicos en forma de disco\r
24959100;Aerosoles\r
24959200;Elementos químicos en forma de disco\r
24960000;Productos químicos diversos\r
24961000;Fluidos para radiador\r
24962000;Productos químicos para tratamiento del agua\r
24963000;Productos anticorrosión\r
24964000;Glicerol\r
24965000;Enzimas\r
30000000;Máquinas, equipo y artículos de oficina y de informática, excepto mobiliario y paquetes de software\r
30100000;Máquinas, equipo y artículos de oficina, excepto ordenadores, impresoras y mobiliario\r
30110000;Máquinas de tratamiento de textos\r
30111000;Procesadores de texto\r
30120000;Fotocopiadoras, máquinas offset e impresoras\r
30121000;Fotocopiadoras y aparatos termocopiadores\r
30121100;Fotocopiadoras\r
30121200;Equipo de fotocopiado\r
30121300;Equipo de reproducción\r
30121400;Máquinas de sacar copias\r
30121410;Conmutadores teléfonoax\r
30121420;Escáneres digitales con sistema de envío\r
30121430;Duplicadores digitales\r
30122000;Impresoras offset del tipo de las de oficina\r
30122100;Sistemas de impresión offset digital\r
30122200;Equipos de impresión offset digital\r
30123000;Máquinas de oficina\r
30123100;Máquinas para validación de billetes\r
30123200;Cajeros automáticos\r
30123300;Multicopistas\r
30123400;Máquinas de plegado\r
30123500;Perforadoras\r
30123600;Máquinas para la manipulación de monedas\r
30123610;Máquinas para clasificar monedas\r
30123620;Máquinas para contar monedas\r
30123630;Máquinas para empaquetar monedas\r
30124000;Partes y accesorios de máquinas de oficina\r
30124100;Fusores\r
30124110;Aceite para fusores\r
30124120;Fieltro limpiador del fusor\r
30124130;Lámparas del fusor\r
30124140;Almohadilla de limpieza del fusor\r
30124150;Filtros de fusor\r
30124200;Kits del fusor\r
30124300;Tambores de máquinas de oficina\r
30124400;Cartuchos de grapas\r
30124500;Accesorios para escáner\r
30124510;Endosadores para escáner\r
30124520;Alimentadores de documentos para escáner\r
30124530;Adaptadores de transparencias para escáner\r
30125000;Partes y accesorios de fotocopiadoras\r
30125100;Cartuchos de tóner\r
30125110;Tóner para faxes e impresoras láser\r
30125120;Tóner para fotocopiadoras\r
30125130;Tóner para centros de proceso de datos y centros de investigación y documentación\r
30130000;Equipo para oficinas de correos\r
30131000;Equipo para procesamiento de correspondencia\r
30131100;Máquinas para doblado de papel o sobres\r
30131200;Máquinas para rellenado de sobres\r
30131300;Máquinas para impresión de direcciones\r
30131400;Máquinas para franqueo\r
30131500;Máquinas abrecartas\r
30131600;Máquinas para cerrar el correo\r
30131700;Máquinas de matasellar\r
30131800;Máquinas pegadoras de sellos\r
30132000;Equipo para clasificación\r
30132100;Equipo para clasificación de correspondencia\r
30132200;Máquinas contadoras de billetes\r
30132300;Clasificadoras\r
30133000;Equipo para envío de correspondencia\r
30133100;Equipo para el envío de correspondencia en grandes cantidades\r
30140000;Máquinas de calcular y máquinas de contabilidad\r
30141000;Máquinas de calcular\r
30141100;Calculadoras de bolsillo\r
30141200;Calculadoras de oficina\r
30141300;Calculadoras impresoras\r
30141400;Sumadoras\r
30142000;Máquinas de contabilidad y cajas registradoras\r
30142100;Máquinas de contabilidad\r
30142200;Cajas registradoras\r
30144000;Máquinas del tipo de las de calcular\r
30144100;Máquinas de franquear\r
30144200;Máquinas expendedoras de billetes\r
30144300;Máquinas para contar vehículos\r
30144400;Sistema de cobro automático\r
30145000;Partes y accesorios de máquinas de calcular\r
30145100;Rollos de papel para calculadoras\r
30150000;Máquinas de escribir\r
30151000;Máquinas de escribir electrónicas\r
30152000;Partes y accesorios de máquinas de escribir\r
30160000;Tarjetas magnéticas\r
30161000;Tarjetas de crédito\r
30162000;Tarjetas inteligentes\r
30163000;Tarjetas de débito\r
30163100;Tarjetas para la compra de carburante\r
30170000;Etiquetadoras\r
30171000;Fechadores y numeradores\r
30172000;Máquinas para la impresión de tarjetas de identificación\r
30173000;Máquinas para la colocación de etiquetas\r
30174000;Máquinas para la elaboración de etiquetas\r
30175000;Equipos de rotulación\r
30176000;Rotuladoras manuales de cinta\r
30177000;Sistemas automáticos de etiquetado\r
30178000;Sistemas semiautomáticos de etiquetado\r
30179000;Dispensadores de etiquetas\r
30180000;Máquinas de escribir y endosar cheques\r
30181000;Endosadores de cheques\r
30182000;Máquinas de escribir cheques\r
30190000;Equipo y artículos de oficina diversos\r
30191000;Equipos de oficina excepto mobiliario\r
30191100;Equipo de archivo\r
30191110;Sistemas carrusel para clasificación de tarjetas\r
30191120;Revisteros\r
30191130;Portablocs de pinza\r
30191140;Accesorios para credenciales de identificación\r
30191200;Retroproyectores\r
30191400;Máquinas destructoras de documentos\r
30192000;Artículos de oficina\r
30192100;Gomas de borrar\r
30192110;Productos de tinta\r
30192111;Tampones\r
30192112;Tinta para impresoras\r
30192113;Cartuchos de tinta\r
30192121;Bolígrafos\r
30192122;Plumas estilográficas\r
30192123;Rotuladores con punta fibrosa\r
30192124;Rotuladores\r
30192125;Marcadores\r
30192126;Rotuladores técnicos\r
30192127;Portaplumas\r
30192130;Lápices\r
30192131;Portaminas\r
30192132;Minas para lápices y portaminas\r
30192133;Sacapuntas\r
30192134;Portalápices\r
30192150;Sellos de fecha\r
30192151;Sellos para lacrar\r
30192152;Sellos numeradores\r
30192153;Sellos de texto\r
30192154;Almohadillas de recambio para tampones de tinta\r
30192155;Portasellos\r
30192160;Correctores\r
30192170;Tableros de anuncios para oficina\r
30192200;Cintas métricas\r
30192300;Cintas entintadas\r
30192310;Cintas para máquinas de escribir\r
30192320;Cintas de impresora\r
30192330;Rodillos y cintas para calculadoras\r
30192340;Cintas térmicas para faxes\r
30192350;Cintas para cajas registradoras\r
30192400;Material de reprografía\r
30192500;Transparencias para retroproyectores\r
30192600;Tableros de dibujo\r
30192700;Papelería\r
30192800;Etiquetas autoadhesivas\r
30192900;Sistemas de corrección\r
30192910;Cinta o película correctora\r
30192920;Líquidos correctores\r
30192930;Lápices correctores\r
30192940;Recambios para correctores\r
30192950;Borradores eléctricos\r
30193000;Organizadores de despacho y accesorios\r
30193100;Cajas para organizar documentos\r
30193200;Bandejas para organizar documentos\r
30193300;Organizadores colgantes\r
30193400;Sujetalibros\r
30193500;Estante expositor\r
30193600;Soportes para agendas y calendarios\r
30193700;Cajas archivadoras\r
30193800;Portamensajes\r
30193900;Portacopias\r
30194000;Artículos de dibujo\r
30194100;Plantillas para curvas\r
30194200;Puntos, cintas y películas para diseño\r
30194210;Puntos o cintas de diseño\r
30194220;Películas (láminas) de diseño\r
30194300;Juegos, estuches y papeles para diseño\r
30194310;Juegos o estuches para diseño\r
30194320;Papeles para diseño\r
30194400;Cubiertas de mesas de dibujo\r
30194500;Artículos para rotulación\r
30194600;Transportadores de ángulos\r
30194700;Plantillas\r
30194800;Reglas en T y cartabones\r
30194810;Reglas en T\r
30194820;Cartabones\r
30194900;Cubiertas de protección de superficies de trabajo\r
30195000;Tableros\r
30195100;Tableros de planificación o accesorios\r
30195200;Tableros electrónicos o accesorios\r
30195300;Paneles de letras o accesorios\r
30195400;Pizarras de borrado en seco o accesorios\r
30195500;Pizarras o accesorios\r
30195600;Tablones de anuncios o accesorios\r
30195700;Equipos o accesorios para limpieza de pizarras y tableros\r
30195800;Rieles y soportes colgantes\r
30195900;Pizarras blancas y pizarras magnéticas\r
30195910;Tableros blancos\r
30195911;Accesorios para pizarras blancas\r
30195912;Caballetes para pizarras blancas\r
30195913;Caballetes para rotafolios\r
30195920;Pizarras magnéticas\r
30195921;Borradores para pizarras magnéticas\r
30196000;Planificadores\r
30196100;Planificadores de reuniones\r
30196200;Dietarios, agendas y sus recambios\r
30196300;Buzón de sugerencias\r
30197000;Material de oficina de pequeña envergadura\r
30197100;Grapas, chinchetas y alfileres\r
30197110;Grapas\r
30197120;Tachuelas\r
30197130;Chinchetas\r
30197200;Carpetas de anillas y clips para papeles\r
30197210;Carpetas de anillas\r
30197220;Clips para papeles\r
30197221;Portaclips\r
30197300;Abrecartas, grapadoras y perforadoras de papel\r
30197310;Abrecartas\r
30197320;Grapadoras\r
30197321;Quitagrapas\r
30197330;Perforadoras de papel\r
30197400;Esponja para sellos\r
30197500;Cera de lacrado\r
30197510;Accesorios para lacrado a la cera\r
30197600;Papel y cartón elaborados\r
30197610;Papel y cartón mixtos\r
30197620;Papel para escribir\r
30197621;Soporte para rotafolios\r
30197630;Papel de impresión\r
30197640;Papel autocopia u otros papeles para copiar\r
30197641;Papel termográfico\r
30197642;Papel para fotocopiadora y papel xerográfico\r
30197643;Papel para fotocopiadora\r
30197644;Papel xerográfico\r
30197645;Tarjetas para imprimir\r
30198000;Máquinas de lotería\r
30198100;Máquinas tragaperras\r
30199000;Artículos de papelería y otros artículos\r
30199100;Papel carbón, papel autocopia, clisés para multicopista y papel sin carbón\r
30199110;Papel carbón\r
30199120;Papel autocopia\r
30199130;Papel autocopiativo\r
30199140;Clisés para multicopista\r
30199200;Sobres, sobresarta y tarjetas postales sin ilustrar\r
30199210;Sobresarta\r
30199220;Tarjetas postales sin ilustrar\r
30199230;Sobres\r
30199240;Juegos de sobres para envíos de promoción y similares\r
30199300;Papel gofrado o perforado\r
30199310;Papel de impresión gofrado o perforado\r
30199320;Papel para escribir gofrado o perforado\r
30199330;Papel continuo para impresoras\r
30199340;Formularios continuos\r
30199400;Papel engomado o adhesivo\r
30199410;Papel autoadhesivo\r
30199500;Archivadores, clasificadores de cartas, cajas de almacenaje y artículos análogos\r
30199600;Separadores\r
30199700;Artículos de papelería impresos, excepto formularios\r
30199710;Sobres impresos\r
30199711;Sobres con ventana impresos\r
30199712;Sobres sin ventana impresos\r
30199713;Sobres para radiografías impresos\r
30199720;Papel de carta\r
30199730;Tarjetas de visita comerciales\r
30199731;Tarjeteros\r
30199740;Tarjetas de cortesía\r
30199750;Cupones\r
30199760;Etiquetas\r
30199761;Etiquetas de código de barras\r
30199762;Etiquetas para equipaje\r
30199763;Etiquetas antirrobo\r
30199770;Cheques restaurante\r
30199780;Cartapacios\r
30199790;Horarios\r
30199791;Planificadores de pared\r
30199792;Calendarios\r
30199793;Soporte de agenda\r
30200000;Equipo y material informático\r
30210000;Máquinas procesadoras de datos (hardware)\r
30211000;"Ordenador ""mainframe"""\r
30211100;Superordenador\r
30211200;Equipo informático de unidad central\r
30211300;Plataformas informáticas\r
30211400;Configuraciones informáticas\r
30211500;Unidad central de procesamiento (CPU) o procesadores\r
30212000;Equipo informático para miniordenadores\r
30212100;Unidades centrales de proceso para miniordenadores\r
30213000;Ordenadores personales\r
30213100;Ordenadores portátiles\r
30213200;Tabletas digitales\r
30213300;Ordenadores de mesa\r
30213400;Unidades centrales de proceso para ordenadores personales\r
30213500;Ordenadores de bolsillo\r
30214000;Puestos de trabajo\r
30215000;Equipo informático para microordenadores\r
30215100;Unidades centrales de proceso para microordenadores\r
30216000;Lectores magnéticos u ópticos\r
30216100;Lectores ópticos\r
30216110;Escáneres para uso informático\r
30216120;Equipo de reconocimiento óptico de caracteres\r
30216130;Lectores de códigos de barras\r
30216200;Lectores de tarjetas magnéticas\r
30216300;Lectores de tarjetas perforadas\r
30220000;Equipo de cartografía digital\r
30221000;Planos catastrales digitales\r
30230000;Equipo relacionado con la informática\r
30231000;Pantallas de ordenador y consolas\r
30231100;Terminales informáticos\r
30231200;Consolas\r
30231300;Pantallas de visualización\r
30231310;Monitores de pantalla plana\r
30231320;Monitores de pantalla táctil\r
30232000;Periféricos\r
30232100;Impresoras y trazadores gráficos\r
30232110;Impresoras láser\r
30232120;Impresoras matriciales de puntos\r
30232130;Impresoras para gráficos en color\r
30232140;Trazadores gráficos\r
30232150;Impresoras de chorro de tinta\r
30232600;Codificadores\r
30232700;Unidad central de control\r
30233000;Dispositivos multimedia de almacenamiento y lectura\r
30233100;Unidades de memoria\r
30233110;Unidades de memoria de tarjeta magnética\r
30233120;Unidades de memoria de cinta magnética\r
30233130;Unidades de memoria de disco magnético\r
30233131;Unidades de disco flexible\r
30233132;Unidades de disco duro\r
30233140;Dispositivos de memoria de acceso directo\r
30233141;Sistemas RAID (Redundant Array of Independent Disk)\r
30233150;Unidades de disco óptico\r
30233151;Reproductores o duplicadores de discos compactos (CD)\r
30233152;Reproductores o duplicadores de discos versátiles digitales (DVD)\r
30233153;Reproductores o duplicadores de discos compactos (CD) y discos versátiles digitales (DVD)\r
30233160;Bobinadores en continuo\r
30233161;Equipo para manipulación de casetes\r
30233170;Carruseles\r
30233180;Dispositivos de almacenamiento de memoria flash\r
30233190;Controlador de discos\r
30233300;Lectores de tarjetas inteligentes\r
30233310;Lectores de huellas dactilares\r
30233320;Lectores combinados de tarjetas inteligentes y huellas dactilares\r
30234000;Soportes de almacenamiento\r
30234100;Discos magnéticos\r
30234200;Discos ópticos\r
30234300;Discos compactos (CD)\r
30234400;Discos versátiles digitales (DVD)\r
30234500;Soportes de memoria\r
30234600;Memorias flash\r
30234700;Cintas magnéticas\r
30236000;Equipo informático diverso\r
30236100;Equipo para ampliación de memoria\r
30236110;Memorias RAM (Random Access Memory)\r
30236111;Memorias DRAM (Dynamic Random Access Memory)\r
30236112;Memorias SRAM (Static Random Access Memory)\r
30236113;Memorias SDRAM (Synchronous Dynamic Random Access Memory)\r
30236114;Memorias RDRAM (Rambus Dynamic Random Access Memory)\r
30236115;Memorias SGRAM (Synchronous Graphic Random Access Memory)\r
30236120;Memoria ROM (Read Only Memory)\r
30236121;Memoria PROM (Programmable Read Only Memory)\r
30236122;Memoria EPROM (Erasable Programmable Read Only Memory)\r
30236123;Memoria EEPROM (Electronically Erasable Programmable Read Only Memory)\r
30236200;Procesador de datos\r
30237000;Partes, accesorios y suministros para ordenadores\r
30237100;Partes de ordenadores\r
30237110;Interfaces de red\r
30237120;Puertos de ordenador\r
30237121;Puertos infrarrojos en serie\r
30237130;Fichas informáticas\r
30237131;Fichas electrónicas\r
30237132;Interfaces USB (Universal Serial Bus)\r
30237133;Adaptadores e interfaces PCMCIA (Personal Computer Memory Card International Association)\r
30237134;Tarjetas aceleradoras de gráficos\r
30237135;Tarjetas para interfaces de red\r
30237136;Tarjetas de sonido\r
30237140;Placas madre\r
30237200;Accesorios informáticos\r
30237210;Pantallas antideslumbrantes\r
30237220;Almohadillas para ratón\r
30237230;Memorias caché\r
30237240;Cámaras web\r
30237250;Accesorios para limpieza de ordenadores\r
30237251;Kits de limpieza de ordenadores\r
30237252;Limpiadores de aire comprimido\r
30237253;Fundas protectoras para equipos informáticos\r
30237260;Soportes murales para monitores\r
30237270;Maletines para ordenadores portátiles\r
30237280;Accesorios para la alimentación de corriente\r
30237290;Reposamuñecas para teclados\r
30237295;Membranas protectoras para teclados\r
30237300;Material informático\r
30237310;Cartuchos de conjuntos de caracteres para impresora\r
30237320;Disquetes\r
30237330;Cintas de audio digital (DAT)\r
30237340;Cartuchos DLT (Digital Linear Tape)\r
30237350;Cartuchos para almacenamiento de datos\r
30237360;Cartuchos LTO (Linear Tapepen)\r
30237370;Cartuchos grabadores\r
30237380;CDOM\r
30237400;Accesorios para introducción de datos\r
30237410;Ratón de ordenador\r
30237420;Joysticks\r
30237430;Lápices luminosos\r
30237440;Bolas rastreadoras\r
30237450;Tabletas gráficas\r
30237460;Teclados de ordenador\r
30237461;Teclados programables\r
30237470;Teclado Braille\r
30237475;Sensores eléctricos\r
30237480;Unidades de entrada\r
30238000;Equipo de automatización de biblioteca\r
31000000;"Máquinas, aparatos, equipo y productos consumibles eléctricos; iluminación"\r
31100000;Motores, generadores y transformadores eléctricos\r
31110000;Motores eléctricos\r
31111000;Adaptadores\r
31120000;Generadores\r
31121000;Grupos electrógenos\r
31121100;Grupos electrógenos con motor de encendido por compresión\r
31121110;Convertidores de potencia\r
31121111;Convertidores rotativos eléctricos\r
31121200;Grupos electrógenos con motor de encendido por chispa\r
31121300;Aerogeneradores\r
31121310;Molinos de viento\r
31121320;Turbinas eólicas\r
31121330;Generadores para turbinas eólicas\r
31121331;Rotores de turbina\r
31121340;Granja eólica\r
31122000;Generadores con máquina impulsora\r
31122100;Pilas de combustible\r
31124000;Generador de turbina de vapor y aparatos conexos\r
31124100;Juegos de generadores de turbina\r
31124200;Aparatos de control de generador de turbina\r
31126000;Dinamos\r
31127000;Generadores de emergencia\r
31128000;Turbogenerador\r
31130000;Alternadores\r
31131000;Motores monofásicos\r
31131100;Actuadores\r
31131200;Ánodos\r
31132000;Motores polifásicos\r
31140000;Torres de enfriamiento\r
31141000;Enfriadores de agua\r
31150000;Reactancias para lámparas o tubos de descarga\r
31151000;Convertidores estáticos\r
31153000;Rectificadores\r
31154000;Suministros ininterrumpidos de energía\r
31155000;Inversores\r
31156000;Suministros interrumpibles de energía\r
31157000;Inductores\r
31158000;Cargadores\r
31158100;Cargadores de baterías\r
31158200;Sobrealimentadores\r
31158300;Turbocargadores\r
31160000;Partes de motores, generadores y transformadores eléctricos\r
31161000;Partes de motores y generadores eléctricos\r
31161100;Sistemas de excitación\r
31161200;Sistemas de refrigeración por gas\r
31161300;Rotores de generadores\r
31161400;Sistemas de agua primaria\r
31161500;Sistemas de aceite de estanqueidad\r
31161600;Sistemas de agua de refrigeración del estátor\r
31161700;Partes de generadores de vapor\r
31161800;Partes de generadores de gas\r
31161900;Sistemas de control de tensión\r
31162000;Partes de transformadores, inductores y convertidores estáticos\r
31162100;Partes de condensadores\r
31170000;Transformadores\r
31171000;Transformadores dieléctricos líquidos\r
31172000;Transformadores de tensión\r
31173000;Transformador para aparatos de medida\r
31174000;Transformadores de corriente\r
31200000;Aparatos de distribución y control de electricidad\r
31210000;Aparatos eléctricos de conmutación o protección de circuitos eléctricos\r
31211000;Cuadros y cajas de fusibles\r
31211100;Cuadros de distribución eléctrica\r
31211110;Tableros de control\r
31211200;Cajas de fusibles\r
31211300;Fusibles\r
31211310;Cortacircuitos\r
31211320;Cajas de bornes para fusibles\r
31211330;Cables de fusibles\r
31211340;Abrazaderas y soportes para fusibles\r
31212000;Disyuntores\r
31212100;Disyuntores aéreos\r
31212200;Probadores de circuito\r
31212300;Disyuntores magnéticos\r
31212400;Minidisyuntores\r
31213000;Equipo de distribución\r
31213100;Cajas de distribución\r
31213200;Transformadores de distribución\r
31213300;Caja de distribución por cable\r
31213400;Sistema de distribución\r
31214000;Conmutadores\r
31214100;Interruptores\r
31214110;Interruptores aisladores\r
31214120;Interruptor de puesta a tierra\r
31214130;Interruptores de seguridad\r
31214140;Reóstatos\r
31214150;Interruptores de tambor\r
31214160;Interruptores de presión\r
31214170;Interruptores de palanca\r
31214180;Interruptores laterales\r
31214190;Limitadores de corriente\r
31214200;Interruptoreccionador\r
31214300;Instalaciones de conmutación de exterior\r
31214400;Interruptoreccionador de fusible\r
31214500;Cuadros eléctricos\r
31214510;Tableros de distribución\r
31214520;Celdas de media tensión\r
31215000;Limitadores de tensión\r
31216000;Dispositivos y equipos de protección contra rayos\r
31216100;Equipo de protección contra rayos\r
31216200;Pararrayos\r
31217000;Eliminadores de sobrevoltaje\r
31218000;Barras ómnibus\r
31219000;Cajas de protección\r
31220000;Componentes de circuitos eléctricos\r
31221000;Relés eléctricos\r
31221100;Relés de potencia\r
31221200;Relés de uso general\r
31221300;Relés con zócalo\r
31221400;Relés de alternadores de voltaje\r
31221500;Relés de mercurio\r
31221600;Relés temporizadores\r
31221700;Relés de sobrecarga\r
31223000;Portalámparas\r
31224000;Conexiones y elementos de contacto\r
31224100;Clavijas y tomas de corriente\r
31224200;Conectores coaxiales\r
31224300;Cajas de conexión\r
31224400;Cables de conexión\r
31224500;Terminales\r
31224600;Reguladores de intensidad luminosa\r
31224700;Cajas de empalmes\r
31224800;Kits de empalmes de cables\r
31224810;Cables alargadores\r
31230000;Partes de aparatos de distribución o control de electricidad\r
31300000;Hilos y cables aislados\r
31310000;Redes de distribución\r
31311000;Conexiones de red\r
31320000;Cables de distribución eléctrica\r
31321000;Líneas de energía eléctrica\r
31321100;Líneas aéreas de energía\r
31321200;Cables de baja y media tensión\r
31321210;Cables de baja tensión\r
31321220;Cables de media tensión\r
31321300;Cables de alta tensión\r
31321400;Cables subacuáticos\r
31321500;Cables submarinos\r
31321600;Cables blindados\r
31321700;Cables de señalización\r
31330000;Cable coaxial\r
31340000;Accesorios de cables, aislados\r
31341000;Tambores para cables, aislados\r
31342000;Empalmes para cables, aislados\r
31343000;Juntas para cables, aisladas\r
31344000;Casquillos para paso de cable, aislados\r
31350000;Conductores eléctricos para datos y control\r
31351000;Conductores eléctricos para sistemas de control de acceso\r
31400000;Acumuladores, pilas y baterías de pilas\r
31410000;Pilas\r
31411000;Baterías alcalinas\r
31420000;Baterías de pilas\r
31421000;Baterías de plomo\r
31422000;Paquetes de baterías\r
31430000;Acumuladores eléctricos\r
31431000;Acumuladores ácidos de plomo\r
31432000;Acumuladores de níqueladmio\r
31433000;Acumuladores de níquelierro\r
31434000;Acumuladores de litio\r
31440000;Baterías\r
31500000;Material de iluminación y lámparas eléctricas\r
31510000;Lámparas eléctricas de filamento\r
31511000;Lámparas de incandescencia halógenas de wolframio\r
31512000;Lámparas de incandescencia halógenas de wolframio\r
31512100;Lámparas halógenas lineales\r
31512200;Lámparas halógenas de cápsula\r
31512300;Lámparas halógenas dicroicas\r
31514000;Lámparas y tubos de descarga\r
31515000;Lámparas y tubos de rayos ultravioletas\r
31516000;Lámparas y tubos de rayos infrarrojos\r
31517000;Lámparas de arco eléctrico\r
31518000;Luces de señalización\r
31518100;Lámparas proyectantes\r
31518200;Equipo de alumbrado de emergencia\r
31518210;"Lámparas de keroseno (""stormlights"")"\r
31518220;Barras luminosas\r
31518300;Luces de techo\r
31518500;Lámparas de vapor de mercurio\r
31518600;Proyectores de luz\r
31519000;Neones y lámparas incandescentes\r
31519100;Lámparas incandescentes\r
31519200;Neones\r
31520000;Lámparas y accesorios de iluminación\r
31521000;Lámparas\r
31521100;Lámparas de escritorio\r
31521200;Lámparas de pie\r
31521300;Lámparas eléctricas portátiles\r
31521310;Luces de emergencia\r
31521320;Linternas\r
31521330;Lámparas eléctricas portátiles recargables\r
31522000;Luces para árbol de Navidad\r
31523000;Placas indicadoras y letreros luminosos\r
31523100;Luminosos publicitarios de neón\r
31523200;Señales de mensaje permanente\r
31523300;Placas indicadoras luminosas\r
31524000;Accesorios para iluminación de techo o de pared\r
31524100;Accesorios para iluminación de techo\r
31524110;Lámparas de quirófano\r
31524120;Lámparas de techo\r
31524200;Accesorios de iluminación mural\r
31524210;Apliques de pared\r
31527000;Focos\r
31527200;Luces para alumbrado exterior\r
31527210;Faroles\r
31527260;Sistemas de alumbrado\r
31527270;Alumbrado de plataformas\r
31527300;Luces para uso doméstico\r
31527400;Iluminación sumergible\r
31530000;Partes de lámparas y material de alumbrado\r
31531000;Bombillas\r
31531100;Lámparas y tubos\r
31532000;Partes de lámparas y accesorios de iluminación\r
31532100;Lámparas de tubo\r
31532110;Lámparas de tubo fluorescente\r
31532120;Lámparas fluorescentes compactas de tubo\r
31532200;Lámparas de anillo\r
31532210;Neones circulares\r
31532300;Lámparas de globo\r
31532310;Globos fluorescentes compactos\r
31532400;Casquillos\r
31532500;Cebadores para lámparas\r
31532510;Cebadores para lámparas fluorescentes\r
31532600;Reactores para lámparas\r
31532610;Reactores para lámparas fluorescentes\r
31532700;Pantallas de lámpara\r
31532800;Brazos de lámparas\r
31532900;Luces fluorescentes\r
31532910;Tubos fluorescentes\r
31532920;Bombillas y lámparas fluorescentes\r
31600000;Equipo y aparatos eléctricos\r
31610000;Material eléctrico para motores y vehículos\r
31611000;Juegos de cables\r
31612000;Cableados eléctricos para motores\r
31612200;Motores de arranque\r
31612300;Material eléctrico de señalización para motores\r
31612310;Luces intermitentes\r
31620000;Aparatos de señalización acústica o visual\r
31625000;Avisadores eléctricos de protección contra robos e incendios\r
31625100;Sistemas de detección de incendios\r
31625200;Sistemas de avisador de incendios\r
31625300;Sistemas de alarma antirrobo\r
31630000;Imanes\r
31640000;Máquinas y aparatos con una función propia\r
31642000;Aparatos para detección electrónica\r
31642100;Detectores de tuberías metálicas\r
31642200;Detectores de minas\r
31642300;Detectores de plásticos\r
31642400;Detectores de objetos no metálicos\r
31642500;Detectores de madera\r
31643000;Aceleradores de partículas\r
31643100;Aceleradores lineales\r
31644000;Registradores diversos de datos\r
31645000;Billares eléctricos\r
31650000;Accesorios de aislamiento\r
31651000;Cinta aislante\r
31660000;Electrodos de carbón\r
31670000;Partes eléctricas de maquinaria o aparatos\r
31671000;Ampollas abiertas de vidrio y tubos de rayos catódicos\r
31671100;Ampollas abiertas de vidrio\r
31671200;Tubos de rayos catódicos\r
31680000;Materiales y accesorios eléctricos\r
31681000;Accesorios eléctricos\r
31681100;Contactos eléctricos\r
31681200;Bombas eléctricas\r
31681300;Circuitos eléctricos\r
31681400;Componentes eléctricos\r
31681410;Materiales eléctricos\r
31681500;Dispositivos de realimentación\r
31682000;Artículos eléctricos\r
31682100;Cajas de electricidad\r
31682110;Tapas para cajas de electricidad\r
31682200;Tableros de instrumentos\r
31682210;Equipo de instrumentación y control\r
31682220;Paneles mezcladores\r
31682230;Paneles de visualización de gráficos\r
31682300;Equipo de media tensión\r
31682310;Cuadros de media tensión\r
31682400;Equipo eléctrico aéreo\r
31682410;Soportes de cables aéreos\r
31682500;Equipo de electricidad de emergencia\r
31682510;Sistemas de energía de emergencia\r
31682520;Sistemas de parada de emergencia\r
31682530;Fuentes de alimentación eléctrica de emergencia\r
31682540;Equipo de subestación\r
31700000;Material electrónico, electromecánico y electrotécnico\r
31710000;Equipo electrónico\r
31711000;Material electrónico\r
31711100;Componentes electrónicos\r
31711110;Transmisoreseceptores\r
31711120;Transductores\r
31711130;Resistencias\r
31711131;Resistencias eléctricas\r
31711140;Electrodos\r
31711150;Condensadores eléctricos\r
31711151;Condensadores fijos\r
31711152;Condensadores variables o regulables\r
31711154;Baterías de condensadores\r
31711155;Redes de condensadores\r
31711200;Marcadores electrónicos\r
31711300;Sistemas electrónicos de cronometraje\r
31711310;Sistema de registro de presencia\r
31711400;Válvulas y tubos\r
31711410;Tubos catódicos para receptores de televisión\r
31711411;Tubos de cámara de televisión\r
31711420;Tubos y equipo de microondas\r
31711421;Magnetrones\r
31711422;Equipo de microondas\r
31711423;Equipo radioeléctrico de microondas\r
31711424;Klistrones\r
31711430;Válvulas eléctricas\r
31711440;Válvulas y tubos receptores o amplificadores\r
31711500;Partes de conjuntos electrónicos\r
31711510;Partes de condensadores eléctricos\r
31711520;Partes de resistencias eléctricas, reóstatos y potenciómetros\r
31711530;Partes de lámparas, tubos y válvulas electrónicos\r
31712000;Maquinaria, aparatos y microsistemas microelectrónicos\r
31712100;Maquinaria y aparatos microelectrónicos\r
31712110;Circuitos integrados y microestructuras electrónicas\r
31712111;Tarjetas telefónicas\r
31712112;Tarjetas SIM\r
31712113;Tarjetas con circuitos integrados\r
31712114;Circuitos electrónicos integrados\r
31712115;Microestructuras\r
31712116;Microprocesadores\r
31712117;Paquetes de circuitos integrados\r
31712118;Zócalos o soportes de circuitos integrados\r
31712119;Protectores de circuitos integrados\r
31712200;Microsistemas\r
31712300;Circuitos impresos\r
31712310;Placas de circuito impreso, con elementos conductores y contactos\r
31712320;Placas de circuito impreso, sin elementos conductores ni contactos\r
31712330;Semiconductores\r
31712331;Células fotovoltaicas\r
31712332;Tiristores\r
31712333;Diacs\r
31712334;Triacs\r
31712335;Optoacopladores\r
31712336;Osciladores de cuarzo\r
31712340;Diodos\r
31712341;Diodos fotoemisores\r
31712342;Diodos de microondas o de pequeña señal\r
31712343;Diodos Zener\r
31712344;Diodos Schottky\r
31712345;Diodos túnel\r
31712346;Diodos fotosensibles\r
31712347;Diodos eléctricos o solares\r
31712348;Diodos láser\r
31712349;Diodos de radiofrecuencia\r
31712350;Transistores\r
31712351;Transistores fotosensibles\r
31712352;Transistores de efecto de campo\r
31712353;Transistor metalxidoemiconductor (MOSFET)\r
31712354;Chips de transistores\r
31712355;Transistores bipolares Darlington o de radiofrecuencia\r
31712356;Transistores uniunión\r
31712357;Transistores bipolares de rejilla aislada (IGTB)\r
31712358;Transistores de efecto de campo de unión (JFET)\r
31712359;Transistores bipolares de unión (BJT)\r
31712360;Cristales piezoeléctricos montados\r
31720000;Equipo electromecánico\r
31730000;Equipo electrotécnico\r
31731000;Material electrotécnico\r
31731100;Módulos\r
32000000;Equipos de radio, televisión, comunicaciones y telecomunicaciones y equipos conexos\r
32200000;Aparatos transmisores de radiotelefonía, radiotelegrafía, radiodifusión y televisión\r
32210000;Equipo de radiodifusión\r
32211000;Equipo de producción de radiodifusión\r
32220000;Aparatos transmisores de televisión sin receptor\r
32221000;Radiofaros\r
32222000;Aparatos de codificación de señales de vídeo\r
32223000;Aparatos transmisores de vídeo\r
32224000;Aparatos transmisores de televisión\r
32230000;Radiotransmisores con receptor\r
32231000;Aparatos de televisión en circuito cerrado\r
32232000;Equipo de videoconferencia\r
32233000;Estaciones de amplificación de radiofrecuencia\r
32234000;Cámaras de televisión en circuito cerrado\r
32235000;Sistema de vigilancia en circuito cerrado\r
32236000;Radioteléfonos\r
32237000;Emisoreseceptores portátiles\r
32240000;Cámaras de televisión\r
32250000;Teléfonos móviles\r
32251000;Teléfonos para automóvil\r
32251100;Kit manos libres\r
32252000;Teléfonos GSM\r
32252100;"Teléfonos móviles ""manos libres"""\r
32252110;"Teléfonos móviles ""manos libres"" (inalámbricos)"\r
32260000;Equipo de transmisión de datos\r
32270000;Aparatos de transmisión digital\r
32300000;Receptores de televisión y radio, y aparatos de grabación o reproducción de sonido o imagen\r
32310000;Receptores de radiodifusión\r
32320000;Equipo audiovisual y de televisión\r
32321000;Equipo de proyección de televisión\r
32321100;Equipo de vídeo y filmación\r
32321200;Equipo audiovisual\r
32321300;Materiales audiovisuales\r
32322000;Equipo multimedia\r
32323000;Videomonitores\r
32323100;Videomonitores color\r
32323200;Videomonitores monocromo\r
32323300;Equipo de vídeo\r
32323400;Equipo de reproducción de vídeo\r
32323500;Sistema de vigilancia por vídeo\r
32324000;Receptores de televisión\r
32324100;Receptores de televisión en color\r
32324200;Receptores de televisión monocromo\r
32324300;Equipo de televisión\r
32324310;Antenas de satélite\r
32324400;Antenas de televisión\r
32324500;Sintonizadores de vídeo\r
32324600;Descodificadores para televisión digital\r
32330000;Aparatos de grabación y reproducción de imágenes y sonido\r
32331000;Platos giradiscos\r
32331100;Tocadiscos\r
32331200;Lectores de casetes\r
32331300;Aparatos de reproducción del sonido\r
32331500;Grabadoras\r
32331600;Reproductores de MP3\r
32332000;Magnetófonos\r
32332100;Dictáfonos\r
32332200;Contestadores telefónicos\r
32332300;Grabadores de sonido\r
32333000;Aparatos de grabación o reproducción de vídeo\r
32333100;Grabadores de vídeo\r
32333200;Videocámaras\r
32333300;Reproductores de vídeo\r
32333400;Lectores de vídeo\r
32340000;Micrófonos y altavoces\r
32341000;Micrófonos\r
32342000;Altavoces\r
32342100;Auriculares de casco\r
32342200;Auriculares\r
32342300;Juegos de micrófonos y altavoces\r
32342400;Dispositivos acústicos\r
32342410;Equipo de sonido\r
32342411;Minialtavoces\r
32342412;Pantallas acústicas (altavoces)\r
32342420;Pupitre mezclador\r
32342430;Sistema de compresión de señales vocales\r
32342440;Sistema de correo vocal\r
32342450;Registradores de voz\r
32343000;Amplificadores\r
32343100;Amplificadores de audiofrecuencia\r
32343200;Megáfonos\r
32344000;Receptores para radiotelefonía o radiotelegrafía\r
32344100;Receptores portátiles de llamada y radiobúsqueda\r
32344110;Sistema de registro vocal\r
32344200;Receptores de radio\r
32344210;Equipo de radio\r
32344220;Aparatos de radiobúsqueda\r
32344230;Estaciones de radio\r
32344240;Estación repetidora\r
32344250;Instalaciones de radio\r
32344260;Equipo de radio y multiplex\r
32344270;Sistema de control de radio y teléfono\r
32344280;Radios portátiles\r
32350000;Partes de equipo de sonido y vídeo\r
32351000;Accesorios para equipo de sonido y vídeo\r
32351100;Equipo de videoedición\r
32351200;Pantallas\r
32351300;Accesorios para equipos de sonido\r
32351310;Casetes de audio\r
32352000;Antenas y reflectores\r
32352100;Partes de equipo de radio y radar\r
32352200;Repuestos y accesorios de radar\r
32353000;Grabaciones de sonido\r
32353100;Discos\r
32353200;Casetes de música\r
32354000;Productos de película\r
32354100;Película para radiología\r
32354110;Película para rayos X\r
32354120;Film diazo azul\r
32354200;Película cinematográfica\r
32354300;Película fotográfica\r
32354400;Película de impresión instantánea\r
32354500;Películas de vídeo\r
32354600;Casetes de vídeo\r
32354700;Videocintas\r
32354800;Película retráctil\r
32360000;Equipo de intercomunicación\r
32400000;Redes\r
32410000;Red de área local\r
32411000;Red de anillo con paso de testigo\r
32412000;Red de comunicaciones\r
32412100;Red de telecomunicaciones\r
32412110;Red Internet\r
32412120;Red intranet\r
32413000;Red integrada\r
32413100;Encaminadores de red\r
32415000;Red Ethernet\r
32416000;Red RDSI\r
32416100;Red ISDX\r
32417000;Redes multimedia\r
32418000;Red de radio\r
32420000;Equipo de red\r
32421000;Cableado de red\r
32422000;Componentes de red\r
32423000;Nodos de red\r
32424000;Infraestructura de red\r
32425000;Sistema de explotación de red\r
32426000;Sistema de edición de red\r
32427000;Sistema de red\r
32428000;Actualización de la red\r
32429000;Equipo de red telefónica\r
32430000;Red de área extendida\r
32440000;Equipo de telemetría y equipo terminal\r
32441000;Equipo de telemetría\r
32441100;Sistema telemétrico de vigilancia\r
32441200;Equipo de telemetría y control\r
32441300;Sistema de telemática\r
32442000;Cuadros de bornes\r
32442100;Cajas de bornes\r
32442200;Emuladores de bornes\r
32442300;Emuladores de bornas\r
32442400;Bloques terminales\r
32500000;Equipo y material para telecomunicaciones\r
32510000;Sistema inalámbrico de telecomunicaciones\r
32520000;Equipo y cable de telecomunicaciones\r
32521000;Cable de telecomunicaciones\r
32522000;Equipo de telecomunicaciones\r
32523000;Instalaciones de telecomunicaciones\r
32524000;Sistema de telecomunicaciones\r
32530000;Equipo del tipo usado para comunicaciones por satélite\r
32531000;Equipo de comunicaciones por satélite\r
32532000;Antenas parabólicas\r
32533000;Estaciones terrestres de telecomunicaciones por satélite\r
32534000;Plataformas satélite\r
32540000;Cuadros de conmutadores\r
32541000;Equipo de conmutador\r
32542000;Cuadros de conmutadores para centrales telefónicas\r
32543000;Cuadros de conmutadores para centrales telefónicas\r
32544000;Equipo de PABX\r
32545000;Sistemas de PABX\r
32546000;Equipo de conmutación digital\r
32546100;Conmutadores digitales\r
32547000;Conmutadores de vacío\r
32550000;Equipo telefónico\r
32551000;Cables telefónicos y equipo asociado\r
32551100;Conexiones telefónicas\r
32551200;Centrales telefónicas\r
32551300;Cascos telefónicos\r
32551400;Red telefónica\r
32551500;Cables telefónicos\r
32552000;Aparatos eléctricos de telefonía o telegrafía por hilo\r
32552100;Aparatos telefónicos\r
32552110;Teléfonos inalámbricos\r
32552120;Teléfonos de emergencia\r
32552130;Teléfonos públicos\r
32552140;Equipo de teléfono público de previo pago\r
32552150;Teléfonos para personas con deficiencias visuales\r
32552160;Teléfonos para personas con deficiencias auditivas\r
32552200;Teleimpresoras\r
32552300;Conmutadores telefónicos o telegráficos\r
32552310;Centrales telefónicas digitales\r
32552320;Multiplexores\r
32552330;Conmutadores telefónicos\r
32552400;Convertidores de señales de audiofrecuencia\r
32552410;Módems\r
32552420;Convertidor de frecuencia\r
32552430;Equipo de codificación\r
32552500;Aparatos de teletexto\r
32552510;Terminales de videotexto\r
32552520;Equipo de télex\r
32552600;Interfonos\r
32553000;Partes de aparatos telefónicos o telegráficos eléctricos\r
32560000;Materiales de fibra óptica\r
32561000;Conexiones de fibra óptica\r
32562000;Cables de fibra óptica\r
32562100;Cables de fibra óptica para transmisión de información\r
32562200;Cables de fibra óptica para telecomunicación\r
32562300;Cables de fibra óptica para transmisión de datos\r
32570000;Equipo de comunicaciones\r
32571000;Infraestructura de comunicaciones\r
32572000;Cable de comunicaciones\r
32572100;Cable de comunicaciones con conductores eléctricos múltiples\r
32572200;Cable de comunicaciones con conductores coaxiales\r
32572300;Cable de comunicaciones para aplicaciones especiales\r
32573000;Sistema de control de comunicaciones\r
32580000;Equipo de datos\r
32581000;Equipo de comunicación de datos\r
32581100;Cable para transmisión de datos\r
32581110;Cable para transmisión de datos con conductores eléctricos múltiples\r
32581120;Cable para transmisión de datos con conductores coaxiales\r
32581130;Cable para transmisión de datos para aplicaciones especiales\r
32581200;Equipos de fax\r
32581210;Accesorios y componentes de fax\r
32582000;Soportes de datos\r
32583000;Medios de soporte de datos y señales vocales\r
32584000;Medios de soporte de datos\r
33000000;Equipamiento y artículos médicos, farmacéuticos y de higiene personal\r
33100000;Equipamiento médico\r
33110000;Equipos de imaginería para uso médico, odontológico y veterinario\r
33111000;Aparatos para radiología\r
33111100;Mesa de radiología\r
33111200;Puestos de radiología\r
33111300;Aparatos para revelado de radiografías\r
33111400;Fluoroscopios\r
33111500;Radiografía dental\r
33111600;Aparatos para radiografías\r
33111610;Unidad de resonancia magnética\r
33111620;Cámaras de rayos gamma\r
33111640;Termógrafos\r
33111650;Aparatos para mamografías\r
33111660;Densitómetro óseo\r
33111700;Sala de angiografía\r
33111710;Material para angiografías\r
33111720;Aparatos para angiografías\r
33111721;Aparatos para angiografía digital\r
33111730;Material para angioplastia\r
33111740;Aparatos para angioplastia\r
33111800;Radiodiagnosis\r
33112000;Material de imaginería ecográfica, doppler y por ultrasonidos\r
33112100;Detector cardíaco ultrasónico\r
33112200;Unidad de ultrasonidos\r
33112300;Escáneres ultrasónicos\r
33112310;Doppler color\r
33112320;Equipo Doppler\r
33112330;Ecoencefalógrafos\r
33112340;Ecocardiógrafos\r
33113000;Equipo de imaginería por resonancia magnética\r
33113100;Escáneres de resonancia magnética\r
33113110;Escáneres para resonancia magnética nuclear\r
33114000;Espectroscopios\r
33115000;Tomógrafos\r
33115100;CT Escáneres para tomografía computerizada\r
33115200;Tomógrafos para TAC\r
33120000;Dispositivos de exploración y registro\r
33121000;Sistema de registro ambulatorio de larga duración\r
33121100;Electroencefalógrafos\r
33121200;Aparatos para escintigrafía\r
33121300;Electromiógrafos\r
33121400;Audiómetros\r
33121500;Electrocardiograma\r
33122000;Aparatos de oftalmología\r
33123000;Aparatos para exploración cardiovascular\r
33123100;Tensiómetro\r
33123200;Aparatos de electrocardiografía\r
33123210;Aparatos de control cardíaco\r
33123220;Aparatos para angiocardiografía\r
33123230;Cardiógrafos\r
33124000;Aparatos y material para diagnóstico y radiodiagnóstico\r
33124100;Aparatos para diagnóstico\r
33124110;Sistemas de diagnóstico\r
33124120;Aparatos de ultrasonidos para diagnóstico\r
33124130;Material para diagnóstico\r
33124131;Tiras reactivas\r
33124200;Aparatos para radiodiagnóstico\r
33124210;Material para radiodiagnóstico\r
33125000;Aparatos para exploración urológica\r
33126000;Aparatos para estomatología\r
33127000;Aparatos para análisis inmunológicos\r
33128000;Láseres médicos distintos de los usados en cirugía\r
33130000;Instrumental y aparatos de odontología y sus especialidades\r
33131000;Instrumentos de dentista\r
33131100;Instrumentos de cirugía dental\r
33131110;Pinzas, cepillos, separadores y bruñidores para odontología\r
33131111;Pinzas de odontología\r
33131112;Cepillos dentales\r
33131113;Separadores dentales\r
33131114;Bruñidores dentales\r
33131120;Calibradores, botadores y excavadores para criocirugía dental\r
33131121;Unidades de criocirugía dental\r
33131122;Medidores de profundidad dental\r
33131123;Botadores dentales\r
33131124;Excavadores dentales\r
33131130;Protectores de dedo y fórceps odontológicos\r
33131131;Protectores de dedo para dentista\r
33131132;Fórceps odontológicos\r
33131140;Espejos y fresas dentales\r
33131141;Espejos dentales\r
33131142;Fresas dentales\r
33131150;Elevadores de raíces, raspadores de sarro y balanzas dentales\r
33131151;Elevadores de raíces dentales\r
33131152;Raspadores de sarro\r
33131153;Balanzas dentales\r
33131160;Tijeras y bisturíes para odontología\r
33131161;Tijeras para odontología\r
33131162;Bisturíes para odontología\r
33131170;Espátulas, pinzas y atacadores para odontología\r
33131171;Espátulas dentales\r
33131172;Pinzas dentales\r
33131173;Atacadores\r
33131200;Aguja dental para sutura\r
33131300;Instrumento dental desechable\r
33131400;Sonda dental\r
33131500;Instrumento para la extracción dental\r
33131510;Taladros dentales\r
33131600;Instrumento para obturación dental\r
33132000;Implante dental\r
33133000;Material de impresión para dentaduras\r
33134000;Material accesorio para endodoncia\r
33135000;Aparatos para ortodoncia\r
33136000;Instrumento rotativo y abrasivo\r
33137000;Material accesorio para profilaxis dental\r
33138000;Productos para prótesis y rebase\r
33138100;Dentaduras\r
33140000;Material médico fungible\r
33141000;Productos consumibles médicos no químicos desechables y productos consumibles hematológicos\r
33141100;"Apósitos; clips, suturas y ligaduras"\r
33141110;Apósitos\r
33141111;Apósitos adhesivos\r
33141112;Esparadrapos\r
33141113;Vendajes\r
33141114;Gasa para uso médico\r
33141115;Guata para uso médico\r
33141116;Paquetes de apósitos\r
33141117;Algodón en rama\r
33141118;Toallitas húmedas\r
33141119;Compresas\r
33141120;Clips, suturas y ligaduras\r
33141121;Suturas quirúrgicas\r
33141122;Grapas quirúrgicas\r
33141123;Contenedores para material usado punzante o cortante\r
33141124;Envoltorios protectores para piezas afiladas\r
33141125;Material para suturas quirúrgicas\r
33141126;Ligaduras\r
33141127;Hemostáticos absorbibles\r
33141128;Agujas de sutura\r
33141200;Catéteres\r
33141210;Catéteres de balón\r
33141220;Cánulas\r
33141230;Dilatador\r
33141240;Accesorios para catéter\r
33141300;Aparatos para venepuntura y toma de muestras de sangre\r
33141310;Jeringas\r
33141320;Agujas para uso médico\r
33141321;Agujas para anestesia\r
33141322;Agujas arteriales\r
33141323;Agujas para biopsia\r
33141324;Agujas de diálisis\r
33141325;Agujas para fístulas\r
33141326;Agujas para exploraciones radiológicas\r
33141327;Agujas acanaladas\r
33141328;Agujas para inyección epidural\r
33141329;Agujas para amniocentesis\r
33141400;"Cortaalambres y bisturí; guantes quirúrgicos"\r
33141410;Cortaalambres y bisturí\r
33141411;Escalpelos y cuchillas\r
33141420;Guantes quirúrgicos\r
33141500;Productos consumibles hematológicos\r
33141510;Productos sanguíneos\r
33141520;Derivados del plasma\r
33141530;Coagulantes sanguíneos\r
33141540;Albúmina\r
33141550;Heparina\r
33141560;Órganos humanos\r
33141570;Sangre humana\r
33141580;Sangre animal\r
33141600;Colectores y bolsas de recogida, drenajes y kits\r
33141610;Bolsas de recogida\r
33141613;Bolsas para sangre\r
33141614;Bolsas para plasma\r
33141615;Bolsas para orina\r
33141620;Carteras sanitarias\r
33141621;Kit para incontinencia\r
33141622;Kits para prevención del SIDA\r
33141623;Botiquines de primeros auxilios\r
33141624;Kits para administración\r
33141625;Kits para diagnóstico\r
33141626;Kits para dosificación\r
33141630;Filtros de plasma sanguíneo\r
33141640;Drenes\r
33141641;Sondas\r
33141642;Accesorios para drenes\r
33141700;Material ortopédico\r
33141710;Muletas\r
33141720;Andadores\r
33141730;Collarines quirúrgicos\r
33141740;Calzado ortopédico\r
33141750;Prótesis articulares\r
33141760;Férulas\r
33141770;Material para fracturas, clavos y placas\r
33141800;Productos consumibles dentales\r
33141810;Materiales para obturación dental\r
33141820;Dientes\r
33141821;Dientes de porcelana\r
33141822;Dientes acrílicos\r
33141830;Base de cemento\r
33141840;Hemostático dental\r
33141850;Productos para la higiene dental\r
33141900;Lancetas para la extracción de muestras de sangre\r
33150000;Aparatos de radioterapia, mecanoterapia, electroterapia y fisioterapia\r
33151000;Aparatos y material para radioterapia\r
33151100;Aparatos de gammaterapia\r
33151200;Aparatos de radioterapia\r
33151300;Espectrógrafos\r
33151400;Material para radioterapia\r
33152000;Incubadoras\r
33153000;Litotritor\r
33154000;Aparatos de mecanoterapia\r
33155000;Equipos para fisioterapia\r
33156000;Material para pruebas objetivas psicológicas\r
33157000;Aparatos respiratorios y de oxigenoterapia\r
33157100;Máscaras de gas para uso médico\r
33157110;Máscara de oxígeno\r
33157200;Kits de oxígeno\r
33157300;Tiendas de oxígeno\r
33157400;Respiradores para uso médico\r
33157500;Cámaras hiperbáricas\r
33157700;Botella lavagases\r
33157800;Unidad de administración de oxígeno\r
33157810;Unidad de oxigenoterapia\r
33158000;Terapia eléctrica, electromagnética y mecánica\r
33158100;Unidad electromagnética\r
33158200;Aparatos para electroterapia\r
33158210;Estimulador\r
33158300;Aparatos de rayos ultravioletas para uso médico\r
33158400;Unidad de terapia mecánica\r
33158500;Aparatos de rayos infrarrojos para uso médico\r
33159000;Sistema de química clínica\r
33160000;Técnicas operatorias\r
33161000;Unidad de electrocirugía\r
33162000;Instrumentos y aparatos de quirófano\r
33162100;Aparatos para quirófano\r
33162200;Instrumentos de quirófano\r
33163000;Tienda para uso médico\r
33164000;Aparatos de celioscopia\r
33164100;Colposcopio\r
33165000;Aparatos de criocirugía y crioterapia\r
33166000;Aparatos de dermatología\r
33167000;Luces para quirófanos\r
33168000;Aparatos de endoscopia y endocirugía\r
33168100;Endoscopios\r
33169000;Instrumentos quirúrgicos\r
33169100;Láser quirúrgico\r
33169200;Cestas para uso quirúrgico\r
33169300;Carro para material quirúrgico\r
33169400;Contenedores quirúrgicos\r
33169500;Sistemas de localización y seguimiento quirúrgicos\r
33170000;Anestesia y reanimación\r
33171000;Instrumentos de anestesia y reanimación\r
33171100;Instrumentos para anestesia\r
33171110;Máscara para anestesia\r
33171200;Instrumentos de reanimación\r
33171210;Máscara para reanimación\r
33171300;Bolsas o kits para inyección epidural\r
33172000;Aparatos para anestesia y reanimación\r
33172100;Aparatos para anestesia\r
33172200;Aparatos para reanimación\r
33180000;Asistencia funcional\r
33181000;Dispositivos para hemodiálisis\r
33181100;Aparatos de hemodiálisis\r
33181200;Filtros para diálisis\r
33181300;Monitor individual para hemodiálisis\r
33181400;Unidad de diálisis\r
33181500;Productos consumibles para uso renal\r
33181510;Fluido renal\r
33181520;Productos consumibles para diálisis renal\r
33182000;Aparatos de ayuda cardíaca\r
33182100;Desfibrilador\r
33182200;Aparatos de estimulación cardíaca\r
33182210;Marcapasos\r
33182220;Válvulas cardíacas\r
33182230;Ventrículo\r
33182240;Partes y accesorios de marcapasos\r
33182241;Pilas para marcapasos\r
33182300;Aparatos de cirugía cardíaca\r
33182400;Radiología cardíaca\r
33183000;Aparatos de ayuda ortopédica\r
33183100;Implantes ortopédicos\r
33183200;Prótesis ortopédicas\r
33183300;Aparatos para osteosíntesis\r
33184000;Artículos y aparatos de prótesis\r
33184100;Implantes quirúrgicos\r
33184200;Prótesis vasculares\r
33184300;Prótesis cardíacas\r
33184400;Prótesis mamarias\r
33184410;Prótesis mamarias internas\r
33184420;Prótesis mamarias externas\r
33184500;Endoprótesis coronarias\r
33184600;Ojos artificiales\r
33185000;Audífonos\r
33185100;Partes y accesorios de audífonos\r
33185200;Implante coclear\r
33185300;Implante otorrinolaringológico\r
33185400;Laringe artificial\r
33186000;Unidad de circulación extracorpórea\r
33186100;Oxigenador\r
33186200;Calentadores de sangre y fluidos\r
33190000;Instrumentos y aparatos médicos diversos\r
33191000;Aparatos para esterilización, desinfección e higiene\r
33191100;Esterilizador\r
33191110;Autoclaves\r
33192000;Mobiliario para uso médico\r
33192100;Camas para uso médico\r
33192110;Camas ortopédicas\r
33192120;Camas de hospital\r
33192130;Camas provistas de motor\r
33192140;Divanes para sesiones psiquiátricas\r
33192150;Camas terapéuticas\r
33192160;Camillas\r
33192200;Mesas para uso médico\r
33192210;Mesas de reconocimiento médico\r
33192230;Mesas de operaciones\r
33192300;Mobiliario para uso médico, excepto camas y mesas\r
33192310;Dispositivos de tracción o suspensión para camas de uso médico\r
33192320;Soportes para recipientes de recogida de orina\r
33192330;Lugares donde se realizan las transfusiones\r
33192340;Mobiliario de quirófano, excepto mesas\r
33192350;Locales destinados a cultivos con fines médicos\r
33192400;Unidades odontológicas\r
33192410;Sillones de dentista\r
33192500;Tubos de ensayo\r
33192600;Equipos elevadores para los servicios de atención sanitaria\r
33193000;Sillas de ruedas y demás vehículos para inválidos y material asociado\r
33193100;Sillas de ruedas y demás vehículos para inválidos\r
33193110;Vehículos para inválidos\r
33193120;Sillas de ruedas\r
33193121;Sillas de ruedas con motor\r
33193200;Partes y accesorios de sillas de ruedas y demás vehículos para inválidos\r
33193210;Partes y accesorios de vehículos para inválidos\r
33193211;Motores de vehículos para inválidos\r
33193212;Dispositivos de dirección de vehículos para inválidos\r
33193213;Dispositivos de mando de vehículos para inválidos\r
33193214;Chasis de vehículos para inválidos\r
33193220;Partes y accesorios de sillas de ruedas\r
33193221;Almohadillas para sillas de ruedas\r
33193222;Armazones para sillas de ruedas\r
33193223;Asientos para sillas de ruedas\r
33193224;Instrumentos y aparatos de transfusión e infusión\r
33193225;Instrumentos y aparatos para infusión\r
33194000;Instrumentos y aparatos de transfusión y perfusión\r
33194100;Instrumentos y aparatos para perfusión\r
33194110;Bombas de infusión\r
33194120;Artículos para perfusión\r
33194200;Instrumentos y aparatos para transfusión\r
33194210;Instrumentos y aparatos para transfusión sanguínea\r
33194220;Material para transfusión sanguínea\r
33195000;Sistema de monitorización de los pacientes\r
33195100;Monitores\r
33195110;Monitores de respiración\r
33195200;Puesto central de control\r
33196000;Ayudas médicas\r
33196100;Aparatos para las personas de avanzada edad\r
33196200;Aparatos para minusválidos\r
33197000;Equipo informático para uso médico\r
33198000;Artículos de papel para hospital\r
33198100;Compresas de papel\r
33198200;Bolsas o envoltorios de papel para esterilización\r
33199000;Vestuario médico\r
33600000;Productos farmacéuticos\r
33610000;Medicamentos para el aparato digestivo y el metabolismo\r
33611000;Medicamentos contra los trastornos producidos por la hiperacidez\r
33612000;Medicamentos contra los trastornos gastrointestinales funcionales\r
33613000;Laxantes\r
33614000;Antidiarreicos, antiinflamatorios y antiinfecciosos intestinales\r
33615000;Antidiabéticos\r
33615100;Insulina\r
33616000;Vitaminas\r
33616100;Provitaminas\r
33617000;Suplementos minerales\r
33620000;Medicamentos para la sangre, para los órganos hematopoyéticos y para el aparato cardiovascular\r
33621000;Medicamentos para la sangre y para los órganos hematopoyéticos\r
33621100;Antitrombóticos\r
33621200;Antihemorrágicos\r
33621300;Antianémicos\r
33621400;Sustitutos del plasma y soluciones para infusión\r
33622000;Medicamentos para el aparato cardiovascular\r
33622100;Medicamentos usados en cardioterapia\r
33622200;Hipotensores\r
33622300;Diuréticos\r
33622400;Vasoprotectores\r
33622500;Antihemorroidales de uso tópico\r
33622600;Betabloqueadores\r
33622700;Bloqueadores de los canales de calcio\r
33622800;Medicamentos que actúan sobre el sistema reninangiotensina\r
33630000;Medicamentos usados en dermatología y para el sistema muscularsquelético\r
33631000;Medicamentos usados en dermatología\r
33631100;Antifúngicos usados en dermatología\r
33631110;Ácidos salicílicos\r
33631200;Emolientes y protectores\r
33631300;Antipsoriásicos\r
33631400;Antibióticos y quimioterápicos para uso en dermatología\r
33631500;Corticosteroides usados en dermatología y en preparados dermatológicos\r
33631600;Antisépticos y desinfectantes\r
33631700;Preparados antiacné\r
33632000;Medicamentos para el sistema muscularsquelético\r
33632100;Antiinflamatorios y antirreumáticos\r
33632200;Miorrelajantes\r
33632300;Antigotosos\r
33640000;Medicamentos para el sistema genitourinario y hormonas\r
33641000;Medicamentos para el sistema genitourinario y hormonas sexuales\r
33641100;Antiinfecciosos y antisépticos ginecológicos\r
33641200;Otros medicamentos ginecológicos\r
33641300;Hormonas sexuales y moduladores genitales\r
33641400;Anticonceptivos\r
33641410;Anticonceptivos orales\r
33641420;Anticonceptivos químicos\r
33642000;Preparados hormonales sistémicos, excluidas las hormonas sexuales\r
33642100;Hormonas hiposifiarias, hipotalámicas y análogas\r
33642200;Corticoesteroides para uso sistémico\r
33642300;Terapia tiroidea\r
33650000;Antiinfecciosos generales para uso sistémico, vacunas, antineoplásicos e inmunomoduladores\r
33651000;Antiinfecciosos generales para uso sistémico, vacunas\r
33651100;Antibacterianos para uso sistémico\r
33651200;Antimicóticos para uso sistémico\r
33651300;Antimicobacterianos\r
33651400;Antivirales para uso sistémico\r
33651500;Inmunosueros e inmunoglobulinas\r
33651510;Antisueros\r
33651520;Inmunoglobulinas\r
33651600;Vacunas\r
33651610;Vacunas contra la difteria, el tétanos y la tos ferina\r
33651620;Vacunas contra la difteria y el tétanos\r
33651630;Vacunas BCG (liofilizadas)\r
33651640;"Vacunas ""triple vírica"" (sarampión, paperas, rubeola)"\r
33651650;Vacunas contra el tifus\r
33651660;Vacunas contra la gripe\r
33651670;Vacunas contra la polio\r
33651680;Vacunas contra la hepatitis B\r
33651690;Vacunas para la medicina veterinaria\r
33652000;Agentes antineoplásicos e inmunomoduladores\r
33652100;Agentes antineoplásicos\r
33652200;Medicamentos usados en la terapia endocrina\r
33652300;Inmunosupresores\r
33660000;Medicamentos para el sistema nervioso y los órganos de los sentidos\r
33661000;Medicamentos para el sistema nervioso\r
33661100;Anestésicos\r
33661200;Analgésicos\r
33661300;Antiepilépticos\r
33661400;Antiparkinsonianos\r
33661500;Psicolépticos\r
33661600;Psicoanalépticos\r
33661700;Otros medicamentos del sistema nervioso\r
33662000;Medicamentos para los órganos de los sentidos\r
33662100;Medicamentos usados en oftalmología\r
33670000;Medicamentos para el aparato respiratorio\r
33673000;Medicamentos para enfermedades obstructivas de las vías respiratorias\r
33674000;Medicamentos para la tos y el resfriado\r
33675000;Antihistamínicos para empleo sistémico\r
33680000;Artículos farmacéuticos\r
33681000;Tetinas, chupetes y artículos similares para bebés\r
33682000;Baldosas de caucho\r
33683000;Amortiguadores de caucho\r
33690000;Medicamentos diversos\r
33691000;Productos antiparasitarios, insecticidas y repelentes\r
33691100;Antiprotozoarios\r
33691200;Antihelmínticos\r
33691300;Ectoparasiticidas, incluidos los escabicidas, insecticidas y repelentes\r
33692000;Soluciones medicinales\r
33692100;Soluciones para infusiones\r
33692200;Productos de nutrición parenteral\r
33692210;Soluciones de nutrición parenteral\r
33692300;Productos de nutrición enteral\r
33692400;Soluciones para perfusiones\r
33692500;Soluciones inyectables\r
33692510;Fluidos intravenosos\r
33692600;Soluciones galénicas\r
33692700;Soluciones de glucosa\r
33692800;Soluciones para diálisis\r
33693000;Todos los demás productos terapéuticos\r
33693100;Toxinas\r
33693200;Sustitutos de la nicotina\r
33693300;Tratamientos contra la adicción\r
33694000;Medios de diagnóstico\r
33695000;Todo los demás productos no terapéuticos\r
33696000;Reactivos y medios de contraste\r
33696100;Reactivos para determinación del grupo sanguíneo\r
33696200;Reactivos para análisis de sangre\r
33696300;Reactivos químicos\r
33696400;Reactivos isotópicos\r
33696500;Reactivos de laboratorio\r
33696600;Reactivos para electroforesis\r
33696700;Reactivos urológicos\r
33696800;Medios de contraste para radiología\r
33697000;Preparaciones médicas, excepto productos consumibles para uso odontológico\r
33697100;Preparaciones para enemas\r
33697110;Cementos para la reconstrucción de huesos\r
33698000;Productos clínicos\r
33698100;Cultivos microbiológicos\r
33698200;Glándulas y sus extractos\r
33698300;Sustancias pépticas\r
33700000;Productos para la higiene personal\r
33710000;Perfumes, artículos de tocador y preservativos\r
33711000;Perfumes y productos de tocador\r
33711100;Aguas de Colonia\r
33711110;Desodorantes\r
33711120;Antitranspirantes\r
33711130;Colonias\r
33711140;Fragancias\r
33711150;Agua de rosas\r
33711200;Preparaciones para maquillaje\r
33711300;Productos para manicura o pedicura\r
33711400;Productos de belleza\r
33711410;Bastoncillos de algodón\r
33711420;Estuches de maquillaje\r
33711430;Toallitas higiénicas desechables\r
33711440;Bálsamo labial\r
33711450;Tatuajes\r
33711500;Productos para el cuidado de la piel\r
33711510;Productos de protección solar\r
33711520;Geles de baño\r
33711530;Gorros de ducha\r
33711540;Cremas o lociones de parafarmacia\r
33711600;Preparaciones y artículos para el cabello\r
33711610;Champús\r
33711620;Peines\r
33711630;Pelucas\r
33711640;Estuchitos de tocador\r
33711700;Artículos y preparados para la higiene bucal o dental\r
33711710;Cepillos de dientes\r
33711720;Pasta de dientes\r
33711730;Mondadientes\r
33711740;Baños bucales\r
33711750;Enjuagues y otros productos refrescantes bucales\r
33711760;Hilo dental\r
33711770;Mordedores, anillos de dentición y chupetes para bebés\r
33711780;Tabletas para limpieza de dentaduras postizas\r
33711790;Estuche de higiene dental\r
33711800;Preparados para el afeitado\r
33711810;Cremas de afeitar\r
33711900;Jabón\r
33712000;Preservativos\r
33713000;Productos para el cuidado de los pies\r
33720000;Cuchillas y estuches de manicura o pedicura\r
33721000;Navajas\r
33721100;Hojas de afeitar\r
33721200;Máquinas de afeitar\r
33722000;Juegos para manicura o pedicura\r
33722100;Estuches de manicura\r
33722110;Instrumental de manicura\r
33722200;Estuches de pedicura\r
33722210;Instrumental de pedicura\r
33722300;Coleteros\r
33730000;Productos para el cuidado de los ojos y lentes correctoras\r
33731000;Lentes de contacto\r
33731100;Lentes correctoras\r
33731110;Lentes intraoculares\r
33731120;Lentes para gafas\r
33732000;Soluciones para lentes de contacto\r
33733000;Gafas de sol\r
33734000;Gafas\r
33734100;Monturas de gafas\r
33734200;Cristal para lentes de gafas\r
33735000;Anteojos de protección\r
33735100;Gafas protectoras\r
33735200;Monturas de gafas protectoras\r
33740000;Productos para el cuidado de manos y uñas\r
33741000;Productos para el cuidado de las manos\r
33741100;Jabón de manos\r
33741200;Lociones de manos o corporal\r
33741300;Antiséptico para manos\r
33742000;Productos para el cuidado de las uñas\r
33742100;Cortaúñas\r
33742200;Esmalte de uñas\r
33750000;Productos para el cuidado del bebé\r
33751000;Pañales desechables\r
33752000;Protectores de lactancia\r
33760000;Papel higiénico, pañuelos, toallas y servilletas\r
33761000;Papel higiénico\r
33762000;Pañuelos de papel\r
33763000;Toallas de papel\r
33764000;Servilletas de papel\r
33770000;Artículos de papel para uso sanitario e higiénico\r
33771000;Productos de papel para uso sanitario\r
33771100;Compresas higiénicas o tampones\r
33771200;Forros de pañales de papel\r
33772000;Productos desechables de papel\r
33790000;Artículos de vidrio para laboratorio, higiene o farmacia\r
33791000;Artículos de vidrio para la higiene\r
33792000;Artículos de vidrio para uso farmacéutico\r
33793000;Artículos de vidrio para laboratorio\r
33900000;Equipo y material para institutos anatómicoorenses y depósitos de cadáveres\r
33910000;Instrumental y material para disección anatomopatológica\r
33911000;Tijeras de autopsia\r
33912000;Instrumental de disección para autopsia\r
33912100;Pinzas de disección para autopsia\r
33913000;Sondas para extracción de proyectiles en autopsia\r
33914000;Hilo, agujas y pinzas de sutura para cadáveres\r
33914100;Hilo de sutura para cadáveres\r
33914200;Agujas de sutura para cadáveres\r
33914300;Pinzas de sutura para cadáveres\r
33915000;Sondas acanaladas para autopsia\r
33916000;Hojas o accesorios para sierras de autopsia\r
33916100;Sierras de autopsia\r
33917000;"Mesas o ""pads"" de disección"\r
33918000;Maletines para accesorios o instrumental de cirugía en cadáveres\r
33919000;Estuches enrollables para accesorios o instrumental de cirugía en cadáveres\r
33920000;Equipo y suministros para autopsia\r
33921000;Aspiradores de polvo óseo\r
33922000;Bolsas para transporte de cadáveres\r
33923000;Reposacabezas, tableros para cadáveres y balanzas colgantes para autopsia\r
33923100;Reposacabezas para autopsia\r
33923200;Tableros de apoyo del cadáver para autopsia\r
33923300;Balanzas colgantes para autopsia\r
33924000;Equipo de prevención de enfermedades infecciosas en cadáveres\r
33925000;Pulseras o etiquetas de identificación de cadáveres\r
33926000;Tubos o aspiradores al vacío para la recogida de líquidos de autopsia\r
33927000;Termómetros rectales para cadáveres\r
33928000;Enderezadores de dedo para cadáveres\r
33929000;Maletines de regeneración del tejido dactilar en cadáveres\r
33930000;Mobiliario para autopsia\r
33931000;Mesas o accesorios para autopsia macroscópica\r
33932000;Pilas o accesorios para autopsia\r
33933000;Mesas o accesorios para autopsia\r
33933100;Mesas de autopsia\r
33934000;Mesas o accesorios para necropsia\r
33935000;Mesas o accesorios para la disección de cadáveres de animales\r
33936000;Mesas o accesorios para embalsamamiento\r
33937000;Mesas para autopsia con evacuación descendente, o accesorios\r
33940000;Equipos y material para el transporte y depósito de cadáveres\r
33941000;Estanterías para el depósito de cadáveres\r
33942000;Carros portacadáveres\r
33943000;Carros elevacadáveres de tijera\r
33944000;Arcones frigoríficos o congeladores para depósitos de cadáveres\r
33945000;Cámaras frigoríficas para depósitos de cadáveres\r
33946000;Carros de autopsia\r
33947000;Bandejas portacadáveres\r
33948000;Dispositivos para la elevación o traslado de cadáveres\r
33949000;Contenedores para transporte de cuerpos\r
33950000;Equipo y material para medicina legal\r
33951000;Material de necroidentificación\r
33952000;Mascarillas antiputrefacción\r
33953000;Material de detección de sangre en cadáveres\r
33954000;Maletín de toma de muestras biológicas\r
33960000;Equipo y material de embalsamamiento\r
33961000;Inyectores intracavitarios para embalsamamiento\r
33962000;Tubos de drenaje venoso para embalsamamiento\r
33963000;Líquidos y productos químicos para embalsamamiento\r
33964000;Tubos inyectores para embalsamamiento\r
33965000;Pilas de embalsamamiento y sus accesorios\r
33966000;Maletines de embalsamamiento\r
33967000;Agujas de inyector para embalsamamiento\r
33968000;Cápsulas oculares para embalsamamiento\r
33970000;Equipo y material para cadáveres\r
33971000;Indumentaria para cadáveres\r
33972000;Bolsas para cadáveres\r
33973000;Mortajas\r
33974000;Aspiradores mortuorios\r
33975000;Compuestos endurecedores para cadáveres\r
34000000;Equipos de transporte y productos auxiliares\r
34100000;Vehículos de motor\r
34110000;Automóviles para pasajeros\r
34111000;"Automóviles ""familiares"" AC (break) y ""berlinas"" AA (turismos)"\r
34111100;Breaks\r
34111200;Automóviles de turismo\r
34113000;Vehículos con tracción a las cuatro ruedas\r
34113100;Jeeps\r
34113200;Vehículos todoterreno\r
34113300;Vehículos de doble tracción\r
34114000;Vehículos especiales\r
34114100;Vehículos de emergencia\r
34114110;Vehículos de salvamento\r
34114120;Vehículos paramédicos\r
34114121;Ambulancias\r
34114122;Vehículos para transporte de pacientes\r
34114200;Automóviles de policía\r
34114210;Vehículos celulares\r
34114300;Vehículos para servicios de asistencia social\r
34114400;Minibuses\r
34115000;Otros automóviles para pasajeros\r
34115200;Vehículos de motor para el transporte de menos de diez personas\r
34115300;Vehículos de transporte usados\r
34120000;Vehículos de motor para el transporte de diez o más personas\r
34121000;Autobuses y autocares\r
34121100;Autobuses de servicio público\r
34121200;Autobuses articulados\r
34121300;Autobuses de dos pisos\r
34121400;Autobuses de plataforma rebajada\r
34121500;Autocares\r
34130000;Vehículos de motor para el transporte de mercancías\r
34131000;"Furgonetas con caja abierta (""pickps"")"\r
34132000;Mototrineos\r
34133000;Camiones articulados\r
34133100;Camiones cisterna\r
34133110;Camiones cisterna para el transporte de combustible\r
34134000;Camiones con plataforma y camiones basculantes\r
34134100;Camiones con plataforma\r
34134200;Camiones basculantes\r
34136000;Camionetas\r
34136100;Camionetas ligeras\r
34136200;Camioneta con caja metálica\r
34137000;Vehículos usados para el transporte de mercancías\r
34138000;Tractores de carretera\r
34139000;Chasis\r
34139100;Chasis con cabina\r
34139200;Chasis con carrocería\r
34139300;Chasis completos\r
34140000;Vehículos pesados\r
34142000;Camiones grúa y camiones volquete\r
34142100;Camiones con plataforma elevadora\r
34142200;Cargadores de hormigonera\r
34142300;Camiones volquete\r
34143000;Vehículos de vialidad invernal\r
34144000;Vehículos de motor para usos especiales\r
34144100;Torres de perforación móviles\r
34144200;Vehículos para servicios de emergencia\r
34144210;Vehículos de extinción de incendios\r
34144211;Camiones con escalera giratoria\r
34144212;Vehículos autobomba\r
34144213;Vehículos de lucha contra incendios\r
34144220;Vehículos de reparación de averías\r
34144300;Puentes móviles\r
34144400;Vehículos para el mantenimiento de carreteras\r
34144410;Vehículos para el vaciado de sumideros\r
34144420;Esparcidores de sal\r
34144430;Barrederas viales automóviles\r
34144431;Barrederasspiradoras automóviles\r
34144440;Vehículos esparcidores de gravilla\r
34144450;Vehículos de riego\r
34144500;Vehículos para desperdicios y aguas residuales\r
34144510;Vehículos para desperdicios\r
34144511;Vehículos de recogida de basuras\r
34144512;Vehículos compactadores de basuras\r
34144520;Camiones cisterna para aguas residuales\r
34144700;Vehículos utilitarios\r
34144710;Cargadoras sobre ruedas\r
34144730;Vehículos de repostaje de aviones\r
34144740;Tractores de avión\r
34144750;Portacargas\r
34144751;Carretillas pórtico\r
34144760;Bibliobuses\r
34144800;Caravanas\r
34144900;Vehículos eléctricos\r
34144910;Autobuses eléctricos\r
34150000;Simuladores\r
34151000;Simuladores de conducción\r
34152000;Simuladores de entrenamiento\r
34200000;Carrocerías para vehículos, remolques o semirremolques\r
34210000;Carrocerías para vehículos\r
34211000;Carrocerías para autobuses, ambulancias y vehículos de transporte de mercancías\r
34211100;Carrocerías para autobuses\r
34211200;Carrocerías para ambulancias\r
34211300;Carrocerías para vehículos de transporte de mercancías\r
34220000;Remolques, semirremolques y contenedores móviles\r
34221000;Contenedores móviles para usos especiales\r
34221100;Unidades móviles para incidentes\r
34221200;Unidades móviles para emergencias\r
34221300;Unidad de intervención en caso de accidente químico\r
34223000;Remolques y semirremolques\r
34223100;Semirremolques\r
34223200;Camiones para repostar\r
34223300;Remolques\r
34223310;Remolques de uso general\r
34223320;Remolques para transporte de caballos\r
34223330;Unidades móviles sobre remolques\r
34223340;Remolques cisterna\r
34223350;Remolques con escalera giratoria\r
34223360;Remolques de repostaje\r
34223370;Remolques volquete\r
34223400;Remolques y semirremolques del tipo caravana\r
34224000;Partes de remolques, semirremolques y otros vehículos\r
34224100;Partes de remolques y semirremolques\r
34224200;Partes de otros vehículos\r
34300000;Partes y accesorios para vehículos y sus motores\r
34310000;Motores y piezas de motores (vehículos)\r
34311000;Motores (vehículos)\r
34311100;Motores de combustión interna para vehículos de motor y motocicletas\r
34311110;Motores de encendido por chispa\r
34311120;Motores de encendido por compresión\r
34312000;Partes de motores\r
34312100;Correas de ventilador\r
34312200;Bujías de encendido\r
34312300;Radiadores para vehículos\r
34312400;Pistones\r
34312500;Juntas de estanqueidad\r
34312600;Bandas transportadoras de caucho\r
34312700;Correas de transmisión de caucho\r
34320000;Piezas de recambio mecánicas, excepto motores y partes de motores\r
34321000;Ejes y cajas de cambio\r
34321100;Ejes\r
34321200;Cajas de cambio\r
34322000;Frenos y partes de frenos\r
34322100;Equipo de frenado\r
34322200;Frenos de disco\r
34322300;Guarniciones de freno\r
34322400;Cojinetes de freno\r
34322500;Zapatas de freno\r
34324000;Ruedas, sus partes y accesorios\r
34324100;Equipo de equilibrado de ruedas\r
34325000;Silenciadores y tubos de escape\r
34325100;Silenciadores\r
34325200;Tubos de escape\r
34326000;Gatos para automóviles, embragues y sus partes\r
34326100;Embragues y sus partes\r
34326200;Gatos para automóviles\r
34327000;Volantes, columnas y cajas de dirección\r
34327100;Volantes\r
34327200;Columnas y cajas de dirección\r
34328000;Bancos de prueba, kits de conversión de vehículos y cinturones de seguridad\r
34328100;Bancos de prueba\r
34328200;Kits para conversión de vehículos\r
34328300;Cinturones de seguridad\r
34330000;Repuestos para vehículos de transporte de mercancías, camionetas y automóviles\r
34350000;Neumáticos para vehículos ligeros y para vehículos pesados\r
34351000;Neumáticos para vehículos ligeros\r
34351100;Neumáticos para automóviles\r
34352000;Neumáticos para vehículos pesados\r
34352100;Neumáticos para camiones\r
34352200;Neumáticos para autobuses\r
34352300;Neumáticos para uso agrario\r
34360000;Asientos para aeronaves civiles\r
34370000;Asientos para vehículos de motor\r
34390000;Accesorios para tractor\r
34400000;Motocicletas, bicicletas y sidecares\r
34410000;Motocicletas\r
34411000;Partes y accesorios para motocicletas\r
34411100;Sidecares para motocicletas\r
34411110;Partes y accesorios de sidecares para motocicleta\r
34411200;Neumáticos para motocicletas\r
34420000;Motocicletas ligeras y bicicletas con motor auxiliar\r
34421000;Motocicletas ligeras\r
34422000;Bicicletas con motor auxiliar\r
34430000;Bicicletas\r
34431000;Bicicletas sin motor\r
34432000;Partes y accesorios para bicicletas\r
34432100;Neumáticos para bicicletas\r
34500000;Buques y barcos\r
34510000;Buques\r
34511100;Patrulleros para la marina\r
34512000;Buques y embarcaciones similares para el transporte de personas o mercancías\r
34512100;Transbordadores\r
34512200;Buques para cruceros\r
34512300;Graneleros\r
34512400;Buques de carga\r
34512500;Buques de mercancías\r
34512600;Buques portacontenedores\r
34512700;Buques para transporte Roo\r
34512800;Buques cisterna\r
34512900;Buques para transporte de automóviles\r
34512950;Buques frigoríficos\r
34513000;Barcos pesqueros, barcos de emergencia y demás barcos especiales\r
34513100;Barcos pesqueros\r
34513150;Buques factoría\r
34513200;Barcos remolcadores\r
34513250;Dragas\r
34513300;Diques flotantes para navegación marítima\r
34513350;Embarcaciones auxiliares de buceo\r
34513400;Pontones grúa\r
34513450;Barcos de producción\r
34513500;Barcos de reconocimiento sísmico\r
34513550;Barcos exploradores\r
34513600;Barcos de control de la contaminación\r
34513650;Naves del servicio antiincendio\r
34513700;Barcos de salvamento\r
34513750;Buques faro\r
34514000;Plataformas flotantes o sumergibles de perforación o explotación\r
34514100;Barcos de sondeo\r
34514200;Plataformas de perforación autoelevadoras\r
34514300;Plataformas elevadoras de perforación\r
34514400;Plataformas de perforación flotantes\r
34514500;Instalación de producción flotante\r
34514600;Plataformas de sondeo semisumergibles\r
34514700;Plataforma móvil\r
34514800;Plataforma flotante\r
34514900;Plataformas de perforación\r
34515000;Estructuras flotantes\r
34515100;Boyas baliza\r
34515200;Balsas inflables\r
34516000;Defensas marinas\r
34520000;Barcos\r
34521000;Barcos especializados\r
34521100;Barcos de vigilancia\r
34521200;Barcos patrulleros aduaneros\r
34521300;Barcos patrulleros policiales\r
34521400;Botes salvavidas\r
34522000;Barcos de recreo y deportivos\r
34522100;Barcos a vela\r
34522150;Catamaranes a vela\r
34522200;Botes de salvamento\r
34522250;Botes a vela\r
34522300;Embarcaciones pequeñas\r
34522350;Botes de fibra de vidrio\r
34522400;Botes semirrígidos\r
34522450;Embarcaciones neumáticas\r
34522500;Botes de caucho\r
34522550;Canoas\r
34522600;Barcos de remos\r
34522700;Embarcaciones de pedales\r
34600000;Locomotoras de ferrocarril y de tranvía, material móvil y sus partes\r
34610000;Locomotoras y ténderes\r
34611000;Locomotoras\r
34612000;Ténderes y funiculares\r
34612100;Ténderes\r
34612200;Funiculares\r
34620000;Material móvil\r
34621000;Vehículos de mantenimiento o de servicio para ferrocarril, y vagones de carga\r
34621100;Vagones de carga\r
34621200;Vehículos de mantenimiento o de servicio para ferrocarril\r
34622000;Coches de pasajeros de tren y tranvía, y trolebuses\r
34622100;Coches de pasajeros de tranvía\r
34622200;Coches de pasajeros de tren\r
34622300;Trolebuses\r
34622400;Vagones de ferrocarril\r
34622500;Furgones de equipaje y para usos especiales\r
34630000;"Partes de locomotoras de ferrocarril o tranvía o material móvil; equipo de control del tráfico de ferrocarriles"\r
34631000;Partes de locomotoras o material móvil\r
34631100;Ruedas monobloque\r
34631200;Topes y enganches\r
34631300;Asientos para material móvil\r
34631400;Ejes de ruedas y neumáticos, y otras partes de locomotoras o de material móvil\r
34632000;Equipo de control del tráfico de ferrocarriles\r
34632100;Señalización mecánica\r
34632200;Equipo eléctrico de señalización para vías férreas\r
34632300;Instalaciones eléctricas para vías férreas\r
34640000;Elementos automotores\r
34700000;Aeronaves y naves espaciales\r
34710000;Helicópteros, aviones, naves espaciales y otras aeronaves propulsadas\r
34711000;Helicópteros y aviones\r
34711100;Aviones\r
34711110;Aeronaves de ala fija\r
34711200;Aeronaves sin piloto\r
34711300;Aeronaves pilotadas\r
34711400;Aeronaves para usos especiales\r
34711500;Helicópteros\r
34712000;Naves espaciales, satélites y vehículos de lanzamiento\r
34712100;Vehículos espaciales\r
34712200;Satélites\r
34712300;Lanzadores de vehículos espaciales\r
34720000;Globos aerostáticos, dirigibles y otras aeronaves sin propulsión\r
34721000;Planeadores\r
34721100;Alas delta\r
34722000;Globos aerostáticos y dirigibles\r
34722100;Globos aerostáticos\r
34722200;Dirigibles\r
34730000;Partes de aeronaves, naves espaciales y helicópteros\r
34731000;Partes de aeronaves\r
34731100;Motores de avión\r
34731200;Turborreactores\r
34731300;Turbopropulsores\r
34731400;Motores de reacción\r
34731500;Partes de motores de aeronaves\r
34731600;Partes de turborreactores o turbopropulsores\r
34731700;Partes de helicópteros\r
34731800;Neumáticos para aviones\r
34740000;Equipamiento, entrenadores, simuladores de vuelo y sus partes para aeronaves o naves espaciales\r
34741000;Equipo relacionado con aeronaves\r
34741100;Dispositivos de lanzamiento de aeronaves\r
34741200;Sistemas de lanzamiento de aeronaves\r
34741300;Dispositivos de frenado sobre cubierta de buques portaaviones\r
34741400;Simuladores de vuelo\r
34741500;Entrenadores de vuelo en tierra\r
34741600;Bolsas para el mareo\r
34900000;Medios de transporte y piezas de recambio diversos\r
34910000;Carros de tracción animal o manual, otros vehículos sin propulsión mecánica, carritos para equipaje y piezas de recambio diversas\r
34911000;Carros de tracción animal o manual y otros vehículos sin propulsión mecánica\r
34911100;Carritos manuales\r
34912000;Carritos para equipaje\r
34912100;Cochecitos de niño\r
34913000;Piezas de recambio diversas\r
34913100;Neumáticos usados\r
34913200;Neumáticos recauchutados\r
34913300;Guardabarros\r
34913400;Relojes para vehículos\r
34913500;Cerraduras para vehículos\r
34913510;Candados de bicicleta\r
34913600;Hélices para buques\r
34913700;Escaleras de vehículos contra incendios\r
34913800;Anclas\r
34920000;Equipo para carreteras\r
34921000;Equipo de mantenimiento de carreteras\r
34921100;Barrederas viales\r
34921200;Barrederas de pistas\r
34922000;Equipo de señalización de carreteras\r
34922100;Marcas viales\r
34922110;Esferillas de vidrio para la señalización horizontal\r
34923000;Equipo de control del tráfico rodado\r
34924000;Señales de mensaje variable\r
34926000;Equipo de control de aparcamientos\r
34927000;Equipo para peajes\r
34927100;Sal para carreteras\r
34928000;Mobiliario para carreteras\r
34928100;Barreras de protección\r
34928110;Medianas\r
34928120;Componentes para barreras\r
34928200;Vallas\r
34928210;Postes de madera\r
34928220;Componentes para cercas\r
34928230;Pantallas acústicas viales\r
34928300;Barreras de seguridad\r
34928310;Vallado de seguridad\r
34928320;Guardarraíles\r
34928330;Dispositivos de protección contra avalanchas\r
34928340;Barreras paranieves\r
34928400;Mobiliario urbano\r
34928410;Balizas\r
34928420;Luces indicadoras de peligro en carreteras\r
34928430;Conos de seguridad\r
34928440;Postes de parada de autobús\r
34928450;Hitos luminosos\r
34928460;Conos de carretera\r
34928470;Señalización\r
34928471;Materiales de señalización\r
34928472;Postes indicadores\r
34928480;Contenedores y cubos de residuos y basura\r
34928500;Equipo de alumbrado de calles\r
34928510;Farolas para el alumbrado de calles\r
34928520;Postes de alumbrado\r
34928530;Lámparas de alumbrado público\r
34929000;Materiales para la red de autopistas\r
34930000;Equipo marino\r
34931000;Equipo portuario\r
34931100;Instalaciones portuarias\r
34931200;Pasarelas de embarque de pasajeros para embarcaciones\r
34931300;Escaleras de embarque de pasajeros para embarcaciones\r
34931400;Simuladores de puente de buque\r
34931500;Equipo de control del tráfico de buques\r
34932000;Equipos de radar\r
34933000;Equipo de navegación\r
34934000;Palas de hélices\r
34940000;Equipo ferroviario\r
34941000;Raíles y accesorios\r
34941100;Varillas\r
34941200;Raíles de vías férreas\r
34941300;Raíles de tranvía\r
34941500;Crucetas\r
34941600;Vías de cruzamiento\r
34941800;Empalmes de vía férrea\r
34942000;Equipo de señalización\r
34942100;Postes de señalización\r
34942200;Cajas de señalización\r
34943000;Sistema de monitorización del tráfico ferroviario\r
34944000;Sistema de calefacción de agujas\r
34945000;Máquinas para alineación de vías\r
34946000;Materiales y suministros para la construcción de vías férreas\r
34946100;Materiales de construcción de vías férreas\r
34946110;Raíles\r
34946120;Material ferroviario\r
34946121;Bridas y placas de asiento\r
34946122;Contracarriles\r
34946200;Materiales para la construcción de vías férreas\r
34946210;Carriles conductores de corriente\r
34946220;Agujas, puntas de corazón, varillas para el mando de agujas y demás elementos para el cruce y cambio de vías\r
34946221;Agujas\r
34946222;Puntas de corazón\r
34946223;Varillas para el mando de agujas\r
34946224;Elementos para el cruce y cambio de vías\r
34946230;Bridas de unión, placas y tirantes de separación\r
34946231;Bridas de unión\r
34946232;Placas y tirantes de separación\r
34946240;Cojinetes y cuñas\r
34947000;Traviesas y partes de traviesas\r
34947100;Traviesas\r
34947200;Partes de traviesas\r
34950000;Equipamiento con amplia capacidad de carga\r
34951000;Plataformas de acceso\r
34951200;Equipo de manipulación de lodos\r
34951300;Instalación de secado de lodos\r
34952000;Elevadores hidráulicos de plataforma\r
34953000;Rampas de acceso\r
34953100;Rampas para transbordador\r
34953300;Pasarelas para pasajeros\r
34954000;Pasarelas de servicio\r
34955000;Dique flotante\r
34955100;Unidad de almacenamiento flotante\r
34960000;Equipo aeroportuario\r
34961000;Sistema de manipulación de equipajes\r
34961100;Equipo de manipulación de equipajes\r
34962000;Equipo de control de tráfico aéreo\r
34962100;Equipo de torre de control\r
34962200;Control del tráfico aéreo\r
34962210;Simulación de control del tráfico aéreo\r
34962220;Sistemas de control del tráfico aéreo\r
34962230;Formación para el control del tráfico aéreo\r
34963000;Sistema de aterrizaje por instrumentos (ILS)\r
34964000;Radiofaro omnidireccional VHF Doppler (DVOR)\r
34965000;Equipo radiotelemétrico (DME)\r
34966000;Radiogoniómetro y radiofaro no direccional\r
34966100;Radiogoniómetro (RDF)\r
34966200;Radiofaro no direccional (NDB)\r
34967000;Sistema de comunicación aeroportuaria (COM)\r
34968000;Sistema de vigilancia aeroportuaria y sistema de iluminación aeroportuaria\r
34968100;Sistema de vigilancia aeroportuaria (SUR)\r
34968200;Sistema de iluminación aeroportuaria (PAPI)\r
34969000;Pasarelas y escaleras de embarque de pasajeros para aeronaves\r
34969100;Pasarelas de embarque de pasajeros para aeronaves\r
34969200;Escaleras de embarque de pasajeros para aeronaves\r
34970000;Equipo para monitorización del tráfico\r
34971000;Equipo de cámara de control de velocidad\r
34972000;Sistema de medición del flujo del tráfico\r
34980000;Billetes de transporte\r
34990000;Equipo de control, seguridad, señalización e iluminación\r
34991000;Luces para iluminación exterior\r
34992000;Señales, incluidas las luminosas\r
34992100;Señales de tráfico luminosas\r
34992200;Pancartas de señalización\r
34992300;Placas indicadoras de calles\r
34993000;Luces para el alumbrado de carreteras\r
34993100;Alumbrado de túneles\r
34994000;Alumbrado para orientación e iluminación de barcos\r
34994100;Alumbrado para orientación e iluminación fluvial\r
34995000;Alumbrado para orientación e iluminación de aeronaves\r
34996000;Equipo de control, seguridad o señalización para carreteras\r
34996100;Semáforos\r
34996200;Equipo de control, seguridad o señalización para vías interiores de navegación\r
34996300;Equipo de control, seguridad o señalización para zonas de estacionamiento\r
34997000;Equipo de control, seguridad o señalización para aeropuertos\r
34997100;Registradores de vuelo\r
34997200;Alumbrado de aeropuertos\r
34997210;Luces de pista\r
34998000;Equipo de control, seguridad o señalización para instalaciones portuarias\r
34999000;"Generadores de señales, separadores de señales de antena (""splitters"") y máquinas de galvanoplastia"\r
34999100;Generadores de señales\r
34999200;"Separadores de señales de antena (""splitters"")"\r
34999300;Máquinas de galvanoplastia\r
34999400;Modelos reducidos a escala\r
34999410;Modelos de aeronaves reducidos a escala\r
34999420;Modelos de barcos reducidos a escala\r
35000000;Equipo de seguridad, extinción de incendios, policía y defensa\r
35100000;Equipo de emergencia y seguridad\r
35110000;Equipo de extinción de incendios, salvamento y seguridad\r
35111000;Equipo de extinción de incendios\r
35111100;Aparatos respiratorios para extinción de incendios\r
35111200;Materiales para extinción de incendios\r
35111300;Extintores\r
35111310;Paquetes de espuma para extintores\r
35111320;Extintores de incendios portátiles\r
35111400;Equipo de evacuación de emergencia\r
35111500;Sistemas de extinción de incendios\r
35111510;Herramientas manuales de extinción de incendios\r
35111520;Espuma para la extinción de incendios o compuestos análogos\r
35112000;Equipo de salvamento y emergencia\r
35112100;Maniquíes para la formación sobre situaciones de emergencia\r
35112200;Ducha de emergencia\r
35112300;Ducha ocular\r
35113000;Equipo de seguridad\r
35113100;Equipo de seguridad del lugar\r
35113110;Sistema de protección de reactores nucleares\r
35113200;Equipo de protección nuclear, biológica, química y radiológica\r
35113210;Equipo de seguridad nuclear\r
35113300;Instalaciones de seguridad\r
35113400;Ropa de protección y de seguridad\r
35113410;Prendas de vestir de protección biológica y química\r
35113420;Prendas de vestir de protección nuclear y radiológica\r
35113430;Chalecos de seguridad\r
35113440;Chalecos reflectantes\r
35113450;Chaquetones o ponchos de protección\r
35113460;Medias o calcetines de protección\r
35113470;Camisas o pantalones de protección\r
35113480;Muñequeras de protección\r
35113490;Vestidos de protección\r
35120000;Sistemas y dispositivos de vigilancia y seguridad\r
35121000;Aparatos e instrumentos de seguridad\r
35121100;Zumbadores\r
35121200;Detectores de dinero falso\r
35121300;Accesorios de seguridad\r
35121400;Sacos de seguridad\r
35121500;Precintos\r
35121600;Marcas\r
35121700;Sistemas de alarma\r
35121800;Espejos convexos de seguridad\r
35121900;Detectores de radar\r
35123000;Equipo de identificación del lugar\r
35123100;Sistema de tarjetas magnéticas\r
35123200;Equipo para horario de trabajo flexible\r
35123300;Sistema de cronometraje\r
35123400;Distintivos de identificación\r
35123500;Sistemas de identificación por vídeo\r
35124000;Detectores de metal\r
35125000;Sistema de vigilancia\r
35125100;Sensores\r
35125110;Sensores biométricos\r
35125200;Sistemas de control horario y aparatos de registro para control horario\r
35125300;Cámaras de seguridad\r
35126000;Equipo de lectura de códigos de barras\r
35200000;Equipo para policía\r
35210000;Blancos para práctica de tiro\r
35220000;Equipo antidisturbios\r
35221000;Cañones de agua\r
35230000;Esposas\r
35240000;Sirenas\r
35250000;Repelentes para ataques caninos\r
35260000;Señales de policía\r
35261000;Paneles de información\r
35261100;Paneles indicadores de mensajes variables\r
35262000;Equipo de señalización de control de cruces\r
35300000;Armas, municiones y sus partes\r
35310000;Armas diversas\r
35311000;Espadas, sables, bayonetas y lanzas\r
35311100;Espadas\r
35311200;Sables\r
35311300;Bayonetas\r
35311400;Lanzas\r
35312000;Pistolas de gas\r
35320000;Armas de fuego\r
35321000;Armas de fuego ligeras\r
35321100;Armas cortas\r
35321200;Fusiles\r
35321300;Ametralladoras\r
35322000;Artillería\r
35322100;Material antiaéreo\r
35322200;Artillería autopropulsada\r
35322300;Artillería remolcada\r
35322400;Morteros\r
35322500;Obuses\r
35330000;Municiones\r
35331000;Municiones para armas de fuego y acciones de guerra\r
35331100;Balas\r
35331200;Proyectiles\r
35331300;Granadas\r
35331400;Minas terrestres\r
35331500;Cartuchos\r
35332000;Municiones para acciones navales de guerra\r
35332100;Torpedos\r
35332200;Minas marinas\r
35333000;Municiones para acciones aéreas de guerra\r
35333100;Bombas (armamento)\r
35333200;Cohetes\r
35340000;Partes de armas de fuego y municiones\r
35341000;Partes de armas de fuego ligeras\r
35341100;Accesorios para tuberías de bronce de cañón\r
35342000;Partes de lanzacohetes\r
35343000;Partes de morteros\r
35400000;Vehículos militares y sus partes\r
35410000;Vehículos militares blindados\r
35411000;Carros de combate\r
35411100;Carros de combate medios\r
35411200;Carros de combate ligeros\r
35412000;Vehículos de combate blindados\r
35412100;Vehículos de combate para infantería\r
35412200;Vehículos de transporte de tropas blindados\r
35412300;Vehículos de transporte de armas blindados\r
35412400;Vehículos de reconocimiento y patrulla\r
35412500;Vehículos de mando y enlace\r
35420000;Partes de vehículos militares\r
35421000;Piezas mecánicas de recambio para vehículos militares\r
35421100;Motores y partes de motores para vehículos militares\r
35422000;Piezas electrónicas y eléctricas de recambio para vehículos militares\r
35500000;Buques de guerra y sus partes\r
35510000;Buques de guerra\r
35511000;Buques de guerra de superficie\r
35511100;Portaaviones\r
35511200;Destructores y fragatas\r
35511300;Corbetas y barcos patrulleros\r
35511400;Embarcaciones y buques anfibios\r
35512000;Submarinos\r
35512100;Submarinos nucleares estratégicos\r
35512200;Submarinos nucleares de ataque\r
35512300;Submarinos diésel de ataque\r
35512400;Vehículos subacuáticos no tripulados\r
35513000;Buques de guerra de minas y buques auxiliares\r
35513100;Cazaminas/dragaminas\r
35513200;Buques auxiliares de investigación\r
35513300;Buques auxiliares de búsqueda de información\r
35513400;Buques hospital/de carga/cisterna/para transporte Roo auxiliares\r
35520000;Partes de buques de guerra\r
35521000;Casco y piezas mecánicas de recambio para buques de guerra\r
35521100;Motores y piezas de motores para buques de guerra\r
35522000;Piezas electrónicas y eléctricas de recambio para buques de guerra\r
35600000;Aeronaves militares, misiles y naves espaciales\r
35610000;Aeronaves militares\r
35611100;Aviones de caza\r
35611200;Cazabombarderos/aviones de ataque contra blancos terrestres\r
35611300;Bombarderos\r
35611400;Aeronaves militares de transporte\r
35611500;Aeronaves de formación\r
35611600;Aviones de patrulla marítima\r
35611700;Aviones cisterna\r
35611800;Aviones de reconocimiento\r
35612100;Helicópteros de combate\r
35612200;Helicópteros antisubmarinos\r
35612300;Helicópteros de apoyo\r
35612400;Helicópteros militares de transporte\r
35612500;Helicópteros de búsqueda y rescate\r
35613000;Vehículos aéreos no tripulados\r
35613100;Vehículos aéreos de combate no tripulados\r
35620000;Misiles\r
35621000;Misiles estratégicos\r
35621100;Misiles antimisiles estratégicos\r
35621200;Misiles balísticos intercontinentales\r
35621300;Misiles balísticos lanzados por submarino\r
35621400;Misiles balísticos de alcance medio\r
35622000;Misiles tácticos\r
35622100;Misiles aireire\r
35622200;Misiles aireierra\r
35622300;Misiles antibuques\r
35622400;Cohetes antisubmarinos\r
35622500;Misiles antimisiles tácticos\r
35622600;Misiles guiados anticarro\r
35622700;Misiles tierraire\r
35623000;Misiles de crucero\r
35623100;Misiles de crucero lanzados desde aire/tierra/mar\r
35630000;Naves especiales militares\r
35631000;Satélites militares\r
35631100;Satélites de comunicación\r
35631200;Satélites de observación\r
35631300;Satélites de navegación\r
35640000;Partes de equipos aeroespaciales militares\r
35641000;Estructura y piezas mecánicas de recambio para equipos aeroespaciales militares\r
35641100;Motores y partes de motores para equipos aeroespaciales militares\r
35642000;Piezas electrónicas y eléctricas de recambio para equipos aeroespaciales militares\r
35700000;Sistemas electrónicos militares\r
35710000;Sistemas de mando, control, comunicación e informáticos\r
35711000;Sistemas de mando, control y comunicación\r
35712000;Sistemas tácticos de mando, control y comunicación\r
35720000;Inteligencia, vigilancia, adquisición de objetivos y reconocimiento\r
35721000;Sistemas electrónicos de inteligencia\r
35722000;Radares\r
35723000;Radares de defensa aérea\r
35730000;Sistemas de guerra electrónica y contramedidas\r
35740000;Simuladores de combate\r
35800000;Equipo individual y de apoyo\r
35810000;Equipo individual\r
35811100;Uniformes para el cuerpo de bomberos\r
35811200;Uniformes de policía\r
35811300;Uniformes militares\r
35812000;Uniformes de combate\r
35812100;Chaquetas de camuflaje\r
35812200;Trajes de combate\r
35812300;Equipos de combate\r
35813000;Cascos militares\r
35813100;Fundas para cascos\r
35814000;Máscaras de gas\r
35815000;Prendas de vestir de protección antibalas\r
35815100;Chalecos antibalas\r
35820000;Equipo de apoyo\r
35821000;Banderas\r
35821100;Mástiles de bandera\r
37000000;Instrumentos musicales, artículos deportivos, juegos, juguetes, artículos de artesanía, materiales artísticos y accesorios\r
37300000;Instrumentos musicales y sus partes\r
37310000;Instrumentos musicales\r
37311000;Instrumentos de teclado\r
37311100;Pianos\r
37311200;Acordeones\r
37311300;Órganos musicales\r
37311400;Celestas\r
37312000;Instrumentos de metal\r
37312100;Trompetas\r
37312200;Trombones\r
37312300;Sousafones\r
37312400;Saxofones\r
37312500;Silbatos\r
37312600;Clarines\r
37312700;Bombardinos\r
37312800;Melófonos\r
37312900;Trompas alto, trompas barítono, fliscornos y trompas dobles\r
37312910;Trompas alto\r
37312920;Trompas barítono\r
37312930;Fliscornos\r
37312940;Trompas dobles\r
37313000;Instrumentos de cuerda\r
37313100;Clavicémbalos\r
37313200;Clavicordios\r
37313300;Guitarras\r
37313400;Violines\r
37313500;Arpas\r
37313600;Banjos\r
37313700;Mandolinas\r
37313800;Violonchelos\r
37313900;Contrabajos\r
37314000;Instrumentos de viento\r
37314100;Clarinetes\r
37314200;Oboes\r
37314300;Cornetas y flautas\r
37314310;Cornetas\r
37314320;Flautas\r
37314400;Flautines\r
37314500;Gaitas\r
37314600;Armónicas\r
37314700;Mirlitones\r
37314800;Cornos ingleses\r
37314900;Ocarinas\r
37315000;Instrumentos musicales con amplificación eléctrica del sonido\r
37315100;Sintetizadores\r
37316000;Instrumentos de percusión\r
37316100;Platillos (instrumento)\r
37316200;Campanas (instrumento)\r
37316300;Panderetas\r
37316400;Castañuelas\r
37316500;Tambores (instrumento)\r
37316600;Xilófonos\r
37316700;Vibráfonos\r
37320000;Partes y accesorios de instrumentos musicales\r
37321000;Accesorios de instrumentos musicales\r
37321100;Metrónomos\r
37321200;Lengüetas\r
37321300;Accesorios para instrumentos de cuerda\r
37321400;Cuerdas para instrumentos y púas\r
37321500;Accesorios para instrumentos de percusión\r
37321600;Fundas y estuches para instrumentos musicales y sus accesorios\r
37321700;Soportes para instrumentos musicales y atriles\r
37322000;Partes de instrumentos musicales\r
37322100;Clavijas de afinación\r
37322200;Cajas de música y mecanismos musicales\r
37322300;Boquillas\r
37322400;Sordinas\r
37322500;Diapasones rectos\r
37322600;Batutas\r
37322700;Almohadillas para flautines\r
37400000;Artículos y material deportivo\r
37410000;Equipo para deportes al aire libre\r
37411000;Equipo de invierno\r
37411100;Equipo de esquí y snowboard\r
37411110;Botas de esquí\r
37411120;Esquís\r
37411130;Palos de esquí\r
37411140;Fijaciones\r
37411150;Tablas de snowboard\r
37411160;Ropa de esquí\r
37411200;Equipo para patinaje y hockey sobre hielo\r
37411210;Discos de hockey\r
37411220;Patines para hielo\r
37411230;Palos de hockey\r
37411300;Ropa y equipo polares\r
37412000;Equipo para deportes acuáticos\r
37412100;Esquís acuáticos\r
37412200;Escafandras y equipo de buceo\r
37412210;Chalecos compensadores\r
37412220;Botellas de aire comprimido\r
37412230;Reguladores de buceo\r
37412240;Instrumentos de buceo y sus accesorios\r
37412241;Aparatos respiratorios de buceo\r
37412242;Equipo de buceo\r
37412243;Trajes protectores contra inmersión en agua fría\r
37412250;Máscaras, aletas y tubos de buceo\r
37412260;Trajes húmedos\r
37412270;Trajes secos\r
37412300;Equipo y accesorios para surf y natación\r
37412310;Tablas de esquí acuático, tablas de kneeboard y tablas boogie board\r
37412320;Equipo para windsurf\r
37412330;Tablas de surf\r
37412340;Gafas y aletas de natación\r
37412350;Equipo de parasailing\r
37413000;Artículos para caza y pesca\r
37413100;Aparejos de pesca\r
37413110;Cañas de pescar\r
37413120;Sedales\r
37413130;Carretes de pesca\r
37413140;Señuelos de pesca\r
37413150;Cebos de pesca\r
37413160;Pesas de pesca\r
37413200;Productos para la caza\r
37413210;Reclamos\r
37413220;Señuelos de caza\r
37413230;Máquinas lanzaplatos\r
37413240;Cañones de escopeta\r
37414000;Material de acampada\r
37414100;Colchones para acampada\r
37414200;Neveras para acampada\r
37414300;Juegos de reparación de tiendas de campaña\r
37414600;Cocinas y hornillos para acampada y uso al aire libre\r
37414700;Refrigeradores de bebidas para acampada\r
37414800;Trajes de supervivencia\r
37415000;Equipo para atletismo\r
37416000;Equipo para actividades de ocio\r
37420000;Equipo de gimnasio\r
37421000;Colchonetas de gimnasia\r
37422000;Barras de gimnasia y de equilibrios\r
37422100;Barras de gimnasia\r
37422200;Barras de equilibrios\r
37423000;Cuerdas y anillas para gimnasia y accesorios para escalada\r
37423100;Cuerdas para gimnasia\r
37423200;Anillas para gimnasia\r
37423300;Accesorios para escalada gimnástica\r
37424000;Equipo para saltos gimnásticos\r
37425000;Trampolines de gimnasia\r
37426000;Equipo para equilibrios\r
37430000;Equipo para boxeo\r
37431000;Cuadriláteros de boxeo\r
37432000;Sacos de boxeo\r
37433000;Guantes de boxeo\r
37440000;Equipo para el ejercicio físico\r
37441000;Equipo para aeróbic\r
37441100;Cintas rodantes\r
37441200;Máquinas escaladoras\r
37441300;Bicicletas estáticas\r
37441400;Remadoras\r
37441500;Cuerdas para saltar\r
37441600;Trampolines para ejercicios\r
37441700;Pelotas para ejercicios\r
37441800;Equipo para steperóbic\r
37441900;Máquinas elípticas\r
37442000;Equipo de entrenamiento con pesas y de resistencia\r
37442100;Pesas\r
37442200;Halteras\r
37442300;Máquinas de resistencia para las partes inferior y superior del cuerpo\r
37442310;Máquinas de resistencia para la parte inferior del cuerpo\r
37442320;Máquinas de resistencia para la parte superior del cuerpo\r
37442400;Bancos de musculación y estantes para pesas\r
37442500;Pesas para el ejercicio físico\r
37442600;Máquinas para Pilates\r
37442700;Tensores de mano\r
37442800;Bandas y tubos de resistencia\r
37442810;Bandas de resistencia\r
37442820;Tubos de resistencia\r
37442900;Máquinas multifuncionales\r
37450000;Equipo para deportes practicados en terreno de juego y en cancha\r
37451000;Equipo para deportes practicados en terreno de juego\r
37451100;Pelotas de béisbol\r
37451110;"""Backtops"" y vallas de béisbol"\r
37451120;Bases de béisbol\r
37451130;Bates de béisbol\r
37451140;Material de ayuda para el bateo (béisbol)\r
37451150;Guantes de béisbol\r
37451160;Equipo de protección para béisbol y sófbol\r
37451200;Equipo de hockey sobre hierba\r
37451210;Pelotas de hockey sobre hierba\r
37451220;Palos de hockey sobre hierba\r
37451300;Balones de fútbol americano\r
37451310;"""Trineos"" de bloqueo para fútbol americano"\r
37451320;Soportes de saque para fútbol americano\r
37451330;"""Dummies"" de placaje para fútbol americano"\r
37451340;Equipo para flag fútbol\r
37451400;Pelotas de lacrosse\r
37451500;Palos de lacrosse\r
37451600;Máquinas lanzapelotas\r
37451700;Balones de fútbol\r
37451710;Equipo de marcado de campos de fútbol\r
37451720;Equipo de protección para fútbol\r
37451730;Material de formación para fútbol\r
37451800;Pelotas de sófbol\r
37451810;Bates de sófbol\r
37451820;Guantes de sófbol\r
37451900;Balones de balonmano\r
37451920;Juegos escolares para balonmano\r
37452000;Equipo para deportes de raqueta y cancha\r
37452100;Equipo de bádminton\r
37452110;Volantes o plumas de bádminton\r
37452120;Raquetas de bádminton\r
37452200;Balones de baloncesto\r
37452210;Sistemas de juego completos de baloncesto\r
37452300;Equipo de protección para floorball\r
37452400;Pelotas, mangos y cuerdas para raquetbol\r
37452410;Pelotas de raquetbol\r
37452420;Mangos para raquetbol\r
37452430;Cuerdas para raquetbol\r
37452500;Raquetas para raquetbol\r
37452600;Equipo de squash\r
37452610;Pelotas de squash\r
37452620;Raquetas de squash\r
37452700;Equipo de tenis\r
37452710;Pelotas de tenis\r
37452720;Equipo para canchas de tenis\r
37452730;Raquetas de tenis\r
37452740;Material de formación para tenis\r
37452800;Pelotas y postes para tetherball\r
37452810;Pelotas para tetherball\r
37452820;Postes para tetherball\r
37452900;Pelotas de voleibol\r
37452910;Postes de voleibol para gimnasio\r
37452920;Material para el almacenamiento de pelotas y redes de voleibol\r
37453000;Equipo de atletismo\r
37453100;Jabalinas\r
37453200;Barras de salto\r
37453300;Discos de lanzamiento\r
37453400;Bolas de lanzamiento de peso\r
37453500;Pértigas\r
37453600;Vallas para saltos\r
37453700;Testigos\r
37460000;Juegos de tiro y mesa y sus equipos\r
37461000;Juegos de mesa y sus equipos\r
37461100;Mesas y accesorios para hockey aéreo\r
37461200;Bolas de futbolín\r
37461210;Jugadores de repuesto para futbolín\r
37461220;Mesas de futbolín\r
37461300;Tacos de billar\r
37461400;Equipo de juego de tejo\r
37461500;Mesas para tenis de mesa\r
37461510;Pelotas de tenis de mesa\r
37461520;Raquetas de tenis de mesa\r
37462000;Juegos de tiro y sus equipos\r
37462100;Equipo de tiro con arco\r
37462110;Protectores de brazo para el tiro con arco\r
37462120;Flechas de tiro con arco\r
37462130;Parapetos para el tiro con arco\r
37462140;Cuerdas de arco para el tiro con arco\r
37462150;Arcos para el tiro con arco\r
37462160;Guantes para el tiro con arco\r
37462170;Soportes de diana para el tiro con arco\r
37462180;Dianas de tiro con arco\r
37462200;Dardos\r
37462210;Dianas para dardos\r
37462300;Dianas para lanzamiento\r
37462400;Equipo para tiro al plato\r
37470000;Equipo para golf y bolos\r
37471000;Equipo para golf\r
37471100;Bolsas de golf\r
37471200;Bolas de golf\r
37471300;Palos de golf\r
37471400;"""Tees"" de golf"\r
37471500;Fundas de cabeza de palo de golf\r
37471600;Guantes de golf\r
37471700;"Herramientas de reparación de ""divots"""\r
37471800;Medidor de distancias para golf\r
37471900;"Dispositivo de práctica de ""putting"""\r
37472000;Equipo para bolos\r
37480000;Máquinas y aparatos para actividades de ocio\r
37481000;Maquinaria de mantenimiento del hielo\r
37482000;Paneles de información deportiva\r
37500000;"Juegos y juguetes; atracciones de feria"\r
37510000;Muñecas\r
37511000;Casas de muñecas\r
37512000;Partes o accesorios de muñecas\r
37513000;Títeres\r
37513100;Teatros de títeres\r
37520000;Juguetes\r
37521000;Instrumentos musicales de juguete\r
37522000;Juguetes con ruedas\r
37523000;Puzzles\r
37524000;Juegos\r
37524100;Juegos educativos\r
37524200;Juegos de tablero\r
37524300;Juegos clásicos\r
37524400;Juegos colaborativos\r
37524500;Juegos de estrategia\r
37524600;Juegos de memoria\r
37524700;Accesorios para juegos\r
37524800;Juegos de lotería\r
37524810;Boletos de lotería\r
37524900;Juegos reunidos\r
37525000;Globos y pelotas\r
37526000;Cubos de juguete\r
37527000;Trenes y vehículos de juguete\r
37527100;Trenes de juguete\r
37527200;Vehículos de juguete\r
37528000;Armas de juguete\r
37529000;Juguetes hinchables y de montar\r
37529100;Juguetes hinchables\r
37529200;Juguetes de montar\r
37530000;Artículos para parques de atracciones, juegos de mesa o de salón\r
37531000;Naipes\r
37532000;Videojuegos\r
37533000;Billares\r
37533100;Bolas de billar\r
37533200;Tizas de billar\r
37533300;Puntas de taco de billar\r
37533400;Triángulos para bolas de billar\r
37533500;Mesas de billar\r
37534000;Juegos accionados con monedas o fichas\r
37535000;Tiovivos, columpios, casetas de tiro y otras atracciones de feria\r
37535100;Columpios\r
37535200;Equipamiento para terrenos de juego\r
37535210;Columpios para parques infantiles\r
37535220;Aparatos para trepar para parques infantiles\r
37535230;Tiovivos para parques infantiles\r
37535240;Toboganes para parques infantiles\r
37535250;Balancines para parques infantiles\r
37535260;Túneles para parques infantiles\r
37535270;Cajones de arena para parques infantiles\r
37535280;Gradas para parques infantiles\r
37535290;Equipo para trepar muros y cuerdas\r
37535291;Equipo para trepar muros\r
37535292;Equipo para trepar cuerdas\r
37540000;Máquinas de juego\r
37800000;Artículos para trabajos artesanales y artísticos\r
37810000;Artículos para trabajos artesanales\r
37820000;Artículos para trabajos artísticos\r
37821000;Pinceles para la pintura artística\r
37822000;Lápices de dibujo\r
37822100;Lápices de colores\r
37822200;Carboncillos\r
37822300;Tizas\r
37822400;Colores pastel\r
37823000;Papel resistente a las grasas y otros artículos de papel\r
37823100;Papel resistente a las grasas\r
37823200;Papel calco\r
37823300;Papel cristal\r
37823400;Papel transparente o translúcido\r
37823500;Papel kraft y papel para trabajos artísticos\r
37823600;Papel de dibujo\r
37823700;Papel para mapas\r
37823800;Papel y cartón multilaminares\r
37823900;"Papel para caras (cubiertas) (""kraftliner"")"\r
38000000;Equipo de laboratorio, óptico y de precisión (excepto gafas)\r
38100000;Instrumentos de navegación y meteorológicos\r
38110000;Instrumentos de navegación\r
38111000;Equipo de radiogoniometría\r
38111100;Brújulas\r
38111110;Accesorios para brújulas\r
38112000;Sextantes\r
38112100;Sistemas de navegación y posicionamiento globales (GPS o equivalentes)\r
38113000;Sonares\r
38114000;Ecosondas\r
38115000;Aparatos de radar\r
38115100;Equipo de vigilancia por radar\r
38120000;Instrumentos de meteorología\r
38121000;Anemómetros\r
38122000;Barómetros\r
38123000;Aparatos de registro de precipitaciones o evaporación\r
38124000;Aparatos de radiosondeo\r
38125000;Pluviógrafos\r
38126000;Aparatos de observación en superficie\r
38126100;Aparatos de observación en superficie de las precipitaciones o la evaporación\r
38126200;Aparatos de observación en superficie de la radiación solar\r
38126300;Aparatos de observación en superficie de la temperatura o la humedad\r
38126400;Aparatos de observación en superficie del viento\r
38127000;Estaciones meteorológicas\r
38128000;Accesorios para instrumentos meteorológicos\r
38200000;Instrumentos geológicos y geofísicos\r
38210000;Brújulas geológicas\r
38220000;Aparatos de prospección geológica\r
38221000;Sistemas de información geográfica (SIG o equivalentes)\r
38230000;Instrumentos geofísicos electromagnéticos\r
38240000;Instrumentos geofísicos de medición de la gravedad\r
38250000;Instrumentos geofísicos de polarización inducida (PI)\r
38260000;Instrumentos geofísicos de magnetometría\r
38270000;Instrumentos geofísicos de resistividad\r
38280000;Gravímetros\r
38290000;Instrumentos y aparatos de geodesia, hidrografía, oceanografía e hidrología\r
38291000;Telémetros\r
38292000;Instrumentos de hidrografía\r
38293000;Equipo sísmico\r
38294000;Teodolitos\r
38295000;Equipo topográfico\r
38296000;Instrumentos de geodesia\r
38300000;Instrumentos de medición\r
38310000;Balanzas de precisión\r
38311000;Básculas electrónicas y sus accesorios\r
38311100;Balanzas electrónicas analíticas\r
38311200;Balanzas electrónicas técnicas\r
38311210;Pesas de calibración\r
38320000;Mesas de dibujo\r
38321000;Máquinas de dibujar\r
38322000;Pantógrafos\r
38323000;Reglas de cálculo\r
38330000;Instrumentos de uso manual para medir longitudes\r
38331000;Escuadras\r
38340000;Instrumentos de medida de cantidades\r
38341000;Aparatos para medir radiaciones\r
38341100;Registradores de haces electrónicos\r
38341200;Dosímetros de radiaciones\r
38341300;Instrumentos de medida de magnitudes eléctricas\r
38341310;Amperímetros\r
38341320;Voltímetros\r
38341400;Contadores geiger\r
38341500;Aparatos para el control de la contaminación\r
38341600;Monitores de radiación\r
38342000;Osciloscopios\r
38342100;Oscilógrafos\r
38343000;Instrumentos para control de errores\r
38344000;Aparatos para el control de la polución\r
38400000;Instrumentos de medida o control de características físicas\r
38410000;Instrumentos de cómputo\r
38411000;Hidrómetros\r
38412000;Termómetros\r
38413000;Pirómetros\r
38414000;Higrómetros\r
38415000;Sicrómetros\r
38416000;PHetros\r
38417000;Termopares\r
38418000;Calorímetros\r
38420000;Instrumentos de medida del caudal, nivel y presión de líquidos y gases\r
38421000;Equipo de medida del caudal\r
38421100;Contadores de agua\r
38421110;Caudalímetros\r
38422000;Equipo de medida del nivel\r
38423000;Equipo de medida de la presión\r
38423100;Manómetros\r
38424000;Equipo de medida y de control\r
38425000;Equipo para la mecánica de fluidos\r
38425100;Manómetros (mecánica de fluidos)\r
38425200;Viscosímetros\r
38425300;Indicador de profundidad\r
38425400;Aparatos de estimación de la estructura\r
38425500;Aparatos de estimación de la fuerza\r
38425600;Picnómetros\r
38425700;Instrumentos para medir la tensión superficial\r
38425800;Densitómetros\r
38426000;Culombímetros\r
38427000;Fluxómetros\r
38428000;Reómetros\r
38429000;Rotámetros\r
38430000;Aparatos de detección y análisis\r
38431000;Aparatos detectores\r
38431100;Aparatos detectores de gas\r
38431200;Aparatos detectores de humos\r
38431300;Buscafugas\r
38432000;Aparatos de análisis\r
38432100;Aparatos analizadores de gas\r
38432200;Cromatógrafos\r
38432210;Cromatógrafos de gas\r
38432300;Aparatos analizadores de humos\r
38433000;Espectrómetros\r
38433100;Espectrómetros de masas\r
38433200;Equipo de medir emisiones\r
38433210;Espectrómetros de emisión\r
38433300;Analizador de espectro\r
38434000;Analizadores\r
38434100;Analizadores de dilatación\r
38434200;Equipo de sonometría\r
38434210;Sonómetros\r
38434220;Analizadores de velocidad del sonido\r
38434300;Equipo medidor del ruido\r
38434310;Aparatos para medir decibelios\r
38434400;Analizadores de vibraciones\r
38434500;Analizadores bioquímicos\r
38434510;Citómetros\r
38434520;Analizadores de sangre\r
38434530;Analizadores de leche\r
38434540;Equipo biomédico\r
38434550;Contadores de células sanguíneas\r
38434560;Analizador químico\r
38434570;Analizadores hematológicos\r
38434580;Analizadores de inmunoensayo\r
38435000;Aparatos de detección de fluidos\r
38436000;Agitadores y sus accesorios\r
38436100;Agitadores mecánicos\r
38436110;Cestas de matraces Erlenmeyer para agitadores\r
38436120;Soportes de matraz Erlenmeyer para agitadores\r
38436130;Soportes de embudos de decantación\r
38436140;Plataformas para soportes de matraz Erlenmeyer para agitadores\r
38436150;Soportes de placas de Petri para agitadores\r
38436160;Soportes de tubos de ensayo para agitadores\r
38436170;Adaptador de matraz para agitadores\r
38436200;Evaporadores rotatorios\r
38436210;Pantalla de protección para evaporadores rotatorios\r
38436220;Sensores de temperatura de ebullición para evaporadores rotatorios\r
38436230;Regulador de presión para evaporadores rotatorios\r
38436300;Agitadores de incubación\r
38436310;Placas térmicas\r
38436320;Placas térmicas para matraces\r
38436400;Agitadores magnéticos\r
38436410;Reguladores térmicos para agitadores mecánicos con placas térmicas\r
38436500;Mezcladores mecánicos\r
38436510;Rotores de paletas para mezcladores mecánicos\r
38436600;Homogeneizadores de inmersión\r
38436610;Instrumentos de dispersión para homogeneizadores de inmersión\r
38436700;Desintegrador ultrasónico\r
38436710;Sondas para desintegradores ultrasónicos\r
38436720;Convertidores para desintegradores ultrasónicos\r
38436730;Cámaras de flujo continuo para desintegradores ultrasónicos\r
38436800;Homogeneizadores de paletas rotatorias\r
38437000;Pipetas de laboratorio y sus accesorios\r
38437100;Pipetas\r
38437110;Puntas de pipeta\r
38437120;Soportes de pipeta\r
38500000;Aparatos de control y prueba\r
38510000;Microscopios\r
38511000;Microscopios electrónicos\r
38511100;Microscopios electrónicos de barrido\r
38511200;Microscopio electrónico de transmisión\r
38512000;Microscopios de iones y moleculares\r
38512100;Microscopios de iones\r
38512200;Microscopios moleculares\r
38513000;Microscopios invertidos y metalográficos\r
38513100;Microscopios invertidos\r
38513200;Microscopios metalográficos\r
38514000;Microscopios de campo oscuro y de sonda de barrido\r
38514100;Microscopios de campo oscuro\r
38514200;Microscopios de sonda de barrido\r
38515000;Microscopios de fluorescencia y polarizantes\r
38515100;Microscopios polarizantes\r
38515200;Microscopios de fluorescencia\r
38516000;Microscopios ópticos compuestos monoculares o binoculares\r
38517000;Microscopios acústicos y de proyección\r
38517100;Microscopios acústicos\r
38517200;Microscopios de proyección\r
38518000;Microscopios de campo amplio y estereoscópicos\r
38518100;Microscopios de campo amplio\r
38518200;Microscopios estereoscópicos\r
38519000;Compuestos diversos para microscopios\r
38519100;Iluminadores para microscopios\r
38519200;Objetivos de microscopio\r
38519300;Dispositivos fotográficos o de vídeo para microscopios\r
38519310;Dispositivos fotográficos para microscopios\r
38519320;Dispositivos de vídeo para microscopios\r
38519400;Platinas automáticas de microscopio\r
38519500;Bombillas de repuesto para microscopio de laboratorio\r
38519600;Oculares, condensadores, lentes colectoras, tubos, platinas y fundas para microscopio\r
38519610;Oculares de microscopio\r
38519620;Condensadores de microscopio\r
38519630;Lentes colectoras de microscopio\r
38519640;Tubos de microscopio\r
38519650;Platinas de microscopio\r
38519660;Fundas para microscopio\r
38520000;Escáneres\r
38521000;Escáneres de presión\r
38522000;Escáneres cromatográficos\r
38527100;Dosímetros con cámaras de ionización\r
38527200;Dosímetros\r
38527300;Sistemas de dosimetría de patrón secundario\r
38527400;Dosímetros para maniquí\r
38530000;Difractógrafos\r
38540000;Máquinas y aparatos de pruebas y medida\r
38541000;Equipos de ensayo de soldabilidad\r
38542000;Aparatos servohidráulicos de pruebas\r
38543000;Equipo de detección de gases\r
38544000;Aparatos detectores de drogas\r
38545000;Kits para análisis de gases\r
38546000;Sistema de detección de explosivos\r
38546100;Detectores de bombas\r
38547000;Sistema de dosimetría\r
38548000;Instrumentos para vehículos\r
38550000;Contadores\r
38551000;Medidores de energía\r
38552000;Contadores electrónicos\r
38553000;Contadores magnéticos\r
38554000;Contadores de electricidad\r
38560000;Contadores de producción\r
38561000;Cuentavueltas\r
38561100;Velocímetros para vehículos\r
38561110;Tacómetros\r
38561120;Taxímetros\r
38562000;Estroboscopios\r
38570000;Instrumentos y aparatos de regulación y control\r
38571000;Limitadores de velocidad\r
38580000;Equipo no médico basado en el uso de radiaciones\r
38581000;Equipo de escáner para equipajes\r
38582000;Equipo de control por rayos X\r
38600000;Instrumentos ópticos\r
38620000;Materias polarizantes\r
38621000;Aparatos de fibra óptica\r
38622000;Espejos\r
38623000;Filtros ópticos\r
38624000;Ayudas ópticas\r
38630000;Instrumentos ópticos y de astronomía\r
38631000;Binoculares\r
38632000;Gafas para visión nocturna\r
38633000;Miras telescópicas\r
38634000;Microscopios ópticos\r
38635000;Telescopios\r
38636000;Instrumentos ópticos especializados\r
38636100;Láseres\r
38636110;Láseres industriales\r
38640000;Dispositivos de cristal líquido\r
38641000;Periscopios\r
38650000;Equipo fotográfico\r
38651000;Cámaras fotográficas\r
38651100;Lentes para cámaras fotográficas\r
38651200;Cuerpos de cámaras fotográficas\r
38651300;Cámaras para la preparación de clisés o cilindros de imprenta\r
38651400;Cámaras fotográficas con autorrevelado\r
38651500;Cámaras cinematográficas\r
38651600;Cámaras fotográficas digitales\r
38652000;Proyectores cinematográficos\r
38652100;Proyectores\r
38652110;Proyectores de diapositivas\r
38652120;Videoproyectores\r
38652200;Ampliadoras\r
38652300;Reductoras\r
38653000;Aparatos para laboratorios fotográficos\r
38653100;Lámparaslash\r
38653110;Lámparas de destello para fotografía\r
38653111;Cubos de destello para fotografía\r
38653200;Ampliadoras fotográficas\r
38653300;Aparatos y equipos para el revelado de películas\r
38653400;Pantallas de proyección\r
38654000;Equipo para microfilmes y microfichas\r
38654100;Equipo para microfilmes\r
38654110;Lectores de microfilmes\r
38654200;Equipo para microfichas\r
38654210;Lectores de microfichas\r
38654300;Equipo para microformatos\r
38654310;Lectores de microformatos\r
38700000;"Registradores de asistencia y contadores similares; parquímetros"\r
38710000;Registradores de asistencia\r
38720000;Fechadores y contadores\r
38730000;Parquímetros\r
38731000;Contadores accionados por fichas\r
38740000;Cronómetros de tiempos de fabricación\r
38750000;Interruptores horarios\r
38800000;Equipo de control de procesos industriales y equipo con mando a distancia\r
38810000;Equipo de control de procesos industriales\r
38820000;Equipo con mando a distancia\r
38821000;Aparatos de radiocontrol\r
38822000;Dispositivos de telecontrol por sirenas\r
38900000;Instrumentos de evaluación o ensayo diversos\r
38910000;Equipo de control y ensayo higiénicos\r
38911000;Kits de ensayo de frotis manuales\r
38912000;Kits de ensayo de frotis automatizados\r
38920000;Equipo para semillas y piensos\r
38921000;Analizadores de grano\r
38922000;Contadores de semillas\r
38923000;Analizadores de piensos\r
38930000;Instrumentos de medición de la humedad\r
38931000;Comprobadores de temperatura y humedad\r
38932000;Medidores de humedad\r
38940000;Instrumentos de evaluación nuclear\r
38941000;Contadores alfa\r
38942000;Contadores alfa beta\r
38943000;Contadores beta\r
38944000;Contadores beta gamma\r
38945000;Contadores gamma\r
38946000;Contadores de kVc\r
38947000;Microanalizadores para radiología\r
38950000;Equipo para reacción en cadena de la polimerasa (PCR)\r
38951000;Equipo para reacción en cadena de la polimerasa (PCR) en tiempo real\r
38960000;Dispositivo antiarranque por alcoholemia\r
38970000;Investigación, ensayos y simuladores científicoécnicos\r
39000000;Mobiliario (incluido el de oficina), complementos de mobiliario, aparatos electrodomésticos (excluida la iluminación) y productos de limpieza\r
39100000;Mobiliario\r
39110000;Asientos, sillas y productos conexos y piezas correspondientes\r
39111000;Asientos\r
39111100;Asientos giratorios\r
39111200;Butacas de teatro\r
39111300;Asientos eyectables\r
39112000;Sillas\r
39112100;Sillas de comedor\r
39113000;Asientos y sillas diversos\r
39113100;Sillones\r
39113200;Sofás\r
39113300;Banquetas\r
39113400;Tumbonas\r
39113500;Taburetes\r
39113600;Bancos para sentarse\r
39113700;Reposapiés\r
39114000;Partes de asientos\r
39114100;Tapizado\r
39120000;Mesas, armarios, escritorios y librerías\r
39121000;Escritorios y mesas\r
39121100;Escritorios\r
39121200;Mesas\r
39122000;Armarios y librerías\r
39122100;Armarios\r
39122200;Librerías\r
39130000;Muebles de oficina\r
39131000;Estanterías de oficina\r
39131100;Estanterías de archivo\r
39132000;Sistemas de archivo\r
39132100;Archivadores\r
39132200;Ficheros\r
39132300;Carpetas colgantes de archivo\r
39132400;Sistemas carrusel\r
39132500;Carritos para oficina\r
39133000;Expositores\r
39134000;Mobiliario de informática\r
39134100;Mesas para equipo informático\r
39135000;Mesas de clasificación\r
39135100;Estructuras de clasificación\r
39136000;Perchas\r
39137000;Ablandadores de agua\r
39140000;Mobiliario doméstico\r
39141000;Muebles y equipo de cocina\r
39141100;Estantes\r
39141200;Encimeras\r
39141300;Armarios vitrina\r
39141400;Cocinas equipadas\r
39141500;Campanas extractoras de humos\r
39142000;Muebles de jardín\r
39143000;Muebles de dormitorio, comedor y cuarto de estar\r
39143100;Muebles de dormitorio\r
39143110;Camas y ropa de cama y pasamanería especializada\r
39143111;Somieres\r
39143112;Colchones\r
39143113;Pasamanería especializada\r
39143114;Mantas eléctricas\r
39143115;Sábanas de hule\r
39143116;Cunas\r
39143120;Muebles de dormitorio distintos de las camas y ropa de cama\r
39143121;Armarios roperos\r
39143122;Cómodas\r
39143123;Mesillas de noche\r
39143200;Muebles de comedor\r
39143210;Mesas de comedor\r
39143300;Muebles de cuarto de estar\r
39143310;Mesitas bajas\r
39144000;Mobiliario de cuarto de baño\r
39145000;Accesorios para bodegas\r
39150000;Mobiliario y equipo diverso\r
39151000;Mobiliario diverso\r
39151100;Estanterías\r
39151200;Bancos de trabajo\r
39151300;Mobiliario modular\r
39152000;Estanterías móviles para libros\r
39153000;Mobiliario para sala de conferencias\r
39153100;Atriles\r
39154000;Equipamiento de exposición\r
39154100;Stands de exposición\r
39155000;Mobiliario de biblioteca\r
39155100;Equipamiento de biblioteca\r
39156000;Mobiliario de recepción y sala de espera\r
39157000;Partes de muebles\r
39160000;Mobiliario escolar\r
39161000;Mobiliario de jardín de infancia\r
39162000;Equipamiento de enseñanza\r
39162100;Material pedagógico\r
39162110;Material escolar\r
39162200;Material y útiles de formación\r
39170000;Mobiliario de tienda\r
39171000;Vitrinas\r
39172000;Mostradores\r
39172100;Barras de hostelería\r
39173000;Unidades de almacenamiento\r
39174000;Rótulos comerciales\r
39180000;Mobiliario de laboratorio\r
39181000;Bancos de laboratorio\r
39190000;Papel para decorar y otros revestimientos\r
39191000;Revestimientos de pared a base de papel o cartón\r
39191100;Papel para decorar\r
39192000;Revestimientos textiles de pared\r
39193000;Revestimientos de piso a base de papel o cartón\r
39200000;Complementos de mobiliario\r
39220000;Equipo de cocina, artículos de uso doméstico y artículos de catering\r
39221000;Equipo de cocina\r
39221100;Utensilios de cocina\r
39221110;Loza\r
39221120;Tazas y vasos\r
39221121;Tazas\r
39221122;Tacitas\r
39221123;Artículos de vidrio para beber\r
39221130;Recipientes para comida\r
39221140;Cantimploras\r
39221150;Termos\r
39221160;Bandejas\r
39221170;Escurridores\r
39221180;Utensilios para cocinar\r
39221190;Escurreplatos\r
39221200;Servicios de mesa\r
39221210;Platos\r
39221220;Fuentes\r
39221230;Platillos\r
39221240;Tazones\r
39221250;Decantadoras\r
39221260;Escudillas de campaña\r
39222000;Artículos para catering\r
39222100;Artículos desechables para catering\r
39222110;Cubiertos y platos desechables\r
39222120;Tazas desechables\r
39222200;Bandejas para comida\r
39223000;Cucharas y tenedores\r
39223100;Cucharas\r
39223200;Tenedores\r
39224000;Escobas y cepillos y otros artículos de diversos tipos\r
39224100;Escobas\r
39224200;Cepillos\r
39224210;Brochas de pintor\r
39224300;Escobas y cepillos y otros artículos de limpieza del hogar\r
39224310;Escobillas para el inodoro\r
39224320;Esponjas\r
39224330;Cubos\r
39224340;Cubos de basura\r
39224350;Recogedores\r
39225000;Encendedores, artículos de material combustible, de pirotecnia, cerillas y combustibles líquidos o de gas licuado\r
39225100;Encendedores\r
39225200;Aleaciones pirofóricas\r
39225300;Cerillas\r
39225400;Gas para encendedores\r
39225500;Artículos pirotécnicos\r
39225600;Velas\r
39225700;Botellas, jarros y redomas\r
39225710;Botellas\r
39225720;Jarros\r
39225730;Redomas\r
39226000;Garrafas, cajas de botellas, frascos y bobinas\r
39226100;Cajas de botellas\r
39226200;Garrafas y frascos\r
39226210;Garrafas\r
39226220;Frascos\r
39226300;Carretes o bobinas\r
39227000;Agujas de coser y tejer y dedales\r
39227100;Agujas de coser o agujas de tejer\r
39227110;Agujas de coser\r
39227120;Agujas de tejer\r
39227200;Dedales\r
39230000;Producto para usos especiales\r
39234000;Cajas para compost\r
39235000;Fichas\r
39236000;Cabinas de pintura\r
39237000;Postes indicadores del nivel de nieve\r
39240000;Cubertería\r
39241000;Cuchillos y tijeras\r
39241100;Cuchillos\r
39241110;Cuchillos de mesa\r
39241120;Cuchillos de cocina\r
39241130;Cúteres\r
39241200;Tijeras\r
39254000;Relojería\r
39254100;Relojes, excepto de pulsera o de bolsillo\r
39254110;Despertadores\r
39254120;Relojes de pared\r
39254130;Cristal para relojes de pared\r
39260000;Bandejas de distribución y material de escritorio\r
39261000;Bandejas de distribución\r
39263000;Material de escritorio\r
39263100;Juegos de escritorio\r
39264000;Accesorios para clasificadores de hojas intercambiables o para archivadores\r
39265000;Corchetes y hebillas\r
39270000;Artículos religiosos\r
39290000;Complementos de mobiliario diversos\r
39291000;Material de lavandería\r
39292000;Pizarras o tableros escolares con superficies o utensilios para escribir o dibujar\r
39292100;Encerados\r
39292110;Borradores para encerados\r
39292200;Pizarras para escribir\r
39292300;Utensilios de dibujo\r
39292400;Utensilios de escritura\r
39292500;Reglas\r
39293000;Productos artificiales\r
39293100;Fruta artificial\r
39293200;Flores artificiales\r
39293300;Hierba artificial\r
39293400;Césped artificial\r
39293500;Bisutería\r
39294000;Aparatos y material diseñados para demostraciones\r
39294100;Productos de información y promoción\r
39295000;"Paraguas y sombrillas; bastones y bastonessiento"\r
39295100;Sombrillas\r
39295200;Paraguas\r
39295300;Bastonessiento\r
39295400;Bastones\r
39295500;Partes, adornos y accesorios de paraguas, sombrillas, bastones y artículos similares\r
39296000;Artículos funerarios\r
39296100;Ataúdes\r
39297000;Suministros para cuartel\r
39298000;Estatuillas, objetos de adorno, marcos para fotografías o para cuadros y espejos\r
39298100;Marcos para fotografías\r
39298200;Marcos para cuadros\r
39298300;Floreros\r
39298400;Estatuillas\r
39298500;Objetos de adorno\r
39298600;Globos\r
39298700;Trofeos\r
39298800;Acuarios\r
39298900;Artículos de decoración diversos\r
39298910;Árboles de Navidad\r
39299000;Artículos de cristal\r
39299100;Ampollas de vidrio\r
39299200;Vidrio de seguridad\r
39299300;Espejos de vidrio\r
39300000;Equipo diverso\r
39310000;Equipo de catering\r
39311000;Equipo ligero de catering\r
39312000;Equipo para preparación de comidas\r
39312100;Cortadoras de carne\r
39312200;Equipo de cantina\r
39313000;Equipo de hostelería\r
39314000;Equipo para cocinas industriales\r
39315000;Equipo de restaurante\r
39330000;Equipo de desinfección\r
39340000;Equipo para red de distribución de gas\r
39341000;Equipo para la presión del gas\r
39350000;Equipo para estaciones de depuración\r
39360000;Equipo de sellado\r
39370000;Instalaciones de tratamiento de aguas\r
39500000;Artículos textiles\r
39510000;Artículos textiles para uso doméstico\r
39511000;Mantas y mantas de viaje\r
39511100;Mantas\r
39511200;Mantas de viaje\r
39512000;Ropa de cama\r
39512100;Sábanas\r
39512200;Fundas de edredón\r
39512300;Fundas de colchones\r
39512400;Edredones\r
39512500;Fundas de almohada\r
39512600;Fundas de almohadón\r
39513000;Ropa de mesa\r
39513100;Manteles\r
39513200;Servilletas de mesa\r
39514000;Ropa de tocador y de cocina\r
39514100;Toallas\r
39514200;Paños de vajilla\r
39514300;Toalla continua\r
39514400;Dispensadores automáticos de papel toalla\r
39514500;Paños de tocador\r
39515000;Cortinas, cortinajes, guardamalletas y estores de materia textil\r
39515100;Cortinas\r
39515110;Cortinas de contención de humos\r
39515200;Cortinajes\r
39515300;Guardamalletas\r
39515400;Estores\r
39515410;Estores de interior\r
39515420;Estores de tela\r
39515430;Persianas venecianas\r
39515440;Persianas verticales\r
39516000;Artículos de mobiliario\r
39516100;Tejidos para mobiliario\r
39516110;Cojines\r
39516120;Almohadas\r
39518000;Ropa de hospital\r
39518100;Ropa blanca para quirófano\r
39518200;Sábanas para quirófano\r
39520000;Artículos textiles de confección\r
39522000;Lonas, velas para embarcaciones, tablas de vela o carros de vela, toldos, persianas, tiendas de campaña y artículos para acampar\r
39522100;Lonas, toldos y estores de exterior\r
39522110;Lonas\r
39522120;Toldos\r
39522130;Estores de exterior\r
39522200;Fundas de camuflaje\r
39522400;Velas para embarcaciones\r
39522500;Artículos de acampada de materia textil\r
39522510;Colchones neumáticos\r
39522520;Camas de acampada\r
39522530;Tiendas de campaña\r
39522540;Sacos de dormir\r
39522541;Sacos de dormir rellenos de plumas o de plumón\r
39523000;Paracaídas\r
39523100;Paracaídas dirigibles\r
39523200;Paracaídas con aspas giratorias\r
39525000;Artículos textiles manufacturados diversos\r
39525100;Bayetas para el polvo\r
39525200;Elementos de tela para filtros\r
39525300;Chalecos salvavidas\r
39525400;Mantas ignífugas\r
39525500;Mosquiteros\r
39525600;Paños de cocina\r
39525700;Cinturones salvavidas\r
39525800;Bayetas\r
39525810;Trapos para encerar\r
39530000;Alfombras, esteras y alfombrillas\r
39531000;Alfombras\r
39531100;Alfombrado de nudos\r
39531200;Alfombrado tejido\r
39531300;Alfombrado de pelo insertado\r
39531310;Losetas de moqueta\r
39531400;Alfombrado\r
39532000;Esteras\r
39533000;Alfombrillas\r
39534000;Alfombrado industrial\r
39540000;Cordaje diverso, cuerda, bramante y redes\r
39541000;Cordaje, cuerda, bramante y redes\r
39541100;Bramante, cordaje y cuerda\r
39541110;Cuerda\r
39541120;Cordaje\r
39541130;Cordel\r
39541140;Bramante\r
39541200;Redes de materia textil\r
39541210;Redes de malla anudada\r
39541220;Eslingas\r
39542000;Trapos\r
39550000;Artículos no tejidos\r
39560000;Artículos textiles diversos\r
39561000;Tul, encaje, cintas y galones, artículos de pasamanería y bordados\r
39561100;"Cintas y galones; artículos de pasamanería"\r
39561110;Cinta\r
39561120;Cinta de materia textil\r
39561130;Etiquetas y escudos de materia textil\r
39561131;Etiquetas de materia textil\r
39561132;Escudos de materia textil\r
39561133;Insignias\r
39561140;Artículos de pasamanería y ornamentales\r
39561141;Trenzas\r
39561142;Hombreras\r
39561200;Tejidos de punto de malla\r
39562000;Fieltro\r
39563000;Guata de materias textiles, hilados, tejidos y artículos textiles para usos técnicos\r
39563100;Guata de materias textiles\r
39563200;Hilados metalizados\r
39563300;Tejidos de hilos de metal\r
39563400;Tejidos impregnados, recubiertos o revestidos\r
39563500;Artículos textiles para usos técnicos\r
39563510;Mangueras de materia textil\r
39563520;Cintas transportadoras de materia textil\r
39563530;Conductos de ventilación\r
39563600;Productos textiles acolchados\r
39700000;Aparatos domésticos\r
39710000;Aparatos electrodomésticos\r
39711000;Aparatos electrodomésticos destinados a los alimentos\r
39711100;Refrigeradores y congeladores\r
39711110;Combinaciones de refrigerador y congeladoronservador\r
39711120;Congeladores\r
39711121;Congeladores de arcón\r
39711122;Congeladores domésticos\r
39711123;Congeladores verticales\r
39711124;Congeladores industriales\r
39711130;Refrigeradores\r
39711200;Procesadores de alimentos\r
39711210;Licuadoras\r
39711211;Batidoras\r
39711300;Aparatos electrotérmicos\r
39711310;Cafeteras eléctricas\r
39711320;Teteras eléctricas\r
39711330;Tostadores eléctricos\r
39711340;Calientaplatos\r
39711350;Aparatos para hacer barquillos\r
39711360;Hornos\r
39711361;Hornos eléctricos\r
39711362;Hornos de microondas\r
39711400;Asadores, placas calentadoras y hornillos\r
39711410;Asadores\r
39711420;Placas para calentar comidas\r
39711430;Placas calentadoras\r
39711440;Hornillos\r
39711500;Abrelatas\r
39712000;Aparatos electrodomésticos para el cuidado del cuerpo humano\r
39712100;Máquinas de cortar el pelo\r
39712200;Aparatos de peluquería\r
39712210;Secadores de pelo\r
39712300;Aparatos para secar las manos\r
39713000;"Aparatos electrodomésticos para la limpieza; alisadores"\r
39713100;Lavavajillas\r
39713200;Lavadoras y secadoras\r
39713210;Lavadorasecadoras\r
39713211;Unidad de secado y prensado\r
39713300;Compactadores de basuras\r
39713400;Máquinas para mantenimiento de pisos\r
39713410;Máquinas para limpieza de pisos\r
39713420;Enceradoras de pisos\r
39713430;Aspiradoras\r
39713431;Accesorios para aspiradoras\r
39713500;Planchas eléctricas\r
39713510;Planchas de vapor\r
39714000;Campanas aspirantes para extracción o reciclado\r
39714100;Mecanismos de ventilación\r
39714110;Mecanismos de ventilación mediante extracción\r
39715000;"Calentadores de agua y calefacción para edificios; equipo de instalación sanitaria"\r
39715100;Calentadores eléctricos de agua, instantáneos o de acumulación, y calentadores de inmersión\r
39715200;Equipo de calefacción\r
39715210;Equipo de calefacción central\r
39715220;Resistencias eléctricas de calentamiento\r
39715230;Aparatos eléctricos para la calefacción del suelo\r
39715240;Aparatos eléctricos de calefacción de locales\r
39715300;Equipo de fontanería\r
39716000;Partes de aparatos electrodomésticos\r
39717000;Ventiladores y aparatos de aire acondicionado\r
39717100;Ventiladores\r
39717200;Aparatos de aire acondicionado\r
39720000;Aparatos domésticos no eléctricos\r
39721000;Aparatos domésticos para cocinar o calentar\r
39721100;Aparatos domésticos para cocinar\r
39721200;Frigoríficos de gas\r
39721300;Generadores o distribuidores de aire caliente no eléctricos\r
39721310;Generadores de aire caliente\r
39721320;Secadores de aire\r
39721321;Secadores de aire comprimido\r
39721400;Calentadores de agua, instantáneos o de acumulación, no eléctricos\r
39721410;Aparatos de gas\r
39721411;Calentadores de gas\r
39722000;Partes de estufas, cocinas, calientaplatos y aparatos domésticos\r
39722100;Partes de estufas\r
39722200;Partes de cocinas\r
39722300;Partes de calientaplatos\r
39800000;Productos de limpieza y pulido\r
39810000;Preparaciones odoríferas y ceras\r
39811000;Preparaciones para perfumar o desodorizar ambientes\r
39811100;Ambientadores\r
39811110;Dispensadores ambientadores\r
39811200;Purificadores de aire\r
39811300;Desodorizadores\r
39812000;Betunes y cremas\r
39812100;Ceras para pisos\r
39812200;Betunes para calzado\r
39812300;Encáusticos\r
39812400;Compuestos absorbentes para barrer\r
39812500;Agentes de estanqueidad\r
39813000;Pastas y polvos para fregar\r
39820000;Agentes orgánicos tensoactivos\r
39821000;Limpiadores con amoniaco\r
39822000;Limpiadores cáusticos\r
39830000;Productos de limpieza\r
39831000;Preparados para lavar\r
39831100;Dispersantes\r
39831200;Detergentes\r
39831210;Detergentes para lavavajillas\r
39831220;Agentes desengrasantes\r
39831230;Digestores de grasa\r
39831240;Compuestos para limpieza\r
39831250;Soluciones para enjuague\r
39831300;Limpiasuelos\r
39831400;Limpiapantallas\r
39831500;Productos de limpieza para coches\r
39831600;Limpiainodoros\r
39831700;Dispensadores automáticos de jabón\r
39832000;Productos para el lavavajillas\r
39832100;Detergentes en polvo para el lavavajillas\r
39833000;Productos contra el polvo\r
39834000;Soluciones para limpiar joyas\r
41000000;Agua recogida y depurada\r
41100000;Agua natural\r
41110000;Agua potable\r
41120000;Agua no potable\r
42000000;Maquinaria industrial\r
42100000;Maquinaria para producción y uso de energía mecánica\r
42110000;Turbinas y motores\r
42111000;Motores (potencia motriz)\r
42111100;Motores fueraborda para propulsión marina\r
42112000;Instalaciones de turbinas\r
42112100;Turbinas de vapor de agua\r
42112200;Turbinas hidráulicas\r
42112210;Ruedas hidráulicas\r
42112300;Turbinas de gas\r
42112400;Equipo de turbina\r
42112410;Instrumentos para turbinas\r
42113000;Partes de turbinas\r
42113100;Partes de turbinas de vapor de agua\r
42113110;Placas de asiento\r
42113120;Entubado de revestimiento\r
42113130;Sistemas de refrigeración de aire por condensador\r
42113150;Sistemas de lubrificación\r
42113160;Separadores de humedad\r
42113161;Deshumectadores\r
42113170;Equipo rotatorio\r
42113171;Rotores\r
42113172;Álabes\r
42113190;Mecanismos de rotación\r
42113200;Partes de turbinas hidráulicas\r
42113300;Partes de turbinas de gas\r
42113310;Sistemas de admisión de aire\r
42113320;Módulo de inyección de gas\r
42113390;Sistemas de gas combustible\r
42113400;Partes de ruedas hidráulicas\r
42120000;Bombas y compresores\r
42121000;Máquinas y motores hidráulicos o neumáticos\r
42121100;Cilindros hidráulicos o neumáticos\r
42121200;Motores hidráulicos (vehículos)\r
42121300;Motores neumáticos (vehículos)\r
42121400;Motores hidráulicos (potencia motriz)\r
42121500;Motores neumáticos (potencia motriz)\r
42122000;Bombas (equipos de bombeo)\r
42122100;Bombas para líquidos\r
42122110;Bombas para extinción de incendios\r
42122120;Dispositivos de repostaje de helicópteros\r
42122130;Bombas de agua\r
42122160;Bombas de enfriamiento\r
42122161;Bombas de agua de enfriamiento\r
42122170;Bombas de lubrificación\r
42122180;Bombas de alimentación de combustible\r
42122190;Bombas de hormigón\r
42122200;Bombas alternativas de desplazamiento positivo para líquidos\r
42122210;Grupos hidráulicos\r
42122220;Bombas para aguas residuales\r
42122230;Bombas dosificadoras\r
42122300;Elevadores de presión para líquidos\r
42122400;Bombas centrífugas y elevadores de líquidos\r
42122410;Bombas para uso médico\r
42122411;Bombas para uso nutricional\r
42122419;Bombas de perfusión\r
42122420;Elevadores de líquidos\r
42122430;Bombas centrífugas\r
42122440;Bombas rotatorias\r
42122450;Bombas de vacío\r
42122460;Bombas de aire\r
42122480;Bombas de impulsor\r
42122500;Bombas de laboratorio y accesorios\r
42122510;Bombas peristálticas\r
42123000;Compresores\r
42123100;Compresores de gas\r
42123200;Compresores rotatorios\r
42123300;Compresores para equipos frigoríficos\r
42123400;Compresores de aire\r
42123410;Compresores de aire montados\r
42123500;Turbocompresores\r
42123600;Compresores volumétricos alternativos\r
42123610;Grupo de aire comprimido\r
42123700;Compresores centrífugos\r
42123800;Compresores para aeronaves civiles\r
42124000;Partes de bombas, compresores, máquinas o motores\r
42124100;Partes de máquinas o motores\r
42124130;Partes de máquinas neumáticas\r
42124150;Partes de máquinas o motores hidráulicos\r
42124170;Partes de motores de reacción\r
42124200;Partes de bombas o elevadores de líquidos\r
42124210;Partes de bombas para combustible, manuales y para hormigón\r
42124211;Partes de bombas para combustible\r
42124212;Partes de bombas manuales\r
42124213;Partes de bombas de hormigón\r
42124220;Partes de bombas alternativas de desplazamiento positivo\r
42124221;Partes de grupos hidráulicos\r
42124222;Partes de bombas dosificadoras\r
42124230;Partes de bombas rotativas de desplazamiento positivo\r
42124290;Partes de bombas centrífugas\r
42124300;Partes de bombas de aire o de vacío, de compresores de aire o de gas\r
42124310;Partes de bombas de aire\r
42124320;Partes de bombas de vacío\r
42124330;Partes de compresores de aire\r
42124340;Partes de compresores de gas\r
42130000;Grifos, llaves, válvulas y aparatos similares\r
42131000;Grifos, llaves y válvulas\r
42131100;Válvulas definidas según su función\r
42131110;Válvulas de radiador de calefacción central\r
42131120;Válvulas de esclusa\r
42131130;Reguladores de temperatura\r
42131140;Válvulas reductoras de presión, de control, de registro o seguridad\r
42131141;Válvulas reductoras de presión\r
42131142;Válvulas de control\r
42131143;Válvulas de regulación de crecidas\r
42131144;Válvulas de regulación\r
42131145;Válvulas de registro\r
42131146;Válvulas antirretorno\r
42131147;Válvulas de seguridad\r
42131148;Válvulas de cierre\r
42131150;Válvulas de columnas hidráulicas\r
42131160;Hidrantes\r
42131170;Válvulas de escape de botellas y bombonas de gas\r
42131200;Válvulas definidas según su construcción\r
42131210;Válvulas de cuchilla\r
42131220;Válvulas de tubería forzada\r
42131230;Válvulas de compuerta\r
42131240;Válvulas de asiento\r
42131250;Válvulas de aguja\r
42131260;Válvulas esféricas\r
42131270;Válvulas de obturación (de macho cónico)\r
42131280;Válvulas de mariposa\r
42131290;Válvulas de membrana\r
42131291;Válvulas de corredera\r
42131292;Válvulas de clapeta\r
42131300;"""Árboles de Navidad"" y demás conjuntos de válvulas"\r
42131310;"""Árboles de Navidad"" de plataforma petrolífera"\r
42131320;Colectores de estrangulamiento\r
42131390;Conjuntos de válvulas\r
42131400;Grifos, llaves para uso sanitario\r
42132000;Partes de grifos y válvulas\r
42132100;Servoválvulas\r
42132110;Servoválvulas eléctricas\r
42132120;Servoválvulas hidráulicas\r
42132130;Servoválvulas neumáticas\r
42132200;Partes de grifos\r
42132300;Partes de válvulas\r
42140000;Engranajes, ruedas de fricción y elementos de transmisión\r
42141000;Engranajes, ruedas de fricción y elementos de transmisión cilíndricoectos\r
42141100;Árboles de transmisión, árboles de levas y cigüeñales\r
42141110;Árboles de transmisión\r
42141120;Árboles de levas\r
42141130;Cigüeñales\r
42141200;Cajas de cojinetes\r
42141300;Engranajes y ruedas de fricción\r
42141400;Volantes y poleas\r
42141410;Chigres\r
42141500;Embragues\r
42141600;Motones\r
42141700;Órganos de acoplamiento\r
42141800;Juntas de articulación\r
42142000;Partes de ruedas de fricción y de elementos de transmisión\r
42142100;Partes de ruedas de fricción\r
42142200;Partes de elementos de transmisión\r
42150000;Reactores nucleares y sus partes\r
42151000;Reactores nucleares\r
42152000;Partes de reactores nucleares\r
42152100;Sistemas de refrigeración de reactores\r
42152200;Partes de cubas de seguridad de reactores nucleares\r
42160000;Instalaciones de calderas\r
42161000;Calderas de agua caliente\r
42162000;Calderas generadoras de vapor\r
42163000;Generadores de vapor\r
42164000;Instalaciones auxiliares para calderas\r
42165000;Condensadores de vapor\r
42200000;Máquinas y aparatos para la elaboración de alimentos, bebidas y tabaco, y sus partes\r
42210000;Máquinas y aparatos para la elaboración de alimentos, bebidas y tabaco\r
42211000;Máquinas y aparatos para la industria lechera\r
42211100;Desnatadoras centrífugas\r
42212000;Máquinas y aparatos para procesar cereales o legumbres secas\r
42213000;Máquinas y aparatos usados para la producción de bebidas alcohólicas o jugos de frutas\r
42214000;Hornos de cocina, secadores para productos agrícolas y equipo para cocinar o calentar\r
42214100;Hornos de cocina\r
42214110;Parrillas\r
42214200;Secadores para productos agrícolas\r
42215000;Máquinas y aparatos para la preparación o la fabricación industrial de alimentos o bebidas\r
42215100;Máquinas y aparatos para cortar alimentos\r
42215110;Rebanadoras de pan\r
42215120;Cortafiambres\r
42215200;Máquinas y aparatos para procesar alimentos\r
42215300;Máquinas para la fabricación de pastas alimenticias\r
42216000;Máquinas y aparatos para procesar tabaco\r
42220000;Partes de máquinas y aparatos para procesar alimentos, bebidas y tabaco\r
42221000;Partes de máquinas y aparatos para procesar alimentos\r
42221100;Partes de máquinas y aparatos para la industria láctea\r
42221110;Partes de ordeñadoras\r
42222000;Partes de máquinas y aparatos para procesar bebidas\r
42223000;Partes de máquinas y aparatos para procesar tabaco\r
42300000;Hornos e incineradores industriales o de laboratorio\r
42310000;Quemadores para la alimentación de hornos\r
42320000;Incineradores de residuos\r
42330000;Hornos de fusión\r
42340000;Hornos de uso no doméstico\r
42341000;Hornos comerciales\r
42350000;Crematorios\r
42390000;Partes de quemadores o de hornos\r
42400000;Equipos de elevación y manipulación, y sus partes\r
42410000;Equipos de elevación y de manipulación\r
42411000;Polipastos y elevadores\r
42412000;"Tornos para los pozos de minas; tornos para el interior de las minas; cabrestantes"\r
42412100;Tornos para los pozos de minas y tornos para el interior de las minas\r
42412110;Máquinas extractoras\r
42412120;Tornos para el interior de las minas\r
42412200;Cabrestantes\r
42413000;Gatos y elevadores de vehículos\r
42413100;Elevadores fijos\r
42413200;Gatos hidráulicos\r
42413300;Gatos neumáticos\r
42413400;Gatos mecánicos\r
42413500;Elevadores de vehículos\r
42414000;Grúas, pórticos móviles sobre neumáticos y carretillas grúa\r
42414100;Grúas\r
42414110;Grúas de puerto\r
42414120;Grúas de muelle\r
42414130;Grúas de apilamiento\r
42414140;Grúas de contenedores\r
42414150;Grúas de torre\r
42414200;Puentes rodantes\r
42414210;Grúa locomóvil\r
42414220;Puente transbordador\r
42414300;Grúas de brazo de pórtico\r
42414310;Pórticos móviles\r
42414320;Postes grúa\r
42414400;Grúas montadas en vehículos\r
42414410;Grúas para camiones\r
42414500;Puentes grúa\r
42415000;Carretillas elevadoras de horquilla, carretillasutomóviles, carretillas tractor de estación de ferrocarril\r
42415100;Carretillas elevadoras\r
42415110;Carretillas elevadoras de horquilla\r
42415200;Carretillasutomóviles\r
42415210;Carretillasutomóviles dotadas de equipo para manipulación\r
42415300;Carretillas tractor del tipo de las utilizadas en las estaciones de ferrocarril\r
42415310;Vehículos con dirección inalámbrica\r
42415320;Equipamiento para vehículos de emergencia\r
42416000;Ascensores, montacargas de cajón de vía inclinada, aparatos de elevación, escaleras mecánicas y pasillos móviles\r
42416100;Ascensores\r
42416110;Elevadores para bañeras\r
42416120;Montacargas pequeños\r
42416130;Elevadores mecánicos\r
42416200;Montacargas de cajón de vía inclinada\r
42416210;Elevadores de recipientes acumuladores\r
42416300;Aparatos de elevación\r
42416400;Escaleras mecánicas\r
42416500;Pasillos móviles\r
42417000;Elevadores y transportadores\r
42417100;Elevadores o transportadores neumáticos\r
42417200;Transportadores\r
42417210;Elevadores o transportadores, de acción continua, de tipo cangilón\r
42417220;Elevadores o transportadores de acción continua, de banda o correa\r
42417230;Transportadores para minería con blindaje frontal\r
42417300;Equipo de transporte\r
42417310;Correas transportadoras\r
42418000;Máquinas de elevación, manipulación, carga o descarga\r
42418100;Empujavagones para minas y transbordadores de locomotoras o vagones\r
42418200;Equipo de monocarril o de remonte de esquí\r
42418210;Monorraíles aéreos\r
42418220;Telesillas\r
42418290;Equipo de telesquís\r
42418300;Equipos de recogida con punta abocinada\r
42418400;Carruseles para almacenamiento y recuperación\r
42418500;Equipo mecánico de manipulación\r
42418900;Maquinaria de carga o manipulación\r
42418910;Equipo de carga\r
42418920;Equipo de descarga\r
42418930;Cargadores laterales\r
42418940;Equipo de manipulación de contenedores\r
42419000;Partes de equipos de elevación y manipulación\r
42419100;Partes de grúas\r
42419200;Partes de carretillasutomóviles\r
42419500;Partes de ascensores, montacargas de cajón de vía inclinada o escaleras mecánicas\r
42419510;Partes de ascensores\r
42419520;Partes de montacargas de cajón de vía inclinada\r
42419530;Partes de escaleras mecánicas\r
42419540;Partes de pasillos móviles\r
42419800;Partes de transportadores\r
42419810;Partes de correas transportadoras\r
42419890;Partes de transportadores de tipo cangilón\r
42419900;Partes de cabrestantes y demás equipos de elevación o manipulación\r
42420000;Cangilones, cucharas, cucharas de almeja, palas y garras o pinzas para grúas o excavadoras\r
42500000;Equipos de refrigeración y ventilación\r
42510000;Intercambiadores de calor, equipos de aire acondicionado y refrigeración y aparatos para filtrar\r
42511000;Intercambiadores de calor y aparatos para la licuefacción de aire u otros gases\r
42511100;Intercambiadores de calor\r
42511110;Bombas de calor\r
42511200;Aparatos para la licuefacción de aire u otros gases\r
42512000;Instalaciones de aire acondicionado\r
42512100;Acondicionadores de aire para ventanas\r
42512200;Acondicionadores de aire para empotrar\r
42512300;Unidades de climatización\r
42512400;Acondicionadores de aire para vehículos\r
42512500;Partes de acondicionadores de aire\r
42512510;Reguladores de tiro\r
42512520;Rejillas de ventilación\r
42513000;Equipos de refrigeración y congelación\r
42513100;Equipo de congelación\r
42513200;Equipo de refrigeración\r
42513210;Vitrinas frigoríficas\r
42513220;Mostradores refrigerados\r
42513290;Equipo frigorífico comercial\r
42514000;Maquinaria y aparatos de filtrado o purificación de gases\r
42514200;Depuradores electrostáticos de aire y gases\r
42514300;Aparatos de filtrado\r
42514310;Filtros de aire\r
42514320;Filtros de gas\r
42515000;Caldera de calefacción urbana\r
42520000;Equipo de ventilación\r
42521000;Equipo de extracción de humos\r
42522000;Ventiladores de uso no doméstico\r
42522100;Partes de ventiladores\r
42530000;Partes de equipos refrigeradores y congeladores, y de bombas de calor\r
42531000;Partes de equipos refrigeradores\r
42532000;Partes de equipos congeladores\r
42533000;Partes de bombas de calor\r
42600000;Máquinas herramienta\r
42610000;Máquinas herramienta que funcionan con láser y centros de mecanizado\r
42611000;Máquinas herramienta para usos especiales\r
42612000;Centro de mecanizado\r
42612100;Centro de mecanizado de eje horizontal\r
42612200;Centro de mecanizado de eje vertical\r
42620000;Tornos y máquinas herramienta para taladrar y fresar\r
42621000;Tornos\r
42621100;Torno CNC\r
42622000;"Máquinas de roscar ""terrajar o filetear"""\r
42623000;Máquinas para fresar\r
42630000;Máquinas herramienta para trabajar metales\r
42631000;Máquinas herramienta para acabado de metales\r
42632000;Máquinas de control numérico para metales\r
42633000;Máquinas para curvar, plegar, enderezar o aplanar\r
42634000;Máquinas para forjar\r
42635000;Máquinas para estampar\r
42636000;Prensas\r
42636100;Prensas hidráulicas\r
42637000;Máquinas herramienta para taladrar, mandrinar o fresar metales\r
42637100;Máquinas herramienta para taladrar metales\r
42637200;Máquinas herramienta para mandrinar metales\r
42637300;Máquinas herramienta para fresar metales\r
42638000;Centro de mecanizado para trabajar metales\r
42640000;Máquinas herramienta para trabajar materiales duros, excepto metales\r
42641000;Máquinas herramienta para trabajar piedra, cerámica, hormigón o vidrio\r
42641100;Máquinas herramienta para trabajar piedra\r
42641200;Máquinas herramienta para trabajar cerámica\r
42641300;Máquinas herramienta para trabajar hormigón\r
42641400;Máquinas herramienta para trabajar vidrio\r
42642000;Máquinas herramienta para trabajar madera, hueso, corcho, caucho endurecido o plásticos duros\r
42642100;Máquinas herramienta para trabajar madera\r
42642200;Máquinas herramienta para trabajar hueso\r
42642300;Máquinas herramienta para trabajar corcho\r
42642400;Máquinas herramienta para trabajar caucho endurecido\r
42642500;Máquinas herramienta para trabajar plásticos duros\r
42650000;Herramientas manuales neumáticas o con motor\r
42651000;Herramientas manuales neumáticas\r
42652000;Herramientas electromecánicas de uso manual\r
42660000;Herramientas para soldadura blanda y soldadura fuerte, máquinas y equipo para templado de superficies y pulverización en caliente\r
42661000;Equipos de soldadura blanda y de soldadura fuerte\r
42661100;Equipo de soldadura blanda\r
42661200;Equipo de soldadura fuerte\r
42662000;Equipo de soldadura\r
42662100;Equipo eléctrico de soldadura\r
42662200;Equipo no eléctrico de soldadura\r
42663000;Máquina para templado de superficies\r
42664000;Equipo de fusión\r
42664100;Equipo de fusión para plásticos\r
42665000;Máquinas de metalización por aspersión de metal licuado\r
42670000;Partes y accesorios de máquinas herramienta\r
42671000;Útiles portaherramientas\r
42671100;Portaherramientas de laboratorio\r
42671110;Gradilla de tubos de ensayo para baños\r
42672000;Portapiezas para máquinas herramienta\r
42673000;Dispositivos divisores especiales para máquinas herramienta\r
42674000;Partes y accesorios de máquinas herramienta para trabajar metales\r
42675000;Partes y accesorios de máquinas herramienta para trabajar materiales duros\r
42675100;Partes de sierras de cadena\r
42676000;Partes de herramientas manuales\r
42677000;Partes de herramientas neumáticas\r
42700000;Maquinaria para la fabricación de materias textiles, prendas de vestir y cuero\r
42710000;Maquinaria para la industria textil\r
42711000;Máquinas para procesar materias textiles manufacturadas\r
42712000;Máquinas para el hilado de materias textiles\r
42713000;Telares\r
42714000;Tricotosas\r
42715000;Máquinas de coser\r
42716000;Máquinas para lavar y para secar ropa y máquinas para limpieza en seco\r
42716100;Instalación de lavado\r
42716110;Equipo de lavado\r
42716120;Lavadoras\r
42716130;Máquinas para limpieza en seco\r
42716200;Secadoras\r
42717000;Equipo de planchado y plegado de ropa blanca\r
42717100;Equipo de plegado de ropa blanca\r
42718000;Máquinas de acabado de textiles\r
42718100;Máquinas de planchado\r
42718200;Prensas de planchado\r
42720000;Partes de máquinas y aparatos para la producción de materias textiles y prendas de vestir\r
42800000;Maquinaria para la producción de papel o cartón\r
42810000;Partes de máquinas para la producción de papel o cartón\r
42900000;Máquinas diversas para usos generales y especiales\r
42910000;Aparatos de destilación, filtración o rectificación\r
42912000;Maquinaria y aparatos para filtrar o depurar líquidos\r
42912100;Máquinas y aparatos para filtrar líquidos\r
42912110;Aparatos para filtrar lodos de perforación\r
42912120;Hidrociclones\r
42912130;Aparatos de filtrado o depuración de bebidas\r
42912300;Maquinaria y aparatos para filtrar o depurar agua\r
42912310;Aparatos para filtrar agua\r
42912320;Aparatos de desaeración\r
42912330;Aparatos para depurar agua\r
42912340;Aparatos para desalinizar\r
42912350;Equipo para planta de filtrado\r
42913000;Filtros de aceite, de carburante y de entrada de aire\r
42913300;Filtros de aceite\r
42913400;Filtros de carburante\r
42913500;Filtros de entrada de aire\r
42914000;Equipo de reciclado\r
42920000;Máquinas y aparatos para limpiar botellas, empaquetar y pesar, y máquinas y aparatos para pulverizar\r
42921000;Máquinas y aparatos para limpiar, llenar, empaquetar o envolver botellas y demás recipientes\r
42921100;Máquinas y aparatos para limpiar o secar botellas y demás recipientes\r
42921200;Máquinas y aparatos para llenar y capsular botellas, latas y demás recipientes\r
42921300;Máquinas y aparatos para empaquetar o envolver\r
42921310;Aparatos para zunchar envases\r
42921320;Máquinas para empaquetar\r
42921330;Máquinas para envolver\r
42923000;Instrumentos y aparatos de pesar y balanzas\r
42923100;Instrumentos y aparatos de pesar\r
42923110;Balanzas\r
42923200;Básculas\r
42923210;Balanzas de tienda\r
42923220;Básculas de pesada continua de mercancías\r
42923230;Básculas de control de pesos\r
42924200;Máquinas de chorro de arena o de vapor\r
42924300;Equipo de pulverización\r
42924310;Pistoletes de pulverización\r
42924700;Aparatos mecánicos para proyectar, dispersar o pulverizar\r
42924710;Aparatos para dispersar gases\r
42924720;Equipo de descontaminación\r
42924730;Aparatos de limpieza por agua a presión\r
42924740;Aparatos de limpieza de alta presión\r
42924790;Aparatos para enmascarar olores\r
42930000;Centrifugadoras, calandrias o máquinas automáticas distribuidoras\r
42931000;Centrifugadoras\r
42931100;Centrifugadoras de laboratorio y accesorios\r
42931110;Centrifugadoras de pie\r
42931120;Centrifugadoras de mesa\r
42931130;Reductores para centrifugadoras\r
42931140;Equipo rotatorio para centrifugadoras\r
42932000;Calandrias\r
42932100;Laminadores\r
42933000;Máquinas automáticas distribuidoras\r
42933100;Máquinas automáticas distribuidoras de productos sanitarios\r
42933200;Máquinas expendedoras automáticas de sellos\r
42933300;Máquinas automáticas distribuidoras de productos\r
42940000;Maquinaria para el tratamiento térmico de materiales\r
42941000;Maquinaria para el tratamiento térmico de gases\r
42942000;Hornos y accesorios\r
42942200;Hornos de vacío\r
42943000;Baños termostáticos y accesorios\r
42943100;Serpentín de refrigeración\r
42943200;Baños de ultrasonidos\r
42943210;Termostatos de inmersión\r
42943300;Enfriadores de inmersión\r
42943400;Circuladores refrigerados y refrigerados/de calefacción\r
42943500;Enfriadores de recirculación\r
42943600;Circuladores de alta temperatura\r
42943700;Circuladores de calefacción\r
42943710;Tapas de baño\r
42950000;Partes de máquinas de uso general\r
42952000;Partes de centrifugadoras\r
42953000;Partes de calandrias\r
42954000;Partes de máquinas laminadoras\r
42955000;Partes de máquinas de filtrado\r
42956000;Partes de máquinas depuradoras\r
42957000;Partes de máquinas de pulverización\r
42958000;Pesas para máquinas de pesaje\r
42959000;Lavavajillas industriales\r
42960000;Sistema de mando y control, equipo gráfico, de impresión, ofimático y de procesamiento de la información\r
42961000;Sistema de mando y control\r
42961100;Sistema de control de acceso\r
42961200;Sistema Scada o equivalente\r
42961300;Sistema de localización de vehículos\r
42961400;Sistema de expedición\r
42962000;Equipo gráfico y de impresión\r
42962100;Sistema de impresión sobre película\r
42962200;Prensa de imprimir\r
42962300;Puestos de trabajo para la realización de gráficos\r
42962400;Hectógrafos\r
42962500;Máquinas para grabado\r
42963000;Prensa para monedas\r
42964000;Equipo de ofimática\r
42965000;Equipo de procesamiento de la información\r
42965100;Sistema de gestión de almacenes\r
42965110;Sistema de depósito\r
42967000;Controlador\r
42967100;Unidad de control remoto digital\r
42968000;Distribuidores\r
42968100;Distribuidores de bebidas\r
42968200;Distribuidores de artículos higiénicos\r
42968300;Sistema portarrollos para papel higiénico\r
42970000;Partes de lavavajillas y máquinas de limpieza, llenado, empaquetado o embalado\r
42971000;Partes de lavavajillas\r
42972000;Partes de máquinas de limpieza\r
42973000;Partes de máquinas de llenado\r
42974000;Partes de máquinas de empaquetado\r
42975000;Partes de envolvedoras\r
42980000;Generadores de gas\r
42981000;Generadores de ozono\r
42990000;Máquinas diversas para usos especiales\r
42991000;Maquinaria para la producción de papel, la impresión y la encuadernación, y sus partes\r
42991100;Máquinas y aparatos para encuadernación\r
42991110;Máquinas para coser pliegos\r
42991200;Maquinaria de imprenta\r
42991210;Impresoras offset\r
42991220;Máquinas de composición\r
42991230;Impresoras de billetes\r
42991300;Sistema de fotocomposición\r
42991400;Secadoras de madera, pasta de papel, papel o cartón\r
42991500;Partes de máquinas y aparatos para impresión y encuadernación\r
42992000;Materiales eléctricos para usos especiales\r
42992100;Pantalla Faraday\r
42992200;Cámara anecoica\r
42992300;Material electromagnético absorbente\r
42993000;Maquinaria para la industria química\r
42993100;Cloradores\r
42993200;Planta dosificadora\r
42994000;Máquinas para trabajar caucho o plásticos\r
42994100;Máquinas para la fabricación de ventanas y marcos de plástico\r
42994200;Máquinas para trabajar plásticos\r
42994220;Accesorios de laminación\r
42994230;Laminadoras\r
42995000;Máquinas de limpieza diversas\r
42995100;Túnel de lavado\r
42995200;Máquinas de limpieza de playas\r
42996000;Máquinas y aparatos para tratamiento de aguas residuales\r
42996100;Trituradoras\r
42996110;Maceradoras para el tratamiento de aguas residuales\r
42996200;Prensas para aguas residuales\r
42996300;Rascadores\r
42996400;Mezcladores\r
42996500;Rejillas para depuración de aguas residuales\r
42996600;Equipos de oxigenación\r
42996700;Precipitadores\r
42996800;Lechos de sedimentación\r
42996900;Equipo para el tratamiento de lodos\r
42997000;Equipo para conducciones\r
42997100;Máquinas para la inspección de la superficie interior de conducciones\r
42997200;Máquinas para la limpieza de la superficie interior de conducciones\r
42997300;Robots industriales\r
42998000;Sistema de recogida en paletas\r
42998100;Sistema de recuperación de paletas\r
42999000;Aspiradoras y enceradoras de uso no doméstico\r
42999100;Aspiradoras industriales\r
42999200;Enceradoras industriales\r
42999300;Partes de aspiradoras industriales\r
42999400;Partes de enceradoras industriales\r
43000000;Maquinaria para la minería y la explotación de canteras y equipo de construcción\r
43100000;Equipo para minería\r
43120000;"Cortadoras y arrancadoras de carbón o roca y maquinaria para hacer túneles o galerías; máquinas de sondeo o de perforación"\r
43121000;Máquinas para la perforación de pozos\r
43121100;Herramientas de boca de pozo\r
43121200;"Dispositivos conectores del ""riser"""\r
43121300;Equipo para acabado de pozos\r
43121400;Equipo de intervención para pozos\r
43121500;Equipo para pruebas y ensayos para pozos\r
43121600;Dispositivos antierupción\r
43122000;Cortadoras y arrancadoras de carbón o roca\r
43123000;Tuneladoras\r
43124000;Máquinas perforadoras\r
43124100;Topos\r
43124900;Equipo de perforación de rocas\r
43125000;Maquinaria para excavación de pozos\r
43130000;Equipo de perforación\r
43131000;Plataformas flotantes de explotación\r
43131100;Equipo de alta mar\r
43131200;Unidad de perforación de alta mar\r
43132000;Equipo de perforación para la extracción de petróleo\r
43132100;Equipo de sondeo\r
43132200;Plataforma de perforación\r
43132300;Taladros\r
43132400;Oleoducto\r
43132500;Sujetadores de tuberías colgantes\r
43133000;Equipo para plataforma de petróleo\r
43133100;Unidades sobre patines\r
43133200;Módulos sobre patines\r
43134000;Maquinaria para yacimientos de petróleo\r
43134100;Bombas sumergibles\r
43135000;Equipo submarino\r
43135100;Sistemas de control submarino\r
43136000;Equipo situado en el fondo del pozo\r
43140000;Entibados móviles hidráulicos para minas\r
43200000;Maquinaria para el movimiento de tierras y la excavación, y sus partes\r
43210000;Maquinaria para el movimiento de tierras\r
43211000;Bulldozers\r
43212000;Empujadoras de ángulo\r
43220000;Niveladoras\r
43221000;Motoniveladoras\r
43230000;Máquinas de traillar\r
43240000;Bateadoras\r
43250000;Palas cargadoras de carga frontal\r
43251000;Palas cargadoras de carga frontal, con pala retroexcavadora\r
43252000;Palas cargadoras de carga frontal, sin pala retroexcavadora\r
43260000;Palas mecánicas, excavadoras y palas cargadoras, y otras máquinas para la minería\r
43261000;Palas mecánicas\r
43261100;Palas cargadoras mecánicas\r
43262000;Maquinaria para excavación\r
43262100;Excavadoras mecánicas\r
43300000;Maquinaria y equipo de construcción\r
43310000;Maquinaria de ingeniería civil\r
43311000;Martinetes\r
43312000;Máquinas y aparatos para el acabado de superficies de carreteras\r
43312100;Alisadoras de asfalto\r
43312200;Máquinas esparcidoras de gravilla\r
43312300;Máquinas y aparatos para pavimentar\r
43312400;Rodillos apisonadores\r
43312500;Rodillos mecánicos\r
43313000;Máquinas y turbinas quitanieves\r
43313100;Máquinas quitanieves\r
43313200;Turbinas quitanieves\r
43314000;Arrancapilotes\r
43315000;Compactadores\r
43316000;Máquinas para tendido de cables\r
43320000;Equipo de construcción\r
43321000;Equipo de suspensión de puentes\r
43322000;Equipo de desmantelamiento\r
43323000;Equipo de irrigación\r
43324000;Equipo de drenaje\r
43324100;Equipo para piscinas\r
43325000;Equipo para parques y áreas de juego\r
43325100;Equipo de mantenimiento de terrenos\r
43327000;Equipo prefabricado\r
43328000;Instalaciones hidráulicas\r
43328100;Equipo hidráulico\r
43329000;Juegos de material\r
43400000;Máquinas y aparatos para la fabricación de moldes de fundición y el tratamiento de minerales\r
43410000;Máquinas y aparatos para el tratamiento de minerales\r
43411000;Máquinas y aparatos para clasificar y cribar\r
43412000;Máquinas para mezclar grava con asfalto\r
43413000;Hormigoneras o mezcladores de mortero\r
43413100;Mezcladores de cemento\r
43414000;Amoladoras\r
43414100;Molinos para pulverizar carbón\r
43415000;Moldes de fundición\r
43420000;Maquinaria para fabricar moldes de fundición\r
43500000;Vehículos oruga\r
43600000;Partes de máquinas para la minería, la explotación de canteras y la construcción\r
43610000;Partes para máquinas de sondeo\r
43611000;Partes de máquinas de perforación de pozos\r
43611100;Tapones de detención\r
43611200;Brocas para taladros industriales\r
43611300;Tijeras de perforación\r
43611400;Sondas de hierro\r
43611500;Mesas rotatorias\r
43611600;Equipo de suspensión de tubería de lodos\r
43611700;Equipo de unión de tuberías\r
43612000;Partes de máquinas y aparatos para extracción en pozos\r
43612100;Colgadores de tuberías\r
43612200;Equipo de sujeción de tuberías colgantes\r
43612300;"Tensores del ""riser"" de producción"\r
43612400;Cabezas de pozo\r
43612500;"Equipo de unión de ""risers"" de producción"\r
43612600;Sistema de control de cabeza de pozo\r
43612700;Equipo de cabeza de pozo\r
43612800;Elevadores para torre de perforación\r
43613000;Partes de cortadoras y arrancadoras de carbón o roca\r
43613100;Partes de cortadoras y arrancadoras de carbón\r
43613200;Partes de cortadoras y arrancadoras de roca\r
43614000;Partes de máquinas para perforar túneles o galerías\r
43620000;Partes de máquinas para tratamiento de minerales\r
43630000;Partes de máquinas o aparatos de perforación\r
43640000;Partes de maquinaria para excavar\r
43700000;Maquinaria para la metalurgia y sus partes\r
43710000;Máquinas para laminado de metales\r
43711000;Partes de maquinaria para laminado de metales\r
43720000;Máquinas de colar\r
43721000;Partes de máquinas de colar\r
43800000;Equipo de talleres\r
43810000;Equipo para trabajar madera\r
43811000;Máquinas lijadoras\r
43812000;Equipo de aserrado\r
43820000;Equipo para la fabricación de calzado\r
43830000;Herramientas mecánicas\r
43840000;Equipo de herrería\r
44000000;"Estructuras y materiales de construcción; productos auxiliares para la construcción (excepto aparatos eléctricos)"\r
44100000;Materiales de construcción y elementos afines\r
44110000;Materiales de construcción\r
44111000;Materiales para obras de construcción\r
44111100;Ladrillos\r
44111200;Cemento\r
44111210;Cemento de perforación\r
44111300;Cerámica\r
44111400;Pinturas y revestimientos de paredes\r
44111500;Aislantes y accesorios aislantes\r
44111510;Aislantes\r
44111511;Aislantes eléctricos\r
44111520;Material aislante térmico\r
44111530;Accesorios de aislamiento eléctrico\r
44111540;Vidrio aislante\r
44111600;Bloques\r
44111700;Baldosas\r
44111800;Mortero (construcción)\r
44111900;Losas de cerámica\r
44112000;Estructuras de edificación diversas\r
44112100;Refugios\r
44112110;Partes de refugios\r
44112120;Secciones de perfiles\r
44112200;Revestimientos para suelos\r
44112210;Revestimientos compactos para suelos\r
44112220;Falsos suelos\r
44112230;Linóleo\r
44112240;Parqué\r
44112300;Tabiques\r
44112310;Paredes divisorias\r
44112400;Tejados\r
44112410;Bastidores para tejados\r
44112420;Cimbras\r
44112430;Cerchas\r
44112500;Materiales para tejados\r
44112510;Tablillas\r
44112600;Aislamiento acústico\r
44112700;Vigas\r
44113000;Materiales para la construcción de carreteras\r
44113100;Materiales de pavimentación\r
44113120;Losetas\r
44113130;Piedra para pavimentación\r
44113140;Pavimentos de cantos rodados\r
44113200;Losas\r
44113300;Materiales revestidos\r
44113310;Materiales revestidos para carreteras\r
44113320;Grava bituminosa\r
44113330;Materiales de recubrimiento\r
44113500;Cuentas de vidrio\r
44113600;Betún y asfalto\r
44113610;Betún\r
44113620;Asfalto\r
44113700;Materiales para reparación de carreteras\r
44113800;Materiales para el acabado de superficies de carreteras\r
44113810;Tratamiento de superficies\r
44113900;Materiales para el mantenimiento de carreteras\r
44113910;Materiales para la viabilidad invernal\r
44114000;Hormigón\r
44114100;Hormigón preamasado\r
44114200;Productos de hormigón\r
44114210;Pilotes de hormigón\r
44114220;Tuberías y accesorios de hormigón\r
44114250;Losas de hormigón\r
44115000;Accesorios para la construcción\r
44115100;Cañerías\r
44115200;Materiales para fontanería y calefacción\r
44115210;Materiales de fontanería\r
44115220;Materiales para calefacción\r
44115310;Persianas enrollables\r
44115400;Claraboyas\r
44115500;Sistemas de extinción por aspersor\r
44115600;Remontescalera\r
44115700;Persianas exteriores\r
44115710;Marquesinas\r
44115800;Accesorios para interiores de edificios\r
44115810;Rieles para cortinas y cortinajes\r
44115811;Rieles para cortinas\r
44115900;Dispositivos de protección contra el sol\r
44130000;Colectores\r
44131000;Cámaras para aguas residuales\r
44132000;Elementos para alcantarillas\r
44133000;Cofias de hierro dúctil\r
44134000;Curvas\r
44140000;Productos relacionados con materiales de construcción\r
44141000;Conductos\r
44141100;Conductos eléctricos\r
44142000;Marcos\r
44143000;Palets\r
44144000;Postes (construcción)\r
44160000;Conducciones, canalizaciones, tuberías de revestimiento, tubos y artículos conexos\r
44161000;Conducciones\r
44161100;Gasoductos\r
44161110;Red de distribución de gas\r
44161200;Tuberías maestras\r
44161400;Conducciones subacuáticas\r
44161410;Conducciones submarinas\r
44161500;Conducciones de alta presión\r
44161600;Conductos de baja presión\r
44161700;Rascadores de conducciones\r
44161710;Lanzarrascadores\r
44161720;Receptores de rascador\r
44161730;Estaciones de rascador\r
44162000;Canalizaciones\r
44162100;Suministros para canalizaciones\r
44162200;Canalizaciones de distribución\r
44162300;Canalizaciones de descarga\r
44162400;Cámaras registro en arcilla vitrificada\r
44162500;Canalización de agua potable\r
44163000;Tuberías y accesorios\r
44163100;Tuberías\r
44163110;Tuberías de desagüe\r
44163111;Tuberías de drenaje\r
44163112;Sistema de drenaje\r
44163120;Tuberías de calefacción a distancia\r
44163121;Tuberías de calefacción\r
44163130;Tuberías de alcantarilla\r
44163140;Tuberías de agua y vapor\r
44163150;Tuberías de baja presión\r
44163160;Tuberías de distribución y sus accesorios\r
44163200;Accesorios para tubería\r
44163210;Abrazaderas para tuberías\r
44163230;Racores para tuberías\r
44163240;Juntas de tuberías\r
44163241;Juntas aislantes\r
44164000;Tubos de entubado y tubos de producción\r
44164100;Tubos de entubado\r
44164200;Tubos de producción\r
44164300;Artículos tubulares\r
44164310;Tubos y accesorios\r
44165000;Mangueras, tubos y manguitos\r
44165100;Mangueras\r
44165110;Mangueras de perforación\r
44165200;Tubos\r
44165210;Tubos ascendentes flexibles\r
44165300;Manguitos\r
44166000;Material tubular para pozos de petróleo\r
44167000;Accesorios diversos para tuberías\r
44167100;Acoplamientos\r
44167110;Bridas\r
44167111;Adaptadores de brida\r
44167200;Abrazaderas y collares de reparación\r
44167300;Curvas, tes y accesorios para tuberías\r
44167400;Codos\r
44170000;Planchas, hojas, bandas y láminas relacionadas con materiales de construcción\r
44171000;Planchas (construcción)\r
44172000;Hojas (construcción)\r
44173000;Bandas\r
44174000;Láminas\r
44175000;Paneles\r
44176000;Películas\r
44190000;Materiales de construcción diversos\r
44191000;Materiales de madera diversos para construcción\r
44191100;Madera contrachapada\r
44191200;Madera laminada\r
44191300;Tableros de partículas\r
44191400;Tableros de fibra\r
44191500;Madera densificada\r
44191600;Paneles de parqué\r
44192000;Otros materiales de construcción diversos\r
44192100;Espuma de PVC\r
44192200;Puntas\r
44200000;Productos estructurales\r
44210000;Estructuras y partes de estructuras\r
44211000;Edificios prefabricados\r
44211100;Edificios prefabricados modulares\r
44211110;Cabinas\r
44211200;Cubículos\r
44211300;Hospital de campaña\r
44211400;Cocinas de campaña\r
44211500;Invernaderos\r
44212000;Productos estructurales y partes correspondientes, excepto edificios prefabricados\r
44212100;Puente\r
44212110;Secciones de puentes\r
44212120;Estructuras de puentes\r
44212200;Torres, mástiles de celosía, castilletes y pilares\r
44212210;Castilletes\r
44212211;Torres de perforación\r
44212212;Torres de perforación estáticas\r
44212220;Pilares, postes y estacas\r
44212221;Pilares\r
44212222;Torres para transporte de energía eléctrica\r
44212223;Soportes para pilones\r
44212224;Postes para líneas aéreas\r
44212225;Postes\r
44212226;Postes de electricidad\r
44212227;Estacas\r
44212230;Torres\r
44212233;Torres de agua\r
44212240;Vigas de carga\r
44212250;Mástiles\r
44212260;Mástiles de antena de radio o de televisión\r
44212261;Mástiles de antena de radio\r
44212262;Mástiles de antena de televisión\r
44212263;Mástiles de celosía\r
44212300;Estructuras y partes\r
44212310;Andamiaje\r
44212311;Puntales de arco\r
44212312;Soportes de arco\r
44212313;Soportes\r
44212314;Soportes para suspensión de tubos\r
44212315;Equipo para andamiaje\r
44212316;Bridas de arco\r
44212317;Estructuras de andamiaje\r
44212318;Soportes de conducciones\r
44212320;Estructuras diversas\r
44212321;Marquesinas para paradas de autobús\r
44212322;Cabinas telefónicas\r
44212329;Mamparas de seguridad\r
44212380;Partes de estructuras\r
44212381;Revestimiento\r
44212382;Compuertas de descarga\r
44212383;Compuertas\r
44212390;Esclusas\r
44212391;Compuertas de esclusa\r
44212400;Estacada\r
44212410;Tablestacado\r
44212500;Ángulos y secciones\r
44212510;Ángulos\r
44212520;Secciones\r
44220000;Trabajos de ebanistería para la construcción\r
44221000;Ventanas, puertas y elementos conexos\r
44221100;Ventanas\r
44221110;Marcos para ventana\r
44221111;Unidades de doble acristalamiento\r
44221120;Puertasentana\r
44221200;Puertas\r
44221210;Tableros en bruto para puertas\r
44221211;Marcos para puerta\r
44221212;Puertas mosquiteras\r
44221213;Umbrales de puerta\r
44221220;Puertas cortafuego\r
44221230;Puertas de corredera\r
44221240;Puertas de garaje\r
44221300;Portones\r
44221310;Puertas de acceso\r
44221400;Contraventanas\r
44221500;Umbrales\r
44230000;Trabajos de carpintería para la construcción\r
44231000;Paneles prefabricados para cercas\r
44232000;Vigas de madera para tejado\r
44233000;Escaleras\r
44300000;Cable, alambre y productos conexos\r
44310000;Productos de alambre\r
44311000;Alambre de cabos\r
44312000;Alambre para cercas\r
44312300;Alambre de púas\r
44313000;Malla metálica\r
44313100;Cercado de tela metálica\r
44313200;Tela metálica\r
44315000;Hilo de máquina\r
44315100;Accesorios para soldadura autógena\r
44315200;Materiales para soldadura autógena\r
44315300;Materiales para soldadura blanda o para soldadura fuerte\r
44315310;Materiales para soldadura blanda\r
44315320;Materiales para soldadura fuerte\r
44316000;Ferretería\r
44316100;Yunques\r
44316200;Fragua portátil\r
44316300;Rejillas\r
44316400;Artículos de ferretería\r
44316500;Artículos de forja\r
44316510;Artículos de herrería\r
44317000;Eslingas de hierro o de acero\r
44318000;Conductores\r
44320000;Cables y productos conexos\r
44321000;Cables\r
44322000;Accesorios para cables\r
44322100;Conductos para cables\r
44322200;Conectores para cables\r
44322300;Tuberías para cables\r
44322400;Sujetacables\r
44330000;Barras, varillas, alambre y perfiles utilizados en la construcción\r
44331000;Barras\r
44332000;Varillas (construcción)\r
44333000;Alambre\r
44334000;Perfiles\r
44400000;Productos manufacturados diversos y artículos conexos\r
44410000;Artículos para baño y cocina\r
44411000;Aparatos sanitarios\r
44411100;Grifos\r
44411200;Bañeras\r
44411300;Lavabos\r
44411400;Platos de ducha\r
44411600;Bidés\r
44411700;Asientos, tapas, cubetas, tazas y cisternas de inodoro\r
44411710;Asientos de inodoro\r
44411720;Tapas de inodoro\r
44411740;Tazas de inodoro\r
44411750;Cisternas de inodoro\r
44411800;Urinarios\r
44420000;Artículos utilizados en la construcción\r
44421000;Cajas fuertes, cajas de seguridad y puertas, blindadas o reforzadas\r
44421300;Cajas de caudales\r
44421500;Puertas blindadas o reforzadas\r
44421600;Taquillas de seguridad\r
44421700;Cajas y taquillas\r
44421710;Taquillas para equipajes en consigna\r
44421720;Taquillas\r
44421721;Cajas fuertes\r
44421722;Cajas de seguridad\r
44421780;Cajas de seguridad para documentos\r
44421790;Cajas de seguridad para fondos\r
44422000;Buzones\r
44423000;Artículos diversos\r
44423100;Campanas\r
44423200;Escaleras de mano\r
44423220;Escaleras de tijera\r
44423230;Taburetes con escalones\r
44423300;Equipo para manipulación de mercancías\r
44423330;Plataformas para la manipulación de mercancías\r
44423340;Accesorios de cable para la manipulación de mercancías\r
44423400;Señales y artículos conexos\r
44423450;Placas indicadoras\r
44423460;Placas de dirección\r
44423700;Elementos para registros\r
44423710;Cajas de superficie\r
44423720;Cajas de delimitación\r
44423730;Marcos protectores de registros\r
44423740;Tapas de registro\r
44423750;Rejillas de sumidero\r
44423760;Tapas de acceso\r
44423790;Escalones de horquilla de registros\r
44423800;Sellos metálicos\r
44423810;Sellos de caucho\r
44423850;Formas\r
44423900;Ánodos sacrificatorios\r
44424000;Cajas y precintos para contadores\r
44424100;Cajas para contadores\r
44424200;Cinta adhesiva\r
44424300;Cinta reflectante\r
44425000;Arandelas, juntas, bandas, barras y morteros de relleno\r
44425100;Arandelas elásticas\r
44425110;Arandelas de refuerzo autoadhesivas\r
44425200;Juntas de caucho\r
44425300;Bandas elásticas\r
44425400;Morteros de relleno\r
44425500;Barras de plástico\r
44430000;Blindaje\r
44431000;Cubrejuntas\r
44440000;Cojinetes\r
44441000;Microesferas\r
44442000;Cojinetes de rodillos\r
44450000;Acero dulce\r
44451000;Cospeles\r
44452000;Depósitos para monedas de máquinas o aparatos que funcionan con monedas\r
44460000;Estemples y puntales de mina\r
44461000;Estemples\r
44461100;Estemples de mina\r
44462000;Puntales de mina\r
44464000;Orugas\r
44470000;Productos de hierro fundido\r
44480000;Equipos diversos contra incendios\r
44481000;Escaleras de plataforma\r
44481100;Escaleras contra incendios\r
44482000;Dispositivos contra incendios\r
44482100;Mangueras para incendios\r
44482200;Bocas de incendio\r
44500000;Herramientas, cerraduras, llaves, bisagras, elementos de sujeción, cadenas y muelles\r
44510000;Herramientas\r
44511000;Herramientas manuales\r
44511100;Layas y palas\r
44511110;Layas\r
44511120;Palas\r
44511200;Horcas de jardinería\r
44511300;Azadas, picos, binaderas, rastrillos y rastrillos para playa\r
44511310;Azadas\r
44511320;Picos\r
44511330;Binaderas\r
44511340;Rastrillos\r
44511341;Rastrillos para playa\r
44511400;Hachas\r
44511500;Sierras de mano\r
44511510;Hojas para sierras de mano\r
44512000;Herramientas manuales diversas\r
44512100;Formones\r
44512200;Alicates\r
44512210;Alicates de engarzar\r
44512300;Martillos\r
44512400;Perrillos tensores de mano\r
44512500;Llaves de tuercas\r
44512600;Herramientas para trabajos viales\r
44512610;Púas para estriar superficies de carreteras\r
44512700;Limas o escofinas\r
44512800;Destornilladores\r
44512900;Brocas para taladros, cabezas para destornillador y demás accesorios\r
44512910;Brocas para taladros\r
44512920;Cabezas para destornillador\r
44512930;Portaherramientas\r
44512940;Estuches de herramientas\r
44513000;Herramientas de pedal\r
44514000;Mangos y piezas de herramientas\r
44514100;Mangos de herramientas\r
44514200;Piezas de herramientas\r
44520000;Cerraduras, llaves y bisagras\r
44521000;Cerraduras y candados diversos\r
44521100;Cerraduras\r
44521110;Cerraduras para puertas\r
44521120;Cerraduras de seguridad electrónicas\r
44521130;Cerraduras de alta seguridad\r
44521140;Cerraduras para muebles\r
44521200;Candados y cadenas\r
44521210;Candados\r
44522000;Cierres, partes de cerraduras y llaves\r
44522100;Cierres\r
44522200;Llaves\r
44522300;Partes de candados\r
44522400;Partes de cerraduras\r
44523000;Bisagras, guarniciones y accesorios\r
44523100;Bisagras\r
44523200;Guarniciones\r
44523300;Accesorios\r
44530000;Elementos de sujeción\r
44531000;Elementos roscados de sujeción\r
44531100;Tornillos para madera\r
44531200;Escarpias o armellas, roscadas\r
44531300;Tornillos taladradores\r
44531400;Pernos\r
44531500;Juegos de uniones de bridas\r
44531510;Pernos y tornillos\r
44531520;Tirafondos y tornillos\r
44531600;Tuercas\r
44531700;Artículos con rosca de hierro o de acero\r
44532000;Elementos de sujeción sin roscar\r
44532100;Remaches\r
44532200;Arandelas\r
44532300;Pasadores de chaveta\r
44532400;Bridas de acero\r
44533000;Elementos de sujeción de cobre\r
44540000;Cadenas\r
44541000;Cadena articulada\r
44542000;Partes de cadenas\r
44550000;Muelles (resortes)\r
44600000;"Cisternas, depósitos y contenedores; radiadores y calderas de calefacción central"\r
44610000;Cisternas, depósitos, contenedores y recipientes a presión\r
44611000;Cisternas\r
44611100;Cilindros de aire\r
44611110;Cilindros neumáticos\r
44611200;Aparatos respiratorios\r
44611400;Cisternas para almacenamiento\r
44611410;Cisternas para almacenamiento de petróleo\r
44611420;Cisternas para almacenamiento de lodos\r
44611500;Cisternas para agua\r
44611600;Depósitos\r
44612000;Recipientes de gas licuado\r
44612100;Bombonas de gas\r
44612200;Depósitos de gas\r
44613000;Grandes contenedores\r
44613110;Silos\r
44613200;Contenedores refrigerados\r
44613210;Cisternas de agua\r
44613300;Contenedores estandarizados para transporte\r
44613400;Contenedores de almacenamiento\r
44613500;Contenedores para agua\r
44613600;Contenedores sobre ruedas\r
44613700;Contenedores de basura\r
44613800;Contenedores para residuos\r
44614000;Barriles\r
44614100;Recipientes de almacenamiento\r
44614300;Sistema de almacenamiento en contenedores\r
44614310;Apiladora mecánica\r
44615000;Recipientes a presión\r
44615100;Recipientes a presión de acero\r
44616000;Bidones\r
44616200;Bidones de residuos\r
44617000;Cajas\r
44617100;Cartones\r
44617200;Compartimentos para contadores\r
44617300;Cajas prefabricadas\r
44618000;Recipientes ligeros, tapones, tapas, cubas y tapaderas\r
44618100;Recipientes ligeros\r
44618300;Tapones, tapones de rosca, tapas y tapaderas\r
44618310;Tapones con opérculo de corcho\r
44618320;Tapones de rosca\r
44618330;Tapas para contenedores\r
44618340;Tapaderas\r
44618350;Cápsulas de plástico\r
44618400;Latas\r
44618420;Latas de conservas\r
44618500;Cubas\r
44619000;Otros recipientes\r
44619100;Estuches\r
44619200;Carretes para cables\r
44619300;Jaulas\r
44619400;Barriles de madera\r
44619500;Cajas paleta\r
44620000;Radiadores y calderas para calefacción central, y sus partes\r
44621000;Radiadores y calderas\r
44621100;Radiadores\r
44621110;Radiadores para calefacción central\r
44621111;Radiadores para calefacción central no eléctricos\r
44621112;Partes de radiadores para calefacción central\r
44621200;Calderas\r
44621210;Calderas de agua\r
44621220;Calderas para calefacción central\r
44621221;Partes de calderas para calefacción central\r
44622000;Sistemas de termorrecuperación\r
44622100;Equipo termorrecuperador\r
44800000;Pinturas, barnices y mástiques\r
44810000;Pinturas\r
44811000;Pintura para señalización de carreteras\r
44812000;Pinturas para pintura artística\r
44812100;Esmaltes y pinturas transparentes\r
44812200;Pinturas al óleo y al agua\r
44812210;Pinturas al óleo\r
44812220;Pinturas al agua\r
44812300;Pinturas para la enseñanza\r
44812310;Juegos de colores\r
44812320;Colores para pintura de letreros\r
44812400;Artículos para decoración\r
44820000;Barnices\r
44830000;Mástiques, plastes de relleno, masillas y disolventes\r
44831000;Mástiques, plastes de relleno y masilla\r
44831100;Mástiques\r
44831200;Plastes de relleno\r
44831300;Masilla\r
44831400;Lechada de cemento\r
44832000;Disolventes\r
44832100;Decapante para pintura\r
44832200;Diluyentes\r
44900000;Piedra para construcción, piedra caliza, yeso y pizarra\r
44910000;Piedra para construcción\r
44911000;Mármol y piedra calcárea de construcción\r
44911100;Mármol\r
44911200;Travertino\r
44912000;Diversas piedras de construcción\r
44912100;Granito\r
44912200;Arenisca\r
44912300;Basalto\r
44912400;Piedras de bordillo\r
44920000;Piedra caliza, yeso y creta\r
44921000;Piedra caliza y yeso\r
44921100;Yeso\r
44921200;Cal\r
44921210;Cal en polvo\r
44921300;Piedra caliza\r
44922000;Creta y dolomita\r
44922100;Creta\r
44922200;Dolomita\r
44930000;Pizarra\r
45000000;Trabajos de construcción\r
45100000;Trabajos de preparación del terreno\r
45110000;Trabajos de demolición de inmuebles y movimiento de tierras\r
45111000;Trabajos de demolición, explanación y limpieza del terreno\r
45111100;Trabajos de demolición\r
45111200;Trabajos de explanación y limpieza del terreno\r
45111210;Trabajos de voladura y consiguiente retirada de rocas\r
45111211;Trabajos de voladura\r
45111212;Trabajos de retirada de rocas\r
45111213;Trabajos de limpieza del terreno\r
45111214;Trabajos de evacuación de escombros de demolición\r
45111220;Trabajos de desbrozo\r
45111230;Trabajos de estabilización del terreno\r
45111240;Trabajos de drenaje del terreno\r
45111250;Trabajos de estudio del suelo\r
45111260;Trabajos de preparación del terreno para la minería\r
45111290;Trabajos primarios para servicios\r
45111291;Trabajos de ordenación del terreno\r
45111300;Trabajos de desmantelamiento\r
45111310;Trabajos de desmantelamiento para instalaciones militares\r
45111320;Trabajos de desmantelamiento para instalaciones de seguridad\r
45112000;Trabajos de excavación y movimiento de tierras\r
45112100;Trabajos de excavación de zanjas\r
45112200;Trabajos de desmonte de suelos\r
45112210;Trabajos de levantamiento de las capas superficiales\r
45112300;Trabajos de relleno y recuperación del suelo\r
45112310;Trabajos de relleno\r
45112320;Trabajos de recuperación del suelo\r
45112330;Trabajos de recuperación del terreno\r
45112340;Trabajos de descontaminación de suelos\r
45112350;Aprovechamiento de tierras estériles\r
45112360;Trabajos de rehabilitación del suelo\r
45112400;Trabajos de excavación\r
45112410;Trabajos de excavación de sepulturas\r
45112420;Trabajos de excavación del basamento\r
45112440;Terraplenado de laderas\r
45112441;Trabajos de terraplenado\r
45112450;Obras de excavación en yacimientos arqueológicos\r
45112500;Trabajos de movimiento de tierras\r
45112600;Corte y relleno\r
45112700;Trabajos de paisajismo\r
45112710;Trabajos de paisajismo en zonas verdes\r
45112711;Trabajos de paisajismo en parques\r
45112712;Trabajos de paisajismo en jardines\r
45112713;Paisajismo para jardines de terraza\r
45112714;Trabajos de paisajismo en cementerios\r
45112720;Trabajos de paisajismo en zonas deportivas y recreativas\r
45112721;Trabajos de paisajismo en campos de golf\r
45112722;Trabajos de paisajismo de campos de equitación\r
45112723;Trabajos de paisajismo en parques infantiles\r
45112730;Paisajismo en carreteras y autopistas\r
45112740;Obras de paisajismo en aeropuertos\r
45113000;Trabajos a pie de obra\r
45120000;Trabajos de perforación y sondeo\r
45121000;Trabajos de perforación\r
45122000;Trabajos de sondeo\r
45200000;Trabajos generales de construcción de inmuebles y obras de ingeniería civil\r
45210000;Trabajos de construcción de inmuebles\r
45211000;Trabajos de construcción de inmuebles de viviendas colectivas y unifamiliares\r
45211100;Trabajos de construcción para viviendas\r
45211200;Trabajos de construcción de viviendas tuteladas\r
45211300;Trabajos de construcción de viviendas\r
45211310;Trabajos de construcción de cuartos de baño\r
45211320;Trabajos de construcción de porches\r
45211340;Trabajos de construcción de inmuebles de viviendas colectivas\r
45211341;Trabajos de construcción de pisos\r
45211350;Trabajos de construcción de inmuebles multifuncionales\r
45211360;Trabajos de construcción de desarrollo urbano\r
45211370;Trabajos de construcción de saunas\r
45212000;Trabajos de construcción de edificios relacionados con el ocio, los deportes, la cultura y el alojamiento y restaurantes\r
45212100;Trabajos de construcción de instalaciones de ocio\r
45212110;Trabajos de construcción de centros de ocio\r
45212120;Trabajos de construcción de parques temáticos\r
45212130;Trabajos de construcción de parques de atracciones\r
45212140;Instalación de recreo\r
45212150;Trabajos de construcción de cines\r
45212160;Trabajos de construcción de casinos\r
45212170;Trabajos de construcción de edificios para actividades de recreo\r
45212171;Trabajos de construcción de centros de esparcimiento\r
45212172;Trabajos de construcción de centros de recreo\r
45212180;Trabajos de construcción de taquillas de billetes\r
45212190;Obras de protección contra el sol\r
45212200;Trabajos de construcción de instalaciones deportivas\r
45212210;Trabajos de construcción de instalaciones deportivas para la práctica de un solo deporte\r
45212211;Trabajos de construcción de pistas de patinaje\r
45212212;Trabajos de construcción de piscinas\r
45212213;Trabajos de marcado para instalaciones deportivas\r
45212220;Trabajos de construcción de instalaciones polideportivas\r
45212221;Trabajos de construcción de estructuras para campos de deportes\r
45212222;Trabajos de construcción de gimnasios\r
45212223;Trabajos de construcción de instalaciones para deportes de invierno\r
45212224;Trabajos de construcción de estadios\r
45212225;Trabajos de construcción de polideportivos\r
45212230;Instalación de vestuarios\r
45212290;Reparación y mantenimiento de instalaciones deportivas\r
45212300;Trabajos de construcción de edificios culturales y relacionados con el arte\r
45212310;Trabajos de construcción de edificios relacionados con exposiciones\r
45212311;Trabajos de construcción de galerías de arte\r
45212312;Trabajos de construcción de centros de exposiciones\r
45212313;Trabajos de construcción de museos\r
45212314;Trabajos de construcción de monumentos históricos o conmemorativos\r
45212320;Trabajos de construcción de edificios relacionados con actividades artísticas\r
45212321;Trabajos de construcción de auditorios\r
45212322;Trabajos de construcción de teatros\r
45212330;Trabajos de construcción de bibliotecas\r
45212331;Trabajos de construcción de bibliotecas multimedia\r
45212340;Trabajos de construcción de salas de conferencias\r
45212350;Edificios de interés histórico o arquitectónico\r
45212351;Trabajos de construcción de monumentos prehistóricos\r
45212352;Trabajos de construcción de monumentos industriales\r
45212353;Trabajos de construcción de palacios\r
45212354;Trabajos de construcción de castillos\r
45212360;Trabajos de construcción de edificios religiosos\r
45212361;Trabajos de construcción de iglesias\r
45212400;Edificios de alojamiento y de restauración\r
45212410;Trabajos de construcción de edificios de alojamiento\r
45212411;Trabajos de construcción de hoteles\r
45212412;Trabajos de construcción de albergues\r
45212413;Trabajos de construcción de alojamientos de corta duración\r
45212420;Trabajos de construcción de restaurantes y establecimientos similares\r
45212421;Trabajos de construcción de restaurantes\r
45212422;Trabajos de construcción de cantinas\r
45212423;Trabajos de construcción de cafeterías\r
45212500;Transformación de cocinas o restaurantes\r
45212600;Trabajos de construcción de pabellones\r
45213000;Trabajos de construcción de locales comerciales, almacenes y edificios industriales, edificios relacionados con el transporte\r
45213100;Trabajos de construcción de edificios comerciales\r
45213110;Trabajos de construcción de establecimientos comerciales\r
45213111;Trabajos de construcción de centros comerciales\r
45213112;Trabajos de construcción de comercios\r
45213120;Trabajos de construcción de oficinas de correos\r
45213130;Trabajos de construcción de bancos\r
45213140;Trabajos de construcción de mercados\r
45213141;Trabajos de construcción de mercados cubiertos\r
45213142;Trabajos de construcción de mercados al aire libre\r
45213150;Trabajos de construcción de edificios de oficinas\r
45213200;Trabajos de construcción de almacenes y edificios industriales\r
45213210;Instalaciones de depósitos frigoríficos\r
45213220;Trabajos de construcción de locales de almacenamiento\r
45213221;Trabajos de construcción de almacenes\r
45213230;Trabajos de construcción de mataderos\r
45213240;Trabajos de construcción de edificios agrícolas\r
45213241;Trabajos de construcción de graneros\r
45213242;Trabajos de construcción de establos\r
45213250;Trabajos de construcción de edificios industriales\r
45213251;Trabajos de construcción de locales industriales\r
45213252;Trabajos de construcción de talleres\r
45213260;Trabajos de construcción de depósitos\r
45213270;Trabajos de construcción de plantas de reciclado\r
45213280;Trabajos de construcción de instalaciones de compostaje\r
45213300;Edificios relacionados con el transporte\r
45213310;Trabajos de construcción de edificios relacionados con el transporte por carretera\r
45213311;Trabajos de construcción de estaciones de autobuses\r
45213312;Trabajos de construcción de edificios de estacionamiento de vehículos\r
45213313;Trabajos de construcción de edificios de áreas de servicio\r
45213314;Trabajos de construcción de cocheras de autobuses\r
45213315;Trabajos de construcción de marquesinas de paradas de autobús\r
45213316;Trabajos de instalación de pasarelas\r
45213320;Trabajos de construcción de edificios relacionados con el transporte ferroviario\r
45213321;Trabajos de construcción de estaciones de ferrocarril\r
45213322;Trabajos de construcción de edificios de terminales ferroviarias\r
45213330;Trabajos de construcción de edificios relacionados con el transporte aéreo\r
45213331;Trabajos de construcción de edificios de aeropuerto\r
45213332;Trabajos de construcción de torres de control de aeropuerto\r
45213333;Trabajos de instalación de mostradores de facturación de aeropuertos\r
45213340;Trabajos de construcción de edificios relacionados con el transporte por vías navegables\r
45213341;Trabajos de construcción de edificios de terminales de transbordadores\r
45213342;Trabajos de construcción de terminales Roo\r
45213350;Trabajos de construcción de edificios relacionados con diversos medios de transporte\r
45213351;Trabajos de construcción de hangares de mantenimiento\r
45213352;Trabajos de construcción de depósitos de servicio\r
45213353;Trabajos de instalación de pasarelas de embarque de pasajeros\r
45213400;Instalación de salas de personal\r
45214000;Trabajos de construcción de edificios relacionados con la enseñanza y la investigación\r
45214100;Trabajos de construcción de edificios para jardín de infancia\r
45214200;Trabajos de construcción de edificios escolares\r
45214210;Trabajos de construcción de centros de enseñanza primaria\r
45214220;Trabajos de construcción de centros de enseñanza secundaria\r
45214230;Trabajos de construcción de centros de enseñanzas especiales\r
45214300;Trabajos de construcción de centros de formación profesional y técnica\r
45214310;Trabajos de construcción de centros de formación profesional\r
45214320;Trabajos de construcción de centros de formación técnica\r
45214400;Trabajos de construcción de edificios universitarios\r
45214410;Trabajos de construcción de escuelas politécnicas superiores\r
45214420;Trabajos de construcción de aulas de conferencias\r
45214430;Trabajos de construcción de laboratorios de idiomas\r
45214500;Trabajos de construcción de edificios de enseñanza postescolar\r
45214600;Trabajos de construcción de edificios de investigaciones\r
45214610;Trabajos de construcción de edificios de laboratorio\r
45214620;Trabajos de construcción de instalaciones para investigación y ensayos\r
45214630;Instalaciones científicas\r
45214631;Trabajos de instalación de salas blancas\r
45214640;Trabajos de construcción de estaciones meteorológicas\r
45214700;Trabajos de construcción de colegios mayores\r
45214710;Trabajos de construcción de vestíbulos\r
45214800;Edificio con instalaciones para formación\r
45215000;Trabajos de construcción de edificios relacionados con la salud y los servicios sociales, de crematorios y aseos públicos\r
45215100;Trabajos de construcción de edificios relacionados con la salud\r
45215110;Trabajos de construcción de balnearios\r
45215120;Trabajos de construcción de edificios de medicina especializada\r
45215130;Trabajos de construcción de clínicas\r
45215140;Trabajos de construcción de establecimientos hospitalarios\r
45215141;Trabajos de construcción de quirófanos\r
45215142;Trabajos de construcción de unidades de cuidados intensivos\r
45215143;Trabajos de construcción de salas de detección y diagnóstico\r
45215144;Trabajos de construcción de salas de detección de enfermedades\r
45215145;Trabajos de construcción de salas de fluoroscopia\r
45215146;Trabajos de construcción de salas de patología\r
45215147;Trabajos de construcción de salas de medicina legal\r
45215148;Trabajos de construcción de salas de catéteres\r
45215200;Trabajos de construcción de edificios para servicios sociales\r
45215210;Trabajos de construcción de centros de acogida\r
45215212;Trabajos de construcción de residencias de ancianos\r
45215213;Trabajos de construcción de casas de reposo\r
45215214;Trabajos de construcción de hogares residenciales\r
45215215;Trabajos de construcción de centros de acogida infantil\r
45215220;Trabajos de construcción de edificios para instituciones sociales, excepto centros de acogida\r
45215221;Trabajos de construcción de centros de día\r
45215222;Trabajos de construcción de centros cívicos\r
45215300;Construcción de crematorio\r
45215400;Cementerio\r
45215500;Aseos públicos\r
45216000;Trabajos de construcción de edificios relacionados con los servicios de orden público o con los servicios de emergencia y de edificios militares\r
45216100;Trabajos de construcción de edificios relacionados con los servicios de orden público o servicios de emergencia\r
45216110;Trabajos de construcción de edificios relacionados con los servicios de orden público\r
45216111;Trabajos de construcción de comisarías de policía\r
45216112;Trabajos de construcción de tribunales\r
45216113;Trabajos de construcción de establecimientos penitenciarios\r
45216114;Edificios destinados al Parlamento y a asambleas públicas\r
45216120;Trabajos de construcción de edificios relacionados con los servicios de emergencia\r
45216121;Trabajos de construcción de cuarteles de bomberos\r
45216122;Trabajos de construcción de puestos de ambulancia\r
45216123;Trabajos de construcción de edificios de rescate en montaña\r
45216124;Trabajos de construcción de puestos de botes salvavidas\r
45216125;Trabajos de construcción de edificios para servicios de emergencia\r
45216126;Trabajos de construcción de puestos de guardacostas\r
45216127;Trabajos de construcción de estaciones de salvamento\r
45216128;Trabajos de construcción de faros\r
45216129;Refugios de protección\r
45216200;Trabajos de construcción de edificios e instalaciones militares\r
45216220;Trabajos de construcción de búnkeres militares\r
45216230;Trabajos de construcción de refugios militares\r
45216250;Trabajos de construcción de trincheras defensivas\r
45217000;Trabajos de construcción de edificios inflables\r
45220000;Obras de ingeniería y trabajos de construcción\r
45221000;Trabajos de construcción de puentes y túneles, pozos y pasos subterráneos\r
45221100;Trabajos de construcción para puentes\r
45221110;Trabajos de construcción de puentes\r
45221111;Trabajos de construcción de puentes de carretera\r
45221112;Trabajos de construcción de puentes de ferrocarril\r
45221113;Trabajos de construcción de pasarelas\r
45221114;Obras de construcción de puentes de hierro\r
45221115;Obras de construcción de puentes de acero\r
45221117;Trabajos de construcción de básculas puente\r
45221118;Trabajos de construcción de puentes para conducciones\r
45221119;Trabajos de renovación de puentes\r
45221120;Trabajos de construcción de viaductos\r
45221121;Trabajos de construcción de viaductos de carretera\r
45221122;Trabajos de construcción de viaductos de ferrocarril\r
45221200;Trabajos de construcción de túneles, pozos y pasos subterráneos\r
45221210;Excavaciones cubiertas o parcialmente cubiertas\r
45221211;Paso inferior\r
45221213;Excavaciones cubiertas o parcialmente cubiertas de ferrocarril\r
45221214;Excavaciones cubiertas o parcialmente cubiertas de carretera\r
45221220;Alcantarillas\r
45221230;Pozos de inspección\r
45221240;Trabajos de construcción de túneles\r
45221241;Trabajos de construcción de túneles de carretera\r
45221242;Trabajos de construcción de túneles de ferrocarril\r
45221243;Trabajos de construcción de túneles peatonales\r
45221244;Trabajos de construcción de túneles de canal\r
45221245;Trabajos de construcción de túneles subfluviales\r
45221246;Trabajos de construcción de túneles submarinos\r
45221247;Trabajos de tunelización\r
45221248;Trabajos de construcción de revestimientos para túneles\r
45221250;Trabajos subterráneos distintos de los túneles, pozos y pasos subterráneos\r
45222000;Trabajos de construcción de obras de ingeniería, excepto puentes, túneles, pozos y pasos subterráneos\r
45222100;Trabajos de construcción de plantas de tratamiento de residuos\r
45222110;Trabajos de construcción de vertederos de residuos\r
45222200;Trabajos de ingeniería para instalaciones militares\r
45222300;Trabajos de ingeniería para instalaciones de seguridad\r
45223000;Trabajos de construcción de estructuras\r
45223100;Montaje de estructuras metálicas\r
45223110;Instalación de estructuras metálicas\r
45223200;Obras de estructura\r
45223210;Obras de estructura de acero\r
45223220;Trabajos de obra bruta\r
45223300;Trabajos de construcción de estacionamientos\r
45223310;Trabajos de construcción de estacionamientos subterráneos\r
45223320;Trabajos de construcción de estacionamientos disuasorios\r
45223400;Trabajos de construcción de estaciones de radar\r
45223500;Estructuras de hormigón armado\r
45223600;Trabajos de construcción de perreras\r
45223700;Trabajos de construcción de áreas de servicio\r
45223710;Trabajos de construcción de áreas de servicio de autopista\r
45223720;Trabajos de construcción de gasolineras\r
45223800;Montaje e instalación de estructuras prefabricadas\r
45223810;Construcciones prefabricadas\r
45223820;Elementos prefabricados y sus componentes\r
45223821;Unidades prefabricadas\r
45223822;Elementos prefabricados\r
45230000;"Trabajos de construcción de tuberías, líneas de comunicación y líneas de conducción eléctrica, de autopistas, carreteras, aeródromos y vías férreas; trabajos de explanación"\r
45231000;Trabajos de construcción de tuberías, líneas de comunicación y líneas de conducción eléctrica\r
45231100;Trabajos generales de construcción de tuberías\r
45231110;Trabajos de construcción de tendidos de tuberías\r
45231111;Elevación y reinstalación de tuberías\r
45231112;Instalación de sistema de tuberías\r
45231113;Trabajos de reinstalación de tuberías\r
45231200;Trabajos de construcción de oleoductos y gasoductos\r
45231210;Construcción de oleoducto\r
45231220;Construcción de gasoducto\r
45231221;Trabajos de construcción de redes de suministro de gas\r
45231222;Trabajos en gasómetros\r
45231223;Obras auxiliares de distribución de gas\r
45231300;Trabajos de construcción de tuberías para agua y aguas residuales\r
45231400;Trabajos de construcción de líneas de conducción eléctrica\r
45231500;Trabajos en conducciones de aire comprimido\r
45231510;Trabajos en circuitos neumáticos de distribución postal\r
45231600;Trabajos de construcción de líneas de comunicación\r
45232000;Obras auxiliares para tuberías y cables\r
45232100;Obras auxiliares para tuberías de agua\r
45232120;Trabajos de regadío\r
45232121;Trabajos de construcción de canalizaciones de riego\r
45232130;Trabajos de construcción de canalizaciones de aguas pluviales\r
45232140;Trabajos de construcción de redes de calefacción urbana\r
45232141;Trabajos relacionados con la calefacción\r
45232142;Trabajos de construcción de estaciones de termotransferencia\r
45232150;Trabajos relacionados con tuberías de distribución de agua\r
45232151;Trabajos de construcción de reacondicionamiento de canalizaciones de agua\r
45232152;Trabajos de construcción de estaciones de bombeo\r
45232153;Construcción de torre de agua\r
45232154;Trabajos de construcción de cisternas elevadas de agua potable\r
45232200;Obras auxiliares para líneas de conducción eléctrica\r
45232210;Construcción de línea aérea\r
45232220;Trabajos de construcción de subestaciones\r
45232221;Subestación transformadora\r
45232300;Trabajos de construcción y obras auxiliares de líneas telefónicas y de comunicación\r
45232310;Trabajos de construcción de líneas telefónicas\r
45232311;Líneas telefónicas de socorro en carretera\r
45232320;Líneas de radiodifusión por cable\r
45232330;Montaje de antenas\r
45232331;Obras auxiliares para radiodifusión\r
45232332;Obras auxiliares para telecomunicaciones\r
45232340;Trabajos de construcción de estaciones de base de telefonía móvil\r
45232400;Obras de alcantarillado\r
45232410;Obras de saneamiento\r
45232411;Trabajos de construcción de canalizaciones de aguas sucias\r
45232420;Construcción de planta depuradora de aguas residuales\r
45232421;Planta de tratamiento de aguas residuales\r
45232422;Planta de tratamiento de lodos\r
45232423;Trabajos de construcción de centrales de bombeo de aguas residuales\r
45232424;Trabajos de construcción de descarga de aguas residuales\r
45232430;Obras para el tratamiento de agua\r
45232431;Estación de bombeo de aguas residuales\r
45232440;Trabajos de construcción de tuberías para aguas residuales\r
45232450;Trabajos de construcción de sistemas de desagüe\r
45232451;Trabajos de drenaje y de superficie\r
45232452;Trabajos de desagüe\r
45232453;Trabajos de construcción de desagües\r
45232454;Trabajos de construcción de depósitos de aguas pluviales\r
45232460;Trabajos sanitarios\r
45232470;Centro de transferencia de residuos\r
45233000;Trabajos de construcción, cimentación y pavimentación de autopistas y carreteras\r
45233100;Trabajos de construcción de autopistas y carreteras\r
45233110;Obras de construcción de autopistas\r
45233120;Trabajos de construcción de carreteras\r
45233121;Trabajos de construcción de carreteras de gran circulación\r
45233122;Trabajos de construcción de carreteras de circunvalación\r
45233123;Trabajos de construcción de carreteras secundarias\r
45233124;Trabajos de construcción de carreteras principales\r
45233125;Trabajos de construcción de intersecciones de carreteras\r
45233126;Trabajos de construcción de intersecciones a desnivel\r
45233127;Trabajos de construcción de intersecciones en T\r
45233128;Trabajos de construcción de rotondas\r
45233129;Trabajos de construcción de cruces de carreteras\r
45233130;Trabajos de construcción de autopistas\r
45233131;Trabajos de construcción de carreteras elevadas\r
45233139;Mantenimiento de autopistas\r
45233140;Obras viales\r
45233141;Trabajos de mantenimiento de carreteras\r
45233142;Trabajos de reparación de carreteras\r
45233144;Trabajos de construcción de pasos elevados\r
45233150;Trabajos destinados a la restricción del tráfico\r
45233160;Caminos y otras superficies empedradas\r
45233161;Trabajos de construcción de caminos peatonales\r
45233162;Trabajos de construcción de pistas para bicicletas\r
45233200;Trabajos diversos de pavimentación\r
45233210;Trabajos de pavimentación de autopistas\r
45233220;Trabajos de pavimentación de carreteras\r
45233221;Trabajos de pintura de la superficie de la calzada\r
45233222;Trabajos de pavimentación y asfaltado\r
45233223;Trabajos de repavimentación de calzadas\r
45233224;Trabajos de construcción de carreteras de calzada doble\r
45233225;Trabajos de construcción de carreteras de calzada única\r
45233226;Trabajos de construcción de vías de acceso\r
45233227;Trabajos de construcción de ramales de enlace\r
45233228;Trabajos de construcción de recubrimientos de superficies\r
45233229;Mantenimiento de arcenes\r
45233250;Trabajos de pavimentación, excepto carreteras\r
45233251;Trabajos de repavimentación\r
45233252;Trabajos de pavimentación de calles\r
45233253;Trabajos de pavimentación de caminos peatonales\r
45233260;Trabajos de construcción de vías peatonales\r
45233261;Trabajos de construcción de pasos elevados de peatones\r
45233262;Trabajos de construcción de zonas peatonales\r
45233270;Trabajos de pintura de superficies de aparcamiento\r
45233280;Instalación de barreras viarias\r
45233290;Instalación de señales de tráfico\r
45233291;Instalación de bolardos\r
45233292;Instalación de equipo de seguridad\r
45233293;Instalación de mobiliario urbano\r
45233294;Instalación de señalización viaria\r
45233300;Trabajos de cimentación de autopistas, carreteras, calles y caminos peatonales\r
45233310;Trabajos de cimentación de autopistas\r
45233320;Trabajos de cimentación de carreteras\r
45233330;Trabajos de cimentación de calles\r
45233340;Trabajos de cimentación de aceras\r
45234000;Trabajos de construcción de vías férreas y sistemas de transporte por cable\r
45234100;Trabajos de construcción ferroviaria\r
45234110;Obras en vías férreas interurbanas\r
45234111;Trabajos de construcción de ferrocarriles urbanos\r
45234112;Trabajos de construcción de depósitos ferroviarios\r
45234113;Demolición de vías\r
45234114;Trabajos de construcción de terraplenes ferroviarios\r
45234115;Trabajos de señalización ferroviaria\r
45234116;Trabajos de construcción de vías férreas\r
45234120;Obras en vías férreas urbanas\r
45234121;Obras tranviarias\r
45234122;Obras en la red de ferrocarriles subterráneos\r
45234123;Obras en la red de ferrocarriles parcialmente subterráneos\r
45234124;Transporte de pasajeros por ferrocarril subterráneo\r
45234125;Estación de ferrocarril subterráneo\r
45234126;Trabajos de construcción de línea tranviaria\r
45234127;Trabajos de construcción de depósitos de tranvías\r
45234128;Trabajos de construcción de plataformas de tranvías\r
45234129;Trabajos de construcción de vías férreas urbanas\r
45234130;Trabajos de construcción de balastado\r
45234140;Trabajos de construcción de pasos a nivel\r
45234160;Trabajos de construcción de catenarias\r
45234170;Trabajos de construcción de subestaciones ferroviarias\r
45234180;Trabajos de construcción para talleres ferroviarios\r
45234181;Trabajos de construcción para cabinas de seccionamiento de vías férreas\r
45234200;Sistemas de transporte por cable\r
45234210;Sistemas de transporte por cable con cabinas\r
45234220;Construcción de telesquí\r
45234230;Construcción de telesilla\r
45234240;Ferrocarril funicular\r
45234250;Trabajos de construcción de teleféricos\r
45235000;Trabajos de construcción de aeródromos, pistas de despegue y aterrizaje y superficies de maniobra\r
45235100;Trabajos de construcción de aeropuertos\r
45235110;Trabajos de construcción de aeródromos\r
45235111;Trabajos de construcción de pavimentos de aeródromos\r
45235200;Obras de construcción de pistas de despegue y aterrizaje\r
45235210;Repavimentación de pistas\r
45235300;Trabajos de construcción de superficies de maniobra de aeronaves\r
45235310;Trabajos de construcción de pistas de rodaje\r
45235311;Trabajos de construcción de pavimentos de pistas de rodaje\r
45235320;Trabajos de construcción de zonas de estacionamiento de aeronaves\r
45236000;Trabajos de explanación\r
45236100;Trabajos de explanación para diversas instalaciones deportivas\r
45236110;Trabajos de explanación para campos de deporte\r
45236111;Trabajos de explanación para campo de golf\r
45236112;Trabajos de explanación para pista de tenis\r
45236113;Trabajos de explanación para hipódromo\r
45236114;Trabajos de explanación para pista de pruebas deportivas\r
45236119;Trabajos de reparación de campos de deporte\r
45236200;Trabajos de explanación para instalaciones recreativas\r
45236210;Trabajos de explanación de áreas de juego para niños\r
45236220;Trabajos de explanación de parque zoológico\r
45236230;Trabajos de explanación de jardines\r
45236250;Trabajos de explanación de parques\r
45236290;Trabajos de reparación de zonas recreativas\r
45236300;Trabajos de explanación de cementerios\r
45237000;Trabajos de construcción de escenarios\r
45240000;Trabajos de construcción para proyectos hidráulicos\r
45241000;Trabajos de construcción de instalaciones portuarias\r
45241100;Trabajos de construcción de muelles\r
45241200;"Trabajos de construcción ""in situ"" de terminales de alta mar"\r
45241300;Trabajos de construcción de muelles (carga y descarga)\r
45241400;Trabajos de construcción de diques\r
45241500;Trabajos de construcción de embarcaderos\r
45241600;Instalación de equipo de iluminación portuaria\r
45242000;Trabajos de construcción de instalaciones de ocio ribereñas\r
45242100;Trabajos de construcción de instalaciones para deportes acuáticos\r
45242110;Trabajos de construcción de gradas de lanzamiento\r
45242200;Trabajos de construcción de puertos deportivos\r
45242210;Trabajos de construcción de puertos para yates\r
45243000;Obras de defensa costera\r
45243100;Obras de protección de acantilados\r
45243110;Trabajos de estabilización de acantilados\r
45243200;Trabajos de construcción de rompeolas\r
45243300;Trabajos de construcción de malecones\r
45243400;Obras de consolidación de playas\r
45243500;Trabajos de construcción de defensas marítimas\r
45243510;Obras de terraplenado\r
45243600;Trabajos de construcción de muros de muelles\r
45244000;Obras marítimas\r
45244100;Instalaciones marítimas\r
45244200;Espigones\r
45245000;Trabajos de dragado y de bombeo para plantas depuradoras de agua\r
45246000;Trabajos de regulación y control del caudal fluvial\r
45246100;Construcción de muros de encauzamiento\r
45246200;Trabajos de protección de riberas fluviales\r
45246400;Obras de protección contra inundaciones\r
45246410;Mantenimiento de defensas contra crecidas\r
45246500;Trabajos de construcción de paseos marítimos\r
45246510;Trabajos de construcción de pasarelas de madera\r
45247000;Trabajos de construcción de represas, canales, acequias y acueductos\r
45247100;Trabajos de construcción de vías acuáticas\r
45247110;Construcción de canales\r
45247111;Trabajos de construcción de acequias\r
45247112;Trabajos de construcción de canales de desagüe\r
45247120;Vías acuáticas, excepto canales\r
45247130;Trabajos de construcción de acueductos\r
45247200;Trabajos de construcción de presas y estructuras fijas similares\r
45247210;Trabajos de construcción de presas\r
45247211;Trabajos de construcción de muros de presa\r
45247212;Trabajos de refuerzo de presas\r
45247220;Trabajos de construcción de vertederos\r
45247230;Trabajos de construcción de escolleras\r
45247240;Trabajos de construcción de presas fijas\r
45247270;Trabajos de construcción de embalses\r
45248000;Trabajos de construcción de estructuras hidromecánicas\r
45248100;Trabajos de construcción de esclusas de canal\r
45248200;Trabajos de construcción de diques secos\r
45248300;Construcción de diques flotantes\r
45248400;Trabajos de construcción de pasarelas de embarque\r
45248500;Trabajos de construcción de presas móviles\r
45250000;Trabajos de construcción de plantas, de instalaciones para la minería y la industria y de edificios relacionados con la industria del gas y del petróleo\r
45251000;Trabajos de construcción de centrales eléctricas y plantas de calefacción\r
45251100;Trabajos de construcción de centrales eléctricas\r
45251110;Trabajos de construcción de centrales nucleares\r
45251111;Construcción de reactor nuclear\r
45251120;Trabajos de construcción de centrales hidroeléctricas\r
45251140;Trabajos de construcción de centrales térmicas\r
45251141;Trabajos de construcción de centrales geotérmicas\r
45251142;Trabajos de construcción de centrales eléctricas alimentadas con leña\r
45251143;Trabajos de construcción de plantas generadoras de aire comprimido\r
45251150;Construción de torre de refrigeración\r
45251160;Trabajos relacionados con instalaciones eólicas\r
45251200;Trabajos de construcción de plantas de calefacción\r
45251220;Trabajos de construcción de centrales de cogeneración\r
45251230;Trabajos de construcción de centrales generadoras de vapor\r
45251240;Trabajos de construcción de plantas generadoras de electricidad alimentadas con gas de vertedero\r
45251250;Trabajos de construcción de plantas de calefacción urbana\r
45252000;Trabajos de construcción de plantas de tratamiento de aguas residuales, plantas depuradoras y plantas de incineración de desperdicios\r
45252100;Trabajos de construcción de plantas depuradoras de aguas residuales\r
45252110;Trabajos de construcción de estaciones móviles\r
45252120;Trabajos de construcción de plantas de tratamiento de aguas\r
45252121;Instalaciones de sedimentación\r
45252122;Digestores de aguas residuales\r
45252123;Instalaciones de cribado\r
45252124;Trabajos de dragado y de bombeo\r
45252125;Trabajos de descarga de rocas\r
45252126;Trabajos de construcción de plantas de tratamiento de agua potable\r
45252127;Trabajos de construcción de plantas de tratamiento de aguas residuales\r
45252130;Equipo de planta depuradora de aguas residuales\r
45252140;Trabajos de construcción de plantas de deshidratación de lodos\r
45252150;Trabajos de construcción de plantas de manipulación de carbón\r
45252200;Equipo de planta depuradora\r
45252210;Trabajos de construcción de plantas de depuración de agua\r
45252300;Trabajos de construcción de plantas de incineración de residuos\r
45253000;Trabajos de construcción de plantas de tratamiento químico\r
45253100;Trabajos de construcción de plantas de desmineralización\r
45253200;Trabajos de construcción de plantas de desulfuración\r
45253300;Trabajos de construcción de instalaciones de destilación o de rectificación\r
45253310;Trabajos de construcción de instalaciones de destilación de agua\r
45253320;Trabajos de construcción de instalaciones de destilación de alcohol\r
45253400;Trabajos de construcción de plantas petroquímicas\r
45253500;Trabajos de construcción de plantas farmacéuticas\r
45253600;Trabajos de construcción de plantas de desionización\r
45253700;Trabajos de construcción de plantas digestoras\r
45253800;Trabajos de construcción de plantas de compostaje\r
45254000;Trabajos de construcción para la minería y la industria\r
45254100;Trabajos de construcción para la minería\r
45254110;Trabajos de construcción de bocaminas\r
45254200;Trabajos de construcción de fábricas\r
45255000;Trabajos de construcción para la industria del petróleo y del gas\r
45255100;Obras de construcción de plataformas de producción\r
45255110;Trabajos de construcción de pozos de extracción\r
45255120;Trabajos de construcción de instalaciones para plataformas\r
45255121;Trabajos de construcción de instalaciones de superficie\r
45255200;Trabajos de construcción de refinerías de petróleo\r
45255210;Trabajos de construcción de terminales de petróleo\r
45255300;Trabajos de construcción de terminales de gas\r
45255400;Trabajos de montaje\r
45255410;Trabajos de montaje en alta mar\r
45255420;Trabajos de montaje en la costa\r
45255430;Demolición de plataformas petrolíferas\r
45255500;Trabajos de perforación y de exploración\r
45255600;Trabajos en pozos con tubería helicoidal\r
45255700;Trabajos de construcción de plantas de gasificación de carbón\r
45255800;Trabajos de construcción de plantas de producción de gas\r
45259000;Reparación y mantenimiento de instalaciones\r
45259100;Reparación y mantenimiento de planta depuradora de aguas residuales\r
45259200;Reparación y mantenimiento de planta de depuración\r
45259300;Reparación y mantenimiento de plantas de calefacción\r
45259900;Actualización de instalaciones\r
45260000;Trabajos de techado y otros trabajos de construcción especializados\r
45261000;Trabajos de construcción de cubiertas y estructuras de cerramiento, y trabajos conexos\r
45261100;Trabajos de construcción de armaduras para cubiertas\r
45261200;Trabajos de recubrimiento y pintura de cubiertas\r
45261210;Trabajos de recubrimiento\r
45261211;Colocación de tejas\r
45261212;Empizarrado de tejados\r
45261213;Colocación de cubiertas metálicas\r
45261214;Revestimiento de cubiertas con tela asfáltica\r
45261215;Revestimiento de cubiertas con placas solares\r
45261220;Trabajos de pintura y demás trabajos de recubrimiento de cubiertas\r
45261221;Trabajos de pintura de cubiertas\r
45261222;Recubrimiento de cubiertas con cemento\r
45261300;Colocación de vierteaguas y canalones\r
45261310;Colocación de vierteaguas\r
45261320;Colocación de canalones\r
45261400;Trabajos de revestimiento\r
45261410;Trabajos de aislamiento para tejados\r
45261420;Trabajos de impermeabilización\r
45261900;Reparación y mantenimiento de tejados\r
45261910;Reparación de tejados\r
45261920;Mantenimiento de tejados\r
45262000;Trabajos de construcción especializados distintos de los trabajos de techado\r
45262100;Trabajos de andamiaje\r
45262110;Desmantelamiento de andamios\r
45262120;Montaje de andamios\r
45262200;Trabajos de cimentación y perforación de pozos de agua\r
45262210;Trabajos de cimentación\r
45262211;Instalación de pilotes\r
45262212;Trabajos de entibación\r
45262213;Procedimiento de rozas en los paramentos\r
45262220;Perforación de pozos de agua\r
45262300;Trabajos de hormigonado\r
45262310;Trabajos con hormigón armado\r
45262311;Trabajos de estructuras de hormigón\r
45262320;Trabajos de enrasado\r
45262321;Trabajos de enrasado de suelos\r
45262330;Trabajos de reparación de hormigón\r
45262340;Trabajos de inyección de cemento\r
45262350;Trabajos con hormigón en masa\r
45262360;Trabajos de consolidación con cemento\r
45262370;Trabajos de colocación de recubrimientos de hormigón\r
45262400;Trabajos de montaje de estructuras de acero\r
45262410;Trabajos de montaje de estructuras de acero para edificios\r
45262420;Trabajos de montaje de piezas de acero para la construcción de estructuras\r
45262421;Trabajos de amarre en alta mar\r
45262422;Trabajos de perforación submarina\r
45262423;Trabajos de fabricación de pontones\r
45262424;Trabajos de fabricación de módulos en alta mar\r
45262425;Trabajos de fabricación de pilares de tubo de acero\r
45262426;Trabajos de fabricación de pilotes\r
45262500;Trabajos de mampostería y albañilería\r
45262510;Cantería\r
45262511;Tallado de piedras\r
45262512;Trabajos con piedra tallada\r
45262520;Trabajos de albañilería\r
45262521;Obras de revestimiento con ladrillos\r
45262522;Trabajos de mampostería\r
45262600;Trabajos de construcción especializados diversos\r
45262610;Chimeneas industriales\r
45262620;Muros de contención\r
45262630;Construcción de hornos\r
45262640;Trabajos de mejoramiento del medio ambiente\r
45262650;Trabajos de revestimiento de fachadas\r
45262660;Trabajos de retirada de amianto\r
45262670;Trabajos de metalistería\r
45262680;Soldaduras\r
45262690;Remozamiento de edificios degradados\r
45262700;Trabajos de transformación de edificios\r
45262710;Trabajos de mantenimiento de frescos\r
45262800;Trabajos de ampliación de edificios\r
45262900;Trabajos de balcones y terrazas\r
45300000;Trabajos de instalación en edificios\r
45310000;Trabajos de instalación eléctrica\r
45311000;Trabajos de instalación de cableado y accesorios eléctricos\r
45311100;Trabajos de cableado eléctrico\r
45311200;Trabajos de instalación de accesorios eléctricos\r
45312000;Instalación de sistemas de alarma y antenas\r
45312100;Instalación de sistemas de alarma contra incendios\r
45312200;Instalación de sistemas de alarma antirrobo\r
45312300;Instalación de antenas\r
45312310;Trabajos de protección contra rayos\r
45312311;Instalación de pararrayos\r
45312320;Instalación de antenas de televisión\r
45312330;Instalación de antenas de radio\r
45313000;Instalación de ascensores y escaleras mecánicas\r
45313100;Instalación de ascensores\r
45313200;Instalación de escaleras mecánicas\r
45313210;Instalación de pasillos móviles\r
45314000;Instalación de equipo de telecomunicaciones\r
45314100;Instalación de centrales telefónicas\r
45314120;Instalación de centros de conmutación\r
45314200;Instalación de líneas telefónicas\r
45314300;Infraestructura para cables\r
45314310;Tendido de cables\r
45314320;Instalación de cableado informático\r
45315000;Trabajos de instalación eléctrica de equipos de calefacción y otros equipos eléctricos para edificios\r
45315100;Trabajos de instalación de ingeniería eléctrica\r
45315200;Trabajos relacionados con turbinas\r
45315300;Instalaciones de suministro de electricidad\r
45315400;Instalaciones de alta tensión\r
45315500;Instalaciones de media tensión\r
45315600;Instalaciones de baja tensión\r
45315700;Instalación de puestos de seccionamiento\r
45316000;Trabajos de instalación de sistemas de alumbrado y señalización\r
45316100;Instalación de equipo de alumbrado exterior\r
45316110;Instalación de equipo de alumbrado para carreteras\r
45316200;Instalación de equipo de señalización\r
45316210;Instalación de equipo de control del tráfico\r
45316211;Instalación de señales luminosas para carretera\r
45316212;Instalación de semáforos\r
45316213;Instalación de equipo de balizamiento\r
45316220;Instalación de equipo de señalización de aeropuertos\r
45316230;Instalación de equipo de señalización de puertos\r
45317000;Otros trabajos de instalación eléctrica\r
45317100;Trabajos de instalación eléctrica de equipos de bombeo\r
45317200;Trabajos de instalación eléctrica de transformadores\r
45317300;Trabajos de instalación eléctrica de aparatos de distribución eléctrica\r
45317400;Trabajos de instalación eléctrica de equipo de filtración\r
45320000;Trabajos de aislamiento\r
45321000;Trabajos de aislamiento térmico\r
45323000;Trabajos de aislamiento acústico\r
45324000;Trabajos de colocación de cartóneso\r
45330000;Trabajos de fontanería\r
45331000;Trabajos de instalación de calefacción, ventilación y aire acondicionado\r
45331100;Trabajos de instalación de calefacción central\r
45331110;Trabajos de instalación de calderas\r
45331200;Trabajos de instalación de ventilación y aire acondicionado\r
45331210;Trabajos de instalación de ventilación\r
45331211;Trabajos de instalación de ventilación para intemperie\r
45331220;Trabajos de instalación de aire acondicionado\r
45331221;Trabajos de instalación de aire acondicionado que renueva el aire natural solamente de forma parcial\r
45331230;Trabajos de instalación de equipos de refrigeración\r
45331231;Trabajos de instalación de equipos técnicos de refrigeración\r
45332000;Trabajos de instalación sanitaria y de colocación de tuberías de desagüe\r
45332200;Trabajos de tendido de cañerías de agua\r
45332300;Trabajos de tendido de cañerías de desagüe\r
45332400;Trabajos de instalación de artículos sanitarios\r
45333000;Trabajos de instalación de aparatos de gas\r
45333100;Trabajos de instalación de equipos reguladores de gas\r
45333200;Trabajos de instalación de contadores de gas\r
45340000;Trabajos de instalación de barandillas, pasamanos y dispositivos de seguridad\r
45341000;Instalación de pasamanos\r
45342000;Instalación de barandillas\r
45343000;Trabajos de instalación de dispositivos de protección contra incendios\r
45343100;Trabajos de ignifugación\r
45343200;Trabajos de instalación de dispositivos contra incendios\r
45343210;Trabajos de instalación de dispositivos de extinción de incendios con CO2\r
45343220;Trabajos de instalación de aparatos extintores\r
45343230;Trabajos de instalación de sistemas de aspersión automática\r
45350000;Instalaciones mecánicas\r
45351000;Trabajos de instalación de ingeniería mecánica\r
45400000;Acabado de edificios\r
45410000;Trabajos de enlucido\r
45420000;Trabajos de instalación de carpintería de madera\r
45421000;Trabajos de ebanistería\r
45421100;Instalación de puertas, ventanas y elementos conexos\r
45421110;Instalación de marcos de puertas y ventanas\r
45421111;Instalación de marcos de puertas\r
45421112;Instalación de marcos de ventanas\r
45421120;Instalación de umbrales\r
45421130;Instalación de puertas y ventanas\r
45421131;Instalación de puertas\r
45421132;Instalación de ventanas\r
45421140;Instalación de carpintería metálica, excepto puertas y ventanas\r
45421141;Instalación de tabiques\r
45421142;Instalación de contraventanas\r
45421143;Trabajos de instalación de persianas\r
45421144;Trabajos de instalación de toldos\r
45421145;Trabajos de instalación de persianas enrollables\r
45421146;Instalación de falsos techos\r
45421147;Instalación de rejas\r
45421148;Instalación de verjas\r
45421150;Trabajos de instalación de carpintería no metálica\r
45421151;Instalación de cocinas equipadas\r
45421152;Instalación de paredes divisorias\r
45421153;Instalación de muebles empotrados\r
45421160;Trabajos de cerrajería y carpintería metálica\r
45422000;Carpintería y ebanistería\r
45422100;Trabajos en madera\r
45430000;Trabajos de revestimiento de suelos y paredes\r
45431000;Trabajos de alicatado\r
45431100;Trabajos de alicatado de suelos\r
45431200;Trabajos de alicatado de paredes\r
45432000;Trabajos de pavimentación, revestimiento y empapelado de paredes\r
45432100;Trabajos de pavimentación y revestimiento de suelos\r
45432110;Trabajos de solado\r
45432111;Colocación de pavimentos flexibles\r
45432112;Colocación de adoquinado\r
45432113;Revestimiento de parqué\r
45432114;Trabajos de entarugado\r
45432120;Trabajos de instalación de falsos suelos\r
45432121;Pisos para salas de informática\r
45432130;Trabajo de revestimiento de suelos\r
45432200;Trabajos de revestimiento y empapelado de paredes\r
45432210;Trabajos de revestimiento de paredes\r
45432220;Trabajos de empapelado de paredes\r
45440000;Trabajos de pintura y acristalamiento\r
45441000;Trabajos de acristalamiento\r
45442000;Aplicación de recubrimiento protector\r
45442100;Trabajos de pintura\r
45442110;Trabajos de pintura de edificios\r
45442120;Trabajos de pintura y aplicación de recubrimiento protector de estructuras\r
45442121;Trabajos de pintura de estructuras\r
45442180;Trabajos de renovación de pintura\r
45442190;Trabajos de decapado de pintura\r
45442200;Aplicación de recubrimientos anticorrosivos\r
45442210;Trabajos de galvanización\r
45442300;Obras de protección de superficies\r
45443000;Trabajos de fachada\r
45450000;Otros trabajos de acabado de edificios\r
45451000;Trabajos de decoración\r
45451100;Trabajos de ornamentación\r
45451200;Revestimiento con paneles\r
45451300;Jardines interiores\r
45452000;Trabajos de limpieza exterior de edificios\r
45452100;Limpieza con chorro de arena de paredes exteriores\r
45453000;Trabajos de revisión y reacondicionamiento\r
45453100;Trabajos de reacondicionamiento\r
45454000;Trabajos de reestructuración\r
45454100;Trabajos de restauración\r
45500000;Alquiler de maquinaria y equipo de construcción y de ingeniería civil con maquinista\r
45510000;Alquiler de grúas con maquinista\r
45520000;Alquiler de maquinaria para movimiento de tierras con maquinista\r
48000000;Paquetes de software y sistemas de información\r
48100000;Paquetes de software específico de un sector económico\r
48110000;Paquetes de software de puntos de venta\r
48120000;Paquetes de software de control de vuelos\r
48121000;Paquetes de software de control del tránsito aéreo\r
48130000;Paquetes de software de apoyo en tierra y de ensayos para la aviación\r
48131000;Paquetes de software de apoyo en tierra para la aviación\r
48132000;Paquetes de software de ensayos para la aviación\r
48140000;Paquetes de software de control del tráfico ferroviario\r
48150000;Paquetes de software de control industrial\r
48151000;Sistema de control informático\r
48160000;Paquetes de software de bibliotecas\r
48161000;Sistema de gestión de biblioteca\r
48170000;Paquetes de software de conformidad\r
48180000;Paquetes de software médico\r
48190000;Paquetes de software educativo\r
48200000;Paquetes de software de conexión en red, Internet e intranet\r
48210000;Paquetes de software de conexión en red\r
48211000;Paquetes de software de interconectividad de plataformas\r
48212000;Paquetes de software de servidor de discos ópticos\r
48213000;Paquetes de software para mejorar el sistema operativo\r
48214000;Paquetes de software de sistemas operativos en red\r
48215000;Paquetes de software de desarrolladores de redes\r
48216000;Paquetes de software de emulación de terminal de conectividad de redes\r
48217000;Paquetes de software de proceso de transacciones\r
48217100;Paquetes de software de proceso de transacciones de la unidad central\r
48217200;Paquetes de software de proceso de transacciones para miniordenadores\r
48217300;Paquetes de software de proceso de transacciones para microordenadores\r
48218000;Paquetes de software de gestión de licencias\r
48219000;Paquetes de software diversos de conexión en red\r
48219100;Paquetes de software de pasarela\r
48219200;Paquetes de software de servidor de discos compactos (CD)\r
48219300;Paquetes de software de administración\r
48219400;Paquetes de software de servidor de transacciones\r
48219500;Paquetes de software de desvío o conmutación\r
48219600;Paquetes de software de multiplexor\r
48219700;Paquetes de software de servidor de comunicaciones\r
48219800;Paquetes de software puente\r
48220000;Paquetes de software de Internet e intranet\r
48221000;Paquetes de software de navegación en Internet\r
48222000;Paquetes de software de servidor web\r
48223000;Paquetes de software de correo electrónico\r
48224000;Paquetes de software de edición de páginas web\r
48300000;Paquetes de software de creación de documentos, dibujo, tratamiento de imágenes, planificación y productividad\r
48310000;Paquetes de software de creación de documentos\r
48311000;Paquetes de software de gestión de documentos\r
48311100;Sistema de gestión de documentos\r
48312000;Paquetes de software de edición electrónica\r
48313000;Paquetes de software de reconocimiento óptico de caracteres (OCR)\r
48313100;Sistema de lectura óptica\r
48314000;Paquetes de software de reconocimiento vocal\r
48315000;Paquetes de software de autoedición\r
48316000;Paquetes de software de presentación\r
48317000;Paquetes de software de tratamiento de textos\r
48318000;Paquetes de software de escáner\r
48319000;Correctores ortográficos\r
48320000;Paquetes de software de dibujo y tratamiento de imágenes\r
48321000;Paquetes de software de diseño asistido por ordenador (DAO)\r
48321100;Sistema de diseño asistido por ordenador (DAO)\r
48322000;Paquetes de software de gráficos\r
48323000;Paquetes de software de fabricación asistida por ordenador (FAO)\r
48324000;Paquetes de software de trazado de diagramas\r
48325000;Paquetes de software de diseño de formularios\r
48326000;Paquetes de software cartográfico\r
48326100;Sistema de cartografía digital\r
48327000;Paquetes de software de dibujo y pintura\r
48328000;Paquetes de software de tratamiento de imágenes\r
48329000;Sistema de imágenes y archivo\r
48330000;Paquetes de software de planificación y productividad\r
48331000;Paquetes de software de gestión de proyectos\r
48332000;Paquetes de software de planificación\r
48333000;Paquetes de software de gestión de contactos\r
48400000;Paquetes de software de transacciones comerciales y personales\r
48410000;Paquetes de software de gestión de inversiones y elaboración de declaraciones fiscales\r
48411000;Paquetes de software de gestión de inversiones\r
48412000;Paquetes de software de elaboración de declaraciones fiscales\r
48420000;"Paquetes de software de gestión de instalaciones y ""suite"" de paquetes de software"\r
48421000;Paquetes de software de gestión de instalaciones\r
48422000;"""Suites"" de paquetes de software"\r
48430000;Paquetes de software de gestión de inventarios\r
48440000;Paquetes de software de análisis financiero y contabilidad\r
48441000;Paquetes de software de análisis financiero\r
48442000;Paquetes de software de sistemas financieros\r
48443000;Paquetes de software de contabilidad\r
48444000;Sistema de contabilidad\r
48444100;Sistema de facturación\r
48445000;Paquetes de software de gestión de relaciones con el consumidor\r
48450000;Paquetes de software de contabilización del tiempo o recursos humanos\r
48451000;Paquetes de software de planificación de recursos empresariales\r
48460000;Paquetes de software analítico, científico, matemático o predictivo\r
48461000;Paquetes de software analítico o científico\r
48462000;Paquetes de software matemático o predictivo\r
48463000;Paquetes de software estadístico\r
48470000;Paquetes de software de subastas\r
48480000;Paquetes de software de ventas, mercadotecnia e inteligencia empresarial\r
48481000;Paquetes de software de ventas o mercadotecnia\r
48482000;Paquetes de software de inteligencia empresarial\r
48490000;Paquetes de software de contratación administrativa\r
48500000;Paquetes de software de comunicación y multimedia\r
48510000;Paquetes de software de comunicación\r
48511000;Paquetes de software de comunicaciones de escritorio\r
48512000;Paquetes de software de respuesta vocal interactiva\r
48513000;Paquetes de software de módem\r
48514000;Paquetes de software de acceso remoto\r
48515000;Paquetes de software de videoconferencia\r
48516000;Paquetes de software de intercambio\r
48517000;Paquetes de software de TI\r
48518000;Paquetes de software de emulación\r
48519000;Paquetes de software de gestión de memoria\r
48520000;Paquetes de software multimedia\r
48521000;Paquetes de software de edición de música o sonido\r
48522000;Paquetes de software de teclado virtual\r
48600000;Paquetes de software de bases de datos y de funcionamiento\r
48610000;Sistemas de bases de datos\r
48611000;Paquetes de software de bases de datos\r
48612000;Sistema de gestión de base de datos\r
48613000;Gestión electrónica de datos\r
48614000;Sistema de recopilación de datos\r
48620000;Sistemas operativos\r
48621000;Paquetes de software de sistema operativo de unidad central\r
48622000;Paquetes de software de sistema operativo de miniordenador\r
48623000;Paquetes de software de sistema operativo de microordenador\r
48624000;Paquetes de software de sistema operativo de ordenador personal (PC)\r
48625000;Sistemas operativos de sistemas abiertos\r
48626000;Paquetes de software de agrupamiento\r
48627000;Paquetes de software de sistema operativo de tiempo real\r
48628000;Arquitectura microcanal\r
48700000;Utilidades de paquetes de software\r
48710000;Paquetes de software de copia de seguridad o recuperación\r
48720000;Paquetes de software de código de barras\r
48730000;Paquetes de software de seguridad\r
48731000;Paquetes de software de seguridad de archivos\r
48732000;Paquetes de software de seguridad de datos\r
48740000;Paquetes de software de traducción de lenguas extranjeras\r
48750000;Paquetes de software de carga de medios de almacenamiento\r
48760000;Paquetes de software de protección antivirus\r
48761000;Paquetes de software antivirus\r
48770000;Paquetes de software de utilidades generales, de compresión y de impresión\r
48771000;Paquetes de software de utilidades generales\r
48772000;Utilidades de compresión\r
48773000;Paquetes de software de utilidades de impresión\r
48773100;Paquetes de software de cola de impresión\r
48780000;Paquetes de software de gestión de sistemas, almacenamiento y contenido\r
48781000;Paquetes de software de gestión de sistemas\r
48782000;Paquetes de software de gestión de almacenamiento\r
48783000;Paquetes de software de gestión de contenido\r
48790000;Paquetes de software de comprobación de versiones\r
48800000;Sistemas y servidores de información\r
48810000;Sistemas de información\r
48811000;Sistema de correo electrónico\r
48812000;Sistemas de información financiera\r
48813000;Sistema de información al pasajero\r
48813100;Tablones de anuncios electrónicos\r
48813200;Sistema de información a los pasajeros en tiempo real\r
48814000;Sistemas de información médica\r
48814100;Sistema de información de enfermería\r
48814200;Sistema de administración de pacientes\r
48814300;Sistema de gestión de quirófanos\r
48814400;Sistema de información clínica\r
48814500;Sistema de gestión de pacientes (Casemix)\r
48820000;Servidores\r
48821000;Servidores de red\r
48822000;Servidores de ordenador\r
48823000;Servidores de fichero\r
48824000;Servidores de impresora\r
48825000;Servidores web\r
48900000;Paquetes de software y sistemas informáticos diversos\r
48910000;Paquetes de software de juegos informáticos, juegos para la familia y salvapantallas\r
48911000;Paquetes de software de juegos informáticos\r
48912000;Juegos para la familia\r
48913000;Salvapantallas\r
48920000;Paquetes de software ofimático\r
48921000;Sistema de automatización\r
48930000;Paquetes de software de formación y entretenimiento\r
48931000;Paquetes de software de formación\r
48932000;Paquetes de software de entretenimiento\r
48940000;Paquetes de software de diseños y calendario\r
48941000;Paquetes de software de diseños\r
48942000;Paquetes de software de calendario\r
48950000;Sistema de localización de barcos y de megafonía\r
48951000;Sistema de localización de barcos\r
48952000;Sistemas de megafonía\r
48960000;Paquetes de software de controladores y sistemas\r
48961000;Controladores de ethernet\r
48962000;Controladores de tarjetas de gráficos\r
48970000;Paquetes de software para imprenta\r
48971000;Paquetes de software para crear libretas de direcciones\r
48972000;Paquetes de software de elaboración de etiquetas\r
48980000;Lenguajes y herramientas de programación\r
48981000;Paquetes de software de compilación\r
48982000;Paquetes de software de gestión de la configuración\r
48983000;Paquetes de software de desarrollo\r
48984000;Herramientas de interfaz gráfica de usuario (GUI)\r
48985000;Lenguajes de programación\r
48986000;Paquetes de software de ensayo de programas\r
48987000;Paquetes de software de depuración\r
48990000;Paquetes de software de hoja de cálculo y de mejora de hoja de cálculo\r
48991000;Paquetes de software de hoja de cálculo\r
50000000;Servicios de reparación y mantenimiento\r
50100000;Servicios de reparación, mantenimiento y servicios asociados de vehículos y equipo conexo\r
50110000;Servicios de reparación y mantenimiento de vehículos de motor y equipo asociado\r
50111000;Servicios de administración, reparación y mantenimiento de parque de vehículos\r
50111100;Servicios de gestión de parque de vehículos\r
50111110;Servicios de soporte de parque de vehículos\r
50112000;Servicios de reparación y mantenimiento de automóviles\r
50112100;Servicios de reparación de automóviles\r
50112110;Servicios de reparación de carrocerías de vehículos\r
50112111;Servicios de chapistería\r
50112120;Servicios de reemplazo de parabrisas\r
50112200;Servicios de mantenimiento de automóviles\r
50112300;Servicios de lavado de automóviles y similares\r
50113000;Servicios de reparación y mantenimiento de autobuses\r
50113100;Servicios de reparación de autobuses\r
50113200;Servicios de mantenimiento de autobuses\r
50114000;Servicios de reparación y mantenimiento de camiones\r
50114100;Servicios de reparación de camiones\r
50114200;Servicios de mantenimiento de camiones\r
50115000;Servicios de reparación y mantenimiento de motocicletas\r
50115100;Servicios de reparación de motocicletas\r
50115200;Servicios de mantenimiento de motocicletas\r
50116000;Servicios de mantenimiento y reparación relacionados con partes específicas de vehículos\r
50116100;Servicios de reparación de sistemas eléctricos\r
50116200;Servicios de reparación y mantenimiento de frenos y partes de frenos de vehículos\r
50116300;Servicios de reparación y mantenimiento de cajas de cambio de vehículos\r
50116400;Servicios de reparación y mantenimiento de transmisiones de vehículos\r
50116500;Servicios de reparación de neumáticos, incluidos el ajuste y el equilibrado de ruedas\r
50116510;Servicios de recauchutado de neumáticos\r
50116600;Servicios de reparación y mantenimiento de motores de arranque\r
50117000;Servicios de transformación y reacondicionamiento de vehículos\r
50117100;Servicios de transformación de vehículos\r
50117200;Servicios de transformación de ambulancias\r
50117300;Servicios de reacondicionamiento de vehículos\r
50118000;Servicios de auxilio de automóviles en carretera\r
50118100;Servicios de reparación de averías y recuperación de automóviles\r
50118110;Servicios de remolque de vehículos\r
50118200;Servicios de reparación de averías y recuperación de vehículos comerciales\r
50118300;Servicios de reparación de averías y recuperación de autobuses\r
50118400;Servicios de reparación de averías y recuperación de vehículos de motor\r
50118500;Servicios de reparación de averías y recuperación de motocicletas\r
50190000;Servicios de demolición de vehículos\r
50200000;Servicios de reparación, mantenimiento y servicios asociados relacionados con aeronaves, vías férreas, carreteras y la marina\r
50210000;Servicios de reparación y mantenimiento y servicios asociados relacionados con aeronaves y otros equipos\r
50211000;Servicios de reparación y mantenimiento de aeronaves\r
50211100;Servicios de mantenimiento de aeronaves\r
50211200;Servicios de reparación de aeronaves\r
50211210;Servicios de reparación y mantenimiento de motores de aviación\r
50211211;Servicios de mantenimiento de motores de aviación\r
50211212;Servicios de reparación de motores de aviación\r
50211300;Servicios de reacondicionamiento de aeronaves\r
50211310;Servicios de reacondicionamiento de motores de aviación\r
50212000;Servicios de reparación y mantenimiento de helicópteros\r
50220000;Servicios de reparación, mantenimiento y servicios asociados relacionados con vías férreas y otros equipos\r
50221000;Servicios de reparación y mantenimiento de locomotoras\r
50221100;Servicios de reparación y mantenimiento de cajas de cambio de locomotoras\r
50221200;Servicios de reparación y mantenimiento de sistemas de transmisión de locomotoras\r
50221300;Servicios de reparación y mantenimiento de ejes de locomotoras\r
50221400;Servicios de reparación y mantenimiento de frenos y partes de frenos de locomotoras\r
50222000;Servicios de reparación y mantenimiento de material móvil\r
50222100;Servicios de reparación y mantenimiento de amortiguadores\r
50223000;Servicios de reacondicionamiento de locomotoras\r
50224000;Servicios de reacondicionamiento de material móvil\r
50224100;Servicios de reacondicionamiento de asientos de material móvil\r
50224200;Servicios de reacondicionamiento de coches de pasajeros\r
50225000;Servicios de mantenimiento de vías férreas\r
50229000;Demolición de material móvil\r
50230000;Servicios de reparación, mantenimiento y servicios asociados relacionados con carreteras y otros equipos\r
50232000;Servicios de mantenimiento de instalaciones de alumbrado público y semáforos\r
50232100;Servicios de mantenimiento de alumbrado público de calles\r
50232110;Puesta a punto de instalaciones de iluminación pública\r
50232200;Servicios de mantenimiento de señales de tráfico\r
50240000;Servicios de reparación, mantenimiento y servicios asociados relacionados con equipos navales y otros equipos\r
50241000;Servicios de reparación y mantenimiento de buques\r
50241100;Servicios de reparación de barcos\r
50241200;Servicios de reparación de transbordadores\r
50242000;Servicios de transformación de buques\r
50243000;Servicios de demolición de buques\r
50244000;Servicios de reacondicionamiento de buques o barcos\r
50245000;Servicios de modernización de buques\r
50246000;Servicios de mantenimiento de equipo portuario\r
50246100;Servicios de entrada en dique seco\r
50246200;Servicios de mantenimiento de boyas\r
50246300;Servicios de reparación y mantenimiento de estructuras flotantes\r
50246400;Servicios de reparación y mantenimiento de plataformas flotantes\r
50300000;Servicios de reparación, mantenimiento y servicios asociados relacionados con ordenadores personales, equipo de oficina, telecomunicaciones y equipo audiovisual\r
50310000;Mantenimiento y reparación de máquinas de oficina\r
50311000;Mantenimiento y reparación de máquinas de contabilidad de oficina\r
50311400;Mantenimiento y reparación de calculadoras y máquinas de contabilidad\r
50312000;Mantenimiento y reparación de equipo informático\r
50312100;"Mantenimiento y reparación de ordenadores ""mainframe"""\r
50312110;"Mantenimiento de ordenadores ""mainframe"""\r
50312120;"Reparación de ordenadores ""mainframe"""\r
50312200;Mantenimiento y reparación de miniordenadores\r
50312210;Mantenimiento de miniordenadores\r
50312220;Reparación de miniordenadores\r
50312300;Mantenimiento y reparación de equipos de redes de datos\r
50312310;Mantenimiento de equipos de redes de datos\r
50312320;Reparación de equipos de redes de datos\r
50312400;Mantenimiento y reparación de microordenadores\r
50312410;Mantenimiento de microordenadores\r
50312420;Reparación de microordenadores\r
50312600;Mantenimiento y reparación de equipo de tecnología de la información\r
50312610;Mantenimiento de equipo de tecnología de la información\r
50312620;Reparación de equipo de tecnología de la información\r
50313000;Mantenimiento y reparación de máquinas de reprografía\r
50313100;Servicios de reparación de fotocopiadoras\r
50313200;Servicios de mantenimiento de fotocopiadoras\r
50314000;Servicios de reparación y mantenimiento de máquinas telecopiadoras\r
50315000;Servicios de reparación y mantenimiento de contestadores telefónicos\r
50316000;Mantenimiento y reparación de máquinas expendedoras de billetes\r
50317000;Mantenimiento y reparación de máquinas de validación de billetes\r
50320000;Servicios de reparación y mantenimiento de ordenadores personales\r
50321000;Servicios de reparación de ordenadores personales\r
50322000;Servicios de mantenimiento de ordenadores personales\r
50323000;Mantenimiento y reparación de periféricos informáticos\r
50323100;Mantenimiento de periféricos informáticos\r
50323200;Reparación de periféricos informáticos\r
50324000;Servicios de asistencia a ordenadores personales\r
50324100;Servicios de mantenimiento de sistemas\r
50324200;Servicios de mantenimiento preventivo\r
50330000;Servicios de mantenimiento de equipo de telecomunicación\r
50331000;Servicios de reparación y mantenimiento de líneas de telecomunicación\r
50332000;Servicios de mantenimiento de infraestructura de telecomunicaciones\r
50333000;Servicios de mantenimiento de equipo de radiocomunicaciones\r
50333100;Servicios de reparación y mantenimiento de radiotransmisores\r
50333200;Reparación y mantenimiento de aparatos de radiotelefonía\r
50334000;Servicios de reparación y mantenimiento de equipos de telefonía por hilo y telegrafía por hilo\r
50334100;Servicios de reparación y mantenimiento de equipos de telefonía por hilo\r
50334110;Servicios de mantenimiento de redes telefónicas\r
50334120;Servicios de actualización de equipos de conmutación telefónica\r
50334130;Servicios de reparación y mantenimiento de aparatos de conmutación telefónica\r
50334140;Servicios de reparación y mantenimiento de aparatos telefónicos\r
50334200;Servicios de reparación y mantenimiento de equipos de telegrafía por hilo\r
50334300;Servicios de reparación y mantenimiento de equipos de télex por hilo\r
50334400;Servicios de mantenimiento de sistemas de comunicaciones\r
50340000;Servicios de reparación y mantenimiento de equipos audiovisual y óptico\r
50341000;Servicios de reparación y mantenimiento de equipos de televisión\r
50341100;Servicios de reparación y mantenimiento de equipos de videotexto\r
50341200;Servicios de reparación y mantenimiento de transmisores de televisión\r
50342000;Servicios de reparación y mantenimiento de equipos de audio\r
50343000;Servicios de reparación y mantenimiento de equipos de vídeo\r
50344000;Servicios de reparación y mantenimiento de equipos ópticos\r
50344100;Servicios de reparación y mantenimiento de equipos fotográficos\r
50344200;Servicios de reparación y mantenimiento de equipos cinematográficos\r
50400000;Servicios de reparación y mantenimiento de equipo médico y de precisión\r
50410000;Servicios de reparación y mantenimiento de aparatos de medida, pruebas y verificación\r
50411000;Servicios de reparación y mantenimiento de aparatos de medida\r
50411100;Servicios de reparación y mantenimiento de contadores de agua\r
50411200;Servicios de reparación y mantenimiento de contadores de gas\r
50411300;Servicios de reparación y mantenimiento de contadores de electricidad\r
50411400;Servicios de reparación y mantenimiento de tacómetros\r
50411500;Servicios de reparación y mantenimiento de equipos industriales de cronomedición\r
50412000;Servicios de reparación y mantenimiento de aparatos de pruebas\r
50413000;Servicios de reparación y mantenimiento de aparatos de verificación\r
50413100;Servicios de reparación y mantenimiento de equipos detectores de gas\r
50413200;Servicios de reparación y mantenimiento de instalaciones contra incendios\r
50420000;Servicios de reparación y mantenimiento de aparatos médicos y quirúrgicos\r
50421000;Servicios de reparación y mantenimiento de equipos médicos\r
50421100;Servicios de reparación y mantenimiento de sillas de ruedas\r
50421200;Servicios de reparación y mantenimiento de equipos de rayos X\r
50422000;Servicios de reparación y mantenimiento de equipos quirúrgicos\r
50430000;Servicios de reparación y mantenimiento de equipos de precisión\r
50431000;Servicios de reparación y mantenimiento de relojes de pulsera\r
50432000;Servicios de reparación y mantenimiento de relojes de pared\r
50433000;Servicios de calibrado\r
50500000;Servicios de reparación y mantenimiento de bombas, válvulas, grifos, contenedores metálicos y maquinaria\r
50510000;Servicios de reparación y mantenimiento de bombas, válvulas, grifos y contenedores de metal\r
50511000;Servicios de reparación y mantenimiento de bombas\r
50511100;Servicios de reparación y mantenimiento de bombas para líquidos\r
50511200;Servicios de reparación y mantenimiento de bombas de gas\r
50512000;Servicios de reparación y mantenimiento de válvulas\r
50513000;Servicios de reparación y mantenimiento de grifos\r
50514000;Servicios de reparación y mantenimiento de contenedores metálicos\r
50514100;Servicios de reparación y mantenimiento de cisternas\r
50514200;Servicios de reparación y mantenimiento de depósitos\r
50514300;Servicios de reparación del revestimiento de los tubos de encamisado\r
50530000;Servicios de reparación y mantenimiento de maquinaria\r
50531000;Servicios de reparación y mantenimiento de maquinaria no eléctrica\r
50531100;Servicios de reparación y mantenimiento de calderas\r
50531200;Servicios de mantenimiento de aparatos de gas\r
50531300;Servicios de reparación y mantenimiento de compresores\r
50531400;Servicios de reparación y mantenimiento de grúas\r
50531500;Servicios de reparación y mantenimiento de grúas derrick\r
50531510;Servicios de desmontaje de torres de perforación\r
50532000;Servicios de reparación y mantenimiento de maquinaria eléctrica, aparatos y equipo asociado\r
50532100;Servicios de reparación y mantenimiento de motores eléctricos\r
50532200;Servicios de reparación y mantenimiento de transformadores\r
50532300;Servicios de reparación y mantenimiento de generadores\r
50532400;Servicios de reparación y mantenimiento de equipos de distribución eléctrica\r
50600000;Servicios de reparación y mantenimiento de materiales de seguridad y defensa\r
50610000;Servicios de reparación y mantenimiento de equipos de seguridad\r
50620000;Servicios de reparación y mantenimiento de armas de fuego y munición\r
50630000;Servicios de reparación y mantenimiento de vehículos militares\r
50640000;Servicios de reparación y mantenimiento de buques de guerra\r
50650000;Servicios de reparación y mantenimiento de aeronaves militares, misiles y naves espaciales\r
50660000;Servicios de reparación y mantenimiento de sistemas electrónicos militares\r
50700000;Servicios de reparación y mantenimiento de equipos de edificios\r
50710000;Servicios de reparación y mantenimiento de equipos eléctricos y mecánicos de edificios\r
50711000;Servicios de reparación y mantenimiento de equipos eléctricos de edificios\r
50712000;Servicios de reparación y mantenimiento de equipos mecánicos de edificios\r
50720000;Servicios de reparación y mantenimiento de calefacción central\r
50721000;Puesta a punto de instalaciones de calefacción\r
50730000;Servicios de reparación y mantenimiento de grupos refrigeradores\r
50740000;Servicios de reparación y mantenimiento de escaleras mecánicas\r
50750000;Servicios de mantenimiento de ascensores\r
50760000;Reparación y mantenimiento de aseos públicos\r
50800000;Servicios varios de reparación y mantenimiento\r
50810000;Servicios de reparación de joyería\r
50820000;Servicios de reparación de artículos personales de cuero\r
50821000;Servicios de reparación de botas\r
50822000;Servicios de reparación de zapatos\r
50830000;Servicios de reparación de ropa y tejidos\r
50840000;Servicios de reparación y mantenimiento de armas y sistemas de armas\r
50841000;Servicios de reparación y mantenimiento de armas\r
50842000;Servicios de reparación y mantenimiento de sistemas de armas\r
50850000;Servicios de reparación y mantenimiento de mobiliario\r
50860000;Servicios de reparación y mantenimiento de instrumentos musicales\r
50870000;Servicios de reparación y mantenimiento de equipos de terrenos de juegos\r
50880000;Servicios de reparación y mantenimiento de equipos de hostelería y restaurante\r
50881000;Servicios de reparación y mantenimiento de equipo de hostelería\r
50882000;Servicios de reparación y mantenimiento de equipo de restaurante\r
50883000;Servicios de reparación y mantenimiento de equipo de catering\r
50884000;Servicios de reparación y mantenimiento de equipo de camping\r
51000000;Servicios de instalación (excepto software)\r
51100000;Servicios de instalación de equipos eléctrico y mecánico\r
51110000;Servicios de instalación de equipo eléctrico\r
51111000;Servicios de instalación de motores eléctricos, generadores y transformadores\r
51111100;Servicios de instalación de motores eléctricos\r
51111200;Servicios de instalación de generadores\r
51111300;Servicios de instalación de transformadores\r
51112000;Servicios de instalación de equipos de distribución y de control de electricidad\r
51112100;Servicios de instalación de equipos de distribución de electricidad\r
51112200;Servicios de instalación de equipos de control de electricidad\r
51120000;Servicios de instalación de equipos mecánicos\r
51121000;Servicios de instalación de aparatos de ejercicio físico\r
51122000;Servicios de instalación de mástiles de bandera\r
51130000;Servicios de instalación de generadores de vapor, turbinas, compresores y quemadores\r
51131000;Servicios de instalación de generadores de vapor\r
51133000;Servicios de instalación de turbinas\r
51133100;Servicios de instalación de turbinas de gas\r
51134000;Servicios de instalación de compresores\r
51135000;Servicios de instalación de hornos\r
51135100;Servicios de instalación de quemadores\r
51135110;Servicios de instalación de incineradores de residuos\r
51140000;Servicios de instalación de motores\r
51141000;Servicios de instalación de motores de gasolina\r
51142000;Servicios de instalación de motores diésel\r
51143000;Servicios de instalación de motores de ferrocarril\r
51144000;Servicios de instalación de motores de vehículos\r
51145000;Servicios de instalación de motores marinos\r
51146000;Servicios de instalación de motores de aeronaves\r
51200000;Servicios de instalación de equipos de medida, verificación, pruebas y navegación\r
51210000;Servicios de instalación de equipo de medida\r
51211000;Servicios de instalación de equipo de cronomedición\r
51212000;Servicios de instalación de equipos de registro de asistencia\r
51213000;Servicios de instalación de equipos de control horario (fechadores y contadores)\r
51214000;Servicios de instalación de equipos de parquímetros\r
51215000;Servicios de instalación de equipos meteorológicos\r
51216000;Servicios de instalación de equipos geológicos\r
51220000;Servicios de instalación de equipo de verificación\r
51221000;Servicios de instalación de dispositivos de facturación automática en aeropuertos\r
51230000;Servicios de instalación de equipo de pruebas\r
51240000;Servicios de instalación de equipo de navegación\r
51300000;Servicios de instalación de equipos de comunicaciones\r
51310000;Servicios de instalación de equipos de radio, televisión, sonido y vídeo\r
51311000;Servicios de instalación de equipo de radio\r
51312000;Servicios de instalación de equipo de televisión\r
51313000;Servicios de instalación de equipo de sonido\r
51314000;Servicios de instalación de equipo de vídeo\r
51320000;Servicios de instalación de transmisores de radio y televisión\r
51321000;Servicios de instalación de radiotransmisores\r
51322000;Servicios de instalación de transmisores de televisión\r
51330000;Servicios de instalación de aparatos de radiotelefonía\r
51340000;Servicios de instalación de equipo de telefonía por hilo\r
51350000;Servicios de instalación de equipo de telegrafía por hilo\r
51400000;Servicios de instalación de equipo médico y quirúrgico\r
51410000;Servicios de instalación de equipo médico\r
51411000;Servicios de instalación de equipos de imaginería\r
51412000;Servicios de instalación de equipos de odontología y sus especialidades\r
51413000;Servicios de instalación de equipos de radioterapia\r
51414000;Servicios de instalación de equipos de mecanoterapia\r
51415000;Servicios de instalación de equipos de electroterapia\r
51416000;Servicios de instalación de equipos de fisioterapia\r
51420000;Servicios de instalación de equipo quirúrgico\r
51430000;Servicios de instalación de equipo técnico de laboratorio\r
51500000;Servicios de instalación de maquinaria y equipos\r
51510000;Servicios de instalación de maquinaria y equipos de uso general\r
51511000;Servicios de instalación de equipos de elevación y de manipulación, excepto ascensores y escaleras mecánicas\r
51511100;Servicios de instalación de equipos de elevación\r
51511110;Servicios de instalación de grúas\r
51511200;Servicios de instalación de equipos de manipulación\r
51511300;Servicios de instalación de equipos suspendidos de acceso\r
51511400;Servicios de instalación de equipos transportadores automáticos\r
51514000;Servicios de instalación de maquinaria diversa de uso general\r
51514100;Servicios de instalación de maquinaria y aparatos para filtrar o depurar líquidos\r
51514110;Servicios de instalación de maquinaria y aparatos para filtrar o depurar agua\r
51520000;Servicios de instalación de maquinaria agrícola y forestal\r
51521000;Servicios de instalación de maquinaria agrícola\r
51522000;Servicios de instalación de maquinaria forestal\r
51530000;Servicios de instalación de máquinas herramienta\r
51540000;Servicios de instalación de maquinaria y equipos para usos especiales\r
51541000;Servicios de instalación de maquinaria para extracción, construcción y metalurgia\r
51541100;Servicios de instalación de maquinaria para la minería\r
51541200;Servicios de instalación de maquinaria para explotación de canteras\r
51541300;Servicios de instalación de maquinaria para la construcción\r
51541400;Servicios de instalación de maquinaria para la metalurgia\r
51542000;Servicios de instalación de maquinaria para la elaboración de alimentos, bebidas y tabaco\r
51542100;Servicios de instalación de maquinaria para la elaboración de alimentos\r
51542200;Servicios de instalación de maquinaria para la elaboración de bebidas\r
51542300;Servicios de instalación de maquinaria para la elaboración de tabaco\r
51543000;Servicios de instalación de maquinaria para la producción de textiles, prendas de vestir y cuero\r
51543100;Servicios de instalación de maquinaria para la producción de textiles\r
51543200;Servicios de instalación de maquinaria para la producción de prendas de vestir\r
51543300;Servicios de instalación de maquinaria para la producción de cuero\r
51543400;Servicios de instalación de máquinas para lavar y para secar ropa y máquinas para limpieza en seco\r
51544000;Servicios de instalación de maquinaria para la producción de papel y cartón\r
51544100;Servicios de instalación de maquinaria para la producción de papel\r
51544200;Servicios de instalación de maquinaria para la producción de cartón\r
51545000;Servicios de instalación de buzones de exterior\r
51550000;Servicios de instalación de sistemas de armas\r
51600000;Servicios de instalación de ordenadores y equipo de oficina\r
51610000;Servicios de instalación de ordenadores y de equipo para procesamiento de la información\r
51611000;Servicios de instalación de ordenadores\r
51611100;Servicios de instalación de equipo informático\r
51611110;Servicios de instalación de pantallas o paneles de anuncios de salidas y llegadas para aeropuertos\r
51611120;Servicios de instalación de pantallas o paneles de anuncios de salidas y llegadas para estaciones de tren\r
51612000;Servicios de instalación de equipo para procesamiento de la información\r
51620000;Servicios de instalación de equipo de oficina\r
51700000;Servicios de instalación de equipos de protección contra incendios\r
51800000;Servicios de instalación de recipientes de metal\r
51810000;Servicios de instalación de cisternas\r
51820000;Servicios de instalación de depósitos\r
51900000;Servicios de instalación de sistemas de guía y control\r
55000000;Servicios comerciales al por menor de hostelería y restauración\r
55100000;Servicios de hostelería\r
55110000;Servicios de alojamiento hotelero\r
55120000;Servicios de reuniones y congresos en hoteles\r
55130000;Otros servicios hoteleros\r
55200000;Zonas de acampada y otros alojamientos no hoteleros\r
55210000;Servicios de albergues juveniles\r
55220000;Servicios para acampada\r
55221000;Servicios para acampada con caravana\r
55240000;Servicios de centros de vacaciones y hogares de vacaciones\r
55241000;Servicios de centros de vacaciones\r
55242000;Servicios de hogares de vacaciones\r
55243000;Servicios de colonias de vacaciones para niños\r
55250000;Servicios de arrendamiento de alojamiento amueblado de corta duración\r
55260000;Servicios de coches cama\r
55270000;Servicios prestados por establecimientos de alojamiento que ofrecen cama y desayuno\r
55300000;Servicios de restaurante y de suministro de comidas\r
55310000;Servicios de camareros de restaurante\r
55311000;Servicios de camareros de restaurante para clientela restringida\r
55312000;Servicios de camareros de restaurante para clientela en general\r
55320000;Servicios de suministro de comidas\r
55321000;Servicios de preparación de comidas\r
55322000;Servicios de elaboración de comidas\r
55330000;Servicios de cafetería\r
55400000;Servicios de suministro de bebidas\r
55410000;Servicios de gestión de bares\r
55500000;Servicios de cantina y de suministros de comidas desde el exterior\r
55510000;Servicios de cantina\r
55511000;Servicios de cantina y otros servicios de cafetería para clientela restringida\r
55512000;Servicios de gestión de cantina\r
55520000;Servicios de suministro de comidas desde el exterior\r
55521000;Servicios de suministro de comidas para particulares\r
55521100;Servicios de entrega de comidas a domicilio\r
55521200;Servicios de entrega de comidas\r
55522000;Servicios de suministro de comidas para empresas de transporte\r
55523000;Servicios de suministro de comidas para otras empresas e instituciones\r
55523100;Servicios de comidas para escuelas\r
55524000;Servicios de suministro de comidas para escuelas\r
55900000;Servicios comerciales al por menor\r
60000000;Servicios de transporte (excluido el transporte de residuos)\r
60100000;Servicios de transporte por carretera\r
60112000;Servicios de transporte por la vía pública\r
60120000;Servicios de taxi\r
60130000;Servicios especiales de transporte de pasajeros por carretera\r
60140000;Transporte no regular de pasajeros\r
60150000;Transporte de pasajeros en vehículos de tracción animal\r
60160000;Transporte de correspondencia por carretera\r
60161000;Servicios de transporte de paquetes\r
60170000;Alquiler de vehículos para el transporte de pasajeros con conductor\r
60171000;Alquiler de automóviles de pasajeros con conductor\r
60172000;Alquiler de autobuses y autocares con conductor\r
60180000;Alquiler de vehículos de transporte de mercancías con conductor\r
60181000;Alquiler de camiones con conductor\r
60182000;Alquiler de vehículos industriales con conductor\r
60183000;Alquiler de camionetas con conductor\r
60200000;Servicios de transporte ferroviario\r
60210000;Servicios de transporte público por ferrocarril\r
60220000;Transporte de correspondencia por ferrocarril\r
60300000;Servicios de transporte por tuberías\r
60400000;Servicios de transporte aéreo\r
60410000;Servicios de transporte aéreo regular\r
60411000;Servicios de transporte de correo aéreo regular\r
60420000;Servicios de transporte aéreo no regular\r
60421000;Servicios de transporte de correo aéreo no regular\r
60423000;Servicios chárter\r
60424000;Alquiler de medios de transporte aéreo con tripulación\r
60424100;Alquiler de aeronaves con tripulación\r
60424110;Alquiler de aeronaves de ala fija con tripulación\r
60424120;Alquiler de helicópteros con tripulación\r
60440000;Servicios aéreos y servicios conexos\r
60441000;Servicios de pulverización aérea\r
60442000;Servicios de extinción aérea de incendios forestales\r
60443000;Servicios de rescate aéreo\r
60443100;Servicios de rescate aéreoarítimo\r
60444000;Servicios de explotación de aeronaves\r
60444100;Servicios de piloto\r
60445000;Servicios de operación de aeronaves\r
60500000;Servicios de transporte espacial\r
60510000;Servicios de lanzamiento de satélites\r
60520000;Servicios de carga útil experimental\r
60600000;Servicios de transporte por vías navegables\r
60610000;Servicios de transporte en transbordador\r
60620000;Transporte de correspondencia por vías navegables\r
60630000;Servicios de embarcaciones para tendido de cables\r
60640000;Transportes marítimos\r
60650000;Alquiler de medios de transporte por vías navegables con tripulación\r
60651000;Alquiler de embarcaciones con tripulación\r
60651100;Alquiler de embarcaciones de navegación marítima, con tripulación\r
60651200;Alquiler de barcos de navegación interior con tripulación\r
60651300;Servicios de buques anticontaminantes\r
60651400;Servicios de buques de cargas pesadas\r
60651500;Servicios de buques de socorro\r
60651600;Servicios de embarcaciones de suministro en alta mar\r
60653000;Alquiler de barcos con tripulación\r
63000000;"Servicios de transporte complementarios y auxiliares; servicios de agencias de viajes"\r
63100000;Servicios de carga, descarga y almacenamiento\r
63110000;Servicios de manipulación de la carga\r
63111000;Servicios de carga y descarga de contenedores\r
63112000;Servicios de manipulación de equipajes\r
63112100;Servicios de manipulación de equipajes de pasajeros\r
63112110;Servicios de recogida de equipaje\r
63120000;Servicios de almacenamiento y depósito\r
63121000;Servicios de almacenamiento y recuperación\r
63121100;Servicios de almacenamiento\r
63121110;Servicios de almacenamiento de gas\r
63122000;Servicios de depósito\r
63500000;Servicios de agencia de viajes, operadores turísticos y asistencia al turista\r
63510000;Servicios de agencias de viajes y servicios similares\r
63511000;Organización de viajes combinados\r
63512000;Servicios de venta de billetes y de viajes combinados\r
63513000;Servicios de información turística\r
63514000;Servicios de guías de turismo\r
63515000;Servicios de viajes\r
63516000;Servicios de gestión de viajes\r
63520000;Servicios de compañía de transporte\r
63521000;Servicios de compañía de transporte de carga\r
63522000;Servicios de corretaje marítimo\r
63523000;Servicios de agencias portuarias y expedidoras\r
63524000;Servicios de preparación de documentos de transporte\r
63700000;Servicios complementarios para el transporte terrestre, marítimo y aéreo\r
63710000;Servicios complementarios para el transporte terrestre\r
63711000;Servicios complementarios para el transporte ferroviario\r
63711100;Servicios de monitorización de trenes\r
63711200;Servicios de talleres móviles\r
63712000;Servicios complementarios para el transporte por carretera\r
63712100;Servicios de estaciones de autobuses\r
63712200;Servicios de explotación de autopistas\r
63712210;Servicios de peaje en autopistas\r
63712300;Servicios de explotación de puentes y túneles\r
63712310;Servicios de operación de puentes\r
63712311;Servicios de peaje en puentes\r
63712320;Servicios de explotación de túneles\r
63712321;Servicios de peaje en túneles\r
63712400;Servicios de estacionamiento\r
63712500;Servicios de puenteáscula\r
63712600;Servicios de repostaje de vehículos\r
63712700;Servicios de control del tráfico\r
63712710;Servicios de monitorización del tráfico\r
63720000;Servicios complementarios para transporte por vías navegables\r
63721000;Servicios de explotación de puertos y vías de navegación y servicios asociados\r
63721100;Servicios de reabastecimiento\r
63721200;Servicios de explotación de puertos\r
63721300;Servicios de explotación de vías de navegación\r
63721400;Servicios de repostaje de buques\r
63721500;Servicios de explotación de terminales de pasajeros\r
63722000;Servicios de pilotaje naval\r
63723000;Servicios de atraque\r
63724000;Servicios de navegación\r
63724100;Servicios de posicionamiento en alta mar\r
63724110;Servicios de posicionamiento de buques faro\r
63724200;Servicios de buques faro\r
63724300;Servicios de posicionamiento de boyas\r
63724310;Servicios de balizado con boyas\r
63724400;Servicios de faro\r
63725000;Servicios de salvamento y puesta a flote\r
63725100;Servicios de salvamento de embarcaciones\r
63725200;Servicios de embarcaciones de socorro\r
63725300;Servicios de puesta a flote de embarcaciones\r
63726000;Servicios varios de soporte al transporte por vías navegables\r
63726100;Servicios de matriculación de embarcaciones\r
63726200;Servicios de rompehielos\r
63726300;Servicios de depósito de barcos\r
63726400;Servicios de fletamento de barcos\r
63726500;Servicios de amarre de embarcaciones\r
63726600;Servicios de explotación de embarcaciones\r
63726610;Servicios de botadura de buques\r
63726620;Servicios de vehículos de control remoto (ROV)\r
63726700;Servicios de embarcaciones de pesca\r
63726800;Servicios de barcos de investigación\r
63726900;Servicios de manipulación de anclas\r
63727000;Servicios de embarcaciones de remolque y tracción\r
63727100;Servicios de remolque\r
63727200;Servicios de tracción\r
63730000;Servicios complementarios para el transporte aéreo\r
63731000;Servicios de explotación de aeropuertos\r
63731100;Servicios de coordinación de franjas horarias en los aeropuertos\r
63732000;Servicios de control del tráfico aéreo\r
63733000;Servicios de repostaje de aeronaves\r
63734000;Servicios de hangares\r
64000000;Servicios de correos y telecomunicaciones\r
64100000;Servicios postales y de correo rápido\r
64110000;Servicios postales\r
64111000;Servicios postales relacionados con periódicos y revistas\r
64112000;Servicios postales relacionados con cartas\r
64113000;Servicios postales relacionados con paquetes\r
64114000;Servicios de ventanilla de correos\r
64115000;Alquiler de apartados de correos\r
64116000;Servicios de lista de correos\r
64120000;Servicios de correo rápido\r
64121000;Servicios multimodales de correo\r
64121100;Servicios de distribución postal\r
64121200;Servicios de distribución de paquetes\r
64122000;Servicios de correo interno\r
64200000;Servicios de telecomunicaciones\r
64210000;Servicios telefónicos y de transmisión de datos\r
64211000;Servicios de teléfonos públicos\r
64211100;Servicios de telefonía local\r
64211200;Servicios de telefonía de larga distancia\r
64212000;Servicios de telefonía móvil\r
64212100;Servicios del Servicio de Mensajes Cortos (SMS)\r
64212200;Servicios del Servicio de Mensajería Multimedia (EMS)\r
64212300;Servicios del Servicio de Mensajes Multimedia (MMS)\r
64212400;Servicios del Protocolo de Acceso Inalámbrico (WAP)\r
64212500;Servicios del Servicio General de Radio por Paquetes (GPRS)\r
64212600;Servicios de Datos Ampliados para la Evolución de GSM (EDGE)\r
64212700;Servicios del Sistema Universal de Telefonía Móvil (UMTS)\r
64212800;Servicios de proveedor de telefonía de pago\r
64212900;Servicios de proveedor de tarjetas telefónicas de prepago\r
64213000;Servicios de redes telefónicas comerciales compartidas\r
64214000;Servicios de redes telefónicas comerciales especializadas\r
64214100;Servicios de alquiler de circuitos por satélite\r
64214200;Servicios de centralitas telefónicas\r
64214400;Alquiler de líneas terrestres de comunicación\r
64215000;Servicios telefónicos PI\r
64216000;Servicios de mensajería y de información electrónicas\r
64216100;Servicios de mensajería electrónica\r
64216110;Servicios de intercambio electrónico de datos\r
64216120;Servicios de correo electrónico\r
64216130;Servicios de télex\r
64216140;Servicios de telegrafía\r
64216200;Servicios de información electrónica\r
64216210;Servicios de información con valor añadido\r
64216300;Servicios de teletexto\r
64220000;Servicios de telecomunicaciones, excepto servicios telefónicos y de transmisión de datos\r
64221000;Servicios de interconexión\r
64222000;Servicios de teletrabajo\r
64223000;Servicios de radiobúsqueda\r
64224000;Servicios de teleconferencia\r
64225000;Servicios de telecomunicaciones aireierra\r
64226000;Servicios de telemática\r
64227000;Servicios de telecomunicaciones integradas\r
64228000;Servicios de transmisión de programas de televisión y de radio\r
64228100;Servicios de transmisión de programas de televisión\r
64228200;Servicios de transmisión de programas de radio\r
65000000;Servicios públicos\r
65100000;Distribución de agua y servicios conexos\r
65110000;Distribución de agua\r
65111000;Distribución de agua potable\r
65120000;Explotación de una planta depuradora de agua\r
65121000;Servicios de desmineralización del agua\r
65122000;Servicios de desalinización del agua\r
65123000;Servicios de ablandamiento del agua\r
65130000;Explotación del suministro de agua\r
65200000;Distribución de gas y servicios conexos\r
65210000;Distribución de gas\r
65300000;Distribución de electricidad y servicios conexos\r
65310000;Distribución de electricidad\r
65320000;Explotación de instalaciones eléctricas\r
65400000;Otras fuentes de aprovisionamiento y distribución de energía\r
65410000;Explotación de una central eléctrica\r
65500000;Servicio de lectura de contadores\r
66000000;Servicios financieros y de seguros\r
66100000;Servicios bancarios y de inversión\r
66110000;Servicios bancarios\r
66111000;Servicios prestados por los bancos centrales\r
66112000;Servicios de depósito de fondos\r
66113000;Servicios de concesión de crédito\r
66113100;Servicios de concesión de microcréditos\r
66114000;Servicios de arrendamiento financiero\r
66115000;Servicios de transferencias internacionales\r
66120000;Servicios bancarios de inversiones y servicios relacionados\r
66121000;Servicios de fusiones y adquisiciones\r
66122000;Servicios de financiación de empresas y de capital riesgo\r
66130000;Servicios de corretaje y servicios relativos a valores y mercancías\r
66131000;Servicios de corretaje de valores\r
66131100;Servicios de inversión en los fondos de jubilaciones\r
66132000;Servicios de corretaje de mercancías\r
66133000;Servicios de tramitación y liquidación\r
66140000;Servicios de gestión de cartera\r
66141000;Servicios de gestión de fondos de pensiones\r
66150000;Servicios de administración de los mercados financieros\r
66151000;Servicios operativos del mercado financiero\r
66151100;Servicios de venta minorista electrónica\r
66152000;Servicios de regulación del mercado financiero\r
66160000;Servicios fiduciarios y de custodia\r
66161000;Servicios fiduciarios\r
66162000;Servicios de custodia\r
66170000;Servicios de asesoramiento financiero, de procesamiento de transacciones financieras y de cámara de compensación\r
66171000;Servicios de asesoramiento financiero\r
66172000;Servicios de procesamiento de transacciones financieras y de cámara de compensación\r
66180000;Servicios de cambio de divisas\r
66190000;Servicios de corretaje de préstamos\r
66500000;Servicios de seguros y pensiones\r
66510000;Servicios de seguros\r
66511000;Servicios de seguros de vida\r
66512000;Servicios de seguros de accidentes y de enfermedad\r
66512100;Servicios de seguros de accidentes\r
66512200;Servicios de seguros de asistencia médica\r
66512210;Servicios de seguro voluntario de asistencia médica\r
66512220;Servicios de seguros médicos\r
66513000;Servicios de seguros de defensa jurídica y de seguros a todo riesgo\r
66513100;Servicios de seguros de defensa jurídica\r
66513200;Servicios de seguros de todo riesgo para la construcción\r
66514000;Seguros de flete y servicios de seguros relacionados con el transporte\r
66514100;Seguros relacionados con el transporte\r
66514110;Servicios de seguros de automóviles\r
66514120;Servicios de seguro marítimo, de aviación y de transportes de otro tipo\r
66514130;Servicios de seguros de ferrocarril\r
66514140;Servicios de seguros de aeronaves\r
66514150;Servicios de seguros de embarcaciones\r
66514200;Servicios de seguros de fletes\r
66515000;Servicios de seguros de daños\r
66515100;Servicios de seguros de incendio\r
66515200;Servicios de seguros de cosas\r
66515300;Servicios de seguros contra inclemencias del tiempo y pérdida financiera\r
66515400;Servicios de seguros contra las inclemencias del tiempo\r
66515410;Servicios de seguros contra pérdidas financieras\r
66515411;Servicios de seguros de pérdida pecuniaria\r
66516000;Servicios de seguros de responsabilidad civil\r
66516100;Servicios de seguros de responsabilidad civil de automóviles\r
66516200;Servicios de seguros de responsabilidad civil de aeronaves\r
66516300;Servicios de seguros de responsabilidad civil de embarcaciones\r
66516400;Servicios de seguros de responsabilidad civil general\r
66516500;Servicios de seguros de responsabilidad profesional\r
66517000;Servicios de seguros de crédito y caución\r
66517100;Servicios de seguros de crédito\r
66517200;Servicios de seguros de caución\r
66517300;Servicios de seguros de administración de riesgos\r
66518000;Servicios de corretaje y de agencias de seguros\r
66518100;Servicios de corretaje de seguros\r
66518200;Servicios de compañías de seguros\r
66518300;Servicios de peritaje de daños\r
66519000;Servicios de seguros de ingeniería, complementarios, de liquidación de avería gruesa, de liquidación de siniestros, actuariales y de rescates\r
66519100;Servicios de seguros de plataformas de petróleo o de gas\r
66519200;Servicios de seguros de ingeniería\r
66519300;Servicios de seguros complementarios\r
66519310;Servicios de asesoramiento en materia de seguros\r
66519400;Servicios de liquidación de avería gruesa\r
66519500;Servicios de liquidación de siniestros\r
66519600;Servicios actuariales\r
66519700;Servicios de gestión de rescates\r
66520000;Servicios de pensiones\r
66521000;Servicios de planes de pensiones individuales\r
66522000;Servicios de pensiones de grupo\r
66523000;Servicios de asesoramiento sobre fondos de pensiones\r
66523100;Servicios de administración de fondos de pensiones\r
66600000;Servicios de tesorería\r
66700000;Servicios de reaseguro\r
66710000;Servicios de reaseguro de vida\r
66720000;Servicios de reaseguro de accidente y enfermedad\r
70000000;Servicios inmobiliarios\r
70100000;Servicios inmobiliarios relacionados con bienes raíces propios\r
70110000;Servicios de promoción de bienes raíces\r
70111000;Promoción de bienes raíces residenciales\r
70112000;Promoción de bienes raíces no residenciales\r
70120000;Compraventa de bienes raíces\r
70121000;Servicios de compra o venta de edificios\r
70121100;Servicios de venta de edificios\r
70121200;Servicios de compra de edificios\r
70122000;Servicios de compra o venta de terrenos\r
70122100;Servicios de venta de terrenos\r
70122110;Servicios de venta de terrenos desocupados\r
70122200;Servicios de compra de terrenos\r
70122210;Servicios de compra de terrenos desocupados\r
70123000;Venta de bienes raíces\r
70123100;Venta de bienes raíces residenciales\r
70123200;Venta de bienes raíces no residenciales\r
70130000;Servicios de arrendamiento de bienes raíces propios\r
70200000;Servicios de alquiler o arrendamiento financiero relativos a bienes raíces propios\r
70210000;Servicios de alquiler o arrendamiento financiero relativos a bienes raíces residenciales propios\r
70220000;Servicios de alquiler o arrendamiento financiero relativos a bienes raíces no residenciales propios\r
70300000;Servicios varios de agencias inmobiliarias a comisión o por contrato\r
70310000;Servicios de alquiler o venta de edificios\r
70311000;Servicios de alquiler o venta de edificios residenciales\r
70320000;Servicios de alquiler o venta de terrenos\r
70321000;Servicios de alquiler de terrenos\r
70322000;Servicios de alquiler o venta de terrenos desocupados\r
70330000;Servicios de administración de bienes raíces a comisión o por contrato\r
70331000;Servicios relacionados con propiedades residenciales\r
70331100;Servicios de gestión de instituciones\r
70332000;Servicios relacionados con propiedades no residenciales\r
70332100;Servicios de administración de terrenos\r
70332200;Servicios de administración de propiedades comerciales\r
70332300;Servicios relacionados con la propiedad industrial\r
70333000;Servicios relacionados con viviendas\r
70340000;Servicios relacionados con la multipropiedad\r
71000000;Servicios de arquitectura, construcción, ingeniería e inspección\r
71200000;Servicios de arquitectura y servicios conexos\r
71210000;Servicios de asesoramiento en arquitectura\r
71220000;Servicios de diseño arquitectónico\r
71221000;Servicios de arquitectura para edificios\r
71222000;Servicios de arquitectura para instalaciones al aire libre\r
71222100;Servicios de cartografía de zonas urbanas\r
71222200;Servicios de cartografía de zonas rurales\r
71223000;Servicios de arquitectura para trabajos de ampliación de edificios\r
71230000;Servicios de organización de concursos de proyectos de arquitectura\r
71240000;Servicios de arquitectura, ingeniería y planificación\r
71241000;Estudio de viabilidad, servicios de asesoramiento, análisis\r
71242000;Elaboración de proyectos y diseños, presupuestos\r
71243000;Anteproyectos (sistemas e integración)\r
71244000;Cálculo de costes, seguimiento de costes\r
71245000;Proyectos presentados para aprobación, planos de ejecución y especificaciones\r
71246000;Determinación y listado de cantidades necesarias para la construcción\r
71247000;Supervisión del trabajo de construcción\r
71248000;Supervisión del proyecto y documentación\r
71250000;Servicios de arquitectura, ingeniería y agrimensura\r
71251000;Servicios de arquitectura y de planimetría de edificios\r
71300000;Servicios de ingeniería\r
71310000;Servicios de consultoría en ingeniería y construcción\r
71311000;Servicios de consultoría en ingeniería civil\r
71311100;Servicios de asistencia en ingeniería civil\r
71311200;Servicios de consultoría en sistemas de transporte\r
71311210;Servicios de consultoría en materia de carreteras\r
71311220;Servicios de ingeniería de caminos\r
71311230;Servicios de ingeniería ferroviaria\r
71311240;Servicios de ingeniería aeroportuaria\r
71311300;Servicios de consultoría en infraestructura\r
71312000;Servicios de consultoría en ingeniería de estructuras\r
71313000;Servicios de consultoría en ingeniería ambiental\r
71313100;Servicios de consultoría en control del ruido\r
71313200;Servicios de consultoría en aislamiento acústico y acústica arquitectural\r
71313400;Evaluación del impacto ambiental para la construcción\r
71313410;Evaluación del riesgo o peligro para la construcción\r
71313420;Normas ambientales para la construcción\r
71313430;Análisis de indicadores ambientales para la construcción\r
71313440;Servicios de evaluación del impacto ambiental (EIA) para la construcción\r
71313450;Seguimiento ambiental para la construcción\r
71314000;Servicios de energía y servicios conexos\r
71314100;Servicios de electricidad\r
71314200;Servicios de gestión de energía\r
71314300;Servicios de consultoría en rendimiento energético\r
71314310;Servicios de física térmica para edificios\r
71315000;Instalaciones técnicas de edificios\r
71315100;Servicios de consultoría en construcción de edificios\r
71315200;Servicios de consultoría en materia de edificios\r
71315210;Servicios de consultoría en acometidas de edificios\r
71315300;Servicios de planimetría de edificios\r
71315400;Servicios de inspección de edificios\r
71315410;Inspección del sistema de ventilación\r
71316000;Servicios de consultoría en telecomunicaciones\r
71317000;Servicios de consultoría en protección y control de riesgos\r
71317100;Servicios de consultoría en protección y control de incendios y explosiones\r
71317200;Servicios de salud y seguridad\r
71317210;Servicios de consultoría en salud y seguridad\r
71318000;Servicios de asesoramiento y consultoría en ingeniería\r
71318100;Servicios de luminotecnia y de iluminación natural\r
71319000;Servicios de peritaje\r
71320000;Servicios de diseño técnico\r
71321000;Servicios de diseño técnico de instalaciones mecánicas y eléctricas para edificios\r
71321100;Servicios de evaluación económica de la construcción\r
71321200;Servicios de diseño de sistemas de calefacción\r
71321300;Servicios de consultoría en fontanería\r
71321400;Servicios de consultoría en ventilación\r
71322000;Servicios de diseño técnico para la construcción de obras de ingeniería civil\r
71322100;Servicios de estudio de dimensiones para obras de ingeniería civil\r
71322200;Servicios de diseño de tuberías\r
71322300;Servicios de diseño de puentes\r
71322400;Servicios de diseño de represas\r
71322500;Servicios de diseño técnico de instalaciones de tráfico\r
71323000;Servicios de diseño técnico del proceso y la producción industriales\r
71323100;Servicios de diseño de sistemas eléctricos\r
71323200;Servicios de diseño de ingeniería de instalaciones\r
71324000;Servicios de estudio de dimensiones\r
71325000;Servicios de proyecto de cimientos\r
71326000;Servicios auxiliares de edificios\r
71327000;Servicios de diseño de la estructura\r
71328000;Servicios de verificación de la estructura\r
71330000;Servicios diversos de ingeniería\r
71331000;Servicios de ingeniería en materia de lodos de perforación\r
71332000;Servicios de ingeniería geotécnica\r
71333000;Servicios de ingeniería mecánica\r
71334000;Servicios de ingeniería mecánica y eléctrica\r
71335000;Estudios de ingeniería\r
71336000;Servicios complementarios de ingeniería\r
71337000;Servicios técnicos de protección contra la corrosión\r
71340000;Servicios integrados de ingeniería\r
71350000;Servicios científicos y técnicos relacionados con la ingeniería\r
71351000;Servicios de prospección geológica, geofísica y otros tipos de prospección científica\r
71351100;Servicios de preparación y análisis de testigos\r
71351200;Servicios de consultoría en materia geológica y geofísica\r
71351210;Servicios de consultoría en geofísica\r
71351220;Servicios de consultoría en geología\r
71351300;Servicios de análisis micropaleontológico\r
71351400;Servicios de interpretación petrofísica\r
71351500;Servicios de estudio de suelos\r
71351600;Servicios de predicción del tiempo\r
71351610;Servicios de meteorología\r
71351611;Servicios de climatología\r
71351612;Servicios de hidrometeorología\r
71351700;Servicios de prospección científica\r
71351710;Servicios de prospección geofísica\r
71351720;Levantamiento geofísico de yacimientos arqueológicos\r
71351730;Servicios de prospección geológica\r
71351800;Servicios topográficos y de radiestesia\r
71351810;Servicios topográficos\r
71351811;Levantamiento topográfico de yacimientos arqueológicos\r
71351820;Servicios de radiestesia\r
71351900;Servicios de geología, oceanografía e hidrología\r
71351910;Servicios de geología\r
71351911;Servicios de fotogeología\r
71351912;Servicios de geología estratigráfica\r
71351913;Servicios de exploración geológica\r
71351914;Servicios arqueológicos\r
71351920;Servicios de oceanografía e hidrología\r
71351921;Servicios de oceanografía estuarial\r
71351922;Servicios de oceanografía física\r
71351923;Servicios de mediciones batimétricas\r
71351924;Servicios de exploración subacuática\r
71352000;Servicios de topografía subterránea\r
71352100;Servicios de sismología\r
71352110;Servicios de estudios sismográficos\r
71352120;Servicios de adquisición de datos sísmicos\r
71352130;Servicios de recogida de datos sísmicos\r
71352140;Servicios de tratamiento de datos sísmicos\r
71352300;Servicios de exploración magnetométrica\r
71353000;Servicios de mediciones topográficas de superficie\r
71353100;Servicios de estudios hidrográficos\r
71353200;Servicios de topografía dimensional\r
71354000;Servicios de cartografía\r
71354100;Servicios de cartografía digital\r
71354200;Servicios de cartografía aérea\r
71354300;Servicios de estudios catastrales\r
71354400;Servicios hidrográficos\r
71354500;Servicios de investigación marítima\r
71355000;Servicios de agrimensura\r
71355100;Servicios de fotogrametría\r
71355200;Servicio oficial de topografía catastral\r
71356000;Servicios técnicos\r
71356100;Servicios de control técnico\r
71356200;Servicios de asistencia técnica\r
71356300;Servicios de apoyo técnico\r
71356400;Servicios de planificación técnica\r
71400000;Servicios de planificación urbana y de arquitectura paisajística\r
71410000;Servicios de urbanismo\r
71420000;Servicios de arquitectura paisajística\r
71421000;Servicios de jardinería paisajística\r
71500000;Servicios relacionados con la construcción\r
71510000;Servicios de estudio del emplazamiento\r
71520000;Servicios de supervisión de obras\r
71521000;Servicios de supervisión del emplazamiento de la obra\r
71530000;Servicios de consultoría en materia de construcción\r
71540000;Servicios de gestión de obras\r
71541000;Servicios de gestión de proyectos de construcción\r
71550000;Servicios de herrería\r
71600000;Servicios de ensayo, análisis y consultoría técnicos\r
71610000;Servicios de ensayo y análisis de composición y pureza\r
71620000;Servicios de análisis\r
71621000;Servicios de ensayo o consultoría técnicos\r
71630000;Servicios de inspección y ensayo técnicos\r
71631000;Servicios de inspección técnica\r
71631100;Servicios de inspección de maquinaria\r
71631200;Servicios de inspección técnica de automóviles\r
71631300;Servicios de inspección técnica de edificios\r
71631400;Servicios de inspección técnica de estructuras de ingeniería\r
71631420;Servicios de inspección relacionados con la seguridad marítima\r
71631430;Servicios de verificación de fugas\r
71631440;Servicios de control de flujos\r
71631450;Servicios de inspección de puentes\r
71631460;Servicios de inspección de represas\r
71631470;Servicios de inspección de vías férreas\r
71631480;Servicios de inspección de carreteras\r
71631490;Servicios de inspección de pistas de aterrizaje\r
71632000;Servicios de ensayo técnico\r
71632100;Servicios de ensayo de válvulas\r
71632200;Servicios de ensayo no destructivo\r
71700000;Servicios de monitorización y control\r
71730000;Servicios de inspección industrial\r
71731000;Servicios de control de calidad industrial\r
71800000;Servicios de consultoría en suministro de agua y en materia de desechos\r
71900000;Servicios de laboratorio\r
72000000;Servicios TI: consultoría, desarrollo de software, Internet y apoyo\r
72100000;Servicios de consultoría en equipo informático\r
72110000;Servicios de consultoría en la selección del equipo informático\r
72120000;Servicios de consultoría en recuperación de equipo informático en caso de catástrofe\r
72130000;Servicios de consultoría en planificación de instalaciones informáticas\r
72140000;Servicios de consultoría en pruebas de aceptación de equipo informático\r
72150000;Servicios de consultoría en auditoría informática y en equipo informático\r
72200000;Servicios de programación de software y de consultoría\r
72210000;Servicios de programación de paquetes de software\r
72211000;Servicios de programación de sistemas y software de usuario\r
72212000;Servicios de programación de software de aplicación\r
72212100;Servicios de desarrollo de software específico de un sector económico\r
72212110;Servicios de desarrollo de software de puntos de venta\r
72212120;Servicios de desarrollo de software de control de vuelos\r
72212121;Servicios de desarrollo de software de control del tránsito aéreo\r
72212130;Servicios de desarrollo de software de apoyo en tierra y de ensayos para la aviación\r
72212131;Servicios de desarrollo de software de equipos de apoyo en tierra para la aviación\r
72212132;Servicios de desarrollo de software de ensayos para la aviación\r
72212140;Servicios de desarrollo de software de control del tráfico ferroviario\r
72212150;Servicios de desarrollo de software de control industrial\r
72212160;Servicios de desarrollo de software de bibliotecas\r
72212170;Servicios de desarrollo de software de conformidad\r
72212180;Servicios de desarrollo de software médico\r
72212190;Servicios de desarrollo de software educativo\r
72212200;Servicios de desarrollo de software de conexión en red, Internet e intranet\r
72212210;Servicios de desarrollo de software de conexión en red\r
72212211;Servicios de desarrollo de software de interconectividad de plataformas\r
72212212;Servicios de desarrollo de software de servidor de discos ópticos\r
72212213;Servicios de desarrollo de software para mejorar el sistema operativo\r
72212214;Servicios de desarrollo de software de sistemas operativos en red\r
72212215;Servicios de desarrollo de software de desarrolladores de redes\r
72212216;Servicios de desarrollo de software de emulación de terminal de conectividad de redes\r
72212217;Servicios de desarrollo de software de proceso de transacciones\r
72212218;Servicios de desarrollo de software de gestión de licencias\r
72212219;Servicios diversos de desarrollo de software de conexión en red\r
72212220;Servicios de desarrollo de software de Internet e intranet\r
72212221;Servicios de desarrollo de software de navegación en Internet\r
72212222;Servicios de desarrollo de software de servidores web\r
72212223;Servicios de desarrollo de software de correo electrónico\r
72212224;Servicios de desarrollo de software de edición de páginas web\r
72212300;Servicios de desarrollo de software de creación de documentos, dibujo, tratamiento de imágenes, planificación y productividad\r
72212310;Servicios de desarrollo de software de creación de documentos\r
72212311;Servicios de desarrollo de software de gestión de documentos\r
72212312;Servicios de desarrollo de software de edición electrónica\r
72212313;Servicios de desarrollo de software de reconocimiento óptico de caracteres (OCR)\r
72212314;Servicios de desarrollo de software de reconocimiento vocal\r
72212315;Servicios de desarrollo de software de autoedición\r
72212316;Servicios de desarrollo de software de presentación\r
72212317;Servicios de desarrollo de software de tratamiento de textos\r
72212318;Servicios de desarrollo de software de escáner\r
72212320;Servicios de desarrollo de software de dibujo y tratamiento de imágenes\r
72212321;Servicios de desarrollo de software de diseño asistido por ordenador (DAO)\r
72212322;Servicios de desarrollo de software de gráficos\r
72212323;Servicios de desarrollo de software de fabricación asistida por ordenador (FAO)\r
72212324;Servicios de desarrollo de software de trazado de diagramas\r
72212325;Servicios de desarrollo de software de diseño de formularios\r
72212326;Servicios de desarrollo de software cartográfico\r
72212327;Servicios de desarrollo de software de dibujo y pintura\r
72212328;Servicios de desarrollo de software de tratamiento de imágenes\r
72212330;Servicios de desarrollo de software de planificación y productividad\r
72212331;Servicios de desarrollo de software de gestión de proyectos\r
72212332;Servicios de desarrollo de software de planificación\r
72212333;Servicios de desarrollo de software de gestión de contactos\r
72212400;Servicios de desarrollo de software de transacciones comerciales y personales\r
72212410;Servicios de desarrollo de software de gestión de inversiones y elaboración de declaraciones fiscales\r
72212411;Servicios de desarrollo de software de gestión de inversiones\r
72212412;Servicios de desarrollo de software de elaboración de declaraciones fiscales\r
72212420;"Servicios de desarrollo de software de la gestión de instalaciones y ""suite"" de servicios de desarrollo de software"\r
72212421;Servicios de desarrollo de software de gestión de instalaciones\r
72212422;"""Suites"" de servicios de desarrollo de software"\r
72212430;Servicios de desarrollo de software de gestión de inventarios\r
72212440;Servicios de desarrollo de software de análisis financiero y contabilidad\r
72212441;Servicios de desarrollo de software de análisis financiero\r
72212442;Servicios de desarrollo de software de sistemas financieros\r
72212443;Servicios de desarrollo de software de contabilidad\r
72212445;Servicios de desarrollo de software de gestión de relaciones con el consumidor\r
72212450;Servicios de desarrollo de software de contabilización del tiempo o recursos humanos\r
72212451;Servicios de desarrollo de software de planificación de recursos empresariales\r
72212460;Servicios de desarrollo de software analítico, científico, matemático o predictivo\r
72212461;Servicios de desarrollo de software analítico o científico\r
72212462;Servicios de desarrollo de software matemático o predictivo\r
72212463;Servicios de desarrollo de software estadístico\r
72212470;Servicios de desarrollo de software de subastas\r
72212480;Servicios de desarrollo de software de ventas, mercadotecnia e inteligencia empresarial\r
72212481;Servicios de desarrollo de software de ventas y mercadotecnia\r
72212482;Servicios de desarrollo de software de inteligencia empresarial\r
72212490;Servicios de desarrollo de software de contratación administrativa\r
72212500;Servicios de desarrollo de software de comunicación y multimedia\r
72212510;Servicios de desarrollo de software de comunicación\r
72212511;Servicios de desarrollo de software de comunicaciones de escritorio\r
72212512;Servicios de desarrollo de software de respuesta vocal interactiva\r
72212513;Servicios de desarrollo de software de módem\r
72212514;Servicios de desarrollo de software de acceso remoto\r
72212515;Servicios de desarrollo de software de videoconferencia\r
72212516;Servicios de desarrollo de software de intercambio\r
72212517;Servicios de desarrollo de software de TI\r
72212518;Servicios de desarrollo de software de emulación\r
72212519;Servicios de desarrollo de software de gestión de memoria\r
72212520;Servicios de desarrollo de software multimedia\r
72212521;Servicios de desarrollo de software de edición de música o sonido\r
72212522;Servicios de desarrollo de software de teclado virtual\r
72212600;Servicios de desarrollo de software de bases de datos y de funcionamiento\r
72212610;Servicios de desarrollo de software de bases de datos\r
72212620;Servicios de desarrollo de software del sistema operativo de la unidad central\r
72212630;Servicios de desarrollo de software de sistema operativo de miniordenador\r
72212640;Servicios de desarrollo de software de sistema operativo de microordenador\r
72212650;Servicios de desarrollo de software de sistema operativo de ordenador personal (PC)\r
72212660;Servicios de desarrollo de software de agrupamiento\r
72212670;Servicios de desarrollo de software de sistema operativo de tiempo real\r
72212700;Utilidades de servicios de desarrollo de software\r
72212710;Servicios de desarrollo de software de copia de seguridad o recuperación\r
72212720;Servicios de desarrollo de software de código de barras\r
72212730;Servicios de desarrollo de software de seguridad\r
72212731;Servicios de desarrollo de software de seguridad de archivos\r
72212732;Servicios de desarrollo de software de seguridad de datos\r
72212740;Servicios de desarrollo de software de traducción de lenguas extranjeras\r
72212750;Servicios de desarrollo de software de carga de medios de almacenamiento\r
72212760;Servicios de desarrollo de software de protección antivirus\r
72212761;Servicios de desarrollo de software antivirus\r
72212770;Servicios de desarrollo de software de utilidades generales, de compresión y de impresión\r
72212771;Servicios de desarrollo de software de utilidades generales\r
72212772;Servicios de desarrollo de software de utilidades de impresión\r
72212780;Servicios de desarrollo de software de gestión de sistemas, almacenamiento y contenido\r
72212781;Servicios de desarrollo de software de gestión de sistemas\r
72212782;Servicios de desarrollo de software de gestión de almacenamiento\r
72212783;Servicios de desarrollo de software de gestión de contenido\r
72212790;Servicios de desarrollo de software de comprobación de versiones\r
72212900;Servicios de desarrollo de software y sistemas informáticos diversos\r
72212910;Servicios de desarrollo de software de juegos informáticos, títulos para toda la familia y salvapantallas\r
72212911;Servicios de desarrollo de software de juegos informáticos\r
72212920;Servicios de desarrollo de software ofimático\r
72212930;Servicios de desarrollo de software de formación y entretenimiento\r
72212931;Servicios de desarrollo de software de formación\r
72212932;Servicios de desarrollo de software de entretenimiento\r
72212940;Servicios de desarrollo de software de diseños y calendario\r
72212941;Servicios de desarrollo de software de diseños\r
72212942;Servicios de desarrollo de software de calendario\r
72212960;Servicios de desarrollo de software de controladores y sistemas\r
72212970;Servicios de desarrollo de software para imprenta\r
72212971;Servicios de desarrollo de software de elaboración de libretas de direcciones\r
72212972;Servicios de desarrollo de software de elaboración de etiquetas\r
72212980;Servicios de lenguajes de programación y de desarrollo de herramientas\r
72212981;Servicios de desarrollo de software de compilación\r
72212982;Servicios de desarrollo de software de gestión de la configuración\r
72212983;Servicios de desarrollo de software de desarrollo\r
72212984;Servicios de desarrollo de software de ensayo de programas\r
72212985;Servicios de desarrollo de software de depuración\r
72212990;Servicios de desarrollo de software de hoja de cálculo y mejora de hoja de cálculo\r
72212991;Servicios de desarrollo de software de hoja de cálculo\r
72220000;Servicios de consultoría en sistemas y consultoría técnica\r
72221000;Servicios de consultoría en análisis empresarial\r
72222000;Servicios de planificación y revisión estratégica de sistemas de información o de tecnología de la información\r
72222100;Servicios de revisión estratégica de sistemas de información o de tecnología de la información\r
72222200;Servicios de planificación de sistemas de información o de tecnología de la información\r
72222300;Servicios de tecnología de la información\r
72223000;Servicios de revisión de las exigencias de tecnología de la información\r
72224000;Servicios de consultoría en gestión de proyectos\r
72224100;Servicios de planificación de la implementación de sistemas\r
72224200;Servicios de planificación de la garantía de calidad del sistema\r
72225000;Servicios de evaluación y revisión de la garantía de calidad del sistema\r
72226000;Servicios de consultoría en pruebas de aceptación del software del sistema\r
72227000;Servicios de consultoría en integración de software\r
72228000;Servicios de consultoría en integración del equipo informático\r
72230000;Servicios de desarrollo de software personalizado\r
72231000;Desarrollo de software para aplicaciones militares\r
72232000;Desarrollo de software de procesamiento de transacciones y software personalizado\r
72240000;Servicios de análisis de sistemas y de programación\r
72241000;Servicios de especificación de objetivos de diseños críticos\r
72242000;Servicios de modelado de diseños\r
72243000;Servicios de programación\r
72244000;Servicios de creación de prototipos\r
72245000;Servicios contractuales de programación y análisis de sistemas\r
72246000;Servicios de consultoría en sistemas\r
72250000;Servicios de sistemas y apoyo\r
72251000;Servicios de recuperación en caso de catástrofe\r
72252000;Servicios de archivo informático\r
72253000;Servicios de unidad de asistencia y de apoyo\r
72253100;Servicios de unidad de asistencia\r
72253200;Servicios de apoyo a sistemas\r
72254000;Ensayo de software\r
72254100;Servicios de prueba de sistemas\r
72260000;Servicios relacionados con el software\r
72261000;Servicios de apoyo al software\r
72262000;Servicios de desarrollo de software\r
72263000;Servicios de implementación de software\r
72264000;Servicios de reproducción de software\r
72265000;Servicios de configuración de software\r
72266000;Servicios de consultoría en software\r
72267000;Servicios de mantenimiento y reparación de software\r
72267100;Mantenimiento de software de tecnología de la información\r
72267200;Reparación de software de tecnología de la información\r
72268000;Servicios de suministro de software\r
72300000;Servicios relacionados con datos\r
72310000;Servicios de tratamiento de datos\r
72311000;Servicios de tabulación de datos\r
72311100;Servicios de conversión de datos\r
72311200;Servicios de procesamiento por lotes\r
72311300;Servicios informáticos de tiempo compartido\r
72312000;Servicios de introducción de datos\r
72312100;Servicios de preparación de datos\r
72312200;Servicios de reconocimiento óptico de caracteres\r
72313000;Servicios de recogida de datos\r
72314000;Servicios de recogida e intercalación de datos\r
72315000;Servicios de gestión de redes de datos y servicios de apoyo\r
72315100;Servicios de apoyo a redes de datos\r
72315200;Servicios de gestión de redes de datos\r
72316000;Servicios de análisis de datos\r
72317000;Servicios de almacenamiento de datos\r
72318000;Servicios de transmisión de datos\r
72319000;Servicios de suministro de datos\r
72320000;Servicios relacionados con bases de datos\r
72321000;Servicios de bases de datos con valor añadido\r
72322000;Servicios de gestión de datos\r
72330000;Servicios de normalización y clasificación de contenidos o datos\r
72400000;Servicios de Internet\r
72410000;Servicios de proveedor\r
72411000;Proveedor de servicios de Internet (PSI)\r
72412000;Proveedor de servicios de correo electrónico\r
72413000;Servicios de diseño de sitios web www\r
72414000;Proveedores de motores de búsqueda en la web\r
72415000;Servicios de hospedaje de operación de sitios web www\r
72416000;Proveedores de servicio de aplicaciones\r
72417000;Nombres de dominio de Internet\r
72420000;Servicios de desarrollo de Internet\r
72421000;Servicios de desarrollo de aplicaciones cliente en Internet o intranet\r
72422000;Servicios de desarrollo de aplicaciones servidor en Internet o intranet\r
72500000;Servicios informáticos\r
72510000;Servicios de gestión relacionados con la informática\r
72511000;Servicios de software de gestión de redes\r
72512000;Servicios de gestión de documentos\r
72513000;Servicios de ofimática\r
72514000;Servicios de gestión de instalaciones informáticas\r
72514100;Servicios de explotación de instalaciones que entrañan el manejo de ordenadores\r
72514200;Servicios de gestión de instalaciones para el desarrollo de sistemas informáticos\r
72514300;Servicios de gestión de instalaciones para el mantenimiento de sistemas informáticos\r
72540000;Servicios de actualización informática\r
72541000;Servicios de expansión informática\r
72541100;Servicios de expansión de memoria\r
72590000;Servicios profesionales relacionados con la informática\r
72591000;Elaboración de acuerdos de nivel de servicios\r
72600000;Servicios de apoyo informático y de consultoría\r
72610000;Servicios de apoyo informático\r
72611000;Servicios de apoyo informático técnico\r
72700000;Servicios de red informática\r
72710000;Servicios de red local\r
72720000;Servicios de red de amplia cobertura\r
72800000;Servicios de ensayo y auditoría informáticos\r
72810000;Servicios de auditoría informática\r
72820000;Servicios de ensayo informático\r
72900000;Servicios de copia de seguridad y de conversión informática de catálogos\r
72910000;Servicios de copia de seguridad\r
72920000;Servicios de conversión informática de catálogos\r
73000000;Servicios de investigación y desarrollo y servicios de consultoría conexos\r
73100000;Servicios de investigación y desarrollo experimental\r
73110000;Servicios de investigación\r
73111000;Servicios de laboratorio de investigación\r
73112000;Servicios de investigación marina\r
73120000;Servicios de desarrollo experimental\r
73200000;Servicios de consultoría en investigación y desarrollo\r
73210000;Servicios de consultoría en investigación\r
73220000;Servicios de consultoría en desarrollo\r
73300000;Diseño y ejecución en materia de investigación y desarrollo\r
73400000;Servicios de investigación y desarrollo de materiales de seguridad y defensa\r
73410000;Investigación y tecnología militares\r
73420000;Estudio de previabilidad y demostración tecnológica\r
73421000;Desarrollo de equipos de seguridad\r
73422000;Desarrollo de armas de fuego y munición\r
73423000;Desarrollo de vehículos militares\r
73424000;Desarrollo de buques de guerra\r
73425000;Desarrollo de aeronaves militares, misiles y naves espaciales\r
73426000;Desarrollo de sistemas electrónicos militares\r
73430000;Ensayo y evaluación\r
73431000;Ensayo y evaluación de equipos de seguridad\r
73432000;Ensayo y evaluación de armas de fuego y munición\r
73433000;Ensayo y evaluación de vehículos militares\r
73434000;Ensayo y evaluación de buques de guerra\r
73435000;Ensayo y evaluación de aeronaves militares, misiles y naves espaciales\r
73436000;Ensayo y evaluación de sistemas electrónicos militares\r
75000000;Servicios de administración pública, defensa y servicios de seguridad social\r
75100000;Servicios de administración pública\r
75110000;Servicios públicos generales\r
75111000;Servicios ejecutivos y legislativos\r
75111100;Servicios ejecutivos\r
75111200;Servicios legislativos\r
75112000;Servicios administrativos para operaciones comerciales\r
75112100;Servicios de administración de proyectos de desarrollo\r
75120000;Servicios administrativos de agencias\r
75121000;Servicios administrativos educativos\r
75122000;Servicios administrativos relacionados con la asistencia sanitaria\r
75123000;Servicios administrativos de alojamiento\r
75124000;Servicios administrativos en el ámbito del recreo, la cultura y la religión\r
75125000;Servicios administrativos relacionados con asuntos turísticos\r
75130000;Servicios de apoyo a los poderes públicos\r
75131000;Servicios gubernamentales\r
75131100;Servicios generales de personal para el gobierno\r
75200000;Prestación de servicios para la comunidad\r
75210000;Servicios de asuntos exteriores y otros servicios\r
75211000;Servicios de asuntos exteriores\r
75211100;Servicios diplomáticos\r
75211110;Servicios consulares\r
75211200;Servicios relacionados con la ayuda económica exterior\r
75211300;Servicios relacionados con la ayuda militar exterior\r
75220000;Servicios de defensa\r
75221000;Servicios de defensa militar\r
75222000;Servicios de defensa civil\r
75230000;Servicios de justicia\r
75231000;Servicios judiciales\r
75231100;Servicios administrativos relacionados con los tribunales de justicia\r
75231200;Servicios relacionados con el encarcelamiento y la rehabilitación de delincuentes\r
75231210;Servicios de encarcelamiento\r
75231220;Servicios de escolta de prisioneros\r
75231230;Servicios penitenciarios\r
75231240;Servicios de reinserción\r
75240000;Servicios de seguridad y orden públicos\r
75241000;Servicios de seguridad pública\r
75241100;Servicios de policía\r
75242000;Servicios públicos de seguridad ciudadana\r
75242100;Servicios de orden público\r
75242110;Servicios de agentes judiciales\r
75250000;Servicios de los cuerpos de bomberos y servicios de rescate\r
75251000;Servicios de los cuerpos de bomberos\r
75251100;Servicios de extinción de incendios\r
75251110;Servicios de prevención de incendios\r
75251120;Servicios de extinción de incendios forestales\r
75252000;Servicios de rescate\r
75300000;Servicios de seguridad social de afiliación obligatoria\r
75310000;Servicios de prestaciones sociales\r
75311000;Prestaciones de enfermedad\r
75312000;Prestaciones de maternidad\r
75313000;Prestaciones de invalidez\r
75313100;Prestaciones de invalidez temporal\r
75314000;Prestaciones de indemnización por desempleo\r
75320000;Planes de pensiones de empleados públicos\r
75330000;Prestaciones familiares\r
75340000;Prestaciones por hijos a cargo\r
76000000;Servicios relacionados con la industria del gas y del petróleo\r
76100000;Servicios profesionales para la industria del gas\r
76110000;Servicios relacionados con la extracción de gas\r
76111000;Servicios de regasificación\r
76120000;Servicios de buceo relacionados con la extracción de gas\r
76121000;Servicios de buceo en pozos submarinos\r
76200000;Servicios profesionales para la industria del petróleo\r
76210000;Servicios relacionados con la extracción de petróleo\r
76211000;Servicios de sujeción de tuberías colgantes\r
76211100;Servicios de revestimiento\r
76211110;Servicios de revestimiento de pozos de exploración\r
76211120;Servicios de revestimiento de pozos en su emplazamiento\r
76211200;Servicios de diagrafía de lodos de perforación\r
76300000;Servicios de perforación\r
76310000;Servicios de perforación relacionados con la extracción de gas\r
76320000;Servicios de perforación en alta mar\r
76330000;Servicios de turbosondeo\r
76331000;Servicios de turbosondeo espiral\r
76340000;Perforación con extracción de testigos\r
76400000;Servicios de posicionamiento de plataformas de sondeo\r
76410000;Servicios de revestimiento y entubado de pozos\r
76411000;Servicios de revestimiento de pozos\r
76411100;Servicios de suministro de personal de revestimiento de pozos\r
76411200;Servicios de planificación de revestimiento de pozos\r
76411300;Servicios de fresado de revestimiento de pozos\r
76411400;Servicios de acabado de revestimiento de pozos\r
76420000;Servicios de cementación de pozos\r
76421000;Servicios de cementación de tuberías\r
76422000;Servicios de cementación de obturadores\r
76423000;Servicios de cementación con espuma\r
76430000;Servicios de perforación y explotación de pozos\r
76431000;Servicios de perforación de pozos\r
76431100;Servicios de control de perforación de pozos\r
76431200;Servicios de extracción de la herramienta de perforación de pozos\r
76431300;Servicios de deposición de la herramienta de perforación de pozos\r
76431400;Servicios de perforación de pozos de tamaño reducido\r
76431500;Servicios de supervisión de perforación de pozos\r
76431600;Servicios de control del equipo de perforación de pozos\r
76440000;Servicios de diagrafía del sondeo\r
76441000;Servicios de diagrafía de pozos entubados\r
76442000;Servicios de diagrafía de pozos sin entubar\r
76443000;Otros servicios de diagrafía\r
76450000;Servicios de gestión de pozos\r
76460000;Servicios de asistencia para pozos\r
76470000;Servicios de pruebas en pozos\r
76471000;Servicios de pruebas de fractura de pozos\r
76472000;Servicios de inspección o pruebas de emplazamiento de pozos\r
76473000;Servicios de pruebas de equipos de pozos\r
76480000;Servicios de entubado\r
76490000;Servicios de terminación de pozos\r
76491000;Servicios de colmatado de pozos\r
76492000;Servicios de posicionamiento de pozos\r
76500000;Servicios prestados en tierra y en alta mar\r
76510000;Servicios prestados en la costa\r
76520000;Servicios prestados en alta mar\r
76521000;Servicios de instalaciones en alta mar\r
76522000;Servicios en alta mar de buques de apoyo logístico\r
76530000;Servicios de fondo de pozo\r
76531000;Servicios de diagrafía en fondo de pozo\r
76532000;Servicios de bombeo de fondo de pozo\r
76533000;Servicios de registro de fondo de pozo\r
76534000;Servicios de ampliación de fondo de pozo\r
76535000;Servicios de perforación de fondo de pozo\r
76536000;Servicios de control de vibraciones de fondo de pozo\r
76537000;Servicios de herramientas para fondo de pozo\r
76537100;Servicios de herramientas de yacimiento petrolífero para fondo de pozo\r
76600000;Servicios de inspección de tuberías\r
77000000;Servicios agrícolas, forestales, hortícolas, acuícolas y apícolas\r
77100000;Servicios agrícolas\r
77110000;Servicios relacionados con la producción agrícola\r
77111000;Alquiler de maquinaria agrícola con maquinista\r
77112000;Alquiler de segadoras o equipo agrícola con maquinista\r
77120000;Servicios de producción de compost\r
77200000;Servicios forestales\r
77210000;Servicios de explotación forestal\r
77211000;Servicios relacionados con la explotación forestal\r
77211100;Servicios de producción maderera\r
77211200;Transporte de madera en el interior del bosque\r
77211300;Servicios de deforestación\r
77211400;Servicios de tala de árboles\r
77211500;Servicios de mantenimiento de árboles\r
77211600;Siembra de árboles\r
77220000;Servicios de impregnación de madera\r
77230000;Servicios relacionados con la silvicultura\r
77231000;Servicios de gestión forestal\r
77231100;Servicios de gestión de recursos forestales\r
77231200;Servicios de control de plagas forestales\r
77231300;Servicios de administración forestal\r
77231400;Servicios de inventario forestal\r
77231500;Servicios de seguimiento o evaluación forestal\r
77231600;Servicios de repoblación forestal\r
77231700;Servicios de extensión forestal\r
77231800;Servicios de gestión de viveros forestales\r
77231900;Servicios de planificación forestal sectorial\r
77300000;Servicios hortícolas\r
77310000;Servicios de plantación y mantenimiento de zonas verdes\r
77311000;Servicios de mantenimiento de jardines y parques\r
77312000;Servicios de desbrozo\r
77312100;Servicios de eliminación de malezas\r
77313000;Servicios de mantenimiento de parques\r
77314000;Servicios de mantenimiento de terrenos\r
77314100;Servicios de encespedado\r
77315000;Trabajos de siembra\r
77320000;Servicios de mantenimiento de campos deportivos\r
77330000;Servicios de exposición floral\r
77340000;Poda de árboles y setos\r
77341000;Poda de árboles\r
77342000;Poda de setos\r
77400000;Servicios de parques zoológicos\r
77500000;Servicios de cría de ganado\r
77510000;Servicios de propagación de animales de caza\r
77600000;Servicios relacionados con la caza\r
77610000;Servicios de trampas\r
77700000;Servicios relacionados con la pesca\r
77800000;Servicios de acuicultura\r
77810000;Servicios de maricultura\r
77820000;Servicios de ostricultura\r
77830000;Servicios de cultivo de mariscos\r
77840000;Servicios de cría de camarones\r
77850000;Servicios de piscicultura\r
77900000;Servicios de apicultura\r
79000000;Servicios a empresas: legislación, mercadotecnia, asesoría, selección de personal, imprenta y seguridad\r
79100000;Servicios jurídicos\r
79110000;Servicios de asesoría y representación jurídicas\r
79111000;Servicios de asesoría jurídica\r
79112000;Servicios de representación jurídica\r
79112100;Servicios de representación de las partes interesadas\r
79120000;Servicios de consultoría en patentes y derechos de autor\r
79121000;Servicios de consultoría en derechos de autor\r
79121100;Servicios de consultoría en materia de derechos de autor de software\r
79130000;Servicios de documentación y certificación jurídicas\r
79131000;Servicios de documentación\r
79132000;Servicios de certificación\r
79132100;Servicios de certificación relacionados con la firma electrónica\r
79140000;Servicios de asesoría e información jurídica\r
79200000;Servicios de contabilidad, de auditoría y fiscales\r
79210000;Servicios de contabilidad y auditoría\r
79211000;Servicios de contabilidad\r
79211100;Servicios de contabilidad\r
79211110;Servicios de gestión de nóminas\r
79211120;Servicios de registro de compras y ventas\r
79211200;Servicios de compilación de estados financieros\r
79212000;Servicios de auditoría\r
79212100;Servicios de auditoría financiera\r
79212110;Servicios de calificación de gobernanza empresarial\r
79212200;Servicios de auditoría interna\r
79212300;Servicios de auditoría legal de cuentas\r
79212400;Servicios de control de fraudes\r
79212500;Servicios de verificación contable\r
79220000;Servicios fiscales\r
79221000;Servicios de asesoramiento tributario\r
79222000;Servicios de preparación de declaraciones de impuestos\r
79223000;Servicios de agente de aduanas\r
79300000;"Investigación mercadotécnica y económica; sondeos y estadísticas"\r
79310000;Servicios de estudios de mercado\r
79311000;Servicios de estudios\r
79311100;Servicios de concepción de estudios\r
79311200;Servicios de dirección de estudios\r
79311210;Servicios de encuesta telefónica\r
79311300;Servicios de análisis de estudios\r
79311400;Servicios de investigación económica\r
79311410;Evaluación de repercusiones económicas\r
79312000;Servicios de control de mercado\r
79313000;Servicios de verificación de comportamiento\r
79314000;Estudio de viabilidad\r
79315000;Servicios de investigación social\r
79320000;Servicios de encuestas de opinión pública\r
79330000;Servicios estadísticos\r
79340000;Servicios de publicidad y de marketing\r
79341000;Servicios de publicidad\r
79341100;Servicios de consultoría en publicidad\r
79341200;Servicios de gestión publicitaria\r
79341400;Servicios de campañas de publicidad\r
79341500;Servicios de publicidad aérea\r
79342000;Servicios de marketing\r
79342100;Servicios de marketing directo\r
79342200;Servicios de promoción\r
79342300;Servicios al cliente\r
79342310;Servicios de encuesta a clientes\r
79342311;Servicios de evaluación de la satisfacción del cliente\r
79342320;Servicios de atención al cliente\r
79342321;Programa de fidelización del cliente\r
79342400;Servicios de subasta\r
79342410;Servicios de subasta electrónica\r
79400000;Servicios de consultoría comercial y de gestión y servicios afines\r
79410000;Servicios de consultoría comercial y en gestión\r
79411000;Servicios generales de consultoría en gestión\r
79411100;Servicios de consultoría en desarrollo comercial\r
79412000;Servicios de consultoría en gestión financiera\r
79413000;Servicios de consultoría en gestión de marketing\r
79414000;Servicios de consultoría en gestión de recursos humanos\r
79415000;Servicios de consultoría en gestión de la producción\r
79415200;Servicios de consultoría en diseño\r
79416000;Servicios de relaciones públicas\r
79416100;Servicios de gestión en relaciones públicas\r
79416200;Servicios de consultoría en relaciones públicas\r
79417000;Servicios de consultoría en seguridad\r
79418000;Servicios de consultoría en aprovisionamiento\r
79419000;Servicios de consultoría en evaluación\r
79420000;Servicios relacionados con la gestión\r
79421000;Servicios de gestión de proyectos que no sean los de construcción\r
79421100;Servicios de supervisión de proyectos que no sean los de construcción\r
79421200;Servicios de concepción de proyectos que no sean los de construcción\r
79422000;Servicios de arbitraje y conciliación\r
79430000;Servicios de gestión de crisis\r
79500000;Servicios de ayuda en las funciones de oficina\r
79510000;Servicios de contestación de llamadas telefónicas\r
79511000;Servicios de operador telefónico\r
79512000;Centro de llamadas\r
79520000;Servicios de reprografía\r
79521000;Servicios de fotocopia\r
79530000;Servicios de traducción\r
79540000;Servicios de interpretación\r
79550000;Servicios de mecanografía, tratamiento de textos y autoedición\r
79551000;Servicios de mecanografía\r
79552000;Servicios de tratamiento de textos\r
79553000;Servicios de autoedición\r
79560000;Servicios de archivo\r
79570000;Servicios de recopilación de listas de direcciones y servicios de envío por correo\r
79571000;Servicios de envío por correo\r
79600000;Servicios de contratación\r
79610000;Servicios de colocación de personal\r
79611000;Servicios de búsqueda de trabajo\r
79612000;Servicios de colocación de personal de apoyo para oficinas\r
79613000;Servicios de reubicación de empleados\r
79620000;Servicios de suministro de personal, incluido personal temporal\r
79621000;Servicios de suministro de personal para oficinas\r
79622000;Servicios de suministro de personal doméstico\r
79623000;Servicios de suministro de personal para el comercio o la industria\r
79624000;Servicios de suministro de personal de enfermería\r
79625000;Servicios de suministro de personal médico\r
79630000;Servicios de personal, excepto servicios de colocación y suministro de personal\r
79631000;Servicios de personal y de nóminas\r
79632000;Servicios de formación de personal\r
79633000;Servicios de desarrollo del personal\r
79634000;Servicios de orientación profesional\r
79635000;Servicios de centros de evaluación para selección de personal\r
79700000;Servicios de investigación y seguridad\r
79710000;Servicios de seguridad\r
79711000;Servicios de vigilancia de sistemas de alarma\r
79713000;Servicios de guardias de seguridad\r
79714000;Servicios de vigilancia\r
79714100;Servicios relacionados con el sistema de localización\r
79714110;Servicios de búsqueda de prófugos\r
79715000;Servicios de patrullas\r
79716000;Servicios de expedición de distintivos de identificación\r
79720000;Servicios de investigación (criminológica)\r
79721000;Servicios de agencia de detectives\r
79722000;Servicios de grafología\r
79723000;Servicios de análisis de residuos\r
79800000;Servicios de impresión y servicios conexos\r
79810000;Servicios de impresión\r
79811000;Servicios de impresión digital\r
79812000;Servicios de impresión de billetes de banco\r
79820000;Servicios relacionados con la impresión\r
79821000;Servicios de acabado de impresiones\r
79821100;Servicios de lectura de pruebas\r
79822000;Servicios de composición\r
79822100;Servicios de estereotipia\r
79822200;Servicios de fotograbado\r
79822300;Servicios de tipografía\r
79822400;Servicios de litografía\r
79822500;Servicios de diseño gráfico\r
79823000;Servicios de impresión y entrega\r
79824000;Servicios de impresión y distribución\r
79900000;Servicios comerciales diversos y otros servicios conexos\r
79910000;Servicios de grupos holding\r
79920000;Servicios de empaquetado y servicios conexos\r
79921000;Servicios de empaquetado\r
79930000;Servicios especializados de diseño\r
79931000;Servicios de decoración de interiores\r
79932000;Servicios de diseño de interiores\r
79933000;Servicios de apoyo al diseño\r
79934000;Servicios de diseño de mobiliario\r
79940000;Servicios de agencias de recaudación de fondos\r
79941000;Servicios de peajes\r
79950000;Servicios de organización de exposiciones, ferias y congresos\r
79951000;Servicio de organización de seminarios\r
79952000;Servicios de eventos\r
79952100;Servicios de organización de eventos culturales\r
79953000;Servicios de organización de festivales\r
79954000;Servicios de organización de fiestas\r
79955000;Servicios de organización de desfiles de modas\r
79956000;Servicios de organización de ferias y exposiciones\r
79957000;Servicios de organización de subastas\r
79960000;Servicios de fotografía y servicios auxiliares\r
79961000;Servicios de fotografía\r
79961100;Servicios de fotografía publicitaria\r
79961200;Servicios de fotografía aérea\r
79961300;Servicios especializados de fotografía\r
79961310;Servicios de fotografía de fondo de pozo\r
79961320;Servicios de fotografía submarina\r
79961330;Servicios de microfilmación\r
79961340;Servicios de fotografía por rayos X\r
79961350;Servicios de fotografía de estudio\r
79962000;Servicios de revelado fotográfico\r
79963000;Servicios de restauración, copia y retocado de fotografías\r
79970000;Servicios de edición\r
79971000;Servicios de encuadernación y acabado de libros\r
79971100;Servicios de acabado de libros\r
79971200;Servicios de encuadernación de libros\r
79972000;Servicios de edición de diccionarios lingüísticos\r
79972100;Servicios de edición de diccionarios de lenguas regionales\r
79980000;Servicios de suscripción\r
79990000;Servicios comerciales diversos\r
79991000;Servicios de control de existencias\r
79992000;Servicios de recepción\r
79993000;Servicios de gestión de edificios e instalaciones\r
79993100;Servicios de gestión de instalaciones\r
79994000;Servicios de administración de contratos\r
79995000;Servicios de gestión de bibliotecas\r
79995100;Servicios de archivado\r
79995200;Servicios de catalogación\r
79996000;Servicios de organización de empresas\r
79996100;Gestión de registros\r
79997000;Servicios de viajes de negocios\r
79998000;Servicios de autocar\r
79999000;Servicios de escaneado y facturación\r
79999100;Servicios de escaneado\r
79999200;Servicios de facturación\r
80000000;Servicios de enseñanza y formación\r
80100000;Servicios de enseñanza primaria\r
80110000;Servicios de enseñanza preescolar\r
80200000;Servicios de enseñanza secundaria\r
80210000;Servicios de enseñanza secundaria técnica y profesional\r
80211000;Servicios de enseñanza secundaria técnica\r
80212000;Servicios de enseñanza secundaria profesional\r
80300000;Servicios de enseñanza superior\r
80310000;Servicios de enseñanza para la juventud\r
80320000;Servicios de enseñanza médica\r
80330000;Servicios de enseñanza en temas de seguridad\r
80340000;Servicios de educación especial\r
80400000;Servicios de enseñanza para adultos y otros servicios de enseñanza\r
80410000;Servicios escolares diversos\r
80411000;Servicios de autoescuela\r
80411100;Servicios para examen de conducir\r
80411200;Clases de conducir\r
80412000;Servicios de escuela de aviación\r
80413000;Servicios de escuela de vela\r
80414000;Servicios de escuela de buceo\r
80415000;Servicios de entrenamiento de esquí\r
80420000;Servicios de aprendizaje electrónico\r
80430000;Servicios de enseñanza universitaria para adultos\r
80490000;Explotación de un centro educacional\r
80500000;Servicios de formación\r
80510000;Servicios de formación especializada\r
80511000;Servicios de formación del personal\r
80512000;Servicios de adiestramiento de perros\r
80513000;Servicios de escuelas de hípica\r
80520000;Instalaciones para la formación\r
80521000;Servicios de programación de la formación\r
80522000;Seminarios de formación\r
80530000;Servicios de formación profesional\r
80531000;Servicios de formación industrial y técnica\r
80531100;Servicios de formación industrial\r
80531200;Servicios de formación técnica\r
80532000;Servicios de formación en materia de gestión\r
80533000;Servicios de familiarización y formación para el usuario de ordenadores\r
80533100;Servicios de formación informática\r
80533200;Cursos de informática\r
80540000;Servicios de formación en materia ambiental\r
80550000;Servicios de formación en materia de seguridad\r
80560000;Servicios de formación en materia de salud y primeros auxilios\r
80561000;Servicios de formación en materia de salud\r
80562000;Servicios de formación en materia de primeros auxilios\r
80570000;Servicios de formación para el perfeccionamiento personal\r
80580000;Provisión de cursos de idiomas\r
80590000;Servicios de tutoría\r
80600000;Servicios de formación en materia de equipos de defensa y seguridad\r
80610000;Formación y simulación en materia de equipos de seguridad\r
80620000;Formación y simulación en materia de armas de fuego y munición\r
80630000;Formación y simulación en materia de vehículos militares\r
80640000;Formación y simulación en materia de buques de guerra\r
80650000;Formación y simulación en materia de aeronaves, misiles y naves espaciales\r
80660000;Formación y simulación en materia de sistemas electrónicos militares\r
85000000;Servicios de salud y asistencia social\r
85100000;Servicios de salud\r
85110000;Servicios hospitalarios y servicios conexos\r
85111000;Servicios hospitalarios\r
85111100;Servicios hospitalarios de cirugía\r
85111200;Servicios hospitalarios de medicina\r
85111300;Servicios hospitalarios de ginecología\r
85111310;Servicios de fertilización in vitro\r
85111320;Servicios hospitalarios de obstetricia\r
85111400;Servicios hospitalarios de rehabilitación\r
85111500;Servicios hospitalarios de psiquiatría\r
85111600;Servicios ortóticos\r
85111700;Servicios de oxigenoterapia\r
85111800;Servicios de patología\r
85111810;Servicios de análisis de sangre\r
85111820;Servicios de análisis bacteriológicos\r
85111900;Servicios de diálisis en el hospital\r
85112000;Servicios de asistencia hospitalaria\r
85112100;Servicios relacionados con ropa de cama para hospitales\r
85112200;Servicios de ambulatorio\r
85120000;Servicios de ejercicio de la medicina y servicios conexos\r
85121000;Servicios de ejercicio de la medicina\r
85121100;Servicios de médicos de medicina general\r
85121200;Servicios de médicos especialistas\r
85121210;Servicios ginecológicos u obstétricos\r
85121220;Servicios nefrológicos o neurológicos\r
85121230;Servicios cardiológicos o de neumología\r
85121231;Servicios cardiológicos\r
85121232;Servicios de neumología\r
85121240;Servicios de otorrinolaringología o audiología\r
85121250;Servicios gastroenterológicos y geriátricos\r
85121251;Servicios gastroenterológicos\r
85121252;Servicios geriátricos\r
85121270;Servicios psiquiátricos o psicológicos\r
85121271;Servicios a domicilio para personas con trastornos psicológicos\r
85121280;Servicios oftalmológicos, dermatológicos u ortopédicos\r
85121281;Servicios oftalmológicos\r
85121282;Servicios dermatológicos\r
85121283;Servicios ortopédicos\r
85121290;Servicios pediátricos o urológicos\r
85121291;Servicios pediátricos\r
85121292;Servicios urológicos\r
85121300;Servicios de cirujanos especialistas\r
85130000;Servicios de odontología y servicios conexos\r
85131000;Servicios de odontología\r
85131100;Servicios de ortodoncia\r
85131110;Servicios quirúrgicos de ortodoncia\r
85140000;Servicios varios de salud\r
85141000;Servicios prestados por personal médico\r
85141100;Servicios prestados por comadronas\r
85141200;Servicios prestados por enfermeros\r
85141210;Servicios de tratamiento médico a domicilio\r
85141211;Servicios de tratamiento médico de diálisis a domicilio\r
85141220;Servicios de asesoramiento prestados por personal de enfermería\r
85142000;Servicios paramédicos\r
85142100;Servicios fisioterapéuticos\r
85142200;Servicios homeopáticos\r
85142300;Servicios de higiene\r
85142400;Entrega a domicilio de productos para incontinentes\r
85143000;Servicios de ambulancia\r
85144000;Servicios de instituciones residenciales de salud\r
85144100;Servicios de cuidados de enfermería de residencias\r
85145000;Servicios prestados por laboratorios médicos\r
85146000;Servicios prestados por bancos de sangre\r
85146100;Servicios prestados por bancos de esperma\r
85146200;Servicios prestados por bancos de órganos para transplante\r
85147000;Servicios de sanidad de las empresas\r
85148000;Servicios de análisis médicos\r
85149000;Servicios farmacéuticos\r
85150000;Servicios de imaginería\r
85160000;Servicios ópticos\r
85170000;Servicios de acupuntura y quiropráctica\r
85171000;Servicios de acupuntura\r
85172000;Servicios de quiropráctica\r
85200000;Servicios de veterinaria\r
85210000;Guarderías para animales de compañía\r
85300000;Servicios de asistencia social y servicios conexos\r
85310000;Servicios de asistencia social\r
85311000;Servicios de asistencia social con alojamiento\r
85311100;Servicios de bienestar social proporcionados a ancianos\r
85311200;Servicios de bienestar social proporcionados a minusválidos\r
85311300;Servicios de bienestar social proporcionados a niños y jóvenes\r
85312000;Servicios de asistencia social sin alojamiento\r
85312100;Servicios de centros de día\r
85312110;Servicios de cuidado diurno para niños\r
85312120;Servicios de cuidado diurno para niños y jóvenes discapacitados\r
85312200;Reparto a domicilio de alimentos\r
85312300;Servicios de orientación y asesoramiento\r
85312310;Servicios de orientación\r
85312320;Servicios de asesoramiento\r
85312330;Servicios de planificación familiar\r
85312400;Servicios de bienestar social no prestados por instituciones residenciales\r
85312500;Servicios de rehabilitación\r
85312510;Servicios de rehabilitación profesional\r
85320000;Servicios sociales\r
85321000;Servicios sociales administrativos\r
85322000;Programa de acción municipal\r
85323000;Servicio municipal de salud\r
90000000;Servicios de alcantarillado, basura, limpieza y medio ambiente\r
90400000;Servicios de alcantarillado\r
90410000;Servicios de retirada de aguas residuales\r
90420000;Servicios de tratamiento de aguas residuales\r
90430000;Servicios de utilización de aguas residuales\r
90440000;Servicios de tratamiento de pozos negros\r
90450000;Servicios de tratamiento de fosas sépticas\r
90460000;Servicios de vaciado de pozos negros y fosas sépticas\r
90470000;Servicios de limpieza de alcantarillas\r
90480000;Servicios de gestión de alcantarillados\r
90481000;Explotación de una planta de tratamiento de aguas residuales\r
90490000;Servicios de inspección de alcantarillas y de asesoramiento en materia de aguas residuales\r
90491000;Servicios de inspección de alcantarillas\r
90492000;Servicios de consultoría en tratamiento de aguas residuales\r
90500000;Servicios relacionados con desperdicios y residuos\r
90510000;Eliminación y tratamiento de desperdicios\r
90511000;Servicios de recogida de desperdicios\r
90511100;Servicios de recogida de desperdicios sólidos urbanos\r
90511200;Servicios de recogida de desperdicios domésticos\r
90511300;Servicios de recogida de basuras\r
90511400;Servicios de recogida de papel\r
90512000;Servicios de transporte de desperdicios\r
90513000;Servicios de tratamiento y eliminación de desperdicios y residuos no peligrosos\r
90513100;Servicios de eliminación de desperdicios domésticos\r
90513200;Servicios de eliminación de desperdicios sólidos urbanos\r
90513300;Servicios de incineración de desperdicios\r
90513400;Servicios de evacuación de cenizas\r
90513500;Tratamiento y eliminación de líquidos residuales\r
90513600;Servicios de retirada de lodos\r
90513700;Servicios de transporte de lodos\r
90513800;Servicios de tratamiento de lodos\r
90513900;Servicios de eliminación de lodos\r
90514000;Servicios de reciclado de desperdicios\r
90520000;Servicios de residuos radiactivos, tóxicos, médicos y peligrosos\r
90521000;Servicios de tratamiento de desechos radiactivos\r
90521100;Recogida de desechos radiactivos\r
90521200;Servicios de almacenamiento de desechos radiactivos\r
90521300;Eliminación de desechos radiactivos\r
90521400;Transporte de desechos radiactivos\r
90521410;Transporte de desechos nucleares de baja actividad\r
90521420;Transporte de desechos nucleares de actividad media\r
90521500;Embalaje de desechos radiactivos\r
90521510;Embalaje de desechos nucleares de baja actividad\r
90521520;Embalaje de desechos nucleares de actividad media\r
90522000;Servicios relacionados con los terrenos contaminados\r
90522100;Retirada de terrenos contaminados\r
90522200;Eliminación de terrenos contaminados\r
90522300;Servicios de tratamiento de terrenos contaminados\r
90522400;Limpieza y tratamiento de terrenos\r
90523000;Servicios de eliminación de desechos tóxicos, excepto desechos radiactivos y terrenos contaminados\r
90523100;Servicios de neutralización de armas y municiones\r
90523200;Servicios de destrucción o desarme de bombas sin explosionar\r
90523300;Servicios de retirada de minas\r
90524000;Servicios relacionados con los desechos médicos\r
90524100;Servicios de recogida de desechos clínicos\r
90524200;Servicios de eliminación de desechos clínicos\r
90524300;Servicios de evacuación de desechos biológicos\r
90524400;Recogida, transporte y eliminación de desechos hospitalarios\r
90530000;Explotación de una instalación de vertido de desechos\r
90531000;Servicios de gestión de vertederos públicos\r
90532000;Servicios de gestión de escoriales\r
90533000;Servicios de gestión de vertederos\r
90600000;Servicios de saneamiento y limpieza en áreas urbanas o rurales y relacionados con ellos\r
90610000;Servicios de limpieza y barrido de calles\r
90611000;Servicios de limpieza de calles\r
90612000;Servicios de barrido de calles\r
90620000;Servicios de limpieza y eliminación de nieve\r
90630000;Servicios de limpieza y eliminación de hielo\r
90640000;Servicios de limpieza y vaciado de sumideros\r
90641000;Servicios de limpieza de sumideros\r
90642000;Servicios de vaciado de sumideros\r
90650000;Servicios de retirada de amianto\r
90660000;Servicios de eliminación del plomo\r
90670000;Servicios de desinfección y exterminio en áreas urbanas o rurales\r
90680000;Servicios de limpieza de playas\r
90690000;Servicios de limpieza de pintadas\r
90700000;Servicios medioambientales\r
90710000;Gestión medioambiental\r
90711000;Evaluación del impacto medioambiental que no sea para la construcción\r
90711100;Evaluación de riesgos o peligros que no sea para la construcción\r
90711200;Criterios medioambientales que no sean para la construcción\r
90711300;Análisis de indicadores medioambientales que no sean para la construcción\r
90711400;Servicios de evaluación del impacto medioambiental (EIA) que no sean para la construcción\r
90711500;Seguimiento medioambiental que no sea para la construcción\r
90712000;Planificación medioambiental\r
90712100;Planificación del desarrollo medioambiental urbano\r
90712200;Planificación de la estrategia de conservación forestal\r
90712300;Planificación de la estrategia de conservación marítima\r
90712400;Servicios de planificación de la estrategia de gestión o conservación de recursos naturales\r
90712500;Creación o planificación de instituciones medioambientales\r
90713000;Servicios de asesoramiento sobre asuntos ambientales\r
90713100;Servicios de asesoramiento sobre suministro de agua y sobre aguas residuales que no sean para la construcción\r
90714000;Auditoría medioambiental\r
90714100;Sistemas de información medioambiental\r
90714200;Servicios de auditoría medioambiental de empresas\r
90714300;Servicios de auditoría medioambiental sectoriales\r
90714400;Servicios de auditoría medioambiental de actividades específicas\r
90714500;Servicios de control de la calidad medioambiental\r
90714600;Servicios de control de la seguridad medioambiental\r
90715000;Servicios de estudio de la contaminación\r
90715100;Servicios de estudio de la contaminación química y petrolera\r
90715110;Estudio de emplazamientos de fábricas de gas\r
90715120;Estudio de emplazamientos de vertederos de desechos de fábricas de productos químicos o refinerías de petróleo\r
90715200;Otros servicios de estudio de la contaminación\r
90715210;Estudio de emplazamientos de depósitos o terminales petroleros\r
90715220;Estudio de emplazamientos industriales\r
90715230;Estudio de vertederos de desechos industriales\r
90715240;Estudio de emplazamientos de plantas de tratamiento de la madera\r
90715250;Estudio de emplazamientos de plantas de limpieza en seco\r
90715260;Estudio de emplazamientos de fundición\r
90715270;Estudio de emplazamientos de planta de reciclado\r
90715280;Estudio de emplazamientos de planta de transformación de alimentos\r
90720000;Protección del medio ambiente\r
90721000;Servicios de seguridad medioambiental\r
90721100;Servicios de protección del paisaje\r
90721200;Servicios de protección de la capa de ozono\r
90721300;Servicios de protección contra la contaminación de alimentos y piensos\r
90721400;Servicios de protección de los recursos genéticos\r
90721500;Servicios de protección contra las sustancias tóxicas\r
90721600;Servicios de protección contra la radiación\r
90721700;Servicios de protección de las especies en peligro\r
90721800;Servicios de protección contra los riesgos o peligros naturales\r
90722000;Rehabilitación medioambiental\r
90722100;Rehabilitación de emplazamientos industriales\r
90722200;Servicios de descontaminación medioambiental\r
90722300;Servicios de recuperación del suelo\r
90730000;Rastreo y seguimiento de la contaminación y rehabilitación\r
90731000;Servicios relacionados con la contaminación atmosférica\r
90731100;Gestión de la calidad del aire\r
90731200;Servicios de gestión o control de la contaminación atmosférica transfronteriza\r
90731210;Compra de créditos de emisión de CO2\r
90731300;Servicios de protección contra la contaminación atmosférica\r
90731400;Servicios de seguimiento o medición de la contaminación atmosférica\r
90731500;Servicios de detección de gases tóxicos\r
90731600;Seguimiento del metano\r
90731700;Servicios de seguimiento del dióxido de carbono\r
90731800;Seguimiento de partículas en suspensión\r
90731900;Servicios de seguimiento de la disminución de la capa de ozono\r
90732000;Servicios relacionados con la contaminación del suelo\r
90732100;Servicios de protección contra la contaminación del suelo\r
90732200;Servicios de retirada de suelos contaminados\r
90732300;Tratamiento o rehabilitación de suelos contaminados\r
90732400;Servicios de asesoramiento sobre la contaminación del suelo\r
90732500;Cartografía de contaminación del suelo\r
90732600;Medición o seguimiento de la contaminación del suelo\r
90732700;Evaluación de la contaminación por abonos orgánicos\r
90732800;Evaluación de la contaminación por pesticidas\r
90732900;Evaluación de la contaminación por nitratos y fosfatos\r
90732910;Evaluación de la contaminación por nitratos\r
90732920;Evaluación de la contaminación por fosfatos\r
90733000;Servicios relacionados con la contaminación del agua\r
90733100;Servicios de seguimiento o control de la contaminación de aguas superficiales\r
90733200;Servicios de rehabilitación de la contaminación de aguas superficiales\r
90733300;Servicios de protección contra la contaminación de aguas superficiales\r
90733400;Servicios de tratamiento de aguas superficiales\r
90733500;Servicios de drenaje de la contaminación de aguas superficiales\r
90733600;Servicios de gestión o control de la contaminación transfronteriza de aguas\r
90733700;Servicios de seguimiento o control de la contaminación de aguas subterráneas\r
90733800;Servicios de drenaje de la contaminación de aguas subterráneas\r
90733900;Tratamiento o rehabilitación de la contaminación de aguas subterráneas\r
90740000;Servicios de rastreo y seguimiento de productos contaminantes y rehabilitación\r
90741000;Servicios relacionados con la contaminación por hidrocarburos\r
90741100;Servicios de seguimiento de vertidos de hidrocarburos\r
90741200;Servicios de control de vertidos de hidrocarburos\r
90741300;Servicios de rehabilitación por vertido de hidrocarburos\r
90742000;Servicios relacionados con la contaminación acústica\r
90742100;Servicios de control del ruido\r
90742200;Servicios de protección contra la contaminación acústica\r
90742300;Servicios de seguimiento de la contaminación acústica\r
90742400;Servicios de asesoramiento sobre la contaminación acústica\r
90743000;Servicios relacionados con la contaminación de sustancias tóxicas\r
90743100;Servicios de seguimiento de sustancias tóxicas\r
90743200;Servicios de rehabilitación de sustancias tóxicas\r
90900000;Servicios sanitarios y de limpieza\r
90910000;Servicios de limpieza\r
90911000;Servicios de limpieza de viviendas, edificios y ventanas\r
90911100;Servicios de limpieza de viviendas\r
90911200;Servicios de limpieza de edificios\r
90911300;Servicios de limpieza de ventanas\r
90912000;Servicios de limpieza de estructuras tubulares por chorro de arena o de perdigones\r
90913000;Servicios de limpieza de tanques y depósitos\r
90913100;Servicios de limpieza de tanques\r
90913200;Servicios de limpieza de depósitos\r
90914000;Servicios de limpieza de aparcamientos\r
90915000;Servicios de limpieza de hornos y chimeneas\r
90916000;Servicios de limpieza de equipos telefónicos\r
90917000;Servicios de limpieza de medios de transporte\r
90918000;Servicios de limpieza de cubos de basura\r
90919000;Servicios de limpieza de oficinas, escuelas y equipo de oficina\r
90919100;Servicios de limpieza de equipo de oficina\r
90919200;Servicios de limpieza de oficinas\r
90919300;Servicios de limpieza de escuelas\r
90920000;Servicios de higienización de instalaciones\r
90921000;Servicios de desinfección y exterminio\r
90922000;Servicios de control de plagas\r
90923000;Servicios de desratización\r
90924000;Servicios de fumigación\r
92000000;Servicios de esparcimiento, culturales y deportivos\r
92100000;Servicios de cine y vídeo\r
92110000;Servicios de producción de películas de cine y videocintas y servicios conexos\r
92111000;Servicios de producción de películas de cine y vídeo\r
92111100;Producción de películas y videocintas de formación\r
92111200;Producción de películas y videocintas de publicidad, propaganda e información\r
92111210;Producción de películas publicitarias\r
92111220;Producción de videocintas publicitarias\r
92111230;Producción de películas de propaganda\r
92111240;Producción de videocintas de propaganda\r
92111250;Producción de películas informativas\r
92111260;Producción de videocintas informativas\r
92111300;Producción de películas y videocintas de entretenimiento\r
92111310;Producción de películas de entretenimiento\r
92111320;Producción de videocintas de entretenimiento\r
92112000;Servicios relacionados con la producción de películas cinematográficas y videocintas\r
92120000;Servicios de distribución de películas cinematográficas o videocintas\r
92121000;Servicios de distribución de videocintas\r
92122000;Servicios de distribución de películas cinematográficas\r
92130000;Servicios de proyección cinematográfica\r
92140000;Servicios de proyección de videocintas\r
92200000;Servicios de radio y televisión\r
92210000;Servicios de radio\r
92211000;Servicios de producción radiofónica\r
92213000;Servicios de sistemas de radio de corto alcance\r
92214000;Servicios de equipos o estudios radiofónicos\r
92215000;Servicios de radio móvil general (GMRS)\r
92216000;Servicios de radio familiar (FRS)\r
92217000;Servicios de radio móvil general/Servicios de radio familiar (GMRS/FRS)\r
92220000;Servicios de televisión\r
92221000;Servicios de producción de televisión\r
92222000;Servicios de televisión en circuito cerrado\r
92224000;Televisión digital\r
92225000;Televisión interactiva\r
92225100;Televisión con películas a la carta\r
92226000;Teleprogramación\r
92230000;Servicios de radio y televisión por cable\r
92231000;Servicios bilaterales internacionales y líneas privadas internacionales arrendadas\r
92232000;Televisión por cable\r
92300000;Servicios de entretenimiento\r
92310000;Servicios de creación e interpretación de obras artísticas y literarias\r
92311000;Obras de arte\r
92312000;Servicios artísticos\r
92312100;Servicios artísticos de productores de teatro, grupos de cantantes, bandas y orquestas\r
92312110;Servicios artísticos de productores de teatro\r
92312120;Servicios artísticos de grupos de cantantes\r
92312130;Servicios artísticos de bandas de músicos\r
92312140;Servicios artísticos de orquestas\r
92312200;Servicios proporcionados por autores, compositores, escultores, artistas del espectáculo y otros artistas que trabajan individualmente\r
92312210;Servicios prestados por autores\r
92312211;Servicios de agencia de redacción\r
92312212;Servicios relacionados con la preparación de manuales de formación\r
92312213;Servicios de autoría técnica\r
92312220;Servicios prestados por compositores\r
92312230;Servicios prestados por escultores\r
92312240;Servicios prestados por artistas del espectáculo\r
92312250;Servicios prestados por artistas que trabajan individualmente\r
92312251;Servicios de disc jockey\r
92320000;Servicios de explotación de instalaciones artísticas\r
92330000;Servicios de zona recreativa\r
92331000;Servicios de ferias y parques de atracciones\r
92331100;Servicios de ferias\r
92331200;Servicios de parques de atracciones\r
92331210;Servicios de animación para niños\r
92332000;Servicios de playas\r
92340000;Servicios de baile y de diversión\r
92341000;Servicios de circo\r
92342000;Servicios de enseñanza de baile\r
92342100;Servicios de enseñanza de bailes de salón\r
92342200;Servicios de enseñanza de bailes de discoteca\r
92350000;Servicios de juegos de azar y apuestas\r
92351000;Servicios de juegos de azar\r
92351100;Servicios de explotación de loterías\r
92351200;Servicios de explotación de casinos\r
92352000;Servicios de apuestas\r
92352100;Servicios de explotación de sistema de apuestas mutuas\r
92352200;Servicios de corretaje de apuestas\r
92360000;Servicios de pirotecnia\r
92370000;Técnico de sonido\r
92400000;Servicios de agencias de noticias\r
92500000;Servicios de bibliotecas, archivos, museos y otros servicios culturales\r
92510000;Servicios de bibliotecas y archivos\r
92511000;Servicios de bibliotecas\r
92512000;Servicios de archivos\r
92512100;Servicios de destrucción de archivos\r
92520000;Servicios de museos y de preservación de lugares y edificios históricos\r
92521000;Servicios de museos\r
92521100;Servicios de exposición en museos\r
92521200;Servicios de preservación de material y especímenes de exposición\r
92521210;Servicios de preservación del material de exposición\r
92521220;Servicios de preservación de especímenes\r
92522000;Servicios de preservación de lugares y edificios históricos\r
92522100;Servicios de preservación de lugares históricos\r
92522200;Servicios de preservación de edificios históricos\r
92530000;Servicios de jardines botánicos y zoológicos y de reservas naturales\r
92531000;Servicios de jardines botánicos\r
92532000;Servicios de jardines zoológicos\r
92533000;Servicios de reservas naturales\r
92534000;Servicios de preservación de la vida silvestre\r
92600000;Servicios deportivos\r
92610000;Servicios de explotación de instalaciones deportivas\r
92620000;Servicios relacionados con los deportes\r
92621000;Servicios de promoción de espectáculos deportivos\r
92622000;Servicios de organización de espectáculos deportivos\r
92700000;Servicios de cibercafé\r
98000000;Otros servicios comunitarios, sociales o personales\r
98100000;Servicios de asociaciones\r
98110000;Servicios proporcionados por organizaciones comerciales, profesionales y asociaciones especializadas\r
98111000;Servicios proporcionados por organizaciones comerciales\r
98112000;Servicios prestados por organizaciones profesionales\r
98113000;Servicios proporcionados por organizaciones especializadas\r
98113100;Servicios relacionados con la seguridad nuclear\r
98120000;Servicios prestados por sindicatos\r
98130000;Servicios diversos prestados por asociaciones\r
98131000;Servicios religiosos\r
98132000;Servicios prestados por organizaciones políticas\r
98133000;Servicios prestados por asociaciones de carácter social\r
98133100;Servicios para el mejoramiento cívico y de apoyo a los servicios para la comunidad\r
98133110;Servicios proporcionados por asociaciones juveniles\r
98200000;Servicios de asesoramiento sobre igualdad de oportunidades\r
98300000;Servicios diversos\r
98310000;Servicios de lavado y limpieza en seco\r
98311000;Servicios de recogida de lavandería\r
98311100;Servicios de gestión de lavanderías\r
98311200;Servicios de explotación de lavanderías\r
98312000;Servicios de limpieza de artículos textiles\r
98312100;Servicios de impregnación de artículos textiles\r
98313000;Servicios de limpieza de artículos de piel\r
98314000;Servicios de coloración\r
98315000;Servicios de planchado\r
98316000;Servicios de teñido\r
98320000;Servicios de peluquería y tratamiento de belleza\r
98321000;Servicios de peluquería\r
98321100;Servicios de barbería\r
98322000;Servicios de tratamiento de belleza\r
98322100;Servicios de tratamiento cosmético, manicura y pedicura\r
98322110;Servicios de tratamiento con cosméticos\r
98322120;Servicios de manicura\r
98322130;Servicios de pedicura\r
98322140;Servicios de maquillaje\r
98330000;Servicios relacionados con el bienestar físico\r
98331000;Servicios de baños turcos\r
98332000;Servicios de balneario\r
98333000;Servicios de masajes\r
98334000;Servicios de bienestar físico\r
98336000;Servicios de entrenamiento, ejercicio o aeróbic\r
98340000;Servicios de alojamiento y de oficina\r
98341000;Servicios de alojamiento\r
98341100;Servicios de gestión de alojamientos\r
98341110;Servicios de administración interna\r
98341120;Servicios de portería\r
98341130;Servicios de conserjería\r
98341140;Servicios de vigilancia de inmuebles\r
98342000;Servicios relativos al entorno de trabajo\r
98350000;Servicios de instalaciones municipales\r
98351000;Servicios de gestión de aparcamientos\r
98351100;Servicios de aparcamientos\r
98351110;Servicios de aplicación de la reglamentación de aparcamientos\r
98360000;Servicios marítimos\r
98361000;Servicios relacionados con la flora y fauna marina\r
98362000;Servicios de gestión de puertos\r
98362100;Servicios de apoyo de bases marítimas\r
98363000;Servicios de buceo\r
98370000;Servicios funerarios y servicios conexos\r
98371000;Servicios funerarios\r
98371100;Servicios de cementerio y de cremación\r
98371110;Servicios de cementerio\r
98371111;Servicios de mantenimiento de cementerios\r
98371120;Servicios de cremación\r
98371200;Servicios de empresa funeraria\r
98380000;Servicios de perrera\r
98390000;Otros servicios\r
98391000;Servicios de desmantelamiento\r
98392000;Servicios de traslado\r
98393000;Servicios de sastrería\r
98394000;Servicios de tapicería\r
98395000;Servicios de cerrajería\r
98396000;Servicios de afinación de instrumentos\r
98500000;Casas particulares con personas empleadas\r
98510000;Servicios de trabajadores del comercio y la industria\r
98511000;Servicios de trabajadores del comercio\r
98512000;Servicios de trabajadores de la industria\r
98513000;Servicios de mano de obra para particulares\r
98513100;Servicios de personal de agencia para particulares\r
98513200;Servicios de personal administrativo para particulares\r
98513300;Personal temporal para particulares\r
98513310;Servicios de ayuda en tareas domésticas\r
98514000;Servicios domésticos\r
98900000;Servicios prestados por organizaciones y entidades extraterritoriales\r
98910000;Servicios específicos de organizaciones y entidades extraterritoriales\r
`;ab.parse(rb,{header:!1,delimiter:";",skipEmptyLines:!0,complete:i=>{const t=Object.fromEntries(i.data);A3.dispatch(Fv(t))}});const nb=document.getElementById("root"),ib=I4.createRoot(nb);ib.render(g.jsx(C.StrictMode,{children:g.jsx(Hf,{store:A3,children:g.jsx(Jv,{})})}));
