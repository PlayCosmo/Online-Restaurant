import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { InterceptService } from './intercept.service';



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),

     provideHttpClient(withInterceptorsFromDi()),
     {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptService,
      multi:true
  }
    ]
};
