import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { StudentPageComponent } from './app/pages/student-page/student-page.component';

bootstrapApplication(StudentPageComponent, appConfig)
  .catch((err) => console.error(err));
