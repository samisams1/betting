import { Base } from './Base';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

/**
 * Update Frequency : This endpoint is updated each time a new league from a country not covered by the API is added.
 * Recommended Calls : 1 call per day.
 * if the name value is world code and flag will be null.
 */
@ObjectType()
@Schema()
export class Country extends Base {
  @Field()
  @Prop({unique: true})
  name: string;

  @Field({nullable: true})
  @Prop()
  code: string;

  @Field({nullable: true})
  @Prop()
  flag: string;

  @Field(returns => Number)
  @Prop({default: 0})
  order: number;

  @Prop({default: false})
  isAvailable: boolean;
}
export const CountrySchema = SchemaFactory.createForClass(Country);
