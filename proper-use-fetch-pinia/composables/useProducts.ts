export const useProducts = async () => {
  type Products = {
    products: {
      id: string;
      title: string;
    }[];
  };

  const key = `/products`;
  const products = useState<Products["products"] | null>(key);

  const {
    data,
    pending: isPending,
    refresh,
    execute,
    ...theRest
  } = await useFetch<Products>(() => `https://dummyjson.com/products`, {
    immediate: false,
    key,
  });

  async function fetchProducts() {
    await refresh();
    if (data.value) {
      products.value = data.value?.products;
    }
  }

  if (!products.value) {
    await fetchProducts();
  }

  return {
    products,
    fetchProducts,
    isPending,
    execute,
    ...theRest,
  };
};
