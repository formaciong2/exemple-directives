import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {

  @Output() color = new EventEmitter<number>();
  valorColor: number = 0;
  @Input()
  nomColor : String;

  constructor() { }

  canvi() {
	this.color.emit(this.valorColor);
  }
}
