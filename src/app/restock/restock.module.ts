import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RestockPageRoutingModule } from './restock-routing.module';

import { RestockPage } from './restock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestockPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RestockPage]
})
export class RestockPageModule {}
