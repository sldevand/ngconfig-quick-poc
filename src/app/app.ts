import { Component, inject, signal } from '@angular/core';
import { Config } from './config/config.interface';
import { ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private configService = inject(ConfigService);
  protected readonly title = signal('my-angular-app');
  apiUrl = this.configService.getConfig()?.apiUrl; 
}
