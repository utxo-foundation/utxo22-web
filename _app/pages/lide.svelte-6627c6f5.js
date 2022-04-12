import{S as Xe,i as Ze,s as Ge,e as p,t as E,k as C,w as te,c as v,a as k,d as u,h as I,m as N,x as le,b as h,g as S,F as c,y as se,j as X,q as b,o as A,B as re,p as Y,R as Me,H as Le,n as y,E as Ee,l as je,G as Je}from"../chunks/index-e45cd9d1.js";import{g as Ke}from"../chunks/navigation-0e6511d1.js";import{A as Qe,S as Ie,L as Ye}from"../chunks/Avatar-f71fd69a.js";import{a as ye}from"../chunks/Event-5ce3af28.js";import{p as xe}from"../chunks/stores-f185dc56.js";import{b as et}from"../chunks/stores-adaa4006.js";import"../chunks/singletons-d1fb5791.js";import"../chunks/index-c650cd5f.js";function Te(i,e,r){const l=i.slice();return l[9]=e[r],l}function Ue(i){let e,r,l,t,a,s,f,n,m,d,O,D,Z,q,G=i[0].name+"",ae,ke,x=We(i[0].country)+"",ie,be,ne,oe,fe,ce,ue,de,me,J,R,B,ge,ee=i[2].length+"",he,we,$e,K,z,H,M;n=new Qe({props:{speaker:i[0],size:"big"}});let P=i[0].nickname&&Ce(i),g=i[0].bio&&Ne(i),w=i[0].orgs&&qe(i),L=i[0].tracks&&i[0].tracks.length>0&&ze(i),j=i[0].twitter&&He(i),T=i[0].linkedin&&Oe(i),U=i[0].web&&i[0].web.url&&Re(i),$=i[0].desc&&Be(i);const De=[lt,tt],F=[];function Ve(o,_){return o[2].length>0?0:1}return z=Ve(i),H=F[z]=De[z](i),{c(){e=p("div"),r=p("a"),l=p("i"),t=E("\xA0Zp\u011Bt"),a=C(),s=p("div"),f=p("div"),te(n.$$.fragment),m=C(),d=p("div"),O=p("div"),D=E("P\u0159edn\xE1\u0161ej\xEDc\xED"),Z=C(),q=p("h1"),ae=E(G),ke=C(),ie=E(x),be=C(),P&&P.c(),ne=C(),g&&g.c(),oe=C(),w&&w.c(),fe=C(),L&&L.c(),ce=C(),j&&j.c(),ue=C(),T&&T.c(),de=C(),U&&U.c(),me=C(),$&&$.c(),J=C(),R=p("div"),B=p("h2"),ge=E("Ud\xE1losti ("),he=E(ee),we=E(")"),$e=C(),K=p("div"),H.c(),this.h()},l(o){e=v(o,"DIV",{class:!0});var _=k(e);r=v(_,"A",{href:!0});var Q=k(r);l=v(Q,"I",{class:!0}),k(l).forEach(u),t=I(Q,"\xA0Zp\u011Bt"),Q.forEach(u),_.forEach(u),a=N(o),s=v(o,"DIV",{class:!0});var W=k(s);f=v(W,"DIV",{});var Se=k(f);le(n.$$.fragment,Se),Se.forEach(u),m=N(W),d=v(W,"DIV",{class:!0});var V=k(d);O=v(V,"DIV",{class:!0});var Ae=k(O);D=I(Ae,"P\u0159edn\xE1\u0161ej\xEDc\xED"),Ae.forEach(u),Z=N(V),q=v(V,"H1",{class:!0});var _e=k(q);ae=I(_e,G),ke=N(_e),ie=I(_e,x),_e.forEach(u),be=N(V),P&&P.l(V),ne=N(V),g&&g.l(V),oe=N(V),w&&w.l(V),fe=N(V),L&&L.l(V),ce=N(V),j&&j.l(V),ue=N(V),T&&T.l(V),de=N(V),U&&U.l(V),V.forEach(u),W.forEach(u),me=N(o),$&&$.l(o),J=N(o),R=v(o,"DIV",{class:!0});var pe=k(R);B=v(pe,"H2",{class:!0});var ve=k(B);ge=I(ve,"Ud\xE1losti ("),he=I(ve,ee),we=I(ve,")"),ve.forEach(u),$e=N(pe),K=v(pe,"DIV",{});var Pe=k(K);H.l(Pe),Pe.forEach(u),pe.forEach(u),this.h()},h(){h(l,"class","fa-solid fa-arrow-left"),h(r,"href","javascript:history.back()"),h(e,"class","mb-6 uppercase text-gray-500"),h(O,"class","mb-4 text-md uppercase"),h(q,"class","text-2xl font-bold"),h(d,"class","mt-4 sm:mt-0"),h(s,"class","sm:flex gap-10 mt-4"),h(B,"class","uppercase mb-4 text-md"),h(R,"class","mt-6")},m(o,_){S(o,e,_),c(e,r),c(r,l),c(r,t),S(o,a,_),S(o,s,_),c(s,f),se(n,f,null),c(s,m),c(s,d),c(d,O),c(O,D),c(d,Z),c(d,q),c(q,ae),c(q,ke),c(q,ie),c(d,be),P&&P.m(d,null),c(d,ne),g&&g.m(d,null),c(d,oe),w&&w.m(d,null),c(d,fe),L&&L.m(d,null),c(d,ce),j&&j.m(d,null),c(d,ue),T&&T.m(d,null),c(d,de),U&&U.m(d,null),S(o,me,_),$&&$.m(o,_),S(o,J,_),S(o,R,_),c(R,B),c(B,ge),c(B,he),c(B,we),c(R,$e),c(R,K),F[z].m(K,null),M=!0},p(o,_){const Q={};_&1&&(Q.speaker=o[0]),n.$set(Q),(!M||_&1)&&G!==(G=o[0].name+"")&&X(ae,G),(!M||_&1)&&x!==(x=We(o[0].country)+"")&&X(ie,x),o[0].nickname?P?P.p(o,_):(P=Ce(o),P.c(),P.m(d,ne)):P&&(P.d(1),P=null),o[0].bio?g?(g.p(o,_),_&1&&b(g,1)):(g=Ne(o),g.c(),b(g,1),g.m(d,oe)):g&&(y(),A(g,1,1,()=>{g=null}),Y()),o[0].orgs?w?(w.p(o,_),_&1&&b(w,1)):(w=qe(o),w.c(),b(w,1),w.m(d,fe)):w&&(y(),A(w,1,1,()=>{w=null}),Y()),o[0].tracks&&o[0].tracks.length>0?L?L.p(o,_):(L=ze(o),L.c(),L.m(d,ce)):L&&(L.d(1),L=null),o[0].twitter?j?j.p(o,_):(j=He(o),j.c(),j.m(d,ue)):j&&(j.d(1),j=null),o[0].linkedin?T?T.p(o,_):(T=Oe(o),T.c(),T.m(d,de)):T&&(T.d(1),T=null),o[0].web&&o[0].web.url?U?U.p(o,_):(U=Re(o),U.c(),U.m(d,null)):U&&(U.d(1),U=null),o[0].desc?$?($.p(o,_),_&1&&b($,1)):($=Be(o),$.c(),b($,1),$.m(J.parentNode,J)):$&&(y(),A($,1,1,()=>{$=null}),Y()),(!M||_&4)&&ee!==(ee=o[2].length+"")&&X(he,ee);let W=z;z=Ve(o),z===W?F[z].p(o,_):(y(),A(F[W],1,1,()=>{F[W]=null}),Y(),H=F[z],H?H.p(o,_):(H=F[z]=De[z](o),H.c()),b(H,1),H.m(K,null))},i(o){M||(b(n.$$.fragment,o),b(g),b(w),b($),b(H),M=!0)},o(o){A(n.$$.fragment,o),A(g),A(w),A($),A(H),M=!1},d(o){o&&u(e),o&&u(a),o&&u(s),re(n),P&&P.d(),g&&g.d(),w&&w.d(),L&&L.d(),j&&j.d(),T&&T.d(),U&&U.d(),o&&u(me),$&&$.d(o),o&&u(J),o&&u(R),F[z].d()}}}function Ce(i){let e,r,l,t,a,s=i[0].nickname+"",f;return{c(){e=p("div"),r=p("span"),l=E("aka"),t=C(),a=p("span"),f=E(s),this.h()},l(n){e=v(n,"DIV",{class:!0});var m=k(e);r=v(m,"SPAN",{class:!0});var d=k(r);l=I(d,"aka"),d.forEach(u),t=N(m),a=v(m,"SPAN",{class:!0});var O=k(a);f=I(O,s),O.forEach(u),m.forEach(u),this.h()},h(){h(r,"class","text-xs"),h(a,"class","font-bold"),h(e,"class","mt-1")},m(n,m){S(n,e,m),c(e,r),c(r,l),c(e,t),c(e,a),c(a,f)},p(n,m){m&1&&s!==(s=n[0].nickname+"")&&X(f,s)},d(n){n&&u(e)}}}function Ne(i){let e,r,l;return r=new Ie({props:{source:i[0].bio,renderers:i[3]}}),{c(){e=p("div"),te(r.$$.fragment),this.h()},l(t){e=v(t,"DIV",{class:!0});var a=k(e);le(r.$$.fragment,a),a.forEach(u),this.h()},h(){h(e,"class","mt-4 text-blue-web italic")},m(t,a){S(t,e,a),se(r,e,null),l=!0},p(t,a){const s={};a&1&&(s.source=t[0].bio),r.$set(s)},i(t){l||(b(r.$$.fragment,t),l=!0)},o(t){A(r.$$.fragment,t),l=!1},d(t){t&&u(e),re(r)}}}function qe(i){let e,r,l;return r=new Ie({props:{source:i[0].orgs,renderers:i[3]}}),{c(){e=p("div"),te(r.$$.fragment),this.h()},l(t){e=v(t,"DIV",{class:!0});var a=k(e);le(r.$$.fragment,a),a.forEach(u),this.h()},h(){h(e,"class","mt-4 text-blue-web links")},m(t,a){S(t,e,a),se(r,e,null),l=!0},p(t,a){const s={};a&1&&(s.source=t[0].orgs),r.$set(s)},i(t){l||(b(r.$$.fragment,t),l=!0)},o(t){A(r.$$.fragment,t),l=!1},d(t){t&&u(e),re(r)}}}function ze(i){let e,r,l=i[0].tracks.map(i[7]).join(", ")+"",t;return{c(){e=p("div"),r=E("Sekce: "),t=E(l),this.h()},l(a){e=v(a,"DIV",{class:!0});var s=k(e);r=I(s,"Sekce: "),t=I(s,l),s.forEach(u),this.h()},h(){h(e,"class","mt-4")},m(a,s){S(a,e,s),c(e,r),c(e,t)},p(a,s){s&1&&l!==(l=a[0].tracks.map(a[7]).join(", ")+"")&&X(t,l)},d(a){a&&u(e)}}}function He(i){let e,r,l,t,a=i[0].twitter+"",s,f;return{c(){e=p("div"),r=E("Twitter: "),l=p("a"),t=E("@"),s=E(a),this.h()},l(n){e=v(n,"DIV",{class:!0});var m=k(e);r=I(m,"Twitter: "),l=v(m,"A",{href:!0,target:!0,class:!0});var d=k(l);t=I(d,"@"),s=I(d,a),d.forEach(u),m.forEach(u),this.h()},h(){h(l,"href",f="https://twitter.com/"+i[0].twitter),h(l,"target","_blank"),h(l,"class","font-bold"),h(e,"class","mt-2")},m(n,m){S(n,e,m),c(e,r),c(e,l),c(l,t),c(l,s)},p(n,m){m&1&&a!==(a=n[0].twitter+"")&&X(s,a),m&1&&f!==(f="https://twitter.com/"+n[0].twitter)&&h(l,"href",f)},d(n){n&&u(e)}}}function Oe(i){let e,r,l,t,a=i[0].linkedin+"",s,f;return{c(){e=p("div"),r=E("LinkedIn: "),l=p("a"),t=E("@"),s=E(a),this.h()},l(n){e=v(n,"DIV",{class:!0});var m=k(e);r=I(m,"LinkedIn: "),l=v(m,"A",{href:!0,target:!0,class:!0});var d=k(l);t=I(d,"@"),s=I(d,a),d.forEach(u),m.forEach(u),this.h()},h(){h(l,"href",f="https://linkedin.com/in/"+i[0].twitter),h(l,"target","_blank"),h(l,"class","font-bold"),h(e,"class","mt-2")},m(n,m){S(n,e,m),c(e,r),c(e,l),c(l,t),c(l,s)},p(n,m){m&1&&a!==(a=n[0].linkedin+"")&&X(s,a),m&1&&f!==(f="https://linkedin.com/in/"+n[0].twitter)&&h(l,"href",f)},d(n){n&&u(e)}}}function Re(i){let e,r,l,t=(i[0].web.name||i[0].web.url.replace(/^https?:\/\//,""))+"",a,s;return{c(){e=p("div"),r=E("Web: "),l=p("a"),a=E(t),this.h()},l(f){e=v(f,"DIV",{class:!0});var n=k(e);r=I(n,"Web: "),l=v(n,"A",{href:!0,target:!0,class:!0});var m=k(l);a=I(m,t),m.forEach(u),n.forEach(u),this.h()},h(){h(l,"href",s=i[0].web.url),h(l,"target","_blank"),h(l,"class","font-bold"),h(e,"class","mt-2")},m(f,n){S(f,e,n),c(e,r),c(e,l),c(l,a)},p(f,n){n&1&&t!==(t=(f[0].web.name||f[0].web.url.replace(/^https?:\/\//,""))+"")&&X(a,t),n&1&&s!==(s=f[0].web.url)&&h(l,"href",s)},d(f){f&&u(e)}}}function Be(i){let e,r,l;return r=new Ie({props:{source:i[0].desc,renderers:i[3]}}),{c(){e=p("div"),te(r.$$.fragment),this.h()},l(t){e=v(t,"DIV",{class:!0});var a=k(e);le(r.$$.fragment,a),a.forEach(u),this.h()},h(){h(e,"class","mt-6")},m(t,a){S(t,e,a),se(r,e,null),l=!0},p(t,a){const s={};a&1&&(s.source=t[0].desc),r.$set(s)},i(t){l||(b(r.$$.fragment,t),l=!0)},o(t){A(r.$$.fragment,t),l=!1},d(t){t&&u(e),re(r)}}}function tt(i){let e;return{c(){e=E("Tento \u010Dlov\u011Bk zat\xEDm nem\xE1 v programu \u017E\xE1dnou ud\xE1lost.")},l(r){e=I(r,"Tento \u010Dlov\u011Bk zat\xEDm nem\xE1 v programu \u017E\xE1dnou ud\xE1lost.")},m(r,l){S(r,e,l)},p:Ee,i:Ee,o:Ee,d(r){r&&u(e)}}}function lt(i){let e,r,l=i[2],t=[];for(let s=0;s<l.length;s+=1)t[s]=Fe(Te(i,l,s));const a=s=>A(t[s],1,1,()=>{t[s]=null});return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=je()},l(s){for(let f=0;f<t.length;f+=1)t[f].l(s);e=je()},m(s,f){for(let n=0;n<t.length;n+=1)t[n].m(s,f);S(s,e,f),r=!0},p(s,f){if(f&4){l=s[2];let n;for(n=0;n<l.length;n+=1){const m=Te(s,l,n);t[n]?(t[n].p(m,f),b(t[n],1)):(t[n]=Fe(m),t[n].c(),b(t[n],1),t[n].m(e.parentNode,e))}for(y(),n=l.length;n<t.length;n+=1)a(n);Y()}},i(s){if(!r){for(let f=0;f<l.length;f+=1)b(t[f]);r=!0}},o(s){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)A(t[f]);r=!1},d(s){Je(t,s),s&&u(e)}}}function Fe(i){let e,r;return e=new ye({props:{event:i[9]}}),{c(){te(e.$$.fragment)},l(l){le(e.$$.fragment,l)},m(l,t){se(e,l,t),r=!0},p(l,t){const a={};t&4&&(a.event=l[9]),e.$set(a)},i(l){r||(b(e.$$.fragment,l),r=!0)},o(l){A(e.$$.fragment,l),r=!1},d(l){re(e,l)}}}function st(i){let e,r,l,t;document.title=e=(i[0]?i[0].name:"")+" | Lid\xE9 | "+(i[1]?i[1].name:"UTXO.22");let a=i[1]&&i[0]&&Ue(i);return{c(){r=C(),l=p("section"),a&&a.c(),this.h()},l(s){Me('[data-svelte="svelte-909bdt"]',document.head).forEach(u),r=N(s),l=v(s,"SECTION",{class:!0});var n=k(l);a&&a.l(n),n.forEach(u),this.h()},h(){h(l,"class","relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web")},m(s,f){S(s,r,f),S(s,l,f),a&&a.m(l,null),t=!0},p(s,[f]){(!t||f&3)&&e!==(e=(s[0]?s[0].name:"")+" | Lid\xE9 | "+(s[1]?s[1].name:"UTXO.22"))&&(document.title=e),s[1]&&s[0]?a?(a.p(s,f),f&3&&b(a,1)):(a=Ue(s),a.c(),b(a,1),a.m(l,null)):a&&(y(),A(a,1,1,()=>{a=null}),Y())},i(s){t||(b(a),t=!0)},o(s){A(a),t=!1},d(s){s&&u(r),s&&u(l),a&&a.d()}}}const mt=!0;function We(i){const e=i.toUpperCase().split("").map(r=>127397+r.charCodeAt());return String.fromCodePoint(...e)}function rt(i,e,r){let l,t,a,s,f;Le(i,et,D=>r(1,s=D)),Le(i,xe,D=>r(6,f=D));const n={link:Ye};function m(D){const q=new URLSearchParams(D).get("id");return s.spec.speakers.find(G=>G.id===q)||Ke("/"),q}function d(D){if(!D)return"n/a";const Z=s.spec.tracks.find(q=>q.id===D);return Z.shortname||Z.name}const O=D=>d(D);return i.$$.update=()=>{i.$$.dirty&64&&r(5,l=m(f.url.search)),i.$$.dirty&34&&r(0,t=s?s.spec.speakers.find(D=>D.id===l):null),i.$$.dirty&3&&r(2,a=t?s.spec.events.filter(D=>D.speakers&&D.speakers.includes(t.id)):[])},[t,s,a,n,d,l,f,O]}class ht extends Xe{constructor(e){super();Ze(this,e,rt,st,Ge,{})}}export{ht as default,mt as prerender};
