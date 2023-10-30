import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditLibroPageRoutingModule } from './edit-libro-routing.module';

import { EditLibroPage } from './edit-libro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditLibroPageRoutingModule
  ],
  declarations: [EditLibroPage]
})
export class EditLibroPageModule {}
