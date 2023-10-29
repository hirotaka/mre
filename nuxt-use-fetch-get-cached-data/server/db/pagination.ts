type Props = {
  list: any[];
  page: number;
};

export const usePagination = ({ list, page }: Props) => {
  const limit = 10;
  const start = (page - 1) * limit;
  const end = start + limit;
  const data = list.slice(start, end);
  const hasPrev = !(page === 1);
  const hasNext = list.length > page * limit;

  return {
    data,
    pagination: {
      hasPrev,
      hasNext,
    },
  };
};
