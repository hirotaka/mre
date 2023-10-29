import type { Comment } from "~/server/db";

type Data = {
  comments: Comment[];
};

export const useCommentList = async () => {
  const route = useRoute();

  const url = `/api/products/${route.params["id"]}/comments`;
  const options = useFetchOptions({ url });

  const { data, ...theRest } = await useFetch<Data>(url, {
    ...options,
  });

  return {
    data,
    ...theRest,
  };
};
