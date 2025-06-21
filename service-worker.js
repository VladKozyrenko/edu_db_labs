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
    "revision": "969de391775e53d562cdb2be388db267"
  },
  {
    "url": "assets/css/0.styles.baa501a4.css",
    "revision": "cefff3f8c27847bd006c320ad3563c8b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17dc7fc0.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.94673009.js",
    "revision": "41178ae9f25a1db58eb2768efb869a3b"
  },
  {
    "url": "assets/js/12.f4d805b2.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.60ff6179.js",
    "revision": "2bd5d5a5ca848ffc24b2abc7df0e8dd5"
  },
  {
    "url": "assets/js/15.89e23e70.js",
    "revision": "c671b31b075c43ca45e00aa387566c3e"
  },
  {
    "url": "assets/js/16.76821dd1.js",
    "revision": "d2a54f6e21917e9869262eaba8e7c589"
  },
  {
    "url": "assets/js/17.da7a9474.js",
    "revision": "600fce9488866a116096f7406aba6488"
  },
  {
    "url": "assets/js/18.7391a70c.js",
    "revision": "9004c00f15ef4ddad759f20a0978cdcf"
  },
  {
    "url": "assets/js/19.1339c542.js",
    "revision": "eee2a68726e2db4d16ab65efee1413a0"
  },
  {
    "url": "assets/js/2.b0b48b00.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.7442add1.js",
    "revision": "c3f7cae506b6f3d9493c5dde5c9d6e07"
  },
  {
    "url": "assets/js/21.e0850142.js",
    "revision": "84ca8faa10f41253b3809fc6dec05101"
  },
  {
    "url": "assets/js/22.e49c926b.js",
    "revision": "fe518b26344db71d9375d4c626371e10"
  },
  {
    "url": "assets/js/23.3aded756.js",
    "revision": "681b6d96920fd65e7e67f913f3d19dae"
  },
  {
    "url": "assets/js/24.bf7119a4.js",
    "revision": "c58f1ab9d1408083a67e01dcf89d1416"
  },
  {
    "url": "assets/js/25.a97e2a05.js",
    "revision": "dace715c90a06eaeafad25d5666dad15"
  },
  {
    "url": "assets/js/26.b977a0f9.js",
    "revision": "aa6ac7a5fcdfd90d38f1a50c8ef9aaf7"
  },
  {
    "url": "assets/js/27.e11aae95.js",
    "revision": "0875bb4eaa9a28518cc692939b951a53"
  },
  {
    "url": "assets/js/29.f26ffd1d.js",
    "revision": "65c4f8e41f488210fa73f3742407dfde"
  },
  {
    "url": "assets/js/3.33d6b42d.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.0f934006.js",
    "revision": "a24ff3a5e02ae2545b2725507135dbe9"
  },
  {
    "url": "assets/js/6.37f402c4.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.a2994458.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.157b1fad.js",
    "revision": "d9f61220101743ceb95def121931e60d"
  },
  {
    "url": "assets/js/app.51d76115.js",
    "revision": "7beb397701d98c6b612d9838948a8eb7"
  },
  {
    "url": "conclusion/index.html",
    "revision": "d2770aafdad9f156ec811db20ec190ea"
  },
  {
    "url": "design/er-model.html",
    "revision": "206526364fc8ccc2813be791b7134865"
  },
  {
    "url": "design/index.html",
    "revision": "a170371279c50d216ea62aadc5aff871"
  },
  {
    "url": "index.html",
    "revision": "52126c67d044c3cac474869f5c765dbf"
  },
  {
    "url": "intro/index.html",
    "revision": "3f76762fe57efd92285e1bf6f840e286"
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
    "url": "requirements/business-glossary.html",
    "revision": "b725ecb54a1cce9db818c6dc8d5a5417"
  },
  {
    "url": "requirements/index.html",
    "revision": "23b2f621b0e73ba0eae7f6d49601fbaa"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "71c6ca9354a56ff4530292d2aa6db245"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "2200a7d2b7ebebbf922ba730e8052268"
  },
  {
    "url": "software/index.html",
    "revision": "4c5b22b46c3a421d18bd66ed92ac642b"
  },
  {
    "url": "software/java/index.html",
    "revision": "0769999ec6c2d1a7312460192118aa6e"
  },
  {
    "url": "test/index.html",
    "revision": "65276902eff0db4533309eec2459c5f0"
  },
  {
    "url": "use cases/index.html",
    "revision": "3ca944a30a11936c6c528ae29b117e39"
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
