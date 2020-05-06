import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndexLoteriaComponent, LoteriaGeral } from './components';

@NgModule({
  declarations: [IndexLoteriaComponent, LoteriaGeral],
  imports: [CommonModule, RouterModule],
})
export class LoteriaModule {}
