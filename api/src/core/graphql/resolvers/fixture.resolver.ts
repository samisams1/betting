import { Fixture } from '../../../database/models/fixtures/Fixture';
import {Resolver, Query, Args, ResolveProperty, Parent} from '@nestjs/graphql';
import { FixtureService } from '../../../database/services/fixture.service';
import { Odd } from '../../../database/models/odds/Odd';
import { OddService } from '../../../database/services/odd.service';

@Resolver(of => Fixture)
export class FixtureResolver {
  constructor(
    private readonly fixtureService: FixtureService,
    private readonly oddService: OddService,
    ) {}
  @Query(returns => [Fixture])
  fixtures() {
    return this.fixtureService.findAll();
  }
  @Query(returns => Fixture)
  fixture(@Args('id') id: string) {
    return this.fixtureService.findOne(id);
  }
  @ResolveProperty(returns => [Odd])
  odds(@Parent() fixture) {
    // fitler the three needed bets type.
    console.log('hello  from fixture');
    return this.oddService.basicOdds(Number(fixture.id));
  }
}
