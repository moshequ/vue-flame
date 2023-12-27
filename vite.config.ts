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
          {
            name: 'Roboto',
            styles: 'wght@100;300;400;500;700;900'
          },
          {
            name: 'Rubik',
            styles: 'wght@100;300;400;500;700;900'
          }
        ]
      }
    }),
    // npx pwa-asset-generator logo.png icons
    VitePWA({
      // injectRegister: null,
      // injectManifest: {
      //   rollupFormat: 'iife'
      // },
      registerType: 'autoUpdate',
      devOptions: {
        enabled: false,
        type: 'module'
        // navigateFallback: 'index.html'
      },
      workbox: {
        sourcemap: true,
        skipWaiting: true,
        clientsClaim: true,

        importScripts: [`./firebase-messaging-sw-${hash}.js`]
      },
      manifest: {
        name: 'Vueflame',
        short_name: 'Vueflame',
        id: 'il.co.vueflame',
        start_url: '.',
        theme_color: '#000000',
        icons: [
          {
            src: 'icons/manifest-icon-192.maskable.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icons/manifest-icon-192.maskable.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'icons/manifest-icon-512.maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icons/manifest-icon-512.maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        description: 'Get More',
        screenshots: [
          {
            src: 'icons/apple-splash-1668-2388.jpg',
            sizes: '1668x2388',
            type: 'image/jpg',
            form_factor: 'wide',
            label: 'Wonder Widgets'
          },
          {
            src: 'icons/apple-splash-828-1792.jpg',
            sizes: '828x1792',
            type: 'image/jpg',
            form_factor: 'narrow',
            label: 'Wonder Widgets'
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
