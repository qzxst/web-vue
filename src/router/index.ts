import { createRouter, createWebHistory } from "vue-router";
// console.log(import.meta.env.BASE_URL);
export const staticRoutes = [
  {
    path: "/",
    name: "home",
    meta: {
      roles: ["admin", "user"],
    },
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/game",
    name: "game",
    component: () => import("@/views/GameView.vue"),
  },
  {
    path: "/dynamic",
    name: "dynamic",
    component: () => import("@/views/DynamicView.vue"),
  },
  {
    path: "/join",
    name: "join",
    component: () => import("@/views/JoinView.vue"),
  },
  {
    path: "/dispute",
    name: "dispute",
    component: () => import("@/views/DisputeView.vue"),
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () => import("@/views/PrivacyView.vue"),
  },
  {
    path: "/technical",
    name: "technical",
    component: () => import("@/views/TechnicalView.vue"),
  },
  {
    path: "/agreement",
    name: "agreement",
    component: () => import("@/views/AgreementView.vue"),
  },
  {
    path: "/index",
    name: "index",
    component: () => import("@/views/IndexView.vue"),
  },
  {
    path: "/support",
    name: "support",
    component: () => import("@/views/SupportView.vue"),
  },
];

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: staticRoutes,
});

export default router;
