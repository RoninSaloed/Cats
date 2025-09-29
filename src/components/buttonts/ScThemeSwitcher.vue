<template>
  <div class="flex items-center justify-center">
    <button
      @click="handleSwitchTheme()"
      :class="{
        'w-20 h-[37px] rounded-[30px] relative  inline-flex items-center transform transition-all duration-500 ease-in-out': true,
        'bg-white': !isDarkTheme,
        'bg-[#000000]': isDarkTheme,
      }"
    >
      <span
        :class="{
          'absolute duration-500 ease-in-out transition-all transform top-1/2 -translate-y-1/2': true,
          'translate-x-10': isDarkTheme,
          'translate-x-2': !isDarkTheme,
        }"
      >
        <MoonIcon v-if="isDarkTheme" />
        <SunIcon v-else />
      </span>
      <span
        :class="{
          'bg-[#888888] w-7 h-7 rounded-full transition-all transform duration-500 ease-in-out': true,
          'translate-x-2': isDarkTheme,
          'translate-x-10': !isDarkTheme,
        }"
      ></span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import MoonIcon from "../shared/MoonIcon.vue";
import SunIcon from "../shared/SunIcon.vue";

const isDarkTheme = ref(useDark());

const handleSwitchTheme = () => {
  useToggle();
  isDarkTheme.value = !isDarkTheme.value;
};
watchEffect(() => {
  console.log(isDarkTheme.value);
});
</script>
