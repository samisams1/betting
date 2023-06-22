import { HttpService, Injectable } from '@nestjs/common';
import moment = require('moment');
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Country } from '../../database/models/Country';

@Injectable()
export class ApiService {
  baseApiUrl = 'https://v3.football.api-sports.io';
  constructor(private httpService: HttpService) {
   // this.weekFixtures().subscribe(r => console.log(r));
  }
  getData(endpoint, params) {
    return this.httpService
      .get(`${this.baseApiUrl}${endpoint}`, {params})
      .pipe(
        map(response => response.data.response),
      );
  }
  apiStatus() {
    return '';
  }
  countries(): Observable<Country[]> {
    return this.getData('/countries', {});
  }
  leagues() {
    return this.getData('/leagues', {current: true});
  }
  fixtures() {
  //  const d = moment().add(8, 'days').format('YYYY-MM-DD').calendar();
    return this.getData('/fixtures',
      {
        timezone: 'Africa/Addis_Ababa',
        date:  moment().add(2, 'days').format('YYYY-MM-DD'),
        status: 'NS', // Not Started
      });
  }
  liveFixtures() {
    return this.getData('/fixtures', {live: 'all'});
  }
  odds(date) {
    const params = {
      date,
      season: Number(moment().format('YYYY')) - 1,
      timezone: 'Africa/Addis_Ababa',
      bookmaker: 8,
    };
  }
  bookmakers() {
    return this.getData('/odds/bookmakers', {});
  }
  bets() {
    return this.getData('/odds/bets', {});
  }
}
