export class CommonDomainRoutes {
  static readonly AUTH = "auth" as const;
  static readonly LOGIN = "login" as const;
  static readonly HOME = "/" as const;

  static readonly ABSOLUTE_AUTH = `/${CommonDomainRoutes.AUTH}` as const;
  static readonly ABSOLUTE_HOME = `${CommonDomainRoutes.HOME}` as const;

  static readonly ABSOLUTE_LOGIN =
    `/${CommonDomainRoutes.AUTH}/${CommonDomainRoutes.LOGIN}` as const;

  static readonly N_LOGIN = "Login" as const;

  static readonly N_HOME = "Home" as const;
}
