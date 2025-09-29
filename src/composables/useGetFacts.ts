import { ref } from "vue";
import appService from "../api/app.service";

export type FactType = {
  fact: string;
  length: number;
};

export function useFacts() {
  const facts = ref<FactType[]>([]);
  const loading = ref(false);
  const error = ref<unknown>(null);

  const limit = ref(10);
  const maxLength = ref<number | undefined>(undefined);

  const fetchFacts = async () => {
    loading.value = true;
    error.value = null;

    try {
      const data = await appService.getFacts({
        limit: limit.value,
        max_length: maxLength.value,
      });

      facts.value = data.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  const loadMore = async (step = 10) => {
    limit.value += step;
    await fetchFacts();
  };

  return {
    facts,
    loading,
    error,
    fetchFacts,
    loadMore,
    limit,
    maxLength,
  };
}
