import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { MongooseConfigService } from './config/mongoose-config.service';

import { MongooseModule } from '@nestjs/mongoose';
import { CoreModule } from './core/core.module';
import { SeedModule } from './seed/seed.module';
import { ScheduleModule } from '@nestjs/schedule';
import { GraphqlOptions } from './config/graphql.options';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    MongooseModule.forRootAsync({useClass: MongooseConfigService, imports: [ConfigModule]}),
    // ScheduleModule.forRoot(),
    CoreModule,
    GraphQLModule.forRootAsync({useClass: GraphqlOptions}),
  // SeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

