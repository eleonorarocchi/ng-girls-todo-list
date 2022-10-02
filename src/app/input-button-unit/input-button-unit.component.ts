import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title: string = 'Hello World';

  constructor() { 
    console.log('in constructor');
    this.changeTitle('My First Angular App');
    console.log(this.title);
  }
  
  ngOnInit(): void { 
    setTimeout(() => {
      this.title = 'This is not the title you are looking for';
    }, 3000);
  }

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }
}