import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  IndexLoteriaComponent,
  LoteriaGeral,
  LotofacilComponent,
} from './components';

export const routesLoteria: Routes = [
  {
    path: 'loteria',
    component: LoteriaGeral,
    children: [
      { path: '', component: IndexLoteriaComponent },
      { path: 'lotofacil', component: LotofacilComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routesLoteria)],
  exports: [RouterModule],
})
export class LoteriaRoutingModule {}
