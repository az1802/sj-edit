import {
  Router,
  RouteRecordRaw,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import Home from "../views/Home.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home, name: "home", meta: { a: "aa" } },
  {
    path: "/edit-view",
    component: () => {
      return import("../views/EditView.vue");
    },
    meta: {},
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
  // parseQuery(query){
  //   console.log('query: ', query);
  //   return Object.fromEntries( query.split("&").map(item=>item.split("=")))
  // }
});

export default router;
