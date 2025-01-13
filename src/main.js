import { createApp } from 'vue';
import VueGtag from 'vue-gtag-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.vue';

const app = createApp(App);

app.use(VueGtag, {
  property: {
    id: import.meta.env.VITE_GOOGLE_ANALYTICS,
  },
});
app.mount('#app');
