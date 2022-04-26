import{S as Ve,i as we,s as ye,e as b,k as j,t as S,c as k,a as E,d as _,m as O,h as G,b as p,g as F,F as h,j as J,E as Y,q as y,w as ee,x as le,y as te,o as q,B as ae,n as Q,p as U,G as Z,J as Ae,H as oe,l as fe}from"./index-f961f29d.js";import{A as $e}from"./Avatar-ae188221.js";import{b as ze,a as x}from"./stores-2b13be7a.js";function Be(i,e){if(!e)return 0;if(i.duration)return i.duration;const a=e.spec.events.filter(s=>s.parent===i.id);if(a.length>0){let s=a.reduce((l,n)=>l+(n.duration?n.duration:0),0);return s+=5*(a.length-1),s}}function ce(i,e){e.update(a=>{const s=a.favoriteEvents;let l=null;return s.includes(i)?l=Object.assign({},a,{favoriteEvents:s.filter(n=>n!==i)}):(s.push(i),l=Object.assign(a,{favoriteEvents:s})),l})}function Te(i){let e,a,s,l,n,t=i[1].title+"",r,o,f;return{c(){e=b("div"),a=b("div"),l=j(),n=b("div"),r=S(t),this.h()},l(v){e=k(v,"DIV",{class:!0});var c=E(e);a=k(c,"DIV",{class:!0}),E(a).forEach(_),l=O(c),n=k(c,"DIV",{class:!0});var d=E(n);r=G(d,t),d.forEach(_),c.forEach(_),this.h()},h(){p(a,"class",s="w-1 rounded-l-sm "+i[1].style),p(n,"class",o=(i[0]==="big"?"px-2 py-0.5":"px-1.5 py-0.5")+" rounded-r-sm bg-gray-100 uppercase"),p(e,"class",f="flex "+(i[0]==="big"?"h-6 text-sm":"h-5 text-xs"))},m(v,c){F(v,e,c),h(e,a),h(e,l),h(e,n),h(n,r)},p(v,[c]){c&2&&s!==(s="w-1 rounded-l-sm "+v[1].style)&&p(a,"class",s),c&2&&t!==(t=v[1].title+"")&&J(r,t),c&1&&o!==(o=(v[0]==="big"?"px-2 py-0.5":"px-1.5 py-0.5")+" rounded-r-sm bg-gray-100 uppercase")&&p(n,"class",o),c&1&&f!==(f="flex "+(v[0]==="big"?"h-6 text-sm":"h-5 text-xs"))&&p(e,"class",f)},i:Y,o:Y,d(v){v&&_(e)}}}function je(i,e,a){let s,{event:l={}}=e,{size:n=null}=e;const t={panel:{title:"Panelov\xE1 debata",style:"bg-custom-red text-white"},talk:{title:"P\u0159edn\xE1\u0161ka",style:"bg-custom-green text-white"},workshop:{title:"Workshop",style:"bg-custom-blue text-white"},other:{title:"Ostatn\xED",style:"bg-custom-yellow"},lightning:{title:"Lightning talk",style:"bg-pink-400"}};return i.$$set=r=>{"event"in r&&a(2,l=r.event),"size"in r&&a(0,n=r.size)},i.$$.update=()=>{i.$$.dirty&4&&a(1,s=t[l.type])},[n,s,l]}class Oe extends Ve{constructor(e){super();we(this,e,je,Te,ye,{event:2,size:0})}}function ue(i,e,a){const s=i.slice();return s[10]=e[a],s}function de(i,e,a){const s=i.slice();return s[13]=e[a],s}function he(i,e,a){const s=i.slice();return s[16]=e[a],s}function _e(i,e,a){const s=i.slice();return s[13]=e[a],s}function ve(i){let e,a,s=i[3](i[0].speakers),l=[];for(let t=0;t<s.length;t+=1)l[t]=pe(_e(i,s,t));const n=t=>q(l[t],1,1,()=>{l[t]=null});return{c(){e=b("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=k(t,"DIV",{class:!0});var r=E(e);for(let o=0;o<l.length;o+=1)l[o].l(r);r.forEach(_),this.h()},h(){p(e,"class","mt-1 mb-2 flex flex-wrap gap-2")},m(t,r){F(t,e,r);for(let o=0;o<l.length;o+=1)l[o].m(e,null);a=!0},p(t,r){if(r&9){s=t[3](t[0].speakers);let o;for(o=0;o<s.length;o+=1){const f=_e(t,s,o);l[o]?(l[o].p(f,r),y(l[o],1)):(l[o]=pe(f),l[o].c(),y(l[o],1),l[o].m(e,null))}for(Q(),o=s.length;o<l.length;o+=1)n(o);U()}},i(t){if(!a){for(let r=0;r<s.length;r+=1)y(l[r]);a=!0}},o(t){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)q(l[r]);a=!1},d(t){t&&_(e),Z(l,t)}}}function pe(i){let e,a,s,l,n,t=i[13].name+"",r,o,f,v;return a=new $e({props:{speaker:i[13],size:"extra-small"}}),{c(){e=b("div"),ee(a.$$.fragment),s=j(),l=b("div"),n=b("a"),r=S(t),f=j(),this.h()},l(c){e=k(c,"DIV",{class:!0});var d=E(e);le(a.$$.fragment,d),s=O(d),l=k(d,"DIV",{class:!0});var u=E(l);n=k(u,"A",{href:!0});var g=E(n);r=G(g,t),g.forEach(_),u.forEach(_),f=O(d),d.forEach(_),this.h()},h(){p(n,"href",o="/lide?id="+i[13].id),p(l,"class","m-auto"),p(e,"class","flex gap-1.5")},m(c,d){F(c,e,d),te(a,e,null),h(e,s),h(e,l),h(l,n),h(n,r),h(e,f),v=!0},p(c,d){const u={};d&1&&(u.speaker=c[13]),a.$set(u),(!v||d&1)&&t!==(t=c[13].name+"")&&J(r,t),(!v||d&1&&o!==(o="/lide?id="+c[13].id))&&p(n,"href",o)},i(c){v||(y(a.$$.fragment,c),v=!0)},o(c){q(a.$$.fragment,c),v=!1},d(c){c&&_(e),ae(a)}}}function me(i){let e,a,s;return{c(){e=b("div"),a=S(i[1]),s=S("m"),this.h()},l(l){e=k(l,"DIV",{class:!0});var n=E(e);a=G(n,i[1]),s=G(n,"m"),n.forEach(_),this.h()},h(){p(e,"class","text-xs my-auto")},m(l,n){F(l,e,n),h(e,a),h(e,s)},p(l,n){n&2&&J(a,l[1])},d(l){l&&_(e)}}}function ge(i){let e,a,s=i[4](i[0].track)+"",l,n;return{c(){e=b("div"),a=b("a"),l=S(s),this.h()},l(t){e=k(t,"DIV",{class:!0});var r=E(e);a=k(r,"A",{href:!0});var o=E(a);l=G(o,s),o.forEach(_),r.forEach(_),this.h()},h(){p(a,"href",n="/program?track="+i[0].track),p(e,"class","text-sm my-auto")},m(t,r){F(t,e,r),h(e,a),h(a,l)},p(t,r){r&1&&s!==(s=t[4](t[0].track)+"")&&J(l,s),r&1&&n!==(n="/program?track="+t[0].track)&&p(a,"href",n)},d(t){t&&_(e)}}}function be(i){let e,a=i[0].tags,s=[];for(let l=0;l<a.length;l+=1)s[l]=ke(he(i,a,l));return{c(){e=b("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=k(l,"DIV",{class:!0});var n=E(e);for(let t=0;t<s.length;t+=1)s[t].l(n);n.forEach(_),this.h()},h(){p(e,"class","flex text-xs gap-1 my-auto text-blue-web/60")},m(l,n){F(l,e,n);for(let t=0;t<s.length;t+=1)s[t].m(e,null)},p(l,n){if(n&1){a=l[0].tags;let t;for(t=0;t<a.length;t+=1){const r=he(l,a,t);s[t]?s[t].p(r,n):(s[t]=ke(r),s[t].c(),s[t].m(e,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=a.length}},d(l){l&&_(e),Z(s,l)}}}function ke(i){let e,a,s,l=i[16]+"",n,t;return{c(){e=b("div"),a=b("a"),s=S("#"),n=S(l),this.h()},l(r){e=k(r,"DIV",{});var o=E(e);a=k(o,"A",{href:!0});var f=E(a);s=G(f,"#"),n=G(f,l),f.forEach(_),o.forEach(_),this.h()},h(){p(a,"href",t="/program?tag="+i[16])},m(r,o){F(r,e,o),h(e,a),h(a,s),h(a,n)},p(r,o){o&1&&l!==(l=r[16]+"")&&J(n,l),o&1&&t!==(t="/program?tag="+r[16])&&p(a,"href",t)},d(r){r&&_(e)}}}function Ee(i){let e,a,s,l=i[5](i[0]),n=[];for(let r=0;r<l.length;r+=1)n[r]=Ie(ue(i,l,r));const t=r=>q(n[r],1,1,()=>{n[r]=null});return{c(){e=b("div"),a=b("div");for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){e=k(r,"DIV",{class:!0});var o=E(e);a=k(o,"DIV",{class:!0,cellpadding:!0});var f=E(a);for(let v=0;v<n.length;v+=1)n[v].l(f);f.forEach(_),o.forEach(_),this.h()},h(){p(a,"class","flex flex-wrap gap-2"),p(a,"cellpadding","5"),p(e,"class","mt-4 w-auto mb-2")},m(r,o){F(r,e,o),h(e,a);for(let f=0;f<n.length;f+=1)n[f].m(a,null);s=!0},p(r,o){if(o&45){l=r[5](r[0]);let f;for(f=0;f<l.length;f+=1){const v=ue(r,l,f);n[f]?(n[f].p(v,o),y(n[f],1)):(n[f]=Ie(v),n[f].c(),y(n[f],1),n[f].m(a,null))}for(Q(),f=l.length;f<n.length;f+=1)t(f);U()}},i(r){if(!s){for(let o=0;o<l.length;o+=1)y(n[o]);s=!0}},o(r){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)q(n[o]);s=!1},d(r){r&&_(e),Z(n,r)}}}function qe(i){let e,a,s=i[3](i[10].speakers),l=[];for(let t=0;t<s.length;t+=1)l[t]=De(de(i,s,t));const n=t=>q(l[t],1,1,()=>{l[t]=null});return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=fe()},l(t){for(let r=0;r<l.length;r+=1)l[r].l(t);e=fe()},m(t,r){for(let o=0;o<l.length;o+=1)l[o].m(t,r);F(t,e,r),a=!0},p(t,r){if(r&41){s=t[3](t[10].speakers);let o;for(o=0;o<s.length;o+=1){const f=de(t,s,o);l[o]?(l[o].p(f,r),y(l[o],1)):(l[o]=De(f),l[o].c(),y(l[o],1),l[o].m(e.parentNode,e))}for(Q(),o=s.length;o<l.length;o+=1)n(o);U()}},i(t){if(!a){for(let r=0;r<s.length;r+=1)y(l[r]);a=!0}},o(t){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)q(l[r]);a=!1},d(t){Z(l,t),t&&_(e)}}}function Ce(i){let e,a;return{c(){e=b("div"),a=S("TBA")},l(s){e=k(s,"DIV",{});var l=E(e);a=G(l,"TBA"),l.forEach(_)},m(s,l){F(s,e,l),h(e,a)},p:Y,i:Y,o:Y,d(s){s&&_(e)}}}function De(i){let e,a,s,l,n,t=i[13].name+"",r,o,f,v;return a=new $e({props:{speaker:i[13],size:"micro"}}),{c(){e=b("div"),ee(a.$$.fragment),s=j(),l=b("div"),n=b("a"),r=S(t),f=j(),this.h()},l(c){e=k(c,"DIV",{class:!0});var d=E(e);le(a.$$.fragment,d),s=O(d),l=k(d,"DIV",{});var u=E(l);n=k(u,"A",{href:!0});var g=E(n);r=G(g,t),g.forEach(_),u.forEach(_),f=O(d),d.forEach(_),this.h()},h(){p(n,"href",o="/lide?id="+i[13].id),p(e,"class","flex gap-1")},m(c,d){F(c,e,d),te(a,e,null),h(e,s),h(e,l),h(l,n),h(n,r),h(e,f),v=!0},p(c,d){const u={};d&1&&(u.speaker=c[13]),a.$set(u),(!v||d&1)&&t!==(t=c[13].name+"")&&J(r,t),(!v||d&1&&o!==(o="/lide?id="+c[13].id))&&p(n,"href",o)},i(c){v||(y(a.$$.fragment,c),v=!0)},o(c){q(a.$$.fragment,c),v=!1},d(c){c&&_(e),ae(a)}}}function Ie(i){let e,a,s,l=i[10].name+"",n,t,r,o,f,v,c,d,u,g,C,z,M,N;function W(){return i[9](i[10])}const K=[Ce,qe],L=[];function R(V,A){return V[10].speakers.length===0?0:1}return d=R(i),u=L[d]=K[d](i),{c(){e=b("div"),a=b("div"),s=b("a"),n=S(l),r=j(),o=b("i"),v=j(),c=b("div"),u.c(),g=j(),this.h()},l(V){e=k(V,"DIV",{class:!0});var A=E(e);a=k(A,"DIV",{class:!0});var P=E(a);s=k(P,"A",{href:!0});var I=E(s);n=G(I,l),I.forEach(_),r=O(P),o=k(P,"I",{class:!0}),E(o).forEach(_),P.forEach(_),v=O(A),c=k(A,"DIV",{class:!0});var $=E(c);u.l($),$.forEach(_),g=O(A),A.forEach(_),this.h()},h(){p(s,"href",t="/udalosti?id="+i[10].id),p(o,"class",f="fa-star "+(i[2].favoriteEvents.includes(i[10].id)?"fa-solid":"fa-regular")+" cursor-pointer"),p(a,"class","font-bold"),p(c,"class","mt-1"),p(e,"class",C="border rounded py-1.5 px-2.5 text-sm transition-all "+(i[2].favoriteEvents.includes(i[10].id)?"bg-yellow-100":"bg-gray-100"))},m(V,A){F(V,e,A),h(e,a),h(a,s),h(s,n),h(a,r),h(a,o),h(e,v),h(e,c),L[d].m(c,null),h(e,g),z=!0,M||(N=Ae(o,"click",W),M=!0)},p(V,A){i=V,(!z||A&1)&&l!==(l=i[10].name+"")&&J(n,l),(!z||A&1&&t!==(t="/udalosti?id="+i[10].id))&&p(s,"href",t),(!z||A&5&&f!==(f="fa-star "+(i[2].favoriteEvents.includes(i[10].id)?"fa-solid":"fa-regular")+" cursor-pointer"))&&p(o,"class",f);let P=d;d=R(i),d===P?L[d].p(i,A):(Q(),q(L[P],1,1,()=>{L[P]=null}),U(),u=L[d],u?u.p(i,A):(u=L[d]=K[d](i),u.c()),y(u,1),u.m(c,null)),(!z||A&5&&C!==(C="border rounded py-1.5 px-2.5 text-sm transition-all "+(i[2].favoriteEvents.includes(i[10].id)?"bg-yellow-100":"bg-gray-100")))&&p(e,"class",C)},i(V){z||(y(u),z=!0)},o(V){q(u),z=!1},d(V){V&&_(e),L[d].d(),M=!1,N()}}}function Fe(i){let e,a,s,l,n,t,r,o=i[0].name+"",f,v,c,d,u,g,C,z,M,N,W,K,L=i[5](i[0]).length>0,R,V,A,P,I=i[0].speakers&&i[0].speakers.length>0&&ve(i);z=new Oe({props:{event:i[0]}});let $=i[1]&&me(i),B=i[0].track&&ge(i),T=i[0].tags&&be(i),w=L&&Ee(i);return{c(){e=b("div"),a=b("div"),s=b("i"),n=j(),t=b("div"),r=b("a"),f=S(o),c=j(),I&&I.c(),d=j(),u=b("div"),g=b("div"),C=b("div"),ee(z.$$.fragment),M=j(),$&&$.c(),N=j(),B&&B.c(),W=j(),T&&T.c(),K=j(),w&&w.c(),this.h()},l(m){e=k(m,"DIV",{class:!0});var D=E(e);a=k(D,"DIV",{class:!0});var X=E(a);s=k(X,"I",{class:!0}),E(s).forEach(_),X.forEach(_),n=O(D),t=k(D,"DIV",{class:!0});var se=E(t);r=k(se,"A",{href:!0});var re=E(r);f=G(re,o),re.forEach(_),se.forEach(_),c=O(D),I&&I.l(D),d=O(D),u=k(D,"DIV",{class:!0});var ie=E(u);g=k(ie,"DIV",{class:!0});var H=E(g);C=k(H,"DIV",{});var ne=E(C);le(z.$$.fragment,ne),ne.forEach(_),M=O(H),$&&$.l(H),N=O(H),B&&B.l(H),W=O(H),T&&T.l(H),H.forEach(_),ie.forEach(_),K=O(D),w&&w.l(D),D.forEach(_),this.h()},h(){p(s,"class",l="fa-star "+(i[2].favoriteEvents.includes(i[0].id)?"fa-solid":"fa-regular")+" cursor-pointer"),p(a,"class","float-right"),p(r,"href",v="/udalosti?id="+i[0].id),p(t,"class","text-lg font-semibold"),p(g,"class","text-sm flex flex-wrap gap-3 flex-1"),p(u,"class",""),p(e,"class",R="transition-all mb-4 border px-3 py-2 rounded-md shadow "+(i[2].favoriteEvents.includes(i[0].id)?"bg-yellow-100":""))},m(m,D){F(m,e,D),h(e,a),h(a,s),h(e,n),h(e,t),h(t,r),h(r,f),h(e,c),I&&I.m(e,null),h(e,d),h(e,u),h(u,g),h(g,C),te(z,C,null),h(g,M),$&&$.m(g,null),h(g,N),B&&B.m(g,null),h(g,W),T&&T.m(g,null),h(e,K),w&&w.m(e,null),V=!0,A||(P=Ae(s,"click",i[8]),A=!0)},p(m,[D]){(!V||D&5&&l!==(l="fa-star "+(m[2].favoriteEvents.includes(m[0].id)?"fa-solid":"fa-regular")+" cursor-pointer"))&&p(s,"class",l),(!V||D&1)&&o!==(o=m[0].name+"")&&J(f,o),(!V||D&1&&v!==(v="/udalosti?id="+m[0].id))&&p(r,"href",v),m[0].speakers&&m[0].speakers.length>0?I?(I.p(m,D),D&1&&y(I,1)):(I=ve(m),I.c(),y(I,1),I.m(e,d)):I&&(Q(),q(I,1,1,()=>{I=null}),U());const X={};D&1&&(X.event=m[0]),z.$set(X),m[1]?$?$.p(m,D):($=me(m),$.c(),$.m(g,N)):$&&($.d(1),$=null),m[0].track?B?B.p(m,D):(B=ge(m),B.c(),B.m(g,W)):B&&(B.d(1),B=null),m[0].tags?T?T.p(m,D):(T=be(m),T.c(),T.m(g,null)):T&&(T.d(1),T=null),D&1&&(L=m[5](m[0]).length>0),L?w?(w.p(m,D),D&1&&y(w,1)):(w=Ee(m),w.c(),y(w,1),w.m(e,null)):w&&(Q(),q(w,1,1,()=>{w=null}),U()),(!V||D&5&&R!==(R="transition-all mb-4 border px-3 py-2 rounded-md shadow "+(m[2].favoriteEvents.includes(m[0].id)?"bg-yellow-100":"")))&&p(e,"class",R)},i(m){V||(y(I),y(z.$$.fragment,m),y(w),V=!0)},o(m){q(I),q(z.$$.fragment,m),q(w),V=!1},d(m){m&&_(e),I&&I.d(),ae(z),$&&$.d(),B&&B.d(),T&&T.d(),w&&w.d(),A=!1,P()}}}function Le(i,e,a){let s,l,n,t;oe(i,ze,u=>a(7,n=u)),oe(i,x,u=>a(2,t=u));let{event:r}=e;function o(u){if(!!u)return u.map(g=>n.spec.speakers.find(C=>C.id===g))}function f(u){const g=n.spec.tracks.find(C=>C.id===u);return g.shortname||g.name}function v(u){return n.spec.events.filter(g=>g.parent===u.id)}const c=()=>ce(s.id,x),d=u=>ce(u.id,x);return i.$$set=u=>{"event"in u&&a(6,r=u.event)},i.$$.update=()=>{i.$$.dirty&64&&a(0,s=r),i.$$.dirty&129&&a(1,l=Be(s,n))},[s,l,t,o,f,v,r,n,c,d]}class He extends Ve{constructor(e){super();we(this,e,Le,Fe,ye,{event:6})}}export{Oe as E,He as a,ce as b,Be as c};
