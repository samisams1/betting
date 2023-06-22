import { League } from '../../../database/models/League';
import {Resolver, Query, Args, ResolveProperty, Parent} from '@nestjs/graphql';
import { LeagueService } from '../../../database/services/league.service';
import { Fixture } from '../../../database/models/fixtures/Fixture';
import { FixtureService } from '../../../database/services/fixture.service';
@Resolver(of => League)
export class LeagueResolver {
  constructor(
    private readonly leagueService: LeagueService,
    private readonly fixtureService: FixtureService,
    ) {}

  @Query(returns => [League])
  leagues() {
    return this.leagueService.findAll();
  }
  @Query(returns => League)
  league(@Args('id') id: string) {
    return this.leagueService.findOne(id);
  }
  @ResolveProperty(returns => [Fixture])
  fixtures(@Parent() league) {
    return this.fixtureService.findByLeague(league.id);
  }
}
