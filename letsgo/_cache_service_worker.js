/*
	Cache Service Worker template by mrc 2019
	mostly based in:
	https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/basic/service-worker.js
	https://github.com/chriscoyier/Simple-Offline-Site/blob/master/js/service-worker.js
	https://gist.github.com/kosamari/7c5d1e8449b2fbc97d372675f16b566e	
	
	Note for GitHub Pages:
	there can be an unexpected behaviour (cache not updating) when site is accessed from
	https://user.github.io/repo/ (without index.html) in some browsers (Firefox)
	use absolute paths if hosted in GitHub Pages in order to avoid it
	also invoke sw with an absolute path:
	navigator.serviceWorker.register('/repo/_cache_service_worker.js', {scope: '/repo/'})
*/

var PRECACHE_ID='minidex-letsgo';
var PRECACHE_VERSION='v1';
var PRECACHE_URLS=[
'/minidex/letsgo/index.html','/minidex/letsgo/',
'/minidex/letsgo/manifest.json',

/* core */
'/minidex/minidex.css',
'/minidex/minidex.js',
'/minidex/resources/locale_en.js',
'/minidex/resources/locale_es.js',

/* specific game data */
'/minidex/resources/game_gen7_letsgo.js',
'/minidex/resources/pokemon_gen7_letsgo.js',
'/minidex/resources/encounters_gen7_letsgo.js',
'/minidex/resources/more_info_gen7.js',
'/minidex/resources/learnsets_gen7_letsgo.js',

/* specific assets */
'/minidex/resources/favicon_gen7letsgo.png',
'/minidex/resources/icons_letsgo.png',

/* common assets */
'/minidex/resources/favicon.png',
'/minidex/resources/pokemon_top.png',
'/minidex/resources/pokemon_header.png',
'/minidex/resources/header_common.png',
'/minidex/resources/header_gen1.png',
'/minidex/resources/sprites.png'
];



// install event (fired when sw is first installed): opens a new cache
self.addEventListener('install', evt => {
	evt.waitUntil(
		caches.open('precache-'+PRECACHE_ID+'-'+PRECACHE_VERSION)
			.then(cache => cache.addAll(PRECACHE_URLS))
			.then(self.skipWaiting())
	);
});


// activate event (fired when sw is has been successfully installed): cleans up old outdated caches
self.addEventListener('activate', evt => {
	evt.waitUntil(
		caches.keys().then(cacheNames => {
			return cacheNames.filter(cacheName => (cacheName.startsWith('precache-'+PRECACHE_ID+'-') && !cacheName.endsWith('-'+PRECACHE_VERSION)));
		}).then(cachesToDelete => {
			return Promise.all(cachesToDelete.map(cacheToDelete => {
				console.log('delete '+cacheToDelete);
				return caches.delete(cacheToDelete);
			}));
		}).then(() => self.clients.claim())
	);
});


// fetch event (fired when requesting a resource): returns cached resource when possible
self.addEventListener('fetch', evt => {
	if(evt.request.url.startsWith(self.location.origin)){ //skip cross-origin requests
		evt.respondWith(
			caches.match(evt.request).then(cachedResource => {
				if (cachedResource) {
					return cachedResource;
				}else{
					return fetch(evt.request);
				}
			})
		);
	}
});