"use strict";(()=>{var g=JSON.parse('{"github":{"repository":"SwagyoOfficial/blogger-pwa","branch":"main"},"pwa":{"oneSignalEnabled":false,"oneSignalSDK":"https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js","oneSignalConfig":{"appId":"5f54ac7b-3d3a-45fb-92a7-ba67944c2180","allowLocalhostAsSecureOrigin":true},"logs":true,"serviceWorker":{"source":"/app/serviceworker.js","scope":"/"}},"build":{"hash":"ZG3yJscOCNtMAJ40hLF3m"}}');var l="IS_LAZIED",u=String(!0),d=["keydown","mouseover","touchmove","touchstart","scroll","click"],f=new Promise(i=>{function n(){try{return localStorage.getItem(l)===u}catch(r){return!0}}function o(r=!0){try{r?localStorage.setItem(l,u):localStorage.removeItem(l)}catch(s){}}function e(r){o(!0),i({type:r.type.toLowerCase()});for(let s of d)window.removeEventListener(s,e)}if(n())i({type:"local"});else{(document.documentElement.scrollTop!==0||document.body&&document.body.scrollTop!==0)&&e({type:"scroll"});for(let r of d)window.addEventListener(r,e)}});var t=g.pwa,a=(i,n)=>{if(t.logs){console.groupCollapsed.apply(console,Array.isArray(i)?i:[i]);for(let o of n)console.log.apply(console,Array.isArray(o)?o:[o]);console.groupEnd()}};if("serviceWorker"in navigator){navigator.serviceWorker.register(t.serviceWorker.source,{scope:t.serviceWorker.scope}).then(n=>{var e;let o=[];n.scope&&o.push([`Scope: ${n.scope}`]),(e=n.active)!=null&&e.scriptURL&&o.push([`Script:  ${n.active.scriptURL}`]),o.push(["Build by: Fineshop Design"],["Developer site: https://fineshopdesign.com"]),a(["%cService Worker: Registered Successfully","color: green"],o)}).catch(n=>{a(["%cService Worker: Registration Failed","color: red"],["Error:",n])});let i=n=>o=>{o.init(n).then(()=>{let e=[["Version:",o.VERSION]],r=o.config,s=o.User.PushSubscription,S=o.Notifications,p=window.location.origin;if(r){e.push(["App ID:",r.appId]),e.push(["Origin:",r.origin]),e.push(["Site Name:",r.siteName]);let c=r.userConfig;c&&(c.serviceWorkerParam&&e.push(["Scope:",p+c.serviceWorkerParam.scope]),e.push(["Script:",p+c.path+c.serviceWorkerPath]))}s.id&&e.push(["Subscription ID:",s.id]),e.push(["Notification:",S.permissionNative]),a(["%cOneSignal: Initialized Successfully","color: green"],e)}).catch(e=>{a(["%cOneSignal: Initialization Failed","color: red"],["Error:",e])})};if(t.oneSignalEnabled){let n=Object.assign({},t.oneSignalConfig);window.OneSignalDeferred=window.OneSignalDeferred||[],window.OneSignalDeferred.push(i(n)),typeof OneSignal=="undefined"&&f.then(()=>{let o=document.createElement("script");o.src=t.oneSignalSDK,o.async=!0,o.defer=!0;let e=document.getElementsByTagName("script")[0];e!=null&&e.parentNode?e.parentNode.insertBefore(o,e):document.head.appendChild(o)})}}})();
