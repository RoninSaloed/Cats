import { createRouter, createWebHistory } from "vue-router";
import authDomain from "./auth-domain";
import guard from "./guards/guard";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "active-link",
  routes: [...authDomain.buildRoutes()],
});

router.beforeEach(guard);

export default router;
