import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { Model } from 'mongoose';
import { ApiStatus } from '../models/ApiStatus';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ApiStatusService extends BaseService {
  constructor(@InjectModel('ApiStatus') private readonly apiStatusModel: Model<ApiStatus>) {
    super(apiStatusModel);
  }
}
