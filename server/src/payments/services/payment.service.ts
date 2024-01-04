import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Payment } from '../entities/payment.entity';

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


  async createCheckoutSession(priceId: string, mode: 'payment' | 'subscription'): Promise<string> {
    const YOUR_DOMAIN = process.env.FRONT_END_URL;

    const session = await this.stripeClient.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode:'subscription',
      success_url: `${YOUR_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${YOUR_DOMAIN}/cancel`,
    });

    return session.id;
  }

  async getSessionData(sessionId: string): Promise<Stripe.Checkout.Session | null> {
    try {
      const session = await this.stripeClient.checkout.sessions.retrieve(sessionId);
      return session;
    } catch (error) {
      return null;
    }
  }

  async getCustomerBySessionId(sessionId: string): Promise<string | null> {
    const session = await this.getSessionData(sessionId);
    if (session && session.customer) {
      return session.customer as string;
    }
    return null;
  }

  async getPaymentMethodsByCustomerId(customerId: string): Promise<Stripe.ApiList<Stripe.PaymentMethod>> {
    return this.stripeClient.paymentMethods.list({
      customer: customerId,
      type: 'card',
    });
  }

  async getPaymentMethodById(paymentMethodId: string): Promise<Stripe.PaymentMethod | null> {
    try {
      const paymentMethod = await this.stripeClient.paymentMethods.retrieve(paymentMethodId);
      return paymentMethod;
    } catch (error) {
      return null;
    }
  }

  
}
