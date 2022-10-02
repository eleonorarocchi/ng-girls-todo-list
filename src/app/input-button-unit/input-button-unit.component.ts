import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  title: string = 'Hello World';

  constructor() { 
  }
  
  ngOnInit(): void { 
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}
