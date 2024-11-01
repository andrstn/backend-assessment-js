import axios from 'axios'
import { postUrl } from "../../constants";
import { insertMultiple } from '../../services/products-service';
import { transformProducts } from '../../common/transform';

export async function insert(event: any): Promise<Response> {
  try {
    const externalUrlResponse = await axios.get(postUrl);

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

    const transformedResponse = transformProducts(response);

    return new Response(JSON.stringify(transformedResponse), {
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