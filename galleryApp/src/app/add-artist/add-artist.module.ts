import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddArtistPageRoutingModule } from './add-artist-routing.module';

import { AddArtistPage } from './add-artist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddArtistPageRoutingModule
  ],
  declarations: [AddArtistPage]
})
export class AddArtistPageModule {}
