import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeedetailsComponent} from './employeedetails/employeedetails.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
const routes: Routes = [
  { path: "", redirectTo: '/test', pathMatch: 'full' },
  { path: "test", component:TestComponent },
  { path: "employeelist", component:EmployeelistComponent },
  { path: 'employeelist/:id', component: EmployeedetailsComponent,
    children: [ {path: 'contact', component: EmployeeContactComponent } ]},
  { path: 'addemployee', component: AddemployeeComponent},
  { path: "**", component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
