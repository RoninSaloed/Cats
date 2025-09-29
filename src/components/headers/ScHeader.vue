<template>
  <header
    :class="{
      'w-full h-[95px] flex items-center px-[72px] justify-between': true,
      'bg-[#EBECFF]': !isDark,
      'bg-[#1A1B43]': isDark,
    }"
  >
    <LogoIcon />
    <div class="flex">
      <ScThemeSwitcher />
      <div
        v-if="userName"
        class="w-[56px] ml-[14px] h-[56px] rounded-full flex justify-center items-center text-white bg-[#636AF2] uppercase font-medium text-[31px]"
      >
        {{ userName }}
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";
import ScThemeSwitcher from "../buttonts/ScThemeSwitcher.vue";
import LogoIcon from "../shared/LogoIcon.vue";

import { useAuth } from "../../composables/useAuth";

const isDark = useDark();
const { userName } = useAuth();
</script>
