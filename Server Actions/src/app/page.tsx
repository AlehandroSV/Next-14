import { Suspense } from "react";
import { AddTag } from "./add-tag";
import { Tags } from "./tags";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<>Carregando Tags...</>}>
        <Tags />
      </Suspense>
      <AddTag />
    </div>
  );
}
