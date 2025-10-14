// Service Worker for handling chunk loading errors
const CACHE_NAME = 'traincape-v1';
const CHUNK_CACHE_NAME = 'traincape-chunks-v1';

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== CHUNK_CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - handle chunk loading errors
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle chunk loading errors
  if (url.pathname.includes('/static/js/') || url.pathname.includes('/static/css/')) {
    event.respondWith(
      caches.match(request).then((response) => {
        if (response) {
          return response;
        }

        return fetch(request).catch((error) => {
          console.error('Chunk loading failed:', error);
          
          // If it's a chunk file and it fails, try to get from network with retry
          return fetch(request, { 
            cache: 'no-cache',
            headers: {
              'Cache-Control': 'no-cache'
            }
          }).catch((retryError) => {
            console.error('Retry also failed:', retryError);
            
            // Return a fallback response or let the error bubble up
            return new Response(
              'Chunk loading failed. Please refresh the page.',
              { 
                status: 500,
                statusText: 'Chunk Loading Error',
                headers: { 'Content-Type': 'text/plain' }
              }
            );
          });
        });
      })
    );
  }
});

// Handle messages from the main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        );
      })
    );
  }
});
