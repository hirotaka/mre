type Data = {
  liked: boolean;
};

export const useLike = async () => {
  const route = useRoute();

  const url = `/api/products/${route.params["id"]}/liked`;
  const options = useFetchOptions({ url });

  const { data, ...theRest } = await useFetch<Data>(url, options);

  const toggle = async () => {
    await $fetch(`/api/products/${route.params["id"]}/toggle`, {
      method: "PUT",
    });
  };

  const isLiked = computed(() => data.value?.liked);

  return {
    data,
    ...theRest,
    toggle,
    isLiked,
  };
};
