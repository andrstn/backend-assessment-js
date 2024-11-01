export const transformProducts = (products: any) => {
  const response = products.map((product: any) => {
    return ({
      ProductId: product.id,
      Title: product.title,
      Tags: product.tags,
      CreatedAt: product.created_at,
      UpdatedAt: product.updated_at,
      ProductCode: product.sku
    })
  })
  return response;
}