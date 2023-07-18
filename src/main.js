import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import 'bootstrap/dist/js/bootstrap.min.js';
// import bootstrap from 'bootstrap'
import * as bootstrap from "bootstrap";

import { router } from './router';

createApp(App).use(router).mount('#app')
