import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndexLoteriaComponent, LoteriaGeral } from './components';
import { LotofacilComponent } from './components/lotofacil/lotofacil.component';

@NgModule({
  declarations: [IndexLoteriaComponent, LoteriaGeral, LotofacilComponent],
  imports: [CommonModule, RouterModule],
})
export class LoteriaModule {}
