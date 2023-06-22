import {Resolver, Query, Args, ResolveProperty, Parent} from '@nestjs/graphql';
import { Odd } from '../../../database/models/odds/Odd';
import { OddService } from '../../../database/services/odd.service';

@Resolver(of => Odd)
export class OddResolver {
  constructor(private readonly oddService: OddService) {}
  @Query(returns => [Odd])
  odds() {
    return this.oddService.findAll();
  }
  @Query(returns => Odd)
  odd(@Args('id') id: string) {
    return this.oddService.findOne(id);
  }
}
