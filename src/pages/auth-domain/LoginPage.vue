<template>
  <div class="flex justify-center items-center mt-[116px]">
    <form
      v-if="!loading"
      @submit.prevent="handleClick"
      class="w-full max-w-[410px]"
    >
      <div class="flex flex-col justify-center items-center">
        <div
          :class="{
            'text-center mb-12 text-xl font-bold ': true,
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

    <div v-if="loading" class="flex justify-center items-center">
      <div class="absolute top-1/2 -translate-y-1/2">
        <ScLoader />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ScInput from "../../components/inputs/ScInput.vue";
import ScButton from "../../components/buttonts/ScButton.vue";
import { useField, useForm } from "vee-validate";
import * as zod from "zod";
import { AuthSchema } from "../../schemas/auth.schema";
import { toTypedSchema } from "@vee-validate/zod";
import { useDark } from "@vueuse/core";

import { useRouter } from "vue-router";
import { CommonDomainRoutes } from "../../router/routes/auth-domain";
import { useAuth } from "../../composables/useAuth";
import ScLoader from "../../components/loader/ScLoader.vue";

type InputTypes = {
  name: string;
  placeholder: string;
  type: string;
  value: string;
};

type FormType = zod.infer<typeof AuthSchema>;
const { setToken } = useAuth();

const isDark = useDark();
const router = useRouter();

const loading = ref(false);

const loginInputs: InputTypes[] = [
  {
    name: "Name",
    placeholder: "enter email",
    type: "text",
    value: "name",
  },
];

const { handleSubmit, errors, meta } = useForm({
  initialValues: { name: "" },
  validationSchema: toTypedSchema(AuthSchema),
});

const { value: name } = useField<string>("name");
const formFields = ref({ name });

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const handleClick = handleSubmit(async (values) => {
  loading.value = true;
  await sleep(5000);
  setToken(values.name);
  router.push({ name: CommonDomainRoutes.N_HOME });
});
</script>
