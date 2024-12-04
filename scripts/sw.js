self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
          '/sanuka/',  // Update this path
          '/sanuka/index.html',  // Update this path
          '/sanuka/styles/style.css',  // Update this path
          '/sanuka/scripts/script.js',  // Update this path
          '/sanuka/favicons/favicon-192x192.png',  // Update this path
          '/sanuka/favicons/favicon-512x512.png'  // Update this path
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
