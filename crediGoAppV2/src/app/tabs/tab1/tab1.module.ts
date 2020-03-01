import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab1Page } from './tab1.page';

import { HomeResolver } from './tab1.resolver';

import { NgxQRCodeModule } from 'ngx-qrcode2';

import { NewPostPage } from '../../modals/new-post/new-post.page'

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    resolve:{
      data: HomeResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxQRCodeModule
  ],
  declarations: [Tab1Page, NewPostPage],
  entryComponents: [NewPostPage],
  providers: [
    HomeResolver
  ]
})
export class Tab1PageModule {}
