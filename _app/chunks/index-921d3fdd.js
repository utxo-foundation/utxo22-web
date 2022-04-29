function h(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function f(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function v(e){f(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console!="undefined"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function R(e,t){f(2,arguments);var r=v(e).getTime(),a=h(t);return new Date(r+a)}function Q(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function X(e){return f(1,arguments),e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function _(e){if(f(1,arguments),!X(e)&&typeof e!="number")return!1;var t=v(e);return!isNaN(Number(t))}var j={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},I=function(e,t,r){var a,n=j[e];return typeof n=="string"?a=n:t===1?a=n.one:a=n.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+a:a+" ago":a},A=I;function W(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.width?String(t.width):e.defaultWidth,a=e.formats[r]||e.formats[e.defaultWidth];return a}}var G={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},B={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},V={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},$={date:W({formats:G,defaultWidth:"full"}),time:W({formats:B,defaultWidth:"full"}),dateTime:W({formats:V,defaultWidth:"full"})},J=$,z={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},K=function(e,t,r,a){return z[e]},Z=K;function C(e){return function(t,r){var a=r||{},n=a.context?String(a.context):"standalone",i;if(n==="formatting"&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,d=a.width?String(a.width):o;i=e.formattingValues[d]||e.formattingValues[o]}else{var s=e.defaultWidth,c=a.width?String(a.width):e.defaultWidth;i=e.values[c]||e.values[s]}var y=e.argumentCallback?e.argumentCallback(t):t;return i[y]}}var ee={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},te={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},re={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ae={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ne={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ie={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},oe=function(e,t){var r=Number(e),a=r%100;if(a>20||a<10)switch(a%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},ue={ordinalNumber:oe,era:C({values:ee,defaultWidth:"wide"}),quarter:C({values:te,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:C({values:re,defaultWidth:"wide"}),day:C({values:ae,defaultWidth:"wide"}),dayPeriod:C({values:ne,defaultWidth:"wide",formattingValues:ie,defaultFormattingWidth:"wide"})},se=ue;function D(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.width,n=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],i=t.match(n);if(!i)return null;var o=i[0],d=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(d)?ce(d,function(l){return l.test(o)}):de(d,function(l){return l.test(o)}),c;c=e.valueCallback?e.valueCallback(s):s,c=r.valueCallback?r.valueCallback(c):c;var y=t.slice(o.length);return{value:c,rest:y}}}function de(e,t){for(var r in e)if(e.hasOwnProperty(r)&&t(e[r]))return r}function ce(e,t){for(var r=0;r<e.length;r++)if(t(e[r]))return r}function fe(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.match(e.matchPattern);if(!a)return null;var n=a[0],i=t.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];o=r.valueCallback?r.valueCallback(o):o;var d=t.slice(n.length);return{value:o,rest:d}}}var me=/^(\d+)(th|st|nd|rd)?/i,he=/\d+/i,le={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ve={any:[/^b/i,/^(a|c)/i]},ge={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},we={any:[/1/i,/2/i,/3/i,/4/i]},ye={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},be={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},pe={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Te={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ce={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},De={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Me={ordinalNumber:fe({matchPattern:me,parsePattern:he,valueCallback:function(e){return parseInt(e,10)}}),era:D({matchPatterns:le,defaultMatchWidth:"wide",parsePatterns:ve,defaultParseWidth:"any"}),quarter:D({matchPatterns:ge,defaultMatchWidth:"wide",parsePatterns:we,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:D({matchPatterns:ye,defaultMatchWidth:"wide",parsePatterns:be,defaultParseWidth:"any"}),day:D({matchPatterns:pe,defaultMatchWidth:"wide",parsePatterns:Te,defaultParseWidth:"any"}),dayPeriod:D({matchPatterns:Ce,defaultMatchWidth:"any",parsePatterns:De,defaultParseWidth:"any"})},Pe=Me,Oe={code:"en-US",formatDistance:A,formatLong:J,formatRelative:Z,localize:se,match:Pe,options:{weekStartsOn:0,firstWeekContainsDate:1}},We=Oe;function xe(e,t){f(2,arguments);var r=h(t);return R(e,-r)}var ke=864e5;function Se(e){f(1,arguments);var t=v(e),r=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),n=r-a;return Math.floor(n/ke)+1}function P(e){f(1,arguments);var t=1,r=v(e),a=r.getUTCDay(),n=(a<t?7:0)+a-t;return r.setUTCDate(r.getUTCDate()-n),r.setUTCHours(0,0,0,0),r}function E(e){f(1,arguments);var t=v(e),r=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(r+1,0,4),a.setUTCHours(0,0,0,0);var n=P(a),i=new Date(0);i.setUTCFullYear(r,0,4),i.setUTCHours(0,0,0,0);var o=P(i);return t.getTime()>=n.getTime()?r+1:t.getTime()>=o.getTime()?r:r-1}function Ue(e){f(1,arguments);var t=E(e),r=new Date(0);r.setUTCFullYear(t,0,4),r.setUTCHours(0,0,0,0);var a=P(r);return a}var Ye=6048e5;function Ee(e){f(1,arguments);var t=v(e),r=P(t).getTime()-Ue(t).getTime();return Math.round(r/Ye)+1}function O(e,t){f(1,arguments);var r=t||{},a=r.locale,n=a&&a.options&&a.options.weekStartsOn,i=n==null?0:h(n),o=r.weekStartsOn==null?i:h(r.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=v(e),s=d.getUTCDay(),c=(s<o?7:0)+s-o;return d.setUTCDate(d.getUTCDate()-c),d.setUTCHours(0,0,0,0),d}function N(e,t){f(1,arguments);var r=v(e),a=r.getUTCFullYear(),n=t||{},i=n.locale,o=i&&i.options&&i.options.firstWeekContainsDate,d=o==null?1:h(o),s=n.firstWeekContainsDate==null?d:h(n.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(a+1,0,s),c.setUTCHours(0,0,0,0);var y=O(c,t),l=new Date(0);l.setUTCFullYear(a,0,s),l.setUTCHours(0,0,0,0);var p=O(l,t);return r.getTime()>=y.getTime()?a+1:r.getTime()>=p.getTime()?a:a-1}function Ne(e,t){f(1,arguments);var r=t||{},a=r.locale,n=a&&a.options&&a.options.firstWeekContainsDate,i=n==null?1:h(n),o=r.firstWeekContainsDate==null?i:h(r.firstWeekContainsDate),d=N(e,t),s=new Date(0);s.setUTCFullYear(d,0,o),s.setUTCHours(0,0,0,0);var c=O(s,t);return c}var Fe=6048e5;function qe(e,t){f(1,arguments);var r=v(e),a=O(r,t).getTime()-Ne(r,t).getTime();return Math.round(a/Fe)+1}function u(e,t){for(var r=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return r+a}var Le={y:function(e,t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return u(t==="yy"?a%100:a,t.length)},M:function(e,t){var r=e.getUTCMonth();return t==="M"?String(r+1):u(r+1,2)},d:function(e,t){return u(e.getUTCDate(),t.length)},a:function(e,t){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,t){return u(e.getUTCHours()%12||12,t.length)},H:function(e,t){return u(e.getUTCHours(),t.length)},m:function(e,t){return u(e.getUTCMinutes(),t.length)},s:function(e,t){return u(e.getUTCSeconds(),t.length)},S:function(e,t){var r=t.length,a=e.getUTCMilliseconds(),n=Math.floor(a*Math.pow(10,r-3));return u(n,t.length)}},w=Le,T={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},He={G:function(e,t,r){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(a,{width:"abbreviated"});case"GGGGG":return r.era(a,{width:"narrow"});case"GGGG":default:return r.era(a,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){var a=e.getUTCFullYear(),n=a>0?a:1-a;return r.ordinalNumber(n,{unit:"year"})}return w.y(e,t)},Y:function(e,t,r,a){var n=N(e,a),i=n>0?n:1-n;if(t==="YY"){var o=i%100;return u(o,2)}return t==="Yo"?r.ordinalNumber(i,{unit:"year"}):u(i,t.length)},R:function(e,t){var r=E(e);return u(r,t.length)},u:function(e,t){var r=e.getUTCFullYear();return u(r,t.length)},Q:function(e,t,r){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return u(a,2);case"Qo":return r.ordinalNumber(a,{unit:"quarter"});case"QQQ":return r.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,r){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return u(a,2);case"qo":return r.ordinalNumber(a,{unit:"quarter"});case"qqq":return r.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,r){var a=e.getUTCMonth();switch(t){case"M":case"MM":return w.M(e,t);case"Mo":return r.ordinalNumber(a+1,{unit:"month"});case"MMM":return r.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,r){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return u(a+1,2);case"Lo":return r.ordinalNumber(a+1,{unit:"month"});case"LLL":return r.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,r,a){var n=qe(e,a);return t==="wo"?r.ordinalNumber(n,{unit:"week"}):u(n,t.length)},I:function(e,t,r){var a=Ee(e);return t==="Io"?r.ordinalNumber(a,{unit:"week"}):u(a,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):w.d(e,t)},D:function(e,t,r){var a=Se(e);return t==="Do"?r.ordinalNumber(a,{unit:"dayOfYear"}):u(a,t.length)},E:function(e,t,r){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return r.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(a,{width:"short",context:"formatting"});case"EEEE":default:return r.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,r,a){var n=e.getUTCDay(),i=(n-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return u(i,2);case"eo":return r.ordinalNumber(i,{unit:"day"});case"eee":return r.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(n,{width:"short",context:"formatting"});case"eeee":default:return r.day(n,{width:"wide",context:"formatting"})}},c:function(e,t,r,a){var n=e.getUTCDay(),i=(n-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return u(i,t.length);case"co":return r.ordinalNumber(i,{unit:"day"});case"ccc":return r.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(n,{width:"narrow",context:"standalone"});case"cccccc":return r.day(n,{width:"short",context:"standalone"});case"cccc":default:return r.day(n,{width:"wide",context:"standalone"})}},i:function(e,t,r){var a=e.getUTCDay(),n=a===0?7:a;switch(t){case"i":return String(n);case"ii":return u(n,t.length);case"io":return r.ordinalNumber(n,{unit:"day"});case"iii":return r.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(a,{width:"short",context:"formatting"});case"iiii":default:return r.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,r){var a=e.getUTCHours(),n=a/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(e,t,r){var a=e.getUTCHours(),n;switch(a===12?n=T.noon:a===0?n=T.midnight:n=a/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(e,t,r){var a=e.getUTCHours(),n;switch(a>=17?n=T.evening:a>=12?n=T.afternoon:a>=4?n=T.morning:n=T.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){var a=e.getUTCHours()%12;return a===0&&(a=12),r.ordinalNumber(a,{unit:"hour"})}return w.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):w.H(e,t)},K:function(e,t,r){var a=e.getUTCHours()%12;return t==="Ko"?r.ordinalNumber(a,{unit:"hour"}):u(a,t.length)},k:function(e,t,r){var a=e.getUTCHours();return a===0&&(a=24),t==="ko"?r.ordinalNumber(a,{unit:"hour"}):u(a,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):w.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):w.s(e,t)},S:function(e,t){return w.S(e,t)},X:function(e,t,r,a){var n=a._originalDate||e,i=n.getTimezoneOffset();if(i===0)return"Z";switch(t){case"X":return S(i);case"XXXX":case"XX":return b(i);case"XXXXX":case"XXX":default:return b(i,":")}},x:function(e,t,r,a){var n=a._originalDate||e,i=n.getTimezoneOffset();switch(t){case"x":return S(i);case"xxxx":case"xx":return b(i);case"xxxxx":case"xxx":default:return b(i,":")}},O:function(e,t,r,a){var n=a._originalDate||e,i=n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+k(i,":");case"OOOO":default:return"GMT"+b(i,":")}},z:function(e,t,r,a){var n=a._originalDate||e,i=n.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+k(i,":");case"zzzz":default:return"GMT"+b(i,":")}},t:function(e,t,r,a){var n=a._originalDate||e,i=Math.floor(n.getTime()/1e3);return u(i,t.length)},T:function(e,t,r,a){var n=a._originalDate||e,i=n.getTime();return u(i,t.length)}};function k(e,t){var r=e>0?"-":"+",a=Math.abs(e),n=Math.floor(a/60),i=a%60;if(i===0)return r+String(n);var o=t||"";return r+String(n)+o+u(i,2)}function S(e,t){if(e%60===0){var r=e>0?"-":"+";return r+u(Math.abs(e)/60,2)}return b(e,t)}function b(e,t){var r=t||"",a=e>0?"-":"+",n=Math.abs(e),i=u(Math.floor(n/60),2),o=u(n%60,2);return a+i+r+o}var Re=He;function U(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function F(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}function Qe(e,t){var r=e.match(/(P+)(p+)?/)||[],a=r[1],n=r[2];if(!n)return U(e,t);var i;switch(a){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",U(a,t)).replace("{{time}}",F(n,t))}var Xe={p:F,P:Qe},_e=Xe,je=["D","DD"],Ie=["YY","YYYY"];function Ae(e){return je.indexOf(e)!==-1}function Ge(e){return Ie.indexOf(e)!==-1}function Y(e,t,r){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(r,"`; see: https://git.io/fxCyr"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(r,"`; see: https://git.io/fxCyr"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(r,"`; see: https://git.io/fxCyr"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(r,"`; see: https://git.io/fxCyr"))}var Be=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ve=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,$e=/^'([^]*?)'?$/,Je=/''/g,ze=/[a-zA-Z]/;function Ze(e,t,r){f(2,arguments);var a=String(t),n=r||{},i=n.locale||We,o=i.options&&i.options.firstWeekContainsDate,d=o==null?1:h(o),s=n.firstWeekContainsDate==null?d:h(n.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=i.options&&i.options.weekStartsOn,y=c==null?0:h(c),l=n.weekStartsOn==null?y:h(n.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var p=v(e);if(!_(p))throw new RangeError("Invalid time value");var q=Q(p),L=xe(p,q),x={firstWeekContainsDate:s,weekStartsOn:l,locale:i,_originalDate:p},H=a.match(Ve).map(function(m){var g=m[0];if(g==="p"||g==="P"){var M=_e[g];return M(m,i.formatLong,x)}return m}).join("").match(Be).map(function(m){if(m==="''")return"'";var g=m[0];if(g==="'")return Ke(m);var M=Re[g];if(M)return!n.useAdditionalWeekYearTokens&&Ge(m)&&Y(m,t,e),!n.useAdditionalDayOfYearTokens&&Ae(m)&&Y(m,t,e),M(L,m,i.localize,x);if(g.match(ze))throw new RangeError("Format string contains an unescaped latin alphabet character `"+g+"`");return m}).join("");return H}function Ke(e){return e.match($e)[1].replace(Je,"'")}export{We as d,Ze as f,Q as g,f as r,v as t};
