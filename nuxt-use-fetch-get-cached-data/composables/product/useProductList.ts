import type { Product } from "~/server/db";
import type { Pagination } from "~/composables/usePagination";

type Data = {
  products: Product[];
  pagination: Pagination;
};

export const useProductList = async () => {
  const url = "/api/products";
  const options = useFetchOptions({ url });
  const pagination = usePagination({
    url,
  });

  const { data, ...theRest } = await useFetch<Data>(url, {
    ...options,
    params: { page: pagination.page },
    onResponse({ response }) {
      pagination.response.value = response._data.pagination;
    },
  });

  return {
    data,
    pagination,
    ...theRest,
  };
};
