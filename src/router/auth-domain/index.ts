import type { RouteRecordRaw } from "vue-router";
import { CommonDomainRoutes } from "../routes/auth-domain";

class AuthDomain {
  private readonly config = [
    {
      path: CommonDomainRoutes.ABSOLUTE_AUTH,
      children: [
        {
          path: CommonDomainRoutes.LOGIN,
          name: CommonDomainRoutes.N_LOGIN,
          component: () => import("../../pages/auth-domain/LoginPage.vue"),
        },
      ],
    },
    {
      path: CommonDomainRoutes.HOME,
      name: CommonDomainRoutes.N_HOME,
      component: () => import("../../pages/main-domain/MainPage.vue"),
    },
  ];
  buildRoutes(): RouteRecordRaw[] {
    return this.config;
  }
}
export default new AuthDomain();
