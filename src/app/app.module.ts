import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoteriaModule } from './modules';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LoteriaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
