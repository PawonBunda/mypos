const CACHE_NAME = "posproo-cache-v1";

const urlsToCache = [
  "/mypos/",
  "/mypos/index.html",
  "/mypos/dashboard.html",
  "/mypos/kasir.html"
];

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});