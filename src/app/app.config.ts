import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideServerRendering } from '@angular/platform-server';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideServerRendering(), provideClientHydration(), provideAnimationsAsync(), provideHttpClient(withFetch())]
};
