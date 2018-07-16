import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { IntlService, CldrIntlService } from '@progress/kendo-angular-intl';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    InputsModule,
    DateInputsModule
  ],
  declarations: [CustomerListComponent],
  providers: [{
      provide: IntlService,
      useExisting: CldrIntlService
  }]
})
export class CustomersModule { }
