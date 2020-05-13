import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  IndexLoteriaComponent,
  LoteriaGeral,
  LotofacilComponent,
  LotofacilResultsComponent,
} from './components';

import { ResultadosLoteriaService } from './services';

@NgModule({
  declarations: [
    IndexLoteriaComponent,
    LoteriaGeral,
    LotofacilComponent,
    LotofacilResultsComponent,
  ],
  imports: [CommonModule, RouterModule],
  providers: [ResultadosLoteriaService],
})
export class LoteriaModule {}
