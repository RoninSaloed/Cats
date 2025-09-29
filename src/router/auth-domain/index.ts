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
    {
      path: CommonDomainRoutes.ABSOLUTE_FACT,
      name: CommonDomainRoutes.N_FACT,
      component: () => import("../../pages/main-domain/FactPage.vue"),
    },
  ];
  buildRoutes(): RouteRecordRaw[] {
    return this.config;
  }
}
export default new AuthDomain();
