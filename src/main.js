import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";

const router = createRouter({
  routes: [
    { path: "/teams", component: TeamsList },
    { path: "/users", component: UsersList },
  ],
  history: createWebHistory(),
});

const app = createApp(App).use(router);

app.mount("#app");
