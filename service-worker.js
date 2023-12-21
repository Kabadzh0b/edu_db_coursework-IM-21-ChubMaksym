/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c39477db286f4e20a5309ef6b3060328"
  },
  {
    "url": "assets/css/0.styles.5e79884c.css",
    "revision": "21dd96a0cd225337284cf4705086d9cc"
  },
  {
    "url": "assets/img/business_actors.541b7f52.jpg",
    "revision": "541b7f521c8d5af28423294fb1c7a3eb"
  },
  {
    "url": "assets/img/ckan.78bddb68.png",
    "revision": "78bddb68dcd27ea45b695b00956a6434"
  },
  {
    "url": "assets/img/cloude.b48a1c44.jpg",
    "revision": "b48a1c443f1f03e26e278576b8bd44ca"
  },
  {
    "url": "assets/img/crowdsourcing.abc54512.jpg",
    "revision": "abc545121419715bb1bf3e4b2de91384"
  },
  {
    "url": "assets/img/data_gov.0a1216bd.png",
    "revision": "0a1216bda60133bf7e84f798dddfbf87"
  },
  {
    "url": "assets/img/database.aba810cd.jpg",
    "revision": "aba810cd53c228329a5c00e6ee060b99"
  },
  {
    "url": "assets/img/deletePermission.5ef881d7.png",
    "revision": "5ef881d7a86efd8df3c9637ea0368e73"
  },
  {
    "url": "assets/img/ERR_Diagram.eaa9b24b.png",
    "revision": "eaa9b24b80e9a9dcd975e15d9cc23b6c"
  },
  {
    "url": "assets/img/get204error.48e8f94b.png",
    "revision": "48e8f94bb0982fd82e69fbb7564dad28"
  },
  {
    "url": "assets/img/getAllAfterPost.2a5b5821.png",
    "revision": "2a5b5821bd444b99e9d04a79f142dd98"
  },
  {
    "url": "assets/img/getAllPermissions.55464e86.png",
    "revision": "55464e861a789d8b209ef54f2483abd2"
  },
  {
    "url": "assets/img/getOnePermission.560afede.png",
    "revision": "560afedeb79b2a2fbf264e26f08224fa"
  },
  {
    "url": "assets/img/machine_learning.31b771f2.jpg",
    "revision": "31b771f2debbfff781cf573473788a37"
  },
  {
    "url": "assets/img/opendatasoft.bbab4790.png",
    "revision": "bbab4790100e26097cadd67de1ddbeee"
  },
  {
    "url": "assets/img/postPermission.3dbf3686.png",
    "revision": "3dbf3686f7d8c6a48634251f4aa1210b"
  },
  {
    "url": "assets/img/postWithoutName.3425dded.png",
    "revision": "3425dded10bc9c337848f8bef1860185"
  },
  {
    "url": "assets/img/put500error.22853596.png",
    "revision": "22853596bb886e27dffd854c29682370"
  },
  {
    "url": "assets/img/putCheck.d3bfeefc.png",
    "revision": "d3bfeefc5751e63b7bb46d988b708b26"
  },
  {
    "url": "assets/img/putDone.5ca48411.png",
    "revision": "5ca48411f6d09dcada3b44d65445a07d"
  },
  {
    "url": "assets/img/rbac.0a226d39.jpg",
    "revision": "0a226d39b61a5e540e6d408b2e656997"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/socrata.34930cdd.png",
    "revision": "34930cddd7c17fd3ccfce8e0a08e4cb2"
  },
  {
    "url": "assets/img/webscrapping.688f5706.jpg",
    "revision": "688f570695020ea6ee0d402bd5542cbf"
  },
  {
    "url": "assets/js/10.6f2fae4e.js",
    "revision": "40801a415260f581417abc8bac04adba"
  },
  {
    "url": "assets/js/11.f7ebb64b.js",
    "revision": "38f9641a5e5c4900e228a4a35500fabc"
  },
  {
    "url": "assets/js/12.f23f975b.js",
    "revision": "e8d972478b706729d12005186b6c8f88"
  },
  {
    "url": "assets/js/13.b7e8f54e.js",
    "revision": "bd19ad5decedaed049bb7107f54bb808"
  },
  {
    "url": "assets/js/14.ef9c522e.js",
    "revision": "3c814d98b2fbd7661c3ec1332e55d1d6"
  },
  {
    "url": "assets/js/15.ffd99df4.js",
    "revision": "7d2f00188cb91f4a04b2d572bf9ec741"
  },
  {
    "url": "assets/js/16.24b1255b.js",
    "revision": "2133bce0c137970f4194df9bba335d88"
  },
  {
    "url": "assets/js/17.fc84d95c.js",
    "revision": "e05da16098c962b6ddc5a634ba0ef338"
  },
  {
    "url": "assets/js/18.fa45534b.js",
    "revision": "4186c834d1e77429b3d344deb6e60933"
  },
  {
    "url": "assets/js/19.8ed796cb.js",
    "revision": "2879f0a6e8ed99785efbff26cecd4d56"
  },
  {
    "url": "assets/js/2.794b43f5.js",
    "revision": "049d2cfad35b220b640072f636992bb8"
  },
  {
    "url": "assets/js/20.419fe5fc.js",
    "revision": "2095c871e57d448a6ec7ffdbeab5fd82"
  },
  {
    "url": "assets/js/21.34836710.js",
    "revision": "b6f46846e4c88cdca300f7ad7e4671e3"
  },
  {
    "url": "assets/js/22.b0fda0bc.js",
    "revision": "785526d7b183e043a36403f777a17dde"
  },
  {
    "url": "assets/js/23.2a47c3b7.js",
    "revision": "b682085d2525e985cc714c9e81f327a2"
  },
  {
    "url": "assets/js/24.45a9318c.js",
    "revision": "b1778a68b7a580dd66c533f4c23f0519"
  },
  {
    "url": "assets/js/26.4fff32cd.js",
    "revision": "79bc7a1784c4312ddb477c2187d14174"
  },
  {
    "url": "assets/js/3.365d45cc.js",
    "revision": "a93ab9ad44d872c6c003be1e496de7ce"
  },
  {
    "url": "assets/js/4.dc828869.js",
    "revision": "1e3dad5d28a0660274f51c19b8b43c6a"
  },
  {
    "url": "assets/js/5.8f589ce8.js",
    "revision": "a97dacec9a35c58e82b18d2b2b67d069"
  },
  {
    "url": "assets/js/6.d29667e9.js",
    "revision": "3e07fb43b9795a7f78be2d8d0fda717a"
  },
  {
    "url": "assets/js/7.f09e3cdd.js",
    "revision": "a0322fab5a333269284a43a7f0726ba3"
  },
  {
    "url": "assets/js/8.e6ab4043.js",
    "revision": "43c136016c2914be35d0a384328a3418"
  },
  {
    "url": "assets/js/9.8e67a132.js",
    "revision": "12c8ffc4ae386974cf895224300c7be1"
  },
  {
    "url": "assets/js/app.6b3f5634.js",
    "revision": "28a9b5a62200c4b0d7d2dd731d1fb0a2"
  },
  {
    "url": "conclusion/index.html",
    "revision": "a0a4ac693791b9b6da591553aab24c35"
  },
  {
    "url": "design/index.html",
    "revision": "73af91b913b9b17dda301603aaf9f9e2"
  },
  {
    "url": "index.html",
    "revision": "f87d36bb3524c3173a73e9b64b49d4f3"
  },
  {
    "url": "intro/index.html",
    "revision": "42a6eb1606c0fb3afccdbed69629e7a9"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "03c55f578461b3650519b3a6394bbc82"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "063bbd157acc782ab856e6b708c25fcc"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "ced6cc9714374c219d39e6b3182d4632"
  },
  {
    "url": "software/index.html",
    "revision": "757efcc75e520f1ea86382d24dfad82c"
  },
  {
    "url": "test/index.html",
    "revision": "977dbd979b1557983ce2d1425bffbbd4"
  },
  {
    "url": "use cases/index.html",
    "revision": "c9f5131172ee4b2e2962d382f8638a30"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
