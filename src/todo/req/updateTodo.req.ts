import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateTodoReq {
  @IsOptional()
  @IsString()
  readonly title?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsBoolean()
  readonly done?: string;
}
