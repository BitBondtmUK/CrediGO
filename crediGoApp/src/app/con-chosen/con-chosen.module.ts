import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConChosenPageRoutingModule } from './con-chosen-routing.module';

import { ConChosenPage } from './con-chosen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConChosenPageRoutingModule
  ],
  declarations: [ConChosenPage]
})
export class ConChosenPageModule {}
