import { Injectable } from '@nestjs/common';
import { BetTypeService } from '../database/services/betType.service';
import { BookmakerService } from '../database/services/bookmaker.service';
import { CountryService } from '../database/services/country.service';
import { FixtureService } from '../database/services/fixture.service';
import { LeagueService } from '../database/services/league.service';
import { OddService } from '../database/services/odd.service';
import { ApiStatusService } from '../database/services/apiStatus.service';
import * as fs from 'fs';
import * as path from 'path';
import { file } from '@babel/types';

@Injectable()
export class SeedService {
  init = false;
  constructor(
    private readonly betService: BetTypeService,
    private readonly bookmakerService: BookmakerService,
    private readonly countryService: CountryService,
    private readonly fixtureService: FixtureService,
    private readonly leagueService: LeagueService,
    private readonly oddService: OddService,
    private readonly statusService: ApiStatusService,
  ) {
   // this.seedBets()
    // this.seedfixtures();
    this.seedData();
  }
  public getData(filename) {
    return JSON.parse(
      fs.readFileSync(path.join(__dirname + '../../../src/seed/data', filename), 'utf-8'));
  }
  async seedBets() {
    const filename = 'bets.json';
    const data = this.getData(filename);
    await this.betService.createMany(data.response);
  }
  async seedBookmakers() {
    const filename = 'bookmakers.json';
    const data = this.getData(filename);
    await this.bookmakerService.createMany(data.response);
  }
  async seedCountries() {
    const filename = 'countries.json';
    const data = this.getData(filename);
    await this.countryService.createMany(data.response);
  }
  async seedLeagues() {
    const filename = 'leagues.json';
    let data = this.getData(filename);
    data = data.response.map(league => ({
        id: league.league.id,
        name: league.league.name,
        type: league.league.type,
        logo: league.league.logo,
        country: league.country.name, current: true,
      }),
    );
    await this.leagueService.createMany(data);
  }
  async seedfixtures() {
    const filename = 'fixtures.json';
    let data = this.getData(filename);
    data = data.response.map(async (fixture) => {
     await this.leagueService.updateAvailable(fixture.league.name);
     await this.countryService.updateAvailable(fixture.league.country);
     await this.fixtureService.createMany(
       {
         id: fixture.fixture.id,
         referee: fixture.fixture.referee,
         timezone: fixture.fixture.timezone,
         date: fixture.fixture.date,
         timestamp: fixture.fixture.timestamp,
         periods: fixture.fixture.periods,
         status: fixture.fixture.status.short,
         league: fixture.league.id,
         teams: fixture.teams,
         goals: fixture.goals,
         score: fixture.score,
       });
    });
  }

  async seedOdds() {
    const filename = 'odds.json';
    let data = this.getData(filename);
    data = data.response.map(odd => ({
      league: odd.league.id,
      fixture: odd.fixture.id,
      bookmaker: odd.bookmakers[0].id,
      bets: odd.bookmakers[0].bets,
    }));
    await this.oddService.createMany(data);
  }
  async seedData() {
    if (!this.init) {
      await this.seedBets();
      await this.seedBookmakers();
      await this.seedCountries();
      await this.seedLeagues();
      await this.seedfixtures();
      await this.seedOdds();
    }
    this.init = true;
  }
}
