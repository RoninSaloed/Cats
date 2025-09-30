<template>
  <button @click="router.back()">
    <div class="relative flex justify-center items-center">
      <span
        :class="{
          'absolute w-2 h-2 border-r-1 border-b-1  rotate-135 top-[6px] left-0': true,
          'border-[#434343]': !isDark,
          'border-[#D3D3D3]': isDark,
        }"
      ></span>
      <div
        :class="{
          'text-base text-center ml-3 ': true,
          'text-[#434343]': !isDark,
          'text-[#D3D3D3]': isDark,
        }"
      >
        Back
      </div>
    </div>
  </button>
</template>

<script lang="ts" setup>
import { useDark } from "@vueuse/core";
import { useRouter } from "vue-router";

const isDark = useDark();
const router = useRouter();
</script>
