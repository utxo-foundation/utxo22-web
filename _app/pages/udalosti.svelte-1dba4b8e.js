import{S as Ve,i as Se,s as je,P as Te,e as I,c as D,a as w,d as c,b as g,g as k,L as Ue,M as Le,N as Oe,q as v,o as T,t as M,k as A,w as Y,l as me,h as R,m as H,x,F as $,y as ee,J as Ae,j as le,B as te,p as C,G as Ne,R as He,H as fe,n as F}from"../chunks/index-6191a390.js";import{p as qe}from"../chunks/stores-bd0963f1.js";import{g as Be}from"../chunks/navigation-0e6511d1.js";import{b as Me,a as de}from"../chunks/stores-9e69a8a9.js";import{c as Re,E as ze,a as Pe,b as Ce}from"../chunks/Event-02d76521.js";import{A as Fe}from"../chunks/Avatar-a90bc8ec.js";import{S as Xe,L as Ze}from"../chunks/Link-79f22491.js";import"../chunks/singletons-d1fb5791.js";import"../chunks/index-7ffe3f10.js";function Ge(f){let e,s;const a=f[1].default,l=Te(a,f,f[0],null);return{c(){e=I("p"),l&&l.c(),this.h()},l(t){e=D(t,"P",{class:!0});var i=w(e);l&&l.l(i),i.forEach(c),this.h()},h(){g(e,"class","mb-2")},m(t,i){k(t,e,i),l&&l.m(e,null),s=!0},p(t,[i]){l&&l.p&&(!s||i&1)&&Ue(l,a,t,t[0],s?Oe(a,t[0],i,null):Le(t[0]),null)},i(t){s||(v(l,t),s=!0)},o(t){T(l,t),s=!1},d(t){t&&c(e),l&&l.d(t)}}}function Je(f,e,s){let{$$slots:a={},$$scope:l}=e;return f.$$set=t=>{"$$scope"in t&&s(0,l=t.$$scope)},[l,a]}class ye extends Ve{constructor(e){super();Se(this,e,Je,Ge,je,{})}}function pe(f,e,s){const a=f.slice();return a[13]=e[s],a}function _e(f,e,s){const a=f.slice();return a[16]=e[s],a}function he(f){let e,s,a,l,t,i,n,o,b,V,m,E,u,_,p,h,q=f[4].favoriteEvents.includes(f[0].id),B,z,W=f[0].name+"",se,ie,X,Z,G,J,y,ae,ne;o=new ze({props:{event:f[0],size:"big"}});let U=f[0].track&&ve(f),L=f[3]&&be(f),O=q&&ke(),S=f[0].speakers&&f[0].speakers.length>0&&$e(f),j=f[0].description&&Ee(f),N=f[0].parent&&Ie(f),P=f[2].length&&De(f);return{c(){e=I("div"),s=I("a"),a=I("i"),l=M("\xA0Zp\u011Bt"),t=A(),i=I("div"),n=I("div"),Y(o.$$.fragment),b=A(),U&&U.c(),V=A(),L&&L.c(),m=A(),E=I("div"),u=I("div"),_=I("i"),h=A(),O&&O.c(),B=A(),z=I("h1"),se=M(W),ie=A(),S&&S.c(),X=A(),j&&j.c(),Z=A(),N&&N.c(),G=A(),P&&P.c(),J=me(),this.h()},l(r){e=D(r,"DIV",{class:!0});var d=w(e);s=D(d,"A",{href:!0});var K=w(s);a=D(K,"I",{class:!0}),w(a).forEach(c),l=R(K,"\xA0Zp\u011Bt"),K.forEach(c),d.forEach(c),t=H(r),i=D(r,"DIV",{class:!0});var Q=w(i);n=D(Q,"DIV",{});var oe=w(n);x(o.$$.fragment,oe),oe.forEach(c),b=H(Q),U&&U.l(Q),V=H(Q),L&&L.l(Q),Q.forEach(c),m=H(r),E=D(r,"DIV",{class:!0});var ue=w(E);u=D(ue,"DIV",{class:!0});var re=w(u);_=D(re,"I",{class:!0}),w(_).forEach(c),h=H(re),O&&O.l(re),re.forEach(c),ue.forEach(c),B=H(r),z=D(r,"H1",{class:!0});var ce=w(z);se=R(ce,W),ce.forEach(c),ie=H(r),S&&S.l(r),X=H(r),j&&j.l(r),Z=H(r),N&&N.l(r),G=H(r),P&&P.l(r),J=me(),this.h()},h(){g(a,"class","fa-solid fa-arrow-left"),g(s,"href","javascript:history.back()"),g(e,"class","mb-6 uppercase text-gray-500"),g(i,"class","mb-6 flex flex-wrap gap-4"),g(_,"class",p="fa-star "+(f[4].favoriteEvents.includes(f[0].id)?"fa-solid":"fa-regular")),g(u,"class","cursor-pointer"),g(E,"class","float-right"),g(z,"class","text-2xl font-bold")},m(r,d){k(r,e,d),$(e,s),$(s,a),$(s,l),k(r,t,d),k(r,i,d),$(i,n),ee(o,n,null),$(i,b),U&&U.m(i,null),$(i,V),L&&L.m(i,null),k(r,m,d),k(r,E,d),$(E,u),$(u,_),$(u,h),O&&O.m(u,null),k(r,B,d),k(r,z,d),$(z,se),k(r,ie,d),S&&S.m(r,d),k(r,X,d),j&&j.m(r,d),k(r,Z,d),N&&N.m(r,d),k(r,G,d),P&&P.m(r,d),k(r,J,d),y=!0,ae||(ne=Ae(u,"click",f[10]),ae=!0)},p(r,d){const K={};d&1&&(K.event=r[0]),o.$set(K),r[0].track?U?U.p(r,d):(U=ve(r),U.c(),U.m(i,V)):U&&(U.d(1),U=null),r[3]?L?L.p(r,d):(L=be(r),L.c(),L.m(i,null)):L&&(L.d(1),L=null),(!y||d&17&&p!==(p="fa-star "+(r[4].favoriteEvents.includes(r[0].id)?"fa-solid":"fa-regular")))&&g(_,"class",p),d&17&&(q=r[4].favoriteEvents.includes(r[0].id)),q?O||(O=ke(),O.c(),O.m(u,null)):O&&(O.d(1),O=null),(!y||d&1)&&W!==(W=r[0].name+"")&&le(se,W),r[0].speakers&&r[0].speakers.length>0?S?(S.p(r,d),d&1&&v(S,1)):(S=$e(r),S.c(),v(S,1),S.m(X.parentNode,X)):S&&(F(),T(S,1,1,()=>{S=null}),C()),r[0].description?j?(j.p(r,d),d&1&&v(j,1)):(j=Ee(r),j.c(),v(j,1),j.m(Z.parentNode,Z)):j&&(F(),T(j,1,1,()=>{j=null}),C()),r[0].parent?N?(N.p(r,d),d&1&&v(N,1)):(N=Ie(r),N.c(),v(N,1),N.m(G.parentNode,G)):N&&(F(),T(N,1,1,()=>{N=null}),C()),r[2].length?P?(P.p(r,d),d&4&&v(P,1)):(P=De(r),P.c(),v(P,1),P.m(J.parentNode,J)):P&&(F(),T(P,1,1,()=>{P=null}),C())},i(r){y||(v(o.$$.fragment,r),v(S),v(j),v(N),v(P),y=!0)},o(r){T(o.$$.fragment,r),T(S),T(j),T(N),T(P),y=!1},d(r){r&&c(e),r&&c(t),r&&c(i),te(o),U&&U.d(),L&&L.d(),r&&c(m),r&&c(E),O&&O.d(),r&&c(B),r&&c(z),r&&c(ie),S&&S.d(r),r&&c(X),j&&j.d(r),r&&c(Z),N&&N.d(r),r&&c(G),P&&P.d(r),r&&c(J),ae=!1,ne()}}}function ve(f){let e,s=f[7](f[0].track)+"",a;return{c(){e=I("div"),a=M(s),this.h()},l(l){e=D(l,"DIV",{class:!0});var t=w(e);a=R(t,s),t.forEach(c),this.h()},h(){g(e,"class","text-md my-auto")},m(l,t){k(l,e,t),$(e,a)},p(l,t){t&1&&s!==(s=l[7](l[0].track)+"")&&le(a,s)},d(l){l&&c(e)}}}function be(f){let e,s,a;return{c(){e=I("div"),s=M(f[3]),a=M("m"),this.h()},l(l){e=D(l,"DIV",{class:!0});var t=w(e);s=R(t,f[3]),a=R(t,"m"),t.forEach(c),this.h()},h(){g(e,"class","text-sm my-auto")},m(l,t){k(l,e,t),$(e,s),$(e,a)},p(l,t){t&8&&le(s,l[3])},d(l){l&&c(e)}}}function ke(f){let e;return{c(){e=M(`\xA0Tvoje obl\xEDben\xE1
          ud\xE1lost`)},l(s){e=R(s,`\xA0Tvoje obl\xEDben\xE1
          ud\xE1lost`)},m(s,a){k(s,e,a)},d(s){s&&c(e)}}}function $e(f){let e,s,a=f[6](f[0].speakers),l=[];for(let i=0;i<a.length;i+=1)l[i]=ge(_e(f,a,i));const t=i=>T(l[i],1,1,()=>{l[i]=null});return{c(){e=I("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){e=D(i,"DIV",{class:!0});var n=w(e);for(let o=0;o<l.length;o+=1)l[o].l(n);n.forEach(c),this.h()},h(){g(e,"class","mt-4 mb-2 flex flex-wrap gap-4")},m(i,n){k(i,e,n);for(let o=0;o<l.length;o+=1)l[o].m(e,null);s=!0},p(i,n){if(n&65){a=i[6](i[0].speakers);let o;for(o=0;o<a.length;o+=1){const b=_e(i,a,o);l[o]?(l[o].p(b,n),v(l[o],1)):(l[o]=ge(b),l[o].c(),v(l[o],1),l[o].m(e,null))}for(F(),o=a.length;o<l.length;o+=1)t(o);C()}},i(i){if(!s){for(let n=0;n<a.length;n+=1)v(l[n]);s=!0}},o(i){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)T(l[n]);s=!1},d(i){i&&c(e),Ne(l,i)}}}function ge(f){let e,s,a,l,t,i=f[16].name+"",n,o,b,V;return s=new Fe({props:{speaker:f[16],size:"semi-small"}}),{c(){e=I("div"),Y(s.$$.fragment),a=A(),l=I("div"),t=I("a"),n=M(i),b=A(),this.h()},l(m){e=D(m,"DIV",{class:!0});var E=w(e);x(s.$$.fragment,E),a=H(E),l=D(E,"DIV",{class:!0});var u=w(l);t=D(u,"A",{href:!0,class:!0});var _=w(t);n=R(_,i),_.forEach(c),u.forEach(c),b=H(E),E.forEach(c),this.h()},h(){g(t,"href",o="/lide?id="+f[16].id),g(t,"class","text-xl"),g(l,"class","m-auto"),g(e,"class","flex gap-2")},m(m,E){k(m,e,E),ee(s,e,null),$(e,a),$(e,l),$(l,t),$(t,n),$(e,b),V=!0},p(m,E){const u={};E&1&&(u.speaker=m[16]),s.$set(u),(!V||E&1)&&i!==(i=m[16].name+"")&&le(n,i),(!V||E&1&&o!==(o="/lide?id="+m[16].id))&&g(t,"href",o)},i(m){V||(v(s.$$.fragment,m),V=!0)},o(m){T(s.$$.fragment,m),V=!1},d(m){m&&c(e),te(s)}}}function Ee(f){let e,s,a;return s=new Xe({props:{source:f[0].description,renderers:f[5]}}),{c(){e=I("div"),Y(s.$$.fragment),this.h()},l(l){e=D(l,"DIV",{class:!0});var t=w(e);x(s.$$.fragment,t),t.forEach(c),this.h()},h(){g(e,"class","mt-6 mb-6")},m(l,t){k(l,e,t),ee(s,e,null),a=!0},p(l,t){const i={};t&1&&(i.source=l[0].description),s.$set(i)},i(l){a||(v(s.$$.fragment,l),a=!0)},o(l){T(s.$$.fragment,l),a=!1},d(l){l&&c(e),te(s)}}}function Ie(f){let e,s,a,l,t,i;return t=new Pe({props:{event:f[1].spec.events.find(f[11])}}),{c(){e=I("div"),s=I("h2"),a=M("Sou\u010D\xE1st ud\xE1losti:"),l=A(),Y(t.$$.fragment),this.h()},l(n){e=D(n,"DIV",{class:!0});var o=w(e);s=D(o,"H2",{class:!0});var b=w(s);a=R(b,"Sou\u010D\xE1st ud\xE1losti:"),b.forEach(c),l=H(o),x(t.$$.fragment,o),o.forEach(c),this.h()},h(){g(s,"class","text uppercase mb-4 font-semibold"),g(e,"class","mt-6")},m(n,o){k(n,e,o),$(e,s),$(s,a),$(e,l),ee(t,e,null),i=!0},p(n,o){const b={};o&3&&(b.event=n[1].spec.events.find(n[11])),t.$set(b)},i(n){i||(v(t.$$.fragment,n),i=!0)},o(n){T(t.$$.fragment,n),i=!1},d(n){n&&c(e),te(t)}}}function De(f){let e,s,a,l=f[2].length+"",t,i,n,o,b,V=f[2],m=[];for(let u=0;u<V.length;u+=1)m[u]=we(pe(f,V,u));const E=u=>T(m[u],1,1,()=>{m[u]=null});return{c(){e=I("div"),s=I("h2"),a=M("Obsahuje ud\xE1losti ("),t=M(l),i=M(")"),n=A(),o=I("div");for(let u=0;u<m.length;u+=1)m[u].c();this.h()},l(u){e=D(u,"DIV",{class:!0});var _=w(e);s=D(_,"H2",{class:!0});var p=w(s);a=R(p,"Obsahuje ud\xE1losti ("),t=R(p,l),i=R(p,")"),p.forEach(c),_.forEach(c),n=H(u),o=D(u,"DIV",{});var h=w(o);for(let q=0;q<m.length;q+=1)m[q].l(h);h.forEach(c),this.h()},h(){g(s,"class","text uppercase mb-4"),g(e,"class","mt-6")},m(u,_){k(u,e,_),$(e,s),$(s,a),$(s,t),$(s,i),k(u,n,_),k(u,o,_);for(let p=0;p<m.length;p+=1)m[p].m(o,null);b=!0},p(u,_){if((!b||_&4)&&l!==(l=u[2].length+"")&&le(t,l),_&4){V=u[2];let p;for(p=0;p<V.length;p+=1){const h=pe(u,V,p);m[p]?(m[p].p(h,_),v(m[p],1)):(m[p]=we(h),m[p].c(),v(m[p],1),m[p].m(o,null))}for(F(),p=V.length;p<m.length;p+=1)E(p);C()}},i(u){if(!b){for(let _=0;_<V.length;_+=1)v(m[_]);b=!0}},o(u){m=m.filter(Boolean);for(let _=0;_<m.length;_+=1)T(m[_]);b=!1},d(u){u&&c(e),u&&c(n),u&&c(o),Ne(m,u)}}}function we(f){let e,s;return e=new Pe({props:{event:f[13]}}),{c(){Y(e.$$.fragment)},l(a){x(e.$$.fragment,a)},m(a,l){ee(e,a,l),s=!0},p(a,l){const t={};l&4&&(t.event=a[13]),e.$set(t)},i(a){s||(v(e.$$.fragment,a),s=!0)},o(a){T(e.$$.fragment,a),s=!1},d(a){te(e,a)}}}function Ke(f){let e,s,a,l;document.title=e=(f[0]?f[0].name:"")+" | Ud\xE1losti | "+(f[1]?f[1].name:"UTXO.22");let t=f[1]&&f[0]&&he(f);return{c(){s=A(),a=I("section"),t&&t.c(),this.h()},l(i){He('[data-svelte="svelte-v4msem"]',document.head).forEach(c),s=H(i),a=D(i,"SECTION",{class:!0});var o=w(a);t&&t.l(o),o.forEach(c),this.h()},h(){g(a,"class","relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web")},m(i,n){k(i,s,n),k(i,a,n),t&&t.m(a,null),l=!0},p(i,[n]){(!l||n&3)&&e!==(e=(i[0]?i[0].name:"")+" | Ud\xE1losti | "+(i[1]?i[1].name:"UTXO.22"))&&(document.title=e),i[1]&&i[0]?t?(t.p(i,n),n&3&&v(t,1)):(t=he(i),t.c(),v(t,1),t.m(a,null)):t&&(F(),T(t,1,1,()=>{t=null}),C())},i(i){l||(v(t),l=!0)},o(i){T(t),l=!1},d(i){i&&c(s),i&&c(a),t&&t.d()}}}const al=!0;function Qe(f,e,s){let a,l,t,i,n,o,b;fe(f,Me,h=>s(1,n=h)),fe(f,qe,h=>s(9,o=h)),fe(f,de,h=>s(4,b=h));const V={link:Ze,paragraph:ye};function m(h){const B=new URLSearchParams(h).get("id");return n.spec.events.find(z=>z.id===B)||Be("/"),B}function E(h){if(!!h)return h.map(q=>n.spec.speakers.find(B=>B.id===q))}function u(h){const q=n.spec.tracks.find(B=>B.id===h);return q.shortname||q.name}const _=()=>Ce(l.id,de),p=h=>h.id===l.parent;return f.$$.update=()=>{f.$$.dirty&512&&s(8,a=m(o.url.search)),f.$$.dirty&258&&s(0,l=n?n.spec.events.find(h=>h.id===a):null),f.$$.dirty&3&&s(3,t=l?Re(l,n):null),f.$$.dirty&3&&s(2,i=n.spec.events.filter(h=>h.parent===l.id))},[l,n,i,t,b,V,E,u,a,o,_,p]}class fl extends Ve{constructor(e){super();Se(this,e,Qe,Ke,je,{})}}export{fl as default,al as prerender};