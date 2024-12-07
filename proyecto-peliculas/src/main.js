/*import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');*/

import { createApp } from 'vue';
import { VueFire, VueFireAuth } from 'vuefire'; // Importado de VueFire y autenticación
import { firebaseApp } from './firebaseConfig'; // Importado de la configuración de firebase
import App from './App.vue';

const app = createApp(App);

app.use(VueFire, {
  firebaseApp, // Conexión con firebase
  modules: [
    VueFireAuth(),
  ],
});

app.mount('#app');

