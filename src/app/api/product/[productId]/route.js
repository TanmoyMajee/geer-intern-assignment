export async function DELETE(request,{params}) {
  const {productId} = await params;
  const id = parseInt(productId);
  console.log('Delete thus pro',id)
  return Response.json(id);
}

export async function GET(request, { params }) {
  const { productId } = await params;
  const id = parseInt(productId);
  console.log('Get this Prodect',id)
  return Response.json(id);
}