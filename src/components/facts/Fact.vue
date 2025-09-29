<template>
  <div
    :class="{
      'w-full h-[459px] rounded-md transition-all duration-200 ease-in-out ': true,
      'hover:bg-[#313247]': isDark,
      'hover:bg-[#EBECFF]': !isDark,
    }"
  >
    <img :src="img" alt="" />
    <div
      :class="[
        'p-4',
        isDark ? 'text-[#DCDCDC]' : 'text-[#232323]',
        describe.length < 100
          ? 'font-bold text-[24px]'
          : 'font-normal text-base',
      ]"
    >
      {{ describe }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDark } from "@vueuse/core";

type FactType = {
  describe: string;
  img: string;
};
const props = defineProps<FactType>();

const isDark = useDark();
console.log(props.describe.length);
</script>
