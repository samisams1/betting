import {Resolver, Query, Args, ResolveProperty, Parent} from '@nestjs/graphql';
import { Country } from '../../../database/models/Country';
import { CountryService } from '../../../database/services/country.service';
import { League } from '../../../database/models/League';
import { LeagueService } from '../../../database/services/league.service';
@Resolver(of => Country)
export class CountryResolver {
  constructor(
    private readonly countryService: CountryService,
    private readonly leagueService: LeagueService,
    ) {
  }
  @Query(returns => [Country])
  countries() {
    return this.countryService.findAll();
  }
  @Query(returns => Country)
  country(@Args('name') name: string) {
   return this.countryService.findOneByName(name);
  }
  @ResolveProperty(returns => [League])
  leagues(@Parent() country) {
    return this.leagueService.findAll({country: country.name, isAvailable: true});
  }
}
