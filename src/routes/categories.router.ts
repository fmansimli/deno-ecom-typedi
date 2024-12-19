import { Router } from "@oak/oak";
import { Container } from "typedi";

import { CategoriesController } from "../_modules/categories/categories.controller.ts";
import { validations } from "../_modules/categories/validations/index.ts";

const cont = Container.get(CategoriesController);

const router = new Router();

router.get("/", cont.getAll.bind(cont));
router.get("/:id", cont.getById.bind(cont));

router.post("/", validations.create, cont.create.bind(cont));
router.put("/:id", validations.updateById, cont.updateById.bind(cont));

router.delete("/:id", cont.deleteById.bind(cont));

export default router;
