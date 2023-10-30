import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditLibroPage } from './edit-libro.page';

const routes: Routes = [
  {
    path: '',
    component: EditLibroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditLibroPageRoutingModule {}
