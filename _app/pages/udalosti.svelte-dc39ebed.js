import{S as Ue,i as Ae,s as Le,P as He,e as E,c as I,a as D,d as u,b as $,g as k,L as qe,M as Be,N as Me,q as g,o as T,t as M,k as O,w as le,l as de,h as R,m as H,x as te,F as b,y as se,J as Re,j as x,G as ue,B as ie,p as X,R as ze,H as oe,n as Z}from"../chunks/index-f961f29d.js";import{p as Ce}from"../chunks/stores-d7e9d57e.js";import{g as Fe}from"../chunks/navigation-0e6511d1.js";import{b as Xe,a as pe}from"../chunks/stores-2b13be7a.js";import{c as Ze,E as Ge,a as Oe,b as Je}from"../chunks/Event-d12d19a1.js";import{A as Ke,S as Qe,L as We}from"../chunks/Avatar-ae188221.js";import"../chunks/singletons-d1fb5791.js";import"../chunks/index-f562cf15.js";function Ye(r){let l,s;const a=r[1].default,e=He(a,r,r[0],null);return{c(){l=E("p"),e&&e.c(),this.h()},l(i){l=I(i,"P",{class:!0});var t=D(l);e&&e.l(t),t.forEach(u),this.h()},h(){$(l,"class","mb-2")},m(i,t){k(i,l,t),e&&e.m(l,null),s=!0},p(i,[t]){e&&e.p&&(!s||t&1)&&qe(e,a,i,i[0],s?Me(a,i[0],t,null):Be(i[0]),null)},i(i){s||(g(e,i),s=!0)},o(i){T(e,i),s=!1},d(i){i&&u(l),e&&e.d(i)}}}function ye(r,l,s){let{$$slots:a={},$$scope:e}=l;return r.$$set=i=>{"$$scope"in i&&s(0,e=i.$$scope)},[e,a]}class xe extends Ue{constructor(l){super();Ae(this,l,ye,Ye,Le,{})}}function ve(r,l,s){const a=r.slice();return a[13]=l[s],a}function be(r,l,s){const a=r.slice();return a[16]=l[s],a}function ge(r,l,s){const a=r.slice();return a[19]=l[s],a}function ke(r){let l,s,a,e,i,t,n,o,p,w,h,V,c,m,d,v,B,z=r[4].favoriteEvents.includes(r[0].id),G,F,ee=r[0].name+"",ae,re,J,K,Q,W,Y,ne,ce;o=new Ge({props:{event:r[0],size:"big"}});let U=r[3]&&$e(r),A=r[0].track&&Ee(r),L=r[0].tags&&Ie(r),q=z&&we(),S=r[0].speakers&&r[0].speakers.length>0&&Ve(r),j=r[0].description&&je(r),N=r[0].parent&&Ne(r),P=r[2].length&&Pe(r);return{c(){l=E("div"),s=E("a"),a=E("i"),e=M("\xA0Zp\u011Bt"),i=O(),t=E("div"),n=E("div"),le(o.$$.fragment),p=O(),U&&U.c(),w=O(),A&&A.c(),h=O(),L&&L.c(),V=O(),c=E("div"),m=E("div"),d=E("i"),B=O(),q&&q.c(),G=O(),F=E("h1"),ae=M(ee),re=O(),S&&S.c(),J=O(),j&&j.c(),K=O(),N&&N.c(),Q=O(),P&&P.c(),W=de(),this.h()},l(f){l=I(f,"DIV",{class:!0});var _=D(l);s=I(_,"A",{href:!0});var y=D(s);a=I(y,"I",{class:!0}),D(a).forEach(u),e=R(y,"\xA0Zp\u011Bt"),y.forEach(u),_.forEach(u),i=H(f),t=I(f,"DIV",{class:!0});var C=D(t);n=I(C,"DIV",{});var he=D(n);te(o.$$.fragment,he),he.forEach(u),p=H(C),U&&U.l(C),w=H(C),A&&A.l(C),h=H(C),L&&L.l(C),C.forEach(u),V=H(f),c=I(f,"DIV",{class:!0});var _e=D(c);m=I(_e,"DIV",{class:!0});var fe=D(m);d=I(fe,"I",{class:!0}),D(d).forEach(u),B=H(fe),q&&q.l(fe),fe.forEach(u),_e.forEach(u),G=H(f),F=I(f,"H1",{class:!0});var me=D(F);ae=R(me,ee),me.forEach(u),re=H(f),S&&S.l(f),J=H(f),j&&j.l(f),K=H(f),N&&N.l(f),Q=H(f),P&&P.l(f),W=de(),this.h()},h(){$(a,"class","fa-solid fa-arrow-left"),$(s,"href","javascript:history.back()"),$(l,"class","mb-6 uppercase text-gray-500"),$(t,"class","mb-6 flex flex-wrap gap-4"),$(d,"class",v="fa-star "+(r[4].favoriteEvents.includes(r[0].id)?"fa-solid":"fa-regular")),$(m,"class","cursor-pointer"),$(c,"class","float-right"),$(F,"class","text-2xl font-bold")},m(f,_){k(f,l,_),b(l,s),b(s,a),b(s,e),k(f,i,_),k(f,t,_),b(t,n),se(o,n,null),b(t,p),U&&U.m(t,null),b(t,w),A&&A.m(t,null),b(t,h),L&&L.m(t,null),k(f,V,_),k(f,c,_),b(c,m),b(m,d),b(m,B),q&&q.m(m,null),k(f,G,_),k(f,F,_),b(F,ae),k(f,re,_),S&&S.m(f,_),k(f,J,_),j&&j.m(f,_),k(f,K,_),N&&N.m(f,_),k(f,Q,_),P&&P.m(f,_),k(f,W,_),Y=!0,ne||(ce=Re(m,"click",r[10]),ne=!0)},p(f,_){const y={};_&1&&(y.event=f[0]),o.$set(y),f[3]?U?U.p(f,_):(U=$e(f),U.c(),U.m(t,w)):U&&(U.d(1),U=null),f[0].track?A?A.p(f,_):(A=Ee(f),A.c(),A.m(t,h)):A&&(A.d(1),A=null),f[0].tags?L?L.p(f,_):(L=Ie(f),L.c(),L.m(t,null)):L&&(L.d(1),L=null),(!Y||_&17&&v!==(v="fa-star "+(f[4].favoriteEvents.includes(f[0].id)?"fa-solid":"fa-regular")))&&$(d,"class",v),_&17&&(z=f[4].favoriteEvents.includes(f[0].id)),z?q||(q=we(),q.c(),q.m(m,null)):q&&(q.d(1),q=null),(!Y||_&1)&&ee!==(ee=f[0].name+"")&&x(ae,ee),f[0].speakers&&f[0].speakers.length>0?S?(S.p(f,_),_&1&&g(S,1)):(S=Ve(f),S.c(),g(S,1),S.m(J.parentNode,J)):S&&(Z(),T(S,1,1,()=>{S=null}),X()),f[0].description?j?(j.p(f,_),_&1&&g(j,1)):(j=je(f),j.c(),g(j,1),j.m(K.parentNode,K)):j&&(Z(),T(j,1,1,()=>{j=null}),X()),f[0].parent?N?(N.p(f,_),_&1&&g(N,1)):(N=Ne(f),N.c(),g(N,1),N.m(Q.parentNode,Q)):N&&(Z(),T(N,1,1,()=>{N=null}),X()),f[2].length?P?(P.p(f,_),_&4&&g(P,1)):(P=Pe(f),P.c(),g(P,1),P.m(W.parentNode,W)):P&&(Z(),T(P,1,1,()=>{P=null}),X())},i(f){Y||(g(o.$$.fragment,f),g(S),g(j),g(N),g(P),Y=!0)},o(f){T(o.$$.fragment,f),T(S),T(j),T(N),T(P),Y=!1},d(f){f&&u(l),f&&u(i),f&&u(t),ie(o),U&&U.d(),A&&A.d(),L&&L.d(),f&&u(V),f&&u(c),q&&q.d(),f&&u(G),f&&u(F),f&&u(re),S&&S.d(f),f&&u(J),j&&j.d(f),f&&u(K),N&&N.d(f),f&&u(Q),P&&P.d(f),f&&u(W),ne=!1,ce()}}}function $e(r){let l,s,a;return{c(){l=E("div"),s=M(r[3]),a=M("m"),this.h()},l(e){l=I(e,"DIV",{class:!0});var i=D(l);s=R(i,r[3]),a=R(i,"m"),i.forEach(u),this.h()},h(){$(l,"class","text-sm my-auto")},m(e,i){k(e,l,i),b(l,s),b(l,a)},p(e,i){i&8&&x(s,e[3])},d(e){e&&u(l)}}}function Ee(r){let l,s=r[7](r[0].track)+"",a;return{c(){l=E("div"),a=M(s),this.h()},l(e){l=I(e,"DIV",{class:!0});var i=D(l);a=R(i,s),i.forEach(u),this.h()},h(){$(l,"class","text-md my-auto")},m(e,i){k(e,l,i),b(l,a)},p(e,i){i&1&&s!==(s=e[7](e[0].track)+"")&&x(a,s)},d(e){e&&u(l)}}}function Ie(r){let l,s=r[0].tags,a=[];for(let e=0;e<s.length;e+=1)a[e]=De(ge(r,s,e));return{c(){l=E("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){l=I(e,"DIV",{class:!0});var i=D(l);for(let t=0;t<a.length;t+=1)a[t].l(i);i.forEach(u),this.h()},h(){$(l,"class","flex text-xs gap-1 my-auto text-blue-web/60")},m(e,i){k(e,l,i);for(let t=0;t<a.length;t+=1)a[t].m(l,null)},p(e,i){if(i&1){s=e[0].tags;let t;for(t=0;t<s.length;t+=1){const n=ge(e,s,t);a[t]?a[t].p(n,i):(a[t]=De(n),a[t].c(),a[t].m(l,null))}for(;t<a.length;t+=1)a[t].d(1);a.length=s.length}},d(e){e&&u(l),ue(a,e)}}}function De(r){let l,s,a,e=r[19]+"",i,t;return{c(){l=E("div"),s=E("a"),a=M("#"),i=M(e),this.h()},l(n){l=I(n,"DIV",{});var o=D(l);s=I(o,"A",{href:!0});var p=D(s);a=R(p,"#"),i=R(p,e),p.forEach(u),o.forEach(u),this.h()},h(){$(s,"href",t="/program?tag="+r[19])},m(n,o){k(n,l,o),b(l,s),b(s,a),b(s,i)},p(n,o){o&1&&e!==(e=n[19]+"")&&x(i,e),o&1&&t!==(t="/program?tag="+n[19])&&$(s,"href",t)},d(n){n&&u(l)}}}function we(r){let l;return{c(){l=M(`\xA0Tvoje obl\xEDben\xE1
          ud\xE1lost`)},l(s){l=R(s,`\xA0Tvoje obl\xEDben\xE1
          ud\xE1lost`)},m(s,a){k(s,l,a)},d(s){s&&u(l)}}}function Ve(r){let l,s,a=r[6](r[0].speakers),e=[];for(let t=0;t<a.length;t+=1)e[t]=Se(be(r,a,t));const i=t=>T(e[t],1,1,()=>{e[t]=null});return{c(){l=E("div");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){l=I(t,"DIV",{class:!0});var n=D(l);for(let o=0;o<e.length;o+=1)e[o].l(n);n.forEach(u),this.h()},h(){$(l,"class","mt-4 mb-2 flex flex-wrap gap-4")},m(t,n){k(t,l,n);for(let o=0;o<e.length;o+=1)e[o].m(l,null);s=!0},p(t,n){if(n&65){a=t[6](t[0].speakers);let o;for(o=0;o<a.length;o+=1){const p=be(t,a,o);e[o]?(e[o].p(p,n),g(e[o],1)):(e[o]=Se(p),e[o].c(),g(e[o],1),e[o].m(l,null))}for(Z(),o=a.length;o<e.length;o+=1)i(o);X()}},i(t){if(!s){for(let n=0;n<a.length;n+=1)g(e[n]);s=!0}},o(t){e=e.filter(Boolean);for(let n=0;n<e.length;n+=1)T(e[n]);s=!1},d(t){t&&u(l),ue(e,t)}}}function Se(r){let l,s,a,e,i,t=r[16].name+"",n,o,p,w;return s=new Ke({props:{speaker:r[16],size:"semi-small"}}),{c(){l=E("div"),le(s.$$.fragment),a=O(),e=E("div"),i=E("a"),n=M(t),p=O(),this.h()},l(h){l=I(h,"DIV",{class:!0});var V=D(l);te(s.$$.fragment,V),a=H(V),e=I(V,"DIV",{class:!0});var c=D(e);i=I(c,"A",{href:!0,class:!0});var m=D(i);n=R(m,t),m.forEach(u),c.forEach(u),p=H(V),V.forEach(u),this.h()},h(){$(i,"href",o="/lide?id="+r[16].id),$(i,"class","text-xl"),$(e,"class","m-auto"),$(l,"class","flex gap-2")},m(h,V){k(h,l,V),se(s,l,null),b(l,a),b(l,e),b(e,i),b(i,n),b(l,p),w=!0},p(h,V){const c={};V&1&&(c.speaker=h[16]),s.$set(c),(!w||V&1)&&t!==(t=h[16].name+"")&&x(n,t),(!w||V&1&&o!==(o="/lide?id="+h[16].id))&&$(i,"href",o)},i(h){w||(g(s.$$.fragment,h),w=!0)},o(h){T(s.$$.fragment,h),w=!1},d(h){h&&u(l),ie(s)}}}function je(r){let l,s,a;return s=new Qe({props:{source:r[0].description,renderers:r[5]}}),{c(){l=E("div"),le(s.$$.fragment),this.h()},l(e){l=I(e,"DIV",{class:!0});var i=D(l);te(s.$$.fragment,i),i.forEach(u),this.h()},h(){$(l,"class","mt-6 mb-6")},m(e,i){k(e,l,i),se(s,l,null),a=!0},p(e,i){const t={};i&1&&(t.source=e[0].description),s.$set(t)},i(e){a||(g(s.$$.fragment,e),a=!0)},o(e){T(s.$$.fragment,e),a=!1},d(e){e&&u(l),ie(s)}}}function Ne(r){let l,s,a,e,i,t;return i=new Oe({props:{event:r[1].spec.events.find(r[11])}}),{c(){l=E("div"),s=E("h2"),a=M("Sou\u010D\xE1st ud\xE1losti:"),e=O(),le(i.$$.fragment),this.h()},l(n){l=I(n,"DIV",{class:!0});var o=D(l);s=I(o,"H2",{class:!0});var p=D(s);a=R(p,"Sou\u010D\xE1st ud\xE1losti:"),p.forEach(u),e=H(o),te(i.$$.fragment,o),o.forEach(u),this.h()},h(){$(s,"class","text uppercase mb-4 font-semibold"),$(l,"class","mt-6")},m(n,o){k(n,l,o),b(l,s),b(s,a),b(l,e),se(i,l,null),t=!0},p(n,o){const p={};o&3&&(p.event=n[1].spec.events.find(n[11])),i.$set(p)},i(n){t||(g(i.$$.fragment,n),t=!0)},o(n){T(i.$$.fragment,n),t=!1},d(n){n&&u(l),ie(i)}}}function Pe(r){let l,s,a,e=r[2].length+"",i,t,n,o,p,w=r[2],h=[];for(let c=0;c<w.length;c+=1)h[c]=Te(ve(r,w,c));const V=c=>T(h[c],1,1,()=>{h[c]=null});return{c(){l=E("div"),s=E("h2"),a=M("Obsahuje ud\xE1losti ("),i=M(e),t=M(")"),n=O(),o=E("div");for(let c=0;c<h.length;c+=1)h[c].c();this.h()},l(c){l=I(c,"DIV",{class:!0});var m=D(l);s=I(m,"H2",{class:!0});var d=D(s);a=R(d,"Obsahuje ud\xE1losti ("),i=R(d,e),t=R(d,")"),d.forEach(u),m.forEach(u),n=H(c),o=I(c,"DIV",{});var v=D(o);for(let B=0;B<h.length;B+=1)h[B].l(v);v.forEach(u),this.h()},h(){$(s,"class","text uppercase mb-4"),$(l,"class","mt-6")},m(c,m){k(c,l,m),b(l,s),b(s,a),b(s,i),b(s,t),k(c,n,m),k(c,o,m);for(let d=0;d<h.length;d+=1)h[d].m(o,null);p=!0},p(c,m){if((!p||m&4)&&e!==(e=c[2].length+"")&&x(i,e),m&4){w=c[2];let d;for(d=0;d<w.length;d+=1){const v=ve(c,w,d);h[d]?(h[d].p(v,m),g(h[d],1)):(h[d]=Te(v),h[d].c(),g(h[d],1),h[d].m(o,null))}for(Z(),d=w.length;d<h.length;d+=1)V(d);X()}},i(c){if(!p){for(let m=0;m<w.length;m+=1)g(h[m]);p=!0}},o(c){h=h.filter(Boolean);for(let m=0;m<h.length;m+=1)T(h[m]);p=!1},d(c){c&&u(l),c&&u(n),c&&u(o),ue(h,c)}}}function Te(r){let l,s;return l=new Oe({props:{event:r[13]}}),{c(){le(l.$$.fragment)},l(a){te(l.$$.fragment,a)},m(a,e){se(l,a,e),s=!0},p(a,e){const i={};e&4&&(i.event=a[13]),l.$set(i)},i(a){s||(g(l.$$.fragment,a),s=!0)},o(a){T(l.$$.fragment,a),s=!1},d(a){ie(l,a)}}}function el(r){let l,s,a,e;document.title=l=(r[0]?r[0].name:"")+" | Ud\xE1losti | "+(r[1]?r[1].name:"UTXO.22");let i=r[1]&&r[0]&&ke(r);return{c(){s=O(),a=E("section"),i&&i.c(),this.h()},l(t){ze('[data-svelte="svelte-v4msem"]',document.head).forEach(u),s=H(t),a=I(t,"SECTION",{class:!0});var o=D(a);i&&i.l(o),o.forEach(u),this.h()},h(){$(a,"class","relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web")},m(t,n){k(t,s,n),k(t,a,n),i&&i.m(a,null),e=!0},p(t,[n]){(!e||n&3)&&l!==(l=(t[0]?t[0].name:"")+" | Ud\xE1losti | "+(t[1]?t[1].name:"UTXO.22"))&&(document.title=l),t[1]&&t[0]?i?(i.p(t,n),n&3&&g(i,1)):(i=ke(t),i.c(),g(i,1),i.m(a,null)):i&&(Z(),T(i,1,1,()=>{i=null}),X())},i(t){e||(g(i),e=!0)},o(t){T(i),e=!1},d(t){t&&u(s),t&&u(a),i&&i.d()}}}const ul=!0;function ll(r,l,s){let a,e,i,t,n,o,p;oe(r,Xe,v=>s(1,n=v)),oe(r,Ce,v=>s(9,o=v)),oe(r,pe,v=>s(4,p=v));const w={link:We,paragraph:xe};function h(v){const z=new URLSearchParams(v).get("id");return n.spec.events.find(G=>G.id===z)||Fe("/"),z}function V(v){if(!!v)return v.map(B=>n.spec.speakers.find(z=>z.id===B))}function c(v){const B=n.spec.tracks.find(z=>z.id===v);return B.shortname||B.name}const m=()=>Je(e.id,pe),d=v=>v.id===e.parent;return r.$$.update=()=>{r.$$.dirty&512&&s(8,a=h(o.url.search)),r.$$.dirty&258&&s(0,e=n?n.spec.events.find(v=>v.id===a):null),r.$$.dirty&3&&s(3,i=e?Ze(e,n):null),r.$$.dirty&3&&s(2,t=n.spec.events.filter(v=>v.parent===e.id))},[e,n,t,i,p,w,V,c,a,o,m,d]}class cl extends Ue{constructor(l){super();Ae(this,l,ll,el,Le,{})}}export{cl as default,ul as prerender};
