import { Entity, Column } from "typeorm";
import { AppEntity } from "../../../entities/app.entity.ts";

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
}
