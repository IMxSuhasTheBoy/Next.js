export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <div>
        <h1>
          Docs for feature: {slug[0]} and concept: {slug[1]}
        </h1>
      </div>
    );
  } else if (slug?.length === 3) {
    return (
      <div>
        <h1>
          Docs for feature: {slug[0]} and concept: {slug[1]} and concept:
          {slug[2]}
        </h1>
      </div>
    );
  } else if (slug?.length === 1) {
    return (
      <div>
        <h1>Docs for feature: {slug[0]}</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>optional catch all dynamic route for /app/docs/[[...slug]]</h1>
      <h2>match with any url starting with /docs: </h2>
      <p>/docs/.../.../...</p>
    </div>
  );
}
