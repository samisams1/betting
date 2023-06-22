import { Injectable } from '@nestjs/common';
import { Cron, NestSchedule } from 'nest-schedule';
import { ApiService } from './ApiService';
import { CountryService } from '../../database/services/country.service';
import { CronExpression } from '@nestjs/schedule';
/*
 * * * * * *
 | | | | | |
 | | | | | day of week
 | | | | month
 | | | day of month
 | | hour
 | minute
 second (optional)
 */
@Injectable()
export class JobService extends NestSchedule {
  constructor(
    private readonly apiService: ApiService,
    private readonly countryService: CountryService,
    ) {
    super();
  }
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  country() {
   // const countries = this.apiService.countries();
  //  console.log('hello world');
  }
  @Cron(CronExpression.EVERY_DAY_AT_NOON)
  leagues() {
    const countries = this.apiService.countries();
  }

  @Cron(CronExpression.EVERY_4_HOURS)
  fixtures() {
  //  const countries = this.apiService.countries();
  }
  @Cron(CronExpression.EVERY_5_HOURS)
  odds() {
   // const countries = this.apiService.countries();
  }
  @Cron(CronExpression.EVERY_WEEK)
  bets() {
   // const countries = this.apiService.countries();
  }
  @Cron(CronExpression.EVERY_WEEK)
  bookmakers() {
 //   const countries = this.apiService.countries();
  }
  @Cron(CronExpression.EVERY_DAY_AT_11PM)
  status() {
   // const countries = this.apiService.countries();
  }
}
