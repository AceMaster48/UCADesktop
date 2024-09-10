import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import router if used
import '/src/style.css'; // Import Tailwind CSS

createApp(App)
  .use(router)
  .mount('#app');
