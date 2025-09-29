<template>
  <div class="relative block">
    <label
      :class="{
        'text-base': true,
        'text-[#232323]': !isDark,
        'text-[#DCDCDC]': isDark,
      }"
      >{{ name }}</label
    >
    <input
      :type="type"
      v-model="modelValue"
      :class="{
        'focus:outline-none  w-full text-base pl-11  pr-4 py-[10.5px] rounded-md caret-[#8588EF] caret': true,
        'text-[#434343] bg-[#EBECFF]': !isDark,
        'text-[#FFFFFF] bg-[#4D4E69]': isDark,
      }"
      :placeholder="placeholder"
    />
    <SearchIcon
      :is-active="isDark"
      class="absolute top-1/2 -translate-y-1/2 left-[16px]"
    />
  </div>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";
import SearchIcon from "../shared/SearchIcon.vue";

type ScInputType = {
  name?: string;
  type?: string;
  placeholder?: string;
  inputClass?: string;
  isDisabled?: boolean;
};
const props = withDefaults(defineProps<ScInputType>(), {
  type: "text",
  placeholder: "",
  inputClass: "",
  isDisabled: false,
});

const modelValue = defineModel({ default: "" });

const isDark = useDark();
</script>
