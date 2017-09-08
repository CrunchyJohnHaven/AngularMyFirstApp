import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [`
    .fifthPlus {
      background-color: blue;
      color: white;
    }
  `]
})
export class ListComponent implements OnInit {
  displayDetails = false;
  clickLog = [];
  clickCount = 0;

  constructor() { }

  ngOnInit() {
  }

  displayDetailsToggle() {
    if (this.displayDetails) {
      this.displayDetails = false;
    } else {
      this.displayDetails = true;
    }
    this.clickLog.push(++this.clickCount);
  }

}
