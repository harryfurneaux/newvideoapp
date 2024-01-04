// payment.controller.ts
import { Controller, Post, NotFoundException, Param, Get } from '@nestjs/common';
import { PaymentService } from '../services/payment.service';

@Controller('stripe')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}


  @Get('/create-checkout-session')
  async createCheckoutSession(): Promise<{ sessionId: string }> {
    const priceId = process.env.STRIPE_PLAN_ID
    const mode = 'subscription'; 

    const sessionId = await this.paymentService.createCheckoutSession(priceId,mode);
    return { sessionId };
  }

  @Get(':sessionId')
  async getPaymentDetails(@Param('sessionId') sessionId: string): Promise<any> {
    const sessionData = await this.paymentService.getSessionData(sessionId);

    if (!sessionData) {
      throw new NotFoundException('Session not found');
    }

    const customerId = await this.paymentService.getCustomerBySessionId(sessionId);

    if (!customerId) {
      throw new NotFoundException('Customer not found');
    }

    const paymentMethods = await this.paymentService.getPaymentMethodsByCustomerId(customerId);

    return {
      sessionId,
      sessionData,
      customerId,
      paymentMethods: paymentMethods.data,
    };
  }
}


