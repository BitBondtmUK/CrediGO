import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab2Page } from './tab2.page';

//Para QR
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { AgmCoreModule } from '@agm/core';  

const routes: Routes = [
  {
    path: '',
    component: Tab2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxQRCodeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAsItvwpqZuZQcbDyM6Dy2cu_3Hoo_V1_I'
    })
  ],
  declarations: [Tab2Page],
})
export class Tab2PageModule {}
