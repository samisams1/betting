import { Base } from '../models/Base';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
export class BaseService {
  constructor(private readonly model: Model<Base>) {
  }
  findAll(conditions?) {
    return this.model.find(conditions);
  }
  findOne(id) {
    return this.model.findOne({id});
  }
  createOne(body): Promise<Base> {
    return this.model.create(body);
  }
  createMany(body) {
    return this.model.insertMany(body);
  }
  updateOne(id, newData): Promise<Base> {
    return this.model.findOneAndUpdate({_id: id}, {$set: newData}, {upsert: true, new: true}).exec();
  }
  deleteOne(id): Promise<any> {
    return this.model.deleteOne({_id: id}).exec();
  }
}
