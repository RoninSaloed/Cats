<template>
  <header
    :class="{
      'w-full py-[12.5px] flex flex-wrap items-center px-[72px] md:justify-between justify-center ': true,
      'bg-[#EBECFF]': !isDark,
      'bg-[#1A1B43]': isDark,
    }"
  >
    <LogoIcon class="pr-2" />
    <div class="flex relative">
      <ScThemeSwitcher />
      <button
        @click="handleOpen()"
        v-if="userName"
        class="w-[56px] ml-[14px] h-[56px] rounded-full flex justify-center items-center text-white bg-[#636AF2] uppercase font-medium text-[31px]"
      >
        {{ userName }}
      </button>
      <button
        @click="handleLogout()"
        v-show="isOpen"
        :class="{
          'text-base w-[148px] py-3 text-left pl-4  absolute -bottom-[75px] rounded-md': true,
          'text-[#434343] bg-[#EBECFF]': !isDark,
          'text-[#FFFFFF] bg-[#313247]': isDark,
        }"
      >
        Logout
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";
import ScThemeSwitcher from "../buttonts/ScThemeSwitcher.vue";
import LogoIcon from "../shared/LogoIcon.vue";

import { useAuth } from "../../composables/useAuth";
import { ref } from "vue";
import { removeItemFromStorage } from "../../helpers/storage";
import { ACCESS_TOKEN_KEY } from "../../shared/constants";
import { useRouter } from "vue-router";
import { CommonDomainRoutes } from "../../router/routes/auth-domain";
const router = useRouter();
const isDark = useDark();
const { userName, setToken } = useAuth();

const isOpen = ref();
const handleOpen = () => {
  isOpen.value = !isOpen.value;
};

const handleLogout = () => {
  setToken("");
  isOpen.value = !isOpen.value;
  router.push({ name: CommonDomainRoutes.N_LOGIN });
};
</script>
