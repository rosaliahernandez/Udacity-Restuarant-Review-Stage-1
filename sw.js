const cacheName = 'v1';
const cacheFiles = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg'
];


self.addEventListener('install', function(e) {
  e.waitUntil(
      caches.open(cacheName)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(cacheFiles);
        })
    );
  });



self.addEventListener('fetch', function(e) {

   self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request).then(function(response) {
        return caches.open(staticCacheName).then(function(cache) {
          cache.put(e.request, response.clone());
          return response;
          });
      });
    })
    .catch(function(err) {
     console.log(err);
    })
  );
});
