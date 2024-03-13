"use server";
import { revalidateTag } from "next/cache";

export async function CreateTags(form: FormData) {
  const slug = form.get("slug");

  if (!slug) {
    return;
  }

  // Delay de 3 segundos
  await new Promise((resolve) => setTimeout(resolve, 3000));

  await fetch("http://localhost:3333/tags", {
    method: "POST",
    body: JSON.stringify({
      slug,
    }),
  });

  revalidateTag("get-tags");
}
