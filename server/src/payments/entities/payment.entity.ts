import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from '../../users/entities/user.entity';
import * as mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Payment extends Document {


  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user_id: User;

  @Prop()
  customer_id: string;



}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
