import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms' ;
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CapativePipe } from './capative.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapativePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
