export async function Tags() {
  // Delay de 3 segundos
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch("http://localhost:3333/tags", {
    next: {
      tags: ["get-tags"],
    },
  });

  const data = await response.json();

  return (
    <ul>
      {data.map((item: any) => (
        <li key={item.id}>{item.slug}</li>
      ))}
    </ul>
  );
}
