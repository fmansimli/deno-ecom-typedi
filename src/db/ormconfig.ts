import type { DataSourceOptions } from "typeorm";

import { Product } from "../_modules/products/entities/product.entity.ts";
import { Category } from "../_modules/categories/entities/category.entity.ts";

const dbOptions: DataSourceOptions = {
  type: "sqlite",
  database: "db.sqlite",
  logging: ["query", "error"],
  entities: [Product, Category],
  migrations: ["./src/migrations/*.{ts,js}"],
  subscribers: ["./src/subscribers/*.{ts,js}"],
  migrationsTableName: "app_migrations",
  maxQueryExecutionTime: 2000,
  migrationsRun: false,
  synchronize: true,
  dropSchema: false,
};

export default dbOptions;
