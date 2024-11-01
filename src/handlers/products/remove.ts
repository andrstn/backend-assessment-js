import { deleteOne } from '../../services/products-service';

export async function remove(event: any): Promise<Response> {
  try {
    const response = await deleteOne(event.env.DATABASE_URL, event.req.param('id'));

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ error: "Failed to process the GET request", details: `${error}` }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}