if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const o=e=>i(e,n),f={module:{uri:n},exports:r,require:o};s[n]=Promise.all(a.map((e=>f[e]||o(e)))).then((e=>(c(...e),r)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/27-424b8fd9fefd210e.js",revision:"424b8fd9fefd210e"},{url:"/_next/static/chunks/34-a3968d27770e767a.js",revision:"a3968d27770e767a"},{url:"/_next/static/chunks/652-206d98c64b6d0cc4.js",revision:"206d98c64b6d0cc4"},{url:"/_next/static/chunks/94726e6d-181147aada636c54.js",revision:"181147aada636c54"},{url:"/_next/static/chunks/framework-66d32731bdd20e83.js",revision:"66d32731bdd20e83"},{url:"/_next/static/chunks/main-572d40004815a84e.js",revision:"572d40004815a84e"},{url:"/_next/static/chunks/pages/%5Bslug%5D-a621d46f0ed4b53c.js",revision:"a621d46f0ed4b53c"},{url:"/_next/static/chunks/pages/_app-0ede0bd70c9c13cf.js",revision:"0ede0bd70c9c13cf"},{url:"/_next/static/chunks/pages/_error-08a9db0f433628d8.js",revision:"08a9db0f433628d8"},{url:"/_next/static/chunks/pages/index-8131188228376f27.js",revision:"8131188228376f27"},{url:"/_next/static/chunks/pages/servicos-31e1cec67ca40915.js",revision:"31e1cec67ca40915"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-39533400c297f214.js",revision:"39533400c297f214"},{url:"/_next/static/css/f02923cb41b8a18a.css",revision:"f02923cb41b8a18a"},{url:"/_next/static/wVXpiutIA048Xdv27eb5n/_buildManifest.js",revision:"3d185e23ee021a7456703adb60645b8b"},{url:"/_next/static/wVXpiutIA048Xdv27eb5n/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/background/rain.png",revision:"8cef8c6a643db431201e3cfe60a80c04"},{url:"/background/rain.webp",revision:"c2f626aaf0d5dd06e5af9bffc5859ec9"},{url:"/favicon.png",revision:"8bc1ee8b55c748b63a6cac1683e9f111"},{url:"/favicon.webp",revision:"1f586aca54df05de91e755d1073fddec"},{url:"/icon/symbol.svg",revision:"ab013031305a7c833309f478b1a0e475"},{url:"/imgs/about-image1.png",revision:"303e13f4b120e3a3f6e1561fd72d201a"},{url:"/imgs/about-image1.webp",revision:"093fb30013a01a4e9da9026170b0d3a8"},{url:"/imgs/about-image2.png",revision:"7e38820247637af9073ad0924bfb5fa3"},{url:"/imgs/about-image2.webp",revision:"03b8176534a45f50948336aacdadcab5"},{url:"/imgs/box-truck.png",revision:"602019d5a23d0f1f3df88d7b04e5bf45"},{url:"/imgs/box-truck.webp",revision:"6cba009f720a177bc632de81a0b7ac68"},{url:"/imgs/choose.png",revision:"a4667fd9367973fb70198937f41a5d3c"},{url:"/imgs/choose.webp",revision:"1e8dbabf14234a649a49c3eeac34251d"},{url:"/imgs/footer1.png",revision:"2c3f22cb4ef58937ff72639cfe77497c"},{url:"/imgs/footer1.webp",revision:"93bf0019d467411ff978176018e313d8"},{url:"/imgs/footer2.png",revision:"6665b99a0d8a81f7c8ab08e562fc99de"},{url:"/imgs/footer2.webp",revision:"e73a9797940c62159fd5038211fec861"},{url:"/imgs/footer3.png",revision:"aeaebb9d4db18feee36da70c0af6cd40"},{url:"/imgs/footer3.webp",revision:"a1e1eb01e5ba310e53179084963a3312"},{url:"/imgs/logo.png",revision:"5a9ce7295ea90fd98e967d1572444a2f"},{url:"/imgs/logo.webp",revision:"9326d4dfe5a960c34a573a55a7516ba4"},{url:"/imgs/reviews/pessoa1.png",revision:"9d68819bff5adb2465bec679a616a331"},{url:"/imgs/reviews/pessoa1.webp",revision:"feec4ac4f483c714e13d4f4cde496a69"},{url:"/imgs/reviews/pessoa2.png",revision:"86150f30420955af86331ea88ce3bf58"},{url:"/imgs/reviews/pessoa2.webp",revision:"23b999f553f9d3cf5063be5f9a5cdc26"},{url:"/imgs/reviews/pessoa3.png",revision:"9314fedb494db5add17743513fff3461"},{url:"/imgs/reviews/pessoa3.webp",revision:"ad0006b636c624e8a87f177311b1b345"},{url:"/imgs/services1.png",revision:"ac4a12fb925762ba88780ba6f263d045"},{url:"/imgs/services1.webp",revision:"f2735b7d05cd8329ef75c387a276b573"},{url:"/imgs/services2.png",revision:"ebfe179bd09869575762787fb6b06df4"},{url:"/imgs/services2.webp",revision:"1210ab08e7e4c6c085ac78f861b907a9"},{url:"/imgs/services3.png",revision:"8a4f9af08bbfad1ecb5231f95b1d2df1"},{url:"/imgs/services3.webp",revision:"7f2b1abc6e8df8c0105cc0a9fd55cea6"},{url:"/manifest.json",revision:"24546cbd37e51d2790ee4b1e30daf0cc"},{url:"/posts/img1.png",revision:"f33b91789f503eee278d3ea93f60c1f4"},{url:"/posts/img1.webp",revision:"391f477bc7dc9abed816f2135de5929d"},{url:"/posts/img2.png",revision:"f33b91789f503eee278d3ea93f60c1f4"},{url:"/posts/img2.webp",revision:"391f477bc7dc9abed816f2135de5929d"},{url:"/posts/img3.png",revision:"f33b91789f503eee278d3ea93f60c1f4"},{url:"/posts/img3.webp",revision:"391f477bc7dc9abed816f2135de5929d"},{url:"/posts/img4.png",revision:"f33b91789f503eee278d3ea93f60c1f4"},{url:"/posts/img4.webp",revision:"391f477bc7dc9abed816f2135de5929d"},{url:"/posts/img5.png",revision:"f33b91789f503eee278d3ea93f60c1f4"},{url:"/posts/img5.webp",revision:"391f477bc7dc9abed816f2135de5929d"},{url:"/posts/img6.png",revision:"f33b91789f503eee278d3ea93f60c1f4"},{url:"/posts/img6.webp",revision:"391f477bc7dc9abed816f2135de5929d"},{url:"/posts/img7.png",revision:"f33b91789f503eee278d3ea93f60c1f4"},{url:"/posts/img7.webp",revision:"391f477bc7dc9abed816f2135de5929d"},{url:"/posts/img8.jpeg",revision:"14b1465058458a7aaf0eefc64174c742"},{url:"/posts/img8.webp",revision:"73711bd690017ca79b124c901733775b"},{url:"/posts/img9.jpeg",revision:"b94d527011d6ad48e39a1e5abb06c586"},{url:"/posts/img9.webp",revision:"0c21f1066705a79b132dffb82321a1e7"},{url:"/robots.txt",revision:"6978a616c585d03cb5b542a891995efb"},{url:"/svgs/bubowl.svg",revision:"cb409be3273136a0866f12e8cea6f24e"},{url:"/svgs/check.svg",revision:"6ebb51bb463ec5b36791e9b3afd4d280"},{url:"/svgs/comente-cotacao-1.svg",revision:"fef612a1afc397ddfb701bda8754dbc3"},{url:"/svgs/container.svg",revision:"74e624ca86afb47e97c5d95f2d9e67c2"},{url:"/svgs/face-footer.svg",revision:"9949009473b05030812b4d574e97b346"},{url:"/svgs/headset.svg",revision:"6d8b64032f3ddcfd83635fd0d68e1c16"},{url:"/svgs/insta-footer.svg",revision:"8dc5048bef0aeb9c3282bd4575b19aae"},{url:"/svgs/loc-click.svg",revision:"0043661ae67265bd66466a984962ce9e"},{url:"/svgs/location.svg",revision:"11ebe9c43a34ffd72f6c96e4e11ffed2"},{url:"/svgs/phone-click.svg",revision:"5c3ac797d4b4a41af059e10331bfa00d"},{url:"/svgs/phone.svg",revision:"03be496dde12e5fb95d2895be1fb6011"},{url:"/svgs/rain-yellow.svg",revision:"008ddf2edfc2fc8836009656f5b8aa6c"},{url:"/svgs/rain.svg",revision:"0835d67f3c57740e65c30331ba5c4f9b"},{url:"/svgs/star.svg",revision:"9ecdd83bf7c5fac3adeeaff0b855aec6"},{url:"/svgs/symbol.svg",revision:"220107143d2187ad71f3bf64da90895c"},{url:"/svgs/time.svg",revision:"a9c16a05c3ac1ea28bddc300ccb1f299"},{url:"/svgs/whats-footer.svg",revision:"255c0d21a209e96411ece2b2941a61bf"},{url:"/svgs/whatsapp.svg",revision:"e14321e68a1ae4c8c68d329defcd88cc"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
