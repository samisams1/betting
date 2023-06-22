import {Resolver, Query, Args, ResolveProperty, Parent} from '@nestjs/graphql';
import { Basic } from '../type/Basic';
import { CountryService } from '../../../database/services/country.service';
import { LeagueService } from '../../../database/services/league.service';
import { FixtureService } from '../../../database/services/fixture.service';
import { Country } from '../../../database/models/Country';
import { Fixture } from '../../../database/models/fixtures/Fixture';

@Resolver(of => Basic)
export class BasicResolver {
  constructor(
    private readonly countryService: CountryService,
    private readonly fixtureService: FixtureService,
  ) {}
  @Query(returns => Basic)
  basic() {
    return {
      countries: this.countries(),
      liveFixtures: this.liveFixtures(),
      topFixtures: this.topFixtures(),
    };
  }
  /**
   * fetch countries having available fixtures
   */
  @Query(returns => [Country])
  countries() {
    return this.countryService.findAll({isAvailable: true});
  }

  /**
   * fetch live fixtures, status != NS
   */
  @Query(returns => [Fixture])
  liveFixtures() {
    return this.fixtureService.findAll();
  }

  /**
   * top fixtures?
   * - sort by date
   * - max 10
   * - could be generated from value of order in leagues
   */
  @Query(returns => [Fixture])
  topFixtures() {
    return this.fixtureService.findAll();
  }
}
