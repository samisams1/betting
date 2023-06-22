import { Base } from '../Base';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class BetType extends Base {
  @Field()
  @Prop({unique: true})
  id: number;

  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop({default: false})
  available: boolean;
}

export const BetTypeSchema = SchemaFactory.createForClass(BetType);
