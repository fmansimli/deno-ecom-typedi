import { Column, Entity, JoinTable, ManyToMany } from "typeorm";

import { AppEntity } from "../../../entities/app.entity.ts";
import { Product } from "../../products/entities/product.entity.ts";

@Entity()
export class Category extends AppEntity {
  @Column()
  public name: string;

  @Column()
  public description: string;

  @JoinTable()
  @ManyToMany(() => Product, (p) => p.categories)
  public products: Product[];
}
