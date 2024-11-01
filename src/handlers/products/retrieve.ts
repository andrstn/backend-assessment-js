import axios from 'axios'
import { getUrl } from "../../constants";
import { insertMultiple } from '../../services/products-service';

export async function retrieve(event: any): Promise<Response> {
  try {
    const externalUrlResponse = await axios.get(getUrl);

    const products: any = [];
    externalUrlResponse.data.products.map((product: any) => {
      for (const variant of product.variants) {
        products.push({
          id: product.id,
          title: `${product.title} ${variant.title}`,
          tags: product.tags,
          created_at: product.created_at,
          updated_at: product.updated_at,
          sku: variant.sku
        })
      }
    })

    const response = await insertMultiple(event.env.DATABASE_URL, products);

    return new Response(JSON.stringify({
      message: "Products saved to database"
    }), {
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