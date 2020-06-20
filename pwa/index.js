const CACHE_NAME = 'cache-v1'


self.addEventListener('install', evt => {
  console.log('install', evt);
  // 资源缓存
  const cache = caches.open(CACHE_NAME).then(cache => {
    cache.addAll([
      '/',
      './index.css'
    ])
  })
  evt.waitUntil(cache);
  // evt.waitUntil(self.skipWaiting());
})

self.addEventListener('activate', evt => {
  const cache = caches.keys().then(cachesName => {
    return Promise.all(cachesName.map(cacheName => {
      if (cacheName !== CACHE_NAME) {
        return caches.delete(cacheName)
      }
    }))
  })
  evt.awitUntil(cache)
  // evt.waitUntil(self.clients.claim());
})
self.addEventListener('fetch', evt => {
  // 发送请求，查询是否存在缓存，存在返回，不存在就发送请求
  const cacheFetch = caches.open(CACHE_NAME).then(cache => {
    return cache.match(evt.request).then(response => {
        if (response) return response;
        return fetch(evt.request).then(response => {
          cache.put(evt.request, response.clone())
          return response
        })
    })
  })
  evt.respondWith(cacheFetch)
})
