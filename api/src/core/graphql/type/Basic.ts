import { Country } from '../../../database/models/Country';
import { Fixture } from '../../../database/models/fixtures/Fixture';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Basic {
  @Field(returns => [Country])
  countries: Country[]; // having fixtures

  @Field(returns => [Fixture])
  liveFixtures: Fixture[];

  @Field(returns => [Fixture])
  topFixtures: Fixture[];
}
