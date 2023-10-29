import { useDb } from "~/server/db";
import { nanoid } from "nanoid";

export default defineEventHandler(async (event) => {
  const productId = getRouterParam(event, "id") || "";
  const body = await readBody(event);
  const { message } = body;

  const { db } = await useDb();

  const comment = { id: nanoid(), message, productId };

  db.data.comments.push(comment);
  db.write();

  return {
    comment,
  };
});
