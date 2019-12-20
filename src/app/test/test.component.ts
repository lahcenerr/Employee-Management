import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() count: number;

  @Output() countChanged: EventEmitter<number> = new EventEmitter();
  
  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  decrement() {
    this.count--;
    this.countChanged.emit(this.count);
  }
  
  public employee = [
    {
      "id": 1,
      "name": "Errich",
      "age": 33,
      "gender": "M"
    },
    {
      "id": 2,
      "name": "Naima",
      "age": 31,
      "gender": "F"
    },
    {
      "id": 3,
      "name": "name",
      "age": 1,
      "gender": "M"
    },
    {
      "id": 4,
      "name": "somename",
      "age": 50,
      "gender": "F"
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
