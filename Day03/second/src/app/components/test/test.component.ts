import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  testData: string = "Child Data From Test Component"

  @Output() myEvent = new EventEmitter();
  constructor() {
   console.log("1-ctor")
  }
  ngOnInit(): void {
  this.myEvent.emit(this.testData)
  }
  

}
