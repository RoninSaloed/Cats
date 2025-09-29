import { ref, computed } from "vue";
import { ACCESS_TOKEN_KEY } from "../shared/constants";
import { setItemToStorage } from "../helpers/storage";

const token = ref<string | null>(localStorage.getItem(ACCESS_TOKEN_KEY));
const userName = computed(() => token.value?.charAt(0) || "");

function setToken(newToken: string) {
  setItemToStorage(ACCESS_TOKEN_KEY, newToken);
  token.value = newToken;
}

export function useAuth() {
  return { token, userName, setToken };
}
