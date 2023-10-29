export const useCachedData = () => {
  const setFetchedAt = (input: any) => {
    return {
      ...input,
      fetchedAt: new Date().toISOString(),
    };
  };

  const getCachedData = (key: string) => {
    const nuxtApp = useNuxtApp();

    const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];

    if (!data) return;

    const expirationDate = new Date(data.fetchedAt);
    expirationDate.setTime(expirationDate.getTime() + 5 * 1000);
    const isExpired = expirationDate.getTime() < Date.now();

    if (isExpired) return;

    return data;
  };

  return { setFetchedAt, getCachedData };
};
