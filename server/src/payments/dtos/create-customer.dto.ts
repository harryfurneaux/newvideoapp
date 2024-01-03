import { IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
    
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  name: string;
}
