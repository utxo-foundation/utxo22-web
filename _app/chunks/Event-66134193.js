import{S as je,i as Ce,s as qe,e as E,t as $,k as C,c as D,a as w,h as A,m as q,d,b as m,g as S,J as c,j as G,E as le,q as V,w as te,x as ie,y as re,o as B,B as ae,n as P,p as Q,K as ne,N as Me,L as he,l as _e}from"./index-9987666b.js";import{A as Ne}from"./Avatar-eb89e521.js";import{S as Oe,L as Ze}from"./Link-57e97f60.js";import{E as Fe}from"./EventTypeLabel-f121afea.js";import{f as se}from"./index-14ac584d.js";import{l as Je}from"./index-c9b2ee0d.js";import{b as Ke,c as fe}from"./stores-af76d038.js";function Re(n){let e,a=se(n[1],"iiiii",{locale:Je.cs}).toUpperCase()+"",t,l,r=se(n[1],"HH:mm")+"",i,s,f=se(n[2],"HH:mm")+"",o,g,h=(n[0]?n[0].name:"n/a")+"",u,_;return{c(){e=E("div"),t=$(a),l=C(),i=$(r),s=$("-"),o=$(f),g=$(" ("),u=$(h),_=$(")"),this.h()},l(v){e=D(v,"DIV",{class:!0});var k=w(e);t=A(k,a),l=q(k),i=A(k,r),s=A(k,"-"),o=A(k,f),g=A(k," ("),u=A(k,h),_=A(k,")"),k.forEach(d),this.h()},h(){m(e,"class","font-semibold")},m(v,k){S(v,e,k),c(e,t),c(e,l),c(e,i),c(e,s),c(e,o),c(e,g),c(e,u),c(e,_)},p(v,[k]){k&1&&h!==(h=(v[0]?v[0].name:"n/a")+"")&&G(u,h)},i:le,o:le,d(v){v&&d(e)}}}function Ue(n,e,a){let t,{item:l}=e,{e:r}=e,{bundle:i}=e;const s=new Date(l.period.start),f=new Date(l.period.end);return n.$$set=o=>{"item"in o&&a(3,l=o.item),"e"in o&&a(4,r=o.e),"bundle"in o&&a(5,i=o.bundle)},n.$$.update=()=>{n.$$.dirty&40&&a(0,t=i?i.spec.stages.find(o=>o.id===l.stage):null)},[t,s,f,l,r,i]}class Ge extends je{constructor(e){super();Ce(this,e,Ue,Re,qe,{item:3,e:4,bundle:5})}}function Pe(n,e){if(!e)return 0;if(n.duration)return n.duration;const a=e.spec.events.filter(t=>t.parent===n.id);if(a.length>0){let t=a.reduce((l,r)=>l+(r.duration?r.duration:0),0);return t+=5*(a.length-1),t}}function ve(n,e){e.update(a=>{const t=a.favoriteEvents;let l=null;return t.includes(n)?l=Object.assign({},a,{favoriteEvents:t.filter(r=>r!==n)}):(t.push(n),l=Object.assign(a,{favoriteEvents:t})),l})}function me(n,e,a){const t=n.slice();return t[13]=e[a],t}function pe(n,e,a){const t=n.slice();return t[16]=e[a],t}function ge(n,e,a){const t=n.slice();return t[19]=e[a],t}function ke(n,e,a){const t=n.slice();return t[16]=e[a],t}function be(n){let e,a,t=n[7](n[0].speakers),l=[];for(let i=0;i<t.length;i+=1)l[i]=De(ke(n,t,i));const r=i=>B(l[i],1,1,()=>{l[i]=null});return{c(){e=E("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){e=D(i,"DIV",{class:!0});var s=w(e);for(let f=0;f<l.length;f+=1)l[f].l(s);s.forEach(d),this.h()},h(){m(e,"class","mt-1 mb-2 flex flex-wrap gap-2")},m(i,s){S(i,e,s);for(let f=0;f<l.length;f+=1)l[f].m(e,null);a=!0},p(i,s){if(s&129){t=i[7](i[0].speakers);let f;for(f=0;f<t.length;f+=1){const o=ke(i,t,f);l[f]?(l[f].p(o,s),V(l[f],1)):(l[f]=De(o),l[f].c(),V(l[f],1),l[f].m(e,null))}for(P(),f=t.length;f<l.length;f+=1)r(f);Q()}},i(i){if(!a){for(let s=0;s<t.length;s+=1)V(l[s]);a=!0}},o(i){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)B(l[s]);a=!1},d(i){i&&d(e),ne(l,i)}}}function Ee(n){let e,a=n[16].nickname+"",t,l;return{c(){e=$("\xA0("),t=$(a),l=$(")")},l(r){e=A(r,"\xA0("),t=A(r,a),l=A(r,")")},m(r,i){S(r,e,i),S(r,t,i),S(r,l,i)},p(r,i){i&1&&a!==(a=r[16].nickname+"")&&G(t,a)},d(r){r&&d(e),r&&d(t),r&&d(l)}}}function De(n){let e,a,t,l,r,i=n[16].name+"",s,f,o,g;a=new Ne({props:{speaker:n[16],size:"extra-small"}});let h=n[16].nickname&&Ee(n);return{c(){e=E("div"),te(a.$$.fragment),t=C(),l=E("div"),r=E("a"),s=$(i),h&&h.c(),o=C(),this.h()},l(u){e=D(u,"DIV",{class:!0});var _=w(e);ie(a.$$.fragment,_),t=q(_),l=D(_,"DIV",{class:!0});var v=w(l);r=D(v,"A",{href:!0});var k=w(r);s=A(k,i),h&&h.l(k),k.forEach(d),v.forEach(d),o=q(_),_.forEach(d),this.h()},h(){m(r,"href",f="/lide?id="+n[16].id),m(l,"class","m-auto"),m(e,"class","flex gap-1.5")},m(u,_){S(u,e,_),re(a,e,null),c(e,t),c(e,l),c(l,r),c(r,s),h&&h.m(r,null),c(e,o),g=!0},p(u,_){const v={};_&1&&(v.speaker=u[16]),a.$set(v),(!g||_&1)&&i!==(i=u[16].name+"")&&G(s,i),u[16].nickname?h?h.p(u,_):(h=Ee(u),h.c(),h.m(r,null)):h&&(h.d(1),h=null),(!g||_&1&&f!==(f="/lide?id="+u[16].id))&&m(r,"href",f)},i(u){g||(V(a.$$.fragment,u),g=!0)},o(u){B(a.$$.fragment,u),g=!1},d(u){u&&d(e),ae(a),h&&h.d()}}}function we(n){let e,a;return e=new Ge({props:{item:n[2],event:n[0],bundle:n[1]}}),{c(){te(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,l){re(e,t,l),a=!0},p(t,l){const r={};l&4&&(r.item=t[2]),l&1&&(r.event=t[0]),l&2&&(r.bundle=t[1]),e.$set(r)},i(t){a||(V(e.$$.fragment,t),a=!0)},o(t){B(e.$$.fragment,t),a=!1},d(t){ae(e,t)}}}function Ie(n){let e,a,t;return{c(){e=E("div"),a=$(n[4]),t=$("m"),this.h()},l(l){e=D(l,"DIV",{class:!0});var r=w(e);a=A(r,n[4]),t=A(r,"m"),r.forEach(d),this.h()},h(){m(e,"class","text-xs my-auto")},m(l,r){S(l,e,r),c(e,a),c(e,t)},p(l,r){r&16&&G(a,l[4])},d(l){l&&d(e)}}}function Ve(n){let e,a,t=n[8](n[0].track)+"",l,r;return{c(){e=E("div"),a=E("a"),l=$(t),this.h()},l(i){e=D(i,"DIV",{class:!0});var s=w(e);a=D(s,"A",{href:!0});var f=w(a);l=A(f,t),f.forEach(d),s.forEach(d),this.h()},h(){m(a,"href",r="/program?track="+n[0].track),m(e,"class","text-sm my-auto")},m(i,s){S(i,e,s),c(e,a),c(a,l)},p(i,s){s&1&&t!==(t=i[8](i[0].track)+"")&&G(l,t),s&1&&r!==(r="/program?track="+i[0].track)&&m(a,"href",r)},d(i){i&&d(e)}}}function $e(n){let e,a=n[0].tags,t=[];for(let l=0;l<a.length;l+=1)t[l]=Ae(ge(n,a,l));return{c(){e=E("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=D(l,"DIV",{class:!0});var r=w(e);for(let i=0;i<t.length;i+=1)t[i].l(r);r.forEach(d),this.h()},h(){m(e,"class","flex flex-wrap text-xs gap-1 my-auto text-blue-web/60 whitespace-nowrap")},m(l,r){S(l,e,r);for(let i=0;i<t.length;i+=1)t[i].m(e,null)},p(l,r){if(r&1){a=l[0].tags;let i;for(i=0;i<a.length;i+=1){const s=ge(l,a,i);t[i]?t[i].p(s,r):(t[i]=Ae(s),t[i].c(),t[i].m(e,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=a.length}},d(l){l&&d(e),ne(t,l)}}}function Ae(n){let e,a,t,l=n[19]+"",r,i;return{c(){e=E("div"),a=E("a"),t=$("#"),r=$(l),this.h()},l(s){e=D(s,"DIV",{});var f=w(e);a=D(f,"A",{href:!0});var o=w(a);t=A(o,"#"),r=A(o,l),o.forEach(d),f.forEach(d),this.h()},h(){m(a,"href",i="/program?tag="+n[19])},m(s,f){S(s,e,f),c(e,a),c(a,t),c(a,r)},p(s,f){f&1&&l!==(l=s[19]+"")&&G(r,l),f&1&&i!==(i="/program?tag="+s[19])&&m(a,"href",i)},d(s){s&&d(e)}}}function Be(n){let e,a,t,l;a=new Oe({props:{source:n[3].md,renderers:n[6]}});let r=n[3].stripped&&Se(n);return{c(){e=E("div"),te(a.$$.fragment),t=C(),r&&r.c(),this.h()},l(i){e=D(i,"DIV",{class:!0});var s=w(e);ie(a.$$.fragment,s),t=q(s),r&&r.l(s),s.forEach(d),this.h()},h(){m(e,"class","mt-2 overflow-hidden")},m(i,s){S(i,e,s),re(a,e,null),c(e,t),r&&r.m(e,null),l=!0},p(i,s){const f={};s&8&&(f.source=i[3].md),a.$set(f),i[3].stripped?r?r.p(i,s):(r=Se(i),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},i(i){l||(V(a.$$.fragment,i),l=!0)},o(i){B(a.$$.fragment,i),l=!1},d(i){i&&d(e),ae(a),r&&r.d()}}}function Se(n){let e,a,t,l,r,i;return{c(){e=E("div"),a=$("("),t=E("a"),l=$("Zobrazit cel\xFD popis"),i=$(")"),this.h()},l(s){e=D(s,"DIV",{class:!0});var f=w(e);a=A(f,"("),t=D(f,"A",{href:!0});var o=w(t);l=A(o,"Zobrazit cel\xFD popis"),o.forEach(d),i=A(f,")"),f.forEach(d),this.h()},h(){m(t,"href",r="/udalosti?id="+n[0].id),m(e,"class","text-sm text-blue-web/60")},m(s,f){S(s,e,f),c(e,a),c(e,t),c(t,l),c(e,i)},p(s,f){f&1&&r!==(r="/udalosti?id="+s[0].id)&&m(t,"href",r)},d(s){s&&d(e)}}}function ze(n){let e,a,t,l=n[9](n[0]),r=[];for(let s=0;s<l.length;s+=1)r[s]=Te(me(n,l,s));const i=s=>B(r[s],1,1,()=>{r[s]=null});return{c(){e=E("div"),a=E("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=D(s,"DIV",{class:!0});var f=w(e);a=D(f,"DIV",{class:!0,cellpadding:!0});var o=w(a);for(let g=0;g<r.length;g+=1)r[g].l(o);o.forEach(d),f.forEach(d),this.h()},h(){m(a,"class","flex flex-wrap gap-2"),m(a,"cellpadding","5"),m(e,"class","mt-4 w-auto mb-2")},m(s,f){S(s,e,f),c(e,a);for(let o=0;o<r.length;o+=1)r[o].m(a,null);t=!0},p(s,f){if(f&673){l=s[9](s[0]);let o;for(o=0;o<l.length;o+=1){const g=me(s,l,o);r[o]?(r[o].p(g,f),V(r[o],1)):(r[o]=Te(g),r[o].c(),V(r[o],1),r[o].m(a,null))}for(P(),o=l.length;o<r.length;o+=1)i(o);Q()}},i(s){if(!t){for(let f=0;f<l.length;f+=1)V(r[f]);t=!0}},o(s){r=r.filter(Boolean);for(let f=0;f<r.length;f+=1)B(r[f]);t=!1},d(s){s&&d(e),ne(r,s)}}}function Qe(n){let e,a,t=n[7](n[13].speakers),l=[];for(let i=0;i<t.length;i+=1)l[i]=Le(pe(n,t,i));const r=i=>B(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=_e()},l(i){for(let s=0;s<l.length;s+=1)l[s].l(i);e=_e()},m(i,s){for(let f=0;f<l.length;f+=1)l[f].m(i,s);S(i,e,s),a=!0},p(i,s){if(s&641){t=i[7](i[13].speakers);let f;for(f=0;f<t.length;f+=1){const o=pe(i,t,f);l[f]?(l[f].p(o,s),V(l[f],1)):(l[f]=Le(o),l[f].c(),V(l[f],1),l[f].m(e.parentNode,e))}for(P(),f=t.length;f<l.length;f+=1)r(f);Q()}},i(i){if(!a){for(let s=0;s<t.length;s+=1)V(l[s]);a=!0}},o(i){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)B(l[s]);a=!1},d(i){ne(l,i),i&&d(e)}}}function We(n){let e,a;return{c(){e=E("div"),a=$("TBA")},l(t){e=D(t,"DIV",{});var l=w(e);a=A(l,"TBA"),l.forEach(d)},m(t,l){S(t,e,l),c(e,a)},p:le,i:le,o:le,d(t){t&&d(e)}}}function He(n){let e,a=n[16].nickname+"",t,l;return{c(){e=$("\xA0("),t=$(a),l=$(")")},l(r){e=A(r,"\xA0("),t=A(r,a),l=A(r,")")},m(r,i){S(r,e,i),S(r,t,i),S(r,l,i)},p(r,i){i&1&&a!==(a=r[16].nickname+"")&&G(t,a)},d(r){r&&d(e),r&&d(t),r&&d(l)}}}function Le(n){let e,a,t,l,r,i=n[16].name+"",s,f,o,g;a=new Ne({props:{speaker:n[16],size:"micro"}});let h=n[16].nickname&&He(n);return{c(){e=E("div"),te(a.$$.fragment),t=C(),l=E("div"),r=E("a"),s=$(i),h&&h.c(),o=C(),this.h()},l(u){e=D(u,"DIV",{class:!0});var _=w(e);ie(a.$$.fragment,_),t=q(_),l=D(_,"DIV",{});var v=w(l);r=D(v,"A",{href:!0});var k=w(r);s=A(k,i),h&&h.l(k),k.forEach(d),v.forEach(d),o=q(_),_.forEach(d),this.h()},h(){m(r,"href",f="/lide?id="+n[16].id),m(e,"class","flex gap-1")},m(u,_){S(u,e,_),re(a,e,null),c(e,t),c(e,l),c(l,r),c(r,s),h&&h.m(r,null),c(e,o),g=!0},p(u,_){const v={};_&1&&(v.speaker=u[16]),a.$set(v),(!g||_&1)&&i!==(i=u[16].name+"")&&G(s,i),u[16].nickname?h?h.p(u,_):(h=He(u),h.c(),h.m(r,null)):h&&(h.d(1),h=null),(!g||_&1&&f!==(f="/lide?id="+u[16].id))&&m(r,"href",f)},i(u){g||(V(a.$$.fragment,u),g=!0)},o(u){B(a.$$.fragment,u),g=!1},d(u){u&&d(e),ae(a),h&&h.d()}}}function Te(n){let e,a,t,l=n[13].name+"",r,i,s,f,o,g,h,u,_,v,k,b,J,R;function Y(){return n[12](n[13])}const W=[We,Qe],K=[];function X(F,z){return F[13].speakers.length===0?0:1}return u=X(n),_=K[u]=W[u](n),{c(){e=E("div"),a=E("div"),t=E("a"),r=$(l),s=C(),f=E("i"),g=C(),h=E("div"),_.c(),v=C(),this.h()},l(F){e=D(F,"DIV",{class:!0});var z=w(e);a=D(z,"DIV",{class:!0});var M=w(a);t=D(M,"A",{href:!0});var y=w(t);r=A(y,l),y.forEach(d),s=q(M),f=D(M,"I",{class:!0}),w(f).forEach(d),M.forEach(d),g=q(z),h=D(z,"DIV",{class:!0});var x=w(h);_.l(x),x.forEach(d),v=q(z),z.forEach(d),this.h()},h(){m(t,"href",i="/udalosti?id="+n[13].id),m(f,"class",o="fa-star "+(n[5].favoriteEvents.includes(n[13].id)?"fa-solid":"fa-regular")+" cursor-pointer"),m(a,"class","font-bold"),m(h,"class","mt-1"),m(e,"class",k="border rounded py-1.5 px-2.5 text-sm transition-all "+(n[5].favoriteEvents.includes(n[13].id)?"bg-yellow-100":"bg-gray-100"))},m(F,z){S(F,e,z),c(e,a),c(a,t),c(t,r),c(a,s),c(a,f),c(e,g),c(e,h),K[u].m(h,null),c(e,v),b=!0,J||(R=Me(f,"click",Y),J=!0)},p(F,z){n=F,(!b||z&1)&&l!==(l=n[13].name+"")&&G(r,l),(!b||z&1&&i!==(i="/udalosti?id="+n[13].id))&&m(t,"href",i),(!b||z&33&&o!==(o="fa-star "+(n[5].favoriteEvents.includes(n[13].id)?"fa-solid":"fa-regular")+" cursor-pointer"))&&m(f,"class",o);let M=u;u=X(n),u===M?K[u].p(n,z):(P(),B(K[M],1,1,()=>{K[M]=null}),Q(),_=K[u],_?_.p(n,z):(_=K[u]=W[u](n),_.c()),V(_,1),_.m(h,null)),(!b||z&33&&k!==(k="border rounded py-1.5 px-2.5 text-sm transition-all "+(n[5].favoriteEvents.includes(n[13].id)?"bg-yellow-100":"bg-gray-100")))&&m(e,"class",k)},i(F){b||(V(_),b=!0)},o(F){B(_),b=!1},d(F){F&&d(e),K[u].d(),J=!1,R()}}}function Xe(n){let e,a,t,l,r,i,s,f=n[0].name+"",o,g,h,u,_,v,k,b,J,R,Y,W,K,X,F=n[9](n[0]).length>0,z,M,y,x,H=n[0].speakers&&n[0].speakers.length>0&&be(n);b=new Fe({props:{event:n[0]}});let L=n[2]&&we(n),N=n[4]&&Ie(n),O=n[0].track&&Ve(n),Z=n[0].tags&&$e(n),T=n[0].description&&Be(n),j=F&&ze(n);return{c(){e=E("div"),a=E("div"),t=E("i"),r=C(),i=E("div"),s=E("a"),o=$(f),h=C(),H&&H.c(),u=C(),_=E("div"),v=E("div"),k=E("div"),te(b.$$.fragment),J=C(),L&&L.c(),R=C(),N&&N.c(),Y=C(),O&&O.c(),W=C(),Z&&Z.c(),K=C(),T&&T.c(),X=C(),j&&j.c(),this.h()},l(p){e=D(p,"DIV",{class:!0});var I=w(e);a=D(I,"DIV",{class:!0});var ee=w(a);t=D(ee,"I",{class:!0}),w(t).forEach(d),ee.forEach(d),r=q(I),i=D(I,"DIV",{class:!0});var oe=w(i);s=D(oe,"A",{href:!0});var ue=w(s);o=A(ue,f),ue.forEach(d),oe.forEach(d),h=q(I),H&&H.l(I),u=q(I),_=D(I,"DIV",{class:!0});var ce=w(_);v=D(ce,"DIV",{class:!0});var U=w(v);k=D(U,"DIV",{class:!0});var de=w(k);ie(b.$$.fragment,de),de.forEach(d),J=q(U),L&&L.l(U),R=q(U),N&&N.l(U),Y=q(U),O&&O.l(U),W=q(U),Z&&Z.l(U),U.forEach(d),ce.forEach(d),K=q(I),T&&T.l(I),X=q(I),j&&j.l(I),I.forEach(d),this.h()},h(){m(t,"class",l="fa-star "+(n[5].favoriteEvents.includes(n[0].id)?"fa-solid":"fa-regular")+" cursor-pointer"),m(a,"class","float-right"),m(s,"href",g="/udalosti?id="+n[0].id),m(i,"class","text-lg font-semibold"),m(k,"class","opacity-80"),m(v,"class","text-sm flex flex-wrap gap-3 flex-1"),m(_,"class",""),m(e,"class",z="transition-all mb-4 border px-3 py-2 rounded-md shadow "+(n[5].favoriteEvents.includes(n[0].id)?"bg-yellow-100":""))},m(p,I){S(p,e,I),c(e,a),c(a,t),c(e,r),c(e,i),c(i,s),c(s,o),c(e,h),H&&H.m(e,null),c(e,u),c(e,_),c(_,v),c(v,k),re(b,k,null),c(v,J),L&&L.m(v,null),c(v,R),N&&N.m(v,null),c(v,Y),O&&O.m(v,null),c(v,W),Z&&Z.m(v,null),c(e,K),T&&T.m(e,null),c(e,X),j&&j.m(e,null),M=!0,y||(x=Me(t,"click",n[11]),y=!0)},p(p,[I]){(!M||I&33&&l!==(l="fa-star "+(p[5].favoriteEvents.includes(p[0].id)?"fa-solid":"fa-regular")+" cursor-pointer"))&&m(t,"class",l),(!M||I&1)&&f!==(f=p[0].name+"")&&G(o,f),(!M||I&1&&g!==(g="/udalosti?id="+p[0].id))&&m(s,"href",g),p[0].speakers&&p[0].speakers.length>0?H?(H.p(p,I),I&1&&V(H,1)):(H=be(p),H.c(),V(H,1),H.m(e,u)):H&&(P(),B(H,1,1,()=>{H=null}),Q());const ee={};I&1&&(ee.event=p[0]),b.$set(ee),p[2]?L?(L.p(p,I),I&4&&V(L,1)):(L=we(p),L.c(),V(L,1),L.m(v,R)):L&&(P(),B(L,1,1,()=>{L=null}),Q()),p[4]?N?N.p(p,I):(N=Ie(p),N.c(),N.m(v,Y)):N&&(N.d(1),N=null),p[0].track?O?O.p(p,I):(O=Ve(p),O.c(),O.m(v,W)):O&&(O.d(1),O=null),p[0].tags?Z?Z.p(p,I):(Z=$e(p),Z.c(),Z.m(v,null)):Z&&(Z.d(1),Z=null),p[0].description?T?(T.p(p,I),I&1&&V(T,1)):(T=Be(p),T.c(),V(T,1),T.m(e,X)):T&&(P(),B(T,1,1,()=>{T=null}),Q()),I&1&&(F=p[9](p[0]).length>0),F?j?(j.p(p,I),I&1&&V(j,1)):(j=ze(p),j.c(),V(j,1),j.m(e,null)):j&&(P(),B(j,1,1,()=>{j=null}),Q()),(!M||I&33&&z!==(z="transition-all mb-4 border px-3 py-2 rounded-md shadow "+(p[5].favoriteEvents.includes(p[0].id)?"bg-yellow-100":"")))&&m(e,"class",z)},i(p){M||(V(H),V(b.$$.fragment,p),V(L),V(T),V(j),M=!0)},o(p){B(H),B(b.$$.fragment,p),B(L),B(T),B(j),M=!1},d(p){p&&d(e),H&&H.d(),ae(b),L&&L.d(),N&&N.d(),O&&O.d(),Z&&Z.d(),T&&T.d(),j&&j.d(),y=!1,x()}}}function Ye(n){if(!n.description)return{};const e=n.description.split(`

`),a=e.length>1;return{md:e[0],stripped:a}}function ye(n,e,a){let t,l,r,i,s,f;he(n,Ke,b=>a(1,s=b)),he(n,fe,b=>a(5,f=b));let{event:o}=e;const g={link:Ze};function h(b){if(!!b)return b.map(J=>s.spec.speakers.find(R=>R.id===J))}function u(b){const J=s.spec.tracks.find(R=>R.id===b);return J.shortname||J.name}function _(b){return s.spec.events.filter(J=>J.parent===b.id)}const v=()=>ve(t.id,fe),k=b=>ve(b.id,fe);return n.$$set=b=>{"event"in b&&a(10,o=b.event)},n.$$.update=()=>{n.$$.dirty&1024&&a(0,t=o),n.$$.dirty&3&&a(4,l=Pe(t,s)),n.$$.dirty&1&&a(3,r=Ye(t)),n.$$.dirty&3&&a(2,i=s?s.spec.schedule.find(b=>b.event===t.id):null)},[t,s,i,r,l,f,g,h,u,_,o,v,k]}class nl extends je{constructor(e){super();Ce(this,e,ye,Xe,qe,{event:10})}}export{nl as E,Ge as a,ve as b,Pe as c};
