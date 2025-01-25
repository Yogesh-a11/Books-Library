import config from "@/lib/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { neon } from "@neondatabase/serverless";


const sql = neon(config.env.databaseUrl!);

export const db = drizzle({Client: sql});