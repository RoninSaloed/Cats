<template>
  <div
    :class="{
      'w-full h-[459px] rounded-md transition-all duration-200 ease-in-out ': true,
      'hover:bg-[#313247]': isDark,
      'hover:bg-[#EBECFF]': !isDark,
    }"
  >
    <button @click="handleClickFact()">
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
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useDark } from "@vueuse/core";
import { useRouter } from "vue-router";
import { CommonDomainRoutes } from "../../router/routes/auth-domain";
const router = useRouter();

type FactType = {
  describe: string;
  img: string;
};
const props = defineProps<FactType>();

const isDark = useDark();

const handleClickFact = () => {
  router.push({
    name: CommonDomainRoutes.N_FACT,
    query: { describe: props.describe, img: props.img },
  });
};
</script>
