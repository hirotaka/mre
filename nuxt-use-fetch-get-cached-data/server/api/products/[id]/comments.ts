import { useDb } from "~/server/db";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id") as string;
  const { db } = await useDb();

  const comments = db.data.comments.filter((c) => c.productId === id);

  return {
    comments,
  };
});
