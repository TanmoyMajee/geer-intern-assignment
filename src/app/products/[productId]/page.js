export default async function ProductPage({ params }) {
  // Fetch product data from your API
  const res = await fetch(`/api/products/${params.productId}`, {
    method:'GET'
  });
  if (!res.ok) {
    // Product not found or error
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        </div>
      </div>
    );
  }
  const product = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          {product.imageUrl && (
            <img src={product.imageUrl} alt={product.name} className="mb-4 w-full h-64 object-cover rounded" />
          )}
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-gray-900">${product.price}</p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}