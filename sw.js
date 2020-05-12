// Kode service worker
const CACHE_NAME = "codepolitan-reader-lite-v1";
var urlsToCache = ["/", "/index.html", "/js/main.js", "/img/logo.png"];

self.addEventListener("install", function(event) {
  console.log("ServiceWorker: Menginstall..");

  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("ServiceWorker: Membuka cache..");
      return cache.addAll(urlsToCache);
    })
  );
});