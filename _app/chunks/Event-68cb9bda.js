import{S as me,i as be,s as ke,e as g,k as $,t as C,c as m,a as b,d,m as z,h as F,b as _,g as T,F as u,j as Ee,E as S,q as B,w as U,x as X,y as Y,o as O,B as Z,n as x,p as ee,G as K,J as ye,H as ie,l as ne}from"./index-6191a390.js";import{A as De}from"./Avatar-53833777.js";import{b as Ie,a as Q}from"./stores-9e69a8a9.js";function Ve(r,e){if(!e)return 0;if(r.duration)return r.duration;const s=e.spec.events.filter(l=>l.parent===r.id);if(s.length>0){let l=s.reduce((t,i)=>t+(i.duration?i.duration:0),0);return l+=5*(s.length-1),l}}function oe(r,e){e.update(s=>{const l=s.favoriteEvents;let t=null;return l.includes(r)?t=Object.assign({},s,{favoriteEvents:l.filter(i=>i!==r)}):(l.push(r),t=Object.assign(s,{favoriteEvents:l})),t})}function we(r){let e,s,l,t,i,a=r[1].title+"",n,o,c;return{c(){e=g("div"),s=g("div"),t=$(),i=g("div"),n=C(a),this.h()},l(v){e=m(v,"DIV",{class:!0});var f=b(e);s=m(f,"DIV",{class:!0}),b(s).forEach(d),t=z(f),i=m(f,"DIV",{class:!0});var p=b(i);n=F(p,a),p.forEach(d),f.forEach(d),this.h()},h(){_(s,"class",l="w-1 rounded-l-sm "+r[1].style),_(i,"class",o=(r[0]==="big"?"px-2 py-0.5":"px-1.5 py-0.5")+" rounded-r-sm bg-gray-100 uppercase"),_(e,"class",c="flex "+(r[0]==="big"?"h-6 text-sm":"h-5 text-xs"))},m(v,f){T(v,e,f),u(e,s),u(e,t),u(e,i),u(i,n)},p(v,[f]){f&2&&l!==(l="w-1 rounded-l-sm "+v[1].style)&&_(s,"class",l),f&2&&a!==(a=v[1].title+"")&&Ee(n,a),f&1&&o!==(o=(v[0]==="big"?"px-2 py-0.5":"px-1.5 py-0.5")+" rounded-r-sm bg-gray-100 uppercase")&&_(i,"class",o),f&1&&c!==(c="flex "+(v[0]==="big"?"h-6 text-sm":"h-5 text-xs"))&&_(e,"class",c)},i:S,o:S,d(v){v&&d(e)}}}function Ae(r,e,s){let l,{event:t={}}=e,{size:i=null}=e;const a={panel:{title:"Panelov\xE1 debata",style:"bg-custom-red text-white"},talk:{title:"P\u0159edn\xE1\u0161ka",style:"bg-custom-green text-white"},workshop:{title:"Workshop",style:"bg-custom-blue text-white"},other:{title:"Ostatn\xED",style:"bg-custom-yellow"},lightning:{title:"Lightning talk",style:"bg-pink-400"}};return r.$$set=n=>{"event"in n&&s(2,t=n.event),"size"in n&&s(0,i=n.size)},r.$$.update=()=>{r.$$.dirty&4&&s(1,l=a[t.type])},[i,l,t]}class $e extends me{constructor(e){super();be(this,e,Ae,we,ke,{event:2,size:0})}}function ce(r,e,s){const l=r.slice();return l[10]=e[s],l}function fe(r,e,s){const l=r.slice();return l[13]=e[s],l}function ue(r,e,s){const l=r.slice();return l[16]=e[s],l}function de(r,e,s){const l=r.slice();return l[13]=e[s],l}function ze(r){let e,s,l=r[3](r[2].speakers),t=[];for(let a=0;a<l.length;a+=1)t[a]=he(de(r,l,a));const i=a=>O(t[a],1,1,()=>{t[a]=null});return{c(){e=g("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=m(a,"DIV",{class:!0});var n=b(e);for(let o=0;o<t.length;o+=1)t[o].l(n);n.forEach(d),this.h()},h(){_(e,"class","mt-1 mb-2 flex flex-wrap gap-2")},m(a,n){T(a,e,n);for(let o=0;o<t.length;o+=1)t[o].m(e,null);s=!0},p(a,n){if(n&12){l=a[3](a[2].speakers);let o;for(o=0;o<l.length;o+=1){const c=de(a,l,o);t[o]?(t[o].p(c,n),B(t[o],1)):(t[o]=he(c),t[o].c(),B(t[o],1),t[o].m(e,null))}for(x(),o=l.length;o<t.length;o+=1)i(o);ee()}},i(a){if(!s){for(let n=0;n<l.length;n+=1)B(t[n]);s=!0}},o(a){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)O(t[n]);s=!1},d(a){a&&d(e),K(t,a)}}}function he(r){let e,s,l,t,i,a=r[13].name+"",n,o,c,v;return s=new De({props:{speaker:r[13],size:"extra-small"}}),{c(){e=g("div"),U(s.$$.fragment),l=$(),t=g("div"),i=g("a"),n=C(a),c=$(),this.h()},l(f){e=m(f,"DIV",{class:!0});var p=b(e);X(s.$$.fragment,p),l=z(p),t=m(p,"DIV",{class:!0});var h=b(t);i=m(h,"A",{href:!0});var E=b(i);n=F(E,a),E.forEach(d),h.forEach(d),c=z(p),p.forEach(d),this.h()},h(){_(i,"href",o="/lide?id="+r[13].id),_(t,"class","m-auto"),_(e,"class","flex gap-1.5")},m(f,p){T(f,e,p),Y(s,e,null),u(e,l),u(e,t),u(t,i),u(i,n),u(e,c),v=!0},p:S,i(f){v||(B(s.$$.fragment,f),v=!0)},o(f){O(s.$$.fragment,f),v=!1},d(f){f&&d(e),Z(s)}}}function ve(r){let e,s,l;return{c(){e=g("div"),s=C(r[0]),l=C("m"),this.h()},l(t){e=m(t,"DIV",{class:!0});var i=b(e);s=F(i,r[0]),l=F(i,"m"),i.forEach(d),this.h()},h(){_(e,"class","text-xs my-auto")},m(t,i){T(t,e,i),u(e,s),u(e,l)},p(t,i){i&1&&Ee(s,t[0])},d(t){t&&d(e)}}}function Be(r){let e,s=r[4](r[2].track)+"",l;return{c(){e=g("div"),l=C(s),this.h()},l(t){e=m(t,"DIV",{class:!0});var i=b(e);l=F(i,s),i.forEach(d),this.h()},h(){_(e,"class","text-sm my-auto")},m(t,i){T(t,e,i),u(e,l)},p:S,d(t){t&&d(e)}}}function Te(r){let e,s=r[2].tags,l=[];for(let t=0;t<s.length;t+=1)l[t]=_e(ue(r,s,t));return{c(){e=g("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=m(t,"DIV",{class:!0});var i=b(e);for(let a=0;a<l.length;a+=1)l[a].l(i);i.forEach(d),this.h()},h(){_(e,"class","flex text-xs gap-1 my-auto text-blue-web/60")},m(t,i){T(t,e,i);for(let a=0;a<l.length;a+=1)l[a].m(e,null)},p(t,i){if(i&4){s=t[2].tags;let a;for(a=0;a<s.length;a+=1){const n=ue(t,s,a);l[a]?l[a].p(n,i):(l[a]=_e(n),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=s.length}},d(t){t&&d(e),K(l,t)}}}function _e(r){let e,s,l=r[16]+"",t;return{c(){e=g("div"),s=C("#"),t=C(l)},l(i){e=m(i,"DIV",{});var a=b(e);s=F(a,"#"),t=F(a,l),a.forEach(d)},m(i,a){T(i,e,a),u(e,s),u(e,t)},p:S,d(i){i&&d(e)}}}function je(r){let e,s,l,t=r[5](r[2]),i=[];for(let n=0;n<t.length;n+=1)i[n]=ge(ce(r,t,n));const a=n=>O(i[n],1,1,()=>{i[n]=null});return{c(){e=g("div"),s=g("div");for(let n=0;n<i.length;n+=1)i[n].c();this.h()},l(n){e=m(n,"DIV",{class:!0});var o=b(e);s=m(o,"DIV",{class:!0,cellpadding:!0});var c=b(s);for(let v=0;v<i.length;v+=1)i[v].l(c);c.forEach(d),o.forEach(d),this.h()},h(){_(s,"class","flex flex-wrap gap-2"),_(s,"cellpadding","5"),_(e,"class","mt-4 w-auto mb-2")},m(n,o){T(n,e,o),u(e,s);for(let c=0;c<i.length;c+=1)i[c].m(s,null);l=!0},p(n,o){if(o&46){t=n[5](n[2]);let c;for(c=0;c<t.length;c+=1){const v=ce(n,t,c);i[c]?(i[c].p(v,o),B(i[c],1)):(i[c]=ge(v),i[c].c(),B(i[c],1),i[c].m(s,null))}for(x(),c=t.length;c<i.length;c+=1)a(c);ee()}},i(n){if(!l){for(let o=0;o<t.length;o+=1)B(i[o]);l=!0}},o(n){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)O(i[o]);l=!1},d(n){n&&d(e),K(i,n)}}}function Oe(r){let e,s,l=r[3](r[10].speakers),t=[];for(let a=0;a<l.length;a+=1)t[a]=pe(fe(r,l,a));const i=a=>O(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=ne()},l(a){for(let n=0;n<t.length;n+=1)t[n].l(a);e=ne()},m(a,n){for(let o=0;o<t.length;o+=1)t[o].m(a,n);T(a,e,n),s=!0},p(a,n){if(n&44){l=a[3](a[10].speakers);let o;for(o=0;o<l.length;o+=1){const c=fe(a,l,o);t[o]?(t[o].p(c,n),B(t[o],1)):(t[o]=pe(c),t[o].c(),B(t[o],1),t[o].m(e.parentNode,e))}for(x(),o=l.length;o<t.length;o+=1)i(o);ee()}},i(a){if(!s){for(let n=0;n<l.length;n+=1)B(t[n]);s=!0}},o(a){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)O(t[n]);s=!1},d(a){K(t,a),a&&d(e)}}}function qe(r){let e,s;return{c(){e=g("div"),s=C("TBA")},l(l){e=m(l,"DIV",{});var t=b(e);s=F(t,"TBA"),t.forEach(d)},m(l,t){T(l,e,t),u(e,s)},p:S,i:S,o:S,d(l){l&&d(e)}}}function pe(r){let e,s,l,t,i,a=r[13].name+"",n,o,c,v;return s=new De({props:{speaker:r[13],size:"micro"}}),{c(){e=g("div"),U(s.$$.fragment),l=$(),t=g("div"),i=g("a"),n=C(a),c=$(),this.h()},l(f){e=m(f,"DIV",{class:!0});var p=b(e);X(s.$$.fragment,p),l=z(p),t=m(p,"DIV",{});var h=b(t);i=m(h,"A",{href:!0});var E=b(i);n=F(E,a),E.forEach(d),h.forEach(d),c=z(p),p.forEach(d),this.h()},h(){_(i,"href",o="/lide?id="+r[13].id),_(e,"class","flex gap-1")},m(f,p){T(f,e,p),Y(s,e,null),u(e,l),u(e,t),u(t,i),u(i,n),u(e,c),v=!0},p:S,i(f){v||(B(s.$$.fragment,f),v=!0)},o(f){O(s.$$.fragment,f),v=!1},d(f){f&&d(e),Z(s)}}}function ge(r){let e,s,l,t=r[10].name+"",i,a,n,o,c,v,f,p,h,E,I,L,G,N;function R(){return r[9](r[10])}const W=[qe,Oe],H=[];function J(w,A){return w[10].speakers.length===0?0:1}return p=J(r),h=H[p]=W[p](r),{c(){e=g("div"),s=g("div"),l=g("a"),i=C(t),n=$(),o=g("i"),v=$(),f=g("div"),h.c(),E=$(),this.h()},l(w){e=m(w,"DIV",{class:!0});var A=b(e);s=m(A,"DIV",{class:!0});var V=b(s);l=m(V,"A",{href:!0});var D=b(l);i=F(D,t),D.forEach(d),n=z(V),o=m(V,"I",{class:!0}),b(o).forEach(d),V.forEach(d),v=z(A),f=m(A,"DIV",{class:!0});var j=b(f);h.l(j),j.forEach(d),E=z(A),A.forEach(d),this.h()},h(){_(l,"href",a="/udalosti?id="+r[10].id),_(o,"class",c="fa-star "+(r[1].favoriteEvents.includes(r[10].id)?"fa-solid":"fa-regular")+" cursor-pointer"),_(s,"class","font-bold"),_(f,"class","mt-1"),_(e,"class",I="border rounded py-1.5 px-2.5 text-sm transition-all "+(r[1].favoriteEvents.includes(r[10].id)?"bg-yellow-100":"bg-gray-100"))},m(w,A){T(w,e,A),u(e,s),u(s,l),u(l,i),u(s,n),u(s,o),u(e,v),u(e,f),H[p].m(f,null),u(e,E),L=!0,G||(N=ye(o,"click",R),G=!0)},p(w,A){r=w,(!L||A&2&&c!==(c="fa-star "+(r[1].favoriteEvents.includes(r[10].id)?"fa-solid":"fa-regular")+" cursor-pointer"))&&_(o,"class",c),h.p(r,A),(!L||A&2&&I!==(I="border rounded py-1.5 px-2.5 text-sm transition-all "+(r[1].favoriteEvents.includes(r[10].id)?"bg-yellow-100":"bg-gray-100")))&&_(e,"class",I)},i(w){L||(B(h),L=!0)},o(w){O(h),L=!1},d(w){w&&d(e),H[p].d(),G=!1,N()}}}function Ce(r){let e,s,l,t,i,a,n,o=r[2].name+"",c,v,f,p,h,E,I,L,G,N,R,W=r[5](r[2]).length>0,H,J,w,A,V=r[2].speakers&&r[2].speakers.length>0&&ze(r);I=new $e({props:{event:r[2]}});let D=r[0]&&ve(r),j=r[2].track&&Be(r),P=r[2].tags&&Te(r),q=W&&je(r);return{c(){e=g("div"),s=g("div"),l=g("i"),i=$(),a=g("div"),n=g("a"),c=C(o),v=$(),V&&V.c(),f=$(),p=g("div"),h=g("div"),E=g("div"),U(I.$$.fragment),L=$(),D&&D.c(),G=$(),j&&j.c(),N=$(),P&&P.c(),R=$(),q&&q.c(),this.h()},l(k){e=m(k,"DIV",{class:!0});var y=b(e);s=m(y,"DIV",{class:!0});var te=b(s);l=m(te,"I",{class:!0}),b(l).forEach(d),te.forEach(d),i=z(y),a=m(y,"DIV",{class:!0});var le=b(a);n=m(le,"A",{href:!0});var ae=b(n);c=F(ae,o),ae.forEach(d),le.forEach(d),v=z(y),V&&V.l(y),f=z(y),p=m(y,"DIV",{class:!0});var se=b(p);h=m(se,"DIV",{class:!0});var M=b(h);E=m(M,"DIV",{});var re=b(E);X(I.$$.fragment,re),re.forEach(d),L=z(M),D&&D.l(M),G=z(M),j&&j.l(M),N=z(M),P&&P.l(M),M.forEach(d),se.forEach(d),R=z(y),q&&q.l(y),y.forEach(d),this.h()},h(){_(l,"class",t="fa-star "+(r[1].favoriteEvents.includes(r[2].id)?"fa-solid":"fa-regular")+" cursor-pointer"),_(s,"class","float-right"),_(n,"href","/udalosti?id="+r[2].id),_(a,"class","text-lg font-semibold"),_(h,"class","text-sm flex flex-wrap gap-3 flex-1"),_(p,"class",""),_(e,"class",H="transition-all mb-4 border px-3 py-2 rounded-md shadow "+(r[1].favoriteEvents.includes(r[2].id)?"bg-yellow-100":""))},m(k,y){T(k,e,y),u(e,s),u(s,l),u(e,i),u(e,a),u(a,n),u(n,c),u(e,v),V&&V.m(e,null),u(e,f),u(e,p),u(p,h),u(h,E),Y(I,E,null),u(h,L),D&&D.m(h,null),u(h,G),j&&j.m(h,null),u(h,N),P&&P.m(h,null),u(e,R),q&&q.m(e,null),J=!0,w||(A=ye(l,"click",r[8]),w=!0)},p(k,[y]){(!J||y&2&&t!==(t="fa-star "+(k[1].favoriteEvents.includes(k[2].id)?"fa-solid":"fa-regular")+" cursor-pointer"))&&_(l,"class",t),k[2].speakers&&k[2].speakers.length>0&&V.p(k,y),k[0]?D?D.p(k,y):(D=ve(k),D.c(),D.m(h,G)):D&&(D.d(1),D=null),k[2].track&&j.p(k,y),k[2].tags&&P.p(k,y),W&&q.p(k,y),(!J||y&2&&H!==(H="transition-all mb-4 border px-3 py-2 rounded-md shadow "+(k[1].favoriteEvents.includes(k[2].id)?"bg-yellow-100":"")))&&_(e,"class",H)},i(k){J||(B(V),B(I.$$.fragment,k),B(q),J=!0)},o(k){O(V),O(I.$$.fragment,k),O(q),J=!1},d(k){k&&d(e),V&&V.d(),Z(I),D&&D.d(),j&&j.d(),P&&P.d(),q&&q.d(),w=!1,A()}}}function Fe(r,e,s){let l,t,i;ie(r,Ie,h=>s(7,t=h)),ie(r,Q,h=>s(1,i=h));let{event:a}=e;const n=a;function o(h){if(!!h)return h.map(E=>t.spec.speakers.find(I=>I.id===E))}function c(h){const E=t.spec.tracks.find(I=>I.id===h);return E.shortname||E.name}function v(h){return t.spec.events.filter(E=>E.parent===h.id)}const f=()=>oe(n.id,Q),p=h=>oe(h.id,Q);return r.$$set=h=>{"event"in h&&s(6,a=h.event)},r.$$.update=()=>{r.$$.dirty&128&&s(0,l=Ve(n,t))},[l,i,n,o,c,v,a,t,f,p]}class Ge extends me{constructor(e){super();be(this,e,Fe,Ce,ke,{event:6})}}export{$e as E,Ge as a,oe as b,Ve as c};