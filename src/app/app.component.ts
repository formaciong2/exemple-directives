import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exemple de directives';
  colorJson = "{}";
  colorRgb = "RGB(0, 0, 0)";
  
  carregarColor(event) {
	  this.colorJson = event;
  }

  carregarColorRgb(event) {
	  this.colorRgb = event;
  }
}
