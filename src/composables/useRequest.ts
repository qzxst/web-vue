import { ref, type Ref } from "vue";

type UseRequestReturn<T, P extends any[]> = {
  data: Ref<any>;
  error: Ref<any>;
  loading: Ref<boolean>;
  run: (...args: P) => Promise<T | null>;
};

export function useRequest<T, P extends any[] = any[]>(fn: (...args: P) => Promise<T>, immediate = false): UseRequestReturn<T, P> {
  const data = ref<T | null>(null);
  const error = ref<any>(null);
  const loading = ref(false);

  const run = async (...args: P): Promise<T | null> => {
    loading.value = true;
    error.value = null;
    try {
      const res = await fn(...args);
      data.value = res as T;
      return res as T;
    } catch (e) {
      error.value = e;
      throw e;
    } finally {
      loading.value = false;
    }
  };

  if (immediate) {
    // fire and forget. cast to satisfy generic signature when no args are provided
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    run(...([] as unknown as P)).catch(() => {});
  }

  return { data, error, loading, run };
}

export default useRequest;
