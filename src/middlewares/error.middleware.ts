import type { Middleware } from "@oak/oak";
import { BaseError } from "../errors/base.error.ts";

export const catch404: Middleware = (ctx) => {
  ctx.response.status = 404;
  ctx.response.body = {
    message: "Route Not Found",
    httpCode: 404,
  };
};

export const catchError: Middleware = async (ctx, next) => {
  try {
    await next();
  } catch (error: any) {
    //console.log(error);

    if (error instanceof BaseError) {
      ctx.response.status = error.httpCode;
      ctx.response.body = error.serialize();
    } else {
      ctx.response.status = 500;
      ctx.response.body = {
        httpCode: 500,
        message: "Internal Server Error",
      };
    }
  }
};
