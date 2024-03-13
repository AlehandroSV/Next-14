import { useFormStatus } from "react-dom";

export function ButtonAddTag() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Carregando..." : "Salvar Tag"}
    </button>
  );
}
