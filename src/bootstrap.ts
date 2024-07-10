import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ShellAppComponent } from './app/shell-app.component';

bootstrapApplication(ShellAppComponent, appConfig)
  .catch((err) => console.error(err));
