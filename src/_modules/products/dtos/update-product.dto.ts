import { IsString, MinLength, MaxLength, IsNumber, Min } from "class-validator";

export class UpdateProductDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  public name: string;

  @IsString()
  @MinLength(10)
  @MaxLength(255)
  public description: string;

  @IsNumber()
  @Min(0)
  public price: number;

  @IsNumber()
  @Min(0)
  public stock: number;
}
