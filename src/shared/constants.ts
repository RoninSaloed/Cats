import { SelectFilterEnum } from "../types/sharedTypes";

export const ACCESS_TOKEN_KEY = "access_token" as const;

export const filterList = [
  {
    name: "All facts",
    value: SelectFilterEnum.ALL_FACTS,
  },
  {
    name: "Show long ones first",
    value: SelectFilterEnum.LONG_FIRST,
  },
  {
    name: "Show short ones first",
    value: SelectFilterEnum.SHORT_FIRST,
  },
  {
    name: "Short ones only",
    value: SelectFilterEnum.ONLY_SHORT,
  },
  {
    name: "Long ones only",
    value: SelectFilterEnum.ONLY_LONG,
  },
];
