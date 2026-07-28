// Garde une copie de l'app pour qu'elle s'ouvre à zéro réseau, en montagne.
const CACHE = "valentin-v1";
const SHELL = ["./", "./index.html", "./manifest.webmanifest"];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(SHELL); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (noms) {
        return Promise.all(noms.map(function (n) { return n === CACHE ? null : caches.delete(n); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

// Cache d'abord : hors-ligne, on répond depuis le cache. En ligne, on rafraîchit en silence.
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
      const reseau = fetch(e.request).then(function (rep) {
        if (rep && rep.status === 200 && rep.type === "basic") {
          const copie = rep.clone();
          caches.open(CACHE).then(function (c) { c.put(e.request, copie); });
        }
        return rep;
      }).catch(function () { return hit || caches.match("./index.html"); });
      return hit || reseau;
    })
  );
});
