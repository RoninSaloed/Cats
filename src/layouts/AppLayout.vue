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
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";
import ScHeader from "../components/headers/ScHeader.vue";
import Footer from "../components/footer/footer.vue";

const isDark = useDark();
</script>
