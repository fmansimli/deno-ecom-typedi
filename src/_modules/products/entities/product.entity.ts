import { Column, Entity, ManyToMany } from "typeorm";

import { AppEntity } from "../../../entities/app.entity.ts";
import { Category } from "../../categories/entities/category.entity.ts";

@Entity()
export class Product extends AppEntity {
  @Column()
  public name: string;

  @Column()
  public description: string;

  @Column()
  public price: number;

  @Column()
  public stock: number;

  @Column()
  public imageUri: string;

  @ManyToMany(() => Category, (c) => c.products)
  public categories: Category[];
}
