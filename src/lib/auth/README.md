# Vue Firebase Auth

## Description

The Vue Firebase Auth is a powerful integration for Vue applications, enabling seamless authentication using Firebase. This plugin simplifies the process of adding user authentication to your Vue projects by providing an easy-to-use interface to Firebase's authentication services.

## Usage

To get started with the Vue Firebase Auth, follow these simple steps:

1. Install the plugin using npm or yarn:

   ```bash
   npm install @moshequ/vue-firebase-auth
   # or
   yarn add @moshequ/vue-firebase-auth
   ```

2. Import and install the plugin in your Vue application:

   ```typescript
   /**
    * plugins/index.ts
    *
    * Automatically included in `./src/main.ts`
    */

   import pinia from '@/store'
   import router from '@/router'
   import VueFirebaseAuth from '@/plugins/auth'
   import type { App } from 'vue'

   import { createAuth } from '@moshequ/vue-firebase-auth'
   //
   import { firebaseAuth } from '@/plugins/firebase'

   // take this from your (firebase console)[https://console.firebase.google.com/] -> choose your project -> project settings -> your apps -> web app
   const firebaseConfig = {
     apiKey: 'apiKey',
     authDomain: 'authDomain',
     projectId: 'projectId',
     storageBucket: 'storageBucket',
     messagingSenderId: 'messagingSenderId',
     appId: 'appId',
     measurementId: 'measurementId'
   }

   export const firebaseApp = initializeApp(firebaseConfig)
   export const firebaseAuth = getAuth(firebaseApp)

   const auth = createAuth({
     firebaseAuth
     // (optionally) overwrite the default config here...
     //  guestsRootPath: '/login',
     //  usersRootPath: '/',
     //  MFA: false, // TODO: implement MFA
     //  providers: {
     //    [EProvider.FACEBOOK]: true,
     //    [EProvider.GITHUB]: false, // TODO: implement GitHub
     //    [EProvider.GOOGLE]: true,
     //    [EProvider.TWITTER]: false, // TODO: implement Twitter
     //    [EProvider.APPLE]: false, // TODO: implement Apple
     //    [EProvider.MICROSOFT]: false, // TODO: implement Microsoft
     //    [EProvider.YAHOO]: false, // TODO: implement Yahoo
     //    [EProvider.PHONE]: false, // TODO: implement Phone
     //    [EProvider.ANONYMOUS]: false, // TODO: implement Anonymous
     //    [EProvider.EMAIL_LINK]: false, // TODO: implement Email Link
     //    [EProvider.EMAIL_PASSWORD]: true
     //  }
   })

   export function registerPlugins(app: App) {
     app.use(router).use(pinia).use(auth)
   }
   ```

3. Use the authentication methods provided by the plugin in your App.vue:

   ```vue
   <template>
     <v-app>
       <v-app-bar app dark>
         <v-toolbar-title v-if="store.auth">
           User: <v-chip>{{ store.auth?.displayName || store.auth?.email }}</v-chip>
         </v-toolbar-title>

         <v-spacer></v-spacer>

         <v-btn v-if="store.auth" outlined @click="signOut">Logout</v-btn>
       </v-app-bar>

       <v-main>
         <v-progress-linear :indeterminate="store.loading" color="primary"></v-progress-linear>

         <router-view></router-view>
       </v-main>
     </v-app>
   </template>

   <script setup lang="ts">
   import { useAuthStore } from '@/lib/auth'

   const { signOut } = useAuthStore()
   const store = useAuthStore()
   </script>
   ```

4. Defined and protect protected your routes in your router/routes.ts:

   ```typescript
   import DefaultLayout from '@/layouts/default/DefaultLayout.vue'
   import type { RouteRecordRaw } from 'vue-router'
   import { routes as authRoutes, options } from '@/lib/auth'
   import { EProtection } from '@/lib/auth/types'

   const routes: RouteRecordRaw[] = [
     ...authRoutes, // import auth routes (e.g. /login)
     {
       path: options.usersRootPath,
       name: 'home',
       meta: { protection: EProtection.USERS_ONLY }, // lock this page for users only
       component: () => import('@/pages/HomePage.vue')
     },
     {
       path: '/about',
       name: 'about',
       meta: { protection: EProtection.GUESTS_ONLY }, // lock this page for guests only
       component: () => import('@/pages/AboutPage.vue')
     },
     {
       path: '/:pathMatch(.*)*',
       name: 'not-found',
       // don't use meta.protection to allow access to this page for everyone
       component: () => import('@/pages/NotFoundPage.vue')
     }
   ]

   export default routes
   ```

## Configuration

- [Firebase Firestore Setup Tutorial](https://www.koderhq.com/tutorial/vue/firebase-firestore/)
- [Enable Firebase Authentication](https://www.koderhq.com/tutorial/vue/firestore-authentication-security/)
- [Firestore Security Rules](https://www.koderhq.com/tutorial/vue/firestore-authentication-security/)
- [Lock the Firestore API to a single domain](https://www.koderhq.com/tutorial/vue/firestore-authentication-security/)

[//]: # 'For more advanced usage and configuration options, please refer to the [documentation](#links).'

## Notes

- This plugin is compatible with Vue 3 applications and above.
- You must set up Firebase in your project and provide Firebase configuration options when installing the plugin.
- Make sure to handle user authentication state changes in your application.

## See Also

- [Firebase Documentation](https://firebase.google.com/docs)
- [Vue.js Documentation](https://vuejs.org/)

## Tags

- Vue 3
- Firebase
- Authentication
- Plugin

## Author

- Moshe Quantz

## Contributors

- Moshe Quantz
- Igor Ilgiyaev

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/).

## Links

- [GitHub Repository](https://github.com/moshequ/vue-firebase-auth)
- [Documentation](https://moshequdocumentationlink.com)

## Resources

- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Vue 3](https://v3.vuejs.org/)

## References

- [Firebase Web SDK](https://firebase.google.com/docs/web/setup)

## Todo

- Add support for forgot and reset password.
- Add support intend url
- Add support for phone authentication.
- Add support for MFA.
- Add support for additional authentication providers.
- Improve error handling and user feedback.
- Add tests.
- Enhance documentation and examples.

## Changelog

- **v1.0.0** (Release Date)
- Initial release of the Vue Firebase Auth.

## Bugs

If you encounter any issues or bugs, please report them on the [GitHub Issues](https://github.com/moshequ/vue-firebase-auth/issues) page.

## Credits

Special thanks to the Firebase and Vue.js communities for their contributions and support in the development of this plugin.
