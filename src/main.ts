import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { environment } from './environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import { MenuOutline, SearchOutline } from '@ant-design/icons-angular/icons';
import { routes } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

const icons = [MenuOutline, SearchOutline];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      NzIconModule
    ),
    { provide: NZ_ICONS, useValue: icons }
  ]
}).catch((err) => console.error(err));
