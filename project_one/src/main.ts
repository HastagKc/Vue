// FILE: src/main.ts

import { Quasar } from "quasar";
import { createApp } from "vue";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar CSS
import "quasar/src/css/index.sass";

import App from "./App.vue";

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {}, // Import Quasar plugins here if needed
});

myApp.mount("#app");
