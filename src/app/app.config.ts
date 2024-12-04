import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { icons } from './icons-provider';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideNzIcons(icons), provideNzI18n(en_US), importProvidersFrom(FormsModule), provideAnimationsAsync(), provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"hello-peter-cdab7","appId":"1:1083541984894:web:75b80e9fbf751676bd6a2f","storageBucket":"hello-peter-cdab7.firebasestorage.app","apiKey":"AIzaSyApKt683xszTwINgBdrpQ7bR9vAmdRMFBI","authDomain":"hello-peter-cdab7.firebaseapp.com","messagingSenderId":"1083541984894","measurementId":"G-KMPS32D1TW"})), provideFirestore(() => getFirestore())]
};
