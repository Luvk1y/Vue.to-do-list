
import { createApp } from 'vue';
import NavBar from './components/NavBar.vue';

import App from './App.vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

createApp(App).component("Nav-bar",NavBar).mount('#app')
