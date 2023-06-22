import { Cron, CronExpression } from '@nestjs/schedule';

interface ApiEndPoint {
  url: string;
  params: any;
}
export const api = {
  status: {
    url: '/status',
    rc: 0, // recommended call per day
    cron: CronExpression.EVERY_DAY_AT_11PM,
  },
  countries: {
    url: '/countries',
    rc: 1,
    params: ['name', 'code', 'search'],
    cron: CronExpression.EVERY_DAY_AT_MIDNIGHT,
  },
  seasons: { // used as filters in other end points
    url: '/leagues/seasons',
    rc: 1,
    cron: '',
  },
  leagues: {
    url: '/leagues',
    rc: 1,
    params: ['id', 'name', 'country', 'code', 'season', 'team', '' ],
    cron: CronExpression.EVERY_DAY_AT_NOON,
  },
  timezones: {
    url: '/timezones',
  },
  fixtures: {
    url: '/fixtures',
    cron: CronExpression.EVERY_4_HOURS, // to be updated
  },
  bets: {
    url: '/odds/bets',
    cron: CronExpression.EVERY_WEEK,
  },
  bookmakers: {
    url: '/odds/bookmakers',
    cron: CronExpression.EVERY_WEEK,
  },
  odds: {
    url: '/odds',
    cron: CronExpression.EVERY_5_HOURS,
  },
};
