import { Base } from './Base';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


export class Timezone extends Base {
  @Prop()
  name: string;
}
export const TimezoneSchema = SchemaFactory.createForClass(Timezone);
