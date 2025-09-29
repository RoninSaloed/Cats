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
        'focus:outline-none  w-full text-base  px-4 py-[10.5px] rounded-md caret-[#8588EF] caret': true,
        'border-[1px] border-[#6E72EC]': !errorMessage,
        'border-[1px] border-[#FF4646]': errorMessage,
        'text-[#434343] bg-[#EBECFF]': !isDark,
        'text-[#FFFFFF] bg-[#4D4E69]': isDark,
      }"
      :placeholder="placeholder"
    />
    <div
      class="absolute bot-0 left-0 text-sm text-[#FF4646]"
      v-if="errorMessage"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";

type ScInputType = {
  name: string;
  type?: string;
  placeholder?: string;
  inputClass?: string;
  isValid?: boolean;
  errorMessage?: string;
  isDisabled?: boolean;
};
const props = withDefaults(defineProps<ScInputType>(), {
  type: "text",
  placeholder: "",
  inputClass: "",
  isValid: true,
  isDisabled: false,
});

const modelValue = defineModel({ default: "" });

const isDark = useDark();
</script>
