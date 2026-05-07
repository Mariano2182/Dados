const CACHE_NAME = "dados-ricos-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./style.css",
  "./sonido.mp3",
  // agregá todas las imágenes del juego
  "./img1.png",
  "./img2.png",
  "./img3.png",
  "./img4.png",
  "./img5.png",
  "./img6.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
