export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  return (
    <div>
      <h1>nested dynamic route for the review of a product</h1>
      <h2>
        ProductReview: {productId} review - {reviewId}
      </h2>
    </div>
  );
}
