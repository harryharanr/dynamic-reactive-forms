import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <p>
      button works!
    </p>
  `,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
