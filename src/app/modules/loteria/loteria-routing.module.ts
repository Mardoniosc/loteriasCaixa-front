import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexLoteriaComponent, LoteriaGeral } from './components';

export const routesLoteria: Routes = [
  {
    path: 'loteria',
    component: LoteriaGeral,
    children: [{ path: '', component: IndexLoteriaComponent }],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routesLoteria)],
  exports: [RouterModule],
})
export class LoteriaRoutingModule {}
