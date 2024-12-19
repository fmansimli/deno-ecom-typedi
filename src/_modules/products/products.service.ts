import { Service } from "typedi";

@Service()
export class ProductsService {
  async findAll() {
    return Promise.resolve([]);
  }

  async findById(id: number) {
    return Promise.resolve({ id });
  }
}
