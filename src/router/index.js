import { createRouter, createWebHashHistory } from "vue-router";
import LoginPage from "../components/LoginPage.vue";
const 
routes = [
  {
    path: "/",
    name: "home",
    component: LoginPage,
  },
  {
    path: "/signin",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUp.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
