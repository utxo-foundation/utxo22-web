import{S as Re,i as Ue,s as Ge,k as P,e as w,t as g,R as We,d as u,m as q,c as T,a as $,h as E,b as y,g as O,F as _,o as U,p as fe,q as M,H as Xe,v as Fe,n as se,E as oe,j as G,w as Be,x as Pe,y as qe,B as Je,G as de,J as Ye,l as ce}from"../chunks/index-12086f65.js";import{b as Ke}from"../chunks/stores-52bca5f8.js";import{A as Le}from"../chunks/Avatar-59d6497a.js";import{a as Qe}from"../chunks/api-1f43cb25.js";import{f as Ze}from"../chunks/index-921d3fdd.js";import"../chunks/index-3ca188ce.js";import"../chunks/Link-1399ee4f.js";function De(i,l,t){const e=i.slice();return e[15]=l[t],e}function ye(i,l,t){const e=i.slice();return e[18]=l[t],e}function we(i,l,t){const e=i.slice();return e[21]=l[t],e}function xe(i){let l,t;return{c(){l=w("div"),t=g("Na\u010D\xEDt\xE1m ..")},l(e){l=T(e,"DIV",{});var a=$(l);t=E(a,"Na\u010D\xEDt\xE1m .."),a.forEach(u)},m(e,a){O(e,l,a),_(l,t)},p:oe,i:oe,o:oe,d(e){e&&u(l)}}}function el(i){let l,t,e=i[0].length+"",a,n,r=i[0].filter(Ce).length+"",o,f,s=i[0].length+"",v,p,z,h,k,c,I=i[0].length+"",m,N,S,D,J,W,X,j,C,A,H,K,te,F,Q,ie,_e,ae,he,pe,ne,Z,L=i[1]&&Te(i),re=Object.keys(i[4]),R=[];for(let d=0;d<re.length;d+=1)R[d]=Ae(ye(i,re,d));let ee=i[7](i[0]),B=[];for(let d=0;d<ee.length;d+=1)B[d]=je(De(i,ee,d));const Me=d=>U(B[d],1,1,()=>{B[d]=null});return{c(){l=w("div"),t=g("Celkem: "),a=g(e),n=g(", vyzvednuto: "),o=g(r),f=g("/"),v=g(s),p=P(),L&&L.c(),z=P(),h=w("div"),k=w("h2"),c=g("Seznam v\u0161ech speci\xE1ln\xEDch vstupenek ("),m=g(I),N=g(")"),S=P(),D=w("div");for(let d=0;d<R.length;d+=1)R[d].c();J=P(),W=w("table"),X=w("thead"),j=w("tr"),C=w("th"),A=g("Typ"),H=P(),K=w("th"),te=g("Odkaz"),F=P(),Q=w("th"),ie=g("Vyzvednuto"),_e=P(),ae=w("th"),he=g("Jmenovka"),pe=P(),ne=w("tbody");for(let d=0;d<B.length;d+=1)B[d].c();this.h()},l(d){l=T(d,"DIV",{class:!0});var V=$(l);t=E(V,"Celkem: "),a=E(V,e),n=E(V,", vyzvednuto: "),o=E(V,r),f=E(V,"/"),v=E(V,s),V.forEach(u),p=q(d),L&&L.l(d),z=q(d),h=T(d,"DIV",{class:!0});var b=$(h);k=T(b,"H2",{class:!0});var Y=$(k);c=E(Y,"Seznam v\u0161ech speci\xE1ln\xEDch vstupenek ("),m=E(Y,I),N=E(Y,")"),Y.forEach(u),S=q(b),D=T(b,"DIV",{class:!0});var me=$(D);for(let le=0;le<R.length;le+=1)R[le].l(me);me.forEach(u),J=q(b),W=T(b,"TABLE",{class:!0,cellpadding:!0});var ue=$(W);X=T(ue,"THEAD",{});var ve=$(X);j=T(ve,"TR",{class:!0});var x=$(j);C=T(x,"TH",{align:!0});var ke=$(C);A=E(ke,"Typ"),ke.forEach(u),H=q(x),K=T(x,"TH",{align:!0});var be=$(K);te=E(be,"Odkaz"),be.forEach(u),F=q(x),Q=T(x,"TH",{align:!0});var ge=$(Q);ie=E(ge,"Vyzvednuto"),ge.forEach(u),_e=q(x),ae=T(x,"TH",{align:!0});var Ee=$(ae);he=E(Ee,"Jmenovka"),Ee.forEach(u),x.forEach(u),ve.forEach(u),pe=q(ue),ne=T(ue,"TBODY",{});var Ie=$(ne);for(let le=0;le<B.length;le+=1)B[le].l(Ie);Ie.forEach(u),ue.forEach(u),b.forEach(u),this.h()},h(){y(l,"class","mt-4"),y(k,"class","text-lg font-semibold uppercase"),y(D,"class","mt-4 flex gap-4"),y(C,"align","left"),y(K,"align","left"),y(Q,"align","left"),y(ae,"align","left"),y(j,"class","text-xs uppercase text-blue-web/80"),y(W,"class","table-auto mt-6 w-full"),y(W,"cellpadding","6"),y(h,"class","mt-10")},m(d,V){O(d,l,V),_(l,t),_(l,a),_(l,n),_(l,o),_(l,f),_(l,v),O(d,p,V),L&&L.m(d,V),O(d,z,V),O(d,h,V),_(h,k),_(k,c),_(k,m),_(k,N),_(h,S),_(h,D);for(let b=0;b<R.length;b+=1)R[b].m(D,null);_(h,J),_(h,W),_(W,X),_(X,j),_(j,C),_(C,A),_(j,H),_(j,K),_(K,te),_(j,F),_(j,Q),_(Q,ie),_(j,_e),_(j,ae),_(ae,he),_(W,pe),_(W,ne);for(let b=0;b<B.length;b+=1)B[b].m(ne,null);Z=!0},p(d,V){if((!Z||V&1)&&e!==(e=d[0].length+"")&&G(a,e),(!Z||V&1)&&r!==(r=d[0].filter(Ce).length+"")&&G(o,r),(!Z||V&1)&&s!==(s=d[0].length+"")&&G(v,s),d[1]?L?(L.p(d,V),V&2&&M(L,1)):(L=Te(d),L.c(),M(L,1),L.m(z.parentNode,z)):L&&(se(),U(L,1,1,()=>{L=null}),fe()),(!Z||V&1)&&I!==(I=d[0].length+"")&&G(m,I),V&52){re=Object.keys(d[4]);let b;for(b=0;b<re.length;b+=1){const Y=ye(d,re,b);R[b]?R[b].p(Y,V):(R[b]=Ae(Y),R[b].c(),R[b].m(D,null))}for(;b<R.length;b+=1)R[b].d(1);R.length=re.length}if(V&221){ee=d[7](d[0]);let b;for(b=0;b<ee.length;b+=1){const Y=De(d,ee,b);B[b]?(B[b].p(Y,V),M(B[b],1)):(B[b]=je(Y),B[b].c(),M(B[b],1),B[b].m(ne,null))}for(se(),b=ee.length;b<B.length;b+=1)Me(b);fe()}},i(d){if(!Z){M(L);for(let V=0;V<ee.length;V+=1)M(B[V]);Z=!0}},o(d){U(L),B=B.filter(Boolean);for(let V=0;V<B.length;V+=1)U(B[V]);Z=!1},d(d){d&&u(l),d&&u(p),L&&L.d(d),d&&u(z),d&&u(h),de(R,d),de(B,d)}}}function Te(i){let l,t,e,a=i[1].length+"",n,r,o,f,s,v=i[1],p=[];for(let h=0;h<v.length;h+=1)p[h]=$e(we(i,v,h));const z=h=>U(p[h],1,1,()=>{p[h]=null});return{c(){l=w("div"),t=w("h2"),e=g("P\u0159edn\xE1\u0161ej\xEDc\xED bez k\xF3du ("),n=g(a),r=g(")"),o=P(),f=w("div");for(let h=0;h<p.length;h+=1)p[h].c();this.h()},l(h){l=T(h,"DIV",{class:!0});var k=$(l);t=T(k,"H2",{class:!0});var c=$(t);e=E(c,"P\u0159edn\xE1\u0161ej\xEDc\xED bez k\xF3du ("),n=E(c,a),r=E(c,")"),c.forEach(u),o=q(k),f=T(k,"DIV",{class:!0});var I=$(f);for(let m=0;m<p.length;m+=1)p[m].l(I);I.forEach(u),k.forEach(u),this.h()},h(){y(t,"class","text-lg font-semibold uppercase"),y(f,"class","flex gap-4 flex-wrap mt-4"),y(l,"class","mt-10")},m(h,k){O(h,l,k),_(l,t),_(t,e),_(t,n),_(t,r),_(l,o),_(l,f);for(let c=0;c<p.length;c+=1)p[c].m(f,null);s=!0},p(h,k){if((!s||k&2)&&a!==(a=h[1].length+"")&&G(n,a),k&2){v=h[1];let c;for(c=0;c<v.length;c+=1){const I=we(h,v,c);p[c]?(p[c].p(I,k),M(p[c],1)):(p[c]=$e(I),p[c].c(),M(p[c],1),p[c].m(f,null))}for(se(),c=v.length;c<p.length;c+=1)z(c);fe()}},i(h){if(!s){for(let k=0;k<v.length;k+=1)M(p[k]);s=!0}},o(h){p=p.filter(Boolean);for(let k=0;k<p.length;k+=1)U(p[k]);s=!1},d(h){h&&u(l),de(p,h)}}}function $e(i){let l,t,e,a,n,r=i[21].name+"",o,f,s,v;return a=new Le({props:{speaker:i[21],size:"extra-small"}}),{c(){l=w("div"),t=w("a"),e=w("div"),Be(a.$$.fragment),n=g(`
                \xA0`),o=g(r),s=P(),this.h()},l(p){l=T(p,"DIV",{});var z=$(l);t=T(z,"A",{href:!0});var h=$(t);e=T(h,"DIV",{class:!0});var k=$(e);Pe(a.$$.fragment,k),k.forEach(u),n=E(h,`
                \xA0`),o=E(h,r),h.forEach(u),s=q(z),z.forEach(u),this.h()},h(){y(e,"class","inline-block align-middle"),y(t,"href",f="/lide?id="+i[21].id)},m(p,z){O(p,l,z),_(l,t),_(t,e),qe(a,e,null),_(t,n),_(t,o),_(l,s),v=!0},p(p,z){const h={};z&2&&(h.speaker=p[21]),a.$set(h),(!v||z&2)&&r!==(r=p[21].name+"")&&G(o,r),(!v||z&2&&f!==(f="/lide?id="+p[21].id))&&y(t,"href",f)},i(p){v||(M(a.$$.fragment,p),v=!0)},o(p){U(a.$$.fragment,p),v=!1},d(p){p&&u(l),Je(a)}}}function Ae(i){let l,t,e,a,n,r=i[4][i[18]].title+"",o,f,s=i[5](i[18])+"",v,p,z,h,k;return{c(){l=w("div"),t=w("label"),e=w("input"),n=P(),o=g(r),f=g(" ("),v=g(s),p=g(")"),z=P(),this.h()},l(c){l=T(c,"DIV",{});var I=$(l);t=T(I,"LABEL",{class:!0});var m=$(t);e=T(m,"INPUT",{type:!0,name:!0}),n=q(m),o=E(m,r),f=E(m," ("),v=E(m,s),p=E(m,")"),m.forEach(u),z=q(I),I.forEach(u),this.h()},h(){y(e,"type","radio"),y(e,"name","type"),e.__value=a=i[18],e.value=e.__value,i[9][0].push(e),y(t,"class","cursor-pointer")},m(c,I){O(c,l,I),_(l,t),_(t,e),e.checked=e.__value===i[2],_(t,n),_(t,o),_(t,f),_(t,v),_(t,p),_(l,z),h||(k=Ye(e,"change",i[8]),h=!0)},p(c,I){I&4&&(e.checked=e.__value===c[2])},d(c){c&&u(l),i[9][0].splice(i[9][0].indexOf(e),1),h=!1,k()}}}function Oe(i){let l,t,e=i[4][i[15].type].title+"",a,n,r,o,f,s=i[15].linkInfo.title+"",v,p,z,h,k,c,I,m,N,S,D=!i[15].linkInfo.withoutAvatar&&i[3].spec[i[15].linkInfo.col]&&ze(i),J=i[15].linkInfo.suffix&&Ve(i);function W(A,H){return A[15].claimed?tl:ll}let X=W(i),j=X(i),C=i[15].claimed&&i[15].ticketData&&He(i);return{c(){l=w("tr"),t=w("td"),a=g(e),n=P(),r=w("td"),o=w("a"),D&&D.c(),f=P(),v=g(s),p=P(),J&&J.c(),h=P(),k=w("td"),j.c(),c=P(),I=w("td"),C&&C.c(),m=P(),this.h()},l(A){l=T(A,"TR",{class:!0});var H=$(l);t=T(H,"TD",{class:!0});var K=$(t);a=E(K,e),K.forEach(u),n=q(H),r=T(H,"TD",{class:!0});var te=$(r);o=T(te,"A",{href:!0});var F=$(o);D&&D.l(F),f=q(F),v=E(F,s),p=q(F),J&&J.l(F),F.forEach(u),te.forEach(u),h=q(H),k=T(H,"TD",{class:!0});var Q=$(k);j.l(Q),Q.forEach(u),c=q(H),I=T(H,"TD",{class:!0});var ie=$(I);C&&C.l(ie),ie.forEach(u),m=q(H),H.forEach(u),this.h()},h(){y(t,"class","border-b font-bold"),y(o,"href",z=i[15].linkInfo.url),y(r,"class","border-b"),y(k,"class","border-b"),y(I,"class","border-b"),y(l,"class",N=i[15].claimed?"hover:bg-blue-500/10":"bg-yellow-400/20 hover:bg-yello-600/20")},m(A,H){O(A,l,H),_(l,t),_(t,a),_(l,n),_(l,r),_(r,o),D&&D.m(o,null),_(o,f),_(o,v),_(o,p),J&&J.m(o,null),_(l,h),_(l,k),j.m(k,null),_(l,c),_(l,I),C&&C.m(I,null),_(l,m),S=!0},p(A,H){(!S||H&1)&&e!==(e=A[4][A[15].type].title+"")&&G(a,e),!A[15].linkInfo.withoutAvatar&&A[3].spec[A[15].linkInfo.col]?D?(D.p(A,H),H&9&&M(D,1)):(D=ze(A),D.c(),M(D,1),D.m(o,f)):D&&(se(),U(D,1,1,()=>{D=null}),fe()),(!S||H&1)&&s!==(s=A[15].linkInfo.title+"")&&G(v,s),A[15].linkInfo.suffix?J?J.p(A,H):(J=Ve(A),J.c(),J.m(o,null)):J&&(J.d(1),J=null),(!S||H&1&&z!==(z=A[15].linkInfo.url))&&y(o,"href",z),X===(X=W(A))&&j?j.p(A,H):(j.d(1),j=X(A),j&&(j.c(),j.m(k,null))),A[15].claimed&&A[15].ticketData?C?C.p(A,H):(C=He(A),C.c(),C.m(I,null)):C&&(C.d(1),C=null),(!S||H&1&&N!==(N=A[15].claimed?"hover:bg-blue-500/10":"bg-yellow-400/20 hover:bg-yello-600/20"))&&y(l,"class",N)},i(A){S||(M(D),S=!0)},o(A){U(D),S=!1},d(A){A&&u(l),D&&D.d(),J&&J.d(),j.d(),C&&C.d()}}}function ze(i){let l,t,e;function a(...n){return i[10](i[15],...n)}return t=new Le({props:{speaker:i[3].spec[i[15].linkInfo.col].find(a),col:i[15].linkInfo.col,size:"extra-small"}}),{c(){l=w("div"),Be(t.$$.fragment),this.h()},l(n){l=T(n,"DIV",{class:!0});var r=$(l);Pe(t.$$.fragment,r),r.forEach(u),this.h()},h(){y(l,"class","inline-block align-middle")},m(n,r){O(n,l,r),qe(t,l,null),e=!0},p(n,r){i=n;const o={};r&9&&(o.speaker=i[3].spec[i[15].linkInfo.col].find(a)),r&1&&(o.col=i[15].linkInfo.col),t.$set(o)},i(n){e||(M(t.$$.fragment,n),e=!0)},o(n){U(t.$$.fragment,n),e=!1},d(n){n&&u(l),Je(t)}}}function Ve(i){let l,t=i[15].linkInfo.suffix+"",e,a;return{c(){l=g("\xA0("),e=g(t),a=g(")")},l(n){l=E(n,"\xA0("),e=E(n,t),a=E(n,")")},m(n,r){O(n,l,r),O(n,e,r),O(n,a,r)},p(n,r){r&1&&t!==(t=n[15].linkInfo.suffix+"")&&G(e,t)},d(n){n&&u(l),n&&u(e),n&&u(a)}}}function ll(i){let l;return{c(){l=g("-")},l(t){l=E(t,"-")},m(t,e){O(t,l,e)},p:oe,d(t){t&&u(l)}}}function tl(i){let l,t=i[15].ticketId+"",e,a,n=i[6](i[15].claimedOn)+"",r,o;return{c(){l=w("code"),e=g(t),a=g(" ("),r=g(n),o=g(")")},l(f){l=T(f,"CODE",{});var s=$(l);e=E(s,t),s.forEach(u),a=E(f," ("),r=E(f,n),o=E(f,")")},m(f,s){O(f,l,s),_(l,e),O(f,a,s),O(f,r,s),O(f,o,s)},p(f,s){s&1&&t!==(t=f[15].ticketId+"")&&G(e,t),s&1&&n!==(n=f[6](f[15].claimedOn)+"")&&G(r,n)},d(f){f&&u(l),f&&u(a),f&&u(r),f&&u(o)}}}function He(i){let l,t,e;function a(s,v){return s[15].ticketData.name?al:il}let n=a(i),r=n(i),o=i[15].ticketData.org&&Se(i),f=i[15].ticketData.twitter&&Ne(i);return{c(){r.c(),l=P(),o&&o.c(),t=P(),f&&f.c(),e=ce()},l(s){r.l(s),l=q(s),o&&o.l(s),t=q(s),f&&f.l(s),e=ce()},m(s,v){r.m(s,v),O(s,l,v),o&&o.m(s,v),O(s,t,v),f&&f.m(s,v),O(s,e,v)},p(s,v){n===(n=a(s))&&r?r.p(s,v):(r.d(1),r=n(s),r&&(r.c(),r.m(l.parentNode,l))),s[15].ticketData.org?o?o.p(s,v):(o=Se(s),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),s[15].ticketData.twitter?f?f.p(s,v):(f=Ne(s),f.c(),f.m(e.parentNode,e)):f&&(f.d(1),f=null)},d(s){r.d(s),s&&u(l),o&&o.d(s),s&&u(t),f&&f.d(s),s&&u(e)}}}function il(i){let l,t;return{c(){l=w("span"),t=g("Anonym"),this.h()},l(e){l=T(e,"SPAN",{class:!0});var a=$(l);t=E(a,"Anonym"),a.forEach(u),this.h()},h(){y(l,"class","italic")},m(e,a){O(e,l,a),_(l,t)},p:oe,d(e){e&&u(l)}}}function al(i){let l=i[15].ticketData.name+"",t;return{c(){t=g(l)},l(e){t=E(e,l)},m(e,a){O(e,t,a)},p(e,a){a&1&&l!==(l=e[15].ticketData.name+"")&&G(t,l)},d(e){e&&u(t)}}}function Se(i){let l,t=i[15].ticketData.org+"",e,a;return{c(){l=g("\xA0("),e=g(t),a=g(")")},l(n){l=E(n,"\xA0("),e=E(n,t),a=E(n,")")},m(n,r){O(n,l,r),O(n,e,r),O(n,a,r)},p(n,r){r&1&&t!==(t=n[15].ticketData.org+"")&&G(e,t)},d(n){n&&u(l),n&&u(e),n&&u(a)}}}function Ne(i){let l,t,e,a;return{c(){l=g("\xA0"),t=w("a"),e=w("i"),this.h()},l(n){l=E(n,"\xA0"),t=T(n,"A",{href:!0,target:!0});var r=$(t);e=T(r,"I",{class:!0}),$(e).forEach(u),r.forEach(u),this.h()},h(){y(e,"class","fa-brands fa-twitter"),y(t,"href",a="https://twitter.com/"+i[15].ticketData.twitter.replace(/^@/,"")),y(t,"target","_blank")},m(n,r){O(n,l,r),O(n,t,r),_(t,e)},p(n,r){r&1&&a!==(a="https://twitter.com/"+n[15].ticketData.twitter.replace(/^@/,""))&&y(t,"href",a)},d(n){n&&u(l),n&&u(t)}}}function je(i){let l,t,e=(!i[2]||i[2]==="all"||i[2]&&i[2]===i[15].type)&&Oe(i);return{c(){e&&e.c(),l=ce()},l(a){e&&e.l(a),l=ce()},m(a,n){e&&e.m(a,n),O(a,l,n),t=!0},p(a,n){!a[2]||a[2]==="all"||a[2]&&a[2]===a[15].type?e?(e.p(a,n),n&5&&M(e,1)):(e=Oe(a),e.c(),M(e,1),e.m(l.parentNode,l)):e&&(se(),U(e,1,1,()=>{e=null}),fe())},i(a){t||(M(e),t=!0)},o(a){U(e),t=!1},d(a){e&&e.d(a),a&&u(l)}}}function nl(i){let l,t,e,a,n,r,o,f,s,v,p;document.title=l="Speci\xE1ln\xED vstupenky | "+(i[3]?i[3].name:"UTXO.22");const z=[el,xe],h=[];function k(c,I){return c[0]?0:1}return o=k(i),f=h[o]=z[o](i),{c(){t=P(),e=w("section"),a=w("h1"),n=g("Speci\xE1ln\xED vstupenky"),r=P(),f.c(),s=P(),v=w("section"),this.h()},l(c){We('[data-svelte="svelte-jebagi"]',document.head).forEach(u),t=q(c),e=T(c,"SECTION",{class:!0});var m=$(e);a=T(m,"H1",{class:!0});var N=$(a);n=E(N,"Speci\xE1ln\xED vstupenky"),N.forEach(u),r=q(m),f.l(m),m.forEach(u),s=q(c),v=T(c,"SECTION",{class:!0}),$(v).forEach(u),this.h()},h(){y(a,"class","uppercase text-2xl font-bold"),y(e,"class","relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web"),y(v,"class","h-20")},m(c,I){O(c,t,I),O(c,e,I),_(e,a),_(a,n),_(e,r),h[o].m(e,null),O(c,s,I),O(c,v,I),p=!0},p(c,[I]){(!p||I&8)&&l!==(l="Speci\xE1ln\xED vstupenky | "+(c[3]?c[3].name:"UTXO.22"))&&(document.title=l);let m=o;o=k(c),o===m?h[o].p(c,I):(se(),U(h[m],1,1,()=>{h[m]=null}),fe(),f=h[o],f?f.p(c,I):(f=h[o]=z[o](c),f.c()),M(f,1),f.m(e,null))},i(c){p||(M(f),p=!0)},o(c){U(f),p=!1},d(c){c&&u(t),c&&u(e),h[o].d(),c&&u(s),c&&u(v)}}}const pl=!0,Ce=i=>i.claimed;function rl(i,l,t){let e;Xe(i,Ke,m=>t(3,e=m));let a=null,n=null,r="all";const o={all:{title:"V\u0161e"},organizator:{title:"Organiz\xE1tor"},speaker:{title:"P\u0159edn\xE1\u0161ej\xEDc\xED"},partner:{title:"Partner"},staff:{title:"Obsluha"},host:{title:"Host"}};function f(m="all"){if(!a)return null;if(m==="all")return`${a.filter(D=>D.claimed).length}/${a.length}`;const N=a.filter(D=>D.type===m),S=N.filter(D=>D.claimed);return N?`${S.length}/${N.length}`:null}async function s(){t(0,a=await Qe.apiCall("claims")),t(1,n=h())}function v(m){return Ze(new Date(m),"d.M HH:mm")}function p(m){const S={speaker:{col:"speakers",url:"/lide?id="},partner:{col:"partners",suffix:"partner"},team:{col:"team",withoutAvatar:!0}}[m.type];if(!S)return null;let D=null;return m.type==="team"?D=e.spec.team.persons[m.id]:D=e.spec[S.col].find(J=>J.id===m.id),D?{title:D.name,url:S.url?S.url+m.id:null,col:S.col,suffix:S.suffix,withoutAvatar:S.withoutAvatar}:"not exists!"}function z(m){for(const N of m)N.linkInfo=p(N.link);return m}function h(){if(!a)return null;const m=[];return e.spec.speakers.forEach(N=>{a.find(S=>S.link.type==="speaker"&&S.link.id===N.id)||m.push(N)}),m}Fe(()=>{s()});const k=[[]];function c(){r=this.__value,t(2,r)}return[a,n,r,e,o,f,v,z,c,k,(m,N)=>N.id===m.link.id]}class dl extends Re{constructor(l){super();Ue(this,l,rl,nl,Ge,{})}}export{dl as default,pl as prerender};
