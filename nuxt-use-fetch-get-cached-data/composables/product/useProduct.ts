import type { Product } from "~/server/db";

type Data = {
  product: Product;
};

export const useProduct = async () => {
  const route = useRoute();

  const url = `/api/products/${route.params["id"]}`;
  const options = useFetchOptions({ url });

  return await useFetch<Data>(url, options);
};
