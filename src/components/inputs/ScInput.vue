<template>
  <input
    :type="type"
    v-model="modelValue"
    class="focus:outline-none"
    :placeholder="placeholder"
  />
  <div v-if="errorMessage">{{ errorMessage }}</div>
</template>

<script setup lang="ts">
type ScInputType = {
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
</script>
