define(["exports"],function(_exports){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.unsafeCSS$3=_exports.unsafeCSS$2=_exports.unsafeCSS$1=_exports.unsafeCSS=_exports.svg$2=_exports.svg$1=_exports.svg=_exports.supportsAdoptingStyleSheets$3=_exports.supportsAdoptingStyleSheets$2=_exports.supportsAdoptingStyleSheets$1=_exports.supportsAdoptingStyleSheets=_exports.stylesModalPortfolio=_exports.render$2=_exports.render$1=_exports.render=_exports.nothing$2=_exports.nothing$1=_exports.nothing=_exports.notEqual$2=_exports.notEqual$1=_exports.notEqual=_exports.noChange$2=_exports.noChange$1=_exports.noChange=_exports.isServer$1=_exports.isServer=_exports.ifDefined$1=_exports.ifDefined=_exports.html$2=_exports.html$1=_exports.html=_exports.getCompatibleStyle$3=_exports.getCompatibleStyle$2=_exports.getCompatibleStyle$1=_exports.getCompatibleStyle=_exports.defaultConverter$2=_exports.defaultConverter$1=_exports.defaultConverter=_exports.css$3=_exports.css$2=_exports.css$1=_exports.css=_exports.adoptStyles$3=_exports.adoptStyles$2=_exports.adoptStyles$1=_exports.adoptStyles=_exports._$LH$2=_exports._$LH$1=_exports._$LH=_exports._$LE$1=_exports._$LE=_exports.UpdatingElement$1=_exports.UpdatingElement=_exports.URL_IMAGE_2=_exports.URL_IMAGE=_exports.ReactiveElement$2=_exports.ReactiveElement$1=_exports.ReactiveElement=_exports.ModalPortfolioWcll=_exports.LitElement$1=_exports.LitElement=_exports.INFO_DETAILS_MODAL=_exports.CSSResult$3=_exports.CSSResult$2=_exports.CSSResult$1=_exports.CSSResult=_exports.$reactiveElement=_exports.$modalPortfolioWcll=_exports.$modalPortfolioWccllStyles=_exports.$mocks=_exports.$litHtml=_exports.$litElement=_exports.$isServer=_exports.$index=_exports.$ifDefined$1=_exports.$ifDefined=_exports.$cssTag=void 0;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;_exports.supportsAdoptingStyleSheets$3=_exports.supportsAdoptingStyleSheets$2=_exports.supportsAdoptingStyleSheets$1=_exports.supportsAdoptingStyleSheets=e;class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(s,t))}return t}toString(){return this.cssText}}_exports.CSSResult$3=_exports.CSSResult$2=_exports.CSSResult$1=_exports.CSSResult=o;const r=t=>new o("string"==typeof t?t:t+"",void 0,s),i=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new o(n,t,s)},S=(s,n)=>{e?s.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):n.forEach(e=>{const n=document.createElement("style"),o=t.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n)})},c=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;_exports.getCompatibleStyle$3=_exports.getCompatibleStyle$2=_exports.getCompatibleStyle$1=_exports.getCompatibleStyle=c;_exports.adoptStyles$3=_exports.adoptStyles$2=_exports.adoptStyles$1=_exports.adoptStyles=S;_exports.css$3=_exports.css$2=_exports.css$1=_exports.css=i;_exports.unsafeCSS$3=_exports.unsafeCSS$2=_exports.unsafeCSS$1=_exports.unsafeCSS=r;var cssTag={CSSResult:o,adoptStyles:S,css:i,getCompatibleStyle:c,supportsAdoptingStyleSheets:e,unsafeCSS:r};_exports.$cssTag=cssTag;var s$1;const e$1=window,r$1=e$1.trustedTypes,h=r$1?r$1.emptyScript:"",o$1=e$1.reactiveElementPolyfillSupport,n$1={toAttribute(t,i){switch(i){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:+t;break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},a=(t,i)=>i!==t&&(i==i||t==t),l={attribute:!0,type:String,converter:n$1,reflect:!1,hasChanged:a};_exports.notEqual$2=_exports.notEqual$1=_exports.notEqual=a;_exports.defaultConverter$2=_exports.defaultConverter$1=_exports.defaultConverter=n$1;class d extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))}),t}static createProperty(t,i=l){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c(i))}else void 0!==i&&s.push(c(i));return s}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=l){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$1).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$1;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}_$Ej(){var _this=this;return babelHelpers.asyncToGenerator(function*(){_this.isUpdatePending=!0;try{yield _this._$E_}catch(t){Promise.reject(t)}const t=_this.scheduleUpdate();return null!=t&&(yield t),!_this.isUpdatePending})()}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,i)=>this[i]=t),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)}),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach(t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}_exports.ReactiveElement$2=_exports.ReactiveElement$1=_exports.ReactiveElement=d;d.finalized=!0,d.elementProperties=new Map,d.elementStyles=[],d.shadowRootOptions={mode:"open"},null==o$1||o$1({ReactiveElement:d}),(null!==(s$1=e$1.reactiveElementVersions)&&void 0!==s$1?s$1:e$1.reactiveElementVersions=[]).push("1.4.1");var reactiveElement={ReactiveElement:d,defaultConverter:n$1,notEqual:a,CSSResult:o,adoptStyles:S,css:i,getCompatibleStyle:c,supportsAdoptingStyleSheets:e,unsafeCSS:r};/**
    * @license
    * Copyright 2017 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */_exports.$reactiveElement=reactiveElement;var t$1;const i$1=window,s$2=i$1.trustedTypes,e$2=s$2?s$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$2=`lit$${(Math.random()+"").slice(9)}$`,n$2="?"+o$2,l$1=`<${n$2}>`,h$1=document,r$2=(t="")=>h$1.createComment(t),d$1=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,c$1=t=>u(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a$1=/-->/g,f=/>/g,_=/>|[ 	\n\f\r](?:([^\s"'>=/]+)([ 	\n\f\r]*=[ 	\n\f\r]*(?:[^ 	\n\f\r"'`<>=]|("|')|))|$)/g,m=/'/g,p=/"/g,$=/^(?:script|style|textarea|title)$/i,g=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),y=g(1),w=g(2),x=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),T=new WeakMap,A=h$1.createTreeWalker(h$1,129,null,!1),E=(t,i)=>{const s=t.length-1,n=[];let h,r=2===i?"<svg>":"",d=v;for(let i=0;i<s;i++){const s=t[i];let e,u,c=-1,g=0;for(;g<s.length&&(d.lastIndex=g,u=d.exec(s),null!==u);)g=d.lastIndex,d===v?"!--"===u[1]?d=a$1:void 0!==u[1]?d=f:void 0!==u[2]?($.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=_):void 0!==u[3]&&(d=_):d===_?">"===u[0]?(d=null!=h?h:v,c=-1):void 0===u[1]?c=-2:(c=d.lastIndex-u[2].length,e=u[1],d=void 0===u[3]?_:"\""===u[3]?p:m):d===p||d===m?d=_:d===a$1||d===f?d=v:(d=_,h=void 0);const y=d===_&&t[i+1].startsWith("/>")?" ":"";r+=d===v?s+l$1:0<=c?(n.push(e),s.slice(0,c)+"$lit$"+s.slice(c)+o$2+y):s+o$2+(-2===c?(n.push(void 0),i):y)}const u=r+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==e$2?e$2.createHTML(u):u,n]};_exports.nothing$2=_exports.nothing$1=_exports.nothing=b;_exports.noChange$2=_exports.noChange$1=_exports.noChange=x;_exports.svg$2=_exports.svg$1=_exports.svg=w;_exports.html$2=_exports.html$1=_exports.html=y;class C{constructor({strings:t,_$litType$:i},e){let l;this.parts=[];let h=0,d=0;const u=t.length-1,c=this.parts,[v,a]=E(t,i);if(this.el=C.createElement(v,e),A.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(o$2)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(o$2),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:h,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?k:"@"===i[1]?H:S$1})}else c.push({type:6,index:h})}for(const i of t)l.removeAttribute(i)}if($.test(l.tagName)){const t=l.textContent.split(o$2),i=t.length-1;if(0<i){l.textContent=s$2?s$2.emptyScript:"";for(let s=0;s<i;s++)l.append(t[s],r$2()),A.nextNode(),c.push({type:2,index:++h});l.append(t[i],r$2())}}}else if(8===l.nodeType)if(l.data===n$2)c.push({type:2,index:h});else{let t=-1;for(;-1!==(t=l.data.indexOf(o$2,t+1));)c.push({type:7,index:h}),t+=o$2.length-1}h++}}static createElement(t,i){const s=h$1.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===x)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d$1(i)?void 0:i._$litDirective$;return(null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=P(t,r._$AS(t,i.values),r,e)),i}class V{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:h$1).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),l=0,r=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new I(n,this,t)),this.u.push(i),d=e[++r]}l!==(null==d?void 0:d.index)&&(n=A.nextNode(),l++)}return o}p(t){let i=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cm=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),d$1(t)?t===b||null==t||""===t?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==x&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):c$1(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==b&&d$1(this._$AH)?this._$AA.nextSibling.data=t:this.T(h$1.createTextNode(t)),this._$AH=t}$(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=C.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.p(s);else{const t=new V(o,this),i=t.v(this.options);t.p(s),this.T(i),this._$AH=t}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new C(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.O(r$2()),this.O(r$2()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class S$1{constructor(t,i,s,e,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,2<s.length||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!d$1(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===x&&(h=this._$AH[l]),n||(n=!d$1(h)||h!==this._$AH[l]),h===b?t=b:t!==b&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h}n&&!e&&this.j(t)}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class M extends S$1{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===b?void 0:t}}const R=s$2?s$2.emptyScript:"";class k extends S$1{constructor(){super(...arguments),this.type=4}j(t){t&&t!==b?this.element.setAttribute(this.name,R):this.element.removeAttribute(this.name)}}class H extends S$1{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:b)===x)return;const e=this._$AH,o=t===b&&e!==b||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==b&&(e===b||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class I{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const L={P:"$lit$",A:o$2,M:n$2,C:1,L:E,R:V,D:c$1,V:P,I:N,H:S$1,N:k,U:H,B:M,F:I},z=i$1.litHtmlPolyfillSupport;_exports._$LH$2=_exports._$LH$1=_exports._$LH=L;null==z||z(C,N),(null!==(t$1=i$1.litHtmlVersions)&&void 0!==t$1?t$1:i$1.litHtmlVersions=[]).push("2.4.0");const Z=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(r$2(),t),t,void 0,null!=s?s:{})}return l._$AI(t),l};_exports.render$2=_exports.render$1=_exports.render=Z;var litHtml={_$LH:L,html:y,noChange:x,nothing:b,render:Z,svg:w};/**
    * @license
    * Copyright 2017 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */_exports.$litHtml=litHtml;var l$2,o$3;const r$3=d;_exports.UpdatingElement$1=_exports.UpdatingElement=r$3;class s$3 extends d{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Z(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return x}}_exports.LitElement$1=_exports.LitElement=s$3;s$3.finalized=!0,s$3._$litElement$=!0,null===(l$2=globalThis.litElementHydrateSupport)||void 0===l$2||l$2.call(globalThis,{LitElement:s$3});const n$3=globalThis.litElementPolyfillSupport;null==n$3||n$3({LitElement:s$3});const h$2={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};_exports._$LE$1=_exports._$LE=h$2;(null!==(o$3=globalThis.litElementVersions)&&void 0!==o$3?o$3:globalThis.litElementVersions=[]).push("3.2.2");var litElement={LitElement:s$3,UpdatingElement:r$3,_$LE:h$2,CSSResult:o,adoptStyles:S,css:i,getCompatibleStyle:c,supportsAdoptingStyleSheets:e,unsafeCSS:r,ReactiveElement:d,defaultConverter:n$1,notEqual:a,_$LH:L,html:y,noChange:x,nothing:b,render:Z,svg:w};/**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */_exports.$litElement=litElement;const o$4=!1;_exports.isServer$1=_exports.isServer=o$4;var isServer={isServer:o$4};_exports.$isServer=isServer;var index={CSSResult:o,adoptStyles:S,css:i,getCompatibleStyle:c,supportsAdoptingStyleSheets:e,unsafeCSS:r,ReactiveElement:d,defaultConverter:n$1,notEqual:a,_$LH:L,html:y,noChange:x,nothing:b,render:Z,svg:w,LitElement:s$3,UpdatingElement:r$3,_$LE:h$2,isServer:o$4};_exports.$index=index;const stylesModalPortfolio=i`
  * {
    box-sizing: border-box;
  }
  img {
    margin-top: 5px;
    width: 100%;
    height: 100%;
  }
  .image-contain {
    object-fit: contain;
  }
  .image-cover {
    object-fit: cover;
  }
  .image-fill {
    object-fit: fill;
  }
  .modal {
    width: 100%;
    height: 100%;
    background-color: var(--background-color-opacity-modal);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    font-size: 12px;
    transition: opacity var(--animation-duration) ease-in;
    color: var(--color-text-modal);
  }
  .modal-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto repeat(2, 1fr);
    height: auto;
    width: 90vw;
    background-color: var(--background-color-modal-content);
    /* overflow: scroll; */
    border-radius: 5px;
    padding: 10px;
  }
  .modal-content-whimage {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto 1fr;
    height: auto;
    width: 90vw;
    background-color: var(--background-color-modal-content);
    border-radius: 5px;
    padding: 10px;
  }
  .modal-close {
    grid-column: 12/13;
    text-align: center;
    border-bottom: 1px solid var(--color-border-title);
    padding-top: 16px;
    cursor: pointer;
  }
  .modal-title {
    grid-column: 1/12;
    grid-row: 1/2;
    text-align: center;
    border-bottom: 1px solid var(--color-border-title);
    font-weight: bold;
    text-transform: uppercase;
  }
  .modal-title h2 {
    font-size: 16px;
  }
  .openModal {
    opacity: 1;
    visibility: visible;
    transition: opacity var(--animation-duration) ease-in;
  }
  .closeModal {
    opacity: 0;
    transition: opacity var(--animation-duration) ease-in;
  }
  .modal-img {
    grid-column: 1/13;
    grid-row: 2/3;
    max-width: 1024px;
    max-height: 335px;
  }
  .modal-info {
    grid-column: 1/13;
    grid-row: 3/4;
    display: flex;
    flex-direction: column;
  }
  .modal-info-whimage {
    grid-column: 1/13;
    grid-row: 2/3;
    display: flex;
    flex-direction: column;
  }
  .info-project, .detail-project, .detail-project-only {
    height: 100%;
  }
  .reverse {
    flex-direction: column-reverse;
  }
  .modal-info h3, .modal-info-whimage h3 {
    margin: 10px;
    font-size: 14px;
    text-align: center;
  }
  .line {
    background-color: var(--color-separation-info-title);
    width: 100px;
    height: 3px;
    margin: 10px auto;
  }
  .cat {
    margin: 5px 10px;
    font-weight: bold;
  }
  .cat span {
    font-weight: normal;
  }
  .cat span a {
    color: var(--color-text-visit-detail);
    text-decoration: none;
    font-weight: bold;
  }
  @media screen and (min-width: 480px) {
    .modal {
      font-size: 14px;
    }
    .modal-title h2 {
      font-size: 18px;
    }
    .modal-info h3, .modal-info-whimage h3 {
      font-size: 16px;
    }
  }
  @media screen and (min-width: 768px) {
    .modal {
      font-size: 16px;
    }
    .modal-title h2 {
      font-size: 20px;
    }
    .modal-info h3, .modal-info-whimage h3 {
      margin: 15px;
      font-size: 18px;
    }
    .modal-content {
      max-width: 1024px;
      max-height: 720px;
    }
    .modal-content-whimage {
      max-width: 1024px;
      max-height: 720px;
    }
    .modal-info {
      flex-direction: row;
    }
    .modal-info-whimage {
      flex-direction: row;
    }
    .info-project, .detail-project {
      width: 50%;
    }
    .detail-project-only {
      width: 100%;
    }
    .reverse {
      flex-direction: row-reverse;
    }
  }
`;_exports.stylesModalPortfolio=stylesModalPortfolio;var modalPortfolioWccllStyles={stylesModalPortfolio:stylesModalPortfolio};_exports.$modalPortfolioWccllStyles=modalPortfolioWccllStyles;const l$3=l=>null!=l?l:b;_exports.ifDefined$1=_exports.ifDefined=l$3;var ifDefined={ifDefined:l$3};_exports.$ifDefined=ifDefined;var ifDefined$1={ifDefined:l$3};_exports.$ifDefined$1=ifDefined$1;class ModalPortfolioWcll extends s$3{static get styles(){return[i`
      :host {
        font-family: Arial, Helvetica, sans-serif;
        --animation-duration: .3s;
        --background-color-modal-content: #fff;
        --background-color-opacity-modal: rgba(0,0,0,0.7);
        --color-border-title: #d1d1d1;
        --color-separation-info-title: #0563BB;
        --color-text-visit-detail: #0563BB;
        --color-text-modal: #000;
      }
    `,stylesModalPortfolio]}static get properties(){return{title:{type:String},titleDetail:{type:String},titleInfo:{type:String},isOpen:{type:Boolean,reflect:!0},details:{type:Object},urlImage:{type:String},reverseDetails:{type:Boolean},size:{type:String,reflect:!0},timeAnimation:{type:Number,reflect:!0}}}constructor(){super();this.title="Nombre de tu proyecto";this.isOpen=!1;this.details={};this.urlImage="";this.reverseDetails=!1;this.size="complete";this.titleDetail="Detalles del proyecto";this.titleInfo="";this.timeAnimation=500;this.initAnimation=!1}render(){return y`
      <div class="modal ${this.isOpen?"openModal":""} ${this.initAnimation?"closeModal":""}">
        <div class="${this.urlImage?"modal-content":"modal-content-whimage"}">
          <div class="modal-close" @click="${this.closeModal}">X</div>
          <div class="modal-title">
            <h2>${this.title}</h2>
          </div>
          ${this.urlImage?this._getTplImage:""}
          ${this._getTplModalDetails}
        </div>
    </div>
    `}closeModal(){this.initAnimation=!0;this.requestUpdate();setTimeout(()=>{this.isOpen=!1;this.initAnimation=!1},this.timeAnimation)}openModal(){this.isOpen=!0}get _getTplImage(){return y`
      <div class="modal-img">
        <img src="${this.urlImage}" alt="${this.title}" class="${l$3(this._selectionImageSize())}">
      </div>
    `}get _getTplModalDetails(){return y`
      <div class="${this.urlImage?"modal-info":"modal-info-whimage"} ${this.reverseDetails?"reverse":""}">
        ${this.titleInfo?this._getBothInfoProyect:this._getOnlyDetailsProyect}  
      </div>
    `}get _getBothInfoProyect(){return y`
        <div class="info-project"> 
          <h3>${this.titleInfo}</h3>
          <div class="line"></div>
          ${this._getDetailsProyect()}
        </div>
        <div class="detail-project">
          <h3>${this.titleDetail}</h3>
          <div class="line"></div>
          <slot></slot>
        </div>
    `}get _getOnlyDetailsProyect(){return y`
      <div class="detail-project-only">
        <h3>${this.titleDetail}</h3>
        <div class="line"></div>
        <slot></slot>
      </div>
    `}_getDetailsProyect(){const dataDetails=Object.entries(this.details);return dataDetails.map(data=>{return"Link"===data[0]?y`<p class="cat">${data[0]} : <span><a href="${data[1]}" target="_blank">Visitar</a></span></p>`:y`<p class="cat">${data[0]} : <span>${data[1]} </span></p>`})}_selectionImageSize(){switch(this.size){case"original":return"image-contain";case"complete":return"image-cover";case"compress":return"image-fill";}}}_exports.ModalPortfolioWcll=ModalPortfolioWcll;customElements.define("modal-portfolio-wcll",ModalPortfolioWcll);var modalPortfolioWcll={ModalPortfolioWcll:ModalPortfolioWcll};_exports.$modalPortfolioWcll=modalPortfolioWcll;const INFO_DETAILS_MODAL={Nombre:"Calculadora basica",Tecnologias:"HTML, CSS, JavaScript",Url:"www.micalculadora.com",Link:"https://www.micalculadora.com"};_exports.INFO_DETAILS_MODAL=INFO_DETAILS_MODAL;const URL_IMAGE="https://e32akj3sky4.exactdn.com/wp-content/uploads/2019/10/cuanto-cuesta-hacer-un-video.jpg";_exports.URL_IMAGE=URL_IMAGE;const URL_IMAGE_2="https://www.jumpintotech.com/media/Noticias/diseno-web-a-medida.png";_exports.URL_IMAGE_2=URL_IMAGE_2;var mocks={INFO_DETAILS_MODAL:INFO_DETAILS_MODAL,URL_IMAGE:URL_IMAGE,URL_IMAGE_2:URL_IMAGE_2};_exports.$mocks=mocks;class AppDemo extends s$3{static get styles(){return i`
      :host {
        display: block;
      }
      button {
        background-color: #004481;
        border-radius: 5px;
        color: #fff;
        padding: 10px 15px;
        cursor: pointer;
        margin: 5px 10px;
      }
      .modal-animation {
        --animation-duration: 3s;
      }
      .modal-styles {
        --background-color-modal-content: #989898;
        --background-color-opacity-modal: rgba(155,55,250,0.7);
        --color-border-title: #de7e7e;
        --color-separation-info-title: #13ab50;
        --color-text-visit-detail: #b5581e;
        --color-text-modal: #d1d3e7;
      }
    `}static get properties(){return{}}constructor(){super()}render(){return y`
      <button @click="${this.openModalDefault}">Modal default</button>
      <button @click="${this.openModalTwoSections}">Modal dos secciones</button>
      <button @click="${this.openModalImage}">Modal con imagen</button>
      <button @click="${this.openModalImageAdjust}">Modal imagen ajustada</button>
      <button @click="${this.openModalReverse}">Modal dos secciones inversas</button>
      <button @click="${this.openModalAnimation}">Modal animacion lenta</button>
      <button @click="${this.openModalStyles}">Modal estilos personalizados</button>
      ${this._renderTplModal}
    `}get _renderTplModal(){return y`
      <modal-portfolio-wcll class="modal-default" titleDetail="Descripción del proyecto">
        <div>
          <p>DESCRIPCIÓN Pariatur exercitation aute labore excepteur cillum ipsum magna duis duis cillum ex velit adipisicing. Amet veniam aliqua ipsum officia velit reprehenderit fugiat. Ea nisi magna est pariatur ad. </p>
          <strong>•</strong> <span>Creado con <strong>HTML</strong> y muchas cosas.</span>
          <br>
          <strong>•</strong> <span>Mas descripción a tu gusto.</span>
        </div>
      </modal-portfolio-wcll>
      <modal-portfolio-wcll 
        class="modal-two-sections"
        title="Mi calculadora"
        titleInfo="Detalles" 
        .details="${INFO_DETAILS_MODAL}">
        <p>Información de tu proyecto</p>
      </modal-portfolio-wcll>
      <modal-portfolio-wcll 
        class="modal-image"
        title="Mi calculadora"
        titleInfo="Detalles" 
        urlImage="${URL_IMAGE}"
        size="original"
        .details="${INFO_DETAILS_MODAL}">
        <p>Información de tu proyecto</p>
      </modal-portfolio-wcll>
      <modal-portfolio-wcll 
        class="modal-image-adjust"
        title="Mi calculadora"
        titleInfo="Detalles" 
        titleDetail="Información"
        size="complete"
        urlImage="${URL_IMAGE}"
        .details="${INFO_DETAILS_MODAL}">
        <p>Información de tu proyecto</p>
      </modal-portfolio-wcll>
      <modal-portfolio-wcll 
        class="modal-reverse"
        title="Mi calculadora"
        titleInfo="Detalles" 
        titleDetail="Información"
        size="complete"
        urlImage="${URL_IMAGE}"
        .details="${INFO_DETAILS_MODAL}"
        reverseDetails>
        <p>Información de tu proyecto</p>
      </modal-portfolio-wcll>
      <modal-portfolio-wcll 
        class="modal-animation"
        title="Mi calculadora"
        titleInfo="Detalles" 
        titleDetail="Información"
        size="complete"
        timeAnimation="3200"
        urlImage="${URL_IMAGE}"
        .details="${INFO_DETAILS_MODAL}"
        reverseDetails>
        <p>Información de tu proyecto</p>
      </modal-portfolio-wcll>
      <modal-portfolio-wcll 
        class="modal-styles"
        title="Mi calculadora"
        titleInfo="Detalles" 
        titleDetail="Información"
        size="complete"
        .details="${INFO_DETAILS_MODAL}">
        <p>Información de tu proyecto</p>
      </modal-portfolio-wcll>
    `}openModalDefault(){const modal=this.shadowRoot.querySelector(".modal-default");modal.openModal()}openModalTwoSections(){const modal=this.shadowRoot.querySelector(".modal-two-sections");modal.openModal()}openModalImage(){const modal=this.shadowRoot.querySelector(".modal-image");modal.openModal()}openModalImageAdjust(){const modal=this.shadowRoot.querySelector(".modal-image-adjust");modal.openModal()}openModalReverse(){const modal=this.shadowRoot.querySelector(".modal-reverse");modal.openModal()}openModalAnimation(){const modal=this.shadowRoot.querySelector(".modal-animation");modal.openModal()}openModalStyles(){const modal=this.shadowRoot.querySelector(".modal-styles");modal.openModal()}}customElements.define("app-demo",AppDemo)});