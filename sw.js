// Bump VERSION after changing any file so returning visitors get the update.
var VERSION = 'aiza-v1';
var CORE = ['./','index.html','manifest.webmanifest','assets/logo.png','assets/hero.jpg',
  'assets/set1.jpg','assets/set2.jpg','assets/set3.jpg','assets/set4.jpg'];
self.addEventListener('install', function(e){ e.waitUntil(caches.open(VERSION).then(function(c){ return c.addAll(CORE); }).then(function(){ return self.skipWaiting(); })); });
self.addEventListener('activate', function(e){ e.waitUntil(caches.keys().then(function(k){ return Promise.all(k.filter(function(x){ return x!==VERSION; }).map(function(x){ return caches.delete(x); })); }).then(function(){ return self.clients.claim(); })); });
// Network first for pages (always fresh prices), cache for images. Videos are never cached.
self.addEventListener('fetch', function(e){
  var u = new URL(e.request.url);
  if(e.request.method!=='GET' || u.origin!==location.origin || /\.mp4$/.test(u.pathname)) return;
  e.respondWith(fetch(e.request).then(function(r){ if(r.ok){ var cl=r.clone(); caches.open(VERSION).then(function(c){ c.put(e.request, cl); }); } return r; })
    .catch(function(){ return caches.match(e.request, {ignoreSearch:true}); }));
});
