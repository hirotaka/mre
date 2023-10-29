type Props = {
  url: string;
};

export type Pagination = {
  hasPrev: boolean;
  hasNext: boolean;
};

export const usePagination = ({ url }: Props) => {
  const page = useState<number>(url + "/page", () => 1);
  const response = useState<Pagination | null>(url + "/pagination");

  const hasPrev = computed(() => {
    if (response.value) {
      return response.value.hasPrev;
    }
  });

  const hasNext = computed(() => {
    if (response.value) {
      return response.value.hasNext;
    }
  });

  const prev = () => {
    page.value = page.value - 1;
  };

  const next = () => {
    page.value = page.value + 1;
  };

  return {
    page,
    response,
    hasPrev,
    hasNext,
    prev,
    next,
  };
};
