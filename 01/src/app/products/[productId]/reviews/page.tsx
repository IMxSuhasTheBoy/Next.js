export default async function ProductReviews({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;

  return (
    <div>
      <h1>
        ProductReviews: {productId} can be used to fetch all reviews for a
        product
      </h1>

      <ul>
        <li>Review 1</li>
        <li>Review 2</li>
        <li>Review 3</li>
        <li>Review 4</li>
        <li>Review 5</li>
      </ul>
    </div>
  );
}
