import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import  { MatButtonModule} from '@angular/material';
import { EmployeeService} from './employee.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HighlightDirective } from './highlight.directive';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { TemptransformPipe } from './temptransform.pipe';
import { FormsModule } from '@angular/forms';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddemployeeComponent } from './addemployee/addemployee.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HighlightDirective,
    EmployeelistComponent,
    TemptransformPipe,
    EmployeedetailsComponent,
    PageNotFoundComponent,
    EmployeeContactComponent,
    AddemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
