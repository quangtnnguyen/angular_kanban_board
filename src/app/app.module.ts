import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NavigationComponent } from './project/components/navigation/navigation/navigation.component';
import { NavbarLeftComponent } from './project/components/navigation/navbar-left/navbar-left.component';
import { ResizerComponent } from './project/components/navigation/resizer/resizer.component';
import { SidebarComponent } from './project/components/navigation/sidebar/sidebar.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavbarLeftComponent,
    ResizerComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
