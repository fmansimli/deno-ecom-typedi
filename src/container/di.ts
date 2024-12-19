import { Container, Token } from "typedi";
import { dataSource } from "../db/data-source.ts";

import { Category } from "../_modules/categories/entities/category.entity.ts";
import { Product } from "../_modules/products/entities/product.entity.ts";

export const DI = {
  PRODUCT_REPO: new Token<string>("productRepo"),
  CATEGORY_REPO: new Token<string>("categoryRepo"),
};

Container.set(DI.CATEGORY_REPO, dataSource.getRepository(Category));
Container.set(DI.PRODUCT_REPO, dataSource.getRepository(Product));
