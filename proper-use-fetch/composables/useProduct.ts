export const useProduct = async (id: string) => {
  type Product = {
    id: string;
    description: string;
    title: string;
    thumbnail: string;
  };

  const key = `/products/${id}`;
  const product = useState<Product | null>(key);

  const {
    data,
    pending: isPending,
    refresh,
    execute,
    ...theRest
  } = await useFetch<Product>(() => `https://dummyjson.com/products/${id}`, {
    immediate: false,
    key,
  });

  async function fetchProduct() {
    await refresh();
    product.value = data.value;
  }

  if (!product.value) {
    await fetchProduct();
  }

  return {
    product,
    fetchProduct,
    isPending,
    execute,
    ...theRest,
  };
};
