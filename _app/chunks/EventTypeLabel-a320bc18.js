import{S as b,i as x,s as _,e as v,k,t as w,c as m,a as p,d as h,m as E,h as z,b as o,g as D,F as u,E as y}from"./index-05c131b6.js";function I(n){let e,l,c,t,g=n[1].title+"",r,s,d;return{c(){e=v("div"),l=v("div"),c=k(),t=v("div"),r=w(g),this.h()},l(i){e=m(i,"DIV",{class:!0});var a=p(e);l=m(a,"DIV",{class:!0}),p(l).forEach(h),c=E(a),t=m(a,"DIV",{class:!0});var f=p(t);r=z(f,g),f.forEach(h),a.forEach(h),this.h()},h(){o(l,"class","w-1 rounded-l-sm "+n[1].style),o(t,"class",s=(n[0]==="big"?"px-2 py-0.5":"px-1.5 py-0.5")+" rounded-r-sm bg-gray-100 uppercase"),o(e,"class",d="flex "+(n[0]==="big"?"h-6 text-sm":"h-5 text-xs"))},m(i,a){D(i,e,a),u(e,l),u(e,c),u(e,t),u(t,r)},p(i,[a]){a&1&&s!==(s=(i[0]==="big"?"px-2 py-0.5":"px-1.5 py-0.5")+" rounded-r-sm bg-gray-100 uppercase")&&o(t,"class",s),a&1&&d!==(d="flex "+(i[0]==="big"?"h-6 text-sm":"h-5 text-xs"))&&o(e,"class",d)},i:y,o:y,d(i){i&&h(e)}}}function V(n,e,l){let{event:c={}}=e,{size:t=null}=e;const r={panel:{title:"Panelov\xE1 debata",style:"bg-custom-red text-white"},talk:{title:"P\u0159edn\xE1\u0161ka",style:"bg-custom-green text-white"},workshop:{title:"Workshop",style:"bg-custom-blue text-white"},other:{title:"Ostatn\xED",style:"bg-custom-yellow"},lightning:{title:"Lightning talk",style:"bg-pink-400"}}[c.type];return n.$$set=s=>{"event"in s&&l(2,c=s.event),"size"in s&&l(0,t=s.size)},[t,r,c]}class P extends b{constructor(e){super();x(this,e,V,I,_,{event:2,size:0})}}export{P as E};