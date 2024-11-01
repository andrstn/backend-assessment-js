import { neon } from "@neondatabase/serverless";
import { drizzle, NeonHttpQueryResult } from "drizzle-orm/neon-http";
import { productSchema } from "../db/schema";
import { eq } from "drizzle-orm";

export const dbConnect = (url: string) => {
  const sql = neon(url);
  return drizzle(sql)
}

export const getAll = async (url: string): Promise<any> => {
  const response = await dbConnect(url).select().from(productSchema);
  return response;
}

export const insertMultiple = async (url: string, payload: any): Promise<any> => {
  const response = await dbConnect(url).insert(productSchema).values(payload).returning();
  return response;
}

export const updateOne = async (url: string, id: string, payload: any): Promise<any> => {
  const response = await dbConnect(url).update(productSchema).set(payload).where(eq(productSchema.id, id));
  return response;
}

export const deleteOne = async (url: string, id: string): Promise<any> => {
  const response = await dbConnect(url).delete(productSchema).where(eq(productSchema.id, id)).returning();
  return response;
}

export const deleteAll = async (url: string): Promise<NeonHttpQueryResult<any>> => {
  const response = await dbConnect(url).delete(productSchema);
  return response;
}