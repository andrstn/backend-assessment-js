import { getAll, updateOne,  } from '../../services/products-service';

export async function update(event: any): Promise<Response> {
  try {
    const products = await getAll(event.env.DATABASE_URL);

    const response = await products.map(async (product: any) => {
      await updateOne(event.env.DATABASE_URL, product.id, { title: `${product.title} ${product.sku}` })
    })

    return new Response(JSON.stringify({ message: "Products updated" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to process the GET request", details: `${error}` }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}