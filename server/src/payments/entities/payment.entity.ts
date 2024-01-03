import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from '../../users/entities/user.entity';
import * as mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Payment extends Document {

  @Prop()
  amount: number;

  @Prop()
  currency: string;

  @Prop()
  payment_method: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  // @Prop({ default: 'incomplete' }) 
  // payment_status: string;

}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
