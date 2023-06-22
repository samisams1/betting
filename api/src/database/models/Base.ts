import { Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class Base extends Document {
  @Field(returns => ID)
  @Prop({ required: true })
  _id: string;

  @Field()
  @Prop()
  createdAt: string;

  @Field()
  @Prop()
  updatedAt: string;
}
