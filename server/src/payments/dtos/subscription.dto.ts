// create-subscription.dto.ts
import { IsNotEmpty } from 'class-validator';

export class CreateSubscriptionDto {

  @IsNotEmpty()
  user_id: string;

  @IsNotEmpty()
  paymentMethod: string;

  @IsNotEmpty()
  priceId: string;
}
