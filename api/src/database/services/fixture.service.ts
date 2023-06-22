import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { Model } from 'mongoose';
import { Fixture } from '../models/fixtures/Fixture';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FixtureService extends BaseService {
  constructor(@InjectModel('Fixture') private readonly fixtureModel: Model<Fixture>) {
    super(fixtureModel);
  }
  findByLeague(id: number) {
    return this.fixtureModel.find({league: id}).exec();
  }
}
