import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrokenComponent } from './broken.component';
import { ChangeDetectOkComponent } from './change-detect-ok.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, BrokenComponent, ChangeDetectOkComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

}
