"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/react/index.html","5b20ee157712b4e2003b620f4470f7fd"],["/react/static/css/main.7fd066ca.css","f818b53c39c8998ba2064356294d4a5e"],["/react/static/js/main.95aacb31.js","084dcad3a6c06e556b41339bf89c8648"],["/react/static/media/contemp_fiction_top100.19b5688a.txt","19b5688ad6a0b5cd7487e022b43af8eb"],["/react/static/media/contemp_fiction_top1000.2ddc8548.txt","2ddc85481ac0c8171305f845f51c5e6b"],["/react/static/media/contemp_fiction_top200.5333928d.txt","5333928df664af093bace2c01ff5983d"],["/react/static/media/contemp_fiction_top2000.91eca914.txt","91eca91463bd74b61c948a256d63f0d1"],["/react/static/media/contemp_fiction_top300.2260c0a4.txt","2260c0a46360649f4cac1b8d5ef00147"],["/react/static/media/contemp_fiction_top500.0212bddf.txt","0212bddf6bb1d84fae50361134856b96"],["/react/static/media/project_gutenberg_top100.dec57250.txt","dec5725056b42d902259cfca3e7754f2"],["/react/static/media/project_gutenberg_top1000.60cfc68b.txt","60cfc68bcbce9d089be56588a851da56"],["/react/static/media/project_gutenberg_top10000.7c98c010.txt","7c98c01082d52125c1dd8f760b4843eb"],["/react/static/media/project_gutenberg_top2000.36edfe6a.txt","36edfe6a5ddb4c1453eaa7274fce3887"],["/react/static/media/project_gutenberg_top5000.e9220d3d.txt","e9220d3dc9d06e886e5973abae7837fa"],["/react/static/media/rlnc_top100.8f4273c4.txt","8f4273c433fba83ff54e075dbe4e6c23"],["/react/static/media/rlnc_top1000.a910d3e3.txt","a910d3e3783067e3926ea76b2310fd45"],["/react/static/media/rlnc_top10000.6d703601.txt","6d70360166d279b22691777ece7eff08"],["/react/static/media/rlnc_top200.9c6f0857.txt","9c6f0857c634699b5ddd00557b7daf11"],["/react/static/media/rlnc_top2000.9733f6e2.txt","9733f6e29fe8303a753627f2d908238b"],["/react/static/media/rlnc_top500.d72347fc.txt","d72347fc2fe266f0aeba170f3089a10d"],["/react/static/media/rlnc_top5000.cdafa62f.txt","cdafa62fb47c0f0fe052fd382517c17d"],["/react/static/media/rui_top100.e2f786f1.txt","e2f786f10a76dab729870e5172670f25"],["/react/static/media/rui_top1000.71be8655.txt","71be8655f134b28682a4fc9c549754b8"],["/react/static/media/rui_top200.deba4f2c.txt","deba4f2cf82369100e8d87730324442d"],["/react/static/media/rui_top2000.b6b4d545.txt","b6b4d545cdd1c28d10e047a1c7ae865a"],["/react/static/media/rui_top500.cbb76091.txt","cbb760914cfcfbdb80647b20f738b399"],["/react/static/media/rui_top5000.01d60678.txt","01d606787129440f48c44447e7fb6a21"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),r=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/react/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});