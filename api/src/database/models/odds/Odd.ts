import { Base } from '../Base';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Bet {
  @Field(returns => Number)
  id: number;

  @Field()
  name: string;

  @Field(returns => [Value])
  values: Value[];
}

@ObjectType()
export class Value {
  @Field()
  value: string;
  @Field()
  odd: string;
}

@ObjectType()
@Schema()
export class Odd extends Base {
  @Field(returns => Number)
  @Prop()
  league: number;

  @Field(returns => Number)
  @Prop()
  fixture: number;

  @Field(returns => Number)
  @Prop()
  bookmaker: number;

  @Field(returns => [Bet])
  @Prop()
  bets: Bet[];
}

export const OddSchema = SchemaFactory.createForClass(Odd);
