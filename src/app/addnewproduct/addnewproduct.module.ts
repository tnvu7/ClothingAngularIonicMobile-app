import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AddnewproductPageRoutingModule } from './addnewproduct-routing.module';

import { AddnewproductPage } from './addnewproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnewproductPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddnewproductPage]
})
export class AddnewproductPageModule {}
