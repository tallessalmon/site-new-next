if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,t,r)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const i={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return n;case"module":return i;default:return e(s)}}))).then((e=>{const s=r(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/R52L2LAoEC5deye3OG6dh/_buildManifest.js",revision:"R52L2LAoEC5deye3OG6dh"},{url:"/_next/static/R52L2LAoEC5deye3OG6dh/_ssgManifest.js",revision:"R52L2LAoEC5deye3OG6dh"},{url:"/_next/static/chunks/7a7b2130ef3f5fbf8f856444ab49f92b0f1ab529.d2264b81c33289e9fdb8.js",revision:"R52L2LAoEC5deye3OG6dh"},{url:"/_next/static/chunks/commons.f25b98b4796c2bd804ba.js",revision:"R52L2LAoEC5deye3OG6dh"},{url:"/_next/static/chunks/framework.ef157c678a62cfb2c073.js",revision:"R52L2LAoEC5deye3OG6dh"},{url:"/_next/static/chunks/main-1d997da795d920ce7531.js",revision:"R52L2LAoEC5deye3OG6dh"},{url:"/_next/static/chunks/pages/_app-f3f70131f948cdd57e60.js",revision:"R52L2LAoEC5deye3OG6dh"},{url:"/_next/static/chunks/pages/_error-e1d27d8701e65c8027c9.js",revision:"R52L2LAoEC5deye3OG6dh"},{url:"/_next/static/chunks/pages/index-1bc73b7fa2fe47c3a4b3.js",revision:"R52L2LAoEC5deye3OG6dh"},{url:"/_next/static/chunks/pages/page-fa917f005d991c358ea2.js",revision:"R52L2LAoEC5deye3OG6dh"},{url:"/_next/static/chunks/pages/sobre-d2b00b6212a4b0d8e6af.js",revision:"R52L2LAoEC5deye3OG6dh"},{url:"/_next/static/chunks/pages/tempo-96af4217ed0eaabb7c70.js",revision:"R52L2LAoEC5deye3OG6dh"},{url:"/_next/static/chunks/polyfills-fa276ba060a4a8ac7eef.js",revision:"R52L2LAoEC5deye3OG6dh"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"R52L2LAoEC5deye3OG6dh"},{url:"/_next/static/css/492ee7f581bc1e6915e6.css",revision:"R52L2LAoEC5deye3OG6dh"},{url:"/_next/static/css/6b2ec073fa44b15a73ff.css",revision:"R52L2LAoEC5deye3OG6dh"},{url:"/bg.webp",revision:"f61d90b9ca85238335681afcfc13f378"},{url:"/manifest.json",revision:"5b97c0cbb9112b8a541e97178d01b483"},{url:"/talles.ico",revision:"e02372472851889b4c775c8fad7b753e"},{url:"/talles.svg",revision:"1293bef2d40e5c66672c82d936400c64"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));