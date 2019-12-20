import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { EmployeeService } from './../employee.service';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  public employees = [];
  public errorMsg;
  
  constructor(private empService: EmployeeService, private router: Router) {
    
   }

  ngOnInit() {
    this.empService.getEmployees().subscribe(
      (data) => this.employees = data,
      () => this.errorMsg = "no data found",
      () => console.log('the sequence completed!')
    )
  }
  onSelect(employee) {
    console.log(employee);
    this.router.navigate(['/employeelist', employee.employeeId]);
    console.log(employee.employeeId);
  }
  deleteEmployee(emp){
    console.log(emp.employeeId);
  }


}
