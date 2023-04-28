import { ApiProperty } from '@nestjs/swagger';

export class CreateAnswerDto {
  @ApiProperty({
    description: 'The content of the answer',
    example:
      'A placeholder for a value that will be available in the future, allowing us to handle the result of an asynchronous task once it has completed or encountered an error.',
    required: true,
  })
  content: string;

  @ApiProperty({
    description: 'The UUIDr of the User who posted the question',
    example: 'be238107-891e-4f73-b5e9-82449a856b84',
    required: true,
  })
  postedBy: string;

  @ApiProperty({
    description: 'The UUID of the question',
    example: '599c9544-d8da-4761-a17f-d9c21eb5869c',
    required: true,
  })
  parentId: string;
}
