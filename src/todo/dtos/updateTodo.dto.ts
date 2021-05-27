import { IsString } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  readonly todoId!: string;

  @IsString()
  readonly done?: string;

  @IsString()
  readonly title?: string;

  @IsString()
  readonly description?: string;
}
