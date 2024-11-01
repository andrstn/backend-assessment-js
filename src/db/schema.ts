import { pgTable, serial, text, doublePrecision, integer, numeric } from "drizzle-orm/pg-core";

export const productSchema = pgTable('products', {
  id: numeric('id'),
  title: text('title'),
  tags: text('tags'),
  created_at: text('created_at'),
  updated_at: text('updated_at'),
  sku: text('sku'),
})