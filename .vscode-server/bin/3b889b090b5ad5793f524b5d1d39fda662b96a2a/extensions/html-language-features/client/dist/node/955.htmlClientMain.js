exports.id=955,exports.ids=[955],exports.modules={4955:(e,n,t)=>{"use strict";t.r(n),t.d(n,{BE_PROFILE:()=>y,NRT_PROFILE:()=>p,PostChannel:()=>ne,RT_PROFILE:()=>h});var i=t(9577),r=t(1106),a=t(403),o=t(3821),s=t(5480),u=t(8823),c=t(9523),l=t(1746),f=t(9464),d=t(154),v=t(3626),h="REAL_TIME",p="NEAR_REAL_TIME",y="BEST_EFFORT",m="POST",g="drop",b="requeue",S="application/x-json-stream",T="content-type",_="client-version",x="client-id",E="time-delta-to-apply-millis",R="upload-time",k="apikey",w="AuthMsaDeviceTicket",K="AuthXToken";function P(e){var n=(e.ext||{}).intweb;return n&&(0,u.Sn)(n.msfpc)?n.msfpc:null}function O(e){for(var n=null,t=0;null===n&&t<e.length;t++)n=P(e[t]);return n}var C=function(){function e(n,t){var i=t?[].concat(t):[],r=this,a=O(i);r.iKey=function(){return n},r.Msfpc=function(){return a||""},r.count=function(){return i.length},r.events=function(){return i},r.addEvent=function(e){return!!e&&(i.push(e),a||(a=P(e)),!0)},r.split=function(t,r){var o;if(t<i.length){var s=i.length-t;(0,c.le)(r)||(s=r<s?r:s),o=i.splice(t,s),a=O(i)}return new e(n,o)}}return e.create=function(n,t){return new e(n,t)},e}();const M=function(){function e(){var n=!0,t=!0,i=!0,a="use-collector-delta",o=!1;(0,r.Z)(e,this,(function(e){e.allowRequestSending=function(){return n},e.firstRequestSent=function(){i&&(i=!1,o||(n=!1))},e.shouldAddClockSkewHeaders=function(){return t},e.getClockSkewHeaderValue=function(){return a},e.setClockSkew=function(e){o||(e?(a=e,t=!0,o=!0):t=!1,n=!0)}}))}return e.__ieDyn=1,e}(),B=function(){function e(){var n={};(0,r.Z)(e,this,(function(e){e.setKillSwitchTenants=function(e,t){if(e&&t)try{var i=(o=e.split(","),s=[],o&&(0,c.tO)(o,(function(e){s.push((0,c.nd)(e))})),s);if("this-request-only"===t)return i;for(var r=1e3*parseInt(t,10),a=0;a<i.length;++a)n[i[a]]=(0,c.m6)()+r}catch(e){return[]}var o,s;return[]},e.isTenantKilled=function(e){var t=n,i=(0,c.nd)(e);return void 0!==t[i]&&t[i]>(0,c.m6)()||(delete t[i],!1)}}))}return e.__ieDyn=1,e}();var A=t(1819);function H(e){var n,t=Math.floor(1200*Math.random())+2400;return n=Math.pow(2,e)*t,Math.min(n,6e5)}var L,U=2e6,q=Math.min(U,65e3),F=/\./,I=function(){function e(n,t,i,o){var s="baseData",l=!!o,f=t,d={};(0,r.Z)(e,this,(function(e){function t(e,n,r,a,o,s,v){(0,c.rW)(e,(function(e,h){var p=null;if(h||(0,u.Sn)(h)){var y=r,m=e,g=o,b=n;if(l&&!a&&F.test(e)){var S=e.split("."),T=S.length;if(T>1){g&&(g=g.slice());for(var _=0;_<T-1;_++){var x=S[_];b=b[x]=b[x]||{},y+="."+x,g&&g.push(x)}m=S[T-1]}}if(p=a&&function(e,n){var t=d[e];return void 0===t&&(e.length>=7&&(t=(0,c.xe)(e,"ext.metadata")||(0,c.xe)(e,"ext.web")),d[e]=t),t}(y)||!f||!f.handleField(y,m)?(0,u.yj)(m,h,i):f.value(y,m,h,i)){var E=p.value;if(b[m]=E,s&&s(g,m,p),v&&"object"==typeof E&&!(0,c.kJ)(E)){var R=g;R&&(R=R.slice()).push(m),t(h,E,y+"."+m,a,R,s,v)}}}}))}e.createPayload=function(e,n,t,i,r,a){return{apiKeys:[],payloadBlob:"",overflow:null,sizeExceed:[],failedEvts:[],batches:[],numEvents:0,retryCnt:e,isTeardown:n,isSync:t,isBeacon:i,sendType:a,sendReason:r}},e.appendPayload=function(t,i,r){var o=t&&i&&!t.overflow;return o&&(0,a.Lm)(n,(function(){return"Serializer:appendPayload"}),(function(){for(var n=i.events(),a=t.payloadBlob,o=t.numEvents,s=!1,u=[],l=[],f=t.isBeacon,d=f?65e3:3984588,v=f?q:U,h=0,p=0;h<n.length;){var y=n[h];if(y){if(o>=r){t.overflow=i.split(h);break}var m=e.getEventBlob(y);if(m&&m.length<=v){var g=m.length;if(a.length+g>d){t.overflow=i.split(h);break}a&&(a+="\n"),a+=m,++p>20&&(a.substr(0,1),p=0),s=!0,o++}else m?u.push(y):l.push(y),n.splice(h,1),h--}h++}if(u&&u.length>0&&t.sizeExceed.push(C.create(i.iKey(),u)),l&&l.length>0&&t.failedEvts.push(C.create(i.iKey(),l)),s){t.batches.push(i),t.payloadBlob=a,t.numEvents=o;var b=i.iKey();-1===(0,c.UA)(t.apiKeys,b)&&t.apiKeys.push(b)}}),(function(){return{payload:t,theBatch:{iKey:i.iKey(),evts:i.events()},max:r}})),o},e.getEventBlob=function(e){try{return(0,a.Lm)(n,(function(){return"Serializer.getEventBlob"}),(function(){var n={};n.name=e.name,n.time=e.time,n.ver=e.ver,n.iKey="o:"+(0,u.jM)(e.iKey);var i={},r=e.ext;r&&(n.ext=i,(0,c.rW)(r,(function(e,n){t(n,i[e]={},"ext."+e,!0,null,null,!0)})));var a=n.data={};a.baseType=e.baseType;var o=a.baseData={};return t(e.baseData,o,s,!1,[s],(function(e,n,t){z(i,e,n,t)}),!0),t(e.data,a,"data",!1,[],(function(e,n,t){z(i,e,n,t)}),!0),JSON.stringify(n)}),(function(){return{item:e}}))}catch(e){return null}}}))}return e.__ieDyn=1,e}();function z(e,n,t,i){if(i&&e){var r=(0,u.Vv)(i.value,i.kind,i.propertyType);if(r>-1){var a=e.metadata;a||(a=e.metadata={f:{}});var o=a.f;if(o||(o=a.f={}),n)for(var s=0;s<n.length;s++){var l=n[s];o[l]||(o[l]={f:{}});var f=o[l].f;f||(f=o[l].f={}),o=f}o=o[t]={},(0,c.kJ)(i.value)?o.a={t:r}:o.t=r}}}var D="&NoResponseBody=true",j=((L={})[1]=b,L[100]=b,L[200]="sent",L[8004]=g,L[8003]=g,L),N={},X={};function J(e,n,t){N[e]=n,!1!==t&&(X[n]=e)}function Q(e){try{return e.responseText}catch(e){}return""}function W(e,n){var t=!1;if(e&&n){var i=(0,c.FY)(e);if(i&&i.length>0)for(var r=n.toLowerCase(),a=0;a<i.length;a++){var o=i[a];if(o&&(0,c.nr)(n,o)&&o.toLowerCase()===r){t=!0;break}}}return t}function V(e,n,t,i){n&&t&&t.length>0&&(i&&N[n]?(e.hdrs[N[n]]=t,e.useHdrs=!0):e.url+="&"+n+"="+t)}J(w,w,!1),J(_,_),J(x,"Client-Id"),J(k,k),J(E,E),J(R,R),J(K,K);var Z=function(){function e(n,t,i,o,s){this._responseHandlers=[];var f,v,h,p,y,b,w,K="?cors=true&"+T.toLowerCase()+"="+S,P=new B,O=!1,C=new M,L=!1,U=0,q=!0,F=[],z={},N=[],J=null,Z=!1,Y=!1,$=!1;(0,r.Z)(e,this,(function(e){var r=!0;function M(e,n){for(var t=0,i=null,r=0;null==i&&r<e.length;)1===(t=e[r])?(0,l.cp)()?i=B:(0,l.Z3)()&&(i=ee):2===t&&(0,l.JO)(n)?i=G:L&&3===t&&(0,l.MF)()&&(i=te),r++;return i?{_transport:t,_isSync:n,sendPOST:i}:null}function B(e,n,t){var i=new XDomainRequest;i.open(m,e.urlString),e.timeout&&(i.timeout=e.timeout),i.onload=function(){var e=Q(i);ne(n,200,{},e),ve(e)},i.onerror=function(){ne(n,400,{})},i.ontimeout=function(){ne(n,500,{})},i.onprogress=function(){},t?i.send(e.data):s.set((function(){i.send(e.data)}),0)}function G(e,n,t){var i,a=e.urlString,o=!1,u=!1,l=((i={body:e.data,method:m}).Microsoft_ApplicationInsights_BypassAjaxInstrumentation=!0,i);t&&(l.keepalive=!0,2===e._sendReason&&(o=!0,a+=D)),r&&(l.credentials="include"),e.headers&&(0,c.FY)(e.headers).length>0&&(l.headers=e.headers),fetch(a,l).then((function(e){var t={},i="",r=e.headers;r&&r.forEach((function(e,n){t[n]=e})),e.body&&e.text().then((function(e){i=e})),u||(u=!0,ne(n,e.status,t,i),ve(i))})).catch((function(e){u||(u=!0,ne(n,0,{}))})),o&&!u&&(u=!0,ne(n,200,{})),!u&&e.timeout>0&&s.set((function(){u||(u=!0,ne(n,500,{}))}),e.timeout)}function ee(e,n,t){var i=e.urlString;function a(e,n,t){if(!e[t]&&n&&n.getResponseHeader){var i=n.getResponseHeader(t);i&&(e[t]=(0,c.nd)(i))}return e}function o(e,t){ne(n,e.status,function(e){var n={};return e.getAllResponseHeaders?n=function(e){var n={};if((0,c.HD)(e)){var t=(0,c.nd)(e).split(/[\r\n]+/);(0,c.tO)(t,(function(e){if(e){var t=e.indexOf(": ");if(-1!==t){var i=(0,c.nd)(e.substring(0,t)).toLowerCase(),r=(0,c.nd)(e.substring(t+1));n[i]=r}else n[(0,c.nd)(e)]=1}}))}return n}(e.getAllResponseHeaders()):(n=a(n,e,"time-delta-millis"),n=a(n,e,"kill-duration"),n=a(n,e,"kill-duration-seconds")),n}(e),t)}t&&e.disableXhrSync&&(t=!1);var s=(0,u.ot)(m,i,r,!0,t,e.timeout);(0,c.rW)(e.headers,(function(e,n){s.setRequestHeader(e,n)})),s.onload=function(){var e=Q(s);o(s,e),ve(e)},s.onerror=function(){o(s)},s.ontimeout=function(){o(s)},s.send(e.data)}function ne(e,n,t,i){try{e(n,t,i)}catch(e){(0,d.kP)(v,2,518,(0,l.eU)(e))}}function te(e,n,t){var i=200,r=e._thePayload,a=e.urlString+D;try{var o=(0,l.jW)();if(!o.sendBeacon(a,e.data))if(r){var s=[];(0,c.tO)(r.batches,(function(e){if(s&&e&&e.count()>0){for(var n=e.events(),t=0;t<n.length;t++)if(!o.sendBeacon(a,J.getEventBlob(n[t]))){s.push(e.split(t));break}}else s.push(e.split(0))})),he(s,8003,r.sendType,!0)}else i=0}catch(e){(0,d.jV)(v,"Failed to send telemetry using sendBeacon API. Ex:"+(0,l.eU)(e)),i=0}finally{ne(n,i,{},"")}}function ie(e){return 2===e||3===e}function re(e){return Y&&ie(e)&&(e=2),e}function ae(){return!O&&U<t}function oe(){var e=N;return N=[],e}function se(e,n,t){var i=!1;return e&&e.length>0&&!O&&h[n]&&J&&(i=0!==n||ae()&&(t>0||C.allowRequestSending())),i}function ue(e){var n={};return e&&(0,c.tO)(e,(function(e,t){n[t]={iKey:e.iKey(),evts:e.events()}})),n}function ce(e,t,i,r,o){if(e&&0!==e.length)if(O)he(e,1,r);else{r=re(r);try{var s=e,c=0!==r;(0,a.Lm)(p,(function(){return"HttpManager:_sendBatches"}),(function(a){a&&(e=e.slice(0));for(var s=[],f=null,d=(0,u.hK)(),v=h[r]||(c?h[1]:h[0]),p=(Y||ie(r)||v&&3===v._transport)&&!q&&L&&(0,l.MF)();se(e,r,t);){var y=e.shift();y&&y.count()>0&&(P.isTenantKilled(y.iKey())?s.push(y):(f=f||J.createPayload(t,i,c,p,o,r),J.appendPayload(f,y,n)?null!==f.overflow&&(e=[f.overflow].concat(e),f.overflow=null,fe(f,d,(0,u.hK)(),o),d=(0,u.hK)(),f=null):(fe(f,d,(0,u.hK)(),o),d=(0,u.hK)(),e=[y].concat(e),f=null)))}f&&fe(f,d,(0,u.hK)(),o),e.length>0&&(N=e.concat(N)),he(s,8004,r)}),(function(){return{batches:ue(s),retryCount:t,isTeardown:i,isSynchronous:c,sendReason:o,useSendBeacon:ie(r),sendType:r}}),!c)}catch(e){(0,d.kP)(v,2,48,"Unexpected Exception sending batch: "+(0,l.eU)(e))}}}function le(e,n,t){e[n]=e[n]||{},e[n][f.identifier]=t}function fe(n,t,r,o){if(n&&n.payloadBlob&&n.payloadBlob.length>0){var s=!!e.sendHook,y=h[n.sendType];!ie(n.sendType)&&n.isBeacon&&2===n.sendReason&&(y=h[2]||h[3]||y);var m=$;(n.isBeacon||3===y._transport)&&(m=!1);var g=function(e,n){var t={url:K,hdrs:{},useHdrs:!1};n?(t.hdrs=(0,u.l7)(t.hdrs,z),t.useHdrs=(0,c.FY)(t.hdrs).length>0):(0,c.rW)(z,(function(e,n){X[e]?V(t,X[e],n,!1):(t.hdrs[e]=n,t.useHdrs=!0)})),V(t,x,"NO_AUTH",n),V(t,_,u.vs,n);var i="";(0,c.tO)(e.apiKeys,(function(e){i.length>0&&(i+=","),i+=e})),V(t,k,i,n),V(t,R,(0,c.m6)().toString(),n);var r=function(e){for(var n=0;n<e.batches.length;n++){var t=e.batches[n].Msfpc();if(t)return encodeURIComponent(t)}return""}(e);if((0,u.Sn)(r)&&(t.url+="&ext.intweb.msfpc="+r),C.shouldAddClockSkewHeaders()&&V(t,E,C.getClockSkewHeaderValue(),n),p.getWParam){var a=p.getWParam();a>=0&&(t.url+="&w="+a)}for(var o=0;o<F.length;o++)t.url+="&"+F[o].name+"="+F[o].value;return t}(n,m);m=m||g.useHdrs;var O=(0,u.hK)();(0,a.Lm)(p,(function(){return"HttpManager:_doPayloadSend"}),(function(){for(var h=0;h<n.batches.length;h++)for(var _=n.batches[h].events(),x=0;x<_.length;x++){var E=_[x];if(Z){var R=E.timings=E.timings||{};le(R,"sendEventStart",O),le(R,"serializationStart",t),le(R,"serializationCompleted",r)}E.sendAttempt>0?E.sendAttempt++:E.sendAttempt=1}he(n.batches,1e3+(o||0),n.sendType,!0);var k={data:n.payloadBlob,urlString:g.url,headers:g.hdrs,_thePayload:n,_sendReason:o,timeout:b};(0,c.o8)(w)||(k.disableXhrSync=!!w),m&&(W(k.headers,"cache-control")||(k.headers["cache-control"]="no-cache, no-store"),W(k.headers,T)||(k.headers["content-type"]=S));var K=null;y&&(K=function(t){C.firstRequestSent();var r=function(t,r){!function(n,t,r,a){var o,s=9e3,l=null,d=!1,v=!1;try{var h=!0;if(typeof n!==A.jA){if(t){C.setClockSkew(t["time-delta-millis"]);var p=t["kill-duration"]||t["kill-duration-seconds"];(0,c.tO)(P.setKillSwitchTenants(t["kill-tokens"],p),(function(e){(0,c.tO)(r.batches,(function(n){if(n.iKey()===e){l=l||[];var t=n.split(0);r.numEvents-=t.count(),l.push(t)}}))}))}if(200==n||204==n)return void(s=200);((o=n)>=300&&o<500&&408!=o&&429!=o||501==o||505==o||r.numEvents<=0)&&(h=!1),s=9e3+n%1e3}if(h){s=100;var y=r.retryCnt;0===r.sendType&&(y<i?(d=!0,de((function(){0===r.sendType&&U--,ce(r.batches,y+1,r.isTeardown,Y?2:r.sendType,5)}),Y,H(y))):(v=!0,Y&&(s=8001)))}}finally{d||(C.setClockSkew(),function(n,t,i,r){try{r&&f._backOffTransmission(),200===t&&(r||n.isSync||f._clearBackOff(),function(e){if(Z){var n=(0,u.hK)();(0,c.tO)(e,(function(e){e&&e.count()>0&&function(e,n){Z&&(0,c.tO)(e,(function(e){le(e.timings=e.timings||{},"sendEventCompleted",n)}))}(e.events(),n)}))}}(n.batches)),he(n.batches,t,n.sendType,!0)}finally{0===n.sendType&&(U--,5!==i&&e.sendQueuedRequests(n.sendType,i))}}(r,s,a,v)),he(l,8004,r.sendType)}}(t,r,n,o)},a=n.isTeardown||n.isSync;try{y.sendPOST(t,r,a),e.sendListener&&e.sendListener(k,t,a,n.isBeacon)}catch(e){(0,d.jV)(v,"Unexpected exception sending payload. Ex:"+(0,l.eU)(e)),ne(r,0,{})}}),(0,a.Lm)(p,(function(){return"HttpManager:_doPayloadSend.sender"}),(function(){if(K)if(0===n.sendType&&U++,s&&!n.isBeacon&&3!==y._transport){var t={data:k.data,urlString:k.urlString,headers:(0,u.l7)({},k.headers),timeout:k.timeout,disableXhrSync:k.disableXhrSync},i=!1;(0,a.Lm)(p,(function(){return"HttpManager:_doPayloadSend.sendHook"}),(function(){try{e.sendHook(t,(function(e){i=!0,q||e._thePayload||(e._thePayload=e._thePayload||k._thePayload,e._sendReason=e._sendReason||k._sendReason),K(e)}),n.isSync||n.isTeardown)}catch(e){i||K(k)}}))}else K(k)}))}),(function(){return{thePayload:n,serializationStart:t,serializationCompleted:r,sendReason:o}}),n.isSync)}n.sizeExceed&&n.sizeExceed.length>0&&he(n.sizeExceed,8003,n.sendType),n.failedEvts&&n.failedEvts.length>0&&he(n.failedEvts,8002,n.sendType)}function de(e,n,t){n?e():s.set(e,t)}function ve(n){var t=e._responseHandlers;try{for(var i=0;i<t.length;i++)try{t[i](n)}catch(e){(0,d.kP)(v,1,519,"Response handler failed: "+e)}if(n){var r=JSON.parse(n);(0,u.Sn)(r.webResult)&&(0,u.Sn)(r.webResult.msfpc)&&y.set("MSFPC",r.webResult.msfpc,31536e3)}}catch(e){}}function he(e,n,t,i){if(e&&e.length>0&&o){var r=o[(c=n,l=j[c],(0,u.Sn)(l)||(l="oth",c>=9e3&&c<=9999?l="rspFail":c>=8e3&&c<=8999?l=g:c>=1e3&&c<=1999&&(l="send")),l)];if(r){var s=0!==t;(0,a.Lm)(p,(function(){return"HttpManager:_sendBatchesNotification"}),(function(){de((function(){try{r.call(o,e,n,s,t)}catch(e){(0,d.kP)(v,1,74,"send request notification failed: "+e)}}),i||s,0)}),(function(){return{batches:ue(e),reason:n,isSync:s,sendSync:i,sendType:t}}),!s)}}var c,l}e.initialize=function(e,n,t,i,a){var o;a||(a={}),K=e+K,$=!!(0,c.o8)(a.avoidOptions)||!a.avoidOptions,p=n,y=n.getCookieMgr(),Z=!p.config.disableEventTimings;var s=!!p.config.enableCompoundKey;v=(f=t).diagLog();var u=a.valueSanitizer,m=a.stringifyObjects;(0,c.o8)(a.enableCompoundKey)||(s=!!a.enableCompoundKey),b=a.xhrTimeout,w=a.disableXhrSync,L=!(0,l.b$)(),J=new I(p,u,m,s);var g=i,S=a.alwaysUseXhrOverride?i:null,T=a.alwaysUseXhrOverride?i:null;if(!i){q=!1;var _=(0,l.k$)();_&&_.protocol&&"file:"===_.protocol.toLowerCase()&&(r=!1);var x=[];x=(0,l.b$)()?[2,1]:[1,2,3];var E=a.transports;E&&((0,c.hj)(E)?x=[E].concat(x):(0,c.kJ)(E)&&(x=E.concat(x))),i=M(x,!1),g=M(x,!0),i||(0,d.jV)(v,"No available transport to send events")}(o={})[0]=i,o[1]=g||M([1,2,3],!0),o[2]=S||M([3,2],!0)||g||M([1],!0),o[3]=T||M([2,3],!0)||g||M([1],!0),h=o},e._getDbgPlgTargets=function(){return[h[0],P,J,h]},e.addQueryStringParameter=function(e,n){for(var t=0;t<F.length;t++)if(F[t].name===e)return void(F[t].value=n);F.push({name:e,value:n})},e.addHeader=function(e,n){z[e]=n},e.canSendRequest=function(){return ae()&&C.allowRequestSending()},e.sendQueuedRequests=function(e,n){(0,c.o8)(e)&&(e=0),Y&&(e=re(e),n=2),se(N,e,0)&&ce(oe(),0,!1,e,n||0)},e.isCompletelyIdle=function(){return!O&&0===U&&0===N.length},e.setUnloading=function(e){Y=e},e.addBatch=function(e){if(e&&e.count()>0){if(P.isTenantKilled(e.iKey()))return!1;N.push(e)}return!0},e.teardown=function(){N.length>0&&ce(oe(),0,!0,2,2)},e.pause=function(){O=!0},e.resume=function(){O=!1,e.sendQueuedRequests(0,4)},e.sendSynchronousBatch=function(e,n,t){e&&e.count()>0&&((0,c.le)(n)&&(n=1),Y&&(n=re(n),t=2),ce([e],0,!1,n,t||0))}}))}return e.__ieDyn=1,e}();function Y(e,n){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout(e,n,t)}function $(e){clearTimeout(e)}function G(e,n){return{set:e||Y,clear:n||$}}var ee="eventsDiscarded";const ne=function(e){function n(){var t,i=e.call(this)||this;i.identifier="PostChannel",i.priority=1011,i.version="3.2.4";var v,m,g,b,S,T,_,x=!1,E=[],R=null,k=!1,K=0,P=500,O=0,M=1e4,B={},A=h,L=null,U=null,q=0,F=0,I={},z=-1,D=!0,j=!1,N=6,X=2;return(0,r.Z)(n,i,(function(e,n){function i(e){"beforeunload"!==(e||(0,l.Jj)().event).type&&(j=!0,m.setUnloading(j)),te(2,2)}function r(e){j=!1,m.setUnloading(j)}function J(e,n){if(e.sendAttempt||(e.sendAttempt=0),e.latency||(e.latency=1),e.ext&&e.ext.trace&&delete e.ext.trace,e.ext&&e.ext.user&&e.ext.user.id&&delete e.ext.user.id,D&&(u.if,e.ext=(0,c.Ax)(e.ext),e.baseData&&(e.baseData=(0,c.Ax)(e.baseData)),e.data&&(e.data=(0,c.Ax)(e.data))),e.sync)if(q||k)e.latency=3,e.sync=!1;else if(m)return D&&(e=(0,c.Ax)(e)),void m.sendSynchronousBatch(C.create(e.iKey,[e]),!0===e.sync?1:e.sync,3);var t=e.latency,i=O,r=M;4===t&&(i=K,r=P);var a=!1;if(i<r)a=!ae(e,n);else{var o=1,s=20;4===t&&(o=4,s=1),a=!0,function(e,n,t,i){for(;t<=n;){var r=ie(e,n,!0);if(r&&r.count()>0){var a=r.split(0,i),o=a.count();if(o>0)return 4===t?K-=o:O-=o,he(ee,[a],f.h.QueueFull),!0}t++}return oe(),!1}(e.iKey,e.latency,o,s)&&(a=!ae(e,n))}a&&ve(ee,[e],f.h.QueueFull)}function Q(e,n,t){var i=se(e,n,t);return m.sendQueuedRequests(n,t),i}function W(){return O>0}function V(){if(z>=0&&se(z,0,S)&&m.sendQueuedRequests(0,S),K>0&&!U&&!k){var e=B[A][2];e>=0&&(U=$((function(){U=null,Q(4,0,1),V()}),e))}var n=B[A][1];!L&&!R&&n>=0&&!k&&(W()?L=$((function(){L=null,Q(0===F?3:1,0,1),F++,F%=2,V()}),n):F=0)}function Y(){t=null,x=!1,E=[],R=null,k=!1,K=0,P=500,O=0,M=1e4,B={},A=h,L=null,U=null,q=0,F=0,v=null,I={},g=void 0,b=0,z=-1,S=null,D=!0,j=!1,N=6,X=2,T=null,_=G(),m=new Z(500,2,1,{requeue:fe,send:pe,sent:ye,drop:me,rspFail:ge,oth:be},_),le(),I[4]={batches:[],iKeyMap:{}},I[3]={batches:[],iKeyMap:{}},I[2]={batches:[],iKeyMap:{}},I[1]={batches:[],iKeyMap:{}},Se()}function $(e,n){0===n&&q&&(n=1);var t=1e3;return q&&(t=H(q-1)),_.set(e,n*t)}function ne(){return null!==L&&(_.clear(L),L=null,F=0,!0)}function te(e,n){ne(),R&&(_.clear(R),R=null),k||Q(1,e,n)}function ie(e,n,t){var i=I[n];i||(i=I[n=1]);var r=i.iKeyMap[e];return!r&&t&&(r=C.create(e),i.batches.push(r),i.iKeyMap[e]=r),r}function re(n,t){m.canSendRequest()&&!q&&(g>0&&O>g&&(t=!0),t&&null==R&&e.flush(n,null,20))}function ae(e,n){D&&(e=(0,c.Ax)(e));var t=e.latency,i=ie(e.iKey,t,!0);return!!i.addEvent(e)&&(4!==t?(O++,n&&0===e.sendAttempt&&re(!e.sync,b>0&&i.count()>=b)):K++,!0)}function oe(){for(var e=0,n=0,t=function(t){var i=I[t];i&&i.batches&&(0,c.tO)(i.batches,(function(i){4===t?e+=i.count():n+=i.count()}))},i=1;i<=4;i++)t(i);O=n,K=e}function se(n,t,i){var r=!1,o=0===t;return!o||m.canSendRequest()?(0,a.Lm)(e.core,(function(){return"PostChannel._queueBatches"}),(function(){for(var e=[],t=4;t>=n;){var i=I[t];i&&i.batches&&i.batches.length>0&&((0,c.tO)(i.batches,(function(n){m.addBatch(n)?r=r||n&&n.count()>0:e=e.concat(n.events()),4===t?K-=n.count():O-=n.count()})),i.batches=[],i.iKeyMap={}),t--}e.length>0&&ve(ee,e,f.h.KillSwitch),r&&z>=n&&(z=-1,S=0)}),(function(){return{latency:n,sendType:t,sendReason:i}}),!o):(z=z>=0?Math.min(z,n):n,S=Math.max(S,i)),r}function ue(e,n){Q(1,0,n),oe(),ce((function(){e&&e(),E.length>0?R=$((function(){R=null,ue(E.shift(),n)}),0):(R=null,V())}))}function ce(e){m.isCompletelyIdle()?e():R=$((function(){R=null,ce(e)}),.25)}function le(){(B={})[h]=[2,1,0],B[p]=[6,3,0],B[y]=[18,9,0]}function fe(n,t){var i=[],r=N;j&&(r=X),(0,c.tO)(n,(function(n){n&&n.count()>0&&(0,c.tO)(n.events(),(function(n){n&&(n.sync&&(n.latency=4,n.sync=!1),n.sendAttempt<r?((0,u.if)(n,e.identifier),J(n,!1)):i.push(n))}))})),i.length>0&&ve(ee,i,f.h.NonRetryableStatus),j&&te(2,2)}function de(n,t){var i=e._notificationManager||{},r=i[n];if(r)try{r.apply(i,t)}catch(t){(0,d.kP)(e.diagLog(),1,74,n+" notification failed: "+t)}}function ve(e,n){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];n&&n.length>0&&de(e,[n].concat(t))}function he(e,n){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];n&&n.length>0&&(0,c.tO)(n,(function(n){n&&n.count()>0&&de(e,[n.events()].concat(t))}))}function pe(e,n,t){e&&e.length>0&&de("eventsSendRequest",[n>=1e3&&n<=1999?n-1e3:0,!0!==t])}function ye(e,n){he("eventsSent",e,n),V()}function me(e,n){he(ee,e,n>=8e3&&n<=8999?n-8e3:f.h.Unknown)}function ge(e){he(ee,e,f.h.NonRetryableStatus),V()}function be(e,n){he(ee,e,f.h.Unknown),V()}function Se(){b=t&&t.disableAutoBatchFlushLimit?0:Math.max(1500,M/6)}Y(),e._getDbgPlgTargets=function(){return[m]},e.initialize=function(l,f,d){(0,a.Lm)(f,(function(){return"PostChannel:initialize"}),(function(){var a=f;n.initialize(l,f,d);try{f.addUnloadCb,T=(0,o.jU)((0,s.J)(e.identifier),f.evtNamespace&&f.evtNamespace());var h=e._getTelCtx();l.extensionConfig[e.identifier]=l.extensionConfig[e.identifier]||{},t=h.getExtCfg(e.identifier),_=G(t.setTimeoutOverride,t.clearTimeoutOverride),D=!t.disableOptimizeObj&&(0,u.mJ)(),function(e){var n=e.getWParam;e.getWParam=function(){var e=0;return t.ignoreMc1Ms0CookieProcessing&&(e|=2),e|n()}}(a),t.eventsLimitInMem>0&&(M=t.eventsLimitInMem),t.immediateEventLimit>0&&(P=t.immediateEventLimit),t.autoFlushEventsLimit>0&&(g=t.autoFlushEventsLimit),(0,c.hj)(t.maxEventRetryAttempts)&&(N=t.maxEventRetryAttempts),(0,c.hj)(t.maxUnloadEventRetryAttempts)&&(X=t.maxUnloadEventRetryAttempts),Se(),t.httpXHROverride&&t.httpXHROverride.sendPOST&&(v=t.httpXHROverride),(0,u.Sn)(l.anonCookieName)&&m.addQueryStringParameter("anoncknm",l.anonCookieName),m.sendHook=t.payloadPreprocessor,m.sendListener=t.payloadListener;var p=t.overrideEndpointUrl?t.overrideEndpointUrl:l.endpointUrl;e._notificationManager=l.extensionConfig.NotificationManager,m.initialize(p,e.core,e,v,t);var y=l.disablePageUnloadEvents||[];(0,o.c9)(i,y,T),(0,o.TJ)(i,y,T),(0,o.nD)(r,l.disablePageShowEvents,T)}catch(n){throw e.setInitialized(!1),n}}),(function(){return{coreConfig:l,core:f,extensions:d}}))},e.processTelemetry=function(n,i){(0,u.if)(n,e.identifier);var r=(i=e._getTelCtx(i)).getExtCfg(e.identifier),a=!!t.disableTelemetry;r&&(a=a||!!r.disableTelemetry);var o=n;a||x||(t.overrideInstrumentationKey&&(o.iKey=t.overrideInstrumentationKey),r&&r.overrideInstrumentationKey&&(o.iKey=r.overrideInstrumentationKey),J(o,!0),j?te(2,2):V()),e.processNext(o,i)},e._doTeardown=function(e,n){te(2,2),x=!0,m.teardown(),(0,o.JA)(null,T),(0,o.C9)(null,T),(0,o.Yl)(null,T),Y()},e.setEventQueueLimits=function(e,n){M=e>0?e:1e4,g=n>0?n:0,Se();var t=O>e;if(!t&&b>0)for(var i=1;!t&&i<=3;i++){var r=I[i];r&&r.batches&&(0,c.tO)(r.batches,(function(e){e&&e.count()>=b&&(t=!0)}))}re(!0,t)},e.pause=function(){ne(),k=!0,m.pause()},e.resume=function(){k=!1,m.resume(),V()},e.addResponseHandler=function(e){m._responseHandlers.push(e)},e._loadTransmitProfiles=function(e){ne(),le(),A=h,V(),(0,c.rW)(e,(function(e,n){var t=n.length;if(t>=2){var i=t>2?n[2]:0;if(n.splice(0,t-2),n[1]<0&&(n[0]=-1),n[1]>0&&n[0]>0){var r=n[0]/n[1];n[0]=Math.ceil(r)*n[1]}i>=0&&n[1]>=0&&i>n[1]&&(i=n[1]),n.push(i),B[e]=n}}))},e.flush=function(e,n,t){if(void 0===e&&(e=!0),!k)if(t=t||1,e)null==R?(ne(),se(1,0,t),R=$((function(){R=null,ue(n,t)}),0)):E.push(n);else{var i=ne();Q(1,1,t),null!=n&&n(),i&&V()}},e.setMsaAuthTicket=function(e){m.addHeader(w,e)},e.hasEvents=W,e._setTransmitProfile=function(e){A!==e&&void 0!==B[e]&&(ne(),A=e,V())},e._backOffTransmission=function(){q<4&&(q++,ne(),V())},e._clearBackOff=function(){q&&(q=0,ne(),V())},(0,c.l_)(e,"_setTimeoutOverride",(function(){return _.set}),(function(e){_=G(e,_.clear)})),(0,c.l_)(e,"_clearTimeoutOverride",(function(){return _.clear}),(function(e){_=G(_.set,e)}))})),i}return(0,i.ne)(n,e),n.__ieDyn=1,n}(v.i)}};
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/3b889b090b5ad5793f524b5d1d39fda662b96a2a/extensions/html-language-features/client/dist/node/955.htmlClientMain.js.map