import { deleteAll } from '../../services/products-service';

export async function removeAll(event: any): Promise<Response> {
  try {
    const response = await deleteAll(event.env.DATABASE_URL);

    return new Response(JSON.stringify({
      message: "All products deleted"
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