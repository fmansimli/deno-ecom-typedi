import { Router } from "@oak/oak";
import { Container } from "typedi";

import { ProductsController } from "../_modules/products/products.controller.ts";

const cont = Container.get(ProductsController);

const router = new Router();

router.get("/", cont.findAll.bind(cont));
router.get("/:id", cont.findById.bind(cont));

export default router;
