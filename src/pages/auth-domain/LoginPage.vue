<template>
  <form @submit.prevent="handleClick">
    <div>Login</div>
    <sc-input
      v-for="(item, idx) of loginInputs"
      :key="idx"
      :is-disabled="false"
      v-model="formFields[item.value as keyof FormType]"
      :placeholder="item.placeholder"
      :type="item.type"
      :error-message="meta.dirty ?  errors[item.value as keyof FormType] : '' "
    />
    <ScButton type="submit" label="Enter" />
  </form>
</template>
<script setup lang="ts">
import ScInput from "../../components/inputs/ScInput.vue";
import { useField, useForm } from "vee-validate";
import * as zod from "zod";
import { AuthSchema } from "../../schemas/auth.schema";
import { toTypedSchema } from "@vee-validate/zod";
import { ref, watchEffect } from "vue";
import ScButton from "../../components/buttonts/ScButton.vue";
type InputTypes = {
  name: string;
  placeholder: string;
  type: string;
  value: string;
};
type FormType = zod.infer<typeof AuthSchema>;

const loginInputs: InputTypes[] = [
  {
    name: "Email",
    placeholder: "enter email",
    type: "text",
    value: "email",
  },
  {
    name: "Password",
    placeholder: "enter password",
    type: "text",
    value: "password",
  },
];

const { values, handleSubmit, errors, meta } = useForm({
  initialValues: {
    email: "",
    password: "",
  },
  validationSchema: toTypedSchema(AuthSchema),
});
const { value: email } = useField<string>("email");
const { value: password } = useField<string>("password");
const formFields = ref({
  email,
  password,
});
const handleClick = handleSubmit((values) => {
  console.log(values);
});
</script>
