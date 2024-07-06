import { Suspense } from "react";
import { AddTag } from "./add-tag";
import { AddTagOnServer } from "./add-tag-on-server";
import { Tags } from "./tags";

export default function Home() {
  return (
    <div>
      {/* Suspense API do React */}
      <Suspense fallback={<p>Carregando tags...</p>}>
        <Tags />
      </Suspense>
      {/* <AddTag /> */}
      <AddTagOnServer />
    </div>
  );
}
