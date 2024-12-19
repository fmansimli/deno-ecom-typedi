import type { RouterContext } from "@oak/oak";
import { Service } from "typedi";

import { ProductsService } from "./products.service.ts";

@Service()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  async findAll(ctx: RouterContext<string>) {
    const products = await this.productsService.findAll();

    ctx.response.status = 200;
    ctx.response.body = {
      data: { products },
      meta: {},
    };
  }

  async findById(ctx: RouterContext<string>) {
    const id = Number(ctx.params.id);

    const product = await this.productsService.findById(id);

    ctx.response.status = 200;
    ctx.response.body = {
      data: { product },
      meta: {},
    };
  }
}
