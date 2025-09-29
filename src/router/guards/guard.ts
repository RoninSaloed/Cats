import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { getItemFromStorage } from "../../helpers/storage";
import { CommonDomainRoutes } from "../routes/auth-domain";
import { ACCESS_TOKEN_KEY } from "../../shared/constants";

export default async (
  to: RouteLocationNormalized,
  _: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const token: string | null = getItemFromStorage(ACCESS_TOKEN_KEY);
  if (token && to.name === CommonDomainRoutes.N_LOGIN) {
    return next({ name: CommonDomainRoutes.N_HOME });
  }
  if (!token && to.name !== CommonDomainRoutes.N_LOGIN) {
    return next({ name: CommonDomainRoutes.N_LOGIN });
  }
  return next();
};
