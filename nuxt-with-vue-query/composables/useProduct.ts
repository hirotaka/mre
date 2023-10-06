import { useQuery } from "@tanstack/vue-query";

export const useProduct = (id: string) => {
  const fetcher = async () =>
    await fetch(`https://dummyjson.com/products/${id}`).then((response) =>
      response.json(),
    );

  const { data } = useQuery({
    queryKey: ["product", id],
    queryFn: fetcher,
  });

  return { data };
};
