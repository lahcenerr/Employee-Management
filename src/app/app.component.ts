import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeApp';
  counter = 5;

  countChangedHandler(count: number) {
    this.counter = count;
    console.log(count);
  }

  increment() {
    this.counter++;
  }
  
  decrement() {
    this.counter--;
  }

}
