import{S as Zt,i as Jt,s as Yt,P as Wt,e as g,k as S,c as k,a as E,d as h,m as z,b as d,K as Z,g as N,F as f,L as xt,M as el,N as tl,n as F,o as y,p as U,q as T,E as kt,t as B,R as bt,h as G,T as wt,j as pe,J as ll,l as we,w as le,x as se,y as re,B as ae,G as de,U as nl,I as lt,H as st,V as il}from"../chunks/index-acdcee87.js";import{c as rt,b as cl,a as fl}from"../chunks/stores-77ce6fd0.js";import{A as De}from"../chunks/Avatar-5ae0a3d5.js";import{S as ul,L as hl}from"../chunks/Link-3573ed9f.js";import"../chunks/index-f786a58f.js";const pl=a=>({}),Et=a=>({});function dl(a){let e;const l=a[9]["custom-tip"],t=Wt(l,a,a[8],Et);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,s){t&&t.m(r,s),e=!0},p(r,s){t&&t.p&&(!e||s&256)&&xt(t,l,r,r[8],e?tl(l,r[8],s,pl):el(r[8]),Et)},i(r){e||(T(t,r),e=!0)},o(r){y(t,r),e=!1},d(r){t&&t.d(r)}}}function _l(a){let e;return{c(){e=g("div"),this.h()},l(l){e=k(l,"DIV",{class:!0,style:!0});var t=E(e);t.forEach(h),this.h()},h(){d(e,"class","default-tip svelte-uasnpl"),d(e,"style",a[6])},m(l,t){N(l,e,t),e.innerHTML=a[0]},p(l,t){t&1&&(e.innerHTML=l[0])},i:kt,o:kt,d(l){l&&h(e)}}}function vl(a){let e,l,t,r,s,c,v;const b=a[9].default,n=Wt(b,a,a[8],null),w=[_l,dl],i=[];function p(o,D){return o[0]?0:1}return s=p(a),c=i[s]=w[s](a),{c(){e=g("div"),l=g("span"),n&&n.c(),t=S(),r=g("div"),c.c(),this.h()},l(o){e=k(o,"DIV",{class:!0});var D=E(e);l=k(D,"SPAN",{class:!0});var j=E(l);n&&n.l(j),j.forEach(h),t=z(D),r=k(D,"DIV",{class:!0});var _=E(r);c.l(_),_.forEach(h),D.forEach(h),this.h()},h(){d(l,"class","tooltip-slot svelte-uasnpl"),d(r,"class","tooltip svelte-uasnpl"),Z(r,"active",a[5]),Z(r,"left",a[4]),Z(r,"right",a[2]),Z(r,"bottom",a[3]),Z(r,"top",a[1]),d(e,"class","tooltip-wrapper svelte-uasnpl")},m(o,D){N(o,e,D),f(e,l),n&&n.m(l,null),f(e,t),f(e,r),i[s].m(r,null),v=!0},p(o,[D]){n&&n.p&&(!v||D&256)&&xt(n,b,o,o[8],v?tl(b,o[8],D,null):el(o[8]),null);let j=s;s=p(o),s===j?i[s].p(o,D):(F(),y(i[j],1,1,()=>{i[j]=null}),U(),c=i[s],c?c.p(o,D):(c=i[s]=w[s](o),c.c()),T(c,1),c.m(r,null)),D&32&&Z(r,"active",o[5]),D&16&&Z(r,"left",o[4]),D&4&&Z(r,"right",o[2]),D&8&&Z(r,"bottom",o[3]),D&2&&Z(r,"top",o[1])},i(o){v||(T(n,o),T(c),v=!0)},o(o){y(n,o),y(c),v=!1},d(o){o&&h(e),n&&n.d(o),i[s].d()}}}function ml(a,e,l){let{$$slots:t={},$$scope:r}=e,{tip:s=""}=e,{top:c=!1}=e,{right:v=!1}=e,{bottom:b=!1}=e,{left:n=!1}=e,{active:w=!1}=e,{color:i="#393F67"}=e,p=`background-color: ${i};`;return a.$$set=o=>{"tip"in o&&l(0,s=o.tip),"top"in o&&l(1,c=o.top),"right"in o&&l(2,v=o.right),"bottom"in o&&l(3,b=o.bottom),"left"in o&&l(4,n=o.left),"active"in o&&l(5,w=o.active),"color"in o&&l(7,i=o.color),"$$scope"in o&&l(8,r=o.$$scope)},[s,c,v,b,n,w,p,i,r,t]}class sl extends Zt{constructor(e){super();Jt(this,e,ml,vl,Yt,{tip:0,top:1,right:2,bottom:3,left:4,active:5,color:7})}}function It(a,e,l){const t=a.slice();return t[11]=e[l],t}function Dt(a,e,l){const t=a.slice();return t[14]=e[l],t}function Vt(a,e,l){const t=a.slice();return t[14]=e[l],t}function Tt(a,e,l){const t=a.slice();return t[14]=e[l],t}function $t(a,e,l){const t=a.slice();return t[21]=e[l],t}function jt(a,e,l){const t=a.slice();return t[21]=e[l],t}function yt(a,e,l){const t=a.slice();return t[26]=e[l],t}function St(a){let e,l,t,r,s,c,v,b,n=a[2]&&zt(a),w=a[1],i=[];for(let _=0;_<w.length;_+=1)i[_]=Mt(yt(a,w,_));let p=a[0].spec.speakers,o=[];for(let _=0;_<p.length;_+=1)o[_]=Pt(jt(a,p,_));const D=_=>y(o[_],1,1,()=>{o[_]=null});let j=a[3].hpTrack==="top"&&Lt(a);return{c(){n&&n.c(),e=S(),l=g("section"),t=g("div");for(let _=0;_<i.length;_+=1)i[_].c();r=S(),s=g("section"),c=g("div");for(let _=0;_<o.length;_+=1)o[_].c();v=S(),j&&j.c(),this.h()},l(_){n&&n.l(_),e=z(_),l=k(_,"SECTION",{class:!0});var $=E(l);t=k($,"DIV",{class:!0});var I=E(t);for(let R=0;R<i.length;R+=1)i[R].l(I);I.forEach(h),$.forEach(h),r=z(_),s=k(_,"SECTION",{class:!0});var C=E(s);c=k(C,"DIV",{class:!0});var M=E(c);for(let R=0;R<o.length;R+=1)o[R].l(M);M.forEach(h),v=z(C),j&&j.l(C),C.forEach(h),this.h()},h(){d(t,"class","flex flex-wrap gap-1.5 sm:gap-3 text-xs uppercase font-bold text-blue-web justify-left"),d(l,"class","relative mx-auto pt-6 sm:pt-10 px-6 max-w-6xl"),d(c,"class","flex flex-wrap gap-6 mt-6 sm:mt-14 justify-center"),d(s,"class","pb-6 sm:-pb-10 mx-auto sm:px-2 lg:px-6 2xl:px-16")},m(_,$){n&&n.m(_,$),N(_,e,$),N(_,l,$),f(l,t);for(let I=0;I<i.length;I+=1)i[I].m(t,null);N(_,r,$),N(_,s,$),f(s,c);for(let I=0;I<o.length;I+=1)o[I].m(c,null);f(s,v),j&&j.m(s,null),b=!0},p(_,$){if(_[2]?n?n.p(_,$):(n=zt(_),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),$&43){w=_[1];let I;for(I=0;I<w.length;I+=1){const C=yt(_,w,I);i[I]?i[I].p(C,$):(i[I]=Mt(C),i[I].c(),i[I].m(t,null))}for(;I<i.length;I+=1)i[I].d(1);i.length=w.length}if($&9){p=_[0].spec.speakers;let I;for(I=0;I<p.length;I+=1){const C=jt(_,p,I);o[I]?(o[I].p(C,$),T(o[I],1)):(o[I]=Pt(C),o[I].c(),T(o[I],1),o[I].m(c,null))}for(F(),I=p.length;I<o.length;I+=1)D(I);U()}_[3].hpTrack==="top"?j?(j.p(_,$),$&8&&T(j,1)):(j=Lt(_),j.c(),T(j,1),j.m(s,null)):j&&(F(),y(j,1,1,()=>{j=null}),U())},i(_){if(!b){for(let $=0;$<p.length;$+=1)T(o[$]);T(j),b=!0}},o(_){o=o.filter(Boolean);for(let $=0;$<o.length;$+=1)y(o[$]);y(j),b=!1},d(_){n&&n.d(_),_&&h(e),_&&h(l),de(i,_),_&&h(r),_&&h(s),de(o,_),j&&j.d()}}}function zt(a){let e,l,t,r=a[0].spec.speakers.length+"",s,c,v,b,n=a[0].spec.events.length+"",w,i,p,o,D=a[2].global.tickets+"",j,_;return{c(){e=g("section"),l=g("div"),t=g("div"),s=B(r),c=B("\xA0p\u0159edn\xE1\u0161ej\xEDc\xEDch "),v=new bt,b=S(),w=B(n),i=B("\xA0ud\xE1losti "),p=new bt,o=S(),j=B(D),_=B("\xA0n\xE1vst\u011Bvn\xEDk\u016F"),this.h()},l($){e=k($,"SECTION",{class:!0});var I=E(e);l=k(I,"DIV",{class:!0});var C=E(l);t=k(C,"DIV",{class:!0});var M=E(t);s=G(M,r),c=G(M,"\xA0p\u0159edn\xE1\u0161ej\xEDc\xEDch "),v=wt(M),b=z(M),w=G(M,n),i=G(M,"\xA0ud\xE1losti "),p=wt(M),o=z(M),j=G(M,D),_=G(M,"\xA0n\xE1vst\u011Bvn\xEDk\u016F"),M.forEach(h),C.forEach(h),I.forEach(h),this.h()},h(){v.a=b,p.a=o,d(t,"class","text-center text-xl sm:text-xl lg:text-2xl font-semibold text-blue-web px-8"),d(l,"class","pb-2 pt-2 lg:pt-4 lg:pb-4 mx-auto sm:px-2 lg:px-6 2xl:px-16"),d(e,"class","bg-blue-web-light")},m($,I){N($,e,I),f(e,l),f(l,t),f(t,s),f(t,c),v.m(Kt,t),f(t,b),f(t,w),f(t,i),p.m(Kt,t),f(t,o),f(t,j),f(t,_)},p($,I){I&1&&r!==(r=$[0].spec.speakers.length+"")&&pe(s,r),I&1&&n!==(n=$[0].spec.events.length+"")&&pe(w,n),I&4&&D!==(D=$[2].global.tickets+"")&&pe(j,D)},d($){$&&h(e)}}}function Nt(a){let e,l=a[0].spec.speakers.length+"",t,r;return{c(){e=B("("),t=B(l),r=B(")")},l(s){e=G(s,"("),t=G(s,l),r=G(s,")")},m(s,c){N(s,e,c),N(s,t,c),N(s,r,c)},p(s,c){c&1&&l!==(l=s[0].spec.speakers.length+"")&&pe(t,l)},d(s){s&&h(e),s&&h(t),s&&h(r)}}}function Mt(a){let e,l=(a[26].shortname||a[26].name)+"",t,r,s,c,v,b,n=!a[26].id&&Nt(a);return{c(){e=g("div"),t=B(l),r=S(),n&&n.c(),s=S(),this.h()},l(w){e=k(w,"DIV",{class:!0});var i=E(e);t=G(i,l),r=z(i),n&&n.l(i),s=z(i),i.forEach(h),this.h()},h(){d(e,"class",c="py-1.5 sm:py-2 px-2.5 sm:px-8 rounded-full shadow border border-solid "+(a[3].hpTrack===a[26].id?"bg-utxo-gradient border-0 text-white":"border-blue-web hover:bg-blue-web hover:text-white hover:border-transparent cursor-pointer"))},m(w,i){N(w,e,i),f(e,t),f(e,r),n&&n.m(e,null),f(e,s),v||(b=ll(e,"click",function(){il(a[5](a[26].id))&&a[5](a[26].id).apply(this,arguments)}),v=!0)},p(w,i){a=w,i&2&&l!==(l=(a[26].shortname||a[26].name)+"")&&pe(t,l),a[26].id?n&&(n.d(1),n=null):n?n.p(a,i):(n=Nt(a),n.c(),n.m(e,s)),i&10&&c!==(c="py-1.5 sm:py-2 px-2.5 sm:px-8 rounded-full shadow border border-solid "+(a[3].hpTrack===a[26].id?"bg-utxo-gradient border-0 text-white":"border-blue-web hover:bg-blue-web hover:text-white hover:border-transparent cursor-pointer"))&&d(e,"class",c)},d(w){w&&h(e),n&&n.d(),v=!1,b()}}}function Bt(a){let e=!a[3].hpTrack||a[21].tracks&&a[21].tracks.includes(a[3].hpTrack)||a[3].hpTrack==="top",l,t,r=e&&Gt(a);return{c(){r&&r.c(),l=we()},l(s){r&&r.l(s),l=we()},m(s,c){r&&r.m(s,c),N(s,l,c),t=!0},p(s,c){c&9&&(e=!s[3].hpTrack||s[21].tracks&&s[21].tracks.includes(s[3].hpTrack)||s[3].hpTrack==="top"),e?r?(r.p(s,c),c&9&&T(r,1)):(r=Gt(s),r.c(),T(r,1),r.m(l.parentNode,l)):r&&(F(),y(r,1,1,()=>{r=null}),U())},i(s){t||(T(r),t=!0)},o(s){y(r),t=!1},d(s){r&&r.d(s),s&&h(l)}}}function Gt(a){let e,l;return e=new De({props:{speaker:a[21]}}),{c(){le(e.$$.fragment)},l(t){se(e.$$.fragment,t)},m(t,r){re(e,t,r),l=!0},p(t,r){const s={};r&1&&(s.speaker=t[21]),e.$set(s)},i(t){l||(T(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){ae(e,t)}}}function Pt(a){let e,l,t=(a[3].hpTrack==="top"&&a[21].lead===!0||a[3].hpTrack!=="top")&&Bt(a);return{c(){t&&t.c(),e=we()},l(r){t&&t.l(r),e=we()},m(r,s){t&&t.m(r,s),N(r,e,s),l=!0},p(r,s){r[3].hpTrack==="top"&&r[21].lead===!0||r[3].hpTrack!=="top"?t?(t.p(r,s),s&9&&T(t,1)):(t=Bt(r),t.c(),T(t,1),t.m(e.parentNode,e)):t&&(F(),y(t,1,1,()=>{t=null}),U())},i(r){l||(T(t),l=!0)},o(r){y(t),l=!1},d(r){t&&t.d(r),r&&h(e)}}}function Lt(a){let e,l,t,r,s,c,v,b=a[0].spec.speakers.filter(Ft).sort(a[9]).slice(0,27),n=[];for(let i=0;i<b.length;i+=1)n[i]=Ot($t(a,b,i));const w=i=>y(n[i],1,1,()=>{n[i]=null});return{c(){e=g("div"),l=g("div"),t=S(),r=g("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){e=k(i,"DIV",{class:!0});var p=E(e);l=k(p,"DIV",{class:!0}),E(l).forEach(h),t=z(p),r=k(p,"DIV",{class:!0});var o=E(r);for(let D=0;D<n.length;D+=1)n[D].l(o);o.forEach(h),p.forEach(h),this.h()},h(){d(l,"class","absolute inset-0 bg-gradient-to-b from-transparent to-white flex"),d(r,"class","flex flex-wrap gap-3 mt-10 justify-center"),d(e,"class","relative cursor-pointer mb-10 max-w-screen-2xl mx-auto")},m(i,p){N(i,e,p),f(e,l),f(e,t),f(e,r);for(let o=0;o<n.length;o+=1)n[o].m(r,null);s=!0,c||(v=ll(l,"click",a[6]),c=!0)},p(i,p){if(p&1){b=i[0].spec.speakers.filter(Ft).sort(i[9]).slice(0,27);let o;for(o=0;o<b.length;o+=1){const D=$t(i,b,o);n[o]?(n[o].p(D,p),T(n[o],1)):(n[o]=Ot(D),n[o].c(),T(n[o],1),n[o].m(r,null))}for(F(),o=b.length;o<n.length;o+=1)w(o);U()}},i(i){if(!s){for(let p=0;p<b.length;p+=1)T(n[p]);s=!0}},o(i){n=n.filter(Boolean);for(let p=0;p<n.length;p+=1)y(n[p]);s=!1},d(i){i&&h(e),de(n,i),c=!1,v()}}}function Ot(a){let e,l;return e=new De({props:{speaker:a[21],size:"small"}}),{c(){le(e.$$.fragment)},l(t){se(e.$$.fragment,t)},m(t,r){re(e,t,r),l=!0},p(t,r){const s={};r&1&&(s.speaker=t[21]),e.$set(s)},i(t){l||(T(e.$$.fragment,t),l=!0)},o(t){y(e.$$.fragment,t),l=!1},d(t){ae(e,t)}}}function At(a){let e,l,t,r,s,c,v=a[14].name+"",b,n,w;return t=new De({props:{speaker:a[14],col:"partners",size:"custom",customSize:"w-28 shadow-xl"}}),{c(){e=g("div"),l=g("a"),le(t.$$.fragment),s=S(),c=g("div"),b=B(v),n=S(),this.h()},l(i){e=k(i,"DIV",{class:!0});var p=E(e);l=k(p,"A",{href:!0,target:!0});var o=E(l);se(t.$$.fragment,o),o.forEach(h),s=z(p),c=k(p,"DIV",{class:!0});var D=E(c);b=G(D,v),D.forEach(h),n=z(p),p.forEach(h),this.h()},h(){d(l,"href",r=a[14].web.url),d(l,"target","_blank"),d(c,"class","text-center text-sm uppercase font-bold"),d(e,"class","w-32")},m(i,p){N(i,e,p),f(e,l),re(t,l,null),f(e,s),f(e,c),f(c,b),f(e,n),w=!0},p(i,p){const o={};p&1&&(o.speaker=i[14]),t.$set(o),(!w||p&1&&r!==(r=i[14].web.url))&&d(l,"href",r),(!w||p&1)&&v!==(v=i[14].name+"")&&pe(b,v)},i(i){w||(T(t.$$.fragment,i),w=!0)},o(i){y(t.$$.fragment,i),w=!1},d(i){i&&h(e),ae(t)}}}function gl(a){let e,l,t,r;return l=new De({props:{speaker:a[14],col:"partners",size:"custom",customSize:"w-20 shadow-lg"}}),{c(){e=g("a"),le(l.$$.fragment),this.h()},l(s){e=k(s,"A",{href:!0,target:!0});var c=E(e);se(l.$$.fragment,c),c.forEach(h),this.h()},h(){d(e,"href",t=a[14].web?a[14].web.url:a[14].twitter?`https://twitter.com/${a[14].twitter}`:""),d(e,"target","_blank")},m(s,c){N(s,e,c),re(l,e,null),r=!0},p(s,c){const v={};c&1&&(v.speaker=s[14]),l.$set(v),(!r||c&1&&t!==(t=s[14].web?s[14].web.url:s[14].twitter?`https://twitter.com/${s[14].twitter}`:""))&&d(e,"href",t)},i(s){r||(T(l.$$.fragment,s),r=!0)},o(s){y(l.$$.fragment,s),r=!1},d(s){s&&h(e),ae(l)}}}function Ht(a){let e,l,t,r;return l=new sl({props:{tip:a[14].name,bottom:"true",$$slots:{default:[gl]},$$scope:{ctx:a}}}),{c(){e=g("div"),le(l.$$.fragment),t=S()},l(s){e=k(s,"DIV",{});var c=E(e);se(l.$$.fragment,c),t=z(c),c.forEach(h)},m(s,c){N(s,e,c),re(l,e,null),f(e,t),r=!0},p(s,c){const v={};c&1&&(v.tip=s[14].name),c&536870913&&(v.$$scope={dirty:c,ctx:s}),l.$set(v)},i(s){r||(T(l.$$.fragment,s),r=!0)},o(s){y(l.$$.fragment,s),r=!1},d(s){s&&h(e),ae(l)}}}function kl(a){let e,l,t,r;return l=new De({props:{speaker:a[14],col:"partners",size:"custom",customSize:"w-16 shadow-lg"}}),{c(){e=g("a"),le(l.$$.fragment),this.h()},l(s){e=k(s,"A",{href:!0,target:!0});var c=E(e);se(l.$$.fragment,c),c.forEach(h),this.h()},h(){d(e,"href",t=a[14].web?a[14].web.url:a[14].twitter?`https://twitter.com/${a[14].twitter}`:""),d(e,"target","_blank")},m(s,c){N(s,e,c),re(l,e,null),r=!0},p(s,c){const v={};c&1&&(v.speaker=s[14]),l.$set(v),(!r||c&1&&t!==(t=s[14].web?s[14].web.url:s[14].twitter?`https://twitter.com/${s[14].twitter}`:""))&&d(e,"href",t)},i(s){r||(T(l.$$.fragment,s),r=!0)},o(s){y(l.$$.fragment,s),r=!1},d(s){s&&h(e),ae(l)}}}function qt(a){let e,l,t,r;return l=new sl({props:{tip:a[14].name,bottom:"true",$$slots:{default:[kl]},$$scope:{ctx:a}}}),{c(){e=g("div"),le(l.$$.fragment),t=S()},l(s){e=k(s,"DIV",{});var c=E(e);se(l.$$.fragment,c),t=z(c),c.forEach(h)},m(s,c){N(s,e,c),re(l,e,null),f(e,t),r=!0},p(s,c){const v={};c&1&&(v.tip=s[14].name),c&536870913&&(v.$$scope={dirty:c,ctx:s}),l.$set(v)},i(s){r||(T(l.$$.fragment,s),r=!0)},o(s){y(l.$$.fragment,s),r=!1},d(s){s&&h(e),ae(l)}}}function Ct(a){let e,l,t,r,s,c,v,b=a[0].spec.faqs,n=[];for(let i=0;i<b.length;i+=1)n[i]=Rt(It(a,b,i));const w=i=>y(n[i],1,1,()=>{n[i]=null});return{c(){e=g("section"),l=g("div"),t=g("h2"),r=B("\u010Casto kladen\xE9 dotazy (FAQ)"),s=S(),c=g("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){e=k(i,"SECTION",{class:!0});var p=E(e);l=k(p,"DIV",{class:!0});var o=E(l);t=k(o,"H2",{class:!0,id:!0});var D=E(t);r=G(D,"\u010Casto kladen\xE9 dotazy (FAQ)"),D.forEach(h),s=z(o),c=k(o,"DIV",{class:!0});var j=E(c);for(let _=0;_<n.length;_+=1)n[_].l(j);j.forEach(h),o.forEach(h),p.forEach(h),this.h()},h(){d(t,"class","uppercase pt-5 text-center"),d(t,"id","faq"),d(c,"class","md:columns-2 columns-1 mt-8 h-auto"),d(l,"class","text-blue-web"),d(e,"class","relative mx-auto py-10 px-6 max-w-6xl")},m(i,p){N(i,e,p),f(e,l),f(l,t),f(t,r),f(l,s),f(l,c);for(let o=0;o<n.length;o+=1)n[o].m(c,null);v=!0},p(i,p){if(p&17){b=i[0].spec.faqs;let o;for(o=0;o<b.length;o+=1){const D=It(i,b,o);n[o]?(n[o].p(D,p),T(n[o],1)):(n[o]=Rt(D),n[o].c(),T(n[o],1),n[o].m(c,null))}for(F(),o=b.length;o<n.length;o+=1)w(o);U()}},i(i){if(!v){for(let p=0;p<b.length;p+=1)T(n[p]);v=!0}},o(i){n=n.filter(Boolean);for(let p=0;p<n.length;p+=1)y(n[p]);v=!1},d(i){i&&h(e),de(n,i)}}}function Rt(a){let e,l,t=a[11].question+"",r,s,c,v,b;return c=new ul({props:{source:a[11].answer,renderers:a[4]}}),{c(){e=g("div"),l=g("div"),r=B(t),s=S(),le(c.$$.fragment),v=S(),this.h()},l(n){e=k(n,"DIV",{class:!0});var w=E(e);l=k(w,"DIV",{class:!0});var i=E(l);r=G(i,t),i.forEach(h),s=z(w),se(c.$$.fragment,w),v=z(w),w.forEach(h),this.h()},h(){d(l,"class","mb-4 font-bold"),d(e,"class","mb-5 break-inside-avoid-column bg-blue-100/60 rounded-xl px-8 py-6 text-left transition-all box-shadow-light overflow-visible")},m(n,w){N(n,e,w),f(e,l),f(l,r),f(e,s),re(c,e,null),f(e,v),b=!0},p(n,w){(!b||w&1)&&t!==(t=n[11].question+"")&&pe(r,t);const i={};w&1&&(i.source=n[11].answer),c.$set(i)},i(n){b||(T(c.$$.fragment,n),b=!0)},o(n){y(c.$$.fragment,n),b=!1},d(n){n&&h(e),ae(c)}}}function bl(a){let e,l,t,r,s,c,v,b,n,w,i,p,o,D,j,_,$,I,C,M,R,Ne,Me,_e,Be,Ge,Y,Pe,Le,W,x,Oe,Ae,ee,He,qe,J,Ce,Re,Ke,Fe,Ve,oe,q,ve,Ue,Xe,me,Qe,Ze,ne,Je,ge,Ye,We,ie,xe,ke,et,tt,ce,Te,be,Ee;document.title=e="UTXO.22 "+(a[0]?"- "+a[0].description:"");let A=a[0]&&St(a),fe=a[0].spec.partners.filter(Ut),P=[];for(let u=0;u<fe.length;u+=1)P[u]=At(Tt(a,fe,u));const rl=u=>y(P[u],1,1,()=>{P[u]=null});let ue=a[0].spec.partners.filter(Xt),L=[];for(let u=0;u<ue.length;u+=1)L[u]=Ht(Vt(a,ue,u));const al=u=>y(L[u],1,1,()=>{L[u]=null});let he=a[0].spec.partners.filter(Qt),O=[];for(let u=0;u<he.length;u+=1)O[u]=qt(Dt(a,he,u));const ol=u=>y(O[u],1,1,()=>{O[u]=null});let H=a[0]&&Ct(a);return{c(){l=S(),A&&A.c(),t=S(),r=g("section"),s=g("div"),c=g("div"),v=g("div"),b=g("img"),w=S(),i=g("div"),p=g("div"),o=g("img"),j=S(),_=g("div"),$=g("img"),C=S(),M=g("div"),R=g("div"),Ne=B("M\xEDsto"),Me=S(),_e=g("div"),Be=B("Gabriel Loci"),Ge=S(),Y=g("div"),Pe=B("Hole\u010Dkova 106/10, 150 00 Praha 5 - Sm\xEDchov \u{1F1E8}\u{1F1FF}"),Le=g("br"),W=g("span"),x=g("a"),Oe=B("Google Maps"),Ae=B(`,
            `),ee=g("a"),He=B("Mapy.cz"),qe=S(),J=g("div"),Ce=B(`Benediktinky. Kulturn\xED pam\xE1tka. \u010Cesk\xE1 Po\u0161ta. Po\u0161tovn\xED muzeum. Na prvn\xED
          pohled nesouvisej\xEDc\xED n\xE1zvy, kter\xE9 jsou ale neodmyslitelnou sou\u010D\xE1st\xED
          unik\xE1tn\xEDho komplexu Gabriel Loci na pra\u017Esk\xE9m Sm\xEDchov\u011B doslova p\xE1r
          minut od centra. Na konci 19.stolet\xED v kl\xE1\u0161te\u0159e s\xEDdlily \u0159eholnice,
          \u017Eensk\xE9 opatstv\xED \u0159\xE1du benediktinek beuronsk\xE9 kongregace. Pozd\u011Bji
          prostory spravovalo \u010Deskoslovensk\xE9 Ministerstvo po\u0161t a telegraf\u016F. Dnes
          komplex vyu\u017E\xEDvaj\xED hlavn\u011B nat\xE1\u010Dec\xED studia jako HBO, Netflix nebo i \u010CT.
          No a my! \u{1F4AA}`),Re=g("br"),Ke=g("br"),Fe=B(`
          Za\u017Eijte mysteri\xF3zn\xED atmosf\xE9ru komplexu na 1.ro\u010Dn\xEDku konference UTXO.22.
          \u010C\xE1st after-party si u\u017Eijete doslova v pitevn\u011B ze seri\xE1lu Devades\xE1tky \u{1F44C}\u{1F600}`),Ve=S(),oe=g("section"),q=g("div"),ve=g("div"),Ue=B("Partne\u0159i"),Xe=S(),me=g("div"),Qe=B("Sponzo\u0159i"),Ze=S(),ne=g("div");for(let u=0;u<P.length;u+=1)P[u].c();Je=S(),ge=g("div"),Ye=B("Komunity"),We=S(),ie=g("div");for(let u=0;u<L.length;u+=1)L[u].c();xe=S(),ke=g("div"),et=B("Medi\xE1ln\xED partne\u0159i"),tt=S(),ce=g("div");for(let u=0;u<O.length;u+=1)O[u].c();Te=S(),H&&H.c(),be=we(),this.h()},l(u){nl('[data-svelte="svelte-d9wawy"]',document.head).forEach(h),l=z(u),A&&A.l(u),t=z(u),r=k(u,"SECTION",{class:!0});var m=E(r);s=k(m,"DIV",{class:!0});var X=E(s);c=k(X,"DIV",{class:!0});var $e=E(c);v=k($e,"DIV",{class:!0});var je=E(v);b=k(je,"IMG",{src:!0,class:!0,alt:!0}),w=z(je),i=k(je,"DIV",{class:!0});var ye=E(i);p=k(ye,"DIV",{class:!0});var at=E(p);o=k(at,"IMG",{src:!0,class:!0,alt:!0}),at.forEach(h),j=z(ye),_=k(ye,"DIV",{class:!0});var ot=E(_);$=k(ot,"IMG",{src:!0,class:!0,alt:!0}),ot.forEach(h),ye.forEach(h),je.forEach(h),C=z($e),M=k($e,"DIV",{class:!0});var te=E(M);R=k(te,"DIV",{class:!0});var nt=E(R);Ne=G(nt,"M\xEDsto"),nt.forEach(h),Me=z(te),_e=k(te,"DIV",{class:!0});var it=E(_e);Be=G(it,"Gabriel Loci"),it.forEach(h),Ge=z(te),Y=k(te,"DIV",{class:!0});var Se=E(Y);Pe=G(Se,"Hole\u010Dkova 106/10, 150 00 Praha 5 - Sm\xEDchov \u{1F1E8}\u{1F1FF}"),Le=k(Se,"BR",{}),W=k(Se,"SPAN",{class:!0});var ze=E(W);x=k(ze,"A",{href:!0,class:!0,target:!0});var ct=E(x);Oe=G(ct,"Google Maps"),ct.forEach(h),Ae=G(ze,`,
            `),ee=k(ze,"A",{href:!0,class:!0,target:!0});var ft=E(ee);He=G(ft,"Mapy.cz"),ft.forEach(h),ze.forEach(h),Se.forEach(h),qe=z(te),J=k(te,"DIV",{class:!0});var Ie=E(J);Ce=G(Ie,`Benediktinky. Kulturn\xED pam\xE1tka. \u010Cesk\xE1 Po\u0161ta. Po\u0161tovn\xED muzeum. Na prvn\xED
          pohled nesouvisej\xEDc\xED n\xE1zvy, kter\xE9 jsou ale neodmyslitelnou sou\u010D\xE1st\xED
          unik\xE1tn\xEDho komplexu Gabriel Loci na pra\u017Esk\xE9m Sm\xEDchov\u011B doslova p\xE1r
          minut od centra. Na konci 19.stolet\xED v kl\xE1\u0161te\u0159e s\xEDdlily \u0159eholnice,
          \u017Eensk\xE9 opatstv\xED \u0159\xE1du benediktinek beuronsk\xE9 kongregace. Pozd\u011Bji
          prostory spravovalo \u010Deskoslovensk\xE9 Ministerstvo po\u0161t a telegraf\u016F. Dnes
          komplex vyu\u017E\xEDvaj\xED hlavn\u011B nat\xE1\u010Dec\xED studia jako HBO, Netflix nebo i \u010CT.
          No a my! \u{1F4AA}`),Re=k(Ie,"BR",{}),Ke=k(Ie,"BR",{}),Fe=G(Ie,`
          Za\u017Eijte mysteri\xF3zn\xED atmosf\xE9ru komplexu na 1.ro\u010Dn\xEDku konference UTXO.22.
          \u010C\xE1st after-party si u\u017Eijete doslova v pitevn\u011B ze seri\xE1lu Devades\xE1tky \u{1F44C}\u{1F600}`),Ie.forEach(h),te.forEach(h),$e.forEach(h),X.forEach(h),m.forEach(h),Ve=z(u),oe=k(u,"SECTION",{class:!0});var ut=E(oe);q=k(ut,"DIV",{class:!0});var K=E(q);ve=k(K,"DIV",{class:!0});var ht=E(ve);Ue=G(ht,"Partne\u0159i"),ht.forEach(h),Xe=z(K),me=k(K,"DIV",{class:!0});var pt=E(me);Qe=G(pt,"Sponzo\u0159i"),pt.forEach(h),Ze=z(K),ne=k(K,"DIV",{class:!0});var dt=E(ne);for(let Q=0;Q<P.length;Q+=1)P[Q].l(dt);dt.forEach(h),Je=z(K),ge=k(K,"DIV",{class:!0});var _t=E(ge);Ye=G(_t,"Komunity"),_t.forEach(h),We=z(K),ie=k(K,"DIV",{class:!0});var vt=E(ie);for(let Q=0;Q<L.length;Q+=1)L[Q].l(vt);vt.forEach(h),xe=z(K),ke=k(K,"DIV",{class:!0});var mt=E(ke);et=G(mt,"Medi\xE1ln\xED partne\u0159i"),mt.forEach(h),tt=z(K),ce=k(K,"DIV",{class:!0});var gt=E(ce);for(let Q=0;Q<O.length;Q+=1)O[Q].l(gt);gt.forEach(h),K.forEach(h),ut.forEach(h),Te=z(u),H&&H.l(u),be=we(),this.h()},h(){lt(b.src,n="/photos/gabriel-loci.jpeg")||d(b,"src",n),d(b,"class","flex rounded-xl shadow-xl"),d(b,"alt","Gabriel Loci"),lt(o.src,D="/photos/rajska-zahrada.jpeg")||d(o,"src",D),d(o,"class","rounded-lg shadow-lg"),d(o,"alt","Gabriel Loci - Rajsk\xE1 zahrada"),d(p,"class","w-1/2"),lt($.src,I="/photos/knihovna.jpeg")||d($,"src",I),d($,"class","rounded-lg shadow-lg"),d($,"alt","Gabriel Loci - Knihovna"),d(_,"class","w-1/2"),d(i,"class","flex mt-3 gap-3"),d(v,"class","block flex-1"),d(R,"class","uppercase"),d(_e,"class","uppercase mt-3 text-4xl font-bold"),d(x,"href","https://goo.gl/maps/u1aY4RxXMgcm889V7"),d(x,"class","underline hover:no-underline"),d(x,"target","_blank"),d(ee,"href","https://mapy.cz/s/cuvetubafo"),d(ee,"class","underline hover:no-underline"),d(ee,"target","_blank"),d(W,"class","font-normal"),d(Y,"class","mt-4 font-bold"),d(J,"class","mt-4"),d(M,"class","text-white md:w-1/2 md:pt-0 pt-6"),d(c,"class","py-6 md:py-10 md:flex gap-12"),d(s,"class","relative mx-auto py-6 px-6 max-w-6xl"),d(r,"class","bg-utxo-gradient"),d(ve,"class","text-2xl uppercase font-bold text-center"),d(me,"class","mt-6 text-center"),d(ne,"class","mt-6 flex flex-wrap gap-8 justify-center"),d(ge,"class","mt-10 text-center"),d(ie,"class","mt-6 flex flex-wrap gap-6 justify-center"),d(ke,"class","mt-10 text-center"),d(ce,"class","mt-6 flex flex-wrap gap-4 justify-center"),d(q,"class","text-blue-web lg:mt-10"),d(oe,"class","mx-auto py-10 px-6 max-w-auto overflow-hidden")},m(u,V){N(u,l,V),A&&A.m(u,V),N(u,t,V),N(u,r,V),f(r,s),f(s,c),f(c,v),f(v,b),f(v,w),f(v,i),f(i,p),f(p,o),f(i,j),f(i,_),f(_,$),f(c,C),f(c,M),f(M,R),f(R,Ne),f(M,Me),f(M,_e),f(_e,Be),f(M,Ge),f(M,Y),f(Y,Pe),f(Y,Le),f(Y,W),f(W,x),f(x,Oe),f(W,Ae),f(W,ee),f(ee,He),f(M,qe),f(M,J),f(J,Ce),f(J,Re),f(J,Ke),f(J,Fe),N(u,Ve,V),N(u,oe,V),f(oe,q),f(q,ve),f(ve,Ue),f(q,Xe),f(q,me),f(me,Qe),f(q,Ze),f(q,ne);for(let m=0;m<P.length;m+=1)P[m].m(ne,null);f(q,Je),f(q,ge),f(ge,Ye),f(q,We),f(q,ie);for(let m=0;m<L.length;m+=1)L[m].m(ie,null);f(q,xe),f(q,ke),f(ke,et),f(q,tt),f(q,ce);for(let m=0;m<O.length;m+=1)O[m].m(ce,null);N(u,Te,V),H&&H.m(u,V),N(u,be,V),Ee=!0},p(u,[V]){if((!Ee||V&1)&&e!==(e="UTXO.22 "+(u[0]?"- "+u[0].description:""))&&(document.title=e),u[0]?A?(A.p(u,V),V&1&&T(A,1)):(A=St(u),A.c(),T(A,1),A.m(t.parentNode,t)):A&&(F(),y(A,1,1,()=>{A=null}),U()),V&1){fe=u[0].spec.partners.filter(Ut);let m;for(m=0;m<fe.length;m+=1){const X=Tt(u,fe,m);P[m]?(P[m].p(X,V),T(P[m],1)):(P[m]=At(X),P[m].c(),T(P[m],1),P[m].m(ne,null))}for(F(),m=fe.length;m<P.length;m+=1)rl(m);U()}if(V&1){ue=u[0].spec.partners.filter(Xt);let m;for(m=0;m<ue.length;m+=1){const X=Vt(u,ue,m);L[m]?(L[m].p(X,V),T(L[m],1)):(L[m]=Ht(X),L[m].c(),T(L[m],1),L[m].m(ie,null))}for(F(),m=ue.length;m<L.length;m+=1)al(m);U()}if(V&1){he=u[0].spec.partners.filter(Qt);let m;for(m=0;m<he.length;m+=1){const X=Dt(u,he,m);O[m]?(O[m].p(X,V),T(O[m],1)):(O[m]=qt(X),O[m].c(),T(O[m],1),O[m].m(ce,null))}for(F(),m=he.length;m<O.length;m+=1)ol(m);U()}u[0]?H?(H.p(u,V),V&1&&T(H,1)):(H=Ct(u),H.c(),T(H,1),H.m(be.parentNode,be)):H&&(F(),y(H,1,1,()=>{H=null}),U())},i(u){if(!Ee){T(A);for(let V=0;V<fe.length;V+=1)T(P[V]);for(let V=0;V<ue.length;V+=1)T(L[V]);for(let V=0;V<he.length;V+=1)T(O[V]);T(H),Ee=!0}},o(u){y(A),P=P.filter(Boolean);for(let V=0;V<P.length;V+=1)y(P[V]);L=L.filter(Boolean);for(let V=0;V<L.length;V+=1)y(L[V]);O=O.filter(Boolean);for(let V=0;V<O.length;V+=1)y(O[V]);y(H),Ee=!1},d(u){u&&h(l),A&&A.d(u),u&&h(t),u&&h(r),u&&h(Ve),u&&h(oe),de(P,u),de(L,u),de(O,u),u&&h(Te),H&&H.d(u),u&&h(be)}}}const $l=!0;let Kt='<i class="fa-solid fa-angle-right text-lg align-middle px-4"></i>';const Ft=a=>!a.lead,Ut=a=>a.type==="sponsor",Xt=a=>a.type==="community",Qt=a=>a.type==="medium";function wl(a,e,l){let t,r,s,c,v,b;st(a,cl,o=>l(0,c=o)),st(a,fl,o=>l(2,v=o)),st(a,rt,o=>l(3,b=o));const n={link:hl};function w(o){return function(){rt.update(D=>(D.hpTrack=o,D))}}function i(){rt.update(o=>(o.hpTrack=null,o))}const p=()=>.5-Math.random();return a.$$.update=()=>{a.$$.dirty&1&&l(7,t=c),a.$$.dirty&128&&l(8,r=t?t.spec.speakers.filter(o=>!!o.lead).length:0),a.$$.dirty&384&&l(1,s=t?[{name:"Hlavn\xED p\u0159edn\xE1\u0161ej\xEDc\xED ("+r+")",id:"top"},{name:"V\u0161e",id:null}].concat(t.spec.tracks.filter(o=>o.hidden===void 0||o.hidden!==!0)):null)},[c,s,v,b,n,w,i,t,r,p]}class jl extends Zt{constructor(e){super();Jt(this,e,wl,bl,Yt,{})}}export{jl as default,$l as prerender};
