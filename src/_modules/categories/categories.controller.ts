import type { RouterContext } from "@oak/oak";
import { Service } from "typedi";

import { CategoriesService } from "./categories.service.ts";

@Service()
export class CategoriesController {
  constructor(private readonly ctgService: CategoriesService) {}

  async getAll(ctx: RouterContext<string>) {
    const categories = await this.ctgService.getAll();

    ctx.response.status = 200;
    ctx.response.body = {
      data: { categories },
      meta: {},
    };
  }

  async getById(ctx: RouterContext<string>) {
    const id = Number(ctx.params.id);
    const category = await this.ctgService.getById(id);

    ctx.response.status = 200;
    ctx.response.body = {
      data: { category },
      meta: {},
    };
  }

  async create(ctx: RouterContext<string>) {
    const body = ctx.state.body;
    const category = await this.ctgService.create(body);

    ctx.response.status = 201;
    ctx.response.body = {
      data: { category },
      meta: {},
    };
  }

  async updateById(ctx: RouterContext<string>) {
    const id = Number(ctx.params.id);
    const body = ctx.state.body;

    console.log(body);

    const category = await this.ctgService.updateById(id, body);

    ctx.response.status = 200;
    ctx.response.body = {
      data: { category },
      meta: {},
    };
  }

  async deleteById(ctx: RouterContext<string>) {
    const id = Number(ctx.params.id);
    const category = await this.ctgService.deleteById(id);

    ctx.response.status = 200;
    ctx.response.body = {
      data: { category },
      meta: {},
    };
  }
}
