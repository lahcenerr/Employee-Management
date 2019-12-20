import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { EmployeeService } from './../employee.service';
import { IEmployee } from '../employee';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})

export class AddemployeeComponent implements OnInit {
  public submitted = false;
  public errorMsg;
  public employee = {employeeId:'',
    firstname: '',
    lastname: '',
    department: '',
    salary: 0};
  
  constructor(private empService: EmployeeService, private router: Router) {
    
   }

  ngOnInit() {
  
  }
  onSelect(employee) {
    console.log(this.employee);
    this.router.navigate(['/employeelist', employee.employeeId]);
    console.log(employee.employeeId);
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.employee)
    this.empService.postEmployee(this.employee).subscribe(
    
    () => this.errorMsg = "error",
    () => console.log('the sequence completed!')
  )
  this.router.navigate(['/employeelist']);
  }
}

