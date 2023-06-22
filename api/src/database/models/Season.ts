import { Base } from './Base';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

class Season extends Base {
  @Prop()
  name: string;
}

export const SeasonSchema = SchemaFactory.createForClass(Season);
