import{S as De,i as Ie,s as Ve,e as E,k as S,t as A,c as $,a as D,d as _,m as j,h as T,b,g as z,G as h,E as x,w as le,x as se,y as ae,P as ye,j as F,q as I,o as y,B as re,p as q,H as W,Q as Pe,I as fe,n as C,l as ue}from"../chunks/index-a2ca1b26.js";import{u as te,b as Se}from"../chunks/stores-0b5bd192.js";import{A as we}from"../chunks/Avatar-e3de332c.js";import"../chunks/index-ed9d6cc1.js";function je(i){let e,r,n,s,c=i[0].title+"",a;return{c(){e=E("div"),r=E("div"),n=S(),s=E("div"),a=A(c),this.h()},l(t){e=$(t,"DIV",{class:!0});var l=D(e);r=$(l,"DIV",{class:!0}),D(r).forEach(_),n=j(l),s=$(l,"DIV",{class:!0});var o=D(s);a=T(o,c),o.forEach(_),l.forEach(_),this.h()},h(){b(r,"class","w-1 rounded-l-sm "+i[0].style),b(s,"class","px-1.5 py-0.5 rounded-r-sm bg-gray-100 uppercase"),b(e,"class","text-xs flex h-5")},m(t,l){z(t,e,l),h(e,r),h(e,n),h(e,s),h(s,a)},p:x,i:x,o:x,d(t){t&&_(e)}}}function Be(i,e,r){let{event:n={}}=e;const c={panel:{title:"Panelov\xE1 debata",style:"bg-custom-red text-white"},talk:{title:"P\u0159edn\xE1\u0161ka",style:"bg-custom-green text-white"},workshop:{title:"Workshop",style:"bg-custom-blue text-white"},other:{title:"Ostatn\xED",style:"bg-custom-yellow"}}[n.type];return i.$$set=a=>{"event"in a&&r(1,n=a.event)},[c,n]}class Oe extends De{constructor(e){super();Ie(this,e,Be,je,Ve,{event:1})}}function de(i,e,r){const n=i.slice();return n[7]=e[r],n}function he(i,e,r){const n=i.slice();return n[10]=e[r],n}function ve(i,e,r){const n=i.slice();return n[13]=e[r],n}function _e(i,e,r){const n=i.slice();return n[13]=e[r],n}function pe(i){let e,r,n=i[2](i[7].speakers),s=[];for(let a=0;a<n.length;a+=1)s[a]=me(_e(i,n,a));const c=a=>y(s[a],1,1,()=>{s[a]=null});return{c(){e=E("div");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=$(a,"DIV",{class:!0});var t=D(e);for(let l=0;l<s.length;l+=1)s[l].l(t);t.forEach(_),this.h()},h(){b(e,"class","mt-1 mb-2 flex flex-wrap gap-2")},m(a,t){z(a,e,t);for(let l=0;l<s.length;l+=1)s[l].m(e,null);r=!0},p(a,t){if(t&6){n=a[2](a[7].speakers);let l;for(l=0;l<n.length;l+=1){const o=_e(a,n,l);s[l]?(s[l].p(o,t),I(s[l],1)):(s[l]=me(o),s[l].c(),I(s[l],1),s[l].m(e,null))}for(C(),l=n.length;l<s.length;l+=1)c(l);q()}},i(a){if(!r){for(let t=0;t<n.length;t+=1)I(s[t]);r=!0}},o(a){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)y(s[t]);r=!1},d(a){a&&_(e),W(s,a)}}}function me(i){let e,r,n,s,c=i[13].name+"",a,t,l;return r=new we({props:{speaker:i[13],size:"extra-small"}}),{c(){e=E("div"),le(r.$$.fragment),n=S(),s=E("div"),a=A(c),t=S(),this.h()},l(o){e=$(o,"DIV",{class:!0});var d=D(e);se(r.$$.fragment,d),n=j(d),s=$(d,"DIV",{class:!0});var m=D(s);a=T(m,c),m.forEach(_),t=j(d),d.forEach(_),this.h()},h(){b(s,"class","m-auto"),b(e,"class","flex gap-1.5")},m(o,d){z(o,e,d),ae(r,e,null),h(e,n),h(e,s),h(s,a),h(e,t),l=!0},p(o,d){const m={};d&2&&(m.speaker=o[13]),r.$set(m),(!l||d&2)&&c!==(c=o[13].name+"")&&F(a,c)},i(o){l||(I(r.$$.fragment,o),l=!0)},o(o){y(r.$$.fragment,o),l=!1},d(o){o&&_(e),re(r)}}}function ge(i){let e,r,n,s=i[4](i[7]),c=[];for(let t=0;t<s.length;t+=1)c[t]=ke(he(i,s,t));const a=t=>y(c[t],1,1,()=>{c[t]=null});return{c(){e=E("div"),r=E("div");for(let t=0;t<c.length;t+=1)c[t].c();this.h()},l(t){e=$(t,"DIV",{class:!0});var l=D(e);r=$(l,"DIV",{class:!0,cellpadding:!0});var o=D(r);for(let d=0;d<c.length;d+=1)c[d].l(o);o.forEach(_),l.forEach(_),this.h()},h(){b(r,"class","flex flex-wrap gap-2"),b(r,"cellpadding","5"),b(e,"class","mt-4 w-auto")},m(t,l){z(t,e,l),h(e,r);for(let o=0;o<c.length;o+=1)c[o].m(r,null);n=!0},p(t,l){if(l&22){s=t[4](t[7]);let o;for(o=0;o<s.length;o+=1){const d=he(t,s,o);c[o]?(c[o].p(d,l),I(c[o],1)):(c[o]=ke(d),c[o].c(),I(c[o],1),c[o].m(r,null))}for(C(),o=s.length;o<c.length;o+=1)a(o);q()}},i(t){if(!n){for(let l=0;l<s.length;l+=1)I(c[l]);n=!0}},o(t){c=c.filter(Boolean);for(let l=0;l<c.length;l+=1)y(c[l]);n=!1},d(t){t&&_(e),W(c,t)}}}function Ae(i){let e,r,n=i[2](i[10].speakers),s=[];for(let a=0;a<n.length;a+=1)s[a]=be(ve(i,n,a));const c=a=>y(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=ue()},l(a){for(let t=0;t<s.length;t+=1)s[t].l(a);e=ue()},m(a,t){for(let l=0;l<s.length;l+=1)s[l].m(a,t);z(a,e,t),r=!0},p(a,t){if(t&22){n=a[2](a[10].speakers);let l;for(l=0;l<n.length;l+=1){const o=ve(a,n,l);s[l]?(s[l].p(o,t),I(s[l],1)):(s[l]=be(o),s[l].c(),I(s[l],1),s[l].m(e.parentNode,e))}for(C(),l=n.length;l<s.length;l+=1)c(l);q()}},i(a){if(!r){for(let t=0;t<n.length;t+=1)I(s[t]);r=!0}},o(a){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)y(s[t]);r=!1},d(a){W(s,a),a&&_(e)}}}function Te(i){let e,r;return{c(){e=E("div"),r=A("TBA")},l(n){e=$(n,"DIV",{});var s=D(e);r=T(s,"TBA"),s.forEach(_)},m(n,s){z(n,e,s),h(e,r)},p:x,i:x,o:x,d(n){n&&_(e)}}}function be(i){let e,r,n,s=i[13].name+"",c,a;return r=new we({props:{speaker:i[13],size:"micro"}}),{c(){e=E("div"),le(r.$$.fragment),n=E("div"),c=A(s),this.h()},l(t){e=$(t,"DIV",{class:!0});var l=D(e);se(r.$$.fragment,l),n=$(l,"DIV",{});var o=D(n);c=T(o,s),o.forEach(_),l.forEach(_),this.h()},h(){b(e,"class","flex gap-1")},m(t,l){z(t,e,l),ae(r,e,null),h(e,n),h(n,c),a=!0},p(t,l){const o={};l&2&&(o.speaker=t[13]),r.$set(o),(!a||l&2)&&s!==(s=t[13].name+"")&&F(c,s)},i(t){a||(I(r.$$.fragment,t),a=!0)},o(t){y(r.$$.fragment,t),a=!1},d(t){t&&_(e),re(r)}}}function ke(i){let e,r,n=i[10].name+"",s,c,a,t,l,o,d;const m=[Te,Ae],u=[];function P(f,p){return f[10].speakers.length===0?0:1}return t=P(i),l=u[t]=m[t](i),{c(){e=E("div"),r=E("div"),s=A(n),c=S(),a=E("div"),l.c(),o=S(),this.h()},l(f){e=$(f,"DIV",{class:!0});var p=D(e);r=$(p,"DIV",{class:!0});var v=D(r);s=T(v,n),v.forEach(_),c=j(p),a=$(p,"DIV",{class:!0});var B=D(a);l.l(B),B.forEach(_),o=j(p),p.forEach(_),this.h()},h(){b(r,"class","font-bold"),b(a,"class","mt-1"),b(e,"class","mb-2 border rounded py-1.5 px-2.5 bg-gray-100 text-sm")},m(f,p){z(f,e,p),h(e,r),h(r,s),h(e,c),h(e,a),u[t].m(a,null),h(e,o),d=!0},p(f,p){(!d||p&2)&&n!==(n=f[10].name+"")&&F(s,n);let v=t;t=P(f),t===v?u[t].p(f,p):(C(),y(u[v],1,1,()=>{u[v]=null}),q(),l=u[t],l?l.p(f,p):(l=u[t]=m[t](f),l.c()),I(l,1),l.m(a,null))},i(f){d||(I(l),d=!0)},o(f){y(l),d=!1},d(f){f&&_(e),u[t].d()}}}function Ee(i){let e,r,n,s,c,a,t,l=i[7].name+"",o,d,m,u,P,f,p,v,B=i[3](i[7].track)+"",N,H,O,G=i[7].duration+"",Q,X,K,Y=i[4](i[7]).length>0,R,U,J,Z,ne,V=i[7].speakers&&i[7].speakers.length>0&&pe(i);f=new Oe({props:{event:i[7]}});let w=Y&&ge(i);return{c(){e=E("div"),r=E("div"),n=E("i"),a=S(),t=E("div"),o=A(l),d=S(),V&&V.c(),m=S(),u=E("div"),P=E("div"),le(f.$$.fragment),p=S(),v=E("div"),N=A(B),H=S(),O=E("div"),Q=A(G),X=A("m"),K=S(),w&&w.c(),R=S(),this.h()},l(g){e=$(g,"DIV",{class:!0});var k=D(e);r=$(k,"DIV",{class:!0});var M=D(r);n=$(M,"I",{class:!0,"utxo-event-id":!0}),D(n).forEach(_),M.forEach(_),a=j(k),t=$(k,"DIV",{class:!0});var oe=D(t);o=T(oe,l),oe.forEach(_),d=j(k),V&&V.l(k),m=j(k),u=$(k,"DIV",{class:!0});var L=D(u);P=$(L,"DIV",{});var ie=D(P);se(f.$$.fragment,ie),ie.forEach(_),p=j(L),v=$(L,"DIV",{class:!0});var ce=D(v);N=T(ce,B),ce.forEach(_),H=j(L),O=$(L,"DIV",{class:!0});var ee=D(O);Q=T(ee,G),X=T(ee,"m"),ee.forEach(_),L.forEach(_),K=j(k),w&&w.l(k),R=j(k),k.forEach(_),this.h()},h(){b(n,"class",s="fa-star "+(i[0].favoriteEvents.includes(i[7].id)?"fa-solid":"fa-regular")+" cursor-pointer"),b(n,"utxo-event-id",c=i[7].id),b(r,"class","float-right"),b(t,"class","text-lg font-semibold"),b(v,"class","text-sm my-auto"),b(O,"class","text-xs my-auto"),b(u,"class","mt-2 text-sm flex flex-wrap gap-2"),b(e,"class",U="transition-all mb-4 border px-3 py-2 rounded-md shadow "+(i[0].favoriteEvents.includes(i[7].id)?"bg-yellow-100":""))},m(g,k){z(g,e,k),h(e,r),h(r,n),h(e,a),h(e,t),h(t,o),h(e,d),V&&V.m(e,null),h(e,m),h(e,u),h(u,P),ae(f,P,null),h(u,p),h(u,v),h(v,N),h(u,H),h(u,O),h(O,Q),h(O,X),h(e,K),w&&w.m(e,null),h(e,R),J=!0,Z||(ne=ye(n,"click",i[5]),Z=!0)},p(g,k){(!J||k&3&&s!==(s="fa-star "+(g[0].favoriteEvents.includes(g[7].id)?"fa-solid":"fa-regular")+" cursor-pointer"))&&b(n,"class",s),(!J||k&2&&c!==(c=g[7].id))&&b(n,"utxo-event-id",c),(!J||k&2)&&l!==(l=g[7].name+"")&&F(o,l),g[7].speakers&&g[7].speakers.length>0?V?(V.p(g,k),k&2&&I(V,1)):(V=pe(g),V.c(),I(V,1),V.m(e,m)):V&&(C(),y(V,1,1,()=>{V=null}),q());const M={};k&2&&(M.event=g[7]),f.$set(M),(!J||k&2)&&B!==(B=g[3](g[7].track)+"")&&F(N,B),(!J||k&2)&&G!==(G=g[7].duration+"")&&F(Q,G),k&2&&(Y=g[4](g[7]).length>0),Y?w?(w.p(g,k),k&2&&I(w,1)):(w=ge(g),w.c(),I(w,1),w.m(e,R)):w&&(C(),y(w,1,1,()=>{w=null}),q()),(!J||k&3&&U!==(U="transition-all mb-4 border px-3 py-2 rounded-md shadow "+(g[0].favoriteEvents.includes(g[7].id)?"bg-yellow-100":"")))&&b(e,"class",U)},i(g){J||(I(V),I(f.$$.fragment,g),I(w),J=!0)},o(g){y(V),y(f.$$.fragment,g),y(w),J=!1},d(g){g&&_(e),V&&V.d(),re(f),w&&w.d(),Z=!1,ne()}}}function ze(i){let e,r,n,s,c,a,t,l,o,d,m=i[1].spec.events.filter($e),u=[];for(let f=0;f<m.length;f+=1)u[f]=Ee(de(i,m,f));const P=f=>y(u[f],1,1,()=>{u[f]=null});return{c(){e=S(),r=E("section"),n=E("h1"),s=A("Program"),c=S(),a=E("div"),t=A("Program st\xE1le p\u0159ipravujeme. Jeho kone\u010Dn\xE1 podoba bude zve\u0159ejn\u011Bna par t\xFDdn\u016F p\u0159ed konferenc\xED."),l=S(),o=E("div");for(let f=0;f<u.length;f+=1)u[f].c();this.h()},l(f){Pe('[data-svelte="svelte-124umcn"]',document.head).forEach(_),e=j(f),r=$(f,"SECTION",{class:!0});var v=D(r);n=$(v,"H1",{class:!0});var B=D(n);s=T(B,"Program"),B.forEach(_),c=j(v),a=$(v,"DIV",{class:!0});var N=D(a);t=T(N,"Program st\xE1le p\u0159ipravujeme. Jeho kone\u010Dn\xE1 podoba bude zve\u0159ejn\u011Bna par t\xFDdn\u016F p\u0159ed konferenc\xED."),N.forEach(_),l=j(v),o=$(v,"DIV",{class:!0});var H=D(o);for(let O=0;O<u.length;O+=1)u[O].l(H);H.forEach(_),v.forEach(_),this.h()},h(){document.title="Program | UTXO.22",b(n,"class","uppercase text-2xl font-bold"),b(a,"class","mt-2 text-sm"),b(o,"class","mt-6"),b(r,"class","relative mx-auto py-10 px-6 max-w-6xl mb-10 text-blue-web")},m(f,p){z(f,e,p),z(f,r,p),h(r,n),h(n,s),h(r,c),h(r,a),h(a,t),h(r,l),h(r,o);for(let v=0;v<u.length;v+=1)u[v].m(o,null);d=!0},p(f,[p]){if(p&63){m=f[1].spec.events.filter($e);let v;for(v=0;v<m.length;v+=1){const B=de(f,m,v);u[v]?(u[v].p(B,p),I(u[v],1)):(u[v]=Ee(B),u[v].c(),I(u[v],1),u[v].m(o,null))}for(C(),v=m.length;v<u.length;v+=1)P(v);q()}},i(f){if(!d){for(let p=0;p<m.length;p+=1)I(u[p]);d=!0}},o(f){u=u.filter(Boolean);for(let p=0;p<u.length;p+=1)y(u[p]);d=!1},d(f){f&&_(e),f&&_(r),W(u,f)}}}const Le=!0,$e=i=>!i.parent;function Je(i,e,r){let n,s;fe(i,te,d=>r(0,n=d)),fe(i,Se,d=>r(1,s=d));const c=localStorage.getItem("userData");c&&te.set(JSON.parse(c));function a(d){if(!!d)return d.map(m=>s.spec.speakers.find(u=>u.id===m))}function t(d){const m=s.spec.tracks.find(u=>u.id===d);return m.shortname||m.name}function l(d){return s.spec.events.filter(m=>m.parent===d.id)}function o(d){const m=d.target.getAttribute("utxo-event-id");te.update(u=>{const P=u.favoriteEvents;let f=null;return P.includes(m)?f=Object.assign(n,{favoriteEvents:P.filter(p=>p!==m)}):(P.push(m),f=Object.assign(n,{favoriteEvents:P})),localStorage.setItem("userData",JSON.stringify(f)),f})}return[n,s,a,t,l,o]}class xe extends De{constructor(e){super();Ie(this,e,Je,ze,Ve,{})}}export{xe as default,Le as prerender};