import { Injectable } from '@nestjs/common';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';
import { ConfigService } from './config.service';


@Injectable()
export class MongooseConfigService  implements MongooseOptionsFactory {
  constructor(private configService: ConfigService) {}
  createMongooseOptions(): MongooseModuleOptions {
    return {
     // uri: this.configService.databaseUrl,
      uri: this.configService.localDbUrl,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      retryAttempts: 8,
    };
  }
}
