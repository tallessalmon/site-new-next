if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,c)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}}))).then((e=>{const s=c(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/192.png",revision:"78bf1c262f2993c475c6950a2340a168"},{url:"/384.png",revision:"bd2f6d0f06853043dd6a40f1789415d6"},{url:"/512.png",revision:"539b255d00a6f4a79a4b7f33aa27ea70"},{url:"/_next/static/QcMZoV69h8lZLJQoIimTL/_buildManifest.js",revision:"QcMZoV69h8lZLJQoIimTL"},{url:"/_next/static/QcMZoV69h8lZLJQoIimTL/_ssgManifest.js",revision:"QcMZoV69h8lZLJQoIimTL"},{url:"/_next/static/chunks/06756bae5c3ffd3db6e88a945e22a34d6f55f30c.24d7527ba2d8dbcb1c85.js",revision:"QcMZoV69h8lZLJQoIimTL"},{url:"/_next/static/chunks/7a7b2130ef3f5fbf8f856444ab49f92b0f1ab529.96b6852a86448d9ac19d.js",revision:"QcMZoV69h8lZLJQoIimTL"},{url:"/_next/static/chunks/framework.9116e7bff2bfccdffa19.js",revision:"QcMZoV69h8lZLJQoIimTL"},{url:"/_next/static/chunks/main-642aeb934c3cc1900bb5.js",revision:"QcMZoV69h8lZLJQoIimTL"},{url:"/_next/static/chunks/pages/_app-8b656cabe683320dd929.js",revision:"QcMZoV69h8lZLJQoIimTL"},{url:"/_next/static/chunks/pages/_error-5b0fff283ec574d684ac.js",revision:"QcMZoV69h8lZLJQoIimTL"},{url:"/_next/static/chunks/pages/index-3da85497f8580462db70.js",revision:"QcMZoV69h8lZLJQoIimTL"},{url:"/_next/static/chunks/pages/page-0a9cae2610713101ff5b.js",revision:"QcMZoV69h8lZLJQoIimTL"},{url:"/_next/static/chunks/pages/slider-8a3afa5c1faaa83426b5.js",revision:"QcMZoV69h8lZLJQoIimTL"},{url:"/_next/static/chunks/pages/sobre-ec80a97c9746feee17e5.js",revision:"QcMZoV69h8lZLJQoIimTL"},{url:"/_next/static/chunks/pages/tempo-79e70beb46247d01dd6a.js",revision:"QcMZoV69h8lZLJQoIimTL"},{url:"/_next/static/chunks/polyfills-4beebf4ac9054f0bf4e6.js",revision:"QcMZoV69h8lZLJQoIimTL"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"QcMZoV69h8lZLJQoIimTL"},{url:"/_next/static/css/18d81be518abea1287c8.css",revision:"QcMZoV69h8lZLJQoIimTL"},{url:"/_next/static/css/196c606b5c2ea563f2f7.css",revision:"QcMZoV69h8lZLJQoIimTL"},{url:"/_next/static/css/670e468d5013c2673b52.css",revision:"QcMZoV69h8lZLJQoIimTL"},{url:"/bg.webp",revision:"f61d90b9ca85238335681afcfc13f378"},{url:"/images/slider/slider-1.webp",revision:"8e56cf9c04b66bcd19af02a11faad4e0"},{url:"/images/slider/slider-2.webp",revision:"e0aea8b853ad04bb93d1a3e86a4f82de"},{url:"/images/slider/slider-3.webp",revision:"806d74b3aca5c32047e7374a0966b0ec"},{url:"/manifest.json",revision:"267be832e705db1cac9df5b3b1d43da2"},{url:"/talles.ico",revision:"e02372472851889b4c775c8fad7b753e"},{url:"/talles.svg",revision:"1293bef2d40e5c66672c82d936400c64"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
