import { HttpModuleOptions, HttpModuleOptionsFactory, Injectable } from '@nestjs/common';
import { ConfigService } from './config.service';

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createHttpOptions(): HttpModuleOptions {
    return {
      timeout: 5000,
      maxRedirects: 5,
      headers: {
        'x-rapidapi-host': this.configService.x_rapidapi_host,
        'X-RapidAPI-Key': this.configService.x_rapidapi_key,
      },
    };
  }
}
