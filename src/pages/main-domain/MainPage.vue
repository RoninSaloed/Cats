<template>
  <div>
    <div
      :class="{
        'text-[56px]  font-bold text-center mt-[57px] mb-[32px]': true,
        'text-[#232323]': !isDark,
        'text-[#DCDCDC]': isDark,
      }"
    >
      Facts About Cats To Share With Kids!
    </div>
    <div class="flex justify-between">
      <div class="max-w-[373px]">
        <ScSearchInput v-model="searchValue" placeholder="Search facts here" />
      </div>
      <div>
        <ScSelect
          :items="filterList"
          :selected="selectedFilter"
          @on-select="(value:item) => handleSelectFilter(value)"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useDark } from "@vueuse/core";
import ScSearchInput from "../../components/inputs/ScSearchInput.vue";
import { ref } from "vue";
import ScSelect, { type item } from "../../components/dropdowns/ScSelect.vue";
import { SelectFilterEnum } from "../../types/sharedTypes";
const isDark = useDark();

const searchValue = ref();

const filterList = [
  {
    name: "All facts",
    value: SelectFilterEnum.ALL_FACTS,
  },
  {
    name: "Show long ones first",
    value: SelectFilterEnum.LONG_FIRST,
  },
  {
    name: "Show short ones first",
    value: SelectFilterEnum.SHORT_FIRST,
  },
  {
    name: "Short ones only",
    value: SelectFilterEnum.ONLY_SHORT,
  },
  {
    name: "Long ones only",
    value: SelectFilterEnum.ONLY_LONG,
  },
];

const selectedFilter = ref<item>(filterList[0]);

const handleSelectFilter = (value: item) => {
  selectedFilter.value = value;
};
</script>
