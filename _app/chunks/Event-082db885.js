import{S as Ae,i as ze,s as Be,e as m,k as S,t as C,c as g,a as k,d,m as T,h as F,b as _,g as q,F as u,j as J,E as x,q as $,w as ee,x as le,y as te,o as B,B as ie,n as R,p as W,G as se,J as Se,H as ce,l as ue}from"./index-b6ec56f3.js";import{A as Te,S as je,L as Le}from"./Avatar-16a27348.js";import{b as Oe,c as re}from"./stores-9ca2ce08.js";function Pe(a,e){if(!e)return 0;if(a.duration)return a.duration;const i=e.spec.events.filter(r=>r.parent===a.id);if(i.length>0){let r=i.reduce((l,n)=>l+(n.duration?n.duration:0),0);return r+=5*(i.length-1),r}}function de(a,e){e.update(i=>{const r=i.favoriteEvents;let l=null;return r.includes(a)?l=Object.assign({},i,{favoriteEvents:r.filter(n=>n!==a)}):(r.push(a),l=Object.assign(i,{favoriteEvents:r})),l})}function qe(a){let e,i,r,l,n,t=a[1].title+"",s,o,f;return{c(){e=m("div"),i=m("div"),l=S(),n=m("div"),s=C(t),this.h()},l(v){e=g(v,"DIV",{class:!0});var c=k(e);i=g(c,"DIV",{class:!0}),k(i).forEach(d),l=T(c),n=g(c,"DIV",{class:!0});var h=k(n);s=F(h,t),h.forEach(d),c.forEach(d),this.h()},h(){_(i,"class",r="w-1 rounded-l-sm "+a[1].style),_(n,"class",o=(a[0]==="big"?"px-2 py-0.5":"px-1.5 py-0.5")+" rounded-r-sm bg-gray-100 uppercase"),_(e,"class",f="flex "+(a[0]==="big"?"h-6 text-sm":"h-5 text-xs"))},m(v,c){q(v,e,c),u(e,i),u(e,l),u(e,n),u(n,s)},p(v,[c]){c&2&&r!==(r="w-1 rounded-l-sm "+v[1].style)&&_(i,"class",r),c&2&&t!==(t=v[1].title+"")&&J(s,t),c&1&&o!==(o=(v[0]==="big"?"px-2 py-0.5":"px-1.5 py-0.5")+" rounded-r-sm bg-gray-100 uppercase")&&_(n,"class",o),c&1&&f!==(f="flex "+(v[0]==="big"?"h-6 text-sm":"h-5 text-xs"))&&_(e,"class",f)},i:x,o:x,d(v){v&&d(e)}}}function Ce(a,e,i){let r,{event:l={}}=e,{size:n=null}=e;const t={panel:{title:"Panelov\xE1 debata",style:"bg-custom-red text-white"},talk:{title:"P\u0159edn\xE1\u0161ka",style:"bg-custom-green text-white"},workshop:{title:"Workshop",style:"bg-custom-blue text-white"},other:{title:"Ostatn\xED",style:"bg-custom-yellow"},lightning:{title:"Bleskov\xE1 p\u0159edn\xE1\u0161ka",style:"bg-pink-400"},"lightning-series":{title:"P\xE1smo bleskov\xFDch p\u0159edn\xE1\u0161ek",style:"bg-pink-400"}};return a.$$set=s=>{"event"in s&&i(2,l=s.event),"size"in s&&i(0,n=s.size)},a.$$.update=()=>{a.$$.dirty&4&&i(1,r=t[l.type])},[n,r,l]}class Fe extends Ae{constructor(e){super();ze(this,e,Ce,qe,Be,{event:2,size:0})}}function he(a,e,i){const r=a.slice();return r[12]=e[i],r}function _e(a,e,i){const r=a.slice();return r[15]=e[i],r}function ve(a,e,i){const r=a.slice();return r[18]=e[i],r}function pe(a,e,i){const r=a.slice();return r[15]=e[i],r}function me(a){let e,i,r=a[5](a[0].speakers),l=[];for(let t=0;t<r.length;t+=1)l[t]=ge(pe(a,r,t));const n=t=>B(l[t],1,1,()=>{l[t]=null});return{c(){e=m("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=g(t,"DIV",{class:!0});var s=k(e);for(let o=0;o<l.length;o+=1)l[o].l(s);s.forEach(d),this.h()},h(){_(e,"class","mt-1 mb-2 flex flex-wrap gap-2")},m(t,s){q(t,e,s);for(let o=0;o<l.length;o+=1)l[o].m(e,null);i=!0},p(t,s){if(s&33){r=t[5](t[0].speakers);let o;for(o=0;o<r.length;o+=1){const f=pe(t,r,o);l[o]?(l[o].p(f,s),$(l[o],1)):(l[o]=ge(f),l[o].c(),$(l[o],1),l[o].m(e,null))}for(R(),o=r.length;o<l.length;o+=1)n(o);W()}},i(t){if(!i){for(let s=0;s<r.length;s+=1)$(l[s]);i=!0}},o(t){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)B(l[s]);i=!1},d(t){t&&d(e),se(l,t)}}}function ge(a){let e,i,r,l,n,t=a[15].name+"",s,o,f,v;return i=new Te({props:{speaker:a[15],size:"extra-small"}}),{c(){e=m("div"),ee(i.$$.fragment),r=S(),l=m("div"),n=m("a"),s=C(t),f=S(),this.h()},l(c){e=g(c,"DIV",{class:!0});var h=k(e);le(i.$$.fragment,h),r=T(h),l=g(h,"DIV",{class:!0});var b=k(l);n=g(b,"A",{href:!0});var D=k(n);s=F(D,t),D.forEach(d),b.forEach(d),f=T(h),h.forEach(d),this.h()},h(){_(n,"href",o="/lide?id="+a[15].id),_(l,"class","m-auto"),_(e,"class","flex gap-1.5")},m(c,h){q(c,e,h),te(i,e,null),u(e,r),u(e,l),u(l,n),u(n,s),u(e,f),v=!0},p(c,h){const b={};h&1&&(b.speaker=c[15]),i.$set(b),(!v||h&1)&&t!==(t=c[15].name+"")&&J(s,t),(!v||h&1&&o!==(o="/lide?id="+c[15].id))&&_(n,"href",o)},i(c){v||($(i.$$.fragment,c),v=!0)},o(c){B(i.$$.fragment,c),v=!1},d(c){c&&d(e),ie(i)}}}function ke(a){let e,i,r;return{c(){e=m("div"),i=C(a[2]),r=C("m"),this.h()},l(l){e=g(l,"DIV",{class:!0});var n=k(e);i=F(n,a[2]),r=F(n,"m"),n.forEach(d),this.h()},h(){_(e,"class","text-xs my-auto")},m(l,n){q(l,e,n),u(e,i),u(e,r)},p(l,n){n&4&&J(i,l[2])},d(l){l&&d(e)}}}function be(a){let e,i,r=a[6](a[0].track)+"",l,n;return{c(){e=m("div"),i=m("a"),l=C(r),this.h()},l(t){e=g(t,"DIV",{class:!0});var s=k(e);i=g(s,"A",{href:!0});var o=k(i);l=F(o,r),o.forEach(d),s.forEach(d),this.h()},h(){_(i,"href",n="/program?track="+a[0].track),_(e,"class","text-sm my-auto")},m(t,s){q(t,e,s),u(e,i),u(i,l)},p(t,s){s&1&&r!==(r=t[6](t[0].track)+"")&&J(l,r),s&1&&n!==(n="/program?track="+t[0].track)&&_(i,"href",n)},d(t){t&&d(e)}}}function Ee(a){let e,i=a[0].tags,r=[];for(let l=0;l<i.length;l+=1)r[l]=De(ve(a,i,l));return{c(){e=m("div");for(let l=0;l<r.length;l+=1)r[l].c();this.h()},l(l){e=g(l,"DIV",{class:!0});var n=k(e);for(let t=0;t<r.length;t+=1)r[t].l(n);n.forEach(d),this.h()},h(){_(e,"class","flex text-xs gap-1 my-auto text-blue-web/60")},m(l,n){q(l,e,n);for(let t=0;t<r.length;t+=1)r[t].m(e,null)},p(l,n){if(n&1){i=l[0].tags;let t;for(t=0;t<i.length;t+=1){const s=ve(l,i,t);r[t]?r[t].p(s,n):(r[t]=De(s),r[t].c(),r[t].m(e,null))}for(;t<r.length;t+=1)r[t].d(1);r.length=i.length}},d(l){l&&d(e),se(r,l)}}}function De(a){let e,i,r,l=a[18]+"",n,t;return{c(){e=m("div"),i=m("a"),r=C("#"),n=C(l),this.h()},l(s){e=g(s,"DIV",{});var o=k(e);i=g(o,"A",{href:!0});var f=k(i);r=F(f,"#"),n=F(f,l),f.forEach(d),o.forEach(d),this.h()},h(){_(i,"href",t="/program?tag="+a[18])},m(s,o){q(s,e,o),u(e,i),u(i,r),u(i,n)},p(s,o){o&1&&l!==(l=s[18]+"")&&J(n,l),o&1&&t!==(t="/program?tag="+s[18])&&_(i,"href",t)},d(s){s&&d(e)}}}function we(a){let e,i,r,l;i=new je({props:{source:a[1].md,renderers:a[4]}});let n=a[1].stripped&&Ie(a);return{c(){e=m("div"),ee(i.$$.fragment),r=S(),n&&n.c(),this.h()},l(t){e=g(t,"DIV",{class:!0});var s=k(e);le(i.$$.fragment,s),r=T(s),n&&n.l(s),s.forEach(d),this.h()},h(){_(e,"class","mt-2")},m(t,s){q(t,e,s),te(i,e,null),u(e,r),n&&n.m(e,null),l=!0},p(t,s){const o={};s&2&&(o.source=t[1].md),i.$set(o),t[1].stripped?n?n.p(t,s):(n=Ie(t),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},i(t){l||($(i.$$.fragment,t),l=!0)},o(t){B(i.$$.fragment,t),l=!1},d(t){t&&d(e),ie(i),n&&n.d()}}}function Ie(a){let e,i,r,l,n,t;return{c(){e=m("div"),i=C("("),r=m("a"),l=C("Zobrazit cel\xFD popis"),t=C(")"),this.h()},l(s){e=g(s,"DIV",{class:!0});var o=k(e);i=F(o,"("),r=g(o,"A",{href:!0});var f=k(r);l=F(f,"Zobrazit cel\xFD popis"),f.forEach(d),t=F(o,")"),o.forEach(d),this.h()},h(){_(r,"href",n="/udalosti?id="+a[0].id),_(e,"class","text-sm text-blue-web/60")},m(s,o){q(s,e,o),u(e,i),u(e,r),u(r,l),u(e,t)},p(s,o){o&1&&n!==(n="/udalosti?id="+s[0].id)&&_(r,"href",n)},d(s){s&&d(e)}}}function Ve(a){let e,i,r,l=a[7](a[0]),n=[];for(let s=0;s<l.length;s+=1)n[s]=ye(he(a,l,s));const t=s=>B(n[s],1,1,()=>{n[s]=null});return{c(){e=m("div"),i=m("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=g(s,"DIV",{class:!0});var o=k(e);i=g(o,"DIV",{class:!0,cellpadding:!0});var f=k(i);for(let v=0;v<n.length;v+=1)n[v].l(f);f.forEach(d),o.forEach(d),this.h()},h(){_(i,"class","flex flex-wrap gap-2"),_(i,"cellpadding","5"),_(e,"class","mt-4 w-auto mb-2")},m(s,o){q(s,e,o),u(e,i);for(let f=0;f<n.length;f+=1)n[f].m(i,null);r=!0},p(s,o){if(o&169){l=s[7](s[0]);let f;for(f=0;f<l.length;f+=1){const v=he(s,l,f);n[f]?(n[f].p(v,o),$(n[f],1)):(n[f]=ye(v),n[f].c(),$(n[f],1),n[f].m(i,null))}for(R(),f=l.length;f<n.length;f+=1)t(f);W()}},i(s){if(!r){for(let o=0;o<l.length;o+=1)$(n[o]);r=!0}},o(s){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)B(n[o]);r=!1},d(s){s&&d(e),se(n,s)}}}function Me(a){let e,i,r=a[5](a[12].speakers),l=[];for(let t=0;t<r.length;t+=1)l[t]=$e(_e(a,r,t));const n=t=>B(l[t],1,1,()=>{l[t]=null});return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=ue()},l(t){for(let s=0;s<l.length;s+=1)l[s].l(t);e=ue()},m(t,s){for(let o=0;o<l.length;o+=1)l[o].m(t,s);q(t,e,s),i=!0},p(t,s){if(s&161){r=t[5](t[12].speakers);let o;for(o=0;o<r.length;o+=1){const f=_e(t,r,o);l[o]?(l[o].p(f,s),$(l[o],1)):(l[o]=$e(f),l[o].c(),$(l[o],1),l[o].m(e.parentNode,e))}for(R(),o=r.length;o<l.length;o+=1)n(o);W()}},i(t){if(!i){for(let s=0;s<r.length;s+=1)$(l[s]);i=!0}},o(t){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)B(l[s]);i=!1},d(t){se(l,t),t&&d(e)}}}function Ze(a){let e,i;return{c(){e=m("div"),i=C("TBA")},l(r){e=g(r,"DIV",{});var l=k(e);i=F(l,"TBA"),l.forEach(d)},m(r,l){q(r,e,l),u(e,i)},p:x,i:x,o:x,d(r){r&&d(e)}}}function $e(a){let e,i,r,l,n,t=a[15].name+"",s,o,f,v;return i=new Te({props:{speaker:a[15],size:"micro"}}),{c(){e=m("div"),ee(i.$$.fragment),r=S(),l=m("div"),n=m("a"),s=C(t),f=S(),this.h()},l(c){e=g(c,"DIV",{class:!0});var h=k(e);le(i.$$.fragment,h),r=T(h),l=g(h,"DIV",{});var b=k(l);n=g(b,"A",{href:!0});var D=k(n);s=F(D,t),D.forEach(d),b.forEach(d),f=T(h),h.forEach(d),this.h()},h(){_(n,"href",o="/lide?id="+a[15].id),_(e,"class","flex gap-1")},m(c,h){q(c,e,h),te(i,e,null),u(e,r),u(e,l),u(l,n),u(n,s),u(e,f),v=!0},p(c,h){const b={};h&1&&(b.speaker=c[15]),i.$set(b),(!v||h&1)&&t!==(t=c[15].name+"")&&J(s,t),(!v||h&1&&o!==(o="/lide?id="+c[15].id))&&_(n,"href",o)},i(c){v||($(i.$$.fragment,c),v=!0)},o(c){B(i.$$.fragment,c),v=!1},d(c){c&&d(e),ie(i)}}}function ye(a){let e,i,r,l=a[12].name+"",n,t,s,o,f,v,c,h,b,D,w,I,G,N;function K(){return a[11](a[12])}const Q=[Ze,Me],M=[];function U(j,V){return j[12].speakers.length===0?0:1}return h=U(a),b=M[h]=Q[h](a),{c(){e=m("div"),i=m("div"),r=m("a"),n=C(l),s=S(),o=m("i"),v=S(),c=m("div"),b.c(),D=S(),this.h()},l(j){e=g(j,"DIV",{class:!0});var V=k(e);i=g(V,"DIV",{class:!0});var Z=k(i);r=g(Z,"A",{href:!0});var X=k(r);n=F(X,l),X.forEach(d),s=T(Z),o=g(Z,"I",{class:!0}),k(o).forEach(d),Z.forEach(d),v=T(V),c=g(V,"DIV",{class:!0});var y=k(c);b.l(y),y.forEach(d),D=T(V),V.forEach(d),this.h()},h(){_(r,"href",t="/udalosti?id="+a[12].id),_(o,"class",f="fa-star "+(a[3].favoriteEvents.includes(a[12].id)?"fa-solid":"fa-regular")+" cursor-pointer"),_(i,"class","font-bold"),_(c,"class","mt-1"),_(e,"class",w="border rounded py-1.5 px-2.5 text-sm transition-all "+(a[3].favoriteEvents.includes(a[12].id)?"bg-yellow-100":"bg-gray-100"))},m(j,V){q(j,e,V),u(e,i),u(i,r),u(r,n),u(i,s),u(i,o),u(e,v),u(e,c),M[h].m(c,null),u(e,D),I=!0,G||(N=Se(o,"click",K),G=!0)},p(j,V){a=j,(!I||V&1)&&l!==(l=a[12].name+"")&&J(n,l),(!I||V&1&&t!==(t="/udalosti?id="+a[12].id))&&_(r,"href",t),(!I||V&9&&f!==(f="fa-star "+(a[3].favoriteEvents.includes(a[12].id)?"fa-solid":"fa-regular")+" cursor-pointer"))&&_(o,"class",f);let Z=h;h=U(a),h===Z?M[h].p(a,V):(R(),B(M[Z],1,1,()=>{M[Z]=null}),W(),b=M[h],b?b.p(a,V):(b=M[h]=Q[h](a),b.c()),$(b,1),b.m(c,null)),(!I||V&9&&w!==(w="border rounded py-1.5 px-2.5 text-sm transition-all "+(a[3].favoriteEvents.includes(a[12].id)?"bg-yellow-100":"bg-gray-100")))&&_(e,"class",w)},i(j){I||($(b),I=!0)},o(j){B(b),I=!1},d(j){j&&d(e),M[h].d(),G=!1,N()}}}function Ge(a){let e,i,r,l,n,t,s,o=a[0].name+"",f,v,c,h,b,D,w,I,G,N,K,Q,M,U=a[7](a[0]).length>0,j,V,Z,X,y=a[0].speakers&&a[0].speakers.length>0&&me(a);I=new Fe({props:{event:a[0]}});let L=a[2]&&ke(a),O=a[0].track&&be(a),P=a[0].tags&&Ee(a),A=a[0].description&&we(a),z=U&&Ve(a);return{c(){e=m("div"),i=m("div"),r=m("i"),n=S(),t=m("div"),s=m("a"),f=C(o),c=S(),y&&y.c(),h=S(),b=m("div"),D=m("div"),w=m("div"),ee(I.$$.fragment),G=S(),L&&L.c(),N=S(),O&&O.c(),K=S(),P&&P.c(),Q=S(),A&&A.c(),M=S(),z&&z.c(),this.h()},l(p){e=g(p,"DIV",{class:!0});var E=k(e);i=g(E,"DIV",{class:!0});var Y=k(i);r=g(Y,"I",{class:!0}),k(r).forEach(d),Y.forEach(d),n=T(E),t=g(E,"DIV",{class:!0});var ae=k(t);s=g(ae,"A",{href:!0});var ne=k(s);f=F(ne,o),ne.forEach(d),ae.forEach(d),c=T(E),y&&y.l(E),h=T(E),b=g(E,"DIV",{class:!0});var oe=k(b);D=g(oe,"DIV",{class:!0});var H=k(D);w=g(H,"DIV",{});var fe=k(w);le(I.$$.fragment,fe),fe.forEach(d),G=T(H),L&&L.l(H),N=T(H),O&&O.l(H),K=T(H),P&&P.l(H),H.forEach(d),oe.forEach(d),Q=T(E),A&&A.l(E),M=T(E),z&&z.l(E),E.forEach(d),this.h()},h(){_(r,"class",l="fa-star "+(a[3].favoriteEvents.includes(a[0].id)?"fa-solid":"fa-regular")+" cursor-pointer"),_(i,"class","float-right"),_(s,"href",v="/udalosti?id="+a[0].id),_(t,"class","text-lg font-semibold"),_(D,"class","text-sm flex flex-wrap gap-3 flex-1"),_(b,"class",""),_(e,"class",j="transition-all mb-4 border px-3 py-2 rounded-md shadow "+(a[3].favoriteEvents.includes(a[0].id)?"bg-yellow-100":""))},m(p,E){q(p,e,E),u(e,i),u(i,r),u(e,n),u(e,t),u(t,s),u(s,f),u(e,c),y&&y.m(e,null),u(e,h),u(e,b),u(b,D),u(D,w),te(I,w,null),u(D,G),L&&L.m(D,null),u(D,N),O&&O.m(D,null),u(D,K),P&&P.m(D,null),u(e,Q),A&&A.m(e,null),u(e,M),z&&z.m(e,null),V=!0,Z||(X=Se(r,"click",a[10]),Z=!0)},p(p,[E]){(!V||E&9&&l!==(l="fa-star "+(p[3].favoriteEvents.includes(p[0].id)?"fa-solid":"fa-regular")+" cursor-pointer"))&&_(r,"class",l),(!V||E&1)&&o!==(o=p[0].name+"")&&J(f,o),(!V||E&1&&v!==(v="/udalosti?id="+p[0].id))&&_(s,"href",v),p[0].speakers&&p[0].speakers.length>0?y?(y.p(p,E),E&1&&$(y,1)):(y=me(p),y.c(),$(y,1),y.m(e,h)):y&&(R(),B(y,1,1,()=>{y=null}),W());const Y={};E&1&&(Y.event=p[0]),I.$set(Y),p[2]?L?L.p(p,E):(L=ke(p),L.c(),L.m(D,N)):L&&(L.d(1),L=null),p[0].track?O?O.p(p,E):(O=be(p),O.c(),O.m(D,K)):O&&(O.d(1),O=null),p[0].tags?P?P.p(p,E):(P=Ee(p),P.c(),P.m(D,null)):P&&(P.d(1),P=null),p[0].description?A?(A.p(p,E),E&1&&$(A,1)):(A=we(p),A.c(),$(A,1),A.m(e,M)):A&&(R(),B(A,1,1,()=>{A=null}),W()),E&1&&(U=p[7](p[0]).length>0),U?z?(z.p(p,E),E&1&&$(z,1)):(z=Ve(p),z.c(),$(z,1),z.m(e,null)):z&&(R(),B(z,1,1,()=>{z=null}),W()),(!V||E&9&&j!==(j="transition-all mb-4 border px-3 py-2 rounded-md shadow "+(p[3].favoriteEvents.includes(p[0].id)?"bg-yellow-100":"")))&&_(e,"class",j)},i(p){V||($(y),$(I.$$.fragment,p),$(A),$(z),V=!0)},o(p){B(y),B(I.$$.fragment,p),B(A),B(z),V=!1},d(p){p&&d(e),y&&y.d(),ie(I),L&&L.d(),O&&O.d(),P&&P.d(),A&&A.d(),z&&z.d(),Z=!1,X()}}}function He(a){if(!a.description)return{};const e=a.description.split(`

`),i=e.length>1;return{md:e[0],stripped:i}}function Je(a,e,i){let r,l,n,t,s;ce(a,Oe,w=>i(9,t=w)),ce(a,re,w=>i(3,s=w));let{event:o}=e;const f={link:Le};function v(w){if(!!w)return w.map(I=>t.spec.speakers.find(G=>G.id===I))}function c(w){const I=t.spec.tracks.find(G=>G.id===w);return I.shortname||I.name}function h(w){return t.spec.events.filter(I=>I.parent===w.id)}const b=()=>de(r.id,re),D=w=>de(w.id,re);return a.$$set=w=>{"event"in w&&i(8,o=w.event)},a.$$.update=()=>{a.$$.dirty&256&&i(0,r=o),a.$$.dirty&513&&i(2,l=Pe(r,t)),a.$$.dirty&1&&i(1,n=He(r))},[r,n,l,s,f,v,c,h,o,t,b,D]}class Ke extends Ae{constructor(e){super();ze(this,e,Je,Ge,Be,{event:8})}}export{Fe as E,Ke as a,de as b,Pe as c};