"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[413],{2272:(e,n,t)=>{t.d(n,{f:()=>c});var r=t(2373),u=t(7535),i=t(9723);const c={name:"attention",tokenize:function(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=(0,u.S)(r);let c;return function(n){return c=n,e.enter("attentionSequence"),o(n)};function o(s){if(s===c)return e.consume(s),o;const a=e.exit("attentionSequence"),l=(0,u.S)(s),f=!l||2===l&&i||t.includes(s),d=!i||2===i&&l||t.includes(r);return a._open=Boolean(42===c?f:f&&(i||!d)),a._close=Boolean(42===c?d:d&&(l||!f)),n(s)}},resolveAll:function(e,n){let t,u,c,s,a,l,f,d,m=-1;for(;++m<e.length;)if("enter"===e[m][0]&&"attentionSequence"===e[m][1].type&&e[m][1]._close)for(t=m;t--;)if("exit"===e[t][0]&&"attentionSequence"===e[t][1].type&&e[t][1]._open&&n.sliceSerialize(e[t][1]).charCodeAt(0)===n.sliceSerialize(e[m][1]).charCodeAt(0)){if((e[t][1]._close||e[m][1]._open)&&(e[m][1].end.offset-e[m][1].start.offset)%3&&!((e[t][1].end.offset-e[t][1].start.offset+e[m][1].end.offset-e[m][1].start.offset)%3))continue;l=e[t][1].end.offset-e[t][1].start.offset>1&&e[m][1].end.offset-e[m][1].start.offset>1?2:1;const x=Object.assign({},e[t][1].end),p=Object.assign({},e[m][1].start);o(x,-l),o(p,l),s={type:l>1?"strongSequence":"emphasisSequence",start:x,end:Object.assign({},e[t][1].end)},a={type:l>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[m][1].start),end:p},c={type:l>1?"strongText":"emphasisText",start:Object.assign({},e[t][1].end),end:Object.assign({},e[m][1].start)},u={type:l>1?"strong":"emphasis",start:Object.assign({},s.start),end:Object.assign({},a.end)},e[t][1].end=Object.assign({},s.start),e[m][1].start=Object.assign({},a.end),f=[],e[t][1].end.offset-e[t][1].start.offset&&(f=(0,r.V)(f,[["enter",e[t][1],n],["exit",e[t][1],n]])),f=(0,r.V)(f,[["enter",u,n],["enter",s,n],["exit",s,n],["enter",c,n]]),f=(0,r.V)(f,(0,i.W)(n.parser.constructs.insideSpan.null,e.slice(t+1,m),n)),f=(0,r.V)(f,[["exit",c,n],["enter",a,n],["exit",a,n],["exit",u,n]]),e[m][1].end.offset-e[m][1].start.offset?(d=2,f=(0,r.V)(f,[["enter",e[m][1],n],["exit",e[m][1],n]])):d=0,(0,r.m)(e,t-1,m-t+3,f),m=t+f.length-d-2;break}m=-1;for(;++m<e.length;)"attentionSequence"===e[m][1].type&&(e[m][1].type="data");return e}};function o(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}},6387:(e,n,t)=>{t.d(n,{m:()=>u});var r=t(3252);const u={name:"autolink",tokenize:function(e,n,t){let u=0;return function(n){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(n),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),i};function i(n){return(0,r.CW)(n)?(e.consume(n),c):a(n)}function c(e){return 43===e||45===e||46===e||(0,r.lV)(e)?(u=1,o(e)):a(e)}function o(n){return 58===n?(e.consume(n),u=0,s):(43===n||45===n||46===n||(0,r.lV)(n))&&u++<32?(e.consume(n),o):(u=0,a(n))}function s(u){return 62===u?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(u),e.exit("autolinkMarker"),e.exit("autolink"),n):null===u||32===u||60===u||(0,r.JQ)(u)?t(u):(e.consume(u),s)}function a(n){return 64===n?(e.consume(n),l):(0,r.cx)(n)?(e.consume(n),a):t(n)}function l(e){return(0,r.lV)(e)?f(e):t(e)}function f(t){return 46===t?(e.consume(t),u=0,l):62===t?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(t),e.exit("autolinkMarker"),e.exit("autolink"),n):d(t)}function d(n){if((45===n||(0,r.lV)(n))&&u++<63){const t=45===n?d:f;return e.consume(n),t}return t(n)}}}},1231:(e,n,t)=>{t.d(n,{B:()=>i});var r=t(7245),u=t(3252);const i={tokenize:function(e,n,t){return function(n){return(0,u.On)(n)?(0,r.N)(e,i,"linePrefix")(n):i(n)};function i(e){return null===e||(0,u.HP)(e)?n(e):t(e)}},partial:!0}},770:(e,n,t)=>{t.d(n,{i:()=>i});var r=t(7245),u=t(3252);const i={name:"blockQuote",tokenize:function(e,n,t){const r=this;return function(n){if(62===n){const t=r.containerState;return t.open||(e.enter("blockQuote",{_container:!0}),t.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(n),e.exit("blockQuoteMarker"),i}return t(n)};function i(t){return(0,u.On)(t)?(e.enter("blockQuotePrefixWhitespace"),e.consume(t),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(t))}},continuation:{tokenize:function(e,n,t){const c=this;return function(n){if((0,u.On)(n))return(0,r.N)(e,o,"linePrefix",c.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(n);return o(n)};function o(r){return e.attempt(i,n,t)(r)}}},exit:function(e){e.exit("blockQuote")}}},4981:(e,n,t)=>{t.d(n,{L:()=>u});var r=t(3252);const u={name:"characterEscape",tokenize:function(e,n,t){return function(n){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(n),e.exit("escapeMarker"),u};function u(u){return(0,r.ol)(u)?(e.enter("characterEscapeValue"),e.consume(u),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(u)}}}},5249:(e,n,t)=>{t.d(n,{L:()=>i});var r=t(7018),u=t(3252);const i={name:"characterReference",tokenize:function(e,n,t){const i=this;let c,o,s=0;return function(n){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(n),e.exit("characterReferenceMarker"),a};function a(n){return 35===n?(e.enter("characterReferenceMarkerNumeric"),e.consume(n),e.exit("characterReferenceMarkerNumeric"),l):(e.enter("characterReferenceValue"),c=31,o=u.lV,f(n))}function l(n){return 88===n||120===n?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(n),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),c=6,o=u.ok,f):(e.enter("characterReferenceValue"),c=7,o=u.BM,f(n))}function f(a){if(59===a&&s){const c=e.exit("characterReferenceValue");return o!==u.lV||(0,r.s)(i.sliceSerialize(c))?(e.enter("characterReferenceMarker"),e.consume(a),e.exit("characterReferenceMarker"),e.exit("characterReference"),n):t(a)}return o(a)&&s++<c?(e.consume(a),f):t(a)}}}},8669:(e,n,t)=>{t.d(n,{b:()=>c});var r=t(7245),u=t(3252);const i={tokenize:function(e,n,t){const r=this;return function(n){if(null===n)return t(n);return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),u};function u(e){return r.parser.lazy[r.now().line]?t(e):n(e)}},partial:!0},c={name:"codeFenced",tokenize:function(e,n,t){const c=this,o={tokenize:function(e,n,t){let i=0;return o;function o(n){return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),a}function a(n){return e.enter("codeFencedFence"),(0,u.On)(n)?(0,r.N)(e,f,"linePrefix",c.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(n):f(n)}function f(n){return n===s?(e.enter("codeFencedFenceSequence"),d(n)):t(n)}function d(n){return n===s?(i++,e.consume(n),d):i>=l?(e.exit("codeFencedFenceSequence"),(0,u.On)(n)?(0,r.N)(e,m,"whitespace")(n):m(n)):t(n)}function m(r){return null===r||(0,u.HP)(r)?(e.exit("codeFencedFence"),n(r)):t(r)}},partial:!0};let s,a=0,l=0;return function(n){return function(n){const t=c.events[c.events.length-1];return a=t&&"linePrefix"===t[1].type?t[2].sliceSerialize(t[1],!0).length:0,s=n,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),f(n)}(n)};function f(n){return n===s?(l++,e.consume(n),f):l<3?t(n):(e.exit("codeFencedFenceSequence"),(0,u.On)(n)?(0,r.N)(e,d,"whitespace")(n):d(n))}function d(t){return null===t||(0,u.HP)(t)?(e.exit("codeFencedFence"),c.interrupt?n(t):e.check(i,h,S)(t)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),m(t))}function m(n){return null===n||(0,u.HP)(n)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(n)):(0,u.On)(n)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),(0,r.N)(e,x,"whitespace")(n)):96===n&&n===s?t(n):(e.consume(n),m)}function x(n){return null===n||(0,u.HP)(n)?d(n):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),p(n))}function p(n){return null===n||(0,u.HP)(n)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(n)):96===n&&n===s?t(n):(e.consume(n),p)}function h(n){return e.attempt(o,S,k)(n)}function k(n){return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),g}function g(n){return a>0&&(0,u.On)(n)?(0,r.N)(e,F,"linePrefix",a+1)(n):F(n)}function F(n){return null===n||(0,u.HP)(n)?e.check(i,h,S)(n):(e.enter("codeFlowValue"),E(n))}function E(n){return null===n||(0,u.HP)(n)?(e.exit("codeFlowValue"),F(n)):(e.consume(n),E)}function S(t){return e.exit("codeFenced"),n(t)}},concrete:!0}},1193:(e,n,t)=>{t.d(n,{j:()=>i});var r=t(7245),u=t(3252);const i={name:"codeIndented",tokenize:function(e,n,t){const i=this;return function(n){return e.enter("codeIndented"),(0,r.N)(e,o,"linePrefix",5)(n)};function o(e){const n=i.events[i.events.length-1];return n&&"linePrefix"===n[1].type&&n[2].sliceSerialize(n[1],!0).length>=4?s(e):t(e)}function s(n){return null===n?l(n):(0,u.HP)(n)?e.attempt(c,s,l)(n):(e.enter("codeFlowValue"),a(n))}function a(n){return null===n||(0,u.HP)(n)?(e.exit("codeFlowValue"),s(n)):(e.consume(n),a)}function l(t){return e.exit("codeIndented"),n(t)}}},c={tokenize:function(e,n,t){const i=this;return c;function c(n){return i.parser.lazy[i.now().line]?t(n):(0,u.HP)(n)?(e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),c):(0,r.N)(e,o,"linePrefix",5)(n)}function o(e){const r=i.events[i.events.length-1];return r&&"linePrefix"===r[1].type&&r[2].sliceSerialize(r[1],!0).length>=4?n(e):(0,u.HP)(e)?c(e):t(e)}},partial:!0}},8421:(e,n,t)=>{t.d(n,{p:()=>u});var r=t(3252);const u={name:"codeText",tokenize:function(e,n,t){let u,i,c=0;return function(n){return e.enter("codeText"),e.enter("codeTextSequence"),o(n)};function o(n){return 96===n?(e.consume(n),c++,o):(e.exit("codeTextSequence"),s(n))}function s(n){return null===n?t(n):32===n?(e.enter("space"),e.consume(n),e.exit("space"),s):96===n?(i=e.enter("codeTextSequence"),u=0,l(n)):(0,r.HP)(n)?(e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),s):(e.enter("codeTextData"),a(n))}function a(n){return null===n||32===n||96===n||(0,r.HP)(n)?(e.exit("codeTextData"),s(n)):(e.consume(n),a)}function l(t){return 96===t?(e.consume(t),u++,l):u===c?(e.exit("codeTextSequence"),e.exit("codeText"),n(t)):(i.type="codeTextData",a(t))}},resolve:function(e){let n,t,r=e.length-4,u=3;if(("lineEnding"===e[u][1].type||"space"===e[u][1].type)&&("lineEnding"===e[r][1].type||"space"===e[r][1].type))for(n=u;++n<r;)if("codeTextData"===e[n][1].type){e[u][1].type="codeTextPadding",e[r][1].type="codeTextPadding",u+=2,r-=2;break}n=u-1,r++;for(;++n<=r;)void 0===t?n!==r&&"lineEnding"!==e[n][1].type&&(t=n):n!==r&&"lineEnding"!==e[n][1].type||(e[t][1].type="codeTextData",n!==t+2&&(e[t][1].end=e[n-1][1].end,e.splice(t+2,n-t-2),r-=n-t-2,n=t+2),t=void 0);return e},previous:function(e){return 96!==e||"characterEscape"===this.events[this.events.length-1][1].type}}},9031:(e,n,t)=>{t.d(n,{Q:()=>c});var r=t(7245),u=t(3252),i=t(3198);const c={tokenize:function(e,n){let t;return function(n){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),r(n)};function r(n){return null===n?i(n):(0,u.HP)(n)?e.check(o,c,i)(n):(e.consume(n),r)}function i(t){return e.exit("chunkContent"),e.exit("content"),n(t)}function c(n){return e.consume(n),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,r}},resolve:function(e){return(0,i.w)(e),e}},o={tokenize:function(e,n,t){const i=this;return function(n){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),(0,r.N)(e,c,"linePrefix")};function c(r){if(null===r||(0,u.HP)(r))return t(r);const c=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&c&&"linePrefix"===c[1].type&&c[2].sliceSerialize(c[1],!0).length>=4?n(r):e.interrupt(i.parser.constructs.flow,t,n)(r)}},partial:!0}},3077:(e,n,t)=>{t.d(n,{m:()=>l});var r=t(8907),u=t(1538),i=t(7245),c=t(7070),o=t(9888),s=t(3252),a=t(4618);const l={name:"definition",tokenize:function(e,n,t){const c=this;let l;return function(n){return e.enter("definition"),function(n){return u.r.call(c,e,d,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(n)}(n)};function d(n){return l=(0,a.B)(c.sliceSerialize(c.events[c.events.length-1][1]).slice(1,-1)),58===n?(e.enter("definitionMarker"),e.consume(n),e.exit("definitionMarker"),m):t(n)}function m(n){return(0,s.Ee)(n)?(0,o.Y)(e,x)(n):x(n)}function x(n){return(0,r.v)(e,p,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(n)}function p(n){return e.attempt(f,h,h)(n)}function h(n){return(0,s.On)(n)?(0,i.N)(e,k,"whitespace")(n):k(n)}function k(r){return null===r||(0,s.HP)(r)?(e.exit("definition"),c.parser.defined.push(l),n(r)):t(r)}}},f={tokenize:function(e,n,t){return function(n){return(0,s.Ee)(n)?(0,o.Y)(e,r)(n):t(n)};function r(n){return(0,c.f)(e,u,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(n)}function u(n){return(0,s.On)(n)?(0,i.N)(e,a,"whitespace")(n):a(n)}function a(e){return null===e||(0,s.HP)(e)?n(e):t(e)}},partial:!0}},9183:(e,n,t)=>{t.d(n,{G:()=>u});var r=t(3252);const u={name:"hardBreakEscape",tokenize:function(e,n,t){return function(n){return e.enter("hardBreakEscape"),e.consume(n),u};function u(u){return(0,r.HP)(u)?(e.exit("hardBreakEscape"),n(u)):t(u)}}}},8846:(e,n,t)=>{t.d(n,{O:()=>c});var r=t(7245),u=t(3252),i=t(2373);const c={name:"headingAtx",tokenize:function(e,n,t){let i=0;return function(n){return e.enter("atxHeading"),function(n){return e.enter("atxHeadingSequence"),c(n)}(n)};function c(n){return 35===n&&i++<6?(e.consume(n),c):null===n||(0,u.Ee)(n)?(e.exit("atxHeadingSequence"),o(n)):t(n)}function o(t){return 35===t?(e.enter("atxHeadingSequence"),s(t)):null===t||(0,u.HP)(t)?(e.exit("atxHeading"),n(t)):(0,u.On)(t)?(0,r.N)(e,o,"whitespace")(t):(e.enter("atxHeadingText"),a(t))}function s(n){return 35===n?(e.consume(n),s):(e.exit("atxHeadingSequence"),o(n))}function a(n){return null===n||35===n||(0,u.Ee)(n)?(e.exit("atxHeadingText"),o(n)):(e.consume(n),a)}},resolve:function(e,n){let t,r,u=e.length-2,c=3;"whitespace"===e[c][1].type&&(c+=2);u-2>c&&"whitespace"===e[u][1].type&&(u-=2);"atxHeadingSequence"===e[u][1].type&&(c===u-1||u-4>c&&"whitespace"===e[u-2][1].type)&&(u-=c+1===u?2:4);u>c&&(t={type:"atxHeadingText",start:e[c][1].start,end:e[u][1].end},r={type:"chunkText",start:e[c][1].start,end:e[u][1].end,contentType:"text"},(0,i.m)(e,c,u-c+1,[["enter",t,n],["enter",r,n],["exit",r,n],["exit",t,n]]));return e}}},1422:(e,n,t)=>{t.d(n,{G:()=>c});var r=t(3252),u=t(9313),i=t(1231);const c={name:"htmlFlow",tokenize:function(e,n,t){const i=this;let c,a,l,f,d;return function(n){return function(n){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(n),m}(n)};function m(u){return 33===u?(e.consume(u),x):47===u?(e.consume(u),a=!0,k):63===u?(e.consume(u),c=3,i.interrupt?n:V):(0,r.CW)(u)?(e.consume(u),l=String.fromCharCode(u),g):t(u)}function x(u){return 45===u?(e.consume(u),c=2,p):91===u?(e.consume(u),c=5,f=0,h):(0,r.CW)(u)?(e.consume(u),c=4,i.interrupt?n:V):t(u)}function p(r){return 45===r?(e.consume(r),i.interrupt?n:V):t(r)}function h(r){const u="CDATA[";return r===u.charCodeAt(f++)?(e.consume(r),6===f?i.interrupt?n:H:h):t(r)}function k(n){return(0,r.CW)(n)?(e.consume(n),l=String.fromCharCode(n),g):t(n)}function g(o){if(null===o||47===o||62===o||(0,r.Ee)(o)){const r=47===o,s=l.toLowerCase();return r||a||!u.y.includes(s)?u.T.includes(l.toLowerCase())?(c=6,r?(e.consume(o),F):i.interrupt?n(o):H(o)):(c=7,i.interrupt&&!i.parser.lazy[i.now().line]?t(o):a?E(o):S(o)):(c=1,i.interrupt?n(o):H(o))}return 45===o||(0,r.lV)(o)?(e.consume(o),l+=String.fromCharCode(o),g):t(o)}function F(r){return 62===r?(e.consume(r),i.interrupt?n:H):t(r)}function E(n){return(0,r.On)(n)?(e.consume(n),E):z(n)}function S(n){return 47===n?(e.consume(n),z):58===n||95===n||(0,r.CW)(n)?(e.consume(n),v):(0,r.On)(n)?(e.consume(n),S):z(n)}function v(n){return 45===n||46===n||58===n||95===n||(0,r.lV)(n)?(e.consume(n),v):y(n)}function y(n){return 61===n?(e.consume(n),b):(0,r.On)(n)?(e.consume(n),y):S(n)}function b(n){return null===n||60===n||61===n||62===n||96===n?t(n):34===n||39===n?(e.consume(n),d=n,A):(0,r.On)(n)?(e.consume(n),b):P(n)}function A(n){return n===d?(e.consume(n),d=null,C):null===n||(0,r.HP)(n)?t(n):(e.consume(n),A)}function P(n){return null===n||34===n||39===n||47===n||60===n||61===n||62===n||96===n||(0,r.Ee)(n)?y(n):(e.consume(n),P)}function C(e){return 47===e||62===e||(0,r.On)(e)?S(e):t(e)}function z(n){return 62===n?(e.consume(n),D):t(n)}function D(n){return null===n||(0,r.HP)(n)?H(n):(0,r.On)(n)?(e.consume(n),D):t(n)}function H(n){return 45===n&&2===c?(e.consume(n),I):60===n&&1===c?(e.consume(n),M):62===n&&4===c?(e.consume(n),N):63===n&&3===c?(e.consume(n),V):93===n&&5===c?(e.consume(n),L):!(0,r.HP)(n)||6!==c&&7!==c?null===n||(0,r.HP)(n)?(e.exit("htmlFlowData"),O(n)):(e.consume(n),H):(e.exit("htmlFlowData"),e.check(o,_,O)(n))}function O(n){return e.check(s,B,_)(n)}function B(n){return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),T}function T(n){return null===n||(0,r.HP)(n)?O(n):(e.enter("htmlFlowData"),H(n))}function I(n){return 45===n?(e.consume(n),V):H(n)}function M(n){return 47===n?(e.consume(n),l="",w):H(n)}function w(n){if(62===n){const t=l.toLowerCase();return u.y.includes(t)?(e.consume(n),N):H(n)}return(0,r.CW)(n)&&l.length<8?(e.consume(n),l+=String.fromCharCode(n),w):H(n)}function L(n){return 93===n?(e.consume(n),V):H(n)}function V(n){return 62===n?(e.consume(n),N):45===n&&2===c?(e.consume(n),V):H(n)}function N(n){return null===n||(0,r.HP)(n)?(e.exit("htmlFlowData"),_(n)):(e.consume(n),N)}function _(t){return e.exit("htmlFlow"),n(t)}},resolveTo:function(e){let n=e.length;for(;n--&&("enter"!==e[n][0]||"htmlFlow"!==e[n][1].type););n>1&&"linePrefix"===e[n-2][1].type&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2));return e},concrete:!0},o={tokenize:function(e,n,t){return function(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),e.attempt(i.B,n,t)}},partial:!0},s={tokenize:function(e,n,t){const u=this;return function(n){if((0,r.HP)(n))return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),i;return t(n)};function i(e){return u.parser.lazy[u.now().line]?t(e):n(e)}},partial:!0}},1705:(e,n,t)=>{t.d(n,{j:()=>i});var r=t(7245),u=t(3252);const i={name:"htmlText",tokenize:function(e,n,t){const i=this;let c,o,s;return function(n){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(n),a};function a(n){return 33===n?(e.consume(n),l):47===n?(e.consume(n),v):63===n?(e.consume(n),E):(0,u.CW)(n)?(e.consume(n),A):t(n)}function l(n){return 45===n?(e.consume(n),f):91===n?(e.consume(n),o=0,p):(0,u.CW)(n)?(e.consume(n),F):t(n)}function f(n){return 45===n?(e.consume(n),x):t(n)}function d(n){return null===n?t(n):45===n?(e.consume(n),m):(0,u.HP)(n)?(s=d,I(n)):(e.consume(n),d)}function m(n){return 45===n?(e.consume(n),x):d(n)}function x(e){return 62===e?T(e):45===e?m(e):d(e)}function p(n){const r="CDATA[";return n===r.charCodeAt(o++)?(e.consume(n),6===o?h:p):t(n)}function h(n){return null===n?t(n):93===n?(e.consume(n),k):(0,u.HP)(n)?(s=h,I(n)):(e.consume(n),h)}function k(n){return 93===n?(e.consume(n),g):h(n)}function g(n){return 62===n?T(n):93===n?(e.consume(n),g):h(n)}function F(n){return null===n||62===n?T(n):(0,u.HP)(n)?(s=F,I(n)):(e.consume(n),F)}function E(n){return null===n?t(n):63===n?(e.consume(n),S):(0,u.HP)(n)?(s=E,I(n)):(e.consume(n),E)}function S(e){return 62===e?T(e):E(e)}function v(n){return(0,u.CW)(n)?(e.consume(n),y):t(n)}function y(n){return 45===n||(0,u.lV)(n)?(e.consume(n),y):b(n)}function b(n){return(0,u.HP)(n)?(s=b,I(n)):(0,u.On)(n)?(e.consume(n),b):T(n)}function A(n){return 45===n||(0,u.lV)(n)?(e.consume(n),A):47===n||62===n||(0,u.Ee)(n)?P(n):t(n)}function P(n){return 47===n?(e.consume(n),T):58===n||95===n||(0,u.CW)(n)?(e.consume(n),C):(0,u.HP)(n)?(s=P,I(n)):(0,u.On)(n)?(e.consume(n),P):T(n)}function C(n){return 45===n||46===n||58===n||95===n||(0,u.lV)(n)?(e.consume(n),C):z(n)}function z(n){return 61===n?(e.consume(n),D):(0,u.HP)(n)?(s=z,I(n)):(0,u.On)(n)?(e.consume(n),z):P(n)}function D(n){return null===n||60===n||61===n||62===n||96===n?t(n):34===n||39===n?(e.consume(n),c=n,H):(0,u.HP)(n)?(s=D,I(n)):(0,u.On)(n)?(e.consume(n),D):(e.consume(n),O)}function H(n){return n===c?(e.consume(n),c=void 0,B):null===n?t(n):(0,u.HP)(n)?(s=H,I(n)):(e.consume(n),H)}function O(n){return null===n||34===n||39===n||60===n||61===n||96===n?t(n):47===n||62===n||(0,u.Ee)(n)?P(n):(e.consume(n),O)}function B(e){return 47===e||62===e||(0,u.Ee)(e)?P(e):t(e)}function T(r){return 62===r?(e.consume(r),e.exit("htmlTextData"),e.exit("htmlText"),n):t(r)}function I(n){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),M}function M(n){return(0,u.On)(n)?(0,r.N)(e,w,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(n):w(n)}function w(n){return e.enter("htmlTextData"),s(n)}}}},3016:(e,n,t)=>{t.d(n,{o:()=>f});var r=t(8907),u=t(1538),i=t(7070),c=t(9888),o=t(3252),s=t(2373),a=t(4618),l=t(9723);const f={name:"labelEnd",tokenize:function(e,n,t){const r=this;let u,i,c=r.events.length;for(;c--;)if(("labelImage"===r.events[c][1].type||"labelLink"===r.events[c][1].type)&&!r.events[c][1]._balanced){u=r.events[c][1];break}return function(n){if(!u)return t(n);if(u._inactive)return f(n);return i=r.parser.defined.includes((0,a.B)(r.sliceSerialize({start:u.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(n),e.exit("labelMarker"),e.exit("labelEnd"),o};function o(n){return 40===n?e.attempt(d,l,i?l:f)(n):91===n?e.attempt(m,l,i?s:f)(n):i?l(n):f(n)}function s(n){return e.attempt(x,l,f)(n)}function l(e){return n(e)}function f(e){return u._balanced=!0,t(e)}},resolveTo:function(e,n){let t,r,u,i,c=e.length,o=0;for(;c--;)if(t=e[c][1],r){if("link"===t.type||"labelLink"===t.type&&t._inactive)break;"enter"===e[c][0]&&"labelLink"===t.type&&(t._inactive=!0)}else if(u){if("enter"===e[c][0]&&("labelImage"===t.type||"labelLink"===t.type)&&!t._balanced&&(r=c,"labelLink"!==t.type)){o=2;break}}else"labelEnd"===t.type&&(u=c);const a={type:"labelLink"===e[r][1].type?"link":"image",start:Object.assign({},e[r][1].start),end:Object.assign({},e[e.length-1][1].end)},f={type:"label",start:Object.assign({},e[r][1].start),end:Object.assign({},e[u][1].end)},d={type:"labelText",start:Object.assign({},e[r+o+2][1].end),end:Object.assign({},e[u-2][1].start)};return i=[["enter",a,n],["enter",f,n]],i=(0,s.V)(i,e.slice(r+1,r+o+3)),i=(0,s.V)(i,[["enter",d,n]]),i=(0,s.V)(i,(0,l.W)(n.parser.constructs.insideSpan.null,e.slice(r+o+4,u-3),n)),i=(0,s.V)(i,[["exit",d,n],e[u-2],e[u-1],["exit",f,n]]),i=(0,s.V)(i,e.slice(u+1)),i=(0,s.V)(i,[["exit",a,n]]),(0,s.m)(e,r,e.length,i),e},resolveAll:function(e){let n=-1;for(;++n<e.length;){const t=e[n][1];"labelImage"!==t.type&&"labelLink"!==t.type&&"labelEnd"!==t.type||(e.splice(n+1,"labelImage"===t.type?4:2),t.type="data",n++)}return e}},d={tokenize:function(e,n,t){return function(n){return e.enter("resource"),e.enter("resourceMarker"),e.consume(n),e.exit("resourceMarker"),u};function u(n){return(0,o.Ee)(n)?(0,c.Y)(e,s)(n):s(n)}function s(n){return 41===n?m(n):(0,r.v)(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(n)}function a(n){return(0,o.Ee)(n)?(0,c.Y)(e,f)(n):m(n)}function l(e){return t(e)}function f(n){return 34===n||39===n||40===n?(0,i.f)(e,d,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(n):m(n)}function d(n){return(0,o.Ee)(n)?(0,c.Y)(e,m)(n):m(n)}function m(r){return 41===r?(e.enter("resourceMarker"),e.consume(r),e.exit("resourceMarker"),e.exit("resource"),n):t(r)}}},m={tokenize:function(e,n,t){const r=this;return function(n){return u.r.call(r,e,i,c,"reference","referenceMarker","referenceString")(n)};function i(e){return r.parser.defined.includes((0,a.B)(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(e):t(e)}function c(e){return t(e)}}},x={tokenize:function(e,n,t){return function(n){return e.enter("reference"),e.enter("referenceMarker"),e.consume(n),e.exit("referenceMarker"),r};function r(r){return 93===r?(e.enter("referenceMarker"),e.consume(r),e.exit("referenceMarker"),e.exit("reference"),n):t(r)}}}},6953:(e,n,t)=>{t.d(n,{u:()=>r});const r={name:"labelStartImage",tokenize:function(e,n,t){const r=this;return function(n){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(n),e.exit("labelImageMarker"),u};function u(n){return 91===n?(e.enter("labelMarker"),e.consume(n),e.exit("labelMarker"),e.exit("labelImage"),i):t(n)}function i(e){return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?t(e):n(e)}},resolveAll:t(3016).o.resolveAll}},4782:(e,n,t)=>{t.d(n,{J:()=>r});const r={name:"labelStartLink",tokenize:function(e,n,t){const r=this;return function(n){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(n),e.exit("labelMarker"),e.exit("labelLink"),u};function u(e){return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?t(e):n(e)}},resolveAll:t(3016).o.resolveAll}},9224:(e,n,t)=>{t.d(n,{E:()=>u});var r=t(7245);const u={name:"lineEnding",tokenize:function(e,n){return function(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),(0,r.N)(e,n,"linePrefix")}}}},284:(e,n,t)=>{t.d(n,{p:()=>o});var r=t(7245),u=t(3252),i=t(1231),c=t(8485);const o={name:"list",tokenize:function(e,n,t){const r=this,o=r.events[r.events.length-1];let a=o&&"linePrefix"===o[1].type?o[2].sliceSerialize(o[1],!0).length:0,l=0;return function(n){const i=r.containerState.type||(42===n||43===n||45===n?"listUnordered":"listOrdered");if("listUnordered"===i?!r.containerState.marker||n===r.containerState.marker:(0,u.BM)(n)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),"listUnordered"===i)return e.enter("listItemPrefix"),42===n||45===n?e.check(c.V,t,d)(n):d(n);if(!r.interrupt||49===n)return e.enter("listItemPrefix"),e.enter("listItemValue"),f(n)}return t(n)};function f(n){return(0,u.BM)(n)&&++l<10?(e.consume(n),f):(!r.interrupt||l<2)&&(r.containerState.marker?n===r.containerState.marker:41===n||46===n)?(e.exit("listItemValue"),d(n)):t(n)}function d(n){return e.enter("listItemMarker"),e.consume(n),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||n,e.check(i.B,r.interrupt?t:m,e.attempt(s,p,x))}function m(e){return r.containerState.initialBlankLine=!0,a++,p(e)}function x(n){return(0,u.On)(n)?(e.enter("listItemPrefixWhitespace"),e.consume(n),e.exit("listItemPrefixWhitespace"),p):t(n)}function p(t){return r.containerState.size=a+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(t)}},continuation:{tokenize:function(e,n,t){const c=this;return c.containerState._closeFlow=void 0,e.check(i.B,(function(t){return c.containerState.furtherBlankLines=c.containerState.furtherBlankLines||c.containerState.initialBlankLine,(0,r.N)(e,n,"listItemIndent",c.containerState.size+1)(t)}),(function(t){if(c.containerState.furtherBlankLines||!(0,u.On)(t))return c.containerState.furtherBlankLines=void 0,c.containerState.initialBlankLine=void 0,s(t);return c.containerState.furtherBlankLines=void 0,c.containerState.initialBlankLine=void 0,e.attempt(a,n,s)(t)}));function s(u){return c.containerState._closeFlow=!0,c.interrupt=void 0,(0,r.N)(e,e.attempt(o,n,t),"linePrefix",c.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u)}}},exit:function(e){e.exit(this.containerState.type)}},s={tokenize:function(e,n,t){const i=this;return(0,r.N)(e,(function(e){const r=i.events[i.events.length-1];return!(0,u.On)(e)&&r&&"listItemPrefixWhitespace"===r[1].type?n(e):t(e)}),"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5)},partial:!0},a={tokenize:function(e,n,t){const u=this;return(0,r.N)(e,(function(e){const r=u.events[u.events.length-1];return r&&"listItemIndent"===r[1].type&&r[2].sliceSerialize(r[1],!0).length===u.containerState.size?n(e):t(e)}),"listItemIndent",u.containerState.size+1)},partial:!0}},5190:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(7245),u=t(3252);const i={name:"setextUnderline",tokenize:function(e,n,t){const i=this;let c;return function(n){let r,u=i.events.length;for(;u--;)if("lineEnding"!==i.events[u][1].type&&"linePrefix"!==i.events[u][1].type&&"content"!==i.events[u][1].type){r="paragraph"===i.events[u][1].type;break}if(!i.parser.lazy[i.now().line]&&(i.interrupt||r))return e.enter("setextHeadingLine"),c=n,function(n){return e.enter("setextHeadingLineSequence"),o(n)}(n);return t(n)};function o(n){return n===c?(e.consume(n),o):(e.exit("setextHeadingLineSequence"),(0,u.On)(n)?(0,r.N)(e,s,"lineSuffix")(n):s(n))}function s(r){return null===r||(0,u.HP)(r)?(e.exit("setextHeadingLine"),n(r)):t(r)}},resolveTo:function(e,n){let t,r,u,i=e.length;for(;i--;)if("enter"===e[i][0]){if("content"===e[i][1].type){t=i;break}"paragraph"===e[i][1].type&&(r=i)}else"content"===e[i][1].type&&e.splice(i,1),u||"definition"!==e[i][1].type||(u=i);const c={type:"setextHeading",start:Object.assign({},e[r][1].start),end:Object.assign({},e[e.length-1][1].end)};e[r][1].type="setextHeadingText",u?(e.splice(r,0,["enter",c,n]),e.splice(u+1,0,["exit",e[t][1],n]),e[t][1].end=Object.assign({},e[u][1].end)):e[t][1]=c;return e.push(["exit",c,n]),e}}},8485:(e,n,t)=>{t.d(n,{V:()=>i});var r=t(7245),u=t(3252);const i={name:"thematicBreak",tokenize:function(e,n,t){let i,c=0;return function(n){return e.enter("thematicBreak"),function(e){return i=e,o(e)}(n)};function o(r){return r===i?(e.enter("thematicBreakSequence"),s(r)):c>=3&&(null===r||(0,u.HP)(r))?(e.exit("thematicBreak"),n(r)):t(r)}function s(n){return n===i?(e.consume(n),c++,s):(e.exit("thematicBreakSequence"),(0,u.On)(n)?(0,r.N)(e,o,"whitespace")(n):o(n))}}}},7048:(e,n,t)=>{t.d(n,{T:()=>a});var r=t(5705),u=t(751),i=t(8192),c=t(143),o=t(9524),s=t(1256);function a(e){return(0,r.y)([u.$,(0,i.r)(),(0,c.K)(e),o.x,s.J])}},8907:(e,n,t)=>{t.d(n,{v:()=>u});var r=t(3252);function u(e,n,t,u,i,c,o,s,a){const l=a||Number.POSITIVE_INFINITY;let f=0;return function(n){if(60===n)return e.enter(u),e.enter(i),e.enter(c),e.consume(n),e.exit(c),d;if(null===n||32===n||41===n||(0,r.JQ)(n))return t(n);return e.enter(u),e.enter(o),e.enter(s),e.enter("chunkString",{contentType:"string"}),p(n)};function d(t){return 62===t?(e.enter(c),e.consume(t),e.exit(c),e.exit(i),e.exit(u),n):(e.enter(s),e.enter("chunkString",{contentType:"string"}),m(t))}function m(n){return 62===n?(e.exit("chunkString"),e.exit(s),d(n)):null===n||60===n||(0,r.HP)(n)?t(n):(e.consume(n),92===n?x:m)}function x(n){return 60===n||62===n||92===n?(e.consume(n),m):m(n)}function p(i){return f||null!==i&&41!==i&&!(0,r.Ee)(i)?f<l&&40===i?(e.consume(i),f++,p):41===i?(e.consume(i),f--,p):null===i||32===i||40===i||(0,r.JQ)(i)?t(i):(e.consume(i),92===i?h:p):(e.exit("chunkString"),e.exit(s),e.exit(o),e.exit(u),n(i))}function h(n){return 40===n||41===n||92===n?(e.consume(n),p):p(n)}}},1538:(e,n,t)=>{t.d(n,{r:()=>u});var r=t(3252);function u(e,n,t,u,i,c){const o=this;let s,a=0;return function(n){return e.enter(u),e.enter(i),e.consume(n),e.exit(i),e.enter(c),l};function l(d){return a>999||null===d||91===d||93===d&&!s||94===d&&!a&&"_hiddenFootnoteSupport"in o.parser.constructs?t(d):93===d?(e.exit(c),e.enter(i),e.consume(d),e.exit(i),e.exit(u),n):(0,r.HP)(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),l):(e.enter("chunkString",{contentType:"string"}),f(d))}function f(n){return null===n||91===n||93===n||(0,r.HP)(n)||a++>999?(e.exit("chunkString"),l(n)):(e.consume(n),s||(s=!(0,r.On)(n)),92===n?d:f)}function d(n){return 91===n||92===n||93===n?(e.consume(n),a++,f):f(n)}}},7245:(e,n,t)=>{t.d(n,{N:()=>u});var r=t(3252);function u(e,n,t,u){const i=u?u-1:Number.POSITIVE_INFINITY;let c=0;return function(u){if((0,r.On)(u))return e.enter(t),o(u);return n(u)};function o(u){return(0,r.On)(u)&&c++<i?(e.consume(u),o):(e.exit(t),n(u))}}},7070:(e,n,t)=>{t.d(n,{f:()=>i});var r=t(7245),u=t(3252);function i(e,n,t,i,c,o){let s;return function(n){if(34===n||39===n||40===n)return e.enter(i),e.enter(c),e.consume(n),e.exit(c),s=40===n?41:n,a;return t(n)};function a(t){return t===s?(e.enter(c),e.consume(t),e.exit(c),e.exit(i),n):(e.enter(o),l(t))}function l(n){return n===s?(e.exit(o),a(s)):null===n?t(n):(0,u.HP)(n)?(e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),(0,r.N)(e,l,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),f(n))}function f(n){return n===s||null===n||(0,u.HP)(n)?(e.exit("chunkString"),l(n)):(e.consume(n),92===n?d:f)}function d(n){return n===s||92===n?(e.consume(n),f):f(n)}}},9888:(e,n,t)=>{t.d(n,{Y:()=>i});var r=t(7245),u=t(3252);function i(e,n){let t;return function i(c){if((0,u.HP)(c))return e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),t=!0,i;if((0,u.On)(c))return(0,r.N)(e,i,t?"linePrefix":"lineSuffix")(c);return n(c)}}},3252:(e,n,t)=>{t.d(n,{CW:()=>r,lV:()=>u,cx:()=>i,JQ:()=>c,BM:()=>o,ok:()=>s,ol:()=>a,HP:()=>l,Ee:()=>f,On:()=>d,es:()=>m,Ny:()=>x});const r=p(/[A-Za-z]/),u=p(/[\dA-Za-z]/),i=p(/[#-'*+\--9=?A-Z^-~]/);function c(e){return null!==e&&(e<32||127===e)}const o=p(/\d/),s=p(/[\dA-Fa-f]/),a=p(/[!-/:-@[-`{-~]/);function l(e){return null!==e&&e<-2}function f(e){return null!==e&&(e<0||32===e)}function d(e){return-2===e||-1===e||32===e}const m=p(/[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/),x=p(/\s/);function p(e){return function(n){return null!==n&&e.test(String.fromCharCode(n))}}},2373:(e,n,t)=>{function r(e,n,t,r){const u=e.length;let i,c=0;if(n=n<0?-n>u?0:u+n:n>u?u:n,t=t>0?t:0,r.length<1e4)i=Array.from(r),i.unshift(n,t),e.splice(...i);else for(t&&e.splice(n,t);c<r.length;)i=r.slice(c,c+1e4),i.unshift(n,0),e.splice(...i),c+=1e4,n+=1e4}function u(e,n){return e.length>0?(r(e,e.length,0,n),e):n}t.d(n,{V:()=>u,m:()=>r})},3198:(e,n,t)=>{t.d(n,{w:()=>u});var r=t(2373);function u(e){const n={};let t,u,c,o,s,a,l,f=-1;for(;++f<e.length;){for(;f in n;)f=n[f];if(t=e[f],f&&"chunkFlow"===t[1].type&&"listItemPrefix"===e[f-1][1].type&&(a=t[1]._tokenizer.events,c=0,c<a.length&&"lineEndingBlank"===a[c][1].type&&(c+=2),c<a.length&&"content"===a[c][1].type))for(;++c<a.length&&"content"!==a[c][1].type;)"chunkText"===a[c][1].type&&(a[c][1]._isInFirstContentOfListItem=!0,c++);if("enter"===t[0])t[1].contentType&&(Object.assign(n,i(e,f)),f=n[f],l=!0);else if(t[1]._container){for(c=f,u=void 0;c--&&(o=e[c],"lineEnding"===o[1].type||"lineEndingBlank"===o[1].type);)"enter"===o[0]&&(u&&(e[u][1].type="lineEndingBlank"),o[1].type="lineEnding",u=c);u&&(t[1].end=Object.assign({},e[u][1].start),s=e.slice(u,f),s.unshift(t),(0,r.m)(e,u,f-u+1,s))}}return!l}function i(e,n){const t=e[n][1],u=e[n][2];let i=n-1;const c=[],o=t._tokenizer||u.parser[t.contentType](t.start),s=o.events,a=[],l={};let f,d,m=-1,x=t,p=0,h=0;const k=[h];for(;x;){for(;e[++i][1]!==x;);c.push(i),x._tokenizer||(f=u.sliceStream(x),x.next||f.push(null),d&&o.defineSkip(x.start),x._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(f),x._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=x,x=x.next}for(x=t;++m<s.length;)"exit"===s[m][0]&&"enter"===s[m-1][0]&&s[m][1].type===s[m-1][1].type&&s[m][1].start.line!==s[m][1].end.line&&(h=m+1,k.push(h),x._tokenizer=void 0,x.previous=void 0,x=x.next);for(o.events=[],x?(x._tokenizer=void 0,x.previous=void 0):k.pop(),m=k.length;m--;){const n=s.slice(k[m],k[m+1]),t=c.pop();a.unshift([t,t+n.length-1]),(0,r.m)(e,t,2,n)}for(m=-1;++m<a.length;)l[p+a[m][0]]=p+a[m][1],p+=a[m][1]-a[m][0]-1;return l}}}]);
//# sourceMappingURL=micromark-vendor.d24d9e7e.js.map