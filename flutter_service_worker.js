'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "54704e638832c8990824dc00cf318fb4",
".git/config": "cd48d78d6208710403a10a7960247d61",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3260290a7ec78bf50a758f65f3d0e3c5",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "898e38257941b4c77bed2da58a169d16",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f4879ecfdc8548d109b50cbb2b8ec027",
".git/logs/refs/heads/master": "f4879ecfdc8548d109b50cbb2b8ec027",
".git/logs/refs/remotes/origin/master": "e15995124057c21c37c7851cce9e7f46",
".git/objects/00/43075ed11376f3efd444a2f4c50ba60a71fe2d": "ed63bea1b47a387c41d45aefae3fb1cc",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1e/8472b56ed98cce50959fcb6c113690c9f402e7": "b6162ac73194a3943334445e3d5a8669",
".git/objects/22/e858b564087b67f351e29f76a6c72364f03b75": "156385ffd56bab477093755f72cdc628",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/1c57cebc2c04057c779922d0de0ececda5cfab": "a53e4b73849231ed8a1016fff6df5daf",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/39/1acac184c5587e8ed222cc47ebabd06eeb5e69": "437e15284e79df554d797df3a9ecd491",
".git/objects/3d/808f75b541152ff366408f8d34968fe175baa1": "a7eb6b0e75a586096a9be95386639514",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/70426c8d6fb050dd37c054d12bb796841d2a0d": "c90d572c531801dd49ca28e14047bc03",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/edacc62a7d13f2a64f0f3c7bc65f19413ce7a9": "d8a16982c4660750c30c7ec121b25cf1",
".git/objects/4c/8b4fb15b0295ef3e11c8ca5598f5ef704f69e3": "0c371c45f3679f52e2f0b7a1eca9e8f3",
".git/objects/4d/201bcd42cfe98197bd2375bf46fc742daed5b4": "1a661438c87fdda80300867df6e3ee11",
".git/objects/4e/11d8138bb6c1708b6ef3264293b70239996c4f": "63d593c4ea278f8b98d6429ff2eee0b9",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/54/7db4d555ce4b30abc863d51de7dfdbab2e0b82": "7791ac06fcaff6b52b542010724a2a63",
".git/objects/5e/ec906af2f162f0bca947ac69b579771ce19b59": "129d066709a6e01d09c41bdddbd999a8",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/63/f04f50eb0a92b3b3cee48e75193703b2064a00": "034bba7fecd027282e3f3a5d7add90c1",
".git/objects/69/62726e4f7f059d419c507487f5f5fe64f0eae8": "1ae90b83cb1d39071ca7217d513c56cc",
".git/objects/72/d489b3334d23e62906e17a24dff85ca8c51ec1": "fda5382bfdd5f0325e70799f889f48bc",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/60795cc76bf77f52197934b9fba042d943fc56": "1df5931e9bc8e7a386d4dc0b9fa7b715",
".git/objects/7a/8b36ba3436c3bd4b20dfcc46950180c9e3ce1c": "781ba80c94c3b2306565ee12e75f171e",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/83/6a0693daad78d6a5946d165ad3e183cde0717f": "0c5bc9c32c5ec7b3ca3316b20f951613",
".git/objects/87/2d3e4ad5f25372e7d515959233976d794bcd3a": "49c399adf5c7ebe8d2708a6da56c7213",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/71923463b14bd2d0fd5e1144e0adcb5edbdae7": "0f0c4106fb177e8cf23af27381633e6d",
".git/objects/8e/768ecfc11f8e2626719173d51eb808c2101949": "2d03240f43564fa75f859048d37cb124",
".git/objects/91/20f0a84018e358a43396a6445766f34ff16248": "6fe5d7d3163089ec3b728a8d7cfa1a23",
".git/objects/92/9b4afb1fdb9f69b8e048a320bf745325d0519f": "c5695235b5c4c30123add0fbe11e9bf1",
".git/objects/95/39812939bc81786b385593833cc9856949c70c": "ec54104c3426633ea5b22bbd39b5197b",
".git/objects/95/fb4b2015de5c04384873610ecf04bb42a9a0a8": "a6482659f1b8918fbd417134cd173f6a",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9e/e4a6622507f5b88e90ad8c00125a4824d14783": "fa9318897befb6823361cb8c1980d870",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/df0e3da685ec6e69071ed7e3a121ebf77d1b79": "cf58d73d65bec701adfa6ecb0fae8be0",
".git/objects/a9/9a4041750aeda5ef635496e353b8e80b55d1f5": "d27d228c3d501bc0d2838292d8eced40",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/422b3079ccf9fa4d08864a65cbe8114b6014a1": "07273154bf0163b07c45d8d550b9b44b",
".git/objects/ac/98bbd08e3be3d627d554179517dc45dc436b81": "73bff9a2f57ed77ff6f8e0cbc0afc39a",
".git/objects/b0/b311b7268a7c5c9ca845fd588d4bcbb253c630": "e5520d09673d3902a63a794c655e72a0",
".git/objects/b1/4f4f9dcf0b360f326e24a1ff0dc07de4c3dd45": "0c3adbc1319813540097e463788c835a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c5/e9416985789e2fbabbf98f13eb07ea4956260c": "eaf1fb6c799d5463aa6ddb9349e2a206",
".git/objects/c8/d15430b53765830eb2ae0b05697486020b72d0": "5984b1c265db6ddaac299382afe06032",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/89b4cd6a924f4dd0bf7c9f93594e94c0783eb7": "4da010d0038745f9d85bb4071cc77a12",
".git/objects/d1/4b81e9bc7fc33e4c993271e6c71c354945f646": "db04e64aee46f37740e5b12219586c44",
".git/objects/d1/b149c1d6e843c528c61ca65578b732bd16599b": "7830c1e9cff9cbf33df672c4b45df79a",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8f30ef66d3425eeb6aba53c13fa60d3a1179b3": "a931cd1fe1edf9a4d14d1466e777aaa7",
".git/objects/fb/cd52db002f7d495ea1dad6b525953b6776193d": "a2f839efe5de99222890ddce64fa0d3d",
".git/objects/fc/ceb588edbc831f9bad79e23764483b94a98962": "c381b258e16c75ce2c71e01f9dbd43e9",
".git/ORIG_HEAD": "9b85619e849e0fd3fe5590d17ca1d3a9",
".git/refs/heads/master": "2294dc77c4796544b0c630aa556d9db2",
".git/refs/remotes/origin/master": "2294dc77c4796544b0c630aa556d9db2",
"assets/AssetManifest.json": "68952e9f460befc2502e7ac143b9b820",
"assets/assets/background.jpg": "57271b93046dd4e1423d43b2aa655722",
"assets/assets/images/best_wedding_app.png": "bdd85020217e1cb3dbd67f89c271fe98",
"assets/assets/images/dentalStoreNepal.png": "61c6c1e343bfc94ed18e2051e72369bc",
"assets/assets/images/ghumptiNepal.png": "7a46943bdf75d53dafba0485caa30d87",
"assets/assets/images/jaamna.png": "dbdfd4377c82677ab47c8648484a2488",
"assets/assets/images/nepalCallsYou.png": "98aa84695d64f0ba0219d57fc4c350e7",
"assets/assets/profile.jpg": "799342165fad00c6f23824a9f28a73fb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "fb46b7465c2adac58b0af133f1a68b57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"CNAME": "d9378238efeb1c96d302e9836019b205",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6d0a3cbe38d81c00540915a940261ccd",
"/": "6d0a3cbe38d81c00540915a940261ccd",
"main.dart.js": "ec545e7575063a2990419abf7f3d9321",
"manifest.json": "292571b994931f9bcfee6fcc39e58330",
"version.json": "9b448025600bf06b90561e053da9783f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
