import{S as Se,i as Be,s as Te,e as w,k as z,l as q,c as y,a as I,d as v,m as S,b as g,g as D,t as B,h as T,G as m,P as Ne,j as se,q as b,w as oe,x as re,y as ie,o as j,B as ae,p as P,H as X,Q as qe,J as Oe,I as Pe,n as G,R as Ge}from"../chunks/index-a2ca1b26.js";import{b as He}from"../chunks/stores-bfd230c4.js";import{A as ze,S as Me}from"../chunks/Avatar-e3de332c.js";import"../chunks/index-ed9d6cc1.js";function ve(a,l,o){const e=a.slice();return e[8]=l[o],e}function he(a,l,o){const e=a.slice();return e[11]=l[o],e}function me(a,l,o){const e=a.slice();return e[11]=l[o],e}function _e(a,l,o){const e=a.slice();return e[16]=l[o],e}function ke(a){let l,o,e,s,i,d,_=a[2],f=[];for(let t=0;t<_.length;t+=1)f[t]=ge(_e(a,_,t));let r=a[0].spec.speakers,u=[];for(let t=0;t<r.length;t+=1)u[t]=Ee(me(a,r,t));const c=t=>j(u[t],1,1,()=>{u[t]=null});let n=a[1]==="top"&&Ie(a);return{c(){l=w("div");for(let t=0;t<f.length;t+=1)f[t].c();o=z(),e=w("div");for(let t=0;t<u.length;t+=1)u[t].c();s=z(),n&&n.c(),i=q(),this.h()},l(t){l=y(t,"DIV",{class:!0});var h=I(l);for(let E=0;E<f.length;E+=1)f[E].l(h);h.forEach(v),o=S(t),e=y(t,"DIV",{class:!0});var p=I(e);for(let E=0;E<u.length;E+=1)u[E].l(p);p.forEach(v),s=S(t),n&&n.l(t),i=q(),this.h()},h(){g(l,"class","flex flex-wrap gap-3 text-xs uppercase font-bold text-blue-web justify-left"),g(e,"class","flex flex-wrap gap-6 mt-14 justify-center")},m(t,h){D(t,l,h);for(let p=0;p<f.length;p+=1)f[p].m(l,null);D(t,o,h),D(t,e,h);for(let p=0;p<u.length;p+=1)u[p].m(e,null);D(t,s,h),n&&n.m(t,h),D(t,i,h),d=!0},p(t,h){if(h&15){_=t[2];let p;for(p=0;p<_.length;p+=1){const E=_e(t,_,p);f[p]?f[p].p(E,h):(f[p]=ge(E),f[p].c(),f[p].m(l,null))}for(;p<f.length;p+=1)f[p].d(1);f.length=_.length}if(h&3){r=t[0].spec.speakers;let p;for(p=0;p<r.length;p+=1){const E=me(t,r,p);u[p]?(u[p].p(E,h),b(u[p],1)):(u[p]=Ee(E),u[p].c(),b(u[p],1),u[p].m(e,null))}for(G(),p=r.length;p<u.length;p+=1)c(p);P()}t[1]==="top"?n?(n.p(t,h),h&2&&b(n,1)):(n=Ie(t),n.c(),b(n,1),n.m(i.parentNode,i)):n&&(G(),j(n,1,1,()=>{n=null}),P())},i(t){if(!d){for(let h=0;h<r.length;h+=1)b(u[h]);b(n),d=!0}},o(t){u=u.filter(Boolean);for(let h=0;h<u.length;h+=1)j(u[h]);j(n),d=!1},d(t){t&&v(l),X(f,t),t&&v(o),t&&v(e),X(u,t),t&&v(s),n&&n.d(t),t&&v(i)}}}function be(a){let l,o=a[0].spec.speakers.length+"",e,s;return{c(){l=B("("),e=B(o),s=B(")")},l(i){l=T(i,"("),e=T(i,o),s=T(i,")")},m(i,d){D(i,l,d),D(i,e,d),D(i,s,d)},p(i,d){d&1&&o!==(o=i[0].spec.speakers.length+"")&&se(e,o)},d(i){i&&v(l),i&&v(e),i&&v(s)}}}function ge(a){let l,o=(a[16].shortname||a[16].name)+"",e,s,i,d,_,f=!a[16].id&&be(a);return{c(){l=w("div"),e=B(o),s=z(),f&&f.c(),this.h()},l(r){l=y(r,"DIV",{class:!0});var u=I(l);e=T(u,o),s=S(u),f&&f.l(u),u.forEach(v),this.h()},h(){g(l,"class",i="py-2 px-8 rounded-full border border-solid "+(a[1]===a[16].id?"bg-utxo-gradient border-0 text-white":"border-blue-web hover:bg-blue-web hover:text-white hover:border-transparent cursor-pointer"))},m(r,u){D(r,l,u),m(l,e),m(l,s),f&&f.m(l,null),d||(_=Ne(l,"click",function(){Ge(a[3](a[16].id))&&a[3](a[16].id).apply(this,arguments)}),d=!0)},p(r,u){a=r,u&4&&o!==(o=(a[16].shortname||a[16].name)+"")&&se(e,o),a[16].id?f&&(f.d(1),f=null):f?f.p(a,u):(f=be(a),f.c(),f.m(l,null)),u&6&&i!==(i="py-2 px-8 rounded-full border border-solid "+(a[1]===a[16].id?"bg-utxo-gradient border-0 text-white":"border-blue-web hover:bg-blue-web hover:text-white hover:border-transparent cursor-pointer"))&&g(l,"class",i)},d(r){r&&v(l),f&&f.d(),d=!1,_()}}}function we(a){let l=!a[1]||a[11].tracks.includes(a[1])||a[1]==="top",o,e,s=l&&ye(a);return{c(){s&&s.c(),o=q()},l(i){s&&s.l(i),o=q()},m(i,d){s&&s.m(i,d),D(i,o,d),e=!0},p(i,d){d&3&&(l=!i[1]||i[11].tracks.includes(i[1])||i[1]==="top"),l?s?(s.p(i,d),d&3&&b(s,1)):(s=ye(i),s.c(),b(s,1),s.m(o.parentNode,o)):s&&(G(),j(s,1,1,()=>{s=null}),P())},i(i){e||(b(s),e=!0)},o(i){j(s),e=!1},d(i){s&&s.d(i),i&&v(o)}}}function ye(a){let l,o;return l=new ze({props:{speaker:a[11]}}),{c(){oe(l.$$.fragment)},l(e){re(l.$$.fragment,e)},m(e,s){ie(l,e,s),o=!0},p(e,s){const i={};s&1&&(i.speaker=e[11]),l.$set(i)},i(e){o||(b(l.$$.fragment,e),o=!0)},o(e){j(l.$$.fragment,e),o=!1},d(e){ae(l,e)}}}function Ee(a){let l,o,e=(a[1]==="top"&&a[11].lead===!0||a[1]!=="top")&&we(a);return{c(){e&&e.c(),l=q()},l(s){e&&e.l(s),l=q()},m(s,i){e&&e.m(s,i),D(s,l,i),o=!0},p(s,i){s[1]==="top"&&s[11].lead===!0||s[1]!=="top"?e?(e.p(s,i),i&3&&b(e,1)):(e=we(s),e.c(),b(e,1),e.m(l.parentNode,l)):e&&(G(),j(e,1,1,()=>{e=null}),P())},i(s){o||(b(e),o=!0)},o(s){j(e),o=!1},d(s){e&&e.d(s),s&&v(l)}}}function Ie(a){let l,o,e,s,i,d,_,f=a[0].spec.speakers,r=[];for(let c=0;c<f.length;c+=1)r[c]=je(he(a,f,c));const u=c=>j(r[c],1,1,()=>{r[c]=null});return{c(){l=w("div"),o=w("div"),e=z(),s=w("div");for(let c=0;c<r.length;c+=1)r[c].c();this.h()},l(c){l=y(c,"DIV",{class:!0});var n=I(l);o=y(n,"DIV",{class:!0}),I(o).forEach(v),e=S(n),s=y(n,"DIV",{class:!0});var t=I(s);for(let h=0;h<r.length;h+=1)r[h].l(t);t.forEach(v),n.forEach(v),this.h()},h(){g(o,"class","absolute inset-0 bg-gradient-to-b from-transparent to-white flex"),g(s,"class","flex flex-wrap gap-3 mt-10 justify-center"),g(l,"class","relative cursor-pointer mb-10")},m(c,n){D(c,l,n),m(l,o),m(l,e),m(l,s);for(let t=0;t<r.length;t+=1)r[t].m(s,null);i=!0,d||(_=Ne(o,"click",a[4]),d=!0)},p(c,n){if(n&1){f=c[0].spec.speakers;let t;for(t=0;t<f.length;t+=1){const h=he(c,f,t);r[t]?(r[t].p(h,n),b(r[t],1)):(r[t]=je(h),r[t].c(),b(r[t],1),r[t].m(s,null))}for(G(),t=f.length;t<r.length;t+=1)u(t);P()}},i(c){if(!i){for(let n=0;n<f.length;n+=1)b(r[n]);i=!0}},o(c){r=r.filter(Boolean);for(let n=0;n<r.length;n+=1)j(r[n]);i=!1},d(c){c&&v(l),X(r,c),d=!1,_()}}}function De(a){let l,o;return l=new ze({props:{speaker:a[11],size:"small"}}),{c(){oe(l.$$.fragment)},l(e){re(l.$$.fragment,e)},m(e,s){ie(l,e,s),o=!0},p(e,s){const i={};s&1&&(i.speaker=e[11]),l.$set(i)},i(e){o||(b(l.$$.fragment,e),o=!0)},o(e){j(l.$$.fragment,e),o=!1},d(e){ae(l,e)}}}function je(a){let l,o,e=!a[11].lead&&De(a);return{c(){e&&e.c(),l=q()},l(s){e&&e.l(s),l=q()},m(s,i){e&&e.m(s,i),D(s,l,i),o=!0},p(s,i){s[11].lead?e&&(G(),j(e,1,1,()=>{e=null}),P()):e?(e.p(s,i),i&1&&b(e,1)):(e=De(s),e.c(),b(e,1),e.m(l.parentNode,l))},i(s){o||(b(e),o=!0)},o(s){j(e),o=!1},d(s){e&&e.d(s),s&&v(l)}}}function $e(a){let l,o,e,s,i,d,_,f=a[0].spec.faqs,r=[];for(let c=0;c<f.length;c+=1)r[c]=Ve(ve(a,f,c));const u=c=>j(r[c],1,1,()=>{r[c]=null});return{c(){l=w("section"),o=w("div"),e=w("h2"),s=B("\u010Casto kladen\xE9 dotazy (FAQ)"),i=z(),d=w("div");for(let c=0;c<r.length;c+=1)r[c].c();this.h()},l(c){l=y(c,"SECTION",{class:!0});var n=I(l);o=y(n,"DIV",{class:!0});var t=I(o);e=y(t,"H2",{class:!0,id:!0});var h=I(e);s=T(h,"\u010Casto kladen\xE9 dotazy (FAQ)"),h.forEach(v),i=S(t),d=y(t,"DIV",{class:!0});var p=I(d);for(let E=0;E<r.length;E+=1)r[E].l(p);p.forEach(v),t.forEach(v),n.forEach(v),this.h()},h(){g(e,"class","uppercase pt-5"),g(e,"id","faq"),g(d,"class","md:columns-2 columns-1 mt-8 h-auto"),g(o,"class","text-blue-web"),g(l,"class","relative mx-auto py-10 px-6 max-w-6xl")},m(c,n){D(c,l,n),m(l,o),m(o,e),m(e,s),m(o,i),m(o,d);for(let t=0;t<r.length;t+=1)r[t].m(d,null);_=!0},p(c,n){if(n&1){f=c[0].spec.faqs;let t;for(t=0;t<f.length;t+=1){const h=ve(c,f,t);r[t]?(r[t].p(h,n),b(r[t],1)):(r[t]=Ve(h),r[t].c(),b(r[t],1),r[t].m(d,null))}for(G(),t=f.length;t<r.length;t+=1)u(t);P()}},i(c){if(!_){for(let n=0;n<f.length;n+=1)b(r[n]);_=!0}},o(c){r=r.filter(Boolean);for(let n=0;n<r.length;n+=1)j(r[n]);_=!1},d(c){c&&v(l),X(r,c)}}}function Ve(a){let l,o,e=a[8].question+"",s,i,d,_,f;return d=new Me({props:{source:a[8].answer}}),{c(){l=w("div"),o=w("div"),s=B(e),i=z(),oe(d.$$.fragment),_=z(),this.h()},l(r){l=y(r,"DIV",{class:!0});var u=I(l);o=y(u,"DIV",{class:!0});var c=I(o);s=T(c,e),c.forEach(v),i=S(u),re(d.$$.fragment,u),_=S(u),u.forEach(v),this.h()},h(){g(o,"class","mb-4 font-bold"),g(l,"class","mb-5 break-inside-avoid-column bg-blue-100/60 rounded-xl px-8 py-6 text-left transition-all box-shadow-light overflow-visible")},m(r,u){D(r,l,u),m(l,o),m(o,s),m(l,i),ie(d,l,null),m(l,_),f=!0},p(r,u){(!f||u&1)&&e!==(e=r[8].question+"")&&se(s,e);const c={};u&1&&(c.source=r[8].answer),d.$set(c)},i(r){f||(b(d.$$.fragment,r),f=!0)},o(r){j(d.$$.fragment,r),f=!1},d(r){r&&v(l),ae(d)}}}function xe(a){let l,o,e,s,i,d,_,f,r,u,c,n,t,h,p,E,F,Q,H,K,Z,J,W,O,Y,ee,le,te,R,x,C;document.title=l="UTXO.22 - 4-5. \u010Derven 2022 - "+a[0].description;let $=a[0]&&ke(a),V=a[0]&&$e(a);return{c(){o=z(),e=w("section"),$&&$.c(),s=z(),i=w("section"),d=w("div"),_=w("div"),f=w("div"),r=w("img"),c=z(),n=w("div"),t=w("div"),h=B("M\xEDsto"),p=z(),E=w("div"),F=B("Gabriel Loci"),Q=z(),H=w("div"),K=B("Hole\u010Dkova 106/10"),Z=w("br"),J=B(`
          150 00 Praha 5 - Sm\xEDchov`),W=z(),O=w("div"),Y=B(`Benediktinky. Kulturn\xED pam\xE1tka. \u010Cesk\xE1 Po\u0161ta. Po\u0161tovn\xED muzeum.
Na prvn\xED pohled nesouvisej\xEDc\xED n\xE1zvy, kter\xE9 jsou ale neodmyslitelnou sou\u010D\xE1st\xED unik\xE1tn\xEDho komplexu Gabriel Loci na pra\u017Esk\xE9m Sm\xEDchov\u011B doslova p\xE1r minut od centra.
Na konci 19.stolet\xED v kl\xE1\u0161te\u0159e s\xEDdlily \u0159eholnice, \u017Eensk\xE9 opatstv\xED \u0159\xE1du benediktinek beuronsk\xE9 kongregace. Pozd\u011Bji prostory spravovalo \u010Deskoslovensk\xE9 Ministerstvo po\u0161t a telegraf\u016F.
Dnes komplex vyu\u017E\xEDvaj\xED hlavn\u011B nat\xE1\u010Dec\xED studia jako HBO, Netflix nebo i \u010CT. No a my! \u{1F4AA}`),ee=w("br"),le=w("br"),te=B(`
Za\u017Eijte mysteri\xF3zn\xED atmosf\xE9ru komplexu na 1.ro\u010Dn\xEDku konference UTXO.22. \u010C\xE1st after-party si u\u017Eijete doslova v pitevn\u011B ze seri\xE1lu Devades\xE1tky \u{1F44C}\u{1F600}`),R=z(),V&&V.c(),x=q(),this.h()},l(k){qe('[data-svelte="svelte-19sfzys"]',document.head).forEach(v),o=S(k),e=y(k,"SECTION",{class:!0});var ne=I(e);$&&$.l(ne),ne.forEach(v),s=S(k),i=y(k,"SECTION",{class:!0});var fe=I(i);d=y(fe,"DIV",{class:!0});var ce=I(d);_=y(ce,"DIV",{class:!0});var A=I(_);f=y(A,"DIV",{class:!0});var ue=I(f);r=y(ue,"IMG",{src:!0,class:!0,alt:!0}),ue.forEach(v),c=S(A),n=y(A,"DIV",{class:!0});var M=I(n);t=y(M,"DIV",{class:!0});var de=I(t);h=T(de,"M\xEDsto"),de.forEach(v),p=S(M),E=y(M,"DIV",{class:!0});var pe=I(E);F=T(pe,"Gabriel Loci"),pe.forEach(v),Q=S(M),H=y(M,"DIV",{class:!0});var U=I(H);K=T(U,"Hole\u010Dkova 106/10"),Z=y(U,"BR",{}),J=T(U,`
          150 00 Praha 5 - Sm\xEDchov`),U.forEach(v),W=S(M),O=y(M,"DIV",{class:!0});var L=I(O);Y=T(L,`Benediktinky. Kulturn\xED pam\xE1tka. \u010Cesk\xE1 Po\u0161ta. Po\u0161tovn\xED muzeum.
Na prvn\xED pohled nesouvisej\xEDc\xED n\xE1zvy, kter\xE9 jsou ale neodmyslitelnou sou\u010D\xE1st\xED unik\xE1tn\xEDho komplexu Gabriel Loci na pra\u017Esk\xE9m Sm\xEDchov\u011B doslova p\xE1r minut od centra.
Na konci 19.stolet\xED v kl\xE1\u0161te\u0159e s\xEDdlily \u0159eholnice, \u017Eensk\xE9 opatstv\xED \u0159\xE1du benediktinek beuronsk\xE9 kongregace. Pozd\u011Bji prostory spravovalo \u010Deskoslovensk\xE9 Ministerstvo po\u0161t a telegraf\u016F.
Dnes komplex vyu\u017E\xEDvaj\xED hlavn\u011B nat\xE1\u010Dec\xED studia jako HBO, Netflix nebo i \u010CT. No a my! \u{1F4AA}`),ee=y(L,"BR",{}),le=y(L,"BR",{}),te=T(L,`
Za\u017Eijte mysteri\xF3zn\xED atmosf\xE9ru komplexu na 1.ro\u010Dn\xEDku konference UTXO.22. \u010C\xE1st after-party si u\u017Eijete doslova v pitevn\u011B ze seri\xE1lu Devades\xE1tky \u{1F44C}\u{1F600}`),L.forEach(v),M.forEach(v),A.forEach(v),ce.forEach(v),fe.forEach(v),R=S(k),V&&V.l(k),x=q(),this.h()},h(){g(e,"class","relative mx-auto py-10 px-6 max-w-6xl"),Oe(r.src,u="/photos/gabriel-loci.jpeg")||g(r,"src",u),g(r,"class","flex rounded-xl shadow-xl"),g(r,"alt","Gabriel Loci"),g(f,"class","block flex-1"),g(t,"class","uppercase"),g(E,"class","uppercase mt-4 text-4xl font-bold"),g(H,"class","mt-4 font-bold"),g(O,"class","mt-4"),g(n,"class","text-white md:w-1/2 md:pt-0 pt-6"),g(_,"class","py-6 md:py-10 md:flex gap-12"),g(d,"class","relative mx-auto py-6 px-6 max-w-6xl"),g(i,"class","bg-utxo-gradient")},m(k,N){D(k,o,N),D(k,e,N),$&&$.m(e,null),D(k,s,N),D(k,i,N),m(i,d),m(d,_),m(_,f),m(f,r),m(_,c),m(_,n),m(n,t),m(t,h),m(n,p),m(n,E),m(E,F),m(n,Q),m(n,H),m(H,K),m(H,Z),m(H,J),m(n,W),m(n,O),m(O,Y),m(O,ee),m(O,le),m(O,te),D(k,R,N),V&&V.m(k,N),D(k,x,N),C=!0},p(k,[N]){(!C||N&1)&&l!==(l="UTXO.22 - 4-5. \u010Derven 2022 - "+k[0].description)&&(document.title=l),k[0]?$?($.p(k,N),N&1&&b($,1)):($=ke(k),$.c(),b($,1),$.m(e,null)):$&&(G(),j($,1,1,()=>{$=null}),P()),k[0]?V?(V.p(k,N),N&1&&b(V,1)):(V=$e(k),V.c(),b(V,1),V.m(x.parentNode,x)):V&&(G(),j(V,1,1,()=>{V=null}),P())},i(k){C||(b($),b(V),C=!0)},o(k){j($),j(V),C=!1},d(k){k&&v(o),k&&v(e),$&&$.d(),k&&v(s),k&&v(i),k&&v(R),V&&V.d(k),k&&v(x)}}}const Xe=!0;function Ce(a,l,o){let e,s,i,d;Pe(a,He,u=>o(0,d=u));let _="top";function f(u){return function(){o(1,_=u)}}function r(){o(1,_=null)}return a.$$.update=()=>{a.$$.dirty&1&&o(5,e=d),a.$$.dirty&32&&o(6,s=e?e.spec.speakers.filter(u=>!!u.lead).length:0),a.$$.dirty&96&&o(2,i=e?[{name:"Hlavn\xED p\u0159edn\xE1\u0161ej\xEDc\xED ("+s+")",id:"top"},{name:"V\u0161e",id:null}].concat(e.spec.tracks):null)},[d,_,i,f,r,e,s]}class Fe extends Se{constructor(l){super();Be(this,l,Ce,xe,Te,{})}}export{Fe as default,Xe as prerender};
