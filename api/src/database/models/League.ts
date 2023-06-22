import { Base } from './Base';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

interface Season {
  year: number;
  start: string;
  end: string;
  current: boolean;
}

/**
 * url: /leagues
 * updated several times a day. 1 call per hour is recommended.
 * for both cup and league
 */
@ObjectType()
@Schema()
export class League extends Base {
  @Field()
  @Prop({required: true, unique: true})
  id: string;

  @Field()
  @Prop({required: true})
  name: string;

  @Field()
  @Prop({required: true})
  type: string; // league or cup ?

  @Field()
  @Prop()
  logo: string;

  @Field()
  @Prop()
  country: string;

  @Field()
  @Prop()
  current: boolean; // is the league available? check for value of current in seasons last index

  @Field({nullable: true})
  @Prop()
  round: string; // current round can be found using the league id and current = true

  @Field()
  @Prop({default: false})
  isTop: boolean;

  @Field(returns => Number)
  @Prop({default: 0})
  order: number;

  @Prop({default: false})
  isAvailable: boolean;
}

export const LeagueSchema = SchemaFactory.createForClass(League);
