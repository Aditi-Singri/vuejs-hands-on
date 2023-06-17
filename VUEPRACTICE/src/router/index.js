import { createWebHistory, createRouter } from "vue-router";
import EventBind from "@/components/EventBind.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import notFound from "@/views/notFound.vue";


const routes = [
  {
    path: "/",
    name: "EventBind",
    component: EventBind,
  },
  {
    path: "/HelloWorld/:name",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    // path: "/:catchAll(.*)",
    path: "/:catchAll(.*)",
    name: "notFound",
    component: notFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;