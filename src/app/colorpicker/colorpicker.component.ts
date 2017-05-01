import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.css']
})
export class ColorpickerComponent {

  @Output() colorJson = new EventEmitter<String>();
  @Output() colorRgb = new EventEmitter<String>();
  
  nomColor1 = "Vermell";
  nomColor2 = "Verd";
  nomColor3 = "Blau";
  color1 = 0;
  color2 = 0;
  color3 = 0;

  constructor() { }

  llencarUpdate() {
    this.colorJson.emit("{\"" + this.nomColor1 + "\": \"" + this.color1 + "\",\"" + this.nomColor2 + "\": \"" + this.color2 + "\",\"" + this.nomColor3 + "\": \"" + this.color3 + "\"}");
	this.colorRgb.emit("RGB(" + this.color1 + ", " + this.color2 + ", " + this.color3 + ")");
  }

  carregarColor1(event) {
    this.color1 = event;
	this.llencarUpdate();
  }

  carregarColor2(event) {
    this.color2 = event;
	this.llencarUpdate();
  }

  carregarColor3(event) {
	this.color3 = event;
	this.llencarUpdate();
  }
  
}
