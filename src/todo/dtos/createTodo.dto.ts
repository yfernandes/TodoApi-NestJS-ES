import { IsBoolean, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  readonly title!: string;

  @IsBoolean()
  readonly done?: boolean;

  @IsString()
  readonly description?: string;
}
