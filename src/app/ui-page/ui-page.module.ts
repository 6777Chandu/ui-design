import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UiPagePageRoutingModule } from './ui-page-routing.module';

import { UiPagePage } from './ui-page.page';

import { CustomerRideComponent } from '../components/customer-ride/customer-ride.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, UiPagePageRoutingModule],
  declarations: [UiPagePage, CustomerRideComponent],
})
export class UiPagePageModule {}
