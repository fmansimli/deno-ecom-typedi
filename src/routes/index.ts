import { Router } from "@oak/oak";

import productsRouter from "./products.router.ts";
import usersRouter from "./users.router.ts";
import categoriesRouter from "./categories.router.ts";

const router = new Router();

router.use("/products", productsRouter.routes());
router.use("/users", usersRouter.routes());
router.use("/categories", categoriesRouter.routes());

router.prefix("/api");

export default router;
