import { BaseService } from './base.service';
import { Model } from 'mongoose';
import { League } from '../models/League';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class LeagueService extends BaseService {
  constructor(@InjectModel('League') private readonly leagueModel: Model<League>) {
    super(leagueModel);
  }
  findByCountryName(name) {
    return this.leagueModel.find({country: name}).exec();
  }
  async updateAvailable(name) {
    await this.leagueModel.update({name}, {isAvailable: true});
  }
}
