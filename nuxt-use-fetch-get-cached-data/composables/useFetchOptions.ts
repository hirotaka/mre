type Props = {
  url: string;
};

export const useFetchOptions = ({ url }: Props) => {
  const { setFetchedAt, getCachedData } = useCachedData();

  return {
    key: url,
    transform: (input: any) => {
      return setFetchedAt(input);
    },
    getCachedData(key: string) {
      return getCachedData(key);
    },
  };
};
