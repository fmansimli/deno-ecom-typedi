import { DataSource } from "typeorm";
import dbOptions from "./ormconfig.ts";

export const dataSource = new DataSource(dbOptions);
