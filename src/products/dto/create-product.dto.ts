import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'Название товара',
  })
  title: string;

  @ApiProperty({
    description: 'Описание товара',
  })
  description: string;

  @ApiProperty({
    description: 'ID категории',
    minimum: 1,
  })
  categoryId: number;
}
