import type { Config } from './types';

export default {
  version: '1.0',
  id: '/',
  name: 'SWAGYO',
  shortName: 'Swagyo.com',
  description: 'The Best Website where you can find Blogger Widgets, Tech News, Tech Reviews, News & Shopping related and many more',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'SWAGYO NEWS',
      shortName: 'News',
      description: 'The best news updates with tech & information.',
      url: '/search/label/shortcut-1?utm_source=homescreen',
    },
    {
      name: 'SWAGYO SHOP',
      shortName: 'Shop',
      description: 'The Best Shopping 🛒 with offers & deals.',
      url: '/search/label/shortcut-2?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '5f54ac7b-3d3a-45fb-92a7-ba67944c2180',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.swagyo.com',
} satisfies Config;
