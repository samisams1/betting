import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { Model } from 'mongoose';
import { Bookmaker } from '../models/odds/Bookmaker';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BookmakerService extends BaseService {
  constructor(@InjectModel('Bookmaker') private readonly bookmakerModel: Model<Bookmaker>) {
    super(bookmakerModel);
  }
}
