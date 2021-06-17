var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function s(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(t,n,o){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const o=t.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function i(e,t,n,o){if(e){const s=l(e,t,n,o);return e[0](s)}}function l(e,t,n,o){return e[1]&&o?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](o(t))):n.ctx}function a(e,t,n,o,s,r,c){const i=function(e,t,n,o){if(e[2]&&o){const s=e[2](o(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let o=0;o<n;o+=1)e[o]=t.dirty[o]|s[o];return e}return t.dirty|s}return t.dirty}(t,o,s,r);if(i){const s=l(t,n,o,c);e.p(s,i)}}function u(e){return null==e?"":e}function d(e,t){e.appendChild(t)}function p(e,t,n){e.insertBefore(t,n||null)}function f(e){e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function h(){return $(" ")}function g(){return $("")}function v(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function x(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function y(e){return""===e?null:+e}function b(e,t){e.value=null==t?"":t}let w;function k(e){w=e}function T(){if(!w)throw new Error("Function called outside component initialization");return w}function M(e){T().$$.on_mount.push(e)}function C(e){T().$$.after_update.push(e)}function j(){const e=T();return(t,n)=>{const o=e.$$.callbacks[t];if(o){const s=function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);o.slice().forEach((t=>{t.call(e,s)}))}}}const P=[],_=[],A=[],E=[],L=Promise.resolve();let O=!1;function I(){O||(O=!0,L.then(D))}function F(){return I(),L}function V(e){A.push(e)}function z(e){E.push(e)}let H=!1;const q=new Set;function D(){if(!H){H=!0;do{for(let e=0;e<P.length;e+=1){const t=P[e];k(t),S(t.$$)}for(k(null),P.length=0;_.length;)_.pop()();for(let e=0;e<A.length;e+=1){const t=A[e];q.has(t)||(q.add(t),t())}A.length=0}while(P.length);for(;E.length;)E.pop()();O=!1,H=!1,q.clear()}}function S(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}const B=new Set;let N;function K(){N={r:0,c:[],p:N}}function U(){N.r||o(N.c),N=N.p}function R(e,t){e&&e.i&&(B.delete(e),e.i(t))}function W(e,t,n,o){if(e&&e.o){if(B.has(e))return;B.add(e),N.c.push((()=>{B.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}function J(e,t){W(e,1,1,(()=>{t.delete(e.key)}))}function G(e,t,n){const o=e.$$.props[t];void 0!==o&&(e.$$.bound[o]=n,n(e.$$.ctx[o]))}function Z(e){e&&e.c()}function X(e,n,r,c){const{fragment:i,on_mount:l,on_destroy:a,after_update:u}=e.$$;i&&i.m(n,r),c||V((()=>{const n=l.map(t).filter(s);a?a.push(...n):o(n),e.$$.on_mount=[]})),u.forEach(V)}function Y(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,s,r,c,i,l,a=[-1]){const u=w;k(t);const d=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:s.context||[]),callbacks:n(),dirty:a,skip_bound:!1};let p=!1;if(d.ctx=r?r(t,s.props||{},((e,n,...o)=>{const s=o.length?o[0]:n;return d.ctx&&i(d.ctx[e],d.ctx[e]=s)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](s),p&&function(e,t){-1===e.$$.dirty[0]&&(P.push(e),I(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);d.fragment&&d.fragment.l(e),e.forEach(f)}else d.fragment&&d.fragment.c();s.intro&&R(t.$$.fragment),X(t,s.target,s.anchor,s.customElement),D()}k(u)}class ee{$destroy(){Y(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function te(t){let n,o,s,r,c;return{c(){n=m("p"),n.innerHTML='<strong>&quot;Add Vectors&quot;</strong> Application written by Stephan K.<br/>\n\tThe application can be used to perform addition and substraction of 2D (2 dimensional) vectors. It allows both cartesian and polar representations.\n\t<br/>\n\tThe source code is hosted on <strong><a href="https://github.com/KMurphs/math-calculators" rel="noopener noreferrer" target="_blank">Github</a></strong>, \n\tand documentation can be found at <strong><a href="/math-calculators/docs" rel="noopener noreferrer" target="_blank">/docs</a></strong>',o=h(),s=m("p"),s.innerHTML='Got a question? To get in touch, find me on Twitter \n\t<strong><a href="https://twitter.com/Murphs_K" rel="noopener noreferrer" target="_blank">@Murphs_K</a></strong>, or\n\ton Github at\n\t<strong><a href="https://github.com/KMurphs" rel="noopener noreferrer" target="_blank">KMurphs</a></strong><br/>',r=h(),c=m("p"),c.textContent="© 2021 Stephane K.  All rights reserved",x(n,"class","about-title"),x(s,"class","about-links svelte-162m9pd"),x(c,"class","about-copyrights")},m(e,t){p(e,n,t),p(e,o,t),p(e,s,t),p(e,r,t),p(e,c,t)},p:e,i:e,o:e,d(e){e&&f(n),e&&f(o),e&&f(s),e&&f(r),e&&f(c)}}}class ne extends ee{constructor(e){super(),Q(this,e,null,te,r,{})}}function oe(e){let t,n,s,r,c,i,l,a,$,g,y,b,w,k;return i=new ne({}),{c(){t=m("div"),n=m("div"),s=m("h3"),s.textContent="About",r=h(),c=m("div"),Z(i.$$.fragment),l=h(),a=m("button"),a.textContent="Close",g=h(),y=m("div"),x(s,"class","svelte-31jvjj"),x(a,"class","md-close svelte-31jvjj"),x(c,"class","svelte-31jvjj"),x(n,"class","md-content svelte-31jvjj"),x(t,"class",$=u("md-modal md-effect-12 "+(e[0]?"md-show":""))+" svelte-31jvjj"),x(t,"id","modal-12"),x(y,"class","md-overlay svelte-31jvjj")},m(o,u){p(o,t,u),d(t,n),d(n,s),d(n,r),d(n,c),X(i,c,null),d(c,l),d(c,a),p(o,g,u),p(o,y,u),b=!0,w||(k=[v(a,"click",e[1]),v(y,"click",e[1])],w=!0)},p(e,[n]){(!b||1&n&&$!==($=u("md-modal md-effect-12 "+(e[0]?"md-show":""))+" svelte-31jvjj"))&&x(t,"class",$)},i(e){b||(R(i.$$.fragment,e),b=!0)},o(e){W(i.$$.fragment,e),b=!1},d(e){e&&f(t),Y(i),e&&f(g),e&&f(y),w=!1,o(k)}}}function se(e,t,n){let{isVisible:o=!1}=t;const s=j();return e.$$set=e=>{"isVisible"in e&&n(0,o=e.isVisible)},[o,()=>s("close")]}class re extends ee{constructor(e){super(),Q(this,e,se,oe,r,{isVisible:0})}}const ce=e=>{var t;return null===(t=window.MathJax)||void 0===t?void 0:t.typeset(e?[e]:void 0)},ie=(e,t)=>{var n;e&&t&&(e.innerHTML=t,null===(n=window.MathJax)||void 0===n||n.typesetClear([e]))},le=Math.PI/180,ae=e=>e*le,ue=(e,t)=>t?e.radius:Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2)),de=e=>({x:e.radius*Math.cos(ae(e.degreeAngle)),y:e.radius*Math.sin(ae(e.degreeAngle))}),pe=e=>{return{radius:ue(e,!1),degreeAngle:(t=Math.atan2(e.y,e.x),t/le)};var t},fe=(e,t)=>({x:e*t.x,y:e*t.y}),me=(e,t)=>{if(!t)return"";if(!e)return n=t.x,o=t.y,`${n.toFixed(2)} \\(\\overrightarrow{e_x}\\) + ${o.toFixed(2)} \\(\\overrightarrow{e_y}\\)`;var n,o;const s=pe(t);return r=s.radius,c=s.degreeAngle,`${r.toFixed(2)} ∠ ${c.toFixed(2)}°`;var r,c},$e=[null,void 0],he=(...e)=>e.some((e=>$e.includes(e))),ge=(e,t,n=Number.EPSILON)=>Object.keys(e).reduce(((o,s)=>o&&((e,t,n=Number.EPSILON)=>Math.abs((e||0)-(t||0))<n)(e[s],t[s],n)),!0),ve=()=>{let e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)};function xe(t){let n,o,s,r,c,i,l,a,u,$,g,y;return{c(){n=m("link"),o=m("script"),r=m("script"),i=h(),l=m("h1"),a=m("span"),a.innerHTML='<a href="/" class="icon svelte-yk8da7"><i class="fas fa-subscript"></i></a>  \n\t\t<span>Add Vectors</span>',u=h(),$=m("button"),$.innerHTML='<i class="fas fa-info" aria-hidden="true"></i>',x(n,"rel","stylesheet"),x(n,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"),x(n,"integrity","sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="),x(n,"crossorigin","anonymous"),x(n,"referrer-policy","no-referrer"),o.src!==(s="https://polyfill.io/v3/polyfill.min.js?features=es6")&&x(o,"src","https://polyfill.io/v3/polyfill.min.js?features=es6"),x(r,"id","MathJax-script"),r.async=!0,r.src!==(c="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js")&&x(r,"src","https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"),x(a,"class","title svelte-yk8da7"),x($,"class","btn-info svelte-yk8da7"),x(l,"class","svelte-yk8da7")},m(e,s){d(document.head,n),d(document.head,o),d(document.head,r),p(e,i,s),p(e,l,s),d(l,a),d(l,u),d(l,$),g||(y=v($,"click",t[0]),g=!0)},p:e,i:e,o:e,d(e){f(n),f(o),f(r),e&&f(i),e&&f(l),g=!1,y()}}}function ye(e){ve(),window.addEventListener("resize",ve);const t=j();return[()=>t("showInfo")]}class be extends ee{constructor(e){super(),Q(this,e,ye,xe,r,{})}}function we(e){let t,n,o,s,r,c,l,$,g;const y=e[3].default,b=i(y,e,e[2],null);return{c(){t=m("label"),n=m("input"),o=h(),s=m("span"),r=h(),b&&b.c(),x(n,"type","checkbox"),x(n,"class","check-custom toggle-switch svelte-1g8f061"),x(n,"id","vector-representation"),x(s,"class","check-toggle svelte-1g8f061"),x(t,"for","vector-representation"),x(t,"class",c=u(`check-custom-container ${e[1]}`)+" svelte-1g8f061")},m(c,i){p(c,t,i),d(t,n),n.checked=e[0],d(t,o),d(t,s),d(t,r),b&&b.m(t,null),l=!0,$||(g=v(n,"change",e[4]),$=!0)},p(e,[o]){1&o&&(n.checked=e[0]),b&&b.p&&(!l||4&o)&&a(b,y,e,e[2],o,null,null),(!l||2&o&&c!==(c=u(`check-custom-container ${e[1]}`)+" svelte-1g8f061"))&&x(t,"class",c)},i(e){l||(R(b,e),l=!0)},o(e){W(b,e),l=!1},d(e){e&&f(t),b&&b.d(e),$=!1,g()}}}function ke(e,t,n){let{$$slots:o={},$$scope:s}=t,{checked:r=!1}=t,{extraClasses:c=""}=t;return e.$$set=e=>{"checked"in e&&n(0,r=e.checked),"extraClasses"in e&&n(1,c=e.extraClasses),"$$scope"in e&&n(2,s=e.$$scope)},[r,c,s,o,function(){r=this.checked,n(0,r)}]}class Te extends ee{constructor(e){super(),Q(this,e,ke,we,r,{checked:0,extraClasses:1})}}function Me(t){let n,o,s;return{c(){n=m("span"),n.textContent="(\\(x, y\\))",o=h(),s=m("span"),s.textContent="(\\(\\rho, \\alpha °\\))",x(n,"class","cartesian"),x(s,"class","polar")},m(e,t){p(e,n,t),p(e,o,t),p(e,s,t)},p:e,d(e){e&&f(n),e&&f(o),e&&f(s)}}}function Ce(e){let t,n,s,r,c,i,l,a,u,$,g,y,b,w,k,T;function M(t){e[4](t)}let C={extraClasses:"inline-block menu-item",$$slots:{default:[Me]},$$scope:{ctx:e}};return void 0!==e[0]&&(C.checked=e[0]),n=new Te({props:C}),_.push((()=>G(n,"checked",M))),{c(){t=m("div"),Z(n.$$.fragment),r=h(),c=m("ul"),i=m("li"),l=m("button"),l.innerHTML='<i class="fas fa-recycle" aria-hidden="true"></i><span class="svelte-14wxc8u">Reuse</span>',a=h(),u=m("li"),$=m("button"),$.innerHTML='<i class="far fa-trash-alt" aria-hidden="true"></i><span class="svelte-14wxc8u">Reset</span>',g=h(),y=m("li"),b=m("button"),b.innerHTML='<i class="fas fa-plus" aria-hidden="true"></i><span class="svelte-14wxc8u">New</span>',x(l,"class","menu-item svelte-14wxc8u"),x($,"class","menu-item svelte-14wxc8u"),x(b,"class","menu-item svelte-14wxc8u"),x(c,"class","reset flex"),x(t,"class","menu-items-container__inner svelte-14wxc8u")},m(o,s){p(o,t,s),X(n,t,null),d(t,r),d(t,c),d(c,i),d(i,l),d(c,a),d(c,u),d(u,$),d(c,g),d(c,y),d(y,b),w=!0,k||(T=[v(l,"click",e[1]),v($,"click",e[3]),v(b,"click",e[2])],k=!0)},p(e,[t]){const o={};128&t&&(o.$$scope={dirty:t,ctx:e}),!s&&1&t&&(s=!0,o.checked=e[0],z((()=>s=!1))),n.$set(o)},i(e){w||(R(n.$$.fragment,e),w=!0)},o(e){W(n.$$.fragment,e),w=!1},d(e){e&&f(t),Y(n),k=!1,o(T)}}}function je(e,t,n){let{usePolarForm:o=!1}=t;const s=j(),r=e=>s("selection",e);return e.$$set=e=>{"usePolarForm"in e&&n(0,o=e.usePolarForm)},[o,()=>r("new-session"),()=>r("new-operand"),()=>r("reset"),function(e){o=e,n(0,o)}]}class Pe extends ee{constructor(e){super(),Q(this,e,je,Ce,r,{usePolarForm:0})}}const _e=[];function Ae(t){let n;return{c(){n=m("span"),x(n,"id",t[3]),x(n,"class",t[0])},m(e,o){p(e,n,o),t[5](n)},p(e,[t]){1&t&&x(n,"class",e[0])},i:e,o:e,d(e){e&&f(n),t[5](null)}}}function Ee(t,n,o){let s,{extraClasses:i=""}=n;const l=function(t,n=e){let o;const s=[];function c(e){if(r(t,e)&&(t=e,o)){const e=!_e.length;for(let e=0;e<s.length;e+=1){const n=s[e];n[1](),_e.push(n,t)}if(e){for(let e=0;e<_e.length;e+=2)_e[e][0](_e[e+1]);_e.length=0}}}return{set:c,update:function(e){c(e(t))},subscribe:function(r,i=e){const l=[r,i];return s.push(l),1===s.length&&(o=n(c)||e),r(t),()=>{const e=s.indexOf(l);-1!==e&&s.splice(e,1),0===s.length&&(o(),o=null)}}}}(-1);c(t,l,(e=>o(6,s=e)));const a=`${(new Date).getTime()}-${l.update((e=>e+1)),s}`;let{mathjaxExpression:u=""}=n,d=null;var p;return M((()=>{ie(d,u),F().then((()=>ce(d)))})),p=()=>ie(d,u),T().$$.before_update.push(p),C((()=>ce())),t.$$set=e=>{"extraClasses"in e&&o(0,i=e.extraClasses),"mathjaxExpression"in e&&o(4,u=e.mathjaxExpression)},[i,d,l,a,u,function(e){_[e?"unshift":"push"]((()=>{d=e,o(1,d)}))}]}class Le extends ee{constructor(e){super(),Q(this,e,Ee,Ae,r,{extraClasses:0,mathjaxExpression:4})}}const Oe=e=>({}),Ie=e=>({}),Fe=e=>({}),Ve=e=>({}),ze=e=>({}),He=e=>({}),qe=e=>({}),De=e=>({});function Se(e){let t;const n=e[7].trueText,o=i(n,e,e[6],He),s=o||function(e){let t;return{c(){t=$("True")},m(e,n){p(e,t,n)},d(e){e&&f(t)}}}();return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,s){o&&o.p&&(!t||64&s)&&a(o,n,e,e[6],s,ze,He)},i(e){t||(R(s,e),t=!0)},o(e){W(s,e),t=!1},d(e){s&&s.d(e)}}}function Be(e){let t;const n=e[7].falseText,o=i(n,e,e[6],Ie),s=o||function(e){let t;return{c(){t=$("False")},m(e,n){p(e,t,n)},d(e){e&&f(t)}}}();return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,s){o&&o.p&&(!t||64&s)&&a(o,n,e,e[6],s,Oe,Ie)},i(e){t||(R(s,e),t=!0)},o(e){W(s,e),t=!1},d(e){s&&s.d(e)}}}function Ne(e){let t,n,s,r,c,l,g,y,b,w,k,T;const M=e[7].trueIcon,C=i(M,e,e[6],De),j=C||function(e){let t;return{c(){t=$("T")},m(e,n){p(e,t,n)},d(e){e&&f(t)}}}();let P=e[4].trueText&&Se(e);const _=e[7].falseIcon,A=i(_,e,e[6],Ve),E=A||function(e){let t;return{c(){t=$("F")},m(e,n){p(e,t,n)},d(e){e&&f(t)}}}();let L=e[4].falseText&&Be(e);return{c(){t=m("label"),n=m("input"),s=h(),r=m("span"),j&&j.c(),c=h(),P&&P.c(),l=h(),g=m("span"),E&&E.c(),y=h(),L&&L.c(),x(n,"type","checkbox"),x(n,"class","check-custom svelte-1ig6h47"),x(n,"id",`checkbox-${e[2]}`),x(r,"class","true-details svelte-1ig6h47"),x(g,"class","false-details svelte-1ig6h47"),x(t,"for",`checkbox-${e[2]}`),x(t,"class",b=u(`check-custom-container ${e[0]?"check-custom-container--true":""} ${e[1]}`)+" svelte-1ig6h47")},m(o,i){p(o,t,i),d(t,n),n.checked=e[0],d(t,s),d(t,r),j&&j.m(r,null),d(r,c),P&&P.m(r,null),d(t,l),d(t,g),E&&E.m(g,null),d(g,y),L&&L.m(g,null),w=!0,k||(T=[v(n,"change",e[8]),v(n,"input",e[9])],k=!0)},p(e,[o]){1&o&&(n.checked=e[0]),C&&C.p&&(!w||64&o)&&a(C,M,e,e[6],o,qe,De),e[4].trueText?P?(P.p(e,o),16&o&&R(P,1)):(P=Se(e),P.c(),R(P,1),P.m(r,null)):P&&(K(),W(P,1,1,(()=>{P=null})),U()),A&&A.p&&(!w||64&o)&&a(A,_,e,e[6],o,Fe,Ve),e[4].falseText?L?(L.p(e,o),16&o&&R(L,1)):(L=Be(e),L.c(),R(L,1),L.m(g,null)):L&&(K(),W(L,1,1,(()=>{L=null})),U()),(!w||3&o&&b!==(b=u(`check-custom-container ${e[0]?"check-custom-container--true":""} ${e[1]}`)+" svelte-1ig6h47"))&&x(t,"class",b)},i(e){w||(R(j,e),R(P),R(E,e),R(L),w=!0)},o(e){W(j,e),W(P),W(E,e),W(L),w=!1},d(e){e&&f(t),j&&j.d(e),P&&P.d(),E&&E.d(e),L&&L.d(),k=!1,o(T)}}}function Ke(e,t,n){let{$$slots:o={},$$scope:s}=t;const r=function(e){const t={};for(const n in e)t[n]=!0;return t}(o);let{checked:c=!1}=t,{extraClasses:i=""}=t,{id:l=0}=t;const a=`${(new Date).getTime()}-${l}`,u=j(),d=e=>u("change",e);return e.$$set=e=>{"checked"in e&&n(0,c=e.checked),"extraClasses"in e&&n(1,i=e.extraClasses),"id"in e&&n(5,l=e.id),"$$scope"in e&&n(6,s=e.$$scope)},[c,i,a,d,r,l,s,o,function(){c=this.checked,n(0,c)},e=>d(e.currentTarget.checked)]}class Ue extends ee{constructor(e){super(),Q(this,e,Ke,Ne,r,{checked:0,extraClasses:1,id:5})}}function Re(t){let n,s,r,c,i,l,a,u,g;return{c(){n=m("div"),s=m("input"),r=h(),c=m("span"),i=h(),l=m("label"),a=$(t[1]),x(s,"type","number"),s.required=!0,x(s,"id",t[3]),x(s,"placeholder",t[2]),x(s,"class","svelte-13bp3md"),x(c,"class","highlight svelte-13bp3md"),x(l,"for",t[3]),x(l,"class","svelte-13bp3md"),x(n,"class","input-group svelte-13bp3md")},m(e,o){p(e,n,o),d(n,s),b(s,t[0]),d(n,r),d(n,c),d(n,i),d(n,l),d(l,a),u||(g=[v(s,"input",t[6]),v(s,"input",t[4])],u=!0)},p(e,[t]){4&t&&x(s,"placeholder",e[2]),1&t&&y(s.value)!==e[0]&&b(s,e[0]),2&t&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(a,e[1])},i:e,o:e,d(e){e&&f(n),u=!1,o(g)}}}function We(e,t,n){let{id:o=""}=t;const s=`${(new Date).getTime()}-${o}`;let{label:r="My Input"}=t,{placeholder:c="My Input"}=t,{value:i=0}=t;const l=j();return e.$$set=e=>{"id"in e&&n(5,o=e.id),"label"in e&&n(1,r=e.label),"placeholder"in e&&n(2,c=e.placeholder),"value"in e&&n(0,i=e.value)},[i,r,c,s,e=>l("input",e),o,function(){i=y(this.value),n(0,i)}]}class Je extends ee{constructor(e){super(),Q(this,e,We,Re,r,{id:5,label:1,placeholder:2,value:0})}}function Ge(e){let t,n,o,s,r,c,i,l,a,u,$,g;function v(t){e[5](t)}let y={label:e[1].multiplier,placeholder:e[1].multiplier,id:`${e[2]}-${e[1].multiplier}`};function b(t){e[7](t)}void 0!==e[0].multiplier&&(y.value=e[0].multiplier),n=new Je({props:y}),_.push((()=>G(n,"value",v))),n.$on("input",e[6]);let w={label:e[1].component1,placeholder:e[1].component1,id:`${e[2]}-${e[1].component1}`};function k(t){e[9](t)}void 0!==e[0].component1&&(w.value=e[0].component1),r=new Je({props:w}),_.push((()=>G(r,"value",b))),r.$on("input",e[8]);let T={label:e[1].component2,placeholder:e[1].component2,id:`${e[2]}-${e[1].component2}`};return void 0!==e[0].component2&&(T.value=e[0].component2),u=new Je({props:T}),_.push((()=>G(u,"value",k))),u.$on("input",e[10]),{c(){t=m("div"),Z(n.$$.fragment),s=h(),Z(r.$$.fragment),i=h(),l=m("div"),a=h(),Z(u.$$.fragment),x(t,"class","vector-editor")},m(e,o){p(e,t,o),X(n,t,null),d(t,s),X(r,t,null),d(t,i),d(t,l),d(t,a),X(u,t,null),g=!0},p(e,[t]){const s={};2&t&&(s.label=e[1].multiplier),2&t&&(s.placeholder=e[1].multiplier),2&t&&(s.id=`${e[2]}-${e[1].multiplier}`),!o&&1&t&&(o=!0,s.value=e[0].multiplier,z((()=>o=!1))),n.$set(s);const i={};2&t&&(i.label=e[1].component1),2&t&&(i.placeholder=e[1].component1),2&t&&(i.id=`${e[2]}-${e[1].component1}`),!c&&1&t&&(c=!0,i.value=e[0].component1,z((()=>c=!1))),r.$set(i);const l={};2&t&&(l.label=e[1].component2),2&t&&(l.placeholder=e[1].component2),2&t&&(l.id=`${e[2]}-${e[1].component2}`),!$&&1&t&&($=!0,l.value=e[0].component2,z((()=>$=!1))),u.$set(l)},i(e){g||(R(n.$$.fragment,e),R(r.$$.fragment,e),R(u.$$.fragment,e),g=!0)},o(e){W(n.$$.fragment,e),W(r.$$.fragment,e),W(u.$$.fragment,e),g=!1},d(e){e&&f(t),Y(n),Y(r),Y(u)}}}function Ze(e,t,n){let{id:o=0}=t;const s=`${(new Date).getTime()}-${o}`;let{vector:r}=t,{labels:c}=t;const i=j(),l=(e,t)=>{const n=Object.keys(e).reduce(((e,n)=>t[n]?Object.assign(Object.assign({},e),{[n]:t[n]}):e),e);i("change",n)};return e.$$set=e=>{"id"in e&&n(4,o=e.id),"vector"in e&&n(0,r=e.vector),"labels"in e&&n(1,c=e.labels)},[r,c,s,l,o,function(t){e.$$.not_equal(r.multiplier,t)&&(r.multiplier=t,n(0,r))},e=>l(r,{multiplier:parseFloat(e.detail.target.value)}),function(t){e.$$.not_equal(r.component1,t)&&(r.component1=t,n(0,r))},e=>l(r,{component1:parseFloat(e.detail.target.value)}),function(t){e.$$.not_equal(r.component2,t)&&(r.component2=t,n(0,r))},e=>l(r,{component2:parseFloat(e.detail.target.value)})]}class Xe extends ee{constructor(e){super(),Q(this,e,Ze,Ge,r,{id:4,vector:0,labels:1})}}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */const Ye=(e,t,n=1,o=!0)=>({isAddedToPrevious:o,scalarMultiplier:n,xComponent:e||0,yComponent:t||0}),Qe=e=>{if(!he(e))return fe(e.scalarMultiplier,{x:e.xComponent,y:e.yComponent})},et=(e,t)=>{return n=e,o=fe(t.isAddedToPrevious?1:-1,Qe(t)),{x:n.x+o.x,y:n.y+o.y};var n,o},tt=(e,t,n,o)=>{const s={multiplier:"multiplier",component1:"x-component",component2:"y-component"},r={multiplier:"multiplier",component1:"polar-length",component2:"polar-angle (degrees)"};return{getLabels:()=>e?r:s,getComponent:n=>{if(he(n))return;const o=t(n),{x:s,y:r}={x:o.xComponent,y:o.yComponent},{radius:c,degreeAngle:i}=e?pe({x:s,y:r}):{radius:null,degreeAngle:null};return{multiplier:o.scalarMultiplier,component1:e?c:s,component2:e?i:r}},setComponent:(o,s,r)=>{if(he(o,s,r))return;const{x:c,y:i}=e?de({radius:o.component1,degreeAngle:o.component2}):{x:o.component1,y:o.component2},l=t(r),{isAddedToPrevious:a}=l,u=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(n[o[s]]=e[o[s]])}return n}(l,["isAddedToPrevious"]);ge({xComponent:c,yComponent:i,scalarMultiplier:o.multiplier},u,.001)&&a===s||n(Ye(c,i,o.multiplier,s),r)},deleteComponent:e=>he(e)||o(e),toUnitVector:e=>{if(he(e))return;const o=t(e),{x:s,y:r}=(c={x:o.xComponent,y:o.yComponent},(i=!1)?{radius:1,degreeAngle:c.degreeAngle}:{x:c.x/ue(c,i),y:c.y/ue(c,i)});var c,i;n(Ye(s,r,o.scalarMultiplier,o.isAddedToPrevious),e)}}};function nt(e){let t;return{c(){t=m("i"),x(t,"slot","falseIcon"),x(t,"class","fas fa-plus"),x(t,"aria-hidden","true")},m(e,n){p(e,t,n)},d(e){e&&f(t)}}}function ot(e){let t;return{c(){t=m("i"),x(t,"slot","trueIcon"),x(t,"class","fas fa-minus"),x(t,"aria-hidden","true")},m(e,n){p(e,t,n)},d(e){e&&f(t)}}}function st(e){let t,n,s,r,c,i,l,a,$,g,y,b,w,k,T,M,C,j,P,_,A,E,L,O,I,F,V;return s=new Ue({props:{extraClasses:"sign-checkbox",checked:!e[1],$$slots:{trueIcon:[ot],falseIcon:[nt]},$$scope:{ctx:e}}}),s.$on("change",e[15]),i=new Le({props:{mathjaxExpression:`<span class="vector-name ${e[4]?"":"muted-text"}">\\(\\overrightarrow{V_{${e[0]}}}\\) = </span>`+e[6]}}),j=new Xe({props:{labels:e[3],vector:e[2]}}),j.$on("change",e[17]),{c(){t=m("li"),n=m("div"),Z(s.$$.fragment),r=h(),c=m("div"),Z(i.$$.fragment),l=h(),a=m("input"),$=h(),g=m("label"),y=m("span"),y.innerHTML='<i class="fas fa-pen" aria-hidden="true"></i>',b=h(),w=m("span"),w.innerHTML='<i class="fas fa-check" aria-hidden="true"></i>',k=h(),T=m("div"),M=h(),C=m("div"),Z(j.$$.fragment),P=h(),_=m("div"),A=m("span"),A.innerHTML='<i class="fas fa-trash" aria-hidden="true"></i>',E=h(),L=m("span"),L.innerHTML='<i class="fas fa-pen" aria-hidden="true"></i>',x(n,"class","math-sign svelte-6z54pw"),x(c,"class","math-expression svelte-6z54pw"),x(a,"type","checkbox"),x(a,"class","edit-mode svelte-6z54pw"),x(a,"id",`edit-mode-${e[7]}`),x(y,"class","edit svelte-6z54pw"),x(w,"class","done svelte-6z54pw"),x(g,"for",`edit-mode-${e[7]}`),x(g,"class","edit-controls svelte-6z54pw"),x(T,"class","collapsable svelte-6z54pw"),x(C,"class","math-components collapsable svelte-6z54pw"),x(A,"class","edit svelte-6z54pw"),x(L,"class","edit svelte-6z54pw"),x(_,"class","other-controls collapsable svelte-6z54pw"),x(t,"class",O=u("operand-container "+(e[4]?"operand-container--opened":""))+" svelte-6z54pw")},m(o,u){p(o,t,u),d(t,n),X(s,n,null),d(t,r),d(t,c),X(i,c,null),d(t,l),d(t,a),a.checked=e[4],d(t,$),d(t,g),d(g,y),d(g,b),d(g,w),d(t,k),d(t,T),d(t,M),d(t,C),X(j,C,null),d(t,P),d(t,_),d(_,A),d(_,E),d(_,L),e[18](t),I=!0,F||(V=[v(a,"change",e[16]),v(A,"click",e[8]),v(L,"click",e[9])],F=!0)},p(e,[n]){const o={};2&n&&(o.checked=!e[1]),524288&n&&(o.$$scope={dirty:n,ctx:e}),s.$set(o);const r={};81&n&&(r.mathjaxExpression=`<span class="vector-name ${e[4]?"":"muted-text"}">\\(\\overrightarrow{V_{${e[0]}}}\\) = </span>`+e[6]),i.$set(r),16&n&&(a.checked=e[4]);const c={};8&n&&(c.labels=e[3]),4&n&&(c.vector=e[2]),j.$set(c),(!I||16&n&&O!==(O=u("operand-container "+(e[4]?"operand-container--opened":""))+" svelte-6z54pw"))&&x(t,"class",O)},i(e){I||(R(s.$$.fragment,e),R(i.$$.fragment,e),R(j.$$.fragment,e),I=!0)},o(e){W(s.$$.fragment,e),W(i.$$.fragment,e),W(j.$$.fragment,e),I=!1},d(n){n&&f(t),Y(s),Y(i),Y(j),e[18](null),F=!1,o(V)}}}function rt(e,t,n){let o,{id:s=0}=t;const r=`${(new Date).getTime()}-${s}`;let c,i,l,a,{operand:u=null}=t,{vectorToTex:d=null}=t,{editorProxy:p=null}=t,{index:f=0}=t;let m,$=!1;C((()=>$&&m&&m.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})));return e.$$set=e=>{"id"in e&&n(0,s=e.id),"operand"in e&&n(10,u=e.operand),"vectorToTex"in e&&n(11,d=e.vectorToTex),"editorProxy"in e&&n(12,p=e.editorProxy),"index"in e&&n(13,f=e.index)},e.$$.update=()=>{1024&e.$$.dirty&&n(1,c=u.isAddedToPrevious),3072&e.$$.dirty&&n(6,o=d(Qe(u))),4096&e.$$.dirty&&n(3,i=p.getLabels()),12288&e.$$.dirty&&n(2,l=p.getComponent(f)),28678&e.$$.dirty&&(clearTimeout(a),n(14,a=setTimeout((()=>p.setComponent(l,c,f)),200)))},[s,c,l,i,$,m,o,r,()=>p.deleteComponent(f),()=>p.toUnitVector(f),u,d,p,f,a,e=>n(1,c=!e.detail),function(){$=this.checked,n(4,$)},e=>n(2,l=e.detail),function(e){_[e?"unshift":"push"]((()=>{m=e,n(5,m)}))}]}class ct extends ee{constructor(e){super(),Q(this,e,rt,st,r,{id:0,operand:10,vectorToTex:11,editorProxy:12,index:13})}}function it(e,t,n){const o=e.slice();return o[7]=t[n],o[8]=t,o[9]=n,o}function lt(t){let n,o,s;return{c(){n=m("div"),n.innerHTML='<span class="empty-message svelte-ya548k">Oups! There doesn&#39;t seem to be anything to add yet.</span>     \n        <span class="empty-icon svelte-ya548k"><i class="fas fa-plus" aria-hidden="true"></i></span>  \n        <span class="empty-message svelte-ya548k">Click here to get started!</span>',x(n,"class","empty-state svelte-ya548k")},m(e,r){p(e,n,r),o||(s=v(n,"click",t[3]),o=!0)},p:e,i:e,o:e,d(e){e&&f(n),o=!1,s()}}}function at(e){let t,n,o=[],s=new Map,r=e[0];const c=e=>e[9];for(let t=0;t<r.length;t+=1){let n=it(e,r,t),i=c(n);s.set(i,o[t]=ut(i,n))}return{c(){t=m("ul");for(let e=0;e<o.length;e+=1)o[e].c();x(t,"class","operands-container reset")},m(e,s){p(e,t,s);for(let e=0;e<o.length;e+=1)o[e].m(t,null);n=!0},p(e,n){7&n&&(r=e[0],K(),o=function(e,t,n,o,s,r,c,i,l,a,u,d){let p=e.length,f=r.length,m=p;const $={};for(;m--;)$[e[m].key]=m;const h=[],g=new Map,v=new Map;for(m=f;m--;){const e=d(s,r,m),i=n(e);let l=c.get(i);l?o&&l.p(e,t):(l=a(i,e),l.c()),g.set(i,h[m]=l),i in $&&v.set(i,Math.abs(m-$[i]))}const x=new Set,y=new Set;function b(e){R(e,1),e.m(i,u),c.set(e.key,e),u=e.first,f--}for(;p&&f;){const t=h[f-1],n=e[p-1],o=t.key,s=n.key;t===n?(u=t.first,p--,f--):g.has(s)?!c.has(o)||x.has(o)?b(t):y.has(s)?p--:v.get(o)>v.get(s)?(y.add(o),b(t)):(x.add(s),p--):(l(n,c),p--)}for(;p--;){const t=e[p];g.has(t.key)||l(t,c)}for(;f;)b(h[f-1]);return h}(o,n,c,1,e,r,s,t,J,ut,null,it),U())},i(e){if(!n){for(let e=0;e<r.length;e+=1)R(o[e]);n=!0}},o(e){for(let e=0;e<o.length;e+=1)W(o[e]);n=!1},d(e){e&&f(t);for(let e=0;e<o.length;e+=1)o[e].d()}}}function ut(e,t){let n,o,s,r,c;function i(e){t[4](e,t[7],t[8],t[9])}function l(e){t[5](e)}let a={id:t[9]+1,index:t[9],vectorToTex:t[2]};return void 0!==t[7]&&(a.operand=t[7]),void 0!==t[1]&&(a.editorProxy=t[1]),o=new ct({props:a}),_.push((()=>G(o,"operand",i))),_.push((()=>G(o,"editorProxy",l))),{key:e,first:null,c(){n=g(),Z(o.$$.fragment),this.first=n},m(e,t){p(e,n,t),X(o,e,t),c=!0},p(e,n){t=e;const c={};1&n&&(c.id=t[9]+1),1&n&&(c.index=t[9]),4&n&&(c.vectorToTex=t[2]),!s&&1&n&&(s=!0,c.operand=t[7],z((()=>s=!1))),!r&&2&n&&(r=!0,c.editorProxy=t[1],z((()=>r=!1))),o.$set(c)},i(e){c||(R(o.$$.fragment,e),c=!0)},o(e){W(o.$$.fragment,e),c=!1},d(e){e&&f(n),Y(o,e)}}}function dt(e){let t,n,o,s;const r=[at,lt],c=[];function i(e,t){return e[0].length>0?0:1}return t=i(e),n=c[t]=r[t](e),{c(){n.c(),o=g()},m(e,n){c[t].m(e,n),p(e,o,n),s=!0},p(e,[s]){let l=t;t=i(e),t===l?c[t].p(e,s):(K(),W(c[l],1,1,(()=>{c[l]=null})),U(),n=c[t],n?n.p(e,s):(n=c[t]=r[t](e),n.c()),R(n,1),n.m(o.parentNode,o))},i(e){s||(R(n),s=!0)},o(e){W(n),s=!1},d(e){c[t].d(e),e&&f(o)}}}function pt(e,t,n){let{data:o=[]}=t,{editorProxy:s}=t,{vectorToTex:r}=t;const c=j();return e.$$set=e=>{"data"in e&&n(0,o=e.data),"editorProxy"in e&&n(1,s=e.editorProxy),"vectorToTex"in e&&n(2,r=e.vectorToTex)},[o,s,r,()=>c("newOperand"),function(e,t,s,r){s[r]=e,n(0,o)},function(e){s=e,n(1,s)}]}class ft extends ee{constructor(e){super(),Q(this,e,pt,dt,r,{data:0,editorProxy:1,vectorToTex:2})}}const mt=e=>({}),$t=e=>({});function ht(e){let t,n,o,s;const r=e[3].canvas,c=i(r,e,e[2],$t);return o=new Le({props:{mathjaxExpression:"\\(\\overrightarrow{R}\\) = \\(\\sum_{i}\\vec{V_i}\\) = "+e[1](e[0])}}),{c(){c&&c.c(),t=h(),n=m("div"),Z(o.$$.fragment),x(n,"id","resultant"),x(n,"class","resultant svelte-1rnl1r7")},m(e,r){c&&c.m(e,r),p(e,t,r),p(e,n,r),X(o,n,null),s=!0},p(e,[t]){c&&c.p&&(!s||4&t)&&a(c,r,e,e[2],t,mt,$t);const n={};3&t&&(n.mathjaxExpression="\\(\\overrightarrow{R}\\) = \\(\\sum_{i}\\vec{V_i}\\) = "+e[1](e[0])),o.$set(n)},i(e){s||(R(c,e),R(o.$$.fragment,e),s=!0)},o(e){W(c,e),W(o.$$.fragment,e),s=!1},d(e){c&&c.d(e),e&&f(t),e&&f(n),Y(o)}}}function gt(e,t,n){let{$$slots:o={},$$scope:s}=t,{resultant:r={x:1.25,y:2.35}}=t,{vectorToTex:c=null}=t;return e.$$set=e=>{"resultant"in e&&n(0,r=e.resultant),"vectorToTex"in e&&n(1,c=e.vectorToTex),"$$scope"in e&&n(2,s=e.$$scope)},[r,c,s,o]}class vt extends ee{constructor(e){super(),Q(this,e,gt,ht,r,{resultant:0,vectorToTex:1})}}const xt="#000",yt=e=>e.toFixed(2);function bt({node:e,context:t,xCenter:n,yCenter:o}){e&&function(e,t,n,o,s){if(!e||!o||!s)return;t||(t=o/2);n||(n=s/2);e.lineWidth=.2,e.setLineDash([5,6]),e.strokeStyle=xt,e.beginPath(),e.moveTo(0,n),e.lineTo(o,n),e.stroke(),e.beginPath(),e.moveTo(t,0),e.lineTo(t,s),e.stroke(),e.setLineDash([5,0])}(t,n,o,e.width,e.height)}function wt(e,t,n,o=!1,s){0==t&&0==n||(function(e,t,n,o,s){if(e&&t&&n&&o&&s&&(o!=t||s!=n)){var r=o-t,c=s-n,i=Math.atan2(c,r);e.moveTo(t,n),e.lineTo(o,s),e.lineTo(o-10*Math.cos(i-Math.PI/6),s-10*Math.sin(i-Math.PI/6)),e.moveTo(o,s),e.lineTo(o-10*Math.cos(i+Math.PI/6),s-10*Math.sin(i+Math.PI/6))}}(e.context,e.xCenter,e.yCenter,e.xCenter+e.xUnit*t,e.yCenter-e.yUnit*n),o&&function(e,t,n,o,s=!0,r=!0){if(!e||!t)return;n||(n=0),o||(o=0),e.font="10px Arial",e.textAlign="center",e.textAlign=s?"right":"left",e.fillText(t,n+12*(s?-1:1),o-12*(r?-1:1))}(e.context,s||`(${yt(t)}, ${yt(n)})`,e.xCenter+e.xUnit*t,e.yCenter-e.yUnit*n,t>0,n<0))}function kt(e,t,n,o,s=!1,r){if(!e)return wt(t,n,o,s,r);const c=pe({x:n,y:o});return function(e,t,n,o=!1){const s=de({radius:t,degreeAngle:n});wt(e,s.x,s.y,o,`${yt(t)} ∠ ${yt(n)}°`)}(t,c.radius,c.degreeAngle,s)}function Tt(e,t){const n=kt.bind(null,e);return(e,o="#000",s=1)=>{t.context.lineWidth=s||1,t.context.strokeStyle=o,t.context.beginPath(),e.forEach((e=>n(t,e.x,e.y,!0))),t.context.stroke()}}function Mt(t){let n,o;return{c(){n=m("canvas"),o=$("Your browser does not support the canvas element."),x(n,"id","canvas"),x(n,"width",t[1]),x(n,"height",t[2]),x(n,"class","canvas svelte-i9e9tc")},m(e,s){p(e,n,s),d(n,o),t[7](n)},p(e,[t]){2&t&&x(n,"width",e[1]),4&t&&x(n,"height",e[2])},i:e,o:e,d(e){e&&f(n),t[7](null)}}}function Ct(e,t,n){let{vectors:o}=t,{resultant:s}=t,{getBulkDrawer:r}=t,c=null,i=500,l=500,a=null;const u=e=>{const t=Math.min(e.clientHeight,e.clientWidth),r=((e,t)=>t?.4*(e||300)/t.reduce(((e,t)=>Math.max(e,Math.abs(t.x),Math.abs(t.y))),1):10)(t,[...o,s]);n(6,c=((e,t,n)=>({node:e,context:e.getContext("2d"),xCenter:n/2,yCenter:n/2,xUnit:t,yUnit:t}))(e,r,t)),n(1,i=t),n(2,l=t)};return M((()=>u(a))),window.addEventListener("resize",(()=>u(a))),e.$$set=e=>{"vectors"in e&&n(3,o=e.vectors),"resultant"in e&&n(4,s=e.resultant),"getBulkDrawer"in e&&n(5,r=e.getBulkDrawer)},e.$$.update=()=>{105&e.$$.dirty&&c&&o&&r&&u(a),104&e.$$.dirty&&c&&o&&r&&F().then((()=>{!function({node:e,context:t}){t&&e&&function(e,t,n){e&&e.clearRect(0,0,t,n)}(t,e.width,e.height)}(c),bt(c)})),120&e.$$.dirty&&c&&o&&F().then((()=>{r(c)(o,"#555"),r(c)([s],"#00617F",3)}))},[a,i,l,o,s,r,c,function(e){_[e?"unshift":"push"]((()=>{a=e,n(0,a)}))}]}class jt extends ee{constructor(e){super(),Q(this,e,Ct,Mt,r,{vectors:3,resultant:4,getBulkDrawer:5})}}function Pt(e){let t,n;return t=new jt({props:{slot:"canvas",vectors:e[5],resultant:e[2],getBulkDrawer:e[6]}}),{c(){Z(t.$$.fragment)},m(e,o){X(t,e,o),n=!0},p(e,n){const o={};32&n&&(o.vectors=e[5]),4&n&&(o.resultant=e[2]),64&n&&(o.getBulkDrawer=e[6]),t.$set(o)},i(e){n||(R(t.$$.fragment,e),n=!0)},o(e){W(t.$$.fragment,e),n=!1},d(e){Y(t,e)}}}function _t(e){let t,n,o,s,r,c,i,l,a,u,$,g,v,y,b,w,k,T,M,C,j;function P(t){e[12](t)}n=new be({}),n.$on("showInfo",e[9]),c=new vt({props:{vectorToTex:e[7],resultant:e[2],$$slots:{canvas:[Pt]},$$scope:{ctx:e}}});let A={vectorToTex:e[7],data:e[0]};function E(t){e[15](t)}void 0!==e[8]&&(A.editorProxy=e[8]),a=new ft({props:A}),_.push((()=>G(a,"editorProxy",P))),a.$on("newOperand",e[13]);let L={};function O(t){e[17](t)}void 0!==e[1]&&(L.usePolarForm=e[1]),v=new Pe({props:L}),_.push((()=>G(v,"usePolarForm",E))),v.$on("selection",e[16]),k=new ne({});let I={};return void 0!==e[3]&&(I.isVisible=e[3]),M=new re({props:I}),_.push((()=>G(M,"isVisible",O))),M.$on("close",e[10]),{c(){t=m("header"),Z(n.$$.fragment),o=h(),s=m("main"),r=m("div"),Z(c.$$.fragment),i=h(),l=m("div"),Z(a.$$.fragment),$=h(),g=m("div"),Z(v.$$.fragment),b=h(),w=m("footer"),Z(k.$$.fragment),T=h(),Z(M.$$.fragment),x(t,"class","svelte-10g63q"),x(r,"id","results-container"),x(r,"class","debug svelte-10g63q"),x(l,"id","inputs-container"),x(l,"class","svelte-10g63q"),x(g,"id","menu-items-container"),x(g,"class","svelte-10g63q"),x(s,"class","svelte-10g63q"),x(w,"class","footer svelte-10g63q")},m(u,f){p(u,t,f),X(n,t,null),p(u,o,f),p(u,s,f),d(s,r),X(c,r,null),d(s,i),d(s,l),X(a,l,null),e[14](l),d(s,$),d(s,g),X(v,g,null),p(u,b,f),p(u,w,f),X(k,w,null),p(u,T,f),X(M,u,f),j=!0},p(e,[t]){const n={};128&t&&(n.vectorToTex=e[7]),4&t&&(n.resultant=e[2]),262244&t&&(n.$$scope={dirty:t,ctx:e}),c.$set(n);const o={};128&t&&(o.vectorToTex=e[7]),1&t&&(o.data=e[0]),!u&&256&t&&(u=!0,o.editorProxy=e[8],z((()=>u=!1))),a.$set(o);const s={};!y&&2&t&&(y=!0,s.usePolarForm=e[1],z((()=>y=!1))),v.$set(s);const r={};!C&&8&t&&(C=!0,r.isVisible=e[3],z((()=>C=!1))),M.$set(r)},i(e){j||(R(n.$$.fragment,e),R(c.$$.fragment,e),R(a.$$.fragment,e),R(v.$$.fragment,e),R(k.$$.fragment,e),R(M.$$.fragment,e),j=!0)},o(e){W(n.$$.fragment,e),W(c.$$.fragment,e),W(a.$$.fragment,e),W(v.$$.fragment,e),W(k.$$.fragment,e),W(M.$$.fragment,e),j=!1},d(r){r&&f(t),Y(n),r&&f(o),r&&f(s),Y(c),Y(a),e[14](null),Y(v),r&&f(b),r&&f(w),Y(k),r&&f(T),Y(M,r)}}}function At(e,t,n){let o,s,r,c,i=[],l={x:0,y:0},a=!1;let u=!1,d=null;const p=e=>"reset"==e?(n(0,i=[]),void n(2,l={x:0,y:0})):"new-session"==e?(n(0,i=[Ye(l.x,l.y)]),void n(2,l={x:0,y:0})):"new-operand"==e?(n(0,i=[...i,Ye()]),n(2,l={x:0,y:0}),void F().then((()=>{return(e=d).scrollTo(0,e.scrollHeight);var e}))):void 0;return e.$$.update=()=>{3&e.$$.dirty&&n(8,c=tt(u,(e=>i[e]),((e,t)=>n(0,i=i.map(((n,o)=>o!==t?n:e)))),(e=>n(0,i=i.filter(((t,n)=>n!==e)))))),1&e.$$.dirty&&n(5,o=i.map(Qe)),1&e.$$.dirty&&n(2,l=i.reduce(et,{x:0,y:0})),2&e.$$.dirty&&n(6,s=Tt.bind(null,u)),2&e.$$.dirty&&n(7,r=me.bind(null,u))},[i,u,l,a,d,o,s,r,c,()=>n(3,a=!0),()=>n(3,a=!1),p,function(e){c=e,n(8,c),n(1,u),n(0,i)},()=>p("new-operand"),function(e){_[e?"unshift":"push"]((()=>{d=e,n(4,d)}))},function(e){u=e,n(1,u)},e=>p(e.detail),function(e){a=e,n(3,a)}]}return new class extends ee{constructor(e){super(),Q(this,e,At,_t,r,{})}}({target:document.body,props:null})}();
//# sourceMappingURL=bundle.js.map
