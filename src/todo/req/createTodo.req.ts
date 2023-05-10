import { IsBoolean, IsString } from "class-validator";

export class CreateTodoReq {
  @IsString()
  readonly title!: string;

  @IsBoolean()
  readonly done?: boolean;

  @IsString()
  readonly description?: string;
}
