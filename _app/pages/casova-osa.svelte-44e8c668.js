import{S as ce,i as fe,s as he,e as w,c as D,a as T,d as g,b as E,g as A,t as I,k as j,h as N,m as y,F as h,J as ue,j as P,G as F,R as de,E as L,H as _e,l as G}from"../chunks/index-12086f65.js";import{b as pe}from"../chunks/stores-52bca5f8.js";import{c as me}from"../chunks/index-c2100bd5.js";import{f as J}from"../chunks/index-921d3fdd.js";import"../chunks/index-3ca188ce.js";function z(n,l,t){const e=n.slice();return e[6]=l[t],e}function K(n,l,t){const e=n.slice();return e[9]=l[t],e}function Q(n,l,t){const e=n.slice();return e[12]=l[t],e}function W(n,l,t){const e=n.slice();return e[15]=l[t][0],e[16]=l[t][1],e}function Z(n,l,t){const e=n.slice();return e[12]=l[t],e}function x(n,l,t){const e=n.slice();return e[21]=l[t],e[23]=t,e}function ee(n){let l,t=n[1].spec["schedule-candidates"],e=[];for(let s=0;s<t.length;s+=1)e[s]=te(x(n,t,s));return{c(){l=w("div");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){l=D(s,"DIV",{class:!0});var r=T(l);for(let a=0;a<e.length;a+=1)e[a].l(r);r.forEach(g),this.h()},h(){E(l,"class","")},m(s,r){A(s,l,r);for(let a=0;a<e.length;a+=1)e[a].m(l,null)},p(s,r){if(r&3){t=s[1].spec["schedule-candidates"];let a;for(a=0;a<t.length;a+=1){const v=x(s,t,a);e[a]?e[a].p(v,r):(e[a]=te(v),e[a].c(),e[a].m(l,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=t.length}},d(s){s&&g(l),F(e,s)}}}function te(n){let l,t,e,s,r,a,v,m=["score","themeCrossing","tagsCrossing"].map(p).join(", ")+"",u,b,_,d,S;function C(){return n[4](n[23])}function p(...i){return n[5](n[21],...i)}return{c(){l=w("div"),t=w("a"),e=I("Pl\xE1n "),s=I(n[23]),r=j(),a=w("span"),v=I("["),u=I(m),b=I("]"),_=j(),this.h()},l(i){l=D(i,"DIV",{});var c=T(l);t=D(c,"A",{href:!0,class:!0});var o=T(t);e=N(o,"Pl\xE1n "),s=N(o,n[23]),o.forEach(g),r=y(c),a=D(c,"SPAN",{class:!0});var k=T(a);v=N(k,"["),u=N(k,m),b=N(k,"]"),k.forEach(g),_=y(c),c.forEach(g),this.h()},h(){E(t,"href","#"),E(t,"class","hover:underline"),E(a,"class","text-sm")},m(i,c){A(i,l,c),h(l,t),h(t,e),h(t,s),h(l,r),h(l,a),h(a,v),h(a,u),h(a,b),h(l,_),d||(S=ue(t,"click",C),d=!0)},p(i,c){n=i,c&2&&m!==(m=["score","themeCrossing","tagsCrossing"].map(p).join(", ")+"")&&P(u,m)},d(i){i&&g(l),d=!1,S()}}}function ve(n){let l;return{c(){l=I("Na\u010D\xEDt\xE1m ..")},l(t){l=N(t,"Na\u010D\xEDt\xE1m ..")},m(t,e){A(t,l,e)},p:L,d(t){t&&g(l)}}}function ge(n){let l,t=n[1].dates,e=[];for(let s=0;s<t.length;s+=1)e[s]=re(z(n,t,s));return{c(){for(let s=0;s<e.length;s+=1)e[s].c();l=G()},l(s){for(let r=0;r<e.length;r+=1)e[r].l(s);l=G()},m(s,r){for(let a=0;a<e.length;a+=1)e[a].m(s,r);A(s,l,r)},p(s,r){if(r&14){t=s[1].dates;let a;for(a=0;a<t.length;a+=1){const v=z(s,t,a);e[a]?e[a].p(v,r):(e[a]=re(v),e[a].c(),e[a].m(l.parentNode,l))}for(;a<e.length;a+=1)e[a].d(1);e.length=t.length}},d(s){F(e,s),s&&g(l)}}}function le(n){let l,t=n[12].id+"",e;return{c(){l=w("th"),e=I(t)},l(s){l=D(s,"TH",{});var r=T(l);e=N(r,t),r.forEach(g)},m(s,r){A(s,l,r),h(l,e)},p(s,r){r&2&&t!==(t=s[12].id+"")&&P(e,t)},d(s){s&&g(l)}}}function be(n){let l,t=[[n[9].stages[n[12].id],ie(n[1],n[9].stages[n[12].id].event)]],e=[];for(let s=0;s<1;s+=1)e[s]=se(W(n,t,s));return{c(){for(let s=0;s<1;s+=1)e[s].c();l=G()},l(s){for(let r=0;r<1;r+=1)e[r].l(s);l=G()},m(s,r){for(let a=0;a<1;a+=1)e[a].m(s,r);A(s,l,r)},p(s,r){if(r&14){t=[[s[9].stages[s[12].id],ie(s[1],s[9].stages[s[12].id].event)]];let a;for(a=0;a<1;a+=1){const v=W(s,t,a);e[a]?e[a].p(v,r):(e[a]=se(v),e[a].c(),e[a].m(l.parentNode,l))}for(;a<1;a+=1)e[a].d(1)}},d(s){F(e,s),s&&g(l)}}}function ke(n){let l;return{c(){l=w("td"),this.h()},l(t){l=D(t,"TD",{class:!0}),T(l).forEach(g),this.h()},h(){E(l,"class","bg-gray-200/70")},m(t,e){A(t,l,e)},p:L,d(t){t&&g(l)}}}function se(n){let l,t,e,s=J(new Date(n[15].period.start),"HH:mm")+"",r,a,v=J(new Date(n[15].period.end),"HH:mm")+"",m,u,b=n[16].track+"",_,d,S,C,p,i=n[16].name+"",c,o,k,f,V=oe(n[1],n[16])+"",$,R,q;return{c(){l=w("td"),t=w("div"),e=w("div"),r=I(s),a=I("-"),m=I(v),u=I(" ["),_=I(b),d=I("]"),S=j(),C=w("div"),p=w("a"),c=I(i),k=j(),f=w("div"),$=I(V),this.h()},l(H){l=D(H,"TD",{class:!0,valign:!0,rowspan:!0});var O=T(l);t=D(O,"DIV",{class:!0});var M=T(t);e=D(M,"DIV",{class:!0});var B=T(e);r=N(B,s),a=N(B,"-"),m=N(B,v),u=N(B," ["),_=N(B,b),d=N(B,"]"),B.forEach(g),S=y(M),C=D(M,"DIV",{class:!0});var U=T(C);p=D(U,"A",{href:!0});var X=T(p);c=N(X,i),X.forEach(g),U.forEach(g),k=y(M),f=D(M,"DIV",{class:!0});var Y=T(f);$=N(Y,V),Y.forEach(g),M.forEach(g),O.forEach(g),this.h()},h(){E(e,"class","text-xs"),E(p,"href",o="/udalosti?id="+n[16].id),E(C,"class","font-semibold mt-1"),E(f,"class","text-xs mt-1"),E(t,"class","px-2 py-1 mb-1 mt-1"),E(l,"class",R="text-sm h-full "+n[16].color+" border border-blue-web/50"),E(l,"valign","top"),E(l,"rowspan",q=n[9].stages[n[12].id].span)},m(H,O){A(H,l,O),h(l,t),h(t,e),h(e,r),h(e,a),h(e,m),h(e,u),h(e,_),h(e,d),h(t,S),h(t,C),h(C,p),h(p,c),h(t,k),h(t,f),h(f,$)},p(H,O){O&6&&s!==(s=J(new Date(H[15].period.start),"HH:mm")+"")&&P(r,s),O&6&&v!==(v=J(new Date(H[15].period.end),"HH:mm")+"")&&P(m,v),O&6&&b!==(b=H[16].track+"")&&P(_,b),O&6&&i!==(i=H[16].name+"")&&P(c,i),O&6&&o!==(o="/udalosti?id="+H[16].id)&&E(p,"href",o),O&6&&V!==(V=oe(H[1],H[16])+"")&&P($,V),O&6&&R!==(R="text-sm h-full "+H[16].color+" border border-blue-web/50")&&E(l,"class",R),O&6&&q!==(q=H[9].stages[H[12].id].span)&&E(l,"rowspan",q)},d(H){H&&g(l)}}}function ae(n){let l;function t(r,a){if(r[9].stages[r[12].id]===void 0)return ke;if(r[9].stages[r[12].id]!==null)return be}let e=t(n),s=e&&e(n);return{c(){s&&s.c(),l=G()},l(r){s&&s.l(r),l=G()},m(r,a){s&&s.m(r,a),A(r,l,a)},p(r,a){e===(e=t(r))&&s?s.p(r,a):(s&&s.d(1),s=e&&e(r),s&&(s.c(),s.m(l.parentNode,l)))},d(r){s&&s.d(r),r&&g(l)}}}function ne(n){let l,t,e=n[9].title+"",s,r,a,v=n[1].spec.stages,m=[];for(let u=0;u<v.length;u+=1)m[u]=ae(Q(n,v,u));return{c(){l=w("tr"),t=w("th"),s=I(e),r=j();for(let u=0;u<m.length;u+=1)m[u].c();a=j(),this.h()},l(u){l=D(u,"TR",{});var b=T(l);t=D(b,"TH",{valign:!0,class:!0,height:!0});var _=T(t);s=N(_,e),_.forEach(g),r=y(b);for(let d=0;d<m.length;d+=1)m[d].l(b);a=y(b),b.forEach(g),this.h()},h(){E(t,"valign","top"),E(t,"class","pr-2 pt-1 text-sm"),E(t,"height","70")},m(u,b){A(u,l,b),h(l,t),h(t,s),h(l,r);for(let _=0;_<m.length;_+=1)m[_].m(l,null);h(l,a)},p(u,b){if(b&6&&e!==(e=u[9].title+"")&&P(s,e),b&14){v=u[1].spec.stages;let _;for(_=0;_<v.length;_+=1){const d=Q(u,v,_);m[_]?m[_].p(d,b):(m[_]=ae(d),m[_].c(),m[_].m(l,a))}for(;_<m.length;_+=1)m[_].d(1);m.length=v.length}},d(u){u&&g(l),F(m,u)}}}function re(n){let l,t,e=n[6]+"",s,r,a,v,m,u,b,_,d,S,C=n[1].spec.stages,p=[];for(let o=0;o<C.length;o+=1)p[o]=le(Z(n,C,o));let i=n[3](n[2],n[6],n[1]),c=[];for(let o=0;o<i.length;o+=1)c[o]=ne(K(n,i,o));return{c(){l=w("div"),t=w("h2"),s=I(e),r=j(),a=w("table"),v=w("thead"),m=w("tr"),u=w("th"),b=j();for(let o=0;o<p.length;o+=1)p[o].c();_=j(),d=w("tbody");for(let o=0;o<c.length;o+=1)c[o].c();S=j(),this.h()},l(o){l=D(o,"DIV",{class:!0});var k=T(l);t=D(k,"H2",{class:!0});var f=T(t);s=N(f,e),f.forEach(g),r=y(k),a=D(k,"TABLE",{width:!0,class:!0});var V=T(a);v=D(V,"THEAD",{});var $=T(v);m=D($,"TR",{});var R=T(m);u=D(R,"TH",{}),T(u).forEach(g),b=y(R);for(let H=0;H<p.length;H+=1)p[H].l(R);R.forEach(g),$.forEach(g),_=y(V),d=D(V,"TBODY",{});var q=T(d);for(let H=0;H<c.length;H+=1)c[H].l(q);q.forEach(g),V.forEach(g),S=y(k),k.forEach(g),this.h()},h(){E(t,"class","uppercase text-xl font-bold"),E(a,"width","100%"),E(a,"class","table"),E(l,"class","mt-4")},m(o,k){A(o,l,k),h(l,t),h(t,s),h(l,r),h(l,a),h(a,v),h(v,m),h(m,u),h(m,b);for(let f=0;f<p.length;f+=1)p[f].m(m,null);h(a,_),h(a,d);for(let f=0;f<c.length;f+=1)c[f].m(d,null);h(l,S)},p(o,k){if(k&2&&e!==(e=o[6]+"")&&P(s,e),k&2){C=o[1].spec.stages;let f;for(f=0;f<C.length;f+=1){const V=Z(o,C,f);p[f]?p[f].p(V,k):(p[f]=le(V),p[f].c(),p[f].m(m,null))}for(;f<p.length;f+=1)p[f].d(1);p.length=C.length}if(k&14){i=o[3](o[2],o[6],o[1]);let f;for(f=0;f<i.length;f+=1){const V=K(o,i,f);c[f]?c[f].p(V,k):(c[f]=ne(V),c[f].c(),c[f].m(d,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=i.length}},d(o){o&&g(l),F(p,o),F(c,o)}}}function Ee(n){let l,t,e,s,r,a,v,m,u,b,_,d=n[1]&&ee(n);function S(i,c){return i[1]?ge:ve}let C=S(n),p=C(n);return{c(){l=j(),t=w("section"),e=w("h1"),s=I("\u010Casov\xE1 osa"),r=j(),d&&d.c(),a=j(),v=w("div"),m=I("Current plan: "),u=I(n[0]),b=j(),_=w("section"),p.c(),this.h()},l(i){de('[data-svelte="svelte-5gyi8o"]',document.head).forEach(g),l=y(i),t=D(i,"SECTION",{class:!0});var o=T(t);e=D(o,"H1",{class:!0});var k=T(e);s=N(k,"\u010Casov\xE1 osa"),k.forEach(g),r=y(o),d&&d.l(o),a=y(o),v=D(o,"DIV",{class:!0});var f=T(v);m=N(f,"Current plan: "),u=N(f,n[0]),f.forEach(g),o.forEach(g),b=y(i),_=D(i,"SECTION",{class:!0});var V=T(_);p.l(V),V.forEach(g),this.h()},h(){document.title="\u010Casov\xE1 osa | UTXO.22",E(e,"class","uppercase text-2xl font-bold"),E(v,"class","mt-4"),E(t,"class","relative mx-auto py-6 sm:py-10 px-6 max-w-6xl text-blue-web"),E(_,"class","relative mx-auto pb-6 sm:pb-10 px-6 text-blue-web overflow-scroll")},m(i,c){A(i,l,c),A(i,t,c),h(t,e),h(e,s),h(t,r),d&&d.m(t,null),h(t,a),h(t,v),h(v,m),h(v,u),A(i,b,c),A(i,_,c),p.m(_,null)},p(i,[c]){i[1]?d?d.p(i,c):(d=ee(i),d.c(),d.m(t,a)):d&&(d.d(1),d=null),c&1&&P(u,i[0]),C===(C=S(i))&&p?p.p(i,c):(p.d(1),p=C(i),p&&(p.c(),p.m(_,null)))},i:L,o:L,d(i){i&&g(l),i&&g(t),d&&d.d(),i&&g(b),i&&g(_),p.d()}}}const Ne=!0;function oe(n,l){return l.speakers.map(t=>n.spec.speakers.find(e=>e.id===t).name).join(", ")}function ie(n,l){const t=n.spec.events.find(e=>e.id===l);if(!t)return null;switch(t.type){case"panel":t.color="bg-orange-500/20";break;case"talk":t.color="bg-custom-green/20";break;case"workshop":t.color="bg-custom-blue/20";break;case"campfire":t.color="bg-purple-500/20";break;case"lightning-series":t.color="bg-yellow-400/20";break;case"other":break;default:t.color="bg-gray-100"}return t}function we(n,l,t){let e,s;_e(n,pe,u=>t(1,s=u));let r=0;function a(u,b,_){let d=new Date(`${b}T09:00`);const S=new Date(`${b}T22:00`),C=[],p={};for(;me(d,S)===-1;){const i={};for(const c of _.spec.stages){if(p[c.id]>0){i[c.id]=null,p[c.id]--;continue}const o=u.schedule.find(k=>new Date(k.period.start).getTime()===new Date(d).getTime()&&k.stage===c.id);if(i[c.id]=o,o){const k=Math.floor((new Date(o.period.end).getTime()-new Date(o.period.start).getTime())/6e4/30);o.span=k,k>1&&(p[c.id]=k-1)}}C.push({title:J(d,"HH:mm"),stages:i}),d=new Date(d.getTime()+30*60*1e3)}return C}const v=u=>t(0,r=u),m=(u,b)=>`${b}=${Math.round(u.metrics[b]*1e3)/1e3}`;return n.$$.update=()=>{n.$$.dirty&3&&t(2,e=s?s.spec["schedule-candidates"][r]:null)},[r,s,e,a,v,m]}class Ve extends ce{constructor(l){super();fe(this,l,we,Ee,he,{})}}export{Ve as default,Ne as prerender};
