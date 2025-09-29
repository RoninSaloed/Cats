<template>
  <div class="flex flex-col items-center max-w-[854px] m-auto">
    <div class="w-full pt-[104px] mb-[42px]">
      <img
        :src="img"
        alt=""
        class="w-full h-auto max-h-[528px] object-contain"
      />
    </div>
    <div
      :class="{
        'mt-4 text-left text-[20px]': true,
        'text-[#232323]': !isDark,
        'text-[#DCDCDC]': isDark,
      }"
    >
      {{ describe }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDark } from "@vueuse/core";
import { useRoute } from "vue-router";

const isDark = useDark();
const route = useRoute();

const describe = route.query.describe as string;
const img = route.query.img as string;
</script>
