<template>
  <div
    :class="{
      'w-full  h-[95px] flex items-center px-[72px] justify-between': true,
      'bg-[#EBECFF]': !isDark,
      'bg-[#1A1B43]': isDark,
    }"
  >
    <LogoIcon />
    <ScThemeSwitcher />
  </div>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";
import ScThemeSwitcher from "../buttonts/ScThemeSwitcher.vue";
import LogoIcon from "../shared/LogoIcon.vue";

const isDark = useDark();
</script>
