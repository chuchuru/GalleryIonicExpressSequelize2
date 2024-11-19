import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPicturesPage } from './my-pictures.page';
import { AddPicturesPage } from '../add-pictures/add-pictures.page';

const routes: Routes = [
  {
    path: '',
    component: MyPicturesPage
  },
  {
  path: '',
  component: AddPicturesPage
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPicturesPageRoutingModule {}
