import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHotToastConfig } from '@ngneat/hot-toast';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHotToastConfig(),
    importProvidersFrom([
      BrowserModule,
      BrowserAnimationsModule
    ])
    ]
};
