import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorpickerComponent} from './colorpicker/colorpicker.component';
import { ColorComponent} from './colorpicker/color/color.component';

@NgModule({
  declarations: [
    AppComponent,
	ColorpickerComponent,
	ColorComponent
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
