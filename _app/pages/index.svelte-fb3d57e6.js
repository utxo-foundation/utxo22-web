import{S as fl,i as ul,s as hl,k as j,e as m,m as T,c as g,a as b,d as h,b as v,g as M,J as f,W as it,t as N,X as ct,h as B,j as _e,O as al,H as pl,q as D,l as Oe,w as oe,x as ne,y as ie,o as z,B as ce,n as ee,p as te,K as ve,Y as dl,N as ft,L as ut}from"../chunks/index-695b5929.js";import{b as vl,a as _l,c as ht}from"../chunks/stores-726c7852.js";import{A as Ge}from"../chunks/Avatar-af5af55b.js";import{S as ml,L as gl}from"../chunks/Link-9c9f68ae.js";import{S as sl}from"../chunks/SvelteTooltip-3b97fc95.js";import"../chunks/index-57c7a2a5.js";function St(a,e,l){const t=a.slice();return t[11]=e[l],t}function yt(a,e,l){const t=a.slice();return t[14]=e[l],t}function Nt(a,e,l){const t=a.slice();return t[14]=e[l],t}function Bt(a,e,l){const t=a.slice();return t[14]=e[l],t}function Mt(a,e,l){const t=a.slice();return t[14]=e[l],t}function xt(a,e,l){const t=a.slice();return t[23]=e[l],t}function Ot(a,e,l){const t=a.slice();return t[23]=e[l],t}function Gt(a,e,l){const t=a.slice();return t[28]=e[l],t}function At(a){let e,l,t,s,r,i,k,w,c=a[2]&&Ht(a),E=a[1],o=[];for(let _=0;_<E.length;_+=1)o[_]=Lt(Gt(a,E,_));let d=a[0].spec.speakers,n=[];for(let _=0;_<d.length;_+=1)n[_]=Kt(Ot(a,d,_));const S=_=>z(n[_],1,1,()=>{n[_]=null});let y=a[3].hpTrack==="top"&&Rt(a);return{c(){c&&c.c(),e=j(),l=m("section"),t=m("div");for(let _=0;_<o.length;_+=1)o[_].c();s=j(),r=m("section"),i=m("div");for(let _=0;_<n.length;_+=1)n[_].c();k=j(),y&&y.c(),this.h()},l(_){c&&c.l(_),e=T(_),l=g(_,"SECTION",{class:!0});var V=b(l);t=g(V,"DIV",{class:!0});var I=b(t);for(let K=0;K<o.length;K+=1)o[K].l(I);I.forEach(h),V.forEach(h),s=T(_),r=g(_,"SECTION",{class:!0});var q=b(r);i=g(q,"DIV",{class:!0});var C=b(i);for(let K=0;K<n.length;K+=1)n[K].l(C);C.forEach(h),k=T(q),y&&y.l(q),q.forEach(h),this.h()},h(){v(t,"class","flex flex-wrap gap-1.5 sm:gap-3 text-xs uppercase font-bold text-blue-web justify-left"),v(l,"class","relative mx-auto pt-6 sm:pt-10 px-6 max-w-6xl"),v(i,"class","flex flex-wrap gap-6 mt-6 sm:mt-14 justify-center"),v(r,"class","pb-6 sm:-pb-10 mx-auto sm:px-2 lg:px-6 2xl:px-16")},m(_,V){c&&c.m(_,V),M(_,e,V),M(_,l,V),f(l,t);for(let I=0;I<o.length;I+=1)o[I].m(t,null);M(_,s,V),M(_,r,V),f(r,i);for(let I=0;I<n.length;I+=1)n[I].m(i,null);f(r,k),y&&y.m(r,null),w=!0},p(_,V){if(_[2]?c?c.p(_,V):(c=Ht(_),c.c(),c.m(e.parentNode,e)):c&&(c.d(1),c=null),V[0]&43){E=_[1];let I;for(I=0;I<E.length;I+=1){const q=Gt(_,E,I);o[I]?o[I].p(q,V):(o[I]=Lt(q),o[I].c(),o[I].m(t,null))}for(;I<o.length;I+=1)o[I].d(1);o.length=E.length}if(V[0]&9){d=_[0].spec.speakers;let I;for(I=0;I<d.length;I+=1){const q=Ot(_,d,I);n[I]?(n[I].p(q,V),D(n[I],1)):(n[I]=Kt(q),n[I].c(),D(n[I],1),n[I].m(i,null))}for(ee(),I=d.length;I<n.length;I+=1)S(I);te()}_[3].hpTrack==="top"?y?(y.p(_,V),V[0]&8&&D(y,1)):(y=Rt(_),y.c(),D(y,1),y.m(r,null)):y&&(ee(),z(y,1,1,()=>{y=null}),te())},i(_){if(!w){for(let V=0;V<d.length;V+=1)D(n[V]);D(y),w=!0}},o(_){n=n.filter(Boolean);for(let V=0;V<n.length;V+=1)z(n[V]);z(y),w=!1},d(_){c&&c.d(_),_&&h(e),_&&h(l),ve(o,_),_&&h(s),_&&h(r),ve(n,_),y&&y.d()}}}function Ht(a){let e,l,t,s,r,i=pt("fa-solid fa-user-check")+"",k,w,c=a[0].spec.speakers.length+"",E,o,d,n,S,y=pt("fa-regular fa-calendar")+"",_,V,I=a[0].spec.events.length+"",q,C,K,J,fe,ue=pt("fa-solid fa-users")+"",he,re,Q=a[2].global.tickets+"",pe,me;return{c(){e=m("section"),l=m("div"),t=m("div"),s=m("div"),r=new it,k=j(),w=m("b"),E=N(c),o=N(" p\u0159edn\xE1\u0161ej\xEDc\xEDch"),d=j(),n=m("div"),S=new it,_=j(),V=m("b"),q=N(I),C=N(" ud\xE1lost\xED"),K=j(),J=m("div"),fe=new it,he=j(),re=m("b"),pe=N(Q),me=N(" n\xE1vst\u011Bvn\xEDk\u016F"),this.h()},l(R){e=g(R,"SECTION",{class:!0});var U=b(e);l=g(U,"DIV",{class:!0});var je=b(l);t=g(je,"DIV",{class:!0});var le=b(t);s=g(le,"DIV",{});var Y=b(s);r=ct(Y),k=T(Y),w=g(Y,"B",{});var Te=b(w);E=B(Te,c),Te.forEach(h),o=B(Y," p\u0159edn\xE1\u0161ej\xEDc\xEDch"),Y.forEach(h),d=T(le),n=g(le,"DIV",{});var ae=b(n);S=ct(ae),_=T(ae),V=g(ae,"B",{});var W=b(V);q=B(W,I),W.forEach(h),C=B(ae," ud\xE1lost\xED"),ae.forEach(h),K=T(le),J=g(le,"DIV",{});var se=b(J);fe=ct(se),he=T(se),re=g(se,"B",{});var ze=b(re);pe=B(ze,Q),ze.forEach(h),me=B(se," n\xE1vst\u011Bvn\xEDk\u016F"),se.forEach(h),le.forEach(h),je.forEach(h),U.forEach(h),this.h()},h(){r.a=k,S.a=_,fe.a=he,v(t,"class","text-center text-xl sm:text-xl lg:text-2xl text-blue-web px-8 flex flex-wrap gap-4 lg:gap-8 justify-center"),v(l,"class","pb-4 pt-4 lg:pt-4 lg:pb-4 mx-auto sm:px-2 lg:px-6 2xl:px-16"),v(e,"class","bg-blue-web-light")},m(R,U){M(R,e,U),f(e,l),f(l,t),f(t,s),r.m(i,s),f(s,k),f(s,w),f(w,E),f(s,o),f(t,d),f(t,n),S.m(y,n),f(n,_),f(n,V),f(V,q),f(n,C),f(t,K),f(t,J),fe.m(ue,J),f(J,he),f(J,re),f(re,pe),f(J,me)},p(R,U){U[0]&1&&c!==(c=R[0].spec.speakers.length+"")&&_e(E,c),U[0]&1&&I!==(I=R[0].spec.events.length+"")&&_e(q,I),U[0]&4&&Q!==(Q=R[2].global.tickets+"")&&_e(pe,Q)},d(R){R&&h(e)}}}function Pt(a){let e,l=a[0].spec.speakers.length+"",t,s;return{c(){e=N("("),t=N(l),s=N(")")},l(r){e=B(r,"("),t=B(r,l),s=B(r,")")},m(r,i){M(r,e,i),M(r,t,i),M(r,s,i)},p(r,i){i[0]&1&&l!==(l=r[0].spec.speakers.length+"")&&_e(t,l)},d(r){r&&h(e),r&&h(t),r&&h(s)}}}function Lt(a){let e,l=(a[28].shortname||a[28].name)+"",t,s,r,i,k,w,c=!a[28].id&&Pt(a);return{c(){e=m("div"),t=N(l),s=j(),c&&c.c(),r=j(),this.h()},l(E){e=g(E,"DIV",{class:!0});var o=b(e);t=B(o,l),s=T(o),c&&c.l(o),r=T(o),o.forEach(h),this.h()},h(){v(e,"class",i="py-1.5 sm:py-2 px-2.5 sm:px-8 rounded-full shadow border border-solid "+(a[3].hpTrack===a[28].id?"bg-utxo-gradient border-0 text-white":"border-blue-web hover:bg-blue-web hover:text-white hover:border-transparent cursor-pointer"))},m(E,o){M(E,e,o),f(e,t),f(e,s),c&&c.m(e,null),f(e,r),k||(w=al(e,"click",function(){pl(a[5](a[28].id))&&a[5](a[28].id).apply(this,arguments)}),k=!0)},p(E,o){a=E,o[0]&2&&l!==(l=(a[28].shortname||a[28].name)+"")&&_e(t,l),a[28].id?c&&(c.d(1),c=null):c?c.p(a,o):(c=Pt(a),c.c(),c.m(e,r)),o[0]&10&&i!==(i="py-1.5 sm:py-2 px-2.5 sm:px-8 rounded-full shadow border border-solid "+(a[3].hpTrack===a[28].id?"bg-utxo-gradient border-0 text-white":"border-blue-web hover:bg-blue-web hover:text-white hover:border-transparent cursor-pointer"))&&v(e,"class",i)},d(E){E&&h(e),c&&c.d(),k=!1,w()}}}function qt(a){let e=!a[3].hpTrack||a[23].tracks&&a[23].tracks.includes(a[3].hpTrack)||a[3].hpTrack==="top",l,t,s=e&&Ct(a);return{c(){s&&s.c(),l=Oe()},l(r){s&&s.l(r),l=Oe()},m(r,i){s&&s.m(r,i),M(r,l,i),t=!0},p(r,i){i[0]&9&&(e=!r[3].hpTrack||r[23].tracks&&r[23].tracks.includes(r[3].hpTrack)||r[3].hpTrack==="top"),e?s?(s.p(r,i),i[0]&9&&D(s,1)):(s=Ct(r),s.c(),D(s,1),s.m(l.parentNode,l)):s&&(ee(),z(s,1,1,()=>{s=null}),te())},i(r){t||(D(s),t=!0)},o(r){z(s),t=!1},d(r){s&&s.d(r),r&&h(l)}}}function Ct(a){let e,l;return e=new Ge({props:{speaker:a[23]}}),{c(){oe(e.$$.fragment)},l(t){ne(e.$$.fragment,t)},m(t,s){ie(e,t,s),l=!0},p(t,s){const r={};s[0]&1&&(r.speaker=t[23]),e.$set(r)},i(t){l||(D(e.$$.fragment,t),l=!0)},o(t){z(e.$$.fragment,t),l=!1},d(t){ce(e,t)}}}function Kt(a){let e,l,t=(a[3].hpTrack==="top"&&a[23].lead===!0||a[3].hpTrack!=="top")&&qt(a);return{c(){t&&t.c(),e=Oe()},l(s){t&&t.l(s),e=Oe()},m(s,r){t&&t.m(s,r),M(s,e,r),l=!0},p(s,r){s[3].hpTrack==="top"&&s[23].lead===!0||s[3].hpTrack!=="top"?t?(t.p(s,r),r[0]&9&&D(t,1)):(t=qt(s),t.c(),D(t,1),t.m(e.parentNode,e)):t&&(ee(),z(t,1,1,()=>{t=null}),te())},i(s){l||(D(t),l=!0)},o(s){z(t),l=!1},d(s){t&&t.d(s),s&&h(e)}}}function Rt(a){let e,l,t,s,r,i,k,w=a[0].spec.speakers.filter(Wt).sort(a[9]).slice(0,27),c=[];for(let o=0;o<w.length;o+=1)c[o]=Xt(xt(a,w,o));const E=o=>z(c[o],1,1,()=>{c[o]=null});return{c(){e=m("div"),l=m("div"),t=j(),s=m("div");for(let o=0;o<c.length;o+=1)c[o].c();this.h()},l(o){e=g(o,"DIV",{class:!0});var d=b(e);l=g(d,"DIV",{class:!0}),b(l).forEach(h),t=T(d),s=g(d,"DIV",{class:!0});var n=b(s);for(let S=0;S<c.length;S+=1)c[S].l(n);n.forEach(h),d.forEach(h),this.h()},h(){v(l,"class","absolute inset-0 bg-gradient-to-b from-transparent to-white flex"),v(s,"class","flex flex-wrap gap-3 mt-10 justify-center"),v(e,"class","relative cursor-pointer mb-10 max-w-screen-2xl mx-auto")},m(o,d){M(o,e,d),f(e,l),f(e,t),f(e,s);for(let n=0;n<c.length;n+=1)c[n].m(s,null);r=!0,i||(k=al(l,"click",a[6]),i=!0)},p(o,d){if(d[0]&1){w=o[0].spec.speakers.filter(Wt).sort(o[9]).slice(0,27);let n;for(n=0;n<w.length;n+=1){const S=xt(o,w,n);c[n]?(c[n].p(S,d),D(c[n],1)):(c[n]=Xt(S),c[n].c(),D(c[n],1),c[n].m(s,null))}for(ee(),n=w.length;n<c.length;n+=1)E(n);te()}},i(o){if(!r){for(let d=0;d<w.length;d+=1)D(c[d]);r=!0}},o(o){c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)z(c[d]);r=!1},d(o){o&&h(e),ve(c,o),i=!1,k()}}}function Xt(a){let e,l;return e=new Ge({props:{speaker:a[23],size:"small"}}),{c(){oe(e.$$.fragment)},l(t){ne(e.$$.fragment,t)},m(t,s){ie(e,t,s),l=!0},p(t,s){const r={};s[0]&1&&(r.speaker=t[23]),e.$set(r)},i(t){l||(D(e.$$.fragment,t),l=!0)},o(t){z(e.$$.fragment,t),l=!1},d(t){ce(e,t)}}}function Ut(a){let e,l,t,s,r,i,k=a[14].name+"",w,c,E;return t=new Ge({props:{speaker:a[14],col:"partners",size:"custom",customSize:"w-28 shadow-xl"}}),{c(){e=m("div"),l=m("a"),oe(t.$$.fragment),r=j(),i=m("div"),w=N(k),c=j(),this.h()},l(o){e=g(o,"DIV",{class:!0});var d=b(e);l=g(d,"A",{href:!0,target:!0});var n=b(l);ne(t.$$.fragment,n),n.forEach(h),r=T(d),i=g(d,"DIV",{class:!0});var S=b(i);w=B(S,k),S.forEach(h),c=T(d),d.forEach(h),this.h()},h(){v(l,"href",s=a[14].web.url),v(l,"target","_blank"),v(i,"class","text-center text-sm uppercase font-bold"),v(e,"class","w-32")},m(o,d){M(o,e,d),f(e,l),ie(t,l,null),f(e,r),f(e,i),f(i,w),f(e,c),E=!0},p(o,d){const n={};d[0]&1&&(n.speaker=o[14]),t.$set(n),(!E||d[0]&1&&s!==(s=o[14].web.url))&&v(l,"href",s),(!E||d[0]&1)&&k!==(k=o[14].name+"")&&_e(w,k)},i(o){E||(D(t.$$.fragment,o),E=!0)},o(o){z(t.$$.fragment,o),E=!1},d(o){o&&h(e),ce(t)}}}function Ft(a){let e,l,t,s,r,i,k=a[14].name+"",w,c,E;return t=new Ge({props:{speaker:a[14],col:"partners",size:"custom",customSize:"w-20 shadow-xl"}}),{c(){e=m("div"),l=m("a"),oe(t.$$.fragment),r=j(),i=m("div"),w=N(k),c=j(),this.h()},l(o){e=g(o,"DIV",{class:!0});var d=b(e);l=g(d,"A",{href:!0,target:!0});var n=b(l);ne(t.$$.fragment,n),n.forEach(h),r=T(d),i=g(d,"DIV",{class:!0});var S=b(i);w=B(S,k),S.forEach(h),c=T(d),d.forEach(h),this.h()},h(){v(l,"href",s=a[14].web.url),v(l,"target","_blank"),v(i,"class","text-center text-sm uppercase font-bold"),v(e,"class","w-32")},m(o,d){M(o,e,d),f(e,l),ie(t,l,null),f(e,r),f(e,i),f(i,w),f(e,c),E=!0},p(o,d){const n={};d[0]&1&&(n.speaker=o[14]),t.$set(n),(!E||d[0]&1&&s!==(s=o[14].web.url))&&v(l,"href",s),(!E||d[0]&1)&&k!==(k=o[14].name+"")&&_e(w,k)},i(o){E||(D(t.$$.fragment,o),E=!0)},o(o){z(t.$$.fragment,o),E=!1},d(o){o&&h(e),ce(t)}}}function kl(a){let e,l,t,s;return l=new Ge({props:{speaker:a[14],col:"partners",size:"custom",customSize:"w-20 shadow-lg"}}),{c(){e=m("a"),oe(l.$$.fragment),this.h()},l(r){e=g(r,"A",{href:!0,target:!0});var i=b(e);ne(l.$$.fragment,i),i.forEach(h),this.h()},h(){v(e,"href",t=a[14].web?a[14].web.url:a[14].twitter?`https://twitter.com/${a[14].twitter}`:""),v(e,"target","_blank")},m(r,i){M(r,e,i),ie(l,e,null),s=!0},p(r,i){const k={};i[0]&1&&(k.speaker=r[14]),l.$set(k),(!s||i[0]&1&&t!==(t=r[14].web?r[14].web.url:r[14].twitter?`https://twitter.com/${r[14].twitter}`:""))&&v(e,"href",t)},i(r){s||(D(l.$$.fragment,r),s=!0)},o(r){z(l.$$.fragment,r),s=!1},d(r){r&&h(e),ce(l)}}}function Qt(a){let e,l,t,s;return l=new sl({props:{tip:a[14].name,bottom:"true",$$slots:{default:[kl]},$$scope:{ctx:a}}}),{c(){e=m("div"),oe(l.$$.fragment),t=j()},l(r){e=g(r,"DIV",{});var i=b(e);ne(l.$$.fragment,i),t=T(i),i.forEach(h)},m(r,i){M(r,e,i),ie(l,e,null),f(e,t),s=!0},p(r,i){const k={};i[0]&1&&(k.tip=r[14].name),i[0]&1|i[1]&1&&(k.$$scope={dirty:i,ctx:r}),l.$set(k)},i(r){s||(D(l.$$.fragment,r),s=!0)},o(r){z(l.$$.fragment,r),s=!1},d(r){r&&h(e),ce(l)}}}function bl(a){let e,l,t,s;return l=new Ge({props:{speaker:a[14],col:"partners",size:"custom",customSize:"w-16 shadow-lg"}}),{c(){e=m("a"),oe(l.$$.fragment),this.h()},l(r){e=g(r,"A",{href:!0,target:!0});var i=b(e);ne(l.$$.fragment,i),i.forEach(h),this.h()},h(){v(e,"href",t=a[14].web?a[14].web.url:a[14].twitter?`https://twitter.com/${a[14].twitter}`:""),v(e,"target","_blank")},m(r,i){M(r,e,i),ie(l,e,null),s=!0},p(r,i){const k={};i[0]&1&&(k.speaker=r[14]),l.$set(k),(!s||i[0]&1&&t!==(t=r[14].web?r[14].web.url:r[14].twitter?`https://twitter.com/${r[14].twitter}`:""))&&v(e,"href",t)},i(r){s||(D(l.$$.fragment,r),s=!0)},o(r){z(l.$$.fragment,r),s=!1},d(r){r&&h(e),ce(l)}}}function Yt(a){let e,l,t,s;return l=new sl({props:{tip:a[14].name,bottom:"true",$$slots:{default:[bl]},$$scope:{ctx:a}}}),{c(){e=m("div"),oe(l.$$.fragment),t=j()},l(r){e=g(r,"DIV",{});var i=b(e);ne(l.$$.fragment,i),t=T(i),i.forEach(h)},m(r,i){M(r,e,i),ie(l,e,null),f(e,t),s=!0},p(r,i){const k={};i[0]&1&&(k.tip=r[14].name),i[0]&1|i[1]&1&&(k.$$scope={dirty:i,ctx:r}),l.$set(k)},i(r){s||(D(l.$$.fragment,r),s=!0)},o(r){z(l.$$.fragment,r),s=!1},d(r){r&&h(e),ce(l)}}}function Zt(a){let e,l,t,s,r,i,k,w=a[0].spec.faqs,c=[];for(let o=0;o<w.length;o+=1)c[o]=Jt(St(a,w,o));const E=o=>z(c[o],1,1,()=>{c[o]=null});return{c(){e=m("section"),l=m("div"),t=m("h2"),s=N("\u010Casto kladen\xE9 dotazy (FAQ)"),r=j(),i=m("div");for(let o=0;o<c.length;o+=1)c[o].c();this.h()},l(o){e=g(o,"SECTION",{class:!0});var d=b(e);l=g(d,"DIV",{class:!0});var n=b(l);t=g(n,"H2",{class:!0,id:!0});var S=b(t);s=B(S,"\u010Casto kladen\xE9 dotazy (FAQ)"),S.forEach(h),r=T(n),i=g(n,"DIV",{class:!0});var y=b(i);for(let _=0;_<c.length;_+=1)c[_].l(y);y.forEach(h),n.forEach(h),d.forEach(h),this.h()},h(){v(t,"class","uppercase pt-5 text-center"),v(t,"id","faq"),v(i,"class","md:columns-2 columns-1 mt-8 h-auto"),v(l,"class","text-blue-web"),v(e,"class","relative mx-auto py-10 px-6 max-w-6xl")},m(o,d){M(o,e,d),f(e,l),f(l,t),f(t,s),f(l,r),f(l,i);for(let n=0;n<c.length;n+=1)c[n].m(i,null);k=!0},p(o,d){if(d[0]&17){w=o[0].spec.faqs;let n;for(n=0;n<w.length;n+=1){const S=St(o,w,n);c[n]?(c[n].p(S,d),D(c[n],1)):(c[n]=Jt(S),c[n].c(),D(c[n],1),c[n].m(i,null))}for(ee(),n=w.length;n<c.length;n+=1)E(n);te()}},i(o){if(!k){for(let d=0;d<w.length;d+=1)D(c[d]);k=!0}},o(o){c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)z(c[d]);k=!1},d(o){o&&h(e),ve(c,o)}}}function Jt(a){let e,l,t=a[11].question+"",s,r,i,k,w;return i=new ml({props:{source:a[11].answer,renderers:a[4]}}),{c(){e=m("div"),l=m("div"),s=N(t),r=j(),oe(i.$$.fragment),k=j(),this.h()},l(c){e=g(c,"DIV",{class:!0});var E=b(e);l=g(E,"DIV",{class:!0});var o=b(l);s=B(o,t),o.forEach(h),r=T(E),ne(i.$$.fragment,E),k=T(E),E.forEach(h),this.h()},h(){v(l,"class","mb-4 font-bold"),v(e,"class","mb-5 break-inside-avoid-column bg-blue-100/60 rounded-xl px-8 py-6 text-left transition-all box-shadow-light overflow-visible")},m(c,E){M(c,e,E),f(e,l),f(l,s),f(e,r),ie(i,e,null),f(e,k),w=!0},p(c,E){(!w||E[0]&1)&&t!==(t=c[11].question+"")&&_e(s,t);const o={};E[0]&1&&(o.source=c[11].answer),i.$set(o)},i(c){w||(D(i.$$.fragment,c),w=!0)},o(c){z(i.$$.fragment,c),w=!1},d(c){c&&h(e),ce(i)}}}function wl(a){let e,l,t,s,r,i,k,w,c,E,o,d,n,S,y,_,V,I,q,C,K,J,fe,ue,he,re,Q,pe,me,R,U,je,le,Y,Te,ae,W,se,ze,Ue,Fe,Pe,ge,H,Se,Qe,Ye,ye,Ze,Je,ke,We,Ne,et,tt,be,lt,Be,rt,at,we,st,Me,ot,nt,$e,Le,xe,Ae;document.title=e="UTXO.22 "+(a[0]?"- "+a[0].description:"");let P=a[0]&&At(a),Ee=a[0].spec.partners.filter(el).slice(0,4),x=[];for(let u=0;u<Ee.length;u+=1)x[u]=Ut(Mt(a,Ee,u));const ol=u=>z(x[u],1,1,()=>{x[u]=null});let Ie=a[0].spec.partners.filter(tl).slice(4),O=[];for(let u=0;u<Ie.length;u+=1)O[u]=Ft(Bt(a,Ie,u));const nl=u=>z(O[u],1,1,()=>{O[u]=null});let De=a[0].spec.partners.filter(ll),G=[];for(let u=0;u<De.length;u+=1)G[u]=Qt(Nt(a,De,u));const il=u=>z(G[u],1,1,()=>{G[u]=null});let Ve=a[0].spec.partners.filter(rl),A=[];for(let u=0;u<Ve.length;u+=1)A[u]=Yt(yt(a,Ve,u));const cl=u=>z(A[u],1,1,()=>{A[u]=null});let L=a[0]&&Zt(a);return{c(){l=j(),P&&P.c(),t=j(),s=m("section"),r=m("div"),i=m("div"),k=m("div"),w=m("img"),E=j(),o=m("div"),d=m("div"),n=m("img"),y=j(),_=m("div"),V=m("img"),q=j(),C=m("div"),K=m("div"),J=N("M\xEDsto"),fe=j(),ue=m("div"),he=N("Gabriel Loci"),re=j(),Q=m("div"),pe=N("Hole\u010Dkova 106/10, 150 00 Praha 5 - Sm\xEDchov \u{1F1E8}\u{1F1FF}"),me=m("br"),R=m("span"),U=m("a"),je=N("Google Maps"),le=N(`,
            `),Y=m("a"),Te=N("Mapy.cz"),ae=j(),W=m("div"),se=N(`Benediktinky. Kulturn\xED pam\xE1tka. \u010Cesk\xE1 Po\u0161ta. Po\u0161tovn\xED muzeum. Na prvn\xED
          pohled nesouvisej\xEDc\xED n\xE1zvy, kter\xE9 jsou ale neodmyslitelnou sou\u010D\xE1st\xED
          unik\xE1tn\xEDho komplexu Gabriel Loci na pra\u017Esk\xE9m Sm\xEDchov\u011B doslova p\xE1r
          minut od centra. Na konci 19.stolet\xED v kl\xE1\u0161te\u0159e s\xEDdlily \u0159eholnice,
          \u017Eensk\xE9 opatstv\xED \u0159\xE1du benediktinek beuronsk\xE9 kongregace. Pozd\u011Bji
          prostory spravovalo \u010Deskoslovensk\xE9 Ministerstvo po\u0161t a telegraf\u016F. Dnes
          komplex vyu\u017E\xEDvaj\xED hlavn\u011B nat\xE1\u010Dec\xED studia jako HBO, Netflix nebo i \u010CT.
          No a my! \u{1F4AA}`),ze=m("br"),Ue=m("br"),Fe=N(`
          Za\u017Eijte mysteri\xF3zn\xED atmosf\xE9ru komplexu na 1.ro\u010Dn\xEDku konference UTXO.22.
          \u010C\xE1st after-party si u\u017Eijete doslova v pitevn\u011B ze seri\xE1lu Devades\xE1tky \u{1F44C}\u{1F600}`),Pe=j(),ge=m("section"),H=m("div"),Se=m("div"),Qe=N("Partne\u0159i"),Ye=j(),ye=m("div"),Ze=N("Hlavn\xED sponzo\u0159i"),Je=j(),ke=m("div");for(let u=0;u<x.length;u+=1)x[u].c();We=j(),Ne=m("div"),et=N("Sponzo\u0159i"),tt=j(),be=m("div");for(let u=0;u<O.length;u+=1)O[u].c();lt=j(),Be=m("div"),rt=N("Komunity"),at=j(),we=m("div");for(let u=0;u<G.length;u+=1)G[u].c();st=j(),Me=m("div"),ot=N("Medi\xE1ln\xED partne\u0159i"),nt=j(),$e=m("div");for(let u=0;u<A.length;u+=1)A[u].c();Le=j(),L&&L.c(),xe=Oe(),this.h()},l(u){dl('[data-svelte="svelte-d9wawy"]',document.head).forEach(h),l=T(u),P&&P.l(u),t=T(u),s=g(u,"SECTION",{class:!0});var p=b(s);r=g(p,"DIV",{class:!0});var Z=b(r);i=g(Z,"DIV",{class:!0});var qe=b(i);k=g(qe,"DIV",{class:!0});var Ce=b(k);w=g(Ce,"IMG",{src:!0,class:!0,alt:!0}),E=T(Ce),o=g(Ce,"DIV",{class:!0});var Ke=b(o);d=g(Ke,"DIV",{class:!0});var dt=b(d);n=g(dt,"IMG",{src:!0,class:!0,alt:!0}),dt.forEach(h),y=T(Ke),_=g(Ke,"DIV",{class:!0});var vt=b(_);V=g(vt,"IMG",{src:!0,class:!0,alt:!0}),vt.forEach(h),Ke.forEach(h),Ce.forEach(h),q=T(qe),C=g(qe,"DIV",{class:!0});var de=b(C);K=g(de,"DIV",{class:!0});var _t=b(K);J=B(_t,"M\xEDsto"),_t.forEach(h),fe=T(de),ue=g(de,"DIV",{class:!0});var mt=b(ue);he=B(mt,"Gabriel Loci"),mt.forEach(h),re=T(de),Q=g(de,"DIV",{class:!0});var Re=b(Q);pe=B(Re,"Hole\u010Dkova 106/10, 150 00 Praha 5 - Sm\xEDchov \u{1F1E8}\u{1F1FF}"),me=g(Re,"BR",{}),R=g(Re,"SPAN",{class:!0});var Xe=b(R);U=g(Xe,"A",{href:!0,class:!0,target:!0});var gt=b(U);je=B(gt,"Google Maps"),gt.forEach(h),le=B(Xe,`,
            `),Y=g(Xe,"A",{href:!0,class:!0,target:!0});var kt=b(Y);Te=B(kt,"Mapy.cz"),kt.forEach(h),Xe.forEach(h),Re.forEach(h),ae=T(de),W=g(de,"DIV",{class:!0});var He=b(W);se=B(He,`Benediktinky. Kulturn\xED pam\xE1tka. \u010Cesk\xE1 Po\u0161ta. Po\u0161tovn\xED muzeum. Na prvn\xED
          pohled nesouvisej\xEDc\xED n\xE1zvy, kter\xE9 jsou ale neodmyslitelnou sou\u010D\xE1st\xED
          unik\xE1tn\xEDho komplexu Gabriel Loci na pra\u017Esk\xE9m Sm\xEDchov\u011B doslova p\xE1r
          minut od centra. Na konci 19.stolet\xED v kl\xE1\u0161te\u0159e s\xEDdlily \u0159eholnice,
          \u017Eensk\xE9 opatstv\xED \u0159\xE1du benediktinek beuronsk\xE9 kongregace. Pozd\u011Bji
          prostory spravovalo \u010Deskoslovensk\xE9 Ministerstvo po\u0161t a telegraf\u016F. Dnes
          komplex vyu\u017E\xEDvaj\xED hlavn\u011B nat\xE1\u010Dec\xED studia jako HBO, Netflix nebo i \u010CT.
          No a my! \u{1F4AA}`),ze=g(He,"BR",{}),Ue=g(He,"BR",{}),Fe=B(He,`
          Za\u017Eijte mysteri\xF3zn\xED atmosf\xE9ru komplexu na 1.ro\u010Dn\xEDku konference UTXO.22.
          \u010C\xE1st after-party si u\u017Eijete doslova v pitevn\u011B ze seri\xE1lu Devades\xE1tky \u{1F44C}\u{1F600}`),He.forEach(h),de.forEach(h),qe.forEach(h),Z.forEach(h),p.forEach(h),Pe=T(u),ge=g(u,"SECTION",{class:!0});var bt=b(ge);H=g(bt,"DIV",{class:!0});var X=b(H);Se=g(X,"DIV",{class:!0});var wt=b(Se);Qe=B(wt,"Partne\u0159i"),wt.forEach(h),Ye=T(X),ye=g(X,"DIV",{class:!0});var $t=b(ye);Ze=B($t,"Hlavn\xED sponzo\u0159i"),$t.forEach(h),Je=T(X),ke=g(X,"DIV",{class:!0});var Et=b(ke);for(let F=0;F<x.length;F+=1)x[F].l(Et);Et.forEach(h),We=T(X),Ne=g(X,"DIV",{class:!0});var It=b(Ne);et=B(It,"Sponzo\u0159i"),It.forEach(h),tt=T(X),be=g(X,"DIV",{class:!0});var Dt=b(be);for(let F=0;F<O.length;F+=1)O[F].l(Dt);Dt.forEach(h),lt=T(X),Be=g(X,"DIV",{class:!0});var Vt=b(Be);rt=B(Vt,"Komunity"),Vt.forEach(h),at=T(X),we=g(X,"DIV",{class:!0});var jt=b(we);for(let F=0;F<G.length;F+=1)G[F].l(jt);jt.forEach(h),st=T(X),Me=g(X,"DIV",{class:!0});var Tt=b(Me);ot=B(Tt,"Medi\xE1ln\xED partne\u0159i"),Tt.forEach(h),nt=T(X),$e=g(X,"DIV",{class:!0});var zt=b($e);for(let F=0;F<A.length;F+=1)A[F].l(zt);zt.forEach(h),X.forEach(h),bt.forEach(h),Le=T(u),L&&L.l(u),xe=Oe(),this.h()},h(){ft(w.src,c="/photos/gabriel-loci.jpeg")||v(w,"src",c),v(w,"class","flex rounded-xl shadow-xl"),v(w,"alt","Gabriel Loci"),ft(n.src,S="/photos/rajska-zahrada.jpeg")||v(n,"src",S),v(n,"class","rounded-lg shadow-lg"),v(n,"alt","Gabriel Loci - Rajsk\xE1 zahrada"),v(d,"class","w-1/2"),ft(V.src,I="/photos/knihovna.jpeg")||v(V,"src",I),v(V,"class","rounded-lg shadow-lg"),v(V,"alt","Gabriel Loci - Knihovna"),v(_,"class","w-1/2"),v(o,"class","flex mt-3 gap-3"),v(k,"class","block flex-1"),v(K,"class","uppercase"),v(ue,"class","uppercase mt-3 text-4xl font-bold"),v(U,"href","https://goo.gl/maps/u1aY4RxXMgcm889V7"),v(U,"class","underline hover:no-underline"),v(U,"target","_blank"),v(Y,"href","https://mapy.cz/s/cuvetubafo"),v(Y,"class","underline hover:no-underline"),v(Y,"target","_blank"),v(R,"class","font-normal"),v(Q,"class","mt-4 font-bold"),v(W,"class","mt-4"),v(C,"class","text-white md:w-1/2 md:pt-0 pt-6"),v(i,"class","py-6 md:py-10 md:flex gap-12"),v(r,"class","relative mx-auto py-6 px-6 max-w-6xl"),v(s,"class","bg-utxo-gradient"),v(Se,"class","text-2xl uppercase font-bold text-center"),v(ye,"class","mt-6 text-center"),v(ke,"class","mt-6 flex flex-wrap gap-8 justify-center"),v(Ne,"class","mt-6 text-center"),v(be,"class","mt-6 flex flex-wrap gap-8 justify-center"),v(Be,"class","mt-10 text-center"),v(we,"class","mt-6 flex flex-wrap gap-6 justify-center"),v(Me,"class","mt-10 text-center"),v($e,"class","mt-6 flex flex-wrap gap-4 justify-center"),v(H,"class","text-blue-web lg:mt-10"),v(ge,"class","mx-auto py-10 px-6 max-w-auto overflow-hidden")},m(u,$){M(u,l,$),P&&P.m(u,$),M(u,t,$),M(u,s,$),f(s,r),f(r,i),f(i,k),f(k,w),f(k,E),f(k,o),f(o,d),f(d,n),f(o,y),f(o,_),f(_,V),f(i,q),f(i,C),f(C,K),f(K,J),f(C,fe),f(C,ue),f(ue,he),f(C,re),f(C,Q),f(Q,pe),f(Q,me),f(Q,R),f(R,U),f(U,je),f(R,le),f(R,Y),f(Y,Te),f(C,ae),f(C,W),f(W,se),f(W,ze),f(W,Ue),f(W,Fe),M(u,Pe,$),M(u,ge,$),f(ge,H),f(H,Se),f(Se,Qe),f(H,Ye),f(H,ye),f(ye,Ze),f(H,Je),f(H,ke);for(let p=0;p<x.length;p+=1)x[p].m(ke,null);f(H,We),f(H,Ne),f(Ne,et),f(H,tt),f(H,be);for(let p=0;p<O.length;p+=1)O[p].m(be,null);f(H,lt),f(H,Be),f(Be,rt),f(H,at),f(H,we);for(let p=0;p<G.length;p+=1)G[p].m(we,null);f(H,st),f(H,Me),f(Me,ot),f(H,nt),f(H,$e);for(let p=0;p<A.length;p+=1)A[p].m($e,null);M(u,Le,$),L&&L.m(u,$),M(u,xe,$),Ae=!0},p(u,$){if((!Ae||$[0]&1)&&e!==(e="UTXO.22 "+(u[0]?"- "+u[0].description:""))&&(document.title=e),u[0]?P?(P.p(u,$),$[0]&1&&D(P,1)):(P=At(u),P.c(),D(P,1),P.m(t.parentNode,t)):P&&(ee(),z(P,1,1,()=>{P=null}),te()),$[0]&1){Ee=u[0].spec.partners.filter(el).slice(0,4);let p;for(p=0;p<Ee.length;p+=1){const Z=Mt(u,Ee,p);x[p]?(x[p].p(Z,$),D(x[p],1)):(x[p]=Ut(Z),x[p].c(),D(x[p],1),x[p].m(ke,null))}for(ee(),p=Ee.length;p<x.length;p+=1)ol(p);te()}if($[0]&1){Ie=u[0].spec.partners.filter(tl).slice(4);let p;for(p=0;p<Ie.length;p+=1){const Z=Bt(u,Ie,p);O[p]?(O[p].p(Z,$),D(O[p],1)):(O[p]=Ft(Z),O[p].c(),D(O[p],1),O[p].m(be,null))}for(ee(),p=Ie.length;p<O.length;p+=1)nl(p);te()}if($[0]&1){De=u[0].spec.partners.filter(ll);let p;for(p=0;p<De.length;p+=1){const Z=Nt(u,De,p);G[p]?(G[p].p(Z,$),D(G[p],1)):(G[p]=Qt(Z),G[p].c(),D(G[p],1),G[p].m(we,null))}for(ee(),p=De.length;p<G.length;p+=1)il(p);te()}if($[0]&1){Ve=u[0].spec.partners.filter(rl);let p;for(p=0;p<Ve.length;p+=1){const Z=yt(u,Ve,p);A[p]?(A[p].p(Z,$),D(A[p],1)):(A[p]=Yt(Z),A[p].c(),D(A[p],1),A[p].m($e,null))}for(ee(),p=Ve.length;p<A.length;p+=1)cl(p);te()}u[0]?L?(L.p(u,$),$[0]&1&&D(L,1)):(L=Zt(u),L.c(),D(L,1),L.m(xe.parentNode,xe)):L&&(ee(),z(L,1,1,()=>{L=null}),te())},i(u){if(!Ae){D(P);for(let $=0;$<Ee.length;$+=1)D(x[$]);for(let $=0;$<Ie.length;$+=1)D(O[$]);for(let $=0;$<De.length;$+=1)D(G[$]);for(let $=0;$<Ve.length;$+=1)D(A[$]);D(L),Ae=!0}},o(u){z(P),x=x.filter(Boolean);for(let $=0;$<x.length;$+=1)z(x[$]);O=O.filter(Boolean);for(let $=0;$<O.length;$+=1)z(O[$]);G=G.filter(Boolean);for(let $=0;$<G.length;$+=1)z(G[$]);A=A.filter(Boolean);for(let $=0;$<A.length;$+=1)z(A[$]);z(L),Ae=!1},d(u){u&&h(l),P&&P.d(u),u&&h(t),u&&h(s),u&&h(Pe),u&&h(ge),ve(x,u),ve(O,u),ve(G,u),ve(A,u),u&&h(Le),L&&L.d(u),u&&h(xe)}}}const zl=!0;function pt(a="fa-regular fa-calendar"){return`<i class="${a} inline-block align-baseline pr-1.5 sm:pr-2.5 text-blue-web/40"></i>`}const Wt=a=>!a.lead,el=a=>a.type==="sponsor",tl=a=>a.type==="sponsor",ll=a=>a.type==="community",rl=a=>a.type==="medium";function $l(a,e,l){let t,s,r,i,k,w;ut(a,vl,n=>l(0,i=n)),ut(a,_l,n=>l(2,k=n)),ut(a,ht,n=>l(3,w=n));const c={link:gl};function E(n){return function(){ht.update(S=>(S.hpTrack=n,S))}}function o(){ht.update(n=>(n.hpTrack=null,n))}const d=()=>.5-Math.random();return a.$$.update=()=>{a.$$.dirty[0]&1&&l(7,t=i),a.$$.dirty[0]&128&&l(8,s=t?t.spec.speakers.filter(n=>!!n.lead).length:0),a.$$.dirty[0]&384&&l(1,r=t?[{name:"Hlavn\xED p\u0159edn\xE1\u0161ej\xEDc\xED ("+s+")",id:"top"},{name:"V\u0161e",id:null}].concat(t.spec.tracks.filter(n=>n.hidden===void 0||n.hidden!==!0)):null)},[i,r,k,w,c,E,o,t,s,d]}class Sl extends fl{constructor(e){super();ul(this,e,$l,wl,hl,{},null,[-1,-1])}}export{Sl as default,zl as prerender};
