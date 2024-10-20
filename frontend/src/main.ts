import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; 
import { HttpClientModule, provideHttpClient, withFetch} from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    HttpClientModule,
    provideHttpClient(withFetch())
  ]
}).catch(err => console.error(err));
