
# Vue I18n from moshequ

## Description
The Vue I18n from moshequ is an optimized version of the i18n, enabling lazy loading for <i18n> block, meaning each language is loaded only when needed.

## Usage
To get started, follow these simple steps:

1. Install the plugin using npm or yarn:
   ```bash
   npm install @moshequ/vue-i18n
   # or
   yarn add @moshequ/vue-i18n
   ```

2. Import and install the plugin in your Vue application:
   ```typescript
   /**
    * plugins/index.ts
    *
    * Automatically included in `./src/main.ts`
    */

   import pinia from '@/store'
   import type { App } from 'vue'
    
   import { createi18n } from '@moshequ/vue-i18n'
    
   
   const i18n = createI18n({
      // (optionally) overwrite the default config here...
      // locale
      // fallbackLocale
   }) 
    
   export function registerPlugins(app: App) {
      app
        .use(router)
        .use(pinia)
        .use(i18n)
   }
   ```

3. create locales folder on the same folder as your component
   (do this for each component you have strings to translate)
   and add files for each language you want to support. the name of the file should be:
     `lazy-<locale>.ts` (e.g. `lazy-ru.ts` for russian)
     `<locale>.ts` (e.g. `en.ts` for the default/fallback language)
   optionally you can add a `types.ts` file to define the type of the messages object.
   example:
   ```typescript
     // locales/en.ts
     import type { IMessages } from './types'

     const messages: IMessages = {
       test: 'Test'
     }
            
     export default messages
   ```
   ```typescript
     // locales/types.ts
     export interface IMessages {
       test: string
     }
   ```

4. Use the [LocaleSwitcher](components%2FLocaleSwitcher) component provided by the plugin in your App.vue:
   ```vue
   <template>
     <v-app>
       <v-main>
         <div>{{ t('test') }}</div>
         <LocaleSwitcher />
       </v-main>
     </v-app>
   </template>

   <script setup lang="ts">
     import en from '@/locales/en'
     import type { IMessages } from '@/locales/types'
     import { useLocal } from '@/lib/i18n/plugins/useLocal'
     const { t } = useLocal<IMessages>(en, (locale) => import(`./locales/lazy-${locale}.ts`))
   </script>
   ```

## Tags
- Vue 3
- Vue i18n 9
- Locale
- Language
- Localization
- Plugin

## Author
- Moshe Quantz

## Contributors
- Moshe Quantz
- Igor Ilgiyaev

## License
This project is licensed under the [MIT License](https://opensource.org/license/mit/).

## Links
- [GitHub Repository](https://github.com/moshequ/vue-i18n)
- [Documentation](https://moshequdocumentationlink.com)

## Resources
- [Vue I18n](https://vue-i18n.intlify.dev/)
- [Vue 3](https://v3.vuejs.org/)

## Todo
- Use `unhead` package to support SEO with head meta tag `<link rel="alternate" href="https://example.com/" hreflang="x-default" />`.

   resources: [unhead npm](https://www.npmjs.com/package/unhead), [Unhead page](https://unhead.unjs.io/setup/unhead/introduction), [SEO for localization](https://developers.google.com/search/docs/specialty/international/localized-versions) 
 
## Changelog
- **v1.0.0** (Release Date)
- Initial release of the Vue I18n from moshequ.

## Bugs
If you encounter any issues or bugs, please report them on the [GitHub Issues](https://github.com/moshequ/vue-i18n/issues) page.

## Credits
Special thanks to the Vue I18n and Vue.js communities for their contributions and support in the development of this plugin.