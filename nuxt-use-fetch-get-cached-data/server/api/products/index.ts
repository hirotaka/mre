import { useDb, usePagination } from "~/server/db";

export default defineEventHandler(async (event) => {
  const page = Number(getQuery(event)["page"]);
  const { db } = await useDb();

  const { data, pagination } = usePagination({ list: db.data.products, page });

  return {
    products: data,
    pagination,
  };
});
