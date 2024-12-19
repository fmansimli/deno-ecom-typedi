import { validateReq } from "../../../middlewares/factories/validation.factory.ts";

import { CreateCategoryDto } from "../dtos/create-category.dto.ts";
import { UpdateCategoryDto } from "../dtos/update-category.dto.ts";

export const validations = {
  create: validateReq(CreateCategoryDto),
  updateById: validateReq(UpdateCategoryDto),
};
