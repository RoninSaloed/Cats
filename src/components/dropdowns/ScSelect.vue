<template>
  <div class="">
    <div
      :class="{
        'md:w-[300px] w-[240px] py-[12px] pl-[10px] rounded-md mb-[6px] relative': true,
        'bg-[#EBECFF] text-[#434343]': !isDark,
        'bg-[#4D4E69] text-[#E2E2E2]': isDark,
      }"
    >
      {{ selected.name }}
      <button
        @click="handleOpen()"
        :class="{
          'absolute right-5 top-1/2 -translate-y-1/2': true,
          'rotate-180': isOpen,
        }"
      >
        <OpenArrowIcon />
      </button>
    </div>
    <div v-show="isOpen" class="absolute bg">
      <button
        v-for="(item, idx) of items"
        :key="idx"
        :class="{
          'md:w-[300px] w-[240px] py-[12px] pl-[10px] flex relative': true,
          'bg-[#EBECFF]  hover:bg-[#D6D8FF]': !isDark,
          'bg-[#4D4E69] text-[#E2E2E2] hover:bg-[#313247]': isDark,
          'text-[#6E72EC]': item.value === selected.value && !isDark,
          'text-[#434343]': item.value !== selected.value && !isDark,
        }"
        @click="handleSelectFilter(item)"
      >
        {{ item.name }}
        <div
          v-show="item.value === selected.value"
          class="absolute right-5 top-1/2 -translate-y-1/2"
        >
          <SelectedItemIcon />
        </div>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDark } from "@vueuse/core";
import type { SelectFilterEnum } from "../../types/sharedTypes";
import OpenArrowIcon from "../shared/OpenArrowIcon.vue";
import { ref } from "vue";
import SelectedItemIcon from "../shared/SelectedItemIcon.vue";
export type item = {
  name: string;
  value: SelectFilterEnum;
};
type ScSelectType = {
  items: item[];
  selected: item;
};
const emits = defineEmits(["on-select"]);
const isDark = useDark();
const isOpen = ref(false);

defineProps<ScSelectType>();

const handleSelectFilter = (value: item) => {
  [emits("on-select", value)];
};

const handleOpen = () => [(isOpen.value = !isOpen.value)];
</script>
