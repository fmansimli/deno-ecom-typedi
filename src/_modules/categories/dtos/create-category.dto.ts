import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateCategoryDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  public name: string;

  @IsString()
  @MinLength(10)
  @MaxLength(255)
  public description: string;
}
