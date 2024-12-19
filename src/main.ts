import "reflect-metadata";
import "@std/dotenv/load";
import "./container/di.ts";

import { Application } from "@oak/oak";

import router from "./routes/index.ts";
import * as errors from "./middlewares/error.middleware.ts";
import { dataSource } from "./db/data-source.ts";

const app = new Application();

app.use(errors.catchError);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(errors.catch404);

const port = Number(Deno.env.get("PORT")) || 8000;
const JWT_SECRET = Deno.env.get("JWT_SECRET");

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET must be provided");
}

await dataSource.initialize();
app.listen({ port });
