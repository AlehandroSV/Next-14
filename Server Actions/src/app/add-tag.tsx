"use client";
import { CreateTags } from "@/actions/create-tags";
import { useRef } from "react";
import { ButtonAddTag } from "./button-add-tag";

export function AddTag() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form action={CreateTags} method="POST" ref={ref}>
      <input
        type="text"
        name="slug"
        placeholder="Slug da Tag"
        className="text-black"
      />

      <ButtonAddTag />
    </form>
  );
}
