import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import UsersList from "./components/users/UsersList.vue";
import NotFound from "./components/nav/NotFound.vue";
import TeamsFooter from "./components/teams/TeamsFooter.vue";
import UsersFooter from "./components/users/UsersFooter.vue";

const router = createRouter({
  routes: [
    { path: "/", redirect: "/teams" },
    {
      path: "/teams",
      name: "teams",
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          path: ":teamId",
          name: "team-members",
          component: TeamMembers,
          props: true,
        },
      ],
    },
    { path: "/users", components: { default: UsersList, footer: UsersFooter } },
    { path: "/:notFound(.*)", component: NotFound }, //(.*) регулярное выражение: любые знаки
  ],
  history: createWebHistory(),
  linkActiveClass: "router-link-active", //standard
});

const app = createApp(App).use(router);

app.mount("#app");
