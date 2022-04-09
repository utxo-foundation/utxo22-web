import{S as ge,i as be,s as ke,e as p,c as m,a as g,d as h,b as _,g as O,q as V,w as Q,k as T,t as z,x as U,m as j,h as F,y as W,F as d,E as K,o as w,B as X,n as Y,p as Z,G as x,K as Ee,H as oe,l as ce}from"./index-05c131b6.js";import{A as me}from"./Avatar-759d1628.js";import{E as De}from"./EventTypeLabel-a320bc18.js";import{u as fe,b as Ie}from"./stores-5a24e4f1.js";function ue(i,e,n){const s=i.slice();return s[8]=e[n],s}function de(i,e,n){const s=i.slice();return s[11]=e[n],s}function he(i,e,n){const s=i.slice();return s[11]=e[n],s}function Ve(i){let e,n,s=i[2](i[1].speakers),t=[];for(let a=0;a<s.length;a+=1)t[a]=ve(he(i,s,a));const c=a=>w(t[a],1,1,()=>{t[a]=null});return{c(){e=p("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=m(a,"DIV",{class:!0});var r=g(e);for(let l=0;l<t.length;l+=1)t[l].l(r);r.forEach(h),this.h()},h(){_(e,"class","mt-1 mb-2 flex flex-wrap gap-2")},m(a,r){O(a,e,r);for(let l=0;l<t.length;l+=1)t[l].m(e,null);n=!0},p(a,r){if(r&6){s=a[2](a[1].speakers);let l;for(l=0;l<s.length;l+=1){const o=he(a,s,l);t[l]?(t[l].p(o,r),V(t[l],1)):(t[l]=ve(o),t[l].c(),V(t[l],1),t[l].m(e,null))}for(Y(),l=s.length;l<t.length;l+=1)c(l);Z()}},i(a){if(!n){for(let r=0;r<s.length;r+=1)V(t[r]);n=!0}},o(a){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)w(t[r]);n=!1},d(a){a&&h(e),x(t,a)}}}function ve(i){let e,n,s,t,c,a=i[11].name+"",r,l,o,v;return n=new me({props:{speaker:i[11],size:"extra-small"}}),{c(){e=p("div"),Q(n.$$.fragment),s=T(),t=p("div"),c=p("a"),r=z(a),o=T(),this.h()},l(u){e=m(u,"DIV",{class:!0});var f=g(e);U(n.$$.fragment,f),s=j(f),t=m(f,"DIV",{class:!0});var I=g(t);c=m(I,"A",{href:!0});var k=g(c);r=F(k,a),k.forEach(h),I.forEach(h),o=j(f),f.forEach(h),this.h()},h(){_(c,"href",l="/lide?id="+i[11].id),_(t,"class","m-auto"),_(e,"class","flex gap-1.5")},m(u,f){O(u,e,f),W(n,e,null),d(e,s),d(e,t),d(t,c),d(c,r),d(e,o),v=!0},p:K,i(u){v||(V(n.$$.fragment,u),v=!0)},o(u){w(n.$$.fragment,u),v=!1},d(u){u&&h(e),X(n)}}}function $e(i){let e,n,s,t=i[4](i[1]),c=[];for(let r=0;r<t.length;r+=1)c[r]=pe(ue(i,t,r));const a=r=>w(c[r],1,1,()=>{c[r]=null});return{c(){e=p("div"),n=p("div");for(let r=0;r<c.length;r+=1)c[r].c();this.h()},l(r){e=m(r,"DIV",{class:!0});var l=g(e);n=m(l,"DIV",{class:!0,cellpadding:!0});var o=g(n);for(let v=0;v<c.length;v+=1)c[v].l(o);o.forEach(h),l.forEach(h),this.h()},h(){_(n,"class","flex flex-wrap gap-2"),_(n,"cellpadding","5"),_(e,"class","mt-4 w-auto mb-2")},m(r,l){O(r,e,l),d(e,n);for(let o=0;o<c.length;o+=1)c[o].m(n,null);s=!0},p(r,l){if(l&22){t=r[4](r[1]);let o;for(o=0;o<t.length;o+=1){const v=ue(r,t,o);c[o]?(c[o].p(v,l),V(c[o],1)):(c[o]=pe(v),c[o].c(),V(c[o],1),c[o].m(n,null))}for(Y(),o=t.length;o<c.length;o+=1)a(o);Z()}},i(r){if(!s){for(let l=0;l<t.length;l+=1)V(c[l]);s=!0}},o(r){c=c.filter(Boolean);for(let l=0;l<c.length;l+=1)w(c[l]);s=!1},d(r){r&&h(e),x(c,r)}}}function we(i){let e,n,s=i[2](i[8].speakers),t=[];for(let a=0;a<s.length;a+=1)t[a]=_e(de(i,s,a));const c=a=>w(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=ce()},l(a){for(let r=0;r<t.length;r+=1)t[r].l(a);e=ce()},m(a,r){for(let l=0;l<t.length;l+=1)t[l].m(a,r);O(a,e,r),n=!0},p(a,r){if(r&22){s=a[2](a[8].speakers);let l;for(l=0;l<s.length;l+=1){const o=de(a,s,l);t[l]?(t[l].p(o,r),V(t[l],1)):(t[l]=_e(o),t[l].c(),V(t[l],1),t[l].m(e.parentNode,e))}for(Y(),l=s.length;l<t.length;l+=1)c(l);Z()}},i(a){if(!n){for(let r=0;r<s.length;r+=1)V(t[r]);n=!0}},o(a){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)w(t[r]);n=!1},d(a){x(t,a),a&&h(e)}}}function ye(i){let e,n;return{c(){e=p("div"),n=z("TBA")},l(s){e=m(s,"DIV",{});var t=g(e);n=F(t,"TBA"),t.forEach(h)},m(s,t){O(s,e,t),d(e,n)},p:K,i:K,o:K,d(s){s&&h(e)}}}function _e(i){let e,n,s,t,c=i[11].name+"",a,r,l;return n=new me({props:{speaker:i[11],size:"micro"}}),{c(){e=p("div"),Q(n.$$.fragment),s=p("div"),t=p("a"),a=z(c),this.h()},l(o){e=m(o,"DIV",{class:!0});var v=g(e);U(n.$$.fragment,v),s=m(v,"DIV",{});var u=g(s);t=m(u,"A",{href:!0});var f=g(t);a=F(f,c),f.forEach(h),u.forEach(h),v.forEach(h),this.h()},h(){_(t,"href",r="/lide?id="+i[11].id),_(e,"class","flex gap-1")},m(o,v){O(o,e,v),W(n,e,null),d(e,s),d(s,t),d(t,a),l=!0},p:K,i(o){l||(V(n.$$.fragment,o),l=!0)},o(o){w(n.$$.fragment,o),l=!1},d(o){o&&h(e),X(n)}}}function pe(i){let e,n,s,t=i[8].name+"",c,a,r,l,o,v,u,f;const I=[ye,we],k=[];function q(b,$){return b[8].speakers.length===0?0:1}return o=q(i),v=k[o]=I[o](i),{c(){e=p("div"),n=p("div"),s=p("a"),c=z(t),r=T(),l=p("div"),v.c(),u=T(),this.h()},l(b){e=m(b,"DIV",{class:!0});var $=g(e);n=m($,"DIV",{class:!0});var S=g(n);s=m(S,"A",{href:!0});var C=g(s);c=F(C,t),C.forEach(h),S.forEach(h),r=j($),l=m($,"DIV",{class:!0});var B=g(l);v.l(B),B.forEach(h),u=j($),$.forEach(h),this.h()},h(){_(s,"href",a="/udalosti?id="+i[8].id),_(n,"class","font-bold"),_(l,"class","mt-1"),_(e,"class","border rounded py-1.5 px-2.5 bg-gray-100 text-sm")},m(b,$){O(b,e,$),d(e,n),d(n,s),d(s,c),d(e,r),d(e,l),k[o].m(l,null),d(e,u),f=!0},p(b,$){v.p(b,$)},i(b){f||(V(v),f=!0)},o(b){w(v),f=!1},d(b){b&&h(e),k[o].d()}}}function Ae(i){let e,n,s,t,c,a,r,l=i[1].name+"",o,v,u,f,I,k,q,b,$=i[3](i[1].track)+"",S,C,B,ee=i[1].duration+"",M,N,P,te=i[4](i[1]).length>0,L,G,R,le,y=i[1].speakers&&i[1].speakers.length>0&&Ve(i);k=new De({props:{event:i[1]}});let A=te&&$e(i);return{c(){e=p("div"),n=p("div"),s=p("i"),c=T(),a=p("div"),r=p("a"),o=z(l),v=T(),y&&y.c(),u=T(),f=p("div"),I=p("div"),Q(k.$$.fragment),q=T(),b=p("div"),S=z($),C=T(),B=p("div"),M=z(ee),N=z("m"),P=T(),A&&A.c(),this.h()},l(E){e=m(E,"DIV",{class:!0});var D=g(e);n=m(D,"DIV",{class:!0});var re=g(n);s=m(re,"I",{class:!0,"utxo-event-id":!0}),g(s).forEach(h),re.forEach(h),c=j(D),a=m(D,"DIV",{class:!0});var ae=g(a);r=m(ae,"A",{href:!0});var se=g(r);o=F(se,l),se.forEach(h),ae.forEach(h),v=j(D),y&&y.l(D),u=j(D),f=m(D,"DIV",{class:!0});var H=g(f);I=m(H,"DIV",{});var ne=g(I);U(k.$$.fragment,ne),ne.forEach(h),q=j(H),b=m(H,"DIV",{class:!0});var ie=g(b);S=F(ie,$),ie.forEach(h),C=j(H),B=m(H,"DIV",{class:!0});var J=g(B);M=F(J,ee),N=F(J,"m"),J.forEach(h),H.forEach(h),P=j(D),A&&A.l(D),D.forEach(h),this.h()},h(){_(s,"class",t="fa-star "+(i[0].favoriteEvents.includes(i[1].id)?"fa-solid":"fa-regular")+" cursor-pointer"),_(s,"utxo-event-id",i[1].id),_(n,"class","float-right"),_(r,"href","/udalosti?id="+i[1].id),_(a,"class","text-lg font-semibold"),_(b,"class","text-sm my-auto"),_(B,"class","text-xs my-auto"),_(f,"class","mt-2 text-sm flex flex-wrap gap-2"),_(e,"class",L="transition-all mb-4 border px-3 py-2 rounded-md shadow "+(i[0].favoriteEvents.includes(i[1].id)?"bg-yellow-100":""))},m(E,D){O(E,e,D),d(e,n),d(n,s),d(e,c),d(e,a),d(a,r),d(r,o),d(e,v),y&&y.m(e,null),d(e,u),d(e,f),d(f,I),W(k,I,null),d(f,q),d(f,b),d(b,S),d(f,C),d(f,B),d(B,M),d(B,N),d(e,P),A&&A.m(e,null),G=!0,R||(le=Ee(s,"click",i[5]),R=!0)},p(E,[D]){(!G||D&1&&t!==(t="fa-star "+(E[0].favoriteEvents.includes(E[1].id)?"fa-solid":"fa-regular")+" cursor-pointer"))&&_(s,"class",t),E[1].speakers&&E[1].speakers.length>0&&y.p(E,D),te&&A.p(E,D),(!G||D&1&&L!==(L="transition-all mb-4 border px-3 py-2 rounded-md shadow "+(E[0].favoriteEvents.includes(E[1].id)?"bg-yellow-100":"")))&&_(e,"class",L)},i(E){G||(V(y),V(k.$$.fragment,E),V(A),G=!0)},o(E){w(y),w(k.$$.fragment,E),w(A),G=!1},d(E){E&&h(e),y&&y.d(),X(k),A&&A.d(),R=!1,le()}}}function Be(i,e,n){let s,t;oe(i,fe,u=>n(0,s=u)),oe(i,Ie,u=>n(7,t=u));let{event:c}=e;const a=c;function r(u){if(!!u)return u.map(f=>t.spec.speakers.find(I=>I.id===f))}function l(u){const f=t.spec.tracks.find(I=>I.id===u);return f.shortname||f.name}function o(u){return t.spec.events.filter(f=>f.parent===u.id)}function v(u){const f=u.target.getAttribute("utxo-event-id");fe.update(I=>{const k=I.favoriteEvents;let q=null;return k.includes(f)?q=Object.assign(s,{favoriteEvents:k.filter(b=>b!==f)}):(k.push(f),q=Object.assign(s,{favoriteEvents:k})),q})}return i.$$set=u=>{"event"in u&&n(6,c=u.event)},[s,a,r,l,o,v,c]}class Fe extends ge{constructor(e){super();be(this,e,Be,Ae,ke,{event:6})}}export{Fe as E};