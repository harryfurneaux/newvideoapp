// payment.controller.ts
import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { PaymentService } from '../services/payment.service';
import { CreateSubscriptionDto } from '../dtos/subscription.dto';
import { CreateCustomerDto } from '../dtos/create-customer.dto';

@Controller('stripe')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('create-customer')
  async createCustomer(
    @Body(ValidationPipe) createCustomerDto: CreateCustomerDto,
  ): Promise<{ customerId: string }> {
    const customerId = await this.paymentService.createCustomer(
      createCustomerDto,
    );
    return { customerId };
  }

  @Post('subscribe')
  async createSubscription(
    @Body(ValidationPipe) subscriptionDto: CreateSubscriptionDto,
  ) {
    try {
      const { user_id, paymentMethod, priceId } = subscriptionDto;

      const subscriptionResponse = await this.paymentService.createSubscription(
        user_id,
        paymentMethod,
        priceId,
      );

      return subscriptionResponse;
    } catch (error) {
      return { error: error.message };
    }
  }
}
