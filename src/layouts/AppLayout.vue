<template>
  <div
    :class="{
      'h-screen ': true,
      'bg-white': !isDark,
      'bg-[#202020]': isDark,
    }"
  >
    <sc-header />
    <div class="px-[72px]"><slot /></div>
  </div>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";
import ScHeader from "../components/headers/ScHeader.vue";

const isDark = useDark();
</script>
