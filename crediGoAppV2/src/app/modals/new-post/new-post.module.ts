import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewPostPage } from './new-post.page';

const routes: Routes = [
  {
    path: '',
    component: NewPostPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [Location],
  declarations: [NewPostPage]
})
export class NewPostPageModule {}
