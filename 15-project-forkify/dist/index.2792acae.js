var e,t,r,n,i,o,a,s,c,u,l,d,h,f,p,v,g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function y(e){return e&&e.__esModule?e.default:e}var m={},b={},_=g.parcelRequire3a11;null==_&&((_=function(e){if(e in m)return m[e].exports;if(e in b){var t=b[e];delete b[e];var r={id:e,exports:{}};return m[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){b[e]=t},g.parcelRequire3a11=_);var w={},k={},E=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
k=E("object"==typeof globalThis&&globalThis)||E("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
E("object"==typeof self&&self)||E("object"==typeof g&&g)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||k||Function("return this")();var S={},N={};// Detect IE8's incomplete defineProperty implementation
S=!(N=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var M={},O={};O=!N(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var L=Function.prototype.call;M=O?L.bind(L):function(){return L.apply(L,arguments)};var j={}.propertyIsEnumerable,$=Object.getOwnPropertyDescriptor;n=$&&!j.call({1:2},1)?function(e){var t=$(this,e);return!!t&&t.enumerable}:j;var x={};x=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var P={},T={},I={},q=Function.prototype,H=q.call,F=O&&q.bind.bind(H,H),C={},A=(I=O?F:function(e){return function(){return H.apply(e,arguments)}})({}.toString),D=I("".slice);C=function(e){return D(A(e),8,-1)};var R=Object,W=I("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
T=N(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!R("z").propertyIsEnumerable(0)})?function(e){return"String"===C(e)?W(e,""):R(e)}:R;var U={},G={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
G=function(e){return null==e};var B=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
U=function(e){if(G(e))throw B("Can't call method on "+e);return e},P=function(e){return T(U(e))};var z={},J={},Y={},Q={},V={},K="object"==typeof document&&document.all,Z=(V={all:K,IS_HTMLDDA:void 0===K&&void 0!==K}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
Q=V.IS_HTMLDDA?function(e){return"function"==typeof e||e===Z}:function(e){return"function"==typeof e};var X=V.all;Y=V.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:Q(e)||e===X}:function(e){return"object"==typeof e?null!==e:Q(e)};var ee={},et={};et=function(e,t){var r;return arguments.length<2?(r=k[e],Q(r)?r:void 0):k[e]&&k[e][t]};var er={};er=I({}.isPrototypeOf);var en={},ei={},eo={},ea={};ea="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var es=k.process,ec=k.Deno,eu=es&&es.versions||ec&&ec.version,el=eu&&eu.v8;el&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(o=(i=el.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&ea&&(!(i=ea.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=ea.match(/Chrome\/(\d+)/))&&(o=+i[1]),eo=o;var ed=k.String;en=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(ei=!!Object.getOwnPropertySymbols&&!N(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!ed(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&eo&&eo<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eh=Object;ee=en?function(e){return"symbol"==typeof e}:function(e){var t=et("Symbol");return Q(t)&&er(t.prototype,eh(e))};var ef={},ep={},ev={},eg=String;ev=function(e){try{return eg(e)}catch(e){return"Object"}};var ey=TypeError;// `Assert: IsCallable(argument) is true`
ep=function(e){if(Q(e))return e;throw ey(ev(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
ef=function(e,t){var r=e[t];return G(r)?void 0:ep(r)};var em={},eb=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
em=function(e,t){var r,n;if("string"===t&&Q(r=e.toString)&&!Y(n=M(r,e))||Q(r=e.valueOf)&&!Y(n=M(r,e))||"string"!==t&&Q(r=e.toString)&&!Y(n=M(r,e)))return n;throw eb("Can't convert object to primitive value")};var e_={},ew={};ew=!1;var ek={},eE={},eS=Object.defineProperty;eE=function(e,t){try{eS(k,e,{value:t,configurable:!0,writable:!0})}catch(r){k[e]=t}return t};var eN="__core-js_shared__";ek=k[eN]||eE(eN,{}),(e_=function(e,t){return ek[e]||(ek[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.1",mode:ew?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",source:"https://github.com/zloirock/core-js"});var eM={},eO={},eL=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
eO=function(e){return eL(U(e))};var ej=I({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
eM=Object.hasOwn||function(e,t){return ej(eO(e),t)};var e$={},ex=0,eP=Math.random(),eT=I(1..toString);e$=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eT(++ex+eP,36)};var eI=k.Symbol,eq=e_("wks"),eH=en?eI.for||eI:eI&&eI.withoutSetter||e$,eF=TypeError,eC=(eM(eq,e="toPrimitive")||(eq[e]=ei&&eM(eI,e)?eI[e]:eH("Symbol."+e)),eq[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
J=function(e,t){if(!Y(e)||ee(e))return e;var r,n=ef(e,eC);if(n){if(void 0===t&&(t="default"),r=M(n,e,t),!Y(r)||ee(r))return r;throw eF("Can't convert object to primitive value")}return void 0===t&&(t="number"),em(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
z=function(e){var t=J(e,"string");return ee(t)?t:t+""};var eA={},eD={},eR=k.document,eW=Y(eR)&&Y(eR.createElement);eD=function(e){return eW?eR.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
eA=!S&&!N(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(eD("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eU=Object.getOwnPropertyDescriptor;r=S?eU:function(e,t){if(e=P(e),t=z(t),eA)try{return eU(e,t)}catch(e){}if(eM(e,t))return x(!M(n,e,t),e[t])};var eG={},eB={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eB=S&&N(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var ez={},eJ=String,eY=TypeError;// `Assert: Type(argument) is Object`
ez=function(e){if(Y(e))return e;throw eY(eJ(e)+" is not an object")};var eQ=TypeError,eV=Object.defineProperty,eK=Object.getOwnPropertyDescriptor,eZ="enumerable",eX="configurable",e0="writable";a=S?eB?function(e,t,r){if(ez(e),t=z(t),ez(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e0 in r&&!r[e0]){var n=eK(e,t);n&&n[e0]&&(e[t]=r.value,r={configurable:eX in r?r[eX]:n[eX],enumerable:eZ in r?r[eZ]:n[eZ],writable:!1})}return eV(e,t,r)}:eV:function(e,t,r){if(ez(e),t=z(t),ez(r),eA)try{return eV(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eQ("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eG=S?function(e,t,r){return a(e,t,x(1,r))}:function(e,t,r){return e[t]=r,e};var e1={},e2={},e3=Function.prototype,e4=S&&Object.getOwnPropertyDescriptor,e7=eM(e3,"name")&&(!S||S&&e4(e3,"name").configurable),e9={},e5=I(Function.toString);Q(ek.inspectSource)||(ek.inspectSource=function(e){return e5(e)}),e9=ek.inspectSource;var e8={},e6={},te=k.WeakMap;e6=Q(te)&&/native code/.test(String(te));var tt={},tr=e_("keys");tt=function(e){return tr[e]||(tr[e]=e$(e))};var tn={};tn={};var ti="Object already initialized",to=k.TypeError,ta=k.WeakMap;if(e6||ek.state){var ts=ek.state||(ek.state=new ta);/* eslint-disable no-self-assign -- prototype methods protection */ts.get=ts.get,ts.has=ts.has,ts.set=ts.set,/* eslint-enable no-self-assign -- prototype methods protection */s=function(e,t){if(ts.has(e))throw to(ti);return t.facade=e,ts.set(e,t),t},c=function(e){return ts.get(e)||{}},u=function(e){return ts.has(e)}}else{var tc=tt("state");tn[tc]=!0,s=function(e,t){if(eM(e,tc))throw to(ti);return t.facade=e,eG(e,tc,t),t},c=function(e){return eM(e,tc)?e[tc]:{}},u=function(e){return eM(e,tc)}}var tu=(e8={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!Y(t)||(r=c(t)).type!==e)throw to("Incompatible receiver, "+e+" required");return r}}}).enforce,tl=e8.get,td=String,th=Object.defineProperty,tf=I("".slice),tp=I("".replace),tv=I([].join),tg=S&&!N(function(){return 8!==th(function(){},"length",{value:8}).length}),ty=String(String).split("String"),tm=e2=function(e,t,r){"Symbol("===tf(td(t),0,7)&&(t="["+tp(td(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eM(e,"name")||e7&&e.name!==t)&&(S?th(e,"name",{value:t,configurable:!0}):e.name=t),tg&&r&&eM(r,"arity")&&e.length!==r.arity&&th(e,"length",{value:r.arity});try{r&&eM(r,"constructor")&&r.constructor?S&&th(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tu(e);return eM(n,"source")||(n.source=tv(ty,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=tm(function(){return Q(this)&&tl(this).source||e9(this)},"toString"),e1=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(Q(r)&&e2(r,o,n),n.global)i?e[t]=r:eE(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tb={},t_={},tw={},tk={},tE={},tS={},tN=Math.ceil,tM=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tS=Math.trunc||function(e){var t=+e;return(t>0?tM:tN)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tE=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tS(t)};var tO=Math.max,tL=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tk=function(e,t){var r=tE(e);return r<0?tO(r+t,0):tL(r,t)};var tj={},t$={},tx=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
t$=function(e){return e>0?tx(tE(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tj=function(e){return t$(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tP=function(e){return function(t,r,n){var i,o=P(t),a=tj(o),s=tk(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tT={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tP(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tP(!1)}.indexOf,tI=I([].push);tw=function(e,t){var r,n=P(e),i=0,o=[];for(r in n)!eM(tn,r)&&eM(n,r)&&tI(o,r);// Don't enum bug & hidden keys
for(;t.length>i;)eM(n,r=t[i++])&&(~tT(o,r)||tI(o,r));return o};var tq=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tw(e,tq)},d=Object.getOwnPropertySymbols;var tH=I([].concat);// all object keys, includes non-enumerable and symbols
t_=et("Reflect","ownKeys")||function(e){var t=l(ez(e));return d?tH(t,d(e)):t},tb=function(e,t,n){for(var i=t_(t),o=0;o<i.length;o++){var s=i[o];eM(e,s)||n&&eM(n,s)||a(e,s,r(t,s))}};var tF={},tC=/#|\.prototype\./,tA=function(e,t){var r=tR[tD(e)];return r===tU||r!==tW&&(Q(t)?N(t):!!t)},tD=tA.normalize=function(e){return String(e).replace(tC,".").toLowerCase()},tR=tA.data={},tW=tA.NATIVE="N",tU=tA.POLYFILL="P";tF=tA,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/w=function(e,t){var n,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(n=u?k:l?k[c]||eE(c,{}):(k[c]||{}).prototype)for(i in t){// contained in target
if(a=t[i],o=e.dontCallGetSet?(s=r(n,i))&&s.value:n[i],!tF(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tb(a,o)}(e.sham||o&&o.sham)&&eG(a,"sham",!0),e1(n,i,a,e)}};var tG={},tB={},tz=Function.prototype,tJ=tz.apply,tY=tz.call;// eslint-disable-next-line es/no-reflect -- safe
tB="object"==typeof Reflect&&Reflect.apply||(O?tY.bind(tJ):function(){return tY.apply(tJ,arguments)});var tQ={},tV={},tK=(tV=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===C(e))return I(e)})(tV.bind);// optional / simple context binding
tQ=function(e,t){return ep(e),void 0===t?e:O?tK(e,t):function(){return e.apply(t,arguments)}};var tZ={};tZ=et("document","documentElement");var tX={};tX=I([].slice);var t0={},t1=TypeError;t0=function(e,t){if(e<t)throw t1("Not enough arguments");return e};var t2={};// eslint-disable-next-line redos/no-vulnerable -- safe
t2=/(?:ipad|iphone|ipod).*applewebkit/i.test(ea);var t3={};t3="process"===C(k.process);var t4=k.setImmediate,t7=k.clearImmediate,t9=k.process,t5=k.Dispatch,t8=k.Function,t6=k.MessageChannel,re=k.String,rt=0,rr={},rn="onreadystatechange";N(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
h=k.location});var ri=function(e){if(eM(rr,e)){var t=rr[e];delete rr[e],t()}},ro=function(e){return function(){ri(e)}},ra=function(e){ri(e.data)},rs=function(e){// old engines have not location.origin
k.postMessage(re(e),h.protocol+"//"+h.host)};t4&&t7||(t4=function(e){t0(arguments.length,1);var t=Q(e)?e:t8(e),r=tX(arguments,1);return rr[++rt]=function(){tB(t,void 0,r)},f(rt),rt},t7=function(e){delete rr[e]},t3?f=function(e){t9.nextTick(ro(e))}:t5&&t5.now?f=function(e){t5.now(ro(e))}:t6&&!t2?(v=(p=new t6).port2,p.port1.onmessage=ra,f=tQ(v.postMessage,v)):k.addEventListener&&Q(k.postMessage)&&!k.importScripts&&h&&"file:"!==h.protocol&&!N(rs)?(f=rs,k.addEventListener("message",ra,!1)):f=rn in eD("script")?function(e){tZ.appendChild(eD("script"))[rn]=function(){tZ.removeChild(this),ri(e)}}:function(e){setTimeout(ro(e),0)});var rc=(tG={set:t4,clear:t7}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
w({global:!0,bind:!0,enumerable:!0,forced:k.clearImmediate!==rc},{clearImmediate:rc});var ru=tG.set,rl={},rd={};/* global Bun -- Deno case */rd="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rh=k.Function,rf=/MSIE .\./.test(ea)||rd&&((t=k.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rl=function(e,t){var r=t?2:1;return rf?function(n,i/* , ...arguments */){var o=t0(arguments.length,1)>r,a=Q(n)?n:rh(n),s=o?tX(arguments,r):[],c=o?function(){tB(a,this,s)}:a;return t?e(c,i):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var rp=k.setImmediate?rl(ru,!1):ru;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
w({global:!0,bind:!0,enumerable:!0,forced:k.setImmediate!==rp},{setImmediate:rp});const rv="https://forkify-api.herokuapp.com/api/v2/recipes/",rg="c89b6e1a-ba14-48c8-8f59-6a5b9139cf6b",ry=e=>new Promise(function(t,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)}),rm=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,ry(10)]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rb={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},r_=e=>{let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceURL:t.source_url,image:t.image_url,servings:1,cookingTime:t.cooking_time,ingredients:t.ingredients,bookmarked:rb.bookmarks.some(e=>e.id===t.id),...t.key&&{key:t.key}}},rw=async e=>{try{let t=await rm(`${rv}${e}?key=${rg}`);rb.recipe=r_(t)}catch(e){throw console.error(e),e}},rk=async e=>{try{rb.search.query=e;let t=await rm(`${rv}?search=${e}&key=${rg}`);rb.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))}catch(e){throw console.log(e),e}},rE=(e=rb.search.page)=>{rb.search.page=e;let t=(e-1)*rb.search.resultsPerPage,r=e*rb.search.resultsPerPage;return rb.search.results.slice(t,r)},rS=e=>{rb.recipe.ingredients.forEach(t=>t.quantity*=e/rb.recipe.servings),rb.recipe.servings=e},rN=()=>{localStorage.setItem("bookmarks",JSON.stringify(rb.bookmarks))},rM=e=>{// Add bookmark
rb.bookmarks.push(e),e.id===rb.recipe.id&&(rb.recipe.bookmarked=!0),rN()},rO=e=>{// Delete bookmark
let t=rb.bookmarks.findIndex(t=>t.id===e);rb.bookmarks.splice(t,1),e===rb.recipe.id&&(rb.recipe.bookmarked=!1)};(()=>{let e=localStorage.getItem("bookmarks");e&&(rb.bookmarks=JSON.parse(e))})();const rL=async e=>{try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format!");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rm(`${rv}?key=${rg}`,r);rb.recipe=r_(n),rM(rb.recipe)}catch(e){throw e}};var rj={};rj=new URL(_("27Lyk").resolve("eyyUD"),import.meta.url).toString();class r${_data;_parentElement;/**
   * Renders the received object to the DOM
   *
   * @param {Array|Object} data - The data to render.
   * @param {boolean} [render=true] - Specifies whether to render the markup or just return it.
   * @returns {string|void} - The HTML markup if render is false, otherwise void.
   */render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}renderSpinner(){let e=`
        <div class="spinner">
          <svg>
            <use href="${/*@__PURE__*/y(rj)}#icon-loader"></use>
          </svg>
        </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${/*@__PURE__*/y(rj)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${/*@__PURE__*/y(rj)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}}var rx={};!/**
 * @license Fraction.js v4.3.5 31/08/2023
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2023, Robert Eisele (robert@raw.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **//**
 *
 * This class offers the possibility to calculate fractions.
 * You can pass a fraction in different formats. Either as array, as double, as string or as an integer.
 *
 * Array/Object form
 * [ 0 => <numerator>, 1 => <denominator> ]
 * [ n => <numerator>, d => <denominator> ]
 *
 * Integer form
 * - Single integer value
 *
 * Double form
 * - Single double value
 *
 * String form
 * 123.456 - a simple double
 * 123/456 - a string fraction
 * 123.'456' - a double with repeating decimal places
 * 123.(456) - synonym
 * 123.45'6' - a double with repeating last place
 * 123.45(6) - synonym
 *
 * Example:
 *
 * var f = new Fraction("9.4'31'");
 * f.mul([-4, 3]).div(4.9);
 *
 */function(e){// Parsed data to avoid calling "new" all the time
var t={s:1,n:0,d:1};function r(e,t){if(isNaN(e=parseInt(e,10)))throw u();return e*t}// Creates a new Fraction internally without the need of the bulky constructor
function n(e,t){if(0===t)throw c();var r=Object.create(s.prototype);r.s=e<0?-1:1;var n=a(e=e<0?-e:e,t);return r.n=e/n,r.d=t/n,r}function i(e){for(var t={},r=e,n=2,i=4;i<=r;){for(;r%n==0;)r/=n,t[n]=(t[n]||0)+1;i+=1+2*n++}return r!==e?r>1&&(t[r]=(t[r]||0)+1):t[e]=(t[e]||0)+1,t}var o=function(e,n){var i,o=0,a=1,s=1,d=0,h=0,f=0,p=1,v=1,g=0,y=1,m=1,b=1;if(null==e);else if(void 0!==n){if(s=(o=e)*(a=n),o%1!=0||a%1!=0)throw l()}else switch(typeof e){case"object":if("d"in e&&"n"in e)o=e.n,a=e.d,"s"in e&&(o*=e.s);else if(0 in e)o=e[0],1 in e&&(a=e[1]);else throw u();s=o*a;break;case"number":if(e<0&&(s=e,e=-e),e%1==0)o=e;else if(e>0){// Using Farey Sequences
// http://www.johndcook.com/blog/2010/10/20/best-rational-approximation/
for(e>=1&&(v=Math.pow(10,Math.floor(1+Math.log(e)/Math.LN10)),e/=v);y<=1e7&&b<=1e7;){if(e===(i=(g+m)/(y+b))){y+b<=1e7?(o=g+m,a=y+b):b>y?(o=m,a=b):(o=g,a=y);break}e>i?(g+=m,y+=b):(m+=g,b+=y),y>1e7?(o=m,a=b):(o=g,a=y)}o*=v}else(isNaN(e)||isNaN(n))&&(a=o=NaN);break;case"string":if(null===(y=e.match(/\d+|./g)))throw u();if("-"===y[g]?(s=-1,g++):"+"===y[g]&&g++,y.length===g+1?h=r(y[g++],s):"."===y[g+1]||"."===y[g]?("."!==y[g]&&(d=r(y[g++],s)),(++g+1===y.length||"("===y[g+1]&&")"===y[g+3]||"'"===y[g+1]&&"'"===y[g+3])&&(h=r(y[g],s),p=Math.pow(10,y[g].length),g++),("("===y[g]&&")"===y[g+2]||"'"===y[g]&&"'"===y[g+2])&&(f=r(y[g+1],s),v=Math.pow(10,y[g+1].length)-1,g+=3)):"/"===y[g+1]||":"===y[g+1]?(h=r(y[g],s),p=r(y[g+2],1),g+=3):"/"===y[g+3]&&" "===y[g+1]&&(d=r(y[g],s),h=r(y[g+2],s),p=r(y[g+4],1),g+=5),y.length<=g){s=/* void */o=f+(a=p*v)*d+v*h;break}default:throw u()}if(0===a)throw c();t.s=s<0?-1:1,t.n=Math.abs(o),t.d=Math.abs(a)};function a(e,t){if(!e)return t;if(!t)return e;for(;;){if(!(e%=t))return t;if(!(t%=e))return e}}/**
   * Module constructor
   *
   * @constructor
   * @param {number|Fraction=} a
   * @param {number=} b
   */function s(e,r){if(o(e,r),!(this instanceof s))return n(t.s*t.n,t.d);e=a(t.d,t.n),this.s=t.s,this.n=t.n/e,this.d=t.d/e}var c=function(){return Error("Division by Zero")},u=function(){return Error("Invalid argument")},l=function(){return Error("Parameters must be integer")};s.prototype={s:1,n:0,d:1,/**
     * Calculates the absolute value
     *
     * Ex: new Fraction(-4).abs() => 4
     **/abs:function(){return n(this.n,this.d)},/**
     * Inverts the sign of the current fraction
     *
     * Ex: new Fraction(-4).neg() => 4
     **/neg:function(){return n(-this.s*this.n,this.d)},/**
     * Adds two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
     **/add:function(e,r){return o(e,r),n(this.s*this.n*t.d+t.s*this.d*t.n,this.d*t.d)},/**
     * Subtracts two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
     **/sub:function(e,r){return o(e,r),n(this.s*this.n*t.d-t.s*this.d*t.n,this.d*t.d)},/**
     * Multiplies two rational numbers
     *
     * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
     **/mul:function(e,r){return o(e,r),n(this.s*t.s*this.n*t.n,this.d*t.d)},/**
     * Divides two rational numbers
     *
     * Ex: new Fraction("-17.(345)").inverse().div(3)
     **/div:function(e,r){return o(e,r),n(this.s*t.s*this.n*t.d,this.d*t.n)},/**
     * Clones the actual object
     *
     * Ex: new Fraction("-17.(345)").clone()
     **/clone:function(){return n(this.s*this.n,this.d)},/**
     * Calculates the modulo of two rational numbers - a more precise fmod
     *
     * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
     **/mod:function(e,r){if(isNaN(this.n)||isNaN(this.d))return new s(NaN);if(void 0===e)return n(this.s*this.n%this.d,1);if(o(e,r),0===t.n&&0===this.d)throw c();/*
       * First silly attempt, kinda slow
       *
       return that["sub"]({
       "n": num["n"] * Math.floor((this.n / this.d) / (num.n / num.d)),
       "d": num["d"],
       "s": this["s"]
       });*//*
       * New attempt: a1 / b1 = a2 / b2 * q + r
       * => b2 * a1 = a2 * b1 * q + b1 * b2 * r
       * => (b2 * a1 % a2 * b1) / (b1 * b2)
       */return n(this.s*(t.d*this.n)%(t.n*this.d),t.d*this.d)},/**
     * Calculates the fractional gcd of two rational numbers
     *
     * Ex: new Fraction(5,8).gcd(3,7) => 1/56
     */gcd:function(e,r){// gcd(a / b, c / d) = gcd(a, c) / lcm(b, d)
return o(e,r),n(a(t.n,this.n)*a(t.d,this.d),t.d*this.d)},/**
     * Calculates the fractional lcm of two rational numbers
     *
     * Ex: new Fraction(5,8).lcm(3,7) => 15
     */lcm:function(e,r){return(// lcm(a / b, c / d) = lcm(a, c) / gcd(b, d)
(o(e,r),0===t.n&&0===this.n)?n(0,1):n(t.n*this.n,a(t.n,this.n)*a(t.d,this.d)))},/**
     * Calculates the ceil of a rational number
     *
     * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
     **/ceil:function(e){return(e=Math.pow(10,e||0),isNaN(this.n)||isNaN(this.d))?new s(NaN):n(Math.ceil(e*this.s*this.n/this.d),e)},/**
     * Calculates the floor of a rational number
     *
     * Ex: new Fraction('4.(3)').floor() => (4 / 1)
     **/floor:function(e){return(e=Math.pow(10,e||0),isNaN(this.n)||isNaN(this.d))?new s(NaN):n(Math.floor(e*this.s*this.n/this.d),e)},/**
     * Rounds a rational numbers
     *
     * Ex: new Fraction('4.(3)').round() => (4 / 1)
     **/round:function(e){return(e=Math.pow(10,e||0),isNaN(this.n)||isNaN(this.d))?new s(NaN):n(Math.round(e*this.s*this.n/this.d),e)},/**
     * Gets the inverse of the fraction, means numerator and denominator are exchanged
     *
     * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
     **/inverse:function(){return n(this.s*this.d,this.n)},/**
     * Calculates the fraction to some rational exponent, if possible
     *
     * Ex: new Fraction(-1,2).pow(-3) => -8
     */pow:function(e,r){// Trivial case when exp is an integer
if(o(e,r),1===t.d)return t.s<0?n(Math.pow(this.s*this.d,t.n),Math.pow(this.n,t.n)):n(Math.pow(this.s*this.n,t.n),Math.pow(this.d,t.n));// Negative roots become complex
//     (-a/b)^(c/d) = x
// <=> (-1)^(c/d) * (a/b)^(c/d) = x
// <=> (cos(pi) + i*sin(pi))^(c/d) * (a/b)^(c/d) = x         # rotate 1 by 180°
// <=> (cos(c*pi/d) + i*sin(c*pi/d)) * (a/b)^(c/d) = x       # DeMoivre's formula in Q ( https://proofwiki.org/wiki/De_Moivre%27s_Formula/Rational_Index )
// From which follows that only for c=0 the root is non-complex. c/d is a reduced fraction, so that sin(c/dpi)=0 occurs for d=1, which is handled by our trivial case.
if(this.s<0)return null;// Now prime factor n and d
var a=i(this.n),s=i(this.d),c=1,u=1;for(var l in a)if("1"!==l){if("0"===l){c=0;break}if(a[l]*=t.n,a[l]%t.d!=0)return null;a[l]/=t.d,c*=Math.pow(l,a[l])}for(var l in s)if("1"!==l){if(s[l]*=t.n,s[l]%t.d!=0)return null;s[l]/=t.d,u*=Math.pow(l,s[l])}return t.s<0?n(u,c):n(c,u)},/**
     * Check if two rational numbers are the same
     *
     * Ex: new Fraction(19.6).equals([98, 5]);
     **/equals:function(e,r){return o(e,r),this.s*this.n*t.d==t.s*t.n*this.d;// Same as compare() === 0
},/**
     * Check if two rational numbers are the same
     *
     * Ex: new Fraction(19.6).equals([98, 5]);
     **/compare:function(e,r){o(e,r);var n=this.s*this.n*t.d-t.s*t.n*this.d;return(0<n)-(n<0)},simplify:function(e){if(isNaN(this.n)||isNaN(this.d))return this;e=e||.001;for(var t=this.abs(),r=t.toContinued(),i=1;i<r.length;i++){for(var o=n(r[i-1],1),a=i-2;a>=0;a--)o=o.inverse().add(r[a]);if(Math.abs(o.sub(t).valueOf())<e)return o.mul(this.s)}return this},/**
     * Check if two rational numbers are divisible
     *
     * Ex: new Fraction(19.6).divisible(1.5);
     */divisible:function(e,r){return o(e,r),!(!(t.n*this.d)||this.n*t.d%(t.n*this.d))},/**
     * Returns a decimal representation of the fraction
     *
     * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
     **/valueOf:function(){return this.s*this.n/this.d},/**
     * Returns a string-fraction representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toFraction(true) => "4 1/3"
     **/toFraction:function(e){var t,r="",n=this.n,i=this.d;return this.s<0&&(r+="-"),1===i?r+=n:(e&&(t=Math.floor(n/i))>0&&(r+=t+" ",n%=i),r+=n+"/"+i),r},/**
     * Returns a latex representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
     **/toLatex:function(e){var t,r="",n=this.n,i=this.d;return this.s<0&&(r+="-"),1===i?r+=n:(e&&(t=Math.floor(n/i))>0&&(r+=t,n%=i),r+="\\frac{"+n+"}{"+i+"}"),r},/**
     * Returns an array of continued fraction elements
     *
     * Ex: new Fraction("7/8").toContinued() => [0,1,7]
     */toContinued:function(){var e,t=this.n,r=this.d,n=[];if(isNaN(t)||isNaN(r))return n;do n.push(Math.floor(t/r)),e=t%r,t=r,r=e;while(1!==t)return n},/**
     * Creates a string representation of a fraction with all digits
     *
     * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
     **/toString:function(e){var t=this.n,r=this.d;if(isNaN(t)||isNaN(r))return"NaN";e=e||15;var n=function(e,t){for(;t%2==0;t/=2);for(;t%5==0;t/=5);if(1===t)return 0;for(// If we would like to compute really large numbers quicker, we could make use of Fermat's little theorem:
// 10^(d-1) % d == 1
// However, we don't need such large numbers and MAX_CYCLE_LEN should be the capstone,
// as we want to translate the numbers to strings.
var r=10%t,n=1;1!==r;n++)if(r=10*r%t,n>2e3)return 0;// Returning 0 here means that we don't print it as a cyclic number. It's likely that the answer is `d-1`
return n}(0,r),i=function(e,t,r){for(var n=1,i=function(e,t,r){for(var n=1;t>0;e=e*e%r,t>>=1)1&t&&(n=n*e%r);return n}(10,r,t),o=0;o<300;o++){// Solve 10^s == 10^(s+t) (mod d)
if(n===i)return o;n=10*n%t,i=10*i%t}return 0}(0,r,n),o=this.s<0?"-":"";// Cycle length
if(o+=t/r|0,t%=r,(t*=10)&&(o+="."),n){for(var a=i;a--;)o+=t/r|0,t%=r,t*=10;o+="(";for(var a=n;a--;)o+=t/r|0,t%=r,t*=10;o+=")"}else for(var a=e;t&&a--;)o+=t/r|0,t%=r,t*=10;return o}},Object.defineProperty(rx,"__esModule",{value:!0}),rx.default=s,rx=s}(0);class rP extends r${_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe, please try another one.";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&n<1e3&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`
            <figure class="recipe__fig">
              <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
              <h1 class="recipe__title">
                <span>${this._data.title}</span>
              </h1>
            </figure>
    
            <div class="recipe__details">
              <div class="recipe__info">
                <svg class="recipe__info-icon">
                  <use href="${/*@__PURE__*/y(rj)}#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
                <span class="recipe__info-text">minutes</span>
              </div>
              <div class="recipe__info">
                <svg class="recipe__info-icon">
                  <use href="${/*@__PURE__*/y(rj)}#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
                <span class="recipe__info-text">servings</span>
    
                <div class="recipe__info-buttons">
                  <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                    <svg>
                      <use href="${/*@__PURE__*/y(rj)}#icon-minus-circle"></use>
                    </svg>
                  </button>
                  <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                    <svg>
                      <use href="${/*@__PURE__*/y(rj)}#icon-plus-circle"></use>
                    </svg>
                  </button>
                </div>
              </div>
    
              <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
                <svg>
                  <use href="${/*@__PURE__*/y(rj)}#icon-user"></use>
                </svg>
              </div>
              
              <button class="btn--round btn--bookmark">
                <svg class="">
                  <use href="${/*@__PURE__*/y(rj)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
                </svg>
              </button>
            </div>
    
            <div class="recipe__ingredients">
              <h2 class="heading--2">Recipe ingredients</h2>
              <ul class="recipe__ingredient-list">
              
                ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
                
              </ul>
            </div>
    
            <div class="recipe__directions">
              <h2 class="heading--2">How to cook it</h2>
              <p class="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
                directions at their website.
              </p>
              <a
                class="btn--small recipe__btn"
                href="${this._data.sourceURL}"
                target="_blank"
              >
                <span>Directions</span>
                <svg class="search__icon">
                  <use href="${/*@__PURE__*/y(rj)}#icon-arrow-right"></use>
                </svg>
              </a>
            </div>
        `}_generateMarkupIngredient(e){return`
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${/*@__PURE__*/y(rj)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${e.quantity?new/*@__PURE__*/(y(rx))(e.quantity).toFraction(!0):""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${e.unit}</span>
          ${e.description}
        </div>
      </li>
    `}}var rT=new rP;class rI{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}addHandlerSearch(e){this._parentElement.addEventListener("submit",t=>{t.preventDefault(),e()})}_clearInput(){this._parentElement.querySelector(".search__field").value=""}}var rq=new rI,rH=new class extends r${_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
      <li class="preview">
        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            
            <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
              <svg>
                <use href="${/*@__PURE__*/y(rj)}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `}};class rF extends r${_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again.";_message="";_generateMarkup(){return this._data.map(e=>rH.render(e,!1)).join("")}}var rC=new rF;class rA extends r${_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage),{buttonLast:r,buttonNext:n}=this._generateButtonMarkup(e);return(// Page 1 and there are other pages
1===e&&t>1?n:e===t&&t>1?r:e<t?`
        ${r}
        ${n}
      `:"")}// { buttonLast, buttonNext }
_generateButtonMarkup(e){return{buttonLast:`
        <button class="btn--inline pagination__btn--prev" data-goto="${e-1}">
          <svg class="search__icon">
            <use href="${/*@__PURE__*/y(rj)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
      `,buttonNext:`
        <button class="btn--inline pagination__btn--next" data-goto="${e+1}">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/y(rj)}#icon-arrow-right"></use>
          </svg>
        </button>
      `}}}var rD=new rA;class rR extends r${_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it.";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rH.render(e,!1)).join("")}}var rW=new rR,rU=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(a=new O(o||[]),s=h,function(r,i){if(s===f)throw Error("Generator is already running");if(s===p){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v);var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===h)throw s=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=d(e,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=a.done?p:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=p,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var h="suspendedStart",f="executing",p="completed",v={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function y(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(b=w);var k=m.prototype=g.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,a(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,s)})}}(i,o,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function L(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(e){return e.done?e.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(k),u(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),M(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;M(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),v}},e}({});try{regeneratorRuntime=rU}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rU:Function("r","regeneratorRuntime = r")(rU)}class rG extends r${_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded!";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}addHandlerUpload(e){this._parentElement.addEventListener("submit",t=>{t.preventDefault();let r=[...new FormData(this._parentElement)],n=Object.fromEntries(r);e(n)})}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){[this._btnClose,this._overlay].forEach(e=>e.addEventListener("click",this.toggleWindow.bind(this)))}_generateMarkup(){}}var rB=new rG;const rz=async()=>{try{let e=window.location.hash.slice(1);if(!e)return;rT.renderSpinner(),rC.update(rE()),rW.update(rb.bookmarks),// Loading recipe
await rw(e),rT.render(rb.recipe)}catch(e){console.log(e),rT.renderError(e)}},rJ=async()=>{try{rC.renderSpinner();// Get search query
let e=rq.getQuery();if(!e)return;// Load search results
await rk(e),rC.render(rE()),// Render initial pagination buttons
rb.search.page=1,rD.render(rb.search)}catch(e){console.log(e)}},rY=async e=>{try{rB.renderSpinner(),// Upload new recipe data
await rL(e),rT.render(rb.recipe),rB.renderMessage(),// Change ID in the URL
window.history.pushState(null,"s",`#${rb.recipe.id}`),// Close form window
setTimeout(()=>rB.toggleWindow(),2500)}catch(e){console.log(e),rB.renderError(e.message)}};rW.addHandlerRender(()=>{rW.render(rb.bookmarks)}),rT.addHandlerRender(rz),rT.addHandlerUpdateServings(e=>{// Update recipe servings (in state)
rS(e),rT.update(rb.recipe)}),rT.addHandlerAddBookmark(()=>{rb.recipe.bookmarked?rO(rb.recipe.id):rM(rb.recipe),rT.update(rb.recipe),rW.render(rb.bookmarks)}),rq.addHandlerSearch(rJ),rD.addHandlerClick(e=>{rC.render(rE(e)),rD.render(rb.search)}),rB.addHandlerUpload(rY);//# sourceMappingURL=index.2792acae.js.map

//# sourceMappingURL=index.2792acae.js.map
