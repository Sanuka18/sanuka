self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('v1').then(cache => {
        return cache.addAll([
            '/Katsura/',  // Update this path
            '/Katsura/index.html',  // Update this path
            '/Katsura/styles/styles.css',  // Update this path
            '/Katsura/scripts/script.js',  // Update this path
            '/Katsura/favicons/favicon-192x192.png',  // Update this path
            '/Katsura/favicons/favicon-512x512.png'  // Update this path
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
  