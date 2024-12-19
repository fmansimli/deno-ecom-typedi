import "reflect-metadata";
import "@std/dotenv/load";

import { Application } from "@oak/oak";

import * as errors from "./src/middlewares/error.middleware.ts";
import router from "./src/routes/index.ts";

const app = new Application();

app.use(errors.catchError);

app.use(router.routes());
app.use(router.allowedMethods());

app.use(errors.catch404);

const port = Number(Deno.env.get("PORT")) || 8000;

app.listen({ port });

console.log(`Server running on http://localhost:${port}`);
