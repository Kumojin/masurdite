import Vue from "vue";
import Router from "vue-router";
import store from "./store";

import PageNotFound from "@/views/PageNotFound";
import Login from "@/views/Login";
import Signup from "@/views/Signup";

import Dashboard from "@/views/Dashboard";
import Profile from "@/views/Profile";
import Infos from "@/views/Infos";

Vue.use(Router);

const privateRouteMeta = { meta: { private: true } };
const privateRoutes = [
  { path: "/app", redirect: "/app/dashboard" },
  { path: "/app/dashboard", name: "Profile", component: Dashboard },
  { path: "/app/profile", name: "Profile", component: Profile },
  { path: "/app/infos", name: "Infos", component: Infos }
].map(route => ({ ...route, ...privateRouteMeta }));
const publicRoutes = [
  {
    path: "/",
    name: "LandingPage",
    component: Login
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/join",
    name: "Signup",
    component: Signup
  },
  { path: "*", component: PageNotFound }
];

const router = new Router({
  mode: "history",
  routes: [...publicRoutes, ...privateRoutes]
});

router.beforeEach((to, from, next) => {
  if (to.path === "/logout") {
    store.commit("logout");
    return next("/");
  }

  if (["/login", "/join"].includes(to.path) && store.getters.isAuthentified) {
    return next("/app");
  }

  if (!to.meta.private || store.getters.isAuthentified) {
    return next();
  }

  return next("/login");
});

export default router;
