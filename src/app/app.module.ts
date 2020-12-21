import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

import { NzIconModule } from 'ng-zorro-antd/icon';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import {
  HttpMethod,
  NG_ENTITY_SERVICE_CONFIG,
  NgEntityServiceGlobalConfig
} from '@datorama/akita-ng-entity-service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule.forRoot([]),
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, {
    provide: NG_ENTITY_SERVICE_CONFIG,
    useValue: {
      baseUrl: `${environment.apiUrl}`
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
