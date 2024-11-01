import { Hono } from "hono";
import { retrieve } from "../handlers/products/retrieve";
import { removeAll } from "../handlers/products/removeAll";
import { insert } from "../handlers/products/insert";
import { remove } from "../handlers/products/remove";
import { update } from "../handlers/products/update";

const productRoutes = new Hono();

productRoutes.get('/', retrieve);
productRoutes.post('/', insert);
productRoutes.delete('/:id', remove);
productRoutes.delete('/', removeAll);
productRoutes.put('/', update);

export { productRoutes };