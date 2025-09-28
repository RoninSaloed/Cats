<template>
  <button
    :type="type"
    @click="handleClick()"
    :name="label"
    :disabled="isDisabled"
  >
    {{ label }}
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
