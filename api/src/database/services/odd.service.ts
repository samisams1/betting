import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { Model } from 'mongoose';
import { Odd, Bet } from '../models/odds/Odd';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OddService extends BaseService {
  constructor(@InjectModel('Odd') private readonly oddModel: Model<Odd>) {
    super(oddModel);
  }
  async basicOdds(fixture) {
    const odds = await this.oddModel.find({fixture});
    console.log(odds);
    const ids = [1, 12, 21];
    return odds.map(odd => ({...odd, bets: odd.bets.filter((bet) => ids.includes(bet.id))}));
  }
}
