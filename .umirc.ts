import { defineConfig } from 'umi';

export default defineConfig({
  antd: {
    dark: true,
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/stock', component: '@/pages/stock/index' },
    { path: '/flex', component: '@/pages/flex/index' },
  ],
});
