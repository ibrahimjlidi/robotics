const CACHE='robot-sim-v12',FILES=['/','/index.html','/robot-scene.js','/formation-course.js','/formation-presentations.js','/formation-lessons.js','/vendor/three.module.js','/vendor/three.core.js','/vendor/THREE-LICENSE.txt','/manifest.webmanifest','/icon-192.png','/icon-512.png','/sawsen-video-qr.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==CACHE).map(n=>caches.delete(n)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
  e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('/index.html'))))});
