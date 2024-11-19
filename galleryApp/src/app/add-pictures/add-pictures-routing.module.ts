import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPicturesPage } from './add-pictures.page';

const routes: Routes = [
  {
    path: '',
    component: AddPicturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPicturesPageRoutingModule {}
