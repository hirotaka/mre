import { useFetchStore } from "~/stores/useFetchStore";

export const useProduct = (id: string) => {
  type Product = {
    id: string;
    description: string;
    title: string;
    thumbnail: string;
  };

  const store = useFetchStore();

  const key = `/products/${id}`;
  const product = store.get(key);

  const {
    data,
    pending: isPending,
    refresh,
    execute,
    ...theRest
  } = useFetch<Product>(() => `https://dummyjson.com/products/${id}`, {
    immediate: false,
    server: false,
    key,
  });

  async function fetchProduct() {
    await refresh();
    store.set(key, data.value);
  }

  if (!product?.data) {
    fetchProduct();
  }

  return {
    data: product?.data,
    fetchProduct,
    isPending,
    execute,
    ...theRest,
  };
};
