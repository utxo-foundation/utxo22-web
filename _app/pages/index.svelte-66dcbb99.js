import{S as Xt,i as Ft,s as Ut,e as g,k as y,c as b,a as E,d,m as T,b as _,g as M,F as f,t as O,h as P,J as Ht,j as ze,q as D,l as pe,w as ve,x as _e,y as me,o as j,B as ke,p as K,G as oe,R as Qt,I as tt,H as mt,n as X,T as Zt}from"../chunks/index-b6ec56f3.js";import{c as lt,b as Jt}from"../chunks/stores-9ca2ce08.js";import{A as $e,S as Yt,L as Wt}from"../chunks/Avatar-16a27348.js";import"../chunks/index-eca4c666.js";function kt(a,t,l){const e=a.slice();return e[10]=t[l],e}function gt(a,t,l){const e=a.slice();return e[13]=t[l],e}function bt(a,t,l){const e=a.slice();return e[13]=t[l],e}function wt(a,t,l){const e=a.slice();return e[13]=t[l],e}function $t(a,t,l){const e=a.slice();return e[20]=t[l],e}function Et(a,t,l){const e=a.slice();return e[20]=t[l],e}function It(a,t,l){const e=a.slice();return e[25]=t[l],e}function Dt(a){let t,l,e,o,n,u,h,v=a[1],r=[];for(let m=0;m<v.length;m+=1)r[m]=yt(It(a,v,m));let I=a[0].spec.speakers,s=[];for(let m=0;m<I.length;m+=1)s[m]=zt(Et(a,I,m));const p=m=>j(s[m],1,1,()=>{s[m]=null});let i=a[2].hpTrack==="top"&&St(a);return{c(){t=g("section"),l=g("div");for(let m=0;m<r.length;m+=1)r[m].c();e=y(),o=g("section"),n=g("div");for(let m=0;m<s.length;m+=1)s[m].c();u=y(),i&&i.c(),this.h()},l(m){t=b(m,"SECTION",{class:!0});var V=E(t);l=b(V,"DIV",{class:!0});var w=E(l);for(let H=0;H<r.length;H+=1)r[H].l(w);w.forEach(d),V.forEach(d),e=T(m),o=b(m,"SECTION",{class:!0});var A=E(o);n=b(A,"DIV",{class:!0});var ge=E(n);for(let H=0;H<s.length;H+=1)s[H].l(ge);ge.forEach(d),u=T(A),i&&i.l(A),A.forEach(d),this.h()},h(){_(l,"class","flex flex-wrap gap-1.5 sm:gap-3 text-xs uppercase font-bold text-blue-web justify-left"),_(t,"class","relative mx-auto pt-6 sm:pt-10 px-6 max-w-6xl"),_(n,"class","flex flex-wrap gap-6 mt-6 sm:mt-14 justify-center"),_(o,"class","pb-6 sm:-pb-10 mx-auto sm:px-2 lg:px-6 2xl:px-16")},m(m,V){M(m,t,V),f(t,l);for(let w=0;w<r.length;w+=1)r[w].m(l,null);M(m,e,V),M(m,o,V),f(o,n);for(let w=0;w<s.length;w+=1)s[w].m(n,null);f(o,u),i&&i.m(o,null),h=!0},p(m,V){if(V&23){v=m[1];let w;for(w=0;w<v.length;w+=1){const A=It(m,v,w);r[w]?r[w].p(A,V):(r[w]=yt(A),r[w].c(),r[w].m(l,null))}for(;w<r.length;w+=1)r[w].d(1);r.length=v.length}if(V&5){I=m[0].spec.speakers;let w;for(w=0;w<I.length;w+=1){const A=Et(m,I,w);s[w]?(s[w].p(A,V),D(s[w],1)):(s[w]=zt(A),s[w].c(),D(s[w],1),s[w].m(n,null))}for(X(),w=I.length;w<s.length;w+=1)p(w);K()}m[2].hpTrack==="top"?i?(i.p(m,V),V&4&&D(i,1)):(i=St(m),i.c(),D(i,1),i.m(o,null)):i&&(X(),j(i,1,1,()=>{i=null}),K())},i(m){if(!h){for(let V=0;V<I.length;V+=1)D(s[V]);D(i),h=!0}},o(m){s=s.filter(Boolean);for(let V=0;V<s.length;V+=1)j(s[V]);j(i),h=!1},d(m){m&&d(t),oe(r,m),m&&d(e),m&&d(o),oe(s,m),i&&i.d()}}}function Vt(a){let t,l=a[0].spec.speakers.length+"",e,o;return{c(){t=O("("),e=O(l),o=O(")")},l(n){t=P(n,"("),e=P(n,l),o=P(n,")")},m(n,u){M(n,t,u),M(n,e,u),M(n,o,u)},p(n,u){u&1&&l!==(l=n[0].spec.speakers.length+"")&&ze(e,l)},d(n){n&&d(t),n&&d(e),n&&d(o)}}}function yt(a){let t,l=(a[25].shortname||a[25].name)+"",e,o,n,u,h,v,r=!a[25].id&&Vt(a);return{c(){t=g("div"),e=O(l),o=y(),r&&r.c(),n=y(),this.h()},l(I){t=b(I,"DIV",{class:!0});var s=E(t);e=P(s,l),o=T(s),r&&r.l(s),n=T(s),s.forEach(d),this.h()},h(){_(t,"class",u="py-1.5 sm:py-2 px-2.5 sm:px-8 rounded-full shadow border border-solid "+(a[2].hpTrack===a[25].id?"bg-utxo-gradient border-0 text-white":"border-blue-web hover:bg-blue-web hover:text-white hover:border-transparent cursor-pointer"))},m(I,s){M(I,t,s),f(t,e),f(t,o),r&&r.m(t,null),f(t,n),h||(v=Ht(t,"click",function(){Zt(a[4](a[25].id))&&a[4](a[25].id).apply(this,arguments)}),h=!0)},p(I,s){a=I,s&2&&l!==(l=(a[25].shortname||a[25].name)+"")&&ze(e,l),a[25].id?r&&(r.d(1),r=null):r?r.p(a,s):(r=Vt(a),r.c(),r.m(t,n)),s&6&&u!==(u="py-1.5 sm:py-2 px-2.5 sm:px-8 rounded-full shadow border border-solid "+(a[2].hpTrack===a[25].id?"bg-utxo-gradient border-0 text-white":"border-blue-web hover:bg-blue-web hover:text-white hover:border-transparent cursor-pointer"))&&_(t,"class",u)},d(I){I&&d(t),r&&r.d(),h=!1,v()}}}function Tt(a){let t=!a[2].hpTrack||a[20].tracks&&a[20].tracks.includes(a[2].hpTrack)||a[2].hpTrack==="top",l,e,o=t&&jt(a);return{c(){o&&o.c(),l=pe()},l(n){o&&o.l(n),l=pe()},m(n,u){o&&o.m(n,u),M(n,l,u),e=!0},p(n,u){u&5&&(t=!n[2].hpTrack||n[20].tracks&&n[20].tracks.includes(n[2].hpTrack)||n[2].hpTrack==="top"),t?o?(o.p(n,u),u&5&&D(o,1)):(o=jt(n),o.c(),D(o,1),o.m(l.parentNode,l)):o&&(X(),j(o,1,1,()=>{o=null}),K())},i(n){e||(D(o),e=!0)},o(n){j(o),e=!1},d(n){o&&o.d(n),n&&d(l)}}}function jt(a){let t,l;return t=new $e({props:{speaker:a[20]}}),{c(){ve(t.$$.fragment)},l(e){_e(t.$$.fragment,e)},m(e,o){me(t,e,o),l=!0},p(e,o){const n={};o&1&&(n.speaker=e[20]),t.$set(n)},i(e){l||(D(t.$$.fragment,e),l=!0)},o(e){j(t.$$.fragment,e),l=!1},d(e){ke(t,e)}}}function zt(a){let t,l,e=(a[2].hpTrack==="top"&&a[20].lead===!0||a[2].hpTrack!=="top")&&Tt(a);return{c(){e&&e.c(),t=pe()},l(o){e&&e.l(o),t=pe()},m(o,n){e&&e.m(o,n),M(o,t,n),l=!0},p(o,n){o[2].hpTrack==="top"&&o[20].lead===!0||o[2].hpTrack!=="top"?e?(e.p(o,n),n&5&&D(e,1)):(e=Tt(o),e.c(),D(e,1),e.m(t.parentNode,t)):e&&(X(),j(e,1,1,()=>{e=null}),K())},i(o){l||(D(e),l=!0)},o(o){j(e),l=!1},d(o){e&&e.d(o),o&&d(t)}}}function St(a){let t,l,e,o,n,u,h,v=a[0].spec.speakers.filter(At).sort(a[8]).slice(0,27),r=[];for(let s=0;s<v.length;s+=1)r[s]=Nt($t(a,v,s));const I=s=>j(r[s],1,1,()=>{r[s]=null});return{c(){t=g("div"),l=g("div"),e=y(),o=g("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){t=b(s,"DIV",{class:!0});var p=E(t);l=b(p,"DIV",{class:!0}),E(l).forEach(d),e=T(p),o=b(p,"DIV",{class:!0});var i=E(o);for(let m=0;m<r.length;m+=1)r[m].l(i);i.forEach(d),p.forEach(d),this.h()},h(){_(l,"class","absolute inset-0 bg-gradient-to-b from-transparent to-white flex"),_(o,"class","flex flex-wrap gap-3 mt-10 justify-center"),_(t,"class","relative cursor-pointer mb-10")},m(s,p){M(s,t,p),f(t,l),f(t,e),f(t,o);for(let i=0;i<r.length;i+=1)r[i].m(o,null);n=!0,u||(h=Ht(l,"click",a[5]),u=!0)},p(s,p){if(p&1){v=s[0].spec.speakers.filter(At).sort(s[8]).slice(0,27);let i;for(i=0;i<v.length;i+=1){const m=$t(s,v,i);r[i]?(r[i].p(m,p),D(r[i],1)):(r[i]=Nt(m),r[i].c(),D(r[i],1),r[i].m(o,null))}for(X(),i=v.length;i<r.length;i+=1)I(i);K()}},i(s){if(!n){for(let p=0;p<v.length;p+=1)D(r[p]);n=!0}},o(s){r=r.filter(Boolean);for(let p=0;p<r.length;p+=1)j(r[p]);n=!1},d(s){s&&d(t),oe(r,s),u=!1,h()}}}function Nt(a){let t,l;return t=new $e({props:{speaker:a[20],size:"small"}}),{c(){ve(t.$$.fragment)},l(e){_e(t.$$.fragment,e)},m(e,o){me(t,e,o),l=!0},p(e,o){const n={};o&1&&(n.speaker=e[20]),t.$set(n)},i(e){l||(D(t.$$.fragment,e),l=!0)},o(e){j(t.$$.fragment,e),l=!1},d(e){ke(t,e)}}}function Mt(a){let t,l,e,o,n,u,h=a[13].name+"",v,r,I;return e=new $e({props:{speaker:a[13],col:"partners",size:"custom",customSize:"w-24 shadow-xl"}}),{c(){t=g("div"),l=g("a"),ve(e.$$.fragment),n=y(),u=g("div"),v=O(h),r=y(),this.h()},l(s){t=b(s,"DIV",{class:!0});var p=E(t);l=b(p,"A",{href:!0,target:!0});var i=E(l);_e(e.$$.fragment,i),i.forEach(d),n=T(p),u=b(p,"DIV",{class:!0});var m=E(u);v=P(m,h),m.forEach(d),r=T(p),p.forEach(d),this.h()},h(){_(l,"href",o=a[13].web.url),_(l,"target","_blank"),_(u,"class","text-center text-sm uppercase font-bold"),_(t,"class","w-28")},m(s,p){M(s,t,p),f(t,l),me(e,l,null),f(t,n),f(t,u),f(u,v),f(t,r),I=!0},p(s,p){const i={};p&1&&(i.speaker=s[13]),e.$set(i),(!I||p&1&&o!==(o=s[13].web.url))&&_(l,"href",o),(!I||p&1)&&h!==(h=s[13].name+"")&&ze(v,h)},i(s){I||(D(e.$$.fragment,s),I=!0)},o(s){j(e.$$.fragment,s),I=!1},d(s){s&&d(t),ke(e)}}}function Bt(a){let t,l,e,o,n,u;return e=new $e({props:{speaker:a[13],col:"partners",size:"custom",customSize:"w-20 shadow-lg"}}),{c(){t=g("div"),l=g("a"),ve(e.$$.fragment),n=y(),this.h()},l(h){t=b(h,"DIV",{});var v=E(t);l=b(v,"A",{href:!0,target:!0});var r=E(l);_e(e.$$.fragment,r),r.forEach(d),n=T(v),v.forEach(d),this.h()},h(){_(l,"href",o=a[13].web?a[13].web.url:a[13].twitter?`https://twitter.com/${a[13].twitter}`:""),_(l,"target","_blank")},m(h,v){M(h,t,v),f(t,l),me(e,l,null),f(t,n),u=!0},p(h,v){const r={};v&1&&(r.speaker=h[13]),e.$set(r),(!u||v&1&&o!==(o=h[13].web?h[13].web.url:h[13].twitter?`https://twitter.com/${h[13].twitter}`:""))&&_(l,"href",o)},i(h){u||(D(e.$$.fragment,h),u=!0)},o(h){j(e.$$.fragment,h),u=!1},d(h){h&&d(t),ke(e)}}}function Gt(a){let t,l,e,o,n,u;return e=new $e({props:{speaker:a[13],col:"partners",size:"custom",customSize:"w-16 shadow-lg"}}),{c(){t=g("div"),l=g("a"),ve(e.$$.fragment),n=y(),this.h()},l(h){t=b(h,"DIV",{});var v=E(t);l=b(v,"A",{href:!0,target:!0});var r=E(l);_e(e.$$.fragment,r),r.forEach(d),n=T(v),v.forEach(d),this.h()},h(){_(l,"href",o=a[13].web?a[13].web.url:a[13].twitter?`https://twitter.com/${a[13].twitter}`:""),_(l,"target","_blank")},m(h,v){M(h,t,v),f(t,l),me(e,l,null),f(t,n),u=!0},p(h,v){const r={};v&1&&(r.speaker=h[13]),e.$set(r),(!u||v&1&&o!==(o=h[13].web?h[13].web.url:h[13].twitter?`https://twitter.com/${h[13].twitter}`:""))&&_(l,"href",o)},i(h){u||(D(e.$$.fragment,h),u=!0)},o(h){j(e.$$.fragment,h),u=!1},d(h){h&&d(t),ke(e)}}}function Ot(a){let t,l,e,o,n,u,h,v=a[0].spec.faqs,r=[];for(let s=0;s<v.length;s+=1)r[s]=Pt(kt(a,v,s));const I=s=>j(r[s],1,1,()=>{r[s]=null});return{c(){t=g("section"),l=g("div"),e=g("h2"),o=O("\u010Casto kladen\xE9 dotazy (FAQ)"),n=y(),u=g("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){t=b(s,"SECTION",{class:!0});var p=E(t);l=b(p,"DIV",{class:!0});var i=E(l);e=b(i,"H2",{class:!0,id:!0});var m=E(e);o=P(m,"\u010Casto kladen\xE9 dotazy (FAQ)"),m.forEach(d),n=T(i),u=b(i,"DIV",{class:!0});var V=E(u);for(let w=0;w<r.length;w+=1)r[w].l(V);V.forEach(d),i.forEach(d),p.forEach(d),this.h()},h(){_(e,"class","uppercase pt-5 text-center"),_(e,"id","faq"),_(u,"class","md:columns-2 columns-1 mt-8 h-auto"),_(l,"class","text-blue-web"),_(t,"class","relative mx-auto py-10 px-6 max-w-6xl")},m(s,p){M(s,t,p),f(t,l),f(l,e),f(e,o),f(l,n),f(l,u);for(let i=0;i<r.length;i+=1)r[i].m(u,null);h=!0},p(s,p){if(p&9){v=s[0].spec.faqs;let i;for(i=0;i<v.length;i+=1){const m=kt(s,v,i);r[i]?(r[i].p(m,p),D(r[i],1)):(r[i]=Pt(m),r[i].c(),D(r[i],1),r[i].m(u,null))}for(X(),i=v.length;i<r.length;i+=1)I(i);K()}},i(s){if(!h){for(let p=0;p<v.length;p+=1)D(r[p]);h=!0}},o(s){r=r.filter(Boolean);for(let p=0;p<r.length;p+=1)j(r[p]);h=!1},d(s){s&&d(t),oe(r,s)}}}function Pt(a){let t,l,e=a[10].question+"",o,n,u,h,v;return u=new Yt({props:{source:a[10].answer,renderers:a[3]}}),{c(){t=g("div"),l=g("div"),o=O(e),n=y(),ve(u.$$.fragment),h=y(),this.h()},l(r){t=b(r,"DIV",{class:!0});var I=E(t);l=b(I,"DIV",{class:!0});var s=E(l);o=P(s,e),s.forEach(d),n=T(I),_e(u.$$.fragment,I),h=T(I),I.forEach(d),this.h()},h(){_(l,"class","mb-4 font-bold"),_(t,"class","mb-5 break-inside-avoid-column bg-blue-100/60 rounded-xl px-8 py-6 text-left transition-all box-shadow-light overflow-visible")},m(r,I){M(r,t,I),f(t,l),f(l,o),f(t,n),me(u,t,null),f(t,h),v=!0},p(r,I){(!v||I&1)&&e!==(e=r[10].question+"")&&ze(o,e);const s={};I&1&&(s.source=r[10].answer),u.$set(s)},i(r){v||(D(u.$$.fragment,r),v=!0)},o(r){j(u.$$.fragment,r),v=!1},d(r){r&&d(t),ke(u)}}}function el(a){let t,l,e,o,n,u,h,v,r,I,s,p,i,m,V,w,A,ge,H,C,ne,Se,Ne,ie,Me,Be,U,Ge,Oe,Q,Z,Pe,Ae,J,qe,Le,F,Ce,He,Re,xe,Ee,W,q,ce,Ke,Xe,fe,Fe,Ue,ee,Qe,ue,Ze,Je,te,Ye,he,We,et,le,Ie,de,be;document.title=t="UTXO.22 "+(a[0]?"- "+a[0].description:"");let B=a[0]&&Dt(a),re=a[0].spec.partners.filter(qt),z=[];for(let c=0;c<re.length;c+=1)z[c]=Mt(wt(a,re,c));const Rt=c=>j(z[c],1,1,()=>{z[c]=null});let se=a[0].spec.partners.filter(Lt),S=[];for(let c=0;c<se.length;c+=1)S[c]=Bt(bt(a,se,c));const xt=c=>j(S[c],1,1,()=>{S[c]=null});let ae=a[0].spec.partners.filter(Ct),N=[];for(let c=0;c<ae.length;c+=1)N[c]=Gt(gt(a,ae,c));const Kt=c=>j(N[c],1,1,()=>{N[c]=null});let G=a[0]&&Ot(a);return{c(){l=y(),B&&B.c(),e=y(),o=g("section"),n=g("div"),u=g("div"),h=g("div"),v=g("img"),I=y(),s=g("div"),p=g("div"),i=g("img"),V=y(),w=g("div"),A=g("img"),H=y(),C=g("div"),ne=g("div"),Se=O("M\xEDsto"),Ne=y(),ie=g("div"),Me=O("Gabriel Loci"),Be=y(),U=g("div"),Ge=O("Hole\u010Dkova 106/10, 150 00 Praha 5 - Sm\xEDchov \u{1F1E8}\u{1F1FF}"),Oe=g("br"),Q=g("span"),Z=g("a"),Pe=O("Google Maps"),Ae=O(`,
            `),J=g("a"),qe=O("Mapy.cz"),Le=y(),F=g("div"),Ce=O(`Benediktinky. Kulturn\xED pam\xE1tka. \u010Cesk\xE1 Po\u0161ta. Po\u0161tovn\xED muzeum. Na prvn\xED
          pohled nesouvisej\xEDc\xED n\xE1zvy, kter\xE9 jsou ale neodmyslitelnou sou\u010D\xE1st\xED
          unik\xE1tn\xEDho komplexu Gabriel Loci na pra\u017Esk\xE9m Sm\xEDchov\u011B doslova p\xE1r
          minut od centra. Na konci 19.stolet\xED v kl\xE1\u0161te\u0159e s\xEDdlily \u0159eholnice,
          \u017Eensk\xE9 opatstv\xED \u0159\xE1du benediktinek beuronsk\xE9 kongregace. Pozd\u011Bji
          prostory spravovalo \u010Deskoslovensk\xE9 Ministerstvo po\u0161t a telegraf\u016F. Dnes
          komplex vyu\u017E\xEDvaj\xED hlavn\u011B nat\xE1\u010Dec\xED studia jako HBO, Netflix nebo i \u010CT.
          No a my! \u{1F4AA}`),He=g("br"),Re=g("br"),xe=O(`
          Za\u017Eijte mysteri\xF3zn\xED atmosf\xE9ru komplexu na 1.ro\u010Dn\xEDku konference UTXO.22.
          \u010C\xE1st after-party si u\u017Eijete doslova v pitevn\u011B ze seri\xE1lu Devades\xE1tky \u{1F44C}\u{1F600}`),Ee=y(),W=g("section"),q=g("div"),ce=g("div"),Ke=O("Partne\u0159i"),Xe=y(),fe=g("div"),Fe=O("Sponzo\u0159i"),Ue=y(),ee=g("div");for(let c=0;c<z.length;c+=1)z[c].c();Qe=y(),ue=g("div"),Ze=O("Komunity"),Je=y(),te=g("div");for(let c=0;c<S.length;c+=1)S[c].c();Ye=y(),he=g("div"),We=O("Medi\xE1ln\xED partne\u0159i"),et=y(),le=g("div");for(let c=0;c<N.length;c+=1)N[c].c();Ie=y(),G&&G.c(),de=pe(),this.h()},l(c){Qt('[data-svelte="svelte-d9wawy"]',document.head).forEach(d),l=T(c),B&&B.l(c),e=T(c),o=b(c,"SECTION",{class:!0});var k=E(o);n=b(k,"DIV",{class:!0});var R=E(n);u=b(R,"DIV",{class:!0});var De=E(u);h=b(De,"DIV",{class:!0});var Ve=E(h);v=b(Ve,"IMG",{src:!0,class:!0,alt:!0}),I=T(Ve),s=b(Ve,"DIV",{class:!0});var ye=E(s);p=b(ye,"DIV",{class:!0});var rt=E(p);i=b(rt,"IMG",{src:!0,class:!0,alt:!0}),rt.forEach(d),V=T(ye),w=b(ye,"DIV",{class:!0});var st=E(w);A=b(st,"IMG",{src:!0,class:!0,alt:!0}),st.forEach(d),ye.forEach(d),Ve.forEach(d),H=T(De),C=b(De,"DIV",{class:!0});var Y=E(C);ne=b(Y,"DIV",{class:!0});var at=E(ne);Se=P(at,"M\xEDsto"),at.forEach(d),Ne=T(Y),ie=b(Y,"DIV",{class:!0});var ot=E(ie);Me=P(ot,"Gabriel Loci"),ot.forEach(d),Be=T(Y),U=b(Y,"DIV",{class:!0});var Te=E(U);Ge=P(Te,"Hole\u010Dkova 106/10, 150 00 Praha 5 - Sm\xEDchov \u{1F1E8}\u{1F1FF}"),Oe=b(Te,"BR",{}),Q=b(Te,"SPAN",{class:!0});var je=E(Q);Z=b(je,"A",{href:!0,class:!0,target:!0});var nt=E(Z);Pe=P(nt,"Google Maps"),nt.forEach(d),Ae=P(je,`,
            `),J=b(je,"A",{href:!0,class:!0,target:!0});var it=E(J);qe=P(it,"Mapy.cz"),it.forEach(d),je.forEach(d),Te.forEach(d),Le=T(Y),F=b(Y,"DIV",{class:!0});var we=E(F);Ce=P(we,`Benediktinky. Kulturn\xED pam\xE1tka. \u010Cesk\xE1 Po\u0161ta. Po\u0161tovn\xED muzeum. Na prvn\xED
          pohled nesouvisej\xEDc\xED n\xE1zvy, kter\xE9 jsou ale neodmyslitelnou sou\u010D\xE1st\xED
          unik\xE1tn\xEDho komplexu Gabriel Loci na pra\u017Esk\xE9m Sm\xEDchov\u011B doslova p\xE1r
          minut od centra. Na konci 19.stolet\xED v kl\xE1\u0161te\u0159e s\xEDdlily \u0159eholnice,
          \u017Eensk\xE9 opatstv\xED \u0159\xE1du benediktinek beuronsk\xE9 kongregace. Pozd\u011Bji
          prostory spravovalo \u010Deskoslovensk\xE9 Ministerstvo po\u0161t a telegraf\u016F. Dnes
          komplex vyu\u017E\xEDvaj\xED hlavn\u011B nat\xE1\u010Dec\xED studia jako HBO, Netflix nebo i \u010CT.
          No a my! \u{1F4AA}`),He=b(we,"BR",{}),Re=b(we,"BR",{}),xe=P(we,`
          Za\u017Eijte mysteri\xF3zn\xED atmosf\xE9ru komplexu na 1.ro\u010Dn\xEDku konference UTXO.22.
          \u010C\xE1st after-party si u\u017Eijete doslova v pitevn\u011B ze seri\xE1lu Devades\xE1tky \u{1F44C}\u{1F600}`),we.forEach(d),Y.forEach(d),De.forEach(d),R.forEach(d),k.forEach(d),Ee=T(c),W=b(c,"SECTION",{class:!0});var ct=E(W);q=b(ct,"DIV",{class:!0});var L=E(q);ce=b(L,"DIV",{class:!0});var ft=E(ce);Ke=P(ft,"Partne\u0159i"),ft.forEach(d),Xe=T(L),fe=b(L,"DIV",{class:!0});var ut=E(fe);Fe=P(ut,"Sponzo\u0159i"),ut.forEach(d),Ue=T(L),ee=b(L,"DIV",{class:!0});var ht=E(ee);for(let x=0;x<z.length;x+=1)z[x].l(ht);ht.forEach(d),Qe=T(L),ue=b(L,"DIV",{class:!0});var dt=E(ue);Ze=P(dt,"Komunity"),dt.forEach(d),Je=T(L),te=b(L,"DIV",{class:!0});var pt=E(te);for(let x=0;x<S.length;x+=1)S[x].l(pt);pt.forEach(d),Ye=T(L),he=b(L,"DIV",{class:!0});var vt=E(he);We=P(vt,"Medi\xE1ln\xED partne\u0159i"),vt.forEach(d),et=T(L),le=b(L,"DIV",{class:!0});var _t=E(le);for(let x=0;x<N.length;x+=1)N[x].l(_t);_t.forEach(d),L.forEach(d),ct.forEach(d),Ie=T(c),G&&G.l(c),de=pe(),this.h()},h(){tt(v.src,r="/photos/gabriel-loci.jpeg")||_(v,"src",r),_(v,"class","flex rounded-xl shadow-xl"),_(v,"alt","Gabriel Loci"),tt(i.src,m="/photos/rajska-zahrada.jpeg")||_(i,"src",m),_(i,"class","rounded-lg shadow-lg"),_(i,"alt","Gabriel Loci - Rajsk\xE1 zahrada"),_(p,"class","w-1/2"),tt(A.src,ge="/photos/knihovna.jpeg")||_(A,"src",ge),_(A,"class","rounded-lg shadow-lg"),_(A,"alt","Gabriel Loci - Knihovna"),_(w,"class","w-1/2"),_(s,"class","flex mt-3 gap-3"),_(h,"class","block flex-1"),_(ne,"class","uppercase"),_(ie,"class","uppercase mt-3 text-4xl font-bold"),_(Z,"href","https://goo.gl/maps/u1aY4RxXMgcm889V7"),_(Z,"class","underline hover:no-underline"),_(Z,"target","_blank"),_(J,"href","https://mapy.cz/s/cuvetubafo"),_(J,"class","underline hover:no-underline"),_(J,"target","_blank"),_(Q,"class","font-normal"),_(U,"class","mt-4 font-bold"),_(F,"class","mt-4"),_(C,"class","text-white md:w-1/2 md:pt-0 pt-6"),_(u,"class","py-6 md:py-10 md:flex gap-12"),_(n,"class","relative mx-auto py-6 px-6 max-w-6xl"),_(o,"class","bg-utxo-gradient"),_(ce,"class","text-2xl uppercase font-bold text-center"),_(fe,"class","mt-6 text-center"),_(ee,"class","mt-6 flex flex-wrap gap-8 justify-center"),_(ue,"class","mt-10 text-center"),_(te,"class","mt-6 flex flex-wrap gap-6 justify-center"),_(he,"class","mt-10 text-center"),_(le,"class","mt-6 flex flex-wrap gap-4 justify-center"),_(q,"class","text-blue-web lg:mt-10"),_(W,"class","relative mx-auto py-10 px-6")},m(c,$){M(c,l,$),B&&B.m(c,$),M(c,e,$),M(c,o,$),f(o,n),f(n,u),f(u,h),f(h,v),f(h,I),f(h,s),f(s,p),f(p,i),f(s,V),f(s,w),f(w,A),f(u,H),f(u,C),f(C,ne),f(ne,Se),f(C,Ne),f(C,ie),f(ie,Me),f(C,Be),f(C,U),f(U,Ge),f(U,Oe),f(U,Q),f(Q,Z),f(Z,Pe),f(Q,Ae),f(Q,J),f(J,qe),f(C,Le),f(C,F),f(F,Ce),f(F,He),f(F,Re),f(F,xe),M(c,Ee,$),M(c,W,$),f(W,q),f(q,ce),f(ce,Ke),f(q,Xe),f(q,fe),f(fe,Fe),f(q,Ue),f(q,ee);for(let k=0;k<z.length;k+=1)z[k].m(ee,null);f(q,Qe),f(q,ue),f(ue,Ze),f(q,Je),f(q,te);for(let k=0;k<S.length;k+=1)S[k].m(te,null);f(q,Ye),f(q,he),f(he,We),f(q,et),f(q,le);for(let k=0;k<N.length;k+=1)N[k].m(le,null);M(c,Ie,$),G&&G.m(c,$),M(c,de,$),be=!0},p(c,[$]){if((!be||$&1)&&t!==(t="UTXO.22 "+(c[0]?"- "+c[0].description:""))&&(document.title=t),c[0]?B?(B.p(c,$),$&1&&D(B,1)):(B=Dt(c),B.c(),D(B,1),B.m(e.parentNode,e)):B&&(X(),j(B,1,1,()=>{B=null}),K()),$&1){re=c[0].spec.partners.filter(qt);let k;for(k=0;k<re.length;k+=1){const R=wt(c,re,k);z[k]?(z[k].p(R,$),D(z[k],1)):(z[k]=Mt(R),z[k].c(),D(z[k],1),z[k].m(ee,null))}for(X(),k=re.length;k<z.length;k+=1)Rt(k);K()}if($&1){se=c[0].spec.partners.filter(Lt);let k;for(k=0;k<se.length;k+=1){const R=bt(c,se,k);S[k]?(S[k].p(R,$),D(S[k],1)):(S[k]=Bt(R),S[k].c(),D(S[k],1),S[k].m(te,null))}for(X(),k=se.length;k<S.length;k+=1)xt(k);K()}if($&1){ae=c[0].spec.partners.filter(Ct);let k;for(k=0;k<ae.length;k+=1){const R=gt(c,ae,k);N[k]?(N[k].p(R,$),D(N[k],1)):(N[k]=Gt(R),N[k].c(),D(N[k],1),N[k].m(le,null))}for(X(),k=ae.length;k<N.length;k+=1)Kt(k);K()}c[0]?G?(G.p(c,$),$&1&&D(G,1)):(G=Ot(c),G.c(),D(G,1),G.m(de.parentNode,de)):G&&(X(),j(G,1,1,()=>{G=null}),K())},i(c){if(!be){D(B);for(let $=0;$<re.length;$+=1)D(z[$]);for(let $=0;$<se.length;$+=1)D(S[$]);for(let $=0;$<ae.length;$+=1)D(N[$]);D(G),be=!0}},o(c){j(B),z=z.filter(Boolean);for(let $=0;$<z.length;$+=1)j(z[$]);S=S.filter(Boolean);for(let $=0;$<S.length;$+=1)j(S[$]);N=N.filter(Boolean);for(let $=0;$<N.length;$+=1)j(N[$]);j(G),be=!1},d(c){c&&d(l),B&&B.d(c),c&&d(e),c&&d(o),c&&d(Ee),c&&d(W),oe(z,c),oe(S,c),oe(N,c),c&&d(Ie),G&&G.d(c),c&&d(de)}}}const ol=!0,At=a=>!a.lead,qt=a=>a.type==="sponsor",Lt=a=>a.type==="community",Ct=a=>a.type==="medium";function tl(a,t,l){let e,o,n,u,h;mt(a,Jt,p=>l(0,u=p)),mt(a,lt,p=>l(2,h=p));const v={link:Wt};function r(p){return function(){lt.update(i=>(i.hpTrack=p,i))}}function I(){lt.update(p=>(p.hpTrack=null,p))}const s=()=>.5-Math.random();return a.$$.update=()=>{a.$$.dirty&1&&l(6,e=u),a.$$.dirty&64&&l(7,o=e?e.spec.speakers.filter(p=>!!p.lead).length:0),a.$$.dirty&192&&l(1,n=e?[{name:"Hlavn\xED p\u0159edn\xE1\u0161ej\xEDc\xED ("+o+")",id:"top"},{name:"V\u0161e",id:null}].concat(e.spec.tracks):null)},[u,n,h,v,r,I,e,o,s]}class nl extends Xt{constructor(t){super();Ft(this,t,tl,el,Ut,{})}}export{nl as default,ol as prerender};
