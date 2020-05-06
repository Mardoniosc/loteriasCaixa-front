import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  IndexLoteriaComponent,
  LoteriaGeral,
  LotofacilComponent,
} from './components';

@NgModule({
  declarations: [IndexLoteriaComponent, LoteriaGeral, LotofacilComponent],
  imports: [CommonModule, RouterModule],
})
export class LoteriaModule {}
