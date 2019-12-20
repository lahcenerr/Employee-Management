import { Component, OnInit } from '@angular/core';
// import {Location} from '@angular/common'; 
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  public employeeid;
  constructor(private router: Router, private route: ActivatedRoute) 
  {}

  backClicked() {
    this.router.navigate(['/employeelist']);
  }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.employeeid = id;
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id = params.get('id');
      this.employeeid = id;
      console.log(id);
    });
   
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route})
  }
  
}


