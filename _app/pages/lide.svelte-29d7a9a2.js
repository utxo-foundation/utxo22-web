import{S as Re,i as Be,s as Fe,e as v,w as ee,k as j,t as I,c as k,a as b,x as te,d as m,m as U,h as D,b as _,g as C,F as u,y as le,j as X,q as p,o as S,B as re,p as K,R as We,H as Se,n as Q,E as we,l as Pe,G as Xe}from"../chunks/index-e45cd9d1.js";import{g as Ge}from"../chunks/navigation-0e6511d1.js";import{A as Me,S as $e,L as Je}from"../chunks/Avatar-c9bb01c8.js";import{E as Ke}from"../chunks/Event-53abd0f2.js";import{p as Qe}from"../chunks/stores-f185dc56.js";import{b as Ye}from"../chunks/stores-adaa4006.js";import"../chunks/singletons-d1fb5791.js";import"../chunks/EventTypeLabel-daf6a539.js";import"../chunks/index-c650cd5f.js";function Ae(a,e,n){const l=a.slice();return l[9]=e[n],l}function Le(a){let e,n,l,r,t,s,o,i,c,E=a[0].name+"",z,V,H=Oe(a[0].country)+"",O,Y,se,ne,ae,G,he,Z=a[0].tracks.map(a[7]).join(", ")+"",ie,pe,oe,fe,ce,M,R,B,ve,y=a[2].length+"",ue,ke,be,J,N,q,F;l=new Me({props:{speaker:a[0],size:"big"}});let P=a[0].nickname&&Te(a),g=a[0].bio&&je(a),w=a[0].orgs&&Ue(a),A=a[0].twitter&&Ce(a),L=a[0].linkedin&&Ne(a),T=a[0].web&&a[0].web.url&&qe(a),$=a[0].desc&&ze(a);const Ee=[ye,Ze],W=[];function Ie(f,d){return f[2].length>0?0:1}return N=Ie(a),q=W[N]=Ee[N](a),{c(){e=v("div"),n=v("div"),ee(l.$$.fragment),r=j(),t=v("div"),s=v("div"),o=I("P\u0159edn\xE1\u0161ej\xEDc\xED"),i=j(),c=v("h1"),z=I(E),V=j(),O=I(H),Y=j(),P&&P.c(),se=j(),g&&g.c(),ne=j(),w&&w.c(),ae=j(),G=v("div"),he=I("Sekce: "),ie=I(Z),pe=j(),A&&A.c(),oe=j(),L&&L.c(),fe=j(),T&&T.c(),ce=j(),$&&$.c(),M=j(),R=v("div"),B=v("h2"),ve=I("Ud\xE1losti ("),ue=I(y),ke=I(")"),be=j(),J=v("div"),q.c(),this.h()},l(f){e=k(f,"DIV",{class:!0});var d=b(e);n=k(d,"DIV",{});var x=b(n);te(l.$$.fragment,x),x.forEach(m),r=U(d),t=k(d,"DIV",{class:!0});var h=b(t);s=k(h,"DIV",{class:!0});var De=b(s);o=D(De,"P\u0159edn\xE1\u0161ej\xEDc\xED"),De.forEach(m),i=U(h),c=k(h,"H1",{class:!0});var me=b(c);z=D(me,E),V=U(me),O=D(me,H),me.forEach(m),Y=U(h),P&&P.l(h),se=U(h),g&&g.l(h),ne=U(h),w&&w.l(h),ae=U(h),G=k(h,"DIV",{class:!0});var ge=b(G);he=D(ge,"Sekce: "),ie=D(ge,Z),ge.forEach(m),pe=U(h),A&&A.l(h),oe=U(h),L&&L.l(h),fe=U(h),T&&T.l(h),h.forEach(m),d.forEach(m),ce=U(f),$&&$.l(f),M=U(f),R=k(f,"DIV",{class:!0});var de=b(R);B=k(de,"H2",{class:!0});var _e=b(B);ve=D(_e,"Ud\xE1losti ("),ue=D(_e,y),ke=D(_e,")"),_e.forEach(m),be=U(de),J=k(de,"DIV",{});var Ve=b(J);q.l(Ve),Ve.forEach(m),de.forEach(m),this.h()},h(){_(s,"class","mb-4 text-md uppercase"),_(c,"class","text-2xl font-bold"),_(G,"class","mt-4"),_(t,"class","mt-4 sm:mt-0"),_(e,"class","sm:flex gap-10 mt-4"),_(B,"class","uppercase mb-4 text-md"),_(R,"class","mt-6")},m(f,d){C(f,e,d),u(e,n),le(l,n,null),u(e,r),u(e,t),u(t,s),u(s,o),u(t,i),u(t,c),u(c,z),u(c,V),u(c,O),u(t,Y),P&&P.m(t,null),u(t,se),g&&g.m(t,null),u(t,ne),w&&w.m(t,null),u(t,ae),u(t,G),u(G,he),u(G,ie),u(t,pe),A&&A.m(t,null),u(t,oe),L&&L.m(t,null),u(t,fe),T&&T.m(t,null),C(f,ce,d),$&&$.m(f,d),C(f,M,d),C(f,R,d),u(R,B),u(B,ve),u(B,ue),u(B,ke),u(R,be),u(R,J),W[N].m(J,null),F=!0},p(f,d){const x={};d&1&&(x.speaker=f[0]),l.$set(x),(!F||d&1)&&E!==(E=f[0].name+"")&&X(z,E),(!F||d&1)&&H!==(H=Oe(f[0].country)+"")&&X(O,H),f[0].nickname?P?P.p(f,d):(P=Te(f),P.c(),P.m(t,se)):P&&(P.d(1),P=null),f[0].bio?g?(g.p(f,d),d&1&&p(g,1)):(g=je(f),g.c(),p(g,1),g.m(t,ne)):g&&(Q(),S(g,1,1,()=>{g=null}),K()),f[0].orgs?w?(w.p(f,d),d&1&&p(w,1)):(w=Ue(f),w.c(),p(w,1),w.m(t,ae)):w&&(Q(),S(w,1,1,()=>{w=null}),K()),(!F||d&1)&&Z!==(Z=f[0].tracks.map(f[7]).join(", ")+"")&&X(ie,Z),f[0].twitter?A?A.p(f,d):(A=Ce(f),A.c(),A.m(t,oe)):A&&(A.d(1),A=null),f[0].linkedin?L?L.p(f,d):(L=Ne(f),L.c(),L.m(t,fe)):L&&(L.d(1),L=null),f[0].web&&f[0].web.url?T?T.p(f,d):(T=qe(f),T.c(),T.m(t,null)):T&&(T.d(1),T=null),f[0].desc?$?($.p(f,d),d&1&&p($,1)):($=ze(f),$.c(),p($,1),$.m(M.parentNode,M)):$&&(Q(),S($,1,1,()=>{$=null}),K()),(!F||d&4)&&y!==(y=f[2].length+"")&&X(ue,y);let h=N;N=Ie(f),N===h?W[N].p(f,d):(Q(),S(W[h],1,1,()=>{W[h]=null}),K(),q=W[N],q?q.p(f,d):(q=W[N]=Ee[N](f),q.c()),p(q,1),q.m(J,null))},i(f){F||(p(l.$$.fragment,f),p(g),p(w),p($),p(q),F=!0)},o(f){S(l.$$.fragment,f),S(g),S(w),S($),S(q),F=!1},d(f){f&&m(e),re(l),P&&P.d(),g&&g.d(),w&&w.d(),A&&A.d(),L&&L.d(),T&&T.d(),f&&m(ce),$&&$.d(f),f&&m(M),f&&m(R),W[N].d()}}}function Te(a){let e,n,l,r,t,s=a[0].nickname+"",o;return{c(){e=v("div"),n=v("span"),l=I("aka"),r=j(),t=v("span"),o=I(s),this.h()},l(i){e=k(i,"DIV",{class:!0});var c=b(e);n=k(c,"SPAN",{class:!0});var E=b(n);l=D(E,"aka"),E.forEach(m),r=U(c),t=k(c,"SPAN",{class:!0});var z=b(t);o=D(z,s),z.forEach(m),c.forEach(m),this.h()},h(){_(n,"class","text-xs"),_(t,"class","font-bold"),_(e,"class","mt-1")},m(i,c){C(i,e,c),u(e,n),u(n,l),u(e,r),u(e,t),u(t,o)},p(i,c){c&1&&s!==(s=i[0].nickname+"")&&X(o,s)},d(i){i&&m(e)}}}function je(a){let e,n,l;return n=new $e({props:{source:a[0].bio,renderers:a[3]}}),{c(){e=v("div"),ee(n.$$.fragment),this.h()},l(r){e=k(r,"DIV",{class:!0});var t=b(e);te(n.$$.fragment,t),t.forEach(m),this.h()},h(){_(e,"class","mt-4 text-blue-web italic")},m(r,t){C(r,e,t),le(n,e,null),l=!0},p(r,t){const s={};t&1&&(s.source=r[0].bio),n.$set(s)},i(r){l||(p(n.$$.fragment,r),l=!0)},o(r){S(n.$$.fragment,r),l=!1},d(r){r&&m(e),re(n)}}}function Ue(a){let e,n,l;return n=new $e({props:{source:a[0].orgs,renderers:a[3]}}),{c(){e=v("div"),ee(n.$$.fragment),this.h()},l(r){e=k(r,"DIV",{class:!0});var t=b(e);te(n.$$.fragment,t),t.forEach(m),this.h()},h(){_(e,"class","mt-4 text-blue-web links")},m(r,t){C(r,e,t),le(n,e,null),l=!0},p(r,t){const s={};t&1&&(s.source=r[0].orgs),n.$set(s)},i(r){l||(p(n.$$.fragment,r),l=!0)},o(r){S(n.$$.fragment,r),l=!1},d(r){r&&m(e),re(n)}}}function Ce(a){let e,n,l,r,t=a[0].twitter+"",s,o;return{c(){e=v("div"),n=I("Twitter: "),l=v("a"),r=I("@"),s=I(t),this.h()},l(i){e=k(i,"DIV",{class:!0});var c=b(e);n=D(c,"Twitter: "),l=k(c,"A",{href:!0,target:!0,class:!0});var E=b(l);r=D(E,"@"),s=D(E,t),E.forEach(m),c.forEach(m),this.h()},h(){_(l,"href",o="https://twitter.com/"+a[0].twitter),_(l,"target","_blank"),_(l,"class","font-bold"),_(e,"class","mt-2")},m(i,c){C(i,e,c),u(e,n),u(e,l),u(l,r),u(l,s)},p(i,c){c&1&&t!==(t=i[0].twitter+"")&&X(s,t),c&1&&o!==(o="https://twitter.com/"+i[0].twitter)&&_(l,"href",o)},d(i){i&&m(e)}}}function Ne(a){let e,n,l,r,t=a[0].linkedin+"",s,o;return{c(){e=v("div"),n=I("LinkedIn: "),l=v("a"),r=I("@"),s=I(t),this.h()},l(i){e=k(i,"DIV",{class:!0});var c=b(e);n=D(c,"LinkedIn: "),l=k(c,"A",{href:!0,target:!0,class:!0});var E=b(l);r=D(E,"@"),s=D(E,t),E.forEach(m),c.forEach(m),this.h()},h(){_(l,"href",o="https://linkedin.com/in/"+a[0].twitter),_(l,"target","_blank"),_(l,"class","font-bold"),_(e,"class","mt-2")},m(i,c){C(i,e,c),u(e,n),u(e,l),u(l,r),u(l,s)},p(i,c){c&1&&t!==(t=i[0].linkedin+"")&&X(s,t),c&1&&o!==(o="https://linkedin.com/in/"+i[0].twitter)&&_(l,"href",o)},d(i){i&&m(e)}}}function qe(a){let e,n,l,r=(a[0].web.name||a[0].web.url.replace(/^https?:\/\//,""))+"",t,s;return{c(){e=v("div"),n=I("Web: "),l=v("a"),t=I(r),this.h()},l(o){e=k(o,"DIV",{class:!0});var i=b(e);n=D(i,"Web: "),l=k(i,"A",{href:!0,target:!0,class:!0});var c=b(l);t=D(c,r),c.forEach(m),i.forEach(m),this.h()},h(){_(l,"href",s=a[0].web.url),_(l,"target","_blank"),_(l,"class","font-bold"),_(e,"class","mt-2")},m(o,i){C(o,e,i),u(e,n),u(e,l),u(l,t)},p(o,i){i&1&&r!==(r=(o[0].web.name||o[0].web.url.replace(/^https?:\/\//,""))+"")&&X(t,r),i&1&&s!==(s=o[0].web.url)&&_(l,"href",s)},d(o){o&&m(e)}}}function ze(a){let e,n,l;return n=new $e({props:{source:a[0].desc,renderers:a[3]}}),{c(){e=v("div"),ee(n.$$.fragment),this.h()},l(r){e=k(r,"DIV",{class:!0});var t=b(e);te(n.$$.fragment,t),t.forEach(m),this.h()},h(){_(e,"class","mt-6")},m(r,t){C(r,e,t),le(n,e,null),l=!0},p(r,t){const s={};t&1&&(s.source=r[0].desc),n.$set(s)},i(r){l||(p(n.$$.fragment,r),l=!0)},o(r){S(n.$$.fragment,r),l=!1},d(r){r&&m(e),re(n)}}}function Ze(a){let e;return{c(){e=I("Tento \u010Dlov\u011Bk zat\xEDm nem\xE1 v programu \u017E\xE1dnou ud\xE1lost.")},l(n){e=D(n,"Tento \u010Dlov\u011Bk zat\xEDm nem\xE1 v programu \u017E\xE1dnou ud\xE1lost.")},m(n,l){C(n,e,l)},p:we,i:we,o:we,d(n){n&&m(e)}}}function ye(a){let e,n,l=a[2],r=[];for(let s=0;s<l.length;s+=1)r[s]=He(Ae(a,l,s));const t=s=>S(r[s],1,1,()=>{r[s]=null});return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=Pe()},l(s){for(let o=0;o<r.length;o+=1)r[o].l(s);e=Pe()},m(s,o){for(let i=0;i<r.length;i+=1)r[i].m(s,o);C(s,e,o),n=!0},p(s,o){if(o&4){l=s[2];let i;for(i=0;i<l.length;i+=1){const c=Ae(s,l,i);r[i]?(r[i].p(c,o),p(r[i],1)):(r[i]=He(c),r[i].c(),p(r[i],1),r[i].m(e.parentNode,e))}for(Q(),i=l.length;i<r.length;i+=1)t(i);K()}},i(s){if(!n){for(let o=0;o<l.length;o+=1)p(r[o]);n=!0}},o(s){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)S(r[o]);n=!1},d(s){Xe(r,s),s&&m(e)}}}function He(a){let e,n;return e=new Ke({props:{event:a[9]}}),{c(){ee(e.$$.fragment)},l(l){te(e.$$.fragment,l)},m(l,r){le(e,l,r),n=!0},p(l,r){const t={};r&4&&(t.event=l[9]),e.$set(t)},i(l){n||(p(e.$$.fragment,l),n=!0)},o(l){S(e.$$.fragment,l),n=!1},d(l){re(e,l)}}}function xe(a){let e,n,l,r;document.title=e=(a[0]?a[0].name:"")+" | Lid\xE9 | "+(a[1]?a[1].name:"UTXO.22");let t=a[1]&&a[0]&&Le(a);return{c(){n=j(),l=v("section"),t&&t.c(),this.h()},l(s){We('[data-svelte="svelte-1rc9axv"]',document.head).forEach(m),n=U(s),l=k(s,"SECTION",{class:!0});var i=b(l);t&&t.l(i),i.forEach(m),this.h()},h(){_(l,"class","relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web")},m(s,o){C(s,n,o),C(s,l,o),t&&t.m(l,null),r=!0},p(s,[o]){(!r||o&3)&&e!==(e=(s[0]?s[0].name:"")+" | Lid\xE9 | "+(s[1]?s[1].name:"UTXO.22"))&&(document.title=e),s[1]&&s[0]?t?(t.p(s,o),o&3&&p(t,1)):(t=Le(s),t.c(),p(t,1),t.m(l,null)):t&&(Q(),S(t,1,1,()=>{t=null}),K())},i(s){r||(p(t),r=!0)},o(s){S(t),r=!1},d(s){s&&m(n),s&&m(l),t&&t.d()}}}const ct=!0;function Oe(a){const e=a.toUpperCase().split("").map(n=>127397+n.charCodeAt());return String.fromCodePoint(...e)}function et(a,e,n){let l,r,t,s,o;Se(a,Ye,V=>n(1,s=V)),Se(a,Qe,V=>n(6,o=V));const i={link:Je};function c(V){const O=new URLSearchParams(V).get("id");return s.spec.speakers.find(Y=>Y.id===O)||Ge("/"),O}function E(V){const H=s.spec.tracks.find(O=>O.id===V);return H.shortname||H.name}const z=V=>E(V);return a.$$.update=()=>{a.$$.dirty&64&&n(5,l=c(o.url.search)),a.$$.dirty&34&&n(0,r=s?s.spec.speakers.find(V=>V.id===l):null),a.$$.dirty&3&&n(2,t=r?s.spec.events.filter(V=>V.speakers&&V.speakers.includes(r.id)):[])},[r,s,t,i,E,l,o,z]}class ut extends Re{constructor(e){super();Be(this,e,et,xe,Fe,{})}}export{ut as default,ct as prerender};
