<template>
  <div
    :class="{
      'min-h-screen flex flex-col': true,
      'bg-white': !isDark,
      'bg-[#202020]': isDark,
    }"
  >
    <sc-header />
    <div class="flex-1 px-[72px]">
      <slot />
    </div>
    <Footer v-show="userName" />
  </div>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";
import ScHeader from "../components/headers/ScHeader.vue";
import Footer from "../components/footer/footer.vue";
import { useAuth } from "../composables/useAuth";

const isDark = useDark();
const { userName } = useAuth();
</script>
