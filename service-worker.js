"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/TimeSheetsGo/index.html","9d0a3c2e736d70c6d76ae14aa017321d"],["/TimeSheetsGo/static/css/main.7625d459.css","8a2921210f6f8b24928130a047d4969e"],["/TimeSheetsGo/static/js/main.cbd54248.js","1c9c66531ce26319e5e6b90c97fe80dc"],["/TimeSheetsGo/static/media/Calendar-Ipad.bf89b953.png","bf89b953555103261a9e97884a839a33"],["/TimeSheetsGo/static/media/Employee.5092e940.jpg","5092e9402872b2930e8f59959bed5056"],["/TimeSheetsGo/static/media/IMac.f59729b9.png","f59729b996a6501723a70e975bd6cf10"],["/TimeSheetsGo/static/media/MacBookPro.f09702a3.png","f09702a360c4f7c89a2b812bdaef83b9"],["/TimeSheetsGo/static/media/gallery_eight.175aacbe.png","175aacbe7a5dc42bf0905ca945912ae1"],["/TimeSheetsGo/static/media/gallery_eleven.f09702a3.png","f09702a360c4f7c89a2b812bdaef83b9"],["/TimeSheetsGo/static/media/gallery_five.8e1ee4cd.png","8e1ee4cd960a873b44b850c4f87e8063"],["/TimeSheetsGo/static/media/gallery_four.1c3e9eee.png","1c3e9eee2aaa67356d6ce3d2a202bfcd"],["/TimeSheetsGo/static/media/gallery_nine.0f67b2b1.png","0f67b2b1c49829a0735d5770063a1c72"],["/TimeSheetsGo/static/media/gallery_one.bf716639.png","bf7166394a701a275f9685fee3fd436e"],["/TimeSheetsGo/static/media/gallery_seven.c0fa658d.png","c0fa658d6095214f069665d208f2bda1"],["/TimeSheetsGo/static/media/gallery_six.39529927.png","395299272a195e43c03ebd7d0fe90a57"],["/TimeSheetsGo/static/media/gallery_ten.2c582acc.png","2c582acc4167f0471e7ab0044d5ba492"],["/TimeSheetsGo/static/media/gallery_thirteen.7887cf11.png","7887cf11600e73bd8c56019ea740651c"],["/TimeSheetsGo/static/media/gallery_three.1275eff9.png","1275eff93db881a061cd3f3ee512fcd2"],["/TimeSheetsGo/static/media/gallery_twelve.bf89b953.png","bf89b953555103261a9e97884a839a33"],["/TimeSheetsGo/static/media/gallery_two.c8bc7168.png","c8bc7168ce5066e93a68e27ad82e5a81"],["/TimeSheetsGo/static/media/home.92043d76.png","92043d760c28db7651c7286e463e32ee"],["/TimeSheetsGo/static/media/iphone_black.7887cf11.png","7887cf11600e73bd8c56019ea740651c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/TimeSheetsGo/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});