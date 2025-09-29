<template>
  <button
    :type="type"
    @click="handleClick()"
    :name="label"
    :disabled="isDisabled"
    class="bg-[#6E72EC] font-semibold text-lg text-white rounded-md"
  >
    <div class="px-[87.5px] py-[15px]">{{ label }}</div>
  </button>
</template>

<script setup lang="ts">
export type HTMLButtonTypes = "button" | "submit" | "reset";

type ScButtonType = {
  type?: HTMLButtonTypes;
  label: string;
  isDisabled?: boolean;
};

withDefaults(defineProps<ScButtonType>(), {
  type: "button",
  isDisabled: false,
});

const emits = defineEmits(["onClick"]);

const handleClick = () => {
  emits("onClick");
};
</script>
