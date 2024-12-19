import { Container } from "npm:typedi";

export class AppDi {
  init() {
    Container.set("appDi", this);
  }
}

export const appDi = new AppDi();
