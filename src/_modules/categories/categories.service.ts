import { Inject, Service } from "typedi";
import { Repository } from "typeorm";
import { DI } from "../../container/di.ts";

import { Category } from "./entities/category.entity.ts";
import { NotFoundError } from "../../errors/index.ts";

import type { CreateCategoryDto } from "./dtos/create-category.dto.ts";
import type { UpdateCategoryDto } from "./dtos/update-category.dto.ts";

@Service()
export class CategoriesService {
  constructor(@Inject(DI.CATEGORY_REPO) private repo: Repository<Category>) {}

  async getAll() {
    return this.repo.find({});
  }

  async getById(id: number) {
    const category = await this.repo.findOneBy({ id });

    if (!category) {
      throw new NotFoundError("category not found");
    }

    return category;
  }

  async create(attrs: CreateCategoryDto) {
    const category = this.repo.create(attrs);
    return this.repo.save(category);
  }

  async updateById(id: number, attrs: UpdateCategoryDto) {
    const category = await this.repo.findOneBy({ id });

    if (!category) {
      throw new NotFoundError("category not found");
    }

    Object.assign(category, attrs);
    return this.repo.save(category);
  }

  async deleteById(id: number) {
    const category = await this.repo.findOneBy({ id });

    if (!category) {
      throw new NotFoundError("category not found");
    }

    return this.repo.remove(category);
  }
}
