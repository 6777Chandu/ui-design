import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiPagePage } from './ui-page.page';

const routes: Routes = [
  {
    path: '',
    component: UiPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiPagePageRoutingModule {}
