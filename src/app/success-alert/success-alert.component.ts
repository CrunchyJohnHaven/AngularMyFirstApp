import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
    <h3>SUCCESS!!</h3>
  `,
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
