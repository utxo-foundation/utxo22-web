import{R as Z,S as ue,i as de,s as ce,e as g,k as N,c as b,a as R,m as O,d as E,b as a,K as ne,g as x,G as c,a1 as G,a2 as fe,a3 as he,a4 as _e,_ as pe,a5 as le,Y as ve,t as me,Q as ge,h as be,a6 as ye,p as Te,q as Ee,o as ke,n as we,a7 as Ue,E as Me}from"../../chunks/index-a2ca1b26.js";import{c as S}from"../../chunks/singletons-d1fb5791.js";S.disable_scroll_handling;S.goto;const Ne=S.invalidate;S.prefetch;S.prefetch_routes;S.before_navigate;S.after_navigate;function K(r,{pending:t,error:e,result:l}={}){let _;async function m(u){const i=_={};u.preventDefault();const f=new FormData(r);t&&t({data:f,form:r});try{const n=await fetch(r.action,{method:r.method,headers:{accept:"application/json"},body:f});if(i!==_)return;if(n.ok){l&&l({data:f,form:r,response:n});const v=new URL(r.action);v.search=v.hash="",Ne(v.href)}else e?e({data:f,form:r,error:null,response:n}):console.error(await n.text())}catch(n){if(e)e({data:f,form:r,error:n,response:null});else throw n}}return r.addEventListener("submit",m),{destroy(){r.removeEventListener("submit",m)}}}function ie(r){const t=r-1;return t*t*t+1}function se(r,{delay:t=0,duration:e=400,easing:l=ie,start:_=0,opacity:m=0}={}){const u=getComputedStyle(r),i=+u.opacity,f=u.transform==="none"?"":u.transform,n=1-_,v=i*(1-m);return{delay:t,duration:e,easing:l,css:(y,k)=>`
			transform: ${f} scale(${1-n*k});
			opacity: ${i-v*k}
		`}}function Oe(r,{from:t,to:e},l={}){const _=getComputedStyle(r),m=_.transform==="none"?"":_.transform,[u,i]=_.transformOrigin.split(" ").map(parseFloat),f=t.left+t.width*u/e.width-(e.left+u),n=t.top+t.height*i/e.height-(e.top+i),{delay:v=0,duration:y=U=>Math.sqrt(U)*120,easing:k=ie}=l;return{delay:v,duration:Z(y)?y(Math.sqrt(f*f+n*n)):y,easing:k,css:(U,h)=>{const w=h*f,o=h*n,d=U+h*t.width/e.width,s=U+h*t.height/e.height;return`transform: ${m} translate(${w}px, ${o}px) scale(${d}, ${s});`}}}function oe(r,t,e){const l=r.slice();return l[3]=t[e],l[4]=t,l[5]=e,l}function re(r,t){let e,l,_,m,u,i,f,n,v,y,k,U,h,w,o,d,s,C,B,I,Q,P,D,A,Y,F,H,V,z,q,J,W=Me,M,X,ee;function te(...T){return t[1](t[3],t[4],t[5],...T)}function ae(){return t[2](t[3],t[4],t[5])}return{key:r,first:null,c(){e=g("div"),l=g("form"),_=g("input"),u=N(),i=g("input"),n=N(),v=g("button"),U=N(),h=g("form"),w=g("input"),d=N(),s=g("input"),B=N(),I=g("button"),Q=N(),P=g("form"),D=g("input"),Y=N(),F=g("button"),z=N(),this.h()},l(T){e=b(T,"DIV",{class:!0});var p=R(e);l=b(p,"FORM",{action:!0,method:!0});var L=R(l);_=b(L,"INPUT",{type:!0,name:!0,class:!0}),u=O(L),i=b(L,"INPUT",{type:!0,name:!0,class:!0}),n=O(L),v=b(L,"BUTTON",{class:!0,"aria-label":!0}),R(v).forEach(E),L.forEach(E),U=O(p),h=b(p,"FORM",{class:!0,action:!0,method:!0});var $=R(h);w=b($,"INPUT",{type:!0,name:!0,class:!0}),d=O($),s=b($,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),B=O($),I=b($,"BUTTON",{class:!0,"aria-label":!0}),R(I).forEach(E),$.forEach(E),Q=O(p),P=b(p,"FORM",{action:!0,method:!0});var j=R(P);D=b(j,"INPUT",{type:!0,name:!0,class:!0}),Y=O(j),F=b(j,"BUTTON",{class:!0,"aria-label":!0}),R(F).forEach(E),j.forEach(E),z=O(p),p.forEach(E),this.h()},h(){a(_,"type","hidden"),a(_,"name","uid"),_.value=m=t[3].uid,a(_,"class","svelte-16nsat"),a(i,"type","hidden"),a(i,"name","done"),i.value=f=t[3].done?"":"true",a(i,"class","svelte-16nsat"),a(v,"class","toggle svelte-16nsat"),a(v,"aria-label",y="Mark todo as "+(t[3].done?"not done":"done")),a(l,"action","/todos?_method=PATCH"),a(l,"method","post"),a(w,"type","hidden"),a(w,"name","uid"),w.value=o=t[3].uid,a(w,"class","svelte-16nsat"),a(s,"aria-label","Edit todo"),a(s,"type","text"),a(s,"name","text"),s.value=C=t[3].text,a(s,"class","svelte-16nsat"),a(I,"class","save svelte-16nsat"),a(I,"aria-label","Save todo"),a(h,"class","text svelte-16nsat"),a(h,"action","/todos?_method=PATCH"),a(h,"method","post"),a(D,"type","hidden"),a(D,"name","uid"),D.value=A=t[3].uid,a(D,"class","svelte-16nsat"),a(F,"class","delete svelte-16nsat"),a(F,"aria-label","Delete todo"),F.disabled=H=t[3].pending_delete,a(P,"action","/todos?_method=DELETE"),a(P,"method","post"),a(e,"class","todo svelte-16nsat"),ne(e,"done",t[3].done),this.first=e},m(T,p){x(T,e,p),c(e,l),c(l,_),c(l,u),c(l,i),c(l,n),c(l,v),c(e,U),c(e,h),c(h,w),c(h,d),c(h,s),c(h,B),c(h,I),c(e,Q),c(e,P),c(P,D),c(P,Y),c(P,F),c(e,z),M=!0,X||(ee=[G(k=K.call(null,l,{pending:te})),G(K.call(null,h)),G(V=K.call(null,P,{pending:ae}))],X=!0)},p(T,p){t=T,(!M||p&1&&m!==(m=t[3].uid))&&(_.value=m),(!M||p&1&&f!==(f=t[3].done?"":"true"))&&(i.value=f),(!M||p&1&&y!==(y="Mark todo as "+(t[3].done?"not done":"done")))&&a(v,"aria-label",y),k&&Z(k.update)&&p&1&&k.update.call(null,{pending:te}),(!M||p&1&&o!==(o=t[3].uid))&&(w.value=o),(!M||p&1&&C!==(C=t[3].text)&&s.value!==C)&&(s.value=C),(!M||p&1&&A!==(A=t[3].uid))&&(D.value=A),(!M||p&1&&H!==(H=t[3].pending_delete))&&(F.disabled=H),V&&Z(V.update)&&p&1&&V.update.call(null,{pending:ae}),p&1&&ne(e,"done",t[3].done)},r(){J=e.getBoundingClientRect()},f(){fe(e),W(),he(e,J)},a(){W(),W=_e(e,J,Oe,{duration:200})},i(T){M||(T&&pe(()=>{q||(q=le(e,se,{start:.7},!0)),q.run(1)}),M=!0)},o(T){T&&(q||(q=le(e,se,{start:.7},!1)),q.run(0)),M=!1},d(T){T&&E(e),T&&q&&q.end(),X=!1,ve(ee)}}}function Ie(r){let t,e,l,_,m,u,i,f,n=[],v=new Map,y,k,U,h=r[0];const w=o=>o[3].uid;for(let o=0;o<h.length;o+=1){let d=oe(r,h,o),s=w(d);v.set(s,n[o]=re(s,d))}return{c(){t=N(),e=g("div"),l=g("h1"),_=me("Todos"),m=N(),u=g("form"),i=g("input"),f=N();for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){ge('[data-svelte="svelte-181o7gf"]',document.head).forEach(E),t=O(o),e=b(o,"DIV",{class:!0});var s=R(e);l=b(s,"H1",{});var C=R(l);_=be(C,"Todos"),C.forEach(E),m=O(s),u=b(s,"FORM",{class:!0,action:!0,method:!0});var B=R(u);i=b(B,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),B.forEach(E),f=O(s);for(let I=0;I<n.length;I+=1)n[I].l(s);s.forEach(E),this.h()},h(){document.title="Todos",a(i,"name","text"),a(i,"aria-label","Add todo"),a(i,"placeholder","+ tap to add a todo"),a(i,"class","svelte-16nsat"),a(u,"class","new svelte-16nsat"),a(u,"action","/todos"),a(u,"method","post"),a(e,"class","todos svelte-16nsat")},m(o,d){x(o,t,d),x(o,e,d),c(e,l),c(l,_),c(e,m),c(e,u),c(u,i),c(e,f);for(let s=0;s<n.length;s+=1)n[s].m(e,null);y=!0,k||(U=G(K.call(null,u,{result:Pe})),k=!0)},p(o,[d]){if(d&1){h=o[0],we();for(let s=0;s<n.length;s+=1)n[s].r();n=ye(n,d,w,1,o,h,v,e,Ue,re,null,oe);for(let s=0;s<n.length;s+=1)n[s].a();Te()}},i(o){if(!y){for(let d=0;d<h.length;d+=1)Ee(n[d]);y=!0}},o(o){for(let d=0;d<n.length;d+=1)ke(n[d]);y=!1},d(o){o&&E(t),o&&E(e);for(let d=0;d<n.length;d+=1)n[d].d();k=!1,U()}}}const Pe=async({form:r})=>{r.reset()};function Re(r,t,e){let{todos:l}=t;const _=(u,i,f,{data:n})=>{e(0,i[f].done=!!n.get("done"),l)},m=(u,i,f)=>e(0,i[f].pending_delete=!0,l);return r.$$set=u=>{"todos"in u&&e(0,l=u.todos)},[l,_,m]}class Fe extends ue{constructor(t){super();de(this,t,Re,Ie,ce,{todos:0})}}export{Fe as default};
