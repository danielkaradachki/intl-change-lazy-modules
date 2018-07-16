import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { IntlService, CldrIntlService } from '@progress/kendo-angular-intl';

import { AppComponent } from './app.component';

import '@progress/kendo-angular-intl/locales/en/all';
import '@progress/kendo-angular-intl/locales/bg/all';
import '@progress/kendo-angular-intl/locales/de/all';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InputsModule,
    BrowserAnimationsModule,
    DateInputsModule
  ],
  providers: [ CldrIntlService, {
      provide: IntlService,
      useExisting: CldrIntlService
  }, {
      provide: LOCALE_ID,
      useValue: 'en-US'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
