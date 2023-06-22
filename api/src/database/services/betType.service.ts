import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { Model } from 'mongoose';
import { BetType } from '../models/odds/BetType';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BetTypeService extends BaseService {
  constructor(@InjectModel('BetType') private readonly betTypeModel: Model<BetType>) {
    super(betTypeModel);
  }
}
