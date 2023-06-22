import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { Model } from 'mongoose';
import { Country } from '../models/Country';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CountryService extends BaseService {
  constructor(@InjectModel('Country') private readonly countryModel: Model<Country>) {
    super(countryModel);
  }
  findOneByName(name): Promise<Country> {
    return this.countryModel.findOne({name}).exec();
  }
  async updateAvailable(name) {
    await this.countryModel.update({name}, {isAvailable: true});
  }
}
