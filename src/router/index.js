import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Start from "../views/Start";
import Signup from "../views/Signup";
import Signin from "../views/Signin";
import Setting from "../views/Setting";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/start",
    name: "Start",
    component: Start,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/setting",
    name: "Setting",
    component: Setting,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
