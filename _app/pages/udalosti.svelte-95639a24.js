import{S as fe,i as ue,s as ce,e as g,t as R,k as U,w as K,c as E,a as w,d as c,h as j,m as y,x as Q,b,g as V,F as v,y as W,j as X,q as $,o as S,B as Y,p as Z,G as me,R as pe,H as se,n as F}from"../chunks/index-e45cd9d1.js";import{p as de}from"../chunks/stores-f185dc56.js";import{g as _e}from"../chunks/navigation-0e6511d1.js";import{b as ve}from"../chunks/stores-adaa4006.js";import{E as he}from"../chunks/EventTypeLabel-5efb0eba.js";import{A as ke,S as be,L as $e}from"../chunks/Avatar-f71fd69a.js";import"../chunks/singletons-d1fb5791.js";import"../chunks/index-c650cd5f.js";function ae(n,s,o){const r=n.slice();return r[8]=s[o],r}function re(n){let s,o,r,t,l,e,f,i,I,k,u=n[4](n[1].track)+"",m,h,D,z=n[1].duration+"",C,G,H,L,B=n[1].name+"",M,N,q,A,T;i=new he({props:{event:n[1],size:"big"}});let d=n[1].speakers&&n[1].speakers.length>0&&ie(n),_=n[1].description&&oe(n);return{c(){s=g("div"),o=g("a"),r=g("i"),t=R("\xA0Zp\u011Bt"),l=U(),e=g("div"),f=g("div"),K(i.$$.fragment),I=U(),k=g("div"),m=R(u),h=U(),D=g("div"),C=R(z),G=R("m"),H=U(),L=g("h1"),M=R(B),N=U(),d&&d.c(),q=U(),A=g("div"),_&&_.c(),this.h()},l(a){s=E(a,"DIV",{class:!0});var p=w(s);o=E(p,"A",{href:!0});var O=w(o);r=E(O,"I",{class:!0}),w(r).forEach(c),t=j(O,"\xA0Zp\u011Bt"),O.forEach(c),p.forEach(c),l=y(a),e=E(a,"DIV",{class:!0});var P=w(e);f=E(P,"DIV",{});var x=w(f);Q(i.$$.fragment,x),x.forEach(c),I=y(P),k=E(P,"DIV",{class:!0});var ee=w(k);m=j(ee,u),ee.forEach(c),h=y(P),D=E(P,"DIV",{class:!0});var J=w(D);C=j(J,z),G=j(J,"m"),J.forEach(c),P.forEach(c),H=y(a),L=E(a,"H1",{class:!0});var te=w(L);M=j(te,B),te.forEach(c),N=y(a),d&&d.l(a),q=y(a),A=E(a,"DIV",{class:!0});var le=w(A);_&&_.l(le),le.forEach(c),this.h()},h(){b(r,"class","fa-solid fa-arrow-left"),b(o,"href","javascript:history.back()"),b(s,"class","mb-6 uppercase text-gray-500"),b(k,"class","text-md my-auto"),b(D,"class","text-sm my-auto"),b(e,"class","mb-6 flex flex-wrap gap-4"),b(L,"class","text-2xl font-bold"),b(A,"class","mt-8")},m(a,p){V(a,s,p),v(s,o),v(o,r),v(o,t),V(a,l,p),V(a,e,p),v(e,f),W(i,f,null),v(e,I),v(e,k),v(k,m),v(e,h),v(e,D),v(D,C),v(D,G),V(a,H,p),V(a,L,p),v(L,M),V(a,N,p),d&&d.m(a,p),V(a,q,p),V(a,A,p),_&&_.m(A,null),T=!0},p(a,p){const O={};p&2&&(O.event=a[1]),i.$set(O),(!T||p&2)&&u!==(u=a[4](a[1].track)+"")&&X(m,u),(!T||p&2)&&z!==(z=a[1].duration+"")&&X(C,z),(!T||p&2)&&B!==(B=a[1].name+"")&&X(M,B),a[1].speakers&&a[1].speakers.length>0?d?(d.p(a,p),p&2&&$(d,1)):(d=ie(a),d.c(),$(d,1),d.m(q.parentNode,q)):d&&(F(),S(d,1,1,()=>{d=null}),Z()),a[1].description?_?(_.p(a,p),p&2&&$(_,1)):(_=oe(a),_.c(),$(_,1),_.m(A,null)):_&&(F(),S(_,1,1,()=>{_=null}),Z())},i(a){T||($(i.$$.fragment,a),$(d),$(_),T=!0)},o(a){S(i.$$.fragment,a),S(d),S(_),T=!1},d(a){a&&c(s),a&&c(l),a&&c(e),Y(i),a&&c(H),a&&c(L),a&&c(N),d&&d.d(a),a&&c(q),a&&c(A),_&&_.d()}}}function ie(n){let s,o,r=n[3](n[1].speakers),t=[];for(let e=0;e<r.length;e+=1)t[e]=ne(ae(n,r,e));const l=e=>S(t[e],1,1,()=>{t[e]=null});return{c(){s=g("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){s=E(e,"DIV",{class:!0});var f=w(s);for(let i=0;i<t.length;i+=1)t[i].l(f);f.forEach(c),this.h()},h(){b(s,"class","mt-4 mb-2 flex flex-wrap gap-4")},m(e,f){V(e,s,f);for(let i=0;i<t.length;i+=1)t[i].m(s,null);o=!0},p(e,f){if(f&10){r=e[3](e[1].speakers);let i;for(i=0;i<r.length;i+=1){const I=ae(e,r,i);t[i]?(t[i].p(I,f),$(t[i],1)):(t[i]=ne(I),t[i].c(),$(t[i],1),t[i].m(s,null))}for(F(),i=r.length;i<t.length;i+=1)l(i);Z()}},i(e){if(!o){for(let f=0;f<r.length;f+=1)$(t[f]);o=!0}},o(e){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)S(t[f]);o=!1},d(e){e&&c(s),me(t,e)}}}function ne(n){let s,o,r,t,l,e=n[8].name+"",f,i,I,k;return o=new ke({props:{speaker:n[8],size:"semi-small"}}),{c(){s=g("div"),K(o.$$.fragment),r=U(),t=g("div"),l=g("a"),f=R(e),I=U(),this.h()},l(u){s=E(u,"DIV",{class:!0});var m=w(s);Q(o.$$.fragment,m),r=y(m),t=E(m,"DIV",{class:!0});var h=w(t);l=E(h,"A",{href:!0,class:!0});var D=w(l);f=j(D,e),D.forEach(c),h.forEach(c),I=y(m),m.forEach(c),this.h()},h(){b(l,"href",i="/lide?id="+n[8].id),b(l,"class","text-xl"),b(t,"class","m-auto"),b(s,"class","flex gap-2")},m(u,m){V(u,s,m),W(o,s,null),v(s,r),v(s,t),v(t,l),v(l,f),v(s,I),k=!0},p(u,m){const h={};m&2&&(h.speaker=u[8]),o.$set(h),(!k||m&2)&&e!==(e=u[8].name+"")&&X(f,e),(!k||m&2&&i!==(i="/lide?id="+u[8].id))&&b(l,"href",i)},i(u){k||($(o.$$.fragment,u),k=!0)},o(u){S(o.$$.fragment,u),k=!1},d(u){u&&c(s),Y(o)}}}function oe(n){let s,o;return s=new be({props:{source:n[1].description,renderers:n[2]}}),{c(){K(s.$$.fragment)},l(r){Q(s.$$.fragment,r)},m(r,t){W(s,r,t),o=!0},p(r,t){const l={};t&2&&(l.source=r[1].description),s.$set(l)},i(r){o||($(s.$$.fragment,r),o=!0)},o(r){S(s.$$.fragment,r),o=!1},d(r){Y(s,r)}}}function ge(n){let s,o,r,t;document.title=s=(n[1]?n[1].name:"")+" | Ud\xE1losti | "+(n[0]?n[0].name:"UTXO.22");let l=n[0]&&n[1]&&re(n);return{c(){o=U(),r=g("section"),l&&l.c(),this.h()},l(e){pe('[data-svelte="svelte-v4msem"]',document.head).forEach(c),o=y(e),r=E(e,"SECTION",{class:!0});var i=w(r);l&&l.l(i),i.forEach(c),this.h()},h(){b(r,"class","relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web")},m(e,f){V(e,o,f),V(e,r,f),l&&l.m(r,null),t=!0},p(e,[f]){(!t||f&3)&&s!==(s=(e[1]?e[1].name:"")+" | Ud\xE1losti | "+(e[0]?e[0].name:"UTXO.22"))&&(document.title=s),e[0]&&e[1]?l?(l.p(e,f),f&3&&$(l,1)):(l=re(e),l.c(),$(l,1),l.m(r,null)):l&&(F(),S(l,1,1,()=>{l=null}),Z())},i(e){t||($(l),t=!0)},o(e){S(l),t=!1},d(e){e&&c(o),e&&c(r),l&&l.d()}}}const Le=!0;function Ee(n,s,o){let r,t,l,e;se(n,ve,u=>o(0,l=u)),se(n,de,u=>o(6,e=u));const f={link:$e};function i(u){const h=new URLSearchParams(u).get("id");return l.spec.events.find(D=>D.id===h)||_e("/"),h}function I(u){if(!!u)return u.map(m=>l.spec.speakers.find(h=>h.id===m))}function k(u){const m=l.spec.tracks.find(h=>h.id===u);return m.shortname||m.name}return n.$$.update=()=>{n.$$.dirty&64&&o(5,r=i(e.url.search)),n.$$.dirty&33&&o(1,t=l?l.spec.events.find(u=>u.id===r):null)},[l,t,f,I,k,r,e]}class Te extends fe{constructor(s){super();ue(this,s,Ee,ge,ce,{})}}export{Te as default,Le as prerender};
