import { nanoid } from "nanoid";
import { useDb } from "~/server/db";

export default defineEventHandler(async (event) => {
  const productId = getRouterParam(event, "id");
  const { db } = await useDb();

  const like = db.data.likes.find((l) => l.productId === productId);

  if (like) {
    db.data.likes = db.data.likes.filter((l) => l.productId !== productId);
  } else {
    if (productId) {
      db.data.likes.push({ id: nanoid(), productId });
    }
  }
  db.write();

  return {
    liked: !!!like,
  };
});
