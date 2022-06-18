import { MongoClient } from "https://deno.land/x/mongo@v0.21.0/mod.ts";
import "https://deno.land/x/dotenv@v2.0.0/load.ts";

const client = new MongoClient();
await client.connect(Deno.env.get("MONGO_URI")!);

export const db = client.database("deno_rest_api");
