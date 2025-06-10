import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // <--- ИЗМЕНИТЬ ЗДЕСЬ App на AppComponent

bootstrapApplication(AppComponent, appConfig) // <--- ИЗМЕНИТЬ ЗДЕСЬ App на AppComponent
  .catch((err) => console.error(err));