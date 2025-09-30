<template>
  <div>
    <div
      :class="{
        'md:text-[56px]  text-3xl font-bold text-center mt-[57px] mb-[32px]': true,
        'text-[#232323]': !isDark,
        'text-[#DCDCDC]': isDark,
      }"
    >
      Facts About Cats To Share With Kids!
    </div>
    <div class="flex flex-wrap justify-between mb-[32px]">
      <div class="max-w-[373px] mb-4 md:mb-0 md:pr-3">
        <ScSearchInput v-model="searchValue" placeholder="Search facts here" />
      </div>
      <div class="max-w-[300px]">
        <ScSelect
          :items="filterList"
          :selected="selectedFilter"
          @on-select="(value:item) => handleSelectFilter(value)"
        />
      </div>
    </div>
    <div
      class="grid gap-x-[15.5px] gap-y-[20px] justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1296px] w-full m-auto mb-[56px]"
    >
      <Fact
        v-for="(item, idx) of filteredFacts"
        :key="idx"
        :describe="item.fact"
        :img="getFactImg(idx)"
        class="max-w-[411px] w-full"
      />
    </div>
    <div class="flex justify-center pb-[48px]">
      <button
        class="bg-transparent px-[91px] py-[15px] font-semibold text-[#6E72EC] rounded-md border border-[#6E72EC]"
        @click="loadMore()"
      >
        load more facts
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useDark } from "@vueuse/core";
import ScSearchInput from "../../components/inputs/ScSearchInput.vue";
import { computed, onMounted, ref, watchEffect } from "vue";
import ScSelect, { type item } from "../../components/dropdowns/ScSelect.vue";
import { useFacts } from "../../composables/useGetFacts";
import { filterList } from "../../shared/constants";
import Fact from "../../components/facts/Fact.vue";
import { SelectFilterEnum } from "../../types/sharedTypes";
const { facts, loading, error, fetchFacts, loadMore } = useFacts();

const isDark = useDark();

const searchValue = ref();

const selectedFilter = ref<item>(filterList[0]);

const handleSelectFilter = (value: item) => {
  selectedFilter.value = value;
};

onMounted(() => {
  fetchFacts();
});

const factImages = [
  new URL("../../assets/Pic1.png", import.meta.url).href,
  new URL("../../assets/Pic2.png", import.meta.url).href,
  new URL("../../assets/Pic3.png", import.meta.url).href,
  new URL("../../assets/Pic4.png", import.meta.url).href,
  new URL("../../assets/Pic5.png", import.meta.url).href,
  new URL("../../assets/Pic6.png", import.meta.url).href,
  new URL("../../assets/Pic7.png", import.meta.url).href,
  new URL("../../assets/Pic8.png", import.meta.url).href,
  new URL("../../assets/Pic9.png", import.meta.url).href,
];

const getFactImg = (index: number) => {
  return factImages[index % factImages.length];
};
const filteredFacts = computed(() => {
  let result = [...facts.value];

  if (searchValue.value) {
    const search = searchValue.value.toLowerCase().trim();
    result = result.filter((f) => f.fact.toLowerCase().includes(search));
  }

  switch (selectedFilter.value.value) {
    case SelectFilterEnum.LONG_FIRST:
      result.sort((a, b) => b.fact.length - a.fact.length);
      break;
    case SelectFilterEnum.SHORT_FIRST:
      result.sort((a, b) => a.fact.length - b.fact.length);
      break;
    case SelectFilterEnum.ONLY_SHORT:
      result = result.filter((f) => f.fact.length < 100);
      break;
    case SelectFilterEnum.ONLY_LONG:
      result = result.filter((f) => f.fact.length >= 100);
      break;
    case SelectFilterEnum.ALL_FACTS:
    default:
      break;
  }

  return result;
});

onMounted(() => {
  fetchFacts();
});
</script>
