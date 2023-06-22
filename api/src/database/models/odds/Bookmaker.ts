import { Base } from '../Base';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class Bookmaker extends Base {
  @Field()
  @Prop({unique: true})
  id: number;

  @Field()
  @Prop({unique: true})
  name: string;
}

export const BookmakerSchema = SchemaFactory.createForClass(Bookmaker);
