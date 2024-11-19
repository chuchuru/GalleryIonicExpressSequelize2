import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPicturesPageRoutingModule } from './add-pictures-routing.module';

import { AddPicturesPage } from './add-pictures.page';
import { Picture } from '../picture';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddPicturesPageRoutingModule
  ],
  declarations: [AddPicturesPage]
})
export class AddPicturesPageModule {}
