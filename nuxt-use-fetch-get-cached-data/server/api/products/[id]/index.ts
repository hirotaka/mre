import { useDb } from "~/server/db";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const { db } = await useDb();

  const product = db.data.products.find((p) => p.id === id);

  return {
    product,
  };
});
