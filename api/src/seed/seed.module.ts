import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SeedService } from './seed.service';

@Module({
  imports: [DatabaseModule],
  providers: [SeedService],
})
export class SeedModule { }
