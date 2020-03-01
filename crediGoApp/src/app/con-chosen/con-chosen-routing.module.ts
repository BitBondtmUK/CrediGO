import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConChosenPage } from './con-chosen.page';

const routes: Routes = [
  {
    path: '',
    component: ConChosenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConChosenPageRoutingModule {}
