import { HttpModule, Module } from '@nestjs/common';
import { ApiService } from './services/ApiService';
import { HttpConfigService } from '../config/HttpConfigService';
import { ConfigModule } from '../config/config.module';
import { JobService } from './services/job.service';
import { DatabaseModule } from '../database/database.module';
import { CountryResolver } from './graphql/resolvers/country.resolver';
import { LeagueResolver } from './graphql/resolvers/league.resolver';
import { BasicResolver } from './graphql/resolvers/basic.resolver';
import { FixtureResolver } from './graphql/resolvers/fixture.resolver';
import { OddResolver } from './graphql/resolvers/odd.resolver';

const providers = [
  ApiService,
  JobService,
  CountryResolver,
  LeagueResolver,
  BasicResolver,
  FixtureResolver,
  OddResolver
];
@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
      imports: [ConfigModule],
    }),
    DatabaseModule,
  ],
  providers,
})
export class CoreModule { }
