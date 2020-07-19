import { runServer } from "./server.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

console.log(`Server is running at: ${config()["PORT"]}`);
runServer();
