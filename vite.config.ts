// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { VitePWA } from 'vite-plugin-pwa'
import ViteFonts from 'unplugin-fonts/vite'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { createHash } from 'crypto'
const defaultHashSize = 8
const hash = createHash('sha256')
  .update('source')
  .digest('hex')
  .slice(0, Math.max(0, defaultHashSize))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    vuetify(),
    ViteFonts({
      google: {
        families: [
          // {
          //   name: 'Roboto',
          //   styles: 'wght@100;300;400;500;700;900'
          // },
          {
            name: 'Rubik',
            styles: 'wght@100;300;400;500;700;900'
          }
        ]
      }
    }),
    // npm run generate-pwa-assets
    VitePWA({
      // injectRegister: null,
      // injectManifest: {
      //   rollupFormat: 'iife'
      // },
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: 'index.html?mode=standalone'
      },
      workbox: {
        sourcemap: true,
        skipWaiting: true,
        clientsClaim: true,

        importScripts: [`./firebase-messaging-sw-${hash}.js?v=1`]
      },
      manifest: {
        name: 'Vueflame',
        short_name: 'Vueflame',
        id: 'il.co.vueflame',
        start_url: './?mode=standalone',
        theme_color: '#000000',
        icons: [
          {
            src: 'icons/manifest-icon-192.maskable.png?v=1',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icons/manifest-icon-192.maskable.png?v=1',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'icons/manifest-icon-512.maskable.png?v=1',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icons/manifest-icon-512.maskable.png?v=1',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        description: 'Vueflame description',
        screenshots: [
          {
            src: 'screenshots/home.png?v=1',
            sizes: '442x602',
            type: 'image/png',
            form_factor: 'wide',
            label: 'Home Page'
          },
          {
            src: 'screenshots/home-narrow.png?v=1',
            sizes: '320x436',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'Home Page'
          }
        ]
      }
    }),
    VueI18nPlugin({})
  ],
  build: {
    sourcemap: true,
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      input: ['index.html', 'src/firebase-messaging-sw.ts'],
      output: {
        entryFileNames(fileInfo) {
          return fileInfo.name === 'firebase-messaging-sw'
            ? `[name]-${hash}.js`
            : 'assets/index-[hash].js'
        }
      }
    }
  },
  logLevel: 'info',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
  }
})
