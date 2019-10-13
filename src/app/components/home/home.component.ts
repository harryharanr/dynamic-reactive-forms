import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = 'Head';

  @Output() getTitleText: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.getTitle();
  }
  getTitle() {
    this.getTitleText.emit(this.title);
  }
}
