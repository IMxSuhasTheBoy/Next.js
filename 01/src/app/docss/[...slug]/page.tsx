export default async function Docss({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <div>
        <h1>
          Docss for feature: {slug[0]} and concept: {slug[1]}
        </h1>
      </div>
    );
  } else if (slug?.length === 1) {
    return (
      <div>
        <h1>Docss for feature: {slug[0]}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>catch all dynamic route for /app/docss/[...slug] </h1>
      <p>
        match with any url starting with /docss : catch all route
        /docss/.../.../... but atlest a segment is required
      </p>
    </div>
  );
}
