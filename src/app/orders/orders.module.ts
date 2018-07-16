import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { IntlService, CldrIntlService } from '@progress/kendo-angular-intl';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    InputsModule,
    DateInputsModule   
  ],
  declarations: [OrderListComponent],
  providers: [{
      provide: IntlService,
      useExisting: CldrIntlService
  }]
})
export class OrdersModule { }
