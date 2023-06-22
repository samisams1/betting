import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Base } from './Base';

interface ApiAccount {
  firstName: string;
  lastName: string;
  email: string;
}

interface ApiSubscription {
  plan: string;
  end: string;
  active: boolean;
}

interface ApiRequests {
  current: number;
  limit_day: number;
}

@Schema()
export class ApiStatus extends Base {
  @Prop()
  account: ApiAccount;

  @Prop()
  subscription: ApiSubscription;

  @Prop()
  requests: ApiRequests;
}

export const ApiStatusSchema = SchemaFactory.createForClass(ApiStatus);
