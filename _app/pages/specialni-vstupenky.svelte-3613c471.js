import{S as Re,i as Ue,s as Ge,k as P,e as I,t as E,R as We,d as u,m as q,c as y,a as T,h as g,b as w,g as A,F as _,o as U,p as fe,q as M,H as Xe,v as Fe,n as se,E as oe,j as G,w as Be,x as Pe,y as qe,B as Je,G as de,J as Ye,l as ce}from"../chunks/index-b6ec56f3.js";import{b as Ke}from"../chunks/stores-9ca2ce08.js";import{A as Le}from"../chunks/Avatar-16a27348.js";import{a as Qe}from"../chunks/api-2f9ec61a.js";import{f as Ze}from"../chunks/index-921d3fdd.js";import"../chunks/index-eca4c666.js";function Ie(i,l,t){const e=i.slice();return e[15]=l[t],e}function ye(i,l,t){const e=i.slice();return e[18]=l[t],e}function we(i,l,t){const e=i.slice();return e[21]=l[t],e}function xe(i){let l,t;return{c(){l=I("div"),t=E("Na\u010D\xEDt\xE1m ..")},l(e){l=y(e,"DIV",{});var a=T(l);t=g(a,"Na\u010D\xEDt\xE1m .."),a.forEach(u)},m(e,a){A(e,l,a),_(l,t)},p:oe,i:oe,o:oe,d(e){e&&u(l)}}}function el(i){let l,t,e=i[0].length+"",a,n,r=i[0].filter(Ce).length+"",o,f,s=i[0].length+"",v,p,O,h,k,c,D=i[0].length+"",m,j,S,$,J,W,X,N,C,z,H,K,te,F,Q,ie,_e,ae,he,pe,ne,Z,L=i[1]&&Te(i),re=Object.keys(i[4]),R=[];for(let d=0;d<re.length;d+=1)R[d]=Ae(ye(i,re,d));let ee=i[7](i[0]),B=[];for(let d=0;d<ee.length;d+=1)B[d]=je(Ie(i,ee,d));const Me=d=>U(B[d],1,1,()=>{B[d]=null});return{c(){l=I("div"),t=E("Celkem: "),a=E(e),n=E(", vyzvednuto: "),o=E(r),f=E("/"),v=E(s),p=P(),L&&L.c(),O=P(),h=I("div"),k=I("h2"),c=E("Seznam v\u0161ech speci\xE1ln\xEDch vstupenek ("),m=E(D),j=E(")"),S=P(),$=I("div");for(let d=0;d<R.length;d+=1)R[d].c();J=P(),W=I("table"),X=I("thead"),N=I("tr"),C=I("th"),z=E("Typ"),H=P(),K=I("th"),te=E("Odkaz"),F=P(),Q=I("th"),ie=E("Vyzvednuto"),_e=P(),ae=I("th"),he=E("Jmenovka"),pe=P(),ne=I("tbody");for(let d=0;d<B.length;d+=1)B[d].c();this.h()},l(d){l=y(d,"DIV",{class:!0});var V=T(l);t=g(V,"Celkem: "),a=g(V,e),n=g(V,", vyzvednuto: "),o=g(V,r),f=g(V,"/"),v=g(V,s),V.forEach(u),p=q(d),L&&L.l(d),O=q(d),h=y(d,"DIV",{class:!0});var b=T(h);k=y(b,"H2",{class:!0});var Y=T(k);c=g(Y,"Seznam v\u0161ech speci\xE1ln\xEDch vstupenek ("),m=g(Y,D),j=g(Y,")"),Y.forEach(u),S=q(b),$=y(b,"DIV",{class:!0});var me=T($);for(let le=0;le<R.length;le+=1)R[le].l(me);me.forEach(u),J=q(b),W=y(b,"TABLE",{class:!0,cellpadding:!0});var ue=T(W);X=y(ue,"THEAD",{});var ve=T(X);N=y(ve,"TR",{class:!0});var x=T(N);C=y(x,"TH",{align:!0});var ke=T(C);z=g(ke,"Typ"),ke.forEach(u),H=q(x),K=y(x,"TH",{align:!0});var be=T(K);te=g(be,"Odkaz"),be.forEach(u),F=q(x),Q=y(x,"TH",{align:!0});var Ee=T(Q);ie=g(Ee,"Vyzvednuto"),Ee.forEach(u),_e=q(x),ae=y(x,"TH",{align:!0});var ge=T(ae);he=g(ge,"Jmenovka"),ge.forEach(u),x.forEach(u),ve.forEach(u),pe=q(ue),ne=y(ue,"TBODY",{});var De=T(ne);for(let le=0;le<B.length;le+=1)B[le].l(De);De.forEach(u),ue.forEach(u),b.forEach(u),this.h()},h(){w(l,"class","mt-4"),w(k,"class","text-lg font-semibold uppercase"),w($,"class","mt-4 flex gap-4"),w(C,"align","left"),w(K,"align","left"),w(Q,"align","left"),w(ae,"align","left"),w(N,"class","text-xs uppercase text-blue-web/80"),w(W,"class","table-auto mt-6 w-full"),w(W,"cellpadding","6"),w(h,"class","mt-10")},m(d,V){A(d,l,V),_(l,t),_(l,a),_(l,n),_(l,o),_(l,f),_(l,v),A(d,p,V),L&&L.m(d,V),A(d,O,V),A(d,h,V),_(h,k),_(k,c),_(k,m),_(k,j),_(h,S),_(h,$);for(let b=0;b<R.length;b+=1)R[b].m($,null);_(h,J),_(h,W),_(W,X),_(X,N),_(N,C),_(C,z),_(N,H),_(N,K),_(K,te),_(N,F),_(N,Q),_(Q,ie),_(N,_e),_(N,ae),_(ae,he),_(W,pe),_(W,ne);for(let b=0;b<B.length;b+=1)B[b].m(ne,null);Z=!0},p(d,V){if((!Z||V&1)&&e!==(e=d[0].length+"")&&G(a,e),(!Z||V&1)&&r!==(r=d[0].filter(Ce).length+"")&&G(o,r),(!Z||V&1)&&s!==(s=d[0].length+"")&&G(v,s),d[1]?L?(L.p(d,V),V&2&&M(L,1)):(L=Te(d),L.c(),M(L,1),L.m(O.parentNode,O)):L&&(se(),U(L,1,1,()=>{L=null}),fe()),(!Z||V&1)&&D!==(D=d[0].length+"")&&G(m,D),V&52){re=Object.keys(d[4]);let b;for(b=0;b<re.length;b+=1){const Y=ye(d,re,b);R[b]?R[b].p(Y,V):(R[b]=Ae(Y),R[b].c(),R[b].m($,null))}for(;b<R.length;b+=1)R[b].d(1);R.length=re.length}if(V&221){ee=d[7](d[0]);let b;for(b=0;b<ee.length;b+=1){const Y=Ie(d,ee,b);B[b]?(B[b].p(Y,V),M(B[b],1)):(B[b]=je(Y),B[b].c(),M(B[b],1),B[b].m(ne,null))}for(se(),b=ee.length;b<B.length;b+=1)Me(b);fe()}},i(d){if(!Z){M(L);for(let V=0;V<ee.length;V+=1)M(B[V]);Z=!0}},o(d){U(L),B=B.filter(Boolean);for(let V=0;V<B.length;V+=1)U(B[V]);Z=!1},d(d){d&&u(l),d&&u(p),L&&L.d(d),d&&u(O),d&&u(h),de(R,d),de(B,d)}}}function Te(i){let l,t,e,a=i[1].length+"",n,r,o,f,s,v=i[1],p=[];for(let h=0;h<v.length;h+=1)p[h]=$e(we(i,v,h));const O=h=>U(p[h],1,1,()=>{p[h]=null});return{c(){l=I("div"),t=I("h2"),e=E("P\u0159edn\xE1\u0161ej\xEDc\xED bez k\xF3du ("),n=E(a),r=E(")"),o=P(),f=I("div");for(let h=0;h<p.length;h+=1)p[h].c();this.h()},l(h){l=y(h,"DIV",{class:!0});var k=T(l);t=y(k,"H2",{class:!0});var c=T(t);e=g(c,"P\u0159edn\xE1\u0161ej\xEDc\xED bez k\xF3du ("),n=g(c,a),r=g(c,")"),c.forEach(u),o=q(k),f=y(k,"DIV",{class:!0});var D=T(f);for(let m=0;m<p.length;m+=1)p[m].l(D);D.forEach(u),k.forEach(u),this.h()},h(){w(t,"class","text-lg font-semibold uppercase"),w(f,"class","flex gap-4 flex-wrap mt-4"),w(l,"class","mt-10")},m(h,k){A(h,l,k),_(l,t),_(t,e),_(t,n),_(t,r),_(l,o),_(l,f);for(let c=0;c<p.length;c+=1)p[c].m(f,null);s=!0},p(h,k){if((!s||k&2)&&a!==(a=h[1].length+"")&&G(n,a),k&2){v=h[1];let c;for(c=0;c<v.length;c+=1){const D=we(h,v,c);p[c]?(p[c].p(D,k),M(p[c],1)):(p[c]=$e(D),p[c].c(),M(p[c],1),p[c].m(f,null))}for(se(),c=v.length;c<p.length;c+=1)O(c);fe()}},i(h){if(!s){for(let k=0;k<v.length;k+=1)M(p[k]);s=!0}},o(h){p=p.filter(Boolean);for(let k=0;k<p.length;k+=1)U(p[k]);s=!1},d(h){h&&u(l),de(p,h)}}}function $e(i){let l,t,e,a,n,r=i[21].name+"",o,f,s,v;return a=new Le({props:{speaker:i[21],size:"extra-small"}}),{c(){l=I("div"),t=I("a"),e=I("div"),Be(a.$$.fragment),n=E(`
                \xA0`),o=E(r),s=P(),this.h()},l(p){l=y(p,"DIV",{});var O=T(l);t=y(O,"A",{href:!0});var h=T(t);e=y(h,"DIV",{class:!0});var k=T(e);Pe(a.$$.fragment,k),k.forEach(u),n=g(h,`
                \xA0`),o=g(h,r),h.forEach(u),s=q(O),O.forEach(u),this.h()},h(){w(e,"class","inline-block align-middle"),w(t,"href",f="/lide?id="+i[21].id)},m(p,O){A(p,l,O),_(l,t),_(t,e),qe(a,e,null),_(t,n),_(t,o),_(l,s),v=!0},p(p,O){const h={};O&2&&(h.speaker=p[21]),a.$set(h),(!v||O&2)&&r!==(r=p[21].name+"")&&G(o,r),(!v||O&2&&f!==(f="/lide?id="+p[21].id))&&w(t,"href",f)},i(p){v||(M(a.$$.fragment,p),v=!0)},o(p){U(a.$$.fragment,p),v=!1},d(p){p&&u(l),Je(a)}}}function Ae(i){let l,t,e,a,n,r=i[4][i[18]].title+"",o,f,s=i[5](i[18])+"",v,p,O,h,k;return{c(){l=I("div"),t=I("label"),e=I("input"),n=P(),o=E(r),f=E(" ("),v=E(s),p=E(")"),O=P(),this.h()},l(c){l=y(c,"DIV",{});var D=T(l);t=y(D,"LABEL",{class:!0});var m=T(t);e=y(m,"INPUT",{type:!0,name:!0}),n=q(m),o=g(m,r),f=g(m," ("),v=g(m,s),p=g(m,")"),m.forEach(u),O=q(D),D.forEach(u),this.h()},h(){w(e,"type","radio"),w(e,"name","type"),e.__value=a=i[18],e.value=e.__value,i[9][0].push(e),w(t,"class","cursor-pointer")},m(c,D){A(c,l,D),_(l,t),_(t,e),e.checked=e.__value===i[2],_(t,n),_(t,o),_(t,f),_(t,v),_(t,p),_(l,O),h||(k=Ye(e,"change",i[8]),h=!0)},p(c,D){D&4&&(e.checked=e.__value===c[2])},d(c){c&&u(l),i[9][0].splice(i[9][0].indexOf(e),1),h=!1,k()}}}function Oe(i){let l,t,e=i[4][i[15].type].title+"",a,n,r,o,f,s=i[15].linkInfo.title+"",v,p,O,h,k,c,D,m,j,S,$=!i[15].linkInfo.withoutAvatar&&ze(i),J=i[15].linkInfo.suffix&&Ve(i);function W(z,H){return z[15].claimed?tl:ll}let X=W(i),N=X(i),C=i[15].claimed&&i[15].ticketData&&He(i);return{c(){l=I("tr"),t=I("td"),a=E(e),n=P(),r=I("td"),o=I("a"),$&&$.c(),f=P(),v=E(s),p=P(),J&&J.c(),h=P(),k=I("td"),N.c(),c=P(),D=I("td"),C&&C.c(),m=P(),this.h()},l(z){l=y(z,"TR",{class:!0});var H=T(l);t=y(H,"TD",{class:!0});var K=T(t);a=g(K,e),K.forEach(u),n=q(H),r=y(H,"TD",{class:!0});var te=T(r);o=y(te,"A",{href:!0});var F=T(o);$&&$.l(F),f=q(F),v=g(F,s),p=q(F),J&&J.l(F),F.forEach(u),te.forEach(u),h=q(H),k=y(H,"TD",{class:!0});var Q=T(k);N.l(Q),Q.forEach(u),c=q(H),D=y(H,"TD",{class:!0});var ie=T(D);C&&C.l(ie),ie.forEach(u),m=q(H),H.forEach(u),this.h()},h(){w(t,"class","border-b font-bold"),w(o,"href",O=i[15].linkInfo.url),w(r,"class","border-b"),w(k,"class","border-b"),w(D,"class","border-b"),w(l,"class",j=i[15].claimed?"hover:bg-blue-500/10":"bg-yellow-400/20 hover:bg-yello-600/20")},m(z,H){A(z,l,H),_(l,t),_(t,a),_(l,n),_(l,r),_(r,o),$&&$.m(o,null),_(o,f),_(o,v),_(o,p),J&&J.m(o,null),_(l,h),_(l,k),N.m(k,null),_(l,c),_(l,D),C&&C.m(D,null),_(l,m),S=!0},p(z,H){(!S||H&1)&&e!==(e=z[4][z[15].type].title+"")&&G(a,e),z[15].linkInfo.withoutAvatar?$&&(se(),U($,1,1,()=>{$=null}),fe()):$?($.p(z,H),H&1&&M($,1)):($=ze(z),$.c(),M($,1),$.m(o,f)),(!S||H&1)&&s!==(s=z[15].linkInfo.title+"")&&G(v,s),z[15].linkInfo.suffix?J?J.p(z,H):(J=Ve(z),J.c(),J.m(o,null)):J&&(J.d(1),J=null),(!S||H&1&&O!==(O=z[15].linkInfo.url))&&w(o,"href",O),X===(X=W(z))&&N?N.p(z,H):(N.d(1),N=X(z),N&&(N.c(),N.m(k,null))),z[15].claimed&&z[15].ticketData?C?C.p(z,H):(C=He(z),C.c(),C.m(D,null)):C&&(C.d(1),C=null),(!S||H&1&&j!==(j=z[15].claimed?"hover:bg-blue-500/10":"bg-yellow-400/20 hover:bg-yello-600/20"))&&w(l,"class",j)},i(z){S||(M($),S=!0)},o(z){U($),S=!1},d(z){z&&u(l),$&&$.d(),J&&J.d(),N.d(),C&&C.d()}}}function ze(i){let l,t,e;function a(...n){return i[10](i[15],...n)}return t=new Le({props:{speaker:i[3].spec[i[15].linkInfo.col].find(a),col:i[15].linkInfo.col,size:"extra-small"}}),{c(){l=I("div"),Be(t.$$.fragment),this.h()},l(n){l=y(n,"DIV",{class:!0});var r=T(l);Pe(t.$$.fragment,r),r.forEach(u),this.h()},h(){w(l,"class","inline-block align-middle")},m(n,r){A(n,l,r),qe(t,l,null),e=!0},p(n,r){i=n;const o={};r&9&&(o.speaker=i[3].spec[i[15].linkInfo.col].find(a)),r&1&&(o.col=i[15].linkInfo.col),t.$set(o)},i(n){e||(M(t.$$.fragment,n),e=!0)},o(n){U(t.$$.fragment,n),e=!1},d(n){n&&u(l),Je(t)}}}function Ve(i){let l,t=i[15].linkInfo.suffix+"",e,a;return{c(){l=E("\xA0("),e=E(t),a=E(")")},l(n){l=g(n,"\xA0("),e=g(n,t),a=g(n,")")},m(n,r){A(n,l,r),A(n,e,r),A(n,a,r)},p(n,r){r&1&&t!==(t=n[15].linkInfo.suffix+"")&&G(e,t)},d(n){n&&u(l),n&&u(e),n&&u(a)}}}function ll(i){let l;return{c(){l=E("-")},l(t){l=g(t,"-")},m(t,e){A(t,l,e)},p:oe,d(t){t&&u(l)}}}function tl(i){let l,t=i[15].ticketId+"",e,a,n=i[6](i[15].claimedOn)+"",r,o;return{c(){l=I("code"),e=E(t),a=E(" ("),r=E(n),o=E(")")},l(f){l=y(f,"CODE",{});var s=T(l);e=g(s,t),s.forEach(u),a=g(f," ("),r=g(f,n),o=g(f,")")},m(f,s){A(f,l,s),_(l,e),A(f,a,s),A(f,r,s),A(f,o,s)},p(f,s){s&1&&t!==(t=f[15].ticketId+"")&&G(e,t),s&1&&n!==(n=f[6](f[15].claimedOn)+"")&&G(r,n)},d(f){f&&u(l),f&&u(a),f&&u(r),f&&u(o)}}}function He(i){let l,t,e;function a(s,v){return s[15].ticketData.name?al:il}let n=a(i),r=n(i),o=i[15].ticketData.org&&Se(i),f=i[15].ticketData.twitter&&Ne(i);return{c(){r.c(),l=P(),o&&o.c(),t=P(),f&&f.c(),e=ce()},l(s){r.l(s),l=q(s),o&&o.l(s),t=q(s),f&&f.l(s),e=ce()},m(s,v){r.m(s,v),A(s,l,v),o&&o.m(s,v),A(s,t,v),f&&f.m(s,v),A(s,e,v)},p(s,v){n===(n=a(s))&&r?r.p(s,v):(r.d(1),r=n(s),r&&(r.c(),r.m(l.parentNode,l))),s[15].ticketData.org?o?o.p(s,v):(o=Se(s),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),s[15].ticketData.twitter?f?f.p(s,v):(f=Ne(s),f.c(),f.m(e.parentNode,e)):f&&(f.d(1),f=null)},d(s){r.d(s),s&&u(l),o&&o.d(s),s&&u(t),f&&f.d(s),s&&u(e)}}}function il(i){let l,t;return{c(){l=I("span"),t=E("Anonym"),this.h()},l(e){l=y(e,"SPAN",{class:!0});var a=T(l);t=g(a,"Anonym"),a.forEach(u),this.h()},h(){w(l,"class","italic")},m(e,a){A(e,l,a),_(l,t)},p:oe,d(e){e&&u(l)}}}function al(i){let l=i[15].ticketData.name+"",t;return{c(){t=E(l)},l(e){t=g(e,l)},m(e,a){A(e,t,a)},p(e,a){a&1&&l!==(l=e[15].ticketData.name+"")&&G(t,l)},d(e){e&&u(t)}}}function Se(i){let l,t=i[15].ticketData.org+"",e,a;return{c(){l=E("\xA0("),e=E(t),a=E(")")},l(n){l=g(n,"\xA0("),e=g(n,t),a=g(n,")")},m(n,r){A(n,l,r),A(n,e,r),A(n,a,r)},p(n,r){r&1&&t!==(t=n[15].ticketData.org+"")&&G(e,t)},d(n){n&&u(l),n&&u(e),n&&u(a)}}}function Ne(i){let l,t,e,a;return{c(){l=E("\xA0"),t=I("a"),e=I("i"),this.h()},l(n){l=g(n,"\xA0"),t=y(n,"A",{href:!0});var r=T(t);e=y(r,"I",{class:!0}),T(e).forEach(u),r.forEach(u),this.h()},h(){w(e,"class","fa-brands fa-twitter"),w(t,"href",a="https://twitter/"+i[15].ticketData.twitter)},m(n,r){A(n,l,r),A(n,t,r),_(t,e)},p(n,r){r&1&&a!==(a="https://twitter/"+n[15].ticketData.twitter)&&w(t,"href",a)},d(n){n&&u(l),n&&u(t)}}}function je(i){let l,t,e=(!i[2]||i[2]==="all"||i[2]&&i[2]===i[15].type)&&Oe(i);return{c(){e&&e.c(),l=ce()},l(a){e&&e.l(a),l=ce()},m(a,n){e&&e.m(a,n),A(a,l,n),t=!0},p(a,n){!a[2]||a[2]==="all"||a[2]&&a[2]===a[15].type?e?(e.p(a,n),n&5&&M(e,1)):(e=Oe(a),e.c(),M(e,1),e.m(l.parentNode,l)):e&&(se(),U(e,1,1,()=>{e=null}),fe())},i(a){t||(M(e),t=!0)},o(a){U(e),t=!1},d(a){e&&e.d(a),a&&u(l)}}}function nl(i){let l,t,e,a,n,r,o,f,s,v,p;document.title=l="Speci\xE1ln\xED vstupenky | "+(i[3]?i[3].name:"UTXO.22");const O=[el,xe],h=[];function k(c,D){return c[0]?0:1}return o=k(i),f=h[o]=O[o](i),{c(){t=P(),e=I("section"),a=I("h1"),n=E("Speci\xE1ln\xED vstupenky"),r=P(),f.c(),s=P(),v=I("section"),this.h()},l(c){We('[data-svelte="svelte-jebagi"]',document.head).forEach(u),t=q(c),e=y(c,"SECTION",{class:!0});var m=T(e);a=y(m,"H1",{class:!0});var j=T(a);n=g(j,"Speci\xE1ln\xED vstupenky"),j.forEach(u),r=q(m),f.l(m),m.forEach(u),s=q(c),v=y(c,"SECTION",{class:!0}),T(v).forEach(u),this.h()},h(){w(a,"class","uppercase text-2xl font-bold"),w(e,"class","relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web"),w(v,"class","h-20")},m(c,D){A(c,t,D),A(c,e,D),_(e,a),_(a,n),_(e,r),h[o].m(e,null),A(c,s,D),A(c,v,D),p=!0},p(c,[D]){(!p||D&8)&&l!==(l="Speci\xE1ln\xED vstupenky | "+(c[3]?c[3].name:"UTXO.22"))&&(document.title=l);let m=o;o=k(c),o===m?h[o].p(c,D):(se(),U(h[m],1,1,()=>{h[m]=null}),fe(),f=h[o],f?f.p(c,D):(f=h[o]=O[o](c),f.c()),M(f,1),f.m(e,null))},i(c){p||(M(f),p=!0)},o(c){U(f),p=!1},d(c){c&&u(t),c&&u(e),h[o].d(),c&&u(s),c&&u(v)}}}const hl=!0,Ce=i=>i.claimed;function rl(i,l,t){let e;Xe(i,Ke,m=>t(3,e=m));let a=null,n=null,r="all";const o={all:{title:"V\u0161e"},organizator:{title:"Organiz\xE1tor"},speaker:{title:"P\u0159edn\xE1\u0161ej\xEDc\xED"},partner:{title:"Partner"},staff:{title:"Obsluha"},host:{title:"Host"}};function f(m="all"){if(!a)return null;if(m==="all")return a.length;const j=a.filter(S=>S.type===m);return j?j.length:null}async function s(){t(0,a=await Qe.apiCall("claims")),t(1,n=h())}function v(m){return Ze(new Date(m),"d.M HH:mm")}function p(m){const S={speaker:{col:"speakers",url:"/lide?id="},partner:{col:"partners",suffix:"partner"},team:{col:"team",withoutAvatar:!0}}[m.type];if(!S)return null;let $=null;return m.type==="team"?$=e.spec.team.persons[m.id]:$=e.spec[S.col].find(J=>J.id===m.id),$?{title:$.name,url:S.url?S.url+m.id:null,col:S.col,suffix:S.suffix,withoutAvatar:S.withoutAvatar}:"not exists!"}function O(m){for(const j of m)j.linkInfo=p(j.link);return m}function h(){if(!a)return null;const m=[];return e.spec.speakers.forEach(j=>{a.find(S=>S.link.type==="speaker"&&S.link.id===j.id)||m.push(j)}),m}Fe(()=>{s()});const k=[[]];function c(){r=this.__value,t(2,r)}return[a,n,r,e,o,f,v,O,c,k,(m,j)=>j.id===m.link.id]}class pl extends Re{constructor(l){super();Ue(this,l,rl,nl,Ge,{})}}export{pl as default,hl as prerender};
