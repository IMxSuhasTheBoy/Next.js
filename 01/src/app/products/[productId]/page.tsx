export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  // const { productId } = await params;
  const productId = (await params).productId;

  return (
    <>
      <h1>dynamic route for productId</h1>
      <h2>ProductDetails: {productId}</h2>
    </>
  );
}
