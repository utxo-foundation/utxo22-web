import{S as xe,i as $e,s as Ve,k as D,l as le,m as x,g as V,e as f,c as u,a as h,d as o,b as i,J as n,K as lt,t as O,h as j,E as te,L as oe,M as ie,q as L,w as Ee,x as we,y as Ie,o as Z,B as De,n as ye,p as Ae,N as he,O as at,P as st,Q as it,R as nt,v as ot,T as ct,U as ft}from"../chunks/index-695b5929.js";import{p as je}from"../chunks/stores-67278648.js";import{b as Ne,u as ke,l as ut}from"../chunks/stores-ca1bbb18.js";import{a as dt}from"../chunks/api-1eee4784.js";import{l as ht,a as vt}from"../chunks/orders-d7200507.js";import"../chunks/index-57c7a2a5.js";function Fe(c,t,a){const l=c.slice();return l[3]=t[a],l}function Xe(c,t,a){const l=c.slice();return l[3]=t[a],l}function qe(c){let t,a,l=c[0]==="small"&&Be(c),e=c[0]==="normal"&&Re(c);return{c(){l&&l.c(),t=D(),e&&e.c(),a=le()},l(r){l&&l.l(r),t=x(r),e&&e.l(r),a=le()},m(r,s){l&&l.m(r,s),V(r,t,s),e&&e.m(r,s),V(r,a,s)},p(r,s){r[0]==="small"?l?l.p(r,s):(l=Be(r),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null),r[0]==="normal"?e?e.p(r,s):(e=Re(r),e.c(),e.m(a.parentNode,a)):e&&(e.d(1),e=null)},d(r){l&&l.d(r),r&&o(t),e&&e.d(r),r&&o(a)}}}function Be(c){let t,a=c[2],l=[];for(let e=0;e<a.length;e+=1)l[e]=Je(Xe(c,a,e));return{c(){t=f("div");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){t=u(e,"DIV",{class:!0});var r=h(t);for(let s=0;s<l.length;s+=1)l[s].l(r);r.forEach(o),this.h()},h(){i(t,"class","flex block space-x-2 m-auto w-full justify-end")},m(e,r){V(e,t,r);for(let s=0;s<l.length;s+=1)l[s].m(t,null)},p(e,r){if(r&6){a=e[2];let s;for(s=0;s<a.length;s+=1){const d=Xe(e,a,s);l[s]?l[s].p(d,r):(l[s]=Je(d),l[s].c(),l[s].m(t,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=a.length}},d(e){e&&o(t),lt(l,e)}}}function Je(c){let t,a,l,e;return{c(){t=f("a"),a=f("i"),l=D(),this.h()},l(r){t=u(r,"A",{href:!0,class:!0,target:!0});var s=h(t);a=u(s,"I",{class:!0}),h(a).forEach(o),l=x(s),s.forEach(o),this.h()},h(){i(a,"class",c[3].ico),i(t,"href",e=c[1].links[c[3].link]),i(t,"class","w-6 h-6 bg-white rounded-full hover:bg-utxo-gradient hover:text-white"),i(t,"target","_blank")},m(r,s){V(r,t,s),n(t,a),n(t,l)},p(r,s){s&2&&e!==(e=r[1].links[r[3].link])&&i(t,"href",e)},d(r){r&&o(t)}}}function Re(c){let t,a,l=c[2],e=[];for(let r=0;r<l.length;r+=1)e[r]=Ce(Fe(c,l,r));return{c(){t=f("div"),a=f("div");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){t=u(r,"DIV",{class:!0});var s=h(t);a=u(s,"DIV",{class:!0});var d=h(a);for(let v=0;v<e.length;v+=1)e[v].l(d);d.forEach(o),s.forEach(o),this.h()},h(){i(a,"class","sm:flex flex-wrap gap-3 justify-end"),i(t,"class","w-auto")},m(r,s){V(r,t,s),n(t,a);for(let d=0;d<e.length;d+=1)e[d].m(a,null)},p(r,s){if(s&6){l=r[2];let d;for(d=0;d<l.length;d+=1){const v=Fe(r,l,d);e[d]?e[d].p(v,s):(e[d]=Ce(v),e[d].c(),e[d].m(a,null))}for(;d<e.length;d+=1)e[d].d(1);e.length=l.length}},d(r){r&&o(t),lt(e,r)}}}function Ce(c){let t,a,l,e=c[3].name+"",r,s,d;return{c(){t=f("div"),a=f("a"),l=f("i"),r=O(e),d=D(),this.h()},l(v){t=u(v,"DIV",{class:!0});var g=h(t);a=u(g,"A",{href:!0,class:!0,target:!0});var b=h(a);l=u(b,"I",{class:!0}),h(l).forEach(o),r=j(b,e),b.forEach(o),d=x(g),g.forEach(o),this.h()},h(){i(l,"class",c[3].ico+" mr-2 my-auto"),i(a,"href",s=c[1].links[c[3].link]),i(a,"class","block flex"),i(a,"target","_blank"),i(t,"class","mr-4 sm:mr-0 inline-block sm:block hover:text-red-500")},m(v,g){V(v,t,g),n(t,a),n(a,l),n(a,r),n(t,d)},p(v,g){g&2&&s!==(s=v[1].links[v[3].link])&&i(a,"href",s)},d(v){v&&o(t)}}}function mt(c){let t,a=c[1]&&qe(c);return{c(){a&&a.c(),t=le()},l(l){a&&a.l(l),t=le()},m(l,e){a&&a.m(l,e),V(l,t,e)},p(l,[e]){l[1]?a?a.p(l,e):(a=qe(l),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},i:te,o:te,d(l){a&&a.d(l),l&&o(t)}}}function _t(c,t,a){let l;oe(c,Ne,s=>a(1,l=s));let{size:e="small"}=t;const r=[{link:"twitter",ico:"fa-brands fa-twitter",name:"Twitter"},{link:"instagram",ico:"fab fa-instagram",name:"Instagram"},{link:"fbevent",ico:"fab fa-facebook",name:"Facebook"},{link:"substack",ico:"fa-solid fa-envelope",name:"Newsletter"},{link:"discord",ico:"fab fa-discord",name:"Discord"},{link:"telegram",ico:"fab fa-telegram",name:"Telegram"}];return c.$$set=s=>{"size"in s&&a(0,e=s.size)},[e,l,r]}class rt extends xe{constructor(t){super();$e(this,t,_t,mt,Ve,{size:0})}}function He(c){let t,a,l,e,r,s,d,v,g,b,_,m,z,M,C,y,J;function ee(p,w){return w&1&&(s=null),s==null&&(s=!["/","/tv"].includes(p[0].url.pathname)),s?bt:p[0].url.pathname==="/tv"?gt:pt}let T=ee(c,-1),A=T(c);function R(p,w){return p[0].url.pathname==="/tv"?Et:kt}let U=R(c),S=U(c),I=c[0].url.pathname!=="/tv"&&Ze(),E=c[0].url.pathname!=="/tv"&&Ke(c),k=c[0].url.pathname==="/"&&Qe(),$=c[0].url.pathname==="/"&&We(c);return{c(){t=f("header"),a=f("div"),l=f("nav"),e=f("div"),r=f("div"),A.c(),d=D(),v=f("div"),S.c(),g=D(),I&&I.c(),b=D(),E&&E.c(),_=D(),m=f("a"),z=O("Program"),M=D(),k&&k.c(),C=D(),$&&$.c(),this.h()},l(p){t=u(p,"HEADER",{class:!0});var w=h(t);a=u(w,"DIV",{});var F=h(a);l=u(F,"NAV",{class:!0});var N=h(l);e=u(N,"DIV",{class:!0});var X=h(e);r=u(X,"DIV",{class:!0});var P=h(r);A.l(P),d=x(P),v=u(P,"DIV",{class:!0});var q=h(v);S.l(q),g=x(q),I&&I.l(q),b=x(q),E&&E.l(q),_=x(q),m=u(q,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var ae=h(m);z=j(ae,"Program"),ae.forEach(o),q.forEach(o),M=x(P),k&&k.l(P),P.forEach(o),X.forEach(o),N.forEach(o),F.forEach(o),C=x(w),$&&$.l(w),w.forEach(o),this.h()},h(){i(m,"sveltekit:prefetch",""),i(m,"href","/program"),i(m,"class","m-auto hover:text-[#E16A61]"),ie(m,"text-blue-400",c[0].url.pathname==="/program"),i(v,"class","flex lg:space-x-10 uppercase text-sm font-bold text-white flex-wrap gap-3"),i(r,"class","lg:flex lg:flex-wrap lg:space-x-10"),i(e,"class",""),i(l,"class","relative mx-auto lg:px-6 px-4 pt-4 pt-2 sm:pt-6 pb-2 sm:pb-6 pb-2 max-w-6xl text-center"),i(t,"class",y="relative bg-center bg-cover "+(c[0].url.pathname!=="/tv"?"bg-[url('/img/bg-header.jpg')]":"")+" bg-no-repeat bg-blue-web-bg print:hidden")},m(p,w){V(p,t,w),n(t,a),n(a,l),n(l,e),n(e,r),A.m(r,null),n(r,d),n(r,v),S.m(v,null),n(v,g),I&&I.m(v,null),n(v,b),E&&E.m(v,null),n(v,_),n(v,m),n(m,z),n(r,M),k&&k.m(r,null),n(t,C),$&&$.m(t,null),J=!0},p(p,w){T===(T=ee(p,w))&&A?A.p(p,w):(A.d(1),A=T(p),A&&(A.c(),A.m(r,d))),U===(U=R(p))&&S?S.p(p,w):(S.d(1),S=U(p),S&&(S.c(),S.m(v,g))),p[0].url.pathname!=="/tv"?I||(I=Ze(),I.c(),I.m(v,b)):I&&(I.d(1),I=null),p[0].url.pathname!=="/tv"?E?E.p(p,w):(E=Ke(p),E.c(),E.m(v,_)):E&&(E.d(1),E=null),w&1&&ie(m,"text-blue-400",p[0].url.pathname==="/program"),p[0].url.pathname==="/"?k?w&1&&L(k,1):(k=Qe(),k.c(),L(k,1),k.m(r,null)):k&&(ye(),Z(k,1,1,()=>{k=null}),Ae()),p[0].url.pathname==="/"?$?$.p(p,w):($=We(p),$.c(),$.m(t,null)):$&&($.d(1),$=null),(!J||w&1&&y!==(y="relative bg-center bg-cover "+(p[0].url.pathname!=="/tv"?"bg-[url('/img/bg-header.jpg')]":"")+" bg-no-repeat bg-blue-web-bg print:hidden"))&&i(t,"class",y)},i(p){J||(L(k),J=!0)},o(p){Z(k),J=!1},d(p){p&&o(t),A.d(),S.d(),I&&I.d(),E&&E.d(),k&&k.d(),$&&$.d()}}}function pt(c){let t;return{c(){t=f("div"),this.h()},l(a){t=u(a,"DIV",{class:!0}),h(t).forEach(o),this.h()},h(){i(t,"class","flex-1")},m(a,l){V(a,t,l)},p:te,d(a){a&&o(t)}}}function gt(c){let t,a,l,e,r;return{c(){t=f("div"),a=f("div"),l=f("a"),e=f("img"),this.h()},l(s){t=u(s,"DIV",{class:!0});var d=h(t);a=u(d,"DIV",{class:!0});var v=h(a);l=u(v,"A",{href:!0});var g=h(l);e=u(g,"IMG",{src:!0,class:!0,alt:!0}),g.forEach(o),v.forEach(o),d.forEach(o),this.h()},h(){he(e.src,r="/img/utxo-tv.svg")||i(e,"src",r),i(e,"class","w-full"),i(e,"alt","UTXO.TV"),i(l,"href","/tv"),i(a,"class","w-40 lg:w-32 inline-block lg:block"),i(t,"class","block justify-start lg:flex-1 my-auto text-center pb-3 lg:pb-0 pt-3 lg:pt-0")},m(s,d){V(s,t,d),n(t,a),n(a,l),n(l,e)},p:te,d(s){s&&o(t)}}}function bt(c){let t,a,l,e,r,s,d;return{c(){t=f("div"),a=f("div"),l=f("a"),e=f("img"),this.h()},l(v){t=u(v,"DIV",{class:!0});var g=h(t);a=u(g,"DIV",{class:!0});var b=h(a);l=u(b,"A",{href:!0});var _=h(l);e=u(_,"IMG",{src:!0,class:!0,alt:!0}),_.forEach(o),b.forEach(o),g.forEach(o),this.h()},h(){he(e.src,r="/img/logo-white.svg")||i(e,"src",r),i(e,"class","w-full"),i(e,"alt","UTXO.22"),i(l,"href","/"),i(a,"class","w-40 lg:w-32 inline-block lg:block"),i(t,"class","block justify-start lg:flex-1 my-auto text-center pb-3 lg:pb-0 pt-3 lg:pt-0")},m(v,g){V(v,t,g),n(t,a),n(a,l),n(l,e),s||(d=at(l,"click",c[1]),s=!0)},p:te,d(v){v&&o(t),s=!1,d()}}}function kt(c){let t,a;return{c(){t=f("a"),a=O("\xDAvod"),this.h()},l(l){t=u(l,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var e=h(t);a=j(e,"\xDAvod"),e.forEach(o),this.h()},h(){i(t,"sveltekit:prefetch",""),i(t,"href","/"),i(t,"class","m-auto hover:text-[#E16A61] "),ie(t,"text-blue-400",c[0].url.pathname==="/")},m(l,e){V(l,t,e),n(t,a)},p(l,e){e&1&&ie(t,"text-blue-400",l[0].url.pathname==="/")},d(l){l&&o(t)}}}function Et(c){let t,a;return{c(){t=f("a"),a=O("O konferenci"),this.h()},l(l){t=u(l,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var e=h(t);a=j(e,"O konferenci"),e.forEach(o),this.h()},h(){i(t,"sveltekit:prefetch",""),i(t,"href","/"),i(t,"class","m-auto hover:text-[#E16A61] "),ie(t,"text-blue-400",c[0].url.pathname==="/")},m(l,e){V(l,t,e),n(t,a)},p(l,e){e&1&&ie(t,"text-blue-400",l[0].url.pathname==="/")},d(l){l&&o(t)}}}function Ze(c){return{c:te,l:te,m:te,d:te}}function Ke(c){let t,a,l,e,r;return{c(){t=f("a"),a=O("Z\xE1znamy - utxo.tv"),l=D(),e=f("a"),r=O("Fotky"),this.h()},l(s){t=u(s,"A",{"sveltekit:prefetch":!0,href:!0,target:!0,class:!0});var d=h(t);a=j(d,"Z\xE1znamy - utxo.tv"),d.forEach(o),l=x(s),e=u(s,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var v=h(e);r=j(v,"Fotky"),v.forEach(o),this.h()},h(){i(t,"sveltekit:prefetch",""),i(t,"href","https://utxo.tv"),i(t,"target","_blank"),i(t,"class","m-auto hover:text-[#E16A61]"),i(e,"sveltekit:prefetch",""),i(e,"href","/fotky"),i(e,"class","m-auto hover:text-[#E16A61]"),ie(e,"text-blue-400",c[0].url.pathname==="/fotky")},m(s,d){V(s,t,d),n(t,a),V(s,l,d),V(s,e,d),n(e,r)},p(s,d){d&1&&ie(e,"text-blue-400",s[0].url.pathname==="/fotky")},d(s){s&&o(t),s&&o(l),s&&o(e)}}}function Qe(c){let t,a,l;return a=new rt({}),{c(){t=f("div"),Ee(a.$$.fragment),this.h()},l(e){t=u(e,"DIV",{class:!0});var r=h(t);we(a.$$.fragment,r),r.forEach(o),this.h()},h(){i(t,"class","hidden lg:block my-auto lg:flex-1 lg:pt-0 pt-4 lg:justify-end justify-center")},m(e,r){V(e,t,r),Ie(a,t,null),l=!0},i(e){l||(L(a.$$.fragment,e),l=!0)},o(e){Z(a.$$.fragment,e),l=!1},d(e){e&&o(t),De(a)}}}function We(c){let t,a,l,e,r,s,d,v,g,b,_,m,z,M,C,y,J,ee,T,A,R,U,S,I,E,k,$,p,w,F,N,X,P,q,ae;return{c(){t=f("div"),a=f("div"),l=f("div"),e=O("Otev\u0159en\xE1 komunitn\xED kryptom\u011Bnov\xE1 konference"),r=D(),s=f("div"),d=f("a"),v=f("img"),b=D(),_=f("div"),m=f("div"),z=f("div"),M=f("i"),C=D(),y=f("div"),J=O("4.-5. \u010Derven 2022"),ee=D(),T=f("div"),A=f("div"),R=f("i"),U=D(),S=f("div"),I=O("Gabriel Loci, Praha"),E=D(),k=f("div"),$=O("D\u011Bkujeme v\u0161em za \xFA\u010Dast! Uvid\xEDme se za rok .-)"),p=D(),w=f("div"),F=f("a"),N=f("span"),X=f("i"),P=O(" Sledovat novinky"),this.h()},l(re){t=u(re,"DIV",{class:!0});var H=h(t);a=u(H,"DIV",{class:!0});var G=h(a);l=u(G,"DIV",{class:!0});var ve=h(l);e=j(ve,"Otev\u0159en\xE1 komunitn\xED kryptom\u011Bnov\xE1 konference"),ve.forEach(o),r=x(G),s=u(G,"DIV",{class:!0});var ce=h(s);d=u(ce,"A",{href:!0});var fe=h(d);v=u(fe,"IMG",{src:!0,class:!0,alt:!0}),fe.forEach(o),ce.forEach(o),b=x(G),_=u(G,"DIV",{class:!0});var K=h(_);m=u(K,"DIV",{class:!0});var Q=h(m);z=u(Q,"DIV",{class:!0});var me=h(z);M=u(me,"I",{class:!0}),h(M).forEach(o),me.forEach(o),C=x(Q),y=u(Q,"DIV",{class:!0});var se=h(y);J=j(se,"4.-5. \u010Derven 2022"),se.forEach(o),Q.forEach(o),ee=x(K),T=u(K,"DIV",{class:!0});var B=h(T);A=u(B,"DIV",{class:!0});var W=h(A);R=u(W,"I",{class:!0}),h(R).forEach(o),W.forEach(o),U=x(B),S=u(B,"DIV",{class:!0});var ne=h(S);I=j(ne,"Gabriel Loci, Praha"),ne.forEach(o),B.forEach(o),K.forEach(o),E=x(G),k=u(G,"DIV",{class:!0});var Y=h(k);$=j(Y,"D\u011Bkujeme v\u0161em za \xFA\u010Dast! Uvid\xEDme se za rok .-)"),Y.forEach(o),p=x(G),w=u(G,"DIV",{class:!0});var _e=h(w);F=u(_e,"A",{href:!0,target:!0,class:!0});var ue=h(F);N=u(ue,"SPAN",{class:!0});var pe=h(N);X=u(pe,"I",{class:!0}),h(X).forEach(o),pe.forEach(o),P=j(ue," Sledovat novinky"),ue.forEach(o),_e.forEach(o),G.forEach(o),H.forEach(o),this.h()},h(){i(l,"class","uppercase font-semibold text-md lg:text-lg lg:w-1/3 text-white/70"),he(v.src,g="/img/logo-white.svg")||i(v,"src",g),i(v,"class","w-3/4 md:w-1/2"),i(v,"alt","UTXO.22"),i(d,"href","/"),i(s,"class","mt-6"),i(M,"class","fa-regular fa-calendar-days"),i(z,"class","w-8 h-8 sm:w-12 sm:h-12 text-base sm:text-2xl border-2 border-white text-center rounded-full flex items-center justify-center"),i(y,"class",""),i(m,"class","flex items-center gap-3"),i(R,"class","fa-solid fa-location-dot"),i(A,"class","w-8 h-8 sm:w-12 sm:h-12 text-base sm:text-2xl border-2 border-white text-center rounded-full flex items-center justify-center"),i(S,"class",""),i(T,"class","flex items-center gap-3"),i(_,"class","mt-6 flex flex-wrap gap-3 lg:gap-10 text-lg lg:text-xl font-semibold"),i(k,"class","mt-10 font-bold"),i(X,"class","fa-brands fa-twitter m-auto"),i(N,"class","inline-block w-6 h-6 bg-white text-center rounded-full text-blue-web mr-1"),i(F,"href","https://twitter.com/utxoprague"),i(F,"target","_blank"),i(F,"class","hover:underline"),i(w,"class","mt-8 ml-3 lg:ml-6 text-left flex m-auto"),i(a,"class","pl-2 sm:pl-6 lg:pl-10"),i(t,"class","relative mx-auto lg:px-6 px-4 pt-4 sm:pt-6 sm:pb-6 pb-2 max-w-6xl text-left text-white")},m(re,H){V(re,t,H),n(t,a),n(a,l),n(l,e),n(a,r),n(a,s),n(s,d),n(d,v),n(a,b),n(a,_),n(_,m),n(m,z),n(z,M),n(m,C),n(m,y),n(y,J),n(_,ee),n(_,T),n(T,A),n(A,R),n(T,U),n(T,S),n(S,I),n(a,E),n(a,k),n(k,$),n(a,p),n(a,w),n(w,F),n(F,N),n(N,X),n(F,P),q||(ae=at(d,"click",c[1]),q=!0)},p:te,d(re){re&&o(t),q=!1,ae()}}}function wt(c){let t=!["/kiosk","/tv-screen"].includes(c[0].url.pathname),a,l,e=t&&He(c);return{c(){e&&e.c(),a=le()},l(r){e&&e.l(r),a=le()},m(r,s){e&&e.m(r,s),V(r,a,s),l=!0},p(r,[s]){s&1&&(t=!["/kiosk","/tv-screen"].includes(r[0].url.pathname)),t?e?(e.p(r,s),s&1&&L(e,1)):(e=He(r),e.c(),L(e,1),e.m(a.parentNode,a)):e&&(ye(),Z(e,1,1,()=>{e=null}),Ae())},i(r){l||(L(e),l=!0)},o(r){Z(e),l=!1},d(r){e&&e.d(r),r&&o(a)}}}function It(c,t,a){let l;oe(c,je,r=>a(0,l=r));function e(){ke.update(r=>(r.hpTrack="top",r))}return[l,e]}class Dt extends xe{constructor(t){super();$e(this,t,It,wt,Ve,{})}}const Ye="1.3.0";function et(c){let t,a,l,e,r,s,d,v,g,b,_,m,z,M,C,y,J,ee,T,A,R,U,S,I,E,k,$,p,w,F,N,X,P,q,ae,re,H,G,ve,ce,fe,K,Q,me,se;return U=new rt({props:{size:"normal"}}),{c(){t=f("div"),a=f("div"),l=f("div"),e=f("div"),r=f("a"),s=f("img"),v=D(),g=f("div"),b=O("4.-5. \u010Derven 2022 @ Gabriel Loci, Praha"),_=D(),m=f("div"),z=O("Otev\u0159en\xE1 komunitn\xED kryptom\u011Bnov\xE1 konference"),M=D(),C=f("div"),y=f("a"),J=f("i"),ee=O("\xA0 Dokumentace"),A=D(),R=f("div"),Ee(U.$$.fragment),S=D(),I=f("div"),E=f("div"),k=f("i"),$=O(` S l\xE1skou organizuje
        `),p=f("a"),w=O("UTXO Foundation, z.s."),F=D(),N=f("div"),X=f("a"),P=f("span"),q=O("v"),ae=O(Ye),re=O(`
        | powered by
        `),H=f("a"),G=f("img"),ce=O(" Svelte"),fe=O(`
        | grafick\xFD n\xE1vrh
        `),K=f("a"),Q=f("img"),this.h()},l(B){t=u(B,"DIV",{class:!0});var W=h(t);a=u(W,"DIV",{class:!0});var ne=h(a);l=u(ne,"DIV",{class:!0});var Y=h(l);e=u(Y,"DIV",{});var _e=h(e);r=u(_e,"A",{href:!0});var ue=h(r);s=u(ue,"IMG",{src:!0,alt:!0,class:!0}),ue.forEach(o),_e.forEach(o),v=x(Y),g=u(Y,"DIV",{class:!0});var pe=h(g);b=j(pe,"4.-5. \u010Derven 2022 @ Gabriel Loci, Praha"),pe.forEach(o),_=x(Y),m=u(Y,"DIV",{class:!0});var Te=h(m);z=j(Te,"Otev\u0159en\xE1 komunitn\xED kryptom\u011Bnov\xE1 konference"),Te.forEach(o),M=x(Y),C=u(Y,"DIV",{class:!0});var Pe=h(C);y=u(Pe,"A",{href:!0,class:!0,target:!0});var Se=h(y);J=u(Se,"I",{class:!0}),h(J).forEach(o),ee=j(Se,"\xA0 Dokumentace"),Se.forEach(o),Pe.forEach(o),Y.forEach(o),A=x(ne),R=u(ne,"DIV",{class:!0});var Ge=h(R);we(U.$$.fragment,Ge),Ge.forEach(o),ne.forEach(o),S=x(W),I=u(W,"DIV",{class:!0});var ge=h(I);E=u(ge,"DIV",{class:!0});var be=h(E);k=u(be,"I",{class:!0}),h(k).forEach(o),$=j(be,` S l\xE1skou organizuje
        `),p=u(be,"A",{href:!0,class:!0,target:!0});var Le=h(p);w=j(Le,"UTXO Foundation, z.s."),Le.forEach(o),be.forEach(o),F=x(ge),N=u(ge,"DIV",{});var de=h(N);X=u(de,"A",{href:!0,target:!0});var Me=h(X);P=u(Me,"SPAN",{class:!0});var ze=h(P);q=j(ze,"v"),ae=j(ze,Ye),ze.forEach(o),Me.forEach(o),re=j(de,`
        | powered by
        `),H=u(de,"A",{href:!0,class:!0,target:!0});var Oe=h(H);G=u(Oe,"IMG",{src:!0,class:!0,alt:!0}),ce=j(Oe," Svelte"),Oe.forEach(o),fe=j(de,`
        | grafick\xFD n\xE1vrh
        `),K=u(de,"A",{href:!0,target:!0});var Ue=h(K);Q=u(Ue,"IMG",{src:!0,class:!0,alt:!0}),Ue.forEach(o),de.forEach(o),ge.forEach(o),W.forEach(o),this.h()},h(){he(s.src,d="/img/logo-white.svg")||i(s,"src",d),i(s,"alt","UTXO.22"),i(s,"class","w-32"),i(r,"href","/"),i(g,"class","mt-4 font-semibold"),i(m,"class","mt-2 font-thin"),i(J,"class","fas fa-book"),i(y,"href",T=c[0].links.docs),i(y,"class","hover:text-red-500"),i(y,"target","_blank"),i(C,"class","mt-4"),i(l,"class","flex-1"),i(R,"class","sm:mt-0 mt-6 sm:w-1/3 mr-2"),i(a,"class","relative mx-auto px-6 pt-10 pb-2 sm:pb-6 max-w-6xl sm:flex pr-4"),i(k,"class","fas fa-heart text-red-500"),i(p,"href","https://utxo.foundation"),i(p,"class","underline hover:no-underline"),i(p,"target","_blank"),i(E,"class","flex-1 mt-2 mb-2"),i(P,"class","font-bold"),i(X,"href","https://github.com/utxo-foundation/utxo22-web"),i(X,"target","_blank"),he(G.src,ve="/img/svelte-logo.svg")||i(G,"src",ve),i(G,"class","w-5 inline"),i(G,"alt","Svelte"),i(H,"href","https://svelte.dev/"),i(H,"class","font-bold"),i(H,"target","_blank"),he(Q.src,me="/img/pen-production-logo.svg")||i(Q,"src",me),i(Q,"class","w-28 inline-block pb-2 ml-1"),i(Q,"alt","Pen&Production"),i(K,"href","https://www.ppmedia.cz/"),i(K,"target","_blank"),i(I,"class","relative mx-auto px-6 pt-10 pb-6 max-w-6xl text-xs opacity-50 sm:flex"),i(t,"class","bg-blue-web-bg text-white print:hidden")},m(B,W){V(B,t,W),n(t,a),n(a,l),n(l,e),n(e,r),n(r,s),n(l,v),n(l,g),n(g,b),n(l,_),n(l,m),n(m,z),n(l,M),n(l,C),n(C,y),n(y,J),n(y,ee),n(a,A),n(a,R),Ie(U,R,null),n(t,S),n(t,I),n(I,E),n(E,k),n(E,$),n(E,p),n(p,w),n(I,F),n(I,N),n(N,X),n(X,P),n(P,q),n(P,ae),n(N,re),n(N,H),n(H,G),n(H,ce),n(N,fe),n(N,K),n(K,Q),se=!0},p(B,W){(!se||W&1&&T!==(T=B[0].links.docs))&&i(y,"href",T)},i(B){se||(L(U.$$.fragment,B),se=!0)},o(B){Z(U.$$.fragment,B),se=!1},d(B){B&&o(t),De(U)}}}function xt(c){let t=c[0]&&!["/kiosk","/tv-screen"].includes(c[1].url.pathname),a,l,e=t&&et(c);return{c(){e&&e.c(),a=le()},l(r){e&&e.l(r),a=le()},m(r,s){e&&e.m(r,s),V(r,a,s),l=!0},p(r,[s]){s&3&&(t=r[0]&&!["/kiosk","/tv-screen"].includes(r[1].url.pathname)),t?e?(e.p(r,s),s&3&&L(e,1)):(e=et(r),e.c(),L(e,1),e.m(a.parentNode,a)):e&&(ye(),Z(e,1,1,()=>{e=null}),Ae())},i(r){l||(L(e),l=!0)},o(r){Z(e),l=!1},d(r){e&&e.d(r),r&&o(a)}}}function $t(c,t,a){let l,e;return oe(c,Ne,r=>a(0,l=r)),oe(c,je,r=>a(1,e=r)),[l,e]}class Vt extends xe{constructor(t){super();$e(this,t,$t,xt,Ve,{})}}function tt(c){let t,a,l,e,r,s,d,v;l=new Dt({});const g=c[2].default,b=ft(g,c,c[1],null);return d=new Vt({}),{c(){t=f("div"),a=f("div"),Ee(l.$$.fragment),e=D(),r=f("main"),b&&b.c(),s=D(),Ee(d.$$.fragment),this.h()},l(_){t=u(_,"DIV",{class:!0});var m=h(t);a=u(m,"DIV",{class:!0});var z=h(a);we(l.$$.fragment,z),e=x(z),r=u(z,"MAIN",{});var M=h(r);b&&b.l(M),M.forEach(o),z.forEach(o),s=x(m),we(d.$$.fragment,m),m.forEach(o),this.h()},h(){i(a,"class","inset-0 bg-white"),i(t,"class","layout min-h-screen bg-gray-900 print:bg-white")},m(_,m){V(_,t,m),n(t,a),Ie(l,a,null),n(a,e),n(a,r),b&&b.m(r,null),n(t,s),Ie(d,t,null),v=!0},p(_,m){b&&b.p&&(!v||m&2)&&st(b,g,_,_[1],v?nt(g,_[1],m,null):it(_[1]),null)},i(_){v||(L(l.$$.fragment,_),L(b,_),L(d.$$.fragment,_),v=!0)},o(_){Z(l.$$.fragment,_),Z(b,_),Z(d.$$.fragment,_),v=!1},d(_){_&&o(t),De(l),b&&b.d(_),De(d)}}}function yt(c){let t,a,l=c[0]&&tt(c);return{c(){l&&l.c(),t=le()},l(e){l&&l.l(e),t=le()},m(e,r){l&&l.m(e,r),V(e,t,r),a=!0},p(e,[r]){e[0]?l?(l.p(e,r),r&1&&L(l,1)):(l=tt(e),l.c(),L(l,1),l.m(t.parentNode,t)):l&&(ye(),Z(l,1,1,()=>{l=null}),Ae())},i(e){a||(L(l),a=!0)},o(e){Z(l),a=!1},d(e){l&&l.d(e),e&&o(t)}}}function At(c,t,a){let l,e,r;oe(c,je,m=>a(7,l=m)),oe(c,ke,m=>a(8,e=m)),oe(c,Ne,m=>a(0,r=m));let{$$slots:s={},$$scope:d}=t,v=null,g=0;async function b(){try{await ht(),await vt(e)}catch{return g>5?(console.log("Too much retries, shutdown.."),null):(console.log(`API cannot be accessed .. retrying [#${g}] ..`),g=g+1,setTimeout(()=>b(),250),null)}return g=0,!0}async function _(){return dt.loadBundle(l.url.hostname==="localhost"),await b(),!0}return ot(async()=>{_(),v=setInterval(()=>{_()},60*2e3);const m=localStorage.getItem("userData");m&&ke.set(JSON.parse(m)),ke.subscribe(z=>{localStorage.setItem("userData",JSON.stringify(z))}),setTimeout(()=>{ut.set({loaded:!0})},300)}),ct(()=>{clearInterval(v)}),c.$$set=m=>{"$$scope"in m&&a(1,d=m.$$scope)},[r,d,s]}class Pt extends xe{constructor(t){super();$e(this,t,At,yt,Ve,{})}}export{Pt as default};
