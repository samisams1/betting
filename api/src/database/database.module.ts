import { Module } from '@nestjs/common';
import { ApiStatusSchema } from './models/ApiStatus';
import { MongooseModule } from '@nestjs/mongoose';
import { CountrySchema } from './models/Country';
import { LeagueSchema } from './models/League';
import { TimezoneSchema } from './models/Timezone';
import { FixtureSchema } from './models/fixtures/Fixture';
import { BetTypeSchema } from './models/odds/BetType';
import { BookmakerSchema } from './models/odds/Bookmaker';
import { OddSchema } from './models/odds/Odd';
import { ApiStatusService } from './services/apiStatus.service';
import { BetTypeService } from './services/betType.service';
import { BookmakerService } from './services/bookmaker.service';
import { CountryService } from './services/country.service';
import { FixtureService } from './services/fixture.service';
import { LeagueService } from './services/league.service';
import { OddService } from './services/odd.service';
import { BaseService } from './services/base.service';

const models = [
  { name: 'ApiStatus', schema: ApiStatusSchema },
  { name: 'Country', schema: CountrySchema},
  { name: 'League', schema: LeagueSchema},
  { name: 'Timezone', schema: TimezoneSchema},
  { name: 'Fixture', schema: FixtureSchema},
  { name: 'BetType', schema: BetTypeSchema},
  { name: 'Bookmaker', schema: BookmakerSchema},
  { name: 'Odd', schema: OddSchema},
];

const services = [
  ApiStatusService,
  BetTypeService,
  BookmakerService,
  CountryService,
  FixtureService,
  LeagueService,
  OddService,
];
@Module({
  imports: [ MongooseModule.forFeature(models) ],
  providers: services,
  exports: services,
})
export class DatabaseModule {}
