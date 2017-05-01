import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ColorpickerComponent } from './colorpicker/colorpicker.component';
import { ColorComponent } from './colorpicker/color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorpickerComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
