if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const u=s=>i(s,r),a={module:{uri:r},exports:t,require:u};e[r]=Promise.all(l.map((s=>a[s]||u(s)))).then((s=>(n(...s),t)))}}define(["./workbox-5361f2d4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/403-058cd09c.js",revision:null},{url:"assets/403-b0b40166.css",revision:null},{url:"assets/404-97b0a24a.js",revision:null},{url:"assets/404-dc01ded2.css",revision:null},{url:"assets/500-225a6f7a.js",revision:null},{url:"assets/500-f929edf8.css",revision:null},{url:"assets/Home-c7e5c560.js",revision:null},{url:"assets/Home-ef7993e3.css",revision:null},{url:"assets/index-275e143c.css",revision:null},{url:"assets/index-79332e34.js",revision:null},{url:"assets/index-ec8ea78b.js",revision:null},{url:"assets/List-94a6cee8.css",revision:null},{url:"assets/List-b7ffdc77.js",revision:null},{url:"assets/Result-df86cf9c.js",revision:null},{url:"assets/Select-4aa5ecd5.js",revision:null},{url:"assets/Setting-b34b1569.js",revision:null},{url:"assets/Setting-c65b2d3b.css",revision:null},{url:"assets/Tag-64f1d34b.js",revision:null},{url:"assets/Test-7572c110.js",revision:null},{url:"assets/Test-ff08ab87.css",revision:null},{url:"assets/vuedraggable.umd-a85fdb41.js",revision:null},{url:"index.html",revision:"7fb3f81bd6389c056b88f731b228a460"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"ico/favicon.png",revision:"d1f8ebcc6327ed6cc6061a908117ea78"},{url:"manifest.webmanifest",revision:"0da201f30fa5e689612a1a579e4ab978"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/(.*?)\.(woff2|woff|ttf)/,new s.CacheFirst({cacheName:"file-cache",plugins:[]}),"GET"),s.registerRoute(/(.*?)\.(webp|png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new s.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
