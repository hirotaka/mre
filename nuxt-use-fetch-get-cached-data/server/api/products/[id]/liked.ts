import { useDb } from "~/server/db";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const { db } = await useDb();

  const like = db.data.likes.find((l) => l.productId === id);

  return {
    liked: !!like,
  };
});
