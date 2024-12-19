import { type ClassConstructor, plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import type { Middleware } from "@oak/oak";

import { ValidationError } from "../../errors/index.ts";

export function validateReq(dto: ClassConstructor<any>) {
  return async function (ctx, next) {
    const attrs = await ctx.request.body.json();

    const body = plainToInstance(dto, attrs);

    const errors = await validate(body, {
      forbidNonWhitelisted: false,
      whitelist: true,
    });

    if (errors.length > 0) {
      throw new ValidationError(errors);
    }

    ctx.state.body = body;

    await next();
  } as Middleware;
}
