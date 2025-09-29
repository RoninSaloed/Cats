<template>
  <div
    :class="{
      'flex justify-center items-center': true,
    }"
  >
    <form @submit.prevent="handleClick" class="w-full max-w-[410px]">
      <div class="flex flex-col justify-center items-center">
        <div
          :class="{
            'text-center mb-12 text-xl font-bold': true,
            'text-[#232323]': !isDark,
            'text-[#DCDCDC]': isDark,
          }"
        >
          Login
        </div>
        <div class="mb-12 w-full">
          <sc-input
            v-for="(item, idx) of loginInputs"
            :key="idx"
            :is-disabled="false"
            v-model="formFields[item.value as keyof FormType]"
            :placeholder="item.placeholder"
            :type="item.type"
            :name="item.name"
            :error-message="meta.dirty ? errors[item.value as keyof FormType] : '' "
          />
        </div>

        <ScButton type="submit" label="Log in" />
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import ScInput from "../../components/inputs/ScInput.vue";
import { useField, useForm } from "vee-validate";
import * as zod from "zod";
import { AuthSchema } from "../../schemas/auth.schema";
import { toTypedSchema } from "@vee-validate/zod";
import { ref } from "vue";
import ScButton from "../../components/buttonts/ScButton.vue";
import { useDark } from "@vueuse/core";
type InputTypes = {
  name: string;
  placeholder: string;
  type: string;
  value: string;
};

const isDark = useDark();

type FormType = zod.infer<typeof AuthSchema>;

const loginInputs: InputTypes[] = [
  {
    name: "Name",
    placeholder: "enter email",
    type: "text",
    value: "name",
  },
];

const { values, handleSubmit, errors, meta } = useForm({
  initialValues: {
    name: "",
  },
  validationSchema: toTypedSchema(AuthSchema),
});
const { value: name } = useField<string>("name");
const formFields = ref({
  name,
});
const handleClick = handleSubmit((values) => {
  console.log(values);
});
</script>
