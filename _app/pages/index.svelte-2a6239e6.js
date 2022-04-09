import{S as He,i as Re,s as Ce,e as g,k as S,l as A,c as w,a as E,d as h,m as B,b as _,g as $,t as z,h as N,F as m,K as xe,j as ue,q as y,w as fe,x as pe,y as de,o as j,B as he,p as H,G as Z,Q as Le,I as Xe,H as Ee,n as R,R as Fe}from"../chunks/index-05c131b6.js";import{u as ce,b as Ue}from"../chunks/stores-5a24e4f1.js";import{A as Ae,S as Ke}from"../chunks/Avatar-759d1628.js";import"../chunks/index-77580868.js";function Te(o,t,a){const e=o.slice();return e[9]=t[a],e}function De(o,t,a){const e=o.slice();return e[12]=t[a],e}function Ie(o,t,a){const e=o.slice();return e[12]=t[a],e}function $e(o,t,a){const e=o.slice();return e[17]=t[a],e}function je(o){let t,a,e,r,n,p,k=o[1],u=[];for(let l=0;l<k.length;l+=1)u[l]=ze($e(o,k,l));let s=o[0].spec.speakers,f=[];for(let l=0;l<s.length;l+=1)f[l]=Be(Ie(o,s,l));const i=l=>j(f[l],1,1,()=>{f[l]=null});let c=o[2].hpTrack==="top"&&Me(o);return{c(){t=g("div");for(let l=0;l<u.length;l+=1)u[l].c();a=S(),e=g("div");for(let l=0;l<f.length;l+=1)f[l].c();r=S(),c&&c.c(),n=A(),this.h()},l(l){t=w(l,"DIV",{class:!0});var v=E(t);for(let T=0;T<u.length;T+=1)u[T].l(v);v.forEach(h),a=B(l),e=w(l,"DIV",{class:!0});var d=E(e);for(let T=0;T<f.length;T+=1)f[T].l(d);d.forEach(h),r=B(l),c&&c.l(l),n=A(),this.h()},h(){_(t,"class","flex flex-wrap gap-1.5 sm:gap-3 text-xs uppercase font-bold text-blue-web justify-left"),_(e,"class","flex flex-wrap gap-6 mt-6 sm:mt-14 justify-center")},m(l,v){$(l,t,v);for(let d=0;d<u.length;d+=1)u[d].m(t,null);$(l,a,v),$(l,e,v);for(let d=0;d<f.length;d+=1)f[d].m(e,null);$(l,r,v),c&&c.m(l,v),$(l,n,v),p=!0},p(l,v){if(v&15){k=l[1];let d;for(d=0;d<k.length;d+=1){const T=$e(l,k,d);u[d]?u[d].p(T,v):(u[d]=ze(T),u[d].c(),u[d].m(t,null))}for(;d<u.length;d+=1)u[d].d(1);u.length=k.length}if(v&5){s=l[0].spec.speakers;let d;for(d=0;d<s.length;d+=1){const T=Ie(l,s,d);f[d]?(f[d].p(T,v),y(f[d],1)):(f[d]=Be(T),f[d].c(),y(f[d],1),f[d].m(e,null))}for(R(),d=s.length;d<f.length;d+=1)i(d);H()}l[2].hpTrack==="top"?c?(c.p(l,v),v&4&&y(c,1)):(c=Me(l),c.c(),y(c,1),c.m(n.parentNode,n)):c&&(R(),j(c,1,1,()=>{c=null}),H())},i(l){if(!p){for(let v=0;v<s.length;v+=1)y(f[v]);y(c),p=!0}},o(l){f=f.filter(Boolean);for(let v=0;v<f.length;v+=1)j(f[v]);j(c),p=!1},d(l){l&&h(t),Z(u,l),l&&h(a),l&&h(e),Z(f,l),l&&h(r),c&&c.d(l),l&&h(n)}}}function Ve(o){let t,a=o[0].spec.speakers.length+"",e,r;return{c(){t=z("("),e=z(a),r=z(")")},l(n){t=N(n,"("),e=N(n,a),r=N(n,")")},m(n,p){$(n,t,p),$(n,e,p),$(n,r,p)},p(n,p){p&1&&a!==(a=n[0].spec.speakers.length+"")&&ue(e,a)},d(n){n&&h(t),n&&h(e),n&&h(r)}}}function ze(o){let t,a=(o[17].shortname||o[17].name)+"",e,r,n,p,k,u=!o[17].id&&Ve(o);return{c(){t=g("div"),e=z(a),r=S(),u&&u.c(),this.h()},l(s){t=w(s,"DIV",{class:!0});var f=E(t);e=N(f,a),r=B(f),u&&u.l(f),f.forEach(h),this.h()},h(){_(t,"class",n="py-1.5 sm:py-2 px-2.5 sm:px-8 rounded-full shadow border border-solid "+(o[2].hpTrack===o[17].id?"bg-utxo-gradient border-0 text-white":"border-blue-web hover:bg-blue-web hover:text-white hover:border-transparent cursor-pointer"))},m(s,f){$(s,t,f),m(t,e),m(t,r),u&&u.m(t,null),p||(k=xe(t,"click",function(){Fe(o[3](o[17].id))&&o[3](o[17].id).apply(this,arguments)}),p=!0)},p(s,f){o=s,f&2&&a!==(a=(o[17].shortname||o[17].name)+"")&&ue(e,a),o[17].id?u&&(u.d(1),u=null):u?u.p(o,f):(u=Ve(o),u.c(),u.m(t,null)),f&6&&n!==(n="py-1.5 sm:py-2 px-2.5 sm:px-8 rounded-full shadow border border-solid "+(o[2].hpTrack===o[17].id?"bg-utxo-gradient border-0 text-white":"border-blue-web hover:bg-blue-web hover:text-white hover:border-transparent cursor-pointer"))&&_(t,"class",n)},d(s){s&&h(t),u&&u.d(),p=!1,k()}}}function Ne(o){let t=!o[2].hpTrack||o[12].tracks.includes(o[2].hpTrack)||o[2].hpTrack==="top",a,e,r=t&&Se(o);return{c(){r&&r.c(),a=A()},l(n){r&&r.l(n),a=A()},m(n,p){r&&r.m(n,p),$(n,a,p),e=!0},p(n,p){p&5&&(t=!n[2].hpTrack||n[12].tracks.includes(n[2].hpTrack)||n[2].hpTrack==="top"),t?r?(r.p(n,p),p&5&&y(r,1)):(r=Se(n),r.c(),y(r,1),r.m(a.parentNode,a)):r&&(R(),j(r,1,1,()=>{r=null}),H())},i(n){e||(y(r),e=!0)},o(n){j(r),e=!1},d(n){r&&r.d(n),n&&h(a)}}}function Se(o){let t,a;return t=new Ae({props:{speaker:o[12]}}),{c(){fe(t.$$.fragment)},l(e){pe(t.$$.fragment,e)},m(e,r){de(t,e,r),a=!0},p(e,r){const n={};r&1&&(n.speaker=e[12]),t.$set(n)},i(e){a||(y(t.$$.fragment,e),a=!0)},o(e){j(t.$$.fragment,e),a=!1},d(e){he(t,e)}}}function Be(o){let t,a,e=(o[2].hpTrack==="top"&&o[12].lead===!0||o[2].hpTrack!=="top")&&Ne(o);return{c(){e&&e.c(),t=A()},l(r){e&&e.l(r),t=A()},m(r,n){e&&e.m(r,n),$(r,t,n),a=!0},p(r,n){r[2].hpTrack==="top"&&r[12].lead===!0||r[2].hpTrack!=="top"?e?(e.p(r,n),n&5&&y(e,1)):(e=Ne(r),e.c(),y(e,1),e.m(t.parentNode,t)):e&&(R(),j(e,1,1,()=>{e=null}),H())},i(r){a||(y(e),a=!0)},o(r){j(e),a=!1},d(r){e&&e.d(r),r&&h(t)}}}function Me(o){let t,a,e,r,n,p,k,u=o[0].spec.speakers.filter(Pe).sort(o[7]).slice(0,27),s=[];for(let i=0;i<u.length;i+=1)s[i]=qe(De(o,u,i));const f=i=>j(s[i],1,1,()=>{s[i]=null});return{c(){t=g("div"),a=g("div"),e=S(),r=g("div");for(let i=0;i<s.length;i+=1)s[i].c();this.h()},l(i){t=w(i,"DIV",{class:!0});var c=E(t);a=w(c,"DIV",{class:!0}),E(a).forEach(h),e=B(c),r=w(c,"DIV",{class:!0});var l=E(r);for(let v=0;v<s.length;v+=1)s[v].l(l);l.forEach(h),c.forEach(h),this.h()},h(){_(a,"class","absolute inset-0 bg-gradient-to-b from-transparent to-white flex"),_(r,"class","flex flex-wrap gap-3 mt-10 justify-center"),_(t,"class","relative cursor-pointer mb-10")},m(i,c){$(i,t,c),m(t,a),m(t,e),m(t,r);for(let l=0;l<s.length;l+=1)s[l].m(r,null);n=!0,p||(k=xe(a,"click",o[4]),p=!0)},p(i,c){if(c&1){u=i[0].spec.speakers.filter(Pe).sort(i[7]).slice(0,27);let l;for(l=0;l<u.length;l+=1){const v=De(i,u,l);s[l]?(s[l].p(v,c),y(s[l],1)):(s[l]=qe(v),s[l].c(),y(s[l],1),s[l].m(r,null))}for(R(),l=u.length;l<s.length;l+=1)f(l);H()}},i(i){if(!n){for(let c=0;c<u.length;c+=1)y(s[c]);n=!0}},o(i){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)j(s[c]);n=!1},d(i){i&&h(t),Z(s,i),p=!1,k()}}}function qe(o){let t,a;return t=new Ae({props:{speaker:o[12],size:"small"}}),{c(){fe(t.$$.fragment)},l(e){pe(t.$$.fragment,e)},m(e,r){de(t,e,r),a=!0},p(e,r){const n={};r&1&&(n.speaker=e[12]),t.$set(n)},i(e){a||(y(t.$$.fragment,e),a=!0)},o(e){j(t.$$.fragment,e),a=!1},d(e){he(t,e)}}}function Ge(o){let t,a,e,r,n,p,k,u=o[0].spec.faqs,s=[];for(let i=0;i<u.length;i+=1)s[i]=Oe(Te(o,u,i));const f=i=>j(s[i],1,1,()=>{s[i]=null});return{c(){t=g("section"),a=g("div"),e=g("h2"),r=z("\u010Casto kladen\xE9 dotazy (FAQ)"),n=S(),p=g("div");for(let i=0;i<s.length;i+=1)s[i].c();this.h()},l(i){t=w(i,"SECTION",{class:!0});var c=E(t);a=w(c,"DIV",{class:!0});var l=E(a);e=w(l,"H2",{class:!0,id:!0});var v=E(e);r=N(v,"\u010Casto kladen\xE9 dotazy (FAQ)"),v.forEach(h),n=B(l),p=w(l,"DIV",{class:!0});var d=E(p);for(let T=0;T<s.length;T+=1)s[T].l(d);d.forEach(h),l.forEach(h),c.forEach(h),this.h()},h(){_(e,"class","uppercase pt-5"),_(e,"id","faq"),_(p,"class","md:columns-2 columns-1 mt-8 h-auto"),_(a,"class","text-blue-web"),_(t,"class","relative mx-auto py-10 px-6 max-w-6xl")},m(i,c){$(i,t,c),m(t,a),m(a,e),m(e,r),m(a,n),m(a,p);for(let l=0;l<s.length;l+=1)s[l].m(p,null);k=!0},p(i,c){if(c&1){u=i[0].spec.faqs;let l;for(l=0;l<u.length;l+=1){const v=Te(i,u,l);s[l]?(s[l].p(v,c),y(s[l],1)):(s[l]=Oe(v),s[l].c(),y(s[l],1),s[l].m(p,null))}for(R(),l=u.length;l<s.length;l+=1)f(l);H()}},i(i){if(!k){for(let c=0;c<u.length;c+=1)y(s[c]);k=!0}},o(i){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)j(s[c]);k=!1},d(i){i&&h(t),Z(s,i)}}}function Oe(o){let t,a,e=o[9].question+"",r,n,p,k,u;return p=new Ke({props:{source:o[9].answer}}),{c(){t=g("div"),a=g("div"),r=z(e),n=S(),fe(p.$$.fragment),k=S(),this.h()},l(s){t=w(s,"DIV",{class:!0});var f=E(t);a=w(f,"DIV",{class:!0});var i=E(a);r=N(i,e),i.forEach(h),n=B(f),pe(p.$$.fragment,f),k=B(f),f.forEach(h),this.h()},h(){_(a,"class","mb-4 font-bold"),_(t,"class","mb-5 break-inside-avoid-column bg-blue-100/60 rounded-xl px-8 py-6 text-left transition-all box-shadow-light overflow-visible")},m(s,f){$(s,t,f),m(t,a),m(a,r),m(t,n),de(p,t,null),m(t,k),u=!0},p(s,f){(!u||f&1)&&e!==(e=s[9].question+"")&&ue(r,e);const i={};f&1&&(i.source=s[9].answer),p.$set(i)},i(s){u||(y(p.$$.fragment,s),u=!0)},o(s){j(p.$$.fragment,s),u=!1},d(s){s&&h(t),he(p)}}}function Qe(o){let t,a,e,r,n,p,k,u,s,f,i,c,l,v,d,T,Y,J,q,W,ee,G,O,le,te,P,se,re,M,ae,oe,ne,ie,F,C,L;document.title=t="UTXO.22 - 4-5. \u010Derven 2022 "+(o[0]?"- "+o[0].description:"");let D=o[0]&&je(o),I=o[0]&&Ge(o);return{c(){a=S(),e=g("section"),D&&D.c(),r=S(),n=g("section"),p=g("div"),k=g("div"),u=g("div"),s=g("img"),i=S(),c=g("div"),l=g("div"),v=z("M\xEDsto"),d=S(),T=g("div"),Y=z("Gabriel Loci"),J=S(),q=g("div"),W=z("Hole\u010Dkova 106/10, 150 00 Praha 5 - Sm\xEDchov \u{1F1E8}\u{1F1FF}"),ee=g("br"),G=g("span"),O=g("a"),le=z("Google Maps"),te=z(", "),P=g("a"),se=z("Mapy.cz"),re=S(),M=g("div"),ae=z(`Benediktinky. Kulturn\xED pam\xE1tka. \u010Cesk\xE1 Po\u0161ta. Po\u0161tovn\xED muzeum.
Na prvn\xED pohled nesouvisej\xEDc\xED n\xE1zvy, kter\xE9 jsou ale neodmyslitelnou sou\u010D\xE1st\xED unik\xE1tn\xEDho komplexu Gabriel Loci na pra\u017Esk\xE9m Sm\xEDchov\u011B doslova p\xE1r minut od centra.
Na konci 19.stolet\xED v kl\xE1\u0161te\u0159e s\xEDdlily \u0159eholnice, \u017Eensk\xE9 opatstv\xED \u0159\xE1du benediktinek beuronsk\xE9 kongregace. Pozd\u011Bji prostory spravovalo \u010Deskoslovensk\xE9 Ministerstvo po\u0161t a telegraf\u016F.
Dnes komplex vyu\u017E\xEDvaj\xED hlavn\u011B nat\xE1\u010Dec\xED studia jako HBO, Netflix nebo i \u010CT. No a my! \u{1F4AA}`),oe=g("br"),ne=g("br"),ie=z(`
Za\u017Eijte mysteri\xF3zn\xED atmosf\xE9ru komplexu na 1.ro\u010Dn\xEDku konference UTXO.22. \u010C\xE1st after-party si u\u017Eijete doslova v pitevn\u011B ze seri\xE1lu Devades\xE1tky \u{1F44C}\u{1F600}`),F=S(),I&&I.c(),C=A(),this.h()},l(b){Le('[data-svelte="svelte-1iwls6m"]',document.head).forEach(h),a=B(b),e=w(b,"SECTION",{class:!0});var ve=E(e);D&&D.l(ve),ve.forEach(h),r=B(b),n=w(b,"SECTION",{class:!0});var me=E(n);p=w(me,"DIV",{class:!0});var _e=E(p);k=w(_e,"DIV",{class:!0});var U=E(k);u=w(U,"DIV",{class:!0});var ke=E(u);s=w(ke,"IMG",{src:!0,class:!0,alt:!0}),ke.forEach(h),i=B(U),c=w(U,"DIV",{class:!0});var x=E(c);l=w(x,"DIV",{class:!0});var be=E(l);v=N(be,"M\xEDsto"),be.forEach(h),d=B(x),T=w(x,"DIV",{class:!0});var ge=E(T);Y=N(ge,"Gabriel Loci"),ge.forEach(h),J=B(x),q=w(x,"DIV",{class:!0});var K=E(q);W=N(K,"Hole\u010Dkova 106/10, 150 00 Praha 5 - Sm\xEDchov \u{1F1E8}\u{1F1FF}"),ee=w(K,"BR",{}),G=w(K,"SPAN",{class:!0});var Q=E(G);O=w(Q,"A",{href:!0,class:!0,target:!0});var we=E(O);le=N(we,"Google Maps"),we.forEach(h),te=N(Q,", "),P=w(Q,"A",{href:!0,class:!0,target:!0});var ye=E(P);se=N(ye,"Mapy.cz"),ye.forEach(h),Q.forEach(h),K.forEach(h),re=B(x),M=w(x,"DIV",{class:!0});var X=E(M);ae=N(X,`Benediktinky. Kulturn\xED pam\xE1tka. \u010Cesk\xE1 Po\u0161ta. Po\u0161tovn\xED muzeum.
Na prvn\xED pohled nesouvisej\xEDc\xED n\xE1zvy, kter\xE9 jsou ale neodmyslitelnou sou\u010D\xE1st\xED unik\xE1tn\xEDho komplexu Gabriel Loci na pra\u017Esk\xE9m Sm\xEDchov\u011B doslova p\xE1r minut od centra.
Na konci 19.stolet\xED v kl\xE1\u0161te\u0159e s\xEDdlily \u0159eholnice, \u017Eensk\xE9 opatstv\xED \u0159\xE1du benediktinek beuronsk\xE9 kongregace. Pozd\u011Bji prostory spravovalo \u010Deskoslovensk\xE9 Ministerstvo po\u0161t a telegraf\u016F.
Dnes komplex vyu\u017E\xEDvaj\xED hlavn\u011B nat\xE1\u010Dec\xED studia jako HBO, Netflix nebo i \u010CT. No a my! \u{1F4AA}`),oe=w(X,"BR",{}),ne=w(X,"BR",{}),ie=N(X,`
Za\u017Eijte mysteri\xF3zn\xED atmosf\xE9ru komplexu na 1.ro\u010Dn\xEDku konference UTXO.22. \u010C\xE1st after-party si u\u017Eijete doslova v pitevn\u011B ze seri\xE1lu Devades\xE1tky \u{1F44C}\u{1F600}`),X.forEach(h),x.forEach(h),U.forEach(h),_e.forEach(h),me.forEach(h),F=B(b),I&&I.l(b),C=A(),this.h()},h(){_(e,"class","relative mx-auto py-6 sm:py-10 px-6 max-w-6xl"),Xe(s.src,f="/photos/gabriel-loci.jpeg")||_(s,"src",f),_(s,"class","flex rounded-xl shadow-xl"),_(s,"alt","Gabriel Loci"),_(u,"class","block flex-1"),_(l,"class","uppercase"),_(T,"class","uppercase mt-3 text-4xl font-bold"),_(O,"href","https://goo.gl/maps/u1aY4RxXMgcm889V7"),_(O,"class","underline hover:no-underline"),_(O,"target","_blank"),_(P,"href","https://mapy.cz/s/cuvetubafo"),_(P,"class","underline hover:no-underline"),_(P,"target","_blank"),_(G,"class","font-normal"),_(q,"class","mt-4 font-bold"),_(M,"class","mt-4"),_(c,"class","text-white md:w-1/2 md:pt-0 pt-6"),_(k,"class","py-6 md:py-10 md:flex gap-12"),_(p,"class","relative mx-auto py-6 px-6 max-w-6xl"),_(n,"class","bg-utxo-gradient")},m(b,V){$(b,a,V),$(b,e,V),D&&D.m(e,null),$(b,r,V),$(b,n,V),m(n,p),m(p,k),m(k,u),m(u,s),m(k,i),m(k,c),m(c,l),m(l,v),m(c,d),m(c,T),m(T,Y),m(c,J),m(c,q),m(q,W),m(q,ee),m(q,G),m(G,O),m(O,le),m(G,te),m(G,P),m(P,se),m(c,re),m(c,M),m(M,ae),m(M,oe),m(M,ne),m(M,ie),$(b,F,V),I&&I.m(b,V),$(b,C,V),L=!0},p(b,[V]){(!L||V&1)&&t!==(t="UTXO.22 - 4-5. \u010Derven 2022 "+(b[0]?"- "+b[0].description:""))&&(document.title=t),b[0]?D?(D.p(b,V),V&1&&y(D,1)):(D=je(b),D.c(),y(D,1),D.m(e,null)):D&&(R(),j(D,1,1,()=>{D=null}),H()),b[0]?I?(I.p(b,V),V&1&&y(I,1)):(I=Ge(b),I.c(),y(I,1),I.m(C.parentNode,C)):I&&(R(),j(I,1,1,()=>{I=null}),H())},i(b){L||(y(D),y(I),L=!0)},o(b){j(D),j(I),L=!1},d(b){b&&h(a),b&&h(e),D&&D.d(),b&&h(r),b&&h(n),b&&h(F),I&&I.d(b),b&&h(C)}}}const ll=!0,Pe=o=>!o.lead;function Ze(o,t,a){let e,r,n,p,k;Ee(o,Ue,i=>a(0,p=i)),Ee(o,ce,i=>a(2,k=i));function u(i){return function(){ce.update(c=>(c.hpTrack=i,c))}}function s(){ce.update(i=>(i.hpTrack=null,i))}const f=()=>.5-Math.random();return o.$$.update=()=>{o.$$.dirty&1&&a(5,e=p),o.$$.dirty&32&&a(6,r=e?e.spec.speakers.filter(i=>!!i.lead).length:0),o.$$.dirty&96&&a(1,n=e?[{name:"Hlavn\xED p\u0159edn\xE1\u0161ej\xEDc\xED ("+r+")",id:"top"},{name:"V\u0161e",id:null}].concat(e.spec.tracks):null)},[p,n,k,u,s,e,r,f]}class tl extends He{constructor(t){super();Re(this,t,Ze,Qe,Ce,{})}}export{tl as default,ll as prerender};