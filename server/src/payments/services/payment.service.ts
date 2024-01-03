import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Payment } from '../entities/payment.entity';
import { CreateCustomerDto } from '../dtos/create-customer.dto';

@Injectable()
export class PaymentService {
  private readonly stripeClient: Stripe;

  constructor(
    @InjectModel(Payment.name) private readonly paymentModel: Model<Payment>,
  ) {
    this.stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
    });
  }

  async createCustomer(createCustomerDto: CreateCustomerDto): Promise<string> {
    try {
      const { userId, email, name } = createCustomerDto;

      const customer = await this.stripeClient.customers.create({
        metadata: {
          userId,
          email,
          name,
        },
      });

      console.log('Customer created:', customer.id);
      return customer.id;
    } catch (error) {
      console.error('Error creating customer:', error.message);
      throw error;
    }
  }

  async createSubscription(
    userId: string,
    paymentMethod: string,
    priceId: string,
  ) {
    try {
      const subscription = await this.stripeClient.subscriptions.create({
        customer: userId,
        items: [
          {
            price: priceId,
          },
        ],
        default_payment_method: paymentMethod,
      });

      // Save 

      return { subscriptionId: subscription.id };
    } catch (error) {
      console.log('Error in createSubscription', error.message);
      return { error: error.message };
    }
  }
}
