import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Config } from './config.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: Config | null = null;

  constructor(private http: HttpClient) {}

  async loadConfig(): Promise<Config> {
    if (this.config) {
      return this.config;
    }
    
    this.config = await firstValueFrom(
      this.http.get<Config>('./assets/config.json')
    );

    return this.config;
  }

  getConfig(): Config | null {
    return this.config;
  }
}
