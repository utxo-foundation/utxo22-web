import{S as Zt,i as Jt,s as Yt,P as Wt,e as m,k as y,c as g,a as w,d as u,m as S,b as p,K as le,g as N,F as f,L as xt,M as el,N as tl,n as Y,o as z,p as W,q as $,E as Et,R as lt,t as M,T as st,h as B,j as Ie,J as ll,l as Me,w as ue,x as he,y as de,B as pe,G as De,U as nl,I as rt,H as at,V as il}from"../chunks/index-acdcee87.js";import{c as ot,b as cl,a as fl}from"../chunks/stores-77ce6fd0.js";import{A as Pe}from"../chunks/Avatar-5ae0a3d5.js";import{S as ul,L as hl}from"../chunks/Link-3573ed9f.js";import"../chunks/index-f786a58f.js";const dl=o=>({}),It=o=>({});function pl(o){let e;const l=o[9]["custom-tip"],t=Wt(l,o,o[8],It);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,s){t&&t.m(r,s),e=!0},p(r,s){t&&t.p&&(!e||s&256)&&xt(t,l,r,r[8],e?tl(l,r[8],s,dl):el(r[8]),It)},i(r){e||($(t,r),e=!0)},o(r){z(t,r),e=!1},d(r){t&&t.d(r)}}}function vl(o){let e;return{c(){e=m("div"),this.h()},l(l){e=g(l,"DIV",{class:!0,style:!0});var t=w(e);t.forEach(u),this.h()},h(){p(e,"class","default-tip svelte-uasnpl"),p(e,"style",o[6])},m(l,t){N(l,e,t),e.innerHTML=o[0]},p(l,t){t&1&&(e.innerHTML=l[0])},i:Et,o:Et,d(l){l&&u(e)}}}function _l(o){let e,l,t,r,s,c,_;const k=o[9].default,n=Wt(k,o,o[8],null),E=[vl,pl],i=[];function v(a,D){return a[0]?0:1}return s=v(o),c=i[s]=E[s](o),{c(){e=m("div"),l=m("span"),n&&n.c(),t=y(),r=m("div"),c.c(),this.h()},l(a){e=g(a,"DIV",{class:!0});var D=w(e);l=g(D,"SPAN",{class:!0});var j=w(l);n&&n.l(j),j.forEach(u),t=S(D),r=g(D,"DIV",{class:!0});var d=w(r);c.l(d),d.forEach(u),D.forEach(u),this.h()},h(){p(l,"class","tooltip-slot svelte-uasnpl"),p(r,"class","tooltip svelte-uasnpl"),le(r,"active",o[5]),le(r,"left",o[4]),le(r,"right",o[2]),le(r,"bottom",o[3]),le(r,"top",o[1]),p(e,"class","tooltip-wrapper svelte-uasnpl")},m(a,D){N(a,e,D),f(e,l),n&&n.m(l,null),f(e,t),f(e,r),i[s].m(r,null),_=!0},p(a,[D]){n&&n.p&&(!_||D&256)&&xt(n,k,a,a[8],_?tl(k,a[8],D,null):el(a[8]),null);let j=s;s=v(a),s===j?i[s].p(a,D):(Y(),z(i[j],1,1,()=>{i[j]=null}),W(),c=i[s],c?c.p(a,D):(c=i[s]=E[s](a),c.c()),$(c,1),c.m(r,null)),D&32&&le(r,"active",a[5]),D&16&&le(r,"left",a[4]),D&4&&le(r,"right",a[2]),D&8&&le(r,"bottom",a[3]),D&2&&le(r,"top",a[1])},i(a){_||($(n,a),$(c),_=!0)},o(a){z(n,a),z(c),_=!1},d(a){a&&u(e),n&&n.d(a),i[s].d()}}}function ml(o,e,l){let{$$slots:t={},$$scope:r}=e,{tip:s=""}=e,{top:c=!1}=e,{right:_=!1}=e,{bottom:k=!1}=e,{left:n=!1}=e,{active:E=!1}=e,{color:i="#393F67"}=e,v=`background-color: ${i};`;return o.$$set=a=>{"tip"in a&&l(0,s=a.tip),"top"in a&&l(1,c=a.top),"right"in a&&l(2,_=a.right),"bottom"in a&&l(3,k=a.bottom),"left"in a&&l(4,n=a.left),"active"in a&&l(5,E=a.active),"color"in a&&l(7,i=a.color),"$$scope"in a&&l(8,r=a.$$scope)},[s,c,_,k,n,E,v,i,r,t]}class sl extends Zt{constructor(e){super();Jt(this,e,ml,_l,Yt,{tip:0,top:1,right:2,bottom:3,left:4,active:5,color:7})}}function Dt(o,e,l){const t=o.slice();return t[11]=e[l],t}function Vt(o,e,l){const t=o.slice();return t[14]=e[l],t}function $t(o,e,l){const t=o.slice();return t[14]=e[l],t}function Tt(o,e,l){const t=o.slice();return t[14]=e[l],t}function jt(o,e,l){const t=o.slice();return t[21]=e[l],t}function yt(o,e,l){const t=o.slice();return t[21]=e[l],t}function St(o,e,l){const t=o.slice();return t[26]=e[l],t}function zt(o){let e,l,t,r,s,c,_,k,n=o[2]&&Nt(o),E=o[1],i=[];for(let d=0;d<E.length;d+=1)i[d]=Bt(St(o,E,d));let v=o[0].spec.speakers,a=[];for(let d=0;d<v.length;d+=1)a[d]=Lt(yt(o,v,d));const D=d=>z(a[d],1,1,()=>{a[d]=null});let j=o[3].hpTrack==="top"&&Ot(o);return{c(){n&&n.c(),e=y(),l=m("section"),t=m("div");for(let d=0;d<i.length;d+=1)i[d].c();r=y(),s=m("section"),c=m("div");for(let d=0;d<a.length;d+=1)a[d].c();_=y(),j&&j.c(),this.h()},l(d){n&&n.l(d),e=S(d),l=g(d,"SECTION",{class:!0});var T=w(l);t=g(T,"DIV",{class:!0});var I=w(t);for(let C=0;C<i.length;C+=1)i[C].l(I);I.forEach(u),T.forEach(u),r=S(d),s=g(d,"SECTION",{class:!0});var H=w(s);c=g(H,"DIV",{class:!0});var q=w(c);for(let C=0;C<a.length;C+=1)a[C].l(q);q.forEach(u),_=S(H),j&&j.l(H),H.forEach(u),this.h()},h(){p(t,"class","flex flex-wrap gap-1.5 sm:gap-3 text-xs uppercase font-bold text-blue-web justify-left"),p(l,"class","relative mx-auto pt-6 sm:pt-10 px-6 max-w-6xl"),p(c,"class","flex flex-wrap gap-6 mt-6 sm:mt-14 justify-center"),p(s,"class","pb-6 sm:-pb-10 mx-auto sm:px-2 lg:px-6 2xl:px-16")},m(d,T){n&&n.m(d,T),N(d,e,T),N(d,l,T),f(l,t);for(let I=0;I<i.length;I+=1)i[I].m(t,null);N(d,r,T),N(d,s,T),f(s,c);for(let I=0;I<a.length;I+=1)a[I].m(c,null);f(s,_),j&&j.m(s,null),k=!0},p(d,T){if(d[2]?n?n.p(d,T):(n=Nt(d),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),T&43){E=d[1];let I;for(I=0;I<E.length;I+=1){const H=St(d,E,I);i[I]?i[I].p(H,T):(i[I]=Bt(H),i[I].c(),i[I].m(t,null))}for(;I<i.length;I+=1)i[I].d(1);i.length=E.length}if(T&9){v=d[0].spec.speakers;let I;for(I=0;I<v.length;I+=1){const H=yt(d,v,I);a[I]?(a[I].p(H,T),$(a[I],1)):(a[I]=Lt(H),a[I].c(),$(a[I],1),a[I].m(c,null))}for(Y(),I=v.length;I<a.length;I+=1)D(I);W()}d[3].hpTrack==="top"?j?(j.p(d,T),T&8&&$(j,1)):(j=Ot(d),j.c(),$(j,1),j.m(s,null)):j&&(Y(),z(j,1,1,()=>{j=null}),W())},i(d){if(!k){for(let T=0;T<v.length;T+=1)$(a[T]);$(j),k=!0}},o(d){a=a.filter(Boolean);for(let T=0;T<a.length;T+=1)z(a[T]);z(j),k=!1},d(d){n&&n.d(d),d&&u(e),d&&u(l),De(i,d),d&&u(r),d&&u(s),De(a,d),j&&j.d()}}}function Nt(o){let e,l,t,r,s,c=nt("fa-solid fa-user-check")+"",_,k,n=o[0].spec.speakers.length+"",E,i,v,a,D,j=nt("fa-regular fa-calendar")+"",d,T,I=o[0].spec.events.length+"",H,q,C,Z,oe,ne=nt("fa-solid fa-users")+"",ie,se,U=o[2].global.tickets+"",ce,ve;return{c(){e=m("section"),l=m("div"),t=m("div"),r=m("div"),s=new lt,_=y(),k=m("b"),E=M(n),i=M(" p\u0159edn\xE1\u0161ej\xEDc\xEDch"),v=y(),a=m("div"),D=new lt,d=y(),T=m("b"),H=M(I),q=M(" ud\xE1lost\xED"),C=y(),Z=m("div"),oe=new lt,ie=y(),se=m("b"),ce=M(U),ve=M(" n\xE1vst\u011Bvn\xEDk\u016F"),this.h()},l(R){e=g(R,"SECTION",{class:!0});var F=w(e);l=g(F,"DIV",{class:!0});var Ve=w(l);t=g(Ve,"DIV",{class:!0});var te=w(t);r=g(te,"DIV",{});var X=w(r);s=st(X),_=S(X),k=g(X,"B",{});var $e=w(k);E=B($e,n),$e.forEach(u),i=B(X," p\u0159edn\xE1\u0161ej\xEDc\xEDch"),X.forEach(u),v=S(te),a=g(te,"DIV",{});var re=w(a);D=st(re),d=S(re),T=g(re,"B",{});var J=w(T);H=B(J,I),J.forEach(u),q=B(re," ud\xE1lost\xED"),re.forEach(u),C=S(te),Z=g(te,"DIV",{});var ae=w(Z);oe=st(ae),ie=S(ae),se=g(ae,"B",{});var Te=w(se);ce=B(Te,U),Te.forEach(u),ve=B(ae," n\xE1vst\u011Bvn\xEDk\u016F"),ae.forEach(u),te.forEach(u),Ve.forEach(u),F.forEach(u),this.h()},h(){s.a=_,D.a=d,oe.a=ie,p(t,"class","text-center text-xl sm:text-xl lg:text-2xl text-blue-web px-8 flex flex-wrap gap-4 lg:gap-8 justify-center"),p(l,"class","pb-4 pt-4 lg:pt-4 lg:pb-4 mx-auto sm:px-2 lg:px-6 2xl:px-16"),p(e,"class","bg-blue-web-light")},m(R,F){N(R,e,F),f(e,l),f(l,t),f(t,r),s.m(c,r),f(r,_),f(r,k),f(k,E),f(r,i),f(t,v),f(t,a),D.m(j,a),f(a,d),f(a,T),f(T,H),f(a,q),f(t,C),f(t,Z),oe.m(ne,Z),f(Z,ie),f(Z,se),f(se,ce),f(Z,ve)},p(R,F){F&1&&n!==(n=R[0].spec.speakers.length+"")&&Ie(E,n),F&1&&I!==(I=R[0].spec.events.length+"")&&Ie(H,I),F&4&&U!==(U=R[2].global.tickets+"")&&Ie(ce,U)},d(R){R&&u(e)}}}function Mt(o){let e,l=o[0].spec.speakers.length+"",t,r;return{c(){e=M("("),t=M(l),r=M(")")},l(s){e=B(s,"("),t=B(s,l),r=B(s,")")},m(s,c){N(s,e,c),N(s,t,c),N(s,r,c)},p(s,c){c&1&&l!==(l=s[0].spec.speakers.length+"")&&Ie(t,l)},d(s){s&&u(e),s&&u(t),s&&u(r)}}}function Bt(o){let e,l=(o[26].shortname||o[26].name)+"",t,r,s,c,_,k,n=!o[26].id&&Mt(o);return{c(){e=m("div"),t=M(l),r=y(),n&&n.c(),s=y(),this.h()},l(E){e=g(E,"DIV",{class:!0});var i=w(e);t=B(i,l),r=S(i),n&&n.l(i),s=S(i),i.forEach(u),this.h()},h(){p(e,"class",c="py-1.5 sm:py-2 px-2.5 sm:px-8 rounded-full shadow border border-solid "+(o[3].hpTrack===o[26].id?"bg-utxo-gradient border-0 text-white":"border-blue-web hover:bg-blue-web hover:text-white hover:border-transparent cursor-pointer"))},m(E,i){N(E,e,i),f(e,t),f(e,r),n&&n.m(e,null),f(e,s),_||(k=ll(e,"click",function(){il(o[5](o[26].id))&&o[5](o[26].id).apply(this,arguments)}),_=!0)},p(E,i){o=E,i&2&&l!==(l=(o[26].shortname||o[26].name)+"")&&Ie(t,l),o[26].id?n&&(n.d(1),n=null):n?n.p(o,i):(n=Mt(o),n.c(),n.m(e,s)),i&10&&c!==(c="py-1.5 sm:py-2 px-2.5 sm:px-8 rounded-full shadow border border-solid "+(o[3].hpTrack===o[26].id?"bg-utxo-gradient border-0 text-white":"border-blue-web hover:bg-blue-web hover:text-white hover:border-transparent cursor-pointer"))&&p(e,"class",c)},d(E){E&&u(e),n&&n.d(),_=!1,k()}}}function Gt(o){let e=!o[3].hpTrack||o[21].tracks&&o[21].tracks.includes(o[3].hpTrack)||o[3].hpTrack==="top",l,t,r=e&&Pt(o);return{c(){r&&r.c(),l=Me()},l(s){r&&r.l(s),l=Me()},m(s,c){r&&r.m(s,c),N(s,l,c),t=!0},p(s,c){c&9&&(e=!s[3].hpTrack||s[21].tracks&&s[21].tracks.includes(s[3].hpTrack)||s[3].hpTrack==="top"),e?r?(r.p(s,c),c&9&&$(r,1)):(r=Pt(s),r.c(),$(r,1),r.m(l.parentNode,l)):r&&(Y(),z(r,1,1,()=>{r=null}),W())},i(s){t||($(r),t=!0)},o(s){z(r),t=!1},d(s){r&&r.d(s),s&&u(l)}}}function Pt(o){let e,l;return e=new Pe({props:{speaker:o[21]}}),{c(){ue(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,r){de(e,t,r),l=!0},p(t,r){const s={};r&1&&(s.speaker=t[21]),e.$set(s)},i(t){l||($(e.$$.fragment,t),l=!0)},o(t){z(e.$$.fragment,t),l=!1},d(t){pe(e,t)}}}function Lt(o){let e,l,t=(o[3].hpTrack==="top"&&o[21].lead===!0||o[3].hpTrack!=="top")&&Gt(o);return{c(){t&&t.c(),e=Me()},l(r){t&&t.l(r),e=Me()},m(r,s){t&&t.m(r,s),N(r,e,s),l=!0},p(r,s){r[3].hpTrack==="top"&&r[21].lead===!0||r[3].hpTrack!=="top"?t?(t.p(r,s),s&9&&$(t,1)):(t=Gt(r),t.c(),$(t,1),t.m(e.parentNode,e)):t&&(Y(),z(t,1,1,()=>{t=null}),W())},i(r){l||($(t),l=!0)},o(r){z(t),l=!1},d(r){t&&t.d(r),r&&u(e)}}}function Ot(o){let e,l,t,r,s,c,_,k=o[0].spec.speakers.filter(Ft).sort(o[9]).slice(0,27),n=[];for(let i=0;i<k.length;i+=1)n[i]=At(jt(o,k,i));const E=i=>z(n[i],1,1,()=>{n[i]=null});return{c(){e=m("div"),l=m("div"),t=y(),r=m("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){e=g(i,"DIV",{class:!0});var v=w(e);l=g(v,"DIV",{class:!0}),w(l).forEach(u),t=S(v),r=g(v,"DIV",{class:!0});var a=w(r);for(let D=0;D<n.length;D+=1)n[D].l(a);a.forEach(u),v.forEach(u),this.h()},h(){p(l,"class","absolute inset-0 bg-gradient-to-b from-transparent to-white flex"),p(r,"class","flex flex-wrap gap-3 mt-10 justify-center"),p(e,"class","relative cursor-pointer mb-10 max-w-screen-2xl mx-auto")},m(i,v){N(i,e,v),f(e,l),f(e,t),f(e,r);for(let a=0;a<n.length;a+=1)n[a].m(r,null);s=!0,c||(_=ll(l,"click",o[6]),c=!0)},p(i,v){if(v&1){k=i[0].spec.speakers.filter(Ft).sort(i[9]).slice(0,27);let a;for(a=0;a<k.length;a+=1){const D=jt(i,k,a);n[a]?(n[a].p(D,v),$(n[a],1)):(n[a]=At(D),n[a].c(),$(n[a],1),n[a].m(r,null))}for(Y(),a=k.length;a<n.length;a+=1)E(a);W()}},i(i){if(!s){for(let v=0;v<k.length;v+=1)$(n[v]);s=!0}},o(i){n=n.filter(Boolean);for(let v=0;v<n.length;v+=1)z(n[v]);s=!1},d(i){i&&u(e),De(n,i),c=!1,_()}}}function At(o){let e,l;return e=new Pe({props:{speaker:o[21],size:"small"}}),{c(){ue(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,r){de(e,t,r),l=!0},p(t,r){const s={};r&1&&(s.speaker=t[21]),e.$set(s)},i(t){l||($(e.$$.fragment,t),l=!0)},o(t){z(e.$$.fragment,t),l=!1},d(t){pe(e,t)}}}function Ht(o){let e,l,t,r,s,c,_=o[14].name+"",k,n,E;return t=new Pe({props:{speaker:o[14],col:"partners",size:"custom",customSize:"w-28 shadow-xl"}}),{c(){e=m("div"),l=m("a"),ue(t.$$.fragment),s=y(),c=m("div"),k=M(_),n=y(),this.h()},l(i){e=g(i,"DIV",{class:!0});var v=w(e);l=g(v,"A",{href:!0,target:!0});var a=w(l);he(t.$$.fragment,a),a.forEach(u),s=S(v),c=g(v,"DIV",{class:!0});var D=w(c);k=B(D,_),D.forEach(u),n=S(v),v.forEach(u),this.h()},h(){p(l,"href",r=o[14].web.url),p(l,"target","_blank"),p(c,"class","text-center text-sm uppercase font-bold"),p(e,"class","w-32")},m(i,v){N(i,e,v),f(e,l),de(t,l,null),f(e,s),f(e,c),f(c,k),f(e,n),E=!0},p(i,v){const a={};v&1&&(a.speaker=i[14]),t.$set(a),(!E||v&1&&r!==(r=i[14].web.url))&&p(l,"href",r),(!E||v&1)&&_!==(_=i[14].name+"")&&Ie(k,_)},i(i){E||($(t.$$.fragment,i),E=!0)},o(i){z(t.$$.fragment,i),E=!1},d(i){i&&u(e),pe(t)}}}function gl(o){let e,l,t,r;return l=new Pe({props:{speaker:o[14],col:"partners",size:"custom",customSize:"w-20 shadow-lg"}}),{c(){e=m("a"),ue(l.$$.fragment),this.h()},l(s){e=g(s,"A",{href:!0,target:!0});var c=w(e);he(l.$$.fragment,c),c.forEach(u),this.h()},h(){p(e,"href",t=o[14].web?o[14].web.url:o[14].twitter?`https://twitter.com/${o[14].twitter}`:""),p(e,"target","_blank")},m(s,c){N(s,e,c),de(l,e,null),r=!0},p(s,c){const _={};c&1&&(_.speaker=s[14]),l.$set(_),(!r||c&1&&t!==(t=s[14].web?s[14].web.url:s[14].twitter?`https://twitter.com/${s[14].twitter}`:""))&&p(e,"href",t)},i(s){r||($(l.$$.fragment,s),r=!0)},o(s){z(l.$$.fragment,s),r=!1},d(s){s&&u(e),pe(l)}}}function qt(o){let e,l,t,r;return l=new sl({props:{tip:o[14].name,bottom:"true",$$slots:{default:[gl]},$$scope:{ctx:o}}}),{c(){e=m("div"),ue(l.$$.fragment),t=y()},l(s){e=g(s,"DIV",{});var c=w(e);he(l.$$.fragment,c),t=S(c),c.forEach(u)},m(s,c){N(s,e,c),de(l,e,null),f(e,t),r=!0},p(s,c){const _={};c&1&&(_.tip=s[14].name),c&536870913&&(_.$$scope={dirty:c,ctx:s}),l.$set(_)},i(s){r||($(l.$$.fragment,s),r=!0)},o(s){z(l.$$.fragment,s),r=!1},d(s){s&&u(e),pe(l)}}}function bl(o){let e,l,t,r;return l=new Pe({props:{speaker:o[14],col:"partners",size:"custom",customSize:"w-16 shadow-lg"}}),{c(){e=m("a"),ue(l.$$.fragment),this.h()},l(s){e=g(s,"A",{href:!0,target:!0});var c=w(e);he(l.$$.fragment,c),c.forEach(u),this.h()},h(){p(e,"href",t=o[14].web?o[14].web.url:o[14].twitter?`https://twitter.com/${o[14].twitter}`:""),p(e,"target","_blank")},m(s,c){N(s,e,c),de(l,e,null),r=!0},p(s,c){const _={};c&1&&(_.speaker=s[14]),l.$set(_),(!r||c&1&&t!==(t=s[14].web?s[14].web.url:s[14].twitter?`https://twitter.com/${s[14].twitter}`:""))&&p(e,"href",t)},i(s){r||($(l.$$.fragment,s),r=!0)},o(s){z(l.$$.fragment,s),r=!1},d(s){s&&u(e),pe(l)}}}function Ct(o){let e,l,t,r;return l=new sl({props:{tip:o[14].name,bottom:"true",$$slots:{default:[bl]},$$scope:{ctx:o}}}),{c(){e=m("div"),ue(l.$$.fragment),t=y()},l(s){e=g(s,"DIV",{});var c=w(e);he(l.$$.fragment,c),t=S(c),c.forEach(u)},m(s,c){N(s,e,c),de(l,e,null),f(e,t),r=!0},p(s,c){const _={};c&1&&(_.tip=s[14].name),c&536870913&&(_.$$scope={dirty:c,ctx:s}),l.$set(_)},i(s){r||($(l.$$.fragment,s),r=!0)},o(s){z(l.$$.fragment,s),r=!1},d(s){s&&u(e),pe(l)}}}function Rt(o){let e,l,t,r,s,c,_,k=o[0].spec.faqs,n=[];for(let i=0;i<k.length;i+=1)n[i]=Kt(Dt(o,k,i));const E=i=>z(n[i],1,1,()=>{n[i]=null});return{c(){e=m("section"),l=m("div"),t=m("h2"),r=M("\u010Casto kladen\xE9 dotazy (FAQ)"),s=y(),c=m("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){e=g(i,"SECTION",{class:!0});var v=w(e);l=g(v,"DIV",{class:!0});var a=w(l);t=g(a,"H2",{class:!0,id:!0});var D=w(t);r=B(D,"\u010Casto kladen\xE9 dotazy (FAQ)"),D.forEach(u),s=S(a),c=g(a,"DIV",{class:!0});var j=w(c);for(let d=0;d<n.length;d+=1)n[d].l(j);j.forEach(u),a.forEach(u),v.forEach(u),this.h()},h(){p(t,"class","uppercase pt-5 text-center"),p(t,"id","faq"),p(c,"class","md:columns-2 columns-1 mt-8 h-auto"),p(l,"class","text-blue-web"),p(e,"class","relative mx-auto py-10 px-6 max-w-6xl")},m(i,v){N(i,e,v),f(e,l),f(l,t),f(t,r),f(l,s),f(l,c);for(let a=0;a<n.length;a+=1)n[a].m(c,null);_=!0},p(i,v){if(v&17){k=i[0].spec.faqs;let a;for(a=0;a<k.length;a+=1){const D=Dt(i,k,a);n[a]?(n[a].p(D,v),$(n[a],1)):(n[a]=Kt(D),n[a].c(),$(n[a],1),n[a].m(c,null))}for(Y(),a=k.length;a<n.length;a+=1)E(a);W()}},i(i){if(!_){for(let v=0;v<k.length;v+=1)$(n[v]);_=!0}},o(i){n=n.filter(Boolean);for(let v=0;v<n.length;v+=1)z(n[v]);_=!1},d(i){i&&u(e),De(n,i)}}}function Kt(o){let e,l,t=o[11].question+"",r,s,c,_,k;return c=new ul({props:{source:o[11].answer,renderers:o[4]}}),{c(){e=m("div"),l=m("div"),r=M(t),s=y(),ue(c.$$.fragment),_=y(),this.h()},l(n){e=g(n,"DIV",{class:!0});var E=w(e);l=g(E,"DIV",{class:!0});var i=w(l);r=B(i,t),i.forEach(u),s=S(E),he(c.$$.fragment,E),_=S(E),E.forEach(u),this.h()},h(){p(l,"class","mb-4 font-bold"),p(e,"class","mb-5 break-inside-avoid-column bg-blue-100/60 rounded-xl px-8 py-6 text-left transition-all box-shadow-light overflow-visible")},m(n,E){N(n,e,E),f(e,l),f(l,r),f(e,s),de(c,e,null),f(e,_),k=!0},p(n,E){(!k||E&1)&&t!==(t=n[11].question+"")&&Ie(r,t);const i={};E&1&&(i.source=n[11].answer),c.$set(i)},i(n){k||($(c.$$.fragment,n),k=!0)},o(n){z(c.$$.fragment,n),k=!1},d(n){n&&u(e),pe(c)}}}function kl(o){let e,l,t,r,s,c,_,k,n,E,i,v,a,D,j,d,T,I,H,q,C,Z,oe,ne,ie,se,U,ce,ve,R,F,Ve,te,X,$e,re,J,ae,Te,Ke,Fe,Le,_e,K,je,Ue,Xe,ye,Qe,Ze,me,Je,Se,Ye,We,ge,xe,ze,et,tt,be,Oe,Ne,Be;document.title=e="UTXO.22 "+(o[0]?"- "+o[0].description:"");let O=o[0]&&zt(o),ke=o[0].spec.partners.filter(Ut),G=[];for(let h=0;h<ke.length;h+=1)G[h]=Ht(Tt(o,ke,h));const rl=h=>z(G[h],1,1,()=>{G[h]=null});let we=o[0].spec.partners.filter(Xt),P=[];for(let h=0;h<we.length;h+=1)P[h]=qt($t(o,we,h));const al=h=>z(P[h],1,1,()=>{P[h]=null});let Ee=o[0].spec.partners.filter(Qt),L=[];for(let h=0;h<Ee.length;h+=1)L[h]=Ct(Vt(o,Ee,h));const ol=h=>z(L[h],1,1,()=>{L[h]=null});let A=o[0]&&Rt(o);return{c(){l=y(),O&&O.c(),t=y(),r=m("section"),s=m("div"),c=m("div"),_=m("div"),k=m("img"),E=y(),i=m("div"),v=m("div"),a=m("img"),j=y(),d=m("div"),T=m("img"),H=y(),q=m("div"),C=m("div"),Z=M("M\xEDsto"),oe=y(),ne=m("div"),ie=M("Gabriel Loci"),se=y(),U=m("div"),ce=M("Hole\u010Dkova 106/10, 150 00 Praha 5 - Sm\xEDchov \u{1F1E8}\u{1F1FF}"),ve=m("br"),R=m("span"),F=m("a"),Ve=M("Google Maps"),te=M(`,
            `),X=m("a"),$e=M("Mapy.cz"),re=y(),J=m("div"),ae=M(`Benediktinky. Kulturn\xED pam\xE1tka. \u010Cesk\xE1 Po\u0161ta. Po\u0161tovn\xED muzeum. Na prvn\xED
          pohled nesouvisej\xEDc\xED n\xE1zvy, kter\xE9 jsou ale neodmyslitelnou sou\u010D\xE1st\xED
          unik\xE1tn\xEDho komplexu Gabriel Loci na pra\u017Esk\xE9m Sm\xEDchov\u011B doslova p\xE1r
          minut od centra. Na konci 19.stolet\xED v kl\xE1\u0161te\u0159e s\xEDdlily \u0159eholnice,
          \u017Eensk\xE9 opatstv\xED \u0159\xE1du benediktinek beuronsk\xE9 kongregace. Pozd\u011Bji
          prostory spravovalo \u010Deskoslovensk\xE9 Ministerstvo po\u0161t a telegraf\u016F. Dnes
          komplex vyu\u017E\xEDvaj\xED hlavn\u011B nat\xE1\u010Dec\xED studia jako HBO, Netflix nebo i \u010CT.
          No a my! \u{1F4AA}`),Te=m("br"),Ke=m("br"),Fe=M(`
          Za\u017Eijte mysteri\xF3zn\xED atmosf\xE9ru komplexu na 1.ro\u010Dn\xEDku konference UTXO.22.
          \u010C\xE1st after-party si u\u017Eijete doslova v pitevn\u011B ze seri\xE1lu Devades\xE1tky \u{1F44C}\u{1F600}`),Le=y(),_e=m("section"),K=m("div"),je=m("div"),Ue=M("Partne\u0159i"),Xe=y(),ye=m("div"),Qe=M("Sponzo\u0159i"),Ze=y(),me=m("div");for(let h=0;h<G.length;h+=1)G[h].c();Je=y(),Se=m("div"),Ye=M("Komunity"),We=y(),ge=m("div");for(let h=0;h<P.length;h+=1)P[h].c();xe=y(),ze=m("div"),et=M("Medi\xE1ln\xED partne\u0159i"),tt=y(),be=m("div");for(let h=0;h<L.length;h+=1)L[h].c();Oe=y(),A&&A.c(),Ne=Me(),this.h()},l(h){nl('[data-svelte="svelte-d9wawy"]',document.head).forEach(u),l=S(h),O&&O.l(h),t=S(h),r=g(h,"SECTION",{class:!0});var b=w(r);s=g(b,"DIV",{class:!0});var x=w(s);c=g(x,"DIV",{class:!0});var Ae=w(c);_=g(Ae,"DIV",{class:!0});var He=w(_);k=g(He,"IMG",{src:!0,class:!0,alt:!0}),E=S(He),i=g(He,"DIV",{class:!0});var qe=w(i);v=g(qe,"DIV",{class:!0});var it=w(v);a=g(it,"IMG",{src:!0,class:!0,alt:!0}),it.forEach(u),j=S(qe),d=g(qe,"DIV",{class:!0});var ct=w(d);T=g(ct,"IMG",{src:!0,class:!0,alt:!0}),ct.forEach(u),qe.forEach(u),He.forEach(u),H=S(Ae),q=g(Ae,"DIV",{class:!0});var fe=w(q);C=g(fe,"DIV",{class:!0});var ft=w(C);Z=B(ft,"M\xEDsto"),ft.forEach(u),oe=S(fe),ne=g(fe,"DIV",{class:!0});var ut=w(ne);ie=B(ut,"Gabriel Loci"),ut.forEach(u),se=S(fe),U=g(fe,"DIV",{class:!0});var Ce=w(U);ce=B(Ce,"Hole\u010Dkova 106/10, 150 00 Praha 5 - Sm\xEDchov \u{1F1E8}\u{1F1FF}"),ve=g(Ce,"BR",{}),R=g(Ce,"SPAN",{class:!0});var Re=w(R);F=g(Re,"A",{href:!0,class:!0,target:!0});var ht=w(F);Ve=B(ht,"Google Maps"),ht.forEach(u),te=B(Re,`,
            `),X=g(Re,"A",{href:!0,class:!0,target:!0});var dt=w(X);$e=B(dt,"Mapy.cz"),dt.forEach(u),Re.forEach(u),Ce.forEach(u),re=S(fe),J=g(fe,"DIV",{class:!0});var Ge=w(J);ae=B(Ge,`Benediktinky. Kulturn\xED pam\xE1tka. \u010Cesk\xE1 Po\u0161ta. Po\u0161tovn\xED muzeum. Na prvn\xED
          pohled nesouvisej\xEDc\xED n\xE1zvy, kter\xE9 jsou ale neodmyslitelnou sou\u010D\xE1st\xED
          unik\xE1tn\xEDho komplexu Gabriel Loci na pra\u017Esk\xE9m Sm\xEDchov\u011B doslova p\xE1r
          minut od centra. Na konci 19.stolet\xED v kl\xE1\u0161te\u0159e s\xEDdlily \u0159eholnice,
          \u017Eensk\xE9 opatstv\xED \u0159\xE1du benediktinek beuronsk\xE9 kongregace. Pozd\u011Bji
          prostory spravovalo \u010Deskoslovensk\xE9 Ministerstvo po\u0161t a telegraf\u016F. Dnes
          komplex vyu\u017E\xEDvaj\xED hlavn\u011B nat\xE1\u010Dec\xED studia jako HBO, Netflix nebo i \u010CT.
          No a my! \u{1F4AA}`),Te=g(Ge,"BR",{}),Ke=g(Ge,"BR",{}),Fe=B(Ge,`
          Za\u017Eijte mysteri\xF3zn\xED atmosf\xE9ru komplexu na 1.ro\u010Dn\xEDku konference UTXO.22.
          \u010C\xE1st after-party si u\u017Eijete doslova v pitevn\u011B ze seri\xE1lu Devades\xE1tky \u{1F44C}\u{1F600}`),Ge.forEach(u),fe.forEach(u),Ae.forEach(u),x.forEach(u),b.forEach(u),Le=S(h),_e=g(h,"SECTION",{class:!0});var pt=w(_e);K=g(pt,"DIV",{class:!0});var Q=w(K);je=g(Q,"DIV",{class:!0});var vt=w(je);Ue=B(vt,"Partne\u0159i"),vt.forEach(u),Xe=S(Q),ye=g(Q,"DIV",{class:!0});var _t=w(ye);Qe=B(_t,"Sponzo\u0159i"),_t.forEach(u),Ze=S(Q),me=g(Q,"DIV",{class:!0});var mt=w(me);for(let ee=0;ee<G.length;ee+=1)G[ee].l(mt);mt.forEach(u),Je=S(Q),Se=g(Q,"DIV",{class:!0});var gt=w(Se);Ye=B(gt,"Komunity"),gt.forEach(u),We=S(Q),ge=g(Q,"DIV",{class:!0});var bt=w(ge);for(let ee=0;ee<P.length;ee+=1)P[ee].l(bt);bt.forEach(u),xe=S(Q),ze=g(Q,"DIV",{class:!0});var kt=w(ze);et=B(kt,"Medi\xE1ln\xED partne\u0159i"),kt.forEach(u),tt=S(Q),be=g(Q,"DIV",{class:!0});var wt=w(be);for(let ee=0;ee<L.length;ee+=1)L[ee].l(wt);wt.forEach(u),Q.forEach(u),pt.forEach(u),Oe=S(h),A&&A.l(h),Ne=Me(),this.h()},h(){rt(k.src,n="/photos/gabriel-loci.jpeg")||p(k,"src",n),p(k,"class","flex rounded-xl shadow-xl"),p(k,"alt","Gabriel Loci"),rt(a.src,D="/photos/rajska-zahrada.jpeg")||p(a,"src",D),p(a,"class","rounded-lg shadow-lg"),p(a,"alt","Gabriel Loci - Rajsk\xE1 zahrada"),p(v,"class","w-1/2"),rt(T.src,I="/photos/knihovna.jpeg")||p(T,"src",I),p(T,"class","rounded-lg shadow-lg"),p(T,"alt","Gabriel Loci - Knihovna"),p(d,"class","w-1/2"),p(i,"class","flex mt-3 gap-3"),p(_,"class","block flex-1"),p(C,"class","uppercase"),p(ne,"class","uppercase mt-3 text-4xl font-bold"),p(F,"href","https://goo.gl/maps/u1aY4RxXMgcm889V7"),p(F,"class","underline hover:no-underline"),p(F,"target","_blank"),p(X,"href","https://mapy.cz/s/cuvetubafo"),p(X,"class","underline hover:no-underline"),p(X,"target","_blank"),p(R,"class","font-normal"),p(U,"class","mt-4 font-bold"),p(J,"class","mt-4"),p(q,"class","text-white md:w-1/2 md:pt-0 pt-6"),p(c,"class","py-6 md:py-10 md:flex gap-12"),p(s,"class","relative mx-auto py-6 px-6 max-w-6xl"),p(r,"class","bg-utxo-gradient"),p(je,"class","text-2xl uppercase font-bold text-center"),p(ye,"class","mt-6 text-center"),p(me,"class","mt-6 flex flex-wrap gap-8 justify-center"),p(Se,"class","mt-10 text-center"),p(ge,"class","mt-6 flex flex-wrap gap-6 justify-center"),p(ze,"class","mt-10 text-center"),p(be,"class","mt-6 flex flex-wrap gap-4 justify-center"),p(K,"class","text-blue-web lg:mt-10"),p(_e,"class","mx-auto py-10 px-6 max-w-auto overflow-hidden")},m(h,V){N(h,l,V),O&&O.m(h,V),N(h,t,V),N(h,r,V),f(r,s),f(s,c),f(c,_),f(_,k),f(_,E),f(_,i),f(i,v),f(v,a),f(i,j),f(i,d),f(d,T),f(c,H),f(c,q),f(q,C),f(C,Z),f(q,oe),f(q,ne),f(ne,ie),f(q,se),f(q,U),f(U,ce),f(U,ve),f(U,R),f(R,F),f(F,Ve),f(R,te),f(R,X),f(X,$e),f(q,re),f(q,J),f(J,ae),f(J,Te),f(J,Ke),f(J,Fe),N(h,Le,V),N(h,_e,V),f(_e,K),f(K,je),f(je,Ue),f(K,Xe),f(K,ye),f(ye,Qe),f(K,Ze),f(K,me);for(let b=0;b<G.length;b+=1)G[b].m(me,null);f(K,Je),f(K,Se),f(Se,Ye),f(K,We),f(K,ge);for(let b=0;b<P.length;b+=1)P[b].m(ge,null);f(K,xe),f(K,ze),f(ze,et),f(K,tt),f(K,be);for(let b=0;b<L.length;b+=1)L[b].m(be,null);N(h,Oe,V),A&&A.m(h,V),N(h,Ne,V),Be=!0},p(h,[V]){if((!Be||V&1)&&e!==(e="UTXO.22 "+(h[0]?"- "+h[0].description:""))&&(document.title=e),h[0]?O?(O.p(h,V),V&1&&$(O,1)):(O=zt(h),O.c(),$(O,1),O.m(t.parentNode,t)):O&&(Y(),z(O,1,1,()=>{O=null}),W()),V&1){ke=h[0].spec.partners.filter(Ut);let b;for(b=0;b<ke.length;b+=1){const x=Tt(h,ke,b);G[b]?(G[b].p(x,V),$(G[b],1)):(G[b]=Ht(x),G[b].c(),$(G[b],1),G[b].m(me,null))}for(Y(),b=ke.length;b<G.length;b+=1)rl(b);W()}if(V&1){we=h[0].spec.partners.filter(Xt);let b;for(b=0;b<we.length;b+=1){const x=$t(h,we,b);P[b]?(P[b].p(x,V),$(P[b],1)):(P[b]=qt(x),P[b].c(),$(P[b],1),P[b].m(ge,null))}for(Y(),b=we.length;b<P.length;b+=1)al(b);W()}if(V&1){Ee=h[0].spec.partners.filter(Qt);let b;for(b=0;b<Ee.length;b+=1){const x=Vt(h,Ee,b);L[b]?(L[b].p(x,V),$(L[b],1)):(L[b]=Ct(x),L[b].c(),$(L[b],1),L[b].m(be,null))}for(Y(),b=Ee.length;b<L.length;b+=1)ol(b);W()}h[0]?A?(A.p(h,V),V&1&&$(A,1)):(A=Rt(h),A.c(),$(A,1),A.m(Ne.parentNode,Ne)):A&&(Y(),z(A,1,1,()=>{A=null}),W())},i(h){if(!Be){$(O);for(let V=0;V<ke.length;V+=1)$(G[V]);for(let V=0;V<we.length;V+=1)$(P[V]);for(let V=0;V<Ee.length;V+=1)$(L[V]);$(A),Be=!0}},o(h){z(O),G=G.filter(Boolean);for(let V=0;V<G.length;V+=1)z(G[V]);P=P.filter(Boolean);for(let V=0;V<P.length;V+=1)z(P[V]);L=L.filter(Boolean);for(let V=0;V<L.length;V+=1)z(L[V]);z(A),Be=!1},d(h){h&&u(l),O&&O.d(h),h&&u(t),h&&u(r),h&&u(Le),h&&u(_e),De(G,h),De(P,h),De(L,h),h&&u(Oe),A&&A.d(h),h&&u(Ne)}}}const Tl=!0;function nt(o="fa-regular fa-calendar"){return`<i class="${o} inline-block align-baseline pr-1.5 sm:pr-2.5 text-blue-web/40"></i>`}const Ft=o=>!o.lead,Ut=o=>o.type==="sponsor",Xt=o=>o.type==="community",Qt=o=>o.type==="medium";function wl(o,e,l){let t,r,s,c,_,k;at(o,cl,a=>l(0,c=a)),at(o,fl,a=>l(2,_=a)),at(o,ot,a=>l(3,k=a));const n={link:hl};function E(a){return function(){ot.update(D=>(D.hpTrack=a,D))}}function i(){ot.update(a=>(a.hpTrack=null,a))}const v=()=>.5-Math.random();return o.$$.update=()=>{o.$$.dirty&1&&l(7,t=c),o.$$.dirty&128&&l(8,r=t?t.spec.speakers.filter(a=>!!a.lead).length:0),o.$$.dirty&384&&l(1,s=t?[{name:"Hlavn\xED p\u0159edn\xE1\u0161ej\xEDc\xED ("+r+")",id:"top"},{name:"V\u0161e",id:null}].concat(t.spec.tracks.filter(a=>a.hidden===void 0||a.hidden!==!0)):null)},[c,s,_,k,n,E,i,t,r,v]}class jl extends Zt{constructor(e){super();Jt(this,e,wl,kl,Yt,{})}}export{jl as default,Tl as prerender};
